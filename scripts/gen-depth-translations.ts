/**
 * Resumable depth-field translation generator.
 * Translates detailedAnswer / hanafiPosition / otherViews / commonObjection /
 * scholarlyResponse / practicalInfo / disputedNote into Urdu + Arabic for every
 * bank question, writing checkpoints to prisma/content/translations-depth.json.
 *
 * Usage: bun run scripts/gen-depth-translations.ts [--limit N] [--only slug]
 */
import ZAI from "z-ai-web-dev-sdk";
import fs from "fs";
import path from "path";

const OUT = path.resolve("prisma/content/translations-depth.json");
const FIELDS = ["detailedAnswer", "hanafiPosition", "otherViews", "commonObjection", "scholarlyResponse", "practicalInfo", "disputedNote"] as const;
const CONCURRENCY = 2;
const RETRIES = 4;

type Lang = "Ur" | "Ar";
type T = Record<string, string>;

const args = process.argv.slice(2);
const argOf = (k: string) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : undefined; };
const LIMIT = argOf("--limit") ? parseInt(argOf("--limit")!, 10) : undefined;
const ONLY = argOf("--only");

// ── load bank questions ─────────────────────────────────────────────
async function loadQuestions(): Promise<any[]> {
  const mods: Array<[string, string | null]> = [
    ["bank-exemplar", null],
    ["bank-fiqh-worship", "fiqhWorshipQuestions"],
    ["bank-fiqh-life", "fiqhLifeQuestions"],
    ["bank-family-finance", "familyFinanceQuestions"],
    ["bank-theology", "theologyQuestions"],
    ["bank-madhab-misc", "madhabMiscQuestions"],
  ];
  const all: any[] = [];
  for (const [name, key] of mods) {
    const m = await import(`../prisma/content/${name}.ts`);
    const qs = key
      ? (m as any)[key]
      : (m as any).exemplarQuestions ?? (Array.isArray((m as any).default) ? (m as any).default : null);
    if (Array.isArray(qs)) all.push(...qs);
    else console.warn(`[gen] WARN: no array in ${name}`);
  }
  return all;
}

// ── checkpoint io ───────────────────────────────────────────────────
function loadCheckpoint(): Record<string, T> {
  try { return JSON.parse(fs.readFileSync(OUT, "utf8")); } catch { return {}; }
}
function saveCheckpoint(data: Record<string, T>) {
  const tmp = OUT + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(data, null, 1));
  fs.renameSync(tmp, OUT);
}

// ── validation of translated values ─────────────────────────────────
const LATIN_RUN = /[A-Za-z]{10,}/;
function valid(value: string, source: string): boolean {
  if (!value || value.trim().length < Math.max(20, source.length * 0.3)) return false;
  if (LATIN_RUN.test(value)) return false;
  return true;
}

