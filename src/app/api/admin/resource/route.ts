import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

/**
 * Generic admin CRUD + editorial workflow.
 * entity: misconception | objection | book | scholar | fatwa | question | claim | answer | review
 * Admin authorization: sandbox demo uses a shared admin key header
 * (production would use NextAuth roles — documented modular swap).
 */
const ENTITIES = [
  "misconception", "objection", "book", "scholar", "fatwa", "question", "claim", "answer", "review",
] as const;
type Entity = (typeof ENTITIES)[number];

function model(entity: Entity) {
  switch (entity) {
    case "misconception": return db.misconception;
    case "objection": return db.objection;
    case "book": return db.book;
    case "scholar": return db.scholar;
    case "fatwa": return db.fatwa;
    case "question": return db.question;
    case "claim": return db.claimCheck;
    case "answer": return db.answer;
    case "review": return db.review;
  }
}

function checkAdmin(req: NextRequest) {
  // Simple shared-key gate (demo). NextAuth v4 integration documented in worklog.
  const key = req.headers.get("x-admin-key");
  return key === "nur-al-usul-admin";
}

export async function GET(req: NextRequest) {
  const entity = req.nextUrl.searchParams.get("entity") as Entity | null;
  const id = req.nextUrl.searchParams.get("id");
  if (!entity || !(ENTITIES as readonly string[]).includes(entity)) {
    return NextResponse.json({ error: "Invalid entity" }, { status: 400 });
  }
  const m = model(entity);
  if (id) {
    const rec = await (m as unknown as { findUnique: (a: unknown) => unknown }).findUnique({ where: { id } });
    return NextResponse.json({ record: rec });
  }
  const records = await (m as unknown as { findMany: (a?: unknown) => unknown }).findMany({ take: 100, orderBy: { createdAt: "desc" } });
  return NextResponse.json({ records });
}

export async function POST(req: NextRequest) {
  if (!checkAdmin(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const { entity, data } = await req.json();
    if (!(ENTITIES as readonly string[]).includes(entity)) {
      return NextResponse.json({ error: "Invalid entity" }, { status: 400 });
    }
    const m = model(entity as Entity);
    const rec = await (m as unknown as { create: (a: unknown) => unknown }).create({ data });
    return NextResponse.json({ record: rec }, { status: 201 });
  } catch (err) {
    console.error("admin resource POST error:", err);
    return NextResponse.json({ error: "Create failed — check required fields." }, { status: 400 });
  }
}

export async function PATCH(req: NextRequest) {
  if (!checkAdmin(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const { entity, id, data } = await req.json();
    if (!entity || !id) return NextResponse.json({ error: "entity and id required" }, { status: 400 });
    const m = model(entity as Entity);
    const rec = await (m as unknown as { update: (a: unknown) => unknown }).update({ where: { id }, data });
    return NextResponse.json({ record: rec });
  } catch (err) {
    console.error("admin resource PATCH error:", err);
    return NextResponse.json({ error: "Update failed." }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  if (!checkAdmin(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const { entity, id } = await req.json();
    if (!entity || !id) return NextResponse.json({ error: "entity and id required" }, { status: 400 });
    const m = model(entity as Entity);
    await (m as unknown as { delete: (a: unknown) => unknown }).delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("admin resource DELETE error:", err);
    return NextResponse.json({ error: "Delete failed — record may be referenced elsewhere." }, { status: 400 });
  }
}
