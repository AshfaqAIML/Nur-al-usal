import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

/**
 * Search-intent classification (Common Questions Library spec):
 * informational | fiqh | misconception | evidence | source-lookup.
 * Heuristic-first; every search is logged for the admin analytics loop.
 */
export function classifyIntent(q: string): string {
  const t = q.toLowerCase();
  if (/(show me|find|quote from|open|page of|volume of|radd al-muhtar on|hidayah on|fatawa razvia on|where in)/.test(t)) return "source-lookup";
  if (/(proof|daleel|evidence|cite|citation|source|which hadith|what hadith|verse)/.test(t)) return "evidence";
  if (/(is it true|do hanafis reject|don'?t hanafis|hanafis don'?t|myth|misconception|really|right\?|shirk\?|bid'?ah\?|reject hadith|blind)/.test(t)) return "misconception";
  if (/(ruling|hukm|halal|haram|valid|invalid|break|wajib|fard|can i|do i|should i|permissible|makruh|how do|how many|when do)/.test(t)) return "fiqh";
  return "informational";
}

export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams;
  const q = (sp.get("q") ?? "").trim();
  const type = sp.get("type");
  const lang = sp.get("lang");
  const surface = sp.get("surface") ?? "search";

  if (!q) {
    return NextResponse.json({ results: [], query: q, intent: null });
  }

  const intent = classifyIntent(q);

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

  // Analytics log (fire-and-forget; no IP stored — aggregate signal only)
  db.searchLog
    .create({
      data: {
        query: q.slice(0, 300),
        results: results.length,
        intent,
        language: (lang ?? "EN").toUpperCase().slice(0, 2),
        surface: surface.slice(0, 20),
      },
    })
    .catch(() => {});

  return NextResponse.json({
    query: q,
    intent,
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
