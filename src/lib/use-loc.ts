"use client";

import { useMemo } from "react";
import { usePlatform } from "@/lib/store";

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
  }), [lang]);
}

export type Loc = ReturnType<typeof useLoc>;
