import { NextResponse } from "next/server";
import { db } from "@/lib/db";

/**
 * User-question analytics (Common Questions Library spec):
 * most-searched queries, zero-result (unanswered) searches, intent mix,
 * most-viewed bank questions, most-viewed misconceptions/topics.
 */
export async function GET() {
  const [topSearches, zeroResult, intentMix, topViewedQuestions, topViewedMisc, recentSearches] =
    await Promise.all([
      db.searchLog.groupBy({
        by: ["query"], _count: { _all: true }, orderBy: { _count: { query: "desc" } }, take: 10,
      }),
      db.searchLog.findMany({ where: { results: 0 }, orderBy: { createdAt: "desc" }, take: 20, select: { query: true, createdAt: true } }),
      db.searchLog.groupBy({ by: ["intent"], _count: { _all: true } }),
      db.question.findMany({
        where: { isCommon: true, views: { gt: 0 } },
        orderBy: { views: "desc" }, take: 8,
        select: { slug: true, text: true, views: true, difficulty: true, category: { select: { nameEn: true } } },
      }),
      db.misconception.findMany({
        where: { views: { gt: 0 } },
        orderBy: { views: "desc" }, take: 8,
        select: { slug: true, claim: true, views: true, verificationStatus: true },
      }),
      db.searchLog.findMany({ orderBy: { createdAt: "desc" }, take: 12, select: { query: true, results: true, intent: true, createdAt: true } }),
    ]);

  const totalSearches = await db.searchLog.count();
  const zeroCount = await db.searchLog.count({ where: { results: 0 } });

  return NextResponse.json({
    totalSearches,
    zeroCount,
    zeroRate: totalSearches > 0 ? Math.round((zeroCount / totalSearches) * 100) : 0,
    topSearches: topSearches.map((s) => ({ query: s.query, count: s._count._all })),
    zeroResult: zeroResult.map((s) => ({ query: s.query, at: s.createdAt })),
    intentMix: intentMix.map((i) => ({ intent: i.intent ?? "unclassified", count: i._count._all })),
    topViewedQuestions,
    topViewedMisc,
    recentSearches,
  });
}
