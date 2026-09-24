/**
 * Common Questions Library seeder — Nur al-Usul.
 * Run: bun prisma/seed-bank.ts
 *
 * IDEMPOTENT: clears only bank-owned rows (suggestions, search logs, bank
 * questions/answers/citations, clusters, bank categories) then rebuilds.
 * ANTI-HALLUCINATION: statuses pass through from the content contract.
 */
import { PrismaClient } from "@prisma/client";
import { exemplarQuestions } from "./content/bank-exemplar";
import { fiqhWorshipQuestions } from "./content/bank-fiqh-worship";
import { fiqhLifeQuestions } from "./content/bank-fiqh-life";
import { familyFinanceQuestions } from "./content/bank-family-finance";
import { theologyQuestions } from "./content/bank-theology";
import { madhabMiscQuestions } from "./content/bank-madhab-misc";
import type { BankQuestion } from "./content/types";

const prisma = new PrismaClient();
const j = (v: unknown) => JSON.stringify(v);

const ALL_QUESTIONS: BankQuestion[] = [
  ...exemplarQuestions,
  ...fiqhWorshipQuestions,
  ...fiqhLifeQuestions,
  ...familyFinanceQuestions,
  ...theologyQuestions,
  ...madhabMiscQuestions,
];

// ─── Bank-owned categories (existing 4 categories are shared, never deleted) ───
interface CatDef {
  slug: string; nameEn: string; nameUr: string; nameAr: string; type: string; icon: string;
  descriptionEn: string; topics?: { slug: string; titleEn: string; titleUr?: string; titleAr?: string; arabicTerm?: string; summaryEn: string; isContested?: boolean }[];
}
const NEW_CATEGORIES: CatDef[] = [
  { slug: "salah", nameEn: "Salah", nameUr: "نماز", nameAr: "الصلاة", type: "FIQH_SALAH", icon: "Moon",
    descriptionEn: "How the prayer is performed in the Hanafi school and why its details differ across the madhhabs — with the evidence each side cites.",
    topics: [
      { slug: "salah-differences-details", titleEn: "Salah differences (raf' al-yadayn, Ameen, recitation)", titleUr: "نماز کے اختلافات", titleAr: "خلافات الصلاة", summaryEn: "The documented differences in prayer performance and their evidential reconciliation.", isContested: true },
      { slug: "witr-qunut", titleEn: "Witr & Qunut", titleUr: "وتر و قنوت", titleAr: "الوتر والقنوت", summaryEn: "Witr's status, method and the qunut's placement in the school." },
    ] },
  { slug: "taharah", nameEn: "Taharah (Purification)", nameUr: "طہارت", nameAr: "الطهارة", type: "FIQH_TAHARAH", icon: "Droplets",
    descriptionEn: "Wudu, ghusl, tayammum, masah and impurity rulings as the school's manuals codify them.",
    topics: [{ slug: "wudu-rulings", titleEn: "Wudu rulings", titleUr: "وضو کے احکام", titleAr: "أحكام الوضوء", summaryEn: "What breaks wudu and what does not, in the school's framework." }] },
  { slug: "sawm", nameEn: "Fasting (Sawm)", nameUr: "روزہ", nameAr: "الصيام", type: "FIQH_SAWM", icon: "Sunrise",
    descriptionEn: "What breaks the fast, exemptions, kaffarah/fidya and the moon-sighting differences.",
    topics: [{ slug: "fasting-rulings", titleEn: "Fasting rulings", titleUr: "روزے کے احکام", titleAr: "أحكام الصيام", summaryEn: "Voiding, non-voiding and compensation in the school." }] },
  { slug: "zakah", nameEn: "Zakah", nameUr: "زکوٰۃ", nameAr: "الزكاة", type: "FIQH_ZAKAH", icon: "Coins",
    descriptionEn: "Nisab, zakatable wealth, recipients and the modern application questions.",
    topics: [{ slug: "zakah-calculation", titleEn: "Zakah calculation", titleUr: "زکوٰۃ کا حساب", titleAr: "حساب الزكاة", summaryEn: "What is zakatable and how the base is computed." }] },
  { slug: "hajj-umrah", nameEn: "Hajj & Umrah", nameUr: "حج و عمرہ", nameAr: "الحج والعمرة", type: "FIQH_HAJJ", icon: "Tent",
    descriptionEn: "Ihram, the rites, compensations and Hajj-specific rulings of the school.",
    topics: [{ slug: "hajj-rites", titleEn: "Hajj rites", titleUr: "حج کی مناسک", titleAr: "مناسك الحج", summaryEn: "The rites' structure and their Hanafi method." }] },
  { slug: "jumuah-eid", nameEn: "Jumu'ah & Eid", nameUr: "جمعہ و عید", nameAr: "الجمعة والعيد", type: "FIQH_CONGREGATION", icon: "CalendarDays",
    descriptionEn: "Congregational worship's calendar anchors — the Friday prayer and the two Eids.",
    topics: [{ slug: "congregational-worship", titleEn: "Congregational worship", titleUr: "جماعتی عبادات", titleAr: "العبادات الجماعية", summaryEn: "Jumu'ah and Eid structures." }] },
  { slug: "nikah-talaq", nameEn: "Nikah & Talaq", nameUr: "نکاح و طلاق", nameAr: "النكاح والطلاق", type: "FIQH_FAMILY", icon: "Heart",
    descriptionEn: "Marriage validity, divorce, iddah, maintenance, custody and inheritance — general education, not personalized fatwa.",
    topics: [{ slug: "family-law", titleEn: "Family law", titleUr: "خاندانی قانون", titleAr: "قانون الأسرة", summaryEn: "The family-law framework of the school.", isContested: true }] },
  { slug: "financial", nameEn: "Financial Matters", nameUr: "معاشی معاملات", nameAr: "المعاملات المالية", type: "FIQH_MUAMALAT", icon: "Banknote",
    descriptionEn: "Riba, trade, partnership and the modern finance questions through the school's muamalat framework.",
    topics: [{ slug: "riba-banking", titleEn: "Riba & banking", titleUr: "سود و بینکنگ", titleAr: "الربا والبنوك", summaryEn: "The riba framework and its modern applications.", isContested: true }] },
  { slug: "janazah", nameEn: "Janazah", nameUr: "جنازہ", nameAr: "الجنائز", type: "FIQH_JANAZAH", icon: "Flower2",
    descriptionEn: "Death procedures, the funeral prayer, burial and the grave-visit etiquette.",
    topics: [{ slug: "funeral-rulings", titleEn: "Funeral rulings", titleUr: "جنازے کے احکام", titleAr: "أحكام الجنائز", summaryEn: "From death to burial in the school." }] },
  { slug: "prophethood", nameEn: "Prophethood", nameUr: "رسالت", nameAr: "الرسالة", type: "AQEEDAH", icon: "Star",
    descriptionEn: "Finality, the Prophet's ﷺ person, intercession and the salawat — the creed's prophethood section.",
    topics: [{ slug: "khatm-nubuwwah", titleEn: "Finality of Prophethood", titleUr: "ختم نبوت", titleAr: "خاتمية النبوة", summaryEn: "The seal of prophethood and its implications." }] },
  { slug: "tawassul-awliya", nameEn: "Tawassul & Awliya", nameUr: "توسل و اولیاء", nameAr: "التوسل والأولياء", type: "AQEEDAH", icon: "Hands",
    descriptionEn: "The tawassul/istighatha debate and the awliya doctrine — both sides represented from their own texts.",
    topics: [{ slug: "tawassul-debate", titleEn: "The tawassul debate", titleUr: "بحث توسل", titleAr: "جدل التوسل", summaryEn: "The documented disagreement and its evidence.", isContested: true }] },
  { slug: "bidah", nameEn: "Bid'ah (Innovation)", nameUr: "بدعت", nameAr: "البدعة", type: "AQEEDAH", icon: "Sparkle",
    descriptionEn: "What innovation means technically, how scholars classified it, and the disputed practices.",
    topics: [{ slug: "bidah-classification-topic", titleEn: "Classifying innovations", titleUr: "بدعات کی درجہ بندی", titleAr: "تصنيف البدع", summaryEn: "Hasanah/sayyi'ah and the school frameworks.", isContested: true }] },
  { slug: "mawlid", nameEn: "Mawlid", nameUr: "عید میلاد", nameAr: "المولد", type: "AQEEDAH", icon: "Gift",
    descriptionEn: "The Mawlid debate in full context — history, arguments, conditions and the documented disagreement.",
    topics: [{ slug: "mawlid-debate", titleEn: "The Mawlid debate", titleUr: "بحث میلاد", titleAr: "جدل المولد", summaryEn: "Both positions from their own literature.", isContested: true }] },
  { slug: "history-usul", nameEn: "History & Usul", nameUr: "تاریخ و اصول", nameAr: "التاريخ والأصول", type: "HISTORY_METHODOLOGY", icon: "Landmark",
    descriptionEn: "Imam Abu Hanifa's biography, the school's transmission, and its legal methodology.",
    topics: [{ slug: "hanafi-history", titleEn: "Hanafi history", titleUr: "حنفی تاریخ", titleAr: "تاريخ الحنفية", summaryEn: "The school's formation and corpus." }] },
  { slug: "terminology", nameEn: "Terminology", nameUr: "اصطلاحات", nameAr: "المصطلحات", type: "TERMINOLOGY", icon: "BookOpen",
    descriptionEn: "The vocabulary of fiqh — from fard/wajib to fatwa and maslak.",
    topics: [{ slug: "fiqh-vocabulary", titleEn: "Fiqh vocabulary", titleUr: "فقهی اصطلاحات", titleAr: "مصطلحات الفقه", summaryEn: "The ruling tiers and key terms." }] },
  { slug: "comparative", nameEn: "Madhhab Comparisons", nameUr: "مذاہب کا موازنہ", nameAr: "مقارنة المذاهب", type: "COMPARATIVE", icon: "Scale",
    descriptionEn: "Fair side-by-side treatments of where the schools differ and why.",
    topics: [{ slug: "school-differences", titleEn: "Where schools differ", titleUr: "مذاہب کے اختلافات", titleAr: "اختلافات المذاهب", summaryEn: "Documented differences with both sides' evidence.", isContested: true }] },
  { slug: "misconceptions", nameEn: "Common Misconceptions", nameUr: "مشہور غلط فہمیاں", nameAr: "المفاهيم الخاطئة", type: "MISCONCEPTIONS", icon: "ShieldQuestion",
    descriptionEn: "Investigated claims about Hanafi belief and practice — each checked against the sources.",
    topics: [{ slug: "investigated-claims", titleEn: "Investigated claims", titleUr: "تحقیق شدہ دعوے", titleAr: "ادعاءات محققة", summaryEn: "Claims examined against the literature." }] },
  { slug: "books-scholars", nameEn: "Books & Scholars", nameUr: "کتابیں و علماء", nameAr: "الكتب والعلماء", type: "REFERENCE", icon: "Library",
    descriptionEn: "The school's library — from al-Hidayah to Fatawa Razvia — and its scholars.",
    topics: [{ slug: "hanafi-library", titleEn: "The Hanafi library", titleUr: "حنفی لائبریری", titleAr: "مكتبة الحنفية", summaryEn: "The works that carry the school." }] },
  { slug: "south-asian", nameEn: "South Asian Practice", nameUr: "برصغیر کی عملی روایت", nameAr: "ممارسات جنوب آسيا", type: "CULTURE", icon: "Map",
    descriptionEn: "The subcontinent's Hanafi practice culture — documented fairly, with its scholarly debates.",
    topics: [{ slug: "local-practices", titleEn: "Local practices", titleUr: "مقامی رسمیں", titleAr: "الممارسات المحلية", summaryEn: "Giyarvin, Urs, khatam and the debates.", isContested: true }] },
];

