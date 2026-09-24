import { NextResponse } from "next/server";
import { db } from "@/lib/db";

/** Question clusters — the interconnected research-graph view. */
export async function GET() {
  const clusters = await db.questionCluster.findMany({
    orderBy: { order: "asc" },
    include: {
      questions: {
        where: { isCommon: true },
        select: { slug: true, text: true, textUr: true, textAr: true, difficulty: true },
        orderBy: { clusterOrder: "asc" },
      },
    },
  });

  return NextResponse.json({
    clusters: clusters
      .filter((c) => c.questions.length > 0)
      .map((c) => ({
        id: c.id, slug: c.slug, titleEn: c.titleEn, titleUr: c.titleUr, titleAr: c.titleAr,
        descriptionEn: c.descriptionEn, count: c.questions.length,
        questions: c.questions,
      })),
  });
}
