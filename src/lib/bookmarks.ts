"use client";

/**
 * My Library — localStorage-backed personal reference shelf.
 * Readers bookmark research pages (misconceptions, objections, comparisons,
 * Q&A answers, claim-check verdicts) and revisit them from the navbar panel.
 * Mirrors the reading-history pattern, plus a window-event sync so the
 * navbar badge, panel, and page buttons stay in step.
 */

export type LibraryKind = "misconception" | "objection" | "comparison" | "question" | "claim";

export interface LibraryItem {
  kind: LibraryKind;
  key: string; // slug (misconception) or record id
  title: string;
  ts: number;
}

const STORAGE_KEY = "nur-library-v1";
const CAP = 40;
export const LIBRARY_EVENT = "nur-library-changed";

export function loadLibrary(): LibraryItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const KINDS: LibraryKind[] = ["misconception", "objection", "comparison", "question", "claim"];
    return parsed
      .filter((x): x is LibraryItem => {
        const it = x as LibraryItem;
        return !!it && typeof it.key === "string" && typeof it.title === "string" && KINDS.includes(it.kind);
      })
      .slice(0, CAP);
  } catch {
    return [];
  }
}

function persist(items: LibraryItem[]): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items.slice(0, CAP)));
  } catch {
    /* storage full or unavailable — library is best-effort */
  }
  window.dispatchEvent(new CustomEvent(LIBRARY_EVENT));
}

export function isBookmarked(kind: LibraryKind, key: string): boolean {
  return loadLibrary().some((x) => x.kind === kind && x.key === key);
}

/** Toggle. Returns true when the item is now saved. */
export function toggleBookmark(item: Omit<LibraryItem, "ts">): boolean {
  if (typeof window === "undefined") return false;
  const existing = loadLibrary();
  const found = existing.some((x) => x.kind === item.kind && x.key === item.key);
  if (found) {
    persist(existing.filter((x) => !(x.kind === item.kind && x.key === item.key)));
    return false;
  }
  persist([{ ...item, ts: Date.now() }, ...existing].slice(0, CAP));
  return true;
}

export function removeBookmark(kind: LibraryKind, key: string): void {
  if (typeof window === "undefined") return;
  persist(loadLibrary().filter((x) => !(x.kind === kind && x.key === key)));
}

export function clearLibrary(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent(LIBRARY_EVENT));
}

/** Where does a saved item live? (view + in-view param for setView) */
export function libraryRoute(item: LibraryItem): { view: "misconceptions" | "objections" | "compare" | "qa" | "claims"; param: string } {
  switch (item.kind) {
    case "misconception": return { view: "misconceptions", param: item.key };
    case "objection": return { view: "objections", param: item.key };
    case "comparison": return { view: "compare", param: item.key };
    case "question": return { view: "qa", param: item.key };
    case "claim": return { view: "claims", param: item.key };
  }
}

/** Hash-path for citations / share links, e.g. "misconceptions/tawassul". */
export function libraryPath(item: LibraryItem): string {
  const route = libraryRoute(item);
  return `${route.view}/${route.param}`;
}
