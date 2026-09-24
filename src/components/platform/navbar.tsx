"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { BookMarked, BookOpenText, Command, Globe, Menu, Moon, Search, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { usePlatform, useT, View } from "@/lib/store";
import { LANGS } from "@/lib/i18n";
import { apiGet, SearchHit } from "@/lib/api";
import { LibraryNavButton, LibraryDialog } from "@/components/platform/library";
import { cn } from "@/lib/utils";
import { SOURCE_TYPE_META } from "@/lib/ai.client";

const NAV: { key: string; view: View }[] = [
  { key: "navKnowledge", view: "knowledge" },
  { key: "navBank", view: "bank" },
  { key: "navMisconceptions", view: "misconceptions" },
  { key: "navClaims", view: "claims" },
  { key: "navObjections", view: "objections" },
  { key: "navCompare", view: "compare" },
  { key: "navSources", view: "sources" },
  { key: "navQuranHadith", view: "quran" },
  { key: "navQA", view: "qa" },
];

export function Navbar() {
  const t = useT();
  const { view, setView, lang, setLang, searchOpen, setSearchOpen } = usePlatform();
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Global ⌘K / Ctrl+K — opens search from anywhere (advertised in the kbd hint).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        usePlatform.getState().setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-3">
          {/* Logo */}
          <Link
            href="#/"
            onClick={() => setView("home")}
            className="flex items-center gap-2.5 shrink-0"
            aria-label={t("siteName")}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-700 text-white shadow-sm">
              <BookOpenText className="h-5 w-5" aria-hidden />
            </span>
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-scholarly text-lg font-bold tracking-tight">{t("siteName")}</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{t("siteTagline")}</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden lg:flex items-center gap-0.5">
            {NAV.map((n) => (
              <button
                key={n.key}
                onClick={() => setView(n.view)}
                className={cn(
                  "rounded-md px-2.5 py-2 text-[13px] font-medium transition-colors",
                  view === n.view || (n.view === "quran" && view === "quran")
                    ? "bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                {t(n.key)}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1.5">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 h-9 ps-3 pe-2"
              onClick={() => setSearchOpen(true)}
              aria-label={t("search")}
            >
              <Search className="h-4 w-4" />
              <span className="hidden md:inline text-xs text-muted-foreground">Search…</span>
              <kbd className="hidden md:inline-flex h-5 items-center rounded border bg-muted px-1.5 text-[10px] text-muted-foreground">
                <Command className="h-3 w-3 me-0.5" />K
              </kbd>
            </Button>

            <LibraryNavButton />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-9 gap-1.5 px-2" aria-label={t("language")}>
                  <Globe className="h-4 w-4" />
                  <span className="text-xs font-medium">{LANGS.find((l) => l.code === lang)?.native}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel className="text-xs">{t("language")}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {LANGS.map((l) => (
                  <DropdownMenuItem
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={cn(lang === l.code && "bg-accent font-medium")}
                    dir={l.dir}
                  >
                    {l.native} <span className="ms-auto text-[10px] text-muted-foreground">{l.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9" aria-label={t("theme")}>
                  {mounted && theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {(["light", "dark", "system"] as const).map((th) => (
                  <DropdownMenuItem
                    key={th}
                    onClick={() => setTheme(th)}
                    className={cn(mounted && theme === th && "bg-accent font-medium")}
                  >
                    {t(th)}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              size="sm"
              className="hidden sm:inline-flex h-9 bg-emerald-700 hover:bg-emerald-800 text-white"
              onClick={() => setView("ask")}
            >
              {t("askQuestion")}
            </Button>

            {/* Mobile menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden h-9 w-9" aria-label="Menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 overflow-y-auto">
                <SheetTitle className="flex items-center gap-2 font-scholarly">
                  <BookOpenText className="h-5 w-5 text-emerald-700" /> {t("siteName")}
                </SheetTitle>
                <nav aria-label="Mobile" className="mt-4 flex flex-col gap-1">
                  {[{ key: "navHome", view: "home" as View }, ...NAV, { key: "navAsk", view: "ask" as View }, { key: "navAdmin", view: "admin" as View }].map((n) => (
                    <button
                      key={n.key}
                      onClick={() => { setView(n.view); setMobileOpen(false); }}
                      className={cn(
                        "rounded-md px-3 py-2.5 text-sm font-medium text-start",
                        view === n.view ? "bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200" : "hover:bg-accent"
                      )}
                    >
                      {t(n.key)}
                    </button>
                  ))}
                  <button
                    onClick={() => { setMobileOpen(false); usePlatform.getState().setLibraryOpen(true); }}
                    className="mt-1 flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-start hover:bg-accent"
                  >
                    <BookMarked className="h-4 w-4 text-amber-600 dark:text-amber-400" aria-hidden />
                    {t("myLibrary")}
                  </button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      {searchOpen && <SearchDialog />}
      <LibraryDialog />
    </header>
  );
}

function SearchDialog() {
  const t = useT();
  const { setView } = usePlatform();
  const [q, setQ] = useState("");
  const [hits, setHits] = useState<SearchHit[]>([]);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") usePlatform.getState().setSearchOpen(false);
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        usePlatform.getState().setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    inputRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Enter → jump to the full search view, preserving the query + type filter.
  const submitToSearchView = () => {
    if (q.trim().length < 2) return;
    setView("search", JSON.stringify({ q: q.trim(), ...(type ? { type } : {}) }));
  };

  useEffect(() => {
    if (q.trim().length < 2) { setHits([]); return; }
    setLoading(true);
    const id = setTimeout(async () => {
      try {
        const data = await apiGet<{ results: SearchHit[] }>(`/api/search?q=${encodeURIComponent(q)}${type ? `&type=${type}` : ""}`);
        setHits(data.results);
      } catch { setHits([]); } finally { setLoading(false); }
    }, 250);
    return () => clearTimeout(id);
  }, [q, type]);

  const TYPES = [
    { v: "", label: t("all") }, { v: "TOPIC", label: t("topicsLabel") }, { v: "MISCONCEPTION", label: t("misconceptionsLabel") },
    { v: "OBJECTION", label: t("objectionsLabel") }, { v: "BOOK", label: t("books") }, { v: "SCHOLAR", label: t("scholarsLabel") },
    { v: "HADITH", label: t("hadithCollection") }, { v: "QURAN", label: t("quran") }, { v: "FATWA", label: t("fatwas") },
    { v: "QUESTION", label: t("questions") }, { v: "COMPARISON", label: t("comparisonsLabel") },
  ];

  return (
    <div className="absolute inset-x-0 top-full border-b bg-background/95 shadow-lg">
      <div className="mx-auto max-w-3xl px-4 py-4">
        <div className="flex items-center gap-2">
          <Search className="h-4 w-4 text-muted-foreground shrink-0" />
          <Input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") submitToSearchView(); }}
            placeholder={t("searchPlaceholder")}
            className="border-0 shadow-none focus-visible:ring-0 text-base h-10"
            aria-label={t("search")}
          />
          <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0" onClick={() => setSearchOpen(false)} aria-label="Close">
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          {TYPES.map((tp) => (
            <button
              key={tp.v}
              onClick={() => setType(tp.v)}
              className={cn(
                "rounded-full border px-2.5 py-1 text-[11px] font-medium transition-colors",
                type === tp.v ? "border-emerald-600 bg-emerald-600 text-white" : "text-muted-foreground hover:bg-accent"
              )}
            >
              {tp.label}
            </button>
          ))}
        </div>

        <div className="mt-3 max-h-[55vh] overflow-y-auto rounded-lg border">
          {loading && <div className="p-4 text-sm text-muted-foreground">{t("searching")}</div>}
          {!loading && q.trim().length >= 2 && hits.length === 0 && (
            <div className="p-4 text-sm text-muted-foreground">{t("noResults")}</div>
          )}
          {!loading && hits.map((h) => {
            const meta = SOURCE_TYPE_META[h.entityType];
            return (
              <button
                key={`${h.entityType}-${h.entityId}`}
                onClick={() => setView("search", JSON.stringify({ q, focus: `${h.entityType}:${h.entityId}` }))}
                className="flex w-full items-start gap-3 border-b p-3 text-start last:border-0 hover:bg-accent/60"
              >
                <span className="mt-0.5 shrink-0 rounded bg-muted px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {meta?.label ?? h.entityType}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-medium">{h.title}</span>
                  <span className="mt-0.5 line-clamp-2 block text-xs text-muted-foreground">{h.snippet}</span>
                </span>
              </button>
            );
          })}
          {!loading && q.trim().length < 2 && (
            <div className="p-4 text-xs text-muted-foreground">
              Try: <em>tawassul</em> · <em>رفع یدين</em> · <em>raf al-yadayn</em> · <em>Bukhari</em> · <em>Fatawa Razvia</em> · <em>mawlid</em>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
