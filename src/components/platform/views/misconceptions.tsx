"use client";

import { useEffect, useState } from "react";
import { ChevronRight, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { usePlatform, useT } from "@/lib/store";
import { apiGet, Misconception } from "@/lib/api";
import { ClassificationBadge, VerificationBadge } from "@/components/platform/badges";
import { EvidenceList, SectionFlow, UrduText } from "@/components/platform/text";
import { cn } from "@/lib/utils";

export function MisconceptionsView({ slug }: { slug?: string | null }) {
  const t = useT();
  const { setView } = usePlatform();
  const [list, setList] = useState<Misconception[] | null>(null);
  const [detail, setDetail] = useState<Misconception | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("");

  useEffect(() => {
    const url = `/api/misconceptions${statusFilter ? `?status=${statusFilter}` : ""}`;
    apiGet<{ misconceptions: Misconception[] }>(url).then((d) => setList(d.misconceptions)).catch(() => setList([]));
  }, [statusFilter]);

  useEffect(() => {
    if (!slug) { setDetail(null); return; }
    apiGet<{ misconception: Misconception }>(`/api/misconceptions?slug=${encodeURIComponent(slug)}`)
      .then((d) => setDetail(d.misconception))
      .catch(() => setDetail(null));
  }, [slug]);

  // ─── Detail ───
  if (slug) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <Button variant="ghost" size="sm" className="mb-4" onClick={() => setView("misconceptions")}>
          <ChevronRight className="me-1 h-4 w-4 rotate-180 rtl:rotate-0" aria-hidden /> {t("misconceptionsLabel")}
        </Button>
        {!detail && <Skeleton className="h-96 w-full rounded-xl" />}
        {detail && (
          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline">Hanafi Misconceptions Explained</Badge>
                <ClassificationBadge status={detail.verificationStatus} />
                {detail.topic && (
                  <button onClick={() => setView("knowledge", detail.topic!.slug)}>
                    <Badge variant="outline" className="hover:bg-accent">{detail.topic.titleEn}</Badge>
                  </button>
                )}
              </div>
              <h1 className="mt-3 font-scholarly text-2xl font-bold leading-snug md:text-3xl">“{detail.claim}”</h1>
              <UrduText text={detail.claimUr} className="mt-2 text-base text-muted-foreground" />
              {detail.sourceOfClaim && (
                <p className="mt-3 rounded-lg border border-rose-200 bg-rose-50/60 p-3 text-xs text-rose-900 dark:border-rose-900 dark:bg-rose-950/40 dark:text-rose-200">
                  <strong>{t("whoSaid")}:</strong> {detail.sourceOfClaim}
                </p>
              )}
            </div>

            <SectionFlow
              sections={[
                { key: "claim", label: t("claim"), tone: "rose", children: <p>{detail.claim}</p> },
                { key: "status", label: t("verificationStatus"), tone: "amber", children: <ClassificationBadge status={detail.verificationStatus} /> },
                { key: "actual", label: t("actualHanafiPosition"), tone: "emerald", children: <p>{detail.actualPosition ?? "—"}</p> },
                { key: "primary", label: t("primaryEvidence"), children: <EvidenceList json={detail.primaryEvidence} /> },
                { key: "classical", label: t("classicalEvidence"), children: <EvidenceList json={detail.classicalEvidence} /> },
                { key: "later", label: t("laterHanafiEvidence"), children: <EvidenceList json={detail.laterEvidence} /> },
                { key: "counter", label: t("counterargument"), tone: "amber", children: <p>{detail.counterargument ?? "—"}</p> },
                { key: "response", label: t("scholarlyResponse"), tone: "emerald", children: <p>{detail.scholarlyResponse ?? "—"}</p> },
                { key: "disagree", label: t("areasOfDisagreement"), children: <p>{detail.disagreements ?? "—"}</p> },
                { key: "conclusion", label: t("conclusion"), tone: "emerald", children: <p className="font-medium">{detail.conclusion ?? "—"}</p> },
              ]}
            />

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Eye className="h-3.5 w-3.5" aria-hidden /> {detail.views} {t("views")}
            </div>
          </div>
        )}
      </div>
    );
  }

  // ─── Listing ───
  const FILTERS = [
    { v: "", label: t("all") },
    { v: "INCORRECTLY_ATTRIBUTED", label: "Incorrectly Attributed" },
    { v: "MISLEADING", label: "Misleading" },
    { v: "DISPUTED", label: "Disputed" },
    { v: "UNSUPPORTED", label: "Unsupported" },
    { v: "CORRECTLY_ATTRIBUTED", label: "Correctly Attributed" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <header className="mb-6">
        <h1 className="font-scholarly text-3xl font-bold">Hanafi Misconceptions Explained</h1>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Every entry follows the same scholarly flow: {t("claim")} → {t("sourceOfClaim")} → {t("verificationStatus")} → {t("actualHanafiPosition")} → {t("primaryEvidence")} → {t("classicalEvidence")} → {t("laterHanafiEvidence")} → {t("counterargument")} → {t("scholarlyResponse")} → {t("areasOfDisagreement")} → {t("conclusion")}.
        </p>
      </header>

      <div className="mb-5 flex flex-wrap gap-1.5">
        {FILTERS.map((f) => (
          <button
            key={f.v}
            onClick={() => setStatusFilter(f.v)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
              statusFilter === f.v ? "border-emerald-600 bg-emerald-600 text-white" : "text-muted-foreground hover:bg-accent"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      {!list && (
        <div className="grid gap-3 md:grid-cols-2">{[...Array(6)].map((_, i) => <Skeleton key={i} className="h-28 rounded-xl" />)}</div>
      )}
      <div className="grid gap-3 md:grid-cols-2">
        {(list ?? []).map((m) => (
          <Card key={m.id} className="cursor-pointer border-border/70 transition-shadow hover:shadow-md" onClick={() => setView("misconceptions", m.slug)}>
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-semibold leading-snug">“{m.claim}”</p>
                {m.featured && <Badge className="shrink-0 bg-emerald-700 text-white">{t("featured")}</Badge>}
              </div>
              <UrduText text={m.claimUr} className="mt-1 text-xs text-muted-foreground line-clamp-1" />
              <div className="mt-3 flex items-center justify-between gap-2">
                <ClassificationBadge status={m.verificationStatus} />
                <span className="text-[11px] text-muted-foreground">{m.views} {t("views")}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
