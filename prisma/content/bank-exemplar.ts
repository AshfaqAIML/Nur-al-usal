import type { BankQuestion } from "./types";

/**
 * EXEMPLAR cluster — TAQLID (following a madhhab).
 * This file defines the exact quality bar for all content batches:
 * every question carries real citations, variants, related links and a cluster.
 */
export const exemplarQuestions: BankQuestion[] = [
  {
    slug: "taqlid-what-is",
    question: "What is taqlid?",
    questionUr: "تقلید کیا ہے؟",
    questionAr: "ما هو التقليد؟",
    category: "taqlid-madhhab",
    subcategory: "Definition",
    type: "TERMINOLOGY",
    difficulty: "BEGINNER",
    cluster: "taqlid",
    intent: "informational",
    shortAnswer:
      "Taqlid means accepting the ruling of a qualified scholar without independently re-deriving it from the primary evidence — the ordinary way non-specialists practise any field of knowledge.",
    shortAnswerUr: "تقلید سے مراد کسی اہلِ عالم کے حکم کو بغیر اپنی طرف سے اصل ادلّہ سے دوبارہ اخذ کیے قبول کرنا ہے — یہی غیر متخصص لوگوں کا علم کے ہر شعبے میں عمل کرنے کا عام طریقہ ہے۔",
    shortAnswerAr: "التقليد هو قبول حكم العالم المتأهل دون إعادة اشتقاقه بنفسه من الأدلة الأصلية — وهو الطريق المعتاد الذي يسلكه غير المتخصصين في كل فرع من فروع العلم.",
    detailedAnswer:
      "Linguistically taqlid comes from 'taklid' — placing a collar (qiladah) around the neck, i.e. accepting someone's authority. Technically, Hanafi usul works define it as accepting the statement of another without knowing its evidence (hujjah). This is the norm in medicine, engineering and every technical discipline: the layman asks the expert. Islamic law treats ordinary believers the same way — they follow those who devoted their lives to the Qur'an, Sunnah and the inherited practice of the ummah. The Qur'an commands: 'Ask the people of remembrance/knowledge if you do not know' (Al-Nahl 16:43), and the Sunnah records that when a Companion was injured he asked others what to do about his ghusl, showing that laymen follow qualified judgement.",
    hanafiPosition:
      "Taqlid of the qualified jurist (mufti/mujtahid) is obligatory (wajib) upon the non-scholar for practical compliance, while taqlid is forbidden to the qualified scholar acting in his scholarly capacity.",
    sources: [
      { kind: "QURAN", ref: "Al-Nahl 16:43", quote: "فَاسْأَلُوا أَهْلَ الذِّكْرِ إِن كُنتُمْ لَا تَعْلَمُونَ", translation: "So ask the people of remembrance if you do not know.", status: "VERIFIED" },
      { kind: "BOOK", ref: "Al-Hidayah, Kitab al-Tahlil (usul discussion)", translation: "Al-Marghinani discusses that following qualified scholarship is the path of the non-mujtahid.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["What does taqlid mean?", "Define taqlid in simple terms", "Is taqlid mentioned in the Qur'an?"],
    related: ["taqlid-blind-following", "taqlid-necessary", "madhhab-what-is"],
  },
  {
    slug: "taqlid-blind-following",
    question: "Is taqlid blind following?",
    questionUr: "کیا تقلید اندھی پیروی ہے؟",
    questionAr: "هل التقليد اتباع أعمى؟",
    category: "taqlid-madhhab",
    subcategory: "Definition",
    type: "MISCONCEPTION",
    difficulty: "INTERMEDIATE",
    cluster: "taqlid",
    intent: "misconception",
    isMisconception: true,
    shortAnswer:
      "No — taqlid is not 'blind' because it is restricted to qualified, trustworthy scholars whose rulings cite evidence, and the layman remains free to ask the reasoning behind any ruling.",
    shortAnswerUr: "نہیں — تقلید اندھی پیروی نہیں کیونکہ یہ صرف اہلِ علم، معتبر عالموں تک محدود ہے جن کے احکام کے ساتھ دلائل بھی ہوتے ہیں، اور عام آدمی کسی بھی حکم کے استدلال کو پوچھنے کے لیے آزاد رہتا ہے۔",
    shortAnswerAr: "لا — التقليد ليس اتباعًا أعمى، لأنه مقصور على العلماء المتأهلين الموثوقين الذين يستندون في أحكامهم إلى الأدلة، ويظل العامي حرًّا في أن يستفسر عن الاستدلال لأي حكم.",
    detailedAnswer:
      "The charge of 'blind following' assumes taqlid means accepting whatever anyone says. Classical Hanafi usul restricts taqlid: (1) it must be of a qualified scholar meeting documented conditions (knowledge of the Qur'an, Sunnah, previous fiqh, usul); (2) the layman may request the evidence; (3) if the layman learns the evidence, following remains valid but he is not required to re-derive it. Imam al-Sarakhsi, in the introduction to his Usul, explains the division between the mujtahid who derives and the muqallid who follows — a division of labour, not blindness. The same objection would condemn patients who 'blindly follow' doctors; knowledge is accessed through qualified transmitters.",
    hanafiPosition:
      "Taqlid is evidence-based delegated scholarship, not blindness: the layman follows a qualified scholar and may ask for the basis of the ruling.",
    commonObjection:
      "\"Taqlid means ignoring Hadith and following men blindly.\"",
    scholarlyResponse:
      "Hanafi fiqh is itself a hadith-based methodology — Imam Abu Hanifa was a tabi'i-era hadith student. The taqlid debate is about WHO evaluates hadith (the trained jurist or the layman), not whether hadith matters.",
    sources: [
      { kind: "BOOK", ref: "Usul al-Sarakhsi, introduction", translation: "Al-Sarakhsi frames the mujtahid/muqallid division as the machinery by which the ummah practises law.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Sharh Ma'ani al-Athar (al-Tahawi)", translation: "Al-Tahawi demonstrates across dozens of disputed narrations that following a jurist's reconciliation is not abandonment of hadith.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Does taqlid mean blind obedience?", "Is following a madhhab blind following?", "Why is taqlid not blind faith?"],
    related: ["taqlid-what-is", "taqlid-hadith-objection", "madhhab-why-differ-in-salah"],
  },
  {
    slug: "taqlid-necessary",
    question: "Is following a madhhab necessary?",
    questionUr: "کیا کسی مذہب پر عمل کرنا ضروری ہے؟",
    questionAr: "هل اتباع مذهب معين ضروري؟",
    category: "taqlid-madhhab",
    subcategory: "Obligation",
    type: "METHODOLOGY",
    difficulty: "INTERMEDIATE",
    cluster: "taqlid",
    intent: "fiqh",
    isDisputed: true,
    disputedNote:
      "Whether taqlid shakhsi (of one specific madhhab) is required, or taqlid ghayr mutlaq (of qualified scholars generally) suffices — a documented intra-Sunni disagreement.",
    shortAnswer:
      "Following qualified scholarship is obligatory for every non-scholar; binding oneself to one madhhab (taqlid shakhsi) is the disciplined path most Hanafi scholars recommend, though some later scholars allowed principled switching in specific rulings.",
    shortAnswerUr: "ہر غیر عالم پر اہلِ علم کی پیروی واجب ہے؛ کسی ایک مذہب سے وابستہ رہنا (تقلیدِ شخصی) وہ منظم طریقہ ہے جس کی اکثر حنفی علما توصیه کرتے ہیں، اگرچہ بعض متاخر علما نے مخصوص مسائل میں اصول کے مطابق مذہب کی تبدیلی کی اجازت دی ہے۔",
    shortAnswerAr: "اتباع أهل العلم واجب على كل غير العالِم؛ وارتباط المرء بمذهب واحد (التقليد الشخصي) هو الطريق المنضبط الذي توصي به أكثر فقهاء الحنفية، مع أن بعض المتأخرين أجازوا الانتقال المبني على قاعدة في أحكام معينة.",
    detailedAnswer:
      "Every Muslim either practises fiqh by personal derivation or by following someone. Personal derivation (ijtihad) requires mastery of Arabic, usul, hundreds of thousands of narrations and the disagreements of earlier generations — the classical books state the conditions in detail. For everyone else the options are: follow a qualified scholar (taqlid), or leave the commands of Allah unpractised. Hanafi works from al-Quduri's era onward treat layman-compliance as operating through taqlid. The narrower question — must one stick to a SINGLE madhhab in all rulings? — is where scholars differ, and the platform records that difference rather than collapsing it.",
    hanafiPosition:
      "The dominant South Asian Hanafi position holds taqlid shakhsi is required to prevent 'shopping' rulings; Middle Eastern Hanafi works often speak more loosely of following qualified scholarship.",
    otherViews:
      "Ahl-e-Hadith scholars argue direct compliance with a hadith is available to every Muslim; Hanafi scholars respond that evaluating hadith against the whole corpus is precisely the expertise laymen lack.",
    sources: [
      { kind: "BOOK", ref: "Al-Fiqh al-Akbar (attributed to Imam Abu Hanifa)", translation: "The creed ends with guidance to refer disputed matters to the knowledge of the juristic tradition.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Fatawa Razvia — discussion of taqlid", translation: "Ahmad Raza Khan treats taqlid shakhsi as the safeguard of layman practice.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Do I have to follow a madhhab?", "Can I be Muslim without a madhhab?", "Is madhhab obligatory in Islam?"],
    related: ["taqlid-what-is", "taqlid-blind-following", "madhhab-sect-or-school"],
  },
  {
    slug: "madhhab-what-is",
    question: "What is the Hanafi madhhab?",
    questionUr: "حنفی مذہب کیا ہے؟",
    questionAr: "ما هو المذهب الحنفي؟",
    category: "taqlid-madhhab",
    subcategory: "Definition",
    type: "BEGINNER",
    difficulty: "BEGINNER",
    cluster: "madhhab",
    intent: "informational",
    shortAnswer:
      "The Hanafi madhhab is the oldest of the four Sunni schools of law: a codified methodology of Qur'an, Sunnah, ijma' and qiyas transmitted from Imam Abu Hanifa (d. 150 AH) through his students Abu Yusuf and al-Shaybani, followed today by the largest share of Sunni Muslims.",
    shortAnswerUr: "حنفی مذہب چاروں اہلِ سنت فقہی مذاهب میں سب سے قدیم ہے: قرآن، سنت، اجماع اور قیاس پر مبنی ایک مدوّن منہج جو امام ابو حنیفہ (متوفی ۱۵۰ھ) سے ان کے شاگردوں ابو یوسف اور شیبانی کے ذریعے منتقل ہوا، اور آج اہلِ سنت مسلمانوں کی سب سے بڑی تعداد اسی پر عمل پیرا ہے۔",
    shortAnswerAr: "المذهب الحنفي هو أقدم المذاهب الفقهية الأربعة عند أهل السنة: منهج مدوَّن في القرآن والسنة والإجماع والقياس انتقل من الإمام أبي حنيفة (ت 150هـ) عن طريق تلميذي أبي يوسف والشيباني، وعليه اليوم أكبر شريحة من مسلمي أهل السنة.",
    detailedAnswer:
      "A madhhab is not a sect but a scholarly tradition of reading the sources. The Hanafi school descends from the juristic tradition of Kufa (linked to 'Abdullah ibn Mas'ud and 'Ali ibn Abi Talib), which Imam Abu Hanifa systematized through rigorous qiyas (analogical reasoning) and istihsan (juristic preference). His two great students, Imam Abu Yusuf (first Chief Qadi of the Abbasids) and Imam Muhammad al-Shaybani (codifier of the Zahir al-Riwaya corpus), transmitted it in writing. The school became the law of the Abbasid, Ottoman and Mughal courts and dominates Turkey, the Balkans, Central Asia, Afghanistan, Pakistan, India and Bangladesh, with large communities across the Arab world.",
    hanafiPosition:
      "The school is defined by its documented usul hierarchy and its transmitted corpus (Zahir al-Riwaya), not by personal opinion of later followers.",
    sources: [
      { kind: "BOOK", ref: "Zahir al-Riwaya (al-Shaybani), six books", translation: "The written corpus through which the school's early positions are known.", status: "VERIFIED" },
      { kind: "BOOK", ref: "Al-Hidayah (al-Marghinani)", translation: "The school's most studied evidence-carrying manual, basis of legal education for a millennium.", status: "VERIFIED" },
    ],
    variants: ["What is Hanafi fiqh?", "Which is the Hanafi school?", "What does Hanafi mean?"],
    related: ["hist-abu-hanifa-who", "madhhab-sect-or-school", "madhhab-why-follow-millions"],
  },
  {
    slug: "madhhab-sect-or-school",
    question: "Is Hanafi a sect or a school of fiqh?",
    questionUr: "کیا حنفی ایک فرقہ ہے یا فقہ کا مکتبِ فکر؟",
    questionAr: "هل الحنفية فرقة أم مذهب فقهي؟",
    category: "taqlid-madhhab",
    subcategory: "Definition",
    type: "MISCONCEPTION",
    difficulty: "BEGINNER",
    cluster: "madhhab",
    intent: "misconception",
    isMisconception: true,
    shortAnswer:
      "A school of fiqh (law), not a sect: Hanafis share the Sunni creed, pray behind non-Hanafi imams, and the four schools intermarried legally for over a millennium.",
    shortAnswerUr: "یہ فقہ (قانون) کا مکتبِ فکر ہے، فرقہ نہیں: حنفی اہلِ سنت کے عقیدے میں شریک ہیں، غیر حنفی اماموں کے پیچھے نماز پڑھتے ہیں، اور چاروں مکاتبِ فکر کے درمیان ایک ہزار سال سے زیادہ عرصے تک شادی بیاہ شرعاً روا رہا ہے۔",
    shortAnswerAr: "إنه مذهب فقهي (قانوني)، لا فرقة: فالحنفية يشتركون في عقيدة أهل السنة، ويصلّون خلف أئمة من غير مذهبهم، وتعاقبت الأنكاح بين المذاهب الأربعة شرعًا لأكثر من ألف عام.",
    detailedAnswer:
      "Sects divide on creed; madhhabs differ on legal derivation within one creed. Al-'Aqidah al-Tahawiyyah — written by the Hanafi Imam al-Tahawi — is the creed most widely accepted across all four Sunni schools, showing their shared theology. Classical Hanafi fiqh explicitly permits prayer behind a Shafi'i imam and vice versa, and scholars across schools cite one another. Differences like hand-placement in salah are legal-interpretive, not creedal.",
    commonObjection: "\"Hanafi is a separate religion/sect founded by a man.\"",
    scholarlyResponse:
      "The eponym does not equal authorship: the school attributes its rulings to the Qur'an, Sunnah and transmitted practice, with Abu Hanifa as its systematizer — the same way 'Shafi'i' refers to methodology, not worship of a man.",
    sources: [
      { kind: "BOOK", ref: "Al-'Aqidah al-Tahawiyyah", translation: "Shared Sunni creed authored by a Hanafi imam, accepted across the four schools.", status: "VERIFIED" },
      { kind: "BOOK", ref: "Bada'i' al-Sana'i' (al-Kasani), Kitab al-Salah", translation: "Discussion of following different imams in congregational prayer.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Are Hanafis a sect?", "Is Hanafi different from Sunni?", "Do Hanafis follow a different Islam?"],
    related: ["madhhab-what-is", "madhhab-pray-behind-other-imam"],
  },
  {
    slug: "taqlid-hadith-objection",
    question: "Why should Muslims follow scholars when Hadith exists?",
    questionUr: "جب حدیث موجود ہے تو مسلمانوں کو علما کی پیروی کی ضرورت کیوں ہے؟",
    questionAr: "لماذا يتبع المسلمون العلماء والأحاديث موجودة؟",
    category: "taqlid-madhhab",
    subcategory: "Objections",
    type: "OBJECTION",
    difficulty: "ADVANCED",
    cluster: "taqlid",
    intent: "misconception",
    isMisconception: true,
    shortAnswer:
      "Because hadith must be authenticated, compared with other hadith, checked for abrogation, reconciled with established practice, and matched to conditions — expertise the Prophet ﷺ commanded the ummah to seek from its scholars.",
    shortAnswerUr: "اس لیے کہ حدیث کی تخریج و تصحیح، دوسری احادیث سے موازنہ، ناسخ و منسوخ کی جانچ، مستقر عمل سے تطبیق اور شرائط سے مطابقت کی مہارت درکار ہے — اور نبی کریم ﷺ نے امت کو حکم دیا کہ یہ مہارت اپنے علما سے حاصل کرے۔",
    shortAnswerAr: "لأن الحديث يلزم تحقيق سنده، ومقارنته بغيره، وفحصه من وجه النسخ، ومواءمته مع العمل المستقر، وملاءمته للشروط — وهي خبرة أمر النبي ﷺ الأمة أن يتخذها من علمائها.",
    detailedAnswer:
      "The objection assumes hadith reach us raw. In reality each narration has a chain (isnad) to evaluate, variants to compare, possible abrogation to weigh, and specifications/qualifications that other narrations add. Hanafi works like Sharh Ma'ani al-Athar walk through exactly this process on disputed narrations. The Prophet ﷺ warned that 'whoever interprets the Qur'an by his own opinion...' (recorded with variant chains in the collections) — the safe path is trained scholarship. Laymen do not self-perform surgery from textbooks; similarly, hadith application is a discipline.",
    commonObjection: "\"The Qur'an and Hadith are enough; scholars are intermediaries.\"",
    scholarlyResponse:
      "No one claims scholars add to revelation. The claim is that correct UNDERSTANDING of revelation requires trained competence — exactly what 'Ask the people of knowledge' (16:43) establishes.",
    sources: [
      { kind: "QURAN", ref: "Al-Nahl 16:43", translation: "So ask the people of remembrance if you do not know.", status: "VERIFIED" },
      { kind: "BOOK", ref: "Sharh Ma'ani al-Athar (al-Tahawi)", translation: "Model hadith-reconciliation across the schools' disputed narrations.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Do we need scholars if we have hadith?", "Can't I just read hadith myself?", "Why follow jurists instead of Bukhari directly?"],
    related: ["taqlid-blind-following", "ijtihad-ordinary-muslim", "usul-hanafi-principles"],
  },
  {
    slug: "ijtihad-ordinary-muslim",
    question: "Can an ordinary Muslim perform ijtihad?",
    questionUr: "کیا ایک عام مسلمان اجتہاد کر سکتا ہے؟",
    questionAr: "هل يستطيع المسلم العادي أن يجتهد؟",
    category: "taqlid-madhhab",
    subcategory: "Methodology",
    type: "METHODOLOGY",
    difficulty: "INTERMEDIATE",
    cluster: "taqlid",
    intent: "fiqh",
    shortAnswer:
      "Ijtihad requires documented qualifications — mastery of Arabic, the Qur'an, Sunnah with its chains, usul and prior madhhab discourse — so the classical books restrict the title of mujtahid and direct others to follow.",
    shortAnswerUr: "اجتہاد کے لیے مستند شرائط درکار ہیں — عربی، قرآن، اسانید کے ساتھ سنت، اصولِ فقہ اور سابق مذہبی خطاب پر گہری دسترس — اسی لیے متقدمہ کتب مجتہد کا لقب ان شرائط تک محدود رکھتی ہیں اور دوسروں کو تقلید کی ہدایت دیتی ہیں۔",
    shortAnswerAr: "الاجتهاد يشترط مؤهلات موثقة — إتقان العربية، والقرآن، والسنة بأسانيدها، والأصول، والخطاب المذهبي السابق — ولذلك قصرت الكتب المتقدمة لقب المجتهد على من تجتمع فيه، ووجهت غيره إلى التقليد.",
    detailedAnswer:
      "Usul manuals define tiers: mujtahid mutlaq (like the four imams), mujtahid within a madhhab, mujtahid in single issues, down to the mufti and the layman. Al-Hidayah's discussion of who may derive rulings, and al-Sarakhsi's Usul, catalogue the qualifications. The point is not elitism but safety: derivative error in worship and contracts carries real consequences, so the tradition channels it through trained competence.",
    hanafiPosition:
      "The ordinary Muslim is a muqallid by definition of his competence level; claiming ijtihad without its conditions is itself a documented error in usul.",
    sources: [
      { kind: "BOOK", ref: "Al-Hidayah, Kitab al-Tahlil", translation: "Conditions of legal derivation and who qualifies.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Usul al-Sarakhsi", translation: "Tiered theory of ijtihad and taqlid.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Can anyone do ijtihad?", "Who is allowed to interpret hadith?", "Is ijtihad for everyone?"],
    related: ["taqlid-what-is", "taqlid-hadith-objection"],
  },
  {
    slug: "madhhab-pray-behind-other-imam",
    question: "Can a Hanafi pray behind a non-Hanafi imam?",
    questionUr: "کیا حنفی غیر حنفی امام کے پیچھے نماز پڑھ سکتا ہے؟",
    questionAr: "هل يصلي الحنفي خلف إمام من غير مذهبه؟",
    category: "taqlid-madhhab",
    subcategory: "Ecumenical practice",
    type: "PRACTICAL",
    difficulty: "BEGINNER",
    cluster: "madhhab",
    intent: "fiqh",
    shortAnswer:
      "Yes — classical Hanafi fiqh regards prayer behind a pious, correctly-praying imam of another Sunni madhhab as valid; the follower simply follows the imam's actions.",
    shortAnswerUr: "جی ہاں — متقدمہ حنفی فقہ ایک عابد و صالح، صحیح انداز سے نماز پڑھنے والے دوسرے اہلِ سنت امام کے پیچھے نماز کو صحیح گردانتا ہے؛ مقتدی محض امام کے افعال کی اقتدا کرتا ہے۔",
    shortAnswerAr: "نعم — ترى الفقه الحنفي المتقدم أن الصلاة خلف إمام بار يصلي صحيحًا من مذهب سني آخر صحيحة، ويقتدي مأمومه بأفعال إمامه فقط.",
    detailedAnswer:
      "The school's books discuss following imams who differ in legal details: the follower's own salah validity attaches to the imam's actions while the imam leads. Differences like raf' al-yadayn or audible Ameen do not invalidate salah by scholarly agreement, so crossing madhhab lines in congregation is fine. Al-Kasani's Bada'i' and later fatawa collections treat this under following imams in prayer. Where a school considers an act invalidating (a minority edge case), the follower's status is discussed in the detailed books.",
    practicalInfo:
      "Mainstream guidance: pray in any mosque with a trustworthy congregation; do not split the community over madhhab differences.",
    sources: [
      { kind: "BOOK", ref: "Bada'i' al-Sana'i' (al-Kasani), Kitab al-Salah", translation: "Rules of following an imam, including imams of differing fiqh details.", status: "PARTIALLY_VERIFIED" },
      { kind: "BOOK", ref: "Fatawa Hindiyyah (al-Fatawa al-'Alamgiriyyah), Kitab al-Salah", translation: "Compiled rulings on following imams of other madhhabs.", status: "PARTIALLY_VERIFIED" },
    ],
    variants: ["Is prayer valid behind a Salafi imam?", "Hanafi praying behind Shafi'i imam", "Should Hanafis leave mixed-madhhab mosques?"],
    related: ["madhhab-sect-or-school", "salah-raf-yadayn-why"],
  },
];
