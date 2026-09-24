"use client";

import { useState } from "react";
import { Check, Copy, Link2, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/store";
import { buildCitation, copyToClipboard, currentHashPath } from "@/lib/cite";

/**
 * Citation-first action bar: Copy Citation · Copy Link · Print.
 * Used on objection detail, misconception detail, Q&A answers,
 * comparison cards and claim verdicts.
 * `compact` drops the Print button for card-level placements.
 */
export function ShareBar({
  title,
  section,
  sourceRef,
  printTargetId,
  compact = false,
  pathOverride,
}: {
  title: string;
  section: string;
  sourceRef?: string | null;
  printTargetId?: string;
  compact?: boolean;
  /** Citation/link target for card-level placements (defaults to current hash path). */
  pathOverride?: string;
}) {
  const t = useT();
  const [copied, setCopied] = useState<"cite" | "link" | null>(null);

  const cite = () => buildCitation({ title, section, path: pathOverride ?? currentHashPath(), sourceRef });

  const onCopyCitation = async () => {
    const ok = await copyToClipboard(cite());
    if (ok) {
      setCopied("cite");
      setTimeout(() => setCopied(null), 2000);
    }
  };

  const onCopyLink = async () => {
    const url = `${window.location.origin}/${pathOverride ?? currentHashPath()}`;
    const ok = await copyToClipboard(url);
    if (ok) {
      setCopied("link");
      setTimeout(() => setCopied(null), 2000);
    }
  };

  const onPrint = () => {
    if (printTargetId) document.body.setAttribute("data-print-target", printTargetId);
    window.print();
    if (printTargetId) document.body.removeAttribute("data-print-target");
  };

  return (
    <div className="no-print flex flex-wrap items-center gap-1.5" role="group" aria-label={t("citeAndShare")}>
      <Button variant="outline" size="sm" className="h-8 gap-1.5 text-xs" onClick={onCopyCitation}>
        {copied === "cite" ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
        {copied === "cite" ? t("copied") : t("copyCitation")}
      </Button>
      <Button variant="outline" size="sm" className="h-8 gap-1.5 text-xs" onClick={onCopyLink}>
        {copied === "link" ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Link2 className="h-3.5 w-3.5" />}
        {copied === "link" ? t("copied") : t("copyLink")}
      </Button>
      {!compact && (
        <Button variant="outline" size="sm" className="h-8 gap-1.5 text-xs" onClick={onPrint}>
          <Printer className="h-3.5 w-3.5" />
          {t("print")}
        </Button>
      )}
    </div>
  );
}
