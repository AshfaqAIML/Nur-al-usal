import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { ANTI_HALLUCINATION_RULES, CLASSIFICATIONS } from "@/lib/ai";
import { retrieveEvidence } from "@/lib/retrieval";
import { rateLimitByIp, tooMany } from "@/lib/rate-limit";
import { llmStream } from "@/lib/llm-stream";

/**
 * SSE streaming claim verification ("Is This Really Hanafi?" live variant).
 * POST {claim, context} → text/event-stream with events:
 *   status  {stage: retrieving|analyzing|verifying}
 *   delta   {text}       — streamed verdict draft as produced
 *   done    {result, kbEvidence}
 *   error   {error}
 *
 * The model writes a readable verdict draft (fixed `##` sections). While it
 * streams the user watches the engine work; on completion the draft is parsed
 * into the same structured result shape as POST /api/claims and persisted,
 * so the verdict card UI stays identical.
 */

const VERDICT_SYSTEM = `You are the "Is This Really Hanafi?" verification engine of a scholarly Islamic research platform.

${ANTI_HALLUCINATION_RULES}

Your task: analyze the user's submitted claim about what "Hanafis believe" and classify it as ONE of:
${CLASSIFICATIONS.map((c) => `- ${c}`).join("\n")}

Write your verdict as a readable draft using EXACTLY these section headings, in this order (omit no heading — write (none) for sections that do not apply):

## Verdict
<the classification enum exactly as listed above, alone on the first line>
<then 2-5 sentences explaining WHY this classification>

## Hanafi Position
<what the Hanafi position actually is — or "insufficiently documented" if unknown>

## Evidence
<typed bullets, one per source, ONLY from the provided context — invent nothing:
- [Q] Surah <surah>:<ayah> — "<quote exactly as in context>"
- [H] <Collection> <number exactly as in context> — "<quote>" (grading: <grading as in context>)
- [C] <Book> — <Scholar>: <note or quotation from context>
- [F] <Fatwa source/title> — <summary from context>
- [M] <Misconception title from context> — <how the context relates to the claim>
If evidence is insufficient, write a single line: This attribution could not be verified from the available sources.>

## Disagreement
<what is disputed, if anything — or (none)>`;

/** Normalize an emitted classification to the enum (tolerant matching). */
function normalizeClassification(text: string): string {
  const upper = text.toUpperCase().replace(/[\s-]+/g, "_");
  if ((CLASSIFICATIONS as readonly string[]).includes(upper)) return upper;
  // Tolerate partial echoes like "CLASSIFICATION: INCORRECTLY_ATTRIBUTED"
  for (const c of CLASSIFICATIONS) {
    if (upper.includes(c)) return c;
  }
  return "INSUFFICIENTLY_DOCUMENTED";
}

interface ParsedVerdict {
  classification: string;
  explanation: string;
  hanafiPosition: string | null;
  evidence: { title: string; ref?: string; quote?: string; source?: string }[];
  disagreement: string | null;
  confidence: string;
}

