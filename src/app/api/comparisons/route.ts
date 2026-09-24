import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const comparisons = await db.comparison.findMany({ orderBy: { issue: "asc" } });
  return NextResponse.json({ comparisons });
}