// ─── Cluster registry (derived + titled) ───
const CLUSTER_TITLES: Record<string, { en: string; ur: string; ar: string; desc?: string }> = {
  "taqlid": { en: "Taqlid", ur: "تقلید", ar: "التقليد", desc: "Following qualified scholarship — meaning, obligation, objections." },
  "madhhab": { en: "Madhhabs", ur: "مذاہب", ar: "المذاهب", desc: "What the schools are and why they differ." },
  "raf-yadayn": { en: "Raf' al-Yadayn", ur: "رفع یدین", ar: "رفع اليدين", desc: "Raising the hands in salah — the documented debate." },
  "ameen": { en: "Ameen", ur: "آمین", ar: "الأمين", desc: "Quiet vs audible Ameen." },
  "recitation-behind-imam": { en: "Recitation behind the Imam", ur: "امام کے پیچھے تلاوت", ar: "التلاوة خلف الإمام", desc: "Fatiha and listening behind the imam." },
  "hands-placement": { en: "Hand Placement", ur: "ہاتھ باندھنا", ar: "وضع اليدین", desc: "Where the hands are placed in qiyam." },
  "witr": { en: "Witr", ur: "وتر", ar: "الوتر", desc: "Status, method and school differences." },
  "qunut": { en: "Qunut", ur: "قنوت", ar: "القنوت", desc: "The qunut du'a and its placement." },
  "sajdah-sahw": { en: "Sajdah Sahw", ur: "سجدہ سہو", ar: "سجود السهو", desc: "Compensating forgetfulness in prayer." },
  "masbuq": { en: "Masbuq (joining late)", ur: "مسبوق", ar: "المسبوق", desc: "Joining the congregation late." },
  "salah-faraid": { en: "Fara'id & Wajibat of Salah", ur: "فرائض و واجبات نماز", ar: "فرائض الصلاة", desc: "The prayer's pillars and obligations." },
  "salah-congregation": { en: "Congregational Prayer", ur: "جماعت", ar: "الجماعة", desc: "Following the imam." },
  "taraweeh": { en: "Taraweeh", ur: "تراویح", ar: "التراويح", desc: "The Ramadan night prayer's format." },
  "wudu": { en: "Wudu", ur: "وضو", ar: "الوضوء", desc: "Ablution rulings." },
  "ghusl": { en: "Ghusl", ur: "غسل", ar: "الغسل", desc: "The full bath's causes and rules." },
  "tayammum": { en: "Tayammum", ur: "تیامم", ar: "التيمم", desc: "Dry purification." },
  "masah-socks": { en: "Masah over Socks", ur: "مسموع پر مسح", ar: "المسح على الخفين", desc: "Wiping over socks/khuffs." },
  "najasah": { en: "Najasah (Impurities)", ur: "نجاست", ar: "النجاسات", desc: "Impurity types and their removal." },
  "fasting-breaks": { en: "What Breaks the Fast", ur: "روزہ ٹوٹنے کے ذرائع", ar: "مفطرات الصيام", desc: "Voiding and non-voiding items." },
  "kaffarah-fidya": { en: "Kaffarah & Fidya", ur: "کفارہ و فدیہ", ar: "الكفارة والفدية", desc: "Compensations for missed or broken fasts." },
  "moon-sighting": { en: "Moon Sighting", ur: "چاند دیکھنا", ar: "رؤية الهلال", desc: "The Ramadan-start differences." },
  "sawm-general": { en: "Fasting General", ur: "عام روزے", ar: "الصيام عموما", desc: "Exemptions and i'tikaf." },
  "zakah-nisab": { en: "Zakah Nisab & Base", ur: "نصاب زکوٰۃ", ar: "نصاب الزكاة", desc: "Thresholds and zakatable wealth." },
  "zakah-property": { en: "Zakah on Property", ur: "املاک پر زکوٰۃ", ar: "زكاة الأموال", desc: "Jewellery, inventory, shares, debts." },
  "zakah-recipients": { en: "Zakah Recipients", ur: "زکوٰۃ کے مستحق", ar: "مستحقو الزكاة", desc: "The eight categories and eligibility." },
  "ihram": { en: "Ihram", ur: "احرام", ar: "الإحرام", desc: "The pilgrim state and its rules." },
  "tawaf-sai": { en: "Tawaf & Sa'i", ur: "طواف و سعی", ar: "الطواف والسعي", desc: "The circuit rites." },
  "hajj-wuquf": { en: "Wuquf (Arafah)", ur: "وقوف عرفہ", ar: "الوقوف بعرفة", desc: "The standing at Arafah." },
  "hajj-dam": { en: "Dam (Compensation)", ur: "دم", ar: "الدم", desc: "Hajj penalties." },
  "hajj-general": { en: "Hajj & Umrah General", ur: "حج و عمرہ", ar: "الحج والعمرة", desc: "Structure, substitutes, women's rulings." },
  "jumuah": { en: "Jumu'ah", ur: "جمعہ", ar: "الجمعة", desc: "The Friday prayer." },
  "eid": { en: "Eid", ur: "عید", ar: "العيد", desc: "The two Eids and the sacrifice." },
  "nikah-conditions": { en: "Nikah Conditions", ur: "نکاح کی شرائط", ar: "أركان النكاح", desc: "Validity, wali, witnesses, kafa'ah." },
  "mahr": { en: "Mahr", ur: "مہر", ar: "المهر", desc: "The dowry's rules." },
  "talaq": { en: "Talaq", ur: "طلاق", ar: "الطلاق", desc: "Divorce's forms and consequences." },
  "khula-iddah": { en: "Khula, Iddah & After", ur: "خلا، عدت", ar: "الخلع والعدة", desc: "Dissolution, waiting periods, custody, maintenance." },
  "inheritance-family": { en: "Inheritance & Bequest", ur: "وراثت و وصیت", ar: "الوصايا والميراث", desc: "Estate division in the school." },
  "riba-banking": { en: "Riba & Modern Finance", ur: "سود و جدید مالیات", ar: "الربا والمصرف", desc: "Interest, mortgages, insurance, credit." },
  "muamalat-general": { en: "Muamalat", ur: "معاملات", ar: "المعاملات", desc: "Trade, partnership, gifts." },
  "janazah-procedure": { en: "Janazah Procedure", ur: "جنازہ کا طریقہ", ar: "إجراءات الجنازة", desc: "From death to burial." },
  "grave-visit": { en: "Visiting Graves", ur: "قبروں کی زیارت", ar: "زيارة القبور", desc: "Etiquette and rulings." },
  "isal-thawab": { en: "Isal al-Thawab", ur: "معذرت و اثواب", ar: "إيصال الثواب", desc: "Sending reward to the deceased." },
  "janazah-general": { en: "Janazah General", ur: "جنازہ عام", ar: "الجنائز عموما", desc: "General funeral topics." },
  "aqeedah-attributes": { en: "Allah's Attributes & Iman", ur: "صفات الٰہی و ایمان", ar: "الصفات والإيمان", desc: "The Maturidi creed's core." },
  "prophethood-finality": { en: "Finality of Prophethood", ur: "ختم نبوت", ar: "خاتمية النبوة", desc: "Khatm al-nubuwwah." },
  "nubuwwah-general": { en: "The Prophet ﷺ", ur: "حضور ﷺ", ar: "النبي ﷺ", desc: "His person, life and miracles." },
  "shafaah": { en: "Shafa'ah", ur: "شفااعت", ar: "الشفاعة", desc: "Intercession." },
  "unseen-knowledge": { en: "Knowledge of the Unseen", ur: "علم غیب", ar: "علم الغيب", desc: "Bestowed vs essential knowledge." },
  "tawassul": { en: "Tawassul", ur: "توسل", ar: "التوسل", desc: "Seeking nearness in du'a." },
  "istighatha": { en: "Istighatha", ur: "استغاثہ", ar: "الاستغاثة", desc: "Calling for help — the debate." },
  "awliya-karamat": { en: "Awliya & Karamat", ur: "اولیاء و کرامات", ar: "الأولياء والكرامات", desc: "Friends of Allah and their miracles." },
  "barzakh": { en: "Barzakh", ur: "برزخ", ar: "البرزخ", desc: "The grave interval." },
  "bidah-classification": { en: "Classifying Bid'ah", ur: "بدعت کی درجہ بندی", ar: "تصنيف البدعة", desc: "The frameworks of innovation." },
  "mawlid": { en: "Mawlid", ur: "میلاد", ar: "المولد", desc: "The birth commemoration debate." },
  "historical-hanafi": { en: "Imam Abu Hanifa", ur: "امام ابو حنیفہ", ar: "أبو حنيفة", desc: "The eponym's biography." },
  "usul-methodology": { en: "Usul al-Fiqh", ur: "اصول فقہ", ar: "أصول الفقه", desc: "The school's legal methodology." },
  "terms": { en: "Terminology", ur: "اصطلاحات", ar: "المصطلحات", desc: "The vocabulary of the tradition." },
  "hanafi-vs-others": { en: "Schools Compared", ur: "مذاہب کا موازنہ", ar: "مقارنة المذاهب", desc: "Fair comparisons across the schools." },
  "misconceptions-general": { en: "Misconceptions", ur: "غلط فہمیاں", ar: "المفاهيم الخاطئة", desc: "Investigated claims." },
  "scholars-books": { en: "Books & Scholars", ur: "کتابیں و علماء", ar: "الكتب والعلماء", desc: "The library and its authors." },
  "south-asian-practice": { en: "South Asian Practices", ur: "برصغیر کی رسمیں", ar: "ممارسات جنوب آسيا", desc: "The subcontinent's practice culture." },
};

