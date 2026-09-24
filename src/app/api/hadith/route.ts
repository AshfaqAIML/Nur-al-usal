import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams;
  const q = sp.get("q");
  const collection = sp.get("collection");

  const where: Record<string, unknown> = {};
  if (collection) where.collection = { contains: collection };
  if (q) {
    where.OR = [
      { translationEn: { contains: q } },
      { arabic: { contains: q } },
      { collection: { contains: q } },
      { narrator: { contains: q } },
      { commentary: { contains: q } },
    ];
  }

  const hadiths = await db.hadith.findMany({ where, orderBy: { createdAt: "asc" } });
  return NextResponse.json({ hadiths });
}
