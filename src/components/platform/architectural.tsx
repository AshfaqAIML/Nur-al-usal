"use client";

/**
 * Architectural component primitives — the shared visual language of the
 * platform: geometric dividers, scholarly section headings, manuscript
 * panels and arch-framed surfaces. Pan-Islamic inspiration (khatam stars,
 * muqarnas arcs, mihrab niches) applied as quiet texture, never ornament
 * for its own sake.
 */

import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/store";

/* ─── Geometric divider: ──────── ◇ ──────── ── */
export function GeometricDivider({
  label,
  className,
  diamond = true,
}: {
  /** Optional small-caps label between the rules. */
  label?: ReactNode;
  className?: string;
  /** Render the rotated-square diamond (default true). */
  diamond?: boolean;
}) {
  return (
    <div className={cn("geometric-divider", className)} role="separator" aria-label={typeof label === "string" ? label : undefined}>
      {label != null && (
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:text-emerald-300">
          {label}
        </span>
      )}
      {diamond && <span className="divider-diamond" aria-hidden />}
    </div>
  );
}

/* ─── Scholarly section heading with divider + optional "more" action ── */
export function SectionHeading({
  title,
  onMore,
  className,
  headingClassName,
}: {
  title: ReactNode;
  onMore?: () => void;
  className?: string;
  headingClassName?: string;
}) {
  const t = useT();
  return (
    <div className={cn("mb-4", className)}>
      <div className="flex items-end justify-between gap-3">
        <h2 className={cn("font-scholarly text-xl font-semibold tracking-tight", headingClassName)}>{title}</h2>
        {onMore && (
          <Button
            variant="ghost"
            size="sm"
            className="gap-1 text-emerald-800 transition-colors hover:text-emerald-900 dark:text-emerald-300 dark:hover:text-emerald-200"
            onClick={onMore}
          >
            {t("readMore")} <ArrowRight className="h-3.5 w-3.5 rtl-flip" />
          </Button>
        )}
      </div>
      <GeometricDivider className="mt-2" diamond />
    </div>
  );
}

/* ─── Manuscript panel: framed quotation block (Qur'an, hadith, classical text) ── */
export function ManuscriptPanel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-emerald-200/80 bg-gradient-to-b from-emerald-50/70 to-card shadow-subtle",
        "dark:border-emerald-900/70 dark:from-emerald-950/40 dark:to-card",
        className,
      )}
    >
      {/* Khatam corner ornament, mirrored for both ends (RTL-safe) */}
      <span
        aria-hidden
        className="pointer-events-none absolute -start-8 -top-8 h-24 w-24 opacity-[0.08]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23856a12' stroke-width='2'%3E%3Crect x='22' y='22' width='56' height='56'/%3E%3Crect x='22' y='22' width='56' height='56' transform='rotate(45 50 50)'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -end-8 -top-8 h-24 w-24 opacity-[0.08]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23856a12' stroke-width='2'%3E%3Crect x='22' y='22' width='56' height='56'/%3E%3Crect x='22' y='22' width='56' height='56' transform='rotate(45 50 50)'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      {children}
    </div>
  );
}

/* ─── Book spine accent: vertical brass rule evoking a library spine ── */
export function BookSpine({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-y-0 start-0 w-1 rounded-s-lg",
        "bg-gradient-to-b from-brass/60 via-brass/25 to-brass/60",
        className,
      )}
    />
  );
}

/* ─── Ayah medallion: eight-point star rosette carrying the verse number ──
   Echoes the illuminated medallions (shamsa) of Qur'anic manuscripts. */
export function AyahMedallion({ number, className }: { number: ReactNode; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "relative inline-flex h-9 w-9 flex-none items-center justify-center",
        className,
      )}
    >
      {/* Khatam star outline */}
      <svg viewBox="0 0 40 40" className="absolute inset-0 h-full w-full text-brass" fill="none" stroke="currentColor" strokeWidth="1.1">
        <rect x="9" y="9" width="22" height="22" rx="1" />
        <rect x="9" y="9" width="22" height="22" rx="1" transform="rotate(45 20 20)" />
        <circle cx="20" cy="20" r="8.5" strokeOpacity="0.55" />
      </svg>
      <span className="relative z-10 text-[10px] font-semibold tabular-nums text-emerald-800 dark:text-emerald-300">
        {number}
      </span>
      <span className="sr-only">, verse {typeof number === "number" ? number : String(number)}</span>
    </span>
  );
}

