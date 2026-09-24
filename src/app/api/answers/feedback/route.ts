import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { rateLimitByIp, tooMany } from "@/lib/rate-limit";

/**
 * Reader feedback on answers — signals which AI drafts are useful and
 * which need editorial attention. One incremental vote per request:
 *   POST { answerId, vote: "up" | "down" }  →  { id, helpfulUp, helpfulDown }
 * Client-side dedupe (one vote per browser per answer) lives in the view;
 * the endpoint stays rate-limited and validated.
 */
export async function POST(req: NextRequest) {
  const rl = rateLimitByIp(req, "feedback", 20);
  if (!rl.ok) return tooMany(rl.retryAfter);
  try {
    const body = await req.json().catch(() => null);
    const answerId = typeof body?.answerId === "string" ? body.answerId : "";
    const vote = body?.vote;
    if (!answerId || (vote !== "up" && vote !== "down")) {
      return NextResponse.json({ error: "answerId and vote ('up'|'down') are required." }, { status: 400 });
    }
    const answer = await db.answer.findUnique({ where: { id: answerId }, select: { id: true } });
    if (!answer) return NextResponse.json({ error: "Answer not found." }, { status: 404 });

    const updated = await db.answer.update({
      where: { id: answerId },
      data: vote === "up" ? { helpfulUp: { increment: 1 } } : { helpfulDown: { increment: 1 } },
      select: { id: true, helpfulUp: true, helpfulDown: true },
    });
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: "Feedback failed." }, { status: 500 });
  }
}
