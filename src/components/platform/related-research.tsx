"use client";

/**
 * Related-research cross-links for entity detail pages.
 * Suggests same-topic misconceptions and objections so readers
 * can continue their research trail (MASTER PROMPT: citation chain).
 */

import { Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { usePlatform, useT } from "@/lib/store";
import { ClassificationBadge } from "@/components/platform/badges";
import { OrnamentDivider } from "@/components/platform/detail-chrome";
import { cn } from "@/lib/utils";

export interface RelatedMisconception {
  id: string; slug: string; claim: string; verificationStatus: string; views: number;
}
export interface RelatedObjection {
  id: string; question: string; isAqeedah: boolean; views: number;
}

export function RelatedResearch({
  misconceptions,
  objections,
}: {
  misconceptions?: RelatedMisconception[];
  objections?: RelatedObjection[];
}) {
  const t = useT();
  const { setView } = usePlatform();

  const hasMis = (misconceptions?.length ?? 0) > 0;
  const hasObj = (objections?.length ?? 0) > 0;
  if (!hasMis && !hasObj) return null;

  return (
    <section aria-label={t("relatedResearch")} className="no-print">
      <OrnamentDivider className="mb-5" />
      <h2 className="mb-3 font-scholarly text-lg font-bold">{t("relatedResearch")}</h2>

      <div className={cn("grid gap-2.5", hasMis && hasObj ? "lg:grid-cols-2" : "")}>
        {hasMis && (
          <div>
            <h3 className="mb-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
              {t("misconceptionsLabel")}
            </h3>
            <div className="space-y-2">
              {misconceptions!.map((m) => (
                <Card
                  key={m.id}
                  className="card-lift cursor-pointer border-border/70 transition-colors hover:border-emerald-600/50"
                  onClick={() => setView("misconceptions", m.slug)}
                >
                  <CardContent className="p-3.5">
                    <p className="line-clamp-2 text-[13px] font-medium leading-snug">“{m.claim}”</p>
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <ClassificationBadge status={m.verificationStatus} />
                      <span className="inline-flex items-center gap-0.5 text-[10px] text-muted-foreground">
                        <Eye className="h-3 w-3" aria-hidden /> {m.views}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {hasObj && (
          <div>
            <h3 className="mb-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
              {t("objectionsLabel")}
            </h3>
            <div className="space-y-2">
              {objections!.map((o) => (
                <Card
                  key={o.id}
                  className="card-lift cursor-pointer border-border/70 transition-colors hover:border-emerald-600/50"
                  onClick={() => setView("objections", o.id)}
                >
                  <CardContent className="p-3.5">
                    <p className="line-clamp-2 text-[13px] font-medium leading-snug">{o.question}</p>
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <Badge
                        variant="outline"
                        className={cn(
                          "text-[9px]",
                          o.isAqeedah
                            ? "border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-200"
                            : "border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-200"
                        )}
                      >
                        {o.isAqeedah ? t("aqeedahIssue") : t("fiqhIssue")}
                      </Badge>
                      <span className="inline-flex items-center gap-0.5 text-[10px] text-muted-foreground">
                        <Eye className="h-3 w-3" aria-hidden /> {o.views}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
