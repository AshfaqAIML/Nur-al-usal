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
    detailedAnswer:
      "The school reasons through the mouth as the passage of intake: deliberate self-induced vomiting brings substance up the way deliberate eating brings it down, so the prophetic report — 'whoever is overcome by vomiting owes nothing, and whoever vomits deliberately owes qada' — is read as marking agency, not mere occurrence. Two boundaries shape the rule. Quantity: the books fix the voiding measure at a mouthful (mali' al-fam), under which even deliberate vomiting is discussed as non-voiding by caution and above which it voids with certainty. Agency: a mouthful returning on its own does not void at all, because the report exempts 'the overcome' precisely for what he did not choose. Retching and nausea with no emission affect nothing. Because the cause here is not the defiance of the deliberate Ramadan-breaker by intercourse, the compensation is qada alone — the school reserves the kaffarah sequence for the intercourse case the narrations attach it to, a point the manuals repeat consistently.",
    hanafiPosition: "Deliberate vomiting of a mouthful voids the day and requires qada only; involuntary vomiting does not void at any quantity, and retching without emission leaves the fast untouched.",
    otherViews: "The Shafi'i school's operative position is that even deliberate vomiting is sinful but does not break the fast, reading the report's exemption broadly; some early jurists similarly held that no vomiting voids. The Hanafi school reads the mouthful threshold and the deliberate case as the report's operative content — a fair, documented divergence in reading the same material.",
    practicalInfo: "With sickness-related vomiting the fast remains valid whatever the quantity; never induce vomiting while fasting, and if it returns involuntarily, spit it out rather than swallow. Repeated illness-driven vomiting belongs to the illness exemptions of the school. General educational information — not a personalized fatwa. Consult a qualified local mufti for your personal situation.",
    sources: [
      { kind: "HADITH", ref: "Sunan Abi Dawud, Kitab al-Sawm (narration of Abu Huraira — deliberate vomiter makes up)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number pending verification" },
      { kind: "BOOK", ref: "Nur al-Idah (al-Shurunbulali), Kitab al-Sawm", translation: "Vomiting quantity rules.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-Sawm", translation: "Deliberate mouthful vomiting voids with qada; the involuntary case is exempt.", status: "PARTIALLY_VERIFIED" },
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
    detailedAnswer:
      "The school's criterion for breaking the fast is deliberate intake of substance through the passage to the body's interior — and the mouth's own residue is not intake. The books pair this with a deliberate distinction between taste and substance: swallowing one's own saliva with a lingering taste does not void the fast in the school, a point on which other schools adopt more caution. Toothpaste therefore stands where taste stands: brushing is lawful, provided nothing is swallowed.\n\nThe practice-layer the books add is careful rinsing — spit out the paste and rinse thoroughly so no substance slips down with saliva — and avoidance of deep gargling while fasting, which the school dislikes precisely for the accidental-swallow risk. The late-day caution the short answer mentions is this same ihtiyat: as saliva accumulates toward evening, the mixing risk rises, so the careful worshipper either brushes early or turns to the sunnah instrument.\n\nThat instrument is the miswak: the Prophet's ﷺ tooth-stick was his standing practice, and the narrations record him inclining to command it universally but withholding it for fear of overburdening his ummah — transmitted in Bukhari's Jumu'ah chapters. Brushing serves the same purifying purpose in modern form; the school's sum: lawful with care, and the sunnah instrument preferred.",
    practicalInfo: "Miswak is the classical preferred practice; brushing is fine with care to rinse thoroughly.",
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Sawm", translation: "Mouth-taste vs intake distinction.", status: "PARTIALLY_VERIFIED" },
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab al-Jumu'ah (narration of Abu Huraira — 'were it not to overburden my ummah, I would have commanded them with the siwak at every prayer')", translation: "paraphrased translation", status: "UNVERIFIED", note: "number not asserted; cited at collection/chapter level" },
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
    detailedAnswer:
      "The school's classical nullifier-frame has two operative gates: the item must reach the body's interior, and it must arrive through the natural passages — the mouth and nose above all — or be the kind of nutritive intake the texts equate with eating. Every modern case is mapped through those gates: 'needle or mouth' is not the question; 'does it nourish, and through which door does it arrive' is.\n\nEye and ear are not passages to the interior in the school's anatomy of nullifiers, and the jurists' classical analogue was kohl — the Sunan's fasting chapters carry narrations of the Prophet's ﷺ and companions' kohl-use while fasting — so non-nutritive drops sit in a licensed category, as do intramuscular injections that bypass the passages and nourish nothing.\n\nNutritional drips (IV feeding) do what eating does — nourish — and reach the interior directly, which is why contemporary scholars across the schools converge on their breaking the fast; insulin-type injections nourish nothing and remain a documented, case-by-case contemporary discussion rather than a settled rule. The school's illness-exemptions frame the whole decision: if the regimen genuinely endangers, the concession to postpone belongs to the Shari'ah and is used without guilt — the doctor-plus-mufti pairing in the practical note is the process the books themselves would recognize.",
    practicalInfo: "For medical necessity consult a qualified mufti with your doctor's input — illness exemptions also apply.",
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Sawm", translation: "The intake-passage framework applied to modern cases.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Fatawa Hindiyyah, Kitab al-Sawm", translation: "Compiled rulings on fast-voiding items.", status: "PARTIALLY_VERIFIED" },
      { kind: "HADITH", ref: "Sunan Abi Dawud, Kitab al-Sawm (chapter on kohl — narrations of the Prophet ﷺ and companions applying kohl while fasting)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number not asserted; cited at collection/chapter level; the classical analogue for modern eye-drops" },
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
    detailedAnswer:
      "The school's books start from saliva: it is the mouth's own moisture, swallowed all day by every fasting person, and the famous report praising the fasting person's breath ('more fragrant to Allah than musk') presupposes that it is — the fast contemplates a mouth in use. Mucus is then sorted by origin and passage. Mucus descending from the head or sinuses into the throat is treated like saliva: its passage is natural and unavoidable, and the school's codifiers record that swallowing it does not void. The cautionary layer appears for phlegm drawn up from the chest into the mouth and then deliberately swallowed — treated as substance gathered under one's control in the mouth, with a qada-requirement recorded by caution. Beneath both layers runs one principle: the fast is voided by chosen intake through the mouth of what had left the body's domain; internal secretions never leave it, so they do not return to it.",
    hanafiPosition: "Swallowing one's own saliva never voids the fast; head/sinus mucus reaching the throat does not void, while a cautionary qada view is recorded for chest phlegm brought to the mouth and deliberately swallowed.",
    otherViews: "Some jurists of the school hold that even mouth-gathered phlegm does not void, reading the whole mucus category as internal secretion; other schools treat the mucus cases more leniently still. The cautionary Hanafi layer is one documented position among them — the platform keeps it visible rather than flattening the discussion.",
    practicalInfo: "Clear the throat before swallowing when you can, and avoid deliberately gathering phlegm into the mouth during the fast. Persistent illness with mucus belongs to the school's illness exemptions. General educational information — not a personalized fatwa. Consult a qualified local mufti for your personal situation.",
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Sawm", translation: "Saliva vs mucus distinction.", status: "PARTIALLY_VERIFIED" },
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab al-Sawm (narration of Abu Huraira — the fasting person's breath is more fragrant to Allah than musk)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number not verified; cited at collection/narrator level" },
      { kind: "BOOK", ref: "Fatawa Hindiyyah, Kitab al-Sawm", translation: "Compiled rulings on saliva and mucus while fasting.", status: "PARTIALLY_VERIFIED" },
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
    detailedAnswer:
      "The school builds the ruling on the verse's own two-part structure: Al-Baqarah 2:184 grants the permanently unable a feeding-compensation, while 2:185 gives the traveler and the ill 'days later' — and the school files pregnancy and breastfeeding under the second clause, because their inability is real but temporary. The mother postpones and repays the days like the sick person: qada, one-for-one.\n\nWhy the school declines fidyah in its dominant position: feeding is the substitute for those who can never fast; for a recoverable condition the days are genuinely owed, and the school keeps the compensation minimal — the day itself, not the day plus payment. Several other schools add fidyah to her qada when harm is feared (the Maliki reading carries the feeding clause to pregnancy directly), and some later scholars allowed fidyah where the inability stretched past the season — both are recorded positions the platform keeps visible.\n\nThe trigger is credible harm, not inconvenience: the books' language of fearing harm upon herself or her child requires a serious assessment — which is why the practical note pairs doctor and mufti. Continuing while genuinely fearing harm is itself contrary to the school's guidance; the concession exists to be used rightly, and the days it defers are repaid before the next Ramadan's discipline closes in.",
    practicalInfo: "Health decisions need a doctor + mufti: general education only.",
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Sawm", translation: "Pregnancy/breastfeeding postponement with qada.", status: "PARTIALLY_VERIFIED" },
      { kind: "QURAN", ref: "Al-Baqarah 2:184", translation: "…and upon those who can barely bear it, a compensation of feeding a needy person — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
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
    detailedAnswer:
      "The verse's 'days to be counted' (2:184) makes qada — one replacement day per missed day — the default compensation, and the school keeps the default tight: the kaffarah sequence belongs to the single case the narrations attach it to, deliberate intercourse during a Ramadan day; everything else — illness, travel, menstruation — is replaced by qada without feeding. Delay carries its own discipline: qada days are not bound to a season, but the school holds that leaving a year's missed days unmade until the next Ramadan enters, without excuse, is itself sinful — the books derive the gravity from the verse's counting of days. Two school-specific refinements complete the picture. A woman whose fasts were broken by menstruation owes qada alone; the school does not add fidyah to her obligation, in contrast to some later practice patterns. And where a person dies owing qada fasts, the narration of Ibn 'Abbas directs the heirs to fast on the deceased's behalf — with the books discussing feeding from the estate where the heirs cannot manage it.",
    hanafiPosition: "Missed days are replaced one-for-one by qada with no feeding added; kaffarah attaches to deliberate intercourse alone; unexcused delay until the next Ramadan is sinful; a deceased person's outstanding fasts are met by the heirs' fasting or by feeding from the estate.",
    otherViews: "The Maliki school attaches a kaffarah-level feeding to deliberate breaking generally, and several schools add fidyah alongside qada in pregnancy/breastfeeding harm cases; the Hanafi school keeps compensation minimal — qada unless the intercourse kaffarah applies — and requires the woman's qada without added feeding.",
    practicalInfo: "Intend each qada fast by night, keep the days separate, and complete them before the next Ramadan where able. Illness, pregnancy and breastfeeding cases turn on personal facts. General educational information — not a personalized fatwa. Consult a qualified local mufti for your personal situation.",
    fatawaRazvia:
      "Fatawa Razvia treats the qada of missed Ramadan fasts within the school's framework — days replaced one-for-one without added feeding — and, in its discussion of outstanding fasts left at death, applies the heirs' duty to fast on the deceased's behalf or to feed from the estate.",
    sources: [
      { kind: "QURAN", ref: "Al-Baqarah 2:184", translation: "…then days to be made up later — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Mukhtasar al-Quduri, Kitab al-Sawm", translation: "Qada rules.", status: "PARTIALLY_VERIFIED" },
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab al-Sawm (narration of Ibn 'Abbas — one who dies owing fasts: his heir fasts on his behalf)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number not verified; cited at collection/narrator level" },
      { kind: "BOOK", ref: "Fatawa Razvia — discussion of qada fasts and fidya", translation: "Ahmad Raza Khan applies the school's qada-without-feeding rule and the heirs' duty for the deceased's outstanding fasts.", status: "PARTIALLY_VERIFIED" },
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
    detailedAnswer:
      "The hadith narrates its own logic: a man came to the Prophet ﷺ after deliberately having relations with his wife during a Ramadan day; the Prophet ﷺ asked — a slave to free? he had none; two consecutive months? he could not; sixty poor to feed? — and the man assented. Because the sequence is the Prophet's ﷺ own prescription, the school binds its order (tartib): freeing where possible, else the two months, else the sixty poor; the books require the two months to run consecutively and discuss the restart where they are deliberately broken.\n\nThe school fences the obligation narrowly: it attaches to deliberate intercourse in a Ramadan day alone — forgetfulness, coercion and mistake fall outside it — and the day itself still owes its qada in addition. The sixty poor are each fed the school's standard meal-unit (the half-sa' of wheat or sa' of dates/barley measure the books use), sixty times over — a materially heavier obligation than the one-per-day fidya, which is the point.\n\nOn the levels' structure the schools differ honestly: the school, with the Shafi'i line, reads the ladder as sequential; other schools' texts discuss whether the levels may be chosen between. The wisdom the books note is proportionality — a graded sequence that tests capacity step by step rather than imposing one flat penalty — and the personal assessment of ability, dates and amounts is exactly the mufti's work that the practical line points to.",
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
    detailedAnswer:
      "Fidya's textual home is Al-Baqarah 2:184's compensation clause — 'upon those who can barely bear it, a feeding of a poor person' — which the school reads as permanently descriptive: the aged whose strength will not return, the chronically ill whose condition forbids fasting in any season. For them, feeding is not a fine but a substitute: one poor person fed per day, the days of Ramadan counted through.\n\nThe school's measure is the canonical feeding-unit: half a sa' of wheat, or a sa' of barley, dates or raisins, per person per day — the books discuss giving the food itself or its value, and the fatwa collections carry both practices. Alongside stands the deceased case: one who died owing Ramadan days is discussed in the books under the Ibn 'Abbas narration directing the heirs to fast on his behalf, with feeding from the estate where the heirs cannot manage — compensation flowing where personal discharge has become impossible.\n\nThe books labor the distinctions because practice fumbles them: fidya is the permanently unable person's substitute (one feeding per day); kaffarah is the deliberate-intercourse expiation (sixty per day); qada is the temporarily excused person's replacement days. Mixing them — paying sixty where one is due, or feeding where recoverable days are owed — is the classic error the manuals warn against; amounts and eligibility shift with each year's prices and each person's facts, which is the mufti's role the practical note names.",
    practicalInfo: "Amounts and eligibility vary by case and year — consult a local mufti.",
    sources: [
      { kind: "QURAN", ref: "Al-Baqarah 2:184", translation: "…on those who can barely bear it, a compensation of feeding a needy person — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Sawm", translation: "Fidya eligibility in the school.", status: "PARTIALLY_VERIFIED" },
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab al-Sawm (narration of Ibn 'Abbas — one who dies owing fasts: his heir fasts on his behalf)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number not verified; cited at collection/narrator level" },
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
    detailedAnswer:
      "The school reads i'tikaf from its root of confinement: worship attaches to the mosque as the act's place, and the manuals build the rules outward from that confinement. Its standing form is the last ten nights of Ramadan as a sunnah mu'akkadah on the community (kifayah) — the 'Aisha narrations record the Prophet ﷺ keeping it every Ramadan, and the books add that when travel interrupted his nights he completed them in Shawwal — while a vow (nadhr) raises it to wajib. The rules the manuals codify follow the confinement logic: eating, drinking and sleeping in the mosque are permitted; leaving is permitted only for genuine need — the call of nature, wudu or ghusl, and joining an obligatory congregation when no mosque within holds it — while stepping out without need voids the confinement; relations void it; buying and selling inside are disliked; and, per the school, fasting is not a condition, so one may sit i'tikaf on days one is not fasting. For women the school validates i'tikaf in the prayer-space of the home where the mosque is not their venue — the manuals record it plainly.",
    hanafiPosition: "Confinement in a mosque for worship: the last ten nights of Ramadan are a communal sunnah mu'akkadah, a vow makes it wajib; leaving without need and relations void it, while eating, sleeping and drinking within are permitted.",
    practicalInfo: "The communal sunnah is met when some of the town's people sit it, so congregations arrange shifts and needs (food, messages, wudu access) in advance; women confirming home-i'tikaf arrangements should follow their local mufti's guidance.",
    sources: [
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-I'tikaf", translation: "I'tikaf rules of the school.", status: "PARTIALLY_VERIFIED" },
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab al-I'tikaf (narrations of 'Aisha and Ibn 'Umar — the Prophet's ﷺ Ramadan i'tikaf, and making up missed nights in Shawwal)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number not verified; cited at collection/narrator level" },
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
    detailedAnswer:
      "The nisab is transmission-fixed, not market-derived: the zakat-era reports set the thresholds — twenty dinars for gold, two hundred dirhams (five uqiyah) for silver — and fix the rate with them: a quarter of a tenth, 2.5%. The school holds these measures ta'abbudi — received, practiced and transmitted — which is why no era re-derives them from price levels; what changes is only their valuation against each year's market.\n\nThe two thresholds stood near-equal in bullion-value at revelation; today silver's line sits far below gold's, and the school's fatwa practice commonly applies the silver nisab to cash and assets. The South Asian manuals state the prudential reason plainly: the lower threshold catches more wealth, and the poor's due should not slip beneath a higher bar. The books' mechanics then run their course — full ownership, the lunar hawl at or above the threshold, the 2.5% taken on the hawl's completion — with the fluctuation-cases (mid-year dips and their treatment) discussed in the advanced chapters.\n\nThe enduring practical point: the prophetic numbers are stable, the market is not. Gold and silver prices move daily, so the fixed measures must be re-valued every year — which is why the practical note points to current calculators and the local mufti rather than to any once-printed figure.",
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
    detailedAnswer:
      "The school's jurisprudence of monetary zakah begins with the naqdayn — gold and silver — as the originals of wealth (mawadi' al-amwal) against which all other zakatable property is measured. Paper money and bank balances carry no intrinsic bullion content, so the jurists apply them by value (qimma): they stand in the place of the naqdayn in proportion to what they can purchase of them. On this frame the contemporary fatawa treat currency and bank balances as silver-equivalent wealth: the nisab is the 200-dirham silver standard, the rate is the fortieth (2.5%), and liability attaches once a lunar hawl passes with the balance above nisab. The manuals' deduction rule matters for the employed: debts due in one's own name are deducted before the nisab is tested, while planned monthly spending is not — the school counts what one owes, not what one intends to spend. Where a balance dips below nisab during the year and recovers, the books discuss whether the hawl is interrupted; the careful position keeps the zakah date fixed and assesses the year-end holding.",
    hanafiPosition:
      "Cash and bank balances are silver-equivalent zakatable wealth: 2.5% when a lunar year passes above the silver nisab, with due debts deducted first.",
    practicalInfo:
      "Fix an annual zakah date (the lunar anniversary of first reaching nisab), total your cash, bank and other zakatable assets, subtract debts due now, and pay 2.5% of the remainder. General educational information — not a personalized fatwa. Consult a qualified local mufti for your personal situation.",
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Zakat", translation: "Currency wealth under the silver/gold rules.", status: "PARTIALLY_VERIFIED" },
      { kind: "QURAN", ref: "Al-Tawbah 9:103", translation: "Take from their wealth a charity to purify and cleanse them by it — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-Zakat", translation: "The naqdayn as the basis of monetary zakah.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Fatawa Hindiyyah, Kitab al-Zakat", translation: "Compiled rulings on currency and cash wealth.", status: "PARTIALLY_VERIFIED" },
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
      { kind: "QURAN", ref: "Al-Tawbah 9:103", translation: "Take from their wealth a charity to purify and cleanse them by it — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Zakat", translation: "Trade-goods valuation refinements.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Zakah on shop stock", "Business inventory zakat"],
    related: ["zakah-cash", "zakah-shares"],
    detailedAnswer:
      "The zakatability of trade goods is established in the school by analogy (qiyas) on the naqdayn: merchandise bought to resell functions as wealth-in-motion, and the jurists reason that the merchant's stock is his gold and silver in another form. This is why the school — with the other codified schools — treats urud al-tijarah as its own zakatable category rather than leaving it out because the texts fix rates only for livestock, crops and bullion. Two operating rules shape the calculation. The base is the stock's current market value on the zakah date, not the year's profits — the books take the whole trading asset as the object of the fortieth. And the manuals assess the shop's items individually, recording refinements for goods bought above their current worth; contemporary implementers therefore value item by item rather than blanket-averaging the portfolio. What is held as tools, equipment or premises is not merchandise: the school's category follows the intention to trade (hads al-tijarah), so assets kept for use or rent fall outside it.",
    hanafiPosition:
      "Trade inventory is zakatable at 2.5% of its current market value on the zakah date once intention-to-trade, nisab and hawl are met; equipment and premises kept for use are not merchandise.",
    otherViews:
      "A strand of early jurists — a report transmits such a view from Ibn 'Umar — held trade goods outside zakah because no rate is fixed for them in the texts; the codified positions of the four schools, and the school's own mu'tamad, established the qiyas-based liability. Valuation conventions (market value versus lower-of-cost on individual items) remain a documented area of intra-school detail.",
    practicalInfo: "Value each trading item at the zakah date, include goods in transit and receivables from sales, and exclude equipment and buildings kept for use. General educational information — not a personalized fatwa. Consult a qualified local mufti for your personal situation.",
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
    detailedAnswer:
      "The school's case rests on reading the zakah-texts as addressed to the substance: gold and silver are zakatable as materials, in whatever form they sit. The bangle-narrations press the point — the Prophet's ﷺ questioning of women wearing gold about its zakah, and the anklet-report in which he asks 'is its zakah paid?' (transmitted in Abu Dawud's zakah chapters) — the question is posed precisely about worn pieces, which is the case the dispute is about.\n\nThe reasoning the books give is economic: jewelry is the most liquid form of household wealth, and exempting worn gold would retire the ummah's largest gold-holdings from the poor's due. The school therefore zakah-ties it above nisab after a hawl at 2.5%, valuing by metal-content — gems, pearls and imitation pieces are not zakatable unless held for trade. The alternative reasoning — personal use removes trade-and-hoard character — drives the Maliki exemption of customary personal jewelry and the Hanbali customary-limits line; the Shafi'i school stands with the school here, so the four schools divide two-and-two on a documented question.\n\nThe fatwa collections extend the frame to the practical edges — wedding-gold, inherited pieces, children's jewelry under the school's rules on children's wealth — each assessed by the same three tests: is this the zakatable substance, is it above nisab, has the hawl run? The platform records the school-divide as a documented disagreement of reading, not a deficiency on either side.",
    sources: [
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-Zakat", translation: "Jewellery zakah in the school.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Fatawa Hindiyyah, Kitab al-Zakat", translation: "Compiled jewellery rulings.", status: "PARTIALLY_VERIFIED" },
      { kind: "HADITH", ref: "Sunan Abi Dawud, Kitab al-Zakat (narration of Umm Salamah — the anklet asked: 'is its zakah paid?')", translation: "paraphrased translation", status: "UNVERIFIED", note: "number not asserted; cited at collection/narrator level" },
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
    detailedAnswer:
      "Shares are the modern test-case of an old doctrine: in the school, the owner's acquisition-intent (niyyah) helps determine an asset's fiqh-category, and the classical categories — currency, gold and silver, trade-goods (urud al-tijarah), livestock, produce — did not contemplate equity portfolios. Contemporary scholars therefore map shares by intent and use, exactly as the school's own framework directs.\n\nShares held for resale take the trade-goods template wholesale: market value tested against the nisab, a full hawl, 2.5% at the year's close — mirroring the inventory rules the books codify. Shares held for dividends split the scholars: some treat them as held assets, taking zakah on the cash and dividends received plus the proportionate liquid assets inside the company; others apply the market-value method to the whole holding; and the deeper question of corporate zakah-payment adjusting the base is a live contemporary discussion. The platform presents these as documented methods, not a verdict — there is no consensus here to manufacture.\n\nThe classical anchor worth naming is the school's insistence that category follows economic reality rather than labels: an actively-traded 'long-term investment' behaves like trade-goods; a buy-and-hold portfolio does not. The fatwa books' practical counsel follows: choose one coherent method, apply it consistently across years, and let the mufti see the actual portfolio rather than its label.",
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
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-Zakat", translation: "Grading of debts (qawiyy, mutawassit, da'if).", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Bada'i' al-Sana'i' (al-Kasani), Kitab al-Zakat", translation: "Dayn categories and their zakah timing.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Zakah on money lent to friends", "Do I deduct my loans from zakah?"],
    related: ["zakah-cash", "fin-loans-writing"],
    detailedAnswer:
      "The school grades receivables by the strength of the obligation and the form of the transaction. A cash loan (dayn qawiyy) is the strong case: cash passed hand-to-hand, so the wealth is real from the moment of lending — the school holds its zakah due when received, retroactively for the years it was out (Abu Hanifa's transmission), or year by year as it stays out (the sahibayn's transmission, which the later books prefer for fatwa). A credit sale of trade goods (dayn mutawassit) stands between: its zakah falls when the price is received. A credit sale of other property (dayn da'if) is the weak case: no zakah until received and a further hawl passes over it. On the other side of the balance sheet, the school deducts debts already due from one's own wealth before testing nisab; long-term obligations whose installments have not fallen due are weighed under the books' rules on future liabilities. The grading matters because the school ties zakah's timing to possession (tamalluk), which is exactly where frameworks that assess receivable wealth directly diverge.",
    hanafiPosition:
      "Receivables are graded — a cash loan's zakah falls on receipt retroactively (or yearly, the preferred view), a credit sale of trade goods on receipt, a credit sale of other property after receipt and a hawl — while one's own due debts are deducted from the zakah base.",
    otherViews:
      "Several schools count strong receivables inside the zakah base each year even before receipt, reasoning that the wealth is securely owed; the school delays liability to possession instead. Within the school itself, Abu Hanifa's retroactive measure and the sahibayn's yearly measure on strong debts are both transmitted, the later books preferring the yearly view.",
    practicalInfo: "List your receivables by kind (cash lent, credit sale of stock, credit sale of other property) and your own due debts — this determines both timing and deduction. General educational information — not a personalized fatwa. Consult a qualified local mufti for your personal situation.",
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
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Zakat", translation: "Recipient conditions and the Banu Hashim bar.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["8 categories of zakat recipients", "Who can receive zakat?"],
    related: ["zakah-relatives", "zakah-students-institutions"],
    detailedAnswer:
      "The eight categories come from Al-Tawbah 9:60, and the school's manuals define each within the verse's own order. The faqir and miskin are graded by want — the books distinguish them by how far a person stands below sufficiency. The 'amilin 'alayha are the zakah administrators paid from it; mu'allafati qulubuhum — those whose hearts are to be reconciled — is the classical goodwill category, which the jurists discuss as tied to Islam's early needs; fi al-riqab covers freeing from bondage; al-gharimin are debtors whose debts exceed their assets; fi sabilillah is read in the manuals' dominant line as those striving in Allah's path; and ibn al-sabil is the stranded traveller, who may receive zakah even if wealthy at home, because his access to his own wealth is cut. Two boundary rules complete the picture: the school holds sadaqah impermissible for the Prophet's ﷺ family (Banu Hashim), and a recipient must be real — one who owns nisab beyond his essentials is not eligible.",
    hanafiPosition:
      "Zakah distributes to the eight Quranic categories as defined by the school's manuals — the poor and needy by graded want, and the administrators, debtors, wayfarers and other classes each with its documented conditions.",
    otherViews:
      "Schools differ on the reach of two categories: fi sabilillah is restricted by the classical Hanafi reading to those striving in Allah's path, while some later and contemporary scholars extend it to general charitable ends; mu'allafati qulubuhum is treated as operative by some jurists and as lapsed by others once Islam's strength removed its need.",
    practicalInfo: "Prioritise the poor around you — zakah to poor relatives outside your dependents and to the local needy is the classical preference. General educational information — not a personalized fatwa. Consult a qualified local mufti for your personal situation.",
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
      { kind: "HADITH", ref: "Sunan al-Tirmidhi, chapters on sadaqah (narration of Salman ibn 'Amir — charity to a poor person is one charity, to a relative charity and kinship)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number not asserted; bāb placement from memory — verify; cited at collection/narrator level" },
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-Zakat", translation: "The double reward for kinship recipients.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Zakah to brother sister", "Zakah to parents?"],
    related: ["zakah-recipients"],
    detailedAnswer:
      "The school's rule divides relatives by who already owes their support. Those whose nafaqah is the giver's own personal obligation — parents and grandparents above, children and grandchildren below, and the spouse — cannot receive one's zakah: feeding them from zakah would amount to the obligation paying itself, and the manuals treat such payment as invalid and require it again. Relatives outside that circle — brothers, sisters, uncles, aunts, cousins, in-laws — are fully eligible if poor, and the school records a twofold reward: the reported narration counts charity to a poor person as one charity, while charity to a relative is charity and kinship together. This is why classical zakah guidance begins with the family's needy: the school wants zakah to climb the kinship ladder before it scatters. The excluded dependents are still supported, of course — from the giver's own wealth under the nafaqah obligation, not from zakah.",
    hanafiPosition:
      "Poor relatives outside one's support-obligation circle receive zakah with double reward; parents, grandparents, children, grandchildren and spouse do not qualify — their support is the giver's own obligation.",
    otherViews:
      "The exclusion lines track each school's nafaqah doctrine — schools that narrow obligatory kin-support widen the zakah circle correspondingly. The double-reward narration is reported in the collections at narrator level and cited by the school's manuals; its grading is discussed among hadith critics.",
    practicalInfo: "Give zakah to needy relatives outside your dependents (siblings, uncles, aunts, in-laws) — it is zakah and kinship in one; support parents, children and spouse from ordinary wealth instead. General educational information — not a personalized fatwa. Consult a qualified local mufti for your personal situation.",
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
    detailedAnswer:
      "The school's operating principle is tamlik — zakah takes effect when ownership transfers to a living, eligible person. That principle explains both halves of the question. A poor student is simply an eligible person: poverty qualifies him under the poor-and-needy categories regardless of his studies, and some school authorities additionally carried the poor student of sacred knowledge within 'fi sabilillah' — a documented intra-school reading whose breadth scholars discuss.\n\nInstitutions hold no eligibility of their own: a building, a budget line or a salary cannot receive zakah in the school's classical frame — the books hold spending zakah on mosque-construction itself invalid for exactly this reason. What an institution can be is a wakil: an agent that collects and transfers ownership to qualifying individuals. The contemporary fatawa literature conditions the arrangement carefully — recipients genuinely from the eight categories, real transfer of ownership to named or identified eligible persons, zakah funds segregated from operational budgets, and credible scholar-endorsement of the distribution.\n\nThe disagreements are real and stated fairly: some contemporary scholars relax the tamlik-requirement for collective needs; the classical line holds it firmly; funding administrative salaries from zakah remains contested. The route the school's own framework suggests: give directly to eligible individuals where possible, and where an institution is used, ask for its zakah policy and its scholar-endorsed distribution record — the practical note's advice, grounded in wikalah's conditions.",
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
      { kind: "QURAN", ref: "Al-An'am 6:141", translation: "…and give its due on the day of its harvest — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Zakat", translation: "'Ushr rates, thresholds and exemptions.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Ushr on crops", "Zakah on farm produce"],
    related: ["zakah-nisab"],
    detailedAnswer:
      "The school treats agricultural dues as their own chapter ('ushr) rather than folding them into monetary zakah — the rate is fixed by the land's watering, not by a hawl or nisab of wealth. Produce watered without cost (rain, springs, natural moisture) bears the tenth; produce watered with labor or expense bears half of it; and the mixed watering case is weighed in the books' discussions. The school's distinctive edge is its threshold doctrine: staple, storable grains — wheat, barley, rice, dates, raisins and the like — bear 'ushr at any quantity, because the school reads the obligation onto the produce itself; a minority strand and some other schools import the five-awsuq measure from the narrations as a nisab instead. Perishable vegetables and fresh fruit are exempt in the school's dominant position (they do not keep), a point the books record with the region-custom caveat that other schools weigh differently. 'Ushr falls due at harvest — the Qur'anic phrasing 'on the day of its harvest' (Al-An'am 6:141) is the school's anchor for timing, and the manuals derive the rates from the prophetic practice on the produce of Khaybar.",
    hanafiPosition:
      "Storable staple produce bears 'ushr at harvest — 10% when watered free of cost, 5% when watered at expense — at any quantity with no wealth-nisab; perishables are exempt in the dominant position.",
    otherViews:
      "Other schools require the five-awsuq nisab before 'ushr is due and extend liability to region-staple vegetables; the school keeps the no-nisab rule for storable grains and exempts perishables — a documented divergence in both threshold and scope.",
    practicalInfo: "Classify your crops (storable staple versus perishable) and the watering mode (rain-fed versus irrigated) at harvest time — that determines the rate. General educational information — not a personalized fatwa. Consult a qualified local mufti for your personal situation.",
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
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab al-Hajj (narration of Ibn 'Umar — the muhrim must not wear dyed or stitched garments, nor a turban or hood, nor scent)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number not asserted; cited at collection/narrator level" },
      { kind: "BOOK", ref: "Fatawa Hindiyyah, Kitab al-Hajj", translation: "Ihram prohibitions and their compensations compiled.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["What can't you do in ihram?", "Ihram prohibitions list"],
    related: ["hajj-miqat", "hajj-dam-mistakes"],
    detailedAnswer:
      "The school reads ihram as a state of intention (niyyah) clothed in the ritual: the two unstitched cloths are the established sunnah dress for men, not the essence — a man who intends ihram in unstitched garments has entered the state, though he leaves the sunnah; for women the state carries no special dress beyond ordinary modest covering, with the manuals recording that the face-veil and gloves are set aside in ihram. The prohibitions attach to the state itself: scent, stitched garments and head-covering for men, cutting hair and nails, hunting land game, and marriage contracts are all set aside — each with its own compensation level in the books, from a sheep-dam for scent or head-covering to the graded payments recorded for hair. The school's reasoning is textually anchored: the narration of Ibn 'Umar fixing the muhrim's dress and the prophetic prohibitions supply the items, and the jurists then grade violations by severity and deliberateness. Because the violations' compensation is a dam, the manuals keep a strict chapter of dam rules beside ihram's rules — the two chapters answer each other.",
    hanafiPosition:
      "Ihram is intention joined to the ritual dress — men in two unstitched cloths (sunnah, not essence), women in ordinary modest dress; the state's prohibitions (scent, stitching, head-covering for men, hair and nails, hunting, marriage) each carry graded dam compensations.",
    practicalInfo: "Pack two white ihram cloths with a belt or pins, unscented soap, and sandals leaving the upper foot exposed; clip nails and trim hair before the miqat. If a prohibition is broken, note it for a dam ruling. General educational information — not a personalized fatwa. Consult a qualified local mufti for your personal situation.",
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
      { kind: "HADITH", ref: "Sahih al-Bukhari, Kitab al-Hajj (narration of Ibn 'Abbas — the Prophet ﷺ appointed the miqat stations by region)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number not asserted; cited at collection/narrator level" },
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-Hajj", translation: "Miqat rules and the bare crosser's dam.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Miqat locations list", "Entering Makkah without ihram"],
    related: ["hajj-ihram-rules", "hajj-dam-mistakes"],
    detailedAnswer:
      "The stations are fixed by the Prophet's ﷺ own appointment: the narration of Ibn 'Abbas lists them by region — Dhu al-Hulayfah for Madinah's people, al-Juhfah for Syria's, Qarn al-Manazil for Najd's, Yalamlam for Yemen's, and Dhat 'Irq for Iraq's — and the school treats the list as a legislated boundary, not a travel convenience. From there the manuals build the rules: whoever passes a miqat intending hajj or umrah must don ihram there; crossing bare into the Haram is a violation of the appointed limit, with a badanah (camel) dam recorded in the school's dominant transmission. For Makkans and those already inside the stations, the books set an inner boundary (adna al-hill) from which their umrah ihram is worn. The school's reasoning is the boundary's sanctity: the miqat is set by prophetic appointment, so bypassing it is not a mere delay but entering the sanctuary unlicensed — hence the compensation's gravity. Pilgrims arriving by air now cross the stations mid-flight; the books' rule transfers as it stands — ihram is worn before the line is crossed — and group guides publish the crossing timings.",
    hanafiPosition:
      "The five stations are fixed by prophetic appointment; passing one without ihram entails a badanah dam in the school's dominant view, while Makkans and those inside take ihram from an inner boundary.",
    otherViews:
      "The stations themselves are shared across the schools; the documented divergence is in internal detail — some jurists require deliberate intent (nal) before the bare crosser owes a dam and direct him back to the miqat, a nuance the school's books record alongside their own dominant rule.",
    practicalInfo: "Wear ihram at or before your route's miqat — airline crews announce the crossing point, and those flying in complete ihram before the aircraft crosses the line. General educational information — not a personalized fatwa. Consult a qualified local mufti for your personal situation.",
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
    detailedAnswer:
      "The narration-basis is the Prophet's ﷺ prohibition of a believing woman traveling a substantial journey without a mahram — transmitted with its variants in the collections, including Muslim's chapters — and the school reads it as a travel-condition for women generally, so the Hajj journey falls under it like any long route. The mahram's function is what the word denotes: the husband or unmarriageable male kin whose company secures the road.\n\nThe legal structure the school builds is careful: Hajj remains fard-once, but its immediate obligation waits on the condition — a woman without an available mahram or husband is not commanded to a journey she cannot safely make; the wajib is deferred, not dissolved, and the books carry the discussion of the woman who never gains the condition. The rationale is the condition itself — protection on the road — which is also where the contemporary discussion finds its opening: organized, secured group-travel changes the risk-structure the condition was set for, and scholars differ on drawing the conclusion; the platform records both the classical line and the modern discussion without collapsing them.\n\nThe comparative note: the Maliki school conditions the journey on trustworthy company rather than kinship — a genuinely different derivation from the same reports — while the Shafi'i texts likewise make the mahram their baseline. A woman's Hajj decision thus runs through her own scholars and her local conditions, which is precisely what the short answer's closing clause secures.",
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Hajj", translation: "Women's travel conditions.", status: "PARTIALLY_VERIFIED" },
      { kind: "HADITH", ref: "Sahih Muslim, Kitab al-Hajj (narration of Ibn 'Abbas — a woman does not travel without a mahram)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number not asserted; cited at collection/narrator level" },
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
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Hajj", translation: "Tawaf's purity condition and sa'i's rank.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Fatawa Hindiyyah, Kitab al-Hajj", translation: "Compiled tawaf and sa'i conditions.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Do I need wudu for tawaf?", "How many circuits in tawaf?"],
    related: ["hajj-ihram-rules", "hajj-wuquf-arafah"],
    detailedAnswer:
      "The school treats tawaf as salah's brother in purity: wudu is a condition of validity, not merely of excellence, and the manuals transfer salah's purity, covering and orderliness to the circuits — covering the shoulders for men, keeping the Mataf's line, and beginning and ending at the Black Stone with the Hijr included in the circle. Seven circuits are the fixed count; idtiba' and raml for men in the first three circuits of tawaf al-qudum are wajibs whose omission carries dam in the books. Sa'i follows tawaf as a distinct rite: seven shawts beginning at Safa and ending at Marwah, walked by the able, with the men's light run between the two green markers — and, in a school-specific detail, sa'i does not require wudu, purity being required for tawaf alone. The school's placement of sa'i among the wajibs (not the fara'id) matters practically: omitting sa'i is remedied by dam, while omitting a rukn such as tawaf al-ziyarah voids the hajj.",
    hanafiPosition:
      "Tawaf requires wudu and seven circuits kept in order; sa'i is seven shawts from Safa to Marwah with no wudu required — sa'i ranks among the school's wajibs, remedied by dam, not among the fara'id.",
    otherViews:
      "The schools grade the shared rites differently: some rank sa'i among the pillars rather than the wajibs, and the wudu requirement's application to breaks and doubts is read with differing strictness — the school keeps its wudu condition with documented intra-school detail.",
    practicalInfo: "Perform tawaf in wudu and renew it if broken; men uncover the right shoulder for tawaf al-qudum and jog the green-marker stretch in sa'i.",
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
      { kind: "QURAN", ref: "Al-Baqarah 2:198", translation: "…then when you pour forth from 'Arafat, remember Allah at al-Mash'ar al-Haram — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-Hajj", translation: "Wuquf's pillar status and window.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["What happens at Arafah?", "Missed Arafah what to do?"],
    related: ["hajj-tawaf-sai", "hajj-ramy-mina"],
    detailedAnswer:
      "The report 'Hajj is 'Arafah' states the rite's constitution: whoever reaches the Arafah standing has grasped hajj, and whoever misses it has lost the hajj — the school reads it as a pillar (rukn) whose omission cannot be repaired by dam or qada; the year's hajj is simply gone. Its time in the school spans from zawal of the 9th of Dhu al-Hijjah to the dawn of Eid, with the manuals weighing the night's standing into validity. Everything around the plain is graded below it: the Muzdalifah standing, the Mina nights, stoning and the farewell tawaf are wajibs — their omission carries dam, and some (like Muzdalifah's standing) are excused for the permitted leave-takers — while only the three fara'id — ihram, the Arafah wuquf, and tawaf al-ziyarah — constitute the hajj itself. The Qur'anic mention of departing 'from 'Arafat' (Al-Baqarah 2:198) anchors the rite's place in the sequence, and the manuals' reasoning is that hajj is named for the gathering at the plain — the one act that cannot be transferred in time.",
    hanafiPosition:
      "The Arafah standing is a rukn: within its window (zawal of the 9th to dawn of Eid) it constitutes the hajj, and missing it voids the pilgrimage without dam-repair.",
    practicalInfo: "Reach Arafah after zawal, keep du'a to sunset, then leave after dark for Muzdalifah; the guides combine prayers there per the school's travel rules.",
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
      { kind: "BOOK", ref: "Fatawa Hindiyyah, Kitab al-Hajj", translation: "Rami counts, order and excuse provisions.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["How many pebbles in stoning?", "Can I throw stones at night?"],
    related: ["hajj-wuquf-arafah", "hajj-dam-mistakes"],
    detailedAnswer:
      "The stoning's structure is a fixed sequence the manuals keep close: seven pebbles at the 'Aqabah pillar on the day of Eid, then seven at each of the three pillars on each of the following days — forty-nine pebbles for the one leaving after the 12th, seventy in the full stay through the 13th. The school throws pebble by pebble with takbir on each, standing if able or casting from where one stands — the books permit distance-throwing, a provision that has become load-bearing for today's crowds. Order and timing are wajib-grade: the three-pillar sequence (first, middle, 'Aqabah) is kept on the tashriq days, the daytime windows are preferred (zawal to sunset) with night-permission recorded for the excused in the school's books, and a day's postponement without excuse carries dam. The school's method balances textual fidelity with mercy: the counts and order follow the prophetic practice, while the excuse provisions (night throwing for the validly excused, distance-throwing, delegation for the unable) are the manuals' own openings.",
    hanafiPosition:
      "Seven pebbles per pillar with takbir, in order — 'Aqabah alone on Eid day, then first/middle/'Aqabah on the tashriq days; distance-throwing is permitted, night-throwing for the excused, and unexcused delay carries dam.",
    otherViews:
      "Other schools widen the timing windows — some permit the 'Aqabah stoning before zawal or at night generally — and grade the sequence's requirement differently; the school's books keep the stricter default with documented excuse provisions.",
    practicalInfo: "Collect pebbles from Muzdalifah (sunnah), keep them in a pouch, and follow your group's pillar schedule; the elderly and ill may delegate stoning per the guides.",
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
    detailedAnswer:
      "The dam institution grows from the verse's compensation-ladder — Al-Baqarah 2:196's sacrifice, else feeding, else fasting — and from the Day-of-Sacrifice narrations in which the Prophet ﷺ enumerated compensation for specific violations (Jabir's Hajj-reports carry the enumeration in Muslim's chapters). The school organizes the cases into three families: violations of the ihram's prohibitions (perfume, the man's head-covering, hair and nails), omission or delay of a Hajj or Umrah wajib, and crossing the miqat without ihram.\n\nThe scaling the short answer names is the books' grading discipline: the ihram-violation family takes a sheep in the school's grading, with deliberate conduct weighed against forgetfulness in the advanced discussions; the wajib-omission and delay cases take a sheep, with the verse's fasting-feeding-sacrifice options governing the tawaf-related compensations; the miqat-crossing (jadm) takes a sheep. The animal itself must meet the qurbani standards and is slaughtered within the Haram's bounds, its meat going to the Haram's poor in the school's preference.\n\nTwo cautions the guides repeat: the categories overlap in real journeys — an ihram-violation inside a missed-wajib case is assessed as the books treat compounds — and the schools grade some edges differently: which delays trigger what, and whether forgetfulness excuses. That is why the practical line sends the case to the journey's mufti: dam is precise worship-compensation, and precision is its point.",
    practicalInfo: "Which dam applies to your case: consult the Hajj guides or a mufti during the journey.",
    sources: [
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Hajj", translation: "Dam categories.", status: "PARTIALLY_VERIFIED" },
      { kind: "QURAN", ref: "Al-Baqarah 2:196", translation: "…then whatever is easy of sacrifice; and whoever cannot, fasting three days in the hajj and seven when returned — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "HADITH", ref: "Sahih Muslim, Kitab al-Hajj (narration of Jabir — the Prophet's ﷺ Day-of-Sacrifice statements, including compensation for ihram violations)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number not asserted; cited at collection/narrator level" },
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
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Hajj", translation: "Proxy hajj conditions and limits.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Hajj for deceased parents", "Proxy Hajj rules"],
    related: ["hajj-wuquf-arafah"],
    detailedAnswer:
      "The school validates hajj by proxy within tight conditions, reasoning from hajj's nature as a bodily obligation discharged by the body it belongs to: a living, able person's hajj cannot be outsourced, but a person who died without the fard hajj, or who is permanently incapable of travelling, can have it discharged on his behalf. The manuals then police the proxy: he must have performed his own fard hajj first — his own obligation takes precedence over another's; the expenses come from the principal's funds or estate; the proxy intends ihram by the principal's name; and each rite is performed for the principal throughout. Delegation has its flip side for temporary incapacity: one who is ill but expected to recover waits and performs himself rather than sending a proxy. The school's books treat this as a recognized transfer of the obligation's performance, not a substitution of its reward — which is why the proxy's sincerity matters and why the manuals warn against treating badal as a convenience purchase.",
    hanafiPosition:
      "Hajj badal is valid for the deceased who left the fard undone and for the permanently incapable — performed from their funds, by a proxy who has already done his own fard hajj, with intention by the principal's name.",
    otherViews:
      "Jurists tighten the living-principal case differently — some restrict it strictly to permanent incapacity with no hope of travel — and scholars differ on details such as whether a woman may serve as proxy (the school permits it) and how the proxy's own duties interlock; all are documented positions within the schools.",
    practicalInfo: "Confirm the principal's situation (deceased or permanently incapable), appoint a trustworthy proxy who has performed his own fard hajj, and fund the trip from the principal's means. General educational information — not a personalized fatwa. Consult a qualified local mufti for your personal situation.",
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
      { kind: "QURAN", ref: "Al-Baqarah 2:196", translation: "And complete the hajj and umrah for Allah — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-Hajj", translation: "The rites' anatomy and the three hajj forms.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Hajj vs umrah", "What does umrah include?"],
    related: ["hajj-tawaf-sai", "hajj-wuquf-arafah"],
    detailedAnswer:
      "The school's anatomy of the two rites runs on its pillar/wajib ledger. Umrah is the shorter body: its fara'id are ihram and tawaf, with sa'i and the shaving (halq/qasr) as wajibs — performable in any month of the year. Hajj extends the body in time and place: to the three fara'id — ihram, the Arafah standing, and tawaf al-ziyarah — the school adds the wajibs of sa'i, the Muzdalifah standing, the Mina nights, stoning, and the farewell tawaf, bound to the appointed months (Shawwal, Dhu al-Qa'dah, and Dhu al-Hijjah's first ten). The Qur'anic command joins them — 'complete the hajj and umrah for Allah' (Al-Baqarah 2:196) — and the books derive the months-rule from the verse's association of the rites with the appointed months. From this anatomy the school derives the three hajj forms: ifrad (hajj alone), qiran (joining both under one ihram), and tamattu' (an umrah in the months followed by a hajj the same season) — the last carrying a badanah dam in the school's books for the joiner, the tamattu' dam the manuals discuss at length.",
    hanafiPosition:
      "Umrah is ihram + tawaf (fara'id) with sa'i and halq as wajibs, any time of year; Hajj is ihram + the Arafah wuquf + tawaf al-ziyarah (fara'id) with the remaining rites as wajibs, within the appointed months — and tamattu' joins carry a dam in the school.",
    otherViews:
      "The schools grade the shared rites differently — sa'i is a pillar in some schools and a wajib in the school's ledger — and they weigh the three hajj forms' preference differently; each school's compensations follow its own grading.",
    practicalInfo: "Check the visa windows (umrah year-round, hajj season) and agree the hajj form (ifrad, qiran, tamattu') with your group's scholars before departure. General educational information — not a personalized fatwa. Consult a qualified local mufti for your personal situation.",
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
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-Hajj", translation: "Farewell tawaf's wajib status and scope.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Farewell tawaf required?", "Tawaf wada for women"],
    related: ["hajj-tawaf-sai"],
    detailedAnswer:
      "The school counts the farewell tawaf among the hajj's wajibs — not among its pillars — reasoning from the Prophet's ﷺ final command that the last covenant with the House be a tawaf: the books read the narrations of his ﷺ departure instruction that the people end their visit with the House's circumambulation. Its scope follows the visitor: the obligation falls on non-residents leaving Makkah's sanctuary, while the Makkan resident stands outside it in the mu'tamad's line. Its omission is remedied by dam, and the books carve out the excused: a woman overtaken by menses or post-natal bleeding who leaves without delay departs without it and without dam, while deliberate delay for her own scheduling draws the discussion back toward liability. A tawaf performed earlier is not the farewell tawaf unless it stands as the last act before departure — the school ties the wajib to its position at the exit, which is why end-of-Hajj travel schedules are built around it.",
    hanafiPosition:
      "The farewell tawaf is wajib on non-residents leaving the sanctuary, stands as the last tawaf before departure, and its omission carries dam — with the menstruating woman leaving without delay excused.",
    otherViews:
      "The schools broadly share its wajib status; the documented nuances are the excused woman's case and the boundary of 'leaving' (Mina stays, mid-journey returns) — where the books weigh whether a later tawaf still counts as the farewell.",
    practicalInfo: "Schedule the farewell tawaf close to departure, after your final Mina rites, with no rites left after it.",
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
      { kind: "QURAN", ref: "Al-Jumu'ah 62:9", translation: "When the call is made for prayer on the day of Jumu'ah, hasten to the remembrance of Allah and leave off trade — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Radd al-Muhtar (Ibn Abidin), Kitab al-Jumu'ah", translation: "The settlement, authority and forty conditions.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Is Jummah compulsory for women?", "Do travellers pray Jumu'ah?"],
    related: ["jumuah-rakahs", "taharah-ghusl-jumuah"],
    detailedAnswer:
      "The school builds jumu'ah's obligation on the Qur'anic call (Al-Jumu'ah 62:9) and fixes its subjects precisely: the free, adult, sane, resident man able to attend — women, travellers, the ill and the validly-excused stand outside the obligation and pray dhuhr. The school then adds two structural conditions that are signature to it. Settlement: jumu'ah belongs to a place of settlement (misr), not a scattered camp. Authority: in the mu'tamad's line the prayer requires the ruler or his appointee's conduct or permission — the school ties the town's congregational prayer to public order, since it gathers the settlement and suspends trade by law. To these the manuals add the well-known numerical benchmark: that the settlement hold forty fully-eligible worshippers for jumu'ah's validity, a condition that circulates through the school's works as its classical measure. These conditions are why the school's jurists wrote at length on small-town jumu'ahs and on multiple mosques in one town — questions the other schools answer by population and capacity instead.",
    hanafiPosition:
      "Jumu'ah is fard 'ayn on resident adult men able to attend, in a settlement, under the authority line the mu'tamad records (the ruler or his permission), with the school's classical forty-eligible benchmark — the excused pray dhuhr.",
    otherViews:
      "The other schools condition jumu'ah on settlement size and mosque capacity rather than the forty-count, and do not require the ruler's permission — a documented divergence in the conditions of validity, not in the prayer's obligation itself.",
    practicalInfo: "Arrange work and study around the jumu'ah window; if your locality's jumu'ah situation is unusual (multiple mosques, a small settlement), ask a mufti about the conditions. General educational information — not a personalized fatwa. Consult a qualified local mufti for your personal situation.",
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
      { kind: "QURAN", ref: "Al-Jumu'ah 62:10", translation: "And when the prayer is concluded, disperse in the land and seek Allah's bounty — paraphrased translation", status: "VERIFIED", note: "paraphrased translation" },
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-Jumu'ah", translation: "The jumu'ah prayer structure and its sunnahs.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Jumuah 2 rakats?", "Sunnah before and after Jumu'ah"],
    related: ["jumuah-obligation"],
    detailedAnswer:
      "The two rak'ahs after the khutbah are the prayer's fard — a fixed form carried by the community's continuous practice from the Prophet's ﷺ own jumu'ahs, replacing dhuhr's four for those in whose case jumu'ah is valid. The school's reasoning for the replacement is the prayer's own nature: jumu'ah does not join dhuhr but stands over it for its subjects, which is why the excused (who fall back to dhuhr) pray four. Around the fard the school's practice sets the sunnah lattice: the first adhan at the time's entry, the second at the minbar, the iqamah at the rows, four rak'ahs of sunnah before, and four after per the school's transmission (Abu Hanifa's line; the sahibayn transmit two, and the later books weigh the counts) — a lattice the manuals justify through the general sunnah-salah architecture around Friday's congregational peak. Recitation is aloud in both rak'ahs, as in dhuhr. The Qur'anic sequence — the call, then 'when the prayer is concluded, disperse in the land' (Al-Jumu'ah 62:10) — underwrites the khutbah-then-prayer-then-dispersal order the school keeps.",
    hanafiPosition:
      "Two fard rak'ahs after the khutbah (replacing dhuhr's four for the validly-attending), with the school's sunnah lattice around them — four before and four after in its transmission.",
    otherViews:
      "The fard's count is agreed; the surrounding sunnahs differ by transmission — two after (the sahibayn's line and other schools' practice) versus four (Abu Hanifa's), with later books recording combined counts — a documented intra-school detail.",
    practicalInfo: "Arrive before the first adhan, pray the pre-jumu'ah sunnah, and keep the four-after rak'ahs before leaving or as zuhr-time practice per your imam's guidance.",
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
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-Jumu'ah", translation: "Khutbah conditions in the school.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Khutbah before or after prayer?", "Is listening to khutbah wajib?"],
    related: ["jumuah-obligation"],
    detailedAnswer:
      "The school's khutbah doctrine treats the khutbah as a dhuhr of speech standing in the place of two rak'ahs: because it replaces prayer, its disciplines mirror salah's — the khatib's purity and covering, and the attendees' silence — and the manuals derive the details from the reported practice of the Prophet's ﷺ jumu'ahs. The validity minimum is deliberately low: the school requires a dhikr comprising hamd (praise of Allah), salat upon the Prophet ﷺ, ta'widh (seeking refuge), and a Qur'anic verse, reaching the majority body of attendees — delivered by the khatib from the minbar after the time has entered, in two sittings separated by a pause, without a long break between them. The Arabic requirement attaches to that minimum (the mu'tamad holds the dhikr-elements in Arabic), while extended exhortation in other languages rides beyond it — an allowance later Hanafi practice put to wide use. The attendees' silence is wajib-grade in the mu'tamad's line, and the shorter-khutbah sunnah tempers length rather than content.",
    hanafiPosition:
      "A valid khutbah is a dhikr of hamd, salawat, ta'widh and a verse reaching the majority of attendees, delivered from the minbar after the time's entry, in Arabic at the minimum — with the attendees' silence wajib-grade.",
    otherViews:
      "The minimum-content lists differ by school (some require tashahhud or longer elements), and Arabic's role is a documented divergence — schools and contemporary boards weigh translation-based khutbahs differently, the school keeping Arabic for its validity minimum while permitting exhortation beyond it.",
    practicalInfo: "Arrive before the first adhan and keep silence from the khutbah's start; khutbah lengths vary by congregation.",
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
      { kind: "QURAN", ref: "Al-Hajj 22:28", translation: "…and mention the name of Allah on appointed days over the beast of cattle — paraphrased translation", status: "VERIFIED", note: "paraphrased translation; the appointed days read as the tashriq days" },
      { kind: "BOOK", ref: "Mukhtasar al-Quduri, Kitab al-'Idayn", translation: "The Eid takbir windows.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Eid takbir after salah timing", "Takbir tashreeq days"],
    related: ["eid-prayer-rakahs"],
    detailedAnswer:
      "The school's takbir doctrine distinguishes the Eid prayer's extra takbirs from the takbir-window around the days. The prayer's six extra takbirs belong to the salah itself (three in each rak'ah, at the points the school fixes). Around them, the school sets the 'Id al-Adha window from Maghrib of 'Arafah's eve to the 'Asr of the 13th of Dhu al-Hijjah, with takbir after every fard prayer in that span — the tashriq-days takbir — while 'Id al-Fitr's window opens at the eve's Maghrib in the later books' line (or the day's Fajr) and closes at the Eid's 'Asr. The school's rule of murur (passing) keeps latecomers covered: one who misses the takbirs with the early prayers in the window passes them along until the window's last prayer. The takbir is said aloud (zahr) in the school's transmission, and its grade is tiered: wajib on the muhsar (the one detained from completing hajj) in the mu'tamad's line, sunnah for the rest. The Qur'anic 'appointed days' (Al-Hajj 22:28) anchors the tashriq days the books fill with the takbir practice.",
    hanafiPosition:
      "Takbir after every fard prayer: for 'Id al-Adha from Maghrib of 'Arafah's eve to 'Asr of the 13th, for 'Id al-Fitr across the Eid day (its eve in the later books) — aloud, passed forward when missed, wajib on the muhsar and sunnah otherwise.",
    otherViews:
      "The schools open the windows differently (some begin with Fajr of 'Arafah day) and grade the after-prayer takbir's obligation differently; the tashriq-day span itself is shared ground from the narrations.",
    practicalInfo: "Recite the takbir aloud after each fard prayer in the window, including with the Eid prayer itself; the well-known formula fills the days' praise.",
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
    detailedAnswer:
      "The school's wajib-grading stands on the musalla narration — 'whoever has capacity and does not sacrifice, let him not approach our musalla' (transmitted from Ibn 'Umar in the collections) — read alongside the command-reports as binding the able: a command to the capable is wujub, not mere encouragement. The Shafi'i school reads the same reports as strong encouragement, grading the udhiyah sunnah mu'akkadah — a command-mode disagreement, honestly documented, with neither side denying the other's piety.\n\nThe school's conditions run: Islam, freedom, adulthood, residence — the traveler is exempt in the school's books — and nisab, the zakah-silver threshold held at the time of 'Id. The timing runs from the Eid prayer's completion through the tashriq days; the animal standards are the books': a goat or sheep of the first year, a cow or buffalo of the second shared by up to seven, a camel of the fifth. Because the sacrifice is worship, the school requires the Islamic slaughter by a Muslim, and the books guide its division between the household, relatives and the poor.\n\nThe school adds a devotional discipline from the narration of Umm Salamah (in Muslim's sacrifice-chapters): once the ten of Dhu al-Hijjah begin, the one intending sacrifice leaves hair and nails until the slaughter. The package shows the school's reading of the udhiyah as worship with a wealth-condition — the nisab borrowed from zakah, and the wajib binding the able person as an obligation of season rather than custom.",
    sources: [
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-Dhaba'ih", translation: "The wujub of udhiyah in the school.", status: "PARTIALLY_VERIFIED" },
      { kind: "HADITH", ref: "Sunan Ibn Majah, Kitab al-Adahi (narration of Ibn 'Umar — 'whoever has capacity and does not sacrifice, let him not approach our musalla')", translation: "paraphrased translation", status: "UNVERIFIED", note: "number not asserted; cited at collection/narrator level" },
      { kind: "HADITH", ref: "Sahih Muslim, Kitab al-Adahi (narration of Umm Salamah — the sacrificer refrains from hair and nails once the ten of Dhu al-Hijjah begin)", translation: "paraphrased translation", status: "UNVERIFIED", note: "number not asserted; cited at collection/narrator level" },
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
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani), Kitab al-Jumu'ah", translation: "The excusals and the dhuhr substitution.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["I missed jummah what do I pray?", "Zuhr instead of jumuah"],
    related: ["jumuah-obligation"],
    detailedAnswer:
      "The school's excusal list is written to protect both the worshipper and the congregation: women (whose dhuhr at home is the standing rule), the traveller on a valid journey, the ill and those tending them, the one in fear for person or property, and the worker whose absence at that hour harms a pressing public need. The school's sharpest edge is the second half of the rule: for the excused, jumu'ah is not valid even if he attends — the excused man prays dhuhr's four even standing in the jumu'ah row, because the prayer's validity is tied to the attender's own obligation. The manuals' reasoning is the prayer's substitutive nature: jumu'ah stands over dhuhr only for those it addresses as an obligation; the excused were never addressed, so their dhuhr never leaves them. Rain, mud and similar hardships the books discuss under the fear-and-need categories with the town's tolerance in view — a mercy-rule the manuals weigh without dissolving the fard 'ayn for the able resident.",
    hanafiPosition:
      "The excused — women, travellers, the ill and their caretakers, the fearful, and pressing public workers — pray dhuhr's four rak'ahs; jumu'ah is not valid for them even if attended.",
    otherViews:
      "Some schools validate jumu'ah for categories the school excludes — a traveller joining the congregation, for instance, counts it valid in Shafi'i fiqh while the school sends him to dhuhr — a documented divergence in whose attendance counts.",
    practicalInfo: "If you miss jumu'ah with a valid excuse, pray dhuhr's four rak'ahs; workplace arrangements fall under the public-need discussion. General educational information — not a personalized fatwa. Consult a qualified local mufti for your personal situation.",
  },
];
