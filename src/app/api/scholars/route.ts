import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams;
  const slug = sp.get("slug");
  const classification = sp.get("classification");

  if (slug) {
    const scholar = await db.scholar.findUnique({
      where: { slug },
      include: {
        books: { select: { id: true, slug: true, titleEn: true, classification: true } },
        fatwas: { select: { id: true, question: true, verificationStatus: true } },
        positions: true,
        scholarlyViews: true,
      },
    });
    if (!scholar) return NextResponse.json({ error: "Scholar not found" }, { status: 404 });
    return NextResponse.json({ scholar });
  }

  const where: Record<string, unknown> = {};
  if (classification) where.classification = classification;

  const scholars = await db.scholar.findMany({
    where,
    orderBy: [{ deathYear: "asc" }, { nameEn: "asc" }],
    select: {
      id: true, slug: true, nameEn: true, nameAr: true, nameUr: true, title: true,
      deathYear: true, era: true, classification: true, madhhab: true, isHanafi: true,
    },
  });
  return NextResponse.json({ scholars });
}
