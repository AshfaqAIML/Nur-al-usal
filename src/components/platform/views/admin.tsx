"use client";

import { useCallback, useEffect, useState } from "react";
import {
  BookMarked, CheckCircle2, FileText, GitCompare, Landmark, MessagesSquare, RefreshCw,
  ScrollText, ShieldAlert, Sparkles, Users, Eye, Star, Send, ThumbsDown, ThumbsUp, Undo2, MessageCircleQuestion,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { useT } from "@/lib/store";
import { apiGet, apiAdmin, ClaimRecord, Question } from "@/lib/api";
import { ClassificationBadge, VerificationBadge } from "@/components/platform/badges";
import { EntityEditor } from "@/components/platform/admin-editor";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface AdminStats {
  stats: {
    questions: number; answers: number; books: number; scholars: number;
    misconceptions: number; objections: number; comparisons: number;
    fatwas: number; hadith: number; quran: number; claims: number; topics: number;
    pendingQuestions: number; aiAnswers: number; publishedAnswers: number;
    sensitiveQuestions: number; verifiedBooks: number; ocrBooks: number;
  };
  misconceptionStatuses: { status: string; count: number }[];
  recentQuestions: (Question & { category?: { nameEn: string } | null })[];
  recentClaims: ClaimRecord[];
  topFeedback: { questionId: string; text: string; up: number; down: number; status: string | null }[];
}

const CONTENT_GRID: { key: string; labelKey: string; icon: typeof Landmark }[] = [
  { key: "topics", labelKey: "topicsLabel", icon: Landmark }, { key: "misconceptions", labelKey: "misconceptionsLabel", icon: CheckCircle2 },
  { key: "objections", labelKey: "objectionsLabel", icon: ScrollText }, { key: "books", labelKey: "books", icon: BookMarked },
  { key: "scholars", labelKey: "scholarsLabel", icon: Users }, { key: "hadith", labelKey: "hadithCollection", icon: ScrollText },
  { key: "quran", labelKey: "quran", icon: BookMarked }, { key: "comparisons", labelKey: "comparisonsLabel", icon: GitCompare },
  { key: "fatwas", labelKey: "fatwas", icon: FileText }, { key: "claims", labelKey: "claimsLabel", icon: Sparkles },
  { key: "questions", labelKey: "questions", icon: MessageCircleQuestion }, { key: "answers", labelKey: "answers", icon: FileText },
];

const STATUS_COLORS: Record<string, string> = {
  VERIFIED: "bg-emerald-600", PARTIALLY_VERIFIED: "bg-amber-500",
  UNVERIFIED: "bg-stone-400", DISPUTED: "bg-orange-600", REJECTED: "bg-red-600",
};

export function AdminView() {
  const t = useT();
  const { toast } = useToast();
  const [data, setData] = useState<AdminStats | null>(null);
  const [busy, setBusy] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      const d = await apiGet<AdminStats>("/api/admin/stats");
      setData(d);
    } catch {
      toast({ title: "Failed to load admin stats", variant: "destructive" });
    }
  }, [toast]);

  useEffect(() => { load(); }, [load]);

  const patchAnswer = async (id: string, status: "PUBLISHED" | "DRAFT") => {
    setBusy(id);
    try {
      await apiAdmin("/api/admin/resource", { entity: "answer", id, data: { status } }, "PATCH");
      toast({ title: status === "PUBLISHED" ? "Answer published" : "Answer reverted to draft" });
      await load();
    } catch (e) {
      toast({ title: e instanceof Error ? e.message : "Update failed", variant: "destructive" });
    } finally { setBusy(null); }
  };

  const toggleFeatured = async (q: Question) => {
    setBusy(q.id);
    try {
      await apiAdmin("/api/admin/resource", { entity: "question", id: q.id, data: { featured: !q.featured } }, "PATCH");
      toast({ title: q.featured ? "Removed from featured" : "Marked as featured" });
      await load();
    } catch (e) {
      toast({ title: e instanceof Error ? e.message : "Update failed", variant: "destructive" });
    } finally { setBusy(null); }
  };

  if (!data) {
    return (
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-10 sm:px-6">
        <Skeleton className="h-10 w-64" />
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">{[...Array(6)].map((_, i) => <Skeleton key={i} className="h-24 rounded-xl" />)}</div>
        <Skeleton className="h-72 rounded-xl" />
      </div>
    );
  }

  const s = data.stats;
  const totalMisc = data.misconceptionStatuses.reduce((a, b) => a + b.count, 0) || 1;
  const workflow = [
    { labelKey: "wfPending", value: s.pendingQuestions, warn: s.pendingQuestions > 0 },
    { labelKey: "wfAiAnswers", value: s.aiAnswers, warn: false },
    { labelKey: "wfPublished", value: s.publishedAnswers, warn: false },
    { labelKey: "wfSensitive", value: s.sensitiveQuestions, warn: s.sensitiveQuestions > 0 },
    { labelKey: "wfVerifiedBooks", value: s.verifiedBooks, warn: false },
    { labelKey: "wfOcrBooks", value: s.ocrBooks, warn: false },
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-scholarly text-2xl font-bold tracking-tight sm:text-3xl">{t("adminTitle")}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{t("adminSubtitle")}</p>
        </div>
        <Button variant="outline" size="sm" onClick={load} className="gap-2">
          <RefreshCw className="h-4 w-4" /> {t("refresh")}
        </Button>
      </div>

      {/* Workflow / editorial state */}
      <section aria-label="Editorial workflow">
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {workflow.map((w) => (
            <Card
              key={w.labelKey}
              className={cn(
                "group border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md",
                w.warn ? "border-amber-300 dark:border-amber-800" : ""
              )}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-1.5">
                  <p className="text-2xl font-bold tabular-nums">{w.value}</p>
                  {w.warn && (
                    <span className="relative flex h-2 w-2" aria-hidden>
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground">{t(w.labelKey)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Content counts */}
      <section aria-label="Content counts">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{t("contentCounts")}</h2>
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {CONTENT_GRID.map((c) => (
            <Card key={c.key}>
              <CardContent className="flex items-center gap-3 p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  <c.icon className="h-4.5 w-4.5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-lg font-bold leading-none tabular-nums">{s[c.key as keyof typeof s]}</span>
                  <span className="mt-1 block truncate text-xs text-muted-foreground">{t(c.labelKey)}</span>
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Misconception verification breakdown */}
      <section aria-label="Verification breakdown">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{t("verificationBreakdown")}</h2>
        <Card>
          <CardContent className="p-5">
            <div className="space-y-3">
              {data.misconceptionStatuses.map((m) => (
                <div key={m.status} className="flex items-center gap-3">
                  <span className="w-40 shrink-0 text-xs font-medium">{m.status.replaceAll("_", " ")}</span>
                  <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-muted">
                    <div className={cn("h-full rounded-full", STATUS_COLORS[m.status] ?? "bg-stone-400")} style={{ width: `${Math.round((m.count / totalMisc) * 100)}%` }} />
                  </div>
                  <span className="w-8 text-end text-xs tabular-nums text-muted-foreground">{m.count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Reader feedback signals */}
      <section aria-label="Reader feedback signals">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{t("feedbackSignals")}</h2>
        <Card>
          <CardContent className="p-5">
            <p className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground">
              <MessagesSquare className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden />
              {t("feedbackSignalsHint")}
            </p>
            {data.topFeedback.length === 0 ? (
              <p className="py-4 text-center text-sm text-muted-foreground">{t("feedbackNone")}</p>
            ) : (
              <div className="space-y-3">
                {data.topFeedback.map((f) => {
                  const total = f.up + f.down || 1;
                  const upPct = Math.round((f.up / total) * 100);
                  return (
                    <div key={f.questionId} className="rounded-lg border p-3 transition-colors hover:border-emerald-300 dark:hover:border-emerald-800">
                      <div className="flex items-start justify-between gap-2">
                        <p className="line-clamp-1 min-w-0 text-sm font-medium">{f.text}</p>
                        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-muted/60 px-2 py-0.5 text-[10px] font-semibold tabular-nums text-muted-foreground">
                          {f.up + f.down} {t("votesShort")}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <ThumbsUp className="h-3 w-3 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden />
                        <div className="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-muted" role="img" aria-label={`${t("helpful")} ${upPct}%`}>
                          <div className="h-full rounded-full bg-emerald-500 transition-all duration-500" style={{ width: `${upPct}%` }} />
                        </div>
                        <span className="w-6 shrink-0 text-end text-[11px] font-semibold tabular-nums text-emerald-700 dark:text-emerald-400">{f.up}</span>
                        <ThumbsDown className="ms-2 h-3 w-3 shrink-0 text-rose-600 dark:text-rose-400" aria-hidden />
                        <div className="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-muted">
                          <div className="h-full rounded-full bg-rose-500 transition-all duration-500" style={{ width: `${100 - upPct}%` }} />
                        </div>
                        <span className="w-6 shrink-0 text-end text-[11px] font-semibold tabular-nums text-rose-700 dark:text-rose-400">{f.down}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent questions */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">{t("recentQuestions")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {data.recentQuestions.map((q) => {
              const ans = q.answers as { id: string; status: string }[] | undefined;
              return (
                <div key={q.id} className="rounded-lg border p-3">
                  <div className="flex items-start justify-between gap-2">
                    <p className="line-clamp-2 min-w-0 text-sm font-medium">{q.text}</p>
                    <div className="flex shrink-0 items-center gap-1">
                      {q.isSensitive && <Badge variant="destructive" className="gap-1 px-1.5"><ShieldAlert className="h-3 w-3" />{t("sensitive")}</Badge>}
                      {q.status === "PENDING" ? <Badge variant="outline" className="text-[10px]">{t("statusPending")}</Badge> : <Badge className="bg-emerald-700 text-[10px] text-white">{q.status}</Badge>}
                    </div>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[11px] text-muted-foreground">
                    {q.category?.nameEn && <Badge variant="secondary" className="text-[10px]">{q.category.nameEn}</Badge>}
                    <span className="inline-flex items-center gap-0.5"><Eye className="h-3 w-3" />{q.views}</span>
                    <button onClick={() => toggleFeatured(q)} disabled={busy === q.id} className="inline-flex items-center gap-0.5 rounded px-1 py-0.5 hover:bg-accent disabled:opacity-50" aria-label="Toggle featured">
                      <Star className={cn("h-3 w-3", q.featured && "fill-amber-400 text-amber-400")} /> {t("featured")}
                    </button>
                  </div>
                  {ans && ans.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5 border-t pt-2">
                      {ans.map((a) => (
                        <Button key={a.id} size="sm" variant={a.status === "PUBLISHED" ? "outline" : "default"} className="h-7 gap-1 px-2 text-[11px]"
                          disabled={busy === a.id}
                          onClick={() => patchAnswer(a.id, a.status === "PUBLISHED" ? "DRAFT" : "PUBLISHED")}>
                          {a.status === "PUBLISHED" ? (<><Undo2 className="h-3 w-3" />{t("unpublish")}</>) : (<><Send className="h-3 w-3" />{t("publish")}</>)}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            {data.recentQuestions.length === 0 && <p className="py-6 text-center text-sm text-muted-foreground">{t("noQuestionsYet")}</p>}
          </CardContent>
        </Card>

        {/* Recent AI claim checks */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">{t("recentClaims")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {data.recentClaims.map((c) => (
              <div key={c.id} className="rounded-lg border p-3">
                <p className="line-clamp-2 text-sm font-medium">{c.claim}</p>
                <div className="mt-2 flex items-center gap-2">
                  <ClassificationBadge status={c.classification} />
                  {c.confidence && <span className="text-[11px] text-muted-foreground">{t("confidence")}: {c.confidence}</span>}
                  <span className="ms-auto text-[10px] text-muted-foreground">{new Date(c.createdAt).toLocaleDateString()}</span>
                </div>
                {c.explanation && <p className="mt-1.5 line-clamp-2 text-xs text-muted-foreground">{c.explanation}</p>}
              </div>
            ))}
            {data.recentClaims.length === 0 && <p className="py-6 text-center text-sm text-muted-foreground">{t("noClaimsYet")}</p>}
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* ─── Entity Editor (CRUD) ─── */}
      <EntityEditor />

      <Separator />
      <p className="pb-2 text-center text-xs text-muted-foreground">{t("adminNote")}</p>
    </div>
  );
}
