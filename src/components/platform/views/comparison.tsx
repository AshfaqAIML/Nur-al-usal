"use client";

import { useEffect, useState } from "react";
import { Scale } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useT } from "@/lib/store";
import { apiGet, Comparison } from "@/lib/api";
import { ComparisonTable } from "@/components/platform/views/knowledge";

export function ComparisonView() {
  const t = useT();
  const [list, setList] = useState<Comparison[] | null>(null);

  useEffect(() => {
    apiGet<{ comparisons: Comparison[] }>("/api/comparisons").then((d) => setList(d.comparisons)).catch(() => setList([]));
  }, []);

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
        {(list ?? []).map((c) => (
          <Card key={c.id} className="border-border/70">
            <CardContent className="p-6">
              <ComparisonTable comparison={c} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
