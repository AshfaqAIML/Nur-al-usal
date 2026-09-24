"use client";

import { useEffect, useState } from "react";
import { Eye, Quote, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { usePlatform, useT } from "@/lib/store";
import { apiGet, Objection, parseJson } from "@/lib/api";
import { useDocTitle } from "@/lib/use-doc-title";
import { ShareBar } from "@/components/platform/share-bar";
import { DetailBreadcrumb, ReadingProgress } from "@/components/platform/detail-chrome";
import { RelatedResearch, RelatedMisconception, RelatedObjection } from "@/components/platform/related-research";
import { cn } from "@/lib/utils";

interface EvidenceQuote { ref: string; quote: string; translation?: string }
interface RelatedPayload { objections: RelatedObjection[]; misconceptions: RelatedMisconception[] }

export function ObjectionsView({ id }: { id?: string | null }) {
  const { detail, related } = useObjectionDetail(id);

  if (id) return <ObjectionDetail id={id} detail={detail} related={related} />;
  return <ObjectionList />;
}

function useObjectionDetail(id?: string | null) {
  const [detail, setDetail] = useState<Objection | null | undefined>(undefined); // undefined = loading
  const [related, setRelated] = useState<RelatedPayload | null>(null);
  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!id) { if (!cancelled) setDetail(null); return; }
      try {
        const d = await apiGet<{ objection: Objection; related?: RelatedPayload }>(`/api/objections?id=${encodeURIComponent(id)}`);
        if (!cancelled) { setDetail(d.objection); setRelated(d.related ?? null); }
      } catch { if (!cancelled) setDetail(null); }
    })();
    return () => { cancelled = true; };
  }, [id]);
  return { detail, related };
}

function ObjectionDetail({ id, detail, related }: { id: string; detail: Objection | null | undefined; related: RelatedPayload | null }) {
  const t = useT();
  const { setView } = usePlatform();
  useDocTitle(detail?.question ?? null);

  if (detail === undefined) {
    return (
      <div className="mx-auto max-w-3xl space-y-4 px-4 py-10 sm:px-6">
        <Skeleton className="h-8 w-40" />
        <Skeleton className="h-40 w-full rounded-xl" />
        <Skeleton className="h-24 w-full rounded-xl" />
      </div>
    );
  }

  if (!detail) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <p className="text-sm text-muted-foreground">{t("objectionNotFound")}</p>
        <Button variant="outline" size="sm" className="mt-4" onClick={() => setView("objections")}>
          {t("backToObjections")}
        </Button>
      </div>
    );
  }

  const evidence = parseJson<EvidenceQuote[]>(detail.evidence, []);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <ReadingProgress targetId="objection-article" />

      <DetailBreadcrumb sectionLabel={t("objectionsTitle")} sectionView="objections" current={detail.question} />

      <article id="objection-article" className="print-area">
        <Card className="border-border/70">
          <CardContent className="p-6">
            <div className="flex flex-wrap items-center gap-1.5">
              <Badge variant="outline" className={cn("text-[10px]", detail.isAqeedah
                ? "border-amber-300 bg-amber-50 text-amber-900 dark:bg-amber-950 dark:text-amber-200 dark:border-amber-800"
                : "border-emerald-300 bg-emerald-50 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200 dark:border-emerald-800")}>
                {detail.isAqeedah ? t("aqeedahIssue") : t("fiqhIssue")}
              </Badge>
              <span className="inline-flex items-center gap-0.5 text-[11px] text-muted-foreground">
                <Eye className="h-3 w-3" /> {detail.views} {t("views")}
              </span>
            </div>

            <h1 className="mt-3 font-scholarly text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
              {detail.question}
            </h1>

            <p className="prose-scholarly mt-4 text-[15px] leading-relaxed text-foreground/90">{detail.answer}</p>

            {detail.hanafiPosition && (
              <div className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50/60 p-4 dark:border-emerald-900 dark:bg-emerald-950/40">
                <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                  {t("hanafiPositionLabel")}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed">{detail.hanafiPosition}</p>
              </div>
            )}

            {evidence.length > 0 && (
              <div className="mt-6">
                <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{t("evidence")}</h2>
                <div className="mt-2 space-y-3">
                  {evidence.map((ev, i) => (
                    <blockquote key={i} className="evidence-quote">
                      <Quote className="h-3.5 w-3.5 shrink-0 text-emerald-700/60 dark:text-emerald-400/60" aria-hidden />
                      <div className="min-w-0">
                        {ev.quote && <p className="font-arabic text-lg leading-loose">{ev.quote}</p>}
                        {ev.translation && <p className="mt-1 text-sm italic leading-relaxed text-muted-foreground">{ev.translation}</p>}
                        <cite className="mt-1.5 block text-[11px] font-semibold not-italic uppercase tracking-wide text-emerald-800 dark:text-emerald-300">
                          {ev.ref}
                        </cite>
                      </div>
                    </blockquote>
                  ))}
                </div>
              </div>
            )}

            {detail.disputed && (
              <p className="mt-5 rounded-md bg-muted/50 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
                <strong>{t("disputed")}:</strong> {detail.disputed}
              </p>
            )}

            {detail.topic && (
              <button onClick={() => setView("knowledge", detail.topic!.slug)} className="mt-4 text-xs font-medium text-emerald-800 underline-offset-2 hover:underline dark:text-emerald-300">
                {t("openResearchTopic")}: {detail.topic.titleEn} →
              </button>
            )}

            <div className="mt-6 border-t pt-4">
              <ShareBar title={detail.question} section={t("objectionsTitle")} printTargetId="objection-article" />
            </div>
          </CardContent>
        </Card>
      </article>

      <div className="mt-8">
        <RelatedResearch misconceptions={related?.misconceptions} objections={related?.objections} />
      </div>
    </div>
  );
}

