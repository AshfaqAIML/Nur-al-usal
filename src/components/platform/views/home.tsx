"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowRight, BookMarked, Building2, CheckCircle2, GitCompare, Landmark, RefreshCw, ScrollText, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { usePlatform, useT } from "@/lib/store";
import { apiGet, BootstrapData, QuranVerse } from "@/lib/api";
import { ClassificationBadge, SourceClassBadge, VerificationBadge } from "@/components/platform/badges";
import { UrduText } from "@/components/platform/text";
import { cn } from "@/lib/utils";

export function HomeView() {
  const t = useT();
  const { setView } = usePlatform();
  const [data, setData] = useState<BootstrapData | null>(null);
  const [ayah, setAyah] = useState<QuranVerse | null>(null);
  const [ayahLoading, setAyahLoading] = useState(true);

  useEffect(() => {
    apiGet<BootstrapData>("/api/bootstrap").then(setData).catch(() => setData(null));
  }, []);

  const loadAyah = useCallback(() => {
    setAyahLoading(true);
    apiGet<{ verses: QuranVerse[] }>("/api/quran?random=1")
      .then((d) => setAyah(d.verses[0] ?? null))
      .catch(() => setAyah(null))
      .finally(() => setAyahLoading(false));
  }, []);

  useEffect(() => {
    const id = setTimeout(loadAyah, 0);
    return () => clearTimeout(id);
  }, [loadAyah]);

  if (!data) {
    return (
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-10 sm:px-6">
        <Skeleton className="h-64 w-full rounded-2xl" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-28 rounded-xl" />)}
        </div>
        <Skeleton className="h-48 w-full rounded-xl" />
      </div>
    );
  }

  const stats = [
    { label: t("topicsLabel"), value: data.stats.topics, icon: Landmark },
    { label: t("misconceptionsLabel"), value: data.stats.misconceptions, icon: CheckCircle2 },
    { label: t("objectionsLabel"), value: data.stats.objections, icon: ScrollText },
    { label: t("books"), value: data.stats.books, icon: BookMarked },
    { label: t("scholarsLabel"), value: data.stats.scholars, icon: Users },
    { label: t("hadithCollection"), value: data.stats.hadith, icon: ScrollText },
    { label: t("quran"), value: data.stats.quran, icon: BookMarked },
    { label: t("comparisonsLabel"), value: data.stats.comparisons, icon: GitCompare },
  ];

  return (
    <div className="flex flex-col">
      {/* ─── HERO ─── */}
      <section className="hero-pattern border-b bg-gradient-to-b from-emerald-50/70 to-background dark:from-emerald-950/30">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 border-emerald-300 bg-white/60 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-200">
              <Sparkles className="me-1 h-3 w-3" /> Source-first · Citation-first
            </Badge>
            <h1 className="font-scholarly text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {t("heroTitle")}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t("heroSubtitle")}
            </p>
            <UrduText text="عقیدہ، فقہ، کلاسیکی علما، دلائل اور غلط فہمیوں کی تحقیق — ہر حوالہ مصدر کے ساتھ" className="mt-3 hidden text-emerald-900/80 dark:text-emerald-200/80 md:block" />
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800 text-white" onClick={() => setView("ask")}>
                {t("askQuestion")} <ArrowRight className="ms-1 h-4 w-4 rtl-flip" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => setView("search", "focus")}>
                <Sparkles className="me-1 h-4 w-4" /> {t("searchKB")}
              </Button>
              <Button size="lg" variant="outline" onClick={() => setView("sources")}>
                <BookMarked className="me-1 h-4 w-4" /> {t("exploreSources")}
              </Button>
              <Button size="lg" variant="outline" onClick={() => setView("misconceptions")}>
                <CheckCircle2 className="me-1 h-4 w-4" /> {t("browseMisconceptions")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VERSE OF THE VISIT ─── */}
      <section aria-label={t("verseOfVisit")} className="border-b bg-background">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
          <Card className="ayah-card border-emerald-200/70 bg-gradient-to-b from-emerald-50/60 to-background dark:border-emerald-900/70 dark:from-emerald-950/30">
            <CardContent className="p-6 text-center sm:p-8">
              <div className="ornament-divider justify-center">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:text-emerald-300">
                  {t("verseOfVisit")}
                </span>
              </div>
              {ayahLoading ? (
                <div className="space-y-3 py-2">
                  <Skeleton className="mx-auto h-8 w-3/4" />
                  <Skeleton className="mx-auto h-4 w-1/2" />
                </div>
              ) : ayah ? (
                <>
                  <p className="font-arabic mt-4 text-2xl leading-[2.2] sm:text-3xl">{ayah.arabic}</p>
                  <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{ayah.translationEn}</p>
                  <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                    <Badge variant="outline" className="text-[11px]">
                      {ayah.surahNameEn} {ayah.surah}:{ayah.ayah} · {ayah.surahNameAr}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="no-print h-7 gap-1.5 text-[11px] text-muted-foreground"
                      onClick={loadAyah}
                    >
                      <RefreshCw className={cn("h-3 w-3", ayahLoading && "animate-spin")} /> {t("refreshVerse")}
                    </Button>
                  </div>
                </>
              ) : (
                <p className="py-3 text-sm text-muted-foreground">—</p>
              )}
              <p className="mt-3 text-[10px] italic text-muted-foreground/70">{t("verseOfVisitNote")}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section aria-label={t("stats")} className="border-b bg-muted/30">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-4 py-6 sm:grid-cols-4 sm:px-6 lg:grid-cols-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1 px-2 py-3 text-center">
              <s.icon className="h-4 w-4 text-emerald-700 dark:text-emerald-400" aria-hidden />
              <span className="font-scholarly text-2xl font-bold">{s.value}</span>
              <span className="text-[11px] uppercase tracking-wide text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl flex-1 space-y-12 px-4 py-10 sm:px-6">
        {/* ─── MISCONCEPTIONS + POPULAR QUESTIONS ─── */}
        <section className="grid gap-6 lg:grid-cols-2">
          <div>
            <SectionHeader title={t("commonMisconceptions")} onMore={() => setView("misconceptions")} />
            <div className="space-y-3">
              {data.featuredMisconceptions.map((m) => (
                <Card key={m.id} className="card-lift group cursor-pointer border-border/70" onClick={() => setView("misconceptions", m.slug)}>
                  <CardContent className="p-4">
                    <p className="text-sm font-medium leading-snug">“{m.claim}”</p>
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <ClassificationBadge status={m.verificationStatus} />
                      <span className="text-[11px] text-muted-foreground">{m.views} {t("views")}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader title={t("popularQuestions")} onMore={() => setView("qa")} />
            <div className="space-y-3">
              {data.featuredQuestions.map((q) => (
                <Card key={q.id} className="card-lift group cursor-pointer border-border/70" onClick={() => setView("qa", q.id)}>
                  <CardContent className="p-4">
                    <p className="text-sm font-medium leading-snug">{q.text}</p>
                    <div className="mt-2 flex items-center gap-2">
                      {q.category && <Badge variant="outline" className="text-[10px]">{q.category.nameEn}</Badge>}
                      <Badge variant="outline" className="text-[10px] bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800">
                        {q.answers && q.answers.length > 0 ? "Answered" : "Awaiting review"}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ─── KNOWLEDGE AREAS ─── */}
        <section>
          <SectionHeader title={t("openKnowledgeBase")} onMore={() => setView("knowledge")} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.categories.map((c) => (
              <Card key={c.id} className="card-lift cursor-pointer border-border/70" onClick={() => setView("knowledge", c.slug)}>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <span className="font-arabic text-xl text-emerald-800 dark:text-emerald-300">{c.nameAr}</span>
                    <Badge variant="outline" className="text-[10px]">{c.topics.length} {t("topicsLabel")}</Badge>
                  </div>
                  <h3 className="mt-2 font-scholarly text-lg font-bold">{c.nameEn}</h3>
                  <UrduText text={c.nameUr} className="text-xs text-muted-foreground mt-0.5" />
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{c.descriptionEn}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ─── COMPARISON ENGINE teaser ─── */}
        <section>
          <SectionHeader title={t("comparePositions")} onMore={() => setView("compare")} />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {data.comparisons.map((c) => (
              <button key={c.id} onClick={() => setView("compare", c.id)} className="card-lift rounded-xl border bg-card p-4 text-start">
                <GitCompare className="h-4 w-4 text-emerald-700 dark:text-emerald-400" aria-hidden />
                <p className="mt-2 text-sm font-semibold leading-snug">{c.issue}</p>
                <p className="mt-1 text-[11px] text-muted-foreground">Hanafi · Shafi'i · Maliki · Hanbali · Other</p>
              </button>
            ))}
          </div>
        </section>

        {/* ─── FEATURED SOURCES ─── */}
        <section>
          <SectionHeader title={t("featuredSources")} onMore={() => setView("sources")} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.featuredBooks.slice(0, 8).map((b) => (
              <Card key={b.id} className="card-lift cursor-pointer border-border/70" onClick={() => setView("sources", `book/${b.slug}`)}>
                <CardContent className="p-4">
                  <div className={cn("flex h-24 items-center justify-center rounded-lg border", coverClass(b.coverColor))}>
                    <span className="font-arabic px-3 text-center text-lg leading-snug" dir="rtl">{b.titleAr ?? b.titleEn}</span>
                  </div>
                  <h3 className="mt-3 line-clamp-2 text-sm font-semibold leading-snug">{b.titleEn}</h3>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    {t("by")} {b.author?.nameEn ?? "—"}{b.author?.deathYear ? ` (d. ${b.author.deathYear})` : ""}
                  </p>
                  <div className="mt-2">
                    <SourceClassBadge classification={b.classification} isHanafi={b.isHanafi} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-3 text-[11px] text-muted-foreground">
            {t("classification_late_source")} — e.g. Fatawa Razvia, Fatawa Hindiyyah (teal badge).
          </p>
        </section>

        {/* ─── OBJECTIONS + CLAIM CHECKER CTA ─── */}
        <section className="grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionHeader title={t("objectionsLabel")} onMore={() => setView("objections")} />
            <div className="space-y-2">
              {data.objectionsTop.slice(0, 6).map((o) => (
                <button key={o.id} onClick={() => setView("objections", o.id)} className="flex w-full items-center justify-between gap-3 rounded-lg border bg-card px-4 py-3 text-start transition-colors hover:bg-accent/50">
                  <span className="text-sm font-medium leading-snug">{o.question}</span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground rtl-flip" aria-hidden />
                </button>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <Card className="h-full border-emerald-200 bg-gradient-to-br from-emerald-50 to-background dark:border-emerald-900 dark:from-emerald-950/40">
              <CardContent className="flex h-full flex-col justify-between p-6">
                <div>
                  <Badge className="bg-emerald-700 text-white">Interactive</Badge>
                  <h3 className="mt-3 font-scholarly text-xl font-bold">{t("isThisReallyHanafi")}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t("claimsIntro")}</p>
                  <p className="mt-2 text-xs italic text-muted-foreground">{t("neverWithoutWhy")}</p>
                </div>
                <Button className="mt-5 w-full bg-emerald-700 hover:bg-emerald-800 text-white" onClick={() => setView("claims")}>
                  {t("verifyClaim")} <ArrowRight className="ms-1 h-4 w-4 rtl-flip" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}

function SectionHeader({ title, onMore }: { title: string; onMore?: () => void }) {
  const t = useT();
  return (
    <div className="mb-4 flex items-center justify-between gap-3">
      <h2 className="font-scholarly text-xl font-bold tracking-tight">{title}</h2>
      {onMore && (
        <Button variant="ghost" size="sm" className="gap-1 text-emerald-800 dark:text-emerald-300" onClick={onMore}>
          {t("readMore")} <ArrowRight className="h-3.5 w-3.5 rtl-flip" />
        </Button>
      )}
    </div>
  );
}

export function coverClass(color: string): string {
  const map: Record<string, string> = {
    emerald: "bg-emerald-100 border-emerald-200 dark:bg-emerald-950 dark:border-emerald-800",
    amber: "bg-amber-100 border-amber-200 dark:bg-amber-950 dark:border-amber-800",
    teal: "bg-teal-100 border-teal-200 dark:bg-teal-950 dark:border-teal-800",
    stone: "bg-stone-100 border-stone-200 dark:bg-stone-900 dark:border-stone-700",
    rose: "bg-rose-100 border-rose-200 dark:bg-rose-950 dark:border-rose-800",
  };
  return map[color] ?? map.emerald;
}
