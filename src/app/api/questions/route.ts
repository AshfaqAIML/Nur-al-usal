import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { isSensitiveQuestion, detectLanguage } from "@/lib/retrieval";

export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams;
  const id = sp.get("id");
  const status = sp.get("status");
  const categoryId = sp.get("categoryId");

  if (id) {
    const question = await db.question.findUnique({
      where: { id },
      include: {
        category: true,
        answers: { orderBy: { createdAt: "desc" } },
      },
    });
    if (!question) return NextResponse.json({ error: "Not found" }, { status: 404 });
    await db.question.update({ where: { id }, data: { views: { increment: 1 } } });
    return NextResponse.json({ question });
  }

  const where: Record<string, unknown> = {};
  if (status) where.status = status;
  if (categoryId) where.categoryId = categoryId;

  const questions = await db.question.findMany({
    where,
    orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
    take: 50,
    include: {
      category: { select: { nameEn: true, slug: true } },
      answers: { select: { id: true, status: true, directAnswer: true } },
    },
  });
  return NextResponse.json({ questions });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const text = (body.text ?? "").toString().trim();
    if (text.length < 10) {
      return NextResponse.json({ error: "Please write a complete question (at least 10 characters)." }, { status: 400 });
    }
    if (text.length > 3000) {
      return NextResponse.json({ error: "Question is too long (max 3000 characters)." }, { status: 400 });
    }

    const language = body.language || detectLanguage(text);
    const sensitive = isSensitiveQuestion(text) || body.isSensitive === true;

    const question = await db.question.create({
      data: {
        text, language,
        categoryId: body.categoryId || null,
        context: body.context || null,
        claim: body.claim || null,
        sourceRef: body.sourceRef || null,
        attachmentUrl: body.attachmentUrl || null,
        isSensitive: sensitive,
        status: "PENDING",
      },
    });

    return NextResponse.json({
      question,
      fatwaWarning: sensitive,
      message: sensitive
        ? "This platform provides educational, source-based information and does not replace a personalized fatwa from a qualified scholar. Please consult a local mufti for your personal situation."
        : "Your question has been submitted. The AI research assistant may generate a draft answer that requires scholarly review before publication.",
    });
  } catch (err) {
    console.error("questions POST error:", err);
    return NextResponse.json({ error: "Could not submit the question." }, { status: 500 });
  }
}