// ── prompts ─────────────────────────────────────────────────────────
const SYSTEM: Record<Lang, string> = {
  Ur: `You are a meticulous scholarly translator for a Hanafi Islamic research platform. Translate English Islamic-scholarship prose into high-register scholarly Urdu (علمی و ادبی اردو).
Rules:
- Use the established Islamic Urdu lexicon: نماز، وضو، غسل، تیمم، روزہ، زکوٰۃ، حج، نکاح، طلاق، مہر، عدت، جنازہ، برزخ، تقلید، مجتہد، مذہب، اصولِ فقہ، استحسان، قیاس، اجتہاد، بدعت، توسل، استغاثہ، اولیاء، کرامات، شفاعت، خاتم، ایصالِ ثواب…
- Preserve honorifics: ﷺ stays ﷺ; "(RA)" → رضی اللہ عنہ / عنہا / عنہما as appropriate.
- Translate book/source names into Urdu script naturally (e.g. Al-Hidayah → الہدایہ, Fatawa Hindiyyah → فتاویٰ ہندیہ, Sharh al-'Aqidah al-Tahawiyyah → شرح العقیدۃ الطحاویہ). Numerals and ayah references (2:286) remain as-is.
- FAIRNESS IS CRITICAL: where the English presents two scholarly positions on a disputed matter, the Urdu must keep both sides equally weighted — neither side may gain rhetorical advantage.
- Qur'anic phrases that appear in indirect speech stay indirect — no quotation marks around them.
- Technical hukm labels must stay exact: fard → فرض, wajib → واجب, sunnah → سنت, mustahabb → مستحب, makruh tahrimi → مکروہ تحریمی, makruh tanzihi → مکروہ تنزیہی, mubah → مباح.
- Preserve paragraph breaks exactly as \n\n.
- No Latin-script runs of 10+ letters anywhere (except numerals/refs).
- Output ONLY valid JSON — no markdown fences, no commentary.`,
  Ar: `You are a meticulous scholarly translator for a Hanafi Islamic research platform. Translate English Islamic-scholarship prose into fuṣḥā Arabic (العربية الفصحى) with a scholarly Islamic register.
Rules:
- Use the established lexicon: الصلاة، الوضوء، الغسل، التيمم، الصوم، الزكاة، الحج، النكاح، الطلاق، المهر، العدة، الجنازة، البرزخ، التقليد، المجتهد، المذهب، أصول الفقه، الاستحسان، القياس، الاجتهاد، البدعة، التوسل، الاستغاثة، الأولياء، الكرامات، الشفاعة، إيصال الثواب…
- Preserve honorifics: ﷺ stays ﷺ; "(RA)" → رضي الله عنه / عنها / عنهما as appropriate.
- Translate book/source names into Arabic script naturally (Al-Hidayah → الهدایة, Fatawa Hindiyyah → الفتاوى الهندية, Radd al-Muhtar → رد المحتار). Numerals and ayah references stay as-is.
- FAIRNESS IS CRITICAL: where the English presents two scholarly positions on a disputed matter, the Arabic must keep both sides equally weighted — neither side may gain rhetorical advantage.
- Qur'anic phrases in indirect speech stay indirect — no quotation marks.
- Technical hukm labels exact: الفرض، الواجب، السنة، المستحب، مكروه تحريما، مكروه تنزيها، مباح.
- Preserve paragraph breaks exactly as \n\n.
- No Latin-script runs of 10+ letters anywhere (except numerals/refs).
- Output ONLY valid JSON — no markdown fences, no commentary.`,
};

function userPrompt(q: any, lang: Lang, fields: string[]): string {
  const payload: Record<string, string> = {};
  for (const f of fields) payload[f] = q[f] ?? "";
  const keys = fields.map((f) => `${f}${lang}`).join(", ");
  return `Question: ${q.question}\n\nTranslate each value in this JSON into ${lang === "Ur" ? "scholarly Urdu" : "fuṣḥā Arabic"}:\n${JSON.stringify(payload, null, 1)}\n\nReturn ONLY a valid JSON object with exactly these keys: ${keys}. Preserve \n\n paragraph breaks. Every key required.`;
}

function stripFences(s: string): string {
  return s.replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/, "").trim();
}

function extractJson(s: string): Record<string, string> | null {
  const start = s.indexOf("{");
  const end = s.lastIndexOf("}");
  if (start < 0 || end <= start) return null;
  try { return JSON.parse(s.slice(start, end + 1)); } catch { return null; }
}

