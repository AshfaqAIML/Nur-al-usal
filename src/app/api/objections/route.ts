import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams;
  const id = sp.get("id");
  const q = sp.get("q");
  const aqeedah = sp.get("aqeedah");

  if (id) {
    const objection = await db.objection.findUnique({
      where: { id },
      include: { topic: { select: { slug: true, titleEn: true, titleUr: true, titleAr: true } } },
    });
    if (!objection) return NextResponse.json({ error: "Not found" }, { status: 404 });
    await db.objection.update({ where: { id }, data: { views: { increment: 1 } } });
    return NextResponse.json({ objection });
  }

  const where: Record<string, unknown> = {};
  if (q) where.question = { contains: q };
  if (aqeedah === "true") where.isAqeedah = true;
  if (aqeedah === "false") where.isAqeedah = false;

  const objections = await db.objection.findMany({
    where,
    orderBy: { views: "desc" },
    include: { topic: { select: { slug: true, titleEn: true } } },
  });
  return NextResponse.json({ objections });
}
