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
    include: {
      category: { select: { nameEn: true } },
      answers: { select: { id: true, status: true, aiGenerated: true }, orderBy: { createdAt: "desc" } },
    },
  });
  const recentClaims = await db.claimCheck.findMany({ take: 8, orderBy: { createdAt: "desc" } });

  // Reader feedback signals: questions ranked by votes cast on their AI answer drafts.
  const voteGroups = await db.answer.groupBy({
    by: ["questionId"],
    where: { OR: [{ helpfulUp: { gt: 0 } }, { helpfulDown: { gt: 0 } }] },
    _sum: { helpfulUp: true, helpfulDown: true },
  });
  const ranked = voteGroups
    .map((g) => ({ questionId: g.questionId, up: g._sum.helpfulUp ?? 0, down: g._sum.helpfulDown ?? 0 }))
    .sort((a, b) => (b.up + b.down) - (a.up + a.down))
    .slice(0, 5);
  const feedbackQuestions = ranked.length
    ? await db.question.findMany({
        where: { id: { in: ranked.map((r) => r.questionId) } },
        select: { id: true, text: true, status: true },
      })
    : [];
  const topFeedback = ranked.map((r) => ({
    questionId: r.questionId,
    up: r.up,
    down: r.down,
    text: feedbackQuestions.find((q) => q.id === r.questionId)?.text ?? "",
    status: feedbackQuestions.find((q) => q.id === r.questionId)?.status ?? null,
  }));

  return NextResponse.json({
    stats: {
      questions, answers, books, scholars, misconceptions, objections, comparisons,
      fatwas, hadith, quran, claims, topics,
      pendingQuestions, aiAnswers, publishedAnswers, sensitiveQuestions, verifiedBooks, ocrBooks,
    },
    misconceptionStatuses: byStatus.map((b) => ({ status: b.verificationStatus, count: b._count._all })),
    recentQuestions,
    recentClaims,
    topFeedback,
  });
}
