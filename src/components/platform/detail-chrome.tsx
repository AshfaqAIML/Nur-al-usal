"use client";

/**
 * Detail-page chrome: reading progress bar, scholarly breadcrumb,
 * ornamental divider, and a global back-to-top affordance.
 */

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { usePlatform, useT, View } from "@/lib/store";
import { cn } from "@/lib/utils";

/* ─── Reading progress ───
 * Fixed 3px gradient bar at the very top of the viewport.
 * Progress is computed from the target article's position:
 * 0% when its top reaches the viewport top, 100% when its
 * bottom enters the viewport. Falls back to document progress.
 */
export function ReadingProgress({ targetId }: { targetId: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const compute = () => {
      raf = 0;
      const el = document.getElementById(targetId);
      let pct: number;
      if (el) {
        const rect = el.getBoundingClientRect();
        const denom = Math.max(rect.height - window.innerHeight * 0.35, 1);
        pct = (-rect.top + window.innerHeight * 0.15) / denom;
      } else {
        const doc = document.documentElement;
        const denom = Math.max(doc.scrollHeight - window.innerHeight, 1);
        pct = window.scrollY / denom;
      }
      setProgress(Math.min(Math.max(pct, 0), 1) * 100);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [targetId]);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px] no-print"
      role="progressbar"
      aria-label="Reading progress"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="absolute top-0 start-0 h-full bg-gradient-to-r from-emerald-800 via-emerald-500 to-amber-400 shadow-[0_0_8px_rgba(16,185,129,0.55)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

/* ─── Scholarly breadcrumb ───
 * Home / Section / current — with graceful truncation and RTL support.
 */
export function DetailBreadcrumb({
  sectionLabel,
  sectionView,
  current,
}: {
  sectionLabel: string;
  sectionView: View;
  current: string;
}) {
  const t = useT();
  const { setView } = usePlatform();
  return (
    <nav aria-label="Breadcrumb" className="mb-4 no-print">
      <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
        <li>
          <button
            onClick={() => setView("home")}
            className="rounded px-1 py-0.5 transition-colors hover:bg-accent hover:text-foreground"
          >
            {t("navHome")}
          </button>
        </li>
        <li aria-hidden className="flex items-center">
          <ChevronRight className="h-3 w-3 rtl:rotate-180" />
        </li>
        <li>
          <button
            onClick={() => setView(sectionView)}
            className="rounded px-1 py-0.5 transition-colors hover:bg-accent hover:text-foreground"
          >
            {sectionLabel}
          </button>
        </li>
        <li aria-hidden className="flex items-center">
          <ChevronRight className="h-3 w-3 rtl:rotate-180" />
        </li>
        <li aria-current="page">
          <span className="max-w-[16rem] truncate rounded bg-muted/60 px-1.5 py-0.5 font-medium text-foreground sm:max-w-[24rem]">
            {current}
          </span>
        </li>
      </ol>
    </nav>
  );
}

/* ─── Ornamental divider ───
 * Classical manuscript feel: gradient rule + 8-point star motif.
 */
export function OrnamentDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3 no-print", className)} aria-hidden>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-border" />
      <span className="relative flex h-4 w-4 items-center justify-center">
        <span className="absolute inset-0 rotate-45 rounded-[2px] border border-amber-500/50" />
        <span className="h-1 w-1 rounded-full bg-amber-500/80" />
      </span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-border" />
    </div>
  );
}

/* ─── Back to top (global) ─── */
export function BackToTop() {
  const t = useT();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        setVisible(window.scrollY > 300);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <button
      type="button"
      aria-label={t("backToTop")}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-5 end-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-emerald-800/30 bg-emerald-700 text-white shadow-lg transition-all duration-300 hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 no-print",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <ArrowUp className="h-5 w-5" aria-hidden />
    </button>
  );
}
