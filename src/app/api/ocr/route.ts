import { NextRequest, NextResponse } from "next/server";
import ZAI from "z-ai-web-dev-sdk";

/**
 * OCR — Scan & Verify.
 * Accepts a base64-encoded scanned page (PNG/JPG/WebP), runs vision OCR,
 * and returns the verbatim extracted text + detected language + a one-line
 * summary of any fiqh/aqeedah claim found on the page. The text is intended
 * to be piped into the "Is This Really Hanafi?" claim checker.
 */

const ALLOWED_MIME = ["image/png", "image/jpeg", "image/webp"] as const;
const MAX_BASE64_CHARS = 6_000_000; // ≈ 4.5 MB binary
const MAX_TEXT_CHARS = 8000;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const imageBase64 = (body.imageBase64 ?? "").toString();
    const mimeType = (body.mimeType ?? "").toString();

    if (!imageBase64) {
      return NextResponse.json({ error: "No image data received." }, { status: 400 });
    }
    if (!ALLOWED_MIME.includes(mimeType as (typeof ALLOWED_MIME)[number])) {
      return NextResponse.json({ error: "Unsupported image type. Use PNG, JPG or WebP." }, { status: 415 });
    }
    if (imageBase64.length > MAX_BASE64_CHARS) {
      return NextResponse.json({ error: "Image too large (max ~4 MB)." }, { status: 413 });
    }
    // Strip dataURL prefix if the client sent one
    const b64 = imageBase64.includes(",") ? imageBase64.slice(imageBase64.indexOf(",") + 1) : imageBase64;

    const zai = await ZAI.create();
    const response = await zai.chat.completions.createVision({
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `You are the OCR engine of a scholarly Islamic research platform. The image is a scanned/photographed page that may contain printed Arabic, Urdu (Nastaliq script), English, or a mix, possibly with diacritics, footnotes and page numbers.

Rules:
- Extract ALL text VERBATIM. Never translate, never summarize, never correct spelling, never normalize orthography.
- Preserve paragraph breaks and line structure of footnotes.
- If part of the page is unreadable, mark it as [illegible].
- If the page contains no readable text, return an empty string for "text".

Output ONLY a valid JSON object (no markdown fences, no extra text):
{
  "text": "<verbatim extracted text>",
  "language": "ar" | "ur" | "en" | "mixed",
  "claimSummary": "<one English sentence summarizing the main fiqh/aqeedah claim or attribution made on this page, or empty string if none>"
}`,
            },
            {
              type: "image_url",
              image_url: { url: `data:${mimeType};base64,${b64}` },
            },
          ],
        },
      ],
      thinking: { type: "disabled" },
    });

    const raw = response.choices[0]?.message?.content ?? "";
    // Tolerant JSON extraction (models sometimes fence the object)
    const match = raw.match(/\{[\s\S]*\}/);
    if (!match) {
      return NextResponse.json({ error: "OCR engine returned an unreadable result." }, { status: 502 });
    }
    let parsed: { text?: string; language?: string; claimSummary?: string };
    try {
      parsed = JSON.parse(match[0]);
    } catch {
      return NextResponse.json({ error: "OCR engine returned a malformed result." }, { status: 502 });
    }

    const text = (parsed.text ?? "").toString().slice(0, MAX_TEXT_CHARS);
    if (!text.trim()) {
      return NextResponse.json({ error: "No readable text found on this image — try a sharper, closer photo." }, { status: 422 });
    }
    const language = ["ar", "ur", "en", "mixed"].includes(parsed.language ?? "") ? parsed.language! : "mixed";

    return NextResponse.json({
      text,
      language,
      claimSummary: (parsed.claimSummary ?? "").toString().slice(0, 300),
      chars: text.length,
    });
  } catch (err) {
    console.error("ocr POST error:", err);
    return NextResponse.json({ error: "OCR engine error. Please try again." }, { status: 500 });
  }
}
