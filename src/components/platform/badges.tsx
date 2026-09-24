"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  CLASSIFICATION_META,
  VERIFICATION_META,
} from "@/lib/ai.client";

const STATUS_STYLES: Record<string, string> = {
  emerald: "bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-200 dark:border-emerald-800",
  lime: "bg-lime-100 text-lime-900 border-lime-300 dark:bg-lime-950 dark:text-lime-200 dark:border-lime-800",
  amber: "bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950 dark:text-amber-200 dark:border-amber-800",
  orange: "bg-orange-100 text-orange-900 border-orange-300 dark:bg-orange-950 dark:text-orange-200 dark:border-orange-800",
  yellow: "bg-yellow-100 text-yellow-900 border-yellow-300 dark:bg-yellow-950 dark:text-yellow-200 dark:border-yellow-800",
  red: "bg-red-100 text-red-900 border-red-300 dark:bg-red-950 dark:text-red-200 dark:border-red-800",
  stone: "bg-stone-100 text-stone-700 border-stone-300 dark:bg-stone-900 dark:text-stone-300 dark:border-stone-700",
  teal: "bg-teal-100 text-teal-900 border-teal-300 dark:bg-teal-950 dark:text-teal-200 dark:border-teal-800",
  rose: "bg-rose-100 text-rose-900 border-rose-300 dark:bg-rose-950 dark:text-rose-200 dark:border-rose-800",
};

export function VerificationBadge({ status }: { status: string }) {
  const meta = VERIFICATION_META[status] ?? { label: status, color: "stone" };
  return (
    <Badge variant="outline" className={cn("text-[11px] font-medium", STATUS_STYLES[meta.color])}>
      {meta.label}
    </Badge>
  );
}

export function ClassificationBadge({ status }: { status: string }) {
  const meta = CLASSIFICATION_META[status] ?? { label: status, color: "stone" };
  return (
    <Badge className={cn("text-[11px] font-semibold border", STATUS_STYLES[meta.color])}>
      {meta.label}
    </Badge>
  );
}

const GRADE_STYLES: Record<string, string> = {
  SAHIH: "bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-200",
  HASAN: "bg-lime-100 text-lime-900 border-lime-300 dark:bg-lime-950 dark:text-lime-200",
  DAIF: "bg-red-100 text-red-900 border-red-300 dark:bg-red-950 dark:text-red-200",
  DISPUTED: "bg-yellow-100 text-yellow-900 border-yellow-300 dark:bg-yellow-950 dark:text-yellow-200",
  UNRATED: "bg-stone-100 text-stone-700 border-stone-300 dark:bg-stone-900 dark:text-stone-300",
};

export function GradingBadge({ grading, disputed }: { grading: string; disputed?: boolean }) {
  const style = GRADE_STYLES[grading] ?? GRADE_STYLES.UNRATED;
  return (
    <Badge variant="outline" className={cn("text-[11px]", style)} title={disputed ? "Grading disputed among scholars" : undefined}>
      {grading}
      {disputed ? " (disputed)" : ""}
    </Badge>
  );
}

const CLASS_LABELS: Record<string, string> = {
  CLASSICAL_HANAFI: "Classical Hanafi",
  LATER_HANAFI: "Later Hanafi",
  SOUTH_ASIAN_HANAFI: "South Asian Hanafi",
  FATAWA_COLLECTION: "Fatwa Collection",
  AQEEDAH: "Aqeedah Work",
  REFERENCE: "Reference",
  BARELVI: "Barelvi (later South Asian)",
  DEOBANDI: "Deobandi (later South Asian)",
  AHL_E_HADITH: "Ahl-e-Hadith",
  SALAFI: "Salafi",
  OTHER_SUNNI: "Other Sunni",
};

export function SourceClassBadge({ classification, isHanafi = true }: { classification: string; isHanafi?: boolean }) {
  const label = CLASS_LABELS[classification] ?? classification;
  const late = ["LATER_HANAFI", "SOUTH_ASIAN_HANAFI", "FATAWA_COLLECTION", "BARELVI", "DEOBANDI"].includes(classification);
  return (
    <Badge
      variant="outline"
      className={cn(
        "text-[11px]",
        !isHanafi
          ? "bg-stone-100 text-stone-700 border-stone-300 dark:bg-stone-900 dark:text-stone-300"
          : late
            ? "bg-teal-100 text-teal-900 border-teal-300 dark:bg-teal-950 dark:text-teal-200"
            : "bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-200"
      )}
      title={late ? "Later South Asian / later scholarly source — not an early classical work" : undefined}
    >
      {label}
    </Badge>
  );
}

export function FiqhAqeedahBadge({ value }: { value: string | null }) {
  if (!value) return null;
  if (value === "AQEEDAH")
    return <Badge className="bg-amber-100 text-amber-900 border border-amber-300 dark:bg-amber-950 dark:text-amber-200 text-[11px]">Aqeedah Issue</Badge>;
  if (value === "FIQH")
    return <Badge className="bg-emerald-100 text-emerald-900 border border-emerald-300 dark:bg-emerald-950 dark:text-emerald-200 text-[11px]">Fiqh Issue</Badge>;
  if (value === "BOTH")
    return <Badge className="bg-yellow-100 text-yellow-900 border border-yellow-300 dark:bg-yellow-950 dark:text-yellow-200 text-[11px]">Aqeedah + Fiqh</Badge>;
  return null;
}
