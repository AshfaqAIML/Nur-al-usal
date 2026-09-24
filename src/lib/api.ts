/** Client-side API helpers with typed fetch. */
export async function apiGet<T>(url: string): Promise<T> {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`GET ${url} failed: ${res.status}`);
  return res.json() as Promise<T>;
}

export async function apiPost<T>(url: string, body: unknown): Promise<T> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error((json as { error?: string }).error || `POST ${url} failed: ${res.status}`);
  return json as T;
}

export async function apiAdmin<T>(url: string, body: unknown, method: "POST" | "PATCH" | "DELETE" = "POST"): Promise<T> {
  const res = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json", "x-admin-key": "nur-al-usul-admin" },
    body: JSON.stringify(body),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error((json as { error?: string }).error || `${method} ${url} failed: ${res.status}`);
  return json as T;
}

export interface BootstrapData {
  stats: { topics: number; misconceptions: number; objections: number; books: number; scholars: number; hadith: number; quran: number; fatwas: number; questions: number; comparisons: number };
  categories: Category[];
  featuredMisconceptions: Misconception[];
  featuredQuestions: Question[];
  featuredBooks: Book[];
  objectionsTop: Objection[];
  comparisons: { id: string; issue: string }[];
}

export interface Category {
  id: string; slug: string; nameEn: string; nameUr: string; nameAr: string; type: string; icon: string | null;
  descriptionEn: string | null; order: number;
  topics: Topic[];
}
export interface Topic {
  id: string; slug: string; titleEn: string; titleUr: string | null; titleAr: string | null;
  arabicTerm: string | null; summaryEn: string | null; isContested: boolean; order: number; categoryId: string;
}
export interface Misconception {
  id: string; slug: string; claim: string; claimUr: string | null; claimAr?: string | null;
  sourceOfClaim: string | null; verificationStatus: string; actualPosition: string | null;
  primaryEvidence: string | null; classicalEvidence: string | null; laterEvidence: string | null;
  counterargument: string | null; scholarlyResponse: string | null; disagreements: string | null;
  conclusion: string | null; featured: boolean; views: number;
  topic?: { slug: string; titleEn: string } | null;
}
export interface Objection {
  id: string; question: string; answer: string; hanafiPosition: string | null; disputed: string | null;
  isAqeedah: boolean; views: number; topic?: { slug: string; titleEn: string } | null;
}
export interface Comparison {
  id: string; issue: string; hanafi: string | null; shafii: string | null; maliki: string | null;
  hanbali: string | null; other: string | null; notes: string | null;
}
export interface Book {
  id: string; slug: string; titleEn: string; titleAr: string | null; titleUr: string | null;
  altTitles: string | null; era: string | null; school: string | null; subject: string | null;
  language: string | null; descriptionEn: string | null; volumes: number;
  classification: string; isHanafi: boolean; ocrStatus: string; verified: boolean; featured: boolean;
  coverColor: string;
  author?: { nameEn: string; deathYear: string | null } | { nameEn: string; nameAr: string | null; deathYear: string | null; classification: string; slug: string } | null;
  fatwas?: { id: string; question: string; verificationStatus: string }[];
}
export interface Scholar {
  id: string; slug: string; nameEn: string; nameAr: string | null; nameUr: string | null;
  title: string | null; deathYear: string | null; birthYear?: string | null; era: string | null;
  classification: string; madhhab: string | null; isHanafi: boolean; region?: string | null;
  biographyEn?: string | null; majorWorks?: string | null; aqeedahTradition?: string | null;
  languages?: string | null;
  books?: { slug: string; titleEn: string; classification: string }[];
  fatwas?: { id: string; question: string; verificationStatus: string }[];
  scholarlyViews?: { issue: string; view: string; isMajority: boolean; source: string | null }[];
  positions?: { statement: string; strength: string; kind: string }[];
}
export interface Fatwa {
  id: string; question: string; answer: string; volume: string | null; page: string | null;
  language: string; topic: string | null; verificationStatus: string;
  scholar?: { nameEn: string; slug: string; classification: string } | null;
  book?: { titleEn: string; slug: string; classification: string; language: string } | null;
}
export interface QuranVerse {
  id: string; surah: number; surahNameEn: string; surahNameAr: string; ayah: number;
  arabic: string; translationEn: string; translationUr: string | null; topicTags: string | null;
}
export interface Hadith {
  id: string; collection: string; book: string | null; chapter: string | null; number: string | null;
  arabic: string | null; translationEn: string; translationUr: string | null; narrator: string | null;
  grading: string; gradingDisputed: boolean; gradingNotes: string | null; commentary: string | null;
  topicTags: string | null;
}
export interface Question {
  id: string; text: string; language: string; status: string; isSensitive: boolean;
  views: number; featured: boolean; createdAt: string;
  category?: { nameEn: string; slug: string } | null;
  claim?: string | null;
  answers?: Answer[] | { id: string; status: string; directAnswer: string }[];
}
export interface Answer {
  id: string; questionId: string; directAnswer: string; hanafiPosition: string | null;
  aqeedahOrFiqh: string | null; quranEvidence: string | null; hadithEvidence: string | null;
  classicalEvidence: string | null; laterEvidence: string | null; fatawaRazvia: string | null;
  otherViews: string | null; commonObjection: string | null; scholarlyResponse: string | null;
  disputed: string | null; misconceptionNote: string | null; practicalInfo: string | null;
  sources: string | null; status: string; aiGenerated: boolean; createdAt: string;
  helpfulUp: number; helpfulDown: number;
}
export interface ClaimRecord {
  id: string; claim: string; classification: string; explanation: string;
  evidence: string | null; confidence?: string; hanafiPosition?: string | null;
  disagreement?: string | null; createdAt: string;
  kbEvidence?: { entityType: string; title: string; body: string; route: string }[];
}
export interface SearchHit {
  entityType: string; entityId: string; title: string; titleUr: string | null; titleAr: string | null;
  snippet: string; route: string; score: number;
}

export function parseJson<T>(s: string | null | undefined, fallback: T): T {
  if (!s) return fallback;
  try { return JSON.parse(s) as T; } catch { return fallback; }
}
