/**
 * Content contract for the Hanafi Common Questions Library.
 *
 * ANTI-HALLUCINATION POLICY (mandatory):
 *  - Citations must be REAL. If you are not sure a source actually discusses
 *    the issue, do NOT cite it — prefer an honest, well-known reference.
 *  - Hadith numbers: only include `number` when the number is well
 *    established. Otherwise cite collection + narrator + book/chapter and
 *    leave number undefined with status "UNVERIFIED" and a note.
 *  - Book citations are chapter/kitab-level (volume/page omitted unless the
 *    volume is famous). Never invent page numbers.
 *  - `quote` should be short and reliable; prefer `translation` (paraphrase)
 *    with the note "paraphrased translation" when unsure of exact wording.
 *  - When scholars differ, represent the disagreement — never fabricate
 *    consensus, never score a "winner".
 */

export type SourceStatus = "VERIFIED" | "PARTIALLY_VERIFIED" | "UNVERIFIED";

export interface BankSource {
  kind: "QURAN" | "HADITH" | "BOOK" | "FATWA";
  /** e.g. "Al-Baqarah 2:286" | "Sahih al-Bukhari, Kitab al-Adhan (narration of Abu Huraira)" | "Al-Hidayah, Kitab al-Salah" | "Fatawa Razvia — discussion of Mawlid" */
  ref: string;
  /** Hadith number — ONLY when well established (see policy above). */
  number?: string;
  quote?: string;
  translation?: string;
  volume?: string;
  page?: string;
  status: SourceStatus;
  note?: string;
}

export type QuestionType =
  | "BEGINNER" | "FIQH" | "AQEEDAH" | "METHODOLOGY" | "HADITH"
  | "MISCONCEPTION" | "OBJECTION" | "COMPARISON" | "HISTORICAL"
  | "PRACTICAL" | "TERMINOLOGY";

export type Difficulty = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";

export type SearchIntent =
  | "informational" | "fiqh" | "misconception" | "evidence" | "source-lookup";

export interface BankQuestion {
  /** Unique kebab-case slug, prefixed by category, e.g. "salah-ameen-quiet". */
  slug: string;
  question: string;
  /** Category slug — must match a category created in seed-bank.ts. */
  category: string;
  /** Free-text subcategory within the category, e.g. "Wudu". */
  subcategory?: string;
  type: QuestionType;
  difficulty: Difficulty;
  isMisconception?: boolean;
  isDisputed?: boolean;
  /** 1–3 sentence direct answer. Mandatory for every question. */
  shortAnswer: string;
  /** Full explanation — how the sources relate to the question. */
  detailedAnswer?: string;
  /** The recognized Hanafi position (1–3 sentences). */
  hanafiPosition?: string;
  /** Materially relevant alternative scholarly positions. */
  otherViews?: string;
  /** The common objection stated fairly. */
  commonObjection?: string;
  /** The scholarly response with evidence. */
  scholarlyResponse?: string;
  /** Where the disagreement precisely lies (if isDisputed). */
  disputedNote?: string;
  /** Practical guidance; sensitive personal matters get the fatwa warning. */
  practicalInfo?: string;
  /** Summary of what Fatawa Razvia actually says — ONLY where it genuinely discusses the topic. */
  fatawaRazvia?: string;
  /** At least one source; more where they exist. */
  sources: BankSource[];
  /** 2–4 alternate phrasings users actually search ("Also asked as"). */
  variants?: string[];
  /** Related question slugs (must exist in the combined library). */
  related?: string[];
  /** Cluster slug (see seed-bank.ts CLUSTERS registry). */
  cluster?: string;
  /** Search intent classification. */
  intent?: SearchIntent;
}