/** Parse the streamed verdict draft into the structured result shape. */
function parseVerdictDraft(raw: string): ParsedVerdict {
  const out: ParsedVerdict = {
    classification: "INSUFFICIENTLY_DOCUMENTED",
    explanation: "",
    hanafiPosition: null,
    evidence: [],
    disagreement: null,
    confidence: "MEDIUM",
  };
  if (!raw) return out;

  // Match known headings ANYWHERE (models sometimes emit one inline).
  const re = /##\s*(Verdict|Hanafi Position|Evidence|Disagreement)(?=\s|:|$)/gi;
  type Mark = { title: string; contentStart: number; headingStart: number };
  const marks: Mark[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(raw)) !== null) {
    marks.push({ title: m[1].replace(/\s+/g, " ").trim(), contentStart: m.index + m[0].length, headingStart: m.index });
  }
  const sections = new Map<string, string>();
  for (let i = 0; i < marks.length; i++) {
    const end = i + 1 < marks.length ? marks[i + 1].headingStart : raw.length;
    sections.set(marks[i].title.toLowerCase(), raw.slice(marks[i].contentStart, end).trim());
  }
  const get = (name: string) => sections.get(name.toLowerCase()) ?? "";
  const usable = (s: string) => (s && !/^\(none\)$/i.test(s.trim()) ? s : "");

  // Verdict: first non-empty line = classification, rest = explanation.
  const verdictLines = get("verdict").split("\n").map((l) => l.trim()).filter(Boolean);
  if (verdictLines.length > 0) {
    out.classification = normalizeClassification(verdictLines[0]);
    // If the first line was a clean enum, the rest is the explanation.
    if (verdictLines[0].length <= 40) {
      out.explanation = verdictLines.slice(1).join(" ").trim();
    } else {
      // Enum was embedded in prose — classify from full text, keep it all.
      out.classification = normalizeClassification(get("verdict"));
      out.explanation = verdictLines.join(" ").trim();
    }
  }
  if (!out.explanation) {
    // Model skipped the enum line — treat the whole verdict body as explanation.
    const body = get("verdict");
    if (body) {
      out.classification = normalizeClassification(body);
      out.explanation = body.replace(/```[a-z]*/g, "").trim().slice(0, 900);
    }
  }

  out.hanafiPosition = usable(get("hanafi position")) || null;

  // Evidence bullets.
  const evText = get("evidence");
  const insufficient = /could not be verified from the available sources/i.test(evText);
  if (evText && !insufficient) {
    for (const line of evText.split("\n")) {
      const l = line.trim().replace(/^[-*]\s*/, "");
      if (!l) continue;
      let match: RegExpMatchArray | null;
      if ((match = l.match(/^\[Q\]\s*(.+)$/))) {
        const body = match[1];
        const q = body.match(/^(Surah\s*\d+\s*[:.]\s*\d+)\s*[—–-]\s*"?(.*?)"?\s*$/i);
        out.evidence.push({
          title: q ? q[1].trim() : body.slice(0, 80),
          ref: q ? q[1].trim() : undefined,
          quote: q ? q[2].trim() : body,
          source: "QURAN",
        });
      } else if ((match = l.match(/^\[H\]\s*(.+)$/))) {
        const body = match[1];
        const h = body.match(/^(.+?)\s*[—–-]\s*"?(.*?)"?\s*(\(grading:[^)]*\))?\s*$/);
        out.evidence.push({
          title: h ? h[1].trim() : body.slice(0, 80),
          quote: h ? h[2].trim() : "",
          ref: h?.[3]?.replace(/[()]/g, "").trim() || undefined,
          source: "HADITH",
        });
      } else if ((match = l.match(/^\[C\]\s*(.+)$/))) {
        const body = match[1];
        const c = body.match(/^(.+?)\s*[—–-]\s*(.+?):\s*(.+)$/);
        out.evidence.push({
          title: c ? c[1].trim() : body.slice(0, 80),
          ref: c ? c[2].trim() : undefined,
          quote: c ? c[3].trim() : body,
          source: "BOOK",
        });
      } else if ((match = l.match(/^\[F\]\s*(.+)$/))) {
        const body = match[1];
        const f = body.match(/^(.+?)\s*[—–-]\s*(.+)$/);
        out.evidence.push({ title: (f ? f[1] : body).trim().slice(0, 80), quote: f ? f[2].trim() : "", source: "FATWA" });
      } else if ((match = l.match(/^\[M\]\s*(.+)$/))) {
        const body = match[1];
        const mm = body.match(/^(.+?)\s*[—–-]\s*(.+)$/);
        out.evidence.push({ title: (mm ? mm[1] : body).trim().slice(0, 80), quote: mm ? mm[2].trim() : "", source: "MISCONCEPTION" });
      } else if (l.length > 8 && !/^(sources?|evidence)$/i.test(l)) {
        out.evidence.push({ title: l.slice(0, 80), source: "BOOK" });
      }
    }
  }

  out.disagreement = usable(get("disagreement")) || null;

  // Confidence heuristic (mirrors the JSON endpoint's honest style).
  if (insufficient || /could not be verified/i.test(raw)) out.confidence = "LOW";
  else if (out.evidence.length > 0) out.confidence = "HIGH";

  return out;
}

export async function POST(req: NextRequest) {
  const rl = rateLimitByIp(req, "claims-stream", 8);
  if (!rl.ok) return tooMany(rl.retryAfter);

  let claim = "";
  let context: string | null = null;
  try {
    const body = await req.json();
    claim = (body.claim ?? "").toString().trim();
    context = (body.context ?? "").toString().trim() || null;
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }
  if (claim.length < 8) {
    return Response.json({ error: "Please provide the claim you were told (at least a few words)." }, { status: 400 });
  }
  if (claim.length > 2000) {
    return Response.json({ error: "Claim text is too long (max 2000 characters)." }, { status: 400 });
  }

  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const emit = (event: string, data: unknown) => {
        try { controller.enqueue(encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`)); } catch { /* client gone */ }
      };
      try {
        // 1. Retrieval
        emit("status", { stage: "retrieving" });
        const evidence = await retrieveEvidence(claim, 10);
        const evidenceBlock = evidence.length > 0
          ? evidence.map((e, i) => `[${i + 1}] (${e.entityType}) ${e.title}\n${e.body}`).join("\n\n")
          : "NO EVIDENCE FOUND in the knowledge base.";

        const user = `CLAIM: "Someone told me Hanafis believe: ${claim}"
${context ? `ADDITIONAL CONTEXT FROM USER: ${context}` : ""}

RETRIEVED EVIDENCE FROM THE VERIFIED KNOWLEDGE BASE:
${evidenceBlock}`;

        // 2. Streaming verdict draft
        emit("status", { stage: "analyzing" });
        let stage = "analyzing";
        const full = await llmStream(VERDICT_SYSTEM, user, {
          onDelta: (text) => {
            // Advance the stepper once the model reaches the citation section.
            if (stage === "analyzing" && /##\s*(Evidence|Disagreement)/i.test(text)) {
              stage = "verifying";
              emit("status", { stage });
            }
            emit("delta", { text });
          },
        });
        emit("status", { stage: "verifying" });

        // 3. Parse → structured result (same shape as POST /api/claims)
        const parsed = parseVerdictDraft(full);
        if (!parsed.explanation && parsed.evidence.length === 0) {
          emit("error", { error: "The verification engine could not produce a structured result. Please try rephrasing the claim." });
          return;
        }

        // 4. Persist (identical record shape to the non-streaming endpoint)
        const record = await db.claimCheck.create({
          data: {
            claim, context,
            classification: parsed.classification,
            explanation: parsed.explanation,
            evidence: JSON.stringify({
              evidence: parsed.evidence,
              hanafiPosition: parsed.hanafiPosition,
              disagreement: parsed.disagreement,
              confidence: parsed.confidence,
              retrievedRoutes: evidence.slice(0, 6).map((e) => e.route),
            }),
            aiGenerated: true,
            status: "PUBLISHED",
          },
        });

        emit("done", {
          result: {
            id: record.id,
            claim,
            classification: parsed.classification,
            explanation: parsed.explanation,
            hanafiPosition: parsed.hanafiPosition,
            disagreement: parsed.disagreement,
            confidence: parsed.confidence,
            evidence: parsed.evidence,
          },
          kbEvidence: evidence.slice(0, 6),
        });
      } catch (err) {
        console.error("claims/stream error:", err);
        emit("error", { error: "Verification engine error. Please try again." });
      } finally {
        try { controller.close(); } catch { /* already closed */ }
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}
