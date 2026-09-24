"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  BookMarked, BookOpen, ChevronLeft, ChevronRight, Landmark, Library, MessagesSquare,
  Scale, Search, ShieldQuestion, Sparkles, TriangleAlert, Users, type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { usePlatform, useT } from "@/lib/store";
import { apiGet, parseJson, type BankCluster, type BankDetailResponse, type BankListItem, type BankListResponse } from "@/lib/api";
import { useDocTitle } from "@/lib/use-doc-title";
import { EmptyState, NicheMarker, SectionHeading } from "@/components/platform/architectural";
import { DetailBreadcrumb } from "@/components/platform/detail-chrome";
import { VerificationBadge, FiqhAqeedahBadge } from "@/components/platform/badges";
import { BookmarkButton } from "@/components/platform/library";
import { ShareBar } from "@/components/platform/share-bar";
import { cn } from "@/lib/utils";

/* ─── Meta dictionaries ─── */
const DIFFICULTY_KEY: Record<string, string> = { BEGINNER: "diffBeginner", INTERMEDIATE: "diffIntermediate", ADVANCED: "diffAdvanced" };
const DIFFICULTY_STYLE: Record<string, string> = {
  BEGINNER: "bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-200 dark:border-emerald-800",
  INTERMEDIATE: "bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950 dark:text-amber-200 dark:border-amber-800",
  ADVANCED: "bg-stone-100 text-stone-800 border-stone-400 dark:bg-stone-900 dark:text-stone-200 dark:border-stone-700",
};
const TYPE_ICON: Record<string, LucideIcon> = {
  BEGINNER: Sparkles, FIQH: BookOpen, AQEEDAH: Landmark, METHODOLOGY: Library, HADITH: BookMarked,
  MISCONCEPTION: ShieldQuestion, OBJECTION: MessagesSquare, COMPARISON: Scale, HISTORICAL: Landmark,
  PRACTICAL: Users, TERMINOLOGY: BookOpen,
};
const SOURCE_ICON: Record<string, LucideIcon> = { QURAN: BookOpen, HADITH: BookMarked, BOOK: Library, FATWA: Landmark };

interface BankSourceJson {
  kind: string; ref: string; quote?: string; translation?: string; volume?: string; page?: string;
  status: string; note?: string;
}

export function BankView({ slug }: { slug?: string | null }) {
  return slug ? <BankDetail slug={slug} /> : <BankLanding />;
}

/* ══════════════════════════ LANDING ══════════════════════════ */

