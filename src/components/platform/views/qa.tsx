"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { BookOpenCheck, Check, ChevronDown, ChevronRight, Eye, Loader2, Radio, Search, Sparkles, ThumbsDown, ThumbsUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { usePlatform, useT } from "@/lib/store";
import { apiGet, apiPost, Answer, parseJson, Question } from "@/lib/api";
import { useDocTitle } from "@/lib/use-doc-title";
import { ShareBar } from "@/components/platform/share-bar";
import { BookmarkButton } from "@/components/platform/library";
import { FiqhAqeedahBadge } from "@/components/platform/badges";
import { EvidenceList, ScholarlyCard } from "@/components/platform/text";
import { getVote, setVote, AnswerVote } from "@/lib/answer-votes";
import { cn } from "@/lib/utils";

const STATUS_LABELS: Record<string, string> = {
  PENDING: "Pending review", AI_ANSWERED: "AI draft (needs review)", REVIEWED: "Reviewed",
  ANSWERED: "Answered", REJECTED: "Rejected",
};

export type StreamStage = "idle" | "connecting" | "retrieving" | "generating" | "saving" | "analyzing" | "verifying";

/** Parse one SSE frame (event/data pair) from the stream. */
export function parseSseFrame(frame: string): { event: string; data: string } | null {
  let event = "message";
  const dataLines: string[] = [];
  for (const line of frame.split("\n")) {
    if (line.startsWith("event:")) event = line.slice(6).trim();
    else if (line.startsWith("data:")) dataLines.push(line.slice(5).trim());
  }
  if (dataLines.length === 0) return null;
  return { event, data: dataLines.join("\n") };
}

