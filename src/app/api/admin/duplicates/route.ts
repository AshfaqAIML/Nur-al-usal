import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { normalize, similarity } from "../suggest-questions/route";

/**
 * Duplicate question detection: different users ask the same question in
 * different wording. Returns near-duplicate existing questions (one canonical
 * answer + multiple variants policy) ranked by token-overlap similarity.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const text = (body.text ?? "").toString().trim();
    if (text.length < 8) return NextResponse.json({ error: "Text too short to compare." }, { status: 400 });

    const candidates = await db.question.findMany({
      where: { isCommon: true },
      select: { slug: true, text: true, difficulty: true, variantWordings: true },
      take: 1000,
    });

    const target = normalize(text);
    const hits = candidates
      .map((c) => {
        let score = similarity(target, normalize(c.text));
        // variants count toward similarity (a variant phrasing match = duplicate signal)
        try {
          const variants = JSON.parse(c.variantWordings ?? "[]") as string[];
          for (const v of variants) score = Math.max(score, similarity(target, normalize(v)) * 0.95);
        } catch { /* noop */ }
        return { slug: c.slug, text: c.text, difficulty: c.difficulty, score: Math.round(score * 100) / 100 };
      })
      .filter((h) => h.score >= 0.3)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);

    return NextResponse.json({
      duplicates: hits,
      verdict: hits.some((h) => h.score >= 0.65) ? "likely-duplicate" : hits.length > 0 ? "check-these" : "unique",
    });
  } catch (err) {
    console.error("duplicates POST error:", err);
    return NextResponse.json({ error: "Could not check duplicates." }, { status: 500 });
  }
}
