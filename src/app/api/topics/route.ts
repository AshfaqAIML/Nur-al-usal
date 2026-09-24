import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug");

  if (slug) {
    const topic = await db.topic.findUnique({
      where: { slug },
      include: {
        category: true,
        misconceptions: {
          select: { id: true, slug: true, claim: true, claimUr: true, verificationStatus: true },
        },
        objections: { select: { id: true, question: true, isAqeedah: true } },
        comparisons: true,
      },
    });
    if (!topic) return NextResponse.json({ error: "Topic not found" }, { status: 404 });
    return NextResponse.json({ topic });
  }

  const categories = await db.category.findMany({
    orderBy: { order: "asc" },
    include: { topics: { orderBy: { order: "asc" } } },
  });
  return NextResponse.json({ categories });
}
