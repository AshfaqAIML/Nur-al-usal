"use client";

import { useEffect, useState } from "react";
import { BookMarked, ScrollText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePlatform, useT } from "@/lib/store";
import { apiGet, Hadith, QuranVerse } from "@/lib/api";
import { GradingBadge } from "@/components/platform/badges";
import { ArabicText, UrduText } from "@/components/platform/text";

export function QuranHadithView() {
  const t = useT();
  const { setView } = usePlatform();
  const [verses, setVerses] = useState<QuranVerse[] | null>(null);
  const [hadiths, setHadiths] = useState<Hadith[] | null>(null);
  const [vq, setVq] = useState("");
  const [hq, setHq] = useState("");

  useEffect(() => {
    const id = setTimeout(() => {
      apiGet<{ verses: QuranVerse[] }>(`/api/quran${vq.trim() ? `?q=${encodeURIComponent(vq.trim())}` : ""}`).then((d) => setVerses(d.verses)).catch(() => setVerses([]));
    }, 250);
    return () => clearTimeout(id);
  }, [vq]);

  useEffect(() => {
    const id = setTimeout(() => {
      apiGet<{ hadiths: Hadith[] }>(`/api/hadith${hq.trim() ? `?q=${encodeURIComponent(hq.trim())}` : ""}`).then((d) => setHadiths(d.hadiths)).catch(() => setHadiths([]));
    }, 250);
    return () => clearTimeout(id);
  }, [hq]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <header className="mb-6">
        <h1 className="font-scholarly text-3xl font-bold">{t("quranHadithEvidence")}</h1>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Qur&apos;an verses and hadith with metadata and honest verification. Disputed gradings are displayed as disputed —
          never presented as absolute fact. Hadith numbers pending verification are marked, not fabricated.
        </p>
      </header>

      <Tabs defaultValue="quran">
        <TabsList className="grid w-full max-w-xs grid-cols-2">
          <TabsTrigger value="quran" className="gap-1.5 text-xs"><BookMarked className="h-3.5 w-3.5" /> {t("quran")}</TabsTrigger>
          <TabsTrigger value="hadith" className="gap-1.5 text-xs"><ScrollText className="h-3.5 w-3.5" /> {t("hadithCollection")}</TabsTrigger>
        </TabsList>

        <TabsContent value="quran" className="mt-5">
          <Input value={vq} onChange={(e) => setVq(e.target.value)} placeholder={`${t("search")} — text, surah, topic tag (e.g. tawassul)…`} className="mb-4" />
          {!verses && <div className="space-y-4">{[...Array(4)].map((_, i) => <Skeleton key={i} className="h-28 rounded-xl" />)}</div>}
          <div className="space-y-4">
            {(verses ?? []).map((v) => (
              <Card key={v.id} className="border-border/70">
                <CardContent className="p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
                      {v.surahNameEn} {v.surah}:{v.ayah}
                    </span>
                    <span className="font-arabic text-sm text-muted-foreground">{v.surahNameAr}</span>
                  </div>
                  <ArabicText text={v.arabic} className="mt-3 text-xl leading-loose" />
                  <p className="mt-3 text-sm leading-relaxed">{v.translationEn}</p>
                  {v.translationUr && <UrduText text={v.translationUr} className="mt-1.5 text-sm text-muted-foreground" />}
                  {(() => {
                    try { return JSON.parse(v.topicTags ?? "[]") as string[]; } catch { return []; }
                  })().map((tag) => (
                    <button key={tag} onClick={() => setVq(tag)} className="me-1.5 mt-2 inline-block rounded-full border bg-muted/40 px-2 py-0.5 text-[10px] text-muted-foreground hover:bg-accent">
                      #{tag}
                    </button>
                  ))}
                </CardContent>
              </Card>
            ))}
            {verses && verses.length === 0 && <p className="py-8 text-center text-sm text-muted-foreground">{t("noResults")}</p>}
          </div>
        </TabsContent>

        <TabsContent value="hadith" className="mt-5">
          <Input value={hq} onChange={(e) => setHq(e.target.value)} placeholder={`${t("search")} — text, collection, narrator (e.g. Bukhari)…`} className="mb-4" />
          {!hadiths && <div className="space-y-4">{[...Array(4)].map((_, i) => <Skeleton key={i} className="h-28 rounded-xl" />)}</div>}
          <div className="space-y-4">
            {(hadiths ?? []).map((h) => (
              <Card key={h.id} className="border-border/70">
                <CardContent className="p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-sm font-bold">{h.collection}{h.number ? ` ${h.number}` : ""}</span>
                    <div className="flex gap-1.5">
                      <GradingBadge grading={h.grading} disputed={h.gradingDisputed} />
                    </div>
                  </div>
                  {h.chapter && <p className="mt-1 text-[11px] text-muted-foreground">{h.book ? `${h.book} · ` : ""}{h.chapter}</p>}
                  {h.arabic && <ArabicText text={h.arabic} className="mt-3" />}
                  <p className="mt-3 text-sm leading-relaxed">{h.translationEn}</p>
                  {h.translationUr && <UrduText text={h.translationUr} className="mt-1.5 text-sm text-muted-foreground" />}
                  {h.narrator && <p className="mt-2 text-xs text-muted-foreground">Narrator: {h.narrator}</p>}
                  {h.commentary && (
                    <p className="mt-2 rounded-md bg-muted/50 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
                      <strong>Commentary:</strong> {h.commentary}
                    </p>
                  )}
                  {h.gradingNotes && (
                    <p className="mt-2 flex items-start gap-1.5 text-xs text-amber-800 dark:text-amber-400">
                      <Badge variant="outline" className="shrink-0 border-amber-300 text-[10px] text-amber-900 dark:border-amber-800">pending</Badge>
                      {h.gradingNotes}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
            {hadiths && hadiths.length === 0 && <p className="py-8 text-center text-sm text-muted-foreground">{t("noResults")}</p>}
          </div>
        </TabsContent>
      </Tabs>

      <button onClick={() => setView("search")} className="mt-6 text-xs text-emerald-800 underline-offset-2 hover:underline dark:text-emerald-300">
        Search everything in the Global Search →
      </button>
    </div>
  );
}
