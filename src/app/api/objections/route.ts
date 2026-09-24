import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams;
  const q = sp.get("q");
  const aqeedah = sp.get("aqeedah");

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
