"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { usePlatform, useT } from "@/lib/store";
import { apiGet, Category, Comparison, Misconception, Objection } from "@/lib/api";
import { ClassificationBadge } from "@/components/platform/badges";
import { EvidenceList, ScholarlyCard, UrduText } from "@/components/platform/text";
import { cn } from "@/lib/utils";

interface TopicDetail {
  id: string; slug: string; titleEn: string; titleUr: string | null; titleAr: string | null;
  arabicTerm: string | null; summaryEn: string | null; summaryUr: string | null; isContested: boolean;
  category: { nameEn: string; slug: string };
  misconceptions: Misconception[];
  objections: Objection[];
  comparisons: Comparison[];
}

export function KnowledgeView({ slug }: { slug?: string | null }) {
  const { setView } = usePlatform();
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [topic, setTopic] = useState<TopicDetail | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    apiGet<{ categories: Category[] }>("/api/topics").then((d) => setCategories(d.categories)).catch(() => setCategories([]));
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!slug) { if (!cancelled) setTopic(null); return; }
      if (!cancelled) setLoading(true);
      try {
        const d = await apiGet<{ topic: TopicDetail }>(`/api/topics?slug=${encodeURIComponent(slug)}`);
        if (!cancelled) setTopic(d.topic);
      } catch { if (!cancelled) setTopic(null); }
      finally { if (!cancelled) setLoading(false); }
    })();
    return () => { cancelled = true; };
  }, [slug]);

  // ─── Topic detail ───
  if (slug) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <Button variant="ghost" size="sm" className="mb-4" onClick={() => setView("knowledge")}>
          <ChevronRight className="me-1 h-4 w-4 rotate-180 rtl:rotate-0" aria-hidden /> Knowledge Base
        </Button>
        {loading && <Skeleton className="h-64 w-full rounded-xl" />}
        {!loading && !topic && <p className="text-sm text-muted-foreground">Topic not found.</p>}
        {topic && (
          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline">{topic.category.nameEn}</Badge>
                {topic.isContested && <Badge className="bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-950 dark:text-amber-200">Contested — multiple scholarly positions</Badge>}
              </div>
              <div className="mt-2 flex flex-wrap items-baseline gap-3">
                <h1 className="font-scholarly text-3xl font-bold">{topic.titleEn}</h1>
                {topic.arabicTerm && <span className="font-arabic text-2xl text-emerald-800 dark:text-emerald-300">{topic.arabicTerm}</span>}
              </div>
              <UrduText text={topic.titleUr} className="text-base text-muted-foreground" />
              {topic.summaryEn && <p className="mt-3 leading-relaxed text-foreground/90">{topic.summaryEn}</p>}
              {topic.summaryUr && <UrduText text={topic.summaryUr} className="mt-2 text-sm text-muted-foreground" />}
            </div>

            {topic.misconceptions.length > 0 && (
              <ScholarlyCard title="Related Misconceptions" icon={<span aria-hidden>⚠️</span>}>
                <div className="space-y-3">
                  {topic.misconceptions.map((m) => (
                    <button key={m.id} onClick={() => setView("misconceptions", m.slug)} className="block w-full rounded-lg border bg-muted/30 p-3 text-start transition-colors hover:bg-accent/40">
                      <p className="text-sm font-medium">“{m.claim}”</p>
                      <div className="mt-1.5"><ClassificationBadge status={m.verificationStatus} /></div>
                    </button>
                  ))}
                </div>
              </ScholarlyCard>
            )}

            {topic.objections.length > 0 && (
              <ScholarlyCard title="Related Objections & Answers">
                <div className="space-y-3">
                  {topic.objections.map((o) => (
                    <div key={o.id} className="rounded-lg border bg-muted/30 p-3">
                      <p className="text-sm font-semibold">{o.question}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{o.answer}</p>
                    </div>
                  ))}
                </div>
              </ScholarlyCard>
            )}

            {topic.comparisons.length > 0 && (
              <ScholarlyCard title="Madhhab Comparison" icon={<span aria-hidden>⚖️</span>}>
                <div className="space-y-4">
                  {topic.comparisons.map((c) => <ComparisonTable key={c.id} comparison={c} />)}
                </div>
              </ScholarlyCard>
            )}
          </div>
        )}
      </div>
    );
  }

  // ─── Category/topic listing ───
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <header className="mb-8">
        <h1 className="font-scholarly text-3xl font-bold">Knowledge Base</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Aqeedah, Fiqh, Salah Differences and Taqlid — with the school&apos;s evidence and an honest record of what is contested.
        </p>
      </header>

      {!categories && (
        <div className="grid gap-4 md:grid-cols-2">{[...Array(4)].map((_, i) => <Skeleton key={i} className="h-48 rounded-xl" />)}</div>
      )}
      <div className="space-y-10">
        {(categories ?? []).map((c) => (
          <section key={c.id} aria-label={c.nameEn}>
            <div className="ornament-divider mb-5">
              <h2 className="font-scholarly text-2xl font-bold">{c.nameEn}</h2>
              <span className="font-arabic text-xl text-emerald-800 dark:text-emerald-300">{c.nameAr}</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {c.topics.map((tp) => (
                <Card
                  key={tp.id}
                  className="card-lift cursor-pointer border-border/70"
                  onClick={() => setView("knowledge", tp.slug)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-semibold leading-snug">{tp.titleEn}</h3>
                      {tp.isContested && <Badge variant="outline" className="shrink-0 border-amber-300 bg-amber-50 text-[10px] text-amber-900 dark:bg-amber-950 dark:text-amber-200 dark:border-amber-800">contested</Badge>}
                    </div>
                    {tp.arabicTerm && <p className="font-arabic mt-1 text-base text-emerald-800 dark:text-emerald-300">{tp.arabicTerm}</p>}
                    <UrduText text={tp.titleUr} className="text-xs text-muted-foreground" />
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{tp.summaryEn}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export function ComparisonTable({ comparison, compact = false }: { comparison: Comparison; compact?: boolean }) {
  const cols = [
    { key: "hanafi", label: "Hanafi", emphasize: true },
    { key: "shafii", label: "Shafi'i", emphasize: false },
    { key: "maliki", label: "Maliki", emphasize: false },
    { key: "hanbali", label: "Hanbali", emphasize: false },
    { key: "other", label: "Other (incl. Ahl-e-Hadith)", emphasize: false },
  ] as const;

  return (
    <div className="space-y-2">
      <h4 className="font-scholarly text-base font-bold">{comparison.issue}</h4>
      <div className="grid gap-2 md:grid-cols-5">
        {cols.map((col) => {
          const data = parseCell(comparison[col.key]);
          return (
            <div
              key={col.key}
              className={cn(
                "rounded-lg border p-3",
                col.emphasize ? "border-emerald-300 bg-emerald-50/60 dark:border-emerald-800 dark:bg-emerald-950/40" : "bg-muted/30"
              )}
            >
              <p className={cn("text-[11px] font-bold uppercase tracking-wide", col.emphasize ? "text-emerald-800 dark:text-emerald-300" : "text-muted-foreground")}>
                {col.label}
              </p>
              <p className="mt-1.5 text-xs font-semibold leading-snug">{data?.position ?? "—"}</p>
              {!compact && data?.evidence && <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground"><strong>Evidence:</strong> {data.evidence}</p>}
              {!compact && data?.methodology && <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground"><strong>Method:</strong> {data.methodology}</p>}
              {!compact && data?.majorScholars && <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground"><strong>Scholars:</strong> {data.majorScholars}</p>}
              {!compact && data?.qualifications && <p className="mt-1 text-[11px] leading-relaxed text-amber-800 dark:text-amber-400"><strong>Note:</strong> {data.qualifications}</p>}
            </div>
          );
        })}
      </div>
      {comparison.notes && <p className="text-xs italic text-muted-foreground">Note: {comparison.notes}</p>}
      <p className="text-[11px] text-muted-foreground">
        Neutral comparison — the platform scores no winner, loser, or &quot;most correct&quot; rating.
      </p>
    </div>
  );
}

interface Cell { position?: string; evidence?: string; methodology?: string; majorScholars?: string; qualifications?: string | null }
export function parseCell(json: string | null): Cell | null {
  if (!json) return null;
  try { return JSON.parse(json) as Cell; } catch { return null; }
}