// ── main ────────────────────────────────────────────────────────────
async function main() {
  const all = await loadQuestions();
  const store = loadCheckpoint();
  const zai = await ZAI.create();

  // build work list
  type Job = { slug: string; lang: Lang; fields: string[] };
  const jobs: Job[] = [];
  for (const q of all) {
    if (ONLY && q.slug !== ONLY) continue;
    for (const lang of ["Ur", "Ar"] as Lang[]) {
      const need = FIELDS.filter((f) => {
        const src = q[f] as string | undefined;
        if (!src || src.length < 20) return false;
        const inlineKey = `${f}${lang}`; // e.g. detailedAnswerUr in-file
        if (q[inlineKey] && String(q[inlineKey]).length > 20) return false; // already in bank file
        const done = store[q.slug]?.[`${f}${lang}`];
        if (done && done.length > 20) return false; // checkpointed
        return true;
      });
      if (need.length > 0) jobs.push({ slug: q.slug, lang, fields: need });
    }
  }
  const queue = LIMIT ? jobs.slice(0, LIMIT) : jobs;
  console.log(`[gen] questions: ${all.length} | pending jobs: ${queue.length} (of ${jobs.length})`);

  let done = 0, failed = 0;
  const bySlug = new Map<string, Job[]>();
  for (const j of queue) { const list = bySlug.get(j.slug) ?? []; list.push(j); bySlug.set(j.slug, list); }
  const slugs = [...bySlug.keys()];

  async function processJob(job: Job, q: any): Promise<boolean> {
    for (let attempt = 1; attempt <= RETRIES; attempt++) {
      try {
        const completion = await zai.chat.completions.create({
          messages: [
            { role: "assistant", content: SYSTEM[job.lang] },
            { role: "user", content: userPrompt(q, job.lang, job.fields) },
          ],
          thinking: { type: "disabled" },
        });
        const raw = completion.choices[0]?.message?.content ?? "";
        const parsed = extractJson(stripFences(raw));
        if (!parsed) throw new Error("unparseable response");
        const out: T = {};
        let bad = false;
        for (const f of job.fields) {
          const v = parsed[`${f}${job.lang}`];
          if (!valid(String(v ?? ""), q[f] ?? "")) { bad = true; break; }
          out[`${f}${job.lang}`] = String(v).trim();
        }
        if (bad) throw new Error("validation failed (empty/latin/too-short)");
        store[job.slug] = { ...(store[job.slug] ?? {}), ...out };
        saveCheckpoint(store);
        return true;
      } catch (e: any) {
        const msg = String(e?.message ?? e);
        if (msg.includes("429")) {
          console.log(`[gen] ${job.slug}/${job.lang} rate-limited, waiting 20s (attempt ${attempt})`);
          await new Promise((r) => setTimeout(r, 20000));
          continue;
        }
        console.log(`[gen] ${job.slug}/${job.lang} attempt ${attempt} failed: ${e.message}`);
        await new Promise((r) => setTimeout(r, 5000 * attempt));
      }
    }
    return false;
  }

  // worker pool
  let cursor = 0;
  async function worker() {
    while (cursor < slugs.length) {
      const slug = slugs[cursor++];
      const q = all.find((x) => x.slug === slug);
      if (!q) continue;
      const jobsForSlug = bySlug.get(slug)!;
      const results = await Promise.all(jobsForSlug.map((j) => processJob(j, q)));
      done += 1;
      if (results.every(Boolean)) console.log(`[gen] OK ${slug} (${done}/${slugs.length})`);
      else { failed += 1; console.log(`[gen] PARTIAL/FAILED ${slug} (${done}/${slugs.length})`); }
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  console.log(`[gen] DONE — slugs processed: ${done}, with failures: ${failed}`);
  const missingFinal = all.filter((q) => FIELDS.some((f) => {
    const src = q[f] as string | undefined;
    if (!src || src.length < 20) return false;
    for (const lang of ["Ur", "Ar"] as Lang[]) {
      const inline = q[`${f}${lang}`];
      const side = store[q.slug]?.[`${f}${lang}`];
      if (!(inline && String(inline).length > 20) && !(side && side.length > 20)) return true;
    }
    return false;
  })).map((q) => q.slug);
  console.log(`[gen] still missing after run: ${missingFinal.length}${missingFinal.length ? " → " + missingFinal.slice(0, 20).join(", ") : ""}`);
}

main().catch((e) => { console.error("[gen] fatal:", e); process.exit(1); });
