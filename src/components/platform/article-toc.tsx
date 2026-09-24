"use client";

/**
 * "On this page" table of contents for long research articles.
 * - TocRail: sticky scholarly contents rail for desktop (inside an aside).
 * - TocMobile: collapsible contents box rendered at the top of the article.
 * Both share a rAF-throttled scrollspy; targets must carry id="sec-<key>"
 * and scroll-mt so anchors land below the fixed chrome.
 */

import { useEffect, useState } from "react";
import { ChevronDown, ListTree } from "lucide-react";
import { useT } from "@/lib/store";
import { cn } from "@/lib/utils";

export interface TocItem {
  key: string;
  label: string;
}

/** rAF-throttled scrollspy: id of the last section whose top crossed the header offset. */
function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    let raf = 0;
    const compute = () => {
      raf = 0;
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 150) current = id;
        else break;
      }
      // Bottom of document → activate the final section
      if (ids.length > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = ids[ids.length - 1];
      }
      setActive(current);
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
     
  }, [ids.join("|")]);

  return active;
}

function useJump() {
  return (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
}

/* ─── Desktop sticky rail ─── */
export function TocRail({ items }: { items: TocItem[] }) {
  const t = useT();
  const active = useScrollSpy(items.map((i) => `sec-${i.key}`));
  const jump = useJump();

  return (
    <nav
      aria-label={t("onThisPage")}
      className="sticky top-24 rounded-xl border bg-card/60 p-3 shadow-sm"
    >
      <p className="flex items-center gap-1.5 px-2 pb-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
        <ListTree className="h-3.5 w-3.5 text-emerald-700 dark:text-emerald-400" aria-hidden />
        {t("onThisPage")}
      </p>
      <ol className="space-y-0.5">
        {items.map((item) => {
          const id = `sec-${item.key}`;
          const isActive = active === id;
          return (
            <li key={item.key}>
              <button
                onClick={() => jump(id)}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "group flex w-full items-baseline gap-2 rounded-md px-2 py-1.5 text-start text-xs leading-snug transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600",
                  isActive
                    ? "bg-emerald-50 font-semibold text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-200"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full transition-colors",
                    isActive ? "bg-amber-500" : "bg-border group-hover:bg-muted-foreground/50"
                  )}
                />
                <span className="min-w-0">{item.label}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/* ─── Mobile collapsible ─── */
export function TocMobile({ items }: { items: TocItem[] }) {
  const t = useT();
  const active = useScrollSpy(items.map((i) => `sec-${i.key}`));
  const jump = useJump();

  return (
    <details className="group mb-6 overflow-hidden rounded-xl border bg-card/60 no-print xl:hidden">
      <summary className="flex cursor-pointer list-none items-center gap-2 px-4 py-3 text-sm font-semibold transition-colors hover:bg-accent/50 [&::-webkit-details-marker]:hidden">
        <ListTree className="h-4 w-4 text-emerald-700 dark:text-emerald-400" aria-hidden />
        {t("onThisPage")}
        <ChevronDown className="ms-auto h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180" aria-hidden />
      </summary>
      <div className="border-t px-2 py-2">
        <ol className="space-y-0.5">
          {items.map((item) => {
            const id = `sec-${item.key}`;
            const isActive = active === id;
            return (
              <li key={item.key}>
                <button
                  onClick={() => {
                    jump(id);
                  }}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "flex w-full items-baseline gap-2 rounded-md px-2.5 py-2 text-start text-xs leading-snug transition-colors",
                    isActive
                      ? "bg-emerald-50 font-semibold text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-200"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  )}
                >
                  <span
                    aria-hidden
                    className={cn("mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full", isActive ? "bg-amber-500" : "bg-border")}
                  />
                  <span className="min-w-0">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </details>
  );
}
