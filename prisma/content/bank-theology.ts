import type { BankQuestion } from "./types";

/** Depth-field translations (Ur/Ar) for this batch: the trilingual depth fields are
 *  declared as a module augmentation of the BankQuestion contract — additive only,
 *  identical members merge harmlessly if another batch file declares the same. */
declare module "./types" {
  interface BankQuestion {
    /** Urdu translation of `detailedAnswer`. */
    detailedAnswerUr?: string;
    /** Arabic translation of `detailedAnswer`. */
    detailedAnswerAr?: string;
    /** Urdu translation of `hanafiPosition`. */
    hanafiPositionUr?: string;
    /** Arabic translation of `hanafiPosition`. */
    hanafiPositionAr?: string;
    /** Urdu translation of `otherViews`. */
    otherViewsUr?: string;
    /** Arabic translation of `otherViews`. */
    otherViewsAr?: string;
  }
}

/** Aqeedah, Prophethood, Tawassul/Awliya, Bid'ah, Mawlid — the theology batch.
 *  FAIRNESS RULE: contested topics record BOTH positions without scoring winners. */
export const theologyQuestions: BankQuestion[] = [
  // ─────────────────────────── AQEEDAH — ALLAH'S ATTRIBUTES ───────────────────────────
  {
    slug: "aqeedah-attributes-how",
    question: "How do Hanafi/Maturidi scholars understand Allah's attributes?",
    questionUr: "حنفی/ماتریدی علما اللہ کے اوصاف کو کیسے سمجھتے ہیں؟",
    questionAr: "كيف يفهم علماء الحنفية/الماتريدية صفات الله تعالى؟",
    category: "aqeedah",
    subcategory: "Allah's attributes",
    type: "AQEEDAH",
    difficulty: "ADVANCED",
    cluster: "aqeedah-attributes",
    intent: "informational",
    shortAnswer:
      "The school affirms what Allah affirmed of Himself — without asking 'how', without likening Him to creation (tashbih), and without emptying the words of meaning (ta'til) — the balanced way of al-'Aqidah al-Tahawiyyah.",
    shortAnswerUr:
      "مکتب اللہ کی وہ تمام باتیں ثابت کرتا ہے جو اللہ نے اپنی ذات کے بارے میں خود بیان فرمائیں — بغیر 'کیسے' پوچھے، بغیر مخلوق سے مشابہت کیے (تشبیہ) اور بغیر الفاظ کو معنیٰ سے خالی کیے (تعطیل) — یعنی العقیدہ الطحاویہ کا متوازن منہج۔",
    shortAnswerAr:
      "يثبت المذهب ما أثبته الله لنفسه — من غير سؤال عن 'الكيف' ولا تشبيه لله بالمخلوقات ولا تفريغ الألفاظ من معناها (تعطيل) — وهذا هو الطريق المتوازن الذي تمثله العقيدة الطحاوية.",
    detailedAnswer:
      "Maturidi theology (the Hanafi school's creedal tradition) affirms the attributes as real, eternal per their wording, while holding that their modality (kayfiyyah) is unknown and that nothing of creation resembles Him (Al-Shura 42:11). Within the school's scholars two documented approaches exist for anthropomorphic expressions: tafwid (consigning the meaning to Allah) and ta'wil (interpretation guided by Arabic and theology) — both are Sunni positions; the platform records both without declaring either outside the school.",
    hanafiPosition: "Affirmation with transcendence; tafwid and ta'wil both documented within the school.",
    otherViews: "Athari scholars emphasize affirmation-without-inquiry; Ash'ari scholars lean to interpretive readings — all within Sunni discourse.",
    sources: [
      { kind: "QURAN", ref: "Al-Shura 42:11", translation: "There is nothing like unto Him — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "The creed's balanced formulations on attributes.", status: "VERIFIED" },
      { kind: "BOOK", ref: "Sharh al-'Aqa'id al-Nasafiyyah (al-Taftazani)", translation: "The Maturidi attribute framework in detail.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["What do Hanafis believe about Allah's hands?", "Maturidi aqeedah attributes", "How do Sunnis understand Allah's attributes?"],
    related: ["aqeedah-tanzih", "aqeedah-tawil", "aqeedah-where-is-allah"],
  },
  {
    slug: "aqeedah-tanzih",
    question: "What does tanzih (transcendence) mean in Islamic theology?",
    questionUr: "اسلامی کلام میں تنزیہ سے کیا مراد ہے؟",
    questionAr: "ما معنى التنزيه في الكلام الإسلامي؟",
    category: "aqeedah",
    subcategory: "Allah's attributes",
    type: "TERMINOLOGY",
    difficulty: "INTERMEDIATE",
    cluster: "aqeedah-attributes",
    intent: "informational",
    shortAnswer:
      "Tanzih is declaring Allah free of every creaturely limit — no body, no parts, no location, no change, no likeness to anything created — the negative side of affirmation balanced by the positive affirmations of the verses.",
    shortAnswerUr:
      "تنزیہ سے مراد اللہ کو ہر مخلوقی حد سے پاک قرار دینا ہے — نہ جسم، نہ اجزاء، نہ جگہ، نہ تبدیلی، نہ کسی مخلوق سے مشابہت — تصدیق کا یہ منفی پہلو آیات کی مثبت تصدیقات سے متوازن رہتا ہے۔",
    shortAnswerAr:
      "التنزيه هو إعلان تنزيه الله عن كل حدّ مخلوقي — لا جسم ولا أجزاء ولا مكان ولا تغيّر ولا مثل من المخلوقات — وهو الوجه السلبي للإثبات الذي يوازنه الإثبات الإيجابي الوارد في الآيات.",
    detailedAnswer:
      "Classical kalam treats tanzih as one half of the balance the Qur'an itself models: verses affirm attributes (hearing, seeing, knowledge, speech, will, life) and verses negate creaturely limits (Al-Shura 42:11 — 'there is nothing like unto Him'; Al-An'am 6:103 — 'sights cannot grasp Him'). The Maturidi method reads the two sets together: every affirmation is accepted as real, yet every creaturely modality (body, parts, sitting, movement, change) is excluded, because a being composed of parts would be contingent and the Qur'an's own logic ('nothing is like Him') forecloses likeness.\n\nHistorically the term sharpened against two errors the school names explicitly: ta'til (negating so much that the revealed words are emptied — the charge brought against the Mu'tazila) and tashbih (likening Allah to creation — the error of the anthropomorphists, mushabbihah). Al-'Aqidah al-Tahawiyyah codifies the balance in its famous formulations: He is beyond limits, directions, parts and instruments, 'unlike any created being', yet His attributes are affirmed as He described them. Tanzih is therefore not a doctrine standing alongside the affirmations — it is the guardrail that keeps them from collapsing into creaturely imagery.",
    hanafiPosition: "Affirm everything Allah affirmed, negate every creaturely limit, and consign the modality (kayfiyyah) of the affirmations to Allah; both tafwid and ta'wil are documented methods for the anthropomorphic wordings.",
    otherViews: "Athari scholars affirm the wordings while declining most kalam-style ta'wil, holding that affirmation-without-inquiry best honours both the texts and transcendence; Ash'ari and Maturidi theologians permit linguistically grounded ta'wil for anthropomorphic terms. The difference concerns method, not the denial of any attribute — all three are Sunni methodologies, and the Athari caution that heavy ta'wil risks shading into ta'til is part of the documented debate.",
    sources: [
      { kind: "QURAN", ref: "Al-An'am 6:103", translation: "Sights cannot grasp Him — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "'…unlike any created being' formulations.", status: "VERIFIED" },
      { kind: "QURAN", ref: "Al-Shura 42:11", translation: "There is nothing like unto Him, and He is the Hearing, the Seeing — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Sharh al-'Aqidah al-Tahawiyyah (classical commentaries) — the attributes sections", translation: "The tanzih/ta'til/tashbih triangulation explained by the creed's commentators.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["What is tanzih?", "Does Allah have a body?"],
    related: ["aqeedah-attributes-how", "aqeedah-where-is-allah"],
  },
  {
    slug: "aqeedah-tawil",
    question: "What is ta'wil and when did scholars use it?",
    questionUr: "تاویل کیا ہے اور علما نے اسے کب استعمال کیا؟",
    questionAr: "ما هي التأويل ومتى استخدمه العلماء؟",
    category: "aqeedah",
    subcategory: "Allah's attributes",
    type: "METHODOLOGY",
    difficulty: "ADVANCED",
    cluster: "aqeedah-attributes",
    intent: "informational",
    shortAnswer:
      "Ta'wil is interpreting an anthropomorphic verse/wording per a linguistically valid meaning fitting Allah's transcendence (e.g. 'hand' as power) — used by many scholars from the early centuries, with tafwid (consignment) as the other documented path.",
    shortAnswerUr:
      "تاویل اس آیت یا عبارت کا وہ مفہوم ہے جو لغوی طور پر درست ہو اور اللہ کے تنزیہ کے موافق ہو (مثلاً 'ید' کو قدرت سمجھنا) — صدرِ اول کی صدیوں سے بہت سے علما نے اسے استعمال کیا، جبکہ تفویض (معنیٰ کو اللہ کے حوالے کرنا) دوسرا مسلّم راستہ ہے۔",
    shortAnswerAr:
      "التأويل هو حمل الآية أو اللفظ المتشابه على معنى صحيح لغويًا يلائم تنزيه الله (كحمل 'اليد' على القدرة) — وقد استخدمه كثير من العلماء منذ القرون الأولى، مع التفويض باعتباره المسار الآخر المثبت.",
    detailedAnswer:
      "Both paths are recorded across the classical corpus: Ibn 'Abbas-era reports include interpretive readings; later systematic works (al-Maturidi's Ta'wilat, al-Bayhaqi's al-Asma' wa'l-Sifat) document the discipline. The platform's rule: represent the two approaches as the school's internal range, never as belief-vs-disbelief.",
    sources: [
      { kind: "BOOK", ref: "Sharh al-'Aqa'id al-Nasafiyyah (al-Taftazani)", translation: "The ta'wil/tafwid discussion.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "Balanced framing of the disputed wordings.", status: "VERIFIED" },
    ],
    variants: ["Why do scholars reinterpret Allah's attributes?", "Is ta'wil permissible?"],
    related: ["aqeedah-attributes-how"],
  },
  {
    slug: "aqeedah-where-is-allah",
    question: "Where is Allah according to Hanafi/Maturidi theology?",
    questionUr: "حنفی/ماتریدی کلام کے مطابق اللہ کہاں ہے؟",
    questionAr: "أين الله وفقًا لكلام الحنفية/الماتريدية؟",
    category: "aqeedah",
    subcategory: "Allah's attributes",
    type: "AQEEDAH",
    difficulty: "ADVANCED",
    cluster: "aqeedah-attributes",
    intent: "fiqh",
    shortAnswer:
      "The school's theologians hold Allah is not contained in space, place, or direction — place and location are creatures' attributes — while affirming His 'uluww (transcendent exaltedness) beyond any creaturely comparison.",
    shortAnswerUr:
      "مکتب کے متکلمین کے نزدیک اللہ کسی فضا، جگہ یا سمت میں محصور نہیں — جگہ اور مقام مخلوق کی صفات ہیں — اور ساتھ ہی اس کی علُوّ (سربلندی و برتری) ہر مخلوقی تشبیہ سے پاک انداز میں ثابت ہے۔",
    shortAnswerAr:
      "يقرّ متكلمو المذهب بأن الله ليس محصورًا في فضاء أو مكان أو جهة — فالمكان والجهة من صفات المخلوقين — مع إثبات علوّه (تعاليه) النزيه عن كل مقارنة مخلوقية.",
    detailedAnswer:
      "The 'where is Allah' question is answered in classical texts with care: Allah's existence is not bounded by created space (makan is created); the istawa (throne) verses are affirmed without asking how. Scholars caution against both literalizing Allah into a physical body and emptying the texts of meaning — the school's documented balance.",
    sources: [
      { kind: "BOOK", ref: "Sharh al-'Aqa'id al-Nasafiyyah (al-Taftazani)", translation: "Space/place theology.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "Transcendence formulations.", status: "VERIFIED" },
    ],
    variants: ["Is Allah above the throne?", "Does Allah exist in a place?"],
    related: ["aqeedah-tanzih", "aqeedah-attributes-how"],
  },
  {
    slug: "aqeedah-seeing-allah",
    question: "Will believers see Allah in the hereafter according to Sunni aqeedah?",
    questionUr: "اہل سنت کے عقیدے کے مطابق کیا مومن آخرت میں اللہ کو دیکھیں گے؟",
    questionAr: "هل يرى المؤمنون الله في الآخرة وفقًا لعقيدة أهل السنة؟",
    category: "aqeedah",
    subcategory: "Allah's attributes",
    type: "AQEEDAH",
    difficulty: "INTERMEDIATE",
    cluster: "aqeedah-attributes",
    intent: "informational",
    shortAnswer:
      "Yes — the four Sunni schools affirm the believers' seeing of Allah in Paradise, reading the verses and the 'you will see your Lord like the full moon' narration corpus as a seeing without containment or direction.",
    shortAnswerUr:
      "ہاں — چاروں اہل سنت مکاتب جنت میں مومنوں کا اللہ کو دیکھنا ثابت کرتے ہیں، اور آیات اور 'تم اپنے رب کو چودہویں رات کے چاند کی طرح دیکھو گے' کی روایات کے مجموعے کو بلا احاطہ اور بلا جہت دیکھنے کے مفہوم میں پڑھتے ہیں۔",
    shortAnswerAr:
      "نعم — تثبت المذاهب السنية الأربعة رؤية المؤمنين لله في الجنة، وتحمل الآيات ومجموعة روايات 'تربون ربكم كالقمر ليلة البدر' على رؤية بلا احترار ولا جهة.",
    detailedAnswer:
      "The Sunni schools converge on the hereafter-seeing, and the classical discussion precisely locates its disagreement: the Mu'tazila denied ru'yah on rational grounds (arguing seeing requires space and distance), and the Sunni response was that the texts decide where reason cannot — Al-Qiyamah 75:22-23 states the looking at their Lord plainly, and the prophetic narrations confirm it through multiple chains. Al-'Aqidah al-Tahawiyyah binds the affirmation to transcendence: the seeing is real, but without a manner — no containment, no distance, no direction, no embodiment of Allah.\n\nThe narrational basis includes the Prophet's ﷺ statement from Jarir ibn 'Abdullah al-Bajali that the believers will see their Lord as they see the full moon, cited in the sahih collections' Tawhid books, and the Prophet's ﷺ taught du'a for the sweetness of looking at Allah's noble Face. The school's theologians add the rational reflection: Allah who granted sight in this world is able to create in the hereafter a seeing that perceives Him without measuring Him — the impossibility the Mu'tazila asserted is not necessary, and the way of the Sunnah is to affirm what revelation affirms while refusing every creaturely image.",
    hanafiPosition: "The believers will see Allah in Paradise — truly, without containment, direction, or any creaturely modality; the seeing is a divine gift distinct in kind from every worldly sight.",
    otherViews: "The Mu'tazila historically denied the hereafter-seeing on rationalist grounds; Athari scholars affirm it with affirmation-without-inquiry, and Maturidi/Ash'ari theologians affirm it through their without-how framework — the disagreement runs between the Mu'tazila and the Sunni schools, not among the Sunni schools themselves.",
    sources: [
      { kind: "QURAN", ref: "Al-Qiyamah 75:22-23", translation: "Faces that day radiant, looking at their Lord — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "The seeing affirmed in the creed.", status: "VERIFIED" },
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab al-Tawhid (narration of Jarir ibn 'Abdullah al-Bajali — seeing the Lord like the full moon)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification; cited at narrator level" },
      { kind: "HADITH", ref: "Sahih Muslim, Kitab al-Salah (narration of Suhaib — the du'a for the sweetness of looking at Allah's noble Face)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification; cited at narrator level" },
      { kind: "QURAN", ref: "Al-A'raf 7:143", translation: "'You cannot see Me' in this world — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
    ],
    variants: ["Can we see Allah in jannah?", "Ru'yah of Allah"],
    related: ["aqeedah-attributes-how", "aqeedah-tanzih"],
  },
  {
    slug: "aqeedah-iman-definition",
    question: "What is iman according to Maturidi theology — and can it increase and decrease?",
    questionUr: "ماتریدی کلام کے مطابق ایمان کیا ہے — اور کیا ایمان میں کمی بیشی ہوتی ہے؟",
    questionAr: "ما هو الإيمان وفقًا لكلام الماتريدية — وهل يزيد ويقلّ؟",
    category: "aqeedah",
    subcategory: "Iman",
    type: "AQEEDAH",
    difficulty: "ADVANCED",
    cluster: "aqeedah-attributes",
    intent: "informational",
    shortAnswer:
      "Maturidi theology defines iman as affirmation (tasdiq) by the heart — deeds are its perfection not its essence; the school holds iman increases in certainty and fruit while its essential core does not leave a believer who affirms.",
    shortAnswerUr:
      "ماتریدی کلام کے نزدیک ایمان دل کی تصدیق ہے — اعمال اس کی کمالات ہیں نہ کہ جوہر؛ مکتب کا موقف ہے کہ ایمان یقین اور ثمرات میں بڑھتا ہے، مگر اس کا اصل جوہر تصدیق کرنے والے مومن کو نہیں چھوڑتا۔",
    shortAnswerAr:
      "يعرّف كلام الماتريدية الإيمان بأنه تصديق القلب — والأعمال كمال له لا جوهره؛ ويقرّ المذهب بأن الإيمان يزيد في اليقين والثمار بينما لا يفارق جوهره الأصلي المؤمنَ المصدِّق.",
    detailedAnswer:
      "This separates the school from Mu'tazila (who made major sins unbelief) and from the takfiri impulse; al-'Aqidah al-Tahawiyyah codifies: 'a believer does not leave iman by sin'. Practical effect: the sinner remains a Muslim to be counselled, not excommunicated.",
    sources: [
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "The sinner-believer rulings in the creed.", status: "VERIFIED" },
      { kind: "BOOK", ref: "Sharh al-'Aqa'id al-Nasafiyyah (al-Taftazani)", translation: "The iman definition discussions.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Does sin remove faith?", "What is iman Hanafi"],
    related: ["aqeedah-major-sins", "aqeedah-takfir-caution"],
  },
  {
    slug: "aqeedah-major-sins",
    question: "Does committing a major sin make a person a disbeliever according to Sunni aqeedah?",
    questionUr: "اہل سنت کے عقیدے کے مطابق کیا کبیرہ گناہ کرنے والا کافر ہو جاتا ہے؟",
    questionAr: "هل يكفر مرتكب الكبيرة وفقًا لعقيدة أهل السنة؟",
    category: "aqeedah",
    subcategory: "Iman",
    type: "AQEEDAH",
    difficulty: "INTERMEDIATE",
    cluster: "aqeedah-attributes",
    intent: "fiqh",
    shortAnswer:
      "No — the Sunni position (against the Kharijite and Mu'tazila views) is that the major sinner remains a believer: a disobedient believer under Allah's will (punishment, forgiveness, or intercession) — not a disbeliever.",
    shortAnswerUr:
      "نہیں — اہل سنت کا موقف (خوارج اور معتزلہ کے مقابل) یہ ہے کہ کبیرہ گناہ گار مومن ہی رہتا ہے: نافرمان مومن جو اللہ کی مشیت کے تابع ہے (عذاب یا مغفرت یا شفاعت) — کافر نہیں۔",
    shortAnswerAr:
      "لا — موقف أهل السنة (في مواجهة مذهب الخوارج والمعتزلة) أن صاحب الكبيرة يبقى مؤمنًا: مؤمنًا عاصيًا بمشيئة الله (عقابًا أو مغفرةً أو شفاعةً) — لا كافرًا.",
    detailedAnswer:
      "The doctrine separates three historical answers to one question: what becomes of a believer who commits a major sin? The Khawarij made him a disbeliever outright; the Mu'tazila placed him in a middle station between belief and disbelief — neither believer nor disbeliever in this life, eternally condemned if he died unrepentant; the Sunni schools held he remains a believer by his iman — a disobedient believer whose final outcome belongs to Allah's will: punishment proportioned to the sin, forgiveness, or the Prophet's ﷺ intercession.\n\nThe school's reading of the evidence pairs the texts warning sinners (Al-Zumar 39:53 — do not despair of Allah's mercy; He forgives all sins) with the texts guaranteeing intercession for sinful believers — both incompatible with eternal exclusion. Al-'Aqidah al-Tahawiyyah codifies the middle way: a Muslim does not leave iman except by denying what brought him into it, and the school does not excommunicate a Muslim for sin so long as he does not declare it lawful. The practical effects follow: the sinner stays in the prayer rows, his marriage and burial stand, and he is commanded to repent — counselled, not excommunicated.",
    hanafiPosition: "A major sin does not expel a person from iman: he remains a disobedient believer whose end rests with Allah — punishment, pardon, or intercession; unrepentant persistence is gravely sinful, never unbelief by itself.",
    otherViews: "Mu'tazila: the major sinner occupies a middle station between belief and disbelief, dying eternally condemned if unrepentant. Khawarij: the sinner is a disbeliever. Both are early theological positions the Sunni schools responded to, and modern takfiri currents echo the Khariji reading; the classical Sunni position remains the position of all four schools.",
    sources: [
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "'…He does not expel them from iman' formulation.", status: "VERIFIED" },
      { kind: "QURAN", ref: "Al-Zumar 39:53", translation: "Do not despair of Allah's mercy; He forgives all sins — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Kitab al-Tawhid (al-Maturidi) — the iman and major-sin discussions", translation: "The school's founding treatment of the major sinner's status.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Are sinners still Muslim?", "Major sins and kufr"],
    related: ["aqeedah-iman-definition", "aqeedah-takfir-caution"],
  },
  {
    slug: "aqeedah-takfir-caution",
    question: "Who can declare someone a disbeliever (takfir) in Islam?",
    questionUr: "اسلام میں کسی کو کافر قرار دینے (تکفیر) کا حق کس کو حاصل ہے؟",
    questionAr: "من يحق له تكفير أحد في الإسلام؟",
    category: "aqeedah",
    subcategory: "Iman",
    type: "AQEEDAH",
    difficulty: "INTERMEDIATE",
    cluster: "aqeedah-attributes",
    intent: "fiqh",
    shortAnswer:
      "Takfir is a grave scholarly ruling with strict conditions: clear revealed prohibition, no interpretive escape, correct application — the classical caution states the mistake of omitting takfir is lighter than wrongly declaring a Muslim a disbeliever.",
    shortAnswerUr:
      "تکفیر ایک سنگین شرعی فیصلہ ہے جس کی سخت شرائط ہیں: صریح منع کرنے والی نص کا موجود ہونا، تاویلی گنجائش کا نہ ہونا اور شرائط کی درست ملازمت — اور متقدمین کی احتیاطی عبارت یہ ہے کہ تکفیر چھوڑ دینے کی غلطی مسلمان کو ناحق کافر کہنے کی غلطی سے ہلکی ہے۔",
    shortAnswerAr:
      "التكفير حكم شرعي جسيم ذو شروط مشددة: نص محرّم صريح، وعدم وجود وجه تأويلي، وتحقيق ملزمة الشرط — وقد استقر الاحتياط عند المتقدمين على أن الخطأ في ترك التكفير أخفّ من الخطأ في تكفير مسلم ظالمًا.",
    detailedAnswer:
      "The jurists of all Sunni schools define takfir as a weighed legal ruling, not a sentiment: it requires (1) a revealed text establishing that the act or statement in question is disbelief, (2) that it be done knowingly rather than in ignorance, (3) that no valid interpretation (an excuse such as a new Muslim's misreading, coercion, or honest error) stands between the person and the ruling, and (4) that the ruling apply to this specific person, not to an abstract category. Where the conditions are met imperfectly, the classical maxim governs — the Prophet's ﷺ rebuke of Usama ibn Zayd after he killed a man who had professed Islam ('did you kill him after he said la ilaha illallah?') made wrongly spilling a Muslim's blood on a takfir guess a grave danger, while the opposite error — leaving a genuine apostasy unnamed — is a scholarly lapse the tradition also names.\n\nThe two extremes are both documented dangers in the school's literature: casual takfir that scatters the ummah into excommunicated fragments, and the blanket refusal to ever evaluate explicit denial that dissolves the Shari'ah's own categories. Al-'Aqidah al-Tahawiyyah walks the middle path — the school does not excommunicate any Muslim for sin so long as he does not declare it lawful — and the creed's commentators add the caution quoted in the direct answer: the mistake of omitting takfir is lighter before Allah than the mistake of wrongly declaring a Muslim a disbeliever.",
    hanafiPosition: "Takfir is a scholarly ruling with strict documented conditions — clear text, knowledge, no valid interpretation, correct application — and is never exercised by individuals over sins, disputes, or suspected intentions.",
    otherViews: "Within Sunni discourse the disagreement is over how strictly the conditions are applied: stricter jurists keep a wide scope for explicit cases, others narrow it to the clearest denials — both sides cite the same caution, and neither treats takfir as a private judgment.",
    commonObjection: "\"Only Allah knows what is in hearts — so no human can ever declare anyone a disbeliever.\"",
    scholarlyResponse: "The school agrees no one reads hearts: takfir is never a claim about intentions, only about explicit words or acts the Shari'ah itself classifies, applied through the jurists' documented conditions. That is why the caution cuts both ways — the same tradition that forbids casual takfir preserves the category for explicit denial of the faith. The platform records both the caution and the category as the school holds them.",
    sources: [
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "The creed's cautions around faith and its loss.", status: "VERIFIED" },
      { kind: "QURAN", ref: "Al-Nisa 4:94", translation: "Do not say to one who greets you in peace, 'You are not a believer' — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab al-Maghazi (narration of Usama ibn Zayd — 'did you kill him after he said la ilaha illallah?')", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
      { kind: "BOOK", ref: "Sharh al-'Aqidah al-Tahawiyyah — the iman, takfir and apostasy sections", translation: "The conditions and cautions around takfir detailed by the creed's commentators.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Can I call someone kafir?", "Takfir rules"],
    related: ["aqeedah-major-sins", "aqeedah-iman-definition"],
  },
  {
    slug: "aqeedah-qadar",
    question: "How do Maturidi theologians explain destiny (qadar) and free choice?",
    questionUr: "ماتریدی متکلمین تقدیر اور آزاد انتخاب کی وضاحت کیسے کرتے ہیں؟",
    questionAr: "كيف يشرح متكلمو الماتريدية القدر وحرية الاختيار؟",
    category: "aqeedah",
    subcategory: "Qadar",
    type: "AQEEDAH",
    difficulty: "ADVANCED",
    cluster: "aqeedah-attributes",
    intent: "informational",
    shortAnswer:
      "Allah creates every act while the servant 'acquires' (kasb) his chosen acts — human choice is real at the level of responsibility, and Allah's eternal knowledge does not compel; the school holds this balance without full rationalization.",
    shortAnswerUr:
      "اللہ ہر فعل کا خالق ہے اور بندہ اپنے منتخب افعال کو 'کسب' کرتا ہے — انسانی انتخاب ذمہ داری کی سطح پر حقیقی ہے، اور اللہ کا قدیم علم جبر نہیں کرتا؛ مکتب اس توازن کو مکمل عقلی توضیح کے بغیر قائم رکھتا ہے۔",
    shortAnswerAr:
      "الله خالق كل فعل، والعبد 'يكتسب' أفعاله المختارة — فالاختيار الإنساني حقيقي في مستوى التكليف، وعلم الله القديم لا يُجبر؛ ويقرّ المذهب بهذا التوازن دون تعليل عقلي كامل.",
    detailedAnswer:
      "The Maturidi framework holds four truths together: Allah is the creator of every act (Al-Saffat 37:96 is the school's anchor verse); the servant's volition is real at the level of responsibility — he acquires (iktasaba) the act he chooses, which is why command and prohibition, reward and punishment address him meaningfully; Allah's eternal knowledge that he will choose does not compel the choosing, because knowledge follows the known rather than forcing it; and the school openly declines to rationalize the junction further.\n\nThe school was arguing against a documented map of alternatives: the Jabriyya denied real human agency (making man a vessel of fate, which collapses responsibility); the Qadariyya/Mu'tazila made man the creator of his own acts (to protect justice, at the cost of Allah's exhaustive creatorship); the Ash'ari school developed its own kasb doctrine — close in conclusions, formulated differently, with the act remaining Allah's creation while acquired by the servant. The Maturidi formulation emphasizes the conjunction of the servant's real will with Allah's creation of the act. The lived fruit the school points to is the prophetic counsel to strive for what benefits you, seek Allah's help, and not be helpless — the middle way between fatalism and self-sufficiency.",
    hanafiPosition: "Allah creates all acts; the servant acquires his chosen acts through a real volition at the level of taklif; divine knowledge and decree do not compel — and the school declines to rationalize beyond this documented balance.",
    otherViews: "Mu'tazila/Qadariyya: man creates his own acts. Jabriyya: man is compelled. Ash'ariyya: acquisition formulated with the act remaining Allah's creation. Each school resolves the scriptural tension differently while sharing the same anchors — the platform records them as the documented theological range without scoring a winner.",
    sources: [
      { kind: "BOOK", ref: "Sharh al-'Aqa'id al-Nasafiyyah (al-Taftazani)", translation: "The kasb framework.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "Qadar formulations.", status: "VERIFIED" },
      { kind: "QURAN", ref: "Al-Saffat 37:96", translation: "Allah created you and what you do — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "QURAN", ref: "Al-Hadid 57:22", translation: "No calamity strikes on earth or in yourselves but it is in a decree before We bring it into being — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "HADITH", ref: "Sahih Muslim, Kitab al-Qadar (narration of Abu Malik al-Ash'ari — 'strive for what benefits you… and do not be helpless')", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
      { kind: "BOOK", ref: "Kitab al-Tawhid (al-Maturidi) — the qadar and kasb discussions", translation: "The school's founding treatment of decree and acquisition.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Do we have free will Islam?", "Qadar and choice"],
    related: ["aqeedah-iman-definition"],
  },

  // ─────────────────────────── PROPHETHOOD ───────────────────────────
  {
    slug: "nubuwwah-finality",
    question: "What does khatm al-nubuwwah (finality of prophethood) mean?",
    questionUr: "خاتم النبوت (نبوت کے اختتام) سے کیا مراد ہے؟",
    questionAr: "ما معنى خاتم النبوة؟",
    category: "prophethood",
    subcategory: "Finality",
    type: "AQEEDAH",
    difficulty: "BEGINNER",
    cluster: "prophethood-finality",
    intent: "informational",
    shortAnswer:
      "Muhammad ﷺ is the last Prophet and Messenger — the verse seals prophethood with him, and the ummah's consensus treats any claim to new prophethood as a rejection of this creed.",
    shortAnswerUr:
      "محمد ﷺ آخری نبی اور رسول ہیں — آیت نے نبوت کا خاتمہ آپ ہی پر کیا، اور امت کا اجماع ہر نئی نبوت کے دعوے کو اس عقیدے کے انکار کا درجہ دیتا ہے۔",
    shortAnswerAr:
      "محمد ﷺ هو خاتم الأنبياء والمرسلين — فالآية ختمت النبوة به، ويعدّ اجماع الأمة كل دعوى نبوة جديدة ردًّا على هذه العقيدة.",
    detailedAnswer:
      "Al-Ahzab 33:40 names Muhammad ﷺ the Seal of the Prophets (khatam al-nabiyyin), and the school reads the seal at its lexical core: a seal closes a document — no prophet follows. The creedal literature adds the mass-transmitted narrations (the house-similitude hadith closing with 'I am that brick; I am the seal of the prophets'; 'there is no prophet after me'), and al-'Aqidah al-Tahawiyyah places belief in his finality among the creed's essentials. The ummah's scholars across Sunni and Shi'a traditions treated every new prophethood claim as a rejection of this shared text — from Musaylima in the Companions' era onward.\n\nThe one organized dissent in modern history is the Ahmadi reading (following Mirza Ghulam Ahmad of Qadian), which reinterprets the seal as confirming rather than closing prophethood, allowing a subordinate, non-law-bearing prophethood after him. The mainstream response, across all schools, holds that reading foreclosed: the verse, the narrations, the Arabic, the consensus of the early centuries, and the Prophet's ﷺ own words converge. The platform records the dissent as documented history and the consensus as the documented creed — without collapsing either.",
    hanafiPosition: "Muhammad ﷺ is the last of the prophets: no new prophet, law-bearing or otherwise, follows him; belief in his finality is a creedal essential in the school's texts.",
    otherViews: "The Ahmadi/Qadiani movement holds a subordinate, non-law-bearing prophethood remains possible after the seal — a reading unanimously rejected by mainstream Sunni and Shi'a scholarship on the verse, the narrations and the early consensus; it is recorded here as the documented dissenting claim, not as an accepted school.",
    sources: [
      { kind: "QURAN", ref: "Al-Ahzab 33:40", translation: "…the Seal of the Prophets — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "The prophethood section sealing with Muhammad ﷺ.", status: "VERIFIED" },
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab Ahadith al-Anbiya (narration of Abu Huraira — the prophets' house-similitude ending 'I am that brick; I am the seal of the prophets')", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
      { kind: "BOOK", ref: "Fatawa Razvia — discussions of the finality of prophethood", translation: "The South Asian scholarly treatment of the finality claimants.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Is there a prophet after Muhammad?", "Khatm e nabuwat meaning"],
    related: ["nubuwwah-bashar", "nubuwwah-knowledge"],
  },
  {
    slug: "nubuwwah-bashar",
    question: "Is the Prophet Muhammad ﷺ a human being (bashar)?",
    questionUr: "کیا حضرت محمد ﷺ بشر ہیں؟",
    questionAr: "هل النبي محمد ﷺ بشر؟",
    category: "prophethood",
    subcategory: "The Prophet's ﷺ person",
    type: "AQEEDAH",
    difficulty: "BEGINNER",
    cluster: "nubuwwah-general",
    intent: "misconception",
    isMisconception: true,
    shortAnswer:
      "Yes — fully human ('I am a man like you; revelation comes to me'), AND the best of creation: the schools hold both together; the polemical 'Hanafis deify the Prophet' charge misrepresents both camps.",
    shortAnswerUr:
      "ہاں — مکمل بشر ('میں تمہاری طرح ایک بشر ہوں؛ مجھ پر وحی آتی ہے') اور ساتھ ہی خیر الخلق: مکاتب دونوں باتوں کو یکجا رکھتے ہیں؛ اور مناقشانہ الزام کہ 'حنفی نبی کو خدا بنا دیتے ہیں' دونوں فریقین کے مواقف کی غلط نمائندگی کرتا ہے۔",
    shortAnswerAr:
      "نعم — بشر تام ('أنا بشر مثلكم يوحى إلي') وأيضًا خير الخلق: تجمع المذاهب بين الأمرين، وادعاء الجدال بأن 'الحنفية تؤلّه النبي' تمثيلٌ محرّف لمواقف الفريقين.",
    detailedAnswer:
      "Surah al-Kahf records the Prophet's ﷺ own self-description: 'I am only a man like you, receiving revelation' (Al-Kahf 18:110) — the verse pairs his humanity with his prophethood in one sentence, which is exactly how the school holds them together. Al-'Aqidah al-Tahawiyyah confesses him as Allah's chosen servant and messenger, and the Qur'an's vocabulary of servanthood ('abd) is the highest honour it gives any man — the Night-Journey surah opens by naming him 'His servant' (Al-Isra 17:1). Humanity-in-essence and supremacy-in-rank are therefore not rivals in the revealed text, and the school's theologians read the two as one teaching: fully human in essence (bashar), uniquely honoured in what Allah bestowed on him — revelation, protection in conveying it (the school's 'ismah), and virtues above all creation.\n\nThe Maturidi framing adds why his humanity is not a defect to be excused: a messenger must share the nature of those he addresses — revelation needed a tongue that spoke it, a life that modelled it, and a community that could obey a man they actually lived among. The school also guards the opposite boundary: some early groups argued from his humanity that obedience to him was ordinary human consultation, and the Qur'an closed that exit — 'whoever obeys the Messenger has obeyed Allah' (Al-Nisa 4:80). So the position holds both lines at once: not divine (worship belongs to Allah alone), and not merely a man (his command carries revealed authority).\n\nThe 'Hanafis deify the Prophet ﷺ' charge belongs to modern polemics around South Asian practice — extensive salawat, mawlid gatherings, tawassul wording. The school's own literature draws the line the platform records: worship ('ibadah — sujud, nadhr, du'a-as-worship) is directed to Allah alone by consensus, and the school's fatawa across its permissive and restrained traditions alike prohibit worship-acts toward anyone besides Allah; honouring (salawat, ziyarah, tawassul) is treated as a distinct category. The same literature criticises worship-like excess at graves — the school disciplines its own folk practice. The honest summary both camps share: the Prophet ﷺ is fully human and is not worshipped; the documented disagreement between the traditions is over where honouring ends, not over his essence.",
    commonObjection: "\"Hanafis worship the Prophet ﷺ.\"",
    scholarlyResponse:
      "Hanafi scholarship affirms his full humanity while honouring his unmatched rank; worship (sujud, du'a-as-worship) is directed to Allah alone in the school's texts — the platform separates honouring (documented) from worship (not documented).",
    sources: [
      { kind: "QURAN", ref: "Al-Kahf 18:110", translation: "I am only a man like you, receiving revelation — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "The Prophet's ﷺ humanity and rank.", status: "VERIFIED" },
      { kind: "QURAN", ref: "Al-Isra 17:1", translation: "Glory to Him who took His servant by night — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "QURAN", ref: "Al-Nisa 4:80", translation: "Whoever obeys the Messenger has obeyed Allah — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
    ],
    variants: ["Is the Prophet human or divine?", "Do Muslims worship Muhammad?"],
    related: ["nubuwwah-finality", "tawassul-permissible"],
  },
  {
    slug: "nubuwwah-knowledge",
    question: "What do Hanafi scholars say about the Prophet's ﷺ knowledge of the unseen?",
    questionUr: "حنفی علما نبی ﷺ کے علم غیب کے بارے میں کیا کہتے ہیں؟",
    questionAr: "ماذا يقول علماء الحنفية عن علم النبي ﷺ بالغيب؟",
    category: "prophethood",
    subcategory: "The Prophet's ﷺ person",
    type: "AQEEDAH",
    difficulty: "ADVANCED",
    cluster: "unseen-knowledge",
    intent: "fiqh",
    isDisputed: true,
    disputedNote: "A sensitive intra-Hanafi debate (Barelvi/Deobandi): BOTH affirm bestowed ('ata'i) knowledge and deny equality with Allah; they differ on the extent of what is bestowed and its formulation — neither school's scholars affirm 'ilm al-ghayb equal to Allah's.",
    shortAnswer:
      "The school affirms the Prophet ﷺ was given vast knowledge by Allah (bestowed, 'ata'i) — greater than all creation — while Allah's own knowledge of the unseen is His alone in essence; the extent of the bestowal is where later scholars debated.",
    shortAnswerUr:
      "مکتب ثابت کرتا ہے کہ اللہ نے نبی ﷺ کو وسیع علم عطا فرمایا (عطائی) — جو تمام مخلوقات سے بڑھ کر ہے — جبکہ غیب کا اللہ کا اپنا علم اپنی ذات میں اسی کے لیے خاص ہے؛ عطا کی وسعت ہی وہ نکتہ ہے جہاں متأخر علما کی گفتگو رہی ہے۔",
    shortAnswerAr:
      "يثبت المذهب أن الله آتى النبي ﷺ علمًا واسعًا (عطائيًّا) — أعظم من الخلق كافة — بينما يبقى علم الله ذاته بالغيب له وحده في ذاته؛ ودار الكلام بين المتأخرين في مقدار هذا العطاء.",
    detailedAnswer:
      "The recorded positions: Allah revealed to the Prophet ﷺ much of the unseen (the five-keys narration marks Allah's exclusive comprehensive knowledge); scholars describe the Prophet's ﷺ bestowed knowledge as encompassing what Allah granted him — Ahmad Raza Khan's school formulates expansively, Deobandi scholars formulate with 'zanni' (probable) nuances for some claims. Both camps deny the equality claim attributed to neither. The platform refuses to collapse this into a slogan.",
    hanafiPosition: "Bestowed ('ata'i) knowledge affirmed; equality with Allah's knowledge denied by all mainstream Hanafi scholars.",
    otherViews: "Ahl-e-Hadith scholars restrict unseen-knowledge claims strictly to explicit revelation.",
    practicalInfo: "For the documented Barelvi/Deobandi formulations, see the Scholars & Books section — read both sides' own texts.",
    sources: [
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab al-Janaiz (narration of Ibn 'Umar — the five keys of the unseen with Allah alone)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
      { kind: "BOOK", ref: "Fatawa Razvia (Ahmad Raza Khan) — the knowledge discussions", translation: "The expansive bestowed-knowledge formulation.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Imdad al-Fatawa (Ashraf Ali Thanwi)", translation: "The Deobandi formulation distinguishing bestowed from Allah's essential knowledge.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Does the Prophet know the unseen?", "Ilm e ghayb Prophet", "Barelvi Deobandi difference knowledge"],
    related: ["nubuwwah-finality", "nubuwwah-bashar", "sa-barelvi-deobandi"],
  },
  {
    slug: "nubuwwah-alive-grave",
    question: "Are the Prophets alive in their graves according to Sunni aqeedah?",
    questionUr: "اہل سنت کے عقیدے کے مطابق کیا انبیاء اپنی قبور میں زندہ ہیں؟",
    questionAr: "هل الأنبياء أحياء في قبورهم وفقًا لعقيدة أهل السنة؟",
    category: "prophethood",
    subcategory: "The Prophet's ﷺ person",
    type: "AQEEDAH",
    difficulty: "INTERMEDIATE",
    cluster: "nubuwwah-general",
    intent: "informational",
    shortAnswer:
      "Yes — the schools affirm the Prophets are alive in their graves, praying and blessed, based on the martyrs-alive verse extended to them and the Prophets' prayer narration; and the Prophet's ﷺ blessed body does not decay.",
    shortAnswerUr:
      "ہاں — مکاتب ثابت کرتے ہیں کہ انبیاء اپنی قبور میں زندہ ہیں، نماز ادا کرتے اور برکات پاتے ہیں، شہیدوں کی حیات کی آیت کو ان پر شامل کرنے اور انبیاء کی نماز کی روایت کی بنا پر؛ اور نبی ﷺ کا مبارک بدن مٹی نہیں کھاتا۔",
    shortAnswerAr:
      "نعم — تثبت المذاهب أن الأنبياء أحياء في قبورهم يصلّون وهم مباركون، بدليل تعميم آية حياة الشهداء عليهم ورواية صلاة الأنبياء؛ وجسد النبي ﷺ المطهر لا تأكله الأرض.",
    detailedAnswer:
      "The school's chain of reasoning runs: the Qur'an declares the martyrs alive and provided for (Al-Imran 3:169), and the narrations place the Prophets above the martyrs — so their life is established a fortiori; the narration from Anas ibn Malik that the Prophets are alive in their graves praying is cited directly in the school's fatawa; and the salam of the tashahhud — where the believer greets the Prophet ﷺ five times daily — is meaningful address only if it reaches him. Al-'Aqidah al-Tahawiyyah records the certainty without fixing a mode, and the school adds the documented narration that Allah has forbidden the earth to consume the Prophets' bodies.\n\nThe traditions discuss the life's mode with care: it is not a return to worldly life, nor the dead's sleep; the scholars describe it as the barzakhi life in its highest degree, with the Prophet's ﷺ soul in its noblest station and his awareness of the salawat addressed to him among the specific favours affirmed. The modern literature's variance concerns how much awareness attaches beyond what explicit narrations state — the school affirms the salam reaches him, and the recorded caution is against describing his state with creaturely detail beyond the texts.",
    hanafiPosition: "The Prophets are alive in their graves in the life of the barzakh — praying and blessed; the believer's salam reaches the Prophet ﷺ, and his ﷺ body is preserved from decay.",
    otherViews: "All Sunni schools affirm the Prophets' grave-life; the documented nuances concern its mode — Athari scholars keep affirmation to the texts' wording, the theologians describe it as the barzakhi life, and some scholars restrict awareness claims to what explicit narrations state. None of the schools denies the doctrine itself.",
    sources: [
      { kind: "QURAN", ref: "Al-Imran 3:169", translation: "Do not think those slain in Allah's cause dead; they are alive, provided for — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "HADITH", ref: "Sunan Abi Dawud, Kitab al-Sunnah (Prophets alive in graves narration — Anas ibn Malik)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "The Prophets' life affirmed in the creed.", status: "VERIFIED" },
      { kind: "HADITH", ref: "Sunan Abi Dawud (narration of Aws ibn Aws — Allah has forbidden the earth from consuming the bodies of the Prophets)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
      { kind: "BOOK", ref: "Sharh al-'Aqidah al-Tahawiyyah — the prophethood and grave sections", translation: "The commentators' discussion of the Prophets' barzakh life.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Are prophets alive in graves?", "Prophet Muhammad alive in Madinah"],
    related: ["barzakh-what", "nubuwwah-madinah-visit"],
  },
  {
    slug: "nubuwwah-shafaah",
    question: "What is shafa'ah (intercession) and who receives it?",
    questionUr: "شفاعت کیا ہے اور اس کے مستحق کون ہیں؟",
    questionAr: "ما هي الشفاعة ومن ينالها؟",
    category: "prophethood",
    subcategory: "Shafa'ah",
    type: "AQEEDAH",
    difficulty: "INTERMEDIATE",
    cluster: "shafaah",
    intent: "informational",
    shortAnswer:
      "Shafa'ah is the Prophet's ﷺ intercession — by Allah's permission — for believers: the great intercession (judgement day), for entering Paradise, for specific sinners (raising ranks, sparing punishment), and for the people of Paradise — all within Allah's will.",
    shortAnswerUr:
      "شفاعت نبی ﷺ کی — اللہ کے اذن سے — مومنوں کے لیے: شفاعت کبریٰ (قیامت کے دن)، جنت میں داخلے کی شفاعت، مخصوص گناہگاروں کے لیے شفاعت (درجات بلند کرنا، عذاب سے بچانا) اور اہل جنت کے لیے شفاعت — سب اللہ کی مشیت کے تابع۔",
    shortAnswerAr:
      "الشفاعة شفاعة النبي ﷺ — بإذن الله — للمؤمنين: الشفاعة الكبرى (يوم القيامة)، وشفاعة الدخول في الجنة، وشفاعة لعصاة محددين (رفع الدرجات وكفّ العقاب)، وشفاعة لأهل الجنة — وكل ذلك بمشيئة الله.",
    detailedAnswer:
      "The verses ('who is that who can intercede with Him except by His permission' — Al-Baqarah 2:255) frame shafa'ah as Allah-authorized: the creed texts affirm the Prophet's ﷺ intercession for the sinful believers of his ummah while denying intercession for the idolaters (Al-Tawbah 9:113). The school's books compile the intercession categories from the narrations.",
    sources: [
      { kind: "QURAN", ref: "Al-Baqarah 2:255", translation: "Who can intercede with Him except by His permission — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "The intercession affirmed.", status: "VERIFIED" },
    ],
    variants: ["Will the Prophet intercede for Muslims?", "Shafaa types"],
    related: ["nubuwwah-knowledge", "aqeedah-major-sins"],
  },
  {
    slug: "nubuwwah-salawat",
    question: "Why do Muslims send salawat (blessings) on the Prophet ﷺ?",
    questionUr: "مسلمان نبی ﷺ پر درود (صلوات) کیوں بھیجتے ہیں؟",
    questionAr: "لماذا يصلّي المسلمون على النبي ﷺ؟",
    category: "prophethood",
    subcategory: "The Prophet's ﷺ person",
    type: "BEGINNER",
    difficulty: "BEGINNER",
    cluster: "nubuwwah-general",
    intent: "informational",
    shortAnswer:
      "Because Allah and His angels do so, and the verse commands the believers likewise — salawat is a commanded act of gratitude and connection, with the Friday emphasis documented in the narrations.",
    shortAnswerUr:
      "کیونکہ اللہ اور اس کے فرشتے اس پر درود بھیجتے ہیں، اور آیت مومنوں کو بھی ایسا کرنے کا حکم دیتی ہے — صلوات شکر اور تعلق کا حکم کردہ عمل ہے، اور جمعے کی تاکید روایات میں ثابت ہے۔",
    shortAnswerAr:
      "لأن الله وملائكته يصلّون عليه، وقد أمرت الآية المؤمنين بالمثل — فالصلوات عمل مأمور من الشكر والربط، وثبت في الروايات التأكيد على يوم الجمعة.",
    detailedAnswer:
      "The practice rests on Al-Ahzab 33:56, where the Qur'an states that Allah and His angels send blessings on the Prophet ﷺ and then commands the believers to do the same — a divine act, an angelic act, and a human duty in one verse. The narrations teach the specific formulas: the tashahhud of every prayer carries the salawat, the adhan narrations add salawat after every call to prayer, and the Friday narrations urge multiplying it on the day of gathering. The school's jurists count the salawat in the final tashahhud among the salah's essential elements — a legal weight showing this is a commanded act, not a courtesy.\n\nThe theological logic the school emphasizes: salawat is the believer's share in the verse's command and the angels' state; it is gratitude in action (the Prophet ﷺ named the miser as one before whom he is mentioned without sending salawat), and its reward is multiplied. Nothing in the practice is worship directed to the Prophet ﷺ — it is a du'a FOR him, asked of Allah — which is precisely the boundary the school's texts preserve against both neglect and excess.",
    hanafiPosition: "Salawat in the final tashahhud is wajib in the school's fiqh; outside prayer it is a sunnah emphasized after the adhan, on Friday, and whenever the Prophet ﷺ is mentioned.",
    otherViews: "The salawat-in-tashahhud ruling varies across the schools — wajib per the Hanafi school, sunnah per the Shafi'i — a fiqh detail, not a dispute over the practice itself; all schools affirm the verse's command and the Friday emphasis.",
    sources: [
      { kind: "QURAN", ref: "Al-Ahzab 33:56", translation: "Allah and His angels send blessings on the Prophet; O you who believe, send blessings on him and salute him — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-Salah", translation: "Salawat within prayer and after.", status: "PARTIALLY_VERIFIED" },
      { kind: "HADITH", ref: "Sahih Muslim (narration of Husayn ibn 'Ali — 'the miser is he before whom I am mentioned and who does not send salawat upon me')", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Salah — the tashahhud section", translation: "The school's treatment of salawat as wajib in the tashahhud.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["What is durood shareef?", "Why send blessings on the Prophet?"],
    related: ["nubuwwah-madinah-visit", "nubuwwah-bashar"],
  },
  {
    slug: "nubuwwah-madinah-visit",
    question: "What is the ruling on visiting Madinah and the Rawdah?",
    questionUr: "مدینہ منورہ اور روضہ اطہر کی زیارت کا حکم کیا ہے؟",
    questionAr: "ما حكم زيارة المدينة والروضة الشريفة؟",
    category: "prophethood",
    subcategory: "The Prophet's ﷺ person",
    type: "PRACTICAL",
    difficulty: "INTERMEDIATE",
    cluster: "nubuwwah-general",
    intent: "fiqh",
    shortAnswer:
      "Visiting the Prophet's ﷺ mosque and resting place is recommended in the school's books — greeting him with respect (his person is alive per the school's creed), avoiding any act of worship directed to anyone but Allah, and observing the site's etiquette.",
    shortAnswerUr:
      "نبی ﷺ کی مسجد اور آرام گاہ کی زیارت مکتب کی کتب میں مستحب ہے — احترام کے ساتھ آپ پر درود و سلام (مکتب کے عقیدے کے مطابق آپ کی ذات زندہ ہیں)، اللہ کے سوا کسی کی طرف متوجہ ہر عبادت سے بچنا، اور مقام کے آداب کی پابندی۔",
    shortAnswerAr:
      "زيارة مسجد النبي ﷺ وموضع قبره مستحبة في كتب المذهب — تحيةً له تعظيمًا (فشخصه حي على عقيدة المذهب)، واجتنابًا لكل عمل عبادي موجّه لغير الله، ومحافظةً على آداب المكان.",
    detailedAnswer:
      "The school's hajj books treat Madinah visitation as a recommended completion of the pilgrimage journey: the visitor prays in the Prophet's ﷺ mosque (one prayer there outweighing a thousand elsewhere per the sahih narration), greets the Prophet ﷺ and his two Companions with respectful salam, and visits the historical sites with remembrance of the sirah. The school's etiquette prescribes the salam as an address of honour — meaningful because the creed teaches he ﷺ is alive — with voice lowered and du'a made to Allah alone; the Prophet ﷺ is honoured and greeted, never asked.\n\nThe travel question is the debate's live edge: the narrations restrict religious journeying to the three mosques, and the school reads them as establishing the sanctuaries' uniqueness WITHOUT cancelling the visitation practice fourteen centuries of the ummah documented — the jurists explain the narrations concern journeying to other mosques for worship, while Madinah visitation belongs to the hajj-adjacent honouring the school's fatawa literature transmits (alongside a visitation report whose chain the hadith scholars discuss). The Salafi reading applies the three-mosques narration to this case as well; the platform records both readings as the documented positions.",
    hanafiPosition: "Visitation of Madinah and the Rawdah is recommended in the school's hajj books: pray in the mosque, salute the Prophet ﷺ with the salam of honour, make du'a to Allah alone, and avoid every worship-directed or excessive act at the site.",
    otherViews: "Salafi scholars apply the three-mosques narration to travel for grave-visitation, holding the intention should target the mosque and its prayer, while permitting the salam and forbidding any asking of the Prophet ﷺ. Hanafi scholarship permits the visitation within the hajj-journey tradition. Both agree on greeting without worship — the disagreement is over the travel's intent and the greeting's mode.",
    commonObjection: "\"Traveling to Madinah to stand at the grave contradicts the hadith 'no journey except to three mosques'.\"",
    scholarlyResponse: "The school answers: the narration's juristic reading concerns journeying to mosques for worship, while the fourteen-century practice documented in the school's hajj books treats Madinah visitation as honouring the Prophet's ﷺ mosque and rest-place, endorsed by the ummah's scholars across the schools. The platform records the Salafi application of the narration as the documented counter-reading; visitors of both camps share the core — prayer in the mosque, salam of honour, du'a to Allah alone.",
    sources: [
      { kind: "BOOK", ref: "Fatawa Hindiyyah, Kitab al-Hajj (visitation of Madinah)", translation: "The visitation rulings compiled.", status: "PARTIALLY_VERIFIED" },
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab al-Salat (narration of Abu Huraira — one prayer in his ﷺ mosque worth a thousand elsewhere)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab al-Salat (narration of Abu Huraira — no journey except to three mosques)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
    ],
    variants: ["Visiting Prophet's grave rulings", "Ziyarat Madinah rules"],
    related: ["nubuwwah-alive-grave", "nubuwwah-salawat"],
  },
  {
    slug: "nubuwwah-miracles",
    question: "What miracles (mu'jizat) of the Prophet ﷺ are established?",
    questionUr: "نبی ﷺ کے کون سے معجزات ثابت ہیں؟",
    questionAr: "ما هي معجزات النبي ﷺ الثابتة؟",
    category: "prophethood",
    subcategory: "The Prophet's ﷺ person",
    type: "HISTORICAL",
    difficulty: "INTERMEDIATE",
    cluster: "nubuwwah-general",
    intent: "informational",
    shortAnswer:
      "The Qur'an itself is the supreme standing miracle; the mass-transmitted ones include the splitting of the moon, the night journey (Isra & Mi'raj), the water multiplication, and the prophecies — recorded in the sahih collections.",
    shortAnswerUr:
      "خود قرآن سب سے بڑا دائمی معجزہ ہے؛ متواتر معجزات میں شقِ قمر، اسرا و معراج، پانی کا فراوان ہونا اور خبراتِ غیبی شامل ہیں — یہ سب صحاح میں ثابت ہیں۔",
    shortAnswerAr:
      "القرآن نفسه هو المعجزة الباقية العظمى؛ ومن المعجزات المتواترة شق القمر، والإسراء والمعراج، ومضاعفة الماء، والخبرات — كلها مثبتة في الصحاح.",
    detailedAnswer:
      "The Qur'an's inimitability is the school's standing miracle: the Qur'an itself challenges its hearers to produce its like (Al-Isra 17:88), and fourteen centuries of Arabic eloquence have not met the challenge — the argument the theologians develop as the mu'jizah that remains to the end of time. Alongside it stand the mass-transmitted signs: the moon's splitting (Al-Qamar 54:1 with the narrational corpus in Bukhari's Manaqib book), the night journey and ascension (Al-Isra 17:1 with the detailed narrations), the multiplication of water, and the prophecies fulfilled in history — the conquest of Mecca, the fates of empires, the Qur'an's own preservation promise.\n\nThe theologians classify carefully: a mu'jizah is an extraordinary act accompanied by a prophetic claim and an unmet challenge; karamat lack the claim and the challenge — the distinction the school maintains when relating the Prophet's ﷺ signs to the awliya's favours. Within the Islamic tradition the transmitted miracles are affirmed by all the schools; the modern variance is allegorical reinterpretation by some modernist writers, recorded in the literature as a departure from the classical affirmation rather than a position within it.",
    hanafiPosition: "The Qur'an is the standing miracle; the mass-transmitted signs — the moon's splitting, the Isra and Mi'raj, the water multiplication, the fulfilled prophecies — are affirmed as they stand in the sahih collections.",
    otherViews: "All classical Sunni schools affirm the transmitted miracles; the documented modern variance is allegorical reinterpretation by some modernist writers — noted by the platform as a departure from the tradition's affirmation, without endorsement.",
    sources: [
      { kind: "QURAN", ref: "Al-Qamar 54:1", translation: "The Hour drew near and the moon split — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab al-Manaqib (moon-splitting and other miracles)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
      { kind: "QURAN", ref: "Al-Isra 17:1", translation: "Glory to Him who took His servant by night from the Sacred Mosque to the Farthest Mosque — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "QURAN", ref: "Al-Isra 17:88", translation: "If mankind and jinn gathered to bring the like of this Qur'an, they could not — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Dala'il al-Nubuwwah (al-Bayhaqi)", translation: "The classical compilation of the Prophet's ﷺ miracles.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Did the moon split?", "Prophet miracles list"],
    related: ["nubuwwah-finality", "nubuwwah-bashar"],
  },
  {
    slug: "nubuwwah-relics",
    question: "Did the Companions seek blessings (tabarruk) from the Prophet's ﷺ belongings?",
    questionUr: "کیا صحابہ نے نبی ﷺ کی اشیاء سے تبرک حاصل کیا؟",
    questionAr: "هل تبرّك الصحابة بأشياء النبي ﷺ؟",
    category: "prophethood",
    subcategory: "The Prophet's ﷺ person",
    type: "HADITH",
    difficulty: "INTERMEDIATE",
    cluster: "nubuwwah-general",
    intent: "evidence",
    shortAnswer:
      "Yes — documented reports include companions seeking his ﷺ blessings from his water (wudu), hair, and belongings; the schools treat his ﷺ tabarruk as a special prophetic matter distinct from later relics' discussions.",
    shortAnswerUr:
      "ہاں — ثابت روایات میں صحابہ کا آپ ﷺ کے وضو کے پانی، بالوں اور اشیاء سے تبرک لینا شامل ہے؛ مکاتب آپ ﷺ کا تبرک ایک خاص نبوی معاملہ سمجھتے ہیں جو بعد کے متبرکات کی بحثوں سے جدا ہے۔",
    shortAnswerAr:
      "نعم — في الروايات الثابتة أن الصحابة تبرّكوا بماء وضوئه ﷺ وشعره وأشيائه؛ ويعتبر المذاهب تبرّكه ﷺ أمرًا نبويًّا خاصًّا يفترق فيه عن مباحث الآثار المتأخرة.",
    detailedAnswer:
      "The narrational record is specific: companions collected the Prophet's ﷺ ablution water to sprinkle on themselves, sought his ﷺ spittle's blessing for sick children, and treasured his ﷺ hair — the narration of Qatada asking Anas for the hair cut at the Farewell Pilgrimage and distributing it stands in the sahih corpus — alongside his ﷺ garments, staff and bowl. The schools treat prophetic tabarruk as documented practice, with the theological frame that keeps it sound: the blessing is Allah's, sought through the person Allah chose — never an inherent power in the object.\n\nThe school's texts then draw the boundary the modern debate needs: prophetic tabarruk is special to the Prophet ﷺ in his lifetime and to what he ﷺ endorsed; whether the practice extends to relics of the righteous AFTER his ﷺ era is where the schools discuss scope. What is documented nowhere in the school is worship-directed treatment of objects — tabarruk is du'a to Allah with an honoured occasion, not veneration of the thing itself; the caution the school's jurists attach whenever the topic arises.",
    hanafiPosition: "Prophetic tabarruk is documented Sunnah practice; the school treats it as a special prophetic matter and evaluates later relic-practices against the school's boundaries of honour without worship.",
    otherViews: "Salafi scholars affirm the Prophet's ﷺ lifetime tabarruk while holding that relics do not carry blessing now and warning against practices resembling veneration; other Sunni traditions preserve relic-veneration at historical sites. The shared line is worship-directed treatment of any object — no school permits it.",
    sources: [
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab al-Libas (wudu-water and hair tabarruk narrations)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
      { kind: "HADITH", ref: "Sahih Muslim, Kitab al-Hajj (narration of Qatada from Anas — the Prophet's ﷺ hair distributed at the Farewell Pilgrimage)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
    ],
    variants: ["Tabarruk in Islam", "Companions and Prophet's hair"],
    related: ["nubuwwah-madinah-visit", "tawassul-permissible"],
  },

  // ─────────────────────────── TAWASSUL & AWLIYA ───────────────────────────
  {
    slug: "tawassul-what-is",
    question: "What is tawassul?",
    questionUr: "توسل کیا ہے؟",
    questionAr: "ما هو التوسل؟",
    category: "tawassul-awliya",
    subcategory: "Tawassul",
    type: "TERMINOLOGY",
    difficulty: "BEGINNER",
    cluster: "tawassul",
    intent: "informational",
    shortAnswer:
      "Tawassul is seeking nearness to Allah in du'a through a means (wasilah) — His names/attributes, good deeds, or the status of the Prophet ﷺ and the righteous — while asking ONLY Allah for the need.",
    shortAnswerUr:
      "توسل دعا میں اللہ کی قربت کا ذریعہ (وسیلہ) اختیار کرنا ہے — اس کے نام/صفات، نیک اعمال، یا نبی ﷺ اور صالحین کی جاہ و منزلت کے ذریعے — جبکہ حاجت صرف اور صرف اللہ سے مانگی جاتی ہے۔",
    shortAnswerAr:
      "التوسل تقرّب إلى الله في الدعاء بواسطة — أسمائه وصفاته، أو عمل صالح، أو جاه النبي ﷺ والصالحين — مع طلب الحاجة من الله وحده لا من سواه.",
    detailedAnswer:
      "The Qur'an's verse commands the wasilah (Al-Ma'idah 5:35), and the scholars organized what it covers: tawassul by Allah's names and attributes ('to Allah belong the most beautiful names, so call Him by them' — Al-A'raf 7:180); tawassul by righteous deeds — the famous cave narration where three men ask Allah by deeds done for His sake, which grounds du'a 'by my prayer' or 'by my service to my parents'; and tawassul by the status (jah) of the Prophet ﷺ and the righteous — the du'a form the Prophet ﷺ himself taught the blind man, and the tawassul of 'Umar through al-'Abbas. The school's fatawa books compile all three, always with the structural rule that separates tawassul from worship: the ASKING is Allah's alone; the person or deed invoked is a means, never an addressee of the request.\n\nThe terminology matters for the debates this category records: the disputed zone is the third form — invoking persons, especially deceased ones. The school's mainstream affirms it (the person's honour is Allah's creation and a fitting means); Salafi scholarship restricts the wasilah to names, attributes and present deeds. The platform's tawassul questions carry that dispute in detail; this entry's job is the framework — tawassul is du'a TO Allah THROUGH a means, whatever the means's permissibility is held to be.",
    hanafiPosition: "The school permits tawassul by Allah's names/attributes, by righteous deeds, and by the status of His Prophet ﷺ and the righteous — with every request addressed to Allah alone.",
    otherViews: "Salafi/Ahl-e-Hadith scholarship affirms the first two forms and the living righteous person's du'a, but rejects invoking a person's status — especially after death — as lacking a sound precedent; the school's mainstream reads the taught du'a and the 'Abbas precedent as establishing the third form. Both camps agree the request itself is Allah's exclusivity.",
    sources: [
      { kind: "QURAN", ref: "Al-Ma'idah 5:35", translation: "O you who believe, be mindful of Allah and seek the wasilah to Him — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Fatawa Hindiyyah, Kitab al-Da'awat", translation: "Tawassul forms compiled.", status: "PARTIALLY_VERIFIED" },
      { kind: "QURAN", ref: "Al-A'raf 7:180", translation: "To Allah belong the most beautiful names, so call Him by them — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab Ahadith al-Anbiya (narration of Ibn 'Umar — the three men in the cave and tawassul by deeds)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
      { kind: "HADITH", ref: "Jami' al-Tirmidhi", number: "3578", translation: "The blind man's taught tawassul du'a — paraphrased translation", status: "PARTIALLY_VERIFIED", note: "number per common edition; narrated by Uthman ibn Hunayf" },
    ],
    variants: ["What does tawassul mean?", "Definition of wasilah"],
    related: ["tawassul-permissible", "tawassul-vs-istighatha", "tawassul-blind-man"],
  },
  {
    slug: "tawassul-permissible",
    question: "Is tawassul permissible according to Hanafi scholars?",
    questionUr: "حنفی علما کے نزدیک کیا توسل جائز ہے؟",
    questionAr: "هل التوسل جائز عند علماء الحنفية؟",
    category: "tawassul-awliya",
    subcategory: "Tawassul",
    type: "AQEEDAH",
    difficulty: "INTERMEDIATE",
    cluster: "tawassul",
    intent: "fiqh",
    shortAnswer:
      "Yes — the school's mainstream scholarship permits tawassul in du'a (through Allah's names, deeds, or honoured servants) provided the REQUEST is addressed to Allah alone; the extensive forms are a documented intra-Sunni discussion.",
    shortAnswerUr:
      "ہاں — مکتب کے اکابر علما دعا میں توسل کو (اللہ کے ناموں، اعمال، یا مقرب بندوں کے ذریعے) جائز سمجھتے ہیں بشرطیکہ درخواست صرف اللہ ہی کی طرف ہو؛ اس کی وسیع اقسام اہل سنت کے اندر ثابت بحث ہیں۔",
    shortAnswerAr:
      "نعم — يرخص جل علماء المذهب بالتوسل في الدعاء (بأسماء الله أو الأعمال أو جاه كرام عباده) بشرط أن يكون الطلب لله وحده؛ وتفاصيله الموسعة نقاشٌ مثبت داخل أهل السنة.",
    detailedAnswer:
      "The tawassul narrations (the blind man, the 'Abbas rain report, the Adam-era du'a reports) ground the practice. Ahl-e-Hadith scholars restrict tawassul to Allah's names/attributes and the living deeds, treating person-tawassul (especially of the deceased) as impermissible — the disagreement is real, documented, and must be represented fairly. Hanafi scholarship (and the platform's own fatwa database) records the permissive mainstream position with its evidential reading.",
    hanafiPosition: "Permitted through the Prophet ﷺ and the righteous, living or deceased, with the request to Allah alone.",
    otherViews: "Ahl-e-Hadith/Salafi: through Allah's names/attributes and living righteous persons' du'a only.",
    sources: [
      { kind: "QURAN", ref: "Al-Ma'idah 5:35", translation: "Seek the wasilah — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Fatawa Razvia (Ahmad Raza Khan) — tawassul discussions", translation: "The permissive position's evidential assembly.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Fatawa Hindiyyah, Kitab al-Da'awat", translation: "Tawassul in the compiled fatawa.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Is tawassul shirk?", "Can I make dua through the Prophet?", "Tawassul through deceased"],
    related: ["tawassul-what-is", "tawassul-blind-man", "istighatha-definition"],
  },
  {
    slug: "tawassul-blind-man",
    question: "What is the hadith of the blind man and tawassul?",
    questionUr: "نابینا اور توسل والی حدیث کیا ہے؟",
    questionAr: "ما هو حديث الأعمى والتوسل؟",
    category: "tawassul-awliya",
    subcategory: "Tawassul",
    type: "HADITH",
    difficulty: "INTERMEDIATE",
    cluster: "tawassul",
    intent: "source-lookup",
    shortAnswer:
      "The Prophet ﷺ taught a blind man to pray: 'O Allah, I ask You and turn to You through Your Prophet Muhammad, the Prophet of mercy…' — and he regained his sight (Tirmidhi 3578, graded hasan by Tirmidhi); later scholars debated its application after the Prophet's ﷺ death.",
    shortAnswerUr:
      "نبی ﷺ نے ایک نابینا کو یہ دعا سکھائی: 'اے اللہ! میں تجھ سے مانگتا ہوں اور تجھ کی طرف روجوع ہوں اپنے نبی محمد، رحمت والے نبی کے واسطے…' — اور اس کی بینائی واپس آ گئی (ترمذی 3578، ترمذی نے اسے حسن کہا)؛ متأخر علما نے نبی ﷺ کی وفات کے بعد اس کے اطلاق پر بحث کی۔",
    shortAnswerAr:
      "علّم النبي ﷺ أعمى أن يدعو: 'اللهم إني أسألك وأتوجه إليك بنبيك محمد نبي الرحمة…' فرجع بصره (رواه الترمذي 3578 وحسّنه)؛ وناقش المتأخرون كيفية تطبيقه بعد وفاة النبي ﷺ.",
    detailedAnswer:
      "Uthman ibn Hunayf (RA) transmitted it; after the Prophet's ﷺ passing, a variant report has him teaching a man in need the same du'a — cited in the tawassul literature. Critics read the taught-du'a as Prophet-specific; supporters read Uthman's post-death practice as precedent. Both readings exist in the literature; the platform records them as the documented range.",
    sources: [
      { kind: "HADITH", ref: "Jami' al-Tirmidhi", number: "3578", translation: "The blind man's taught du'a — paraphrased translation", status: "PARTIALLY_VERIFIED", note: "number per common edition; Tirmidhi graded hasan" },
      { kind: "BOOK", ref: "Fatawa Razvia (Ahmad Raza Khan) — tawassul discussions", translation: "The permissive reading of the report.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Blind man tawassul hadith", "Uthman ibn Hunayf dua"],
    related: ["tawassul-permissible", "tawassul-after-death"],
  },
  {
    slug: "tawassul-after-death",
    question: "What do Hanafi scholars say about tawassul after the death of a person?",
    questionUr: "کسی شخص کی وفات کے بعد اس سے توسل کے بارے میں حنفی علما کیا کہتے ہیں؟",
    questionAr: "ماذا يقول علماء الحنفية في التوسل بعد وفاة الشخص؟",
    category: "tawassul-awliya",
    subcategory: "Tawassul",
    type: "AQEEDAH",
    difficulty: "ADVANCED",
    cluster: "tawassul",
    intent: "fiqh",
    isDisputed: true,
    disputedNote: "Deceased-tawassul is the sharpest line of the tawassul debate: permissive within Hanafi mainstream scholarship; restricted by Ahl-e-Hadith scholars — recorded honestly from both sides.",
    shortAnswer:
      "The school's mainstream holds tawassul through the deceased righteous (including the Prophet ﷺ) is permitted — the request remains to Allah, and the person's honour is invoked as a means; critics hold the means must be living and present.",
    shortAnswerUr:
      "مکتب کے اکابر کے نزدیک وفات پا چکے صالحین (جن میں نبی ﷺ شامل ہیں) کے ذریعے توسل جائز ہے — درخواست اللہ ہی سے رہتی ہے اور شخص کی جاہ و منزلت کو واسطہ کے طور پر لیا جاتا ہے؛ ناقدین کا موقف ہے کہ واسطہ زندہ اور موجود ہونا چاہیے۔",
    shortAnswerAr:
      "يقرّ جل علماء المذهب بأن التوسل بالصالحين المتوفيين (ومنهم النبي ﷺ) مُرخص فيه — فالطلب يبقى لله، ويُتوسَّل بجاه الشخص وسيلةً؛ ويرى الناقدون أن الوسيلة يجب أن تكون حية حاضرة.",
    detailedAnswer:
      "The narration both sides build on is 'Umar's resort to al-'Abbas for rain (Sahih al-Bukhari, Kitab al-Istisqa, as cited in this question's sources): the caliph sought rain invoking the Prophet's ﷺ uncle and his rank with Allah. The permissive scholars read the incident as tawassul through a person's honour; the restricting scholars note precisely that al-'Abbas was alive and present, so its direct content is living tawassul — which both sides accept. The disputed move is the extension from a living means to a deceased one, and each side argues it from further evidence, not from this narration alone.\n\nThe permissive case rests on the blind man's narration (Jami' al-Tirmidhi, narration of 'Uthman ibn Hunayf — number not asserted): the Prophet ﷺ taught a blind man a du'a carrying tawassul through the Prophet's ﷺ own prophethood, and the same report records the man repeating that du'a with its tawassul after the Prophet's ﷺ death. The permissive scholars read this as a prophetic authorization that death does not cancel — a rank lives on with Allah after its holder's passing, as the Qur'an says of the martyrs: 'do not count those killed in Allah's way as dead; rather they are alive, provided for with their Lord' (Al-Imran 3:169). They add that in every formulation the request remains to Allah: the deceased is invoked as a wasilah, never asked as a granter.\n\nThe restricting case states its own logic: the means must be living and present, as in the 'Abbas incident; the deceased do not hear except by Allah's special granting and cannot answer the caller (the narration recorded in Sahih Muslim, Kitab al-Janaiz, on the dead's inability to answer); and post-mortem honour-invocation risks drift toward veneration — a danger to be cut at the root. The permissive scholars concede part of this concern: they themselves forbid worship-directed calls and affirm the deceased's hearing is by Allah's granting, not intrinsic. The disagreement therefore sits at one precise point — whether a rank may be invoked after its holder's death — with both sides affirming that answer and power belong to Allah alone. The permissive line is the mainstream of South Asian Hanafi scholarship (Fatawa Razvia's tawassul discussions document it); the restricting line runs through earlier classical critics (Ibn Taymiyyah among them) into modern Ahl-e-Hadith scholarship — the platform records both without a verdict.",
    sources: [
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab al-Istisqa (narration of Anas — 'Umar's tawassul through al-'Abbas for rain)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
      { kind: "BOOK", ref: "Fatawa Razvia (Ahmad Raza Khan) — tawassul after death", translation: "The permissive position documented.", status: "PARTIALLY_VERIFIED" },
      { kind: "HADITH", ref: "Jami' al-Tirmidhi (narration of 'Uthman ibn Hunayf — the blind man's taught du'a and its post-death practice)", translation: "paraphrased translation", status: "UNVERIFIED", note: "narrator-level citation; number pending verification" },
      { kind: "QURAN", ref: "Al-Imran 3:169", translation: "Do not count those killed in Allah's way as dead; rather they are alive, provided for with their Lord — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "HADITH", ref: "Sahih Muslim, Kitab al-Janaiz (narration of Anas — the dead's inability to answer the caller)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
    ],
    variants: ["Dua at Prophet's grave", "Tawassul through dead saints"],
    related: ["tawassul-permissible", "graves-visiting-etiquette", "istighatha-definition"],
  },
  {
    slug: "tawassul-vs-istighatha",
    question: "What is the difference between tawassul and istighatha?",
    questionUr: "توسل اور استغاثہ میں کیا فرق ہے؟",
    questionAr: "ما الفرق بين التوسل والاستغاثة؟",
    category: "tawassul-awliya",
    subcategory: "Tawassul",
    type: "TERMINOLOGY",
    difficulty: "INTERMEDIATE",
    cluster: "istighatha",
    intent: "informational",
    shortAnswer:
      "Tawassul invokes a person's honour as a means while asking Allah; istighatha calls out to the person directly for help — the school's scholars explain istighatha as addressed to one whom Allah empowers (creation of effect by Allah), while critics treat direct calls as impermissible.",
    shortAnswerUr:
      "توسل میں اللہ سے مانگتے ہوئے کسی کی جاہ و منزلت کو واسطہ بنایا جاتا ہے؛ استغاثہ میں مدد کے لیے براہِ راست شخص کو پکارا جاتا ہے — مکتب کے علما استغاثہ کی وضاحت اس شخص کی طرف کے طور پر کرتے ہیں جسے اللہ نے قدرت دی ہو (اثر کی تخلیق اللہ کی جانب سے)، جبکہ ناقدین براہِ راست پکار کو ناجائز سمجھتے ہیں۔",
    shortAnswerAr:
      "التوسل تفعيل جاه شخص وسيلةً مع الطلب إلى الله؛ والاستغاثة نداء للشخص مباشرةً طلبًا للعون — ويشرح علماء المذهب الاستغاثة بأنها موجّهة إلى من أقدره الله (خلق الأثر من الله)، بينما يرى النقاد النداء المباشر غير جائز.",
    detailedAnswer:
      "Ahmad Raza Khan's school frames istighatha of the Prophet ﷺ as addressing one whom Allah has commissioned to aid — with Allah as the effect's creator; the Ahl-e-Hadith position treats any direct call for help as worship-exclusive to Allah. The platform presents both frameworks with their internal logic — readers should read both sides' own literature.",
    hanafiPosition: "Permissive framing documented in the school's South Asian scholarship.",
    otherViews: "Ahl-e-Hadith: direct calls for help are impermissible; help-seeking is Allah's exclusivity.",
    sources: [
      { kind: "BOOK", ref: "Fatawa Razvia (Ahmad Raza Khan) — istighatha discussions", translation: "The permissive framework's logic.", status: "PARTIALLY_VERIFIED" },
      { kind: "QURAN", ref: "Al-Ma'idah 5:35", translation: "Seek the wasilah — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
    ],
    variants: ["Istighatha vs tawassul", "Ya Muhammad du'a ruling"],
    related: ["tawassul-permissible", "istighatha-definition"],
  },
  {
    slug: "istighatha-definition",
    question: "What does istighatha mean and when is it used?",
    questionUr: "استغاثہ کا کیا مطلب ہے اور اسے کب استعمال کیا جاتا ہے؟",
    questionAr: "ما معنى الاستغاثة ومتى تُستعمل؟",
    category: "tawassul-awliya",
    subcategory: "Istighatha",
    type: "TERMINOLOGY",
    difficulty: "BEGINNER",
    cluster: "istighatha",
    intent: "informational",
    shortAnswer:
      "Istighatha is calling for help — used for Allah primarily; the debate concerns calling the Prophet ﷺ or the righteous: permitted-by-Allah's-power (permissive school framing) vs impermissible direct-call (critical school position).",
    shortAnswerUr:
      "استغاثہ مدد کے لیے پکارنا ہے — بنیادی طور پر اللہ کے لیے؛ بحث نبی ﷺ یا صالحین کو پکارنے سے متعلق ہے: اللہ کی دی ہوئی قدرت کے ذریعے جائز (اجازہ دینے والے مکتب کی تعبیر) اور براہِ راست پکار ناجائز (نقاد مکتب کا موقف)۔",
    shortAnswerAr:
      "الاستغاثة الاستنجاء بالعون — وهي لله أصلًا؛ ودار الجدل في نداء النبي ﷺ أو الصالحين: مستمدة من قدرة الله (صياغة المذهب المرخّص) أم نداء مباشر غير جائز (موقف المذهب الناقد).",
    detailedAnswer:
      "Linguistically istighatha is asking for aid in need — and in the Qur'an the word's scenes are addressed to Allah ('when distress at sea strips away all who you call except Him' — Al-Isra 17:67's famous picture). The fiqh discourse asks what happens when a Muslim says 'Ya Rasul Allah' or calls a righteous shaykh in need. The permissive school's framing (documented especially in the South Asian Hanafi literature): the caller knows ALLAH alone creates effects; the addressed person is asked as one whom Allah has empowered — the way one asks a physician for healing while believing Allah is the Healer — and with the Prophet ﷺ the school adds his ﷺ commissioned aid. The critical school's framing: the direct call of anyone besides Allah for unseen aid is worship's essence — the Qur'an itself says 'your Lord says: call upon Me, I will answer you' — and to call a deceased or absent person treats the unseen with creation rather than Allah.\n\nEach side's strongest argument is documented. The permissive side rests on the continuity between asking the LIVING Prophet ﷺ or righteous for ordinary aid (agreed permissible) and the Allah-empowered framing after death, plus the schools' long histories of istighatha du'as. The critical side rests on the Qur'anic istighatha scenes' exclusivity, the narrations that the dead cannot answer ('you are no better a hearer than they, but they cannot answer you'), and the danger that ordinary worshippers cannot maintain the mental distinction between means and Maker. The honest reading notes where the objection lands: even permissive scholars forbid calls made with worship-intent, and the school's own fatwa literature condemns worship-directed istighatha — the disagreement is over the ABSENCE of worship-intent, not over whether anyone but Allah may be worshipped.",
    hanafiPosition: "The school's mainstream scholarship permits istighatha of the Prophet ﷺ and the righteous as asking one whom Allah empowers, with the effect's creation from Allah alone — and forbids every call carrying worship-intent.",
    otherViews: "Ahl-e-Hadith/Salafi scholarship holds istighatha of anyone besides Allah — living or deceased — impermissible when the aid asked is beyond the person's visible power, citing the Qur'an's sea-distress scenes; they permit asking the living, present person for ordinary aid. The dispute is documented at its sharpest exactly here, and each side's scholars engage the other's framework with precision.",
    commonObjection: "\"Saying 'Ya Muhammad madad' is asking a man in his grave instead of asking Allah — it is worship of other than Allah.\"",
    scholarlyResponse: "The school's answer: the phrase, absent worship-intent, is a call for aid to one whom Allah empowers — the caller knows aid's creation is Allah's alone, exactly as asking a living physician's aid knows Allah is the Healer. It further records the critics' point where it lands: worship-directed calls are forbidden by the school's own fatawa, and the deceased's hearing is by Allah's granting, not intrinsic. The honest summary: both schools forbid worship of other than Allah; they differ on whether an aid-call without worship-intent belongs to tawassul's permitted family.",
    fatawaRazvia: "Fatawa Razvia's istighatha discussions develop the permissive framing at length: Ahmad Raza Khan argues the caller to the Prophet ﷺ or the righteous seeks aid through whom Allah empowered, distinguishes this from worship, and cites the tawassul narrations. The platform summarizes this as the Barelvi school's documented position, paired with the Ahl-e-Hadith critique recorded in the same questions.",
    sources: [
      { kind: "BOOK", ref: "Fatawa Razvia (Ahmad Raza Khan) — istighatha discussions", translation: "Terminology and positions.", status: "PARTIALLY_VERIFIED" },
      { kind: "QURAN", ref: "Al-Isra 17:67", translation: "When distress touches you at sea, those you call vanish except Him — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "HADITH", ref: "Sahih Muslim, Kitab al-Janaiz (narration of Anas — 'you are no better a hearer than they, but they cannot answer you')", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
    ],
    variants: ["What is istighatha?", "Is Ya Ali allowed?"],
    related: ["tawassul-vs-istighatha", "tawassul-permissible"],
  },
  {
    slug: "tawassul-objection-direct",
    question: "If tawassul is allowed, why not ask Allah directly?",
    questionUr: "اگر توسل جائز ہے تو براہِ راست اللہ سے کیوں نہ مانگا جائے؟",
    questionAr: "إذا كان التوسل جائزًا فلماذا لا يُسأل الله مباشرةً؟",
    category: "tawassul-awliya",
    subcategory: "Tawassul",
    type: "OBJECTION",
    difficulty: "INTERMEDIATE",
    cluster: "tawassul",
    intent: "misconception",
    isMisconception: true,
    commonObjection: "\"Tawassul means you don't need Allah.\"",
    scholarlyResponse:
      "The school answers: tawassul IS asking Allah — through an honoured means, exactly as one asks through Allah's names or a good deed; the commanded wasilah verse (5:35) and the taught-du'a narrations establish the practice. Direct du'a remains the believer's constant state; tawassul is a form within it, not a replacement.",
    shortAnswer:
      "Tawassul does not replace direct du'a — it is a form of du'a itself: asking Allah THROUGH a means He commanded seeking (5:35) and His Prophet ﷺ taught.",
    shortAnswerUr:
      "توسل براہِ راست دعا کا متبادل نہیں — بلکہ یہ خود دعا کی ایک صورت ہے: اللہ سے ایسے واسطے کے ذریعے مانگنا جس کی تلاش کا حکم دیا گیا ہے (المائدہ 35) اور جسے اس کے نبی ﷺ نے سکھایا۔",
    shortAnswerAr:
      "التوسل لا يقوم مقام الدعاء المباشر — بل هو نفسه صورة من الدعاء: سؤال الله من خلال وسيلة أمر بطلبها (المائدة 35) وعلّمها نبيه ﷺ.",
    detailedAnswer:
      "The question assumes tawassul competes with direct du'a; the school's texts place it inside du'a. The wasilah verse commands the believer to seek a means TO Allah — 'seek the wasilah to Him' (Al-Ma'idah 5:35, cited in this question's sources) — so the addressee never changes: the means is sought with, the request is made to, the One who grants. The scholars grade the means: Allah's names and attributes (the taught du'as invoke Him by His names), one's own righteous deed, a living person's du'a, and the rank of the prophets and righteous — only the last grade carries the disputed extension treated in the tawassul-after-death entry.\n\nThe deed-based grade is prophetic, not invented: the three men trapped by the rock each made tawassul through their sincere deeds — 'O Allah, if I did that seeking Your face, relieve us' — and Allah relieved them (Sahih al-Bukhari, Kitab al-Isti'adha, narration of 'Abdullah ibn 'Umar). If a believer's own past deed may carry his du'a, the school reasons, then a taught du'a carrying the Prophet's ﷺ rank (the Tirmidhi 3578 record in this question's sources) is the same structure at a higher grade — all of it addressed to Allah. The objection's valid core is real, and the school concedes it: a means can be misused if the heart treats it as a granter; the scholars therefore condition tawassul on the tawhid it presupposes — asking Allah THROUGH the means, never asking the means.\n\nThe stricter framing is recorded fairly in its own terms: Salafi/Ahl-e-Hadith scholarship holds the taught sunnah is to ask Allah directly by His names, reads the deed-narration as a description of those men's du'a rather than a licence to standardize means, and argues the safest conformity to the Prophet ﷺ is direct request — a documented methodology argued from the same verses. The school's answer stands on the taught examples' existence and their repetition in the ummah's worship-literature: no believer is obliged to use tawassul, direct du'a remains the believer's constant state, and the disagreement is over whether specific taught means are sunnah-latitude within du'a — not over who grants.",
    sources: [
      { kind: "QURAN", ref: "Al-Ma'idah 5:35", translation: "Seek the wasilah — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "HADITH", ref: "Jami' al-Tirmidhi", number: "3578", translation: "The taught tawassul du'a — paraphrased translation", status: "PARTIALLY_VERIFIED", note: "number per common edition" },
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab al-Isti'adha (narration of 'Abdullah ibn 'Umar — the three men trapped by the rock making tawassul through their deeds)", translation: "paraphrased translation", status: "UNVERIFIED", note: "chapter-level citation; number pending verification" },
    ],
    variants: ["Why use tawassul instead of dua?", "Does tawassul bypass Allah?"],
    related: ["tawassul-permissible", "tawassul-what-is"],
  },
  {
    slug: "awliya-who",
    question: "Who are the awliya (friends of Allah) according to the Qur'an and Sunni scholarship?",
    questionUr: "قرآن اور اہل سنت کے علم کے مطابق اولیاء اللہ کون ہیں؟",
    questionAr: "من هم أولياء الله وفقًا للقرآن وعلم أهل السنة؟",
    category: "tawassul-awliya",
    subcategory: "Awliya",
    type: "AQEEDAH",
    difficulty: "INTERMEDIATE",
    cluster: "awliya-karamat",
    intent: "informational",
    shortAnswer:
      "The verse defines them: those who believe and are mindful of Allah — wilayah is closeness through faith and taqwa, not rank-by-claim; the scholars caution against declaring anyone a wali beyond documented piety.",
    shortAnswerUr:
      "آیت ان کی تعریف کرتی ہے: جو ایمان لاتے اور اللہ سے ڈرتے ہیں — ولایت ایمان اور تقویٰ کے ذریعے قرب ہے، دعوے سے ملنے والی منزلت نہیں؛ علما کسی کو ثابت شدہ تقویٰ سے بڑھ کر ولی قرار دینے سے روکتے ہیں۔",
    shortAnswerAr:
      "تُعرّفهم الآية: الذين آمنوا وكانوا يتقون — فالولاية قرب بالإيمان والتقوى لا منزلةً بالادعاء؛ ويحذر العلماء من إقرار أحد وليًّا بما يفوق تقواه الموثقة.",
    detailedAnswer:
      "Yunus 10:62-63 supplies the Qur'an's own definition — those who believe and were mindful — making wilayah a matter of faith and taqwa, available in principle to every sincere believer rather than a titled elite. The narrational corpus extends it: the famous hadith qudsi of the voluntary deeds ('My servant keeps drawing near to Me with what I love beyond the obligations, until I love him; and when I love him, I am his hearing with which he hears…') grounds the closeness ladder in the Shari'ah's own obligations; and the creed texts affirm the excellence of the righteous. The scholars add the caution that guards the doctrine: wilayah is KNOWN by the Shari'ah's signs — prayer, honesty, taqwa — not by claims or reputations; a person's claim proves nothing, and the Companions, the ummah's highest wilayah generation, were the least of people to claim it.\n\nTwo framings of the doctrine coexist in Sunni literature. The Sufi traditions elaborate ranks and states of wilayah with detailed hierarchies (the qutb/abdal discussions appear in the karamat literature); the stricter scholars keep wilayah's definition minimal and treat the hierarchies as speculation where they outrun the texts. Both framings agree on the core: wilayah is Allah's gift through faith and taqwa — never purchasable, never claimable, and never a licence above the Shari'ah.",
    hanafiPosition: "Wilayah is closeness to Allah through faith, taqwa and obedience — known by the Shari'ah's signs, never by claims; the school honours the documented righteous without ranking anyone by reputation.",
    otherViews: "Sufi traditions elaborate hierarchical ranks of wilayah (qutb, abdal) and hold knowledge of them is transmitted within their schools; stricter scholars accept wilayah as the Qur'an defines it while holding the hierarchies lack evidential basis. Both are the documented internal range — the definition from Yunus 10:62-63 is shared.",
    sources: [
      { kind: "QURAN", ref: "Yunus 10:62-63", translation: "The awliya of Allah have no fear; those who believe and are mindful — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "The creed's statements on the righteous.", status: "VERIFIED" },
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab al-Riqaq (narration of Abu Huraira — the nawafil hadith qudsi 'My servant draws near to Me until I love him')", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
      { kind: "BOOK", ref: "Sharh al-'Aqa'id al-Nasafiyyah (al-Taftazani) — wilayah and karamat discussions", translation: "The theologians' framing of wilayah and its proofs.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Who are awliya Allah?", "What is wilayah?"],
    related: ["awliya-karamat", "tawassul-permissible"],
  },
  {
    slug: "awliya-karamat",
    question: "What are karamat (miracles of the righteous) according to Sunni scholarship?",
    questionUr: "اہل سنت کے علم کے مطابق کرامات (صالحین کے خوارق) کیا ہیں؟",
    questionAr: "ما هي الكرامات وفقًا لعلم أهل السنة؟",
    category: "tawassul-awliya",
    subcategory: "Awliya",
    type: "AQEEDAH",
    difficulty: "ADVANCED",
    cluster: "awliya-karamat",
    intent: "informational",
    shortAnswer:
      "Karamat are extraordinary events Allah brings through His righteous servants — documented in classical texts (Umar's pulpit-speech of Sariyah, Bilal's post-death visit narrations); they differ from prophetic miracles (mu'jizat) which carry the prophethood-claim challenge.",
    shortAnswerUr:
      "کرامات اللہ کے صالح بندوں کے ہاتھوں سے ظاہر ہونے والے خوارق ہیں — متقدمین کی کتب میں ثابت (عمر رضی اللہ عنہ کی منبر سے سریاہ کے لیے پکار، بلال رضی اللہ عنہ کی وفات کے بعد کی زیارت کی روایات)؛ یہ نبوی معجزات سے مختلف ہیں جن کا تعلق نبوت کے دعوے کی تحدی سے ہوتا ہے۔",
    shortAnswerAr:
      "الكرامات أمور خارقة يظهرها الله على يد عباده الصالحين — مثبتة في كتب المتقدمين (نداء عمر لسارية من المنبر، وروايات زيارة بلال بعد وفاته)؛ وهي تفترق عن المعجزات النبوية التي تتضمن تحدي دعوى النبوة.",
    detailedAnswer:
      "The creed texts affirm karamat of the awliya as real, while requiring scrutiny: many claims are exaggeration or magic/psychology; the criterion is the person's documented faithfulness to the Shari'ah. The school's scholars caution against building beliefs on unverified tales.",
    sources: [
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "Karamat affirmed in the creed.", status: "VERIFIED" },
      { kind: "BOOK", ref: "Sharh al-'Aqa'id al-Nasafiyyah (al-Taftazani)", translation: "Karamat vs mu'jizah distinction.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Can saints do miracles?", "Karamat meaning Islam"],
    related: ["awliya-who", "awliya-kashf"],
  },
  {
    slug: "awliya-kashf",
    question: "Do awliya have knowledge of hidden things (kashf) according to Maturidi theology?",
    questionUr: "ماتریدی کلام کے مطابق کیا اولیاء کو پوشیدہ باتوں کا علم (کشف) ہوتا ہے؟",
    questionAr: "هل لأولياء علم بالخفايا (الكشف) وفقًا لكلام الماتريدية؟",
    category: "tawassul-awliya",
    subcategory: "Awliya",
    type: "AQEEDAH",
    difficulty: "ADVANCED",
    cluster: "unseen-knowledge",
    intent: "fiqh",
    shortAnswer:
      "The mainstream Maturidi position: Allah may unveil glimpses (kashf) to His servants, but no creature holds comprehensive knowledge of the unseen — claims of universal unseen-knowledge are rejected by the school's theologians.",
    shortAnswerUr:
      "ماتریدی کلام کا مستقر موقف: اللہ اپنے بندوں کو جھلکیاں (کشف) دکھا سکتا ہے، مگر کوئی مخلوق غیب کے جامع علم کا حامل نہیں — علم غیب کے جامع دعوے مکتب کے متکلمین ردّ کرتے ہیں۔",
    shortAnswerAr:
      "الموقف الماتريدي المستقر: قد يكشف الله لعباده لمحات (كشف)، لكن لا مخلوق يحاط بعلم الغيب شمولًا — وترد متكلمو المذهب ادعاءَ العلم الجامع بالغيب.",
    detailedAnswer:
      "Kashf (unveiling) and ilham (inspiration) name the class of experiences where Allah shows a servant something of the hidden. The school's theologians affirm the category's possibility — the classical texts cite 'Umar's pulpit-call of Sariyah as the documented exemplar, transmitted as a Companion-era fact — and then draw the lines that keep the doctrine disciplined: kashf is not knowledge of the unseen's comprehensive realm (Al-Naml 27:65 and Luqman 31:34 reserve that with Allah); kashf is never a source of law (the Shari'ah's rulings come from revelation and its juristic channels); and kashf-claims are evaluated rather than auto-accepted — the scholars' literature distinguishes true unveiling from imagination, self-suggestion, and the devil's imitations.\n\nThe documented variance: Sufi literature records extensive kashf reports and builds spiritual-training literature on them; stricter scholars — across the centuries and notably in the modern critique — accept the category's possibility while rejecting its use as proof and demanding scrutiny of specific claims. The platform's rule holds: the category is affirmed in the school's creeds, the excesses are criticized, and no belief of obligation is built on any particular kashf report.",
    hanafiPosition: "Kashf is possible by Allah's granting, never comprehensive of the unseen, never a legal proof, and always subject to the school's scrutiny criteria.",
    otherViews: "Sufi traditions treat kashf reports as a lived genre to be verified within the path; stricter scholars affirm the category in principle but hold most specific claims unproven and reject kashf as evidence in doctrine or law. Both positions are documented in Sunni literature, and the school's creeds take the middle framing.",
    sources: [
      { kind: "BOOK", ref: "Sharh al-'Aqa'id al-Nasafiyyah (al-Taftazani)", translation: "Kashf's possible-but-limited framing.", status: "PARTIALLY_VERIFIED" },
      { kind: "QURAN", ref: "Luqman 31:34", translation: "With Allah alone is the knowledge of the Hour; none in the heavens and earth knows the unseen but He — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "QURAN", ref: "Al-Naml 27:65", translation: "Say: none knows the unseen in the heavens and earth except Allah — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
    ],
    variants: ["Can saints know the future?", "Kashf in Islam"],
    related: ["awliya-karamat", "nubuwwah-knowledge"],
  },
  {
    slug: "tawassul-worship-graves",
    question: "Do Hanafis worship graves or the saints?",
    questionUr: "کیا حنفی قبور یا اولیاء کی عبادت کرتے ہیں؟",
    questionAr: "هل يعبد الحنفية القبور أو الأولياء؟",
    category: "tawassul-awliya",
    subcategory: "Tawassul",
    type: "MISCONCEPTION",
    difficulty: "INTERMEDIATE",
    cluster: "tawassul",
    intent: "misconception",
    isMisconception: true,
    commonObjection: "\"Visiting graves and asking saints' help is worship of others.\"",
    scholarlyResponse:
      "The school's framework distinguishes worship ('ibadah — directed to Allah alone: sujud, nadhr-as-worship, du'a-as-worship) from honouring (ziyarah, tawassul). Hanafi fatawa prohibit prostration to anyone, and grave-visit texts prescribe du'a to Allah. Where folk practice crosses into worship-like acts, the school's own scholars criticize it — the platform separates the school's documented positions from folk excesses.",
    shortAnswer:
      "No — the school's books prohibit worship of anyone but Allah; visiting graves is for remembrance and du'a to Allah, and the school's scholars themselves criticize worship-like excesses at graves.",
    shortAnswerUr:
      "نہیں — مکتب کی کتب اللہ کے سوا کسی کی عبادت کو منع کرتی ہیں؛ قبور کی زیارت یاد دہانی اور اللہ سے دعا کے لیے ہے، اور مکتب کے علما خود قبور پر عبادت نما غلو پر تنقید کرتے ہیں۔",
    shortAnswerAr:
      "لا — تحرّم كتب المذهب عبادة أحد سوى الله؛ وزيارة القبور للعبرة والدعاء إلى الله، وينقد علماء المذهب أنفسهم الغلو العبادي عند القبور.",
    detailedAnswer:
      "The school's answer begins with definitions. 'Ibadah (worship) in the usul is an act the Shari'ah specifies as devotion — sujud, tawaf, nadhr, ritual slaughter, du'a-as-worship — and every one of those acts is Allah-exclusive by the creed's own testimony (la ilaha illa Allah). Honouring (ikram) is a different category: salawat on the Prophet ﷺ, visiting graves, and addressing the dead with the taught salam are acts of respect and remembrance the Shari'ah itself legislates — the grave-visit sunnah opens with 'peace be upon you, inhabitants of the abode of the believers' (Sahih Muslim, Kitab al-Janaiz, narration of Buraydah) — speech TO the dead that Allah taught, not worship OF the dead. The visitor's du'a at the grave is addressed to Allah for the departed, and Radd al-Muhtar's janazah book documents the visitation rules in exactly that frame.\n\nWhere the criticism lands, the school's own scholars say so: prostration at a grave is prohibited by the school's fatawa in every case; tawaf around graves is prohibited; nadhr at a grave and du'a-as-worship to the inhabitant are shirk by the school's own definition; and believing any departed person grants independently of Allah is outside tawhid in the school's creed books. This is not a concession to outsiders — it is the school's documented policing of folk practice: Fatawa Razvia's worship discussions and the restrained tradition's fatawa alike condemn worship-like acts at shrines. On those acts the school's scholars and the strictest critics agree.\n\nThe residual disagreement is narrower than the charge: whether tawassul and istighatha wording WITHOUT worship-intent belongs to honouring or crosses into worship — that line is the istighatha entries' subject, argued on both sides from the same creed. The fair reading holds both directions at once: a school's documented books are not judged by its folk excesses, and folk excesses are not excused by a school's books — the school itself already condemns them.",
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Janazah", translation: "Grave visitation as remembrance + du'a.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Fatawa Razvia (Ahmad Raza Khan) — visitation and worship distinctions", translation: "The school's documented boundaries.", status: "PARTIALLY_VERIFIED" },
      { kind: "HADITH", ref: "Sahih Muslim, Kitab al-Janaiz (narration of Buraydah — the taught salam upon the graveyard's inhabitants)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
    ],
    variants: ["Do Muslims worship graves?", "Is grave worship shirk?"],
    related: ["graves-visiting-etiquette", "tawassul-permissible"],
  },

  // ─────────────────────────── BID'AH ───────────────────────────
  {
    slug: "bidah-definition",
    question: "What is bid'ah (innovation) in Islamic terminology?",
    questionUr: "اسلامی اصطلاح میں بدعت کیا ہے؟",
    questionAr: "ما هي البدعة في الاصطلاح الإسلامي؟",
    category: "bidah",
    subcategory: "Classification",
    type: "TERMINOLOGY",
    difficulty: "BEGINNER",
    cluster: "bidah-classification",
    intent: "informational",
    shortAnswer:
      "Technically: a newly invented religious practice presented as part of the faith — linguistically bid'ah means any new thing; the fiqh/terminology distinction is where the classical discussion lives.",
    shortAnswerUr:
      "اصطلاحاً: نئی گھڑی ہوئی ایسی مذہبی رسم جو دین کا حصہ پیش کی جائے — لغوی طور پر بدعت کا مطلب کوئی بھی نئی چیز ہے؛ فقہ/اصطلاح کی تمیز یہیں ہے جہاں کلاسیکی گفتگو کا مرکز ہے۔",
    shortAnswerAr:
      "اصطلاحًا: عمل ديني مُستحدث يُقدَّم كأنه من الدين — أما في اللغة فالبدعة كل جديد؛ والتمييز بين الفقه والاصطلاح هو موضع الكلام المتقدم.",
    detailedAnswer:
      "The classical discussion begins from the hadith already in this question's citations (the corpus records 'every newly-invented matter is an innovation, and every innovation is misguidance' from the Prophet's ﷺ Friday sermon) and from the Arabic's breadth: linguistically bid'ah is ANY new thing, religious or worldly. The jurists then split the category to match the Shari'ah's own structure. The Hanafi-line usage: bid'ah in the blameworthy technical sense is a religious addition presented as part of the faith; worldly novelty (a tool, a craft, an administrative form) is not bid'ah at all, and the school's books use neutral terms for new worldly things. The Shafi'i-line usage (al-Shafi'i's own reported division — new matters are of two: what accords with guidance is good, what departs is blameworthy — recorded in the Manaqib literature and systematized by al-'Izz ibn 'Abd al-Salam's five-fold classification in al-Qawa'id) keeps bid'ah as the umbrella for all religious novelties and grades them by their relation to the Shari'ah's aims.\n\nThe two frameworks produce different bookkeeping but similar practical verdicts: both prohibit the religious addition that contradicts the Shari'ah, and both permit the new means that serves it. What they disagree on is where the terminology bites: the stricter usage reserves 'bid'ah' for the blameworthy and reads the 'hasanah' language as a linguistic compliment (see the bidah-hasanah question's documented dispute); the broader usage grades novelties on the Shari'ah's scale. The platform records both frameworks as the documented scholarly range without collapsing them.",
    hanafiPosition: "Bid'ah in the school's technical usage is a religious addition presented as part of the faith; worldly novelty is not bid'ah, and religious novelties are evaluated per the school's documented frameworks rather than auto-condemned.",
    otherViews: "The Shafi'i-line five-fold classification grades all religious novelties (obligatory, recommended, permitted, disliked, prohibited, per their Shari'ah relation); the stricter methodologies apply 'bid'ah' to every religious addition and reject the grading. Both read the same hadith corpus — the disagreement is over the hadith's scope, recorded without a winner.",
    fatawaRazvia: "Fatawa Razvia's bid'ah discussions work within the classification frameworks: Ahmad Raza Khan applies the school's categories to specific practices, condemning religious additions he holds contradict the Shari'ah while distinguishing worldly novelty and lawful means — summarized here as the school's documented application method, not as a verdict on any side of the classification debate.",
    sources: [
      { kind: "HADITH", ref: "Sahih Muslim", number: "867", quote: "Every innovation is misguidance.", translation: "paraphrased translation", status: "PARTIALLY_VERIFIED", note: "number per common edition" },
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "Innovation warnings within the creed.", status: "VERIFIED" },
      { kind: "BOOK", ref: "Manaqib al-Shafi'i (al-Bayhaqi) — al-Shafi'i's commendable/blameworthy innovation report", translation: "The early two-fold division of new matters.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Fatawa Razvia (Ahmad Raza Khan) — bid'ah discussions", translation: "The school's category applications to specific practices.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["What does bidah mean?", "Definition of innovation in Islam"],
    related: ["bidah-hasanah", "bidah-all-new-prohibited", "mawlid-ruling"],
  },
  {
    slug: "bidah-all-new-prohibited",
    question: "Are all new things automatically bid'ah (prohibited innovations)?",
    questionUr: "کیا ہر نئی چیز خود بخود بدعت (منع شدہ جدت) ہے؟",
    questionAr: "هل كل جديد بدعة محرّمة تلقائيًا؟",
    category: "bidah",
    subcategory: "Classification",
    type: "METHODOLOGY",
    difficulty: "INTERMEDIATE",
    cluster: "bidah-classification",
    intent: "fiqh",
    shortAnswer:
      "No — new worldly tools (cars, microphones, clocks) are not bid'ah in the religious sense; the classical discussion concerns new religious practices — and even there, scholars distinguish forms (see the hasanah discussion).",
    shortAnswerUr:
      "نہیں — دنیاوی نئے آلات (گاڑیاں، مائیکروفون، گھڑیاں) مذہبی معنوں میں بدعت نہیں؛ کلاسیکی گفتگو نئے مذہبی اعمال سے متعلق ہے — اور وہاں بھی علما صورتوں میں تمیز کرتے ہیں (بدعت حسنہ کی بحث دیکھیں)۔",
    shortAnswerAr:
      "لا — الأدوات الدنيوية الجديدة (السيارات، الميكروفونات، الساعات) ليست بدعة بالمعنى الديني؛ والكلام المتقدم يخص الأعمال الدينية المستحدثة — وحتى هناك يميز العلماء بين الصور (انظر بحث الحسنة).",
    detailedAnswer:
      "The scholarly frameworks: the Shafi'i-line five-fold classification (innovation can be wajib/mundub/mubah/makruh/muharramah per its relation to the Shari'ah — attributed to al-Shafi'i and systematized by Izz al-Din ibn 'Abd al-Salam in al-Qawa'id) versus the Hanafi-line narrower usage (bid'ah as blameworthy religious addition, with 'hasanah' readings discussed for specific practices like 'Umar's tarawih organization). The hadith 'every innovation is misguidance' is read within each framework — the platform records both without collapsing them.",
    sources: [
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab al-Tarawih (narration of Abu Huraira — 'Umar's congregational tarawih: 'excellent innovation')", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
      { kind: "BOOK", ref: "Al-Qawa'id (Izz al-Din ibn 'Abd al-Salam)", translation: "The five-fold classification.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Is everything new haram?", "Are cars bidah?"],
    related: ["bidah-definition", "bidah-hasanah"],
  },
  {
    slug: "bidah-hasanah",
    question: "What is bid'ah hasanah (good innovation)?",
    questionUr: "بدعت حسنہ (اچھی بدعت) کیا ہے؟",
    questionAr: "ما هي البدعة الحسنة؟",
    category: "bidah",
    subcategory: "Classification",
    type: "METHODOLOGY",
    difficulty: "ADVANCED",
    cluster: "bidah-classification",
    intent: "fiqh",
    isDisputed: true,
    disputedNote: "The term's legitimacy is itself the dispute: Shafi'i-line scholars use the classification openly; stricter methodologies argue every religious bid'ah is blameworthy and read 'Umar's phrase linguistically — both are documented positions.",
    shortAnswer:
      "The term describes new religious acts scholars classified as beneficial within the Shari'ah's aims (e.g. 'Umar's congregational tarawih called 'excellent innovation' in the Bukhari narration) — while stricter scholars reject the category for religious acts; the disagreement is documented.",
    shortAnswerUr:
      "یہ اصطلاح ان نئے مذہبی اعمال کے لیے ہے جنہیں علما نے شریعت کے مقاصد کے اندر نافع قرار دیا (مثلاً عمر رضی اللہ عنہ کی تراویح جماعت سے، جسے بخاری کی روایت میں 'نِعمت البدعہ' کہا گیا) — جبکہ سخت منہج والے علما مذہبی اعمال کے لیے یہ درجہ ردّ کرتے ہیں؛ اختلاف ثابت ہے۔",
    shortAnswerAr:
      "الأصل أنها أعمال دينية مستحدثة صنّفها العلماء نافعةً في مقاصد الشريعة (كتراويح عمر جماعةً التي سُمّيت في رواية البخاري 'نعمت البدعة') — بينما يرد أصحاب المنهج الأشد هذا التصنيف في الأعمال الدينية؛ والخلاف مثبت.",
    detailedAnswer:
      "The term's proof-text is 'Umar's congregational tarawih: the Bukhari narration records his organizing the congregation and his own words — 'ni'mat al-bid'ah hazihi', this is an excellent bid'ah (Sahih al-Bukhari, Kitab al-Tarawih, cited in this question's sources). The two frameworks read that sentence differently, and the difference is instructive. The stricter reading: the Prophet ﷺ had already prayed tarawih in congregation and the practice lapsed near his final days (the same chapter's narrations), so 'Umar revived a sunnah — 'bid'ah' in its linguistic sense of something new after a gap, not the blameworthy technical sense; the stricter methodologies add that no genuinely new religious act can be praised as 'good', because the hadith's generality ('every innovation is misguidance' — Muslim 867) admits no grading of religious additions.\n\nThe broader reading — carried by the Shafi'i-line classifications — holds the sentence shows novelty per se is not condemnation: al-Shafi'i's reported two-fold division and Ibn 'Abd al-Salam's five-fold grading in al-Qawa'id weigh every religious novelty by its relation to the Shari'ah's aims; the Hanafi-line books reach similar practical verdicts through their own categories — novelties that are worldly means (wasail) serving worship (compiling the mushaf, writing hadith collections, building minarets and madrasas, printing) are permitted as means, while an addition presented AS a religious rite is weighed by its evidence. On the mushaf and on tarawih-jama'ah themselves virtually all scholars agree these were right — the frameworks differ on the bookkeeping that explains WHY.\n\nThe disagreement bites on fixed communal commemorative forms (giyarvin, urs, mawlid's specific form): the broader frameworks ask what the practice's content serves; the stricter frameworks ask who fixed the form. Both camps' strongest points deserve stating: the stricter camp guards the Shari'ah's completed-ness and the hadith's generality; the broader camp accounts for the ummah's realized practice — from the mushaf onward, the din was preserved through organized novelties. The platform records both without collapsing them; personal-practice questions belong with one's mufti.",
    sources: [
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab al-Tarawih", translation: "'Umar's organization praised as ni'mat al-bid'ah — paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
      { kind: "BOOK", ref: "Al-Qawa'id (Izz al-Din ibn 'Abd al-Salam)", translation: "Beneficial-innovation framework.", status: "PARTIALLY_VERIFIED" },
      { kind: "HADITH", ref: "Sahih Muslim", number: "867", quote: "Every innovation is misguidance.", translation: "paraphrased translation", status: "PARTIALLY_VERIFIED", note: "number per common edition" },
    ],
    variants: ["Is bidah hasanah real?", "Good innovation Islam"],
    related: ["bidah-definition", "bidah-all-new-prohibited"],
  },
  {
    slug: "bidah-custom-difference",
    question: "What is the difference between cultural practice and religious innovation?",
    questionUr: "ثقافتی رواج اور مذہبی بدعت میں کیا فرق ہے؟",
    questionAr: "ما الفرق بين العادة الثقافية والبدعة الدينية؟",
    category: "bidah",
    subcategory: "Classification",
    type: "METHODOLOGY",
    difficulty: "INTERMEDIATE",
    cluster: "bidah-classification",
    intent: "informational",
    shortAnswer:
      "'Urf (custom) governs worldly/communal practices (dress, food, celebration styles) and is mubah unless prohibited; bid'ah arises when a practice is clothed with religious necessity/reward as if from the Shari'ah — the school's books articulate the distinction.",
    shortAnswerUr:
      "عرف دنیاوی/سماجی رسموں (لباس، کھانا، جشن کے انداز) پر حاکم ہے اور جب تک منع نہ ہو مباہ ہے؛ بدعت اُس وقت پیدا ہوتی ہے جب کسی عمل کو شرعی ضرورت/ثواب کا لباس پہنایا جائے گویا وہ شریعت سے ہے — مکتب کی کتب یہ تمیز بیان کرتی ہیں۔",
    shortAnswerAr:
      "العرف حاكم على الأمور الدنيوية/الاجتماعية (اللباس، الطعام، أساليب الاحتفال) وهو مباح ما لم يُمنع؛ وتنشأ البدعة إذا اكتسى العمل مقتضىً دينيًا/ثوابًا وكأنه من الشريعة — وتضبط كتب المذهب هذا الفرق.",
    detailedAnswer:
      "The school's usul gives custom ('urf, 'adah) legal weight: 'custom is a ruling-maker' — contracts, prices, and communal practice are read through custom when revelation is silent, and the fuqaha's books apply it case-by-case (dress styles, foods, celebrations' worldly forms). The boundary the school draws is the practice's PRESENTATION: a worldly practice remains mubah (often meritorious as community service) so long as it presents itself as custom; the moment a practice is clothed with religious necessity — 'the Shari'ah requires this' or 'reward attaches to this act as an act of faith' — it enters the bid'ah evaluation with the frameworks recorded in this category's questions. The grey zone the jurists discuss is exactly the clothing: a meal for guests is custom; a meal declared a religious rite with guaranteed reward is a practice the school evaluates as a religious addition.\n\nThis distinction is why the school's fatwa literature answers these questions case-by-case instead of wholesale: the same gathering can be custom in one community and a religious claim in another, depending on what is taught about it. The practical test the scholars give: ask what the practice CLAIMS about itself — Shari'ah status brings the bid'ah frameworks; worldly organization brings custom and the ordinary prohibitions. The school's books record the test; applying it to a specific practice is a mufti's task, not a slogan's.",
    hanafiPosition: "Custom governs worldly practice and is mubah unless revelation prohibits it; bid'ah arises when a practice is presented with religious necessity or reward as if from the Shari'ah — the school then evaluates it under its documented frameworks.",
    otherViews: "Scholars differ on how much religious framing a custom can carry before it requires evaluation: the hasanah-framework scholars permit adopted customs that serve the Shari'ah's aims; stricter methodologies warn against religious-izing unlegislated practices. The 'urf/bid'ah boundary itself is agreed — its application is where the difference lives.",
    practicalInfo: "The school's practical test: examine what a practice claims for itself — Shari'ah status brings the bid'ah frameworks; worldly custom brings the ordinary prohibitions. A specific practice's ruling is a fatwa question, answered case-by-case.",
    sources: [
      { kind: "BOOK", ref: "Al-Ashbah wa'l-Naza'ir (Ibn Nujaym)", translation: "The custom-rule: custom is weighing in disputes.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), introduction — the 'urf and 'adah discussions", translation: "The school's articulation of custom's legal weight.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Culture vs religion Islam", "Is celebrating birthdays bidah?"],
    related: ["bidah-definition", "sa-practices-giyarvin"],
  },
  {
    slug: "bidah-dua-after-salah",
    question: "Is congregational du'a after the fard salah a bid'ah according to Hanafi fiqh?",
    questionUr: "کیا فرض نماز کے بعد جماعتی دعا حنفی فقہ کے مطابق بدعت ہے؟",
    questionAr: "هل الدعاء الجماعي بعد الفرض بدعة وفقًا لفقه الحنفية؟",
    category: "bidah",
    subcategory: "Disputed practices",
    type: "FIQH",
    difficulty: "INTERMEDIATE",
    cluster: "bidah-classification",
    intent: "fiqh",
    isDisputed: true,
    disputedNote: "Documented range within Sunni practice: many Hanafi scholars permit the mu'akkadah-following du'a (individually or softly in congregation); stricter scholars discourage congregational loud forms; neither side treats the prayer itself as invalid.",
    shortAnswer:
      "The school's scholars permit du'a after salah (individual or congregational) as a general sunnah of du'a, while discussing loud congregational forms — the disagreement over form is documented; the du'a itself is not prohibited.",
    shortAnswerUr:
      "مکتب کے علما نماز کے بعد دعا کو (انفرادی یا جماعتی) دعا کی عمومی سنت کے طور پر جائز سمجھتے ہیں، جبکہ بلند آواز جماعتی صورت پر گفتگو کرتے ہیں — صورت پر اختلاف ثابت ہے؛ دعا خود منع نہیں ہے۔",
    shortAnswerAr:
      "يرخص علماء المذهب بالدعاء بعد الصلاة (فرديًا أو جماعةً) بوصفه سنة عمومية للدعاء، مع الكلام على الصور الجماعية الجاهرة — والخلاف في الصورة مثبت؛ والدعاء نفسه غير محرّم.",
    detailedAnswer:
      "The base layer is agreed on all sides: du'a after the fard prayer is permissible as du'a — du'a is permitted at every hour by the Qur'an's invitation ('your Lord says: call upon Me, I will answer you' — Ghafir 40:60), and the Prophet's ﷺ own post-salah formula is transmitted (the threefold istighfar with 'Allahumma antas-salam...' after the salam — Sahih Muslim, Kitab al-Masajid, narration of Thawban). Nobody in the debate holds the act itself a prohibited bid'ah; the axis of the discussion is the FORM — a loud congregational du'a led by the imam as a regular practice.\n\nThe permissive reasoning: the congregation's du'a after salah is a customary organization ('urf) of a commanded act — believers asking together what each may ask alone; collective amen over a du'a is the sunnah's own pattern, and centuries of Hanafi-land practice (Ottoman and South Asian) carried the form without the school's jurists classifying it as a religious addition — Radd al-Muhtar's salah book discusses post-prayer du'a within the school's ordinary categories. The stricter reasoning: fixing a loud congregational form at salah's close risks presenting custom as sunnah — the very move the bid'ah definition targets — and the stricter scholars prefer the individual sunnah formula or a soft collective amen, noting that the transmitted post-salah practice is individual rather than a led rite.\n\nThe documented range holds both without collision: neither side declares the fard prayer affected, neither prohibits du'a after salah, and the difference is the loud-led congregational form's status (permitted 'urf versus discouraged fixity). The scholars' etiquette: do not make the form a test of belonging — mosques differ here within Hanafism itself, and a visitor follows the congregation without scandal (the follow-the-imam entries document the rule); for one's own regular practice, the mufti's guidance decides.",
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Salah", translation: "Post-prayer du'a discussions.", status: "PARTIALLY_VERIFIED" },
      { kind: "QURAN", ref: "Ghafir 40:60", translation: "Your Lord says: call upon Me, I will answer you — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "HADITH", ref: "Sahih Muslim, Kitab al-Masajid (narration of Thawban — the Prophet's ﷺ threefold istighfar after the salam)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
    ],
    variants: ["Dua after fard salah Hanafi", "Congregational dua bidah?"],
    related: ["bidah-definition", "bidah-hasanah"],
  },
  {
    slug: "bidah-loud-dhikr",
    question: "What is the ruling on loud group dhikr gatherings according to Hanafi fiqh?",
    questionUr: "حنفی فقہ کے مطابق بلند آواز جماعتی ذکر کی محافل کا حکم کیا ہے؟",
    questionAr: "ما حكم مجالس الذكر الجماعي الجاهر وفقًا لفقه الحنفية؟",
    category: "bidah",
    subcategory: "Disputed practices",
    type: "FIQH",
    difficulty: "INTERMEDIATE",
    cluster: "bidah-classification",
    intent: "fiqh",
    isDisputed: true,
    disputedNote: "Sufi-oriented scholars permit (even encourage) measured loud dhikr citing the verse on remembering Allah much and the temple-praise verse; stricter scholars prefer quiet dhikr and warn against excess — a documented range within the school.",
    shortAnswer:
      "Dhikr itself is commanded; the dispute concerns LOUD GROUP forms: many Hanafi scholars permit measured gatherings, others discourage loudness — both positions exist in the school's literature.",
    shortAnswerUr:
      "ذکر خود حکم دیا گیا عمل ہے؛ اختلاف بلند آواز جماعتی صورتوں سے ہے: بہت سے حنفی علما معتدل محافل کو جائز سمجھتے ہیں، دیگر بلندی سے روکتے ہیں — دونوں مواقف مکتب کی کتابوں میں موجود ہیں۔",
    shortAnswerAr:
      "الذكر نفسه مأمور به؛ والنزاع في الصور الجماعية الجاهرة: يرخص كثير من علماء الحنفية بمجالس موزونة، ويكره آخرون الجهر — وكلا الموقفين موجود في كتب المذهب.",
    detailedAnswer:
      "Dhikr's obligation is beyond dispute — the Qur'an commands it repeatedly ('remember Allah much' — Al-Anfal 8:45; 'hearts find rest in the remembrance of Allah' — Al-Ra'd 13:28, already in this question's sources). The scholarly discussion is the MODE. The quietist case rests on the Qur'an's own wording: 'remember your Lord within yourself, humbly and fearfully, without loudness of speech, morning and evening' (Al-A'raf 7:205) — the stricter scholars read this as the preferred sunnah-mode, hold raised-voice group dhikr needs justification, and warn that volume can become performance and that ritualizing a form revelation left unfixed is the bid'ah question's territory.\n\nThe permissive case reads 7:205 as one sanctioned mode among others rather than the exclusive norm: the Qur'an also celebrates audible praise — 'in houses Allah has permitted to be raised and His name remembered in them' (Al-Nur 24:36) — the thunder glorifies Him, and the Shari'ah itself legislates loud collective dhikr on fixed occasions (the hajj talbiyah raised in voice, the 'Id takbirs). The Sufi-oriented scholars reason: if loud collective dhikr is legislated on some occasions, the mode itself cannot be blameworthy — only its misuse; measured loud gatherings, sincere and salah-prioritized, are a mubah form of a commanded act, documented in the khanqahs' centuries of practice and in the permissive fatawa (Fatawa Razvia's dhikr-gathering discussions, cited in this question's sources).\n\nBoth camps share the boundaries that matter: sincerity is the condition, not sound; dhikr never excuses neglecting salah; theatrical excess is condemned on both sides; and attributing independent power to formulas or gatherings would exit tawhid — condemned by every school. The precise disagreement is whether regular loud GROUP dhikr is a sanctioned latitude or a discouraged extension — a documented range inside the school's own literature, and a personal-practice question for one's mufti.",
    sources: [
      { kind: "QURAN", ref: "Al-Ra'd 13:28", translation: "Hearts find rest in the remembrance of Allah — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Fatawa Razvia (Ahmad Raza Khan) — dhikr gatherings", translation: "The permissive position documented.", status: "PARTIALLY_VERIFIED" },
      { kind: "QURAN", ref: "Al-Anfal 8:45", translation: "Remember Allah much that you may succeed — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "QURAN", ref: "Al-A'raf 7:205", translation: "Remember your Lord within yourself, without loudness of speech — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "QURAN", ref: "Al-Nur 24:36", translation: "In houses Allah has permitted to be raised and His name remembered in them — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
    ],
    variants: ["Loud dhikr bidah?", "Group zikr ruling"],
    related: ["bidah-definition", "bidah-hasanah"],
  },

  // ─────────────────────────── MAWLID ───────────────────────────
  {
    slug: "mawlid-what-is",
    question: "What is Mawlid (celebrating the Prophet's ﷺ birth)?",
    questionUr: "میلاد (نبی ﷺ کی پیدائش کی یاد منانا) کیا ہے؟",
    questionAr: "ما هو المولد (الاحتفال بمولد النبي ﷺ)؟",
    category: "mawlid",
    subcategory: "Mawlid",
    type: "TERMINOLOGY",
    difficulty: "BEGINNER",
    cluster: "mawlid",
    intent: "informational",
    shortAnswer:
      "Mawlid refers to the Prophet's ﷺ birth (12 Rabi' al-Awwal by the common dating) and to the gatherings commemorating it — with recitations, salawat, and (in many communities) meals; its permissibility is a documented fiqh debate.",
    shortAnswerUr:
      "میلاد سے مراد نبی ﷺ کی پیدائش (مشہور تعین کے مطابق بارہ ربیع الاول) اور اس کی یاد میں منعقد ہونے والی محفلیں ہیں — تلاوت، درود اور (کئی معاشروں میں) کھانے کے ساتھ؛ اس کے جواز پر فقہی بحث ثابت ہے۔",
    shortAnswerAr:
      "المولد هو مولد النبي ﷺ (الثاني عشر من ربيع الأول على التاريخ المشهور) والمجالس المقامة في ذكراه — بالتلاوة والصلوات وفي كثير من الأوساط بطعام؛ وجوازه مسألة فقهية مثبتة النقاش.",
    detailedAnswer:
      "Mawlid gatherings commemorate the Prophet's ﷺ birth — historically with Qur'an recitation, salawat, sirah narration, devotional poetry, and (in many communities) meals distributed. The famous organized form dates to Muzaffar al-Din Kokburi's Irbil observances (7th century AH, documented by Ibn Khallikan), and the classical literature reports earlier private commemorations. The dating itself is part of the record: the common dating of 12 Rabi' al-Awwal comes from the sirah reports, while several early reports differ on the exact date — a reminder that the practice commemorates an event, not a calendar dogma.\n\nThe fiqh discussion this category records asks about the gathering's CLASSIFICATION: the supporters' framing reads it as a lawful commemoration of gratitude (the classical supportive treatise is al-Suyuti's Husn al-Maqsad), the critics' framing reads the specific annual form as an addition the Shari'ah did not legislate. Both framings share the boundaries the school applies to any gathering: no prohibited mixing, no worship-directed acts toward anyone but Allah, no belief of obligation. This entry is descriptive — the platform's mawlid-ruling and mawlid-history questions carry the documented dispute.",
    hanafiPosition: "Mawlid is a commemorative practice whose ruling the school's scholars debate within their bid'ah frameworks; its lawful elements (recitation, salawat, gratitude, lawful meals) are agreed, and the specific annual form is where the documented disagreement lives.",
    otherViews: "The permissive framing (al-Suyuti's treatise; the Barelvi tradition) affirms commemoration with conditions; the Deobandi scholars range from conditional permit to discouragement; Ahl-e-Hadith scholarship objects to the specific form. All sides affirm the excellence of the Prophet's ﷺ birth and gratitude for it — the dispute is over the practice's legislated status.",
    sources: [
      { kind: "BOOK", ref: "Wafayat al-A'yan (Ibn Khallikan)", translation: "Documents the historical Irbil mawlid observances.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Husn al-Maqsad fi 'Amal al-Mawlid (al-Suyuti)", translation: "The classical supportive treatise on the mawlid.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Al-Sira al-Nabawiyya (Ibn Ishaq) — the birth reports", translation: "The early reports on the Prophet's ﷺ birth and its dating.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["What is mawlid un nabi?", "Eid milad un nabi meaning"],
    related: ["mawlid-ruling", "mawlid-history"],
  },
  {
    slug: "mawlid-ruling",
    question: "What do Hanafi scholars say about celebrating Mawlid?",
    questionUr: "حنفی علما میلاد منانے کے بارے میں کیا کہتے ہیں؟",
    questionAr: "ماذا يقول علماء الحنفية في الاحتفال بالمولد؟",
    category: "mawlid",
    subcategory: "Mawlid",
    type: "AQEEDAH",
    difficulty: "INTERMEDIATE",
    cluster: "mawlid",
    intent: "fiqh",
    isDisputed: true,
    disputedNote: "The disagreement concerns the permissibility of specific celebratory FORMS — NOT love of the Prophet ﷺ, which all sides affirm. Barelvi scholarship affirms; Deobandi scholarship ranges from conditional permit to discouragement; Ahl-e-Hadith scholars object.",
    shortAnswer:
      "South Asian Hanafi scholarship spans the documented range: Ahmad Raza Khan's school affirms Mawlid gatherings (with conditions: no prohibited mixing/acts, no belief of obligation); Deobandi scholars vary — some permit conditional commemoration, others discourage; the disagreement is recorded honestly.",
    shortAnswerUr:
      "جنوب ایشیائی حنفی علم ثابت شدہ دائرے پر پھیلا ہوا ہے: احمد رضا خان کا مکتب میلاد کی محفلوں کی تصدیق کرتا ہے (شرائط کے ساتھ: کوئی منع شدہ اختلاط/عمل نہ ہو، اسے واجب نہ مانا جائے)؛ دیوبندی علما مختلف ہیں — بعض مشروط یاد کی اجازت دیتے ہیں، بعض روکتے ہیں؛ اختلاف ایمانداری سے درج ہے۔",
    shortAnswerAr:
      "علم الحنفية في جنوب آسيا يمتد على المدى المثبت: يقرّ مذهب أحمد رضا خان بمجالس المولد (بشروط: لا اختلاط أو عمل محرّم، ولا اعتقاد وجوب)؛ وعلماء ديوبند متفاوتون — بعضهم يقرّ بالذكر المشروط وآخرون يكرهون؛ والخلاف مثبت بأمانة.",
    detailedAnswer:
      "The supporting arguments: gratitude commemoration, the documented centuries-long observance, the scholars' conditions-based permits (al-Suyuti's Husn al-Maqsad is the classical support text). The critical arguments: no prophetic/Companion practice of the specific form; bid'ah concerns; prevention of excess. The platform records both evidential lines — readers should consult each school's own works.",
    hanafiPosition: "Permissive-with-conditions in the Barelvi tradition; conditional-to-discouraging in the Deobandi tradition.",
    otherViews: "Ahl-e-Hadith: the specific form is an impermissible innovation.",
    sources: [
      { kind: "BOOK", ref: "Husn al-Maqsad fi 'Amal al-Mawlid (al-Suyuti)", translation: "The classical supportive treatise.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Al-Madkhal (Ibn al-Hajj al-'Abdari)", translation: "The classical critical treatment of mawlid forms.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Fatawa Razvia (Ahmad Raza Khan) — Mawlid discussion", translation: "The South Asian supportive formulation.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Is celebrating mawlid allowed?", "Mawlid bidah or sunnah?"],
    related: ["mawlid-what-is", "mawlid-history", "bidah-definition"],
  },
  {
    slug: "mawlid-history",
    question: "When did Mawlid celebrations begin historically?",
    questionUr: "میلاد منانا تاریخی طور پر کب شروع ہوا؟",
    questionAr: "متى بدأ الاحتفال بالمولد تاريخيًا؟",
    category: "mawlid",
    subcategory: "Mawlid",
    type: "HISTORICAL",
    difficulty: "INTERMEDIATE",
    cluster: "mawlid",
    intent: "informational",
    shortAnswer:
      "Documented observances date to centuries after the Prophet ﷺ — the famous organized celebration is Muzaffar al-Din Kokburi's Irbil mawlid (7th century AH), documented by Ibn Khallikan; earlier private commemorations are also reported.",
    shortAnswerUr:
      "ثابت شدہ واقعات نبی ﷺ کے بعد صدیوں کے ہیں — مشہور منظم جشن مظفر الدین کوکبری کا اربیل کا میلاد ہے (ساتویں صدی ہجری)، جس کا تذکرہ ابن خلكان نے کیا؛ اس سے قبل کی نجی یاد کی خبریں بھی ملتی ہیں۔",
    shortAnswerAr:
      "تثبت الوقائع إلى قرون بعد النبي ﷺ — والاحتفال المنظّم المشهور مولد أربيل عند مظفر الدين كوكبوري (القرن السابع الهجري) مثبت عند ابن خلكان؛ وتُروى أيضًا ذكريات خاصة أسبق من ذلك.",
    detailedAnswer:
      "The historical record the literature documents: no organized annual festival appears in the first three centuries; the Fatimid court in Egypt (4th-5th century AH) held mawlid observances recorded in al-Maqrizi's accounts; and the famous Sunni organized celebration is Muzaffar al-Din Kokburi's Irbil mawlid — the chroniclers (Ibn Khallikan; Ibn Kathir in al-Bidayah) document processions, Qur'an recitation, charity distributed, and scholarly gatherings. Earlier individual commemorations are reported in the biographical literature without a festival form.\n\nBoth sides of the ruling-debate read this same record: the supporters' argument notes the practice's centuries-long adoption by the ummah's scholars as evidence of lawfulness; the critics' argument notes the record's silence in the first centuries as confirmation it was not prophetic or Companion practice. The platform records the history as history — the legal weight of 'early origin' or 'late origin' is itself part of the bid'ah-methodology dispute recorded in the bidah questions, not a settled premise.",
    hanafiPosition: "The historical record is descriptive: the school's scholars do not treat a practice's origin-date as a legal proof by itself — the ruling comes from the bid'ah frameworks applied to the practice's form.",
    otherViews: "Supporters cite the practice's long adoption and the scholars who permitted or praised it; critics cite the first centuries' silence as evidence it is not prophetic practice. Both arguments are documented, and neither side disputes the historical facts themselves.",
    commonObjection: "\"Mawlid did not exist in the first centuries — its late origin alone proves it is an unlawful addition.\"",
    scholarlyResponse: "The scholars respond that origin-date is one datum, not a proof by itself: the school's own fiqh acknowledges practices that arose later and were evaluated lawful under the frameworks — the mushaf's compilation form, the tarawih congregation's organization, the madrasa system all post-date the first century. The critics' counter — that these were organizational means while Mawlid is a religious rite — is exactly the classification dispute the bid'ah questions record. The platform leaves the record and both readings standing.",
    sources: [
      { kind: "BOOK", ref: "Wafayat al-A'yan (Ibn Khallikan)", translation: "The Irbil mawlid documentation.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Al-Bidayah wa'l-Nihayah (Ibn Kathir) — the Irbil mawlid account", translation: "The chronicler's description of Muzaffar al-Din's mawlid.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Al-Mawa'iz wa'l-I'tibar (al-Maqrizi) — the Fatimid mawlid records", translation: "The Egyptian historian's account of Fatimid-era mawlid observances.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Who started mawlid?", "History of eid milad"],
    related: ["mawlid-ruling"],
  },
  {
    slug: "mawlid-fast-monday",
    question: "Did the Prophet ﷺ fast on Mondays because of his birth?",
    questionUr: "کیا نبی ﷺ اپنی پیدائش کے باعث سوموار کو روزہ رکھتے تھے؟",
    questionAr: "هل كان النبي ﷺ يصوم يوم الاثنين لمولده؟",
    category: "mawlid",
    subcategory: "Mawlid",
    type: "HADITH",
    difficulty: "INTERMEDIATE",
    cluster: "mawlid",
    intent: "evidence",
    shortAnswer:
      "Yes — Abu Qatadah (RA) narrates the Prophet ﷺ fasted Mondays 'on it I was born and on it revelation came to me' (Sahih Muslim, Kitab al-Siyam) — supporters cite gratitude- commemoration; critics note the hadith prescribes voluntary Monday fasting, not an annual festival; both readings appear in the literature.",
    shortAnswerUr:
      "ہاں — ابو قتادہ رضی اللہ عنہ روایت کرتے ہیں کہ نبی ﷺ سوموار کا روزہ رکھتے تھے 'اس دن میں پیدا ہوا اور اس دن مجھ پر وحی آئی' (صحیح مسلم، کتاب الصوم) — حامی شکر کی یاد سے استدلال کرتے ہیں؛ ناقدین نشاندہی کرتے ہیں کہ حدیث سوموار کے نفلی روزے کا حکم دیتی ہے، سالانہ جشن نہیں؛ دونوں تعبیرات کتب میں موجود ہیں۔",
    shortAnswerAr:
      "نعم — يروي أبو قتادة رضي الله عنه أن النبي ﷺ كان يصوم الاثنين 'فيه وُلدت وفيه أُنزل عليّ' (صحيح مسلم، كتاب الصيام) — يستدل المؤيدون بذكر الشكر؛ ويلاحظ النقاد أن الحديث تقرير صيام الاثنين التطوعي لا عيدًا سنويًا؛ وكلا القراءتين موجود في الكتب.",
    detailedAnswer:
      "The hadith's text (Muslim, Kitab al-Siyam, from Abu Qatadah): the Prophet ﷺ was asked about fasting Monday and said, 'that is the day I was born and the day revelation was sent down to me' — so the fast's own text ties Monday to birth AND revelation together. The supporters' reading (documented in al-Suyuti's Husn al-Maqsad and the mawlid literature): the Prophet ﷺ marked his birth-day by an act of gratitude weekly; commemorating gratitude for his ﷺ birth annually is the argument's extension — the gratitude's form varies, its lawfulness does not. The critics' reading: the hadith legislates a weekly voluntary fast whose stated reason includes prophethood, and extending it to an annual festival imports a form the texts never state — the classic form-versus-meaning boundary the school's usul watches.\n\nThe scholars also transmit the methodological point both sides cite from the later literature (Ibn Taymiyyah's Iqtida' al-Sirat al-Mustaqim discusses it in its mawlid section): repeating a good act on a day the Shari'ah fixed (Monday fast, Friday) follows the texts; fixing NEW days for religious acts is the point the frameworks weigh. The platform records: the hadith is agreed in its weekly-fast form; the mawlid extrapolation is the disputed step, documented on both sides.",
    hanafiPosition: "Monday fasting is a documented sunnah in the school's books with the hadith's birth-and-revelation reasoning; whether the reasoning extends to an annual festival is part of the mawlid classification dispute, not part of the fast's sunnah status.",
    otherViews: "Supporters of Mawlid cite the hadith's birth-gratitude as the commemoration's seed; critics hold the hadith prescribes only the weekly fast and cannot legislate an annual rite. Both readings are documented; the fast itself is agreed sunnah.",
    sources: [
      { kind: "HADITH", ref: "Sahih Muslim, Kitab al-Siyam (narration of Abu Qatada — Monday fasting: 'on it I was born')", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
      { kind: "BOOK", ref: "Iqtida' al-Sirat al-Mustaqim (Ibn Taymiyyah) — the mawlid section", translation: "The classical critical treatment of fixing religious days, cited by both sides.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Husn al-Maqsad fi 'Amal al-Mawlid (al-Suyuti) — the Monday-fast argument", translation: "The classical supportive reading of the Monday hadith.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Monday fasting sunnah", "Prophet fasted birth day"],
    related: ["mawlid-ruling", "mawlid-what-is"],
  },
  {
    slug: "mawlid-aqeedah-or-fiqh",
    question: "Is Mawlid an aqeedah issue or a fiqh issue?",
    questionUr: "کیا میلاد عقیدے کا مسئلہ ہے یا فقہ کا؟",
    questionAr: "هل المولد مسألة عقيدة أم مسألة فقه؟",
    category: "mawlid",
    subcategory: "Mawlid",
    type: "AQEEDAH",
    difficulty: "ADVANCED",
    cluster: "mawlid",
    intent: "informational",
    shortAnswer:
      "Primarily a fiqh/ijtihadi-practice issue: the disagreement is about a practice's classification — it becomes an aqeedah matter only at the extremes (e.g. treating the Prophet ﷺ as omnipresent, or declaring his lovers disbelievers).",
    shortAnswerUr:
      "بنیادی طور پر یہ فقہی/اجتہادی عمل کا مسئلہ ہے: اختلاف کسی عمل کی درجہ بندی پر ہے — یہ صرف انتہائی صورتوں میں عقیدے کا معاملہ بن جاتا ہے (مثلاً نبی ﷺ کو ہر جگہ حاضر سمجھنا، یا آپ ﷺ کے محبت کرنے والوں کو کافر کہنا)۔",
    shortAnswerAr:
      "هو أصلًا مسألة فقهية/عملية اجتهادية: الخلاف في تصنيف عمل معيّن — ولا يصير مسألة عقيدة إلا في الأطراف المتطرفة (كاعتقاد أن النبي ﷺ حاضر في كل مكان، أو تكفير محبيه).",
    detailedAnswer:
      "The classification matters because it sets the debate's temperature. The core dispute — is the annual commemoration a lawful practice? — is fiqh/ijtihadi: it belongs to the bid'ah frameworks recorded in the category's questions and is decided by evidence-reading, not by creed tests. The creedal core all camps share is al-'Aqidah al-Tahawiyyah's content: love and honour of the Prophet ﷺ are of iman, and worship is Allah's alone. The dispute turns creedal only at the documented extremes: on the permissive side, beliefs that make the Prophet ﷺ omnipresent or omniscient of the unseen's comprehensiveness would be creedal errors by every school's texts; on the critical side, declaring ordinary Mawlid participants or lovers of the Prophet ﷺ disbelievers violates the takfir conditions recorded in the aqeedah-takfir-caution question.\n\nThe platform's disciplinary rule follows from the classification: the library records Mawlid's ruling debate as a fiqh range, records the creed-cautions as creed, and refuses the polemical escalation — 'Mawlid is shirk' and 'Mawlid critics hate the Prophet ﷺ' are both slogan-forms the scholars' literature does not sustain. The school's own fatwa tradition keeps the lines: worship-direction and belief-of-obligation are prohibited; the commemoration's lawful elements are agreed; the specific form's status is the documented ijtihadi dispute.",
    hanafiPosition: "Mawlid's ruling is a fiqh issue decided within the bid'ah frameworks; it becomes an aqeedah matter only at the extremes the creed rejects — worship-directed practice or takfir of the other camp.",
    otherViews: "Polemical literatures on multiple sides escalate the question to creed ('Mawlid is shirk' versus 'critics hate the Prophet ﷺ'); the scholarly positions in the library's sources keep the fiqh/aqeedah boundary — the platform records the escalation as documented polemic, not as any school's scholarly position.",
    practicalInfo: "Read the fiqh debate with its evidence (mawlid-ruling) and the creed boundary (worship to Allah alone; takfir's conditions) as separate layers; personal practice questions belong with a qualified local mufti.",
    sources: [
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "The creedal core both camps share.", status: "VERIFIED" },
    ],
    variants: ["Is mawlid shirk?", "Does mawlid affect belief?"],
    related: ["mawlid-ruling", "nubuwwah-bashar"],
  },

  // ─────────────────────────── GRAVES & BARZAKH (category aqeedah) ───────────────────────────
  {
    slug: "graves-fatiha-dispute",
    question: "Is reciting Surah Fatiha at graves a bid'ah according to Hanafi fiqh?",
    questionUr: "کیا قبور پر سورہ فاتحہ کی تلاوت حنفی فقہ کے مطابق بدعت ہے؟",
    questionAr: "هل قراءة سورة الفاتحة عند القبور بدعة وفقًا لفقه الحنفية؟",
    category: "aqeedah",
    subcategory: "Graves & Barzakh",
    type: "FIQH",
    difficulty: "INTERMEDIATE",
    cluster: "isal-thawab",
    intent: "fiqh",
    isDisputed: true,
    disputedNote: "The Fatiha-at-graves practice: affirmed within Hanafi scholarship as part of isal al-thawab; restricted by scholars who limit grave-side acts to du'a/salam — the platform records both.",
    shortAnswer:
      "The school's scholars permit recitation-gifting (including Fatiha) at graves within the isal al-thawab framework; stricter positions limit grave-side practice to du'a — both are documented Sunni positions.",
    shortAnswerUr:
      "مکتب کے علما قبور پر تلاوت کا ثواب پہنچانا (فاتحہ سمیت) اِصالِ ثواب کے اصول کے اندر جائز سمجھتے ہیں؛ سخت مواقف قبر کے پاس کے عمل کو دعا تک محدود کرتے ہیں — دونوں اہل سنت کے ثابت مواقف ہیں۔",
    shortAnswerAr:
      "يرخص علماء المذهب بهدية التلاوة (ومنها الفاتحة) عند القبور في إطار إيصال الثواب؛ ويحصر الموقف الأشد العملَ عند القبر في الدعاء — وكلاهما موقف سني مثبت.",
    detailedAnswer:
      "The practice rests on the school's isal al-thawab (conveying reward) framework: the school's mu'tamad position affirms that the dead benefit from the living's du'a and voluntary acts on their behalf — charity is the flagship case (the Sa'd ibn 'Ubadah narration, Sunan Abi Dawud's zakat book) — and recitation joins it through the reciter's du'a: one recites, then asks Allah to gift the reward to the departed. Radd al-Muhtar's janazah book (cited in this question's sources) records the school's affirming position and also the intra-school strand that restricted reward-gifting to non-recitation acts — the mu'tamad outweighs it, but the honest record shows the school itself argued the point. Reciting Fatiha at a grave is one instance of this framework, with the added benefit that recitation reminds the VISITOR of death — a purpose the grave-visit sunnah itself carries.\n\nThe restricting position argues from precedent: the documented grave-side acts are the salam and du'a — the taught formulas — and a fixed recitation-ritual at graves lacks a prophetic or Companional example. The stricter scholars raise two concerns: the classical one (does recitation's reward transfer at all? — the strand Radd al-Muhtar records) and the practical one (fixed grave-rituals tend to acquire 'required' status in folk perception — the bid'ah worry). The permissive scholars answer both: the transfer follows from the school's affirmed isal al-thawab principles (du'a and sadaqah reach the dead; the recitation-gift travels through the accompanying du'a), and 'required' status is exactly what the scholars forbid — the practice is permissible, never an obligation, and its fixed formats (threefold Fatiha and the like) are customary organization, not shari'ah-fixed rites.\n\nThe disagreement therefore has two layers: whether recitation's reward reaches the dead at all (the school's mu'tamad: yes; a minority strand: no) and whether the fixed grave-side form is 'urf of an affirmed principle or an unlegislated religious form. Both positions are Sunni and documented; du'a for the dead itself is agreed by every side; and the practical rule the scholars attach — never treat the Fatiha-at-grave as owed, and keep the du'a's direction to Allah alone — is shared.",
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Janazah", translation: "Recitation-gifting permissions.", status: "PARTIALLY_VERIFIED" },
      { kind: "HADITH", ref: "Sunan Abi Dawud, Kitab al-Zakat (narration of Sa'd ibn 'Ubadah — charity on behalf of his deceased mother)", translation: "paraphrased translation", status: "UNVERIFIED", note: "chapter-level citation; number pending verification" },
    ],
    variants: ["Fatiha at grave bidah?", "Reading Quran at graves"],
    related: ["graves-dua-fatiha", "isal-thawab-methods"],
  },
  {
    slug: "graves-shrine-buildings",
    question: "What is the ruling on building structures over graves according to Hanafi fiqh?",
    questionUr: "حنفی فقہ کے مطابق قبور پر عمارتیں بنانے کا حکم کیا ہے؟",
    questionAr: "ما حكم البناء على القبور وفقًا لفقه الحنفية؟",
    category: "aqeedah",
    subcategory: "Graves & Barzakh",
    type: "FIQH",
    difficulty: "ADVANCED",
    cluster: "grave-visit",
    intent: "fiqh",
    isDisputed: true,
    disputedNote: "The narration corpus discourages raising/ plastering graves; the school applied it with the prohibition of extravagance/excess and discussed shrines of the famous righteous within those limits — other schools restrict more strictly.",
    shortAnswer:
      "The school discourages extravagance over graves and prohibits worship-directed structures; the historical shrines of the righteous were handled by the school's scholars with conditions against excess — the documented range is recorded.",
    shortAnswerUr:
      "مکتب قبور پر غلو کو ناپسند کرتا ہے اور عبادت کے لیے بنائی گئی عمارتوں کو منع کرتا ہے؛ صالحین کی تاریخی درگاہوں کا معاملہ مکتب کے علما نے غلو سے روکنے والی شرائط کے ساتھ کیا — ثابت شدہ دائرہ درج ہے۔",
    shortAnswerAr:
      "يكره المذهب الغلو على القبور ويحرّم البناء الموجّه للعبادة؛ وقد عالج علماء المذهب مشاهد الصالحين التاريخية بشروط تمنع الإفراط — والمدى المثبت مسجّل.",
    detailedAnswer:
      "The narration layer is clear: the corpus records the Prophet's ﷺ prohibition of raising and plastering graves and the Companions' action on it — 'Ali's instruction to Abu'l-Hayyaj al-Asadi to go through Madinah effacing images and levelling raised graves (Sahih Muslim, Kitab al-Janaiz) — alongside the stricter narrations against sitting on, praying toward, and building over graves. The school's jurists then read the prohibition's rationale and scope: the discussion in Radd al-Muhtar's janazah book (cited in this question's sources) works through what the prohibition targets — extravagance (israf), ostentation, and above all what invites veneration — while noting that the Prophet's ﷺ own grave was left raised in the hujrah by the Companions' decision, a unique case the scholars treat as specific rather than as a licence.\n\nThe school's operative rules: raising or plastering at burial is discouraged-to-prohibited; building structures over ordinary graves is prohibited where it carries extravagance or veneration-risk; and the tombs of the famous righteous — the historical shrines — were discussed within the same categories: the permissive strand allowed marking and roofing for visitation's sake within no-excess limits (the Ottoman-era practice worked in that frame), while a restrictive strand — and the Hanbali line notably, along with the modern Ahl-e-Hadith position — reads the narrations as a flat prohibition of construction. All sides agree on the creed's floor: any structure that becomes a site of worship-directed acts (sujud, tawaf, nadhr) is prohibited, and the school's fatawa say so in terms.\n\nThe modern debate over shrine-removal versus regulated shrine-keeping inherits exactly this classical line: the restricting side holds the narrations' letter governs and that demolition is the safe course; the school's mainstream holds the narrations target extravagance and veneration-invitation, so pre-existing shrines are managed (visitation regulated, excess policed, worship-acts prohibited) rather than demolished wholesale — with the honest caveat that the school's own scholars differed on how far the allowance extends. The dispute's precise point is scope: whether the narrations forbid all construction or the excess-and-veneration subset. Personal conduct at any shrine is governed by the shared floor: du'a to Allah alone, no worship-directed acts, respect without veneration.",
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Janazah", translation: "Grave-structure discussions.", status: "PARTIALLY_VERIFIED" },
      { kind: "HADITH", ref: "Sahih Muslim, Kitab al-Janaiz (narration of Abu'l-Hayyaj al-Asadi — 'Ali's instruction to efface images and level raised graves in Madinah)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
    ],
    variants: ["Dargah rulings", "Building shrines Islam"],
    related: ["graves-visiting-etiquette", "tawassul-worship-graves"],
  },
];
