"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { parseJson } from "@/lib/api";

/** Arabic text block — Amiri, RTL, generous line-height. */
export function ArabicText({ text, className }: { text: string | null | undefined; className?: string }) {
  if (!text) return null;
  return (
    <p dir="rtl" lang="ar" className={cn("font-arabic text-lg text-foreground/90 text-right", className)}>
      {text}
    </p>
  );
}

/** Urdu text block — Nastaliq, RTL. */
export function UrduText({ text, className }: { text: string | null | undefined; className?: string }) {
  if (!text) return null;
  return (
    <p dir="rtl" lang="ur" className={cn("font-urdu text-base text-foreground/90 text-right", className)}>
      {text}
    </p>
  );
}

/** Evidence item: {ref, quote, translation} */
interface EvidenceItem { ref?: string; title?: string; book?: string; scholar?: string; quote?: string; translation?: string | null; note?: string; source?: string; collection?: string; number?: string; grading?: string; status?: string }

export function EvidenceList({ json, emptyLabel = "No evidence recorded yet — items are added as sources are verified." }: { json: string | null | undefined; emptyLabel?: string }) {
  const items = parseJson<EvidenceItem[]>(json, []);
  if (!items || items.length === 0) {
    return <p className="text-sm text-muted-foreground italic">{emptyLabel}</p>;
  }
  return (
    <ul className="space-y-3">
      {items.map((e, i) => (
        <li key={i} className="border-s-2 border-emerald-300 dark:border-emerald-700 ps-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-emerald-800 dark:text-emerald-300">
              {e.ref ?? e.title ?? e.book ?? e.collection ?? "Source"}
              {e.scholar ? ` — ${e.scholar}` : ""}
              {e.number ? ` ${e.number}` : ""}
            </span>
            {e.grading && <span className="text-[11px] uppercase tracking-wide text-muted-foreground">{e.grading}</span>}
            {e.status && <span className="text-[11px] text-amber-700 dark:text-amber-400">({e.status})</span>}
          </div>
          {e.quote && <p className="text-sm mt-1 text-foreground/90">“{e.quote}”</p>}
          {e.translation && <p className="text-xs text-muted-foreground mt-0.5">{e.translation}</p>}
          {e.note && <p className="text-xs text-muted-foreground mt-0.5">{e.note}</p>}
        </li>
      ))}
    </ul>
  );
}

/** The Misconception vertical flow: Claim → … → Conclusion (MASTER PROMPT structure). */
export function SectionFlow({
  sections,
}: {
  sections: { key: string; label: string; children: React.ReactNode; tone?: "emerald" | "amber" | "rose" | "neutral" }[];
}) {
  const toneRing: Record<string, string> = {
    emerald: "border-emerald-300 dark:border-emerald-700",
    amber: "border-amber-300 dark:border-amber-700",
    rose: "border-rose-300 dark:border-rose-700",
    neutral: "border-border",
  };
  const toneDot: Record<string, string> = {
    emerald: "bg-emerald-500",
    amber: "bg-amber-500",
    rose: "bg-rose-500",
    neutral: "bg-stone-400",
  };
  return (
    <div className="relative space-y-6">
      {sections.map((s, i) => (
        <div key={s.key} id={`sec-${s.key}`} className="relative scroll-mt-28 ps-8">
          {i > 0 && <span aria-hidden className="absolute start-[11px] -top-6 h-6 w-px bg-border" />}
          <span
            aria-hidden
            className={cn("absolute start-1.5 top-1.5 h-3 w-3 rounded-full ring-4 ring-background", toneDot[s.tone ?? "neutral"])}
          />
          <div className={cn("rounded-xl border bg-card/60 p-5", toneRing[s.tone ?? "neutral"])}>
            <h4 className="font-scholarly text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">
              {s.label}
            </h4>
            <CardContent className="p-0 text-sm leading-relaxed">{s.children}</CardContent>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Statement card wrapper used everywhere for consistent scholarly blocks. */
export function ScholarlyCard({
  title,
  arabicTerm,
  children,
  className,
  icon,
}: {
  title: string;
  arabicTerm?: string | null;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}) {
  return (
    <Card className={cn("border-border/70 shadow-sm", className)}>
      <CardContent className="p-6">
        <div className="flex items-baseline justify-between gap-3 mb-3 flex-wrap">
          <h3 className="font-scholarly text-lg font-bold flex items-center gap-2">
            {icon}
            {title}
          </h3>
          {arabicTerm && <span className="font-arabic text-lg text-emerald-800 dark:text-emerald-300">{arabicTerm}</span>}
        </div>
        {children}
      </CardContent>
    </Card>
  );
}
