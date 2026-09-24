"use client";

/**
 * Platform badges — scholarly verification signals.
 * Accessibility rule from the design brief: state is NEVER encoded by color
 * alone — every badge carries a distinct icon + label, tone is a supplement.
 */

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  BadgeCheck,
  BookMarked,
  BookOpen,
  BookLock,
  CircleDashed,
  CircleX,
  Clock3,
  FileWarning,
  Landmark,
  Library,
  Scale,
  ScrollText,
  ShieldAlert,
  ShieldQuestion,
  Sparkles,
  Stamp,
  TriangleAlert,
  Users,
  type LucideIcon,
} from "lucide-react";
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

/** Distinct glyph per verification status — color-blind safe by construction. */
const VERIFICATION_ICONS: Record<string, LucideIcon> = {
  VERIFIED: BadgeCheck,
  PARTIALLY_VERIFIED: CircleDashed,
  OCR_NEEDS_REVIEW: FileWarning,
  UNVERIFIED: Clock3,
  DISPUTED: Scale,
  INSUFFICIENT_EVIDENCE: ShieldQuestion,
};

const CLASSIFICATION_ICONS: Record<string, LucideIcon> = {
  CORRECTLY_ATTRIBUTED: BadgeCheck,
  PARTIALLY_CORRECT: CircleDashed,
  MISLEADING: TriangleAlert,
  INCORRECTLY_ATTRIBUTED: CircleX,
  DISPUTED: Scale,
  UNSUPPORTED: ShieldAlert,
  INSUFFICIENTLY_DOCUMENTED: FileWarning,
};

export function VerificationBadge({ status }: { status: string }) {
  const meta = VERIFICATION_META[status] ?? { label: status, color: "stone" };
  const Icon = VERIFICATION_ICONS[status] ?? Clock3;
  return (
    <Badge variant="outline" className={cn("gap-1 text-[11px] font-medium", STATUS_STYLES[meta.color])}>
      <Icon className="h-3 w-3" aria-hidden />
      {meta.label}
    </Badge>
  );
}

export function ClassificationBadge({ status }: { status: string }) {
  const meta = CLASSIFICATION_META[status] ?? { label: status, color: "stone" };
  const Icon = CLASSIFICATION_ICONS[status] ?? FileWarning;
  return (
    <Badge className={cn("gap-1 text-[11px] font-semibold border", STATUS_STYLES[meta.color])}>
      <Icon className="h-3 w-3" aria-hidden />
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

/** Grading glyphs follow hadith-science convention: ring = sound, dashes = weak. */
const GRADE_ICONS: Record<string, LucideIcon> = {
  SAHIH: BadgeCheck,
  HASAN: CircleDashed,
  DAIF: CircleX,
  DISPUTED: Scale,
  UNRATED: Clock3,
};

export function GradingBadge({ grading, disputed }: { grading: string; disputed?: boolean }) {
  const style = GRADE_STYLES[grading] ?? GRADE_STYLES.UNRATED;
  const Icon = GRADE_ICONS[grading] ?? GRADE_ICONS.UNRATED;
  return (
    <Badge variant="outline" className={cn("gap-1 text-[11px]", style)} title={disputed ? "Grading disputed among scholars" : undefined}>
      <Icon className="h-3 w-3" aria-hidden />
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
  // Era glyph: classical works carry a landmark (early madrasa), later works a library shelf.
  const Icon = !isHanafi ? Library : late ? BookOpen : Landmark;
  return (
    <Badge
      variant="outline"
      className={cn(
        "gap-1 text-[11px]",
        !isHanafi
          ? "bg-stone-100 text-stone-700 border-stone-300 dark:bg-stone-900 dark:text-stone-300"
          : late
            ? "bg-teal-100 text-teal-900 border-teal-300 dark:bg-teal-950 dark:text-teal-200"
            : "bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-200"
      )}
      title={late ? "Later South Asian / later scholarly source — not an early classical work" : undefined}
    >
      <Icon className="h-3 w-3" aria-hidden />
      {label}
    </Badge>
  );
}

export function FiqhAqeedahBadge({ value }: { value: string | null }) {
  if (!value) return null;
  if (value === "AQEEDAH")
    return (
      <Badge className="gap-1 border border-amber-300 bg-amber-100 text-[11px] text-amber-900 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-200">
        <Stamp className="h-3 w-3" aria-hidden /> Aqeedah Issue
      </Badge>
    );
  if (value === "FIQH")
    return (
      <Badge className="gap-1 border border-emerald-300 bg-emerald-100 text-[11px] text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-200">
        <BookMarked className="h-3 w-3" aria-hidden /> Fiqh Issue
      </Badge>
    );
  if (value === "BOTH")
    return (
      <Badge className="gap-1 border border-yellow-300 bg-yellow-100 text-[11px] text-yellow-900 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-200">
        <ScrollText className="h-3 w-3" aria-hidden /> Aqeedah + Fiqh
      </Badge>
    );
  return null;
}

/** Small "AI-drafted" tag — distinct sparkles glyph so drafts never masquerade as reviewed text. */
export function AiDraftTag({ children }: { children: React.ReactNode }) {
  return (
    <Badge variant="outline" className="gap-1 border-amber-300 text-[10px] text-amber-800 dark:border-amber-800 dark:text-amber-300">
      <Sparkles className="h-3 w-3" aria-hidden />
      {children}
    </Badge>
  );
}

/** Scholar chip used in lists of narrators/authors. */
export function ScholarChip({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border bg-secondary px-2 py-0.5 text-[11px] text-secondary-foreground">
      <Users className="h-3 w-3 text-muted-foreground" aria-hidden />
      {name}
    </span>
  );
}

/** Book lock tag for OCR-protected manuscripts. */
export function OcrStatusTag({ status }: { status: string }) {
  const pretty = status.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase());
  const done = status === "COMPLETED" || status === "COMPLETE";
  return (
    <Badge variant="outline" className={cn("gap-1 text-[10px]", done ? STATUS_STYLES.emerald : STATUS_STYLES.amber)}>
      {done ? <BookLock className="h-3 w-3" aria-hidden /> : <FileWarning className="h-3 w-3" aria-hidden />}
      OCR: {pretty}
    </Badge>
  );
}
