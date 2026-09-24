"use client";

import { BookOpenText, ShieldCheck } from "lucide-react";
import { useT } from "@/lib/store";
import { usePlatform } from "@/lib/store";

/**
 * Footer — the closing courtyard of the platform.
 * A muqarnas arcade edge crowns the wall; quiet stone surfaces carry the
 * editorial policies, knowledge categories and language switcher.
 */
export function Footer() {
  const t = useT();
  const { setView } = usePlatform();

  const categories: { label: string; view: Parameters<typeof setView>[0] }[] = [
    { label: t("navKnowledge"), view: "knowledge" },
    { label: t("navMisconceptions"), view: "misconceptions" },
    { label: t("navObjections"), view: "objections" },
    { label: t("navCompare"), view: "compare" },
    { label: t("navSources"), view: "sources" },
    { label: t("navQuranHadith"), view: "quran-hadith" },
    { label: t("navQA"), view: "qa" },
    { label: t("navClaims"), view: "claims" },
  ];

  return (
    <footer className="mt-auto">
      {/* Muqarnas arcade crowning the courtyard wall */}
      <div className="muqarnas-edge bg-secondary/40" aria-hidden />
      <div className="border-t bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-9 sm:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Identity */}
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-800 text-white shadow-subtle dark:bg-emerald-700">
                  <BookOpenText className="h-4.5 w-4.5" aria-hidden />
                </span>
                <div>
                  <span className="font-scholarly text-base font-semibold tracking-tight">{t("siteName")}</span>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{t("siteTagline")}</p>
                </div>
              </div>
              <p className="mt-3 max-w-xs text-xs leading-relaxed text-muted-foreground">{t("footerNote")}</p>
            </div>

            {/* Knowledge categories */}
            <nav aria-label="Knowledge categories">
              <div className="geometric-divider mb-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {t("navKnowledge")}
                </span>
                <span className="divider-diamond" aria-hidden />
              </div>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
                {categories.map((c) => (
                  <li key={c.view}>
                    <button
                      onClick={() => setView(c.view)}
                      className="text-muted-foreground transition-colors hover:text-emerald-800 hover:underline hover:decoration-brass/50 hover:underline-offset-4 dark:hover:text-emerald-300"
                    >
                      {c.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Policies + languages */}
            <div className="space-y-3 text-xs leading-relaxed text-muted-foreground">
              <div className="flex gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700 dark:text-emerald-400" aria-hidden />
                <p>{t("takfirPolicy")}</p>
              </div>
              <div className="geometric-divider">
                <span className="divider-diamond" aria-hidden />
              </div>
              <p>
                <span className="font-medium text-foreground">English | اردو | العربية</span>
              </p>
              <p>Source-first · Citation-first · No fabricated citations</p>
              <p>© {new Date().getFullYear()} {t("siteName")} — {t("siteTagline")}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
