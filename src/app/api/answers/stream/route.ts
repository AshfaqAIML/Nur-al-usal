import { NextRequest } from "next/server";
import { db } from "@/lib/db";
import { ANTI_HALLUCINATION_RULES } from "@/lib/ai";
import { retrieveEvidence, isSensitiveQuestion } from "@/lib/retrieval";
import { rateLimitByIp, tooMany } from "@/lib/rate-limit";
import { llmStream } from "@/lib/llm-stream";

/**
 * SSE streaming answer generation (Phase 7 RAG pipeline, live variant).
 * POST {questionId} → text/event-stream with events:
 *   status  {stage: retrieving|generating|saving}
 *   delta   {text}          — streamed answer text as produced
 *   done    {answer, kbEvidence, confidence}
 *   error   {error, sensitive?}
 *
 * The model writes a readable, sectioned draft (fixed `##` headings with
 * typed evidence bullets). While it streams, the user watches the engine
 * work; on completion the draft is parsed back into the structured Answer
 * model and persisted with editorial status AI_ASSISTED (needs review).
 */

const READABLE_SYSTEM = (languageNote: string) => `You are the source-first answer engine of a scholarly Hanafi research platform.

${ANTI_HALLUCINATION_RULES}

${languageNote}

Write your answer as a readable draft using EXACTLY these section headings, in this order (omit no heading — write (none) for sections that do not apply):

## Direct Answer
<direct answer in 1-3 sentences>

## Hanafi Position
<the Hanafi position with scholarly classification: majority view / minority / individual scholar's view>

## Evidence
<typed bullets, one per source, ONLY from the provided context — invent nothing:
- [Q] Surah <surah>:<ayah> — "<quote exactly as in context>" (<translation exactly as in context>)
- [H] <Collection> <number exactly as in context> — "<quote>" (grading: <grading as in context>)
- [C] <Book> — <Scholar>: <note or quotation from context>
If evidence is insufficient, write a single line: This attribution could not be verified from the available sources.>

## Other Views
<other Sunni approaches, neutral and brief — or (none)>

## Objection & Response
**Objection:** <the common objection, if identifiable>
**Response:** <the scholarly response — or (none)>

## Practical Guidance
<practical guidance — or (none)>

## Sources
<one bullet per source name present in the context only:
- <source name>>`;

