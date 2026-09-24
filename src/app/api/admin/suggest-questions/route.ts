import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { llmComplete, extractJson, ANTI_HALLUCINATION_RULES } from "@/lib/ai";
import { retrieveEvidence } from "@/lib/retrieval";
import { rateLimitByIp, tooMany } from "@/lib/rate-limit";

/**
 * "Suggest Common Questions" — AI analyses existing content (retrieval sample)
 * plus logged searches and proposes additional commonly-asked questions.
 * NOTHING is auto-published: suggestions land in the PENDING queue; admins
 * approve → a new Question row (status PENDING, flagged for research).
 */

interface Suggestion {
  question: string;
  rationale: string;
  categorySlug: string;
  subcategory?: string;
  difficulty?: string;
  clusterHint?: string;
}

export async function GET() {
  const suggestions = await db.questionSuggestion.findMany({ orderBy: { createdAt: "desc" }, take: 60 });
  const approvedSlugs = new Set(
    (await db.question.findMany({ where: { slug: { not: null } }, select: { slug: true } })).map((q) => q.slug)
  );
  return NextResponse.json({
    suggestions,
    bankCount: approvedSlugs.size,
  });
}

export async function POST(req: NextRequest) {
  const rl = rateLimitByIp(req, "suggest-questions", 4);
  if (!rl.ok) return tooMany(rl.retryAfter);
  try {
    const body = await req.json().catch(() => ({}));
    const focus = (body.focus ?? "").toString().slice(0, 200);

    // Build context: existing bank question titles + top searches + sample docs
    const existing = await db.question.findMany({
      where: { isCommon: true },
      select: { text: true, slug: true },
      orderBy: { clusterOrder: "asc" },
    });
    const searches = await db.searchLog.groupBy({
      by: ["query"], _count: { _all: true }, orderBy: { _count: { query: "desc" } }, take: 20,
    });
    const evidence = await retrieveEvidence(focus || "Hanafi fiqh aqeedah common questions", 6);
    const catList = await db.category.findMany({ select: { slug: true, nameEn: true }, orderBy: { order: "asc" } });

    const existingList = existing.map((q) => `- ${q.text}`).join("\n");
    const searchList = searches.map((s) => `${s.query} (×${s._count._all})`).join("; ") || "(no search logs yet)";

    const system = `${ANTI_HALLUCINATION_RULES}

You are the question-mining analyst of a Hanafi research platform. You propose NEW commonly-asked questions about the Hanafi maslak that are NOT yet in the library. Questions must be the kind real Muslims, students, and online discussions actually ask (beginner, practical, objection, misconception, comparison). Output ONLY JSON.`;

    const user = `EXISTING LIBRARY QUESTIONS (do NOT repeat these or trivial rewordings):
${existingList.slice(0, 200)}

RECENT SEARCH QUERIES (high demand signals — prefer proposing questions that answer these):
${searchList}

RETRIEVED PLATFORM CONTENT (themes to mine for follow-up questions):
${evidence.map((e) => `- ${e.title}: ${e.body.slice(0, 160)}`).join("\n") || "(none)"}

CATEGORIES AVAILABLE (categorySlug must be one of): ${catList.map((c) => c.slug).join(", ")}

${focus ? `EDITOR FOCUS: ${focus}` : ""}

Propose 8 NEW common questions. Return JSON array:
[{"question":"...","rationale":"why this is commonly asked / which search signal","categorySlug":"...","subcategory":"...","difficulty":"BEGINNER|INTERMEDIATE|ADVANCED","clusterHint":"optional cluster slug"}]`;

    const raw = await llmComplete(system, user, { temperature: 0.6 });
    const parsed = extractJson<Suggestion[]>(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      return NextResponse.json({ error: "AI returned no parseable suggestions." }, { status: 502 });
    }

    const catSlugs = new Set(catList.map((c) => c.slug));
    const existingTexts = existing.map((q) => normalize(q.text));
    const created: unknown[] = [];
    for (const s of parsed.slice(0, 8)) {
      if (!s.question || normalize(s.question).length < 12) continue;
      // Duplicate guard vs library AND vs existing pending suggestions
      if (existingTexts.some((t) => similarity(t, normalize(s.question)) > 0.62)) continue;
      const dupSuggestion = await db.questionSuggestion.findFirst({
        where: { question: { equals: s.question.trim() } },
      });
      if (dupSuggestion) continue;
      created.push(
        await db.questionSuggestion.create({
          data: {
            question: s.question.trim().slice(0, 400),
            rationale: (s.rationale ?? "").slice(0, 500),
            categorySlug: catSlugs.has(s.categorySlug) ? s.categorySlug : null,
            subcategory: s.subcategory?.slice(0, 120) ?? null,
            difficulty: ["BEGINNER", "INTERMEDIATE", "ADVANCED"].includes(s.difficulty ?? "") ? s.difficulty : null,
            clusterSlug: s.clusterHint?.slice(0, 80) ?? null,
            source: "AI",
          },
        })
      );
    }

    return NextResponse.json({ created: created.length, suggestions: created });
  } catch (err) {
    console.error("suggest-questions POST error:", err);
    return NextResponse.json({ error: "Could not generate suggestions." }, { status: 500 });
  }
}

/** PATCH: approve (creates a PENDING research question) or reject. */
export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const id = (body.id ?? "").toString();
    const action = body.action === "approve" ? "approve" : "reject";
    const suggestion = await db.questionSuggestion.findUnique({ where: { id } });
    if (!suggestion) return NextResponse.json({ error: "Not found" }, { status: 404 });

    if (action === "reject") {
      const updated = await db.questionSuggestion.update({
        where: { id }, data: { status: "REJECTED", reviewedNote: (body.note ?? "").toString().slice(0, 300) || null },
      });
      return NextResponse.json({ suggestion: updated });
    }

    // Approve → create a real question for the research pipeline (PENDING).
    const category = suggestion.categorySlug
      ? await db.category.findUnique({ where: { slug: suggestion.categorySlug } })
      : null;
    const question = await db.question.create({
      data: {
        text: suggestion.question,
        language: "EN",
        categoryId: category?.id ?? null,
        subcategory: suggestion.subcategory,
        difficulty: suggestion.difficulty,
        isCommon: false, // becomes common once answered & reviewed
        status: "PENDING",
      },
    });
    const updated = await db.questionSuggestion.update({
      where: { id },
      data: { status: "APPROVED", reviewedNote: `Created question ${question.id}` },
    });
    return NextResponse.json({ suggestion: updated, question });
  } catch (err) {
    console.error("suggest-questions PATCH error:", err);
    return NextResponse.json({ error: "Could not update suggestion." }, { status: 500 });
  }
}

// ─── Duplicate-detection helpers (shared with /api/admin/duplicates) ───
export function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1 && !STOP.has(t))
    .join(" ");
}
const STOP = new Set(["the", "a", "an", "is", "are", "do", "does", "did", "what", "why", "how", "in", "of", "to", "for", "on", "and", "or", "it", "its", "can", "i", "my", "me", "you", "your", "hanafis", "hanafi"]);
export function similarity(a: string, b: string): number {
  if (!a || !b) return 0;
  const sa = new Set(a.split(" ")); const sb = new Set(b.split(" "));
  let inter = 0;
  for (const t of sa) if (sb.has(t)) inter += 1;
  return inter / Math.max(sa.size, sb.size);
}
