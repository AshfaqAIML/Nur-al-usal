import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams;
  const slug = sp.get("slug");
  const classification = sp.get("classification");
  const q = sp.get("q");

  if (slug) {
    const book = await db.book.findUnique({
      where: { slug },
      include: {
        author: { select: { id: true, slug: true, nameEn: true, nameAr: true, deathYear: true, classification: true } },
        fatwas: { select: { id: true, question: true, verificationStatus: true } },
      },
    });
    if (!book) return NextResponse.json({ error: "Book not found" }, { status: 404 });
    return NextResponse.json({ book });
  }

  const where: Record<string, unknown> = {};
  if (classification) where.classification = classification;
  if (q) where.titleEn = { contains: q };

  const books = await db.book.findMany({
    where,
    orderBy: [{ featured: "desc" }, { titleEn: "asc" }],
    include: { author: { select: { nameEn: true, deathYear: true } } },
  });
  return NextResponse.json({ books });
}
