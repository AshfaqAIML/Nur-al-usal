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
