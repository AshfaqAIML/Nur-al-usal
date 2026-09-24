import { db } from "@/lib/db";

/**
 * Hybrid retrieval for RAG: keyword search across the SearchDocument index
 * plus targeted lookups in the misconceptions/objections/comparisons tables.
 * SQLite LIKE-based BM25-lite scoring (upgradeable to FTS/vector later —
 * the modular architecture required by the MASTER PROMPT).
 */

export interface RetrievedDoc {
  entityType: string;
  entityId: string;
  title: string;
  body: string;
  route: string;
  score: number;
}

function tokenize(q: string): string[] {
  return q
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1)
    .slice(0, 12);
}

export async function retrieveEvidence(query: string, limit = 10): Promise<RetrievedDoc[]> {
  const terms = tokenize(query);
  if (terms.length === 0) return [];

  const docs = await db.searchDocument.findMany({
    take: 400,
    orderBy: { weight: "desc" },
  });

  const scored: RetrievedDoc[] = [];
  for (const d of docs) {
    const hay = `${d.title} ${d.titleUr ?? ""} ${d.titleAr ?? ""} ${d.body}`.toLowerCase();
    let score = 0;
    for (const t of terms) {
      if (d.title.toLowerCase().includes(t)) score += 3;
      if (hay.includes(t)) score += 1;
    }
    if (score > 0) {
      scored.push({
        entityType: d.entityType,
        entityId: d.entityId,
        title: d.title,
        body: d.body.slice(0, 700),
        route: d.route,
        score: score * d.weight,
      });
    }
  }
  scored.sort((a, b) => b.score - a.score);

  // Enrich with structured records for the top entity types
  const top = scored.slice(0, limit);
  const enriched: RetrievedDoc[] = [];
  for (const doc of top) {
    let body = doc.body;
    if (doc.entityType === "MISCONCEPTION") {
      const m = await db.misconception.findUnique({ where: { id: doc.entityId } });
      if (m) body = `CLAIM: ${m.claim} | STATUS: ${m.verificationStatus} | ACTUAL POSITION: ${m.actualPosition ?? "—"} | RESPONSE: ${m.scholarlyResponse ?? "—"} | CONCLUSION: ${m.conclusion ?? "—"}`;
    } else if (doc.entityType === "OBJECTION") {
      const o = await db.objection.findUnique({ where: { id: doc.entityId } });
      if (o) body = `OBJECTION: ${o.question} | RESPONSE: ${o.answer} ${o.disputed ? `| DISPUTED: ${o.disputed}` : ""}`;
    } else if (doc.entityType === "COMPARISON") {
      const c = await db.comparison.findUnique({ where: { id: doc.entityId } });
      if (c) body = `ISSUE: ${c.issue} | Hanafi: ${c.hanafi ?? "—"} | Shafi'i: ${c.shafii ?? "—"} | Maliki: ${c.maliki ?? "—"} | Hanbali: ${c.hanbali ?? "—"} | Other: ${c.other ?? "—"} | ${c.notes ?? ""}`;
    } else if (doc.entityType === "HADITH") {
      const h = await db.hadith.findUnique({ where: { id: doc.entityId } });
      if (h) body = `HADITH: ${h.collection} ${h.number ?? "(number pending verification)"} — "${h.translationEn}" | GRADING: ${h.grading}${h.gradingDisputed ? " (disputed)" : ""}`;
    } else if (doc.entityType === "QURAN") {
      const v = await db.quranVerse.findUnique({ where: { id: doc.entityId } });
      if (v) body = `QUR'AN ${v.surah}:${v.ayah} (${v.surahNameEn}) — Arabic: ${v.arabic} | EN: ${v.translationEn}`;
    } else if (doc.entityType === "FATWA") {
      const f = await db.fatwa.findUnique({ where: { id: doc.entityId }, include: { book: true, scholar: true } });
      if (f) body = `FATWA [${f.verificationStatus}]: ${f.question} — ${f.answer} (Source: ${f.book?.titleEn ?? "—"}${f.volume ? `, ${f.volume}` : ""})`;
    } else if (doc.entityType === "BOOK") {
      const b = await db.book.findUnique({ where: { id: doc.entityId }, include: { author: true } });
      if (b) body = `BOOK [${b.classification}]: ${b.titleEn} by ${b.author?.nameEn ?? "—"} — ${b.descriptionEn ?? ""}`;
    } else if (doc.entityType === "SCHOLAR") {
      const s = await db.scholar.findUnique({ where: { id: doc.entityId } });
      if (s) body = `SCHOLAR [${s.classification}]: ${s.nameEn} (${s.deathYear ?? "?"}) — ${s.biographyEn ?? ""}`;
    } else if (doc.entityType === "TOPIC") {
      const t = await db.topic.findUnique({ where: { id: doc.entityId }, include: { category: true } });
      if (t) body = `TOPIC [${t.category.nameEn}${t.isContested ? ", contested" : ""}]: ${t.titleEn} — ${t.summaryEn ?? ""}`;
    }
    enriched.push({ ...doc, body });
  }
  return enriched;
}

/** Detect whether a question is a sensitive personal legal matter (Personal Fatwa Warning). */
const SENSITIVE_TERMS = [
  "talaq", "divorce", "divorce my", "nikah", "marriage contract", "inheritance",
  "meerath", "wirath", "kafarah", "kaffarah", "oath", "custody", "loan contract",
  "riba my", "my marriage", "my wife", "my husband", "my property",
];
export function isSensitiveQuestion(text: string): boolean {
  const t = text.toLowerCase();
  return SENSITIVE_TERMS.some((s) => t.includes(s));
}

/** Detect language of a question (simple heuristic). */
export function detectLanguage(text: string): "EN" | "UR" | "AR" {
  const arabic = (text.match(/[\u0600-\u06FF]/g) ?? []).length;
  // Urdu shares Arabic script but contains Urdu-specific letters
  const urduSpecific = (text.match(/[\u0679\u0688\u0691\u06BA\u06BE\u06C1\u06C3\u06D2\u06AF\u0686\u0698]/g) ?? []).length;
  if (arabic > 0 && urduSpecific > 0) return "UR";
  if (arabic > 2) return "AR";
  return "EN";
}
