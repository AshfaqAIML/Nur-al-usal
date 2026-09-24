import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

/**
 * Bank question detail: full answer template + citations + related questions
 * + variants + cluster siblings. ?slug=… or ?id=…
 */
export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams;
  const slug = sp.get("slug");
  const id = sp.get("id");
  if (!slug && !id) return NextResponse.json({ error: "slug or id required" }, { status: 400 });

  const question = await db.question.findFirst({
    where: slug ? { slug, isCommon: true } : { id: id!, isCommon: true },
    include: {
      category: { select: { slug: true, nameEn: true, nameUr: true, nameAr: true, type: true } },
      cluster: { select: { id: true, slug: true, titleEn: true, titleUr: true, titleAr: true, descriptionEn: true } },
      answers: { orderBy: { revision: "desc" }, take: 1 },
    },
  });
  if (!question) return NextResponse.json({ error: "Not found" }, { status: 404 });

  // Fire-and-forget view increment
  db.question.update({ where: { id: question.id }, data: { views: { increment: 1 } } }).catch(() => {});

  const answer = question.answers[0] ?? null;

  // Related questions: relatedSlugs first, then cluster siblings fallback
  let related: { slug: string; text: string; textUr: string | null; textAr: string | null; difficulty: string | null; clusterTitle: string | null }[] = [];
  let relatedSlugs: string[] = [];
  try { relatedSlugs = JSON.parse(question.relatedSlugs ?? "[]") as string[]; } catch { /* noop */ }
  if (relatedSlugs.length > 0) {
    const rows = await db.question.findMany({
      where: { slug: { in: relatedSlugs } },
      select: { slug: true, text: true, textUr: true, textAr: true, difficulty: true, cluster: { select: { titleEn: true } } },
    });
    related = rows.map((r) => ({ slug: r.slug!, text: r.text, textUr: r.textUr, textAr: r.textAr, difficulty: r.difficulty, clusterTitle: r.cluster?.titleEn ?? null }));
  }
  if (related.length < 4 && question.clusterId) {
    const siblings = await db.question.findMany({
      where: { clusterId: question.clusterId, id: { not: question.id }, slug: { notIn: relatedSlugs } },
      select: { slug: true, text: true, textUr: true, textAr: true, difficulty: true, cluster: { select: { titleEn: true } } },
      take: 6 - related.length,
      orderBy: { clusterOrder: "asc" },
    });
    related = [...related, ...siblings.map((r) => ({ slug: r.slug!, text: r.text, textUr: r.textUr, textAr: r.textAr, difficulty: r.difficulty, clusterTitle: r.cluster?.titleEn ?? null }))];
  }

  // Citations with book deep-links
  const citations = answer
    ? await db.citation.findMany({
        where: { answerId: answer.id },
        include: { book: { select: { slug: true, titleEn: true } } },
        orderBy: { createdAt: "asc" },
      })
    : [];

  return NextResponse.json({
    question: {
      id: question.id, slug: question.slug, text: question.text, language: question.language,
      textUr: question.textUr, textAr: question.textAr,
      shortAnswerUr: question.shortAnswerUr, shortAnswerAr: question.shortAnswerAr,
      subcategory: question.subcategory, questionType: question.questionType, difficulty: question.difficulty,
      isMisconception: question.isMisconception, isDisputed: question.isDisputed, isSensitive: question.isSensitive,
      shortAnswer: question.shortAnswer, intent: question.intent, views: question.views, featured: question.featured,
      category: question.category, cluster: question.cluster,
      variants: (() => { try { return JSON.parse(question.variantWordings ?? "[]") as string[]; } catch { return []; } })(),
    },
    answer: answer
      ? {
          id: answer.id, directAnswer: answer.directAnswer, detailedAnswer: answer.detailedAnswer,
          hanafiPosition: answer.hanafiPosition, aqeedahOrFiqh: answer.aqeedahOrFiqh,
          otherViews: answer.otherViews, commonObjection: answer.commonObjection,
          scholarlyResponse: answer.scholarlyResponse, disputed: answer.disputed,
          practicalInfo: answer.practicalInfo, fatawaRazvia: answer.fatawaRazvia,
          sources: answer.sources, status: answer.status, aiGenerated: answer.aiGenerated,
          helpfulUp: answer.helpfulUp, helpfulDown: answer.helpfulDown,
          citations: citations.map((c) => ({
            id: c.id, sourceType: c.sourceType, volume: c.volume, page: c.page, chapter: c.chapter,
            quote: c.quote, translation: c.translation, verificationStatus: c.verificationStatus,
            book: c.book ? { slug: c.book.slug, titleEn: c.book.titleEn } : null,
          })),
        }
      : null,
    related,
  });
}
