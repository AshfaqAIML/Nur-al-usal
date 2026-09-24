"use client";

import { useEffect, useState } from "react";
import { BookMarked, Building2, ChevronRight, ScrollText, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { usePlatform, useT } from "@/lib/store";
import { apiGet, Book, Fatwa, Scholar } from "@/lib/api";
import { SourceClassBadge, VerificationBadge, OcrStatusTag } from "@/components/platform/badges";
import { ScholarlyCard, UrduText } from "@/components/platform/text";
import { coverClass } from "@/components/platform/views/home";
import {
  BookSpine,
  CatalogRow,
  CitationBlock,
  EmptyState,
  GeometricDivider,
  ManuscriptPanel,
} from "@/components/platform/architectural";
import { cn } from "@/lib/utils";

export function SourcesView({ param }: { param?: string | null }) {
  const t = useT();
  const { setView } = usePlatform();
  const { toast } = useToast();
  const [tab, setTab] = useState<string>("books");
  const [books, setBooks] = useState<Book[] | null>(null);
  const [scholars, setScholars] = useState<Scholar[] | null>(null);
  const [fatwas, setFatwas] = useState<Fatwa[] | null>(null);
  const [book, setBook] = useState<Book | null>(null);
  const [scholar, setScholar] = useState<Scholar | null>(null);
  const [citationCopied, setCitationCopied] = useState(false);

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

  const bookCitation = (b: Book) => {
    const author = b.author ? `${b.author.nameEn}${b.author.deathYear ? ` (d. ${b.author.deathYear})` : ""}. ` : "";
    const title = `${b.titleEn}. `;
    const meta = [b.era, b.volumes > 1 ? `${b.volumes} vols.` : null, b.language].filter(Boolean).join(", ");
    return `${author}${title}${meta ? meta + ". " : ""}Nur al-Usul Digital Library.`;
  };

  const copyCitation = async (b: Book) => {
    try {
      await navigator.clipboard.writeText(bookCitation(b));
      setCitationCopied(true);
      toast({ title: "Citation copied to clipboard" });
      setTimeout(() => setCitationCopied(false), 1600);
    } catch {
      toast({ title: "Could not copy citation", variant: "destructive" });
    }
  };

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
          {books && books.length === 0 && <EmptyState title="The catalog is empty" hint="Books appear here once added through the admin library upload." />}
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
          {scholars && scholars.length === 0 && <EmptyState title="No scholars recorded" hint="Scholar profiles anchor the isnad of every claim on this platform." />}
        </TabsContent>

        {/* ─── FATWAS (Fatawa Explorer) ─── */}
        <TabsContent value="fatwas" className="mt-5">
          {!fatwas && <div className="space-y-3">{[...Array(4)].map((_, i) => <Skeleton key={i} className="h-28 rounded-xl" />)}</div>}
          <div className="space-y-3">
            {(fatwas ?? []).map((f) => (
              <Card key={f.id} className="relative overflow-hidden border-border/70">
                <BookSpine />
                <CardContent className="p-5 ps-6">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="max-w-2xl font-scholarly text-sm font-bold leading-snug">{f.question}</h3>
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
          {fatwas && fatwas.length === 0 && <EmptyState title="No fatwas in the collection yet" hint="Fatwa entries are ingested alongside their volume and page metadata." />}
        </TabsContent>
      </Tabs>

      {/* ─── BOOK DETAIL — manuscript reading environment ─── */}
      <Dialog open={!!book} onOpenChange={(open) => !open && setView("sources")}>
        <DialogContent className="max-h-[88vh] overflow-y-auto sm:max-w-2xl">
          {book && (
            <>
              {/* Arch-framed cover band — the "reading room" entrance */}
              <div className="relative -mx-6 -mt-3 mb-4 overflow-hidden border-b border-brass/25 bg-secondary/70 pattern-weave">
                <div className="mx-auto flex max-w-md items-center justify-center px-8 pt-6">
                  <div className={cn("flex h-32 w-full items-center justify-center rounded-t-[999px] border border-b-0 border-brass/40 shadow-subtle", coverClass(book.coverColor))}>
                    <span className="font-arabic mt-6 px-6 text-center text-xl leading-snug" dir="rtl">{book.titleAr ?? book.titleEn}</span>
                  </div>
                </div>
              </div>

              <DialogHeader className="text-start">
                <DialogTitle className="font-scholarly text-2xl leading-snug">{book.titleEn}</DialogTitle>
                <DialogDescription className="space-x-1">
                  {book.titleUr && <UrduText text={book.titleUr} className="text-sm text-muted-foreground" />}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  <SourceClassBadge classification={book.classification} isHanafi={book.isHanafi} />
                  {book.era && <Badge variant="outline" className="text-[11px]">{t("era")}: {book.era}</Badge>}
                  {book.language && <Badge variant="outline" className="text-[11px]">{book.language}</Badge>}
                  {book.volumes > 1 && <Badge variant="outline" className="text-[11px]">{book.volumes} vols.</Badge>}
                </div>

                {/* Catalog card — library metadata ledger */}
                <dl className="divide-y divide-border/70 rounded-lg border bg-secondary/40 px-4 py-2">
                  <CatalogRow label={t("author")}>{book.author?.nameEn ?? "—"}{book.author?.deathYear ? ` (d. ${book.author.deathYear})` : ""}</CatalogRow>
                  <CatalogRow label={t("subject")}>{book.subject ?? "—"}</CatalogRow>
                  <CatalogRow label={t("school")}>{book.school ?? "—"}</CatalogRow>
                  <CatalogRow label="OCR"><OcrStatusTag status={book.ocrStatus} /></CatalogRow>
                </dl>

                <Tabs defaultValue="overview">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview" className="text-xs">Overview</TabsTrigger>
                    <TabsTrigger value="pages" className="text-xs">Pages / OCR</TabsTrigger>
                    <TabsTrigger value="citation" className="text-xs">Citation</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="mt-3 space-y-3">
                    {book.descriptionEn && (
                      <p className="prose-scholarly text-sm leading-relaxed text-foreground/90">{book.descriptionEn}</p>
                    )}
                    {book.altTitles && (
                      <p className="text-xs text-muted-foreground">Alternative titles: {book.altTitles}</p>
                    )}
                    <GeometricDivider />
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {t("requestOcr")}: page-level scans are preserved so users can inspect the original text once ingested
                      (OCR pipeline is modular — see Admin → Upload PDF).
                    </p>
                  </TabsContent>

                  <TabsContent value="pages" className="mt-3">
                    <ManuscriptPanel>
                      <div className="p-4">
                        <p className="font-scholarly text-sm font-semibold">Page-level manuscript environment</p>
                        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                          Once scanned pages are ingested for this work, the original page image, extracted Arabic text,
                          and translation are presented side by side here — the way a researcher reads at a manuscript desk:
                          navigation on one side, folio on the other.
                        </p>
                        <div className="mt-3 grid grid-cols-[1fr_2fr] gap-2 opacity-60" aria-hidden>
                          <div className="h-20 rounded border border-dashed" />
                          <div className="h-20 rounded border border-dashed pattern-weave" />
                        </div>
                        <p className="mt-2 text-[11px] text-muted-foreground">OCR pipeline status: <strong>{book.ocrStatus}</strong></p>
                      </div>
                    </ManuscriptPanel>
                  </TabsContent>

                  <TabsContent value="citation" className="mt-3">
                    <CitationBlock
                      label="Suggested citation"
                      citation={bookCitation(book)}
                      copied={citationCopied}
                      onCopy={() => copyCitation(book)}
                    />
                  </TabsContent>
                </Tabs>

                <Button variant="outline" size="sm" onClick={() => setView("sources")} className="gap-1">
                  <ChevronRight className="h-3.5 w-3.5 rotate-180 rtl:rotate-0" /> {t("back")}
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* ─── SCHOLAR DETAIL — profile chamber ─── */}
      <Dialog open={!!scholar} onOpenChange={(open) => !open && setView("sources")}>
        <DialogContent className="max-h-[88vh] overflow-y-auto sm:max-w-2xl">
          {scholar && (
            <>
              {/* Arch band header */}
              <div className="relative -mx-6 -mt-3 mb-4 overflow-hidden border-b border-brass/25 bg-secondary/70 pattern-weave">
                <div className="mx-auto flex max-w-md items-end justify-center px-8 pt-6">
                  <div className="flex h-16 w-full items-center justify-center rounded-t-[999px] border border-b-0 border-brass/40 bg-card/70">
                    {scholar.nameAr && <span className="font-arabic text-lg text-emerald-900 dark:text-emerald-200" dir="rtl">{scholar.nameAr}</span>}
                  </div>
                </div>
              </div>

              <DialogHeader className="text-start">
                <DialogTitle className="font-scholarly text-2xl">{scholar.nameEn}</DialogTitle>
                <DialogDescription>
                  {scholar.title ? `${scholar.title} · ` : ""}{scholar.deathYear ? `d. ${scholar.deathYear}` : ""}{scholar.era ? ` · ${scholar.era}` : ""}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  <SourceClassBadge classification={scholar.classification} isHanafi={scholar.isHanafi} />
                  {scholar.madhhab && <Badge variant="outline" className="text-[11px]">{scholar.madhhab}</Badge>}
                  {scholar.aqeedahTradition && <Badge variant="outline" className="text-[11px]">Aqeedah: {scholar.aqeedahTradition}</Badge>}
                  {scholar.region && <Badge variant="outline" className="text-[11px]">{scholar.region}</Badge>}
                </div>
                {scholar.biographyEn && <p className="prose-scholarly text-sm leading-relaxed text-foreground/90">{scholar.biographyEn}</p>}

                <div>
                  <h4 className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">{t("works")}</h4>
                  <ul className="space-y-1.5">
                    {(scholar.books ?? []).map((b) => (
                      <li key={b.slug} className="group relative overflow-hidden rounded-lg border bg-card/60 ps-4 transition-colors hover:border-brass/40">
                        <BookSpine />
                        <button className="w-full py-2 text-start text-sm font-medium text-emerald-800 underline-offset-2 hover:underline dark:text-emerald-300" onClick={() => setView("sources", `book/${b.slug}`)}>
                          {b.titleEn}
                        </button>
                      </li>
                    ))}
                    {(scholar.books ?? []).length === 0 && <li className="text-xs italic text-muted-foreground">No catalogued works linked yet.</li>}
                  </ul>
                </div>

                {(scholar.scholarlyViews ?? []).length > 0 && (
                  <ScholarlyCard title="Individual Scholarly Views">
                    <p className="mb-2 text-xs italic text-muted-foreground">
                      An individual scholar&apos;s formulation is not automatically unanimous Hanafi doctrine.
                    </p>
                    <ul className="space-y-2 text-sm">
                      {(scholar.scholarlyViews ?? []).map((v, i) => (
                        <li key={i} className="border-s-2 border-brass/60 ps-3">
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
