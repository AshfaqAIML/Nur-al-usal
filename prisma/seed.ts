/**
 * Seed script — Hanafi Research Platform knowledge base.
 * ANTI-HALLUCINATION POLICY: Only well-established facts are marked VERIFIED.
 * Uncertain hadith numbers / page numbers are left null with UNVERIFIED status.
 * Run: bun prisma/seed.ts
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function j(v: unknown): string {
  return JSON.stringify(v);
}

async function main() {
  console.log("Clearing existing data…");
  await prisma.review.deleteMany();
  await prisma.citation.deleteMany();
  await prisma.answer.deleteMany();
  await prisma.question.deleteMany();
  await prisma.claimCheck.deleteMany();
  await prisma.scholarlyView.deleteMany();
  await prisma.position.deleteMany();
  await prisma.comparison.deleteMany();
  await prisma.objection.deleteMany();
  await prisma.misconception.deleteMany();
  await prisma.topic.deleteMany();
  await prisma.category.deleteMany();
  await prisma.fatwa.deleteMany();
  await prisma.bookPage.deleteMany();
  await prisma.book.deleteMany();
  await prisma.scholar.deleteMany();
  await prisma.hadith.deleteMany();
  await prisma.quranVerse.deleteMany();
  await prisma.searchDocument.deleteMany();
  await prisma.user.deleteMany();

  // ─────────────────────────── USERS ───────────────────────────
  await prisma.user.createMany({
    data: [
      { email: "admin@nuralusul.org", name: "Platform Admin", role: "ADMIN" },
      { email: "editor@nuralusul.org", name: "Chief Editor", role: "EDITOR" },
      { email: "scholar@nuralusul.org", name: "Reviewing Scholar", role: "SCHOLAR" },
    ],
  });

  // ─────────────────────────── SCHOLARS ───────────────────────────
  const scholars = [
    {
      slug: "abu-hanifa", nameEn: "Imam Abu Hanifa", nameAr: "أبو حنيفة النعمان بن ثابت", nameUr: "امام ابو حنیفہ",
      title: "Imam al-A'zam (The Greatest Imam)", birthYear: "80 AH / 699 CE", deathYear: "150 AH / 767 CE",
      era: "Salaf / Tabi'in era", madhhab: "Hanafi (eponym)", aqeedahTradition: "MATURIDI (pre-dating the school)",
      region: "Kufa, Iraq", languages: "Arabic", classification: "CLASSICAL_HANAFI",
      biographyEn: "Nu'man ibn Thabit, the eponymous founder of the Hanafi school. A merchant of Kufa who studied under Hammad ibn Abi Sulayman and transmitted the legal tradition of Kufa traced to 'Abdullah ibn Mas'ud, 'Ali ibn Abi Talib and 'Umar. He was known for piety, caution in reporting hadith (which he demanded at a high standard), and for his method of rigorous qiyas and istihsan. His students Abu Yusuf and al-Shaybani codified the school's doctrines.",
      majorWorks: j([{ title: "Al-Fiqh al-Akbar", lang: "Arabic", note: "Short creed attributed to him" }, { title: "Al-'Alim wa'l-Muta'allim", lang: "Arabic", note: "Dialogue attributed to him" }]),
    },
    {
      slug: "abu-yusuf", nameEn: "Imam Abu Yusuf", nameAr: "يعقوب بن إبراهيم أبو يوسف", nameUr: "امام ابو یوسف",
      title: "Chief Qadi of the Abbasid Caliphate", deathYear: "182 AH / 798 CE", era: "Classical", madhhab: "Hanafi",
      region: "Kufa / Baghdad", languages: "Arabic", classification: "CLASSICAL_HANAFI",
      biographyEn: "Ya'qub ibn Ibrahim al-Ansari, the foremost student of Imam Abu Hanifa who served as Chief Qadi under the Abbasids. His work Kitab al-Kharaj is a foundational text of Islamic public finance.",
      majorWorks: j([{ title: "Kitab al-Kharaj", lang: "Arabic" }]),
    },
    {
      slug: "muhammad-al-shaybani", nameEn: "Imam Muhammad al-Shaybani", nameAr: "محمد بن الحسن الشيباني", nameUr: "امام محمد بن حسن شیبانی",
      deathYear: "189 AH / 805 CE", era: "Classical", madhhab: "Hanafi", region: "Kufa / Baghdad", languages: "Arabic",
      classification: "CLASSICAL_HANAFI",
      biographyEn: "The transmitter and codifier of Zahir al-Riwaya (the explicitly transmitted corpus of Hanafi law) in six books. He also studied with Imam Malik and transmitted the Muwatta, and narrated hadith.",
      majorWorks: j([{ title: "Zahir al-Riwaya (six books: al-Mabsut, al-Jami' al-Saghir, al-Jami' al-Kabir, al-Siyar al-Saghir, al-Siyar al-Kabir, al-Ziyadat)", lang: "Arabic" }, { title: "Kitab al-Athar", lang: "Arabic" }]),
    },
    {
      slug: "al-tahawi", nameEn: "Imam al-Tahawi", nameAr: "أبو جعفر الطحاوي", nameUr: "امام طحاوی",
      deathYear: "321 AH / 933 CE", era: "Classical", madhhab: "Hanafi", aqeedahTradition: "Pre-Maturidi Sunni",
      region: "Egypt", languages: "Arabic", classification: "CLASSICAL_HANAFI",
      biographyEn: "Abu Ja'far Ahmad ibn Muhammad al-Tahawi, a leading Egyptian Hanafi jurist and hadith scholar. His creed 'Aqidah Tahawiyyah became the most widely accepted statement of Sunni belief across the four schools. His Sharh Ma'ani al-Athar demonstrates the Hanafi method of reconciling hadith texts.",
      majorWorks: j([{ title: "Al-'Aqidah al-Tahawiyyah", lang: "Arabic" }, { title: "Sharh Ma'ani al-Athar", lang: "Arabic" }, { title: "Ikhtilaf al-Fuqaha", lang: "Arabic" }]),
    },
    {
      slug: "al-quduri", nameEn: "Imam al-Quduri", nameAr: "أبو الحسين القدوري", nameUr: "امام قدوری",
      deathYear: "428 AH / 1037 CE", era: "Classical", madhhab: "Hanafi", region: "Baghdad", languages: "Arabic",
      classification: "CLASSICAL_HANAFI",
      biographyEn: "Ahmad ibn Muhammad al-Quduri of Baghdad, author of Mukhtasar al-Quduri, the first comprehensive handbook of Hanafi law, relied upon for a millennium.",
      majorWorks: j([{ title: "Mukhtasar al-Quduri", lang: "Arabic" }]),
    },
    {
      slug: "al-sarakhsi", nameEn: "Imam al-Sarakhsi", nameAr: "شمس الأئمة السرخسي", nameUr: "امام سرخسی",
      title: "Shams al-A'immah", deathYear: "483 AH / 1090 CE", era: "Classical", madhhab: "Hanafi",
      region: "Transoxiana (died in Farghana)", languages: "Arabic", classification: "CLASSICAL_HANAFI",
      biographyEn: "Shams al-Din Muhammad ibn Ahmad al-Sarakhsi, called 'Shams al-A'immah' (Sun of the Imams). Imprisoned for over a decade in a well-prison, he dictated his monumental works to students from memory. His al-Mabsut (30 vols.) is the greatest explanatory corpus of early Hanafi fiqh with extensive discussion of evidential reasoning.",
      majorWorks: j([{ title: "Al-Mabsut", lang: "Arabic", note: "30 volumes" }, { title: "Usul al-Fiqh", lang: "Arabic" }, { title: "Sharh al-Siyar al-Kabir", lang: "Arabic" }]),
    },
    {
      slug: "al-kasani", nameEn: "Imam al-Kasani", nameAr: "علاء الدين الكاساني", nameUr: "علاء الدین کاسانی",
      title: "Malā al-Dīn", deathYear: "587 AH / 1191 CE", era: "Classical", madhhab: "Hanafi", region: "Transoxiana / Aleppo",
      languages: "Arabic", classification: "CLASSICAL_HANAFI",
      biographyEn: "'Ala' al-Din al-Kasani, husband of the Seljuk princess who endowed the Halawiyya madrasa for him. His Bada'i' al-Sana'i' is celebrated for arranging rulings by their legal causes ('ilal).",
      majorWorks: j([{ title: "Bada'i' al-Sana'i'", lang: "Arabic", note: "7 volumes" }]),
    },
    {
      slug: "al-marghinani", nameEn: "Imam al-Marghinani", nameAr: "برهان الدين المرغيناني", nameUr: "برہان الدین مرغینانی",
      title: "Burhan al-Din", deathYear: "593 AH / 1197 CE", era: "Classical", madhhab: "Hanafi",
      region: "Marghinan, Transoxiana", languages: "Arabic", classification: "CLASSICAL_HANAFI",
      biographyEn: "Author of Al-Hidayah, the most widely studied comprehensive manual of Hanafi fiqh with integrated evidence, which became the basis of legal education and judicial practice across the Muslim world (including Anglo-Muhammadan law in British India).",
      majorWorks: j([{ title: "Al-Hidayah Sharh Bidayat al-Mubtadi", lang: "Arabic" }]),
    },
    {
      slug: "al-mawsili", nameEn: "Imam al-Mawsili", nameAr: "عبد الله بن محمود الموصلي", nameUr: "عبداللہ موصلی",
      deathYear: "683 AH / 1284 CE", era: "Classical", madhhab: "Hanafi", region: "Mosul", languages: "Arabic",
      classification: "CLASSICAL_HANAFI",
      biographyEn: "Author of Al-Ikhtiyar li-Ta'lil al-Mukhtar, an evidence-carrying expansion of Kanz al-Daqa'iq.",
      majorWorks: j([{ title: "Al-Ikhtiyar li-Ta'lil al-Mukhtar", lang: "Arabic" }]),
    },
    {
      slug: "al-nasafi", nameEn: "Imam al-Nasafi", nameAr: "أبو البركات النسفي", nameUr: "ابو البرکات نسفی",
      deathYear: "710 AH / 1310 CE", era: "Classical", madhhab: "Hanafi", aqeedahTradition: "MATURIDI",
      region: "Transoxiana", languages: "Arabic", classification: "CLASSICAL_HANAFI",
      biographyEn: "Abu al-Barakat 'Abdullah ibn Ahmad al-Nasafi, author of Kanz al-Daqa'iq (fiqh) and Kifayat al-Muttaliqin? rather he authored several works including the Maturidi creed 'Aqa'id al-Nasafi.",
      majorWorks: j([{ title: "Kanz al-Daqa'iq", lang: "Arabic" }, { title: "'Aqa'id al-Nasafi", lang: "Arabic" }]),
    },
    {
      slug: "ibn-al-humam", nameEn: "Ibn al-Humam", nameAr: "كمال الدين ابن الهمام", nameUr: "کمال الدین ابن الہمام",
      deathYear: "861 AH / 1457 CE", era: "Late classical", madhhab: "Hanafi", aqeedahTradition: "MATURIDI",
      region: "Cairo", languages: "Arabic", classification: "CLASSICAL_HANAFI",
      biographyEn: "Kamal al-Din Ibn al-Humam, author of Fath al-Qadir, a super-commentary on al-Hidayah, and Al-Musayarah on theology.",
      majorWorks: j([{ title: "Fath al-Qadir", lang: "Arabic" }]),
    },
    {
      slug: "al-shurunbulali", nameEn: "Imam al-Shurunbulali", nameAr: "مرعي بن يوسف الشربلالي (الشورنبُلالي)", nameUr: "شورنبلالی",
      deathYear: "1069 AH / 1659 CE", era: "Later classical", madhhab: "Hanafi", region: "Egypt", languages: "Arabic",
      classification: "LATER_HANAFI",
      biographyEn: "Author of Nur al-Idah wa Najat al-Nafas, the famous manual of purification and prayer, with his own commentary Maraqi al-Falah.",
      majorWorks: j([{ title: "Nur al-Idah", lang: "Arabic" }, { title: "Maraqi al-Falah", lang: "Arabic" }]),
    },
    {
      slug: "al-mahbubi", nameEn: "Ubaydullah ibn Mas'ud al-Mahbubi", nameAr: "عبيد الله بن مسعود المحنبي", nameUr: "عبیداللہ محبوبی",
      deathYear: "747 AH / 1346 CE", era: "Classical", madhhab: "Hanafi", region: "Transoxiana", languages: "Arabic",
      classification: "CLASSICAL_HANAFI",
      biographyEn: "Author of Sharh al-Wiqayah, the standard commentary on al-Wiqayah (a Persian textbook of Hanafi fiqh), widely taught in South Asian madrasas.",
      majorWorks: j([{ title: "Sharh al-Wiqayah", lang: "Arabic" }]),
    },
    {
      slug: "al-haskafi", nameEn: "Imam al-Haskafi", nameAr: "محمد بن علاء الدين الحصكفي", nameUr: "حصکفی",
      deathYear: "1088 AH / 1677 CE", era: "Later classical", madhhab: "Hanafi", region: "Damascus", languages: "Arabic",
      classification: "LATER_HANAFI",
      biographyEn: "Author of Al-Durr al-Mukhtar, the late canonical Hanafi text on which Ibn Abidin's Radd al-Muhtar is written.",
      majorWorks: j([{ title: "Al-Durr al-Mukhtar", lang: "Arabic" }]),
    },
    {
      slug: "mulla-ali-al-qari", nameEn: "Mulla Ali al-Qari", nameAr: "ملا علي القاري", nameUr: "ملا علی قاری",
      deathYear: "1014 AH / 1605 CE", era: "Later classical", madhhab: "Hanafi", aqeedahTradition: "MATURIDI",
      region: "Herat / Mecca", languages: "Arabic, Persian", classification: "LATER_HANAFI",
      biographyEn: "Prolific Hanafi polymath: hadith commentator (Umdat al-Qari on Bukhari), theologian, and author of works including Fath al-Bari? (no—Sharh al-Fiqh al-Akbar) and Mirqat al-Mafatih (on Mishkat al-Masabih).",
      majorWorks: j([{ title: "Umdat al-Qari", lang: "Arabic", note: "Commentary on Sahih al-Bukhari" }, { title: "Sharh al-Fiqh al-Akbar", lang: "Arabic" }, { title: "Mirqat al-Mafatih", lang: "Arabic" }]),
    },
    {
      slug: "ibn-abidin", nameEn: "Imam Ibn Abidin", nameAr: "محمد أمين بن عابدين", nameUr: "ابن عابدین شامی",
      title: "Muhammad Amin, 'Shami'", deathYear: "1252 AH / 1836 CE", era: "Late Ottoman", madhhab: "Hanafi",
      region: "Damascus", languages: "Arabic", classification: "LATER_HANAFI",
      biographyEn: "The final authoritative voice ('muhhaqqiq al-asr') of Hanafi fiqh. His Radd al-Muhtar 'ala al-Durr al-Mukhtar ('Hashiyat Ibn Abidin') gathers the accepted positions of the school and discusses differences among Hanafi jurists (e.g., his famous introduction distinguishing mufta bihi rulings).",
      majorWorks: j([{ title: "Radd al-Muhtar 'ala al-Durr al-Mukhtar", lang: "Arabic", note: "'Hashiyat Ibn Abidin'" }]),
    },
    {
      slug: "shah-waliullah", nameEn: "Shah Waliullah Dehlawi", nameAr: "شاه ولي الله الدهلوي", nameUr: "شاہ ولی اللہ دہلوی",
      deathYear: "1176 AH / 1762 CE", era: "Later South Asian", madhhab: "Hanafi", aqeedahTradition: "MATURIDI/ASH'ARI synthesis",
      region: "Delhi", languages: "Arabic, Persian", classification: "SOUTH_ASIAN_HANAFI",
      biographyEn: "A towering South Asian scholar who translated the Qur'an into Persian and sought to reconcile madhhab fiqh with hadith scholarship. His Hujjat Allah al-Baligha is a landmark of Islamic intellectual history. Both Deobandi and Barelvi traditions claim his legacy.",
      majorWorks: j([{ title: "Hujjat Allah al-Baligha", lang: "Arabic/Persian" }]),
    },
    {
      slug: "ahmad-raza-khan", nameEn: "Imam Ahmad Raza Khan", nameAr: "أحمد رضا خان البريلوي", nameUr: "احمد رضا خان بریلوی",
      title: "A'la Hazrat", birthYear: "1272 AH / 1856 CE", deathYear: "1340 AH / 1921 CE", era: "Later South Asian (19th–20th c.)",
      madhhab: "Hanafi", aqeedahTradition: "MATURIDI", region: "Bareilly, British India", languages: "Urdu, Arabic, Persian",
      classification: "BARELVI",
      biographyEn: "Founder of the Barelvi (Barevi) movement and one of the most prolific fatwa writers of late South Asian Sunni scholarship. His Al-Ataya al-Nabawiyya fi'l-Fatawa al-Razviyya (Fatawa Razvia), compiled over decades and running to about 30 volumes in Urdu, covers fiqh and aqeedah questions and defends practices such as mawlid, tawassul and istighatha. IMPORTANT CLASSIFICATION NOTE: Fatawa Razvia is a LATER (South Asian) Hanafi scholarly source — not an early classical work of the madhhab.",
      majorWorks: j([{ title: "Al-Ataya al-Nabawiyya fi'l-Fatawa al-Razviyya (Fatawa Razvia)", lang: "Urdu", note: "≈30 volumes; later South Asian Hanafi fatwa collection" }, { title: "Kifl al-Faqih al-Fahim", lang: "Arabic" }]),
    },
    {
      slug: "rashid-ahmad-gangohi", nameEn: "Rashid Ahmad Gangohi", nameUr: "رشید احمد گنگوہی", nameAr: "رشيد أحمد الكانكوهي",
      deathYear: "1323 AH / 1905 CE", era: "Later South Asian (19th c.)", madhhab: "Hanafi", aqeedahTradition: "MATURIDI",
      region: "Gangoh, British India", languages: "Urdu, Arabic", classification: "DEOBANDI",
      biographyEn: "A leading Deobandi Hanafi jurist and hadith scholar (Sahib al-Fatawa al-Rashidiyya). Co-founder of the Deobandi tradition; his fatwas represent the Deobandi reading of Hanafi fiqh, including stricter stances on practices like mawlid and tawassul than Barelvi scholars.",
      majorWorks: j([{ title: "Fatawa al-Rashidiyya", lang: "Urdu" }]),
    },
    {
      slug: "ashraf-ali-thanwi", nameEn: "Ashraf Ali Thanwi", nameUr: "اشرف علی تھانوی", nameAr: "أشرف علي التهانوي",
      title: "Hakim al-Ummat", deathYear: "1362 AH / 1943 CE", era: "Later South Asian (20th c.)", madhhab: "Hanafi",
      aqeedahTradition: "MATURIDI", region: "Thana Bhawan, British India", languages: "Urdu, Arabic", classification: "DEOBANDI",
      biographyEn: "Prolific Deobandi scholar of fiqh, hadith and tasawwuf; author of Bahishti Zewar and Imdad al-Fatawa.",
      majorWorks: j([{ title: "Bahishti Zewar", lang: "Urdu" }, { title: "Imdad al-Fatawa", lang: "Urdu" }]),
    },
    {
      slug: "imam-malik", nameEn: "Imam Malik ibn Anas", nameAr: "مالك بن أنس", nameUr: "امام مالک بن انس",
      deathYear: "179 AH / 795 CE", era: "Classical", madhhab: "Maliki (eponym)", region: "Medina", languages: "Arabic",
      classification: "OTHER_SUNNI", isHanafi: false,
      biographyEn: "Imam of Dar al-Hijra (Medina) and author of al-Muwatta, the earliest surviving compiled book of hadith and fiqh.",
      majorWorks: j([{ title: "Al-Muwatta", lang: "Arabic" }]),
    },
    {
      slug: "imam-shafii", nameEn: "Imam al-Shafi'i", nameAr: "الإمام الشافعي", nameUr: "امام شافعی",
      deathYear: "204 AH / 820 CE", era: "Classical", madhhab: "Shafi'i (eponym)", region: "Gaza / Egypt", languages: "Arabic",
      classification: "OTHER_SUNNI", isHanafi: false,
      biographyEn: "Founder of usul al-fiqh as a discipline through al-Risala; author of al-Umm. Studied with Imam Muhammad al-Shaybani.",
      majorWorks: j([{ title: "Al-Umm", lang: "Arabic" }, { title: "Al-Risala", lang: "Arabic" }]),
    },
    {
      slug: "imam-ahmad-ibn-hanbal", nameEn: "Imam Ahmad ibn Hanbal", nameAr: "أحمد بن حنبل", nameUr: "امام احمد بن حنبل",
      deathYear: "241 AH / 855 CE", era: "Classical", madhhab: "Hanbali (eponym)", region: "Baghdad", languages: "Arabic",
      classification: "OTHER_SUNNI", isHanafi: false,
      biographyEn: "Imam of Ahl al-Hadith in Baghdad, endured the Mihna; his Musnad is a major hadith collection.",
      majorWorks: j([{ title: "Al-Musnad", lang: "Arabic" }]),
    },
  ];

  const scholarMap: Record<string, string> = {};
  for (const s of scholars) {
    const rec = await prisma.scholar.create({ data: s });
    scholarMap[s.slug] = rec.id;
  }

  // ─────────────────────────── BOOKS ───────────────────────────
  const books = [
    { slug: "fiqh-al-akbar", titleEn: "Al-Fiqh al-Akbar", titleAr: "الفقه الأكبر", authorId: scholarMap["abu-hanifa"], era: "2nd century AH", school: "Hanafi", subject: "Aqeedah", language: "Arabic", classification: "AQEEDAH", coverColor: "amber",
      descriptionEn: "A concise creed attributed to Imam Abu Hanifa and widely memorized across the Sunni world. It states the essentials of belief, including knowledge of Allah's attributes, the Prophet's ﷺ rank, and matters of the unseen. Its attribution and exact wording are discussed academically; it is nonetheless a core text of Hanafi-Maturidi instruction." },
    { slug: "aqidah-tahawiyyah", titleEn: "Al-'Aqidah al-Tahawiyyah", titleAr: "العقيدة الطحاوية", authorId: scholarMap["al-tahawi"], era: "3rd century AH", school: "Hanafi", subject: "Aqeedah", language: "Arabic", classification: "AQEEDAH", coverColor: "amber",
      descriptionEn: "The most widely accepted concise statement of Sunni creed across all four madhhabs. Al-Tahawi's text is a key reference for Hanafi-Maturidi theology, articulating tawhid, the attributes, prophethood, and the unseen without polemic." },
    { slug: "mukhtasar-al-quduri", titleEn: "Mukhtasar al-Quduri", titleAr: "مختصر القدوري", authorId: scholarMap["al-quduri"], era: "5th century AH", school: "Hanafi", subject: "Fiqh", language: "Arabic", classification: "CLASSICAL_HANAFI", coverColor: "emerald",
      descriptionEn: "The first definitive summary of Hanafi law (Zahir al-Riwaya tradition), relied on for a millennium and the entry point of Hanafi legal study." },
    { slug: "al-hidayah", titleEn: "Al-Hidayah Sharh Bidayat al-Mubtadi", titleAr: "الهدية شرح بداية المبتدي", authorId: scholarMap["al-marghinani"], era: "6th century AH", school: "Hanafi", subject: "Fiqh", language: "Arabic", classification: "CLASSICAL_HANAFI", coverColor: "emerald",
      descriptionEn: "The most influential manual of Hanafi fiqh with integrated evidence; the basis of judicial practice from Ottoman courts to British India's Anglo-Muhammadan law." },
    { slug: "al-mabsut", titleEn: "Al-Mabsut", titleAr: "المبسوط", authorId: scholarMap["muhammad-al-shaybani"], era: "2nd–3rd century AH (as expanded later)", school: "Hanafi", subject: "Fiqh", language: "Arabic", classification: "CLASSICAL_HANAFI", coverColor: "emerald",
      descriptionEn: "The greatest explanatory corpus (Zahir al-Riwaya) of early Hanafi law in 30 volumes, with extensive reasoning and hadith discussion." },
    { slug: "badai-al-sanai", titleEn: "Bada'i' al-Sana'i'", titleAr: "بدائع الصنائع", authorId: scholarMap["al-kasani"], era: "6th century AH", school: "Hanafi", subject: "Fiqh", language: "Arabic", classification: "CLASSICAL_HANAFI", coverColor: "emerald",
      descriptionEn: "A 7-volume masterpiece organizing rulings around their legal causes ('ilal), celebrated for analytical precision." },
    { slug: "al-ikhtiyar", titleEn: "Al-Ikhtiyar li-Ta'lil al-Mukhtar", titleAr: "الاختيار لتعليل المختار", authorId: scholarMap["al-mawsili"], era: "7th century AH", school: "Hanafi", subject: "Fiqh", language: "Arabic", classification: "CLASSICAL_HANAFI", coverColor: "emerald",
      descriptionEn: "Evidence-carrying expansion of Kanz al-Daqa'iq; a standard bridge between abridged manuals and the school's reasoning." },
    { slug: "kanz-al-daqaiq", titleEn: "Kanz al-Daqa'iq", titleAr: "كنز الدقائق", authorId: scholarMap["al-nasafi"], era: "8th century AH", school: "Hanafi", subject: "Fiqh", language: "Arabic", classification: "CLASSICAL_HANAFI", coverColor: "emerald",
      descriptionEn: "A concise handbook (matn) of Hanafi fiqh widely memorized and commented upon." },
    { slug: "nur-al-idah", titleEn: "Nur al-Idah wa Najat al-Nafas", titleAr: "نور الإيضاح ونجاة النفوس", authorId: scholarMap["al-shurunbulali"], era: "11th century AH", school: "Hanafi", subject: "Fiqh (Taharah & Salah)", language: "Arabic", classification: "LATER_HANAFI", coverColor: "teal",
      descriptionEn: "The famous manual of purification and prayer; with Maraqi al-Falah it forms the standard beginner's text in many madrasas." },
    { slug: "sharh-al-wiqayah", titleEn: "Sharh al-Wiqayah", titleAr: "شرح الوقاية", authorId: scholarMap["al-mahbubi"], era: "8th century AH", school: "Hanafi", subject: "Fiqh", language: "Arabic", classification: "CLASSICAL_HANAFI", coverColor: "emerald",
      descriptionEn: "Standard Arabic commentary on al-Wiqayah (a Persian Hanafi textbook); core of the Dars-e-Nizami curriculum." },
    { slug: "al-durr-al-mukhtar", titleEn: "Al-Durr al-Mukhtar", titleAr: "الدر المختار", authorId: scholarMap["al-haskafi"], era: "11th century AH", school: "Hanafi", subject: "Fiqh", language: "Arabic", classification: "LATER_HANAFI", coverColor: "teal",
      descriptionEn: "Late canonical Hanafi text; the base text of Ibn Abidin's Radd al-Muhtar." },
    { slug: "radd-al-muhtar", titleEn: "Radd al-Muhtar 'ala al-Durr al-Mukhtar", titleAr: "رد المحتار على الدر المختار", authorId: scholarMap["ibn-abidin"], era: "13th century AH", school: "Hanafi", subject: "Fiqh (Fatwa reference)", language: "Arabic", classification: "LATER_HANAFI", coverColor: "teal",
      descriptionEn: "'Hashiyat Ibn Abidin' — the final word ('muhhaqqiq') of Hanafi fiqh, gathering accepted positions and analyzing internal differences of the school." },
    { slug: "fatawa-hindiyyah", titleEn: "Al-Fatawa al-Hindiyyah", titleAr: "الفاتاوى الهندية", altTitles: "Fatawa Alamgiri", authorId: null, era: "11th century AH (c. 1664–1672 CE)", school: "Hanafi", subject: "Fatwa collection", language: "Arabic", classification: "FATAWA_COLLECTION", coverColor: "stone",
      descriptionEn: "A monumental fatwa compendium compiled by a committee of ~40 Hanafi scholars commissioned by Emperor Aurangzeb 'Alamgir, based on earlier Hanafi fatwa literature." },
    { slug: "fatawa-razvia", titleEn: "Al-Ataya al-Nabawiyya fi'l-Fatawa al-Razviyya", titleAr: "العطايا النبوية في الفتاوى الرضوية", titleUr: "فتاویٰ رضویہ", altTitles: "Fatawa Razvia / Fatawa Razawiyyah / Fatawa Ridawiyyah", authorId: scholarMap["ahmad-raza-khan"], era: "14th century AH (early 20th c. CE)", school: "Hanafi", subject: "Fatwa collection", language: "Urdu", classification: "FATAWA_COLLECTION", coverColor: "rose",
      descriptionEn: "CLASSIFICATION — LATER SOUTH ASIAN HANAFI SCHOLARLY SOURCE. The collected fatwas of Imam Ahmad Raza Khan al-Qadiri (A'la Hazrat, 1856–1921 CE) of Bareilly, in roughly 30 volumes of Urdu. It is prominent for later South Asian Hanafi aqeedah discussions, fatwas and disputed issues (mawlid, tawassul, istighatha, 'ilm al-ghayb). It is NOT an early classical Hanafi work; positions found in it must not be presented as the unanimous doctrine of the entire madhhab. The platform records it with verification status and allows comparison with earlier jurists." },
    { slug: "umdat-al-qari", titleEn: "Umdat al-Qari Sharh Sahih al-Bukhari", titleAr: "عمدة القاري شرح صحيح البخاري", authorId: scholarMap["mulla-ali-al-qari"], era: "10th–11th century AH", school: "Hanafi", subject: "Hadith commentary", language: "Arabic", classification: "LATER_HANAFI", coverColor: "teal",
      descriptionEn: "A major Hanafi commentary on Sahih al-Bukhari, frequently cited for the Hanafi reading of hadith evidence in fiqh debates (e.g., raf' al-yadayn, amin)." },
    { slug: "hujjat-allah-al-baligha", titleEn: "Hujjat Allah al-Baligha", titleAr: "حجة الله البالغة", authorId: scholarMap["shah-waliullah"], era: "12th century AH", school: "Hanafi", subject: "Usul & intellectual history", language: "Arabic/Persian", classification: "SOUTH_ASIAN_HANAFI", coverColor: "stone",
      descriptionEn: "A landmark analysis of the wisdoms behind the Shari'ah and the dynamics of legal difference; claimed by both Deobandi and Barelvi traditions." },
  ];

  const bookMap: Record<string, string> = {};
  for (const b of books) {
    const rec = await prisma.book.create({ data: b });
    bookMap[b.slug] = rec.id;
  }

  // ─────────────────────────── QUR'AN ───────────────────────────
  const quran = [
    { surah: 2, surahNameEn: "Al-Baqarah", surahNameAr: "البقرة", ayah: 186, arabic: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ", translationEn: "And when My servants ask you concerning Me — indeed I am near. I respond to the call of the caller when he calls upon Me.", tags: ["tawassul", "du'a"] },
    { surah: 2, surahNameEn: "Al-Baqarah", surahNameAr: "البقرة", ayah: 286, arabic: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا", translationEn: "Allah does not burden a soul beyond its capacity.", tags: ["general"] },
    { surah: 4, surahNameEn: "Al-Nisa", surahNameAr: "النساء", ayah: 59, arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ وَأُولِي الْأَمْرِ مِنكُمْ", translationEn: "O you who believe, obey Allah and obey the Messenger and those in authority among you.", tags: ["taqlid", "ulil-amr"] },
    { surah: 4, surahNameEn: "Al-Nisa", surahNameAr: "النساء", ayah: 64, arabic: "وَلَوْ أَنَّهُمْ إِذ ظَّلَمُوا أَنفُسَهُمْ جَاءُوكَ فَاسْتَغْفَرُوا اللَّهَ وَاسْتَغْفَرَ لَهُمُ الرَّسُولُ لَوَجَدُوا اللَّهَ تَوَّابًا رَّحِيمًا", translationEn: "And if, when they wronged themselves, they had come to you and asked forgiveness of Allah, and the Messenger had asked forgiveness for them, they would have found Allah Accepting of repentance, Merciful.", tags: ["tawassul", "shafa'ah", "istighatha"] },
    { surah: 5, surahNameEn: "Al-Ma'idah", surahNameAr: "المائدة", ayah: 6, arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا قُمْتُمْ إِلَى الصَّلَاةِ فَاغْسِلُوا وُجُوهَكُمْ وَأَيْدِيَكُمْ إِلَى الْمَرَافِقِ...", translationEn: "O you who believe, when you rise to pray, wash your faces and your hands up to the elbows…", tags: ["wudu", "taharah"] },
    { surah: 5, surahNameEn: "Al-Ma'idah", surahNameAr: "المائدة", ayah: 35, arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَابْتَغُوا إِلَيْهِ الْوَسِيلَةَ وَجَاهِدُوا فِي سَبِيلِهِ لَعَلَّكُمْ تُفْلِحُونَ", translationEn: "O you who believe, be mindful of Allah and seek the means (wasilah) to Him, and strive in His path, so that you may succeed.", tags: ["tawassul", "wasilah"] },
    { surah: 9, surahNameEn: "Al-Tawbah", surahNameAr: "التوبة", ayah: 128, arabic: "لَقَدْ جَاءَكُمْ رَسُولٌ مِّنْ أَنفُسِكُمْ عَزِيزٌ عَلَيْهِ مَا عَنِتُّمْ حَرِيصٌ عَلَيْكُم بِالْمُؤْمِنِينَ رَءُوفٌ رَّحِيمٌ", translationEn: "There has come to you a Messenger from among yourselves; your suffering is grievous to him; he is deeply concerned for you, kind and merciful to the believers.", tags: ["respect-for-prophet", "shafa'ah"] },
    { surah: 10, surahNameEn: "Yunus", surahNameAr: "يونس", ayah: 106, arabic: "وَلَا تَدْعُ مِن دُونِ اللَّهِ مَا لَا يَنفَعُكَ وَلَا يَضُرُّكَ", translationEn: "And do not call upon, besides Allah, what can neither benefit you nor harm you.", tags: ["istighatha", "objections"] },
    { surah: 17, surahNameEn: "Al-Isra", surahNameAr: "الإسراء", ayah: 79, arabic: "وَعَسَىٰ أَن يَبْعَثَكَ رَبُّكَ مَقَامًا مَّحْمُودًا", translationEn: "And it may be that your Lord will raise you to a praised station (Maqam Mahmud).", tags: ["shafa'ah", "intercession"] },
    { surah: 21, surahNameEn: "Al-Anbiya", surahNameAr: "الأنبياء", ayah: 107, arabic: "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ", translationEn: "We have not sent you except as a mercy to all the worlds.", tags: ["respect-for-prophet"] },
    { surah: 33, surahNameEn: "Al-Ahzab", surahNameAr: "الأحزاب", ayah: 56, arabic: "إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ ۚ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا", translationEn: "Indeed, Allah and His angels send blessings upon the Prophet. O you who believe, send blessings upon him and greet him with peace.", tags: ["salawat", "mawlid"] },
    { surah: 35, surahNameEn: "Fatir", surahNameAr: "فاطر", ayah: 14, arabic: "وَالَّذِينَ تَدْعُونَ مِن دُونِهِ مَا يَمْلِكُونَ مِن قِطْمِيرٍ", translationEn: "Those you call upon besides Him do not possess even the membrane of a date-stone.", tags: ["istighatha", "objections"] },
    { surah: 39, surahNameEn: "Al-Zumar", surahNameAr: "الزمر", ayah: 3, arabic: "أَلَا لِلَّهِ الدِّينُ الْخَالِصُ ۚ وَالَّذِينَ اتَّخَذُوا مِن دُونِهِ أَوْلِيَاءَ مَا نَعْبُدُهُمْ إِلَّا لِيُقَرِّبُونَا إِلَى اللَّهِ زُلْفَىٰ", translationEn: "Unquestionably, pure religion is for Allah alone. Those who take protectors besides Him say, 'We worship them only to bring us nearer to Allah.'", tags: ["tawassul", "awliya", "objections"] },
    { surah: 53, surahNameEn: "Al-Najm", surahNameAr: "النجم", ayah: 3, arabic: "وَمَا يَنطِقُ عَنِ الْهَوَىٰ ۝ إِنْ هُوَ إِلَّا وَحْيٌ يُوحَىٰ", translationEn: "Nor does he speak from his own desire; it is only revelation revealed.", tags: ["prophethood"] },
    { surah: 72, surahNameEn: "Al-Jinn", surahNameAr: "الجن", ayah: 26, arabic: "عَالِمُ الْغَيْبِ فَلَا يُظْهِرُ عَلَىٰ غَيْبِهِ أَحَدًا ۝ إِلَّا مَنِ ارْتَضَىٰ مِن رَّسُولٍ", translationEn: "Knower of the unseen — He does not disclose His unseen to anyone, except to a messenger whom He approves.", tags: ["knowledge-of-unseen"] },
  ];
  for (const v of quran) {
    const { tags, ...rest } = v;
    await prisma.quranVerse.create({ data: { ...rest, topicTags: j(tags) } });
  }

  // ─────────────────────────── HADITH ───────────────────────────
  const hadiths = [
    { collection: "Sahih al-Bukhari", number: "1", book: "Bad' al-Wahy", chapter: "Intentions", arabic: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى", translationEn: "Actions are judged by intentions, and every person will have what they intended.", narrator: "'Umar ibn al-Khattab (ra)", grading: "SAHIH", verification: "VERIFIED",
      commentary: "Universal principle of the Shari'ah; cited across all madhhabs including in discussions of intention in salah and taqlid.", tags: ["usul", "intention"] },
    { collection: "Sahih al-Bukhari", number: "13", book: "Al-Iman", chapter: "Loving for one's brother", arabic: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ", translationEn: "None of you truly believes until he loves for his brother what he loves for himself.", narrator: "Anas ibn Malik (ra)", grading: "SAHIH", verification: "VERIFIED",
      commentary: "Foundation of brotherhood ethics — relevant to the platform's policy of respectful scholarly disagreement.", tags: ["ethics"] },
    { collection: "Sahih al-Bukhari", number: "631", book: "Al-Adhan", chapter: "Pray as you have seen me pray", arabic: "صَلُّوا كَمَا رَأَيْتُمُونِي أُصَلِّي", translationEn: "Pray as you have seen me praying.", narrator: "Malik ibn Huwayrith (ra)", grading: "SAHIH", verification: "VERIFIED",
      commentary: "Shared foundation of salah by all schools; they differ on which details this comprehensive instruction includes.", tags: ["salah-differences"] },
    { collection: "Sahih al-Bukhari", number: "780", book: "Al-Adhan", chapter: "Amin", arabic: "إِذَا أَمَّنَ الإِمَامُ فَأَمِّنُوا، فَإِنْ وَافَقَ تَأْمِينُ أَحَدِكُمْ تَأْمِينَ الْمَلاَئِكَةِ غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ", translationEn: "When the Imam says Amin, say Amin; for whoever's Amin coincides with that of the angels, his past sins are forgiven.", narrator: "Abu Hurayra (ra)", grading: "SAHIH", verification: "PARTIALLY_VERIFIED",
      commentary: "Core text for the Amin debate: Shafi'is read it as supporting audible Amin; Hanafis argue the command addresses followers (mamumin) whose Amin is distinct from the imam's audible Fatiha recitation — see Hanafi commentaries (e.g., al-Hidayah). Number commonly cited as 780; edition-dependent.", tags: ["salah-differences", "amin"] },
    { collection: "Sahih al-Bukhari", number: "2010", book: "Salat al-Tarawih", chapter: "'Umar's congregation", arabic: "نِعْمَ الْبِدْعَةُ هَذِهِ", translationEn: "'What an excellent innovation this is!' — said by 'Umar (ra) regarding the congregational Taraweeh.", narrator: "Abu Hurayra / 'Abd al-Rahman ibn 'Abd al-Qari (ra)", grading: "SAHIH", verification: "PARTIALLY_VERIFIED",
      commentary: "Frequently cited in bid'ah discussions; edition number 2010 commonly cited. The word bid'ah here is used linguistically (a new organizational form), not technically as an innovation in creed.", tags: ["bidah", "taraweeh"] },
    { collection: "Sahih Muslim", book: "Al-Masajid", chapter: "Description of the Prophet's prayer", arabic: "كَانَ النَّبِيُّ ﷺ يَرْفَعُ يَدَيْهِ حِينَ يَكْبَرُ لِلصَّلاَةِ ... ثُمَّ لاَ يَفْعَلُ ذَلِكَ فِيمَا بَعْدُ — وَفِي رِوَايَةٍ: كَانَ يَرْفَعُ يَدَيْهِ حِينَ يَكْبَرُ ثُمَّ لاَ يُعِيدُهَا", translationEn: "The Prophet ﷺ raised his hands at the opening takbir and did not repeat it afterwards (as reported in the description attributed to Bara' ibn 'Azib).", narrator: "Bara' ibn 'Azib (ra)", grading: "SAHIH", gradingDisputed: true, verification: "UNVERIFIED",
      commentary: "The Hanafi madhhab relies on this cluster of reports (raised hands only at takbir al-tahrimah) along with reports of the later prayer practice; Ahl-e-Hadith read the raising narrations as un-abrogated. The platform displays this disagreement rather than resolving it polemically. Number varies by edition — pending verification.", tags: ["salah-differences", "raf-al-yadayn"] },
    { collection: "Sunan Abi Dawud / Sunan al-Tirmidhi", book: "Salah", chapter: "Raf' al-yadayn", arabic: null, translationEn: "Reports describing raising the hands at ruku' and rising from it, transmitted in the collections with chains discussed by jurists of both sides.", narrator: "Multiple", grading: "DISPUTED", gradingDisputed: true, verification: "UNVERIFIED",
      commentary: "Hadith-number pending verification; the juristic dispute concerns reconciliation with reports of later practice, not authenticity per se. See al-Hidayah, Radd al-Muhtar and Hanafi hadith commentaries.", tags: ["salah-differences", "raf-al-yadayn"] },
    { collection: "Sunan al-Tirmidhi", book: "Salah", chapter: "Silence of the follower", arabic: null, translationEn: "Reports indicating the follower remains silent while the imam recites (e.g., narration of Jabir and of 'Ubada ibn al-Samit in other collections); Tirmidhi's numbering varies by edition.", narrator: "Jabir (ra)", grading: "DISPUTED", gradingDisputed: true, verification: "UNVERIFIED",
      commentary: "Core evidence cluster for the Hanafi position that the follower does not recite al-Fatiha behind the imam; the opposite camp reads al-Sab' al-Mathani hadiths as applying always. Disagreement displayed, not resolved.", tags: ["salah-differences", "qiraah"] },
    { collection: "Sahih al-Bukhari", number: null, book: "Al-I'tisam", chapter: "Bid'ah", arabic: "وَكُلَّ بِدْعَةٍ ضَلاَلَةٌ — وَالتَّحْرِيشُ عَلَى مَعْنَى الْمُحْدَثَاتِ الْمُرَدَّةَ", translationEn: "'…and every innovation (bid'ah) is misguidance' — with the juristic understanding that the term is defined technically by the scholars.", narrator: "al-'Irbad ibn Sariya (ra)", grading: "SAHIH", verification: "PARTIALLY_VERIFIED",
      commentary: "The khutbah of al-'Irbad. Hanafi usul distinguishes linguistic and technical usage; Ibn Abidin's famous discussion of bid'ah hasanah (types of beneficial innovation) is grounded in reconciling such texts.", tags: ["bidah", "mawlid"] },
    { collection: "Sunan al-Nasa'i / Musnad Ahmad", book: null, chapter: "Du'a after salah", arabic: null, translationEn: "Reports of companions making du'a to Allah through the Prophet's ﷺ status or through righteous deeds (e.g., Adam's tawassul report in al-Tabarani — authenticity debated) and the blind man's tawassul in al-Tirmidhi (hasan) after the Prophet ﷺ passed away.", narrator: "Uthman ibn Hunayf (ra)", grading: "HASAN", gradingDisputed: true, verification: "UNVERIFIED",
      commentary: "The Tirmidhi hadith of the blind man (calling on Allah by the Prophet's ﷺ station) is central to tawassul debates: Barelvi-Hanafi scholars extend it beyond the Prophet's lifetime; Deobandi/Ahl-e-Hadith scholars restrict it. Numbers pending verification — deliberately not fabricated.", tags: ["tawassul", "istighatha"] },
  ];
  const hadithMap: Record<string, string> = {};
  for (const h of hadiths) {
    const { tags, verification, ...rest } = h;
    const rec = await prisma.hadith.create({
      data: { ...rest, topicTags: j(tags), gradingNotes: verification === "UNVERIFIED" ? "Number/edition pending verification — recorded honestly rather than fabricated." : null },
    });
    hadithMap[`${h.collection}-${h.number ?? "x"}`] = rec.id;
  }

  // ─────────────────────────── CATEGORIES & TOPICS ───────────────────────────
  const catAqeedah = await prisma.category.create({
    data: {
      slug: "aqeedah", nameEn: "Aqeedah", nameUr: "عقیدہ", nameAr: "العقيدة", type: "AQEEDAH", icon: "BookOpen",
      descriptionEn: "Sunni creed as held within Hanafi-Maturidi scholarship, with careful attention to what is consensus, what is dominant, and what is debated.",
      order: 1,
      topics: {
        create: [
          { slug: "tawheed", titleEn: "Tawheed", titleUr: "توحید", titleAr: "التوحيد", arabicTerm: "التوحيد", summaryEn: "The absolute oneness of Allah in essence, attributes and worship — the foundation of all aqeedah discussions.", order: 1 },
          { slug: "names-attributes", titleEn: "Allah's Names & Attributes", titleUr: "اسماء و صفات الٰہی", titleAr: "الأسماء والصفات", arabicTerm: "الأسماء والصفات", summaryEn: "How Maturidi (and Ash'ari) theology affirms attributes without likening Allah to creation (tanzih) or negating meaning (ta'til).", order: 2 },
          { slug: "prophethood", titleEn: "Prophethood", titleUr: "رسالت", titleAr: "النبوة", arabicTerm: "النبوة", summaryEn: "The necessity, truth and protection (ismah) of prophets; the finality of prophethood (khatm al-nubuwwah) with Muhammad ﷺ.", order: 3 },
          { slug: "knowledge-of-unseen", titleEn: "Knowledge of the Unseen", titleUr: "علم الغیب", titleAr: "علم الغيب", arabicTerm: "علم الغيب", isContested: true, summaryEn: "Divine knowledge is exclusive to Allah; bestowed ('ata'i) knowledge granted to messengers and saints is real but dependent. The extent given to the Prophet ﷺ is a famously disputed question between Barelvi and Deobandi scholars — treated with sources on both sides.", order: 4 },
          { slug: "shafaah", titleEn: "Shafa'ah (Intercession)", titleUr: "شفاعت", titleAr: "الشفاعة", arabicTerm: "الشفاعة", summaryEn: "The Maqam Mahmud, the great intercession, and intercession for the believing sinners — affirmed by mainstream Sunni scholarship from Qur'an and hadith.", order: 5 },
          { slug: "tawassul", titleEn: "Tawassul", titleUr: "توسل", titleAr: "التوسل", arabicTerm: "التوسل", isContested: true, summaryEn: "Seeking means to Allah: through His names, righteous deeds, or the Prophet's ﷺ status. Mainstream Hanafi-Maturidi scholars permit tawassul bi'l-nabi; others restrict it. Both positions documented with sources.", order: 6 },
          { slug: "istighatha", titleEn: "Istighatha", titleUr: "استغاثہ", titleAr: "الاستغاثة", arabicTerm: "الاستغاثة", isContested: true, summaryEn: "Calling upon the Prophet ﷺ or saints ('Ya Rasulallah'). Distinguished by classical scholars into levels (nearness-seekers vs. belief in independent power). Takfir is never issued from this platform over disputed istighatha formulations.", order: 7 },
          { slug: "awliya", titleEn: "Awliya & Karamat", titleUr: "اولیاء و کرامات", titleAr: "الأولياء والكرامات", arabicTerm: "الأولياء", summaryEn: "Friends of Allah and their miracles (karamat) — affirmed in Sunni creed (cf. 'Aqidah Tahawiyyah), including explanations of the grave-visit etiquette (ziyarah).", order: 8 },
          { slug: "barzakh", titleEn: "Barzakh & Life of the Grave", titleUr: "برزخ", titleAr: "البرزخ", arabicTerm: "البرزخ", summaryEn: "The intermediate realm; life of the dead (including prophets) in the grave — affirmed in mainstream Hanafi texts with careful framing.", order: 9 },
          { slug: "mawlid", titleEn: "Mawlid & Celebrations", titleUr: "عید میلاد", titleAr: "المولد النبوي", arabicTerm: "المولد", isContested: true, summaryEn: "Commemorating the Prophet's ﷺ birth: a famous intra-Hanafi dispute — Ibn Abidin's treatment of bid'ah hasanah, al-Suyuti's Husn al-Maqsid (Shafi'i), and opposing Deobandi/Ahl-e-Hadith positions, all displayed neutrally.", order: 10 },
          { slug: "bidah", titleEn: "Bid'ah (Innovation)", titleUr: "بدعت", titleAr: "البدعة", arabicTerm: "البدعة", isContested: true, summaryEn: "Definition, types (hasanah/sayyi'ah discussion), Ibn Abidin's analysis, and why blanket 'all new things are prohibited' is not the classical Hanafi formulation.", order: 11 },
          { slug: "angels-qadr-hereafter", titleEn: "Angels, Qadr & the Hereafter", titleUr: "فرشتے، تقدیر و آخرت", titleAr: "الملائكة والقدر والآخرة", arabicTerm: "الآخرة", summaryEn: "The six articles: angels, books, messengers, qadr, resurrection and judgment — as in 'Aqidah Tahawiyyah.", order: 12 },
        ],
      },
    },
  });

  const catFiqh = await prisma.category.create({
    data: {
      slug: "fiqh", nameEn: "Hanafi Fiqh", nameUr: "حنفی فقہ", nameAr: "الفقه الحنفي", type: "FIQH", icon: "Scale",
      descriptionEn: "Comprehensive Hanafi legal categories with the school's evidence and internal hierarchy (Zahir al-Riwaya → mutun → shuruh → fatwa works).",
      order: 2,
      topics: {
        create: [
          { slug: "taharah", titleEn: "Taharah (Purification)", titleUr: "طہارت", titleAr: "الطهارة", arabicTerm: "الطهارة", summaryEn: "Water types, wudu, ghusl, tayammum, rulings on blood, najasah — per al-Hidayah, Nur al-Idah and later works.", order: 1 },
          { slug: "salah", titleEn: "Salah", titleUr: "نماز", titleAr: "الصلاة", arabicTerm: "الصلاة", summaryEn: "Conditions, integrals, sunnahs, makruhat, sahw — with the school's evidential reasoning (see also Salah Differences).", order: 2 },
          { slug: "zakat", titleEn: "Zakah", titleUr: "زکوٰۃ", titleAr: "الزكاة", arabicTerm: "الزكاة", summaryEn: "Nisab, zakatable wealth, recipients — Hanafi specifics (e.g., gold/silver Ornaments, trade goods).", order: 3 },
          { slug: "sawm-hajj", titleEn: "Sawm & Hajj", titleUr: "روزہ و حج", titleAr: "الصوم والحج", arabicTerm: "الصوم", summaryEn: "Fasting, i'tikaf, Hajj and 'Umrah rulings with Hanafi particulars.", order: 4 },
          { slug: "nikah-talaq", titleEn: "Nikah & Talaq", titleUr: "نکاح و طلاق", titleAr: "النكاح والطلاق", arabicTerm: "النكاح", summaryEn: "Marriage, dower, divorce — including the sensitive three-talaq question where the Hanafi position (three in one sitting = three, though 'bid'i'/irregular) is often misreported. Personal legal matters require a qualified mufti.", order: 5 },
          { slug: "muamalat", titleEn: "Business & Finance", titleUr: "معاملات", titleAr: "المعاملات", arabicTerm: "المعاملات", summaryEn: "Contracts, riba, waqf, inheritance (faraid) — foundations from al-Hidayah and Bada'i'.", order: 6 },
          { slug: "food-dress", titleEn: "Food & Dress", titleUr: "طعام و لباس", titleAr: "الطعام واللباس", arabicTerm: "الأطعمة", summaryEn: "Halal/haram foods, slaughter (dhabh), dress guidelines.", order: 7 },
        ],
      },
    },
  });

  const catSalah = await prisma.category.create({
    data: {
      slug: "salah-differences", nameEn: "Salah Differences", nameUr: "نماز کے اختلافات", nameAr: "اختلافات الصلاة", type: "SALAH_DIFFERENCES", icon: "GitCompare",
      descriptionEn: "Dedicated research topics for matters debated between the madhhabs — presented with each side's evidence and reasoning, never as 'one side has hadith and the other does not'.",
      order: 3,
      topics: {
        create: [
          { slug: "raf-al-yadayn", titleEn: "Raf' al-Yadayn (Raising Hands)", titleUr: "رفع یدين", titleAr: "رفع اليدين", arabicTerm: "رفع اليدين", isContested: true, summaryEn: "Raising hands before ruku' and rising: Bukhari's raising reports vs. Hanafi reconciliation via the later-practice reports and their usul of tarjih.", order: 1 },
          { slug: "ameen", titleEn: "Ameen — Aloud or Quietly", titleUr: "آمین بلند آواز سے", titleAr: "الأمين جهرًا أو سرًّا", arabicTerm: "الأمين", isContested: true, summaryEn: "Audible vs. silent Amin: the shared hadith evidence and the divergent juristic readings.", order: 2 },
          { slug: "qiraah-behind-imam", titleEn: "Recitation Behind the Imam", titleUr: "امام کے پیچھے تلاوت", titleAr: "القراءة خلف الإمام", arabicTerm: "القراءة خلف الإمام", isContested: true, summaryEn: "Whether the follower recites al-Fatiha: the al-Sab' al-Mathani hadiths vs. 'silence behind the imam' reports.", order: 3 },
          { slug: "hands-position", titleEn: "Position & Folding of Hands", titleUr: "ہاتھ باندھنے کا طریقہ", titleAr: "وضع اليدين", arabicTerm: "وضع اليدين", isContested: true, summaryEn: "Below the navel (Hanafi) vs. on the chest: the narrations cited on each side and the polemical myths around this issue.", order: 4 },
          { slug: "witr", titleEn: "Witr — Wajib or Sunnah", titleUr: "وتر واجب یا سنت", titleAr: "الوتر", arabicTerm: "الوتر", isContested: true, summaryEn: "The Hanafi wajib category explained; why witr's status differs between the schools.", order: 5 },
          { slug: "taraweeh", titleEn: "Taraweeh — 8 or 20 Rak'ah", titleUr: "تراویہ ۸ یا ۲۰", titleAr: "التراويح", arabicTerm: "التراويح", isContested: true, summaryEn: "The number of Taraweeh rak'ahs: 'Umar's congregation, Salaf reports, and the scholarly consensus-to-differ spectrum.", order: 6 },
          { slug: "qunut", titleEn: "Qunut in Fajr", titleUr: "قنوت فجر", titleAr: "قنوت الفجر", arabicTerm: "القنوت", isContested: true, summaryEn: "Witr qunut (agreed) vs. Fajr qunut (Hanafi keeps, Shafi'i restricts to witr).", order: 7 },
          { slug: "sajdah-sahw", titleEn: "Sajdah al-Sahw", titleUr: "سجدہ سہو", titleAr: "سجود السهو", arabicTerm: "سجود السهو", summaryEn: "Prostration of forgetfulness: near-consensus with different triggers and placements.", order: 8 },
        ],
      },
    },
  });

  const catMadhhab = await prisma.category.create({
    data: {
      slug: "taqlid-madhahib", nameEn: "Taqlid & Madhahib", nameUr: "تقلید و مذاہب", nameAr: "التقليد والمذاهب", type: "TAQLID_MADHHAB", icon: "Landmark",
      descriptionEn: "What taqlid means, why madhhabs formed, the science of usul al-fiqh, and a neutral map of the four madhhabs plus Ahl-e-Hadith methodology.",
      order: 4,
      topics: {
        create: [
          { slug: "what-is-taqlid", titleEn: "What is Taqlid?", titleUr: "تقلید کیا ہے؟", titleAr: "التقليد", arabicTerm: "التقليد", isContested: true, summaryEn: "Taqlid vs. ittiba' vs. blind-following; the classical framework (mujtahid → muqallid) and its Qur'anic basis (ulil-amr).", order: 1 },
          { slug: "what-is-madhhab", titleEn: "What is a Madhhab?", titleUr: "مذہب کیا ہے؟", titleAr: "المذهب", arabicTerm: "المذهب", summaryEn: "A school's methodological identity — not a sect; the madhhabs coexisted within one Sunni ummah.", order: 2 },
          { slug: "usul-al-fiqh", titleEn: "Usul al-Fiqh", titleUr: "اصول فقہ", titleAr: "أصول الفقه", arabicTerm: "أصول الفقه", summaryEn: "Qur'an, Sunnah, ijma', qiyas, istihsan, 'urf, and how Hanafi usul differs (e.g., hadith mu'mal, istishab).", order: 3 },
          { slug: "why-scholars-differ", titleEn: "Why Scholars Differ", titleUr: "اختلاف علما کے اسباب", titleAr: "أسباب اختلاف الفقهاء", arabicTerm: "الاختلاف", summaryEn: "Ikhtilaf causes: conflicting reports, abrogation questions, language, qiyas methods — 'the difference of my ummah is a mercy' discussions.", order: 4 },
          { slug: "four-madhahib", titleEn: "The Four Madhhabs & Ahl-e-Hadith", titleUr: "چار مذاہب و اہل حدیث", titleAr: "المذاهب الأربعة", arabicTerm: "المذاهب", summaryEn: "Methodologies of Hanafi, Shafi'i, Maliki, Hanbali and the Ahl-e-Hadith/Salafi approach — compared respectfully.", order: 5 },
        ],
      },
    },
  });

  const topicMap: Record<string, string> = {};
  const cats = await prisma.category.findMany({ include: { topics: true } });
  for (const c of cats) for (const t of c.topics) topicMap[t.slug] = t.id;

  // ─────────────────────────── MISCONCEPTIONS ───────────────────────────
  const misconceptions = [
    {
      slug: "hanafis-dont-follow-hadith", claim: "Hanafis do not follow hadith — their fiqh contradicts the Sunnah.",
      claimUr: "حنفی حدیث پر عمل نہیں کرتے، ان کا فقہ سنت کے خلاف ہے۔",
      sourceOfClaim: "Common in Ahl-e-Hadith / Salafi polemical literature and online debates.",
      verificationStatus: "INCORRECTLY_ATTRIBUTED",
      actualPosition: "Hanafi fiqh claims derivation from the Qur'an, Sunnah, ijma' and qiyas. The early school produced hadith corpora (Kitab al-Athar; the Muwatta transmission of Imam Muhammad) and its jurists wrote hadith commentaries (Mulla Ali al-Qari's Umdat al-Qari; al-Tahawi's Sharh Ma'ani al-Athar). Disagreement is in evaluation/reconciliation methodology, not in following hadith.",
      primaryEvidence: j([{ ref: "al-Tahawi, Sharh Ma'ani al-Athar", quote: "The book reconciles apparently conflicting athar and explains the Hanafi reasoning.", translation: null }]),
      classicalEvidence: j([{ ref: "al-Sarakhsi, al-Mabsut", quote: "Extensive hadith citation and reasoning throughout the Zahir al-Riwaya commentary.", translation: null }]),
      laterEvidence: j([{ ref: "Mulla Ali al-Qari, Umdat al-Qari", quote: "A Hanafi's full commentary on Sahih al-Bukhari.", translation: null }]),
      counterargument: "Some argue Hanafis occasionally oppose sahih hadith through qiyas (e.g., certain wudu/salah details).",
      scholarlyResponse: "Hanafi jurists respond that their positions rest on other hadiths, ijma', or reconciliation (jam') of evidence — e.g., in raf' al-yadayn they cite the 'no raising after the opening takbir' report cluster. Whether one finds the tarjih persuasive is a methodological judgment; 'rejecting hadith' misdescribes it.",
      disagreements: "Evaluation of specific tarjih decisions differs between Hanafi and hadith-first scholars.",
      conclusion: "The claim as stated is false. The precise criticism — that some Hanafi tarjih preferences are debatable — is a legitimate methodological discussion, treated elsewhere on this platform.",
      topicId: topicMap["what-is-taqlid"], featured: true,
    },
    {
      slug: "folded-hands-fire-worshippers", claim: "Hanafis fold their hands below the navel because they imitate fire-worshippers (Zoroastrians).",
      claimUr: "حنفی ناف کے نیچے ہاتھ باندھتے ہیں کیونکہ وہ آتش پرستوں کی نقل کرتے ہیں۔",
      sourceOfClaim: "Circulating polemical claim in online debates; no classical source produced by its claimants.",
      verificationStatus: "UNSUPPORTED",
      actualPosition: "Placing hands below the navel (or on the chest, per other Hanafi reports) is based on narrations and the school's isnad/rational evaluation. No Hanafi usul work derives the ruling from Zoroastrian practice. The 'fire-worshipper' argument is a modern polemical invention with no documentation in the madhhab's literature.",
      primaryEvidence: j([{ ref: "Hanafi fiqh manuals (al-Hidayah, Nur al-Idah)", quote: "The ruling is stated under the fiqh of qiyam with the school's narrational basis.", translation: null }]),
      classicalEvidence: j([{ ref: "al-Hidayah, Kitab al-Salah", quote: null, translation: null }]),
      counterargument: "Some claim reports of hands-below-navel are weak.",
      scholarlyResponse: "Hadith graders differ on individual reports; Hanafi scholars hold the cluster + practice of the salaf supports it. Even if one disagreed, the derivation-basis claim (Zoroastrianism) remains unsupported by any source.",
      disagreements: "Hadith grading of the specific placing reports differs between scholars.",
      conclusion: "Claim unsupported and polemical; the underlying fiqh dispute (placement height) is a legitimate difference documented in the Comparison Engine.",
      topicId: topicMap["hands-position"], featured: true,
    },
    {
      slug: "raf-al-yadayn-bukhari", claim: "Hanafis reject Bukhari because they do not raise their hands before every ruku'.",
      claimUr: "حنفی ہر رکوع سے پہلے ہاتھ نہیں اٹھاتے، اس لیے وہ بخاری کو مسترد کرتے ہیں۔",
      sourceOfClaim: "Common reformist/Ahl-e-Hadith polemic.",
      verificationStatus: "MISLEADING",
      actualPosition: "Hanafi scholars accept Sahih al-Bukhari's authority. Their position: the raising narrations describe the Prophet's ﷺ earlier practice; reports and companions' observation of the later regular practice indicate he stopped raising hands except at takbir al-tahrimah — an argument of naskh (abrogation) or preference of 'later practice' reports. Bukhari himself records narrations of companions describing the prayer without repeated raising.",
      primaryEvidence: j([{ ref: "Sahih Muslim, Kitab al-Masajid (Bara' ibn 'Azib description)", quote: "He raised his hands at the opening takbir and did not repeat it afterwards.", translation: "As recorded in the description cluster" }]),
      classicalEvidence: j([{ ref: "al-Marghinani, al-Hidayah", quote: "The Hanafi discussion reconciling the raising reports with later practice.", translation: null }]),
      laterEvidence: j([{ ref: "Ibn Abidin, Radd al-Muhtar; Mulla Ali al-Qari, Umdat al-Qari", quote: "Detailed reconciliation of the hadith evidence.", translation: null }]),
      counterargument: "Hadith scholars of other schools argue the raising narrations are numerous and mutawatir-type in meaning, with no authentic abrogation.",
      scholarlyResponse: "This is the actual dispute: how to weigh mutually indicated bodies of evidence. Honest presentation shows both sides' usul. The platform does not score a winner (Comparison Engine policy).",
      disagreements: "Whether 'later practice' reports can abrogate Bukhari's raising reports.",
      conclusion: "Claim misleading: rejection of Bukhari is not the Hanafi position; a methodology disagreement exists and is documented.",
      topicId: topicMap["raf-al-yadayn"], featured: true,
    },
    {
      slug: "witr-wajib-third-category", claim: "Calling Witr 'wajib' proves Hanafis invented a third ruling category between fard and sunnah without basis.",
      claimUr: "وتر کو واجب کہنا ثابت کرتا ہے کہ حنفیوں نے فرض اور سنت کے درمیان ایک نیا درجہ گھڑ لیا۔",
      sourceOfClaim: "Online apologetics debates.",
      verificationStatus: "MISLEADING",
      actualPosition: "The wajib category is a defined usul concept in Hanafi methodology: a ruling whose obligating evidence is definitive in meaning but not definitive in transmission (akhbar wahid zahir al-dalalah), or similar. It is not an invention: Abu Yusuf, al-Shaybani and the entire school operate it systematically, and some Shafi'i-era discussions acknowledge graded obligation vocabulary.",
      primaryEvidence: j([{ ref: "al-Sarakhsi, Usul al-Fiqh; al-Hidayah", quote: "Definitions of fard and wajib.", translation: null }]),
      counterargument: "Other schools define obligation differently and see the split as unnecessary.",
      scholarlyResponse: "It is a terminological/usul difference, not a textual contradiction. Practically, a Hanafi prays witr as strictly as a fard-level duty; the label difference changes almost nothing in worship.",
      disagreements: "Terminology of obligation levels.",
      conclusion: "Misleading framing; the wajib category is a documented Hanafi usul construct with textual grounding arguments.",
      topicId: topicMap["witr"],
    },
    {
      slug: "all-hanafis-are-barelvi", claim: "All Hanafis are Barelvis (or: all South Asian Hanafis are Deobandis).",
      claimUr: "تمام حنفی بریلوی ہیں (یا: تمام دہلیزی حنفی دیوبندی ہیں)۔",
      sourceOfClaim: "Sectarian rhetoric from multiple directions.",
      verificationStatus: "INCORRECTLY_ATTRIBUTED",
      actualPosition: "Hanafi fiqh spans 13 centuries across Arab, Turkish, Balkan, Central Asian and South Asian lands. Barelvi and Deobandi are 19th-century South Asian revival movements within the Hanafi milieu, differing on aqeedah formulations and popular practices. The overwhelming majority of the world's Hanafis are neither label.",
      primaryEvidence: j([{ ref: "Historical geography of the madhhab", quote: "Ottoman, Mughal, Transoxanian madhhab continuity predates both movements by centuries.", translation: null }]),
      counterargument: null,
      scholarlyResponse: "This platform classifies Fatawa Razvia (Barelvi) and Fatawa al-Rashidiyya (Deobandi) as LATER SOUTH ASIAN HANAFI SOURCES — never as the madhhab itself.",
      disagreements: "Intra-South-Asian aqeedah debates (e.g., 'ilm al-ghayb, istighatha) are real but specific.",
      conclusion: "Universal 'all X believe' claims are rejected platform-wide unless genuinely establishable.",
      topicId: topicMap["what-is-taqlid"],
    },
    {
      slug: "tawassul-is-shirk", claim: "Tawassul through the Prophet ﷺ is shirk by clear texts — no scholar disagrees.",
      claimUr: "رسول اللہ ﷺ کے وسیلے سے توسل شرک ہے، اس پر کوئی اختلاف نہیں۔",
      sourceOfClaim: "Neo-Salafi literature; also overstated counter-claims exist.",
      verificationStatus: "DISPUTED",
      actualPosition: "This is a genuinely disputed issue that must be presented with both sides. Mainstream Hanafi-Maturidi (and much classical Sunni) scholarship permitted tawassul through the Prophet's ﷺ status (bi-jahihi) after his passing — e.g., discussions in Hanafi fatwa works. Other Sunni scholars (Deobandi, Ahl-e-Hadith, many Salafis) permit tawassul through his du'a during his lifetime or through good deeds, but not through his person/status. Neither camp consists of people who worship other than Allah; accusations of shirk from either side are contested theological judgments.",
      primaryEvidence: j([{ ref: "Qur'an 5:35", quote: "وَابْتَغُوا إِلَيْهِ الْوَسِيلَةَ — seek the means to Him", translation: "Affirms the concept of wasilah for both camps; they differ on its channels." }]),
      classicalEvidence: j([{ ref: "Tirmidhi's blind-man report; al-Tabarani's Adam report", quote: "Cited by both sides with competing authenticity readings.", translation: null }]),
      laterEvidence: j([{ ref: "Fatawa Razvia vs. Fatawa al-Rashidiyya", quote: "The two later South Asian fatwa corpora take opposing stances.", translation: null }]),
      counterargument: "Qur'an 35:14 and 10:106 are read by the opposing camp as prohibiting any call through created beings.",
      scholarlyResponse: "Hanafi-Maturidi scholars distinguish seeking a means through a living intercessor's status vs. believing a created being independently benefits — only the latter would be problematic. The opposing camp rejects the extension as introducing intermediaries. Displaying this disagreement with sources is the platform's policy; takfir is never issued here.",
      disagreements: "Scope of permitted tawassul; authenticity readings of supporting reports.",
      conclusion: "A disputed aqeedah-adjacent issue. The blanket shirk claim (in either direction) is itself disputed; sources for both sides are provided.",
      topicId: topicMap["tawassul"], featured: true,
    },
    {
      slug: "prophet-ilm-al-ghayb-like-allah", claim: "Hanafis believe the Prophet ﷺ knows everything of the unseen exactly like Allah.",
      claimUr: "حنفی مانتے ہیں کہ رسول اللہ ﷺ کو الغیب کا علم اللہ کی طرح مکمل ہے۔",
      sourceOfClaim: "Anti-Barelvi polemic; conversely some overreach exists in popular Barelvi phrasing.",
      verificationStatus: "DISPUTED",
      actualPosition: "Mainstream Hanafi-Maturidi creed affirms: (1) exclusive, independent, total knowledge of the unseen belongs to Allah alone (Qur'an 72:26-27); (2) Allah grants bestowed ('ata'i) knowledge of unseen matters to messengers and saints. Within South Asian Hanafism, Barelvi scholars affirm a vast (but still bestowed) scope for the Prophet ﷺ; Deobandi scholars insisted the scope is not total (allama al-ghayb) and that affirming totality is error. The dispute is about the extent of bestowed knowledge — both camps reject equality with Allah.",
      primaryEvidence: j([{ ref: "Qur'an 72:26-27", quote: "Knower of the unseen — He does not disclose His unseen to anyone, except an approved messenger.", translation: "Text both camps use: exclusivity with divine delegation." }]),
      classicalEvidence: j([{ ref: "'Aqidah Tahawiyyah", quote: "The creed affirms the Prophet's ﷺ God-given excellences without equating him with Allah.", translation: null }]),
      laterEvidence: j([{ ref: "Fatawa Razvia vs. Deobandi 'ilm al-ghayb fatwas", quote: "Opposing formulations documented.", translation: null }]),
      counterargument: "Deobandi literature argues Barelvi phrasing collapses into equality; Barelvi literature argues the Deobandi bar lowers the Prophet's ﷺ granted rank.",
      scholarlyResponse: "Platform policy: present the spectrum, classify phrases carefully (maqam vs. mabhath), never issue takfir over this dispute.",
      disagreements: "Extent of bestowed knowledge ('ata'i 'ilm).",
      conclusion: "The 'exactly like Allah' claim is rejected by both camps; the real dispute is about the extent — documented from both literatures.",
      topicId: topicMap["knowledge-of-unseen"],
    },
    {
      slug: "mawlid-all-hanafi-scholars-prohibit", claim: "Mawlid is bid'ah — all classical Hanafi scholars prohibited it.",
      claimUr: "میلاد بدعت ہے، تمام قدیم حنفی علما نے اسے ناجائز قرار دیا۔",
      sourceOfClaim: "Deobandi / Ahl-e-Hadith polemic.",
      verificationStatus: "DISPUTED",
      actualPosition: "Hanafi scholars differ, historically and today. Ibn Abidin (Radd al-Muhtar) discusses mawlid gatherings under his treatment of bid'ah hasanah, citing earlier support; many Ottoman and South Asian Hanafi authorities permitted or encouraged it; Deobandi jurists (e.g., Gangohi, Thanwi) prohibited specific forms. A blanket 'all Hanafi scholars prohibited' claim is factually wrong; so is 'all Hanafi scholars permitted'.",
      primaryEvidence: j([{ ref: "Ibn Abidin, Radd al-Muhtar (discussion of bid'ah hasanah incl. mawlid)", quote: "Categories of praised innovations discussed with examples.", translation: null }]),
      classicalEvidence: j([{ ref: "Bukhari 2010 ('Umar's Taraweeh congregation)", quote: "نِعْمَ الْبِدْعَةُ هَذِهِ — the linguistic use of bid'ah for new beneficial forms.", translation: "What an excellent innovation this is." }]),
      laterEvidence: j([{ ref: "Fatawa Razvia (pro-mawlid) vs. Fatawa al-Rashidiyya (restrictive)", quote: "Both later South Asian stances recorded.", translation: null }]),
      counterargument: "Opponents hold the specific mawlid form is a religiously-framed addition with no precedent.",
      scholarlyResponse: "The dispute is about form and religious framing, not about loving the Prophet ﷺ. Presenting Ibn Abidin's typology with the opposing view covers the ground honestly.",
      disagreements: "Whether organizing mawlid constitutes a praiseworthy or blameworthy innovation.",
      conclusion: "Disputed — both scholarly positions documented; the universal claim is false.",
      topicId: topicMap["mawlid"], featured: true,
    },
    {
      slug: "three-talaq-one-sitting-hanafi-one", claim: "Hanafis say three talaqs in one sitting count as only one talaq.",
      claimUr: "حنفی کہتے ہیں کہ ایک بیٹھک میں تین طلاقیں ایک ہی طلاق ہوتی ہیں۔",
      sourceOfClaim: "Confusion with Ibn Taymiyyah's (and Ibn al-Qayyim's) minority view.",
      verificationStatus: "INCORRECTLY_ATTRIBUTED",
      actualPosition: "The Hanafi position is the opposite of this claim: three talaqs pronounced in one sitting DO take effect as three (though the Hanafi school grades such a divorce as 'bid'i' — irregular/prohibited in manner — for which a man is disciplined, the divorces still count). The 'one talaq' view belongs to Ibn Taymiyyah and Ibn al-Qayyim, outside the Hanafi school. (Note: modern Pakistani/Indian statutes and some contemporary muftis debate reforms; personal cases need a qualified mufti.)",
      primaryEvidence: j([{ ref: "Al-Hidayah / Radd al-Muhtar, Kitab al-Talaq", quote: "Three in one sitting: effective as three with the irregularity (bid'i) noted.", translation: null }]),
      counterargument: null,
      scholarlyResponse: "Attribution error — the 'one talaq' view is not Hanafi.",
      disagreements: "Qur'anic reading of 2:229-230 and pre-Islamic custom discussions.",
      conclusion: "Incorrectly attributed; sensitive personal matters always directed to qualified scholars (Personal Fatwa Warning).",
      topicId: topicMap["nikah-talaq"],
    },
    {
      slug: "hanafi-fiqh-invented-later", claim: "Hanafi fiqh was invented 200 years after the Prophet ﷺ and has no link to the companions.",
      claimUr: "حنفی فقہ نبوی دور کے دو سو سال بعد گھڑی گئی، اس کا صحابہ سے کوئی تعلق نہیں۔",
      sourceOfClaim: "Online polemics.",
      verificationStatus: "UNSUPPORTED",
      actualPosition: "The school documents an unbroken teaching chain: Abu Hanifa ← Hammad ibn Abi Sulayman ← Ibrahim al-Nakha'i ← 'Alqama ibn Qays ← 'Abdullah ibn Mas'ud (with 'Umar, 'Ali and Ibn Mas'ud's Kufan tradition). Whether one accepts every inference of that tradition is a methodological question; the claim that the school has no companion-era roots contradicts the documented chain.",
      primaryEvidence: j([{ ref: "Classical tabaqat and riwaya literature (e.g., al-Dhahabi's Manaqib Abi Hanifa)", quote: "The documented chain of transmission.", translation: null }]),
      counterargument: null,
      scholarlyResponse: "Critics may question specific rulings' derivation; the existence of the chain is not disputed in academic hadith historiography.",
      disagreements: "Evaluation of Kufan vs. Medinan practice for legal authority.",
      conclusion: "Unsupported claim; the real debate is about methodology of legal reasoning.",
      topicId: topicMap["what-is-madhhab"],
    },
    {
      slug: "istighatha-consensus-shirk", claim: "Calling out 'Ya Rasulallah' (istighatha) is major shirk by consensus of the scholars.",
      claimUr: "یارسول اللہ کہنا تمام علما کے اتفاق سے شرک ہے۔",
      sourceOfClaim: "Certain Salafi/Ahl-e-Hadith publications.",
      verificationStatus: "UNSUPPORTED",
      actualPosition: "There is no such consensus — the claim itself is disputed. Many Hanafi-Maturidi (and other Sunni) scholars permitted istighatha as calling upon a beloved of Allah by his honor, distinguishing it from belief in independent power. Deobandi, Ahl-e-Hadith and Salafi scholars prohibit the phrase as proximity to shirk. Because 'consensus' claims must themselves be evidenced, and the literature shows disagreement, the platform records the dispute and never issues takfir over it.",
      primaryEvidence: j([{ ref: "Hanafi aqeedah & fatwa literature vs. Deobandi/Salafi fatwas", quote: "Opposing documented stances.", translation: null }]),
      counterargument: "The opposing camp cites Qur'an 10:106, 35:14 and the practice framework of 'ibadah definitions.",
      scholarlyResponse: "Both positions presented with their definitions of du'a/istighatha; the platform's Takfir Policy governs display.",
      disagreements: "Definition of istighatha; linguistic vs. creedal reading of the phrase.",
      conclusion: "Unsupported consensus claim; genuine dispute documented respectfully.",
      topicId: topicMap["istighatha"],
    },
    {
      slug: "amin-loudly-not-accepted", claim: "Hanafis deny the sunnah of saying Amin altogether, which is why they say it quietly.",
      claimUr: "حنفی آمین کی سنت کے قائل نہیں، اسی لیے خاموشی سے کہتے ہیں۔",
      sourceOfClaim: "Misreading of Hanafi fiqh in online debates.",
      verificationStatus: "MISLEADING",
      actualPosition: "Hanafis affirm saying Amin in salah is sunnah; the dispute is only whether the imam says it aloud. Hanafi works argue the Amin commands address followers (who say it after the imam's quiet recitation), while Shafi'is read the hadiths as applying to the imam's audible Amin. Both affirm Amin; the disagreement is about jahr (audibility).",
      primaryEvidence: j([{ ref: "Bukhari 780 (Amin hadith)", quote: "When the Imam says Amin, say Amin…", translation: "Read by Hanafis as addressed to followers." }]),
      classicalEvidence: j([{ ref: "al-Hidayah, Kitab al-Salah", quote: "Hanafi discussion of Amin.", translation: null }]),
      counterargument: "Shafi'i reading: the hadith encourages audible Amin by imam and followers.",
      scholarlyResponse: "Methodological dispute on applying the hadith; both documented in the Comparison Engine.",
      disagreements: "Audibility, not the institution of Amin.",
      conclusion: "Misleading; Hanafis affirm Amin as sunnah.",
      topicId: topicMap["ameen"],
    },
  ];
  for (const m of misconceptions) {
    await prisma.misconception.create({ data: m });
  }

  // ─────────────────────────── OBJECTIONS ───────────────────────────
  const objections = [
    { q: "Why do Hanafis not raise their hands before every ruku'?", a: "Because the school follows the report-cluster describing the Prophet's ﷺ later regular practice — raising hands only at the opening takbir — and reconciles the earlier raising reports with it (abrogation/preference). See the full research topic with both sides' evidence.", topic: "raf-al-yadayn", disputed: "Whether later-practice reports outweigh Bukhari's raising reports." },
    { q: "Why do Hanafis recite Ameen quietly?", a: "They hold the imam's Amin is said quietly because his Fatiha recitation is quiet in zuhr/'asr, and the follower's Amin follows; audible-Amin hadiths are read as addressing followers. See the Ameen topic for both readings.", topic: "ameen", disputed: "Whether the hadiths apply to the imam's audibility." },
    { q: "Why do Hanafis not recite al-Fatiha behind the imam?", a: "The school reads the 'silence behind the imam' reports and the Prophet's ﷺ instruction to listen ('when he recites, be silent') as exempting followers from recitation; other schools read the al-Sab' al-Mathani hadiths as unconditional.", topic: "qiraah-behind-imam", disputed: "Scope of the two hadith clusters." },
    { q: "Is Hanafi taqlid blind following?", a: "Classically, taqlid of a qualified madhhab for a non-mujtahid is the recognized alternative to personally performing ijtihad — not 'blind following' in the pejorative sense. The Qur'an (4:59) commands following ulil-amr. Laypeople follow qualified specialists in every field; the debate is about whether laypeople must individually verify.", topic: "what-is-taqlid", disputed: "Whether laypeople must verify evidences directly." },
    { q: "What is tawassul?", a: "Seeking nearness to Allah through a means: His names/attributes, one's own righteous deed, a living righteous person's du'a, or — per mainstream Hanafi-Maturidi — the Prophet's ﷺ status. The last category is the disputed one; see the topic page with both camps' sources.", topic: "tawassul", disputed: "Permissibility of tawassul bi'l-nabi after his lifetime." },
    { q: "Is tawassul shirk?", a: "No blanket statement is possible without misrepresenting one side. Both camps affirm worship is for Allah alone; they differ on what constitutes an impermissible intermediary. The platform documents the dispute; it does not issue takfir.", topic: "tawassul", disputed: "Definition of shirk vs. wasilah." },
    { q: "What do Hanafi scholars say about tawassul?", a: "Classical Hanafi fatwa literature and later authorities (incl. Ibn Abidin's circle) generally permit tawassul through the Prophet ﷺ; Fatawa Razvia defends it emphatically; Deobandi fatwas restrict its forms. All are recorded with classification.", topic: "tawassul", disputed: null },
    { q: "What is istighatha?", a: "Vocatively calling upon someone ('Ya Rasulallah') for help — analytically distinguished: as a call to a present/heard person vs. an invocation seeking aid through Allah's granting. Scholars differ over its permissibility across these senses.", topic: "istighatha", disputed: "Which linguistic senses are creedally acceptable." },
    { q: "Is istighatha the same as tawassul?", a: "Related but distinct: tawassul is 'seeking a means'; istighatha is 'calling for help'. Some formulations of istighatha imply tawassul; others are analyzed as address/du'a to Allah. See the topic page.", topic: "istighatha", disputed: null },
    { q: "What is the Hanafi position on grave visitation?", a: "Permitted and encouraged for reminder and du'a for the deceased, with etiquettes; popular practices at shrines are graded case-by-case (some permitted, some warned against). Cultural practice ≠ formal ruling — see the Claim/Position/Practice framework.", topic: "awliya", disputed: "Specific shrine practices." },
    { q: "What is the position regarding the life of Prophets in the grave?", a: "Mainstream Sunni (incl. Hanafi) scholarship affirms the prophets are alive in their graves with a special (barzakhi) life, based on hadith (e.g., the Musnad reports of prophets praying in their graves) and established tafsir — carefully framed as bestowed, created life, not like worldly life.", topic: "barzakh", disputed: "Nature/extent of the barzakhi life." },
    { q: "What is Shafa'ah?", a: "Intercession. Affirmed: the Prophet's ﷺ great intercession (Maqam Mahmud), intercession for believing sinners — Qur'an 4:64, 17:79; Bukhari/Muslim chapters on shafa'ah. Forms implying independent power are rejected.", topic: "shafaah", disputed: null },
    { q: "What is the Hanafi position regarding Mawlid?", a: "Divided historically: many later Hanafi authorities permitted/encouraged (Ibn Abidin's bid'ah hasanah discussion); Deobandi Hanafis prohibit the organized form. See the Mawlid topic with sources from both sides.", topic: "mawlid", disputed: "Status of organized commemoration." },
    { q: "What is bid'ah — are all new practices automatically prohibited?", a: "Classical Hanafi usul distinguishes innovation types; Ibn Abidin famously analyzes bid'ah hasanah (beneficial) with examples (madrasas, printed mushafs, Taraweeh congregation). 'All new = prohibited' is not the classical Hanafi formulation.", topic: "bidah", disputed: "Taxonomy of innovation." },
    { q: "What is the Hanafi position on Urs?", a: "Commemorating a saint's death anniversary: scholars differ — many permit gatherings of remembrance with conditions; others prohibit specific customs (prostration, vows at graves). Graded case-by-case; cultural practice is separated from fiqh rulings.", topic: "awliya", disputed: "Specific customs at Urs." },
    { q: "What does 'knowledge of the unseen' mean in the aqeedah debates?", a: "Divine exclusive knowledge (ghayb mutlaq) belongs to Allah alone; bestowed knowledge of unseen particulars granted by Allah to prophets/saints is affirmed by mainstream Hanafi-Maturidi creed — the South Asian dispute is over its extent for the Prophet ﷺ.", topic: "knowledge-of-unseen", disputed: "Extent of bestowed knowledge." },
    { q: "What is the difference between divine and bestowed knowledge?", a: "Divine (dhati): intrinsic, infinite, independent — Allah's alone. Bestowed ('ata'i/muhdas): granted, finite, dependent — e.g., prophets' revealed information, Khidr's knowledge in Surah al-Kahf.", topic: "knowledge-of-unseen", disputed: null },
    { q: "Which disputed practices are fiqh issues and which are aqeedah issues?", a: "Prayer-form issues (raf' al-yadayn, Amin, qira'ah, Taraweeh count) are FIQH differences. Tawassul, istighatha, 'ilm al-ghayb, mawlid framing touch AQEEDAH. The platform tags every issue accordingly — a core feature.", topic: "usul-al-fiqh", disputed: null },
  ];
  for (const o of objections) {
    await prisma.objection.create({
      data: {
        question: o.q, answer: o.a, disputed: o.disputed, topicId: topicMap[o.topic],
        hanafiPosition: o.topic ? null : null,
      },
    });
  }

  // ─────────────────────────── COMPARISON ENGINE ───────────────────────────
  function cell(pos: string, ev: string, meth: string, sch: string, qual?: string) {
    return j({ position: pos, evidence: ev, methodology: meth, majorScholars: sch, qualifications: qual ?? null, historicalContext: null });
  }
  const comparisons = [
    { issue: "Raf' al-Yadayn (raising hands before ruku' and rising)",
      hanafi: cell("Not performed after the opening takbir", "Bara' description cluster (Muslim); later-practice reports; al-Hidayah, Umdat al-Qari", "Naskh/tarjih: earlier raising reports superseded by later regular practice", "Abu Hanifa, Abu Yusuf, al-Shaybani, al-Marghinani", "Positions within the school differ on detail; raising at takbir al-tahrimah is agreed"),
      shafii: cell("Performed before ruku' and rising", "Bukhari raising reports (e.g., Ibn 'Umar, Malik ibn al-Huwayrith)", "Amal of reported practice; no abrogation accepted without decisive proof", "al-Shafi'i, al-Nawawi", null),
      maliki: cell("Raising at ruku' only (not rising)", "Medinan amal + Bukhari reports", "Amal ahl al-Madinah as a source", "Malik", null),
      hanbali: cell("Performed (with details differing)", "Bukhari raising reports", "Hadith-first methodology", "Ahmad ibn Hanbal", null),
      other: cell("Performed before ruku' and rising", "Same raising reports; rejection of abrogation argument", "Hadith-first (Ahl-e-Hadith/Salafi)", "Nasir al-Din al-Albani et al.", null),
      notes: "All sides agree on raising at the opening takbir. The dispute is evidential reconciliation — not 'hadith vs. no hadith'." },
    { issue: "Ameen — aloud or quietly",
      hanafi: cell("Quietly (by imam and followers)", "Bukhari 780 read as addressed to followers; Hidayah's reasoning", "Audience analysis of the hadith", "al-Marghinani et al.", null),
      shafii: cell("Aloud (imam and followers) in audible prayers", "Bukhari 780; practice reports", "General application of the hadith", "al-Shafi'i, al-Nawawi", null),
      maliki: cell("Quietly", "Medinan amal", "Amal-based", "Malik", null),
      hanbali: cell("Aloud in audible prayers (dominant view)", "Bukhari 780", "Hadith-first", "Ahmad", null),
      other: cell("Aloud", "Same hadith", "Hadith-first", "Ahl-e-Hadith scholars", null),
      notes: "Amin itself is sunnah by agreement — only audibility differs." },
    { issue: "Recitation behind the imam",
      hanafi: cell("Follower stays silent (incl. Fatiha)", "'When he recites, be silent' reports; silence-behind-imam reports", "Specification of the general by the specific", "Abu Hanifa, al-Tahawi", "In silent prayers some later Hanafis allow Fatiha without contradiction claims"),
      shafii: cell("Follower recites Fatiha (imam pauses in 1st two rak'ahs)", "Al-Sab' al-Mathani hadith: 'no prayer without Fatiha'", "Hadith-first", "al-Shafi'i, al-Nawawi", null),
      maliki: cell("Silence behind imam; Fatiha in silent prayers", "Medinan amal + reports", "Amal + specification", "Malik", null),
      hanbali: cell("Follower recites Fatiha", "Al-Sab' al-Mathani hadith", "Hadith-first", "Ahmad", null),
      other: cell("Follower recites Fatiha", "Same hadith", "Hadith-first", "Ahl-e-Hadith", null),
      notes: null },
    { issue: "Taraweeh rak'ah count",
      hanafi: cell("20 rak'ahs", "'Umar's congregation reports; later consensus claims in Hanafi works", "Amal of the ummah argument", "al-Marghinani, Ibn Abidin", "Some Hanafi reports cite 8; school settled on 20"),
      shafii: cell("20 (classical main view); 8 also reported permissible", "Salaf reports incl. 8/11 of the Prophet ﷺ", "Both reported; 8 never prohibited", "al-Nawawi", null),
      maliki: cell("Varied historically (36 in Medina reported)", "Medinan amal", "Amal-based", "Malik", null),
      hanbali: cell("Varied (11, 13, 20 reported)", "Multiple salaf reports", "Hadith-first with breadth", "Ahmad", null),
      other: cell("8 or 11 (Prophet's ﷺ practice preferred)", "Bukhari 2010 context", "Hadith-first", "Ahl-e-Hadith", null),
      notes: "Night prayer's virtue is agreed; the count is organizational ikhtilaf." },
    { issue: "Witr status",
      hanafi: cell("Wajib", "Hidayah and usul works", "Wajib category (obligating evidence short of fard standard)", "Abu Yusuf, al-Shaybani, al-Marghinani", null),
      shafii: cell("Sunnah mu'akkadah", "Hadith + amal analysis", "No fard/wajib split", "al-Shafi'i", null),
      maliki: cell("Wajib (per dominant Maliki view)", "Amal", null, "Malik", null),
      hanbali: cell("Near-wajib (Muwajjah)", "Hadith", null, "Ahmad", null),
      other: cell("Sunnah mu'akkadah", "Hadith", null, "Ahl-e-Hadith", null),
      notes: "Practical difference is minimal." },
    { issue: "Qunut in Fajr",
      hanafi: cell("Sunnah in Fajr (and Witr throughout the year)", "Qunut reports + amal", null, "Abu Hanifa", null),
      shafii: cell("Qunut in Witr (second half of Ramadan); not Fajr", "Reports of the Prophet's ﷺ practice", null, "al-Shafi'i", null),
      maliki: cell("Not in Fajr (Qunut in specific calamity)", null, null, "Malik", null),
      hanbali: cell("Varied; Fajr qunut permitted in dominant views", null, null, "Ahmad", null),
      other: cell("Not Fajr qunut ( calamity excepted)", null, null, "Ahl-e-Hadith", null),
      notes: null },
    { issue: "Bismillah aloud in Fatiha",
      hanafi: cell("Aloud in audible prayers (dominant Hanafi view)", "Reports + Hidayah", null, "Abu Hanifa (with internal difference)", "Sahibayn held quietly"),
      shafii: cell("Aloud", "Reports", null, "al-Shafi'i", null),
      maliki: cell("Quietly", "Amal", null, "Malik", null),
      hanbali: cell("Quietly (dominant)", null, null, "Ahmad", null),
      other: cell("Quietly", null, null, "Ahl-e-Hadith", null),
      notes: null },
  ];
  for (const c of comparisons) {
    // Link each comparison to its topical home (same mapping as the DB backfill).
    const topicSlugByIssue: Record<string, string> = {
      "Raf' al-Yadayn (raising hands before ruku' and rising)": "raf-al-yadayn",
      "Ameen — aloud or quietly": "ameen",
      "Recitation behind the imam": "qiraah-behind-imam",
      "Taraweeh rak'ah count": "taraweeh",
      "Witr status": "witr",
      "Qunut in Fajr": "qunut",
      "Bismillah aloud in Fatiha": "qiraah-behind-imam",
    };
    const t = topicSlugByIssue[c.issue];
    const topicId = t ? (await prisma.topic.findUnique({ where: { slug: t } }))?.id ?? null : null;
    await prisma.comparison.create({ data: { ...c, topicId } });
  }

  // ─────────────────────────── FATWAS ───────────────────────────
  const fatwas = [
    { q: "Is tawassul through the Prophet ﷺ permissible after his passing?", a: "SUMMARY (neutral academic paraphrase): Fatawa Razvia affirms tawassul through the Prophet's ﷺ person and status after his lifetime, arguing from Qur'an 4:64 and the blind-man report, and treats its denial as a serious deviation. (This platform additionally records the opposing Deobandi/Ahl-e-Hadith positions; see Comparison of Scholarly Views.)", scholar: "ahmad-raza-khan", book: "fatawa-razvia", lang: "Urdu", topic: "tawassul", status: "UNVERIFIED", vol: "—", page: "—" },
    { q: "What is the ruling on commemorating Mawlid al-Nabi ﷺ?", a: "SUMMARY: Fatawa Razvia permits and praises Mawlid gatherings, classifying them among recommended practices, with salawat and charity encouraged. (Opposing Deobandi fatwas prohibit the organized form; both recorded.)", scholar: "ahmad-raza-khan", book: "fatawa-razvia", lang: "Urdu", topic: "mawlid", status: "UNVERIFIED", vol: "—", page: "—" },
    { q: "Calling out 'Ya Rasulallah' — permitted or prohibited?", a: "SUMMARY: Fatawa Razvia permits the vocative call, distinguishing it from belief in independent power, and cites classical support. (The opposing camp prohibits it as proximity to shirk; dispute displayed.)", scholar: "ahmad-raza-khan", book: "fatawa-razvia", lang: "Urdu", topic: "istighatha", status: "UNVERIFIED", vol: "—", page: "—" },
    { q: "Ruling on raising hands before ruku' (from the fatwa-compendium perspective)", a: "SUMMARY: The compendium records the madhhab's settled position — no raising after the opening takbir — with the school's reconciliation of the hadith evidence.", scholar: null, book: "fatawa-hindiyyah", lang: "Arabic", topic: "raf-al-yadayn", status: "PARTIALLY_VERIFIED", vol: "Vol. 1 (Kitab al-Salah area)", page: "TBD" },
    { q: "Does blood nullify wudu?", a: "SUMMARY: The compendium records the Hanafi position that flowing blood from any part of the body nullifies wudu — with the school's reasoning on the exit of impurity.", scholar: null, book: "fatawa-hindiyyah", lang: "Arabic", topic: "taharah", status: "PARTIALLY_VERIFIED", vol: "Vol. 1", page: "TBD" },
    { q: "Analysis of bid'ah hasanah — are beneficial innovations recognized?", a: "SUMMARY: Ibn Abidin analyzes the classification of innovations, citing earlier authorities that beneficial innovations (e.g., madrasas, Taraweeh congregation) are recognized, distinguishing creedal additions (rejected) from organizational/devotional forms (assessed case-by-case).", scholar: "ibn-abidin", book: "radd-al-muhtar", lang: "Arabic", topic: "bidah", status: "PARTIALLY_VERIFIED", vol: "—", page: "TBD" },
    { q: "Three talaqs in one sitting — effect per the school's mufta bihi position?", a: "SUMMARY: The later school's accepted position: three take effect as three, though the manner is graded bid'i (irregular) and sinful; the classical deliberation is recorded by Ibn Abidin. (Modern statutory contexts differ — see Personal Fatwa Warning.)", scholar: "ibn-abidin", book: "radd-al-muhtar", lang: "Arabic", topic: "nikah-talaq", status: "PARTIALLY_VERIFIED", vol: "—", page: "TBD" },
  ];
  for (const f of fatwas) {
    await prisma.fatwa.create({
      data: {
        question: f.q, answer: f.a, scholarId: f.scholar ? scholarMap[f.scholar] : null,
        bookId: bookMap[f.book], volume: f.vol, page: f.page, language: f.lang,
        topic: f.topic, verificationStatus: f.status, translationEn: null,
      },
    });
  }

  // ─────────────────────────── CLAIM/PRACTICE FRAMEWORK ───────────────────────────
  await prisma.position.createMany({
    data: [
      { kind: "POSITION", statement: "Hands are folded below the navel in salah.", strength: "STRONG", school: "HANAFI", evidence: j([{ ref: "Hanafi fiqh manuals" }]), note: "School's documented ruling; height debated with other madhhabs (see Comparison Engine)." },
      { kind: "POSITION", statement: "Witr is wajib.", strength: "STRONG", school: "HANAFI", note: "Wajib = obligating evidence short of the fard standard (usul definition)." },
      { kind: "POSITION", statement: "Follower does not recite Fatiha behind an audible-reciting imam.", strength: "STRONG", school: "HANAFI", note: "Zahir al-Riwaya position; see Comparison Engine for other schools." },
      { kind: "PRACTICE", statement: "Kissing thumbs upon hearing the adhan.", strength: "DISPUTED", school: "HANAFI", note: "Practice recorded in later Hanafi/fatwa literature; grading disputed among Hanafi scholars — practice ≠ established ruling." },
      { kind: "PRACTICE", statement: "Loud collective dhikr after salah in some communities.", strength: "DISPUTED", school: "HANAFI", note: "Regional practice with scholarly disagreement; must not be presented as Hanafi doctrine." },
      { kind: "CLAIM", statement: "Hanafis fold hands to imitate fire-worshippers.", strength: "DISPUTED", school: "HANAFI", note: "Polemical claim with no source — see Misconception Database." },
    ],
  });

  // ─────────────────────────── Q&A SAMPLE ───────────────────────────
  const q1 = await prisma.question.create({
    data: {
      text: "Why do Hanafis not raise their hands before ruku'? Is it true they reject hadith?",
      language: "EN", categoryId: catSalah.id, status: "ANSWERED", featured: true, views: 142,
    },
  });
  await prisma.answer.create({
    data: {
      questionId: q1.id,
      directAnswer: "No — Hanafis do not reject hadith. They follow a documented body of reports indicating the Prophet ﷺ raised his hands only at the opening takbir in his later regular practice, and they reconcile the raising reports with that through their usul of abrogation/preference.",
      hanafiPosition: "Hands are raised at takbir al-tahrimah only. The school rests on the Bara' description cluster (Sahih Muslim) and related reports of the later prayer, arguing the earlier raising reports were superseded.",
      aqeedahOrFiqh: "FIQH",
      quranEvidence: j([]),
      hadithEvidence: j([
        { collection: "Sahih Muslim", number: "edition-dependent", quote: "He raised his hands at the opening takbir and did not repeat it afterwards.", grading: "SAHIH (cluster)", status: "UNVERIFIED (number pending)" },
        { collection: "Sahih al-Bukhari", number: "multiple raising reports", quote: "He would raise his hands before ruku'…", grading: "SAHIH", status: "VERIFIED (authenticity agreed; interpretation disputed)" },
      ]),
      classicalEvidence: j([{ book: "Al-Hidayah", scholar: "al-Marghinani", quote: "The Hanafi reconciliation of the raising reports with the later practice." }]),
      laterEvidence: j([{ book: "Umdat al-Qari", scholar: "Mulla Ali al-Qari" }, { book: "Radd al-Muhtar", scholar: "Ibn Abidin" }]),
      fatawaRazvia: "Not centrally engaged with this fiqh issue; Fatawa Hindiyyah records the settled madhhab position (see Fatwa Explorer).",
      otherViews: "Shafi'i/Hanbali/Ahl-e-Hadith: raising reports are un-abrogated and amal follows them. Maliki: raising at ruku' only.",
      commonObjection: "'One side has hadith and the other does not' — false framing; both sides cite Bukhari/Muslim material, differing on reconciliation.",
      scholarlyResponse: "The disagreement is evidential reconciliation (naskh vs. no-naskh). Platform policy: no winner is scored.",
      disputed: "Whether later-practice reports can outweigh earlier raising reports.",
      misconceptionNote: "See Misconception: 'Hanafis reject Bukhari' — MISLEADING.",
      practicalInfo: "Followers praying behind either imam follow their imam; both prayers are valid by the agreement of the schools' scholars.",
      sources: j(["Sahih Muslim (Bara' cluster)", "Sahih al-Bukhari (raising reports)", "Al-Hidayah", "Umdat al-Qari", "Radd al-Muhtar"]),
      status: "PUBLISHED", aiGenerated: true,
    },
  });

  const q2 = await prisma.question.create({
    data: {
      text: "Is saying Ameen aloud after Fatiha wrong according to Hanafi fiqh?",
      language: "EN", categoryId: catSalah.id, status: "ANSWERED", views: 89,
    },
  });
  await prisma.answer.create({
    data: {
      questionId: q2.id,
      directAnswer: "Saying Ameen is sunnah in both camps; the dispute is only about audibility. Hanafis hold the Amin commands address followers (said quietly), Shafi'is read them as encouraging audible Amin. Neither position is 'wrong' within its own school's evidential reading.",
      hanafiPosition: "Amin said quietly by imam and followers.",
      aqeedahOrFiqh: "FIQH",
      hadithEvidence: j([{ collection: "Sahih al-Bukhari", number: "780", quote: "When the Imam says Amin, say Amin…", grading: "SAHIH", status: "PARTIALLY_VERIFIED" }]),
      otherViews: "Shafi'i/Hanbali: aloud in audible prayers.",
      disputed: "Application (imam vs. followers) of the Amin hadith.",
      practicalInfo: "Follow the imam of your congregation; validity is not affected.",
      sources: j(["Sahih al-Bukhari 780", "Al-Hidayah"]),
      status: "PUBLISHED", aiGenerated: true,
    },
  });

  const q3 = await prisma.question.create({
    data: {
      text: "Please rule on my specific divorce situation — I said talaq three times in anger last night.",
      language: "EN", categoryId: catFiqh.id, isSensitive: true, status: "PENDING", views: 31,
    },
  });

  const q4 = await prisma.question.create({
    data: {
      text: "Can I make dua to Allah through the Prophet's ﷺ status (tawassul)? Someone told me this is shirk.",
      language: "EN", categoryId: catAqeedah.id, status: "REVIEWED", featured: true, views: 210, claim: "Tawassul through the Prophet ﷺ is shirk.",
    },
  });

  // ─────────────────────────── CLAIM CHECKS ───────────────────────────
  await prisma.claimCheck.createMany({
    data: [
      { claim: "Hanafis believe the Prophet ﷺ knows everything like Allah.", classification: "INCORRECTLY_ATTRIBUTED", explanation: "Both Barelvi and Deobandi Hanafi scholarship deny equality with Allah; the dispute is over the extent of bestowed knowledge.", evidence: j([{ title: "'Aqidah Tahawiyyah", ref: "Creed", quote: "Affirms bestowed excellence without equality." }]) },
      { claim: "Witr is wajib for Hanafis.", classification: "CORRECTLY_ATTRIBUTED", explanation: "Documented school position (wajib category defined in Hanafi usul).", evidence: j([{ title: "Al-Hidayah", ref: "Kitab al-Witr" }]) },
      { claim: "Hanafis pray with hands on the chest.", classification: "INCORRECTLY_ATTRIBUTED", explanation: "The school's dominant position is below the navel; chest-placement is reported within Hanafi reports but is not the settled madhhab ruling.", evidence: j([{ title: "Nur al-Idah", ref: "Kitab al-Salah" }]) },
    ],
  });

  // ─────────────────────────── SEARCH INDEX ───────────────────────────
  const topicsAll = await prisma.topic.findMany({ include: { category: true } });
  const searchDocs: {
    entityType: string; entityId: string; title: string; titleUr?: string; titleAr?: string;
    body: string; route: string; weight: number;
  }[] = [];
  for (const t of topicsAll) {
    searchDocs.push({
      entityType: "TOPIC", entityId: t.id, title: `${t.titleEn} (${t.category.nameEn})`, titleUr: t.titleUr ?? undefined, titleAr: t.titleAr ?? undefined,
      body: [t.summaryEn, t.arabicTerm].filter(Boolean).join(" — "), route: `knowledge/${t.slug}`, weight: 1.2,
    });
  }
  const miscAll = await prisma.misconception.findMany();
  for (const m of miscAll) {
    searchDocs.push({ entityType: "MISCONCEPTION", entityId: m.id, title: m.claim, titleUr: m.claimUr ?? undefined, body: `${m.actualPosition ?? ""} ${m.scholarlyResponse ?? ""}`, route: `misconceptions/${m.slug}`, weight: 1.4 });
  }
  const objAll = await prisma.objection.findMany();
  for (const o of objAll) {
    searchDocs.push({ entityType: "OBJECTION", entityId: o.id, title: o.question, body: o.answer, route: `objections`, weight: 1.1 });
  }
  const booksAll = await prisma.book.findMany();
  for (const b of booksAll) {
    searchDocs.push({ entityType: "BOOK", entityId: b.id, title: b.titleEn, titleUr: b.titleUr ?? undefined, titleAr: b.titleAr ?? undefined, body: b.descriptionEn ?? "", route: `sources/book/${b.slug}`, weight: 1 });
  }
  const scholarsAll = await prisma.scholar.findMany();
  for (const s of scholarsAll) {
    searchDocs.push({ entityType: "SCHOLAR", entityId: s.id, title: s.nameEn, titleAr: s.nameAr ?? undefined, body: s.biographyEn ?? "", route: `sources/scholar/${s.slug}`, weight: 1 });
  }
  const hadithAll = await prisma.hadith.findMany();
  for (const h of hadithAll) {
    searchDocs.push({ entityType: "HADITH", entityId: h.id, title: `${h.collection} ${h.number ?? ""}`.trim(), body: `${h.translationEn} ${h.commentary ?? ""}`, route: `quran-hadith/hadith/${h.id}`, weight: 1 });
  }
  const quranAll = await prisma.quranVerse.findMany();
  for (const v of quranAll) {
    searchDocs.push({ entityType: "QURAN", entityId: v.id, title: `${v.surahNameEn} ${v.surah}:${v.ayah}`, titleAr: v.surahNameAr, body: `${v.translationEn} ${v.arabic}`, route: `quran-hadith/quran/${v.id}`, weight: 1 });
  }
  const fatwaAll = await prisma.fatwa.findMany();
  for (const f of fatwaAll) {
    searchDocs.push({ entityType: "FATWA", entityId: f.id, title: f.question, body: f.answer, route: `sources/fatwa/${f.id}`, weight: 1 });
  }
  const compAll = await prisma.comparison.findMany();
  for (const c of compAll) {
    searchDocs.push({ entityType: "COMPARISON", entityId: c.id, title: c.issue, body: "Comparative scholarly positions across the madhhabs.", route: `compare`, weight: 1.2 });
  }
  const qAll = await prisma.question.findMany();
  for (const q of qAll) {
    searchDocs.push({ entityType: "QUESTION", entityId: q.id, title: q.text, body: q.claim ?? "", route: `qa/${q.id}`, weight: 1 });
  }
  await prisma.searchDocument.createMany({ data: searchDocs });

  const counts = {
    scholars: await prisma.scholar.count(), books: await prisma.book.count(),
    quran: await prisma.quranVerse.count(), hadith: await prisma.hadith.count(),
    categories: await prisma.category.count(), topics: await prisma.topic.count(),
    misconceptions: await prisma.misconception.count(), objections: await prisma.objection.count(),
    comparisons: await prisma.comparison.count(), fatwas: await prisma.fatwa.count(),
    questions: await prisma.question.count(), answers: await prisma.answer.count(),
    searchDocs: await prisma.searchDocument.count(),
  };
  console.log("✅ Seed complete:", counts);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
