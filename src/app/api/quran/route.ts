import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams;
  const q = sp.get("q");
  const surah = sp.get("surah");
  const tag = sp.get("tag");
  const random = sp.get("random");

  // Single random verse — powers the "Verse of the Visit" home widget
  if (random) {
    const total = await db.quranVerse.count();
    if (total === 0) return NextResponse.json({ verses: [] });
    const skip = Math.floor(Math.random() * total);
    const [verse] = await db.quranVerse.findMany({ take: 1, skip });
    return NextResponse.json({ verses: verse ? [verse] : [] });
  }

  const where: Record<string, unknown> = {};
  if (surah) where.surah = parseInt(surah);
  if (q) {
    where.OR = [
      { translationEn: { contains: q } },
      { arabic: { contains: q } },
      { surahNameEn: { contains: q } },
      { topicTags: { contains: q } },
    ];
  }

  let verses = await db.quranVerse.findMany({ where, orderBy: [{ surah: "asc" }, { ayah: "asc" }] });

  if (tag) {
    verses = verses.filter((v) => {
      try { return JSON.parse(v.topicTags ?? "[]").includes(tag); } catch { return false; }
    });
  }
  return NextResponse.json({ verses });
}
