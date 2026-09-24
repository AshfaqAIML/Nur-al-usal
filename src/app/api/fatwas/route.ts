import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams;
  const q = sp.get("q");
  const book = sp.get("book");
  const status = sp.get("status");

  const where: Record<string, unknown> = {};
  if (q) where.question = { contains: q };
  if (status) where.verificationStatus = status;
  if (book) where.bookId = book;

  const fatwas = await db.fatwa.findMany({
    where,
    orderBy: { createdAt: "desc" },
    include: {
      scholar: { select: { nameEn: true, slug: true, classification: true } },
      book: { select: { titleEn: true, slug: true, classification: true, language: true } },
    },
  });
  return NextResponse.json({ fatwas });
}