const AQEEDAH_CATS = new Set(["aqeedah", "prophethood", "tawassul-awliya", "mawlid"]);
const FIQH_CATS = new Set(["salah", "salah-differences", "taharah", "sawm", "zakah", "hajj-umrah", "jumuah-eid", "nikah-talaq", "financial", "janazah", "bidah"]);
const FLAGSHIP = new Set(["taqlid-what-is", "taqlid-blind-following", "madhhab-what-is", "salah-raf-yadayn-why", "salah-ameen-quiet", "salah-recitation-behind-imam", "tawassul-permissible", "bidah-definition", "mawlid-ruling", "nubuwwah-finality", "misc-hanafis-reject-hadith", "salah-witr-wajib"]);

async function main() {
  console.log("Clearing bank-owned data…");
  const oldBank = await prisma.question.findMany({ where: { slug: { not: null } }, select: { id: true } });
  const oldIds = oldBank.map((q) => q.id);
  if (oldIds.length) {
    await prisma.citation.deleteMany({ where: { answer: { questionId: { in: oldIds } } } });
    await prisma.answer.deleteMany({ where: { questionId: { in: oldIds } } });
    await prisma.searchDocument.deleteMany({ where: { entityId: { in: oldIds } } });
  }
  await prisma.questionSuggestion.deleteMany();
  await prisma.searchLog.deleteMany();
  await prisma.question.deleteMany({ where: { slug: { not: null } } });
  await prisma.questionCluster.deleteMany();
  for (const c of NEW_CATEGORIES) {
    const existing = await prisma.category.findUnique({ where: { slug: c.slug } });
    if (existing) await prisma.category.delete({ where: { slug: c.slug } });
  }

  console.log("Creating categories…");
  const catBySlug = new Map<string, string>();
  let order = 5;
  for (const c of NEW_CATEGORIES) {
    const created = await prisma.category.create({
      data: {
        slug: c.slug, nameEn: c.nameEn, nameUr: c.nameUr, nameAr: c.nameAr, type: c.type, icon: c.icon,
        descriptionEn: c.descriptionEn, order,
        topics: { create: (c.topics ?? []).map((t, i) => ({ slug: t.slug, titleEn: t.titleEn, titleUr: t.titleUr, titleAr: t.titleAr, arabicTerm: t.arabicTerm, summaryEn: t.summaryEn, isContested: t.isContested ?? false, order: i + 1 })) },
      },
    });
    catBySlug.set(c.slug, created.id);
    order += 1;
  }
  for (const slug of ["aqeedah", "salah-differences", "taqlid-madhahib"]) {
    const c = await prisma.category.findUnique({ where: { slug } });
    if (c) catBySlug.set(slug === "taqlid-madhahib" ? "taqlid-madhhab" : slug, c.id);
  }

  console.log("Creating clusters…");
  const clusterBySlug = new Map<string, string>();
  const clusterSlugs = [...new Set(ALL_QUESTIONS.map((q) => q.cluster).filter(Boolean) as string[])];
  let cOrder = 1;
  for (const slug of clusterSlugs) {
    const t = CLUSTER_TITLES[slug] ?? { en: slug, ur: slug, ar: slug };
    const created = await prisma.questionCluster.create({
      data: { slug, titleEn: t.en, titleUr: t.ur, titleAr: t.ar, descriptionEn: t.desc, order: cOrder++ },
    });
    clusterBySlug.set(slug, created.id);
  }

  console.log("Creating questions, answers & citations…");
  const slugSet = new Set(ALL_QUESTIONS.map((q) => q.slug));
  let created = 0;
  const stats = { quran: 0, hadith: 0, book: 0, fatwa: 0, citations: 0, verified: 0, partially: 0, unverified: 0, sensitive: 0 };
  for (const q of ALL_QUESTIONS) {
    const categoryId = catBySlug.get(q.category) ?? null;
    if (!categoryId) throw new Error(`category missing for ${q.slug}: ${q.category}`);
    const related = (q.related ?? []).filter((r) => slugSet.has(r) && r !== q.slug);
    const sensitive = (q.practicalInfo ?? "").toLowerCase().includes("not a personalized fatwa") || (q.practicalInfo ?? "").includes("consult a qualified");
    const aqeedahOrFiqh = AQEEDAH_CATS.has(q.category) ? "AQEEDAH" : FIQH_CATS.has(q.category) ? "FIQH" : "NEITHER";

    const question = await prisma.question.create({
      data: {
        text: q.question, language: "EN", slug: q.slug,
        textUr: q.questionUr ?? null, textAr: q.questionAr ?? null,
        categoryId, subcategory: q.subcategory ?? null,
        questionType: q.type, difficulty: q.difficulty,
        isCommon: true, isMisconception: q.isMisconception ?? false,
        isDisputed: q.isDisputed ?? false, isSensitive: sensitive,
        shortAnswer: q.shortAnswer, intent: q.intent ?? null,
        shortAnswerUr: q.shortAnswerUr ?? null, shortAnswerAr: q.shortAnswerAr ?? null,
        clusterId: q.cluster ? (clusterBySlug.get(q.cluster) ?? null) : null,
        clusterOrder: created,
        variantWordings: j(q.variants ?? []),
        relatedSlugs: j(related),
        status: "ANSWERED", featured: FLAGSHIP.has(q.slug),
        views: 0,
      },
    });

    await prisma.answer.create({
      data: {
        questionId: question.id,
        directAnswer: q.shortAnswer,
        detailedAnswer: q.detailedAnswer ?? null,
        hanafiPosition: q.hanafiPosition ?? null,
        aqeedahOrFiqh,
        otherViews: q.otherViews ?? null,
        commonObjection: q.commonObjection ?? null,
        scholarlyResponse: q.scholarlyResponse ?? null,
        disputed: q.disputedNote ?? null,
        practicalInfo: q.practicalInfo ?? null,
        fatawaRazvia: q.fatawaRazvia ?? null,
        sources: j(q.sources),
        status: "PUBLISHED",
        revision: 1,
        aiGenerated: false, // curated library content, human-authored with honest citation statuses
      },
    });

    for (const s of q.sources) {
      stats.citations += 1;
      if (s.kind === "QURAN") stats.quran += 1;
      else if (s.kind === "HADITH") stats.hadith += 1;
      else if (s.kind === "BOOK") stats.book += 1;
      else stats.fatwa += 1;
      if (s.status === "VERIFIED") stats.verified += 1;
      else if (s.status === "PARTIALLY_VERIFIED") stats.partially += 1;
      else stats.unverified += 1;
      const verification = s.status === "VERIFIED" ? "VERIFIED" : s.status === "PARTIALLY_VERIFIED" ? "PARTIALLY_VERIFIED" : "UNVERIFIED";
      const book = s.kind === "BOOK" ? await findBook(s.ref) : null;
      await prisma.citation.create({
        data: {
          answerId: (await prisma.answer.findFirst({ where: { questionId: question.id }, select: { id: true } }))!.id,
          sourceType: s.kind,
          bookId: book?.id ?? null,
          volume: s.volume ?? null, page: s.page ?? null,
          quote: s.quote ?? null, translation: s.translation ?? null,
          verificationStatus: verification,
          permalink: book ? `sources/book/${book.slug}` : null,
        },
      });
    }
    if (sensitive) stats.sensitive += 1;
    created += 1;
  }

  console.log("Creating search documents…");
  const bankQuestions = await prisma.question.findMany({ where: { slug: { not: null } }, include: { answers: { take: 1 } } });
  const docs = bankQuestions.map((q) => {
    const variants = ((): string[] => { try { return JSON.parse(q.variantWordings ?? "[]"); } catch { return []; } })();
    const ans = q.answers[0];
    return {
      entityType: "QUESTION", entityId: q.id,
      title: q.text,
      titleUr: q.textUr ?? null,
      titleAr: q.textAr ?? null,
      body: `${q.shortAnswer ?? ""} ${q.shortAnswerUr ?? ""} ${q.shortAnswerAr ?? ""} ${ans?.detailedAnswer ?? ""} ${ans?.hanafiPosition ?? ""} ${variants.join(" ")} ${q.subcategory ?? ""} ${q.questionUr ?? ""} ${q.questionAr ?? ""}`.trim(),
      bodyUr: q.shortAnswerUr ?? null,
      bodyAr: q.shortAnswerAr ?? null,
      route: `bank/${q.slug}`,
      weight: q.featured ? 1.5 : 1.3,
    };
  });
  await prisma.searchDocument.createMany({ data: docs });

  // ─── Required content statistics report ───
  const byCat: Record<string, number> = {};
  for (const q of ALL_QUESTIONS) byCat[q.category] = (byCat[q.category] ?? 0) + 1;
  console.log("\n══════ CONTENT STATISTICS ══════");
  console.log("Total questions:", created);
  console.log("By category:", JSON.stringify(byCat, null, 0));
  console.log("By difficulty:", JSON.stringify(ALL_QUESTIONS.reduce<Record<string, number>>((a, q) => { a[q.difficulty] = (a[q.difficulty] ?? 0) + 1; return a; }, {})));
  console.log("By type:", JSON.stringify(ALL_QUESTIONS.reduce<Record<string, number>>((a, q) => { a[q.type] = (a[q.type] ?? 0) + 1; return a; }, {})));
  console.log("With variants:", ALL_QUESTIONS.filter((q) => (q.variants ?? []).length > 0).length);
  console.log("Disputed:", ALL_QUESTIONS.filter((q) => q.isDisputed).length, "| Misconception-flagged:", ALL_QUESTIONS.filter((q) => q.isMisconception).length);
  console.log("With detailedAnswer:", ALL_QUESTIONS.filter((q) => q.detailedAnswer).length, "| With hanafiPosition:", ALL_QUESTIONS.filter((q) => q.hanafiPosition).length);
  console.log("Translated Ur/Ar:", ALL_QUESTIONS.filter((q) => q.questionUr && q.questionAr && q.shortAnswerUr && q.shortAnswerAr).length, "/", ALL_QUESTIONS.length);
  console.log("Personal-fatwa warnings:", stats.sensitive);
  console.log("Clusters:", clusterSlugs.length, "| Search docs:", docs.length);
  console.log("\n══════ CITATION STATISTICS ══════");
  console.log("Total citations:", stats.citations, "(QURAN", stats.quran, "| HADITH", stats.hadith, "| BOOK", stats.book, "| FATWA", stats.fatwa, ")");
  console.log("VERIFIED:", stats.verified, "| PARTIALLY_VERIFIED:", stats.partially, "| UNVERIFIED (honest pending):", stats.unverified);
  console.log("Questions citing Fatawa Razvia:", ALL_QUESTIONS.filter((q) => q.sources.some((s) => s.ref.includes("Fatawa Razvia"))).length);
  console.log("\n✅ Bank seed complete.");
}

/** Match a book citation to an existing Book row (by title-token overlap). */
async function findBook(ref: string) {
  const books = await prisma.book.findMany({ select: { id: true, slug: true, titleEn: true, altTitles: true } });
  const r = ref.toLowerCase();
  let best: { id: string; slug: string; score: number } | null = null;
  for (const b of books) {
    const t = b.titleEn.toLowerCase().replace(/[^a-z0-9 ]/g, "");
    const first = t.split(" ")[0];
    if (first.length > 4 && r.includes(first)) {
      const score = first.length;
      if (!best || score > best.score) best = { id: b.id, slug: b.slug, score };
    }
  }
  return best ? { id: best.id, slug: best.slug } : null;
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
