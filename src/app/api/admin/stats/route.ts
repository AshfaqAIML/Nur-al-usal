import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const [
    questions, answers, books, scholars, misconceptions, objections, comparisons,
    fatwas, hadith, quran, claims, topics,
  ] = await Promise.all([
    db.question.count(), db.answer.count(), db.book.count(), db.scholar.count(),
    db.misconception.count(), db.objection.count(), db.comparison.count(),
    db.fatwa.count(), db.hadith.count(), db.quranVerse.count(),
    db.claimCheck.count(), db.topic.count(),
  ]);

  const [pendingQuestions, aiAnswers, publishedAnswers, sensitiveQuestions, verifiedBooks, ocrBooks] =
    await Promise.all([
      db.question.count({ where: { status: "PENDING" } }),
      db.answer.count({ where: { aiGenerated: true } }),
      db.answer.count({ where: { status: "PUBLISHED" } }),
      db.question.count({ where: { isSensitive: true } }),
      db.book.count({ where: { verified: true } }),
      db.book.count({ where: { ocrStatus: { not: "NOT_STARTED" } } }),
    ]);

  const byStatus = await db.misconception.groupBy({ by: ["verificationStatus"], _count: { _all: true } });
  const recentQuestions = await db.question.findMany({
    take: 8, orderBy: { createdAt: "desc" },
    include: { category: { select: { nameEn: true } } },
  });
  const recentClaims = await db.claimCheck.findMany({ take: 8, orderBy: { createdAt: "desc" } });

  return NextResponse.json({
    stats: {
      questions, answers, books, scholars, misconceptions, objections, comparisons,
      fatwas, hadith, quran, claims, topics,
      pendingQuestions, aiAnswers, publishedAnswers, sensitiveQuestions, verifiedBooks, ocrBooks,
    },
    misconceptionStatuses: byStatus.map((b) => ({ status: b.verificationStatus, count: b._count._all })),
    recentQuestions,
    recentClaims,
  });
}
