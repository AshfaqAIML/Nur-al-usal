"use client";

import { useEffect, useState } from "react";
import { Loader2, ScanSearch, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { usePlatform, useT } from "@/lib/store";
import { apiGet, apiPost, ClaimRecord } from "@/lib/api";
import { ClassificationBadge } from "@/components/platform/badges";
import { parseJson } from "@/lib/api";

interface ClaimResult extends ClaimRecord {
  kbEvidence?: { entityType: string; title: string; body: string; route: string }[];
  confidence?: string;
}

interface ClaimEvidence {
  evidence?: { title?: string; ref?: string; quote?: string; source?: string }[];
  hanafiPosition?: string | null;
  disagreement?: string | null;
  confidence?: string;
  retrievedRoutes?: string[];
}

export function ClaimsView() {
  const t = useT();
  const { toast } = useToast();
  const { setView } = usePlatform();
  const [claim, setClaim] = useState("");
  const [context, setContext] = useState("");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<ClaimResult | null>(null);
  const [recent, setRecent] = useState<ClaimRecord[]>([]);

  const loadRecent = () => apiGet<{ claims: ClaimRecord[] }>("/api/claims?take=8").then((d) => setRecent(d.claims)).catch(() => setRecent([]));
  useEffect(() => { loadRecent(); }, []);

  async function submit() {
    if (claim.trim().length < 8) {
      toast({ title: "Please write the claim you were told.", variant: "destructive" });
      return;
    }
    setBusy(true);
    setResult(null);
    try {
      const res = await apiPost<ClaimResult>("/api/claims", { claim, context });
      setResult(res);
      loadRecent();
    } catch (e) {
      toast({ title: e instanceof Error ? e.message : t("error"), variant: "destructive" });
    } finally {
      setBusy(false);
    }
  }

  const parsed: ClaimEvidence = parseJson<ClaimEvidence>(result?.evidence ?? null, {});

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <header className="mb-6">
        <Badge className="bg-emerald-700 text-white">Interactive Feature</Badge>
        <h1 className="mt-2 font-scholarly text-3xl font-bold">{t("isThisReallyHanafi")}</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {t("claimsIntro")} — the system retrieves evidence from the verified knowledge base and classifies the claim:
          Correctly attributed · Partially correct · Misleading · Incorrectly attributed · Disputed · Unsupported · Insufficiently documented.
        </p>
        <p className="mt-1 text-xs italic text-muted-foreground">{t("neverWithoutWhy")}</p>
      </header>

      <Card className="border-emerald-200 dark:border-emerald-900">
        <CardContent className="p-6">
          <label htmlFor="claim-input" className="text-sm font-semibold">
            {t("claimsIntro")} <span className="text-muted-foreground">(complete the sentence)</span>
          </label>
          <Textarea
            id="claim-input"
            value={claim}
            onChange={(e) => setClaim(e.target.value)}
            placeholder={t("claimsPlaceholder")}
            rows={3}
            className="mt-2 resize-none"
            maxLength={2000}
          />
          <label htmlFor="claim-context" className="mt-3 block text-xs font-medium text-muted-foreground">
            Optional: who told you / where you saw it
          </label>
          <input
            id="claim-context"
            value={context}
            onChange={(e) => setContext(e.target.value)}
            className="mt-1 w-full rounded-md border bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-600"
            placeholder="e.g. a YouTube video, a book, a friend…"
            maxLength={500}
          />
          <Button
            onClick={submit}
            disabled={busy}
            className="mt-4 w-full bg-emerald-700 hover:bg-emerald-800 text-white sm:w-auto"
          >
            {busy ? <><Loader2 className="me-2 h-4 w-4 animate-spin" /> {t("verifying")}</> : <><ScanSearch className="me-2 h-4 w-4" /> {t("verifyClaim")}</>}
          </Button>
        </CardContent>
      </Card>

      {/* ─── RESULT ─── */}
      {busy && (
        <Card className="mt-6 animate-pulse border-dashed">
          <CardContent className="p-6 text-center text-sm text-muted-foreground">
            Retrieving knowledge-base evidence → classifying → attaching citations…
          </CardContent>
        </Card>
      )}

      {result && !busy && (
        <div className="mt-6 space-y-4">
          <Card className="border-2 border-emerald-300 dark:border-emerald-800">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">“{result.claim}”</p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t("classification")}:</span>
                <ClassificationBadge status={result.classification} />
                {result.confidence && (
                  <Badge variant="outline" className="text-[11px]">{t("confidence")}: {result.confidence}</Badge>
                )}
              </div>
              <p className="mt-3 text-sm leading-relaxed">{result.explanation}</p>
              {parsed.hanafiPosition && (
                <div className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50/60 p-3 dark:border-emerald-900 dark:bg-emerald-950/40">
                  <p className="text-xs font-bold uppercase tracking-wide text-emerald-800 dark:text-emerald-300">{t("actualHanafiPosition")}</p>
                  <p className="mt-1 text-sm">{parsed.hanafiPosition}</p>
                </div>
              )}
              {parsed.disagreement && (
                <p className="mt-3 text-xs text-muted-foreground"><strong>{t("disputed")}:</strong> {parsed.disagreement}</p>
              )}
            </CardContent>
          </Card>

          {/* Evidence attached — never a classification without explaining why */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-scholarly text-base font-bold">{t("theEvidence")}</h3>
              {(!parsed.evidence || parsed.evidence.length === 0) && (
                <p className="mt-2 text-sm italic text-muted-foreground">
                  This attribution could not be verified from the available sources — no fabricated citations are shown.
                </p>
              )}
              <ul className="mt-3 space-y-2.5">
                {(parsed.evidence ?? []).map((ev, i) => (
                  <li key={i} className="border-s-2 border-emerald-400 ps-3">
                    <p className="text-sm font-semibold">{ev.title}{ev.ref ? ` — ${ev.ref}` : ""}{ev.source ? ` (${ev.source})` : ""}</p>
                    {ev.quote && <p className="mt-0.5 text-xs text-muted-foreground">“{ev.quote}”</p>}
                  </li>
                ))}
              </ul>
              {result.kbEvidence && result.kbEvidence.length > 0 && (
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t("knowledgeBaseEvidence")}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {result.kbEvidence.map((k, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          if (k.route.startsWith("misconceptions/")) setView("misconceptions", k.route.split("/")[1]);
                          else if (k.route.startsWith("knowledge/")) setView("knowledge", k.route.split("/")[1]);
                          else if (k.route.startsWith("sources/book/")) setView("sources", `book/${k.route.split("/")[2]}`);
                          else if (k.route.startsWith("sources/scholar/")) setView("sources", `scholar/${k.route.split("/")[2]}`);
                          else if (k.route === "compare") setView("compare");
                          else setView("search", JSON.stringify({ q: k.title }));
                        }}
                        className="rounded-full border bg-muted/40 px-2.5 py-1 text-[11px] hover:bg-accent"
                      >
                        {k.entityType}: {k.title.slice(0, 48)}{k.title.length > 48 ? "…" : ""}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* ─── RECENT ─── */}
      {recent.length > 0 && (
        <section className="mt-10">
          <h2 className="font-scholarly text-lg font-bold">{t("recentClaims")}</h2>
          <div className="mt-3 space-y-2">
            {recent.map((r) => (
              <button key={r.id} onClick={() => { setResult({ ...r }); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex w-full items-center justify-between gap-3 rounded-lg border bg-card px-4 py-2.5 text-start hover:bg-accent/50">
                <span className="truncate text-xs">“{r.claim}”</span>
                <ClassificationBadge status={r.classification} />
              </button>
            ))}
          </div>
          <p className="mt-3 flex items-start gap-1.5 text-[11px] text-muted-foreground">
            <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-700 dark:text-emerald-400" aria-hidden />
            The AI never invents citations — evidence comes only from the verified knowledge base, and unverifiable attributions are stated as such.
          </p>
        </section>
      )}
    </div>
  );
}
