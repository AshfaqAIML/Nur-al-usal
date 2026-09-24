"use client";

/**
 * Compact "Attach a scanned page" block for the Ask view.
 * Pick/drop an image → OCR via /api/ocr → quote the extracted text
 * into the question. Shares the verbatim-extraction pipeline with
 * the "Scan & Verify" claim checker.
 */

import { useRef, useState } from "react";
import { CheckCircle2, Loader2, Paperclip, ScanLine, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useT } from "@/lib/store";
import { apiPost } from "@/lib/api";
import { cn } from "@/lib/utils";

interface ScanResult {
  text: string;
  language: string;
  claimSummary: string;
}

const MIME_OK = ["image/png", "image/jpeg", "image/webp"];
const MAX_BYTES = 4 * 1024 * 1024;

export function OcrAttach({ onQuote }: { onQuote: (text: string, claimSummary: string, language: string) => void }) {
  const t = useT();
  const { toast } = useToast();
  const [preview, setPreview] = useState<string | null>(null);
  const [b64, setB64] = useState<string | null>(null);
  const [mime, setMime] = useState("");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  function reset() {
    setPreview(null);
    setB64(null);
    setMime("");
    setResult(null);
    setDragOver(false);
    if (fileRef.current) fileRef.current.value = "";
  }

  function handleFile(file: File | undefined | null) {
    if (!file) return;
    if (!MIME_OK.includes(file.type)) {
      toast({ title: t("scanBadType"), variant: "destructive" });
      return;
    }
    if (file.size > MAX_BYTES) {
      toast({ title: t("scanTooLarge"), variant: "destructive" });
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = String(reader.result ?? "");
      setPreview(dataUrl);
      setB64(dataUrl);
      setMime(file.type);
      setResult(null);
    };
    reader.onerror = () => toast({ title: t("scanFailed"), variant: "destructive" });
    reader.readAsDataURL(file);
  }

  async function extract() {
    if (!b64 || !mime || busy) return;
    setBusy(true);
    setResult(null);
    try {
      const res = await apiPost<ScanResult>("/api/ocr", { imageBase64: b64, mimeType: mime });
      setResult(res);
      toast({ title: t("scanDone") });
    } catch (e) {
      toast({ title: e instanceof Error ? e.message : t("scanFailed"), variant: "destructive" });
    } finally {
      setBusy(false);
    }
  }

  const langLabel = (lang: string) =>
    lang === "ar" ? t("langAr") : lang === "ur" ? t("langUr") : lang === "en" ? t("langEn") : t("langMixed");
  const rtl = result?.language === "ar" || result?.language === "ur";

  return (
    <div className="rounded-xl border border-dashed bg-muted/20 p-4">
      <input
        ref={fileRef}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        className="sr-only"
        aria-label={t("attachScan")}
        onChange={(e) => handleFile(e.target.files?.[0])}
      />

      {!preview ? (
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFile(e.dataTransfer.files?.[0]); }}
          className={cn(
            "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-start transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600",
            dragOver ? "bg-emerald-50 dark:bg-emerald-950/40" : "hover:bg-accent/60"
          )}
        >
          <Paperclip className="h-4 w-4 shrink-0 text-emerald-700 dark:text-emerald-400 rtl-flip" aria-hidden />
          <span className="min-w-0">
            <span className="block text-sm font-medium">{t("attachScan")}</span>
            <span className="block truncate text-[11px] text-muted-foreground">{t("attachScanHint")}</span>
          </span>
        </button>
      ) : (
        <div className="flex items-start gap-3">
          <img src={preview} alt="Attached scan" className="h-16 w-14 shrink-0 rounded-md border object-cover" />
          <div className="min-w-0 flex-1">
            {busy ? (
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <Loader2 className="h-3.5 w-3.5 animate-spin text-emerald-700 dark:text-emerald-400" aria-hidden />
                {t("scanExtracting")}
              </p>
            ) : result ? (
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-1.5">
                  <Badge variant="outline" className="gap-1 bg-emerald-50 text-[10px] text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200">
                    <CheckCircle2 className="h-3 w-3" aria-hidden /> {langLabel(result.language)}
                  </Badge>
                  {result.claimSummary && (
                    <span className="truncate text-[11px] text-muted-foreground">{result.claimSummary}</span>
                  )}
                </div>
                <details className="group">
                  <summary className="cursor-pointer list-none text-[11px] font-medium text-emerald-800 underline-offset-2 hover:underline dark:text-emerald-300 [&::-webkit-details-marker]:hidden">
                    {t("scanTextPreview")} ▾
                  </summary>
                  <pre
                    dir={rtl ? "rtl" : "auto"}
                    className={cn(
                      "mt-1.5 max-h-28 overflow-y-auto whitespace-pre-wrap rounded-md border bg-background p-2 font-scholarly text-[11px] leading-relaxed",
                      rtl && "font-arabic text-xs leading-loose"
                    )}
                  >
                    {result.text}
                  </pre>
                </details>
              </div>
            ) : (
              <p className="text-[11px] text-muted-foreground">{t("scanNote")}</p>
            )}
            <div className="mt-2 flex flex-wrap gap-1.5">
              {!result && (
                <Button type="button" size="sm" variant="outline" className="h-7 gap-1.5 text-xs" onClick={extract} disabled={busy}>
                  <ScanLine className="h-3.5 w-3.5" aria-hidden /> {t("scanExtract")}
                </Button>
              )}
              {result && (
                <Button
                  type="button"
                  size="sm"
                  className="h-7 gap-1.5 bg-emerald-700 text-xs text-white hover:bg-emerald-800"
                  onClick={() => {
                    onQuote(result.text, result.claimSummary, result.language);
                    reset();
                    toast({ title: t("quotedToast") });
                  }}
                >
                  <CheckCircle2 className="h-3.5 w-3.5" aria-hidden /> {t("quoteIntoQuestion")}
                </Button>
              )}
              <Button type="button" size="sm" variant="ghost" className="h-7 gap-1.5 text-xs text-muted-foreground" onClick={reset}>
                <X className="h-3.5 w-3.5" aria-hidden /> {t("scanClear")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
