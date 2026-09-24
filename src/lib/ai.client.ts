/** Client-safe metadata mirrors (src/lib/ai.ts imports server-only SDK — do not import it client-side). */
export const CLASSIFICATION_META: Record<string, { label: string; color: string }> = {
  CORRECTLY_ATTRIBUTED: { label: "Correctly Attributed", color: "emerald" },
  PARTIALLY_CORRECT: { label: "Partially Correct", color: "lime" },
  MISLEADING: { label: "Misleading", color: "amber" },
  INCORRECTLY_ATTRIBUTED: { label: "Incorrectly Attributed", color: "orange" },
  DISPUTED: { label: "Disputed", color: "yellow" },
  UNSUPPORTED: { label: "Unsupported", color: "red" },
  INSUFFICIENTLY_DOCUMENTED: { label: "Insufficiently Documented", color: "stone" },
};

export const VERIFICATION_META: Record<string, { label: string; color: string }> = {
  VERIFIED: { label: "Verified", color: "emerald" },
  PARTIALLY_VERIFIED: { label: "Partially Verified", color: "lime" },
  OCR_NEEDS_REVIEW: { label: "OCR Needs Review", color: "amber" },
  UNVERIFIED: { label: "Unverified", color: "stone" },
  DISPUTED: { label: "Disputed", color: "yellow" },
  INSUFFICIENT_EVIDENCE: { label: "Insufficient Evidence", color: "orange" },
};

export const SOURCE_TYPE_META: Record<string, { label: string; color: string }> = {
  QURAN: { label: "Qur'an", color: "emerald" },
  HADITH: { label: "Hadith", color: "teal" },
  BOOK: { label: "Book", color: "amber" },
  FATWA: { label: "Fatwa", color: "rose" },
  MISCONCEPTION: { label: "Misconception", color: "orange" },
  OBJECTION: { label: "Objection", color: "lime" },
  COMPARISON: { label: "Comparison", color: "yellow" },
  TOPIC: { label: "Topic", color: "stone" },
  QUESTION: { label: "Question", color: "stone" },
  ANSWER: { label: "Answer", color: "stone" },
  SCHOLAR: { label: "Scholar", color: "amber" },
};