function ObjectionList() {
  const t = useT();
  const { setView } = usePlatform();
  const [list, setList] = useState<Objection[] | null>(null);
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<"" | "aqeedah" | "fiqh">("");
  useDocTitle(t("objectionsTitle"));

  useEffect(() => {
    let cancelled = false;
    const id = setTimeout(() => {
      const params = new URLSearchParams();
      if (q.trim()) params.set("q", q.trim());
      if (tag === "aqeedah") params.set("aqeedah", "true");
      if (tag === "fiqh") params.set("aqeedah", "false");
      apiGet<{ objections: Objection[] }>(`/api/objections?${params.toString()}`)
        .then((d) => { if (!cancelled) setList(d.objections); })
        .catch(() => { if (!cancelled) setList([]); });
    }, 200);
    return () => { cancelled = true; clearTimeout(id); };
  }, [q, tag]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <header className="mb-6">
        <h1 className="font-scholarly text-3xl font-bold">{t("objectionsTitle")}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{t("objectionsSubtitle")}</p>
      </header>

      <div className="mb-5 flex flex-wrap items-center gap-2">
        <div className="relative min-w-56 flex-1">
          <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t("search") + " objections…"} className="ps-9" />
        </div>
        <div className="flex gap-1.5">
          {[{ v: "" as const, l: t("all") }, { v: "aqeedah" as const, l: t("aqeedahIssue") }, { v: "fiqh" as const, l: t("fiqhIssue") }].map((f) => (
            <button
              key={f.v}
              onClick={() => setTag(f.v)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                tag === f.v ? "border-emerald-600 bg-emerald-600 text-white" : "text-muted-foreground hover:bg-accent"
              )}
            >
              {f.l}
            </button>
          ))}
        </div>
      </div>

      {!list && <div className="space-y-3">{[...Array(6)].map((_, i) => <Skeleton key={i} className="h-24 rounded-xl" />)}</div>}
      <div className="space-y-3">
        {(list ?? []).map((o) => (
          <Card
            key={o.id}
            className="card-lift cursor-pointer border-border/70"
            onClick={() => setView("objections", o.id)}
          >
            <CardContent className="p-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h2 className="min-w-0 text-sm font-bold leading-snug">{o.question}</h2>
                <div className="flex shrink-0 gap-1.5">
                  <Badge variant="outline" className={cn("text-[10px]", o.isAqeedah
                    ? "border-amber-300 bg-amber-50 text-amber-900 dark:bg-amber-950 dark:text-amber-200 dark:border-amber-800"
                    : "border-emerald-300 bg-emerald-50 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200 dark:border-emerald-800")}>
                    {o.isAqeedah ? t("aqeedahIssue") : t("fiqhIssue")}
                  </Badge>
                </div>
              </div>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-foreground/90">{o.answer}</p>
              <div className="mt-2.5 flex items-center gap-3 text-[11px] text-muted-foreground">
                <span className="inline-flex items-center gap-0.5"><Eye className="h-3 w-3" /> {o.views} {t("views")}</span>
                {o.topic && <span>· {o.topic.titleEn}</span>}
                <span className="ms-auto font-medium text-emerald-800 dark:text-emerald-300">{t("readMore")} →</span>
              </div>
            </CardContent>
          </Card>
        ))}
        {list && list.length === 0 && <p className="py-8 text-center text-sm text-muted-foreground">{t("noResults")}</p>}
      </div>
    </div>
  );
}