export function QuestionsView({ id }: { id?: string | null }) {
  const t = useT();
  const { setView } = usePlatform();
  const { toast } = useToast();
  const [list, setList] = useState<Question[] | null>(null);
  const [question, setQuestion] = useState<Question | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [busy, setBusy] = useState(false);
  const [stage, setStage] = useState<StreamStage>("idle");
  const [streamText, setStreamText] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [search, setSearch] = useState("");
  useDocTitle(id ? (question?.text ?? null) : t("navQA"));

  useEffect(() => {
    apiGet<{ questions: Question[] }>("/api/questions").then((d) => setList(d.questions)).catch(() => setList([]));
  }, []);

  const visibleList = useMemo(() => {
    if (!list) return null;
    const needle = search.trim().toLowerCase();
    return list.filter((q) => {
      if (statusFilter && q.status !== statusFilter) return false;
      if (needle) {
        const hay = `${q.text} ${q.category?.nameEn ?? ""}`.toLowerCase();
        if (!hay.includes(needle)) return false;
      }
      return true;
    });
  }, [list, statusFilter, search]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!id) { if (!cancelled) { setQuestion(null); setAnswers([]); } return; }
      try {
        const d = await apiGet<{ question: Question & { answers: Answer[] } }>(`/api/questions?id=${id}`);
        if (!cancelled) { setQuestion(d.question); setAnswers(d.question.answers ?? []); }
      } catch { if (!cancelled) setQuestion(null); }
    })();
    return () => { cancelled = true; };
  }, [id]);

  /** Streaming generation: watch the RAG engine retrieve, draft, and save live. */
  async function generateStream() {
    if (!question || stage !== "idle") return;
    setStage("connecting");
    setStreamText("");
    try {
      const res = await fetch("/api/answers/stream", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ questionId: question.id }),
      });
      if (!res.ok || !res.body) {
        const j = await res.json().catch(() => ({}));
        throw new Error((j as { error?: string }).error || `Stream failed: ${res.status}`);
      }
      const reader = res.body.getReader();
      const dec = new TextDecoder();
      let buf = "";
      let streamError: string | null = null;
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += dec.decode(value, { stream: true });
        let idx: number;
        while ((idx = buf.indexOf("\n\n")) >= 0) {
          const frame = buf.slice(0, idx);
          buf = buf.slice(idx + 2);
          const parsed = parseSseFrame(frame);
          if (!parsed) continue;
          try {
            const payload = JSON.parse(parsed.data) as Record<string, unknown>;
            if (parsed.event === "status") setStage(payload.stage as StreamStage);
            else if (parsed.event === "delta") setStreamText((p) => p + String(payload.text ?? ""));
            else if (parsed.event === "done") {
              setAnswers((prev) => [payload.answer as Answer, ...prev]);
              toast({
                title: "AI draft generated",
                description: "Citation-checked answer created — requires scholarly review.",
              });
            } else if (parsed.event === "error") {
              streamError = String(payload.error ?? "Answer engine error.");
            }
          } catch { /* tolerate malformed frame */ }
        }
      }
      if (streamError) throw new Error(streamError);
    } catch (e) {
      toast({ title: e instanceof Error ? e.message : t("error"), variant: "destructive" });
    } finally {
      setStage("idle");
      setStreamText("");
    }
  }

  // ─── Detail ───
  if (id) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <Button variant="ghost" size="sm" className="mb-4" onClick={() => setView("qa")}>
          <ChevronRight className="me-1 h-4 w-4 rotate-180 rtl:rotate-0" aria-hidden /> {t("navQA")}
        </Button>
        {!question && <Skeleton className="h-96 w-full rounded-xl" />}
        {question && (
          <div className="space-y-6">
            <Card className="border-emerald-200 dark:border-emerald-900">
              <CardContent className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline">{STATUS_LABELS[question.status] ?? question.status}</Badge>
                  {question.category && <Badge variant="outline">{question.category.nameEn}</Badge>}
                  {question.isSensitive && <Badge className="bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-950 dark:text-amber-200">Sensitive — personal fatwa required</Badge>}
                  <span className="text-[11px] text-muted-foreground"><Eye className="me-1 inline h-3 w-3" />{question.views} {t("views")}</span>
                </div>
                <h1 className="mt-3 font-scholarly text-xl font-bold leading-snug md:text-2xl">{question.text}</h1>
                {question.claim && (
                  <p className="mt-2 rounded-md border border-rose-200 bg-rose-50/60 px-3 py-2 text-xs text-rose-900 dark:border-rose-900 dark:bg-rose-950/40 dark:text-rose-200">
                    <strong>{t("claim")}:</strong> {question.claim}
                  </p>
                )}
                {question.isSensitive && (
                  <p className="mt-3 rounded-md bg-amber-50 px-3 py-2 text-xs text-amber-900 dark:bg-amber-950/50 dark:text-amber-200">
                    {t("personalFatwaWarning")}
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Latest answer prominent; older revisions collapsed below it */}
            {answers.slice(0, 1).map((a) => <AnswerCard key={a.id} answer={a} questionTitle={question.text} />)}
            {answers.length > 1 && (
              <details className="group border-t pt-3">
                <summary className="flex cursor-pointer list-none items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground [&::-webkit-details-marker]:hidden">
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-open:rotate-180" aria-hidden />
                  {t("earlierDrafts").replace("{n}", String(answers.length - 1))}
                  <span className="rounded-full bg-muted px-1.5 py-0.5 text-[10px] font-medium tabular-nums">{answers.length - 1}</span>
                </summary>
                <div className="mt-3 space-y-4">
                  {answers.slice(1).map((a) => <AnswerCard key={a.id} answer={a} questionTitle={question.text} />)}
                </div>
              </details>
            )}

            {stage !== "idle" && (
              <LiveStreamPanel stage={stage} text={streamText} />
            )}

            {answers.length === 0 && !question.isSensitive && stage === "idle" && (
              <Card className="border-dashed">
                <CardContent className="p-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    No answer yet. The RAG engine can produce a citation-checked draft for editorial review — streamed live as it works:
                  </p>
                  <Button onClick={generateStream} disabled={busy || stage !== "idle"} className="mt-3 bg-emerald-700 hover:bg-emerald-800 text-white">
                    <Sparkles className="me-2 h-4 w-4" />
                    {t("generateAnswer")}
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    );
  }

  // ─── Listing ───
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-scholarly text-3xl font-bold">Question & Answer System</h1>
          <p className="mt-2 text-sm text-muted-foreground">Source-based answers following the platform&apos;s Q&amp;A architecture — AI drafts require scholarly review before publication.</p>
        </div>
        <Button className="bg-emerald-700 hover:bg-emerald-800 text-white" onClick={() => setView("ask")}>{t("askQuestion")}</Button>
      </header>

      {/* Filter chips + search */}
      <div className="mb-5 space-y-3">
        <div className="relative">
          <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`${t("search")}…`}
            aria-label={t("search")}
            className="w-full rounded-full border bg-card py-2.5 pe-4 ps-9 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>
        <div role="group" aria-label="Status filter" className="flex flex-wrap gap-1.5">
          {[{ v: "", label: t("all") }, ...Object.entries(STATUS_LABELS).map(([v, label]) => ({ v, label }))].map((f) => (
            <button
              key={f.v}
              onClick={() => setStatusFilter(f.v)}
              aria-pressed={statusFilter === f.v}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600",
                statusFilter === f.v
                  ? "border-emerald-600 bg-emerald-600 text-white shadow-sm"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {!list && <div className="space-y-3">{[...Array(5)].map((_, i) => <Skeleton key={i} className="h-24 rounded-xl" />)}</div>}
      {list && visibleList && visibleList.length === 0 && (
        <div className="rounded-xl border border-dashed p-10 text-center">
          <p className="text-sm text-muted-foreground">{t("noEntriesMatch")}</p>
        </div>
      )}
      {list && visibleList && visibleList.length > 0 && (
        <p className="mb-3 text-[11px] text-muted-foreground">
          {t("matching")}: <strong className="font-semibold text-foreground">{visibleList.length}</strong> / {list.length}
        </p>
      )}
      <div className="space-y-3">
        {(visibleList ?? []).map((q) => (
          <Card key={q.id} className="card-lift cursor-pointer border-border/70" onClick={() => setView("qa", q.id)}>
            <CardContent className="p-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <p className="max-w-xl text-sm font-semibold leading-snug">{q.text}</p>
                <Badge variant="outline" className="shrink-0 text-[10px]">{STATUS_LABELS[q.status] ?? q.status}</Badge>
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
                {q.category && <Badge variant="outline" className="text-[10px]">{q.category.nameEn}</Badge>}
                <span><Eye className="me-1 inline h-3 w-3" />{q.views}</span>
                {q.featured && <Badge className="bg-emerald-700 text-white text-[10px]">{t("featured")}</Badge>}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export const STREAM_STEPS: { stage: Exclude<StreamStage, "idle" | "connecting">; labelKey: string; icon: LucideIcon }[] = [
  { stage: "retrieving", labelKey: "stageRetrieving", icon: BookOpenCheck },
  { stage: "generating", labelKey: "stageGenerating", icon: Sparkles },
  { stage: "saving", labelKey: "stageSaving", icon: Check },
];

/** Live view of a streaming engine at work (SSE stream consumer). */
export function LiveStreamPanel({
  stage,
  text,
  steps,
  title,
}: {
  stage: StreamStage;
  text: string;
  /** Custom stage stepper (defaults to the answer-engine steps). */
  steps?: { stage: Exclude<StreamStage, "idle" | "connecting">; labelKey: string; icon: LucideIcon }[];
  /** Panel title (i18n key or literal); defaults to the answer-engine title. */
  title?: string;
}) {
  const t = useT();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [text]);

  const activeSteps = steps ?? STREAM_STEPS;
  const stepIndex = activeSteps.findIndex((s) => s.stage === stage);
  const lines = text.split("\n");

  return (
    <Card className="border-emerald-300 shadow-[0_0_0_4px_rgba(16,185,129,0.06)] dark:border-emerald-800">
      <CardContent className="p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600" />
            </span>
            <h3 className="font-scholarly text-sm font-bold">{title ?? t("engineTitle")}</h3>
            <Badge variant="outline" className="border-emerald-300 text-[9px] uppercase tracking-wider text-emerald-800 dark:border-emerald-800 dark:text-emerald-300">
              <Radio className="me-1 h-2.5 w-2.5" aria-hidden /> {t("engineLive")}
            </Badge>
          </div>
        </div>

        {/* Stage stepper */}
        <ol className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5" aria-label="Engine stages">
          {activeSteps.map((s, i) => {
            const isDone = stepIndex > i;
            const isCurrent = stepIndex === i;
            const Icon = s.icon;
            return (
              <li
                key={s.stage}
                aria-current={isCurrent ? "step" : undefined}
                className={cn(
                  "flex items-center gap-1.5 text-[11px] font-medium transition-colors",
                  isDone ? "text-emerald-700 dark:text-emerald-400" : isCurrent ? "text-foreground" : "text-muted-foreground/60"
                )}
              >
                {isDone ? (
                  <Check className="h-3.5 w-3.5" aria-hidden />
                ) : isCurrent ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden />
                ) : (
                  <Icon className="h-3.5 w-3.5" aria-hidden />
                )}
                {t(s.labelKey as never)}
              </li>
            );
          })}
        </ol>

        {/* Streaming text */}
        <div
          ref={scrollRef}
          className="mt-3 max-h-80 overflow-y-auto rounded-lg border bg-emerald-50/40 p-3 dark:bg-emerald-950/20"
          aria-live="polite"
          aria-busy="true"
        >
          {text ? (
            <div className="space-y-1 text-sm leading-relaxed">
              {lines.map((line, i) => {
                // Models may emit a heading inline ("…framing. ## Sources") — split it out.
                const hi = line.indexOf("## ");
                if (hi >= 0) {
                  const before = line.slice(0, hi);
                  const heading = line.slice(hi + 3);
                  return (
                    <p key={i} className="whitespace-pre-wrap">
                      {before}
                      <span className="block pt-2 text-[11px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                        {heading}
                      </span>
                    </p>
                  );
                }
                if (line.startsWith("## ")) {
                  return (
                    <p key={i} className="pt-2 text-[11px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                      {line.slice(3)}
                    </p>
                  );
                }
                return <p key={i} className="whitespace-pre-wrap">{line}</p>;
              })}
              {stage === "generating" && <span className="stream-caret" aria-hidden />}
            </div>
          ) : (
            <p className="text-sm italic text-muted-foreground">{stage === "saving" ? t("engineParsing") : t("engineHint")}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

/** Helpful / not-helpful voting — one vote per browser per answer. */
export function FeedbackRow({ answerId, up, down }: { answerId: string; up: number; down: number }) {
  const t = useT();
  const { toast } = useToast();
  const [mine, setMine] = useState<AnswerVote | null>(null);
  const [counts, setCounts] = useState({ up, down });
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setMine(getVote(answerId));
    setCounts({ up, down });
  }, [answerId, up, down]);

  const vote = async (v: Exclude<AnswerVote, null>) => {
    if (pending || mine === v) return;
    setPending(true);
    const next = { up: counts.up + (v === "up" ? 1 : 0), down: counts.down + (v === "down" ? 1 : 0) };
    setCounts(next); // optimistic
    setVote(answerId, v);
    setMine(v);
    try {
      const res = await apiPost<{ helpfulUp: number; helpfulDown: number }>("/api/answers/feedback", { answerId, vote: v });
      setCounts({ up: res.helpfulUp, down: res.helpfulDown });
      if (v === "up") toast({ title: t("thanksFeedback") });
    } catch {
      setCounts({ up, down }); // rollback on failure
      setMine(getVote(answerId));
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="flex items-center gap-1.5" role="group" aria-label={t("feedbackLabel")}>
      <span className="me-1 hidden text-[11px] font-medium text-muted-foreground sm:inline">{t("helpful")}?</span>
      <button
        onClick={() => vote("up")}
        disabled={pending}
        aria-pressed={mine === "up"}
        aria-label={t("helpful")}
        title={t("helpful")}
        className={cn(
          "flex h-7 items-center gap-1 rounded-full border px-2.5 text-[11px] font-medium tabular-nums transition-all active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600",
          mine === "up"
            ? "border-emerald-500 bg-emerald-50 text-emerald-800 dark:border-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
            : "border-border text-muted-foreground hover:border-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
        )}
      >
        <ThumbsUp className="h-3 w-3" aria-hidden /> {counts.up}
      </button>
      <button
        onClick={() => vote("down")}
        disabled={pending}
        aria-pressed={mine === "down"}
        aria-label={t("notHelpful")}
        title={t("notHelpful")}
        className={cn(
          "flex h-7 items-center gap-1 rounded-full border px-2.5 text-[11px] font-medium tabular-nums transition-all active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600",
          mine === "down"
            ? "border-rose-400 bg-rose-50 text-rose-800 dark:border-rose-800 dark:bg-rose-950 dark:text-rose-300"
            : "border-border text-muted-foreground hover:border-rose-400 hover:text-rose-700 dark:hover:text-rose-300"
        )}
      >
        <ThumbsDown className="h-3 w-3" aria-hidden /> {counts.down}
      </button>
    </div>
  );
}

export function AnswerCard({ answer, questionTitle }: { answer: Answer; questionTitle?: string }) {
  const t = useT();
  return (
    <ScholarlyCard
      title={t("answer") ?? "Answer"}
      className={answer.status === "PUBLISHED" ? "border-emerald-300 dark:border-emerald-800 print-area" : "border-amber-300 dark:border-amber-800 print-area"}
    >
      <div id="answer-card" className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <FiqhAqeedahBadge value={answer.aqeedahOrFiqh} />
          {answer.aiGenerated && <Badge variant="outline" className="text-[10px] border-amber-300 text-amber-800 dark:border-amber-800 dark:text-amber-300">AI-assisted — {t("aiDraftNotice")}</Badge>}
        </div>

        <section>
          <h4 className="text-xs font-bold uppercase tracking-wide text-emerald-800 dark:text-emerald-300">Direct Answer</h4>
          <p className="mt-1 text-sm leading-relaxed">{answer.directAnswer}</p>
        </section>

        {answer.hanafiPosition && (
          <section>
            <h4 className="text-xs font-bold uppercase tracking-wide text-emerald-800 dark:text-emerald-300">Hanafi Position</h4>
            <p className="mt-1 text-sm leading-relaxed">{answer.hanafiPosition}</p>
          </section>
        )}

        {answer.quranEvidence && parseJson<unknown[]>(answer.quranEvidence, []).length > 0 && (
          <section>
            <h4 className="text-xs font-bold uppercase tracking-wide text-emerald-800 dark:text-emerald-300">Qur&apos;an Evidence</h4>
            <div className="mt-1"><EvidenceList json={answer.quranEvidence} /></div>
          </section>
        )}

        {answer.hadithEvidence && parseJson<unknown[]>(answer.hadithEvidence, []).length > 0 && (
          <section>
            <h4 className="text-xs font-bold uppercase tracking-wide text-emerald-800 dark:text-emerald-300">Hadith Evidence</h4>
            <div className="mt-1"><EvidenceList json={answer.hadithEvidence} /></div>
          </section>
        )}

        {answer.classicalEvidence && parseJson<unknown[]>(answer.classicalEvidence, []).length > 0 && (
          <section>
            <h4 className="text-xs font-bold uppercase tracking-wide text-emerald-800 dark:text-emerald-300">Classical Hanafi Evidence</h4>
            <div className="mt-1"><EvidenceList json={answer.classicalEvidence} /></div>
          </section>
        )}

        {answer.laterEvidence && parseJson<unknown[]>(answer.laterEvidence, []).length > 0 && (
          <section>
            <h4 className="text-xs font-bold uppercase tracking-wide text-emerald-800 dark:text-emerald-300">Later Hanafi Evidence</h4>
            <div className="mt-1"><EvidenceList json={answer.laterEvidence} /></div>
          </section>
        )}

        {answer.fatawaRazvia && (
          <section>
            <h4 className="text-xs font-bold uppercase tracking-wide text-emerald-800 dark:text-emerald-300">Fatawa Razvia Discussion (where relevant)</h4>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{answer.fatawaRazvia}</p>
          </section>
        )}

        {answer.otherViews && (
          <section>
            <h4 className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Other Scholarly Views</h4>
            <p className="mt-1 text-sm leading-relaxed">{answer.otherViews}</p>
          </section>
        )}

        {answer.commonObjection && (
          <section>
            <h4 className="text-xs font-bold uppercase tracking-wide text-amber-800 dark:text-amber-400">Common Objection</h4>
            <p className="mt-1 text-sm leading-relaxed">{answer.commonObjection}</p>
          </section>
        )}

        {answer.scholarlyResponse && (
          <section>
            <h4 className="text-xs font-bold uppercase tracking-wide text-emerald-800 dark:text-emerald-300">Scholarly Response</h4>
            <p className="mt-1 text-sm leading-relaxed">{answer.scholarlyResponse}</p>
          </section>
        )}

        {answer.disputed && (
          <section>
            <h4 className="text-xs font-bold uppercase tracking-wide text-muted-foreground">What Is Actually Disputed?</h4>
            <p className="mt-1 text-sm leading-relaxed">{answer.disputed}</p>
          </section>
        )}

        {answer.practicalInfo && (
          <section className="rounded-lg bg-emerald-50/60 p-3 dark:bg-emerald-950/40">
            <h4 className="text-xs font-bold uppercase tracking-wide text-emerald-800 dark:text-emerald-300">Practical Information</h4>
            <p className="mt-1 text-sm leading-relaxed">{answer.practicalInfo}</p>
          </section>
        )}

        {answer.sources && parseJson<string[]>(answer.sources, []).length > 0 && (
          <section>
            <h4 className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{t("sourcesUsed")}</h4>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {parseJson<string[]>(answer.sources, []).map((s, i) => (
                <Badge key={i} variant="outline" className="text-[10px]">{s}</Badge>
              ))}
            </div>
          </section>
        )}

        <div className="flex flex-wrap items-center justify-between gap-2 border-t pt-3">
          <FeedbackRow answerId={answer.id} up={answer.helpfulUp} down={answer.helpfulDown} />
          <div className="flex flex-wrap items-center gap-2">
            <BookmarkButton
              kind="question"
              keyId={answer.questionId}
              title={questionTitle ?? (answer.directAnswer.length > 80 ? answer.directAnswer.slice(0, 80) + "…" : answer.directAnswer)}
            />
            <ShareBar
              title={answer.directAnswer.length > 80 ? answer.directAnswer.slice(0, 80) + "…" : answer.directAnswer}
              section={t("navQA")}
              printTargetId="answer-card"
            />
          </div>
        </div>
      </div>
    </ScholarlyCard>
  );
}
