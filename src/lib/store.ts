"use client";
import { create } from "zustand";
import { Lang, dirOf, translate } from "@/lib/i18n";

export type View =
  | "home" | "knowledge" | "misconceptions" | "claims" | "objections" | "compare"
  | "sources" | "quran" | "search" | "ask" | "qa" | "admin";

interface PlatformState {
  view: View;
  param: string | null; // slug / id / query payload
  lang: Lang;
  searchOpen: boolean;
  libraryOpen: boolean; // My Library dialog (navbar, mobile menu, home strip)
  setView: (v: View, param?: string | null) => void;
  setLang: (l: Lang) => void;
  setSearchOpen: (open: boolean) => void;
  setLibraryOpen: (open: boolean) => void;
  hydrateFromHash: () => void;
}

function parseHash(): { view: View; param: string | null } {
  const raw = window.location.hash.replace(/^#\/?/, "");
  if (!raw) return { view: "home", param: null };
  const [v, ...rest] = raw.split("/");
  let param = rest.join("/") || null;
  if (param) {
    try { param = decodeURIComponent(param); } catch { /* keep raw if malformed */ }
  }
  const known: View[] = ["home", "knowledge", "misconceptions", "claims", "objections", "compare", "sources", "quran", "search", "ask", "qa", "admin"];
  return { view: (known.includes(v as View) ? v : "home") as View, param };
}

export const usePlatform = create<PlatformState>((set) => ({
  view: "home",
  param: null,
  lang: "en",
  searchOpen: false,
  libraryOpen: false,
  setView: (v, param = null) => {
    window.location.hash = param ? `#/${v}/${param}` : `#/${v}`;
    set({ view: v, param, searchOpen: false, libraryOpen: false });
    window.scrollTo({ top: 0 });
  },
  setLang: (l) => {
    document.documentElement.lang = l;
    document.documentElement.dir = dirOf(l);
    set({ lang: l });
    try { localStorage.setItem("nur-lang", l); } catch { /* noop */ }
  },
  setSearchOpen: (open) => set({ searchOpen: open }),
  setLibraryOpen: (open) => set({ libraryOpen: open }),
  hydrateFromHash: () => {
    const { view, param } = parseHash();
    set({ view, param });
    try {
      const saved = localStorage.getItem("nur-lang") as Lang | null;
      if (saved && ["en", "ur", "ar"].includes(saved)) {
        document.documentElement.lang = saved;
        document.documentElement.dir = dirOf(saved);
        set({ lang: saved });
      }
    } catch { /* noop */ }
  },
}));

export function useT() {
  const lang = usePlatform((s) => s.lang);
  return (key: string) => translate(lang, key);
}
