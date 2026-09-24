"use client";

import { useEffect, useState } from "react";
import { BookMarked, Building2, ChevronRight, ScrollText, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { usePlatform, useT } from "@/lib/store";
import { apiGet, Book, Fatwa, Scholar } from "@/lib/api";
import { SourceClassBadge, VerificationBadge } from "@/components/platform/badges";
import { ScholarlyCard, UrduText } from "@/components/platform/text";
import { coverClass } from "@/components/platform/views/home";
import { BookSpine } from "@/components/platform/architectural";
import { cn } from "@/lib/utils";

export function SourcesView({ param }: { param?: string | null }) {
  const t = useT();
  const { setView } = usePlatform();
  const [tab, setTab] = useState<string>("books");
  const [books, setBooks] = useState<Book[] | null>(null);
  const [scholars, setScholars] = useState<Scholar[] | null>(null);
  const [fatwas, setFatwas] = useState<Fatwa[] | null>(null);
  const [book, setBook] = useState<Book | null>(null);
  const [scholar, setScholar] = useState<Scholar | null>(null);

  // Deep links: book/slug or scholar/slug
  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!param) { if (!cancelled) { setBook(null); setScholar(null); } return; }
      const [kind, slug] = param.split("/");
      if (kind === "book" && slug) {
        await apiGet<{ book: Book }>(`/api/books?slug=${encodeURIComponent(slug)}`).then((d) => { if (!cancelled) setBook(d.book); }).catch(() => { if (!cancelled) setBook(null); });
      } else if (kind === "scholar" && slug) {
        await apiGet<{ scholar: Scholar }>(`/api/scholars?slug=${encodeURIComponent(slug)}`).then((d) => { if (!cancelled) setScholar(d.scholar); }).catch(() => { if (!cancelled) setScholar(null); });
      } else if (kind === "fatwa") {
        if (!cancelled) setTab("fatwas");
      }
    })();
    return () => { cancelled = true; };
  }, [param]);

  useEffect(() => {
    apiGet<{ books: Book[] }>("/api/books").then((d) => setBooks(d.books)).catch(() => setBooks([]));
    apiGet<{ scholars: Scholar[] }>("/api/scholars").then((d) => setScholars(d.scholars)).catch(() => setScholars([]));
    apiGet<{ fatwas: Fatwa[] }>("/api/fatwas").then((d) => setFatwas(d.fatwas)).catch(() => setFatwas([]));
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <header className="mb-6">
        <h1 className="font-scholarly text-3xl font-bold">Hanafi Sources Library</h1>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Classical Hanafi works, later scholarship, and fatwa collections — with accurate historical classification.
          Later South Asian sources (e.g. <strong>Fatawa Razvia</strong>) are never presented as early classical works.
        </p>
      </header>

      <Tabs value={tab} onValueChange={setTab}>
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="books" className="gap-1.5 text-xs"><BookMarked className="h-3.5 w-3.5" /> {t("books")}</TabsTrigger>
          <TabsTrigger value="scholars" className="gap-1.5 text-xs"><Users className="h-3.5 w-3.5" /> {t("scholarsLabel")}</TabsTrigger>
          <TabsTrigger value="fatwas" className="gap-1.5 text-xs"><ScrollText className="h-3.5 w-3.5" /> {t("fatwas")}</TabsTrigger>
        </TabsList>

        {/* ─── BOOKS — library catalog entries ─── */}
        <TabsContent value="books" className="mt-5">
          {!books && <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[...Array(8)].map((_, i) => <Skeleton key={i} className="h-56 rounded-xl" />)}</div>}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(books ?? []).map((b) => (
              <Card
                key={b.id}
                className="card-lift relative cursor-pointer overflow-hidden border-border/70"
                onClick={() => setView("sources", `book/${b.slug}`)}
              >
                <BookSpine />
                <CardContent className="p-4 ps-5">
                  <div className={cn("flex h-28 items-center justify-center rounded-lg border pattern-weave", coverClass(b.coverColor))}>
                    <span className="font-arabic px-3 text-center text-lg leading-snug" dir="rtl">{b.titleAr ?? b.titleEn}</span>
                  </div>
                  <h3 className="mt-3 line-clamp-2 text-sm font-semibold leading-snug">{b.titleEn}</h3>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    {t("by")} {b.author?.nameEn ?? "—"}{b.author?.deathYear ? ` (d. ${b.author.deathYear})` : ""}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    <SourceClassBadge classification={b.classification} isHanafi={b.isHanafi} />
                    {b.verified && <Badge variant="outline" className="text-[10px] border-emerald-300 text-emerald-800 dark:border-emerald-700">✓ {t("verified")}</Badge>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* ─── SCHOLARS ─── */}
        <TabsContent value="scholars" className="mt-5">
          {!scholars && <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{[...Array(6)].map((_, i) => <Skeleton key={i} className="h-24 rounded-xl" />)}</div>}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {(scholars ?? []).map((s) => (
              <button key={s.id} onClick={() => setView("sources", `scholar/${s.slug}`)} className="rounded-xl border bg-card p-4 text-start transition-shadow hover:shadow-md">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-bold leading-snug">{s.nameEn}</h3>
                    {s.nameAr && <p className="font-arabic text-base text-emerald-800 dark:text-emerald-300">{s.nameAr}</p>}
                    <UrduText text={s.nameUr} className="text-xs text-muted-foreground" />
                  </div>
                  <Building2 className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
                </div>
                <p className="mt-2 text-[11px] text-muted-foreground">{s.title ? `${s.title} · ` : ""}{s.deathYear ? `d. ${s.deathYear}` : ""}{s.era ? ` · ${s.era}` : ""}</p>
                <div className="mt-2"><SourceClassBadge classification={s.classification} isHanafi={s.isHanafi} /></div>
              </button>
            ))}
          </div>
        </TabsContent>

        {/* ─── FATWAS (Fatawa Explorer) ─── */}
        <TabsContent value="fatwas" className="mt-5">
          {!fatwas && <div className="space-y-3">{[...Array(4)].map((_, i) => <Skeleton key={i} className="h-28 rounded-xl" />)}</div>}
          <div className="space-y-3">
            {(fatwas ?? []).map((f) => (
              <Card key={f.id} className="border-border/70">
                <CardContent className="p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="max-w-2xl text-sm font-bold leading-snug">{f.question}</h3>
                    <VerificationBadge status={f.verificationStatus} />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/90">{f.answer}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
                    {f.book && (
                      <button onClick={() => setView("sources", `book/${f.book!.slug}`)} className="font-medium text-emerald-800 underline-offset-2 hover:underline dark:text-emerald-300">
                        {f.book.titleEn}
                      </button>
                    )}
                    {f.scholar && <span>— {f.scholar.nameEn}</span>}
                    {f.volume && <span>· {t("volume")}: {f.volume}</span>}
                    {f.page && f.page !== "TBD" && <span>· {t("page")}: {f.page}</span>}
                    {f.page === "TBD" && <Badge variant="outline" className="text-[10px]">{t("requestOcr")}</Badge>}
                    {f.language && <span>· {f.language}</span>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* ─── BOOK DETAIL DIALOG (Source Viewer) ─── */}
      <Dialog open={!!book} onOpenChange={(open) => !open && setView("sources")}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
          {book && (
            <>
              <DialogHeader>
                <DialogTitle className="font-scholarly text-xl">{book.titleEn}</DialogTitle>
                <DialogDescription>
                  {book.titleUr} {book.titleAr ? `· ${book.titleAr}` : ""}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  <SourceClassBadge classification={book.classification} isHanafi={book.isHanafi} />
                  {book.era && <Badge variant="outline" className="text-[11px]">{t("era")}: {book.era}</Badge>}
                  {book.language && <Badge variant="outline" className="text-[11px]">{book.language}</Badge>}
                  {book.volumes > 1 && <Badge variant="outline" className="text-[11px]">{book.volumes} vols.</Badge>}
                </div>
                {book.descriptionEn && <p className="text-sm leading-relaxed">{book.descriptionEn}</p>}
                {book.altTitles && <p className="text-xs text-muted-foreground">Alternative titles: {book.altTitles}</p>}
                <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground">
                  <div><strong>{t("author")}:</strong> {book.author?.nameEn ?? "—"}</div>
                  <div><strong>{t("subject")}:</strong> {book.subject ?? "—"}</div>
                  <div><strong>{t("school")}:</strong> {book.school ?? "—"}</div>
                  <div><strong>OCR:</strong> {book.ocrStatus}</div>
                </div>
                <div className="rounded-lg border border-dashed p-3 text-xs text-muted-foreground">
                  {t("requestOcr")}: page-level scans are preserved so users can inspect the original text once ingested
                  (OCR pipeline is modular — see Admin → Upload PDF).
                </div>
                <Button variant="outline" size="sm" onClick={() => setView("sources")} className="gap-1">
                  <ChevronRight className="h-3.5 w-3.5 rotate-180 rtl:rotate-0" /> {t("back")}
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* ─── SCHOLAR DETAIL DIALOG ─── */}
      <Dialog open={!!scholar} onOpenChange={(open) => !open && setView("sources")}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
          {scholar && (
            <>
              <DialogHeader>
                <DialogTitle className="font-scholarly text-xl">{scholar.nameEn}</DialogTitle>
                <DialogDescription className="flex flex-wrap items-center gap-2">
                  {scholar.nameAr && <span className="font-arabic text-base">{scholar.nameAr}</span>}
                  <span>{scholar.title ? `${scholar.title} · ` : ""}{scholar.deathYear ? `d. ${scholar.deathYear}` : ""}</span>
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  <SourceClassBadge classification={scholar.classification} isHanafi={scholar.isHanafi} />
                  {scholar.madhhab && <Badge variant="outline" className="text-[11px]">{scholar.madhhab}</Badge>}
                  {scholar.aqeedahTradition && <Badge variant="outline" className="text-[11px]">Aqeedah: {scholar.aqeedahTradition}</Badge>}
                  {scholar.region && <Badge variant="outline" className="text-[11px]">{scholar.region}</Badge>}
                </div>
                {scholar.biographyEn && <p className="text-sm leading-relaxed">{scholar.biographyEn}</p>}
                <div>
                  <h4 className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">{t("works")}</h4>
                  <ul className="list-inside list-disc space-y-1 text-sm">
                    {(scholar.books ?? []).map((b) => (
                      <li key={b.slug}>
                        <button className="text-emerald-800 underline-offset-2 hover:underline dark:text-emerald-300" onClick={() => setView("sources", `book/${b.slug}`)}>
                          {b.titleEn}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                {(scholar.scholarlyViews ?? []).length > 0 && (
                  <ScholarlyCard title="Individual Scholarly Views">
                    <p className="mb-2 text-xs italic text-muted-foreground">
                      An individual scholar&apos;s formulation is not automatically unanimous Hanafi doctrine.
                    </p>
                    <ul className="space-y-2 text-sm">
                      {(scholar.scholarlyViews ?? []).map((v, i) => (
                        <li key={i} className="border-s-2 border-amber-300 ps-3 dark:border-amber-700">
                          <strong>{v.issue}:</strong> {v.view} {!v.isMajority && <Badge variant="outline" className="ms-1 text-[10px]">individual view</Badge>}
                        </li>
                      ))}
                    </ul>
                  </ScholarlyCard>
                )}
                <Button variant="outline" size="sm" onClick={() => setView("sources")} className="gap-1">
                  <ChevronRight className="h-3.5 w-3.5 rotate-180 rtl:rotate-0" /> {t("back")}
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
