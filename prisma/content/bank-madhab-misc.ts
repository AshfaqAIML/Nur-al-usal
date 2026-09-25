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
      { kind: "BOOK", ref: "Fatawa Hindiyyah (al-Fatawa al-'Alamgiriyyah)", translation: "The Mughal-commissioned judicial reference — state adoption in the subcontinent.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Why is Hanafi the biggest madhhab?", "Which countries follow Hanafi?"],
    related: ["madhhab-what-is", "hist-abu-hanifa-who"],
    detailedAnswer:
      "The school's spread was institutional as much as intellectual. Under the Abbasids, Imam Abu Yusuf became the first Chief Qadi (qadi al-qudat), and Hanafi practice shaped the judiciary of Baghdad; the madrasa networks of Transoxiana, Khurasan and Anatolia taught the school's texts as their core curriculum. The Ottoman state made Hanafi fiqh the working law of its courts and scholarly establishment (ilmiyye), and the Mughals commissioned the Fatawa 'Alamgiriyyah (Fatawa Hindiyyah) as an empire-wide judicial reference — the same pattern held in Afghanistan and the Central Asian khanates.\n\nTransmission also ran through a defined curriculum of texts: al-Quduri's Mukhtasar for beginners, al-Marghinani's al-Hidayah as the intermediate evidence-carrying text, al-Shaybani's al-Mabsut and the later fatawa corpora (Fatawa Hindiyyah, Radd al-Muhtar) as advanced references — a ladder generations of students climbed from Bosnia to Bengal. In British India, the English rendering of al-Hidayah (Hamilton, 1791) became a reference for 'Anglo-Muhammadan' personal law, extending the school's footprint into colonial courts.\n\nThe result is demographic: the regions this transmission system reached — Turkey, the Balkans, Central Asia, Afghanistan, Pakistan, India, Bangladesh, and significant Arab populations — hold the largest share of Sunni Muslims today. The answer is therefore historical, not confessional: numbers track a millennium of state adoption, madrasa networks and book transmission, and no claim is being made about the relative merit of other schools.",
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
    detailedAnswer:
      "The technical vocabulary matters. Switching between schools issue-by-issue to assemble a preferred composite is talfiq, and the usul books prohibit talfiq driven by desire — a composite ruling no school itself holds has no evidence-chain at all. Radd al-Muhtar's talfiq discussion (cited in this question's sources) works the boundaries: the prohibition targets manufacturing positions, and it is distinguished from a layman's simply asking a DIFFERENT qualified mufti about a new issue — which the strict South Asian position itself confines to specific causes (necessity, hardship, a verified need), not preference. Fatawa Razvia's taqlid discussions carry the strict line's rationale: the layman cannot adjudicate between schools, so binding to one madhhab disciplines desire (hawa) and keeps practice coherent — the alternative invites selecting rulings to fit appetite, which corrupts both practice and intention.\n\nThe other documented position — the taqlid ghayr mutlaq line, held in various formulations by earlier and later scholars — argues from taqlid's purpose: compliance with Allah's command through qualified scholarship, and any trustworthy qualified mufti of any Sunni madhhab supplies that; the madhhab-boundary is pedagogical discipline, not a shari'ah end in itself. Its holders add conditions: switching needs a real cause, not ease; a layman who switches mid-issue to dodge a binding obligation has honoured no school; and the 'I compared the evidence myself' route stays closed to the non-scholar on both sides of the debate.\n\nBoth camps agree on more than they differ: no self-derivation for laymen; no desire-driven talfiq; switching requires cause; ongoing practice should be consistent rather than improvised issue-by-issue. The precise disagreement: whether the layman's default referral is confined to one madhhab's muftis (the strict position's discipline) or extends to any qualified mufti (the taqlid ghayr mutlaq latitude). It is a documented disagreement among Hanafi scholars themselves; the fatawa literature's practical counsel is consistency under one's mufti, revisited only with serious cause.",
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
      { kind: "BOOK", ref: "Al-Risala (al-Shafi'i)", translation: "The first systematized treatise of usul al-fiqh — the Shafi'i school's codification.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Muwatta Malik", translation: "The Maliki school's foundational practice-and-hadith corpus.", status: "VERIFIED" },
    ],
    variants: ["4 madhabs list", "Who founded the Hanafi school?"],
    related: ["madhhab-what-is", "hist-abu-hanifa-who"],
    detailedAnswer:
      "The four surviving schools correspond to four teachers whose students codified their rulings into books that supported long-term transmission. Abu Hanifa (d. 150 AH) taught in Kufa; his students Abu Yusuf (d. 182 AH), Muhammad al-Shaybani (d. 189 AH), Zufar (d. 158 AH) and al-Hasan ibn Ziyad wrote the school out — al-Shaybani's six books becoming its core corpus. Malik ibn Anas (d. 179 AH) taught in Madinah around the Muwatta' and the city's transmitted practice; his school reached North and West Africa through Sahnun's Mudawwana. Al-Shafi'i (d. 204 AH), who studied under Malik and debated the Hanafi jurists in Baghdad, systematized usul al-fiqh in al-Risala and recorded his fiqh in al-Umm. Ahmad ibn Hanbal (d. 241 AH) taught in Baghdad, anchored in hadith compilation (the Musnad) and the usul he learned from al-Shafi'i's framework.\n\nOther jurists of the same era — al-Awza'i in Syria, al-Layth ibn Sa'd in Egypt, Sufyan al-Thawri in Kufa — also led schools, but their traditions did not survive with the same written infrastructure and teaching networks; survival tracked codification and institutional transmission, not merely talent. This is standard biographical history, not a judgment on the early imams themselves.\n\nGeography still reflects that history: the Hanafi school dominates Turkey, the Balkans, Central Asia, Afghanistan and the subcontinent; the Maliki school North and West Africa and parts of the Gulf and Upper Egypt; the Shafi'i school Egypt, Kurdistan, Yemen, East Africa and Southeast Asia; the Hanbali school the Arabian Peninsula's interior. Each school reads the same Qur'an and Sunnah through its own documented usul.",
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
      { kind: "QURAN", ref: "Al-Nisa 4:59", translation: "Obey Allah, the Messenger and those in authority among you — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "QURAN", ref: "Al-Imran 3:103", translation: "Hold fast, all together, to the rope of Allah and do not divide — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
    ],
    variants: ["Are madhhabs sects?", "Why not one madhhab for all?"],
    related: ["madhhab-sect-or-school", "madhhab-pray-behind-other-imam"],
    detailedAnswer:
      "The condemned splitting the Qur'an names is defined by its own context: those who 'split their religion and became sects' (Al-An'am 6:159) are creedal parties — groups dividing over the object of belief itself — and the parallel warnings target difference after clear knowledge with hardened hearts. Fiqh diversity within one creed is a different phenomenon, and the revelation itself presupposes qualified judgement: 'obey Allah, the Messenger and those in authority among you' (Al-Nisa 4:59) routes disputes to arbiters whose qualified judgements may differ — and the Prophet ﷺ accepted two competing valid readings from his own Companions without rebuke (the Banu Qurayza expedition's two interpretations, documented in the ikhtilaf-etiquette entry).\n\nThe historical record confirms the category-difference: the four schools shared one creed (al-'Aqidah al-Tahawiyyah, authored by a Hanafi, is the shared confession), prayed in one another's mosques, cited one another's books, and legally intermarried for a millennium — while the actual sect-formations in Islamic history (the creedal schisms) divided on theology, not on witr's shape or qunut's timing. The scholars' literature treats legitimate fiqh-ikhtilaf as a mercy of the derivation process — the mujtahid-err maxim rewards the differing jurist — and builds an entire etiquette (adab al-ikhtilaf) to keep difference from hardening into division.\n\nThe objection retains a real core the scholars themselves acknowledge: madhhab-loyalty culture can drift into ta'assub — rivalry, contempt, social sorting — and the classical books condemn that drift in terms; the modern amplification of mutual polemics is a fair further point. The honest line this platform holds: fiqh-diversity is documented scholarship; condemned-splitting is creedal and attitudinal; the danger to guard is not difference itself but contempt — and that duty binds the madhhab-following and the anti-madhhab camps equally ('hold fast, all together, to the rope of Allah and do not divide' — Al-Imran 3:103).",
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
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), introduction — discussion of the ranks of mujtahids", translation: "The late-school catalogue of juristic capacity and its reachability.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Why only four madhhabs?", "Can a new mujtahid arise?"],
    related: ["ijtihad-ordinary-muslim", "madhhab-four-founders"],
    detailedAnswer:
      "Founding a madhhab in the classical sense means producing a complete juristic apparatus: a mujtahid-mutlaq who can derive rulings from the entire corpus without leaning on another school's framework; a usul that can be taught, critiqued and applied; and a scholarly community that transmits, tests and argues with the positions for centuries. The four schools crossed that threshold — their founders' rulings were written out by students, carried across empires, and refined by a thousand years of commentary, which is the survival filter no later project has matched.\n\nThe classical texts also rank juristic capacity honestly: Ibn Abidin's introduction to Radd al-Muhtar catalogues the tiers (mujtahid mutlaq, mujtahid within the madhhab like the sahibayn, mujtahid in single issues, mufti, layman) and discusses whether the higher tiers remain reachable. The mainstream judgment is that the full mutlaq apparatus — direct access to the corpus as transmitted, the shared scholarly culture and the legal ecology around it — no longer assembles in practice, while ijtihad within the madhhab demonstrably continues and muftis revisit the school's mu'tamad positions.\n\nNone of this claims divine favour for four men. A madhhab is not one scholar's opinion but an ecosystem of texts, commentaries, counter-commentaries and fatawa refined over generations. Anyone may study and derive for himself; the historical question is whether the ecosystem around a new derivation can be built, tested and transmitted the way the classical ones were.",
    hanafiPosition: "The school holds that the complete mujtahid-mutlaq apparatus is historically unrepeatable in practice while ijtihad within the madhhab continues; binding laymen to tested madhhab scholarship is the safe path.",
    otherViews: "Some modern scholars argue the door of complete ijtihad remains open in principle and that 'founding madhhabs' is only a human institutional limit; classical-orientation scholars respond that the conditions the usul books document are not currently met. The platform records the disagreement without adjudicating it.",
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
      { kind: "BOOK", ref: "Al-Intiqa' fi Fada'il al-Thalathah al-A'immah al-Fuqaha (Ibn 'Abd al-Barr)", translation: "The early imams' methods compared by a Maliki hadith master.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Ahl al ray meaning", "Kufa vs Madinah fiqh schools"],
    related: ["hist-abu-hanifa-who", "usul-hanafi-principles"],
    detailedAnswer:
      "In the first two centuries, juristic geography split between Iraq and Madinah. The Kufan tradition — reaching back to 'Abdullah ibn Mas'ud and 'Ali (may Allah be pleased with them) through 'Alqamah, Ibrahim al-Nakha'i and Hammad ibn Abi Sulayman to Abu Hanifa — is the 'Ahl al-Ray' line: it leaned on systematic analogy (qiyas). Iraq hosted a volatile hadith environment and lacked a single settled practice corpus, so the Kufans weighed narrations under strict conditions and extended established rulings through disciplined analogy.\n\nThe Madinan line — Sa'id ibn al-Musayyab and the city's jurists down to Malik — carries the 'Ahl al-Hadith/Athar' label: Madinah preserved dense, continuous practice from the Prophet's ﷺ era, so Malik treated 'amal ahl al-Madinah (the city's settled practice) as evidence and was readier to accept reports carried by local practice.\n\nBoth lines used hadith and both used ijtihad; the labels describe emphasis, not essence. Al-Shafi'i — who studied under Malik and debated the Hanafi jurists in Baghdad — then fused systematic usul with hadith primacy, which is why throwing the 'ahl al-ray vs ahl al-hadith' frame at the codified schools is anachronistic: each surviving school is both text-anchored and reasoning-governed.",
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
      { kind: "HADITH", ref: "Sunan al-Tirmidhi, Kitab al-'Ilm (narration of Abu al-Darda' — the scholars are the heirs of the prophets)", translation: "paraphrased translation", status: "UNVERIFIED", note: "chapter-level citation; number pending verification" },
      { kind: "QURAN", ref: "Al-Nisa 4:140", translation: "Do not sit with those who mock Allah's verses until they change their discourse — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
    ],
    variants: ["Can I criticize Abu Hanifa?", "Making fun of madhhabs"],
    related: ["madhhab-splitting-ummah", "comp-ikhtilaf-etiquette"],
    detailedAnswer:
      "The Qur'an forbids ridiculing a people outright (Al-Hujurat 49:11) and commands walking away from sessions where revelation itself is being mocked (Al-Nisa 4:140). The scholars of the law are the ummah's transmitters of that revelation — the Prophet ﷺ is reported to have described the scholars as the heirs of the prophets (Sunan al-Tirmidhi, Kitab al-'Ilm, narration of Abu al-Darda') — so deriding them over their juristic positions attacks the machinery by which the din is known.\n\nThe classical texts rank the offence by its target. Disagreeing with a scholar's derivation is ordinary, even meritorious, scholarship — the schools argue with one another constantly. Ridiculing the scholar personally, or holding the din's rulings up to contempt because a school teaches them, is grave; the aqeedah works treat contempt for the din as the boundary where sin collapses into something far more serious, and several fiqh discussions place ridiculing the sacred law's categories among its honour-categories.\n\nThe discipline of ikhtilaf etiquette exists precisely because the schools' disagreements are legitimate: if disagreement were crime, etiquette would not be needed; if mockery were debate, the Qur'an would not have forbidden it. Honest criticism cites evidence and addresses positions — mockery does neither.",
    hanafiPosition: "Classical Hanafi texts treat ridiculing scholars and madhhabs as a serious sin — and where it becomes contempt for the din's rulings, among the gravest of matters; reasoned criticism of a derivation is not mockery.",
    practicalInfo: "Disagree with positions, cite evidence, keep the tone respectful; whoever has mocked scholars or the din should turn to tawbah (repentance) rather than doubling down.",
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
      { kind: "BOOK", ref: "Kitab al-Athar (attributed to Imam Abu Hanifa)", translation: "His transmitted athar/hadith-based work.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Biography of Abu Hanifa", "How did Abu Hanifa die?"],
    related: ["madhhab-what-is", "hist-abu-hanifa-muhaddith", "hist-abu-hanifa-companions"],
    detailedAnswer:
      "Nu'man ibn Thabit was born in Kufa in 80 AH into a trading family; the biographical (manaqib) literature describes his early silk business and his turn to learning in Kufa's juristic circles, where the literature reports he studied fiqh for years — around eighteen — under Hammad ibn Abi Sulayman, the Kufan tradition's link from Ibrahim al-Nakha'i back to the students of 'Abdullah ibn Mas'ud. He also pursued hadith broadly, including journeys of learning recorded in the biographical corpus.\n\nWhen Hammad died, Abu Hanifa — then around forty — took over the Kufan teaching circle. His method was to weigh every narration against the whole corpus and to extend principles through disciplined analogy; the school's later books preserve thousands of his reported positions through his students' transmission rather than through his own pen. His students Abu Yusuf, Muhammad al-Shaybani, Zufar and al-Hasan ibn Ziyad codified the school in writing — which is why the school bears his name while its corpus carries their transmission.\n\nUnder the Abbasids he refused the qadi appointment — the manaqib literature frames this as refusing to adjudicate under a pressure he judged illegitimate — and was imprisoned in Baghdad, dying there in 150 AH. It was the students' codification, especially al-Shaybani's six books, that made 'Hanafi' a transmissible school rather than a memory.",
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
    detailedAnswer:
      "The claim that Abu Hanifa stood apart from hadith contradicts the record on several independent layers. First, the biographical corpus (manaqib and tarajim) counts him among Kufa's hadith students and transmitters, lists his hadith teachers — senior tabi'in such as 'Ata' ibn Abi Rabah and Qatadah are named in the biographical literature — and records his famously strict standards: the literature reports that he would not accept a narrator's report without established reliability, a caution that shaped the school's evidential thresholds.\n\nSecond, the school's foundational Kitab al-Athar (attributed to Abu Hanifa with transmission through Abu Yusuf) is an athar/hadith collection of roughly a thousand narrated reports with their chains — a jurist who 'did not know hadith' does not leave behind a transmitted athar corpus. Third, al-Shaybani's Zahir al-Riwaya cites hadith throughout and preserves Abu Hanifa's judgements on them.\n\nHonest bookkeeping: none of this makes every narration-grading about him unanimous — hadith critics have long discussed individual chains in both directions, and later polemics exaggerated both the praise and the blame. What the documented record shows is the middle: a tabi'i-era jurist formed by hadith study, whose school's method is precisely the careful handling of narrations.",
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
    detailedAnswer:
      "A tabi'i is one who met a Companion in a state of faith. Anas ibn Malik (RA), the Prophet's ﷺ servant, lived until 93 AH (he died in Basra); Abu Hanifa was born in 80 AH in Kufa. The manaqib literature records that the child Nu'man saw Anas ibn Malik — the sighting that places Abu Hanifa in the tabi'i generation. What this does not mean: he did not narrate from the Companions as a student, since the recorded meeting was in childhood.\n\nThe methodologically important link is different: Kufa itself was a Companion-founded scholarly city — 'Ali and Ibn Mas'ud (RAA) settled there, and Ibn Mas'ud's students ('Alqamah, al-Aswad, Masruq) trained Ibrahim al-Nakha'i, who trained Hammad ibn Abi Sulayman, who trained Abu Hanifa. The school's authority claim therefore rests not on a childhood sighting but on an unbroken teaching isnad from the Companions' students to the Imam — the chain the classical books invoke when they call the Kufan school the fiqh of Ibn Mas'ud's line.",
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
      { kind: "BOOK", ref: "Usul al-Bazdawi (Kanz al-Wusul)", translation: "The school's usul in the standard eastern textbook.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Usul al-Shashi — introductory chapters", translation: "The entry-level Hanafi usul primer.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Hanafi usul sources list", "What is istihsan?"],
    related: ["usul-istihsan", "usul-urf"],
    detailedAnswer:
      "The school's usul manuals order the sources with defined weights. First the Qur'an: definitive in wording and meaning, binding on every reading. Second the Sunnah: where it is definitive it binds outright; where a report reaches through singular chains, the school accepts it but weighs it against broader textual principles and settled practice — which is why specific Hanafi conclusions sometimes part ways with other schools' reading of a narration. Third, ijma': above all the consensus of the Companions, which the school treats as binding.\n\nFourth, qiyas: extending a ruling from an established case to a similar one through a shared cause ('illah), with conditions the usul books catalogue. Then the school's signature secondary tools: istihsan — leaving a strict analogy for a stronger evidence; 'urf — custom's role in specifying transactions; istishab — the presumption that an established state continues; shar'u man qablana — the revealed laws of earlier prophets, which the school's mu'tamad accepts as evidence except where our shari'ah specifies; and the Companions' individual statements as instructive evidence — the sahibayn (Abu Yusuf and al-Shaybani) repeatedly weigh a Companions' report against the Imam's qiyas and choose deliberately.\n\nThe hierarchy matters because it explains the school's character: heavy on textual anchoring at the top, heavy on disciplined reasoning at the bottom, with each tool's bounds defined so that reasoning never floats free of revelation. Al-Sarakhsi's Usul and the textbook tradition after him (al-Bazdawi, al-Shashi) are where this machinery is displayed in full.",
    hanafiPosition: "The school weights the sources in the order Qur'an, Sunnah, ijma' (especially the Companions'), qiyas — then istihsan, 'urf, istishab and related tools as bounded secondary evidence.",
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
      { kind: "BOOK", ref: "Al-Risala (al-Shafi'i) — the critique of istihsan", translation: "The Shafi'i methodological objection.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Istihsan meaning", "Why do Hanafis use istihsan?"],
    related: ["usul-hanafi-principles", "madhhab-why-differ-in-salah"],
    detailedAnswer:
      "Technically, istihsan is departing from the strict (jali) analogy in favour of a stronger evidence — a hidden analogy (qiyas khafi), custom, necessity, or a clearer text. The school's classic examples make it concrete: the salam/istisna' contract (commissioned manufacture with deferred delivery) contradicts the strict rule against selling what one does not possess, yet custom and necessity carry it — the Hidayah discusses it under sales as an istihsan. Al-Sarakhsi's own flagship example is wiping over footwear (khuffayn): the strict analogy from washing would demand bare-foot washing, while the stronger evidence of necessity supports the Sunnah's wiping.\n\nAl-Shafi'i's critique was methodological: istihsan, he argued, makes each jurist's private sense of what is 'better' into a lawgiver — the charge recorded in his Risala's discussion. The Hanafi response is definitional: istihsan is not preference as whim but departure FOR evidence — al-Sarakhsi defines it precisely as a qiyas of greater strength set against a qiyas of lesser strength, and the school's books document the underlying cause in every istihsan application.\n\nComparisons often note that the Shafi'i school reasons similarly where its own usul allows (maslahah-based argument within its framework), so the residual dispute is partly about the label and its discipline — a real methodological difference, but narrower than the polemics suggest.",
    hanafiPosition: "Istihsan is a recognized secondary source in the school: leaving the evident analogy only for documented stronger evidence, never for subjective preference.",
    otherViews: "The Shafi'i school rejects istihsan as a named source — its founder's critique is recorded in his Risala — reasoning that private preference is an unreliable legislator; it reaches similar results through its own sanctioned tools. The debate is about methodological control, not about texts versus compassion.",
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
    detailedAnswer:
      "'Urf (custom, 'adah) enters Hanafi fiqh wherever revelation spoke in general terms that communities concretise. The usul conditions it: custom must be settled (mustaqir) and widespread, practised by sound people, and must not contradict an explicit text ('urf sahih versus 'urf fasid). Its work then runs through all of mu'amalat: custom specifies what ambiguous contract-words mean; it sets the standard of mahr al-mithl (the dower customary among a woman's peers) and maintenance levels; it defines the weights, measures and market conventions on which sale, hire (ijarah) and partnership ride; it grounds whole institutions like istisna' (commissioned manufacture).\n\nIbn Nujaym's al-Ashbah codifies the school's maxim 'al-'adah muhakkamah' — custom is a decisive arbiter — and Hanafi fatawa constantly resolve by what is known among people in their dealings. The school's Iraqi commercial birthplace explains its comfort with custom: Kufa was an imperial trading hub, and its jurists built a transactional fiqh designed to travel.\n\nThe boundary is worship: custom can organise how contracted and customary matters run, but it cannot create religious ritual — new acts of worship belong to the bid'ah discussion, which is why the school separates 'urf from Sunnah cleanly.",
    hanafiPosition: "In the school, settled custom specifies transactional rules and fills textual silences (the maxim 'custom is a decisive arbiter'), while worship's forms remain fixed by revelation.",
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
      { kind: "BOOK", ref: "Nawadir al-Shaybani (al-Kaysaniyyat, al-Haruniyyat, al-Jurjaniyyat)", translation: "The exceptional-position layer of the corpus.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Mukhtasar al-Quduri", translation: "The compressed beginner matn built on the corpus.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["What is zahir al riwaya?", "Hanafi books hierarchy"],
    related: ["usul-hanafi-principles", "books-hidayah-famous"],
    detailedAnswer:
      "The school's corpus is ranked, not amorphous. Zahir al-Riwaya ('the openly transmitted') is al-Shaybani's six books — al-Mabsut (al-Asl), al-Jami' al-Saghir, al-Jami' al-Kabir, al-Ziyadat, al-Siyar al-Saghir and al-Siyar al-Kabir — whose contents carry the positions of Abu Hanifa, Abu Yusuf and al-Shaybani with stable attribution. The Nawadir (al-Kaysaniyyat, al-Haruniyyat, al-Jurjaniyyat) carry exceptional positions narrated only through al-Shaybani, and the waqi'at record later cases the trio confronted.\n\nLater jurists then built the textbook ladder on this base: al-Quduri's Mukhtasar compressed the corpus for beginners; al-Marghinani's al-Hidayah carried it with evidence; the fatawa literature (Fatawa Qadikhan, then the Mughal-commissioned Fatawa Hindiyyah) arranged rulings for practitioners; and the late commentary stratum (al-Durr al-Mukhtar, then Ibn Abidin's Radd al-Muhtar) adjudicated where the manuals diverge.\n\nThis ranking is why Hanafi fatwa has a resolution mechanism: when positions conflict, the mufti weighs zahir al-riwaya over the exceptional layers, and the mu'tamad (the fatwa-resting position) is determined by the tarjih literature — the school is a documented hierarchy, not a heap of citations.",
    hanafiPosition: "Fatwa in the school follows the mu'tamad determined across the ranked corpus: zahir al-riwaya at the core, the nawadir and fatawa layers weighed by the tarjih works, with Radd al-Muhtar as the late reference.",
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
      { kind: "BOOK", ref: "Adab al-Qadi (al-Khassaf)", translation: "The classical institutional treatment of the qadi's office.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["What is a mufti?", "Fatwa meaning Islam"],
    related: ["term-fatwa-meaning"],
    detailedAnswer:
      "The school's institutional books (adab al-qadi wa'l-mufti, from al-Khassaf's Adab al-Qadi onward) define two distinct offices. The mufti answers a question: his fatwa explains the ruling of the law for a specific questioner, is non-binding as an order, and rests on his knowledge of the school's mu'tamad positions. The qadi adjudicates a dispute: his judgment (hukm) binds the parties because the ruler's delegation of jurisdiction (wilayah) authorises him, and it operates through procedure — claims, evidence, oaths — not mere exposition.\n\nThe classics even permit the mufti and the qadi to differ in the same case: each answers within his own school-bound derivation, the qadi's binding judgment governs the dispute, and the mufti's fatwa guides conscience. The logic is that fatwa and qada are different speech-acts — explanation versus enforcement — and conflating them confuses the pulpit with the bench.\n\nModern practice inherits the distinction: fatwa houses (dar al-ifta) issue guidance without enforcement power; courts issue enforceable judgments. The mufti's ethical weight comes from scholarship and piety; the judge's from law and jurisdiction.",
    hanafiPosition: "Fatwa is a non-binding scholarly explanation; qada is the enforceable judgment of an authorised judge — and the school's books permit the two to diverge in the same case.",
    practicalInfo: "Treat a fatwa as guidance to weigh with a sincere conscience — not as a court order; where the rights of others are disputed, the path is adjudication, not fatwa-shopping.",
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
    detailedAnswer:
      "Ijma' is the agreement of a generation's qualified mujtahids on a ruling. The usul books grade it: the ijma' of the Companions stands highest — the school treats their agreed practice as binding evidence (the compilation of the Qur'an into one mushaf under Abu Bakr and 'Uthman is the standing historical example of a Companion-consensus decision executed institutionally); the ijma' of later generations binds within the conditions the manuals define — one era, qualified mujtahids, an expressed ruling.\n\nIts function is protective: the corpus faces every generation's private reinterpretations, and ijma' is the mechanism that certifies what the ummah's jurists collectively settled — after the Qur'an and Sunnah, it is the school's decisive proof. The epistemic honesty is also documented: universal ijma' is hard to verify, which is why the school's books usually invoke it narrowly (the Companions' consensus, or consensus on core pillars) rather than loosely.\n\nThe known usul debate is over scope: some scholars restricted binding ijma' to the Companions' era alone, reasoning that later generations' agreement cannot be verified exhaustively; others hold later ijma' binds where established. The school operates with the broader instrument, carefully applied.",
    hanafiPosition: "The school ranks ijma' — above all the Companions' consensus — as decisive proof after the Qur'an and Sunnah, guarding the corpus against private reinterpretation.",
    otherViews: "A documented strand in usul (associated with scholars like Ibn Hazm and reported from Imam Ahmad) restricts binding consensus to the Companions, reasoning that later universal agreement cannot be established with certainty; the Hanafi books apply the wider instrument under strict conditions.",
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
    detailedAnswer:
      "Lexically maslak is a road or path (from salaka, to travel a way). In South Asian Muslim usage it widened from the literal into an identity-word for one's scholarly tradition — 'Hanafi maslak', 'Deobandi maslak', 'Barelvi maslak', 'Ahl-e-Hadith maslak' — combining fiqh orientation, creedal emphasis and institutional belonging in one term. Urdu religious discourse uses maslak roughly where classical Arabic uses madhhab for the legal school; the English word inherits both shades at once.\n\nThe useful caution is what maslak is not: it is not a salvation boundary. The Qur'an's command is obedience to Allah and His Messenger ﷺ through sound knowledge; maslaks are human scholarly lineages that exist to serve that obedience. Classical scholarship treats fiqh-school difference as legitimate scholarship and locates the real danger in creedal deviation — so the term's weight should sit on which trustworthy scholarship one follows, not on tribal boundaries between Muslims who pray in one another's mosques.",
    practicalInfo: "Use 'maslak' to describe a scholarly orientation, not to sort people into castes; a Muslim's binding loyalty is to Allah's commands as transmitted by trustworthy scholarship.",
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
      { kind: "BOOK", ref: "Rasm al-Mufti (Ibn Abidin)", translation: "The late-school treatise on the mufti's conditions and work.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Fatwa definition", "Who can give a fatwa?"],
    related: ["usul-fatwa-vs-qada", "taqlid-what-is"],
    detailedAnswer:
      "A fatwa is the answer of a qualified jurist (mufti) to a specific questioner about a specific case. The school's adab al-mufti literature sets the issuer's conditions — mastery of the Qur'an and Sunnah, command of the school's ranked positions (mu'tamad), the ability to weigh cases (tarjih), and piety — and treats ifta' as a communal obligation (fard kifayah) so that every community maintains qualified muftis; Ibn Abidin's Rasm al-Mufti is the late-school treatment of the office.\n\n'Binding' needs precision: a fatwa binds no one as law. It binds the asker's conscience in the sense that a sincere questioner who received a qualified answer should not discard it for convenience; it does not bind other people, and it has no enforcement power (see the fatwa/qada distinction). Because fatwas are case-specific, two qualified muftis may legitimately differ for two questioners whose circumstances differ — the mufti weighs the asker's custom ('urf), capacity and situation.\n\nThis is why the discipline includes how to ask: take the question to a qualified, trustworthy mufti of one's own tradition, give the real details, and accept guidance with sincerity. It also explains the failure modes the classics warn about — shopping for the answer one prefers, and internet answers stripped of the questioner's context.",
    practicalInfo: "Ask a qualified, pious mufti of your tradition with full details; treat the answer as guidance to act on with sincerity — and avoid shopping for the answer you prefer.",
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
    detailedAnswer:
      "The school ties obligation-categories to the decisiveness of proof. A command resting on decisive evidence (qat'i — like the Qur'an's five prayers) is fard: its denial is disbelief, because denying a certainly-known command of Allah is denying Allah's command itself. A command resting on strong-but-probabilistic evidence (zanni — established through rigorously transmitted singular reports) is wajib: acting on it is required, but its denial is a grave error, not disbelief, because the proof does not reach certainty. The Hidayah and Nur al-Idah introductions set this tiering out as the school's ruling logic.\n\nThe examples show the system: Witr, the two 'Id prayers, the qunut of Witr, the tashahhud and the extra takbirs of the funeral prayer are wajib — all resting on rigorously transmitted but singularly carried reports — while the prayer's pillars rest on decisive evidence. Practically, skipping a wajib by forgetfulness requires the prostration of correction (sajdat al-sahw), the school's famous rule.\n\nOther schools rank obligations differently — the Shafi'i school, for example, classes Witr as sunnah mu'akkadah rather than a separate wajib tier — so the same prayer lands in different categories across the schools. The disagreement is about the taxonomy of obligation, not about whether the acts are practised; and the tiering protects creed-accuracy by keeping 'denial is disbelief' tied to decisive evidence rather than to every ruling.",
    hanafiPosition: "Fard rests on decisive proof (denial is disbelief); wajib rests on rigorously transmitted non-decisive proof (denial is grave error) — the tier keeps creed-accuracy tied to evidential strength.",
    otherViews: "The other schools do not use the fard/wajib tier, classifying such commands as sunnah mu'akkadah or fard by their own criteria; both sides practise the acts — the difference is the taxonomy and its theological knock-ons.",
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
    detailedAnswer:
      "'Ahl al-Sunnah wal-Jama'ah' — the People of the Prophetic Way and the Community — names the majority tradition that holds to the Prophet's ﷺ Sunnah as understood by the Companions and holds together (jama'ah) rather than fragmenting. Historically the term consolidated in the early centuries as the community distinguished itself from movements that broke with the Companions' consensus or the majority's creed: the Khawarij's excommunication politics, the rejection of the early caliphate's legitimacy, and the Mu'tazila's rationalist creed during the mihna — the caliphal inquisition over the Qur'an's createdness, in which Imam Ahmad ibn Hanbal's endurance became emblematic.\n\nCreedally the tradition's core is written in documents like al-Tahawi's creed: one Creator; His attributes affirmed without anthropomorphism or negation; the Qur'an as His uncreated speech; the Companions honoured in their known ranks; and differed-over legal details left to sound derivation. Institutionally it carries the four surviving fiqh schools and the creedal traditions aligned with them — Maturidi and Ash'ari, with the Hanbali athari orientation.\n\n'Sunni' is therefore wider than any one madhhab: Hanafis, Malikis, Shafi'is and Hanbalis are all Sunni — one creed, neighbours in fiqh difference — which is why the term's boundary runs around creed and revelation-fidelity, not around any single school's legal details.",
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
    detailedAnswer:
      "The Ahl-e-Hadith (also called Ghair Muqallid) movement consolidated in 19th-century South Asia around scholars such as Siddiq Hasan Khan (Nawab of Bhopal, d. 1307 AH/1890 CE) and Nadhir Husain Dehlawi (d. 1320 AH/1902 CE), drawing on the Yemeni hadith-anchored scholarship of al-Shawkani's era and on the hadith-revival impulse associated with Shah Waliullah Dehlawi's (d. 1176 AH/1762 CE) family — though the Waliullah line itself remained within Hanafi taqlid; the movement turned hadith-emphasis into an organised non-taqlid current, with its All-India conference in 1906 and later Markazi Jamiat Ahl-e-Hadith structures.\n\nIts programme: reject binding taqlid of the four schools as a lay obligation, require evidence for rulings, and consequently practise forms the Hanafi books do not carry — raf' al-yadayn, loud Ameen, and its own Witr and Taraweeh formulations — while honouring the four imams as hadith masters without treating their schools as binding. Its scholars issued fatawa and built madaris on this basis.\n\nHanafi scholarship responded across both South Asian traditions — Barelvi (Fatawa Razvia's taqlid discussions) and Deobandi — arguing that laymen lack the competence to weigh hadith against the whole corpus and that the movement re-derives what the schools had already reconciled. The platform records the debate's both sides in its taqlid cluster; here the point is descriptive: who the movement is, and where the disagreement precisely lies.",
    hanafiPosition: "The mainstream Hanafi position (both South Asian traditions) holds that laymen must follow qualified scholarship and that the movement's direct-compliance method overstates layman competence; the imams are honoured, and the disagreement is methodological.",
    otherViews: "The Ahl-e-Hadith position: every Muslim owes obedience directly to authenticated hadith, and taqlid of schools inserts human intermediaries where revelation did not. Hanafi scholarship replies that 'direct compliance' already presupposes expert authentication and reconciliation — precisely the expertise laymen lack. Both positions are documented; the platform takes no side.",
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
    detailedAnswer:
      "The question's premise — one school 'follows the hadith' while others follow men — collapses on inspection into a methodological question: closest to the hadith BY WHAT STANDARD? Any standard is already a method: how does one weigh a single authentic report against the ummah's settled practice? Does one report's wording control other reports' wording? When is a text read literally, specified, or abrogated? Each school answers these inside a documented usul and then claims the hadith corpus's overall fidelity — and each school produced the hadith scholarship to argue its case: the Hanafi tradition's Bukhari and Abu Dawud commentaries (Umdat al-Qari, Badhl al-Majhud) and al-Tahawi's reconciliation works; the Shafi'i tradition's Nawawi and Ibn Hajar; the Maliki tradition's practice-corpus reasoning. A school outside hadith would have no hadith masters — and every school had them.\n\nConcretely, the same authentic report can be read differently because the usul weigh differently: the raf' al-yadayn narration of Wa'il ibn Hujr is authentic by every school's isnad criteria — the schools differ on how it relates to the wider report-set and the settled practice, which is a derivational disagreement, not an authenticity dispute (the raf'-al-yadayn entries document both readings). That is the pattern generally: 'closest to the hadith' claims trade on hiding the method behind the conclusion; the honest comparison shows each school's method and argues the evidence.\n\nThe practical counsel the scholars give: compare the schools' OWN evidence-presentations on a single issue (this platform's comparative entries attempt exactly that), and notice that each camp's self-advertisement — including the claim of exclusive hadith-fidelity — is itself a position inside the debate, not a neutral metric above it. Choosing a madhhab is choosing a documented methodology of applying the hadith corpus, not choosing between hadith and its absence.",
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
      { kind: "BOOK", ref: "Al-Majmu' (al-Nawawi), Kitab al-Salah — witr", translation: "The Shafi'i school's witr treatment.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Al-Mudawwana al-Kubra — witr discussion", translation: "The Maliki school's witr treatment.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Witr in four madhhabs", "Which witr method should I follow?"],
    related: ["salah-witr-wajib", "salah-witr-shafii-difference", "madhhab-pray-behind-other-imam"],
    detailedAnswer:
      "The schools differ on three Witr variables: its obligation-rank, its rak'ah-structure, and qunut's place. Hanafi: Witr is wajib, performed as three connected rak'ahs with one salam, qunut before the ruku' of the third rak'ah (with the additional Ramadan qunut after ruku' in Fajr during the second half of Ramadan). Shafi'i: Witr is sunnah mu'akkadah, performed as two rak'ahs with salam then one separate rak'ah, with qunut after ruku' in the second half of Ramadan. Maliki: Witr runs over various odd counts, with a standing du'a qunut replacing the tashahhud of the final rak'ah. Hanbali: Witr as three (or one), with qunut in the second half of Ramadan.\n\nEach school carries its own evidence-chain: the narrations on making Witr before sleep, on the Prophet's ﷺ qunut and on its timing differ in wording and channel, and the schools' usul weigh them differently — which shape the Companions' settled conduct supports, whether a singular report can establish a wajib, and how the Ramadan qunut reports integrate with Witr's ordinary form.\n\nThe disagreement is intra-worship: all four agree Witr is practised, and the classical scholars treated one another's Witr as valid prayer — the follower simply follows his imam's performance.",
    hanafiPosition: "In the school Witr is wajib: three connected rak'ahs with one salam and qunut before the ruku' of the third.",
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
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab al-Adhan (narration of Wa'il ibn Hujr — seeing the Prophet's ﷺ hand placement)", translation: "paraphrased translation", status: "UNVERIFIED", note: "chapter-level citation; number pending verification" },
    ],
    variants: ["Why do Maliki pray with hands down?", "Sadl in salah"],
    related: ["salah-hands-below-navel", "madhhab-why-differ-in-salah"],
    detailedAnswer:
      "Sadl is letting the hands hang relaxed at the sides during the standing portions of salah instead of folding them on the chest. The Maliki school carries it as part of the practice corpus of Madinah — Malik's school treats 'amal ahl al-Madinah (the city's continuous transmitted practice from the Prophet's ﷺ era) as evidence in its own right, and sadl is among the practices that corpus carries; the Maliki books also cite reports describing Malik himself praying with sadl.\n\nThe other schools hold folding on the chest (or below the navel in the Hanafi transmission) from narrations describing the Prophet's ﷺ placement — the narration of Wa'il ibn Hujr describing seeing the Prophet ﷺ place his right hand over his left is the flagship report, carried in Bukhari's prayer book. The Maliki response is methodological: those reports do not reach the level that overrides the city's continuous practice, and Madinah's prayer is the most direct window into the Prophet's ﷺ form.\n\nThe result is a visible but intra-valid difference: the schools agree on salah's pillars; the hands' position is a documented school difference, and no school treats the other's prayer as invalid over it.",
    hanafiPosition: "The Hanafi school transmits placing the hands below the navel (right over left) in salah — a school difference within valid prayer.",
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
      { kind: "BOOK", ref: "Kitab al-Tawhid (al-Maturidi)", translation: "The Maturidi tradition's anchor text.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Do madhhabs differ in aqeedah?", "Maturidi vs Ashari"],
    related: ["aqeedah-attributes-how", "term-sunni-meaning"],
    detailedAnswer:
      "The four schools share a creedal core that al-Tahawi's creed documents — one Allah; attributes affirmed without likeness or negation; the Qur'an as His uncreated speech; prophethood sealed in Muhammad ﷺ; the Companions honoured in their relative ranks; qadar within its documented frame; and the beatific vision affirmed. On that core the madhhabs do not differ; a Shafi'i jurist and a Hanafi jurist pray in one another's mosques precisely because the faith is one.\n\nThe nuance lies in the schools' scholarly-theological traditions: Hanafis formally follow the Maturidi tradition (Abu Mansur al-Maturidi of Samarqand, d. 333 AH — his Kitab al-Tawhid is the school's creedal anchor), while Malikis and Shafi'is largely follow the Ash'ari tradition (Abu al-Hasan al-Ash'ari, d. 324 AH), and the Hanbali school carries its own text-anchored (athari) orientation. These traditions agree on the core and differ in scholarly method on attribute-language — where interpretation (ta'wil) is permissible and where consigning the meaning (tafwid) is safer — and on fine points such as the exact relation of the recited wording to the uncreated speech.\n\nBoth traditions framed themselves against the createdness claim and against anthropomorphism; the intra-Sunni difference is method of expression, not the object of belief. The platform records attribute-language disagreements in its aqeedah cluster as documented nuance, not as creedal breach.",
    hanafiPosition: "The Hanafi school's creed is the Maturidi tradition — affirming uncreated divine speech and the attributes, with its documented method on attribute-language.",
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
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab al-Maghazi (narration of 'Abdullah ibn 'Umar — the Banu Qurayza journey command and the two interpretations)", translation: "paraphrased translation", status: "UNVERIFIED", note: "chapter-level citation; number pending verification" },
    ],
    variants: ["How should Muslims handle madhhab differences?", "Ikhtilaf rules"],
    related: ["taqlid-scholars-mock", "madhhab-splitting-ummah"],
    detailedAnswer:
      "The classical books treat legitimate disagreement as a discipline with rules. First, its bounds: real ikhtilaf is disagreement between qualified jurists each carrying evidence — difference in derivation, not difference in revelation or creed. Within that frame the documented etiquette runs: state the other school's position and evidence accurately (no strawmen); address positions, not persons; assume good faith and reward for the differing qualified scholar (the usul maxim that a mujtahid errs and is still rewarded); never escalate fiqh difference into takfir or social boycott; and keep the community's congregational unity above winning an argument.\n\nThe Sunnah's own model is instructive: on the expedition to Banu Qurayza the Prophet ﷺ said none should pray 'Asr except there; one group obeyed by hastening to arrive, another by praying en route — reading the command as a call to speed — and the report carries no rebuke for either (Sahih al-Bukhari, Kitab al-Maghazi, narration of 'Abdullah ibn 'Umar). Obedience competed with obedience, and the Prophet ﷺ accepted both readings.\n\nAl-Tahawi's Ikhtilaf al-Fuqaha models the scholarly register: catalogue the difference, lay out both schools' evidence, refrain from anathematising. The etiquette exists because the disagreements are legitimate — and it fails precisely when polemic replaces scholarship.",
    practicalInfo: "When two trustworthy imams differ: follow your own qualified scholar with respect, speak of the evidence, and refuse contempt — for either side.",
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
    detailedAnswer:
      "The Salafi/Ahl-e-Hadith position's internal logic: every Muslim is directly addressed by the texts, and the layman's duty is to seek the evidence and comply with it — 'ask the people of knowledge' (Al-Nahl 16:43) is read as a question-about-evidence habit, not as referral to a school's rulings. Its scholars argue: (1) the Companions asked the Prophet ﷺ directly and complied with the ruling given; after him the same channel runs through scholars to the texts' apparent meaning; (2) a madhhab as a mediating layer risks school-loyalty covering the sunnah — their literature campaigns against ta'assub under the maxim 'it is only sunnah or bid'ah'; (3) their own practice still requires scholarship — laymen are directed to their students-of-knowledge and fatawa — so the difference is the FINAL REFERENCE: the hadith's ruling as their scholars present it, not a madhhab's transmitted mu'tamad.\n\nThe Hanafi position's internal logic: the hadith corpus's application requires exactly the competences laymen lack — authentication, variant-comparison, abrogation-analysis, weighing solitary reports against mass-practice — so 16:43's asking is referral to the QUALIFIED, and the qualified are the madhhabs' jurists, whose derivations were tested by a millennium of scholarly argument (Usul al-Sarakhsi's mujtahid/muqallid division, cited in this question's sources, is the organizing frame). The school's scholars add: the layman's 'direct compliance with a hadith' is an abstraction — what he actually does is comply with SOMEONE'S interpretation, so the honest choice is between tested interpretations and untested ones; and binding to one madhhab disciplines desire in selection.\n\nThe shared ground is real and worth stating: neither side expects laymen to derive rulings from raw texts; both condemn blind loyalty to persons over evidence; both route laymen to scholars. The genuine divergence is the layman's default reference-point — a school's transmitted mu'tamad rulings versus a scholar's presented hadith-ruling — and whether the school's usul must mediate every ruling. Both literatures are extensive and argue in good faith; the platform quotes each side's own formulations (Fatawa Razvia's taqlid discussions carry the Hanafi case) and leaves the methodological choice documented rather than adjudicated.",
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
    detailedAnswer:
      "'Reject' conflates two judgments the usul books distinguish: authenticity (is the chain sound?) and legal-warrant (what does the authentic material yield as the ruling?). The school accepts the first as ordinary hadith-criticism — practised by its own hadith masters. The second is where the school's distinctive work lives: an authentic report may not define the final ruling because another authentic report specifies it, because it conflicts with the practice the ummah transmitted continuously, or because its wording is read within the report-set rather than alone. That is application-methodology, and al-Tahawi's Sharh Ma'ani al-Athar (cited in this question's sources) demonstrates it across dozens of disputed narrations — reconciling, not discarding.\n\nThe school's own record refutes the charge historically: the Tahawi reconciliation corpus; Mulla Ali al-Qari's Umdat al-Qari on Sahih al-Bukhari; Anwar Shah Kashmiri's Badhl al-Majhud on Sunan Abi Dawud; Abu Hanifa's Kitab al-Athar carrying narrations with chains; and the school's usul books devoting full chapters to how khabar al-wahid (solitary reports) functions in law. A school built on 'opinion over hadith' would not have produced the ummah's major hadith commentaries.\n\nThe misconception's origin is polemical shorthand: on the issues where the schools differ (raf' al-yadayn, ameen's loudness, witr's form), 'you read the hadith differently from me' was recast as 'you reject the hadith'. The fair statement is the reverse: all schools affirm hadith's authority and all differ in application-method — the platform's comparative entries document the actual derivational reasoning on both sides, and the ikhtilaf etiquette governs how the difference is discussed.",
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
    detailedAnswer:
      "Chronology alone shows the charge's incoherence: Abu Hanifa died in 150 AH and the school's core rulings were written out by his students (al-Shaybani's Zahir al-Riwaya corpus) generations before Bukhari (d. 256 AH) compiled his Sahih. The school never faced Bukhari as a canon to accept or reject; it encountered a great hadith compilation a century after its legal corpus was fixed, and its scholars then engaged it as the ummah's most rigorous hadith collection. The engagement's record: Mulla Ali al-Qari's Umdat al-Qari — among Bukhari's most studied commentaries — is a Hanafi work; Anwar Shah Kashmiri's Badhl al-Majhud (on Sunan Abi Dawud) continues the same Hanafi hadith-commentary genre (both cited in this question's sources).\n\nThe logical confusion to untangle: Bukhari's Sahih is a hadith collection with its own compilation-methodology (isnad-conditions, chapter-arrangements), not a code of law. Disagreeing with an INTERPRETATION of a narration is not rejecting the COLLECTION — the ameen narrations, for instance, are affirmed by all schools and read differently within each usul (the ameen entry documents both readings). Where a Hanafi-line hadith scholar records criticism of a specific narration's chain, that is jarh wa ta'dil — normal hadith-criticism practised by every school's masters on specific narrations — not a school's stance against the book.\n\nThe mutual-respect record completes the picture: Hanafi scholarship ranks Bukhari's Sahih among the most authentic books in Islam and teaches it in its madrasas (the hadith year of the Dars-i Nizami curriculum); Bukhari transmitted from narrators the school reveres, and the school's jurists of his era appear in its chains. What the polemic calls 'rejection' is the school's settled practice of reading Bukhari's narrations through its own documented usul — reading differently is not refusing.",
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
    detailedAnswer:
      "The saying circulates without an isnad — no biographical work transmits it through a chain, which alone disqualifies it in the sciences that govern this field. Its content also fails against the documented record: Abu Hanifa's Kitab al-Athar carries hundreds of narrations with chains; the school's transmitted reasoning cites athar across thousands of issues; and the manaqib literature (al-Muwaffaq al-Makki's and al-Kardari's works, cited in this question's sources) documents his decades of hadith study — his long apprenticeship in Hammad ibn Abi Sulayman's Kufan circle and his narrations from the era's major authorities ('Ata, 'Ikrimah, Nafi', al-Sha'bi, Qatada among those the biographies list).\n\nThe figure functions rhetorically: it pictures a jurist issuing thousands of rulings from a pocket-book of seventeen narrations — an image the transmitted works contradict on every page. His contemporaries' record runs the same way: scholars travelled to Kufa, the era's hadith authorities debated the Kufan school's rulings on their merits, and the biographical corpus preserves both praise and criticism — criticism of his METHODS, never of an ignorance so total as the saying implies.\n\nThe fair kernel inside the polemic should be acknowledged: the school's weighing-method differs — it sometimes sets a narration against mass-transmitted practice or reads it within the wider report-set — and rivals recorded their disagreement with those methods. Disagreement with a METHOD is a real, documented debate (the platform's hadith-methodology entries carry it); recasting it as IGNORANCE ('he only knew 17 hadiths') is the polemic's move, and the biographical sciences reject it. The platform's Abu Hanifa biography entry documents his hadith standing honestly, including where the sources differ.",
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
    detailedAnswer:
      "The 'Ahl al-Ray' (people of opinion) label is a geographic-methodological description, not a confession about sources: early fiqh's two great centres differed in material conditions — Madinah lived inside the Prophet's ﷺ transmitted practice (its 'amal corpus), while Kufa, further from the narration-dense Hijaz, systematized analogy (qiyas) to extend what texts it held. The label marked that emphasis, and the Kufan school accepted it in its methodological sense: systematic reasoning FROM the texts, not instead of them. 'Ra'y' in older usage could even mean considered juristic judgment generally; its drift into 'whim' is polemical and modern.\n\nThe school's own usul refutes the 'opinion-only' reading structurally: the hierarchy puts Qur'an first, then Sunnah, then ijma', then qiyas — with qiyas itself a disciplined derivation (an established case from revelation, an identified effective cause ('illah), a new case sharing that cause) whose conditions the usul books catalogue; istihsan is constrained to what the texts' spirit and the school's documented method support; 'urf operates only where revelation is silent. The evidence-carrying manuals show the hierarchy working: al-Hidayah (cited in this question's sources) argues every chapter from textual evidence — a book of 'mere opinion' does not argue from ayat and athar on every page.\n\nThe genuine residue of the debate should be stated fairly: the schools weigh solitary reports against systematic analogy differently, and rivals — al-Shafi'i's critique of istihsan foremost — attacked the Kufan method as over-extending reason. That is a documented methodological disagreement between two text-anchored methodologies (the platform's usul entries carry it), not a difference between texts and opinion.",
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
    detailedAnswer:
      "Two questions are being conflated and must be separated. (1) VALIDITY: is an 8-rak'ah night prayer a valid prayer? Yes, by the school's agreement — qiyam al-layl's sunnah is flexible in length ('the night prayer is two rak'ahs by two' — Sahih al-Bukhari, Kitab al-Tahajjud, narration of Ibn 'Umar), and the school's literature does not call an 8-rak'ah night prayer invalid nor its performer sinful. (2) STANDARD: what did the ummah transmit as the CONGREGATIONAL Ramadan practice? The school's mu'tamad answer is 20 rak'ahs — the count carried by the transmitted congregational practice from 'Umar's organization onward and codified in the school's books (Radd al-Muhtar's tarawih discussion, cited in this question's sources). The disagreement with the 8-or-11 practice concerns the congregational standard's identity, not prayer's validity.\n\nThe other side's case, stated in its own strength: Ahl-e-Hadith scholars argue compliance with the Prophet's ﷺ documented night-practice (the narrations reporting around eleven rak'ahs with witr) should govern, and that fixing the congregational count at 20 lacks a prophetic text — a serious evidential argument from their methodology, and their communities pray it with scholarly backing. The Hanafi response argues from the school's own evidence-hierarchy: the congregational form's continuity across the generations ('Umar's jama'ah through the tabi'un into the codified schools) is weighed as the ummah's settled practice — evidence the school treats as controlling the count-question — while individual night-prayer length remains free for every Muslim, which is why the school never condemned private eight.\n\nThe practical consequences the scholars attach: congregational tarawih follows the mosque's imam without scandal (prayer behind an imam of another count is valid — the follow-the-imam entries document the rule); the debate belongs to scholarship, not to congregational policing; and 'invalid' language misdescribes both positions — neither side holds the other's prayer void.",
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
    detailedAnswer:
      "The created-Qur'an doctrine was the Mu'tazila's — and the accusation reverses the Maturidis' historical role. The mihna (inquisition) under al-Ma'mun, beginning in 218 AH, imposed the createdness claim on the state's scholars; Ahmad ibn Hanbal's refusal became Sunni history's famous stand; and the creed that settled the ummah's wording is the one this question's sources open with: al-'Aqidah al-Tahawiyyah's declaration that the Qur'an is Allah's speech, uncreated — authored by a Hanafi imam. No Hanafi-Maturidi creed teaches createdness; the charge survives on misreading the school's technical distinction.\n\nThe distinction, stated precisely: Allah's kalam (speech) is His eternal attribute — with Him, not originated in time; the Qur'an IS that speech, expressed in recited wording and written letters. The Maturidi formulation calls the attribute uncreated and treats the recited wording as its expression — the wording sounds in time (every recitation is an event), while what it expresses is Allah's uncreated speech. The Ash'ari tradition guards the same core with its own framing, and the Hanbali line affirms the totality uncreated in stricter language — an intra-Sunni difference of expression documented in the creedal entries. The Maturidi nuance was built AGAINST the Mu'tazila: if Allah's speech were created, His word would be a creature among creatures — precisely the claim the school's theologians (al-Maturidi's Kitab al-Tawhid foremost; the framework Sharh al-'Aqa'id al-Nasafiyyah transmits) dismantled in their kalam discussions.\n\nSo the accusation inverts the record: the school that developed the most careful anti-createdness formulation is labelled with its opponents' doctrine. The fair reading: (1) all Sunni traditions affirm uncreatedness — the core is agreed; (2) the schools' formulations differ on how to relate the eternal attribute to temporal wording — an expression-level debate; (3) calling the Maturidi position 'Mu'tazila-like' mistakes a distinction developed against the Mu'tazila for their doctrine itself. The platform's creedal entries document the formulations in their own words.",
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
    detailedAnswer:
      "Two different events are being merged: the PRACTICE of following qualified scholarship, and the CODIFICATION of schools around great jurists' transmitted rulings. The practice is as old as fiqh questions themselves: the Qur'an routes the ignorant to the knowledgeable ('ask the people of the reminder' — Al-Nahl 16:43, cited in this question's sources); the Companions asked and obeyed — deferring to 'Umar's judgment was the documented pattern of the generation's practice; and the tabi'un followed the great jurists' fatwas as a matter of course — Sa'id ibn al-Musayyib, al-Hasan al-Basri and Ibrahim al-Nakha'i were followed before any 'madhhab' name existed.\n\nWhat happened in the third century AH and after is codification: al-Shaybani's corpus, Sahnun's Mudawwana, al-Shafi'i's al-Umm — the writing-down of what was already being followed. Calling that 'inventing madhhabs three hundred years later' commits the same category error as claiming hadith was invented when Bukhari compiled it: compilation and codification transmit a living practice; they do not create it. The institutions (mufti-training, madrasas, the mutun-and-commentary ladder) matured over centuries — institutional elaboration of a practice is not the practice's invention.\n\nOne honest concession the scholars themselves make: the stricter refinements — taqlid shakhsi's binding force, the 'obligatory to stick to one madhhab' framing — are later developments WITHIN the practice, and the school's own scholars debate their status (the madhhab-change-madhhab entry records the documented disagreement). What is not later is the base layer: following qualified scholarship rather than self-deriving — that is the Qur'an's command and the earliest generations' documented conduct. The '300 years' charge attacks the codification's date and imagines it has attacked the practice's existence.",
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
    detailedAnswer:
      "The charge misplaces validity-language where the fiqh places difference-language. Salah's validity turns on its pillars and conditions — the fara'id and wajibat the usul books catalogue — and Witr is not salah's pillar: it is a separate prayer whose RANK differs by school (wajib in the Hanafi school, sunnah mu'akkadah in the others) and whose FORM differs in documented, argued ways (three connected rak'ahs with qunut before ruku', versus two-plus-one with two salams, versus odd-count variants — the witr-difference entry lays the row out with each school's sources). A documented difference inside a prayer all four schools affirm is a school-difference, not an invalidity: the classical scholars of all four schools prayed behind one another, and their books never declared the other schools' Witr void.\n\nThe school's own handling shows the point: Bada'i' al-Sana'i's witr book (cited in this question's sources) argues the Hanafi form on evidence and records the contrast with the other schools' forms — as scholarship, not as an accusation against prayer. The fiqh's operative following-rules presuppose the mutual recognition: behind an imam of another school the follower follows the imam's actions (the follow-the-imam entries document the framework) — a rule that only works if the other form is valid prayer.\n\n'Validity' talk in these disputes is a modern polemical transfer: the classical literature reserved invalidity for pillar-level failures on which the schools agreed, and kept school-differences at the level of argued preference within valid worship. The fair summary: every school's Witr is valid by the schools' own criteria; the mujtahid-err maxim and the ikhtilaf etiquette alike forbid converting a documented difference into a validity-claim against other Muslims' worship.",
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
    detailedAnswer:
      "The operational definition refutes the charge: a madhhab is (1) a usul — a documented method of reading Qur'an and Sunnah; (2) a transmitted corpus — rulings argued from textual evidence in the manuals; and (3) a scholarly community that continues testing, qualifying and even revising positions. The imam is the tradition's anchor, not its law-giver: the school's books cite the evidence for every position (al-Hidayah's structure, cited in this question's sources, is evidence-first), and the school itself records its jurists departing from the eponym's rulings — Abu Yusuf and al-Shaybani both took documented positions of their own on issues their teacher ruled on (the fiqh corpus labels their transmissions distinctly). A school devoted to a man does not argue with its object and publish the disagreement.\n\nThe same relation holds across the schools: 'Shafi'i' names al-Shafi'i's methodology, not devotion to al-Shafi'i; 'Maliki' names Malik's transmitted method. The eponym is historiography's label for a founding generation — and the alternative ('Qur'an-and-Sunnah-only, no school') is itself, in practice, someone's methodology too; the honest choice is between documented methods, not between 'a man' and 'the texts' (the which-closest-to-hadith entry analyses the point).\n\nThe emotional register of the charge deserves a direct answer: honouring the imams — respect, gratitude, biographical love — is part of the tradition, and honouring is not worship; the school's creed is Allah-exclusive in worship's every act. Nothing in the school binds a follower to the man against the evidence: the school's own juristic machinery (mu'tamad positions, sahibayn tarjih, later commentary) works precisely by weighing evidence, and following the madhhab means following its methodology of the texts — the texts remain the authority throughout.",
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
    detailedAnswer:
      "The school's intention-theory gives the follower ONE intention: the salah he is performing, conformed to the imam's state. The usul frame: niyyah is the act's meaning-boundary — its object is what one is doing, and what the follower is doing is 'praying under this imam's leadership' — a single intentional act with a relational content, not two stacked mental commitments. The fiqh books carry the operative discussions: Bada'i' al-Sana'i's salah book (cited in this question's sources) treats the follower's niyyah within the following-mas'alahs — the follower must intend the prayer (physical mimicry does not substitute), and whether conformity with the imam's specific act must be intended is discussed at mas'alah-level — while Usul al-Sarakhsi's intention-chapter supplies the theory. None of it legislates a second, separate 'intention of following' standing beside the prayer-intention.\n\nThe 'dual intention' charge (niyyat al-tamayuz as a polemic label) caricatures the theory: it pictures the Hanafi worshipper intending 'salah' AND 'following the school' as two distinct devotional acts — a picture none of the school's books draws. Layered content is universal in worship: a follower intending 'the fajr fard behind this imam' intends several descriptors in one act — obligation-level, prayer-name, leadership — and no methodology calls that two intentions; the school's formulation is the same structure: one integrated intention whose content includes being-led.\n\nThe genuine technical residue the scholars discuss — whether the follower's intention must include conformity (muwafaqah) for specific acts — is a mas'alah inside intention-theory argued in the books, not an invented doctrine of split devotion; and the honest statement of the school's position is the follower's single conformed intention, with the 'dual intention' charge identified as polemical shorthand from rival methodologies. The following-the-imam entries document the school's actual rules.",
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
      { kind: "BOOK", ref: "Mukhtasar al-Tahawi (al-Tahawi)", translation: "The base text al-Hidayah expands.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Bidayat al-Mubtadi (al-Marghinani)", translation: "The author's own primer, the Hidayah's seed text.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Al hidayah book", "Marghinani Hidayah"],
    related: ["usul-zahir-riwaya", "books-radd-muhtar"],
    detailedAnswer:
      "Burhan al-Din al-Marghinani (d. 593 AH) of Marghinan in Transoxiana wrote the Hidayah as an expansion of his own primer Bidayat al-Mubtadi, which itself follows al-Tahawi's Mukhtasar — so the book arrives pre-attached to the school's transmission. Its structure is the school's fiqh in the books of worship and transactions with the evidence woven against each ruling ('qala Abu Hanifa' with chains in the manuscript tradition) — the 'evidence-carrying matn' formula the school refined.\n\nIts fame is institutional. In the madrasa curricula from Central Asia to the Ottoman ilmiyye and the subcontinent's Dars-i Nizamiyyah, the Hidayah is the central fiqh text of the intermediate years; a commentary literature multiplied on it because the book became the teaching standard. Ottoman judicial practice and Mughal courts worked from the school's rulings with the Hidayah as the pedagogical spine, and in British India its 1791 English rendering (Charles Hamilton's translation) made it a reference of Anglo-Muhammadan law in the colonial courts — a rare case of a madrasa matn entering secular case-law.\n\nBeginners should know its place in the ladder: Mukhtasar al-Quduri first, the Hidayah second, then the fatawa corpora (Fatawa Hindiyyah, Radd al-Muhtar) — the Hidayah is the middle rung where evidence enters the picture.",
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
      { kind: "BOOK", ref: "Al-Durr al-Mukhtar (al-Haskafi)", translation: "The matn Radd al-Muhtar comments on.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Radd al muhtar author", "Ibn Abidin book"],
    related: ["books-hidayah-famous", "books-fatawa-hindiyyah"],
    detailedAnswer:
      "Radd al-Muhtar 'ala al-Durr al-Mukhtar is Ibn Abidin's (d. 1252 AH/1844 CE) super-commentary on al-Haskafi's (d. 1088 AH) Durr al-Mukhtar, itself a selection of the school's late positions. The book's fame is its adjudication function: where the school's manuals diverge, Ibn Abidin works through the commentary strata, documents where the fatwa rests (mu'tamad), tracks which later positions diverged from the zahir al-riwaya core and why, and records the Damascene customs his own city's practice carried.\n\nThat is why Ottoman-era and South Asian muftis treat it as the madhhab's final word: it is the most recent comprehensive adjudication across the corpus, so a mufti's search through the books typically terminates there. 'Final word' describes recency and comprehensiveness, not closure — ijtihad within the madhhab continues, and Ibn Abidin himself documents the juristic ranks (in his introduction and related treatises) rather than declaring them exhausted.\n\nFor researchers the book is also a method lesson: it shows what a 'position of the madhhab' actually is — a ranked, argued, historically situated conclusion rather than a floating quote.",
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
    detailedAnswer:
      "The Fatawa 'Alamgiriyyah (commonly Fatawa Hindiyyah) was commissioned by the Mughal emperor Aurangzeb ('Alamgir) in the 1660s–70s: a board of the empire's Hanafi scholars — the tradition names Shaykh Nizam and his colleagues, with several hundred scholars associated — compiled the school's rulings across the books of fiqh, arranged by kitab and bab. The emperor's aim was judicial: a uniform reference so courts and qadis across the empire answered from one standard.\n\nIts method is fatawa-style, not evidence-commentary: it states the ruling per the school's mu'tamad positions with the authority hierarchy (zahir al-riwaya over the later layers), usually without extended argument — exactly what a court reference needs and a beginner's manual does not. Its scale (one of the largest fatawa collections ever assembled) and its imperial authorisation made it the reference from Bengal to the Deccan; South Asian muftis cite it alongside Radd al-Muhtar as the late references.\n\nResearchers should treat it as a snapshot of the school's mu'tamad at its compilation — powerful for what the fatwa rests on, and to be read with the evidence-carrying manuals when derivation matters.",
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
    detailedAnswer:
      "Fatawa Razvia is the fatawa collection of Ahmad Raza Khan (1856–1921 CE, Bareilly, India), issued in Urdu (in Arabic script) and Arabic and compiled into some thirty volumes by his students. It is the Barelvi tradition's flagship fatawa corpus, and it is double-layered: the fiqh layer answers standard Hanafi questions (purification, prayer, transactions) per the school's mu'tamad — the collection leans on the Hidayah, Radd al-Muhtar and Fatawa Hindiyyah as its fatwa bases — while the creedal layer defends the tradition's positions (tawassul, the Prophet's ﷺ bestowed knowledge, Mawlid, Urs) against Deobandi and Ahl-e-Hadith critiques, in the polemical register the intra-Hanafi dispute of the era produced.\n\nFor the platform's purposes it is cited where it genuinely treats an issue — taqlid, commemorative practices, tawassul — with the volume pagination left to the print editions (pagination varies by edition, so no page numbers are cited here). Reading it alongside the Deobandi collections (Imdad al-Fatawa) shows the same Hanafi fiqh core carrying two different creedal emphases — the documented shape of the South Asian intra-Hanafi debate.",
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
      { kind: "BOOK", ref: "Maraqi al-Falah (al-Shurunbulali)", translation: "The author's own commentary on the text.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Nur al idah author", "Maraqi al falah book"],
    related: ["books-hidayah-famous"],
    detailedAnswer:
      "Nur al-Idah (The Light of Clarification) by Abu al-Ikhlas al-Hasan ibn 'Ammar al-Shurunbulali (d. 1069 AH, Cairo) covers purification and prayer only — deliberately, because these are the acts every Muslim performs daily and the areas where a beginner most needs precise rules. Its style is the school's beginner-matn formula: short definitional rulings, minimal dispute-mapping, ordered as the acts of worship themselves run.\n\nThe author then wrote his own commentary, Maraqi al-Falah, on it — text and gloss by the same hand, which kept the pair consistent. The book became the entry-level fiqh text in the Arab world and, in Urdu translation, a standard early text across South Asian madrasa syllabi and self-study households; English renderings circulate widely today, which is why many beginners' and converts' classes use it.\n\nIts place in the ladder is the first rung: Nur al-Idah for the daily acts, then Mukhtasar al-Quduri's broader coverage, then the evidence-carrying Hidayah — the school's pedagogy by designed sequence.",
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
    detailedAnswer:
      "Bahishti Zewar (Heavenly Ornaments) is Ashraf 'Ali Thanwi's (d. 1362 AH/1943 CE) Urdu compendium for household religious life, written from the Deobandi-Hanafi tradition. Its parts run through beliefs, purification and prayer, fasting and zakah, marriage and family law, the basics of inheritance, and conduct — with question-answer and tabular formats that made it teachable to readers without madrasa schooling, including a deliberate focus on women's fiqh education, which the era's materials rarely served.\n\nIts circulation is enormous — among the most-printed Islamic books of the subcontinent, in the millions across Urdu, English and other translations — which makes it a primary document for understanding how South Asian Hanafi households learned the din for a century. For the platform it is cited for practice-description and common-usage questions (maslak, household fiqh) rather than for evidence-derivation, which its genre — practical compendium, not evidence manual — does not carry.\n\nContext matters: it reflects the Deobandi tradition's emphases (hadith-anchored restraint on contested practices); readers of other traditions will notice those choices — the platform treats the book as a documented source of its tradition, not as a neutral voice above the schools.",
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
    detailedAnswer:
      "The practice, described precisely: on the 11th of the lunar month ('giyarahvin'), gatherings associated with the memory of Shaikh 'Abd al-Qadir Jilani (d. 561 AH, Baghdad — revered across Sunni traditions as Ghaus-e-A'zam) convene in many South Asian mosques and households: Qur'an recitation (often opening with Fatiha), salawat, dhikr, a du'a gifting the reward, and commonly a shared meal (niyaz) afterward. The permissive tradition's fatawa (Fatawa Razvia's commemoration discussions, cited in this question's sources) affirm the gathering within the school's established frameworks: du'a for the departed righteous, isal al-thawab, and honouring Allah's friends are affirmed principles; the fixed date is treated as customary organization ('urf) of those principles — a community's rhythm of remembrance, not a Shari'ah-fixed rite.\n\nThe critical case, stated in its own strength: the restrained tradition's fatawa (Imdad al-Fatawa's treatment of fixed forms, cited in this question's sources) and the stricter methodologies hold that fixing a monthly communal form with reward-attachment presents what revelation left unfixed as religiously expected — the bid'ah question at its most concrete: a form whose very regularity signals religious status. They raise a second, internal concern: folk belief can attach independent blessing to the niyaz food or the date — and on that both traditions agree the line is tawhid: the food has no independent power; the benefit sought is Allah's acceptance of the du'a and the reward-gifting; any belief beyond that is condemned by the permissive scholars themselves.\n\nThe shared ground is substantial: all the Hanafi traditions affirm du'a for the departed, isal al-thawab, and reverence for Shaikh 'Abd al-Qadir Jilani's documented learning. The precise disagreement is the fixed communal form's status — 'urf-organized remembrance (the permissive framing) or an unlegislated religious form (the critical framing): the bid'ah-classification debate applied to a living practice. The practical counsels the scholars attach: the gathering is never an obligation; the du'a's direction is Allah alone; participation follows one's mufti's guidance — and the form must not become a test of faith in either direction.",
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
    detailedAnswer:
      "The term: 'urs is the mystics' idiom — 'wedding' — viewing the gnostic's death as union with the Beloved. The practice is the annual commemoration of a righteous scholar's or saint's death-day, most famously associated with the shrine complexes of South Asia (the Ajmer urs of Khwaja Moinuddin Chishti is the largest example): gatherings of recitation, salawat and du'a, and in many places fairs (melas) attached to the pilgrimage season. The permissive tradition's fatawa (Fatawa Razvia's urs discussions, cited in this question's sources) affirm the commemoration with explicit conditions: no worship-directed act toward the departed (sujud, tawaf and nadhr at shrines are prohibited by the same fatawa), no belief of obligation, no prohibited mixing — the annual assembly is framed as 'urf-organization of affirmed principles: honouring the righteous, isal al-thawab, and communal religious gathering.\n\nThe critical case in its own strength: the stricter scholars (the Deobandi line ranges from conditional permit to discouragement; Ahl-e-Hadith scholarship rejects) argue the annual fixing echoes festival-creation — an 'Id-shaped practice the Shari'ah did not institute — and point to the documented excesses around shrines: worship-like acts, belief in the departed's independent grant, commercialized blessing. On those excesses the traditions converge rather than divide: the school's own scholars criticize them internally, and the permissive fatawa themselves prohibit them — the criticism is internal to the school, not only external to it.\n\nThe disagreement's precise points: the fixed annual form's status (custom-organized commemoration versus unlegislated festival) and the governance question (whether shrine-practice can be reformed within the form or the form itself must go) — both argued inside Sunnism with fatawa literature on each side. The shared floor is firm and practical: love and honour of the righteous is affirmed by all; du'a at such gatherings is addressed to Allah alone; worship-acts toward the departed are prohibited by every tradition's books; and participation or abstention follows one's own mufti's guidance — without turning the form into a loyalty test between communities.",
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
      { kind: "QURAN", ref: "Ibrahim 14:41", translation: "My Lord, forgive me and my parents... — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "HADITH", ref: "Sunan Abi Dawud, Kitab al-Zakat (narration of Sa'd ibn 'Ubadah — charity on behalf of his deceased mother)", translation: "paraphrased translation", status: "UNVERIFIED", note: "chapter-level citation; number pending verification" },
    ],
    variants: ["Khatam after death", "Quran khatam for deceased"],
    related: ["isal-thawab-methods", "graves-dua-fatiha"],
    detailedAnswer:
      "A khatam gathering is a communal completion of Qur'an recitation (often with specified surahs or counts), followed by du'a gifting the reward to the deceased — South Asian practice's standard household mourning rite. Its base is the school's general esal-e-sawab (isal al-thawab) framework: du'a for the dead is Qur'anic (Ibrahim's prayer 'forgive me and my parents' — Ibrahim 14:41), and reward-gifting through charity is documented in the hadith of Sa'd ibn 'Ubadah asking about his deceased mother and the Prophet ﷺ directing charity on her behalf (Sunan Abi Dawud, Kitab al-Zakat). Recitation-with-gifting is then weighed by the school's scholars under the general principle that the dead benefit from the living's du'a and voluntary acts on their behalf.\n\nThe scholarly discussion is about the format, not the principle: general reward-gifting (du'a, sadaqah, gifting recitation) is broadly affirmed in the school; the fixed communal format — particular surahs, counts and days treated as religiously expected — is where the stricter scholars raise the bid'ah question (fixing a religious form the revelation did not fix), while the permissive scholars allow it as a customary organisation ('urf) of an affirmed principle, provided it is not treated as sunnah or obligation.\n\nPractically the family should know the two agreed anchors: du'a for the deceased and charity on their behalf are affirmed without dispute; the specific khatam format follows one's mufti's guidance, and no one should treat the format itself as a religious requirement.",
    practicalInfo: "The affirmed core: du'a for the deceased and charity on their behalf. For the fixed khatam format, follow your mufti's guidance — and do not treat the format as sunnah or obligation.",
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
      { kind: "QURAN", ref: "Yusuf 12:93", translation: "Cast over him my shirt; he will regain sight — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
    ],
    variants: ["Tabarruk meaning", "Blessed items Islam"],
    related: ["nubuwwah-relics", "sa-practices-giyarvin"],
    detailedAnswer:
      "Tabarruk is seeking blessing — from Allah alone as its source — through contact with what Allah has honoured. The Qur'anic precedent is Yusuf's shirt: 'cast it over my father's face; he will regain sight' (Yusuf 12:93) — blessing travelling through an honoured object by Allah's will. In the Prophet's ﷺ era the Companions sought his wudu-water, his hair (distributed after the Farewell Hajj), his staff and garments — the collections carry these reports at chapter level (e.g. Sahih al-Bukhari, Kitab al-Libas, the tabarruk narrations).\n\nThe school's scholars therefore affirm the Prophet's ﷺ tabarruk directly: mass-transmitted Companional practice settles it. The discussion concerns later items and places — objects associated with the righteous, graves' soil, amulets with Qur'anic writing: the permissive scholars allow tabarruk within its Qur'anic logic (the object is a means; the blessing is Allah's), while the restrained scholars (the Deobandi emphasis) permit the documented cases and caution against extension, and both traditions jointly condemn the superstition boundary — believing the object acts independently of Allah, which exits tawhid.\n\nThe practical rule the school's books carry: keep tabarruk within its documented logic — means and Allah's will, never the object as an independent actor; and where a practice's form is contested (specific rituals at shrines), the bid'ah discussion governs, not the tabarruk principle.",
    hanafiPosition: "The school affirms seeking blessing through the Prophet's ﷺ relics by Companional transmission; later items are discussed within the caution against superstition, with the blessing always from Allah alone.",
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
    detailedAnswer:
      "Walk into the three communities' mosques and the differences are visible but mostly practice-level. The two Hanafi traditions share the fiqh core — the Hanafi form of salah throughout, twenty rak'ahs of Taraweeh, Witr as three connected rak'ahs — and differ on the contested practices: Barelvi mosques carry Mawlid gatherings, Giyarvin Sharif, Urs commemorations, loud Ameen and tawassul wording, each per the rulings of Fatawa Razvia; Deobandi mosques keep the same fiqh core but avoid the fixed commemorative forms, hold Ameen quiet, and emphasise hadith study and self-reform, each per the rulings of Imdad al-Fatawa. Ahl-e-Hadith mosques differ more visibly — raf' al-yadayn, hands on chest, loud Ameen, eight rak'ahs of Taraweeh, their own Witr/qunut formulations — because their scholars derive directly from their reading of the narrations rather than the Hanafi transmission.\n\nThe cause is uniform: each community's imams are trained in its institutions (Darul Uloom Deoband, founded 1866, and its madaris network; the Barelvi madaris; Nadwatul Ulama, founded 1894, in Lucknow — itself established in the same reform era partly to rise above factional lines; the Ahl-e-Hadith's own institutions) and implement their scholars' fatawa — so mosque practice maps the fatawa corpus. For the two Hanafi traditions the fiqh-core differences are few while practice emphases differ widely.\n\nFor the ordinary worshipper the useful frame: these are documented practice-differences within broad Sunnism, argued by the traditions' own books; the binding acts of salah agree far more than they differ, and the etiquette of ikhtilaf (see the separate question) governs conduct between the communities.",
    practicalInfo: "Pray in the trustworthy mosque nearest you; follow your own school's performance when behind an imam of another practice; treat differences as documented scholarship, not as loyalty tests.",
  },
];
