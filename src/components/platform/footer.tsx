"use client";

import { BookOpenText, ShieldCheck } from "lucide-react";
import { useT } from "@/lib/store";

export function Footer() {
  const t = useT();
  return (
    <footer className="mt-auto border-t bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-700 text-white">
                <BookOpenText className="h-4 w-4" aria-hidden />
              </span>
              <span className="font-scholarly font-bold">{t("siteName")}</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{t("footerNote")}</p>
          </div>
          <div className="text-xs leading-relaxed text-muted-foreground flex gap-2">
            <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-700 dark:text-emerald-400 mt-0.5" aria-hidden />
            <p>{t("takfirPolicy")}</p>
          </div>
          <div className="text-xs text-muted-foreground space-y-1">
            <p className="font-medium text-foreground">English | اردو | العربية</p>
            <p>Source-first · Citation-first · No fabricated citations</p>
            <p>© {new Date().getFullYear()} {t("siteName")} — {t("siteTagline")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
