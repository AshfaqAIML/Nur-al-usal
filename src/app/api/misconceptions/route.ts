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
    return NextResponse.json({ misconception: m });
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
