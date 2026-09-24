import type { BankQuestion } from "./types";

/** Taqlid/Madhhab extensions, History & Usul, Terminology, Comparative,
 *  Misconceptions, Books & Scholars, South Asian practice — the misc batch. */
export const madhabMiscQuestions: BankQuestion[] = [
  // ─────────────────────────── TAQLID / MADHHAB (extensions) ───────────────────────────
  {
    slug: "madhhab-why-follow-millions",
    question: "Why do millions of Muslims follow the Hanafi madhhab?",
    questionUr: "کروڑوں مسلمان حنفی مذہب کی پیروی کیوں کرتے ہیں؟",
    questionAr: "لماذا يتبع ملايين المسلمين المذهب الحنفي؟",
    category: "taqlid-madhhab",
    subcategory: "History",
    type: "HISTORICAL",
    difficulty: "BEGINNER",
    cluster: "madhhab",
    intent: "informational",
    shortAnswer:
      "Because the school became the law of the Abbasid, Ottoman and Mughal states and the legal education of Central Asia, Anatolia, the Balkans, Afghanistan and the subcontinent — a millennium of institutional transmission.",
    shortAnswerUr:
      "اس لیے کہ یہ مذہب عباسی، عثمانی اور مغل سلطنتوں کا قانون اور وسطی ایشیا، اناطولیہ، بلقان، افغانستان اور برصغیر کی قانونی تعلیم بنا — ادارتی ترسیل کا ایک ہزار سالہ سلسلہ۔",
    shortAnswerAr:
      "لأن هذا المذهب صار قانون الدول العباسية والعثمانية والمغولية وتعليم الفقه في آسيا الوسطى والأناضول والبلقان وأفغانستان وشبه القارة الهندية — ألف عام من الانتقال المؤسسي.",
    sources: [
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani)", translation: "The manual that anchored judicial practice (incl. Anglo-Muhammadan law in British India).", status: "VERIFIED" },
    ],
    variants: ["Why is Hanafi the biggest madhhab?", "Which countries follow Hanafi?"],
    related: ["madhhab-what-is", "hist-abu-hanifa-who"],
  },
  {
    slug: "madhhab-why-differ-in-salah",
    question: "Why do the four madhhabs differ in salah details?",
    questionUr: "چاروں مذاہب نماز کی جزئیات میں مختلف کیوں ہیں؟",
    questionAr: "لماذا تختلف المذاهب الأربعة في تفاصيل الصلاة؟",
    category: "taqlid-madhhab",
    subcategory: "Differences",
    type: "METHODOLOGY",
    difficulty: "INTERMEDIATE",
    cluster: "madhhab",
    intent: "informational",
    shortAnswer:
      "Because they differ in usul: which reports bind, whether later practice abrogates earlier, how linguistic evidence weighs — the same hadith corpus read through different documented methodologies.",
    shortAnswerUr:
      "اس لیے کہ ان کے اصول مختلف ہیں: کون سی روایات حجت ہیں، کیا متاخر عمل متقدم کو منسوخ کرتا ہے، لسانی دلیل کا کیا وزن ہے — ایک ہی حدیثی ذخیرہ مختلف مرثوم مناہج سے پڑھا جاتا ہے۔",
    shortAnswerAr:
      "لأنهم يختلفون في الأصول: أي الروايات حجة، وهل ينسخ العمل المتأخر المتقدم، وكيف يوزن الدليل اللغوي — وهو المجموع الحديثي نفسه مقروءاً عبر مناهج مختلفة موثقة.",
    detailedAnswer:
      "Every school claims hadith fidelity; the differences arise at the reconciliation layer (abrogation assessment, report preference, linguistic reading). Sharh Ma'ani al-Athar walks through this on the disputed salah narrations. The schools' agreement on the prayer's pillars makes the differences intra-worship, not inter-religion.",
    sources: [
      { kind: "BOOK", ref: "Sharh Ma'ani al-Athar (al-Tahawi)", translation: "The reconciliation method demonstrated.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Usul al-Sarakhsi", translation: "The usul differences mapped.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Why do madhhabs pray differently?", "Why do schools disagree if hadith is one?"],
    related: ["madhhab-what-is", "comp-which-closest-hadith", "taqlid-what-is"],
  },
  {
    slug: "madhhab-change-madhhab",
    question: "Can a Hanafi follow another madhhab in a specific issue?",
    questionUr: "کیا حنفی کسی خاص مسئلے میں دوسرے مذہب کی پیروی کر سکتا ہے؟",
    questionAr: "هل يمكن للحنفي أن يتبع مذهباً آخر في مسألة معينة؟",
    category: "taqlid-madhhab",
    subcategory: "Taqlid",
    type: "METHODOLOGY",
    difficulty: "ADVANCED",
    cluster: "taqlid",
    intent: "fiqh",
    isDisputed: true,
    disputedNote: "Taqlid shakhsi (bound to one madhhab) vs taqlid ghayr mutlaq (principled issue-switching) — a documented disagreement among later Hanafi scholars themselves.",
    shortAnswer:
      "The strict South Asian Hanafi position binds laymen to one madhhab to prevent ruling-shopping; other scholars allow principled switching (e.g. for necessity) with conditions — the platform records both.",
    shortAnswerUr:
      "برصغیر کا سخت گیر حنفی مؤقف عام لوگوں کو اپنی پسند کا فتویٰ چننے سے بچنے کے لیے ایک مذہب سے باندھتا ہے؛ دیگر علما شرائط کے ساتھ اصولی منتقلی (مثلاً ضرورت میں) کی اجازت دیتے ہیں — پلیٹ فارم دونوں مؤاقف درج کرتا ہے۔",
    shortAnswerAr:
      "الموقف الحنفي الصارم في جنوب آسيا يلزم العاميين بمذهب واحد منعاً لانتقاء الأحكام الأيسر؛ ويسمح علماء آخرون بالانتقال المبني على أصل مع الشرط (كالضرورة مثلاً) — والمنصة تدون الموقفين معاً.",
    sources: [
      { kind: "BOOK", ref: "Fatawa Razvia (Ahmad Raza Khan) — taqlid discussions", translation: "The strict binding position.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Taharah — talfiq discussions", translation: "The mixing-with-conditions discussion.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Can I mix madhhabs?", "Switching madhhab permissible?"],
    related: ["taqlid-necessary", "taqlid-what-is"],
  },
  {
    slug: "madhhab-four-founders",
    question: "Who are the four Sunni madhhabs and their founders?",
    questionUr: "اہل سنت کے چار مذاہب اور ان کے بانی کن ہیں؟",
    questionAr: "ما هي المذاهب السنية الأربعة ومؤسسوها؟",
    category: "taqlid-madhhab",
    subcategory: "History",
    type: "BEGINNER",
    difficulty: "BEGINNER",
    cluster: "madhhab",
    intent: "informational",
    shortAnswer:
      "Hanafi (Abu Hanifa, d. 150 AH — Kufa), Maliki (Malik ibn Anas, d. 179 AH — Madinah), Shafi'i (al-Shafi'i, d. 204 AH — the usul systematizer), Hanbali (Ahmad ibn Hanbal, d. 241 AH — Baghdad) — the surviving codified schools of Sunni law.",
    shortAnswerUr:
      "حنفی (ابو حنیفہ، وفات 150ھ — کوفہ)، مالکی (مالک بن انس، وفات 179ھ — مدینہ)، شافعی (الشافعی، وفات 204ھ — اصول کے منظم کرنے والے)، حنبلی (احمد بن حنبل، وفات 241ھ — بغداد) — سنی فقہ کے مدون مذاہب جو آج تک باقی ہیں۔",
    shortAnswerAr:
      "الحنفي (أبو حنيفة، ت 150هـ — الكوفة)، والمالكي (مالك بن أنس، ت 179هـ — المدينة)، والشافعي (الشافعي، ت 204هـ — منظِّم الأصول)، والحنبلي (أحمد بن حنبل، ت 241هـ — بغداد) — وهي المذاهب المدونة الباقية من فقه السنة.",
    sources: [
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani)", translation: "The Hanafi codification example.", status: "VERIFIED" },
    ],
    variants: ["4 madhabs list", "Who founded the Hanafi school?"],
    related: ["madhhab-what-is", "hist-abu-hanifa-who"],
  },
  {
    slug: "madhhab-splitting-ummah",
    question: "Do madhhabs divide the ummah?",
    questionUr: "کیا مذاہب امت کو تقسیم کرتے ہیں؟",
    questionAr: "هل تفرق المذاهب الأمة؟",
    category: "taqlid-madhhab",
    subcategory: "Differences",
    type: "OBJECTION",
    difficulty: "INTERMEDIATE",
    cluster: "madhhab",
    intent: "misconception",
    isMisconception: true,
    commonObjection: "\"Madhhabs split the Muslims into sects.\"",
    scholarlyResponse:
      "The classical position: fiqh diversity within usul bounds is documented scholarship — the four schools' scholars pray in one another's mosques and cite one another; the condemned splitting (Al-An'am 6:159) is creedal division and sectarian hatred. The schools are a legal ecosystem, not rival religions.",
    shortAnswer:
      "No — the schools share one creed and pray together; the condemned splitting is creedal division and hatred, not documented fiqh diversity.",
    shortAnswerUr:
      "نہیں — مذاہب کا عقیدہ ایک ہے اور وہ باہم نماز پڑھتے ہیں؛ مذموم تفرقہ عقیدے کی تقسیم اور عداوت ہے، مرثوم فقہی تنوع نہیں۔",
    shortAnswerAr:
      "لا — المذاهب على عقيدة واحدة وتصلي معاً؛ والتفريق المذموم هو التفرق العقائدي والعداوة، لا تنوع الفقه الموثق.",
    sources: [
      { kind: "QURAN", ref: "Al-An'am 6:159", translation: "Those who split their religion… — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "One creed across the schools.", status: "VERIFIED" },
    ],
    variants: ["Are madhhabs sects?", "Why not one madhhab for all?"],
    related: ["madhhab-sect-or-school", "madhhab-pray-behind-other-imam"],
  },
  {
    slug: "madhhab-no-new-madhabs",
    question: "Why can't new madhhabs be founded today?",
    questionUr: "آج نئے مذاہب کیوں نہیں قائم کیے جا سکتے؟",
    questionAr: "لماذا لا يمكن تأسيس مذاهب جديدة اليوم؟",
    category: "taqlid-madhhab",
    subcategory: "Taqlid",
    type: "METHODOLOGY",
    difficulty: "ADVANCED",
    cluster: "madhhab",
    intent: "informational",
    shortAnswer:
      "A madhhab requires the mujtahid-mutlaq apparatus the classical era assembled — direct access to the full corpus as it was transmitted, usul mastery, and a scholarly community to test and transmit; the classical schools' positions have been tested for a millennium.",
    shortAnswerUr:
      "مذہب کے لیے مطلق مجتہد کا وہ سازوسامان درکار ہے جو کلاسیکی عہد میں مہیا ہوا — مرویات کے پورے ذخیرے تک جیسا وہ منقول ہوا براہِ راست رسائی، اصولوں پر مہارت، اور امتحان و ترسیل کے لیے علمی معاشرہ؛ کلاسیکی مذاہب کے مؤاقف ایک ہزار سال سے آزمائے جا چکے ہیں۔",
    shortAnswerAr:
      "تأسيس المذهب يتطلب أجهزة المجتهد المطلق التي جمعها العصر الكلاسيكي — الاطلاع المباشر على كامل المتون كما نُقلت، وإتقان الأصول، ومجتمعاً علمياً يختبر وينقل؛ وقد اختُبرت مواقف المذاهب الكلاسيكية ألف عام.",
    sources: [
      { kind: "BOOK", ref: "Usul al-Sarakhsi", translation: "The mujtahid requirements.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Why only four madhhabs?", "Can a new mujtahid arise?"],
    related: ["ijtihad-ordinary-muslim", "madhhab-four-founders"],
  },
  {
    slug: "madhhab-ahl-ray",
    question: "What is the historical difference between Ahl al-Ray and Ahl al-Hadith?",
    questionUr: "اصحابِ رائے اور اصحابِ حدیث کا تاریخی فرق کیا ہے؟",
    questionAr: "ما هو الفرق التاريخي بين أصحاب الرأي وأصحاب الحديث؟",
    category: "history-usul",
    subcategory: "Schools' history",
    type: "HISTORICAL",
    difficulty: "ADVANCED",
    cluster: "usul-methodology",
    intent: "informational",
    shortAnswer:
      "Early-jurisprudence labels: the Iraqi 'reasoning' jurists (Kufa — Abu Hanifa's line) leaned on systematic analogy; the Madinan 'tradition' jurists leaned on local transmitted practice — both using hadith; the labels describe emphasis, not hadith-rejection.",
    shortAnswerUr:
      "فقہ کے ابتدائی دور کی اصطلاحیں: عراق کے 'استدلال' والے فقہاء (کوفہ — ابو حنیفہ کا سلسلہ) منظم قیاس پر تھے؛ مدینے کے 'اثر' والے فقہاء مقامی منقولہ عمل پر — دونوں حدیث ہی استعمال کرتے تھے؛ یہ اصطلاحیں غلبہ ظاہر کرتی ہیں، حدیث سے انکار نہیں۔",
    shortAnswerAr:
      "ألقاب في الفقه المبكر: فقهاء العراق 'الرأي' (الكوفة — خط أبي حنيفة) ميّزوا القياس المنظم، وفقهاء المدينة 'الأثر' ميّزوا العمل المروي المحلي — وكلاهما كان يستعمل الحديث؛ وتصف الألقاب الغلبة لا إنكار الحديث.",
    sources: [
      { kind: "BOOK", ref: "Ikhtilaf al-Fuqaha (al-Tahawi)", translation: "The early juristic geography.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Ahl al ray meaning", "Kufa vs Madinah fiqh schools"],
    related: ["hist-abu-hanifa-who", "usul-hanafi-principles"],
  },
  {
    slug: "taqlid-scholars-mock",
    question: "Is it permissible to mock madhhabs or the scholars of a madhhab?",
    questionUr: "کیا مذاہب یا کسی مذہب کے علماء کا مذاق اڑانا جائز ہے؟",
    questionAr: "هل يجوز الاستهزاء بالمذاهب أو بعلماء المذهب؟",
    category: "taqlid-madhhab",
    subcategory: "Etiquette",
    type: "AQEEDAH",
    difficulty: "INTERMEDIATE",
    cluster: "taqlid",
    intent: "fiqh",
    shortAnswer:
      "No — the classical texts treat ridiculing the scholars of the ummah as a serious sin (and some hold it reaches the boundary of the sacred law's honour categories); ikhtilaf etiquette is a documented discipline.",
    shortAnswerUr:
      "نہیں — کتبِ متقدمین امت کے علماء کا مذاق اڑانا بڑا گناہ شمار کرتی ہیں (بعض کے نزدیک یہ شریعت کے محترمات کی حدود تک پہنچ جاتا ہے)؛ آدابِ اختلاف ایک مرثوم فن ہے۔",
    shortAnswerAr:
      "لا — تعتبر كتب المتقدمين استهزاء علماء الأمة ذنباً عظيماً (ويرى بعضهم أنه يبلغ حدود المحترمات في الشريعة)؛ وآداب الاختلاف فن موثق.",
    sources: [
      { kind: "QURAN", ref: "Al-Hujurat 49:11", translation: "Do not ridicule a people — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
    ],
    variants: ["Can I criticize Abu Hanifa?", "Making fun of madhhabs"],
    related: ["madhhab-splitting-ummah", "comp-ikhtilaf-etiquette"],
  },

  // ─────────────────────────── HISTORY & USUL ───────────────────────────
  {
    slug: "hist-abu-hanifa-who",
    question: "Who was Imam Abu Hanifa?",
    questionUr: "امام ابو حنیفہ کون تھے؟",
    questionAr: "من هو الإمام أبو حنيفة؟",
    category: "history-usul",
    subcategory: "Imam Abu Hanifa",
    type: "HISTORICAL",
    difficulty: "BEGINNER",
    cluster: "historical-hanafi",
    intent: "informational",
    shortAnswer:
      "Nu'man ibn Thabit (80–150 AH) of Kufa — a silk merchant who became the era's leading jurist through rigorous reasoning, transmitted the Kufan tradition, refused a qadi post under the Abbasids, and died in prison; his students codified the school.",
    shortAnswerUr:
      "نعمان بن ثابت (80–150ھ) کوفی — ریشم کے تاجر جو دقتِ استدلال کے ذریعے اپنے عہد کے ممتاز ترین فقیہ بنے، کوفے کی روایت نقل کی، عباسی عہد میں قضا کا عہدہ ٹھکرایا اور قید میں وفات پائی؛ ان کے شاگردوں نے مذہب کو مدون کیا۔",
    shortAnswerAr:
      "النعمان بن ثابت (80–150هـ) الكوفي — تاجر حرير صار فقيه عصره الأول بدقة الاستدلال، نقل تقاليد الكوفة، رفض قضاء العباسيين، ومات في السجن؛ وقد دوّن تلاميذه المذهب.",
    sources: [
      { kind: "BOOK", ref: "Manaqib literature (al-Kardari / al-Muwaffaq al-Makki)", translation: "The biographical corpus on Abu Hanifa.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani)", translation: "The school his students transmitted.", status: "VERIFIED" },
    ],
    variants: ["Biography of Abu Hanifa", "How did Abu Hanifa die?"],
    related: ["madhhab-what-is", "hist-abu-hanifa-muhaddith", "hist-abu-hanifa-companions"],
  },
  {
    slug: "hist-abu-hanifa-muhaddith",
    question: "Was Imam Abu Hanifa a hadith scholar (muhaddith)?",
    questionUr: "کیا امام ابو حنیفہ محدث تھے؟",
    questionAr: "هل كان الإمام أبو حنيفة محدثاً؟",
    category: "history-usul",
    subcategory: "Imam Abu Hanifa",
    type: "HADITH",
    difficulty: "INTERMEDIATE",
    cluster: "historical-hanafi",
    intent: "informational",
    shortAnswer:
      "Yes — he narrated hadith and studied under hadith masters; the biographical literature documents his very strict standard for accepting narrations, which shaped the school's evidential caution.",
    shortAnswerUr:
      "جی ہاں — آپ نے حدیث روایت کی اور محدثین کے سامنے تعلیم حاصل کی؛ تراجم کی کتب میں روایت قبول کرنے کا ان کا نہایت سخت معیار مرثوم ہے، جس نے مذہب کے دلائل میں احتیاط کو تشکیل دی۔",
    shortAnswerAr:
      "نعم — كان يروي الحديث ويتعلم عند كبار المحدثين؛ وقد وثّقت كتب التراجم شدة شرطه في قبول الروايات، مما شكّل حذر المذهب في الأدلة.",
    sources: [
      { kind: "BOOK", ref: "Manaqib literature (al-Kardari / al-Khayrat al-Hisan)", translation: "His hadith transmission and standards.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Kitab al-Athar (attributed to Imam Abu Hanifa)", translation: "His transmitted hadith-based work.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Did Abu Hanifa know hadith?", "Abu Hanifa hadith teacher"],
    related: ["misc-hanafis-reject-hadith", "hist-abu-hanifa-who"],
  },
  {
    slug: "hist-abu-hanifa-companions",
    question: "Did Imam Abu Hanifa meet any Companions of the Prophet ﷺ?",
    questionUr: "کیا امام ابو حنیفہ کی نبی کریم ﷺ کے کسی صحابی سے ملاقات ہوئی؟",
    questionAr: "هل لقي الإمام أبو حنيفة من صحابة النبي ﷺ أحداً؟",
    category: "history-usul",
    subcategory: "Imam Abu Hanifa",
    type: "HISTORICAL",
    difficulty: "ADVANCED",
    cluster: "historical-hanafi",
    intent: "informational",
    shortAnswer:
      "The biographical literature records that he saw Anas ibn Malik (RA) in childhood — making him a tabi'i-era figure; he did not study under the Companions as a mature jurist.",
    shortAnswerUr:
      "تراجم کی کتب میں ہے کہ آپ نے بچپن میں انس بن مالک رضی اللہ عنہ کو دیکھا — اس طرح آپ تابعین کے عہد سے ہیں؛ مگر پختہ فقیہ ہو کر صحابہ کرام سے تعلیم نہیں لی۔",
    shortAnswerAr:
      "تسجل كتب التراجم أنه رأى أنس بن مالك رضي الله عنه في طفولته — فهو بذلك من طبقة التابعين؛ لكنه لم يتتلمذ على الصحابة فقيهاً راشداً.",
    sources: [
      { kind: "BOOK", ref: "Manaqib literature (al-Khayrat al-Hisan)", translation: "The Anas sighting report.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Was Abu Hanifa a tabieen?", "Did Abu Hanifa see companions?"],
    related: ["hist-abu-hanifa-who"],
  },
  {
    slug: "usul-hanafi-principles",
    question: "What are the main principles (usul) of Hanafi fiqh?",
    questionUr: "فقہ حنفی کے اہم اصول کیا ہیں؟",
    questionAr: "ما هي الأصول الرئيسة للفقه الحنفي؟",
    category: "history-usul",
    subcategory: "Usul",
    type: "METHODOLOGY",
    difficulty: "INTERMEDIATE",
    cluster: "usul-methodology",
    intent: "informational",
    shortAnswer:
      "The ordered hierarchy: Qur'an, Sunnah, ijma' (consensus), qiyas (analogy), with istihsan (juristic preference), 'urf (custom), istishab, and shar'u man qablana as secondary tools — each defined and bounded in the usul manuals.",
    shortAnswerUr:
      "ترتیب شدہ سلسلہ: قرآن، سنت، اجماع، قیاس، اور ثانوی اوزار: استحسان، عرف، استصحاب اور شرع من قبلنا — ہر ایک کی تعریف اور حدود اصولی کتب میں مرثوم ہیں۔",
    shortAnswerAr:
      "الترتيب الهرمي: القرآن والسنة والإجماع والقياس، ثم الأدوات الثانوية: الاستحسان والعرف والاستصحاب وشرع من قبلنا — وكل واحد منها معرف ومحدد في كتب الأصول.",
    sources: [
      { kind: "BOOK", ref: "Usul al-Sarakhsi", translation: "The school's usul systematization.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani)", translation: "The usul in application.", status: "VERIFIED" },
    ],
    variants: ["Hanafi usul sources list", "What is istihsan?"],
    related: ["usul-istihsan", "usul-urf"],
  },
  {
    slug: "usul-istihsan",
    question: "What is istihsan (juristic preference) and why did al-Shafi'i criticize it?",
    questionUr: "استحسان کیا ہے اور امام شافعی نے اس کی تنقید کیوں کی؟",
    questionAr: "ما هو الاستحسان ولماذا انتقده الشافعي؟",
    category: "history-usul",
    subcategory: "Usul",
    type: "METHODOLOGY",
    difficulty: "ADVANCED",
    cluster: "usul-methodology",
    intent: "informational",
    shortAnswer:
      "Istihsan is departing from a strict analogy for a stronger evidence (necessity, custom, better analogy); al-Shafi'i criticized it as subjective, while the school defines it as evidence-driven departure — a documented methodological difference.",
    shortAnswerUr:
      "استحسان سخت قیاس سے ہٹ کر قوی دلیل (ضرورت، عرف، بہتر قیاس) کی طرف جانا ہے؛ امام شافعی نے اسے ذات رائے شمار کیا، جبکہ مذہب اسے دلیل پر مبنی انحراف قرار دیتا ہے — یہ مرثوم منہجی اختلاف ہے۔",
    shortAnswerAr:
      "الاستحسان هو ترك القياس الظاهر من أجل دليل أقوى (ضرورة أو عرف أو قياس أفضل)؛ وانتقده الشافعي بوصفه ذاتياً، بينما يعرّفه المذهب بأنه ترك مدفوع بالدليل — وهذا خلاف منهجي موثق.",
    sources: [
      { kind: "BOOK", ref: "Usul al-Sarakhsi", translation: "Istihsan's definition and bounds.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Istihsan meaning", "Why do Hanafis use istihsan?"],
    related: ["usul-hanafi-principles", "madhhab-why-differ-in-salah"],
  },
  {
    slug: "usul-urf",
    question: "How is custom ('urf) used in Hanafi fiqh?",
    questionUr: "فقہ حنفی میں عرف کا استعمال کیسے ہوتا ہے؟",
    questionAr: "كيف يُستعمل العرف في الفقه الحنفي؟",
    category: "history-usul",
    subcategory: "Usul",
    type: "METHODOLOGY",
    difficulty: "INTERMEDIATE",
    cluster: "usul-methodology",
    intent: "informational",
    shortAnswer:
      "Custom is a weighing factor: stable, widespread community practice can specify ambiguous terms, set dowry/maintenance standards, and anchor contracts — the maxim 'custom is a decisive judge' is the school's working rule.",
    shortAnswerUr:
      "عرف ایک معیارِ ترجیح ہے: معاشرے کا مستحکم و عام عمل مبہم الفاظ کی تعیین، مہر و نفقہ کا معیار، اور عقود کی بنیاد بنا سکتا ہے — قاعدہ 'العرف فیصلہ کن حاکم ہے' اس مذہب کا عملی اصول ہے۔",
    shortAnswerAr:
      "العرف معيار موزون: فعمل المجتمع الراسخ الواسع يمكنه تحديد الألفاظ المبهمة، ووضع معايير المهر والنفقة، واعتماد العقود — وقاعدة «العُرف حاكم فيصل» هي القاعدة العاملة في المذهب.",
    sources: [
      { kind: "BOOK", ref: "Al-Ashbah wa'l-Naza'ir (Ibn Nujaym)", translation: "The custom maxims.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["What is urf in Islam?", "Does culture affect Islamic law?"],
    related: ["usul-hanafi-principles", "bidah-custom-difference"],
  },
  {
    slug: "usul-zahir-riwaya",
    question: "What are Zahir al-Riwaya and Zahir al-Nadhir in Hanafi fiqh?",
    questionUr: "فقہ حنفی میں ظاہر الروایہ اور ظاہر النظر کیا ہیں؟",
    questionAr: "ما هما الظاهر الرواية والظاهر النظر في الفقه الحنفي؟",
    category: "history-usul",
    subcategory: "School's corpus",
    type: "METHODOLOGY",
    difficulty: "ADVANCED",
    cluster: "usul-methodology",
    intent: "informational",
    shortAnswer:
      "Zahir al-Riwaya: al-Shaybani's six explicitly transmitted books — the school's core corpus; Zahir al-Nadhir: his exceptional-position works (e.g. some Nawadir) — the hierarchy of authority later jurists ranked.",
    shortAnswerUr:
      "ظاہر الروایہ: امام شیبانی کی چھ کتابیں جن کی روایت بصراحت منقولہ ہے — مذہب کا مرکزی ذخیرہ؛ ظاہر النظر: ان کی استثنائی مؤاقف والی کتب (مثلاً بعض نوادر) — یہی اولیت کی ترتیب ہے جسے متاخرین فقہاء نے درجہ بند کیا۔",
    shortAnswerAr:
      "الظاهر الرواية: كتب الشيباني الستة المنقولة بالنص — وهو المتن الأساسي للمذهب؛ والظاهر النظر: كتبه في المواقف الاستثنائية (كبعض النوادر) — وهي مراتب الحجية التي رتبها المتأخرون.",
    sources: [
      { kind: "BOOK", ref: "Zahir al-Riwaya (al-Shaybani), six books", translation: "The corpus itself.", status: "VERIFIED" },
    ],
    variants: ["What is zahir al riwaya?", "Hanafi books hierarchy"],
    related: ["usul-hanafi-principles", "books-hidayah-famous"],
  },
  {
    slug: "usul-fatwa-vs-qada",
    question: "What is the difference between a fatwa and a court judgment (qada) according to Hanafi fiqh?",
    questionUr: "فقہ حنفی کے مطابق فتویٰ اور عدالتی فیصلہ (قضا) میں کیا فرق ہے؟",
    questionAr: "ما هو الفرق بين الفتوى والحكم القضائي (القضاء) عند الفقه الحنفي؟",
    category: "history-usul",
    subcategory: "Institutions",
    type: "TERMINOLOGY",
    difficulty: "INTERMEDIATE",
    cluster: "usul-methodology",
    intent: "informational",
    shortAnswer:
      "A fatwa is a non-binding scholarly answer to a questioner; qada is the judge's binding ruling in a dispute — the school even permits a mufti and qadi to differ in the same case (each by his own school-bound reasoning).",
    shortAnswerUr:
      "فتویٰ مستفتی کو دیا گیا غیر پابند کن علمی جواب ہے؛ قضا نزاع میں قاضی کا پابند کن فیصلہ ہے — مذہب تو یہاں تک اجازت دیتا ہے کہ اسی معاملے میں مفتی اور قاضی مختلف ہوں (ہر ایک اپنے مذہبی استدلال کے مطابق)۔",
    shortAnswerAr:
      "الفتوى جواب علمي غير ملزم للسائل؛ والقضاء حكم القاضي الملزم في النزاع — بل يجوز في المذهب أن يخالف المفتي القاضي في المسألة نفسها (كل بحسب استدلاله المذهبي).",
    sources: [
      { kind: "BOOK", ref: "Adab al-Qadi literature within the school's corpus", translation: "The mufti/qadi distinction.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["What is a mufti?", "Fatwa meaning Islam"],
    related: ["term-fatwa-meaning"],
  },
  {
    slug: "usul-ijma",
    question: "What is ijma' (consensus) and why does it matter in Hanafi fiqh?",
    questionUr: "اجماع کیا ہے اور فقہ حنفی میں اس کی اہمیت کیوں ہے؟",
    questionAr: "ما هو الإجماع ولماذا له أهمية في الفقه الحنفي؟",
    category: "history-usul",
    subcategory: "Usul",
    type: "METHODOLOGY",
    difficulty: "INTERMEDIATE",
    cluster: "usul-methodology",
    intent: "informational",
    shortAnswer:
      "Ijma' is the agreement of the qualified jurists of a generation on a ruling — the school treats it as decisive proof after the Qur'an and Sunnah, protecting the corpus from private reinterpretation.",
    shortAnswerUr:
      "اجماع کسی عہد کے اہلِ اجتہاد فقہاء کا حکم پر اتفاق ہے — مذہب اسے قرآن و سنت کے بعد فیصلہ کن حجت مانتا ہے، جس سے مرویات کا ذخیرہ ذاتی تاویلات سے محفوظ رہتا ہے۔",
    shortAnswerAr:
      "الإجماع هو اتفاق فقهاء الأهلّة في عصر واحد على حكم — ويتخذه المذهب حجة قاطعة بعد القرآن والسنة، فيحمي المتون من التأويل الذاتي.",
    sources: [
      { kind: "BOOK", ref: "Usul al-Sarakhsi", translation: "Ijma's authority.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Ijma meaning", "Is consensus a source of law?"],
    related: ["usul-hanafi-principles"],
  },

  // ─────────────────────────── TERMINOLOGY ───────────────────────────
  {
    slug: "term-maslak-meaning",
    question: "What does maslak mean in South Asian Islamic usage?",
    questionUr: "برصغیر کے اسلامی استعمال میں مسلک سے کیا مراد ہے؟",
    questionAr: "ما معنى «مسلك» في الاستعمال الإسلامي في جنوب آسيا؟",
    category: "terminology",
    subcategory: "Terms",
    type: "TERMINOLOGY",
    difficulty: "BEGINNER",
    cluster: "terms",
    intent: "informational",
    shortAnswer:
      "Maslak (Urdu: way/path) is the South Asian term for one's fiqh/creedal tradition — 'Hanafi maslak' means the Hanafi school's way; the platform's name for its question library uses the term in this sense.",
    shortAnswerUr:
      "مسلک (یعنی راہ، طریقہ) برصغیر میں اپنے فقہی و عقیدتی سلسلے کے لیے مستعمل اصطلاح ہے — 'حنفی مسلک' سے مراد حنفی مذہب کا راستہ ہے؛ پلیٹ فارم کی سوال جواب لائبریری کے نام میں یہ اصطلاح اسی معنی میں استعمال ہوئی ہے۔",
    shortAnswerAr:
      "«مسلك» (أي الطريق) هو المصطلح المستعمل في جنوب آسيا للدلالة على المرجع الفقهي والعقائدي لدى المرء — فـ«مسلك حنفي» تعني طريقة المذهب الحنفي؛ وتستعمل المنصة المصطلح بهذا المعنى في اسم مكتبة أسئلتها.",
    sources: [
      { kind: "BOOK", ref: "Bahishti Zewar (Ashraf Ali Thanwi)", translation: "The South Asian usage of maslak in practice guides.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Maslak meaning Islam", "What is Hanafi maslak?"],
    related: ["madhhab-what-is", "sa-barelvi-deobandi"],
  },
  {
    slug: "term-fatwa-meaning",
    question: "What is a fatwa and is it binding on everyone?",
    questionUr: "فتویٰ کیا ہے اور کیا یہ سب پر پابند ہوتا ہے؟",
    questionAr: "ما هي الفتوى وهل هي ملزمة للجميع؟",
    category: "terminology",
    subcategory: "Terms",
    type: "TERMINOLOGY",
    difficulty: "BEGINNER",
    cluster: "terms",
    intent: "informational",
    shortAnswer:
      "A fatwa is a qualified scholar's answer to a specific question — binding on the asker's conscience, not a universal law; a mufti is the qualified issuer, and asking the right qualified person is itself part of the discipline.",
    shortAnswerUr:
      "فتویٰ باصلاحیت عالم کا کسی خاص سوال کا جواب ہے — سوال کرنے والے کے ضمیر پر حجت ہے، عالمگیر قانون نہیں؛ مفتی وہ باصلاحیت صادر کنندہ ہے، اور صحیح باصلاحیت شخص سے پوچھنا خود اس فن کا حصہ ہے۔",
    shortAnswerAr:
      "الفتوى جواب عالم متأهل لسؤال معين — فهي ملزمة لضمير السائل لا قانون عام؛ والمفتي هو المتأهل المفتي، وسؤال الشخص المتأهل المناسب جزء من هذا الفن نفسه.",
    sources: [
      { kind: "BOOK", ref: "Adab al-Mufti literature within the school's corpus", translation: "The mufti/fatwa framework.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Fatwa definition", "Who can give a fatwa?"],
    related: ["usul-fatwa-vs-qada", "taqlid-what-is"],
  },
  {
    slug: "term-fard-wajib-explained",
    question: "Why does Hanafi fiqh have a separate wajib category between fard and sunnah?",
    questionUr: "فقہ حنفی میں فرض اور سنت کے درمیان واجب کی الگ اصطلاح کیوں ہے؟",
    questionAr: "لماذا في الفقه الحنفي مصطلح مستقل «الواجب» بين الفرض والسنة؟",
    category: "terminology",
    subcategory: "Terms",
    type: "TERMINOLOGY",
    difficulty: "ADVANCED",
    cluster: "terms",
    intent: "informational",
    shortAnswer:
      "Because the school ranks proof decisiveness: commands with decisive proof are fard; commands with strong-but-not-decisive proof are wajib (denied in error, not disbelief) — keeping theological accuracy tied to evidential strength.",
    shortAnswerUr:
      "اس لیے کہ مذہب دلیل کی قطعیت کے درجات رکھتا ہے: قطعی دلیل والا حکم فرض ہے؛ قوی مگر غیر قطعی دلیل والا حکم واجب (اس کا انکار غلطی ہے، کفر نہیں) — تاکہ عقیدتی دقت قوتِ دلیل سے جڑی رہے۔",
    shortAnswerAr:
      "لأن المذهب يرتب درجات القطع في الدليل: فالطلب الذي دليله قطعي فرض، والطلب الذي دليله قوي غير قطعي واجب (ينكره فيخطئ ولا يكفر) — فيبقى الدقة العقائدية مربوطة بقوة الدليل.",
    sources: [
      { kind: "BOOK", ref: "Nur al-Idah (al-Shurunbulali), introduction", translation: "The ruling-tier definitions.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Usul al-Sarakhsi", translation: "The evidential tiering logic.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Fard wajib sunnah difference", "Is wajib less than fard?"],
    related: ["salah-fard-wajib-sunnah", "term-maslak-meaning"],
  },
  {
    slug: "term-sunni-meaning",
    question: "What does Ahl al-Sunnah wal-Jama'ah (Sunni) mean?",
    questionUr: "اہل سنت والجماعت (سنی) سے کیا مراد ہے؟",
    questionAr: "ما معنى أهل السنة والجماعة (السني)؟",
    category: "terminology",
    subcategory: "Terms",
    type: "BEGINNER",
    difficulty: "BEGINNER",
    cluster: "terms",
    intent: "informational",
    shortAnswer:
      "The People of the Prophetic Way and the Community — the majority tradition holding the Companions' creed and the four codified fiqh schools; the term's creedal core is documented in creeds like al-Tahawiyyah.",
    shortAnswerUr:
      "نبی کی سنت اور جماعت کے لوگ — اکثریتی سلسلہ جو صحابہ کرام کا عقیدہ اور چار مدون فقہی مذاہب رکھتا ہے؛ اس اصطلاح کا عقیدتی مرکز عقائد کی کتب جیسے عقیدہ طحاویہ میں مرثوم ہے۔",
    shortAnswerAr:
      "أصحاب الطريق النبوي والجماعة — التراث الأكثري الذي يحمل عقيدة الصحابة والمذاهب الفقهية الأربعة المدونة؛ وجوهر هذا المصطلح العقائدي موثق في العقائد كالطحاوية.",
    sources: [
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "The creed of Ahl al-Sunnah.", status: "VERIFIED" },
    ],
    variants: ["What is Sunni Islam?", "Ahl al sunnah meaning"],
    related: ["madhhab-what-is", "aqeedah-attributes-how"],
  },
  {
    slug: "sa-barelvi-deobandi",
    question: "What are the Barelvi and Deobandi traditions according to Hanafi scholarship?",
    questionUr: "فقہ حنفی کے علماء کے مطابق بریلوی اور دیوبندی سلسلے کیا ہیں؟",
    questionAr: "ما هما التراث البريلوي والديوبندي عند علماء الحنفية؟",
    category: "south-asian",
    subcategory: "South Asian traditions",
    type: "COMPARISON",
    difficulty: "INTERMEDIATE",
    cluster: "south-asian-practice",
    intent: "informational",
    shortAnswer:
      "Both are South Asian Hanafi scholarly traditions sharing fiqh and the Sunni creed, differing over emphases: the Barelvi tradition (Ahmad Raza Khan) affirms expansive tawassul/Mawlid formulations; the Deobandi tradition (founded around Darul Uloom Deoband) emphasizes hadith-anchored restraint — a documented intra-Hanafi debate conducted by both sides' own scholarship.",
    shortAnswerUr:
      "دونوں برصغیر کے حنفی علمی سلسلے ہیں جو فقہ اور اہل سنت کے عقیدے پر مشترک ہیں اور تاکیدات میں مختلف ہیں: بریلوی سلسلہ (احمد رضا خان) وسعت والے توسل و عید میلاد کے مفاہیم کی تصدیق کرتا ہے؛ دیوبندی سلسلہ (دارالعلوم دیوبند کے گرد قائم) حدیث پر استوار احتیاط پر زور دیتا ہے — یہ حنفیوں کے درمیان مرثوم مباحثہ ہے جو دونوں اطراف کے اپنے علماء نے کیا۔",
    shortAnswerAr:
      "كلاهما تراثان علميان حنفيان في جنوب آسيا يشتركان في الفقه والعقيدة السنية ويختلفان في التوكيديات: فالتراث البريلوي (أحمد رضا خان) يثبت صيغ التوسل والمولد الموسعة؛ والتراث الديوبندي (المؤسس حول دار العلوم ديوبند) يؤكد التحفظ المبني على الحديث — وهو جدل حنفي داخلي موثق قاده علماء الطرفين أنفسهم.",
    detailedAnswer:
      "The platform treats both as Hanafi Sunni scholarship and quotes each side's own texts (Fatawa Razvia vs Imdad al-Fatawa etc.) where they speak. The sharpest disputes — the Prophet's ﷺ bestowed knowledge, istighatha, Mawlid — are recorded as disputed with both formulations represented, never caricatured.",
    isDisputed: true,
    disputedNote: "The intra-Hanafi Barelvi/Deobandi dispute spans aqeedah emphasis and practices — documented by both sides; the platform records without scoring.",
    sources: [
      { kind: "BOOK", ref: "Fatawa Razvia (Ahmad Raza Khan)", translation: "The Barelvi tradition's foundational fatawa collection.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Imdad al-Fatawa (Ashraf Ali Thanwi)", translation: "The Deobandi tradition's fatawa collection.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Difference between Barelvi and Deobandi", "Are Barelvis Hanafi?", "Are Deobandis Hanafi?"],
    related: ["nubuwwah-knowledge", "mawlid-ruling", "term-maslak-meaning"],
  },
  {
    slug: "sa-ahl-e-hadith",
    question: "Who are the Ahl-e-Hadith according to South Asian scholarship?",
    questionUr: "برصغیر کے علماء کے مطابق اہل حدیث کون ہیں؟",
    questionAr: "من هم أهل الحديث عند علماء جنوب آسيا؟",
    category: "south-asian",
    subcategory: "South Asian traditions",
    type: "COMPARISON",
    difficulty: "INTERMEDIATE",
    cluster: "south-asian-practice",
    intent: "informational",
    shortAnswer:
      "A South Asian reform movement (19th century, influenced by wider hadith-anchored scholarship) emphasizing direct compliance with narrations and rejecting taqlid of the schools — described here factually; the taqlid debate's two sides are recorded in the library.",
    shortAnswerUr:
      "برصغیر کی ایک اصلاحی تحریک (انیسویں صدی، وسیع حدیث پر استوار علمی رجحان سے متاثر) جو روایات پر براہِ راست عمل پر زور دیتی ہے اور مذاہب کی تقلید رد کرتی ہے — یہاں اسے صرف واقعی انداز میں بیان کیا گیا ہے؛ تقلید کے مباحثے کے دونوں پہلو لائبریری میں محفوظ ہیں۔",
    shortAnswerAr:
      "حركة إصلاحية في جنوب آسيا (القرن التاسع عشر، متأثرة بتراث أوسع مبني على الحديث) تؤكد الالتزام المباشر بالروايات وترفض تقليد المذاهب — وهذا وصف واقعي؛ وجانبا جدال التقليد مدونان في المكتبة.",
    sources: [
      { kind: "BOOK", ref: "Fatawa Razvia (Ahmad Raza Khan) — taqlid discussions", translation: "The Hanafi response literature to the movement's arguments.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["What is Ahl e Hadith?", "Ahl e hadith vs Hanafi"],
    related: ["taqlid-necessary", "taqlid-hadith-objection"],
  },

  // ─────────────────────────── COMPARATIVE ───────────────────────────
  {
    slug: "comp-which-closest-hadith",
    question: "Which madhhab is closest to the hadith?",
    questionUr: "حدیث سے سب سے قریب کون سا مذہب ہے؟",
    questionAr: "أي المذاهب أقرب إلى الحديث؟",
    category: "comparative",
    subcategory: "Comparative",
    type: "OBJECTION",
    difficulty: "ADVANCED",
    cluster: "hanafi-vs-others",
    intent: "misconception",
    isMisconception: true,
    commonObjection: "\"Only one madhhab can follow the hadith; the rest follow men.\"",
    scholarlyResponse:
      "The question assumes each madhhab claims the hadith exclusively. In reality each school argues from the full corpus through its own usul: Hanafi scholars wrote Bukhari commentaries (Umdat al-Qari, Badhl al-Majhud), Shafi'i scholars built on Muslim's school, etc. Choosing a school is choosing a documented METHODOLOGY of hadith application — not hadith-vs-no-hadith.",
    shortAnswer:
      "Every school claims hadith fidelity through its own usul — the question assumes a false premise; what differs is the methodology of applying hadith, documented on all sides.",
    shortAnswerUr:
      "ہر مذہب اپنے اصولوں کے ذریعے حدیث کی امانت داری کا دعویٰ کرتا ہے — سوال کی بنیاد ہی غلط مفروضہ ہے؛ فرق محض حدیث کے اطلاق کے منہج کا ہے، جو سب اطراف میں مرثوم ہے۔",
    shortAnswerAr:
      "كل مذهب يدّعي الأمانة للحديث عبر أصوله — فالسؤال مبني على مقدمة خاطئة؛ والخلاف في منهج تطبيق الحديث المدون عند الجميع.",
    sources: [
      { kind: "BOOK", ref: "Umdat al-Qari (Mulla Ali al-Qari)", translation: "A Hanafi Bukhari commentary.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Sharh Ma'ani al-Athar (al-Tahawi)", translation: "The Hanafi reconciliation method on hadith.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Which school follows Quran and Sunnah most?", "Most authentic madhhab"],
    related: ["madhhab-why-differ-in-salah", "taqlid-hadith-objection"],
  },
  {
    slug: "comp-witr-difference",
    question: "How do the madhhabs differ on Witr?",
    questionUr: "مذاہب وتر میں کیسے مختلف ہیں؟",
    questionAr: "كيف تختلف المذاهب في الوتر؟",
    category: "comparative",
    subcategory: "Comparative",
    type: "COMPARISON",
    difficulty: "INTERMEDIATE",
    cluster: "hanafi-vs-others",
    intent: "fiqh",
    shortAnswer:
      "Hanafi: 3 connected rak'ahs, wajib, qunut before ruku'. Shafi'i: 2+1 with two salams, sunnah, Ramadan qunut after ruku'. Maliki: various odd numbers with du'a qunut replacing the tashahhud of the last rak'ah. Hanbali: 3 with qunut in the second half of Ramadan.",
    shortAnswerUr:
      "حنفی: تین متصل رکعات، واجب، رکوع سے پہلے قنوت۔ شافعی: 2+1 دو سلاموں کے ساتھ، سنت، رمضان میں رکوع کے بعد قنوت۔ مالکی: مختلف طاق اعداد میں، آخری رکعت کی تشہد کی جگہ قنوت کی دعا۔ حنبلی: تین، رمضان کے دوسرے نصف میں قنوت۔",
    shortAnswerAr:
      "الحنفي: ثلاث ركعات متصلة، واجبة، والقنوت قبل الركوع. الشافعي: ركعتان ثم واحدة بسلامين، سنة، وقنوت رمضان بعد الركوع. المالكي: أعداد فردية متنوعة مع دعاء القنوت مكان تشهد الركعة الأخيرة. الحنبلي: ثلاث مع القنوت في النصف الثاني من رمضان.",
    sources: [
      { kind: "BOOK", ref: "Bada'i' al-Sana'i' (al-Kasani), Kitab al-Witr", translation: "The school's framework and contrasts.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Witr in four madhhabs", "Which witr method should I follow?"],
    related: ["salah-witr-wajib", "salah-witr-shafii-difference", "madhhab-pray-behind-other-imam"],
  },
  {
    slug: "comp-sadl-maliki",
    question: "Why do Malikis let their hands hang at their sides (sadl) in prayer?",
    questionUr: "مالکی نماز میں ہاتھ ڈھیلے چھوڑتے (سدل) کیوں ہیں؟",
    questionAr: "لماذا يتركون المالكية أيديهم إلى جانبيهما (السدل) في الصلاة؟",
    category: "comparative",
    subcategory: "Comparative",
    type: "COMPARISON",
    difficulty: "INTERMEDIATE",
    cluster: "hanafi-vs-others",
    intent: "informational",
    shortAnswer:
      "The Maliki school transmits the practice of placing hands at the sides from the Madinan practice corpus — the same school holds the other placement reports non-binding; a documented school difference within worship.",
    shortAnswerUr:
      "مالکی مذہب مدینہ کے عمل کے ذخیرے سے ہاتھ اطراف میں رکھنے کا عمل نقل کرتا ہے — وہی مذہب دوسرے انداز والی روایات کو غیر حجت مانتا ہے؛ عبادت کے اندر کا مرثوم مذہبی اختلاف ہے۔",
    shortAnswerAr:
      "ينقل المذهب المالكي عمل وضع الأيدي إلى الجانبين من متن العمل المديني — ويحمل المذهب نفسه الروايات الأخرى في الوضع غير الملزمة؛ وهو خلاف مذهبي موثق داخل العبادة.",
    sources: [
      { kind: "BOOK", ref: "Muwatta Malik", translation: "The Madinan practice corpus.", status: "VERIFIED" },
    ],
    variants: ["Why do Maliki pray with hands down?", "Sadl in salah"],
    related: ["salah-hands-below-navel", "madhhab-why-differ-in-salah"],
  },
  {
    slug: "comp-aqeedah-agreement",
    question: "Do the four madhhabs agree on aqeedah?",
    questionUr: "کیا چاروں مذاہب عقیدے پر متفق ہیں؟",
    questionAr: "هل المذاهب الأربعة متفقية في العقيدة؟",
    category: "comparative",
    subcategory: "Comparative",
    type: "COMPARISON",
    difficulty: "INTERMEDIATE",
    cluster: "hanafi-vs-others",
    intent: "informational",
    shortAnswer:
      "Broadly yes — the mainstream creedal traditions (Maturidi among Hanafis, Ash'ari among Shafi'is/Malikis, and the creedal tradition of the Hanbali school with its emphases) share the Sunni core documented in al-Tahawiyyah, with intra-Sunni nuance on attribute-language.",
    shortAnswerUr:
      "بڑی حد تک ہاں — مرکزی عقیدتی سلسلے (حنفیوں میں ماتریدی، شافعی و مالکی میں اشعری، اور حنبلی مذہب کا عقیدتی سلسلہ اپنی تاکیدات کے ساتھ) عقیدہ طحاویہ میں مرثوم سنی مرکز پر مشترک ہیں؛ صفات کے تعبیرات میں اہل سنت کے اندر کی باریکیوں کے ساتھ۔",
    shortAnswerAr:
      "بصورة عامة نعم — التراثات العقائدية الرئيسية (الماتريدية عند الحنفية، والأشعرية عند الشافعية والمالكية، والتراث العقائدي للمذهب الحنبلي بتوكيداته) تشترك في جوهر السني المدون في الطحاوية، مع فارق داخلي سني في تعبير الصفات.",
    sources: [
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "The cross-school creed.", status: "VERIFIED" },
    ],
    variants: ["Do madhhabs differ in aqeedah?", "Maturidi vs Ashari"],
    related: ["aqeedah-attributes-how", "term-sunni-meaning"],
  },
  {
    slug: "comp-ikhtilaf-etiquette",
    question: "What is the scholarly etiquette of legitimate disagreement (ikhtilaf)?",
    questionUr: "مشروع اختلاف (اختلاف) کے علمی آداب کیا ہیں؟",
    questionAr: "ما هي آداب الاختلاف الشرعي عند العلماء؟",
    category: "comparative",
    subcategory: "Comparative",
    type: "METHODOLOGY",
    difficulty: "ADVANCED",
    cluster: "hanafi-vs-others",
    intent: "informational",
    shortAnswer:
      "The documented discipline: acknowledge the other school's evidence, speak of positions not persons, assume good faith in the scholars, avoid declaring the differing party outside Islam over fiqh, and follow your qualified scholars with humility.",
    shortAnswerUr:
      "مرثوم ادب: دوسرے مذہب کی دلیل کو تسلیم کریں، مقامات کی بات کریں اشخاص کی نہیں، علماء پر نیک ظن رکھیں، فقہی اختلاف پر مخالف کو کافر قرار دینے سے بچیں، اور اپنے باصلاحیت علماء کی عاجزی کے ساتھ پیروی کریں۔",
    shortAnswerAr:
      "الفن الموثق: أن تقر بدليل المذهب الآخر، وتتحدث عن المواقف لا الأشخاص، وتحسن الظن بالعلماء، وتتجنب تكفير المخالف على مسألة فقهية، وتتبع علماءك المتأهلين بتواضع.",
    sources: [
      { kind: "BOOK", ref: "Ikhtilaf al-Fuqaha (al-Tahawi)", translation: "The disagreement discipline.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["How should Muslims handle madhhab differences?", "Ikhtilaf rules"],
    related: ["taqlid-scholars-mock", "madhhab-splitting-ummah"],
  },
  {
    slug: "comp-taqlid-salafi-view",
    question: "How do Salafi/Ahl-e-Hadith scholars view taqlid compared to Hanafi scholars?",
    questionUr: "حنفی علماء کے مقابلے میں سلفی/اہل حدیث علماء تقلید کو کیسے دیکھتے ہیں؟",
    questionAr: "كيف يرى علماء السلفية/أهل الحديث مسألة التقليد مقارنة بعلماء الحنفية؟",
    category: "comparative",
    subcategory: "Comparative",
    type: "COMPARISON",
    difficulty: "ADVANCED",
    cluster: "hanafi-vs-others",
    intent: "informational",
    isDisputed: true,
    disputedNote: "A genuine documented disagreement over layman methodology — both sides' literature is extensive and the platform quotes each side's own formulations.",
    shortAnswer:
      "Salafi/Ahl-e-Hadith scholarship urges laymen to ask for evidence and comply directly; Hanafi scholarship holds laymen lack the competence to apply evidence and must follow qualified jurists — the taqlid debate's two documented sides.",
    shortAnswerUr:
      "سلفی/اہل حدیث علمی رجحان عام لوگوں کو دلیل پوچھنے اور براہِ راست عمل پر اکساتا ہے؛ حنفی علمی رجحان کے مطابق عام افراد دلیل کے اطلاق کی اہلیت نہیں رکھتے اور باصلاحیت فقہاء کی پیروی لازم ہے — تقلید کے مباحثے کے مرثوم دونوں پہلو۔",
    shortAnswerAr:
      "التراث السلفي/أهل الحديث يدعو العاميين إلى طلب الدليل والالتزام المباشر؛ والتراث الحنفي يرى أن العاميين لا يملكون أهلية تطبيق الدليل ووجب عليهم تقليد الفقهاء المتأهلين — وهما جانبا جدال التقليد الموثقان.",
    sources: [
      { kind: "BOOK", ref: "Fatawa Razvia (Ahmad Raza Khan) — taqlid", translation: "The Hanafi defense of taqlid.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Usul al-Sarakhsi", translation: "The classical taqlid framework.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Why do Salafis reject madhhabs?", "Taqlid debate Islam"],
    related: ["taqlid-necessary", "taqlid-hadith-objection"],
  },

  // ─────────────────────────── MISCONCEPTIONS ───────────────────────────
  {
    slug: "misc-hanafis-reject-hadith",
    question: "Is it true that Hanafis reject hadith?",
    questionUr: "کیا یہ درست ہے کہ حنفی حدیث کو رد کرتے ہیں؟",
    questionAr: "هل صحيح أن الحنفية يردون الحديث؟",
    category: "misconceptions",
    subcategory: "Hadith",
    type: "MISCONCEPTION",
    difficulty: "BEGINNER",
    cluster: "misconceptions-general",
    intent: "misconception",
    isMisconception: true,
    commonObjection: "\"Hanafi fiqh is opinion, not hadith.\"",
    scholarlyResponse:
      "The school's own evidence-books are hadith-reconciliation works; al-Tahawi's Sharh Ma'ani al-Athar and the Bukhari commentaries (Umdat al-Qari, Badhl al-Majhud) are Hanafi hadith scholarship. The misconstrual confuses 'differs in application' with 'rejects authenticity'.",
    shortAnswer:
      "No — the school is built on hadith through its usul; its scholars wrote major commentaries on the hadith collections; the difference is application, not rejection.",
    shortAnswerUr:
      "نہیں — مذہب اپنے اصولوں کے ذریعے حدیث پر استوار ہے؛ اس کے علماء نے کتبِ حدیث پر بڑی شروح لکھیں؛ فرق اطلاق کا ہے، رد کا نہیں۔",
    shortAnswerAr:
      "لا — المذهب مبني على الحديث عبر أصوله؛ وكتب علماؤه شروحاً كبرى على كتب الحديث؛ والخلاف في التطبيق لا في الرد.",
    sources: [
      { kind: "BOOK", ref: "Sharh Ma'ani al-Athar (al-Tahawi)", translation: "Hadith-reconciliation as the school's method.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Umdat al-Qari (Mulla Ali al-Qari)", translation: "A Hanafi commentary on Sahih al-Bukhari.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Do Hanafis follow hadith?", "Hanafi vs hadith", "Does Hanafi fiqh use Bukhari?"],
    related: ["salah-raf-yadayn-hadith", "misc-hanafis-reject-bukhari", "hist-abu-hanifa-muhaddith"],
  },
  {
    slug: "misc-hanafis-reject-bukhari",
    question: "Do Hanafis reject Sahih al-Bukhari?",
    questionUr: "کیا حنفی صحیح بخاری کو رد کرتے ہیں؟",
    questionAr: "هل يرد الحنفية صحيح البخاري؟",
    category: "misconceptions",
    subcategory: "Hadith",
    type: "MISCONCEPTION",
    difficulty: "BEGINNER",
    cluster: "misconceptions-general",
    intent: "misconception",
    isMisconception: true,
    commonObjection: "\"If Hanafis disagreed with a Bukhari hadith, they must reject Bukhari.\"",
    scholarlyResponse:
      "Chronology itself refutes the charge: Abu Hanifa (d. 150 AH) predates Bukhari's compilation (d. 256 AH). The school engages Bukhari's narrations through its reconciliation usul, and Hanafi hadith masters wrote Bukhari's famous commentaries. Disagreeing with an INTERPRETATION is not rejecting a COLLECTION.",
    shortAnswer:
      "No — the school's scholars wrote major commentaries on Bukhari (Umdat al-Qari, Badhl al-Majhud); disagreement over application is not rejection of the collection.",
    shortAnswerUr:
      "نہیں — مذہب کے علماء نے بخاری پر بڑی شروح لکھیں (عمدۃ القاری، بذل المجہود)؛ اطلاق پر اختلاف مجموعے کے رد کا نہیں۔",
    shortAnswerAr:
      "لا — كتب علماء المذهب شروحاً كبرى على البخاري (عمدة القاري، بذل المجهد)؛ والاختلاف في التطبيق ليس رداً على المجموعة.",
    sources: [
      { kind: "BOOK", ref: "Umdat al-Qari (Mulla Ali al-Qari)", translation: "Hanafi Bukhari commentary.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Badhl al-Majhud (al-Kashmiri)", translation: "Hanafi Sunan Abi Dawud commentary.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Hanafis vs Bukhari", "Why do Hanafis not follow Bukhari?"],
    related: ["misc-hanafis-reject-hadith", "salah-raf-yadayn-hadith"],
  },
  {
    slug: "misc-abu-hanifa-17-hadith",
    question: "Did Imam Abu Hanifa only know 17 hadiths?",
    questionUr: "کیا امام ابو حنیفہ صرف 17 احادیث جانتے تھے؟",
    questionAr: "هل كان الإمام أبو حنيفة لا يعرف إلا سبع عشرة حديثاً؟",
    category: "misconceptions",
    subcategory: "Hadith",
    type: "MISCONCEPTION",
    difficulty: "INTERMEDIATE",
    cluster: "misconceptions-general",
    intent: "misconception",
    isMisconception: true,
    commonObjection: "\"A saying claims Abu Hanifa knew only 17 hadiths.\"",
    scholarlyResponse:
      "The saying circulates without a sound chain and contradicts the biographical corpus: Kitab al-Athar, the school's transmitted reasoning across thousands of issues, and the documented hadith study. The claim functions as polemic, not history.",
    shortAnswer:
      "No — the claim is an unsourced polemical saying; the biographical literature and his transmitted works document extensive hadith engagement.",
    shortAnswerUr:
      "نہیں — یہ دعویٰ بے سند مخالفانہ قول ہے؛ تراجم کی کتابیں اور ان کی منقولہ تصانیف حدیث کے ساتھ وسیع تعلق کی گواہ ہیں۔",
    shortAnswerAr:
      "لا — هذا الادعاء قول جدلي بلا مصدر؛ وتوثق كتب التراجم ومصنفاته المنقولة ارتباطاً واسعاً بالحديث.",
    sources: [
      { kind: "BOOK", ref: "Manaqib literature (al-Kardari / al-Muwaffaq al-Makki)", translation: "The biographical corpus contradicting the claim.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Kitab al-Athar (attributed to Imam Abu Hanifa)", translation: "His hadith-based transmitted work.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["17 hadith Abu Hanifa", "Abu Hanifa hadith knowledge claim"],
    related: ["hist-abu-hanifa-muhaddith", "misc-hanafis-reject-hadith"],
  },
  {
    slug: "misc-hanafi-opinion-only",
    question: "Is Hanafi fiqh based only on personal opinion (ra'y)?",
    questionUr: "کیا فقہ حنفی صرف ذاتی رائے پر مبنی ہے؟",
    questionAr: "هل يقوم الفقه الحنفي على الرأي الشخصي فحسب؟",
    category: "misconceptions",
    subcategory: "Methodology",
    type: "MISCONCEPTION",
    difficulty: "INTERMEDIATE",
    cluster: "misconceptions-general",
    intent: "misconception",
    isMisconception: true,
    commonObjection: "\"The school is 'Ahl al-Ray' — opinion people.\"",
    scholarlyResponse:
      "The 'Ahl al-Ray' label described the Kufan methodological emphasis (systematic analogy), not the absence of texts: the school's hierarchy puts Qur'an, Sunnah and ijma' first, and its evidence-carrying manuals cite them throughout. Analogy (qiyas) itself is a textual discipline, not free opinion.",
    shortAnswer:
      "No — the school's hierarchy is Qur'an, Sunnah, ijma', then qiyas; 'ra'y' described its systematic-analogy emphasis, not text-rejection.",
    shortAnswerUr:
      "نہیں — مذہب کی ترتیب قرآن، سنت، اجماع، پھر قیاس ہے؛ 'رائے' اس کے منظم قیاس کے غلبے کی طرف اشارہ تھا، متن کے انکار نہیں۔",
    shortAnswerAr:
      "لا — ترتيب المذهب: القرآن ثم السنة ثم الإجماع ثم القياس؛ و«الرأي» كان وصفاً لغلبة القياس المنظم عنده، لا إنكاراً للنصوص.",
    sources: [
      { kind: "BOOK", ref: "Usul al-Sarakhsi", translation: "The evidence hierarchy.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani)", translation: "Evidence-carrying throughout.", status: "VERIFIED" },
    ],
    variants: ["Is Hanafi fiqh opinion based?", "Ahl al ray opinion school"],
    related: ["madhhab-ahl-ray", "usul-hanafi-principles"],
  },
  {
    slug: "misc-taraweeh-20-reject-8",
    question: "Do Hanafis reject 8-rak'ah taraweeh as invalid?",
    questionUr: "کیا حنفی آٹھ رکعات کی تراویح کو نامعتبر قرار دیتے ہیں؟",
    questionAr: "هل يعد الحنفية تراويح الثماني ركعات باطلة؟",
    category: "misconceptions",
    subcategory: "Salah",
    type: "MISCONCEPTION",
    difficulty: "INTERMEDIATE",
    cluster: "misconceptions-general",
    intent: "misconception",
    isMisconception: true,
    commonObjection: "\"Hanafis say 8-rak'ah taraweeh is invalid.\"",
    scholarlyResponse:
      "The school holds 20 is the transmitted congregational practice; it does not declare the 8-rak'ah night prayer INVALID — voluntary night prayer in any length is prayer. The dispute is over the congregational Ramadan standard, documented on both sides.",
    shortAnswer:
      "No — the school holds 20 rak'ahs is the transmitted congregational standard while night prayer of any length is valid prayer; the disagreement is about the congregational standard, not validity.",
    shortAnswerUr:
      "نہیں — مذہب کے نزدیک بیس رکعات منقولہ جماعتی معیار ہے جبکہ کسی بھی مقدار کی نمازِ شب صحیح نماز ہے؛ اختلاف جماعتی معیار پر ہے، صحت پر نہیں۔",
    shortAnswerAr:
      "لا — يعتبر المذهب أن عشرين ركعة هي المعيار الجماعي المنقول، بينما قيام الليل بأي مقدار صلاة صحيحة؛ والخلاف في المعيار الجماعي لا في الصحة.",
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Salah — Taraweeh", translation: "The school's standard and its scope.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Is 8 rakat taraweeh wrong?", "Taraweeh 20 vs 8 validity"],
    related: ["salah-taraweeh-20", "salah-taraweeh-evidence"],
  },
  {
    slug: "misc-quran-created-claim",
    question: "Do Hanafis (Maturidis) believe the Qur'an is created?",
    questionUr: "کیا حنفی (ماتریدی) کے نزدیک قرآن مخلوق ہے؟",
    questionAr: "هل يعتقد الحنفية (الماتريدية) أن القرآن مخلوق؟",
    category: "misconceptions",
    subcategory: "Aqeedah",
    type: "MISCONCEPTION",
    difficulty: "ADVANCED",
    cluster: "misconceptions-general",
    intent: "misconception",
    isMisconception: true,
    commonObjection: "\"Maturidis said the Qur'an is created (like the Mu'tazila).\"",
    scholarlyResponse:
      "The Maturidi position: Allah's speech (kalam) is His eternal attribute; the Qur'an is His uncreated speech expressed in recited wording — the nuance was Maturidi's anti-Jahmi/Mu'tazila formulation, not a createdness claim. Tahawi's creed states the Qur'an is Allah's speech, uncreated.",
    shortAnswer:
      "No — the school affirms the Qur'an is Allah's uncreated speech; the Maturidi nuance distinguishes the eternal attribute from its recited expression, precisely AGAINST the createdness claim.",
    shortAnswerUr:
      "نہیں — مذہب کے نزدیک قرآن اللہ کا غیر مخلوق کلام ہے؛ ماتریدی نکتہ ابدی صفت اور اس کی تلاوت شدہ تعبیر میں فرق کرتا ہے — بالکل مخلوقیت کے دعوے کے خلاف۔",
    shortAnswerAr:
      "لا — يثبت المذهب أن القرآن كلام الله غير المخلوق؛ والتمييز الماتريدي بين الصفة الأزلية وتعبيرها المتلوة هو عين ضد ادعاء المخلوقية.",
    sources: [
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "'The Qur'an is the speech of Allah, uncreated' formulations.", status: "VERIFIED" },
      { kind: "BOOK", ref: "Sharh al-'Aqa'id al-Nasafiyyah (al-Taftazani)", translation: "The Maturidi kalam framework.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Is the Quran created Maturidi?", "Khalq ul quran dispute"],
    related: ["aqeedah-attributes-how", "term-sunni-meaning"],
  },
  {
    slug: "misc-taqlid-invented",
    question: "Was following madhhabs invented centuries after the Prophet ﷺ?",
    questionUr: "کیا مذاہب کی پیروی نبی کریم ﷺ کے صدیوں بعد ایجاد کی گئی؟",
    questionAr: "هل ابتُدع اتباع المذاهب قروناً بعد النبي ﷺ؟",
    category: "misconceptions",
    subcategory: "Methodology",
    type: "MISCONCEPTION",
    difficulty: "INTERMEDIATE",
    cluster: "misconceptions-general",
    intent: "misconception",
    isMisconception: true,
    commonObjection: "\"Madhhabs are a 300-years-later innovation.\"",
    scholarlyResponse:
      "Following qualified scholarship is commanded by 16:43 and practiced by the Companions (they asked, and 'if we do not know we return to 'Umar'); the madhhabs are the codification of that practice — codification is not invention.",
    shortAnswer:
      "No — following qualified scholarship is the Qur'anic command and the Companions' practice; the madhhabs codified it.",
    shortAnswerUr:
      "نہیں — باصلاحیت علماء کی پیروی قرآنی حکم اور صحابہ کرام کا عمل ہے؛ مذاہب نے اسے مدون کیا۔",
    shortAnswerAr:
      "لا — اتباع العلم المتأهل أمر قرآني وعمل الصحابة؛ والمذاهب دوّنته.",
    sources: [
      { kind: "QURAN", ref: "Al-Nahl 16:43", translation: "Ask the people of knowledge — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Usul al-Sarakhsi", translation: "The taqlid institution's continuity.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["When were madhhabs created?", "Are madhhabs an innovation?"],
    related: ["taqlid-what-is", "taqlid-necessary"],
  },
  {
    slug: "misc-witr-invalid-claim",
    question: "Do differences in Witr make Hanafi prayer invalid?",
    questionUr: "کیا وتر کے اختلاف سے حنفی نماز باطل ہو جاتی ہے؟",
    questionAr: "هل يبطل اختلاف الوتر صلاة الحنفية؟",
    category: "misconceptions",
    subcategory: "Salah",
    type: "MISCONCEPTION",
    difficulty: "BEGINNER",
    cluster: "misconceptions-general",
    intent: "misconception",
    isMisconception: true,
    commonObjection: "\"Your Witr is different so your prayer doesn't count.\"",
    scholarlyResponse:
      "Validity attaches to the pillars; Witr's method is a documented school difference within valid worship — the classical scholars of all schools treated one another's prayers as valid.",
    shortAnswer:
      "No — the Witr methods are documented school differences; prayers across the schools are valid by the scholars' agreement.",
    shortAnswerUr:
      "نہیں — وتر کے انداز مرثوم مذہبی اختلافات ہیں؛ سب مذاہب کی نمازیں علماء کے اتفاق کے مطابق صحیح ہیں۔",
    shortAnswerAr:
      "لا — صيغ الوتر خلافات مذهبية موثقة؛ والصلاة عند المذاهب كلها صحيحة باتفاق العلماء.",
    sources: [
      { kind: "BOOK", ref: "Bada'i' al-Sana'i' (al-Kasani), Kitab al-Witr", translation: "The difference-within-validity framework.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Is Hanafi witr valid?", "Witr validity dispute"],
    related: ["comp-witr-difference", "madhhab-pray-behind-other-imam"],
  },
  {
    slug: "misc-following-person",
    question: "Does following a madhhab mean following a person instead of Islam?",
    questionUr: "کیا مذہب کی پیروی کا مطلب اسلام کے بجائے کسی شخص کی پیروی ہے؟",
    questionAr: "هل يعني اتباع المذهب اتباع شخص بدل الإسلام؟",
    category: "misconceptions",
    subcategory: "Methodology",
    type: "MISCONCEPTION",
    difficulty: "BEGINNER",
    cluster: "misconceptions-general",
    intent: "misconception",
    isMisconception: true,
    commonObjection: "\"A madhhab means worshipping Abu Hanifa.\"",
    scholarlyResponse:
      "The school attributes its rulings to the Qur'an and Sunnah with Abu Hanifa as systematizer — the same relation a Shafi'i has to al-Shafi'i. Following the school is following its METHODOLOGY of the texts.",
    shortAnswer:
      "No — a madhhab is a methodology of the Qur'an and Sunnah; the imams are its systematizers, not its objects of worship.",
    shortAnswerUr:
      "نہیں — مذہب قرآن و سنت کا منہج ہے؛ ائمہ اس کے مدون کرنے والے ہیں، عبادت کے مراکز نہیں۔",
    shortAnswerAr:
      "لا — المذهب منهج للقرآن والسنة؛ والأئمة منظّموه لا معبودونه.",
    sources: [
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani)", translation: "The evidence-first structure of the school's manuals.", status: "VERIFIED" },
    ],
    variants: ["Do Hanafis follow Abu Hanifa over Islam?", "Madhhab worship claim"],
    related: ["madhhab-sect-or-school", "taqlid-what-is"],
  },
  {
    slug: "misc-dual-intention-claim",
    question: "Is the 'dual intention' (niyyat al-tamayuz) charge about following imams accurate?",
    questionUr: "کیا امام کی اقتداء کے بارے میں 'دو نیتوں' (نیۃ التمییز) کا الزام درست ہے؟",
    questionAr: "هل صحيح اتهام المقتدي بالأئمة بـ«النية المزدوجة» (نية التمييز)؟",
    category: "misconceptions",
    subcategory: "Salah",
    type: "MISCONCEPTION",
    difficulty: "ADVANCED",
    cluster: "misconceptions-general",
    intent: "misconception",
    isMisconception: true,
    commonObjection: "\"Hanafis pray with two intentions (following the imam + salah) which is an invented doctrine.\"",
    scholarlyResponse:
      "The school's own books define the follower's intention as the intention of prayer conformed to the imam's state — the 'dual intention' formulation is a polemical simplification; the school's intention theory is in its usul books.",
    shortAnswer:
      "The charge is a polemical simplification: the school's books describe the follower's intention as one intention conformed to the imam, not a separate invented second intention.",
    shortAnswerUr:
      "یہ الزام مخالفت کی سطحی سادگی ہے: مذہب کی کتب مقتدی کی نیت کو امام کی حالت کے مطابق ایک نیت بتاتی ہیں، الگ ایجاد شدہ دوسری نیت نہیں۔",
    shortAnswerAr:
      "الاتهام تبسيط جدلي: فكتب المذهب تصف نية المقتدي بأنها نية واحدة مطابقة لحال الإمام، لا نية ثانية مستحدثة منفصلة.",
    sources: [
      { kind: "BOOK", ref: "Usul al-Sarakhsi", translation: "The intention theory.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Bada'i' al-Sana'i' (al-Kasani), Kitab al-Salah", translation: "Following-the-imam intentions.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Niyyat al tamayuz claim", "Two intentions in jamaat"],
    related: ["salah-following-imam-rules", "salah-congregation-why"],
  },

  // ─────────────────────────── BOOKS & SCHOLARS ───────────────────────────
  {
    slug: "books-hidayah-famous",
    question: "What is al-Hidayah and why is it so famous?",
    questionUr: "الہدایہ کیا کتاب ہے اور یہ اس قدر مشہور کیوں ہے؟",
    questionAr: "ما هو كتاب الهداية ولماذا بهذا القدر من الشهرة؟",
    category: "books-scholars",
    subcategory: "Books",
    type: "HISTORICAL",
    difficulty: "BEGINNER",
    cluster: "scholars-books",
    intent: "source-lookup",
    shortAnswer:
      "Al-Hidayah (al-Marghinani, d. 593 AH) is the school's most-studied evidence-carrying manual — the basis of legal education and judicial practice from Central Asia to British-Indian courts for eight centuries.",
    shortAnswerUr:
      "الہدایہ (مرغینانی، وفات 593ھ) مذہب کی سب سے زیادہ پڑھی جانے والی دلائل والی کتاب ہے — آٹھ صدیوں تک وسطی ایشیا سے برطانوی ہندوستان کی عدالتوں تک قانونی تعلیم اور عدالتی عمل کی بنیاد۔",
    shortAnswerAr:
      "الهداية (للمرغيناني، ت 593هـ) هي متن المذهب الحامل للأدلة الأكثر دراسة — أساس التعليم القانوني والممارسة القضائية من آسيا الوسطى إلى محاكم الهند البريطانية لثمانية قرون.",
    sources: [
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani)", translation: "The work itself.", status: "VERIFIED" },
    ],
    variants: ["Al hidayah book", "Marghinani Hidayah"],
    related: ["usul-zahir-riwaya", "books-radd-muhtar"],
  },
  {
    slug: "books-radd-muhtar",
    question: "What is Radd al-Muhtar (Ibn Abidin) and why is it called the final word of the madhhab?",
    questionUr: "رد المحتار (ابن عابدین) کیا کتاب ہے اور اسے مذہب کی آخری بات کیوں کہا جاتا ہے؟",
    questionAr: "ما هو رد المحتار لابن عابدين ولماذا يسمى الكلمة الفصلية في المذهب؟",
    category: "books-scholars",
    subcategory: "Books",
    type: "HISTORICAL",
    difficulty: "INTERMEDIATE",
    cluster: "scholars-books",
    intent: "source-lookup",
    shortAnswer:
      "Ibn Abidin's (d. 1252 AH) super-commentary on al-Haskafi's Durr al-Mukhtar — the late-school reference where the fatwa-basis (mu'tamad) positions across the manuals are adjudicated; Ottoman and South Asian muftis treat it as the closing reference.",
    shortAnswerUr:
      "ابن عابدین کی (وفات 1252ھ) الحسکفی کی درالمختار پر حاشیہ — متاخر مذہب کا وہ مرجع جہاں کتب کے درمیان فتویٰ کی بنیاد (معتمد) مؤاقف کا فیصلہ ہوتا ہے؛ عثمانی اور برصغیر کے مفتی اسے آخری مرجع مانتے ہیں۔",
    shortAnswerAr:
      "حاشية ابن عابدين (ت 1252هـ) على الدر المختار للحصكفي — مرجع متأخري المذهب الذي يفصل فيه بين المواقف المعتمدة للفتوى عبر المتون؛ ويعتبره مفتو العثمانيين وجنوب آسيا المرجع الختامي.",
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin)", translation: "The work itself.", status: "VERIFIED" },
    ],
    variants: ["Radd al muhtar author", "Ibn Abidin book"],
    related: ["books-hidayah-famous", "books-fatawa-hindiyyah"],
  },
  {
    slug: "books-fatawa-hindiyyah",
    question: "What is Fatawa Hindiyyah (al-Fatawa al-'Alamgiriyyah)?",
    questionUr: "فتاویٰ ہندیہ (الفتاویٰ عالمگیری) کیا ہے؟",
    questionAr: "ما هي الفتاوى الهندية (الفتاوى العالمكيرية)؟",
    category: "books-scholars",
    subcategory: "Books",
    type: "HISTORICAL",
    difficulty: "INTERMEDIATE",
    cluster: "scholars-books",
    intent: "source-lookup",
    shortAnswer:
      "The Mughal emperor Aurangzeb's ('Alamgir's) commissioned compilation of the school's rulings by a board of ~500 scholars — the empire's judicial reference and one of the largest fatawa collections ever assembled.",
    shortAnswerUr:
      "مغل شہنشاہ اورنگزیب (عالمگیر) کے فرمان پر تقریباً 500 علماء کے بورڈ سے مرتب کیا گیا مذہب کے احکام کا مجموعہ — سلطنت کا عدالتی مرجع اور اب تک مرتب کیے گئے سب سے بڑے فتاویٰ مجموعوں میں سے ایک۔",
    shortAnswerAr:
      "مجموعة أحكام المذهب التي أمر بتجميعها الإمبراطور المغولي أورنكزيب (عالمكير) بمجلس من نحو خمسمائة عالم — المرجع القضائي للإمبراطورية ومن أكبر مجموعات الفتاوى التي جمعت قط.",
    sources: [
      { kind: "BOOK", ref: "Fatawa Hindiyyah (al-Fatawa al-'Alamgiriyyah)", translation: "The compilation itself.", status: "VERIFIED" },
    ],
    variants: ["Alamgiri fatawa", "Fatawa Hindiyyah author"],
    related: ["books-radd-muhtar"],
  },
  {
    slug: "books-fatawa-razvia",
    question: "What is Fatawa Razvia (Fatawa Razawiyyah)?",
    questionUr: "فتاویٰ رضویہ کیا ہے؟",
    questionAr: "ما هي فتاوى رضوية؟",
    category: "books-scholars",
    subcategory: "Books",
    type: "HISTORICAL",
    difficulty: "INTERMEDIATE",
    cluster: "scholars-books",
    intent: "source-lookup",
    shortAnswer:
      "Ahmad Raza Khan's (d. 1340 AH/1921 CE) multi-volume Urdu/Arabic fatawa collection of the South Asian Hanafi (Barelvi) tradition — covering fiqh and a heavily defended aqeedah/tawassul/Mawlid corpus; the platform cites it where it genuinely discusses an issue.",
    shortAnswerUr:
      "احمد رضا خان کی (وفات 1340ھ/1921ء) برصغیر کے حنفی (بریلوی) سلسلے کا متعدد جلدوں پر مشتمل اردو/عربی فتاویٰ مجموعہ — جس میں فقہ اور سخت دفاع والا عقیدہ/توسل/عید میلاد کا ذخیرہ شامل ہے؛ پلیٹ فارم اسے وہاں نقل کرتا ہے جہاں یہ واقعی کسی مسئلے پر بحث کرتا ہے۔",
    shortAnswerAr:
      "مجموعة فتاوى أحمد رضا خان (ت 1340هـ/1921م) متعددة المجلدات بالأردية والعربية من التراث الحنفي (البريلوي) في جنوب آسيا — تشمل الفقه وتراثاً عقائدياً (توسل/مولد) يدافع عنه بشدة؛ وتنقلها المنصة حيث تناقش مسألة فعلياً.",
    sources: [
      { kind: "BOOK", ref: "Fatawa Razvia (Ahmad Raza Khan)", translation: "The collection itself.", status: "VERIFIED" },
    ],
    variants: ["Fatawa razvia volumes", "Ahmad Raza Khan books"],
    related: ["sa-barelvi-deobandi", "books-fatawa-hindiyyah"],
  },
  {
    slug: "books-nur-al-idah",
    question: "What is Nur al-Idah and who uses it?",
    questionUr: "نور الایضاح کیا کتاب ہے اور اسے کون استعمال کرتے ہیں؟",
    questionAr: "ما هو كتاب نور الإيضاح ومن يستعمله؟",
    category: "books-scholars",
    subcategory: "Books",
    type: "BEGINNER",
    difficulty: "BEGINNER",
    cluster: "scholars-books",
    intent: "source-lookup",
    shortAnswer:
      "Al-Shurunbulali's (d. 1069 AH) purification-and-prayer manual — the beginner's gateway text of the school across South Asia and the Arab world, with his own commentary Maraqi al-Falah.",
    shortAnswerUr:
      "شرنبالی کی (وفات 1069ھ) طہارت و نماز کی کتاب — برصغیر اور عرب دنیا میں مذہب کی ابتدائی دروازہ کتاب، جس پر خود ان کی شرح مرقاۃ الفلاح ہے۔",
    shortAnswerAr:
      "متن الشورنبلي (ت 1069هـ) في الطهارة والصلاة — بوابة المبتدئ إلى المذهب في جنوب آسيا والعالم العربي، مع شرحه مراقي الفلاح.",
    sources: [
      { kind: "BOOK", ref: "Nur al-Idah (al-Shurunbulali)", translation: "The manual itself.", status: "VERIFIED" },
    ],
    variants: ["Nur al idah author", "Maraqi al falah book"],
    related: ["books-hidayah-famous"],
  },
  {
    slug: "books-bahishti-zewar",
    question: "What is Bahishti Zewar (Heavenly Ornaments)?",
    questionUr: "بہشتی زیور کیا کتاب ہے؟",
    questionAr: "ما هو كتاب «بهشتی زیور» (حليّ الجنة)؟",
    category: "books-scholars",
    subcategory: "Books",
    type: "BEGINNER",
    difficulty: "BEGINNER",
    cluster: "scholars-books",
    intent: "source-lookup",
    shortAnswer:
      "Ashraf Ali Thanwi's (d. 1362 AH/1943 CE) Urdu practice compendium for households — fiqh, worship, and conduct in the Deobandi Hanafi tradition, among the most-circulated Islamic books of the subcontinent.",
    shortAnswerUr:
      "اشرف علی تھانوی کی (وفات 1362ھ/1943ء) خانگی معاشرت کے لیے اردو عملی مجموعہ — دیوبندی حنفی سلسلے میں فقہ، عبادت اور معاشرت؛ برصغیر کی سب سے زیادہ متداول اسلامی کتابوں میں سے ایک۔",
    shortAnswerAr:
      "موسوعة أشرف علي التهانوي (ت 1362هـ/1943م) العملية بالأردية للبيوت — فقه وعبادة وسلوك في التراث الحنفي الديوبندي، ومن أكثر الكتب الإسلامية تداولاً في شبه القارة.",
    sources: [
      { kind: "BOOK", ref: "Bahishti Zewar (Ashraf Ali Thanwi)", translation: "The compendium itself.", status: "VERIFIED" },
    ],
    variants: ["Bahishti zewar book", "Thanwi heavenly ornaments"],
    related: ["sa-barelvi-deobandi", "books-fatawa-razvia"],
  },

  // ─────────────────────────── SOUTH ASIAN PRACTICES ───────────────────────────
  {
    slug: "sa-practices-giyarvin",
    question: "What is Giyarvin Sharif and what do scholars say about it?",
    questionUr: "گیارویں شریف کیا ہے اور علماء اس کے بارے میں کیا کہتے ہیں؟",
    questionAr: "ما هو «الجيارفين شريف» وماذا يقول العلماء عنه؟",
    category: "south-asian",
    subcategory: "Local practices",
    type: "COMPARISON",
    difficulty: "INTERMEDIATE",
    cluster: "south-asian-practice",
    intent: "fiqh",
    isDisputed: true,
    disputedNote: "The monthly remembrance gathering ('11th') is a documented practice-divide: participants treat it as isal al-thawab + remembrance; critics treat the fixed communal form as innovation — the dispute mirrors the bid'ah-classification debate.",
    shortAnswer:
      "A monthly (11th) remembrance gathering associated with Shaikh 'Abd al-Qadir Jilani's memory — recitation, salawat, meals — affirmed by its practitioners as reward-gifting; criticized by stricter scholars as a fixed religious form; the dispute is documented.",
    shortAnswerUr:
      "شیخ عبدالقادر جیلانی کی یاد سے منسوب ماہانہ (تاریخِ گیارہ) ذکر کی محفل — تلاوت، درود، کھانا — اس کے شرکاء اسے اِصالِ ثواب قرار دیتے ہیں؛ سخت گیر علماء اسے مقرر شدہ مذہبی صورت کہہ کر تنقید کرتے ہیں؛ اختلاف مرثوم ہے۔",
    shortAnswerAr:
      "مجلس ذكر شهري (في الحادي عشر) مرتبط بذاكر الشيخ عبد القادر الجيلاني — تلاوة وصلاة على النبي وطعام — يعتبره ممارسوه إصالة للثواب؛ وينتقده العلماء الأشد تحفظاً بوصفه صيغة دينية مقررة؛ والخلاف موثق.",
    sources: [
      { kind: "BOOK", ref: "Fatawa Razvia (Ahmad Raza Khan) — commemoration discussions", translation: "The permissive treatment.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Imdad al-Fatawa (Ashraf Ali Thanwi)", translation: "The critical treatment of fixed forms.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Giyarvin sharif 11th", "Ghouse pak giyarvin"],
    related: ["bidah-custom-difference", "mawlid-ruling"],
  },
  {
    slug: "sa-practices-urs",
    question: "What is an Urs and how is it viewed within Hanafi scholarship?",
    questionUr: "عرس کیا ہے اور فقہ حنفی میں اسے کیسے دیکھا جاتا ہے؟",
    questionAr: "ما هو العرس وكيف يُنظر إليه في الفقه الحنفي؟",
    category: "south-asian",
    subcategory: "Local practices",
    type: "COMPARISON",
    difficulty: "INTERMEDIATE",
    cluster: "south-asian-practice",
    intent: "fiqh",
    isDisputed: true,
    disputedNote: "Annual death-anniversary commemorations: affirmed within the permissive tradition (with conditions against excess), discouraged/criticized by stricter scholarship — a documented divide.",
    shortAnswer:
      "The annual death-anniversary commemoration of a righteous scholar/saint — gatherings, du'a, (in some places) fairs: the scholarly range spans conditional affirmation to criticism; excesses (worship-like acts, mixing) are criticized within the school itself.",
    shortAnswerUr:
      "کسی صالح عالم/ولی کی سالانہ وفات کی یاد — محفلیں، دعا، (کچھ مقامات پر) میلے: علمی رجحان مشروط جواز سے تنقید تک پھیلا ہوا ہے؛ غلو کی صورتیں (عبادت جیسے اعمال، اختلاط) مذہب کے اندر ہی موردِ تنقید ہیں۔",
    shortAnswerAr:
      "الاحتفال السنوي بذكرى وفاة عالم/ولي صالح — مجالس وأدعية و(في بعض الجهات) مواسم: يمتد المدى العلمي من الإثبات المشروط إلى النقد؛ وينتقد الغلو (الأعمال المشابهة للعبادة والاختلاط) داخل المذهب نفسه.",
    sources: [
      { kind: "BOOK", ref: "Fatawa Razvia (Ahmad Raza Khan) — Urs discussions", translation: "The permissive treatment with conditions.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Urs meaning Islam", "Death anniversary gatherings"],
    related: ["sa-practices-giyarvin", "bidah-custom-difference"],
  },
  {
    slug: "sa-practices-khatam",
    question: "What is a 'khatam' gathering (Qur'an recitation for the deceased) in South Asian practice?",
    questionUr: "برصغیر کے عمل میں 'ختم' کی محفل (متوفی کے لیے قرآن خوانی) کیا ہے؟",
    questionAr: "ما هي مجالس «الختم» (تلاوة القرآن للمتوفى) في عُرف جنوب آسيا؟",
    category: "south-asian",
    subcategory: "Local practices",
    type: "FIQH",
    difficulty: "INTERMEDIATE",
    cluster: "isal-thawab",
    intent: "fiqh",
    shortAnswer:
      "A communal Qur'an-completion with du'a gifting reward to the deceased — resting on the school's isal al-thawab framework; scholars discuss the specific format (fixed surahs/counts) vs the general principle of reward-gifting.",
    shortAnswerUr:
      "اجتماعی قرآن ختم کر کے دعا کے ساتھ ثواب متوفی کو ہدیہ کرنا — جو مذہب کے اِصالِ ثواب کے اصول پر قائم ہے؛ علماء خاص طریقے (مقرر سورتیں/تعداد) اور ہدیۂ ثواب کے عام اصول کے درمیان بحث کرتے ہیں۔",
    shortAnswerAr:
      "ختم قرآن جماعي مع دعاء يهدي ثوابه للميت — يستند إلى إطار إصالة الثواب في المذهب؛ ويناقش العلماء الصيغة الخاصة (السور والأعداد المقررة) مقابل مبدأ إهداء الثواب العام.",
    sources: [
      { kind: "BOOK", ref: "Fatawa Hindiyyah, Kitab al-Janazah", translation: "Reward-gifting frameworks.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Khatam after death", "Quran khatam for deceased"],
    related: ["isal-thawab-methods", "graves-dua-fatiha"],
  },
  {
    slug: "sa-practices-tabarruk",
    question: "What is tabarruk (seeking blessing) in South Asian practice?",
    questionUr: "برصغیر کے عمل میں تبرک (برکت تلاش کرنا) کیا ہے؟",
    questionAr: "ما هو التبرك في عُرف جنوب آسيا؟",
    category: "south-asian",
    subcategory: "Local practices",
    type: "TERMINOLOGY",
    difficulty: "BEGINNER",
    cluster: "south-asian-practice",
    intent: "informational",
    shortAnswer:
      "Seeking blessing from sacred items/places — from the Prophet's ﷺ relics (documented with the Companions) to later objects/places: the school's scholars permit the Prophet's ﷺ tabarruk directly, and discuss later items within caution against superstition.",
    shortAnswerUr:
      "مقدس اشیاء/مقامات سے برکت حاصل کرنا — نبی کریم ﷺ کے آثار (صحابہ کرام سے مرثوم) سے لے کر بعد کی اشیاء/مقامات تک: مذہب کے علماء نبی کریم ﷺ کے تبرک کی براہِ راست اجازت دیتے ہیں اور بعد کی اشیاء کو خرافات سے احتیاط کے اندر بحث کرتے ہیں۔",
    shortAnswerAr:
      "طلب البركة من الأشياء/الأماكن المقدسة — من آثار النبي ﷺ (الموثقة عند الصحابة) إلى الأشياء/الأماكن اللاحقة: يرخّص علماء المذهب في التبرك بالنبي ﷺ مباشرةً، ويناقشون الأشياء اللاحقة في إطار الحذر من الخرافة.",
    sources: [
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab al-Libas (tabarruk narrations)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
    ],
    variants: ["Tabarruk meaning", "Blessed items Islam"],
    related: ["nubuwwah-relics", "sa-practices-giyarvin"],
  },
  {
    slug: "sa-practices-mosque-cultures",
    question: "Why do Barelvi, Deobandi and Ahl-e-Hadith mosques differ in practice?",
    questionUr: "بریلوی، دیوبندی اور اہل حدیث مساجد کا عمل مختلف کیوں ہے؟",
    questionAr: "لماذا تختلف مساجد البريلوية والديوبندية وأهل الحديث في الممارسة؟",
    category: "south-asian",
    subcategory: "Community",
    type: "COMPARISON",
    difficulty: "BEGINNER",
    cluster: "south-asian-practice",
    intent: "informational",
    shortAnswer:
      "Because each community follows its scholars' rulings on contested practices (Mawlid, giyarvin, du'a after salah, ameen loudness, grave visits) — the fiqh-core is shared among the two Hanafi traditions; the differences are practice-level and documented.",
    shortAnswerUr:
      "اس لیے کہ ہر جماعت متنازع اعمال (عید میلاد، گیارویں، نماز کے بعد دعا، آمین بلند آواز سے، قبور کی زیارت) پر اپنے علماء کے فتاویٰ پر عمل کرتی ہے — فقہی مرکز دونوں حنفی سلسلوں میں مشترک ہے؛ فرق عملی سطح کا اور مرثوم ہے۔",
    shortAnswerAr:
      "لأن كل جماعة تتبع أحكام علمائها في الممارسات المتنازع فيها (المولد، الجيارفين، الدعاء بعد الصلاة، قول آمين بصوت مرتفع، زيارة القبور) — فجوهر الفقه مشترك بين التراثين الحنفيين؛ والاختلافات في مستوى الممارسة وموثقة.",
    sources: [
      { kind: "BOOK", ref: "Fatawa Razvia (Ahmad Raza Khan)", translation: "The permissive tradition's rulings.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Imdad al-Fatawa (Ashraf Ali Thanwi)", translation: "The restrained tradition's rulings.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Barelvi vs deobandi mosque", "Why do mosques differ?"],
    related: ["sa-barelvi-deobandi", "comp-ikhtilaf-etiquette"],
  },
];
