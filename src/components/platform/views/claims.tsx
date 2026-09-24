"use client";

import { useEffect, useRef, useState } from "react";
import {
  AlertTriangle, BookOpenCheck, CheckCircle2, FileQuestion, FileText, Languages, Loader2,
  ScanLine, ScanSearch, ShieldCheck, Upload, X, XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { usePlatform, useT } from "@/lib/store";
import { apiGet, apiPost, ClaimRecord } from "@/lib/api";
import { ClassificationBadge } from "@/components/platform/badges";
import { OrnamentDivider } from "@/components/platform/detail-chrome";
import { LiveStreamPanel, parseSseFrame, StreamStage } from "@/components/platform/views/qa";
import { ShareBar } from "@/components/platform/share-bar";
import { BookmarkButton } from "@/components/platform/library";
import { parseJson } from "@/lib/api";
import { useDocTitle } from "@/lib/use-doc-title";
import { cn } from "@/lib/utils";

interface ClaimResult extends ClaimRecord {
  kbEvidence?: { entityType: string; title: string; body: string; route: string }[];
  confidence?: string;
  /** Streaming endpoint emits parsed evidence as an array (DB stores a JSON string). */
  evidence?: string | ClaimEvidence["evidence"] | null;
}

interface ClaimEvidence {
  evidence?: { title?: string; ref?: string; quote?: string; source?: string }[];
  hanafiPosition?: string | null;
  disagreement?: string | null;
  confidence?: string;
  retrievedRoutes?: string[];
}

interface ScanResult {
  text: string;
  language: string;
  claimSummary: string;
}

const SCAN_MIME_OK = ["image/png", "image/jpeg", "image/webp"];
const SCAN_MAX_BYTES = 4 * 1024 * 1024;

/** Verification-engine stepper (retrieval → analysis → citation check). */
const VERIFY_STEPS = [
  { stage: "retrieving" as const, labelKey: "stageRetrieving", icon: BookOpenCheck },
  { stage: "analyzing" as const, labelKey: "stageAnalyzing", icon: ScanSearch },
  { stage: "verifying" as const, labelKey: "stageVerifying", icon: ShieldCheck },
];

/** Verdict icon + tone per classification family. */
function VerdictIcon({ classification }: { classification: string }) {
  const cls = classification ?? "";
  if (cls === "CORRECTLY_ATTRIBUTED" || cls === "PARTIALLY_CORRECT") {
    return <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" aria-hidden />;
  }
  if (cls === "UNSUPPORTED" || cls === "INCORRECTLY_ATTRIBUTED") {
    return <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" aria-hidden />;
  }
  if (cls === "INSUFFICIENTLY_DOCUMENTED") {
    return <FileQuestion className="h-5 w-5 text-stone-500 dark:text-stone-400" aria-hidden />;
  }
  return <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" aria-hidden />;
}

export function ClaimsView({ id }: { id?: string | null }) {
  const t = useT();
  const { toast } = useToast();
  const { setView } = usePlatform();
  const [claim, setClaim] = useState("");
  const [context, setContext] = useState("");
  const [busy, setBusy] = useState(false);
  const [stage, setStage] = useState<StreamStage>("idle");
  const [streamText, setStreamText] = useState("");
  const [result, setResult] = useState<ClaimResult | null>(null);
  const [recent, setRecent] = useState<ClaimRecord[]>([]);

  /* ── Scan & Verify (OCR) state ── */
  const [scanImage, setScanImage] = useState<string | null>(null);
  const [scanB64, setScanB64] = useState<string | null>(null);
  const [scanMime, setScanMime] = useState("");
  const [scanBusy, setScanBusy] = useState(false);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const loadRecent = () => apiGet<{ claims: ClaimRecord[] }>("/api/claims?take=8").then((d) => setRecent(d.claims)).catch(() => setRecent([]));
  useEffect(() => { loadRecent(); }, []);

  useDocTitle(result?.claim ? `“${result.claim.slice(0, 64)}…”` : t("navClaims"));

  // Deep link (#/claims/{id}) — restore a previously saved verdict.
  useEffect(() => {
    if (!id) return;
    let cancelled = false;
    apiGet<{ claim: ClaimRecord }>(`/api/claims?id=${encodeURIComponent(id)}`)
      .then((d) => { if (!cancelled) setResult({ ...d.claim }); })
      .catch(() => { if (!cancelled) toast({ title: "Saved verdict not found.", variant: "destructive" }); });
    return () => { cancelled = true; };
  }, [id]);

  /** Streaming verification: watch the engine retrieve, analyze, and cite live. */
  async function submit() {
    if (claim.trim().length < 8) {
      toast({ title: "Please write the claim you were told.", variant: "destructive" });
      return;
    }
    if (stage !== "idle") return;
    setBusy(true);
    setResult(null);
    setStage("connecting");
    setStreamText("");
    try {
      const res = await fetch("/api/claims/stream", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ claim, context }),
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
              const r = payload.result as ClaimResult;
              // kbEvidence arrives as a sibling of result in the stream payload.
              setResult({ ...r, kbEvidence: (payload.kbEvidence as ClaimResult["kbEvidence"]) ?? r.kbEvidence });
              toast({ title: t("verdictReady") });
              loadRecent();
            } else if (parsed.event === "error") {
              streamError = String(payload.error ?? "Verification engine error.");
            }
          } catch { /* tolerate malformed frame */ }
        }
      }
      if (streamError) throw new Error(streamError);
    } catch (e) {
      toast({ title: e instanceof Error ? e.message : t("error"), variant: "destructive" });
    } finally {
      setBusy(false);
      setStage("idle");
      setStreamText("");
    }
  }

  /* ── Scan & Verify handlers ── */
  function clearScan() {
    setScanImage(null);
    setScanB64(null);
    setScanMime("");
    setScanResult(null);
    setDragOver(false);
    if (fileRef.current) fileRef.current.value = "";
  }

  function handleFile(file: File | undefined | null) {
    if (!file) return;
    if (!SCAN_MIME_OK.includes(file.type)) {
      toast({ title: t("scanBadType"), variant: "destructive" });
      return;
    }
    if (file.size > SCAN_MAX_BYTES) {
      toast({ title: t("scanTooLarge"), variant: "destructive" });
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = String(reader.result ?? "");
      setScanImage(dataUrl);
      setScanB64(dataUrl);
      setScanMime(file.type);
      setScanResult(null);
    };
    reader.onerror = () => toast({ title: t("scanFailed"), variant: "destructive" });
    reader.readAsDataURL(file);
  }

  async function extract() {
    if (!scanB64 || !scanMime || scanBusy) return;
    setScanBusy(true);
    setScanResult(null);
    try {
      const res = await apiPost<ScanResult>("/api/ocr", { imageBase64: scanB64, mimeType: scanMime });
      setScanResult(res);
      toast({ title: t("scanDone") });
    } catch (e) {
      toast({ title: e instanceof Error ? e.message : t("scanFailed"), variant: "destructive" });
    } finally {
      setScanBusy(false);
    }
  }

  function useExtractedText() {
    if (!scanResult) return;
    setClaim(scanResult.text);
    toast({ title: t("scanDone") });
    document.getElementById("claim-input")?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  const langLabel = (lang: string) =>
    lang === "ar" ? t("langAr") : lang === "ur" ? t("langUr") : lang === "en" ? t("langEn") : t("langMixed");
  const rtlLang = scanResult?.language === "ar" || scanResult?.language === "ur";

  // Evidence payload: DB records store a JSON string; the stream emits arrays.
  const evidencePayload: ClaimEvidence = (() => {
    if (typeof result?.evidence === "string" || result?.evidence === null || result?.evidence === undefined) {
      return parseJson<ClaimEvidence>(result?.evidence ?? null, {});
    }
    return {
      evidence: result.evidence,
      hanafiPosition: result.hanafiPosition ?? null,
      disagreement: result.disagreement ?? null,
      confidence: result.confidence,
    };
  })();

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

      {/* ─── SCAN & VERIFY (OCR) ─── */}
      <Card className="border-emerald-200 border-dashed dark:border-emerald-900">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
              <ScanLine className="h-4.5 w-4.5" aria-hidden />
            </span>
            <div className="min-w-0">
              <h2 className="font-scholarly text-base font-bold">{t("scanTitle")}</h2>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{t("scanHint")}</p>
            </div>
          </div>

          <input
            ref={fileRef}
            type="file"
            accept="image/png,image/jpeg,image/webp"
            className="sr-only"
            aria-label={t("scanPickImage")}
            onChange={(e) => handleFile(e.target.files?.[0])}
          />

          {!scanImage ? (
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragOver(false);
                handleFile(e.dataTransfer.files?.[0]);
              }}
              className={cn(
                "mt-4 flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-6 py-8 text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600",
                dragOver
                  ? "border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/40"
                  : "border-emerald-300 hover:border-emerald-400 hover:bg-emerald-50/40 dark:border-emerald-800 dark:hover:bg-emerald-950/20"
              )}
            >
              <Upload className="h-5 w-5 text-emerald-700 dark:text-emerald-400" aria-hidden />
              <span className="text-sm font-semibold text-emerald-900 dark:text-emerald-200">{t("scanPickImage")}</span>
              <span className="text-xs text-muted-foreground">{t("scanDropHere")}</span>
            </button>
          ) : (
            <div className="mt-4 flex flex-col gap-4 rounded-xl border bg-muted/30 p-3 sm:flex-row">
              <div className="relative shrink-0 self-center sm:self-start">
                { }
                <img
                  src={scanImage}
                  alt="Scanned page preview"
                  className="max-h-48 rounded-lg border object-contain shadow-sm"
                />
                <button
                  type="button"
                  onClick={clearScan}
                  aria-label={t("scanClear")}
                  className="absolute -end-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border bg-background text-muted-foreground shadow-sm transition-colors hover:bg-destructive hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                >
                  <X className="h-3.5 w-3.5" aria-hidden />
                </button>
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-between gap-3">
                {scanBusy ? (
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin text-emerald-700 dark:text-emerald-400" aria-hidden />
                    {t("scanExtracting")}
                  </p>
                ) : scanResult ? (
                  <div className="min-w-0 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="outline" className="gap-1 bg-emerald-50 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200">
                        <CheckCircle2 className="h-3 w-3" aria-hidden />
                        {t("scanDetected")}: {langLabel(scanResult.language)}
                      </Badge>
                    </div>
                    {scanResult.claimSummary && (
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        <FileText className="me-1 inline h-3 w-3 align-[-2px]" aria-hidden /> {scanResult.claimSummary}
                      </p>
                    )}
                    <pre
                      dir={rtlLang ? "rtl" : "auto"}
                      className={cn(
                        "max-h-40 overflow-y-auto whitespace-pre-wrap rounded-lg border bg-background p-3 font-scholarly text-xs leading-relaxed",
                        rtlLang && "font-arabic text-sm leading-loose"
                      )}
                    >
                      {scanResult.text}
                    </pre>
                  </div>
                ) : (
                  <p className="text-xs text-muted-foreground">{t("scanNote")}</p>
                )}
                <div className="flex flex-wrap gap-2">
                  {!scanResult && (
                    <Button
                      onClick={extract}
                      disabled={scanBusy}
                      size="sm"
                      className="bg-emerald-700 text-white hover:bg-emerald-800"
                    >
                      {scanBusy
                        ? <><Loader2 className="me-2 h-4 w-4 animate-spin" /> {t("scanExtracting")}</>
                        : <><ScanLine className="me-2 h-4 w-4" /> {t("scanExtract")}</>}
                    </Button>
                  )}
                  {scanResult && (
                    <Button onClick={useExtractedText} size="sm" className="bg-emerald-700 text-white hover:bg-emerald-800">
                      <CheckCircle2 className="me-2 h-4 w-4" aria-hidden /> {t("scanUseText")}
                    </Button>
                  )}
                  <Button onClick={clearScan} variant="outline" size="sm">{t("scanClear")}</Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="mt-4 border-emerald-200 dark:border-emerald-900">
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

      {/* ─── LIVE STREAM: watch the verification engine work ─── */}
      {stage !== "idle" && (
        <div className="mt-6">
          <LiveStreamPanel stage={stage} text={streamText} steps={VERIFY_STEPS} title={t("verifyEngineTitle")} />
        </div>
      )}

      {result && !busy && (
        <div className="animate-in fade-in slide-in-from-bottom-2 mt-6 space-y-4 duration-500">
          <Card className="border-2 border-emerald-300 dark:border-emerald-800">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">“{result.claim}”</p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t("classification")}:</span>
                <ClassificationBadge status={result.classification} />
                {result.confidence && (
                  <Badge variant="outline" className="text-[11px]">{t("confidence")}: {result.confidence}</Badge>
                )}
                <span className="ms-auto" aria-hidden><VerdictIcon classification={result.classification} /></span>
              </div>
              <p className="mt-3 text-sm leading-relaxed">{result.explanation}</p>
              {evidencePayload.hanafiPosition && (
                <div className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50/60 p-3 dark:border-emerald-900 dark:bg-emerald-950/40">
                  <p className="text-xs font-bold uppercase tracking-wide text-emerald-800 dark:text-emerald-300">{t("actualHanafiPosition")}</p>
                  <p className="mt-1 text-sm">{evidencePayload.hanafiPosition}</p>
                </div>
              )}
              {evidencePayload.disagreement && (
                <p className="mt-3 text-xs text-muted-foreground"><strong>{t("disputed")}:</strong> {evidencePayload.disagreement}</p>
              )}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t pt-3">
                <BookmarkButton kind="claim" keyId={result.id} title={result.claim} withLabel />
                <ShareBar title={result.claim} section={t("navClaims")} compact />
              </div>
            </CardContent>
          </Card>

          {/* Evidence attached — never a classification without explaining why */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-scholarly text-base font-bold">{t("theEvidence")}</h3>
              <OrnamentDivider className="my-3" />
              {(!evidencePayload.evidence || evidencePayload.evidence.length === 0) && (
                <p className="mt-2 text-sm italic text-muted-foreground">
                  This attribution could not be verified from the available sources — no fabricated citations are shown.
                </p>
              )}
              <ul className="mt-3 space-y-2.5">
                {(evidencePayload.evidence ?? []).map((ev, i) => (
                  <li key={i} className="border-s-2 border-emerald-400 ps-3 transition-colors hover:border-amber-500">
                    <p className="text-sm font-semibold">{ev.title}{ev.ref ? ` — ${ev.ref}` : ""}{ev.source ? ` (${ev.source})` : ""}</p>
                    {ev.quote && <p className="mt-0.5 text-xs text-muted-foreground">“{ev.quote}”</p>}
                  </li>
                ))}
              </ul>
              {result.kbEvidence && result.kbEvidence.length > 0 && (
                <div className="mt-4">
                  <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    <Languages className="h-3.5 w-3.5" aria-hidden /> {t("knowledgeBaseEvidence")}
                  </p>
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
                        className="rounded-full border bg-muted/40 px-2.5 py-1 text-[11px] transition-all hover:border-emerald-400 hover:bg-accent hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
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
              <button key={r.id} onClick={() => setView("claims", r.id)} className="flex w-full items-center justify-between gap-3 rounded-lg border bg-card px-4 py-2.5 text-start transition-colors hover:border-emerald-300 hover:bg-accent/50">
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
