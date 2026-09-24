import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { llmComplete, extractJson, ANTI_HALLUCINATION_RULES } from "@/lib/ai";
import { retrieveEvidence, isSensitiveQuestion, detectLanguage } from "@/lib/retrieval";

/**
 * RAG pipeline (MASTER PROMPT Phase 7):
 * Question → Retrieval → Source Ranking → Evidence Selection →
 * Answer Generation → Citation Validation → Response
 */
export async function POST(req: NextRequest) {
  try {
    const { questionId } = await req.json();
    if (!questionId) return NextResponse.json({ error: "questionId is required" }, { status: 400 });

    const question = await db.question.findUnique({ where: { id: questionId }, include: { category: true } });
    if (!question) return NextResponse.json({ error: "Question not found" }, { status: 404 });

    if (question.isSensitive || isSensitiveQuestion(question.text)) {
      return NextResponse.json({
        error: "This is a sensitive personal legal matter. This platform provides educational, source-based information and does not replace a personalized fatwa from a qualified scholar. Please consult a local mufti.",
        sensitive: true,
      }, { status: 200 });
    }

    // 1. Hybrid retrieval
    const evidence = await retrieveEvidence(question.text, 12);
    const evidenceBlock = evidence.length > 0
      ? evidence.map((e, i) => `[${i + 1}] (${e.entityType}) ${e.title}\n${e.body}`).join("\n\n")
      : "NO EVIDENCE FOUND in the knowledge base.";

    const languageNote = question.language === "UR"
      ? "Answer primarily in Urdu (اردو) with Arabic terms preserved."
      : question.language === "AR"
        ? "Answer primarily in Arabic (العربية)."
        : "Answer in clear English, preserving Arabic terms where needed.";

    // 2. Answer generation with anti-hallucination rules
    const system = `You are the source-first answer engine of a scholarly Hanafi research platform.

${ANTI_HALLUCINATION_RULES}

${languageNote}

Structure your answer following the platform's Question-Answer Architecture. Respond with ONLY valid JSON:
{
  "directAnswer": "<direct answer, 1-3 sentences>",
  "hanafiPosition": "<the Hanafi position with scholarly classification (majority/minority/individual view)>",
  "aqeedahOrFiqh": "<AQEEDAH|FIQH|BOTH|NEITHER>",
  "quranEvidence": [{"surah": 0, "ayah": 0, "quote": "<from context ONLY>", "translation": "<from context ONLY>"}],
  "hadithEvidence": [{"collection": "", "number": "<from context ONLY or empty>", "quote": "", "grading": "<from context>", "disputed": false}],
  "classicalEvidence": [{"book": "", "scholar": "", "note": ""}],
  "laterEvidence": [{"book": "", "scholar": "", "note": ""}],
  "otherViews": "<other Sunni scholarly approaches, neutrally>",
  "commonObjection": "<the common objection if identifiable>",
  "scholarlyResponse": "<the scholarly response to the objection>",
  "disputed": "<what is actually disputed>",
  "practicalInfo": "<practical guidance>",
  "sources": ["<only source names present in the context>"],
  "confidence": "<HIGH|MEDIUM|LOW>",
  "unverifiedNote": "<if any attribution could not be verified, state it here; otherwise empty>"
}
Leave arrays empty rather than inventing content. NEVER fabricate references.`;

    const user = `QUESTION: ${question.text}
${question.claim ? `CLAIM WITHIN QUESTION: ${question.claim}` : ""}
${question.context ? `USER CONTEXT: ${question.context}` : ""}

RETRIEVED EVIDENCE FROM THE VERIFIED KNOWLEDGE BASE:
${evidenceBlock}`;

    let raw = await llmComplete(system, user);
    let parsed = extractJson<Record<string, unknown>>(raw);
    if (!parsed) {
      raw = await llmComplete(system + "\nOutput raw JSON only, no fences.", user);
      parsed = extractJson(raw);
    }
    if (!parsed || !parsed.directAnswer) {
      return NextResponse.json({ error: "Answer engine could not produce a structured result. Try rephrasing." }, { status: 502 });
    }

    // 3. Persist answer (editorial status AI_ASSISTED → requires review)
    const answer = await db.answer.create({
      data: {
        questionId,
        directAnswer: String(parsed.directAnswer ?? ""),
        hanafiPosition: (parsed.hanafiPosition as string) ?? null,
        aqeedahOrFiqh: (parsed.aqeedahOrFiqh as string) ?? null,
        quranEvidence: JSON.stringify(parsed.quranEvidence ?? []),
        hadithEvidence: JSON.stringify(parsed.hadithEvidence ?? []),
        classicalEvidence: JSON.stringify(parsed.classicalEvidence ?? []),
        laterEvidence: JSON.stringify(parsed.laterEvidence ?? []),
        otherViews: (parsed.otherViews as string) ?? null,
        commonObjection: (parsed.commonObjection as string) ?? null,
        scholarlyResponse: (parsed.scholarlyResponse as string) ?? null,
        disputed: (parsed.disputed as string) ?? null,
        practicalInfo: (parsed.practicalInfo as string) ?? null,
        sources: JSON.stringify(parsed.sources ?? []),
        status: "AI_ASSISTED",
        aiGenerated: true,
      },
    });

    await db.question.update({ where: { id: questionId }, data: { status: "AI_ANSWERED" } });

    return NextResponse.json({
      answer,
      confidence: parsed.confidence ?? "MEDIUM",
      unverifiedNote: parsed.unverifiedNote ?? "",
      kbEvidence: evidence.slice(0, 8),
    });
  } catch (err) {
    console.error("answers/generate error:", err);
    return NextResponse.json({ error: "Answer engine error. Please try again." }, { status: 500 });
  }
}
