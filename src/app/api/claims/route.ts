import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { llmComplete, extractJson, ANTI_HALLUCINATION_RULES, CLASSIFICATIONS } from "@/lib/ai";
import { retrieveEvidence } from "@/lib/retrieval";
import { rateLimitByIp, tooMany } from "@/lib/rate-limit";

export async function GET(req: NextRequest) {
  // ?id= → single record (deep links: #/claims/{id}, bookmarks, shared verdicts)
  const id = req.nextUrl.searchParams.get("id");
  if (id) {
    const claim = await db.claimCheck.findUnique({ where: { id } });
    if (!claim) return NextResponse.json({ error: "Claim check not found." }, { status: 404 });
    return NextResponse.json({ claim });
  }
  const take = Math.min(parseInt(req.nextUrl.searchParams.get("take") ?? "12"), 50);
  const claims = await db.claimCheck.findMany({ orderBy: { createdAt: "desc" }, take });
  return NextResponse.json({ claims });
}

/**
 * "Is This Really Hanafi?" — user submits: "Someone told me Hanafis believe ___."
 * System retrieves evidence from the knowledge base, classifies the claim,
 * and shows the evidence. Never a classification without an explanation.
 */
export async function POST(req: NextRequest) {
  const rl = rateLimitByIp(req, "claims", 8);
  if (!rl.ok) return tooMany(rl.retryAfter);
  try {
    const body = await req.json();
    const claim = (body.claim ?? "").toString().trim();
    const context = (body.context ?? "").toString().trim() || null;

    if (claim.length < 8) {
      return NextResponse.json({ error: "Please provide the claim you were told (at least a few words)." }, { status: 400 });
    }
    if (claim.length > 2000) {
      return NextResponse.json({ error: "Claim text is too long (max 2000 characters)." }, { status: 400 });
    }

    // 1. Retrieval — evidence from the verified knowledge base only
    const evidence = await retrieveEvidence(claim, 10);
    const evidenceBlock = evidence.length > 0
      ? evidence.map((e, i) => `[${i + 1}] (${e.entityType}) ${e.title}\n${e.body}`).join("\n\n")
      : "NO EVIDENCE FOUND in the knowledge base.";

    // 2. Classification with anti-hallucination rules
    const system = `You are the "Is This Really Hanafi?" verification engine of a scholarly Islamic research platform.

${ANTI_HALLUCINATION_RULES}

Your task: analyze the user's submitted claim about what "Hanafis believe" and classify it as ONE of:
${CLASSIFICATIONS.map((c) => `- ${c}`).join("\n")}

Respond with ONLY a valid JSON object (no markdown fences, no extra text):
{
  "classification": "<one of the enum values above>",
  "explanation": "<2-5 sentence scholarly explanation of WHY this classification>",
  "hanafiPosition": "<what the Hanafi position actually is, or 'insufficiently documented' if unknown>",
  "evidence": [{"title": "<source title from context ONLY>", "ref": "<reference from context ONLY>", "quote": "<short quote from context or empty>", "source": "<QURAN|HADITH|BOOK|FATWA|MISCONCEPTION|OBJECTION|COMPARISON|TOPIC>"}],
  "disagreement": "<what is disputed, if anything>",
  "confidence": "<HIGH|MEDIUM|LOW>"
}
If no evidence applies, return an empty evidence array and INSUFFICIENTLY_DOCUMENTED or UNSUPPORTED as appropriate. NEVER invent sources.`;

    const user = `CLAIM: "Someone told me Hanafis believe: ${claim}"
${context ? `ADDITIONAL CONTEXT FROM USER: ${context}` : ""}

RETRIEVED EVIDENCE FROM THE VERIFIED KNOWLEDGE BASE:
${evidenceBlock}`;

    let raw = await llmComplete(system, user);
    let parsed = extractJson<{
      classification: string;
      explanation: string;
      hanafiPosition?: string;
      evidence?: { title: string; ref?: string; quote?: string; source?: string }[];
      disagreement?: string;
      confidence?: string;
    }>(raw);

    // Retry once with stricter instruction if JSON parse fails
    if (!parsed) {
      raw = await llmComplete(system + "\nIMPORTANT: Output raw JSON only. No prose, no fences.", user);
      parsed = extractJson(raw);
    }
    if (!parsed || !parsed.classification) {
      return NextResponse.json(
        { error: "The verification engine could not produce a structured result. Please try rephrasing the claim." },
        { status: 502 }
      );
    }

    // Normalize classification
    const norm = parsed.classification.toUpperCase().replace(/[\s-]+/g, "_");
    const classification = (CLASSIFICATIONS as readonly string[]).includes(norm) ? norm : "INSUFFICIENTLY_DOCUMENTED";

    // 3. Persist + return (citation-validation layer: retrieved routes attached)
    const record = await db.claimCheck.create({
      data: {
        claim, context,
        classification,
        explanation: parsed.explanation ?? "",
        evidence: JSON.stringify({
          evidence: parsed.evidence ?? [],
          hanafiPosition: parsed.hanafiPosition ?? null,
          disagreement: parsed.disagreement ?? null,
          confidence: parsed.confidence ?? "MEDIUM",
          retrievedRoutes: evidence.slice(0, 6).map((e) => e.route),
        }),
        aiGenerated: true,
        status: "PUBLISHED",
      },
    });

    return NextResponse.json({
      id: record.id,
      claim, classification, explanation: parsed.explanation,
      hanafiPosition: parsed.hanafiPosition ?? null,
      disagreement: parsed.disagreement ?? null,
      confidence: parsed.confidence ?? "MEDIUM",
      evidence: parsed.evidence ?? [],
      kbEvidence: evidence.slice(0, 6),
    });
  } catch (err) {
    console.error("claims POST error:", err);
    return NextResponse.json({ error: "Verification engine error. Please try again." }, { status: 500 });
  }
}
