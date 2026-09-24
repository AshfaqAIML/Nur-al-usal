import { NextResponse } from "next/server";
import { db } from "@/lib/db";

/** One-shot bootstrap payload for the SPA: stats, categories, featured content. */
export async function GET() {
  const [categories, stats, featuredMisconceptions, featuredQuestions, featuredBooks, objectionsTop, comparisons, bankStats, featuredBank, bankClusters] =
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
      // ─── Common Questions Library ───
      Promise.all([
        db.question.count({ where: { isCommon: true } }),
        db.question.count({ where: { isCommon: true, isDisputed: true } }),
        db.question.count({ where: { isCommon: true, isMisconception: true } }),
        db.questionCluster.count(),
        db.answer.count({ where: { question: { isCommon: true }, sources: { contains: "Fatawa Razvia" } } }),
      ]),
      db.question.findMany({
        where: { isCommon: true, featured: true },
        take: 6,
        orderBy: { clusterOrder: "asc" },
        select: { slug: true, text: true, textUr: true, textAr: true, shortAnswer: true, shortAnswerUr: true, shortAnswerAr: true, difficulty: true, isDisputed: true, category: { select: { nameEn: true, nameUr: true, nameAr: true } }, cluster: { select: { titleEn: true, titleUr: true, titleAr: true } } },
      }),
      db.questionCluster.findMany({
        orderBy: { order: "asc" }, take: 12,
        include: { _count: { select: { questions: true } } },
      }),
    ]);

  const [
    topics, misconceptions, objectionCount, books, scholars, hadith, quran, fatwas, questions, comparisonCount,
  ] = stats;
  const [bankTotal, bankDisputed, bankMisconception, bankClustersCount, bankFatawaRazvia] = bankStats;

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
    bank: {
      total: bankTotal,
      disputed: bankDisputed,
      misconceptions: bankMisconception,
      clusters: bankClustersCount,
      fatawaRazvia: bankFatawaRazvia,
      featured: featuredBank,
      topClusters: bankClusters.filter((c) => c._count.questions > 0).map((c) => ({
        slug: c.slug, titleEn: c.titleEn, titleUr: c.titleUr, titleAr: c.titleAr,
        descriptionEn: c.descriptionEn, count: c._count.questions,
      })),
    },
  });
}
