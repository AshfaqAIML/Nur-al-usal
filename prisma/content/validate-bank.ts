/**
 * Validation runner for the Hanafi Q&A content bank files.
 * Checks: importability, count targets, slug uniqueness (intra + cross file),
 * required fields, source status enum, cluster references.
 */
const FILES = [
  { path: './bank-fiqh-worship.ts', key: 'fiqhWorshipQuestions', min: 62, name: 'bank-fiqh-worship' },
  { path: './bank-fiqh-life.ts', key: 'fiqhLifeQuestions', min: 62, name: 'bank-fiqh-life' },
  { path: './bank-family-finance.ts', key: 'familyFinanceQuestions', min: 50, name: 'bank-family-finance' },
  { path: './bank-theology.ts', key: 'theologyQuestions', min: 65, name: 'bank-theology' },
  { path: './bank-madhab-misc.ts', key: 'madhabMiscQuestions', min: 78, name: 'bank-madhab-misc' },
];

const VALID_STATUS = new Set(['VERIFIED', 'PARTIALLY_VERIFIED', 'UNVERIFIED']);
const VALID_KIND = new Set(['QURAN', 'HADITH', 'BOOK', 'FATWA']);
const VALID_TYPE = new Set(['BEGINNER', 'FIQH', 'AQEEDAH', 'METHODOLOGY', 'HADITH', 'MISCONCEPTION', 'OBJECTION', 'COMPARISON', 'HISTORICAL', 'PRACTICAL', 'TERMINOLOGY']);
const VALID_DIFF = new Set(['BEGINNER', 'INTERMEDIATE', 'ADVANCED']);
const VALID_INTENT = new Set(['informational', 'fiqh', 'misconception', 'evidence', 'source-lookup']);

const errors: string[] = [];
const warnings: string[] = [];
const allSlugs = new Map<string, string>();
let total = 0;
const report: Record<string, { count: number; clusters: string[] }> = {};

for (const f of FILES) {
  let mod: any;
  try {
    mod = await import(f.path);
  } catch (e: any) {
    errors.push(`[${f.name}] IMPORT FAILED: ${e.message}`);
    continue;
  }
  const bank = mod[f.key];
  if (!Array.isArray(bank)) {
    errors.push(`[${f.name}] export ${f.key} is not an array (got ${typeof bank})`);
    continue;
  }
  const slugs = new Set<string>();
  const clusters = new Set<string>();
  for (const q of bank) {
    if (!q.slug) { errors.push(`[${f.name}] question missing slug: ${q.question?.slice(0, 50)}`); continue; }
    if (slugs.has(q.slug)) errors.push(`[${f.name}] DUPLICATE slug: ${q.slug}`);
    slugs.add(q.slug);
    if (allSlugs.has(q.slug)) errors.push(`[CROSS] slug "${q.slug}" appears in both ${allSlugs.get(q.slug)} and ${f.name}`);
    allSlugs.set(q.slug, f.name);
    if (!q.question) errors.push(`[${f.name}] ${q.slug}: missing question`);
    if (!q.category) errors.push(`[${f.name}] ${q.slug}: missing category`);
    if (!q.shortAnswer) errors.push(`[${f.name}] ${q.slug}: missing shortAnswer`);
    if (!q.detailedAnswer) warnings.push(`[${f.name}] ${q.slug}: missing detailedAnswer`);
    if (!VALID_TYPE.has(q.type)) errors.push(`[${f.name}] ${q.slug}: bad type "${q.type}"`);
    if (!VALID_DIFF.has(q.difficulty)) errors.push(`[${f.name}] ${q.slug}: bad difficulty "${q.difficulty}"`);
    if (q.intent && !VALID_INTENT.has(q.intent)) errors.push(`[${f.name}] ${q.slug}: bad intent "${q.intent}"`);
    if (!Array.isArray(q.sources) || q.sources.length === 0) {
      errors.push(`[${f.name}] ${q.slug}: missing sources array`);
    } else {
      for (const s of q.sources) {
        if (!VALID_KIND.has(s.kind)) errors.push(`[${f.name}] ${q.slug}: bad source kind "${s.kind}"`);
        if (!VALID_STATUS.has(s.status)) errors.push(`[${f.name}] ${q.slug}: bad source status "${s.status}" for ref ${s.ref}`);
        if (!s.ref) errors.push(`[${f.name}] ${q.slug}: source missing ref`);
      }
    }
    if (q.isDisputed && !q.disputedNote) warnings.push(`[${f.name}] ${q.slug}: isDisputed but no disputedNote`);
    if (q.cluster) clusters.add(q.cluster);
    if (q.related && !Array.isArray(q.related)) errors.push(`[${f.name}] ${q.slug}: related is not array`);
  }
  total += bank.length;
  report[f.name] = { count: bank.length, clusters: [...clusters] };
  if (bank.length < f.min) {
    errors.push(`[${f.name}] count ${bank.length} < target ${f.min}`);
  }
}

console.log('=== CONTENT BANK VALIDATION REPORT ===');
for (const [name, r] of Object.entries(report)) {
  console.log(`${name}: ${r.count} questions | clusters: ${r.clusters.join(', ') || 'none'}`);
}
console.log(`TOTAL: ${total} questions, ${allSlugs.size} unique slugs`);
console.log(`\nWarnings: ${warnings.length}`);
for (const w of warnings.slice(0, 20)) console.log('  W:', w);
console.log(`\nErrors: ${errors.length}`);
for (const e of errors.slice(0, 50)) console.log('  E:', e);
if (errors.length > 0) process.exit(1);
console.log('\n✅ VALIDATION PASSED');
