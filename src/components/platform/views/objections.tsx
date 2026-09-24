"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { usePlatform, useT } from "@/lib/store";
import { apiGet, Objection } from "@/lib/api";
import { cn } from "@/lib/utils";

export function ObjectionsView() {
  const t = useT();
  const { setView } = usePlatform();
  const [list, setList] = useState<Objection[] | null>(null);
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<"" | "aqeedah" | "fiqh">("");

  useEffect(() => {
    const params = new URLSearchParams();
    if (q.trim()) params.set("q", q.trim());
    if (tag === "aqeedah") params.set("aqeedah", "true");
    if (tag === "fiqh") params.set("aqeedah", "false");
    apiGet<{ objections: Objection[] }>(`/api/objections?${params.toString()}`)
      .then((d) => setList(d.objections))
      .catch(() => setList([]));
  }, [q, tag]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <header className="mb-6">
        <h1 className="font-scholarly text-3xl font-bold">Common Objection Database</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Searchable answers to the most frequently raised objections to Hanafi positions — each classified as a
          fiqh or aqeedah matter, with the actual point of dispute identified.
        </p>
      </header>

      <div className="mb-5 flex flex-wrap items-center gap-2">
        <div className="relative flex-1 min-w-56">
          <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t("search") + " objections…"} className="ps-9" />
        </div>
        <div className="flex gap-1.5">
          {[{ v: "" as const, l: t("all") }, { v: "aqeedah" as const, l: t("aqeedahIssue") }, { v: "fiqh" as const, l: t("fiqhIssue") }].map((f) => (
            <button
              key={f.v}
              onClick={() => setTag(f.v)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-medium",
                tag === f.v ? "border-emerald-600 bg-emerald-600 text-white" : "text-muted-foreground hover:bg-accent"
              )}
            >
              {f.l}
            </button>
          ))}
        </div>
      </div>

      {!list && <div className="space-y-3">{[...Array(6)].map((_, i) => <Skeleton key={i} className="h-24 rounded-xl" />)}</div>}
      <div className="space-y-3">
        {(list ?? []).map((o) => (
          <Card key={o.id} className="border-border/70">
            <CardContent className="p-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h2 className="text-sm font-bold leading-snug">{o.question}</h2>
                <div className="flex shrink-0 gap-1.5">
                  <Badge variant="outline" className={cn("text-[10px]", o.isAqeedah ? "border-amber-300 bg-amber-50 text-amber-900 dark:bg-amber-950 dark:text-amber-200 dark:border-amber-800" : "border-emerald-300 bg-emerald-50 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200 dark:border-emerald-800")}>
                    {o.isAqeedah ? t("aqeedahIssue") : t("fiqhIssue")}
                  </Badge>
                </div>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground/90">{o.answer}</p>
              {o.disputed && (
                <p className="mt-2 rounded-md bg-muted/50 px-3 py-2 text-xs text-muted-foreground">
                  <strong>{t("disputed")}:</strong> {o.disputed}
                </p>
              )}
              {o.topic && (
                <button onClick={() => setView("knowledge", o.topic!.slug)} className="mt-2 text-xs font-medium text-emerald-800 underline-offset-2 hover:underline dark:text-emerald-300">
                  Open research topic: {o.topic.titleEn} →
                </button>
              )}
            </CardContent>
          </Card>
        ))}
        {list && list.length === 0 && <p className="py-8 text-center text-sm text-muted-foreground">{t("noResults")}</p>}
      </div>
    </div>
  );
}