export async function POST(req: NextRequest) {
  const rl = rateLimitByIp(req, "answers-stream", 6);
  if (!rl.ok) return tooMany(rl.retryAfter);

  let questionId: string | undefined;
  try {
    ({ questionId } = await req.json());
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }
  if (!questionId) return Response.json({ error: "questionId is required" }, { status: 400 });

  const question = await db.question.findUnique({
    where: { id: questionId },
    include: { category: true },
  });
  if (!question) return Response.json({ error: "Question not found" }, { status: 404 });

  if (question.isSensitive || isSensitiveQuestion(question.text)) {
    return Response.json({
      error: "This is a sensitive personal legal matter. This platform provides educational, source-based information and does not replace a personalized fatwa from a qualified scholar. Please consult a local mufti.",
      sensitive: true,
    }, { status: 200 });
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
        const evidence = await retrieveEvidence(question.text, 12);
        const evidenceBlock = evidence.length > 0
          ? evidence.map((e, i) => `[${i + 1}] (${e.entityType}) ${e.title}\n${e.body}`).join("\n\n")
          : "NO EVIDENCE FOUND in the knowledge base.";

        const languageNote = question.language === "UR"
          ? "Answer primarily in Urdu (اردو) with Arabic terms preserved."
          : question.language === "AR"
            ? "Answer primarily in Arabic (العربية)."
            : "Answer in clear English, preserving Arabic terms where needed.";

        const user = `QUESTION: ${question.text}
${question.claim ? `CLAIM WITHIN QUESTION: ${question.claim}` : ""}
${question.context ? `USER CONTEXT: ${question.context}` : ""}

RETRIEVED EVIDENCE FROM THE VERIFIED KNOWLEDGE BASE:
${evidenceBlock}`;

        // 2. Streaming generation
        emit("status", { stage: "generating" });
        const full = await llmStream(READABLE_SYSTEM(languageNote), user, {
          onDelta: (text) => emit("delta", { text }),
        });

        // 3. Parse the readable draft → structured Answer model
        emit("status", { stage: "saving" });
        const parsed = parseReadableDraft(full);
        if (!parsed.directAnswer) {
          emit("error", { error: "Answer engine could not produce a structured result. Try rephrasing." });
          return;
        }

        const answer = await db.answer.create({
          data: {
            questionId: question.id,
            directAnswer: parsed.directAnswer,
            hanafiPosition: parsed.hanafiPosition,
            aqeedahOrFiqh: parsed.aqeedahOrFiqh,
            quranEvidence: JSON.stringify(parsed.quranEvidence),
            hadithEvidence: JSON.stringify(parsed.hadithEvidence),
            classicalEvidence: JSON.stringify(parsed.classicalEvidence),
            otherViews: parsed.otherViews,
            commonObjection: parsed.commonObjection,
            scholarlyResponse: parsed.scholarlyResponse,
            practicalInfo: parsed.practicalInfo,
            sources: JSON.stringify(parsed.sources),
            status: "AI_ASSISTED",
            aiGenerated: true,
          },
        });

        await db.question.update({ where: { id: question.id }, data: { status: "AI_ANSWERED" } });

        emit("done", {
          answer,
          kbEvidence: evidence.slice(0, 8),
          confidence: parsed.confidence,
        });
      } catch (err) {
        console.error("answers/stream error:", err);
        emit("error", { error: "Answer engine error. Please try again." });
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

/* ─── Readable-draft parser: `##` sections + typed evidence bullets ─── */

interface ParsedDraft {
  directAnswer: string;
  hanafiPosition: string | null;
  aqeedahOrFiqh: string | null;
  quranEvidence: { surah: number; ayah: number; quote: string; translation: string; ref?: string }[];
  hadithEvidence: { collection: string; number: string; quote: string; grading: string }[];
  classicalEvidence: { book: string; scholar: string; note: string }[];
  otherViews: string | null;
  commonObjection: string | null;
  scholarlyResponse: string | null;
  practicalInfo: string | null;
  sources: string[];
  confidence: string;
}

function parseReadableDraft(raw: string): ParsedDraft {
  const out: ParsedDraft = {
    directAnswer: "", hanafiPosition: null, aqeedahOrFiqh: null,
    quranEvidence: [], hadithEvidence: [], classicalEvidence: [],
    otherViews: null, commonObjection: null, scholarlyResponse: null,
    practicalInfo: null, sources: [], confidence: "MEDIUM",
  };
  if (!raw) return out;

  // Split into `## Heading` sections. Models sometimes emit a heading inline
  // at the end of a line ("...framing. ## Sources"), so match the known
  // heading vocabulary ANYWHERE, not only at line start.
  const re = /##\s*(Direct Answer|Hanafi Position|Evidence|Other Views|Objection\s*&\s*Response|Practical Guidance|Sources)(?=\s|:|$)/gi;
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

  out.directAnswer = get("direct answer");
  out.hanafiPosition = usable(get("hanafi position")) || null;
  out.otherViews = usable(get("other views")) || null;
  out.practicalInfo = usable(get("practical guidance")) || null;

  // Evidence bullets: - [Q] / - [H] / - [C]
  const evText = get("evidence");
  const insufficient = /could not be verified from the available sources/i.test(evText);
  if (evText && !insufficient) {
    for (const line of evText.split("\n")) {
      const l = line.trim().replace(/^[-*]\s*/, "");
      if (!l) continue;
      let match: RegExpMatchArray | null;
      if ((match = l.match(/^\[Q\]\s*(.+)$/))) {
        const body = match[1];
        const q = body.match(/^Surah\s*(\d+)\s*[:.]\s*(\d+)\s*[—–-]\s*"?(.*?)"?\s*\(([^()]*)\)\s*$/);
        if (q) out.quranEvidence.push({ surah: Number(q[1]), ayah: Number(q[2]), quote: q[3].trim(), translation: q[4].trim(), ref: `Surah ${q[1]}:${q[2]}` });
        else out.classicalEvidence.push({ book: "Qur'an", scholar: "", note: body });
      } else if ((match = l.match(/^\[H\]\s*(.+)$/))) {
        const body = match[1];
        const h = body.match(/^([\S][\w'’\- ]*?)\s+(\S+)\s*[—–-]\s*"?(.*?)"?\s*\(([^()]*)\)\s*$/);
        if (h) out.hadithEvidence.push({ collection: h[1].trim(), number: h[2].trim(), quote: h[3].trim(), grading: h[4].replace(/^grading:\s*/i, "").trim() });
        else out.classicalEvidence.push({ book: "Hadith", scholar: "", note: body });
      } else if ((match = l.match(/^\[C\]\s*(.+)$/))) {
        const body = match[1];
        const c = body.match(/^(.+?)\s*[—–-]\s*(.+?):\s*(.+)$/);
        if (c) out.classicalEvidence.push({ book: c[1].trim(), scholar: c[2].trim(), note: c[3].trim() });
        else out.classicalEvidence.push({ book: body.slice(0, 80), scholar: "", note: body });
      } else if (/^\[\w+\]/.test(l)) {
        out.classicalEvidence.push({ book: "Context evidence", scholar: "", note: l.replace(/^\[\w+\]\s*/, "") });
      }
    }
  }

  // Objection & Response: **Objection:** … **Response:** …
  const ob = get("objection & response");
  if (ob) {
    const obM = ob.match(/\*\*Objection:\*\*([\s\S]*?)(\*\*Response:\*\*|$)/i);
    const reM = ob.match(/\*\*Response:\*\*([\s\S]*)/i);
    out.commonObjection = usable(obM?.[1]?.trim() ?? "") || null;
    out.scholarlyResponse = usable(reM?.[1]?.trim() ?? "") || null;
    if (!out.commonObjection && !out.scholarlyResponse && !/^\(none\)$/i.test(ob.trim())) {
      out.scholarlyResponse = ob;
    }
  }

  // Aqeedah or Fiqh heuristic from the draft content.
  const combined = `${out.hanafiPosition ?? ""} ${out.directAnswer}`.toLowerCase();
  out.aqeedahOrFiqh = /\baqeedah\b|\bcreed\b|\bbelief\b|\btawhid\b|\btawheed\b/.test(combined)
    ? "AQEEDAH"
    : /\bfiqh\b|\bruling\b|\bprayer\b|\bsalah\b|\bpurification\b|\bwudu\b|\bfasting\b/.test(combined)
      ? "FIQH"
      : "NEITHER";

  // Sources bullets (skip heading echoes like a bare "SOURCES" line)
  for (const line of get("sources").split("\n")) {
    const l = line.trim().replace(/^[-*]\s*/, "");
    if (l && l.length <= 120 && !/^(sources?|evidence)$/i.test(l)) out.sources.push(l);
  }

  // Confidence heuristic: unverified language → LOW, otherwise sourced → HIGH
  if (insufficient || /could not be verified/i.test(raw)) out.confidence = "LOW";
  else out.confidence = out.sources.length > 0 ? "HIGH" : "MEDIUM";

  // Fallback: unsectioned raw text → direct answer (keeps UX honest).
  if (!out.directAnswer) out.directAnswer = raw.slice(0, 400);

  return out;
}
