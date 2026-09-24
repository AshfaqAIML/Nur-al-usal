"use client";

import { useCallback, useEffect, useState } from "react";
import {
  BarChart3, CheckCircle2, Lightbulb, Loader2, SearchX, ShieldQuestion, Sparkles, Trash2, X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { usePlatform, useT } from "@/lib/store";
import { apiAdmin, apiGet, apiPost } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

/* ═══════════ Question Bank admin tools: analytics · suggestions · duplicates ═══════════ */

interface Analytics {
  totalSearches: number;
  zeroCount: number;
  zeroRate: number;
  topSearches: { query: string; count: number }[];
  zeroResult: { query: string; at: string }[];
  intentMix: { intent: string; count: number }[];
  topViewedQuestions: { slug: string | null; text: string; views: number; difficulty: string | null; category?: { nameEn: string } | null }[];
  recentSearches: { query: string; results: number; intent: string | null; createdAt: string }[];
}
interface Suggestion {
  id: string; question: string; rationale: string | null; categorySlug: string | null;
  difficulty: string | null; source: string; status: string;
}

export function BankAdminTools() {
  const t = useT();
  const { setView } = usePlatform();
  const { toast } = useToast();
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [suggestions, setSuggestions] = useState<Suggestion[] | null>(null);
  const [generating, setGenerating] = useState(false);
  const [dupText, setDupText] = useState("");
  const [dupResults, setDupResults] = useState<{ slug: string; text: string; score: number }[] | null>(null);
  const [dupVerdict, setDupVerdict] = useState<string | null>(null);
  const [checking, setChecking] = useState(false);

  const loadAll = useCallback(async () => {
    apiGet<Analytics>("/api/admin/analytics").then(setAnalytics).catch(() => {});
    apiGet<{ suggestions: Suggestion[] }>("/api/admin/suggest-questions")
      .then((d) => setSuggestions(d.suggestions.filter((s) => s.status === "PENDING")))
      .catch(() => setSuggestions([]));
  }, []);

  useEffect(() => { loadAll(); }, [loadAll]);

  const generate = async () => {
    setGenerating(true);
    try {
      const d = await apiAdmin<{ created: number }>("/api/admin/suggest-questions", {});
      toast({ title: t("bankSuggestDone", { n: d.created }) });
      await loadAll();
    } catch (e) {
      toast({ title: e instanceof Error ? e.message : "Generation failed", variant: "destructive" });
    } finally { setGenerating(false); }
  };

  const review = async (id: string, action: "approve" | "reject") => {
    try {
      await apiAdmin("/api/admin/suggest-questions", { id, action }, "PATCH");
      setSuggestions((s) => (s ? s.filter((x) => x.id !== id) : s));
      toast({ title: action === "approve" ? t("bankSuggestApproved") : t("bankSuggestRejected") });
    } catch (e) {
      toast({ title: e instanceof Error ? e.message : "Update failed", variant: "destructive" });
    }
  };

  const checkDuplicates = async () => {
    if (dupText.trim().length < 8) return;
    setChecking(true);
    try {
      const d = await apiPost<{ duplicates: { slug: string; text: string; score: number }[]; verdict: string }>("/api/admin/duplicates", { text: dupText.trim() });
      setDupResults(d.duplicates);
      setDupVerdict(d.verdict);
    } catch {
      toast({ title: "Duplicate check failed", variant: "destructive" });
    } finally { setChecking(false); }
  };

  const intentTotal = analytics?.intentMix.reduce((a, b) => a + b.count, 0) ?? 0;

  return (
    <section aria-label={t("bankAdminTitle")} className="space-y-4">
      <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        <BarChart3 className="h-4 w-4" aria-hidden /> {t("bankAdminTitle")}
      </h2>

      {/* ─── Search analytics ─── */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex flex-wrap items-center justify-between gap-2 text-base">
            <span className="flex items-center gap-2">
              {t("bankSearchAnalytics")}
              {analytics && (
                <Badge variant="outline" className="text-[10px] tabular-nums">
                  {analytics.totalSearches} · {t("bankZeroRate", { n: analytics.zeroRate })}
                </Badge>
              )}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-5 md:grid-cols-3">
          {/* Top searches */}
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{t("bankTopSearches")}</p>
            {!analytics || analytics.topSearches.length === 0 ? (
              <p className="py-3 text-xs text-muted-foreground">{t("bankNoSearchData")}</p>
            ) : (
              <ul className="space-y-1.5">
                {analytics.topSearches.slice(0, 6).map((s) => (
                  <li key={s.query} className="flex items-center justify-between gap-2 text-xs">
                    <span dir="auto" className="line-clamp-1 min-w-0">{s.query}</span>
                    <span className="shrink-0 rounded-full bg-muted px-1.5 py-0.5 text-[10px] font-semibold tabular-nums">{s.count}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Zero-result (unanswered demand) */}
          <div>
            <p className="mb-2 flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              <SearchX className="h-3 w-3" aria-hidden /> {t("bankUnanswered")}
            </p>
            {!analytics || analytics.zeroResult.length === 0 ? (
              <p className="py-3 text-xs text-muted-foreground">{t("bankNoSearchData")}</p>
            ) : (
              <ul className="max-h-40 space-y-1.5 overflow-y-auto pr-1">
                {analytics.zeroResult.slice(0, 8).map((s, i) => (
                  <li key={i} dir="auto" className="line-clamp-1 rounded border border-dashed px-2 py-1 text-xs text-muted-foreground">{s.query}</li>
                ))}
              </ul>
            )}
          </div>
          {/* Intent mix + most viewed */}
          <div className="space-y-4">
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{t("bankIntentMix")}</p>
              {intentTotal === 0 ? (
                <p className="text-xs text-muted-foreground">{t("bankNoSearchData")}</p>
              ) : (
                <div className="space-y-1.5">
                  {analytics!.intentMix.map((im) => (
                    <div key={im.intent} className="flex items-center gap-2 text-xs">
                      <span className="w-24 shrink-0 truncate">{t(`intent_${im.intent}`)}</span>
                      <div className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-muted">
                        <div className="h-full rounded-full bg-emerald-500" style={{ width: `${Math.round((im.count / intentTotal) * 100)}%` }} />
                      </div>
                      <span className="w-6 text-end text-[10px] tabular-nums text-muted-foreground">{im.count}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{t("bankMostViewed")}</p>
              {!analytics || analytics.topViewedQuestions.length === 0 ? (
                <p className="text-xs text-muted-foreground">{t("bankNoViewData")}</p>
              ) : (
                <ul className="space-y-1">
                  {analytics.topViewedQuestions.slice(0, 4).map((q) => (
                    <li key={q.slug}>
                      <button dir="auto" onClick={() => setView("bank", q.slug)} className="line-clamp-1 w-full text-start text-xs hover:text-emerald-800 dark:hover:text-emerald-300">
                        · {q.text} <span className="tabular-nums text-muted-foreground">({q.views})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ─── Suggest Common Questions (AI → admin approval) ─── */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex flex-wrap items-center justify-between gap-2 text-base">
            <span className="flex items-center gap-2"><Lightbulb className="h-4 w-4 text-amber-600" aria-hidden /> {t("bankSuggestTitle")}</span>
            <Button size="sm" className="gap-1.5" onClick={generate} disabled={generating}>
              {generating ? <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden /> : <Sparkles className="h-3.5 w-3.5" aria-hidden />}
              {generating ? t("bankSuggestRunning") : t("bankSuggestRun")}
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-3 text-xs leading-relaxed text-muted-foreground">{t("bankSuggestHint")}</p>
          {suggestions === null ? (
            <p className="py-3 text-xs text-muted-foreground">…</p>
          ) : suggestions.length === 0 ? (
            <p className="py-3 text-xs text-muted-foreground">{t("bankSuggestEmpty")}</p>
          ) : (
            <ul className="space-y-2">
              {suggestions.map((s) => (
                <li key={s.id} className="rounded-lg border p-3">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <p dir="auto" className="min-w-0 flex-1 text-sm font-medium">{s.question}</p>
                    <div className="flex shrink-0 gap-1.5">
                      <Button size="sm" className="h-7 gap-1 bg-emerald-700 px-2 text-[11px] text-white hover:bg-emerald-800" onClick={() => review(s.id, "approve")}>
                        <CheckCircle2 className="h-3 w-3" aria-hidden /> {t("bankSuggestApprove")}
                      </Button>
                      <Button size="sm" variant="outline" className="h-7 gap-1 px-2 text-[11px]" onClick={() => review(s.id, "reject")}>
                        <X className="h-3 w-3" aria-hidden /> {t("bankSuggestReject")}
                      </Button>
                    </div>
                  </div>
                  <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                    {s.categorySlug && <Badge variant="secondary" className="text-[10px]">{s.categorySlug}</Badge>}
                    {s.difficulty && <Badge variant="outline" className="text-[10px]">{s.difficulty}</Badge>}
                    <Badge variant="outline" className="gap-1 text-[10px]"><Sparkles className="h-3 w-3" aria-hidden />{s.source}</Badge>
                    {s.rationale && <span className="line-clamp-1 text-[11px] text-muted-foreground">{s.rationale}</span>}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      {/* ─── Duplicate check (one canonical answer + variants policy) ─── */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base"><ShieldQuestion className="h-4 w-4 text-emerald-700 dark:text-emerald-400" aria-hidden /> {t("bankDupTitle")}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2 text-xs leading-relaxed text-muted-foreground">{t("bankDupHint")}</p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Textarea
              value={dupText}
              onChange={(e) => setDupText(e.target.value)}
              placeholder={t("bankDupPlaceholder")}
              className="min-h-[60px] flex-1 text-sm"
              aria-label={t("bankDupTitle")}
            />
            <div className="flex sm:flex-col">
              <Button size="sm" className="h-9 flex-1 gap-1.5" onClick={checkDuplicates} disabled={checking || dupText.trim().length < 8}>
                {checking ? <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden /> : <ShieldQuestion className="h-3.5 w-3.5" aria-hidden />}
                {t("bankDupRun")}
              </Button>
            </div>
          </div>
          {dupVerdict && (
            <div className="mt-3">
              <Badge
                variant="outline"
                className={cn(
                  "text-[11px]",
                  dupVerdict === "likely-duplicate"
                    ? "border-amber-300 bg-amber-100 text-amber-900 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-200"
                    : dupVerdict === "unique"
                      ? "border-emerald-300 bg-emerald-100 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-200"
                      : ""
                )}
              >
                {dupVerdict === "likely-duplicate" ? t("bankDupLikely") : dupVerdict === "unique" ? t("bankDupUnique") : t("bankDupCheck")}
              </Badge>
              {dupResults && dupResults.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {dupResults.map((d) => (
                    <li key={d.slug} className="flex items-center justify-between gap-2 rounded border px-2 py-1 text-xs">
                      <button dir="auto" onClick={() => setView("bank", d.slug)} className="line-clamp-1 min-w-0 flex-1 text-start hover:text-emerald-800 dark:hover:text-emerald-300">{d.text}</button>
                      <span className="shrink-0 rounded-full bg-muted px-1.5 py-0.5 text-[10px] font-semibold tabular-nums">{Math.round(d.score * 100)}%</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
