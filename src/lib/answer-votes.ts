"use client";

/**
 * Answer feedback votes — one vote per browser per answer, stored locally
 * so the UI can show the voter's own state; counts are persisted server-side
 * via POST /api/answers/feedback.
 */

const STORAGE_KEY = "nur-answer-votes-v1";

export type AnswerVote = "up" | "down";

export function loadVotes(): Record<string, AnswerVote> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    const out: Record<string, AnswerVote> = {};
    for (const [k, v] of Object.entries(parsed as Record<string, unknown>)) {
      if (v === "up" || v === "down") out[k] = v;
    }
    return out;
  } catch {
    return {};
  }
}

export function getVote(answerId: string): AnswerVote | null {
  return loadVotes()[answerId] ?? null;
}

export function setVote(answerId: string, vote: AnswerVote): void {
  try {
    const votes = loadVotes();
    votes[answerId] = vote;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(votes));
  } catch {
    /* best-effort */
  }
}
