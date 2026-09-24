import type { BankQuestion } from "./types";

/** Sawm, Zakah, Hajj/Umrah, Jumu'ah & Eid — the life-worship batch. */
export const fiqhLifeQuestions: BankQuestion[] = [
  // ─────────────────────────── SAWM ───────────────────────────
  {
    slug: "sawm-what-breaks",
    question: "What breaks the fast according to Hanafi fiqh?",
    questionUr: "حنفی فقہ کے مطابق روزہ کس چیز سے ٹوٹتا ہے؟",
    questionAr: "ما الذي يفطر الصائم وفقًا للفقه الحنفي؟",
    category: "sawm",
    subcategory: "What breaks the fast",
    type: "FIQH",
    difficulty: "INTERMEDIATE",
    cluster: "fasting-breaks",
    intent: "fiqh",
    shortAnswer:
      "Deliberate eating or drinking, deliberate vomiting (a mouthful), sexual intercourse, climaxing, and in the school the apostasy of a murtad — each voids the day; intentional eating entails kaffarah for intercourse specifically.",
    shortAnswerUr:
      "جان بوجھ کر کھانا یا پینا، جان بوجھ کر منہ بھر کر قے لانا، جماع، انزال، اور مذہب کے نزدیک مرتد کا ارتداد — یہ سب دن کو باطل کرتے ہیں؛ اور جان بوجھ کر کھانے پر خاص طور پر جماع والا کفارہ واجب ہوتا ہے۔",
    shortAnswerAr:
      "الأكل أو الشرب عن عمد، والقيء العمد (الشبع)، والجماع، والإنزال، ورِدَّة المرتد عند المذهب — كل ذلك يُبطل اليوم؛ والأكل العمد يستوجب كفارة الجماع تحديدًا.",
    detailedAnswer:
      "The school's structure: voiding-with-qada (eating, drinking, deliberate vomiting), voiding-with-qada+kaffarah (intercourse during the day), voiding-with-qada-only-for-causes (illness, travel started after intention), and voiding-by-religious-cause. The 'reach the throat' hadith is the base text — cited as 'Sahih al-Bukhari, Kitab al-Sawm' without number. Each category's compensation is in the manuals.",
    hanafiPosition: "Deliberate acts of intake void the fast; forgetful intake does not (the feeder hadith).",
    sources: [
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab al-Sawm (narration of Abu Huraira — 'whoever forgets while fasting, let him complete the fast… Allah fed him')", translation: "Forgetful eating does not break the fast — paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-Sawm", translation: "The voiding categories of the school.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["What invalidates fasting?", "Things that break my fast Ramadan"],
    related: ["sawm-what-not-break", "sawm-vomiting", "sawm-kaffarah-intercourse"],
  },
  {
    slug: "sawm-what-not-break",
    question: "What does NOT break the fast according to Hanafi fiqh?",
    questionUr: "حنفی فقہ کے مطابق کون سی چیزیں روزہ نہیں توڑتیں؟",
    questionAr: "ما الذي لا يفطر الصائم وفقًا للفقه الحنفي؟",
    category: "sawm",
    subcategory: "What breaks the fast",
    type: "PRACTICAL",
    difficulty: "BEGINNER",
    cluster: "fasting-breaks",
    intent: "fiqh",
    shortAnswer:
      "Forgetful eating/drinking, swallowing saliva, tasting without swallowing (with care), brushing without swallowing residue, applying oil/kohl, involuntary emission without climax, and in the school eye/ear drops and injections that are not nutritional.",
    shortAnswerUr:
      "غافلانہ کھانا یا پینا، تھوک نگلنا، بغیر نگلے ذائقہ لینا (احتیاط کے ساتھ)، بغیر باقیات نگلے برش کرنا، تیل یا سرمہ لگانا، بغیر اختتام کے غیر ارادی اخراج، اور مذہب کے نزدیک آنکھ/کان کے قطرے اور غیر غذائی انجیکشن — یہ سب روزہ کو باطل نہیں کرتے۔",
    shortAnswerAr:
      "الأكل/الشرب من الساهي، وابتلاع الريق، والتذوق دون ابتلاع (مع الحذر)، والتشطيب دون ابتلاع البقايا، ودهن الزيت/الكحل، والانزال غير الإرادي بلا اختتام، وقطرات العين/الأذن والحقن غير المغذية عند المذهب — كل ذلك لا يفطر.",
    detailedAnswer:
      "The school's frame is intake-by-the-usual-passage-and-nourishment: non-nutritional entries (drops, injections, inhalers per the school's reading) are discussed under 'what is neither food nor drink' — contemporary fatawa apply this frame; where scholars differ on modern items the platform marks the difference honestly.",
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Sawm", translation: "The non-voiding list and its logic.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Does eye drops break fast?", "Does injection break fast?", "Swallowing saliva fasting"],
    related: ["sawm-what-breaks", "sawm-toothpaste", "sawm-injections"],
  },
  {
    slug: "sawm-vomiting",
    question: "Does vomiting break the fast according to Hanafi fiqh?",
    questionUr: "کیا حنفی فقہ کے مطابق قے آنا روزہ توڑ دیتی ہے؟",
    questionAr: "هل يفطر القيء وفقًا للفقه الحنفي؟",
    category: "sawm",
    subcategory: "What breaks the fast",
    type: "BEGINNER",
    difficulty: "BEGINNER",
    cluster: "fasting-breaks",
    intent: "fiqh",
    shortAnswer:
      "Only deliberate vomiting (a mouthful) breaks it; involuntary vomiting does not — the 'deliberate vomiter must make up' hadith is the school's basis.",
    shortAnswerUr:
      "صرف جان بوجھ کر منہ بھر کر قے لانا روزہ توڑتا ہے؛ خودبخود آنے والی قے نہیں توڑتی — «جان بوجھ کر قے کرنے والے پر قضا واجب ہے» والی حدیث مذہب کی بنیاد ہے۔",
    shortAnswerAr:
      "لا يفطر إلا القيء العمد (الشبع)؛ أما القيء التلقائي فلا يفطر — حديث «من عمد إلى الاستقاء فعليه القضاء» هو أساس المذهب.",
    sources: [
      { kind: "HADITH", ref: "Sunan Abi Dawud, Kitab al-Sawm (narration of Abu Huraira — deliberate vomiter makes up)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
      { kind: "BOOK", ref: "Nur al-Idah (al-Shurunbulali), Kitab al-Sawm", translation: "Vomiting quantity rules.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["I threw up while fasting", "Does vomit break wudu and fast?"],
    related: ["sawm-what-breaks", "taharah-vomiting"],
  },
  {
    slug: "sawm-toothpaste",
    question: "Does using toothpaste break the fast according to Hanafi fiqh?",
    questionUr: "کیا حنفی فقہ کے مطابق ٹوتھ پیسٹ کا استعمال روزہ توڑ دیتا ہے؟",
    questionAr: "هل يفطر استعمال معجون الأسنان وفقًا للفقه الحنفي؟",
    category: "sawm",
    subcategory: "What breaks the fast",
    type: "PRACTICAL",
    difficulty: "BEGINNER",
    cluster: "fasting-breaks",
    intent: "fiqh",
    shortAnswer:
      "No — brushing with toothpaste does not break the fast provided nothing is swallowed; the school cautions against the residue reaching the throat in the later day out of caution.",
    shortAnswerUr:
      "نہیں — جب تک کچھ نہ نگلا جائے تو ٹوتھ پیسٹ سے برش کرنا روزہ نہیں توڑتا؛ مذہب دن کے آخری حصے میں احتیاطاً اس کی باقیات کے حلق تک پہنچنے سے باز رہنے کا کہتا ہے۔",
    shortAnswerAr:
      "لا — لا يفطر التشطيب بمعجون الأسنان ما لم يُبتلع منه شيء؛ ويحذر المذهب من بلوغ بقايا المعجون الحلق في آخر النهار احتياطًا.",
    practicalInfo: "Miswak is the classical preferred practice; brushing is fine with care to rinse thoroughly.",
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Sawm", translation: "Mouth-taste vs intake distinction.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Can I brush my teeth while fasting?", "Toothpaste swallowing fast"],
    related: ["sawm-what-not-break"],
  },
  {
    slug: "sawm-injections",
    question: "Do injections, eye drops, or ear drops break the fast?",
    questionUr: "کیا انجیکشن، آنکھوں یا کان کے قطرے روزہ توڑ دیتے ہیں؟",
    questionAr: "هل يفطر الحقن أو قطرات العين أو الأذن؟",
    category: "sawm",
    subcategory: "What breaks the fast",
    type: "PRACTICAL",
    difficulty: "INTERMEDIATE",
    cluster: "fasting-breaks",
    intent: "fiqh",
    isDisputed: true,
    disputedNote: "Modern medical items are a contemporary ijtihad space: the school's classical frame (nourishment via the usual passage) permits non-nutritional drops/injections, while some contemporary scholars treat nutritional IVs as breaking; insulin-type and other cases should be confirmed with a mufti.",
    shortAnswer:
      "In the school's classical frame, non-nutritional drops and injections do not break the fast; nutritional drips do. Contemporary scholars discuss specific medications case by case.",
    shortAnswerUr:
      "مذہب کے کلاسیکی اسلوب کے مطابق غیر غذائی قطرے اور انجیکشن روزہ نہیں توڑتے؛ غذائی ڈرپ روزہ توڑتی ہے۔ معاصر علماء مخصوص ادویات پر حسبِ صورت گفتگو کرتے ہیں۔",
    shortAnswerAr:
      "في الإطار الكلاسيكي للمذهب لا تفطر القطرات والحقن غير المغذية؛ أما المحاليل المغذية فتفطر. ويناقش المعاصرون الأدوية الخاصة حالةً حالة.",
    practicalInfo: "For medical necessity consult a qualified mufti with your doctor's input — illness exemptions also apply.",
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Sawm", translation: "The intake-passage framework applied to modern cases.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Fatawa Hindiyyah, Kitab al-Sawm", translation: "Compiled rulings on fast-voiding items.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["IV drip fasting", "Insulin injection fasting Hanafi", "Eye drops while fasting"],
    related: ["sawm-what-not-break", "sawm-traveller"],
  },
  {
    slug: "sawm-swallow-mucus",
    question: "Does swallowing mucus or saliva break the fast?",
    questionUr: "کیا بلغم یا تھوک نگلنے سے روزہ ٹوٹ جاتا ہے؟",
    questionAr: "هل يفطر ابتلاع البلغم أو الريق؟",
    category: "sawm",
    subcategory: "What breaks the fast",
    type: "BEGINNER",
    difficulty: "BEGINNER",
    cluster: "fasting-breaks",
    intent: "fiqh",
    shortAnswer:
      "No — swallowing one's own saliva does not break the fast; mucus that reaches the mouth and is swallowed is discussed: the school's books treat post-nasal mucus from the head as not breaking, phlegm from the chest brought to the mouth then swallowed as requiring qada by caution.",
    shortAnswerUr:
      "نہیں — اپنا تھوک نگلنا روزہ کو باطل نہیں کرتا؛ منہ تک پہنچ کر نگلا جانے والا بلغم زیرِ بحث ہے: مذہب کی کتب سر سے آنے والے بلغم کو غیر مفطر شمار کرتی ہیں، اور سینے کا بلغم جو منہ میں لا کر نگل لیا جائے اس پر احتیاطاً قضا کا قول مذکور ہے۔",
    shortAnswerAr:
      "لا — ابتلاع المرء ريقه لا يفطر؛ وأما البلغم الذي يبلغ الفم ثم يُبتلع ففيه الكلام: تعتبر كتب المذهب البلغمَ النازل من الرأس غير مفطر، والبلغمَ القادم من الصدر إن بَلَغ الفم ثم ابتُلع فالقول بوجوب القضاء احتياطًا.",
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Sawm", translation: "Saliva vs mucus distinction.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Spitting while fasting", "Post nasal drip fasting"],
    related: ["sawm-what-not-break"],
  },
  {
    slug: "sawm-traveller",
    question: "Do travellers have to fast according to Hanafi fiqh?",
    questionUr: "کیا حنفی فقہ کے مطابق مسافروں پر روزہ رکھنا لازم ہے؟",
    questionAr: "هل يجب على المسافر الصوم وفقًا للفقه الحنفي؟",
    category: "sawm",
    subcategory: "Exemptions",
    type: "PRACTICAL",
    difficulty: "INTERMEDIATE",
    cluster: "sawm-general",
    intent: "fiqh",
    shortAnswer:
      "A traveller on a journey recognized in the school (roughly 48 miles / ~3 days' walk with intent) may postpone; in the school postponement is permitted rather than preferred when fasting is not overburdensome.",
    shortAnswerUr:
      "مذہب میں معتبر سفر پر (تقریباً 48 میل / تقریباً تین دن کی پیدل رفتار کی نیت کے ساتھ) مسافر روزے کو مؤخر کر سکتا ہے؛ مذہب کے نزدیک جب روزہ گراں نہ ہو تو تعویق (سفر میں افطار) اجازت ہے، پسندیدہ نہیں۔",
    shortAnswerAr:
      "للمسافر في سفر معتبر عند المذهب (نحو 48 ميلاً / نحو ثلاثة أيام مشيًا بنية) أن يؤخر الصوم؛ وعند المذهب تعويقُ الصوم رخصةٌ لا استحبابٌ إذا لم يكن الصوم ثقيلًا.",
    detailedAnswer:
      "The school holds the concession is permission (not an obligation to break), leaning stricter than the Shafi'i reading which prefers breaking when fasting is hard. intention at night matters: one who intended fasting at night then travelled may break (per the school's books discussion of the Hamza narration).",
    sources: [
      { kind: "QURAN", ref: "Al-Baqarah 2:185", translation: "…that you should fast the prescribed days… Allah intends ease for you — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-Sawm", translation: "The traveller's concession in the school.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Can I break fast when travelling?", "Travel distance to break fast"],
    related: ["sawm-what-breaks", "sawm-pregnancy"],
  },
  {
    slug: "sawm-pregnancy",
    question: "Can pregnant or breastfeeding women postpone fasting according to Hanafi fiqh?",
    questionUr: "کیا حاملہ یا دودھ پلانے والی عورت حنفی فقہ کے مطابق روزے مؤخر کر سکتی ہے؟",
    questionAr: "هل يجوز للحامل أو المرضع تأخير الصوم وفقًا للفقه الحنفي؟",
    category: "sawm",
    subcategory: "Exemptions",
    type: "PRACTICAL",
    difficulty: "INTERMEDIATE",
    cluster: "sawm-general",
    intent: "fiqh",
    shortAnswer:
      "Yes when harm is feared — the school treats them like the ill: they postpone and later make up the days (qada); the school does not add fidyah in the dominant position, while some later scholars allowed fidyah for cases of continuous inability.",
    shortAnswerUr:
      "ہاں، جب نقصان کا خوف ہو — مذہب انہیں مریضوں کی طرح رکھتا ہے: وہ روزے چھوڑیں اور بعد میں دنوں کی قضا کریں؛ راجح قول کے مطابق مذہب فدیہ شامل نہیں کرتا، البتہ بعض متاخر علماء نے مسلسل ناتوانی کی صورتوں میں فدیہ کی اجازت دی ہے۔",
    shortAnswerAr:
      "نعم إذا خُيف الضرر — يعاملهم المذهب معاملة المرضى: يؤخرون ثم يقضون الأيام لاحقًا؛ ولا يلحق المذهب الفدية في الوجه الراجح، بينما أجاز بعض المتأخرين الفدية لحالات العجز المستمر.",
    practicalInfo: "Health decisions need a doctor + mufti: general education only.",
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Sawm", translation: "Pregnancy/breastfeeding postponement with qada.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Pregnant fasting Ramadan", "Breastfeeding skip fast make up"],
    related: ["sawm-traveller", "sawm-fidya"],
  },
  {
    slug: "sawm-missed-fasts",
    question: "How are missed Ramadan fasts made up according to Hanafi fiqh?",
    questionUr: "حنفی فقہ کے مطابق رمضان کے چھوٹے ہوئے روزے کیسے ادا کیے جاتے ہیں؟",
    questionAr: "كيف تُقضى أيام رمضان الفائتة وفقًا للفقه الحنفي؟",
    category: "sawm",
    subcategory: "Qada",
    type: "BEGINNER",
    difficulty: "BEGINNER",
    cluster: "kaffarah-fidya",
    intent: "fiqh",
    shortAnswer:
      "Missed days are made up one-for-one (qada) whenever able; in the school delaying them to the next Ramadan without excuse is sinful — and the school requires a woman to make up missed days without adding feeding (differing from some later practices).",
    shortAnswerUr:
      "چھوٹے ہوئے دن ایک کے بدلے ایک (قضا) کیے جاتے ہیں جب طاقت ہو؛ مذہب کے نزدیک بلا عذر انہیں اگلے رمضان تک مؤخر رکھنا گناہ ہے — اور مذہب عورت پر بغیر فدیہ کے اضافے کے صرف قضا کا حکم دیتا ہے (جو بعض متاخر طرزِ عمل سے مختلف ہے)۔",
    shortAnswerAr:
      "تُقضى الأيام الفائتة يومًا بيوم عند القدرة؛ وتأخيرها إلى رمضان التالي بلا عذر إثم عند المذهب — ويُلزم المذهب المرأة بقضاء الأيام الفائتة دون إضافة الإطعام (خلافًا لبعض الممارسات المتأخرة).",
    sources: [
      { kind: "QURAN", ref: "Al-Baqarah 2:184", translation: "…then days to be made up later — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Mukhtasar al-Quduri, Kitab al-Sawm", translation: "Qada rules.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["How to make up missed fasts", "Qada fasting rules"],
    related: ["sawm-pregnancy", "sawm-fidya", "sawm-kaffarah-intercourse"],
  },
  {
    slug: "sawm-kaffarah-intercourse",
    question: "What is the kaffarah for breaking the fast by intercourse?",
    questionUr: "جماع سے روزہ توڑنے کا کفارہ کیا ہے؟",
    questionAr: "ما كفارة فطر الصوم بالجماع؟",
    category: "sawm",
    subcategory: "Kaffarah & Fidya",
    type: "FIQH",
    difficulty: "INTERMEDIATE",
    cluster: "kaffarah-fidya",
    intent: "fiqh",
    shortAnswer:
      "In sequence: freeing a slave, else fasting two consecutive months, else feeding sixty poor people — the school's sequence follows the narration of Abu Huraira (in Bukhari/Muslim material).",
    shortAnswerUr:
      "ترتیب یہ ہے: غلام آزاد کرنا، ورنہ دو مسلسل مہینوں کے روزے، ورنہ ساٹھ مسکینوں کو کھانا کھلانا — مذہب کی یہ ترتیب ابو ہریرہ کی روایت پر ہے (بخاری/مسلم کے مواد میں)۔",
    shortAnswerAr:
      "على الترتيب: عتق رقبة، وإلا صيام شهرين متتابعين، وإلا إطعام ستين مسكينًا — ترتيب المذهب يتبع رواية أبي هريرة (في مواد البخاري/مسلم).",
    practicalInfo: "Payment specifics (amounts, recipients) for your situation: consult a local mufti.",
    sources: [
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab al-Kaffarat (narration of Abu Huraira — the man who had intercourse in Ramadan)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-Sawm", translation: "Kaffarah sequence.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Broke fast with wife Ramadan", "Kaffarah 60 poor persons"],
    related: ["sawm-missed-fasts", "sawm-fidya"],
  },
  {
    slug: "sawm-fidya",
    question: "What is fidya and who may pay it instead of fasting?",
    questionUr: "فدية کیا ہے اور کون روزے کی جگہ فدية دے سکتا ہے؟",
    questionAr: "ما هي الفدية ومن يجوز له الإطعام بدلًا من الصوم؟",
    category: "sawm",
    subcategory: "Kaffarah & Fidya",
    type: "BEGINNER",
    difficulty: "BEGINNER",
    cluster: "kaffarah-fidya",
    intent: "fiqh",
    shortAnswer:
      "Fidya is feeding a poor person per missed day — for those with permanent inability (chronic illness, old age) per the verse; in the school it is also discussed for those who die leaving missed fasts.",
    shortAnswerUr:
      "فدية ہر چھوٹے ہوئے روزے کے بدلے ایک مسکین کو کھانا کھلانا ہے — آیت کے مطابق دائمی ناتوانی والوں (مزمن بیماری، بڑھاپے) کے لیے؛ مذہب میں اس کا ذکر ان کے بارے میں بھی ہے جو قضا روزے چھوڑ کر مر جائیں۔",
    shortAnswerAr:
      "الفدية إطعام مسكين عن كل يوم فائت — لمن عنده عجز دائم (مرض مزمن، كِبَر السن) حسب الآية؛ وفي المذهب تُناقش أيضًا لمن مات تاركًا أيامًا فائتة.",
    practicalInfo: "Amounts and eligibility vary by case and year — consult a local mufti.",
    sources: [
      { kind: "QURAN", ref: "Al-Baqarah 2:184", translation: "…on those who can barely bear it, a compensation of feeding a needy person — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Sawm", translation: "Fidya eligibility in the school.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Who can pay fidya?", "Fidya for old people"],
    related: ["sawm-kaffarah-intercourse", "sawm-missed-fasts"],
  },
  {
    slug: "sawm-itikaf",
    question: "What is i'tikaf and what are its rules according to Hanafi fiqh?",
    questionUr: "اعتکاف کیا ہے اور حنفی فقہ کے مطابق اس کے احکام کیا ہیں؟",
    questionAr: "ما هي الاعتكاف وما أحكامه وفقًا للفقه الحنفي؟",
    category: "sawm",
    subcategory: "I'tikaf",
    type: "PRACTICAL",
    difficulty: "INTERMEDIATE",
    cluster: "sawm-general",
    intent: "fiqh",
    shortAnswer:
      "I'tikaf is seclusion in the mosque for worship; the sunnah mu'akkadah upon the community is the last ten nights of Ramadan — with rules on eating, sleeping, leaving the mosque (only for need), and invalidators like relations.",
    shortAnswerUr:
      "اعتکاف عبادت کے لیے مسجد میں بیٹھنا ہے؛ رمضان کی آخری دس راتیں جماعت پر بالکفایہ سنتِ مؤکدہ ہیں — اس کے احکام میں کھانا، سونا، مسجد سے نکلنا (صرف حاجت کے لیے) اور جماع جیسے باطل کرنے والے امور شامل ہیں۔",
    shortAnswerAr:
      "الاعتكاف الحِبس في المسجد للعبادة؛ والسنة المؤكدة على الجماعة بالكفاية هي العشر الأواخر من رمضان — مع أحكام الأكل والنوم والخروج من المسجد (للحاجة فقط) والمبطلات كالجماع.",
    sources: [
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-I'tikaf", translation: "I'tikaf rules of the school.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Rules of itikaf", "Can I leave mosque in itikaf?"],
    related: ["sawm-moon-sighting"],
  },
  {
    slug: "sawm-moon-sighting",
    question: "Why do Muslims start Ramadan on different days (moon sighting differences)?",
    questionUr: "مسلمان رمضان مختلف دنوں میں کیوں شروع کرتے ہیں (رؤیتِ ہلال میں اختلاف)؟",
    questionAr: "لماذا يبدأ المسلمون رمضان في أيام مختلفة (اختلاف رؤية الهلال)؟",
    category: "sawm",
    subcategory: "Moon sighting",
    type: "HISTORICAL",
    difficulty: "INTERMEDIATE",
    cluster: "moon-sighting",
    intent: "fiqh",
    isDisputed: true,
    disputedNote: "The difference is methodological: local sighting vs global/computed calendars — a documented jurisprudential disagreement, not a matter of creed.",
    shortAnswer:
      "The Prophet ﷺ commanded fasting by sighting the crescent; communities differ on whether each locality sights for itself, or one regional/global sighting suffices, and on the role of astronomical calculation — producing the well-known day differences.",
    shortAnswerUr:
      "نبی کریم ﷺ نے ہلال کی رؤیت سے روزہ رکھنے کا حکم دیا؛ برادریوں میں اختلاف ہے کہ آیا ہر علاقہ اپنی رؤیت کرے یا ایک علاقائی/عالمی رؤیت کافی ہو، اور فلکیاتی حساب کے کردار پر بھی — جس سے دنوں کا معروف اختلاف پیدا ہوتا ہے۔",
    shortAnswerAr:
      "أمر النبي ﷺ بالصوم برؤية الهلال؛ وتختلف المجتمعات فيما إذا كانت كل بلدة ترى لنفسها أم تكفي رؤية إقليمية/عالمية واحدة، وفي دور الحساب الفلكي — فينتج ذلك الاختلاف المعروف في الأيام.",
    detailedAnswer:
      "The sighting narrations (Ibn 'Umar's and Abu Huraira's in the collections) establish the sighting principle. Classical jurists debated ikhtilaf al-matali' (different horizons): Hanafi works record the position that horizons differ, making local sighting primary; others accepted a single sighting for all. Modern astronomical calculation is a further contemporary debate. Each community follows its scholarly bodies in good faith; the platform treats the difference as documented fiqh diversity.",
    sources: [
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab al-Sawm (narration of Ibn 'Umar — fast by sighting, end by sighting)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Sawm", translation: "Different horizons discussion.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Why is Eid on different days?", "Moon sighting vs calculation", "Global moon sighting"],
    related: ["sawm-itikaf", "eid-takbir-timing"],
  },

  // ─────────────────────────── ZAKAH ───────────────────────────
  {
    slug: "zakah-nisab",
    question: "What is the nisab of zakah according to Hanafi fiqh?",
    questionUr: "حنفی فقہ کے مطابق زکوٰۃ کا نصاب کیا ہے؟",
    questionAr: "ما هو نصاب الزكاة وفقًا للفقه الحنفي؟",
    category: "zakah",
    subcategory: "Nisab",
    type: "BEGINNER",
    difficulty: "BEGINNER",
    cluster: "zakah-nisab",
    intent: "fiqh",
    shortAnswer:
      "For gold and silver currencies: 20 dinars (7.5 tola / ~87.48g gold) or 200 dirhams (52.5 tola / ~612.36g silver); for cash/assets the silver nisab is commonly used as the lower and safer threshold.",
    shortAnswerUr:
      "سونے اور چاندی کی کرنسیوں کے لیے: 20 دینار (7.5 تولہ / تقریباً 87.48 گرام سونا) یا 200 درہم (52.5 تولہ / تقریباً 612.36 گرام چاندی)؛ نقد اور اثاثوں کے لیے عموماً چاندی کا نصاب کم تر اور زیادہ محتاط حد کے طور پر استعمال کیا جاتا ہے۔",
    shortAnswerAr:
      "للنقود الذهبية والفضية: 20 دينارًا (7.5 تولا / نحو 87.48 غ ذهبًا) أو 200 درهم (52.5 تولا / نحو 612.36 غ فضة)؛ وللنقد/الأصول يُستعمل نصاب الفضة عادةً بوصفه الحد الأدنى والأكثر أمانًا.",
    practicalInfo: "Nisab values change with market prices — calculators and local muftis give current figures.",
    sources: [
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab al-Zakat (narration of Abu Huraira — 200 dirhams nisab)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-Zakat", translation: "Nisab definitions.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Zakah nisab gold silver", "How much gold before zakah?"],
    related: ["zakah-jewelry", "zakah-cash"],
  },
  {
    slug: "zakah-cash",
    question: "Do I pay zakah on cash and bank balances according to Hanafi fiqh?",
    questionUr: "کیا حنفی فقہ کے مطابق نقد اور بینک بیلنس پر زکوٰۃ دینی ہے؟",
    questionAr: "هل تجب الزكاة في النقد وأرصدة البنوك وفقًا للفقه الحنفي؟",
    category: "zakah",
    subcategory: "What is zakatable",
    type: "BEGINNER",
    difficulty: "BEGINNER",
    cluster: "zakah-nisab",
    intent: "fiqh",
    shortAnswer:
      "Yes — cash and bank balances are treated as silver-equivalent wealth: if held for a lunar year above the nisab (minus due debts), 2.5% is due.",
    shortAnswerUr:
      "ہاں — نقد اور بینک بیلنس چاندی کے مساوی مال شمار ہوتے ہیں: اگر سالِ قمری بھر وہ نصاب سے زائد رہیں (واجب الادا قرضوں کو کاٹ کر) تو 2.5% زکوٰۃ واجب ہے۔",
    shortAnswerAr:
      "نعم — يُعامل النقد وأرصدة البنك معاملة المال المراد للفضة: إذا حلّ عليه الحول وهو فوق النصاب (بعد خصم الديون الواجبة) وجبت 2.5%.",
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Zakat", translation: "Currency wealth under the silver/gold rules.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Zakah on savings account", "2.5 percent zakah calculation"],
    related: ["zakah-nisab", "zakah-inventory", "zakah-shares"],
  },
  {
    slug: "zakah-inventory",
    question: "Is zakah due on business inventory according to Hanafi fiqh?",
    questionUr: "کیا حنفی فقہ کے مطابق تجارتی مال پر زکوٰۃ واجب ہے؟",
    questionAr: "هل تجب الزكاة في عروض التجارة وفقًا للفقه الحنفي؟",
    category: "zakah",
    subcategory: "What is zakatable",
    type: "FIQH",
    difficulty: "INTERMEDIATE",
    cluster: "zakah-property",
    intent: "fiqh",
    shortAnswer:
      "Yes — trade goods (urud al-tijarah) are zakatable at 2.5% of their current market value when held for trade a year above nisab; the school treats inventory value (not profit only) as the base.",
    shortAnswerUr:
      "ہاں — تجارتی مال (عروض التجارة) پر ان کی موجودہ مارکیٹ ویلیو کا 2.5% زکوٰۃ ہوتا ہے، جب وہ ایک سال نصاب سے زائد تجارت کے لیے رکھے جائیں؛ مذہب مال کی پوری قیمت کو (صرف منافع کو نہیں) بنیاد بناتا ہے۔",
    shortAnswerAr:
      "نعم — تُزكّى عروض التجارة بنسبة 2.5% من قيمتها السوقية الحالية إذا حُملت للتجارة حولًا فوق النصاب؛ ويعتمد المذهب قيمة العروض كلها (لا الربح وحده) أساسًا.",
    sources: [
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-Zakat", translation: "Trade goods zakah.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Zakah on shop stock", "Business inventory zakat"],
    related: ["zakah-cash", "zakah-shares"],
  },
  {
    slug: "zakah-jewelry",
    question: "Is zakah due on women's gold jewellery according to Hanafi fiqh?",
    questionUr: "کیا حنفی فقہ کے مطابق عورتوں کے سونے کے زیورات پر زکوٰۃ واجب ہے؟",
    questionAr: "هل تجب الزكاة في حلي النساء الذهبية وفقًا للفقه الحنفي؟",
    category: "zakah",
    subcategory: "What is zakatable",
    type: "FIQH",
    difficulty: "INTERMEDIATE",
    cluster: "zakah-property",
    intent: "fiqh",
    isDisputed: true,
    disputedNote: "Hanafi fiqh zakah-ties jewellery in use; Maliki fiqh exempts customary personal jewellery; Hanbali fiqh holds no zakah on in-use jewellery up to customary limits.",
    shortAnswer:
      "Yes — the school zakah-ties gold and silver jewellery even when worn, once above nisab and held a year; this is a documented difference from some other schools.",
    shortAnswerUr:
      "ہاں — مذہب پہنے ہوئے زیورات پر بھی زکوٰۃ واجب کرتا ہے، جب وہ نصاب سے زائد ہوں اور سال بھر رہیں؛ یہ بعض دیگر مذہبوں سے ایک مکتوب اختلاف ہے۔",
    shortAnswerAr:
      "نعم — يوجب المذهب الزكاة في حلي الذهب والفضة ولو كان مستعملًا، متى زاد على النصاب وحلّ عليه الحول؛ وهذا اختلاف مثبت عن بعض المذاهب الأخرى.",
    sources: [
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-Zakat", translation: "Jewellery zakah in the school.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Fatawa Hindiyyah, Kitab al-Zakat", translation: "Compiled jewellery rulings.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Zakah on wedding gold", "Does my wife pay zakah on her jewellery?"],
    related: ["zakah-nisab", "zakah-cash"],
  },
  {
    slug: "zakah-shares",
    question: "How is zakah calculated on shares/stocks according to Hanafi fiqh?",
    questionUr: "حنفی فقہ کے مطابق حصص (شیئرز) پر زکوٰۃ کس طرح حساب ہوتی ہے؟",
    questionAr: "كيف تُحسب الزكاة في الأسهم وفقًا للفقه الحنفي؟",
    category: "zakah",
    subcategory: "Modern applications",
    type: "PRACTICAL",
    difficulty: "ADVANCED",
    cluster: "zakah-property",
    intent: "fiqh",
    shortAnswer:
      "Contemporary scholars differ: if held for resale, treat as trade inventory (2.5% of market value); if held for dividends, some treat the dividend + liquid assets as zakatable — the framing follows one's intention and portfolio nature.",
    shortAnswerUr:
      "معاصر علماء میں اختلاف ہے: اگر دوبارہ فروخت کے لیے رکھی جائیں تو تجارتی مال کی طرح (مارکیٹ ویلیو کا 2.5%)؛ اگر منافع کے لیے رکھی جائیں تو بعض منافع + نقد اثاثوں کو زکوٰۃ پذیر شمار کرتے ہیں — تعین نیت اور سرمائے کی نوعیت کے تابع ہے۔",
    shortAnswerAr:
      "يختلف المعاصرون: إن حُملت لإعادة البيع عوملت معاملة عروض التجارة (2.5% من القيمة السوقية)؛ وإن حُملت للأرباح اعتبر بعضهم الربح + الأصول السائلة زكاةً — والتكييف يتبع النية وطبيعة المحفظة.",
    practicalInfo: "Portfolio-specific calculation: consult a qualified mufti or a reputable zakah calculator aligned with the school.",
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Zakat", translation: "Trade-goods framework applied by analogy in contemporary fatawa.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Zakah on stocks shares", "Investment zakat Hanafi"],
    related: ["zakah-inventory", "zakah-cash"],
  },
  {
    slug: "zakah-debts",
    question: "Are loans and debts considered in zakah calculation according to Hanafi fiqh?",
    questionUr: "کیا حنفی فقہ کے مطابق قرض اور واجبات زکوٰۃ کے حساب میں شمار ہوتے ہیں؟",
    questionAr: "هل تُعتبر القروض والديون في حساب الزكاة وفقًا للفقه الحنفي؟",
    category: "zakah",
    subcategory: "What is zakatable",
    type: "FIQH",
    difficulty: "ADVANCED",
    cluster: "zakah-property",
    intent: "fiqh",
    shortAnswer:
      "In the school: a STRONG debt owed to you (cash lent) is zakatable when repaid retroactively (or by the preferred view yearly); a WEAK debt (sale on credit) is not due until received; your own due debts are deducted from your wealth.",
    shortAnswerUr:
      "مذہب میں: تمہارے حق میں قوی قرض (نقد قرض دیا گیا) وصولی پر ماضی کے حساب سے زکوٰۃ پذیر ہے (یا راجح قول کے مطابق سال بہ سال)؛ ضعیف قرض (ادھار فروخت) وصول ہونے تک پر زکوٰۃ نہیں؛ اور اپنے ذمے کے واجب الادا قرض آپ کے مال سے کاٹے جاتے ہیں۔",
    shortAnswerAr:
      "في المذهب: القرض القوي لك (نقد أُعير) تُزكّى عند رده بأثر رجعي (أو سنويًا عند الوجه الراجح)؛ والدين الضعيف (بيع بالنسيئة) لا تجب زكاته حتى يُستوفى؛ وتُخصم ديونك الواجبة من مالك.",
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Zakat", translation: "Strong/weak debt framework.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Zakah on money lent to friends", "Do I deduct my loans from zakah?"],
    related: ["zakah-cash", "fin-loans-writing"],
  },
  {
    slug: "zakah-recipients",
    question: "Who are the eight categories of zakah recipients?",
    questionUr: "زکوٰۃ کے مستحقین کی آٹھ اقسام کون سی ہیں؟",
    questionAr: "من هم الأصناف الثمانية لمستحقي الزكاة؟",
    category: "zakah",
    subcategory: "Recipients",
    type: "BEGINNER",
    difficulty: "BEGINNER",
    cluster: "zakah-recipients",
    intent: "informational",
    shortAnswer:
      "The verse lists eight: the poor, the needy, zakah administrators, those whose hearts are to be reconciled, freeing captives, debtors, in the cause of Allah, and the wayfarer (Al-Tawbah 9:60).",
    shortAnswerUr:
      "آیت میں آٹھ کا ذکر ہے: فقراء، مساکین، زکوٰۃ کے عاملین، مؤلفۃ القلوب، غلاموں کی آزادی، قرض دار، فی سبیل اللہ، اور ابن السبیل (التوبة 9:60)۔",
    shortAnswerAr:
      "تُعدّ الآية ثمانية: الفقراء، والمساكين، والعاملون عليها، والمؤلفة قلوبهم، وفي الرقاب، والغارمين، وفي سبيل الله، وابن السبيل (التوبة 9:60).",
    sources: [
      { kind: "QURAN", ref: "Al-Tawbah 9:60", translation: "The eight categories — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-Zakat", translation: "Recipient definitions.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["8 categories of zakat recipients", "Who can receive zakat?"],
    related: ["zakah-relatives", "zakah-students-institutions"],
  },
  {
    slug: "zakah-relatives",
    question: "Can zakah be given to relatives according to Hanafi fiqh?",
    questionUr: "کیا حنفی فقہ کے مطابق زکوٰۃ رشتہ داروں کو دی جا سکتی ہے؟",
    questionAr: "هل يجوز إعطاء الزكاة للأقارب وفقًا للفقه الحنفي؟",
    category: "zakah",
    subcategory: "Recipients",
    type: "FIQH",
    difficulty: "INTERMEDIATE",
    cluster: "zakah-recipients",
    intent: "fiqh",
    shortAnswer:
      "Yes to poor relatives (with double reward for the kinship) — but NOT to one's parents, grandparents, children/grandchildren, or spouse, whose support is already the giver's obligation.",
    shortAnswerUr:
      "غریب رشتہ داروں کو ہاں (قرابت کی وجہ سے دوہرا اجر) — لیکن اپنے والدین، دادا دادی/نانی نانا، اولاد/نواسے، یا شریک حیات کو ہرگز نہیں، کیونکہ ان کا خرچ پہلے ہی دینے والے کے ذمے ہے۔",
    shortAnswerAr:
      "نعم للأقارب الفقراء (بأجر مضاعف لسبب القرابة) — لكن ليس للوالدين ولا للأجداد ولا للأبناء/الأحفاد ولا للزوج/الزوجة، لأن نفقتهم واجبة على المُعطي أصلًا.",
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Zakat", translation: "Kinship recipients and exclusions.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Zakah to brother sister", "Zakah to parents?"],
    related: ["zakah-recipients"],
  },
  {
    slug: "zakah-students-institutions",
    question: "Can zakah be given to students or Islamic institutions according to Hanafi fiqh?",
    questionUr: "کیا حنفی فقہ کے مطابق طلبہ یا اسلامی اداروں کو زکوٰۃ دی جا سکتی ہے؟",
    questionAr: "هل يجوز إعطاء الزكاة للطلاب أو المؤسسات الإسلامية وفقًا للفقه الحنفي؟",
    category: "zakah",
    subcategory: "Recipients",
    type: "FIQH",
    difficulty: "INTERMEDIATE",
    cluster: "zakah-recipients",
    intent: "fiqh",
    shortAnswer:
      "Zakah reaches eligible individual recipients (poor students qualify); institutions may act as agents distributing to the eligible — contemporary fatawa discuss trusteeship (wikalah) conditions carefully.",
    shortAnswerUr:
      "زکوٰۃ مستحق افراد تک پہنچتی ہے (غریب طلبہ مستحق ہیں)؛ ادارے مستحقین تک پہنچانے میں وکیل (نائب) کا کام کر سکتے ہیں — معاصر فتاویٰ وکالت کی شرائط پر باریکی سے گفتگو کرتے ہیں۔",
    shortAnswerAr:
      "تصرف الزكاة إلى المستحقين من الأفراد (والطلاب الفقراء مستحقون)؛ ويمكن للمؤسسات أن تتولى الوكالة في توزيعها على المستحقين — وتناقش فتاوى المعاصرين شروط الوكالة بدقة.",
    practicalInfo: "Institution-specific eligibility: ask the organization for their zakah policy and scholar endorsement.",
    sources: [
      { kind: "BOOK", ref: "Fatawa Hindiyyah, Kitab al-Zakat", translation: "Agency (wikalah) in distribution.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Zakah to madrasa", "Zakah to charity organization"],
    related: ["zakah-recipients", "zakah-relatives"],
  },
  {
    slug: "zakah-agriculture",
    question: "Is zakah due on agricultural produce according to Hanafi fiqh?",
    questionUr: "کیا حنفی فقہ کے مطابق زرعی پیداوار پر زکوٰۃ واجب ہے؟",
    questionAr: "هل تجب الزكاة في الزروع وفقًا للفقه الحنفي؟",
    category: "zakah",
    subcategory: "What is zakatable",
    type: "FIQH",
    difficulty: "ADVANCED",
    cluster: "zakah-property",
    intent: "fiqh",
    shortAnswer:
      "Yes but as 'ushr (10% rain-fed / 5% irrigated) at harvest time — a separate category from monetary zakah with no nisab threshold for staple grains in the school's books (threshing-exempt vegetables differ by school).",
    shortAnswerUr:
      "ہاں مگر عشرے کے طور پر (بارش سے سیراب 10% / پانی سے سیراب 5%) کٹائی کے وقت — یہ نقد زکوٰۃ سے الگ باب ہے اور مذہب کی کتب میں بنیادی غلوں کے لیے کوئی نصاب نہیں (جن سبزیوں کا دقّ معتاد نہیں ان میں مذہبوں کا اختلاف ہے)۔",
    shortAnswerAr:
      "نعم لكن كعُشر (10% للمقطّر / 5% للمسقي) وقت الحصاد — وهو باب مستقل عن زكاة الأموال، ولا نصاب فيه للحبوب الأساسية في كتب المذهب (وفي الخضروات المستثناة من الدّقّ اختلاف بين المذاهب).",
    sources: [
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-Zakat — 'Ushr", translation: "Agricultural dues.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Ushr on crops", "Zakah on farm produce"],
    related: ["zakah-nisab"],
  },

  // ─────────────────────────── HAJJ & UMRAH ───────────────────────────
  {
    slug: "hajj-ihram-rules",
    question: "What are the rules of ihram according to Hanafi fiqh?",
    questionUr: "حنفی فقہ کے مطابق احرام کے احکام کیا ہیں؟",
    questionAr: "ما هي أحكام الإحرام وفقًا للفقه الحنفي؟",
    category: "hajj-umrah",
    subcategory: "Ihram",
    type: "FIQH",
    difficulty: "INTERMEDIATE",
    cluster: "ihram",
    intent: "fiqh",
    shortAnswer:
      "Ihram is the state entered by intention at the miqat (for men: two unstitched cloths; for women: ordinary modest dress) — with prohibitions on perfume, stitching (men), head-covering (men), cutting hair/nails, hunting, and marriage contracts; violations may require dam.",
    shortAnswerUr:
      "احرام میقات پر نیت سے داخل ہونے والی حالت ہے (مردوں کے لیے دو غیر سلے کپڑے؛ عورتوں کے لیے عام شرعی لباس) — اس میں خوشبو، سلائی (مرد)، سر ڈھانپنا (مرد)، بال/ناخن کاٹنا، شکار اور نکاح کا عقد ممنوع ہے؛ خلاف ورزی پر دم کی ضرورت پڑ سکتی ہے۔",
    shortAnswerAr:
      "الإحرام حالة يدخلها المرء بالنية عند الميقات (للرجال: ثوبان معرقلان؛ وللنساء: اللباس المتعارف المستتر) — ويُنهى فيه عن الطيب، والخياطة (للرجال)، وتغطية الرأس (للرجال)، وتقليم الشعر/الأظفار، والصيد، وعقد النكاح؛ وقد تستلزم المخالفةُ دمًا.",
    sources: [
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-Hajj", translation: "Ihram prohibitions and compensations.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["What can't you do in ihram?", "Ihram prohibitions list"],
    related: ["hajj-miqat", "hajj-dam-mistakes"],
  },
  {
    slug: "hajj-miqat",
    question: "What are the miqat boundaries for ihram according to Hanafi fiqh?",
    questionUr: "حنفی فقہ کے مطابق احرام کے میقات کون سے ہیں؟",
    questionAr: "ما هي مواقيت الإحرام وفقًا للفقه الحنفي؟",
    category: "hajj-umrah",
    subcategory: "Ihram",
    type: "FIQH",
    difficulty: "INTERMEDIATE",
    cluster: "ihram",
    intent: "informational",
    shortAnswer:
      "Five fixed stations (Qarn al-Manazil, Yalamlam, Dhu al-Hulayfah, al-Juhfah, Dhat 'Irq) plus the 'hill' boundary (Yalamlam/Sayl etc.) for Makkans and those inside — crossing a miqat without ihram entails dam by the school's books.",
    shortAnswerUr:
      "پانچ معین مقامات (قرن المنازل، یلملم، ذوالحلیفہ، الجحفہ، ذات عرق) اور اہل مکہ و اندر والوں کے لیے حدِ «حِلّ» (یلملم/سیل وغیرہ) — مذہب کی کتب کے مطابق بغیر احرام کے میقات عبور کرنا دم کا مستوجب ہے۔",
    shortAnswerAr:
      "خمسة مواقيت معلومة (قرن المنازل، ويلملم، وذي الحليفة، والجحفة، وذات عرق) مع حد «الحِلّ» (يلملم/السيل إلخ) لأهل مكة ومن هم في الداخل — ومن أتى الميقات بغير إحرام لزمه دم عند كتب المذهب.",
    sources: [
      { kind: "BOOK", ref: "Mukhtasar al-Quduri, Kitab al-Hajj", translation: "The miqat stations.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Miqat locations list", "Entering Makkah without ihram"],
    related: ["hajj-ihram-rules", "hajj-dam-mistakes"],
  },
  {
    slug: "hajj-women-mahram",
    question: "Can a woman perform Hajj without a mahram according to Hanafi fiqh?",
    questionUr: "کیا حنفی فقہ کے مطابق عورت بغیر محرم کے حج کر سکتی ہے؟",
    questionAr: "هل تحج المرأة بغير محرم وفقًا للفقه الحنفي؟",
    category: "hajj-umrah",
    subcategory: "Women",
    type: "FIQH",
    difficulty: "INTERMEDIATE",
    cluster: "hajj-general",
    intent: "fiqh",
    isDisputed: true,
    disputedNote: "Classical Hanafi texts require a mahram or husband for the journey; contemporary scholars discuss organized safe group travel where no mahram exists — travellers should follow their scholars and local conditions.",
    shortAnswer:
      "The school's classical position requires a mahram (husband or unmarriageable male relative) for the long journey; where none exists, Hajj is not obligatory on her until one is available, with contemporary discussion on organized safe groups.",
    shortAnswerUr:
      "مذہب کا کلاسیکی قول لمبے سفر کے لیے محرم (شوہر یا محرم رشتہ دار مرد) کے ہونے کو شرط رکھتا ہے؛ جہاں کوئی نہ ہو، اس پر حج اس وقت تک واجب نہیں جب تک کوئی میسر نہ ہو — اور منظم محفوظ کاروانوں پر معاصر گفتگو جاری ہے۔",
    shortAnswerAr:
      "يقتضي القول المتقدم في المذهب وجود محرم (زوج أو ذي رحم محرم) للسفر البعيد؛ وإذا لم يوجد لم يكن الحج واجبًا عليها حتى يتوفر، مع نقاش معاصر في القوافل المنظمة الآمنة.",
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Hajj", translation: "Women's travel conditions.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Woman Hajj without mahram", "Can my mother go Hajj alone?"],
    related: ["hajj-ihram-rules"],
  },
  {
    slug: "hajj-tawaf-sai",
    question: "What are the requirements of tawaf and sa'i according to Hanafi fiqh?",
    questionUr: "حنفی فقہ کے مطابق طواف اور سعی کے مقتضیات کیا ہیں؟",
    questionAr: "ما هي متطلبات الطواف والسعي وفقًا للفقه الحنفي؟",
    category: "hajj-umrah",
    subcategory: "Tawaf & Sa'i",
    type: "FIQH",
    difficulty: "INTERMEDIATE",
    cluster: "tawaf-sai",
    intent: "fiqh",
    shortAnswer:
      "Tawaf: seven circuits with wudu, covering the shoulders (men), starting/ending at the Black Stone with the Hajr covered; sa'i: seven runs between Safa and Marwah after tawaf — with wudu required for tawaf in the school.",
    shortAnswerUr:
      "طواف: وضو کے ساتھ سات چکر، کندھوں کا احاطہ (مردوں کے لیے)، حجرِ اسود سے آغاز و اختتام اور حجر (اسماعیل) کو دائرے میں شامل رکھنا؛ سعی: طواف کے بعد صفا اور مروہ کے درمیان سات شوط — مذہب میں طواف کے لیے وضو شرط ہے۔",
    shortAnswerAr:
      "الطواف: سبعة أشواط مع وضوء، وتغطية الكتفين (للرجال)، والبدء والانتهاء عند الحجر الأسود مع إدخال الحِجر في الدائرة؛ والسعي: سبعة أشواط بين الصفا والمروة بعد الطواف — والوضوء شرط للطواف في المذهب.",
    sources: [
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-Hajj", translation: "Tawaf/sa'i conditions.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Do I need wudu for tawaf?", "How many circuits in tawaf?"],
    related: ["hajj-ihram-rules", "hajj-wuquf-arafah"],
  },
  {
    slug: "hajj-wuquf-arafah",
    question: "Why is the standing at Arafah called the pillar of Hajj?",
    questionUr: "عرفات کے وقوف کو حج کا رکن کیوں کہا جاتا ہے؟",
    questionAr: "لماذا سُمّي وقوف عرفة ركنًا للحج؟",
    category: "hajj-umrah",
    subcategory: "Rites",
    type: "FIQH",
    difficulty: "INTERMEDIATE",
    cluster: "hajj-wuquf",
    intent: "informational",
    shortAnswer:
      "Because the Prophet ﷺ said 'Hajj is Arafah' — missing the Arafah standing voids the pilgrimage (with compensation by tawaf per the school's discussion); it is the hajj-defining rite.",
    shortAnswerUr:
      "اس لیے کہ نبی کریم ﷺ نے فرمایا «حج عرفہ ہے» — عرفہ کے وقوف کے رہ جانے سے حج باطل ہو جاتا ہے (مذہب کی گفتگو کے مطابق طواف کے ذریعے تلافی ہے)؛ یہی وہ رسم ہے جس سے حج کا تعین ہوتا ہے۔",
    shortAnswerAr:
      "لأن النبي ﷺ قال «الحج عرفة» — ففوات وقوف عرفة يُبطل الحج (مع تلافٍ بالطواف عند كلام المذهب)؛ فهو المنسك الذي يُعقد به الحج.",
    sources: [
      { kind: "HADITH", ref: "Sunan al-Tirmidhi, Kitab al-Hajj (narration of 'Abd al-Rahman ibn 'Amr al-Laythi — 'Hajj is Arafah')", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
      { kind: "BOOK", ref: "Mukhtasar al-Quduri, Kitab al-Hajj", translation: "Wuquf's central status.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["What happens at Arafah?", "Missed Arafah what to do?"],
    related: ["hajj-tawaf-sai", "hajj-ramy-mina"],
  },
  {
    slug: "hajj-ramy-mina",
    question: "How is the stoning (rami) performed according to the Hanafi method?",
    questionUr: "حنفی طریقے کے مطابق رمی (پتھر مارنا) کیسے کیا جاتا ہے؟",
    questionAr: "كيف يُؤدى الرمي على الطريقة الحنفية؟",
    category: "hajj-umrah",
    subcategory: "Rites",
    type: "PRACTICAL",
    difficulty: "BEGINNER",
    cluster: "hajj-general",
    intent: "fiqh",
    shortAnswer:
      "Seven pebbles per pillar on the three Mina days (with the 'Aqabah on 'Id day), thrown one-by-one saying takbir — the school permits throwing from a distance and distinguishes the day order with ease provisions for the elderly.",
    shortAnswerUr:
      "منی کے تین دنوں میں ہر ستون پر سات کنکریاں (عید کے دن عقبہ کی)، ایک ایک کر کے تکبیر کہتے ہوئے پھینکی جاتی ہیں — مذہب دور سے پھینکنا جائز سمجھتا ہے اور دنوں کی ترتیب میں امتیاز رکھتا ہے، بڑھاپے والوں کے لیے آسانی کی سہولتوں کے ساتھ۔",
    shortAnswerAr:
      "سبع حصيات لكل عمود في أيام منى الثلاثة (والعقبة يوم العيد)، تُرمى حصاةً حصاةً مع التكبير — ويرخص المذهب الرمي من بعيد ويميز ترتيب الأيام مع تسهيلات لكبار السن.",
    sources: [
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-Hajj", translation: "Rami method.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["How many pebbles in stoning?", "Can I throw stones at night?"],
    related: ["hajj-wuquf-arafah", "hajj-dam-mistakes"],
  },
  {
    slug: "hajj-dam-mistakes",
    question: "What is dam (compensation) in Hajj and when is it required according to Hanafi fiqh?",
    questionUr: "حنفی فقہ کے مطابق حج میں دم کیا ہے اور کب لازم آتا ہے؟",
    questionAr: "ما هو الدم في الحج ومتى يلزم وفقًا للفقه الحنفي؟",
    category: "hajj-umrah",
    subcategory: "Compensation",
    type: "FIQH",
    difficulty: "INTERMEDIATE",
    cluster: "hajj-dam",
    intent: "fiqh",
    shortAnswer:
      "Dam is a sacrificial animal offered when ihram prohibitions are violated (perfume, covering the head (men), cutting hair/nails), a wajib of Hajj/Umrah is missed or delayed, or the miqat is crossed — scaled to the violation.",
    shortAnswerUr:
      "دم وہ قربانی ہے جو احرام کی ممانعتوں کی خلاف ورزی پر (خوشبو، سر ڈھانپنا (مرد)، بال/ناخن کاٹنا)، حج/عمرہ کے کسی واجب کے رہ جانے یا مؤخر ہونے پر، یا میقات عبور کرنے پر آتی ہے — اور خلاف ورزی کے درجے کے مطابق ہوتی ہے۔",
    shortAnswerAr:
      "الدم بهيمة تُذبح عند انتهاك محظورات الإحرام (الطيب، تغطية الرأس للرجال، تقليم الشعر/الأظفار)، أو فوات واجب من واجبات الحج/العمرة أو تأخيره، أو إتيان الميقات — بتدرجٍ حسب المخالفة.",
    practicalInfo: "Which dam applies to your case: consult the Hajj guides or a mufti during the journey.",
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Hajj", translation: "Dam categories.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Dam for cutting hair in ihram", "Penalty for perfume in ihram"],
    related: ["hajj-ihram-rules", "hajj-miqat"],
  },
  {
    slug: "hajj-badal",
    question: "Can Hajj be performed on behalf of another person (Hajj badal) according to Hanafi fiqh?",
    questionUr: "کیا حنفی فقہ کے مطابق دوسرے کی طرف سے حج کیا جا سکتا ہے (حج بدل)؟",
    questionAr: "هل يحج المرء عن غيره (الحج بالنيابة) وفقًا للفقه الحنفي؟",
    category: "hajj-umrah",
    subcategory: "Substitute",
    type: "FIQH",
    difficulty: "INTERMEDIATE",
    cluster: "hajj-general",
    intent: "fiqh",
    shortAnswer:
      "Yes — for one who died without performing the obligatory Hajj, or who is permanently unable: the proxy performs on the deceased's/person's expense; one's own obligatory Hajj must precede proxy Hajj in the school's books.",
    shortAnswerUr:
      "ہاں — اس کے لیے جو فرض حج کیے بغیر مر گیا ہو یا جو دائمی طور پر ناتوان ہو: نائب مرحوم/اس شخص کے خرچ پر حج کرتا ہے؛ مذہب کی کتب میں اپنا فرض حج حجِ بدل سے پہلے ہونا چاہیے۔",
    shortAnswerAr:
      "نعم — لمن مات ولم يحج الفرض، أو من عجز عجزًا دائمًا: يحج النائب على نفقة المرحوم/الشخص؛ ويجب أن يتقدم حج الفرض الشخصي على حج النيابة في كتب المذهب.",
    sources: [
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-Hajj", translation: "Hajj badal conditions.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Hajj for deceased parents", "Proxy Hajj rules"],
    related: ["hajj-wuquf-arafah"],
  },
  {
    slug: "hajj-umrah-difference",
    question: "What is the difference between Hajj and Umrah?",
    questionUr: "حج اور عمرے میں کیا فرق ہے؟",
    questionAr: "ما الفرق بين الحج والعمرة؟",
    category: "hajj-umrah",
    subcategory: "Basics",
    type: "BEGINNER",
    difficulty: "BEGINNER",
    cluster: "hajj-general",
    intent: "informational",
    shortAnswer:
      "Umrah is ihram + tawaf + sa'i + shaving (any time of year); Hajj adds the Arafah standing, Muzdalifah, the Mina days and rami — in the appointed months (Shawwal–Dhu al-Hijjah first ten).",
    shortAnswerUr:
      "عمرہ احرام + طواف + سعی + سر منڈوانا ہے (سال کے کسی بھی وقت)؛ حج میں عرفات کا وقوف، مزدلفہ، منی کے دن اور رمی اضافی ہیں — معین مہینوں میں (شوال سے ذوالحجہ کی پہلی دس تاریخوں تک)۔",
    shortAnswerAr:
      "العمرة إحرام + طواف + سعي + حلق في أي وقت من السنة؛ والحج يضيف وقوف عرفة، والمزدلفة، وأيام منى، والرمي — في الأشهر المعلومة (من شوال إلى العشر الأول من ذي الحجة).",
    sources: [
      { kind: "BOOK", ref: "Mukhtasar al-Quduri, Kitab al-Hajj", translation: "Hajj/Umrah structure.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Hajj vs umrah", "What does umrah include?"],
    related: ["hajj-tawaf-sai", "hajj-wuquf-arafah"],
  },
  {
    slug: "hajj-tawaf-wada",
    question: "Is the farewell tawaf (tawaf al-wada') wajib according to Hanafi fiqh?",
    questionUr: "کیا حنفی فقہ کے مطابق طوافِ وداع واجب ہے؟",
    questionAr: "هل طواف الوداع واجب وفقًا للفقه الحنفي؟",
    category: "hajj-umrah",
    subcategory: "Rites",
    type: "FIQH",
    difficulty: "INTERMEDIATE",
    cluster: "hajj-general",
    intent: "fiqh",
    shortAnswer:
      "Yes — it is wajib in the school for non-residents leaving Makkah; missing it entails dam, with the excused (menstruating women leaving without delay) discussed in the books.",
    shortAnswerUr:
      "ہاں — مذہب میں یہ غیر مقیمیوں کے لیے واجب ہے جو مکہ چھوڑ رہے ہوں؛ اس کا رہ جانا دم کا مستوجب ہے، اور معذوروں (حائضہ عورتیں جو بغیر توقف چلی جائیں) کا ذکر کتب میں ہے۔",
    shortAnswerAr:
      "نعم — هو واجب في المذهب على غير المقيمين عند مغادرة مكة؛ وفواته يستوجب الدم، مع كلام الكتب في المعذورين (الحائض إن غادرت دون تأخير).",
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Hajj", translation: "Farewell tawaf status.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Farewell tawaf required?", "Tawaf wada for women"],
    related: ["hajj-tawaf-sai"],
  },

  // ─────────────────────────── JUMU'AH & EID ───────────────────────────
  {
    slug: "jumuah-obligation",
    question: "Who must attend Jumu'ah according to Hanafi fiqh?",
    questionUr: "حنفی فقہ کے مطابق جمعہ کون پر لازم ہے؟",
    questionAr: "من يلزمه حضور الجمعة وفقًا للفقه الحنفي؟",
    category: "jumuah-eid",
    subcategory: "Jumu'ah",
    type: "BEGINNER",
    difficulty: "BEGINNER",
    cluster: "jumuah",
    intent: "fiqh",
    shortAnswer:
      "Jumu'ah is fard 'ayn on adult resident men able to attend; women, travellers, the ill, and those with valid needs are excused — they pray Zuhr instead.",
    shortAnswerUr:
      "جمعہ بالغ مقیمی مردوں پر جن کے لیے حاضرت ممکن ہو فرضِ عین ہے؛ عورتیں، مسافر، مریض اور جائز عذر والے معاف ہیں — وہ اس کے بدلے ظہر پڑھتے ہیں۔",
    shortAnswerAr:
      "الجمعة فرض عين على الرجال البالغين المقيمين القادرين على الحضور؛ والنساء والمسافرون والمرضى ومن لهم حاجة صحيحة معذورون — يصلون الظهر بدلًا منها.",
    sources: [
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-Jumu'ah", translation: "The obligation's subjects and excusals.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Is Jummah compulsory for women?", "Do travellers pray Jumu'ah?"],
    related: ["jumuah-rakahs", "taharah-ghusl-jumuah"],
  },
  {
    slug: "jumuah-rakahs",
    question: "How many rak'ahs is Jumu'ah prayer according to Hanafi fiqh?",
    questionUr: "حنفی فقہ کے مطابق نمازِ جمعہ کتنی رکعات ہے؟",
    questionAr: "كم عدد ركعات صلاة الجمعة وفقًا للفقه الحنفي؟",
    category: "jumuah-eid",
    subcategory: "Jumu'ah",
    type: "BEGINNER",
    difficulty: "BEGINNER",
    cluster: "jumuah",
    intent: "informational",
    shortAnswer:
      "Two rak'ahs after the khutbah (replacing Zuhr's four) — with four rak'ahs of sunnah before it and four after Zuhr-time in the school's practice.",
    shortAnswerUr:
      "خطبے کے بعد دو رکعات (ظہر کی چار کے بدلے) — مذہب کی روش میں اس سے پہلے چار رکعات سنت اور ظہر کے وقت کے بعد چار رکعات۔",
    shortAnswerAr:
      "ركعتان بعد الخطبة (مقابل أربع الظهر) — مع أربع ركعات سنة قبلها وأربع بعد وقت الظهر في عمل المذهب.",
    sources: [
      { kind: "BOOK", ref: "Mukhtasar al-Quduri, Kitab al-Jumu'ah", translation: "Jumu'ah structure.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Jumuah 2 rakats?", "Sunnah before and after Jumu'ah"],
    related: ["jumuah-obligation"],
  },
  {
    slug: "jumuah-khutbah-conditions",
    question: "What makes a Jumu'ah khutbah valid according to Hanafi fiqh?",
    questionUr: "حنفی فقہ کے مطابق خطبہ جمعہ کس پر صحیح ہوتا ہے؟",
    questionAr: "بماذا تصح خطبة الجمعة وفقًا للفقه الحنفي؟",
    category: "jumuah-eid",
    subcategory: "Jumu'ah",
    type: "FIQH",
    difficulty: "INTERMEDIATE",
    cluster: "jumuah",
    intent: "fiqh",
    shortAnswer:
      "A dhikr heard by the majority body of attendees delivered by the khatib from the minbar after the time enters — the school requires the minimum remembrance (tahmid etc.), with silence upon attendees discussed in the manuals.",
    shortAnswerUr:
      "وقت داخل ہونے کے بعد خطیب کی طرف سے منبر سے دیا گیا ایسا ذکر جو حاضرین کے جمغے کی اکثریت کو سنا جائے — مذہب کم سے کم ذکر (حمد وغیرہ) شرط کرتا ہے، اور حاضرین کے خاموش رہنے کا معاملہ متون میں زیرِ بحث ہے۔",
    shortAnswerAr:
      "ذكرٌ يسمعه أغلب الحاضرين يلقيه الخطيب من المنبر بعد دخول الوقت — يشترط المذهب أدنى الذكر (الحمد إلخ)، ومناقشة سكوت الحاضرين مذكورة في المتون.",
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Jumu'ah", translation: "Khutbah minimums.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Khutbah before or after prayer?", "Is listening to khutbah wajib?"],
    related: ["jumuah-obligation"],
  },
  {
    slug: "eid-prayer-rakahs",
    question: "What is the Hanafi method of Eid prayer?",
    questionUr: "نمازِ عید کا حنفی طریقہ کیا ہے؟",
    questionAr: "ما هي طريقة صلاة العيد عند الحنفية؟",
    category: "jumuah-eid",
    subcategory: "Eid",
    type: "BEGINNER",
    difficulty: "BEGINNER",
    cluster: "eid",
    intent: "informational",
    shortAnswer:
      "Two rak'ahs without adhan/iqamah or khutbah-preceding prayer: three additional takbirs in the first rak'ah (after the opening/integration into recitation start) and three in the second (before the ruku') — khutbah follows the prayer.",
    shortAnswerUr:
      "دو رکعات — بغیر اذان/اقامت، اور نماز خطبے سے پہلے نہیں: پہلی رکعت میں تین اضافی تکبیریں (افتتاح کے بعد، تلاوت کے آغاز میں داخل) اور دوسری میں تین (رکوع سے پہلے) — خطبہ نماز کے بعد ہے۔",
    shortAnswerAr:
      "ركعتان بلا أذان/إقامة ولا صلاة قبل الخطبة: ثلاث تكبيرات زائدات في الركعة الأولى (بعد الافتتاح/داخلة في مطلع القراءة) وثلاث في الثانية (قبل الركوع) — والخطبة بعد الصلاة.",
    detailedAnswer:
      "The school transmits the six-extra-takbir method (3+3) from the Companions' practice; the Shafi'i school transmits seven+five (7+5). Both are documented; congregation follows its imam.",
    hanafiPosition: "3 + 3 extra takbirs.",
    otherViews: "Shafi'i/Hanbali: 7 + 5. Maliki: 6 + 6 (different points).",
    sources: [
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-'Idayn", translation: "The Eid method of the school.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Eid prayer how many takbirs?", "Eid salah steps"],
    related: ["eid-takbir-timing", "jumuah-rakahs"],
  },
  {
    slug: "eid-takbir-timing",
    question: "When is the Eid takbir recited according to Hanafi fiqh?",
    questionUr: "حنفی فقہ کے مطابق تکبیرِ عید کب کہی جاتی ہے؟",
    questionAr: "متى يُقال تكبير العيد وفقًا للفقه الحنفي؟",
    category: "jumuah-eid",
    subcategory: "Eid",
    type: "BEGINNER",
    difficulty: "BEGINNER",
    cluster: "eid",
    intent: "informational",
    shortAnswer:
      "From the Maghrib of 'Arafah's eve until 'Asr of the 13th of Dhu al-Hijjah for 'Id al-Adha, and from Fajr of 'Arafah day (or the Eid's eve per later books) for 'Id al-Fitr — with takbir after every fard prayer in the school's practice.",
    shortAnswerUr:
      "عید الاضحی کے لیے شامِ عرفہ کے مغرب سے 13 ذوالحجہ کے عصر تک، اور عید الفطر کے لیے یومِ عرفہ کی فجر سے (یا متاخر کتب کے مطابق عید کی رات سے) — مذہب کی روش میں ہر فرض نماز کے بعد تکبیر۔",
    shortAnswerAr:
      "من مغرب ليلة عرفة إلى عصر الثالث عشر من ذي الحجة لعيد الأضحى، ومن فجر يوم عرفة (أو ليلة العيد عند المتأخرين) لعيد الفطر — مع التكبير بعد كل صلاة فريضة في عمل المذهب.",
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-'Idayn", translation: "Takbir timings.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Eid takbir after salah timing", "Takbir tashreeq days"],
    related: ["eid-prayer-rakahs"],
  },
  {
    slug: "eid-ushr-sacrifice",
    question: "What is the Hanafi position on the 'Id sacrifice (udhiyah/qurbani)?",
    questionUr: "عید کی قربانی (اضحیہ/قربانی) پر حنفی مذہب کا موقف کیا ہے؟",
    questionAr: "ما هو مذهب الحنفية في أضحية العيد (الأضحية/القربان)؟",
    category: "jumuah-eid",
    subcategory: "Eid",
    type: "FIQH",
    difficulty: "INTERMEDIATE",
    cluster: "eid",
    intent: "fiqh",
    isDisputed: true,
    disputedNote: "A signature madhhab difference: Hanafi fiqh treats the 'Id sacrifice as wajib on the financially able; Shafi'i fiqh treats it as sunnah.",
    shortAnswer:
      "In the school it is wajib on every free adult resident who possesses the nisab at the time of 'Id — a distinctive position from the Shafi'i sunnah classification.",
    shortAnswerUr:
      "مذہب میں یہ ہر آزاد بالغ مقیمی پر واجب ہے جو عید کے وقت نصاب کا مالک ہو — شافعی مذہب کی سنت کی درجہ بندی سے ایک ممتاز موقف۔",
    shortAnswerAr:
      "في المذهب هي واجبة على كل حر بالغ مقيم يملك النصاب وقت العيد — موقف مميز عن تكييف الشافعية لها سُنّة.",
    sources: [
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-Dhaba'ih", translation: "The wujub of udhiyah in the school.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Is qurbani wajib Hanafi?", "Who must give qurbani?"],
    related: ["eid-prayer-rakahs", "zakah-nisab"],
  },
  {
    slug: "jumuah-excuses",
    question: "Who is excused from Jumu'ah and what do they pray instead according to Hanafi fiqh?",
    questionUr: "حنفی فقہ کے مطابق جمعہ سے کون معاف ہے اور وہ اس کے بدلے کیا پڑھتے ہیں؟",
    questionAr: "من يُعذر عن الجمعة وماذا يصلي بدلًا منها وفقًا للفقه الحنفي؟",
    category: "jumuah-eid",
    subcategory: "Jumu'ah",
    type: "FIQH",
    difficulty: "INTERMEDIATE",
    cluster: "jumuah",
    intent: "fiqh",
    shortAnswer:
      "Women, travellers, the ill and their caretakers, those in fear, and workers with pressing public need are excused — they pray the four rak'ahs of Zuhr; in the school Jumu'ah is not valid for those excused even if they attend.",
    shortAnswerUr:
      "عورتیں، مسافر، مریض اور ان کے نگہبان، خوف والے، اور عوامی ضرورت کے فوری کام میں لگے لوگ معاف ہیں — وہ ظہر کی چار رکعات پڑھتے ہیں؛ مذہب میں معاف شدگان کے لیے جمعہ صحیح نہیں، چاہے وہ حاضر ہو جائیں۔",
    shortAnswerAr:
      "النساء والمسافرون والمرضى ومن يتولى رعايتهم، والخائفون، والعاملون لحاجة عامة ملحّة معذورون — يصلون أربع ركعات الظهر؛ والجمعة لا تصح للمعذورين ولو حضروا عند المذهب.",
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Jumu'ah", translation: "Excused categories.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["I missed jummah what do I pray?", "Zuhr instead of jumuah"],
    related: ["jumuah-obligation"],
  },
];
