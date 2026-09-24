import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { rateLimitByIp, tooMany } from "@/lib/rate-limit";

/**
 * Common Questions Library — filtered/searchable question bank.
 * Filters: category, difficulty, type, cluster, flag (misconception | disputed
 * | sensitive | fatawa-razvia), q (keyword across question + answer + variants).
 */
export async function GET(req: NextRequest) {
  const rl = rateLimitByIp(req, "bank-list", 60);
  if (!rl.ok) return tooMany(rl.retryAfter);

  const sp = req.nextUrl.searchParams;
  const category = sp.get("category") ?? undefined;
  const difficulty = sp.get("difficulty") ?? undefined;
  const type = sp.get("type") ?? undefined;
  const cluster = sp.get("cluster") ?? undefined;
  const flag = sp.get("flag") ?? undefined;
  const q = (sp.get("q") ?? "").trim().toLowerCase();
  const page = Math.max(1, parseInt(sp.get("page") ?? "1", 10) || 1);
  const limit = Math.min(50, Math.max(6, parseInt(sp.get("limit") ?? "12", 10) || 12));

  const where: Record<string, unknown> = { isCommon: true };
  if (category) where.categoryId = category;
  if (difficulty) where.difficulty = difficulty;
  if (type) where.questionType = type;
  if (cluster) where.clusterId = cluster;
  if (flag === "misconception") where.isMisconception = true;
  if (flag === "disputed") where.isDisputed = true;
  if (flag === "sensitive") where.isSensitive = true;

  // Fatawa Razvia flag: answers whose sources JSON mentions it.
  if (flag === "fatawa-razvia") {
    const answers = await db.answer.findMany({
      where: { sources: { contains: "Fatawa Razvia" } },
      select: { questionId: true },
    });
    where.id = { in: answers.map((a) => a.questionId) };
  }

  // Keyword search: question text + shortAnswer + variantWordings + subcategory
  if (q) {
    const rows = await db.question.findMany({
      where: { isCommon: true },
      select: { id: true, text: true, shortAnswer: true, variantWordings: true, subcategory: true },
      take: 1000,
    });
    const terms = q.split(/\s+/).filter((t) => t.length > 1).slice(0, 8);
    const matches = rows.filter((r) => {
      const hay = `${r.text} ${r.shortAnswer ?? ""} ${r.subcategory ?? ""} ${r.variantWordings ?? ""}`.toLowerCase();
      return terms.every((t) => hay.includes(t)) || terms.some((t) => hay.includes(t) && t.length > 4);
    });
    const idFilter = matches.map((m) => m.id);
    const base = typeof where.id === "object" && where.id && "in" in (where.id as Record<string, unknown>)
      ? (where.id as { in: string[] }).in
      : null;
    where.id = { in: base ? base.filter((id) => idFilter.includes(id)) : idFilter };
  }

  const [total, questions, categories, difficulties] = await Promise.all([
    db.question.count({ where }),
    db.question.findMany({
      where,
      orderBy: [{ featured: "desc" }, { clusterOrder: "asc" }],
      take: limit,
      skip: (page - 1) * limit,
      include: {
        category: { select: { slug: true, nameEn: true, nameUr: true, nameAr: true } },
        cluster: { select: { slug: true, titleEn: true } },
        answers: { select: { id: true, status: true }, take: 1 },
      },
    }),
    db.question.groupBy({ by: ["categoryId"], where: { isCommon: true }, _count: { _all: true } }),
    db.question.groupBy({ by: ["difficulty"], where: { isCommon: true }, _count: { _all: true } }),
  ]);

  const catIds = categories.map((c) => c.categoryId).filter(Boolean) as string[];
  const catNames = catIds.length
    ? await db.category.findMany({
        where: { id: { in: catIds } },
        select: { id: true, slug: true, nameEn: true, nameUr: true, nameAr: true, icon: true },
      })
    : [];

  return NextResponse.json({
    total, page, limit, pages: Math.ceil(total / limit),
    questions: questions.map((q) => ({
      id: q.id, slug: q.slug, text: q.text, shortAnswer: q.shortAnswer,
      subcategory: q.subcategory, questionType: q.questionType, difficulty: q.difficulty,
      isMisconception: q.isMisconception, isDisputed: q.isDisputed, isSensitive: q.isSensitive,
      featured: q.featured, views: q.views,
      category: q.category, cluster: q.cluster, hasAnswer: q.answers.length > 0,
    })),
    facets: {
      categories: categories
        .map((c) => {
          const meta = catNames.find((n) => n.id === c.categoryId);
          return { id: c.categoryId, slug: meta?.slug, nameEn: meta?.nameEn, nameUr: meta?.nameUr, nameAr: meta?.nameAr, icon: meta?.icon, count: c._count._all };
        })
        .sort((a, b) => (b.count ?? 0) - (a.count ?? 0)),
      difficulties: difficulties.map((d) => ({ value: d.difficulty, count: d._count._all })),
    },
  });
}
