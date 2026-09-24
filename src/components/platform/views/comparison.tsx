"use client";

import { useEffect, useRef, useState } from "react";
import { Scale } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useT } from "@/lib/store";
import { apiGet, Comparison } from "@/lib/api";
import { useDocTitle } from "@/lib/use-doc-title";
import { ComparisonTable } from "@/components/platform/views/knowledge";
import { ShareBar } from "@/components/platform/share-bar";
import { BookmarkButton } from "@/components/platform/library";
import { cn } from "@/lib/utils";

export function ComparisonView({ focusId }: { focusId?: string | null }) {
  const t = useT();
  const [list, setList] = useState<Comparison[] | null>(null);
  const [flash, setFlash] = useState(false);
  const focusRef = useRef<HTMLDivElement>(null);
  const focused = list?.find((c) => c.id === focusId) ?? null;
  useDocTitle(focused ? focused.issue : null);

  useEffect(() => {
    apiGet<{ comparisons: Comparison[] }>("/api/comparisons").then((d) => setList(d.comparisons)).catch(() => setList([]));
  }, []);

  // Scroll to + briefly highlight the focused comparison (deep links from home/search)
  useEffect(() => {
    if (!list || !focusId || !focusRef.current) return;
    const id = setTimeout(() => {
      focusRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      setFlash(true);
      const t2 = setTimeout(() => setFlash(false), 2200);
      return () => clearTimeout(t2);
    }, 250);
    return () => clearTimeout(id);
  }, [list, focusId]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <header className="mb-6">
        <div className="flex items-center gap-2">
          <Scale className="h-6 w-6 text-emerald-700 dark:text-emerald-400" aria-hidden />
          <h1 className="font-scholarly text-3xl font-bold">Comparison Engine</h1>
        </div>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          A neutral scholarly comparison system: position, evidence, methodology, major scholars, qualifications and
          historical context for each madhhab. The purpose is understanding — <strong>no winner, loser, score, ranking, or
          &quot;most correct&quot; rating</strong> is produced.
        </p>
      </header>

      {!list && <div className="space-y-6">{[...Array(3)].map((_, i) => <Skeleton key={i} className="h-56 rounded-xl" />)}</div>}
      <div className="space-y-6">
        {(list ?? []).map((c) => {
          const isFocus = c.id === focusId;
          return (
            <div key={c.id} ref={isFocus ? focusRef : undefined} className={cn("rounded-xl ring-emerald-600/60 transition-shadow duration-700", isFocus && flash && "ring-4")}>
              <Card className={cn("border-border/70", isFocus && "border-emerald-400 dark:border-emerald-700")}>
                <CardContent className="p-6">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    {isFocus ? (
                      <p className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                        {t("focusedComparison")}
                      </p>
                    ) : (
                      <span />
                    )}
                    <div className="flex items-center gap-2">
                      <BookmarkButton kind="comparison" keyId={c.id} title={c.issue} />
                      <ShareBar title={c.issue} section={t("comparisonsLabel")} compact pathOverride={`/compare/${c.id}`} />
                    </div>
                  </div>
                  <ComparisonTable comparison={c} />
                </CardContent>
              </Card>
            </div>
          );
        })}
        {list && list.length === 0 && (
          <p className="py-10 text-center text-sm text-muted-foreground">{t("noResults")}</p>
        )}
      </div>
    </div>
  );
}
