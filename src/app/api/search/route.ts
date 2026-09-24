import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { retrieveEvidence } from "@/lib/retrieval";

export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams;
  const q = (sp.get("q") ?? "").trim();
  const type = sp.get("type");
  const lang = sp.get("lang");

  if (!q) {
    return NextResponse.json({ results: [], query: q });
  }

  // Unified search across the SearchDocument index (keyword + multilingual)
  const terms = q.toLowerCase().split(/\s+/).filter((t) => t.length > 1).slice(0, 10);

  const candidates = await db.searchDocument.findMany({
    ...(type ? { where: { entityType: type } } : {}),
    take: 500,
    orderBy: { weight: "desc" },
  });

  const scored = candidates
    .map((d) => {
      const title = `${d.title} ${d.titleUr ?? ""} ${d.titleAr ?? ""}`.toLowerCase();
      const body = `${d.body} ${d.bodyUr ?? ""} ${d.bodyAr ?? ""}`.toLowerCase();
      let score = 0;
      for (const t of terms) {
        if (title.includes(t)) score += 4;
        else if (body.includes(t)) score += 2;
      }
      // Typo tolerance: prefix matching for longer terms
      for (const t of terms) {
        if (t.length > 4 && (title.startsWith(t.slice(0, t.length - 1)) || body.includes(t.slice(0, t.length - 1)))) {
          score = Math.max(score, 1.5);
        }
      }
      return { ...d, score };
    })
    .filter((d) => d.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 30);

  // Language filter (multilingual search: searching "توسل" should find Tawassul)
  let results = scored;
  if (lang) {
    const langFiltered = results.filter((d) => d.language === lang);
    if (langFiltered.length > 0) results = langFiltered;
  }

  return NextResponse.json({
    query: q,
    count: results.length,
    results: results.map((r) => ({
      entityType: r.entityType,
      entityId: r.entityId,
      title: r.title,
      titleUr: r.titleUr,
      titleAr: r.titleAr,
      snippet: r.body.slice(0, 220),
      route: r.route,
      score: Math.round(r.score * 10) / 10,
    })),
  });
}
