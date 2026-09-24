"use client";

/**
 * Reading history — localStorage-backed "continue reading" trail.
 * Records misconception/objection detail visits (deduped, newest first,
 * capped) so the home view can offer a personal continuation strip.
 */

export interface ReadingItem {
  kind: "misconception" | "objection";
  key: string; // slug (misconception) or id (objection)
  title: string;
  ts: number;
}

const STORAGE_KEY = "nur-reading-history-v1";
const CAP = 12;

export function loadReadingHistory(): ReadingItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((x): x is ReadingItem => {
        const it = x as ReadingItem;
        return !!it && typeof it.key === "string" && typeof it.title === "string" && (it.kind === "misconception" || it.kind === "objection");
      })
      .slice(0, CAP);
  } catch {
    return [];
  }
}

export function pushReadingItem(item: Omit<ReadingItem, "ts">): void {
  if (typeof window === "undefined") return;
  try {
    const existing = loadReadingHistory().filter((x) => !(x.kind === item.kind && x.key === item.key));
    const next = [{ ...item, ts: Date.now() }, ...existing].slice(0, CAP);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* storage full or unavailable — history is best-effort */
  }
}

export function clearReadingHistory(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

/** Localized relative time: "just now" · "{n}h ago" · "{n}d ago". */
export function timeAgo(ts: number, t: (key: string) => string): string {
  const diff = Date.now() - ts;
  const minutes = Math.floor(diff / 60000);
  if (minutes < 60) return t("justNow");
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return t("hoursAgo").replace("{n}", String(hours));
  const days = Math.floor(hours / 24);
  return t("daysAgo").replace("{n}", String(Math.min(days, 30)));
}
