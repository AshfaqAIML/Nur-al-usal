import type { BankQuestion } from "./types";

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
    sources: [
      { kind: "QURAN", ref: "Al-An'am 6:103", translation: "Sights cannot grasp Him — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "'…unlike any created being' formulations.", status: "VERIFIED" },
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
    sources: [
      { kind: "QURAN", ref: "Al-Qiyamah 75:22-23", translation: "Faces that day radiant, looking at their Lord — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "The seeing affirmed in the creed.", status: "VERIFIED" },
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
    sources: [
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "'…He does not expel them from iman' formulation.", status: "VERIFIED" },
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
    sources: [
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "The creed's cautions around faith and its loss.", status: "VERIFIED" },
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
    sources: [
      { kind: "BOOK", ref: "Sharh al-'Aqa'id al-Nasafiyyah (al-Taftazani)", translation: "The kasb framework.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "Qadar formulations.", status: "VERIFIED" },
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
    sources: [
      { kind: "QURAN", ref: "Al-Ahzab 33:40", translation: "…the Seal of the Prophets — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "The prophethood section sealing with Muhammad ﷺ.", status: "VERIFIED" },
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
    commonObjection: "\"Hanafis worship the Prophet ﷺ.\"",
    scholarlyResponse:
      "Hanafi scholarship affirms his full humanity while honouring his unmatched rank; worship (sujud, du'a-as-worship) is directed to Allah alone in the school's texts — the platform separates honouring (documented) from worship (not documented).",
    sources: [
      { kind: "QURAN", ref: "Al-Kahf 18:110", translation: "I am only a man like you, receiving revelation — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "The Prophet's ﷺ humanity and rank.", status: "VERIFIED" },
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
    sources: [
      { kind: "QURAN", ref: "Al-Imran 3:169", translation: "Do not think those slain in Allah's cause dead; they are alive, provided for — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "HADITH", ref: "Sunan Abi Dawud, Kitab al-Sunnah (Prophets alive in graves narration — Anas ibn Malik)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "The Prophets' life affirmed in the creed.", status: "VERIFIED" },
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
    sources: [
      { kind: "QURAN", ref: "Al-Ahzab 33:56", translation: "Allah and His angels send blessings on the Prophet; O you who believe, send blessings on him and salute him — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-Salah", translation: "Salawat within prayer and after.", status: "PARTIALLY_VERIFIED" },
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
    sources: [
      { kind: "BOOK", ref: "Fatawa Hindiyyah, Kitab al-Hajj (visitation of Madinah)", translation: "The visitation rulings compiled.", status: "PARTIALLY_VERIFIED" },
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
    sources: [
      { kind: "QURAN", ref: "Al-Qamar 54:1", translation: "The Hour drew near and the moon split — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab al-Manaqib (moon-splitting and other miracles)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
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
    sources: [
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab al-Libas (wudu-water and hair tabarruk narrations)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
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
    sources: [
      { kind: "QURAN", ref: "Al-Ma'idah 5:35", translation: "O you who believe, be mindful of Allah and seek the wasilah to Him — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Fatawa Hindiyyah, Kitab al-Da'awat", translation: "Tawassul forms compiled.", status: "PARTIALLY_VERIFIED" },
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
    sources: [
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab al-Istisqa (narration of Anas — 'Umar's tawassul through al-'Abbas for rain)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
      { kind: "BOOK", ref: "Fatawa Razvia (Ahmad Raza Khan) — tawassul after death", translation: "The permissive position documented.", status: "PARTIALLY_VERIFIED" },
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
    sources: [
      { kind: "BOOK", ref: "Fatawa Razvia (Ahmad Raza Khan) — istighatha discussions", translation: "Terminology and positions.", status: "PARTIALLY_VERIFIED" },
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
    sources: [
      { kind: "QURAN", ref: "Al-Ma'idah 5:35", translation: "Seek the wasilah — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "HADITH", ref: "Jami' al-Tirmidhi", number: "3578", translation: "The taught tawassul du'a — paraphrased translation", status: "PARTIALLY_VERIFIED", note: "number per common edition" },
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
    sources: [
      { kind: "QURAN", ref: "Yunus 10:62-63", translation: "The awliya of Allah have no fear; those who believe and are mindful — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "The creed's statements on the righteous.", status: "VERIFIED" },
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
    sources: [
      { kind: "BOOK", ref: "Sharh al-'Aqa'id al-Nasafiyyah (al-Taftazani)", translation: "Kashf's possible-but-limited framing.", status: "PARTIALLY_VERIFIED" },
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
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Janazah", translation: "Grave visitation as remembrance + du'a.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Fatawa Razvia (Ahmad Raza Khan) — visitation and worship distinctions", translation: "The school's documented boundaries.", status: "PARTIALLY_VERIFIED" },
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
    sources: [
      { kind: "HADITH", ref: "Sahih Muslim", number: "867", quote: "Every innovation is misguidance.", translation: "paraphrased translation", status: "PARTIALLY_VERIFIED", note: "number per common edition" },
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "Innovation warnings within the creed.", status: "VERIFIED" },
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
    sources: [
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab al-Tarawih", translation: "'Umar's organization praised as ni'mat al-bid'ah — paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
      { kind: "BOOK", ref: "Al-Qawa'id (Izz al-Din ibn 'Abd al-Salam)", translation: "Beneficial-innovation framework.", status: "PARTIALLY_VERIFIED" },
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
    sources: [
      { kind: "BOOK", ref: "Al-Ashbah wa'l-Naza'ir (Ibn Nujaym)", translation: "The custom-rule: custom is weighing in disputes.", status: "PARTIALLY_VERIFIED" },
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
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Salah", translation: "Post-prayer du'a discussions.", status: "PARTIALLY_VERIFIED" },
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
    sources: [
      { kind: "QURAN", ref: "Al-Ra'd 13:28", translation: "Hearts find rest in the remembrance of Allah — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Fatawa Razvia (Ahmad Raza Khan) — dhikr gatherings", translation: "The permissive position documented.", status: "PARTIALLY_VERIFIED" },
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
    sources: [
      { kind: "BOOK", ref: "Wafayat al-A'yan (Ibn Khallikan)", translation: "Documents the historical Irbil mawlid observances.", status: "PARTIALLY_VERIFIED" },
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
    sources: [
      { kind: "BOOK", ref: "Wafayat al-A'yan (Ibn Khallikan)", translation: "The Irbil mawlid documentation.", status: "PARTIALLY_VERIFIED" },
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
    sources: [
      { kind: "HADITH", ref: "Sahih Muslim, Kitab al-Siyam (narration of Abu Qatada — Monday fasting: 'on it I was born')", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
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
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Janazah", translation: "Recitation-gifting permissions.", status: "PARTIALLY_VERIFIED" },
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
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Janazah", translation: "Grave-structure discussions.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Dargah rulings", "Building shrines Islam"],
    related: ["graves-visiting-etiquette", "tawassul-worship-graves"],
  },
];