function BankLanding() {
  const t = useT();
  const { setView, lang } = usePlatform();
  useDocTitle(t("bankTitle"));

  const [data, setData] = useState<BankListResponse | null>(null);
  const [clusters, setClusters] = useState<BankCluster[] | null>(null);
  const [boot, setBoot] = useState<{ total: number; clusters: number; disputed: number; misconceptions: number; fatawaRazvia: number } | null>(null);
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
  const [flag, setFlag] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const debounce = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    apiGet<{ bank: { total: number; clusters: number; disputed: number; misconceptions: number; fatawaRazvia: number } }>("/api/bootstrap")
      .then((d) => setBoot(d.bank))
      .catch(() => {});
    apiGet<{ clusters: BankCluster[] }>("/api/bank/clusters").then((d) => setClusters(d.clusters)).catch(() => setClusters([]));
  }, []);

  const load = useCallback(() => {
    setLoading(true);
    const params = new URLSearchParams();
    if (q.trim().length >= 2) params.set("q", q.trim());
    if (category) params.set("category", category);
    if (difficulty) params.set("difficulty", difficulty);
    if (type) params.set("type", type);
    if (flag) params.set("flag", flag);
    params.set("page", String(page));
    params.set("limit", "12");
    apiGet<BankListResponse>(`/api/bank?${params.toString()}`)
      .then(setData)
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, [q, category, difficulty, type, flag, page]);

  useEffect(() => {
    if (debounce.current) clearTimeout(debounce.current);
    debounce.current = setTimeout(load, q ? 300 : 0);
    return () => { if (debounce.current) clearTimeout(debounce.current); };
  }, [load, q]);

  const catName = (c: BankListItem["category"]) => (c ? (lang === "ur" ? c.nameUr || c.nameEn : lang === "ar" ? c.nameAr || c.nameEn : c.nameEn) : "");

  const activeFilters = [category, difficulty, type, flag].filter(Boolean).length + (q.trim().length >= 2 ? 1 : 0);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {/* Header */}
      <header className="mb-6 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">{t("bankKicker")}</p>
        <h1 className="mt-1 font-scholarly text-3xl font-bold tracking-tight sm:text-4xl">{t("bankTitle")}</h1>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{t("bankIntro")}</p>
        {boot && (
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2" aria-label={t("bankStatsLabel")}>
            <StatChip icon={BookOpen} label={t("bankStatQuestions", { n: boot.total })} />
            <StatChip icon={Library} label={t("bankStatClusters", { n: boot.clusters })} />
            <StatChip icon={Scale} label={t("bankStatDisputed", { n: boot.disputed })} />
            <StatChip icon={ShieldQuestion} label={t("bankStatMisconceptions", { n: boot.misconceptions })} />
            <StatChip icon={BookMarked} label={t("bankStatRazvia", { n: boot.fatawaRazvia })} />
          </div>
        )}
      </header>

      {/* Search courtyard */}
      <div className="relative mx-auto mb-5 max-w-2xl">
        <Search className="pointer-events-none absolute start-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
        <Input
          value={q}
          onChange={(e) => { setPage(1); setQ(e.target.value); }}
          placeholder={t("bankSearchPlaceholder")}
          className="h-12 rounded-full border bg-background ps-11 pe-10 text-base shadow-sm"
          aria-label={t("bankSearchPlaceholder")}
        />
        {q && (
          <Button variant="ghost" size="icon" className="absolute end-2 top-1/2 h-8 w-8 -translate-y-1/2" onClick={() => setQ("")} aria-label={t("clearFilters")}>
            ✕
          </Button>
        )}
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
        <FilterSelect value={category} onChange={(v) => { setPage(1); setCategory(v); }} placeholder={t("bankFilterCategory")}
          options={(data?.facets.categories ?? []).map((c) => ({ value: c.id, label: `${c.nameEn ?? ""} (${c.count})` }))} />
        <FilterSelect value={difficulty} onChange={(v) => { setPage(1); setDifficulty(v); }} placeholder={t("bankFilterDifficulty")}
          options={["BEGINNER", "INTERMEDIATE", "ADVANCED"].map((d) => ({ value: d, label: t(DIFFICULTY_KEY[d] ?? d) }))} />
        <FilterSelect value={type} onChange={(v) => { setPage(1); setType(v); }} placeholder={t("bankFilterType")}
          options={["FIQH", "AQEEDAH", "MISCONCEPTION", "OBJECTION", "COMPARISON", "HISTORICAL", "METHODOLOGY", "PRACTICAL", "TERMINOLOGY", "HADITH", "BEGINNER"].map((d) => ({ value: d, label: d }))} />
        <div className="flex flex-wrap gap-1.5">
          {[
            { v: "misconception", label: t("bankFlagMisconception") },
            { v: "disputed", label: t("bankFlagDisputed") },
            { v: "sensitive", label: t("bankFlagPersonal") },
            { v: "fatawa-razvia", label: t("bankFlagRazvia") },
          ].map((f) => (
            <button
              key={f.v}
              onClick={() => { setPage(1); setFlag(flag === f.v ? "" : f.v); }}
              aria-pressed={flag === f.v}
              className={cn(
                "rounded-full border px-3 py-1.5 text-[11px] font-medium transition-colors",
                flag === f.v ? "border-emerald-600 bg-emerald-600 text-white" : "text-muted-foreground hover:bg-accent"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
        {activeFilters > 0 && (
          <Button variant="ghost" size="sm" className="h-8 text-xs" onClick={() => { setCategory(""); setDifficulty(""); setType(""); setFlag(""); setQ(""); setPage(1); }}>
            {t("clearFilters")}
          </Button>
        )}
      </div>

      {/* Results */}
      <SectionHeading title={loading ? t("bankResults") : t("bankResultsCounted", { n: data?.total ?? 0 })} />
      {loading && !data ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} className="h-40 rounded-xl" />)}
        </div>
      ) : data && data.questions.length === 0 ? (
        <EmptyState title={t("bankNoResults")} hint={t("bankNoResultsHint")}>
          <Button size="sm" variant="outline" onClick={() => setView("ask")}>{t("bankAskInstead")}</Button>
        </EmptyState>
      ) : data ? (
        <>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.questions.map((item) => (
              <BankCard key={item.id} item={item} catName={catName(item.category)} />
            ))}
          </div>
          {data.pages > 1 && (
            <nav className="mt-6 flex items-center justify-center gap-2" aria-label="Pagination">
              <Button variant="outline" size="sm" disabled={page <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))} aria-label={t("prevPage")}>
                <ChevronLeft className="h-4 w-4 rtl-flip" />
              </Button>
              <span className="text-xs text-muted-foreground tabular-nums">{page} / {data.pages}</span>
              <Button variant="outline" size="sm" disabled={page >= data.pages} onClick={() => setPage((p) => Math.min(data.pages, p + 1))} aria-label={t("nextPage")}>
                <ChevronRight className="h-4 w-4 rtl-flip" />
              </Button>
            </nav>
          )}
        </>
      ) : null}

      {/* Clusters */}
      {clusters && clusters.length > 0 && !activeFilters && (
        <section className="mt-10">
          <SectionHeading title={t("bankClustersTitle")} />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {clusters.map((c) => (
              <Card key={c.id} className="group overflow-hidden transition-shadow hover:shadow-subtle">
                <CardContent className="p-4">
                  <button
                    className="w-full text-start"
                    onClick={() => { setQ(c.titleEn); setPage(1); window.scrollTo({ top: 0 }); }}
                    aria-label={c.titleEn}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-scholarly text-sm font-semibold group-hover:text-emerald-800 dark:group-hover:text-emerald-300">{c.titleEn}</h3>
                      <Badge variant="outline" className="shrink-0 text-[10px] tabular-nums">{c.count}</Badge>
                    </div>
                    {c.descriptionEn && <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{c.descriptionEn}</p>}
                    <ul className="mt-2 space-y-1">
                      {c.questions.slice(0, 3).map((qq) => (
                        <li key={qq.slug} className="line-clamp-1 text-[11px] text-muted-foreground">· {qq.text}</li>
                      ))}
                      {c.count > 3 && <li className="text-[11px] font-medium text-emerald-700 dark:text-emerald-400">+{c.count - 3} {t("bankMoreInCluster")}</li>}
                    </ul>
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function StatChip({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1 text-[11px] font-medium text-muted-foreground">
      <Icon className="h-3.5 w-3.5 text-emerald-700 dark:text-emerald-400" aria-hidden />
      {label}
    </span>
  );
}

function FilterSelect({ value, onChange, placeholder, options }: {
  value: string; onChange: (v: string) => void; placeholder: string; options: { value: string; label: string }[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-8 rounded-md border bg-card px-2 text-xs text-foreground shadow-sm outline-none focus-visible:ring-1 focus-visible:ring-ring"
      aria-label={placeholder}
    >
      <option value="">{placeholder}</option>
      {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
  );
}

/* ══════════════════════════ CARD ══════════════════════════ */

function BankCard({ item, catName }: { item: BankListItem; catName: string }) {
  const t = useT();
  const { setView } = usePlatform();
  const TypeIcon = TYPE_ICON[item.questionType ?? ""] ?? BookOpen;
  return (
    <Card className="group relative h-full overflow-hidden pt-5 transition-all hover:-translate-y-0.5 hover:shadow-subtle">
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-700/70 via-amber-600/50 to-emerald-700/70" aria-hidden />
      <CardContent className="flex h-full flex-col p-4 pt-1">
        <button onClick={() => setView("bank", item.slug)} className="flex-1 text-start" aria-label={item.text}>
          <div className="flex items-start gap-2">
            <NicheMarker className="mt-0.5 shrink-0" />
            <h3 dir="auto" className="line-clamp-3 font-scholarly text-[15px] font-semibold leading-snug group-hover:text-emerald-800 dark:group-hover:text-emerald-300">
              {item.text}
            </h3>
          </div>
          {item.shortAnswer && (
            <p dir="auto" className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{item.shortAnswer}</p>
          )}
        </button>
        <div className="mt-3 flex flex-wrap items-center gap-1.5 border-t pt-2.5">
          <Badge variant="outline" className={cn("text-[10px]", DIFFICULTY_STYLE[item.difficulty ?? ""] ?? "")}>
            {t(DIFFICULTY_KEY[item.difficulty ?? ""] ?? (item.difficulty ?? ""))}
          </Badge>
          {item.isDisputed && (
            <Badge variant="outline" className="gap-1 text-[10px] text-yellow-800 dark:text-yellow-300"><Scale className="h-3 w-3" aria-hidden />{t("bankDisputedShort")}</Badge>
          )}
          {item.isMisconception && (
            <Badge variant="outline" className="gap-1 text-[10px] text-rose-800 dark:text-rose-300"><ShieldQuestion className="h-3 w-3" aria-hidden />{t("bankMisconceptionShort")}</Badge>
          )}
          {item.isSensitive && (
            <Badge variant="outline" className="gap-1 text-[10px] text-amber-800 dark:text-amber-300"><TriangleAlert className="h-3 w-3" aria-hidden />{t("bankPersonalShort")}</Badge>
          )}
          <span className="ms-auto inline-flex items-center gap-1 text-[10px] text-muted-foreground">
            <TypeIcon className="h-3 w-3" aria-hidden />
            {catName}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

/* ══════════════════════════ DETAIL ══════════════════════════ */

function BankDetail({ slug }: { slug: string }) {
  const t = useT();
  const { setView } = usePlatform();
  const [data, setData] = useState<BankDetailResponse | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [citeOpen, setCiteOpen] = useState<number | null>(null);
  useDocTitle(data ? data.question.text : null);

  const [prevSlug, setPrevSlug] = useState(slug);
  if (prevSlug !== slug) {
    // React-recommended derived-state reset when the route slug changes.
    setPrevSlug(slug);
    setData(null);
    setNotFound(false);
    setCiteOpen(null);
  }

  useEffect(() => {
    let cancelled = false;
    apiGet<BankDetailResponse>(`/api/bank/detail?slug=${encodeURIComponent(slug)}`)
      .then((d) => { if (!cancelled) setData(d); })
      .catch(() => { if (!cancelled) setNotFound(true); });
    return () => { cancelled = true; };
  }, [slug]);

  if (notFound) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16">
        <EmptyState title={t("bankNotFound")} hint={t("bankNotFoundHint")}>
          <Button size="sm" variant="outline" onClick={() => setView("bank")}>{t("bankBackToLibrary")}</Button>
        </EmptyState>
      </div>
    );
  }
  if (!data) {
    return (
      <div className="mx-auto max-w-4xl space-y-4 px-4 py-8">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-40 rounded-xl" />
        <Skeleton className="h-64 rounded-xl" />
      </div>
    );
  }

  const { question, answer, related } = data;
  const sources = parseJson<BankSourceJson[]>(answer?.sources ?? null, []);
  const citations = answer?.citations ?? [];
  const q = question.cluster;

  return (
    <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <DetailBreadcrumb
        sectionLabel={question.category ? `${question.category.nameEn}` : t("bankTitle")}
        sectionView="bank"
        current={question.text}
      />

      {/* Question header */}
      <Card className="arch-top overflow-hidden border">
        <div className="pattern-girih border-b bg-card px-5 pb-5 pt-7 sm:px-7">
          <div className="flex items-start gap-3">
            <NicheMarker className="mt-1.5 hidden shrink-0 sm:block" />
            <div className="min-w-0">
              <h1 dir="auto" className="font-scholarly text-2xl font-bold leading-snug tracking-tight sm:text-[1.7rem]">{question.text}</h1>
              <div className="mt-3 flex flex-wrap items-center gap-1.5">
                {question.difficulty && (
                  <Badge variant="outline" className={cn("text-[10px]", DIFFICULTY_STYLE[question.difficulty])}>
                    {t(DIFFICULTY_KEY[question.difficulty] ?? question.difficulty)}
                  </Badge>
                )}
                <FiqhAqeedahBadge value={answer?.aqeedahOrFiqh ?? null} />
                {question.questionType && (
                  <Badge variant="outline" className="gap-1 text-[10px]">
                    {(() => { const I = TYPE_ICON[question.questionType] ?? BookOpen; return <I className="h-3 w-3" aria-hidden />; })()}
                    {question.questionType}
                  </Badge>
                )}
                {question.category && (
                  <Badge variant="outline" className="text-[10px] text-muted-foreground">{question.category.nameEn}</Badge>
                )}
                {question.isDisputed && (
                  <Badge variant="outline" className="gap-1 text-[10px] text-yellow-800 dark:text-yellow-300"><Scale className="h-3 w-3" aria-hidden />{t("bankDisputedShort")}</Badge>
                )}
                <span className="ms-auto text-[10px] tabular-nums text-muted-foreground">{question.views} {t("viewsLabel")}</span>
              </div>
            </div>
          </div>
        </div>

        {question.variants.length > 0 && (
          <div className="border-b bg-secondary/40 px-5 py-3 sm:px-7">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{t("bankAlsoAsked")}</p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {question.variants.map((v) => (
                <span key={v} className="rounded-full border bg-background px-2.5 py-1 text-[11px] text-muted-foreground">“{v}”</span>
              ))}
            </div>
          </div>
        )}
      </Card>

      {!answer ? (
        <div className="mt-6">
          <EmptyState title={t("bankAnswerPending")} hint={t("bankAnswerPendingHint")} />
        </div>
      ) : (
        <div className="mt-6 space-y-5">
          {/* Direct answer */}
          <section className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5 dark:border-emerald-900 dark:bg-emerald-950/30" aria-labelledby="bank-direct">
            <h2 id="bank-direct" className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-800 dark:text-emerald-300">{t("bankDirectAnswer")}</h2>
            <p dir="auto" className="mt-2 text-[15px] font-medium leading-relaxed">{answer.directAnswer}</p>
          </section>

          {/* Hanafi position */}
          {answer.hanafiPosition && (
            <section className="rounded-xl border bg-card p-5" aria-labelledby="bank-position">
              <h2 id="bank-position" className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">{t("bankHanafiPosition")}</h2>
              <p dir="auto" className="mt-2 font-scholarly text-[15px] leading-relaxed">{answer.hanafiPosition}</p>
            </section>
          )}

          {/* Detailed explanation */}
          {answer.detailedAnswer && (
            <section className="rounded-xl border bg-card p-5" aria-labelledby="bank-detail">
              <h2 id="bank-detail" className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">{t("bankExplanation")}</h2>
              <p dir="auto" className="mt-2 text-sm leading-relaxed text-foreground/90" style={{ textWrap: "pretty" }}>{answer.detailedAnswer}</p>
            </section>
          )}

          {/* Evidence & citations */}
          {sources.length > 0 && (
            <section className="rounded-xl border bg-card p-5" aria-labelledby="bank-evidence">
              <h2 id="bank-evidence" className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">{t("bankEvidence")}</h2>
              <ol className="mt-3 space-y-3">
                {sources.map((s, i) => {
                  const Icon = SOURCE_ICON[s.kind] ?? Library;
                  const citation = citations[i];
                  return (
                    <li key={i} className="group rounded-lg border border-dashed p-3 transition-colors hover:border-emerald-400/60">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                          <Icon className="h-3.5 w-3.5" aria-hidden />
                        </span>
                        <span className="text-[13px] font-semibold">{s.ref}</span>
                        <VerificationBadge status={s.status} />
                        <Button
                          variant="outline" size="sm"
                          className="ms-auto h-7 gap-1 px-2 text-[11px]"
                          onClick={() => setCiteOpen(i)}
                          aria-haspopup="dialog"
                        >
                          <BookOpen className="h-3 w-3" aria-hidden />
                          {t("bankViewSource")}
                        </Button>
                      </div>
                      {(s.quote || s.translation) && (
                        <blockquote dir="auto" className="mt-2 border-s-2 border-amber-600/50 ps-3 text-[13px] italic leading-relaxed text-foreground/85">
                          {s.quote && <span className={cn(s.kind === "QURAN" || s.kind === "HADITH" ? "font-naskh not-italic" : "")}>{s.quote}</span>}
                          {s.quote && s.translation && <br />}
                          {s.translation && <span className="text-muted-foreground">— {s.translation}</span>}
                        </blockquote>
                      )}
                      {s.note && <p className="mt-1.5 text-[11px] text-muted-foreground">{s.note}</p>}
                      {citation && citeOpen === i && null}
                    </li>
                  );
                })}
              </ol>
            </section>
          )}

          {/* Disputed note */}
          {answer.disputed && (
            <section className="rounded-xl border border-yellow-300 bg-yellow-50/60 p-5 dark:border-yellow-900 dark:bg-yellow-950/25" aria-labelledby="bank-disputed">
              <h2 id="bank-disputed" className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-yellow-800 dark:text-yellow-300">
                <Scale className="h-3.5 w-3.5" aria-hidden /> {t("bankWhereDisagreement")}
              </h2>
              <p dir="auto" className="mt-2 text-sm leading-relaxed">{answer.disputed}</p>
            </section>
          )}

          {/* Objection & response */}
          {(answer.commonObjection || answer.scholarlyResponse) && (
            <div className="grid gap-4 md:grid-cols-2">
              {answer.commonObjection && (
                <section className="rounded-xl border bg-card p-5" aria-labelledby="bank-objection">
                  <h2 id="bank-objection" className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    <MessagesSquare className="h-3.5 w-3.5" aria-hidden /> {t("bankCommonObjection")}
                  </h2>
                  <p dir="auto" className="mt-2 text-sm leading-relaxed">{answer.commonObjection}</p>
                </section>
              )}
              {answer.scholarlyResponse && (
                <section className="rounded-xl border bg-card p-5" aria-labelledby="bank-response">
                  <h2 id="bank-response" className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    <BookOpen className="h-3.5 w-3.5" aria-hidden /> {t("bankScholarlyResponse")}
                  </h2>
                  <p dir="auto" className="mt-2 text-sm leading-relaxed">{answer.scholarlyResponse}</p>
                </section>
              )}
            </div>
          )}

          {/* Other views */}
          {answer.otherViews && (
            <section className="rounded-xl border bg-card p-5" aria-labelledby="bank-views">
              <h2 id="bank-views" className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">{t("bankOtherViews")}</h2>
              <p dir="auto" className="mt-2 text-sm leading-relaxed">{answer.otherViews}</p>
            </section>
          )}

          {/* Practical info / personal-fatwa warning */}
          {answer.practicalInfo && (
            <section
              className={cn(
                "rounded-xl border p-5",
                question.isSensitive
                  ? "border-amber-300 bg-amber-50/70 dark:border-amber-900 dark:bg-amber-950/25"
                  : "bg-card"
              )}
              aria-labelledby="bank-practical"
            >
              <h2 id="bank-practical" className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                <TriangleAlert className="h-3.5 w-3.5" aria-hidden /> {t("bankPractical")}
              </h2>
              <p dir="auto" className="mt-2 text-sm leading-relaxed">{answer.practicalInfo}</p>
              {question.isSensitive && (
                <p className="mt-2 flex items-start gap-1.5 text-xs font-medium text-amber-800 dark:text-amber-300">
                  <TriangleAlert className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
                  {t("bankFatwaWarning")}
                </p>
              )}
            </section>
          )}

          {/* Footer actions */}
          <div className="flex flex-wrap items-center gap-2 border-t pt-4">
            <BookmarkButton kind="question" keyId={question.id} title={question.text} withLabel />
            <ShareBar title={question.text} section={t("bankTitle")} sourceRef={question.category?.nameEn ?? ""} compact pathOverride={`bank/${question.slug}`} />
          </div>
        </div>
      )}

      {/* Related questions */}
      {related.length > 0 && (
        <section className="mt-8" aria-labelledby="bank-related">
          <SectionHeading title={t("bankRelated")} />
          <div className="grid gap-2 sm:grid-cols-2">
            {related.map((r) => (
              <button
                key={r.slug}
                onClick={() => setView("bank", r.slug)}
                className="group flex items-start gap-2.5 rounded-lg border bg-card p-3 text-start transition-all hover:-translate-y-0.5 hover:shadow-subtle"
              >
                <NicheMarker className="mt-0.5 shrink-0" />
                <span className="min-w-0">
                  <span dir="auto" className="line-clamp-2 block text-[13px] font-medium leading-snug group-hover:text-emerald-800 dark:group-hover:text-emerald-300">{r.text}</span>
                  <span className="mt-0.5 block text-[10px] text-muted-foreground">
                    {[r.clusterTitle, r.difficulty ? t(DIFFICULTY_KEY[r.difficulty] ?? r.difficulty) : null].filter(Boolean).join(" · ")}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Citation dialog */}
      <CitationDialog
        source={citeOpen !== null ? sources[citeOpen] : null}
        citation={citeOpen !== null ? citations[citeOpen] : undefined}
        onClose={() => setCiteOpen(null)}
      />
    </article>
  );
}

function CitationDialog({ source, citation, onClose }: {
  source?: BankSourceJson | null;
  citation?: { sourceType: string; volume: string | null; page: string | null; verificationStatus: string; book: { slug: string; titleEn: string } | null } | undefined;
  onClose: () => void;
}) {
  const t = useT();
  const { setView } = usePlatform();
  const open = Boolean(source);
  const Icon = source ? SOURCE_ICON[source.kind] ?? Library : Library;

  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) onClose(); }}>
      <DialogContent className="max-w-lg" aria-describedby="cite-desc">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-scholarly text-base">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
              <Icon className="h-4 w-4" aria-hidden />
            </span>
            {t("bankSourceDetails")}
          </DialogTitle>
          <DialogDescription id="cite-desc" className="text-xs">{t("bankSourceDetailsHint")}</DialogDescription>
        </DialogHeader>
        {source && (
          <div className="space-y-3">
            <div className="rounded-lg border bg-secondary/40 p-3">
              <p className="font-scholarly text-sm font-semibold">{source.ref}</p>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                <VerificationBadge status={source.status} />
                <Badge variant="outline" className="text-[10px]">{source.kind}</Badge>
                {citation?.volume && <Badge variant="outline" className="text-[10px]">{t("bankVol")} {citation.volume}</Badge>}
                {citation?.page && <Badge variant="outline" className="text-[10px]">{t("bankPage")} {citation.page}</Badge>}
              </div>
            </div>
            {source.quote && (
              <blockquote
                className={cn(
                  "rounded-lg border border-dashed p-3 text-sm leading-relaxed",
                  source.kind === "QURAN" || source.kind === "HADITH" ? "font-naskh" : "font-scholarly italic"
                )}
                dir="auto"
              >
                {source.quote}
              </blockquote>
            )}
            {source.translation && (
              <p className="text-[13px] leading-relaxed text-muted-foreground">“{source.translation}”</p>
            )}
            {source.note && <p className="text-[11px] text-muted-foreground">{source.note}</p>}
            {citation?.book && (
              <Button
                size="sm" variant="outline" className="gap-1.5"
                onClick={() => { onClose(); setView("sources", `book/${citation.book!.slug}`); }}
              >
                <Library className="h-3.5 w-3.5" aria-hidden />
                {t("bankOpenInViewer")}: {citation.book.titleEn}
              </Button>
            )}
            <p className="border-t pt-2 text-[11px] leading-relaxed text-muted-foreground">
              {source.status === "VERIFIED" ? t("bankCiteVerifiedNote") : t("bankCitePendingNote")}
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
