import ZAI from "z-ai-web-dev-sdk";

/**
 * Anti-hallucination system prompt — MASTER PROMPT policy:
 * The AI must NEVER invent quotations, pages, hadith numbers, book titles,
 * authors, arabic text, scholar opinions, consensus, or fatwas.
 * When a source cannot be verified → explicit disclaimer.
 */
export const ANTI_HALLUCINATION_RULES = `CRITICAL ANTI-HALLUCINATION RULES (violating any of these is a failure):
1. NEVER invent quotations, page numbers, hadith numbers, book titles, author names, Arabic text, scholarly opinions, ijma' (consensus), or fatwas.
2. Use ONLY the retrieved evidence provided in the context. Do not add any citation that is not in the context.
3. If the evidence is insufficient, you MUST explicitly state: "This attribution could not be verified from the available sources."
4. Never replace missing evidence with fabricated evidence. Silence about a source is better than inventing one.
5. TAKFIR POLICY: Never declare anyone kafir, mushrik, munafiq, or outside Islam. Present disputes as disputes.
6. Never make blanket claims like "All Barelvis believe..." / "All Deobandis believe..." / "All Hanafis believe..." unless the evidence genuinely establishes it. Instead identify the specific scholar, book, tradition, and whether the position is representative or individual.
7. NO ABUSIVE CONTENT: no insults, mockery, derogatory labels, dehumanizing language, or personal attacks. Clarification through scholarship only.
8. Distinguish carefully between: Hanafi Madhhab, Hanafi Fiqh, Sunni Aqeedah, Maturidi Theology, South Asian Hanafi traditions (Barelvi/Deobandi), an individual scholar's view, regional/cultural practice, and polemical claims.
9. Do not present disputed hadith grading as absolute fact. When scholars differ, display the disagreement.
10. Keep a neutral, scholarly, respectful tone throughout.`;

export async function getZAI() {
  return ZAI.create();
}

export async function llmComplete(
  systemPrompt: string,
  userPrompt: string,
  opts?: { temperature?: number }
): Promise<string> {
  const zai = await getZAI();
  const completion = await zai.chat.completions.create({
    messages: [
      { role: "assistant", content: systemPrompt },
      { role: "user", content: userPrompt },
    ],
    thinking: { type: "disabled" },
    ...(opts?.temperature !== undefined ? { temperature: opts.temperature } : {}),
  });
  return completion.choices[0]?.message?.content ?? "";
}

/** Extract the first JSON object/array from an LLM response (tolerates fences/prose). */
export function extractJson<T = unknown>(text: string): T | null {
  if (!text) return null;
  const cleaned = text.replace(/```json/gi, "```").trim();
  const fenceMatch = cleaned.match(/```([\s\S]*?)```/);
  const candidate = fenceMatch ? fenceMatch[1] : cleaned;
  const start = Math.min(
    ...[candidate.indexOf("{"), candidate.indexOf("[")].filter((i) => i >= 0)
  );
  if (!isFinite(start)) return null;
  const endBrace = Math.max(candidate.lastIndexOf("}"), candidate.lastIndexOf("]"));
  if (endBrace <= start) return null;
  try {
    return JSON.parse(candidate.slice(start, endBrace + 1)) as T;
  } catch {
    return null;
  }
}

export const CLASSIFICATIONS = [
  "CORRECTLY_ATTRIBUTED",
  "PARTIALLY_CORRECT",
  "MISLEADING",
  "INCORRECTLY_ATTRIBUTED",
  "DISPUTED",
  "UNSUPPORTED",
  "INSUFFICIENTLY_DOCUMENTED",
] as const;

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
