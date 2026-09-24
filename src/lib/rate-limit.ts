import type { NextRequest } from "next/server";

/**
 * Lightweight in-memory sliding-window rate limiter for expensive
 * (AI/LLM-backed) endpoints. Per-instance, per-IP — sufficient for
 * a single-node deployment; swap for a shared store when scaling out.
 */

const buckets = new Map<string, number[]>();
const MAX_KEYS = 5000;

export interface RateLimitResult {
  ok: boolean;
  retryAfter: number; // seconds
  remaining: number;
}

export function rateLimit(key: string, limit: number, windowMs: number): RateLimitResult {
  const now = Date.now();

  // Sweep fully-stale keys occasionally so the map cannot grow unbounded.
  if (buckets.size > MAX_KEYS) {
    for (const [k, hits] of buckets) {
      const alive = hits.filter((t) => now - t < windowMs);
      if (alive.length === 0) buckets.delete(k);
      else buckets.set(k, alive);
    }
  }

  const hits = (buckets.get(key) ?? []).filter((t) => now - t < windowMs);
  if (hits.length >= limit) {
    buckets.set(key, hits);
    return {
      ok: false,
      retryAfter: Math.max(1, Math.ceil((windowMs - (now - hits[0])) / 1000)),
      remaining: 0,
    };
  }
  hits.push(now);
  buckets.set(key, hits);
  return { ok: true, retryAfter: 0, remaining: limit - hits.length };
}

/** Per-IP+scope bucket keyed from proxy headers (falls back to "local"). */
export function rateLimitByIp(
  req: NextRequest,
  scope: string,
  limit: number,
  windowMs = 60_000
): RateLimitResult {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip")?.trim() ||
    "local";
  return rateLimit(`${scope}:${ip}`, limit, windowMs);
}

/** Standard 429 JSON response with Retry-After header. */
export function tooMany(retryAfter: number): Response {
  return new Response(
    JSON.stringify({
      error: `Too many requests — please wait ${retryAfter}s and try again.`,
    }),
    {
      status: 429,
      headers: {
        "Content-Type": "application/json",
        "Retry-After": String(retryAfter),
      },
    }
  );
}
