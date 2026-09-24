import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams;
  const slug = sp.get("slug");
  const status = sp.get("status");
  const q = sp.get("q");

  if (slug) {
    const m = await db.misconception.findUnique({ where: { slug }, include: { topic: true } });
    if (!m) return NextResponse.json({ error: "Not found" }, { status: 404 });
    await db.misconception.update({ where: { id: m.id }, data: { views: { increment: 1 } } });
    // Related research trail: same-topic misconceptions + objections + comparisons.
    const [relMisconceptions, relObjections, relComparisons] = await Promise.all([
      m.topicId
        ? db.misconception.findMany({
            where: { topicId: m.topicId, id: { not: m.id } },
            take: 4,
            orderBy: { views: "desc" },
            select: { id: true, slug: true, claim: true, verificationStatus: true, views: true },
          })
        : Promise.resolve([]),
      m.topicId
        ? db.objection.findMany({
            where: { topicId: m.topicId },
            take: 4,
            orderBy: { views: "desc" },
            select: { id: true, question: true, isAqeedah: true, views: true },
          })
        : Promise.resolve([]),
      m.topicId
        ? db.comparison.findMany({
            where: { topicId: m.topicId },
            take: 3,
            orderBy: { id: "asc" },
            select: { id: true, issue: true },
          })
        : Promise.resolve([]),
    ]);
    return NextResponse.json({ misconception: m, related: { misconceptions: relMisconceptions, objections: relObjections, comparisons: relComparisons } });
  }

  const where: Record<string, unknown> = {};
  if (status) where.verificationStatus = status;
  if (q) where.claim = { contains: q };

  const misconceptions = await db.misconception.findMany({
    where,
    orderBy: [{ featured: "desc" }, { views: "desc" }],
    select: {
      id: true, slug: true, claim: true, claimUr: true, verificationStatus: true,
      sourceOfClaim: true, featured: true, views: true, topicId: true,
      topic: { select: { slug: true, titleEn: true } },
    },
  });
  return NextResponse.json({ misconceptions });
}
