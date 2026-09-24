"use client";

import { useEffect, useState } from "react";
import { ChevronRight, Eye, Loader2, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { usePlatform, useT } from "@/lib/store";
import { apiGet, apiPost, Answer, parseJson, Question } from "@/lib/api";
import { useDocTitle } from "@/lib/use-doc-title";
import { ShareBar } from "@/components/platform/share-bar";
import { FiqhAqeedahBadge } from "@/components/platform/badges";
import { EvidenceList, ScholarlyCard } from "@/components/platform/text";

const STATUS_LABELS: Record<string, string> = {
  PENDING: "Pending review", AI_ANSWERED: "AI draft (needs review)", REVIEWED: "Reviewed",
  ANSWERED: "Answered", REJECTED: "Rejected",
};

export function QuestionsView({ id }: { id?: string | null }) {
  const t = useT();
  const { setView } = usePlatform();
  const { toast } = useToast();
  const [list, setList] = useState<Question[] | null>(null);
  const [question, setQuestion] = useState<Question | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [busy, setBusy] = useState(false);
  useDocTitle(id ? (question?.text ?? null) : t("navQA"));

  useEffect(() => {
    apiGet<{ questions: Question[] }>("/api/questions").then((d) => setList(d.questions)).catch(() => setList([]));
  }, []);

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

  async function generate() {
    if (!question) return;
    setBusy(true);
    try {
      const res = await apiPost<{ answer: Answer }>("/api/answers/generate", { questionId: question.id });
      setAnswers((prev) => [res.answer, ...prev]);
      toast({ title: "AI draft generated", description: "Citation-checked answer created — requires scholarly review." });
    } catch (e) {
      toast({ title: e instanceof Error ? e.message : t("error"), variant: "destructive" });
    } finally {
      setBusy(false);
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

            {answers.map((a) => <AnswerCard key={a.id} answer={a} />)}

            {answers.length === 0 && !question.isSensitive && (
              <Card className="border-dashed">
                <CardContent className="p-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    No answer yet. The RAG engine can produce a citation-checked draft for editorial review:
                  </p>
                  <Button onClick={generate} disabled={busy} className="mt-3 bg-emerald-700 hover:bg-emerald-800 text-white">
                    {busy ? <Loader2 className="me-2 h-4 w-4 animate-spin" /> : <Sparkles className="me-2 h-4 w-4" />}
                    {busy ? t("generatingAnswer") : t("generateAnswer")}
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

      {!list && <div className="space-y-3">{[...Array(5)].map((_, i) => <Skeleton key={i} className="h-24 rounded-xl" />)}</div>}
      <div className="space-y-3">
        {(list ?? []).map((q) => (
          <Card key={q.id} className="cursor-pointer border-border/70 transition-shadow hover:shadow-md" onClick={() => setView("qa", q.id)}>
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

export function AnswerCard({ answer }: { answer: Answer }) {
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

        <div className="border-t pt-3">
          <ShareBar
            title={answer.directAnswer.length > 80 ? answer.directAnswer.slice(0, 80) + "…" : answer.directAnswer}
            section={t("navQA")}
            printTargetId="answer-card"
          />
        </div>
      </div>
    </ScholarlyCard>
  );
}
