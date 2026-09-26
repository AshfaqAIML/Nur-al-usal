"use client";

import { useMemo } from "react";
import { usePlatform } from "@/lib/store";
import type { BankAnswerDetail, BankDepthTranslations } from "@/lib/api";

const DEPTH_API_TO_KEY: Record<string, keyof BankDepthTranslations> = {
  detailedAnswer: "detailedAnswer",
  hanafiPosition: "hanafiPosition",
  otherViews: "otherViews",
  commonObjection: "commonObjection",
  scholarlyResponse: "scholarlyResponse",
  practicalInfo: "practicalInfo",
  disputed: "disputedNote",
};

/**
 * Localized question-text helpers for the Common Questions Library.
 * Translations fall back to the English original when missing.
 */
export function useLoc() {
  const { lang } = usePlatform();
  return useMemo(() => ({
    text: (item: { text: string; textUr?: string | null; textAr?: string | null }) =>
      lang === "ur" ? item.textUr || item.text : lang === "ar" ? item.textAr || item.text : item.text,
    short: (item: { shortAnswer?: string | null; shortAnswerUr?: string | null; shortAnswerAr?: string | null }) =>
      lang === "ur" ? item.shortAnswerUr || item.shortAnswer : lang === "ar" ? item.shortAnswerAr || item.shortAnswer : item.shortAnswer,
    title: (en: string, ur?: string | null, ar?: string | null) =>
      lang === "ur" ? ur || en : lang === "ar" ? ar || en : en,
    /**
     * Localized answer depth-section value (Explanation / Hanafi position /
     * Other views / Objection / Response / Practical / Disputed-note).
     * Falls back to the English original when no translation exists yet —
     * translations arrive progressively via the depth sidecar pipeline.
     */
    depth: (answer: BankAnswerDetail | null | undefined, apiField: keyof typeof DEPTH_API_TO_KEY): string | null | undefined => {
      const en = answer ? (answer as unknown as Record<string, string | null>)[apiField] : null;
      if (lang === "en" || !answer?.depthTranslations) return en;
      const key = DEPTH_API_TO_KEY[apiField];
      const bundle = lang === "ur" ? answer.depthTranslations.Ur : answer.depthTranslations.Ar;
      const value = bundle ? bundle[key] : null;
      return value || en;
    },
  }), [lang]);
}

export type Loc = ReturnType<typeof useLoc>;