/* ─── Niche marker: small mihrab-arch glyph marking curated entries ── */
export function NicheMarker({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("relative inline-flex h-10 w-7 flex-none items-end justify-center", className)}
    >
      <svg viewBox="0 0 28 40" className="h-full w-full text-brass/70" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M5 38 V14 A9 12 0 0 1 23 14 V38" />
        <path d="M9 38 V15 A5 7 0 0 1 19 15 V38" strokeOpacity="0.45" />
      </svg>
    </span>
  );
}

/* ─── Catalog row: library-card metadata line (label | value) ── */
export function CatalogRow({ label, children, className }: { label: ReactNode; children: ReactNode; className?: string }) {
  return (
    <div className={cn("grid grid-cols-[minmax(72px,auto)_1fr] items-baseline gap-x-3 gap-y-0.5 py-1.5", className)}>
      <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/80">{label}</dt>
      <dd className="text-xs leading-relaxed text-foreground/85">{children}</dd>
    </div>
  );
}

/* ─── Empty state: dome silhouette geometry — quiet, architectural, not sad ── */
export function EmptyState({
  title,
  hint,
  children,
  className,
}: {
  title: ReactNode;
  hint?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col items-center justify-center px-6 py-12 text-center", className)}>
      {/* Dome + finial line drawing */}
      <svg viewBox="0 0 96 56" className="mb-4 h-14 w-24 text-muted-foreground/40" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
        <path d="M8 52 V34 C8 18 24 8 48 8 C72 8 88 18 88 34 V52" />
        <path d="M20 52 V36 C20 24 32 16 48 16 C64 16 76 24 76 36 V52" strokeOpacity="0.5" />
        <path d="M48 2 v6" strokeOpacity="0.8" />
        <circle cx="48" cy="2" r="1.6" fill="currentColor" stroke="none" strokeOpacity="0.8" />
        <path d="M2 52 h92" strokeOpacity="0.6" />
      </svg>
      <p className="font-scholarly text-sm font-semibold text-foreground/70">{title}</p>
      {hint && <p className="mt-1 max-w-sm text-xs leading-relaxed text-muted-foreground">{hint}</p>}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}

/* ─── Citation block: formatted scholarly citation with copy affordance ── */
export function CitationBlock({
  label,
  citation,
  onCopy,
  copied,
  className,
}: {
  label?: ReactNode;
  citation: string;
  onCopy?: () => void;
  copied?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative rounded-lg border border-brass/35 bg-secondary/60 p-3 ps-4",
        className,
      )}
    >
      {/* brass quotation edge */}
      <span aria-hidden className="absolute inset-y-2 start-0 w-[3px] rounded-full bg-brass/50" />
      {label && (
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
      )}
      <p className="pe-2 font-scholarly text-[13px] leading-relaxed text-foreground/85">{citation}</p>
      {onCopy && (
        <button
          type="button"
          onClick={onCopy}
          className="mt-2 inline-flex items-center gap-1 rounded-md border bg-card px-2 py-1 text-[11px] font-medium text-emerald-800 transition-colors hover:bg-accent dark:text-emerald-300"
        >
          {copied ? "✓" : "⧉"}
          {copied ? "Copied" : "Copy"}
        </button>
      )}
    </div>
  );
}

/* ─── Dome loader: loading state that breathes with the architecture ── */
export function DomeLoader({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center py-10", className)} role="status" aria-live="polite">
      <svg viewBox="0 0 64 40" className="h-10 w-16 text-primary/60" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M6 36 V22 C6 10 17 4 32 4 C47 4 58 10 58 22 V36" className="dome-loader-arc" />
        <path d="M14 36 V24 C14 15 22 10 32 10 C42 10 50 15 50 24 V36" strokeOpacity="0.45" className="dome-loader-arc dome-loader-arc-late" />
        <path d="M2 36 h60" strokeOpacity="0.6" />
        <path d="M32 0 v4" strokeOpacity="0.7" />
      </svg>
      <span className="sr-only">Loading…</span>
    </div>
  );
}
