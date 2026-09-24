import { NextResponse } from "next/server";
import { db } from "@/lib/db";

/** One-shot bootstrap payload for the SPA: stats, categories, featured content. */
export async function GET() {
  const [categories, stats, featuredMisconceptions, featuredQuestions, featuredBooks, objectionsTop, comparisons] =
    await Promise.all([
      db.category.findMany({ orderBy: { order: "asc" }, include: { topics: { orderBy: { order: "asc" } } } }),
      Promise.all([
        db.topic.count(), db.misconception.count(), db.objection.count(), db.book.count(),
        db.scholar.count(), db.hadith.count(), db.quranVerse.count(), db.fatwa.count(),
        db.question.count(), db.comparison.count(),
      ]),
      db.misconception.findMany({ where: { featured: true }, take: 4 }),
      db.question.findMany({ where: { featured: true }, take: 4, include: { category: true } }),
      db.book.findMany({ where: { featured: true }, take: 8, include: { author: { select: { nameEn: true } } } }),
      db.objection.findMany({ orderBy: { views: "desc" }, take: 8 }),
      db.comparison.findMany({ take: 6, select: { id: true, issue: true } }),
    ]);

  const [
    topics, misconceptions, objectionCount, books, scholars, hadith, quran, fatwas, questions, comparisonCount,
  ] = stats;

  // Popular objections/featured books if featured missing
  const booksList = featuredBooks.length > 0
    ? featuredBooks
    : await db.book.findMany({ take: 8, include: { author: { select: { nameEn: true } } } });

  return NextResponse.json({
    stats: { topics, misconceptions, objections: objectionCount, books, scholars, hadith, quran, fatwas, questions, comparisons: comparisonCount },
    categories,
    featuredMisconceptions,
    featuredQuestions,
    featuredBooks: booksList,
    objectionsTop,
    comparisons,
  });
}
