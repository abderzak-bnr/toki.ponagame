/**
 * Complete Toki Pona Curriculum (137 words: 120 pu + 17 ku suli)
 * 10 Progressive Units, 3-4 Lessons per Unit
 * Tailored specifically for Arabic Speakers
 */

window.TOKI_DATA = {
  // All 137 Words Dictionary with Arabic Definitions & Metadata
  words: {
    // --- UNIT 1 (12 words) ---
    "mi": {
      word: "mi",
      unitId: 1,
      lessonId: 1,
      category: "pronoun",
      ar: "أنا / نحن",
      hint: "ضمير المتكلم المفرد والجمع. لا يحتاج إلى أداة 'li' بعده مباشرة.",
      phonetic: "مي",
      example: { tp: "mi jan pona", ar: "أنا شخص صالح / صديق" }
    },
    "sina": {
      word: "sina",
      unitId: 1,
      lessonId: 1,
      category: "pronoun",
      ar: "أنتَ / أنتِ / أنتم",
      hint: "ضمير المخاطب بجميع أشكاله. أيضاً لا يحتاج إلى أداة 'li' بعده.",
      phonetic: "سينا",
      example: { tp: "sina pona", ar: "أنت رائع / شكرًا لك" }
    },
    "ona": {
      word: "ona",
      unitId: 1,
      lessonId: 1,
      category: "pronoun",
      ar: "هو / هي / هم",
      hint: "ضمير الغائب للجميع (العاقل وغير العاقل). يحتاج إلى 'li' بعده كفاعل.",
      phonetic: "أونا",
      example: { tp: "ona li jan", ar: "هو إنسان" }
    },
    "jan": {
      word: "jan",
      unitId: 1,
      lessonId: 1,
      category: "noun",
      ar: "شخص / إنسان / أحد ما",
      hint: "تُستخدم أيضاً كصفة بمعنى 'بشري'، أو لقب احترام قبل الأسماء.",
      phonetic: "يان",
      example: { tp: "jan li toki", ar: "الشخص يتكلم" }
    },
    "toki": {
      word: "toki",
      unitId: 1,
      lessonId: 2,
      category: "noun/verb",
      ar: "كلام / لغة / يتحدث / مرحبًا",
      hint: "'toki!' هي التحية الأشهر في توكي بونا وتوازي 'مرحباً'.",
      phonetic: "توكي",
      example: { tp: "toki pona", ar: "لغة توكي بونا (لغة الخير البسيطة)" }
    },
    "pona": {
      word: "pona",
      unitId: 1,
      lessonId: 2,
      category: "adjective/verb",
      ar: "جيد / بسيط / إيجابي / شكرًا / يصلح",
      hint: "فلسفة اللغة بأكملها مبنية على مفهوم 'pona' (البساطة والخير).",
      phonetic: "بونا",
      example: { tp: "ni li pona", ar: "هذا جيد وممتاز" }
    },
    "ike": {
      word: "ike",
      unitId: 1,
      lessonId: 2,
      category: "adjective/noun",
      ar: "سيء / معقد / شرير / مشكلة",
      hint: "عكس pona تماماً. تصف كل ما هو سلبي أو معقد دون داعٍ.",
      phonetic: "إيكي",
      example: { tp: "ni li ike", ar: "هذا أمر سيء" }
    },
    "ni": {
      word: "ni",
      unitId: 1,
      lessonId: 2,
      category: "demonstrative",
      ar: "هذا / ذلك / هؤلاء",
      hint: "اسم إشارة يشير إلى الأشياء القريبة أو البعيدة أو الجمل السابقة.",
      phonetic: "ني",
      example: { tp: "jan ni", ar: "هذا الشخص" }
    },
    "ijo": {
      word: "ijo",
      unitId: 1,
      lessonId: 3,
      category: "noun",
      ar: "شيء / كائن / أمر / مادة",
      hint: "الكلمة العامة لأي شيء مادي أو معنوي.",
      phonetic: "إيجو (إيو)",
      example: { tp: "ijo pona", ar: "شيء مفيد / صالح" }
    },
    "nimi": {
      word: "nimi",
      unitId: 1,
      lessonId: 3,
      category: "noun",
      ar: "اسم / كلمة / لقب",
      hint: "تُستخدم للكلمات والأسماء، مثل: nimi mi li... (اسمي هو...).",
      phonetic: "نيمي",
      example: { tp: "nimi sina li seme?", ar: "ما اسمك؟" }
    },
    "ken": {
      word: "ken",
      unitId: 1,
      lessonId: 3,
      category: "verb/noun",
      ar: "يمكن / استطاعة / قدرة / ربما",
      hint: "تدل على الإمكانية والقدرة والاستئذان.",
      phonetic: "كين",
      example: { tp: "mi ken", ar: "أنا أستطيع" }
    },
    "ante": {
      word: "ante",
      unitId: 1,
      lessonId: 3,
      category: "adjective/verb",
      ar: "مختلف / تغيير / تعديل",
      hint: "تدل على الاختلاف أو التبديل من حال إلى حال.",
      phonetic: "أنتي",
      example: { tp: "ona li ante", ar: "هو مختلف" }
    },

    // --- UNIT 2 (12 words) ---
    "li": {
      word: "li",
      unitId: 2,
      lessonId: 1,
      category: "particle",
      ar: "أداة فصل الفاعل عن الفعل أو الصفة",
      hint: "أهم أداة في القواعد! توضع بعد كل فاعل باستثناء 'mi' أو 'sina' المنفردين.",
      phonetic: "لي",
      example: { tp: "jan li moku", ar: "الشخص يأكل" }
    },
    "e": {
      word: "e",
      unitId: 2,
      lessonId: 1,
      category: "particle",
      ar: "أداة المفعول به المباشر",
      hint: "تسبق دائماً الاسم أو الموصوف الذي وقع عليه الفعل.",
      phonetic: "إيه",
      example: { tp: "mi moku e kili", ar: "أنا آكل الفاكهة" }
    },
    "moku": {
      word: "moku",
      unitId: 2,
      lessonId: 1,
      category: "noun/verb",
      ar: "طعام / يأكل / يشرب / يبتلع",
      hint: "تشمل كل ما يُستهلك طعاماً وشراباً، وفعل التناول.",
      phonetic: "موكو",
      example: { tp: "moku li pona", ar: "الطعام لذيذ وطيب" }
    },
    "tawa": {
      word: "tawa",
      unitId: 2,
      lessonId: 1,
      category: "verb/preposition",
      ar: "يذهب / يتحرك / إلى / نحو / لأجل",
      hint: "تفيد الحركة والوجهة، وأيضاً التعبير عن الرأي: 'tawa mi' (بالنسبة لي / يعجبني).",
      phonetic: "تاوا",
      example: { tp: "mi tawa tomo", ar: "أنا ذاهب إلى البيت" }
    },
    "kama": {
      word: "kama",
      unitId: 2,
      lessonId: 2,
      category: "verb",
      ar: "يأتي / يصبح / يحدث / وصول",
      hint: "تفيد الوصول والصيرورة والتحول.",
      phonetic: "كاما",
      example: { tp: "ona li kama", ar: "هو قادم / وصل" }
    },
    "wile": {
      word: "wile",
      unitId: 2,
      lessonId: 2,
      category: "verb/noun",
      ar: "يريد / يحتاج / رغبة / يجب",
      hint: "تعبّر عن الإرادة والاحتياج، وتسبق الأفعال كالطلب.",
      phonetic: "ويلي",
      example: { tp: "mi wile moku", ar: "أريد أن آكل" }
    },
    "lon": {
      word: "lon",
      unitId: 2,
      lessonId: 2,
      category: "preposition/adjective",
      ar: "موجود / في / على / حقيقي / نعم",
      hint: "تحدد المكان والوجود، وتُقال رداً للإيجاب وتأكيد الحقيقة.",
      phonetic: "لون",
      example: { tp: "mi lon ni", ar: "أنا هنا (موجود في هذا المكان)" }
    },
    "kepeken": {
      word: "kepeken",
      unitId: 2,
      lessonId: 2,
      category: "verb/preposition",
      ar: "يستخدم / يستعين بـ / بواسطة",
      hint: "تدل على الأداة أو الوسيلة المستخدمة في الفعل.",
      phonetic: "كيبيكين",
      example: { tp: "mi kepeken ilo", ar: "أنا أستخدم أداة" }
    },
    "pali": {
      word: "pali",
      unitId: 2,
      lessonId: 3,
      category: "verb/noun",
      ar: "يعمل / يفعل / يصنع / نشاط",
      hint: "تشمل الشغل والصنع والإنجاز وبذل الجهد.",
      phonetic: "بالي",
      example: { tp: "mi pali e tomo", ar: "أنا أبني بيتاً" }
    },
    "pana": {
      word: "pana",
      unitId: 2,
      lessonId: 3,
      category: "verb",
      ar: "يعطي / يرسل / يطلق / يمنح",
      hint: "التزويد أو الإرسال أو إخراج الشيء إلى الآخرين.",
      phonetic: "بانا",
      example: { tp: "o pana e telo", ar: "أعطني ماءً!" }
    },
    "jo": {
      word: "jo",
      unitId: 2,
      lessonId: 3,
      category: "verb/noun",
      ar: "يملك / يحمل / يحتوي / لديه",
      hint: "فعل الحيازة والملكية والاحتواء.",
      phonetic: "يو",
      example: { tp: "mi jo e lipu", ar: "لدي كتاب / وثيقة" }
    },
    "awen": {
      word: "awen",
      unitId: 2,
      lessonId: 3,
      category: "verb/adjective",
      ar: "يبقى / ينتظر / مستمر / ثابت / يحفظ",
      hint: "تدل على الدوام والاستقرار والبقاء على حال واحدة.",
      phonetic: "أوين",
      example: { tp: "o awen lon ni", ar: "ابقَ هنا!" }
    },

    // --- UNIT 3 (12 words) ---
    "suno": {
      word: "suno",
      unitId: 3,
      lessonId: 1,
      category: "noun",
      ar: "شمس / ضوء / نهار / إشراق",
      hint: "مصدر النور والضياء والنهار.",
      phonetic: "سونو",
      example: { tp: "suno li suli", ar: "الشمس عظيمة وساطعة" }
    },
    "mun": {
      word: "mun",
      unitId: 3,
      lessonId: 1,
      category: "noun",
      ar: "قمر / نجم / جرم سماوي ليلي",
      hint: "تطلق على القمر والنجوم وأي ضوء في سماء الليل.",
      phonetic: "مون",
      example: { tp: "mun li lon sewi", ar: "القمر في السماء" }
    },
    "telo": {
      word: "telo",
      unitId: 3,
      lessonId: 1,
      category: "noun/verb",
      ar: "ماء / سائل / عصير / يغسل",
      hint: "كل السوائل: ماء الشرب، المطر، البحر، والعصير.",
      phonetic: "تيلو",
      example: { tp: "mi wile e telo", ar: "أريد ماءً" }
    },
    "kasi": {
      word: "kasi",
      unitId: 3,
      lessonId: 1,
      category: "noun",
      ar: "نبات / شجرة / عشب / ورقة",
      hint: "المملكة النباتية بكاملها من الحشائش إلى الأشجار العالية.",
      phonetic: "كاسي",
      example: { tp: "kasi li laso", ar: "النبات أخضر" }
    },
    "ma": {
      word: "ma",
      unitId: 3,
      lessonId: 2,
      category: "noun",
      ar: "أرض / بلد / وطن / في الهواء الطلق",
      hint: "اليابسة، الجغرافيا، البلدان والأوطان: 'ma Alapi' (البلاد العربية).",
      phonetic: "ما",
      example: { tp: "ma mi li pona", ar: "بلادي جميلة وطيبة" }
    },
    "sewi": {
      word: "sewi",
      unitId: 3,
      lessonId: 2,
      category: "noun/adjective",
      ar: "سماء / علوي / مقدس / فوق",
      hint: "تدل على العلو المادي (السماء، السقف) أو المعنوي (المقدس والسامي).",
      phonetic: "سيوي",
      example: { tp: "tawa sewi", ar: "إلى الأعلى / صاعداً" }
    },
    "kon": {
      word: "kon",
      unitId: 3,
      lessonId: 2,
      category: "noun",
      ar: "هواء / ريح / تنفس / روح / غاز",
      hint: "كل ما هو غير مرئي وكالهواء، والنسمة، والروح الخفية.",
      phonetic: "كون",
      example: { tp: "kon li lete", ar: "الهواء بارد" }
    },
    "ko": {
      word: "ko",
      unitId: 3,
      lessonId: 2,
      category: "noun",
      ar: "طين / رمال / مسحوق / معجون",
      hint: "المواد اللينة أو المسحوقة كالتراب الناعم والعجين.",
      phonetic: "كو",
      example: { tp: "ko kiwen", ar: "إسمنت / مادة صلصالية متماسكة" }
    },
    "kiwen": {
      word: "kiwen",
      unitId: 3,
      lessonId: 3,
      category: "noun/adjective",
      ar: "حجر / صخر / معدن / صلب",
      hint: "كل جماد قاسي وصلب كالحصى والحديد والصخور.",
      phonetic: "كيوين",
      example: { tp: "kiwen li suli", ar: "الصخرة كبيرة" }
    },
    "seli": {
      word: "seli",
      unitId: 3,
      lessonId: 3,
      category: "noun/adjective",
      ar: "نار / حرارة / دافئ / طهي",
      hint: "النار، الدفء، والحرارة ومصدر الطبخ والاحتراق.",
      phonetic: "سيلي",
      example: { tp: "seli li suli", ar: "النار قوية / ساخنة جداً" }
    },
    "lete": {
      word: "lete",
      unitId: 3,
      lessonId: 3,
      category: "adjective/noun",
      ar: "بارد / برد / ثلج / تجمد",
      hint: "عكس seli، وتصف انخفاض درجات الحرارة والصقيع.",
      phonetic: "ليتي",
      example: { tp: "telo lete", ar: "ماء بارد / مثلج" }
    },
    "anpa": {
      word: "anpa",
      unitId: 3,
      lessonId: 3,
      category: "noun/adjective",
      ar: "أسفل / قاع / أرضية / متواضع / يخضع",
      hint: "عكس sewi، تدل على المكان المنخفض أو الهبوط والتواضع.",
      phonetic: "أنبا",
      example: { tp: "lon anpa", ar: "في الأسفل / على الأرض" }
    },

    // --- UNIT 4 (11 words) ---
    "soweli": {
      word: "soweli",
      unitId: 4,
      lessonId: 1,
      category: "noun",
      ar: "حيوان بري / ثديي / حيوان أليف",
      hint: "تطلق على الثدييات ذوات الفراء كالقِطط، الكلاب، والأبقار.",
      phonetic: "سويلي",
      example: { tp: "soweli li lape", ar: "الحيوان الأليف نائم" }
    },
    "waso": {
      word: "waso",
      unitId: 4,
      lessonId: 1,
      category: "noun",
      ar: "طائر / كائن طائر / ريش",
      hint: "الطيور بجميع أنواعها وكل كائن ذي أجنحة وريش.",
      phonetic: "واسو",
      example: { tp: "waso li tawa sewi", ar: "الطائر يطير نحو السماء" }
    },
    "kala": {
      word: "kala",
      unitId: 4,
      lessonId: 1,
      category: "noun",
      ar: "سمكة / كائن مائي بحري",
      hint: "الأسماك والمخلوقات التي تعيش وتسبح في الماء.",
      phonetic: "كالا",
      example: { tp: "kala li lon telo", ar: "السمكة في الماء" }
    },
    "pipi": {
      word: "pipi",
      unitId: 4,
      lessonId: 1,
      category: "noun",
      ar: "حشرة / كائن صغير زاحف",
      hint: "الحشرات والعناكب والمخلوقات اللافقارية الدقيقة.",
      phonetic: "بيبي",
      example: { tp: "pipi li lili", ar: "الحشرة صغيرة" }
    },
    "akesi": {
      word: "akesi",
      unitId: 4,
      lessonId: 2,
      category: "noun",
      ar: "زاحف / برمائي / سحلية / تنين",
      hint: "الزواحف والبرمائيات غير المحبوبة كالثعابين، التماسيح، والضفادع.",
      phonetic: "أكيسي",
      example: { tp: "akesi suli", ar: "زاحف ضخم / تمساح" }
    },
    "mu": {
      word: "mu",
      unitId: 4,
      lessonId: 2,
      category: "interjection",
      ar: "صوت الحيوان (مواء، نباح، صياح...)",
      hint: "محاكاة صوتية تمثل أي صوت يصدره حيوان.",
      phonetic: "مو",
      example: { tp: "soweli li mu", ar: "الحيوان يُصدر صوته (ينبح / يموء)" }
    },
    "kijetesantakalu": {
      word: "kijetesantakalu",
      unitId: 4,
      lessonId: 2,
      category: "noun",
      ar: "حيوان من فصيلة الراكون / قوطي / كينكاجو",
      hint: "أطول كلمة وأشهر طُرفة في توكي بونا! مخصصة لحيوانات فصيلة الراكونيات.",
      phonetic: "كييتيسانتاكالو",
      example: { tp: "kijetesantakalu li suwi", ar: "حيوان الراكون لطيف وظريف" }
    },
    "kili": {
      word: "kili",
      unitId: 4,
      lessonId: 3,
      category: "noun",
      ar: "فاكهة / خضار / ثمرة",
      hint: "كل ما تنتجه النباتات من ثمار صالحة للأكل، تفاح، تمر، طماطم...",
      phonetic: "كيلي",
      example: { tp: "kili suwi", ar: "فاكهة حلوة ولذيذة" }
    },
    "pan": {
      word: "pan",
      unitId: 4,
      lessonId: 3,
      category: "noun",
      ar: "حبوب / خبز / أرز / قمح / معجنات",
      hint: "الأغذية النشوية ومحاصيل الحبوب كالأرز والشعير ورغيف الخبز.",
      phonetic: "بان",
      example: { tp: "mi moku e pan", ar: "أنا آكل الخبز" }
    },
    "moli": {
      word: "moli",
      unitId: 4,
      lessonId: 3,
      category: "noun/verb",
      ar: "موت / يموت / ميت / فناء",
      hint: "نهاية الحياة أو حالة الفناء والموت.",
      phonetic: "مولي",
      example: { tp: "ona li moli", ar: "هو فارق الحياة" }
    },
    "alasa": {
      word: "alasa",
      unitId: 4,
      lessonId: 3,
      category: "verb",
      ar: "يصطاد / يبحث عن / يسعى / يحاول",
      hint: "تدل على الصيد، التفتيش، أو بذل المحاولة لتحقيق شيء.",
      phonetic: "ألاسا",
      example: { tp: "mi alasa e soweli", ar: "أنا أبحث عن الحيوان / أصطاد" }
    },

    // --- UNIT 5 (13 words) ---
    "mama": {
      word: "mama",
      unitId: 5,
      lessonId: 1,
      category: "noun",
      ar: "والد / والدة / مربي / صانع",
      hint: "تشمل الأب، الأم، وأي شخص يرعى ويخلق ويهتم بتربية الأطفال.",
      phonetic: "ماما",
      example: { tp: "mama mi li pona", ar: "والداي طيبان" }
    },
    "meli": {
      word: "meli",
      unitId: 5,
      lessonId: 1,
      category: "noun/adjective",
      ar: "امرأة / أنثى / زوجة / بنت",
      hint: "كل ما يرتبط بالأنوثة أو جنس الإناث.",
      phonetic: "ميلي",
      example: { tp: "jan meli", ar: "امرأة / سيدة" }
    },
    "mije": {
      word: "mije",
      unitId: 5,
      lessonId: 1,
      category: "noun/adjective",
      ar: "رجل / ذكر / زوج / ولد",
      hint: "كل ما يرتبط بالذكورة أو جنس الذكور.",
      phonetic: "مييه",
      example: { tp: "jan mije", ar: "رجل / شاب" }
    },
    "unpa": {
      word: "unpa",
      unitId: 5,
      lessonId: 1,
      category: "verb/noun",
      ar: "علاقة حميمة / جنس / زواج حميم",
      hint: "تدل على العلاقة الحميمة والتناسل.",
      phonetic: "أونبا",
      example: { tp: "meli en mije li unpa", ar: "الزوجان في علاقة حميمة" }
    },
    "sijelo": {
      word: "sijelo",
      unitId: 5,
      lessonId: 2,
      category: "noun",
      ar: "جسد / بدن / صحة / قوام",
      hint: "الجسم المادي للإنسان أو الكائن، وأيضاً الصحة البدنية.",
      phonetic: "سييلو",
      example: { tp: "sijelo pona", ar: "صحة جيدة وبدن معافى" }
    },
    "luka": {
      word: "luka",
      unitId: 5,
      lessonId: 2,
      category: "noun/number",
      ar: "يد / ذراع / لمس / خمسة (5)",
      hint: "اليد والذراع، وتُستخدم أيضاً في نظام العد كرمز للرقم خمسة (أصابع اليد).",
      phonetic: "لوكا",
      example: { tp: "kepeken luka", ar: "بواسطة اليد / يدوياً" }
    },
    "noka": {
      word: "noka",
      unitId: 5,
      lessonId: 2,
      category: "noun",
      ar: "قدم / ساق / ركبة / قاعدة",
      hint: "الأطراف السفلية للمشي، أو قاعدة أي هيكل ومبنى.",
      phonetic: "نوكا",
      example: { tp: "tawa kepeken noka", ar: "يمشي على قدميه" }
    },
    "lawa": {
      word: "lawa",
      unitId: 5,
      lessonId: 2,
      category: "noun/verb",
      ar: "رأس / عقل / يقود / حاكم / قانون",
      hint: "الرأس، الدماغ، والقيادة والحكم والتوجيه.",
      phonetic: "لاوا",
      example: { tp: "jan lawa", ar: "قائد / زعيم / رئيس" }
    },
    "uta": {
      word: "uta",
      unitId: 5,
      lessonId: 3,
      category: "noun",
      ar: "فم / شفتان / فك / تجويف فموي",
      hint: "الفم وعضو النطق وتناول الطعام.",
      phonetic: "أوتا",
      example: { tp: "uta li toki", ar: "الفم يتكلم" }
    },
    "oko": {
      word: "oko",
      unitId: 5,
      lessonId: 3,
      category: "noun",
      ar: "عين / نظرة بصرية",
      hint: "عضو الإبصار تحديداً (في ku سُحبت لتمييز عضو العين عن فعل الرؤية lukin).",
      phonetic: "أوكو",
      example: { tp: "oko mi", ar: "عيني / نظري" }
    },
    "lukin": {
      word: "lukin",
      unitId: 5,
      lessonId: 3,
      category: "verb/noun",
      ar: "يرى / ينظر / يبصر / قراءة",
      hint: "حاسة البصر والفعل (الرؤية، النظر، المطالعة، القراءة).",
      phonetic: "لوكين",
      example: { tp: "mi lukin e lipu", ar: "أنا أقرأ كتاباً" }
    },
    "kute": {
      word: "kute",
      unitId: 5,
      lessonId: 3,
      category: "verb/noun",
      ar: "يسمع / يستمع / أذن / يطيع",
      hint: "حاسة السمع، الاستماع للأصوات والموسيقى، وطاعة التوجيهات.",
      phonetic: "كوتي",
      example: { tp: "o kute e kalama", ar: "استمع إلى الصوت!" }
    },
    "kalama": {
      word: "kalama",
      unitId: 5,
      lessonId: 3,
      category: "noun/verb",
      ar: "صوت / يصدر صوتاً / ضجيج / نغمة",
      hint: "الموجات الصوتية، الكلام المسموع، الموسيقى، والضوضاء.",
      phonetic: "كالاما",
      example: { tp: "kalama musi", ar: "موسيقى / نغم جميل" }
    },

    // --- UNIT 6 (13 words) ---
    "ilo": {
      word: "ilo",
      unitId: 6,
      lessonId: 1,
      category: "noun",
      ar: "أداة / جهاز / آلة / هاتف / حاسوب",
      hint: "أي آلة أو جهاز يُستخدم لإنجاز مهمة، من الملعقة إلى الحاسب الذكي.",
      phonetic: "إيلو",
      example: { tp: "ilo sona", ar: "حاسوب (أداة المعرفة)" }
    },
    "tomo": {
      word: "tomo",
      unitId: 6,
      lessonId: 1,
      category: "noun",
      ar: "بيت / مبنى / غرفة / مأوى",
      hint: "المسكن البشري وأي بناء مسقوف ومغلق.",
      phonetic: "تومو",
      example: { tp: "mi lon tomo", ar: "أنا في البيت" }
    },
    "lipu": {
      word: "lipu",
      unitId: 6,
      lessonId: 1,
      category: "noun",
      ar: "وثيقة / كتاب / صفحة / موقع إلكتروني",
      hint: "أي سطح مسطح يحتوي كتابة أو رسماً: ورقة، كتاب، مقال، بطاقة.",
      phonetic: "ليبو",
      example: { tp: "lipu pu", ar: "كتاب توكي بونا الرسمي" }
    },
    "poki": {
      word: "poki",
      unitId: 6,
      lessonId: 1,
      category: "noun",
      ar: "وعاء / صندوق / كوب / كيس / حقيبة",
      hint: "أي حاوية تحتوي أشياء بداخلها، من الفنجان إلى الصندوق الكبير.",
      phonetic: "بوكي",
      example: { tp: "poki telo", ar: "كوب ماء / زجاجة ماء" }
    },
    "supa": {
      word: "supa",
      unitId: 6,
      lessonId: 2,
      category: "noun",
      ar: "سطح مستوٍ / طاولة / أريكة / سرير",
      hint: "أي سطح ممهد للجلوس عليه، النوم عليه، أو وضع الأغراض فوقه.",
      phonetic: "سوبا",
      example: { tp: "supa moku", ar: "طاولة طعام" }
    },
    "lupa": {
      word: "lupa",
      unitId: 6,
      lessonId: 2,
      category: "noun",
      ar: "فتحة / باب / نافذة / حفرة",
      hint: "أي منفذ أو ممر أو تجويف في جدار أو أرضية.",
      phonetic: "لوبا",
      example: { tp: "lupa tomo", ar: "باب أو نافذة البيت" }
    },
    "len": {
      word: "len",
      unitId: 6,
      lessonId: 2,
      category: "noun/verb",
      ar: "ملابس / قماش / رداء / يستر / حماية",
      hint: "الثياب والمنسوجات، وفعل التغطية والحماية والستر.",
      phonetic: "لين",
      example: { tp: "len mi li laso", ar: "ثوبي لونه أزرق" }
    },
    "palisa": {
      word: "palisa",
      unitId: 6,
      lessonId: 2,
      category: "noun",
      ar: "عصا / قضيب / عمود / فرع",
      hint: "أي جسم طويل وأسطواني صلب: قلم، عصا، فرع شجرة، سيخ.",
      phonetic: "باليسا",
      example: { tp: "palisa sitelen", ar: "قلم كتابة (عصا الرسم)" }
    },
    "esun": {
      word: "esun",
      unitId: 6,
      lessonId: 3,
      category: "noun/verb",
      ar: "سوق / متجر / تجارة / يشتري / يبيع",
      hint: "الأماكن التجارية وأفعال الشراء والبيع والمبادلة.",
      phonetic: "إيسون",
      example: { tp: "tomo esun", ar: "دكان / متجر" }
    },
    "mani": {
      word: "mani",
      unitId: 6,
      lessonId: 3,
      category: "noun",
      ar: "مال / نقود / عملة / ثروة",
      hint: "العملات النقدية، الأموال، والمدخرات المالية.",
      phonetic: "ماني",
      example: { tp: "mani mute", ar: "مال وفير / ثراء" }
    },
    "nasin": {
      word: "nasin",
      unitId: 6,
      lessonId: 3,
      category: "noun",
      ar: "طريق / منهج / مسار / أسلوب / مذهب",
      hint: "الطريق المادي المعبد، أو المنهج الفكري وطريقة الحياة: 'nasin pona'.",
      phonetic: "ناسين",
      example: { tp: "nasin pona", ar: "الطريق الصحيح / منهج الخير" }
    },
    "kulupu": {
      word: "kulupu",
      unitId: 6,
      lessonId: 3,
      category: "noun",
      ar: "مجتمع / مجموعة / جماعة / قبيلة",
      hint: "تجمع من الناس أو الكائنات، كالعائلة، الفريق، أو الجمعية.",
      phonetic: "كولوبو",
      example: { tp: "kulupu jan", ar: "مجتمع بشري / جمهور" }
    },
    "sitelen": {
      word: "sitelen",
      unitId: 6,
      lessonId: 3,
      category: "noun/verb",
      ar: "رسم / صورة / كتابة / رمز / يكتب",
      hint: "كل تمثيل مرئي: رموز Sitelen Pona، الحروف، الصور، واللوحات.",
      phonetic: "سيتيليين",
      example: { tp: "sitelen pona", ar: "نظام الرموز الهيروغليفية لتوكي بونا" }
    },

    // --- UNIT 7 (15 words) ---
    "suli": {
      word: "suli",
      unitId: 7,
      lessonId: 1,
      category: "adjective",
      ar: "كبير / عظيم / طويل / مهم / بالغ",
      hint: "تصف الحجم الكبير، الطول، الأهمية المعنوية، أو سن البلوغ.",
      phonetic: "سولي",
      example: { tp: "tomo suli", ar: "بيت كبير / قصر" }
    },
    "lili": {
      word: "lili",
      unitId: 7,
      lessonId: 1,
      category: "adjective",
      ar: "صغير / قليل / قصير / طفل",
      hint: "عكس suli، تصف الصغر في الحجم، القلة في المقدار، أو الصغر في السن.",
      phonetic: "ليلي",
      example: { tp: "jan lili", ar: "طفل صغير" }
    },
    "sin": {
      word: "sin",
      unitId: 7,
      lessonId: 1,
      category: "adjective",
      ar: "جديد / آخر / طازج / إضافي",
      hint: "تصف الحداثة والجدة، أو التكرار مرة أخرى: 'o toki sin' (تكلم ثانية).",
      phonetic: "سين",
      example: { tp: "ilo sin", ar: "أداة جديدة" }
    },
    "mute": {
      word: "mute",
      unitId: 7,
      lessonId: 1,
      category: "adjective/number",
      ar: "كثير / متعدد / كمية وفيرة / عشرون (20)",
      hint: "الكثرة والوفرة، وفي نظام العد تُستخدم لتمثيل الرقم عشرين.",
      phonetic: "موتي",
      example: { tp: "jan mute", ar: "أناس كثيرون / حشد" }
    },
    "wan": {
      word: "wan",
      unitId: 7,
      lessonId: 2,
      category: "number/adjective",
      ar: "واحد (1) / فريد / يتحد",
      hint: "الرقم واحد، وتدل أيضاً على الاتحاد والوحدة.",
      phonetic: "وان",
      example: { tp: "jan wan", ar: "شخص واحد" }
    },
    "tu": {
      word: "tu",
      unitId: 7,
      lessonId: 2,
      category: "number/adjective",
      ar: "اثنان (2) / زوج / ينقسم",
      hint: "الرقم اثنان، وتدل أيضاً على الانقسام لجزأين.",
      phonetic: "تو",
      example: { tp: "tu wan", ar: "ثلاثة (2 + 1)" }
    },
    "nanpa": {
      word: "nanpa",
      unitId: 7,
      lessonId: 2,
      category: "noun/particle",
      ar: "رقم / عدد / ترتيب (الأول، الثاني...)",
      hint: "تدل على الأرقام، وتُستخدم لصياغة الأعداد الترتيبية: 'nanpa wan' (الأول).",
      phonetic: "نانبا",
      example: { tp: "nanpa wan", ar: "المركز الأول / رقم واحد" }
    },
    "wawa": {
      word: "wawa",
      unitId: 7,
      lessonId: 2,
      category: "adjective/noun",
      ar: "قوي / طاقة / شجاعة / عظيم الشدة",
      hint: "القوة البدنية، الطاقة الكهربائية، والشجاعة والعزيمة.",
      phonetic: "واوا",
      example: { tp: "soweli wawa", ar: "حيوان قوي ومفترس" }
    },
    "kule": {
      word: "kule",
      unitId: 7,
      lessonId: 3,
      category: "noun/adjective",
      ar: "لون / صبغة / ملون / متنوع",
      hint: "مفهوم الألوان عموماً، والصبغات، والتنوع المبهج.",
      phonetic: "كولي",
      example: { tp: "kule pona", ar: "لون جميل ومبهج" }
    },
    "walo": {
      word: "walo",
      unitId: 7,
      lessonId: 3,
      category: "adjective/noun",
      ar: "أبيض / فاتح / ناصع",
      hint: "اللون الأبيض، والنقاء، والسطوع الفاتح.",
      phonetic: "والو",
      example: { tp: "mun walo", ar: "قمر ناصع البياض" }
    },
    "pimeja": {
      word: "pimeja",
      unitId: 7,
      lessonId: 3,
      category: "adjective/noun",
      ar: "أسود / مظلم / ظلمة / داكن",
      hint: "عكس walo، تصف السواد، الظلام الدامس، واللون القاتم.",
      phonetic: "بيمييا",
      example: { tp: "tenpo pimeja", ar: "وقت الظلمة / الليل" }
    },
    "suwi": {
      word: "suwi",
      unitId: 7,
      lessonId: 3,
      category: "adjective/noun",
      ar: "حلو / لطيف / جميل / سكر / حلوى",
      hint: "المذاق الحلو للسكر، وأيضاً كل ما هو لطيف ومحبب للنفس.",
      phonetic: "سوي",
      example: { tp: "telo suwi", ar: "عصير حلو / ماء محلى" }
    },
    "loje": {
      word: "loje",
      unitId: 7,
      lessonId: 4,
      category: "adjective",
      ar: "أحمر / مائل للحمرة",
      hint: "أحد الألوان الأساسية الثلاثة في لغة توكي بونا (لون الدم والنار).",
      phonetic: "لويي",
      example: { tp: "kili loje", ar: "فاكهة حمراء (كتفاح أو فراولة)" }
    },
    "jelo": {
      word: "jelo",
      unitId: 7,
      lessonId: 4,
      category: "adjective",
      ar: "أصفر / ذهبي",
      hint: "اللون الأصفر كلون قرص الشمس، الموز، والذهب.",
      phonetic: "ييلو",
      example: { tp: "suno jelo", ar: "شمس صفراء مشرقة" }
    },
    "laso": {
      word: "laso",
      unitId: 7,
      lessonId: 4,
      category: "adjective",
      ar: "أزرق / أخضر / سماوي (لون الطبيعة والماء)",
      hint: "في توكي بونا، الأزرق والأخضر كلمة واحدة تعبر عن ألوان الطبيعة والسماء والماء.",
      phonetic: "لاسو",
      example: { tp: "kasi laso", ar: "نبات أخضر يانع" }
    },

    // --- UNIT 8 (12 words) ---
    "pilin": {
      word: "pilin",
      unitId: 8,
      lessonId: 1,
      category: "noun/verb",
      ar: "شعور / إحساس / قلب / لمس / يظن",
      hint: "المشاعر النفسية، نبضات القلب، حاسة اللمس، والظن الداخلي.",
      phonetic: "بيلين",
      example: { tp: "pilin mi li pona", ar: "أشعر بالسعادة والطمأنينة" }
    },
    "olin": {
      word: "olin",
      unitId: 8,
      lessonId: 1,
      category: "verb/noun",
      ar: "يحب / حب / مودة / احترام عميق",
      hint: "الحب العاطفي والأخوي والإنساني الصادق.",
      phonetic: "أولين",
      example: { tp: "mi olin e sina", ar: "أنا أحبك" }
    },
    "sona": {
      word: "sona",
      unitId: 8,
      lessonId: 1,
      category: "noun/verb",
      ar: "يعرف / يفهم / علم / حكمة / مهارة",
      hint: "المعرفة، الفهم، والعلم بكيفية عمل الأشياء: 'sona toki' (علم اللغات).",
      phonetic: "سونا",
      example: { tp: "mi sona", ar: "أنا أعرف / فهمت" }
    },
    "musi": {
      word: "musi",
      unitId: 8,
      lessonId: 1,
      category: "noun/adjective",
      ar: "تسلية / لعبة / مرح / فن / متعة",
      hint: "الألعاب، الهوايات، الفنون، والمرح الذي يبعث البهجة.",
      phonetic: "موسي",
      example: { tp: "ni li musi", ar: "هذا أمر ممتع ومسلٍ" }
    },
    "lape": {
      word: "lape",
      unitId: 8,
      lessonId: 2,
      category: "noun/verb",
      ar: "ينام / نوم / راحة / استرخاء",
      hint: "النوم والراحة الجسدية واستعادة النشاط.",
      phonetic: "لابي",
      example: { tp: "o lape pona", ar: "نوماً هنيئاً! / تصبح على خير" }
    },
    "pakala": {
      word: "pakala",
      unitId: 8,
      lessonId: 2,
      category: "verb/noun/interjection",
      ar: "عطل / تلف / خطأ / كسر / لعنة!",
      hint: "الدمار أو الكسر أو الخطأ، وتُقال كصيغة انزعاج شائعة: 'pakala!'.",
      phonetic: "باكالا",
      example: { tp: "ilo li pakala", ar: "الأداة تعطلت وتكسرت" }
    },
    "utala": {
      word: "utala",
      unitId: 8,
      lessonId: 2,
      category: "noun/verb",
      ar: "قتال / معركة / صراع / تنافس / حرب",
      hint: "الصراع والنزاع المسلح أو التنافس الشديد والضرب.",
      phonetic: "أوتالا",
      example: { tp: "utala li ike", ar: "الحرب والصراع أمر سيء" }
    },
    "monsuta": {
      word: "monsuta",
      unitId: 8,
      lessonId: 2,
      category: "noun/adjective",
      ar: "خوف / رعب / فزع / وحش",
      hint: "الخوف الشديد والكائنات المخيفة أو الوحوش المرعبة.",
      phonetic: "مونسوتا",
      example: { tp: "mi pilin e monsuta", ar: "أشعر بالخوف والرعب" }
    },
    "nasa": {
      word: "nasa",
      unitId: 8,
      lessonId: 3,
      category: "adjective",
      ar: "غريب / غير مألوف / مجنون / أحمق / سكران",
      hint: "الخروج عن المألوف والغرابة والتصرفات الشاذة أو الغريبة.",
      phonetic: "ناسا",
      example: { tp: "jan nasa", ar: "شخص غريب الأطوار" }
    },
    "jaki": {
      word: "jaki",
      unitId: 8,
      lessonId: 3,
      category: "adjective/noun",
      ar: "قذر / نجس / مقرف / قمامة",
      hint: "كل ما هو متسخ أو غير نظيف أو يثير الاشمئزاز.",
      phonetic: "ياكي",
      example: { tp: "telo jaki", ar: "ماء ملوث وقذر" }
    },
    "selo": {
      word: "selo",
      unitId: 8,
      lessonId: 3,
      category: "noun",
      ar: "جلد / قشرة / لحاء / سطح خارجي",
      hint: "السطح الخارجي الواقي: جلد الإنسان، لحاء الشجر، أو قشر البيض.",
      phonetic: "سيلو",
      example: { tp: "selo kili", ar: "قشرة الفاكهة" }
    },
    "linja": {
      word: "linja",
      unitId: 8,
      lessonId: 3,
      category: "noun",
      ar: "خيط / حبل / شعر / سلك / خط طويل",
      hint: "الأجسام الرفيعة المرنة الطويلة: خيوط، شعر الرأس، حبال وأسلاك.",
      phonetic: "لينيا",
      example: { tp: "linja lawa", ar: "شعر الرأس" }
    },

    // --- UNIT 9 (22 words) ---
    "tenpo": {
      word: "tenpo",
      unitId: 9,
      lessonId: 1,
      category: "noun",
      ar: "وقت / زمن / ساعة / مناسبة",
      hint: "الوقت عموماً، ويشكل أساس العبارات الزمنية: 'tenpo ni' (الآن).",
      phonetic: "تينبو",
      example: { tp: "tenpo ni", ar: "هذا الوقت / الآن" }
    },
    "la": {
      word: "la",
      unitId: 9,
      lessonId: 1,
      category: "particle",
      ar: "أداة السياق والشرط (إذا... / عندما... / في سياق...)",
      hint: "توضع بين جملة السياق والعبارة الرئيسية: [الشرط] la [النتيجة].",
      phonetic: "لا",
      example: { tp: "tenpo pimeja la mi lape", ar: "في وقت الليل، أنا أنام" }
    },
    "pi": {
      word: "pi",
      unitId: 9,
      lessonId: 1,
      category: "particle",
      ar: "أداة إعادة تجميع الوصف (لـ / الخاص بـ)",
      hint: "تجمع كلمتين وصفتين معاً لتعديل الاسم السابق، مثل: tomo pi jan pona (بيت الصديق).",
      phonetic: "بي",
      example: { tp: "tomo pi jan pona", ar: "بيت الصديق الطيب" }
    },
    "en": {
      word: "en",
      unitId: 9,
      lessonId: 1,
      category: "particle",
      ar: "حرف عطف (و) يربط بين فاعلين فقط",
      hint: "ملاحظة هامة: 'en' تُستخدم حصراً لربط فواعل الجملة وليس الأفعال أو المفعولات.",
      phonetic: "إن",
      example: { tp: "mi en sina li jan", ar: "أنا وأنت إنسانان" }
    },
    "anu": {
      word: "anu",
      unitId: 9,
      lessonId: 1,
      category: "conjunction",
      ar: "أو / بديل / خيار",
      hint: "أداة التخيير بين أمرين أو أكثر.",
      phonetic: "أنو",
      example: { tp: "telo anu moku?", ar: "ماء أم طعام؟" }
    },
    "taso": {
      word: "taso",
      unitId: 9,
      lessonId: 1,
      category: "conjunction/adverb",
      ar: "لكن / فقط / وحيد / غير أن",
      hint: "في بداية الجملة تعني 'لكن'، وبعد الكلمة تعني 'فقط': 'mi taso' (أنا وحدي).",
      phonetic: "تاسو",
      example: { tp: "mi taso", ar: "أنا فقط / بمفردي" }
    },
    "tan": {
      word: "tan",
      unitId: 9,
      lessonId: 2,
      category: "preposition/noun",
      ar: "من / بسبب / أصل / مصدر",
      hint: "تدل على المنشأ والأصل المكاني، أو العلة والسبب: 'tan ni' (لذلك / بسبب هذا).",
      phonetic: "تان",
      example: { tp: "tan ni", ar: "بسبب هذا / لذلك" }
    },
    "ala": {
      word: "ala",
      unitId: 9,
      lessonId: 2,
      category: "adjective/number",
      ar: "لا / ليس / نفي / صفر (0) / عدم",
      hint: "أداة النفي الرئيسية في توكي بونا توضع بعد الفعل أو الصفة.",
      phonetic: "ألا",
      example: { tp: "mi sona ala", ar: "أنا لا أعرف" }
    },
    "ale": {
      word: "ale",
      unitId: 9,
      lessonId: 2,
      category: "adjective/noun/number",
      ar: "كل / جميع / كامل / الكون / مائة (100)",
      hint: "الشُمول والكمال، وأيضاً الكون وكل ما هو موجود، وتُكتب أحياناً 'ali'.",
      phonetic: "ألي",
      example: { tp: "jan ale", ar: "كل الناس / الجميع" }
    },
    "seme": {
      word: "seme",
      unitId: 9,
      lessonId: 2,
      category: "pronoun",
      ar: "ماذا / مَن / أي / أين (أداة الاستفهام)",
      hint: "أداة الاستفهام الكونية: توضع في نفس موقع الإجابة المتوقعة في الجملة.",
      phonetic: "سيمي",
      example: { tp: "sina wile e seme?", ar: "ماذا تريد؟" }
    },
    "o": {
      word: "o",
      unitId: 9,
      lessonId: 2,
      category: "particle",
      ar: "أداة نداء أو أمر (يا... / افعل كذا!)",
      hint: "تُستخدم للنداء: 'jan o!' (يا صاحبي!)، أو لصياغة صيغة الأمر والطلب.",
      phonetic: "أو",
      example: { tp: "o moku!", ar: "كُل! / تناول طعامك!" }
    },
    "a": {
      word: "a",
      unitId: 9,
      lessonId: 2,
      category: "interjection",
      ar: "أداة انفعال وتأكيد (آه / حقاً / بالفعل)",
      hint: "تفيد التعجب والتأكيد والمشاعر الانفعالية: 'pona a!' (رائع حقاً!).",
      phonetic: "آ",
      example: { tp: "pona a!", ar: "ممتاز حقاً وجميل جداً!" }
    },
    "open": {
      word: "open",
      unitId: 9,
      lessonId: 3,
      category: "verb/adjective",
      ar: "يفتح / يبدأ / بداية / مفتوح",
      hint: "الشروع في الأمر أو فتح الأبواب والأوعية.",
      phonetic: "أوبين",
      example: { tp: "o open e lupa", ar: "افتح الباب!" }
    },
    "pini": {
      word: "pini",
      unitId: 9,
      lessonId: 3,
      category: "verb/adjective",
      ar: "ينهي / يغلق / مكتمل / نهاية",
      hint: "عكس open، تدل على الانتهاء والإتمام أو الإغلاق.",
      phonetic: "بيني",
      example: { tp: "pali li pini", ar: "العمل اكتمل وانتهى" }
    },
    "sike": {
      word: "sike",
      unitId: 9,
      lessonId: 3,
      category: "noun/adjective",
      ar: "دائرة / كرة / عجلة / دوران / سنة كاملة",
      hint: "كل ما هو دائري، وحلقة الدوران، وسنة كاملة (دورة الأرض حول الشمس).",
      phonetic: "سيكي",
      example: { tp: "sike suno", ar: "سنة شمسية" }
    },
    "nena": {
      word: "nena",
      unitId: 9,
      lessonId: 3,
      category: "noun",
      ar: "نتوء / تل / جبل / أنف / زر",
      hint: "أي بروز بارز إلى الخارج كالتلال، الأنف في الوجه، أو الأزرار البارزة.",
      phonetic: "نينا",
      example: { tp: "nena ma", ar: "جبل / تل أرضي" }
    },
    "insa": {
      word: "insa",
      unitId: 9,
      lessonId: 4,
      category: "noun/preposition",
      ar: "داخل / باطن / جوف / مركز / بطن",
      hint: "الوسط والداخل المادي أو المعنوي، وأعضاء البطن الداخلية.",
      phonetic: "إنسا",
      example: { tp: "lon insa tomo", ar: "في داخل البيت" }
    },
    "monsi": {
      word: "monsi",
      unitId: 9,
      lessonId: 4,
      category: "noun/preposition",
      ar: "خلف / وراء / ظهر / مؤخرة",
      hint: "الجهة الخلفية أو الجانب المعاكس للوجه.",
      phonetic: "مونسي",
      example: { tp: "lon monsi", ar: "في الخلف / وراء" }
    },
    "sinpin": {
      word: "sinpin",
      unitId: 9,
      lessonId: 4,
      category: "noun/preposition",
      ar: "أمام / وجه / صدر / جدار",
      hint: "المقدمة والواجهة، وجه الإنسان، أو جدار المبنى الأمامي.",
      phonetic: "سينبين",
      example: { tp: "sinpin tomo", ar: "واجهة البيت / جدار المبنى" }
    },
    "poka": {
      word: "poka",
      unitId: 9,
      lessonId: 4,
      category: "noun/preposition",
      ar: "بجانب / قرب / جنب / جوار",
      hint: "القرب المكاني والوجود بجانب الشيء.",
      phonetic: "بوكا",
      example: { tp: "lon poka mi", ar: "بجانبي / إلى جواري" }
    },
    "sama": {
      word: "sama",
      unitId: 9,
      lessonId: 4,
      category: "adjective/preposition",
      ar: "مثل / شبيه / متطابق / نظير",
      hint: "التشابه والمماثلة والمساواة بين أمرين.",
      phonetic: "ساما",
      example: { tp: "ona li sama mi", ar: "هو مثلي تماماً" }
    },
    "weka": {
      word: "weka",
      unitId: 9,
      lessonId: 4,
      category: "adjective/verb",
      ar: "بعيد / غائب / يزيل / يتخلص من",
      hint: "البعد المكاني، الغياب، أو فعل الإزالة والإبعاد.",
      phonetic: "ويكا",
      example: { tp: "o weka e ni", ar: "أبعد هذا / تخلص من هذا!" }
    },

    // --- UNIT 10 (15 words: ku suli words) ---
    "pu": {
      word: "pu",
      unitId: 10,
      lessonId: 1,
      category: "noun/verb",
      ar: "كتاب توكي بونا الرسمي / التفاعل مع كتاب بونا",
      hint: "كلمة رسمية تدل على كتاب Sonja Lang الرسمي الصادر عام 2014.",
      phonetic: "بو",
      example: { tp: "lipu pu", ar: "كتاب بونا الرسمي" }
    },
    "ku": {
      word: "ku",
      unitId: 10,
      lessonId: 1,
      category: "noun/verb",
      ar: "معجم توكي بونا الرسمي (The Toki Pona Dictionary)",
      hint: "تشير إلى معجم Sonja Lang الصادر عام 2021 والرجوع إليه.",
      phonetic: "كو",
      example: { tp: "lipu ku", ar: "معجم بونا الموسع" }
    },
    "epiku": {
      word: "epiku",
      unitId: 10,
      lessonId: 1,
      category: "adjective",
      ar: "ملحمي / رائع / فخم / باهر",
      hint: "صفة تدل على الفخامة والروعة الاستثنائية (من الكلمات المعتمدة في ku).",
      phonetic: "إيبيكو",
      example: { tp: "musi ni li epiku", ar: "هذه اللعبة ملحمية ومدهشة!" }
    },
    "jasima": {
      word: "jasima",
      unitId: 10,
      lessonId: 1,
      category: "noun/verb",
      ar: "مرآة / يعكس / صدى / انعكاس",
      hint: "المرآة وسطح الانعكاس والتردد كصدى الصوت.",
      phonetic: "ياسيما",
      example: { tp: "jasima li lukin", ar: "المرآة تعكس المظهر" }
    },
    "kin": {
      word: "kin",
      unitId: 10,
      lessonId: 2,
      category: "particle",
      ar: "أيضاً / كذلك / بالفعل / حقاً",
      hint: "أداة تأكيد وإضافة توازي 'أيضاً' و'بالفعل'.",
      phonetic: "كين",
      example: { tp: "mi kin", ar: "أنا أيضاً" }
    },
    "kipisi": {
      word: "kipisi",
      unitId: 10,
      lessonId: 2,
      category: "verb/noun",
      ar: "يقطع / يقسم / يشرح / شريحة / قطاع",
      hint: "فعل القطع بالسكين أو التقسيم إلى أجزاء وشرائح.",
      phonetic: "كيبيسي",
      example: { tp: "o kipisi e pan", ar: "اقطع الخبز إلى شرائح!" }
    },
    "kokosila": {
      word: "kokosila",
      unitId: 10,
      lessonId: 2,
      category: "verb",
      ar: "التحدث بلغة أخرى في سياق يجمع متحدثي بونا",
      hint: "كلمة طريفة تعني التحدث بلغة غير توكي بونا عندما يكون الجميع يتحدثونها!",
      phonetic: "كوكوسيلا",
      example: { tp: "o kokosila ala!", ar: "لا تتحدث بغير توكي بونا هنا!" }
    },
    "lanpan": {
      word: "lanpan",
      unitId: 10,
      lessonId: 2,
      category: "verb",
      ar: "يستولي / يأخذ بالقوة / يسرق / يغتصب",
      hint: "الاستيلاء على شيء دون إذن أو أخذه كغنيمة.",
      phonetic: "لانبان",
      example: { tp: "ona li lanpan e mani", ar: "هو استولى على المال" }
    },
    "leko": {
      word: "leko",
      unitId: 10,
      lessonId: 3,
      category: "noun",
      ar: "مكعب / كتلة / طوبة / مربع / زاوية",
      hint: "الأجسام الهندسية المكعبة وحجارة البناء المربعة.",
      phonetic: "ليكو",
      example: { tp: "leko kiwen", ar: "طوبة حجرية مكعبة" }
    },
    "meso": {
      word: "meso",
      unitId: 10,
      lessonId: 3,
      category: "adjective",
      ar: "متوسط / معتدل / عادي / وسط",
      hint: "تصف الحالة الوسطى بين طرفين: ليس حاراً ولا بارداً، بل معتدل.",
      phonetic: "ميسو",
      example: { tp: "seli meso", ar: "دفء معتدل" }
    },
    "misikeke": {
      word: "misikeke",
      unitId: 10,
      lessonId: 3,
      category: "noun",
      ar: "دواء / علاج / صيدلية / طبيب / استشفاء",
      hint: "كل ما يتعلق بالطب، الأدوية، والعقاقير العلاجية.",
      phonetic: "ميسيكيكي",
      example: { tp: "o moku e misikeke", ar: "تناول الدواء والعلاج!" }
    },
    "n": {
      word: "n",
      unitId: 10,
      lessonId: 3,
      category: "interjection",
      ar: "همهمة تفكير / ممم... / تأمل أو موافقة ضمنية",
      hint: "صوت همهمة بالأنف يدل على التفكير أو الموافقة الخافتة.",
      phonetic: "نْ (همهمة)",
      example: { tp: "n... mi sona", ar: "ممم... فهمت عليك" }
    },
    "namako": {
      word: "namako",
      unitId: 10,
      lessonId: 4,
      category: "noun/adjective",
      ar: "بهار / توابل / زخرفة / إضافي / نكهة مميزة",
      hint: "التوابل والبهارات في الطعام، أو الإضافات التزيينية الجميلة.",
      phonetic: "ناماكو",
      example: { tp: "namako li pona e moku", ar: "التوابل تُحسّن مذاق الطعام" }
    },
    "soko": {
      word: "soko",
      unitId: 10,
      lessonId: 4,
      category: "noun",
      ar: "فطر / عيش الغراب",
      hint: "مملكة الفطريات ومشروم الغابات الصالح للأكل.",
      phonetic: "سوكو",
      example: { tp: "soko li lon kasi", ar: "الفطر ينمو قرب النباتات" }
    },
    "tonsi": {
      word: "tonsi",
      unitId: 10,
      lessonId: 4,
      category: "noun/adjective",
      ar: "غير ثنائي الجنس / تنوع جندري",
      hint: "تعبير شامل للهويات الجندرية غير الثنائية والمتحولة.",
      phonetic: "تونسي",
      example: { tp: "jan tonsi", ar: "شخص من الهويات الجندرية غير الثنائية" }
    }
  },

  // --- TOKI PONA GRAMMAR GUIDEBOOK (10 Progressive Rules, Formulas & Explanations in Arabic) ---
  grammarGuide: [
    {
      id: "rule_noun_adjective",
      unitId: 1,
      title: "القاعدة 1: ترتيب الاسم والصفة والمبتدأ البسيط",
      subtitle: "الموصوف أولاً ثم الصفة، واستخدام mi و sina بدون li",
      explanation: [
        "في لغة توكي بونا، يأتي الاسم أولاً ثم تأتي الصفة التي تعدله بعده مباشرة (مثل العربية تماماً: رجلٌ طيب = jan pona).",
        "وعندما يكون الفاعل هو الضمير 'mi' (أنا) أو 'sina' (أنت) بمفرده، نضع الفعل أو الصفة بعده مباشرة بدون أي أداة ربط (mi moku = أنا آكل)."
      ],
      formula: "[الاسم الموصوف] + <span class=\"highlight-pink\">[الصفة]</span><br>[mi / sina] + [فعل / صفة]",
      formulaExplanation: "الكلمة الأولى هي الأساس، والكلمة الثانية تصفها. ومع mi و sina المفردتين لا نضع li مطلقاً.",
      examples: [
        { tp: "jan pona", ar: "شخص طيب (صديق)", hint: "الاسم jan يسبق الصفة pona" },
        { tp: "toki pona", ar: "لغة توكي بونا (الكلام الطيب)", hint: "الموصوف toki والصفة pona" },
        { tp: "mi jan", ar: "أنا إنسان (بدون li)", hint: "فاعل mi لا يأخذ li" },
        { tp: "sina pona", ar: "أنت طيب ورائع (بدون li)", hint: "فاعل sina لا يأخذ li" }
      ],
      warning: "خطأ شائع: لا تقل 'pona jan'، بل قل دائماً 'jan pona'. وتذكر حذف li بعد mi و sina المفردتين!",
      quickTip: "تذكر: تماماً كما في لغتنا العربية (صديقٌ طيب)، نكتب في توكي بونا (jan pona)."
    },
    {
      id: "rule_li",
      unitId: 2,
      title: "القاعدة 2: أداة الربط li مع الضمير الغائب والأسماء",
      subtitle: "أهم أداة نحوية لفصل الفاعل عن الفعل أو الوصف",
      explanation: [
        "أداة الربط 'li' تُوضع دائماً بعد الفاعل لفصله عن الفعل أو الصفة التي تصفه.",
        "نستخدم 'li' مع ضمير الغائب 'ona' (هو/هي/هم) ومع جميع الأسماء الصريحة (مثل jan و soweli و suno)."
      ],
      formula: "[ona / أي اسم صريح] + <span class=\"highlight-pink\">li</span> + [فعل / صفة]",
      formulaExplanation: "مع ona والأسماء الصريحة نضع li دائماً لفصل الفاعل عن الخبر.",
      examples: [
        { tp: "ona li jan", ar: "هو إنسان", hint: "ona ضمير غائب يحتاج li" },
        { tp: "suno li suli", ar: "الشمس عظيمة ومشرقة", hint: "suno اسم صريح يحتاج li" },
        { tp: "soweli li lape", ar: "الحيوان ينام", hint: "soweli اسم صريح يحتاج li" },
        { tp: "kasi li pona", ar: "النبات مزهر وجميل", hint: "kasi اسم صريح يحتاج li" }
      ],
      warning: "تحذير: لا تحذف li مع ona أو الأسماء، وتذكر حذفها فقط مع mi و sina المفردتين!",
      quickTip: "القاعدة الذهبية: 'mi' و 'sina' أصدقاء بدون li، أما 'ona' وبقية الكلمات فتحتاج li دائماً!"
    },
    {
      id: "rule_e",
      unitId: 3,
      title: "القاعدة 3: أداة المفعول به المباشر e",
      subtitle: "تحديد الشيء أو الكائن الذي يقع عليه الفعل",
      explanation: [
        "عندما يقوم الفاعل بفعل متعدٍ يقع على مفعول به، نضع الأداة 'e' مباشرة قبل المفعول به.",
        "أداة 'e' بمفردها ليس لها معنى حسي، بل وظيفتها النحوية فقط التنبيه: الكلمة التالية هي المفعول به!"
      ],
      formula: "[فاعل] + (li) + [فعل متعدٍ] + <span class=\"highlight-pink\">e</span> + [المفعول به]",
      formulaExplanation: "تأتي e دائماً قبل الاسم الذي وقع عليه الفعل.",
      examples: [
        { tp: "mi moku e kili", ar: "أنا آكل الفاكهة", hint: "kili هي المأكول فسبقتها e" },
        { tp: "ona li jo e pan", ar: "هو يملك خبزاً", hint: "pan هو المملوك فسبقته e" },
        { tp: "mi wile e telo", ar: "أريد ماءً", hint: "telo هو المطلوب فسبقته e" },
        { tp: "ona li lukin e lipu", ar: "هو يقرأ كتاباً أو وثيقة", hint: "lipu هو المقروء فسبقته e" }
      ],
      warning: "انتبه: الأفعال اللازمة أو حروف الجر (مثل lon أو tawa) لا تحتاج e (مثل: mi lon tomo).",
      quickTip: "إذا كان الفعل يقع على شيء: ضع 'e' قبل ذلك الشيء فوراً!"
    },
    {
      id: "rule_prepositions",
      unitId: 4,
      title: "القاعدة 4: حروف الجر والمكان الخمسة",
      subtitle: "lon (في/على)، tawa (إلى)، tan (من)، kepeken (بواسطة)، sama (مثل)",
      explanation: [
        "في توكي بونا، حروف الجر الخمسة (lon, tawa, tan, kepeken, sama) تأتي بعد الفعل مباشرة بدون أداة e.",
        "فهي تحدد الموقع أو الاتجاه أو الأصل أو الأداة، ولا تُعامل معاملة المفعول به المباشر."
      ],
      formula: "[فاعل] + (li) + [فعل] + <span class=\"highlight-pink\">[lon / tawa / tan / kepeken / sama]</span> + [الاسم]",
      formulaExplanation: "حروف الجر لا تسبقها e عندما تؤدي وظيفة حرف الجر.",
      examples: [
        { tp: "mi lon tomo", ar: "أنا في البيت (lon = في/على)", hint: "lon حرف جر مكان بدون e" },
        { tp: "ona li tawa ma", ar: "هو يذهب إلى الريف (tawa = إلى)", hint: "tawa حرف جر اتجاه بدون e" },
        { tp: "mi kama tan ma suli", ar: "أنا قادم من بلد كبير (tan = من)", hint: "tan حرف جر أصل بدون e" },
        { tp: "mi kepeken ilo", ar: "أنا أستخدم أداة (kepeken = بواسطة)", hint: "kepeken حرف جر وسيلة بدون e" },
        { tp: "ona li sama mi", ar: "هو يشبهني تماماً (sama = مثل)", hint: "sama حرف جر مقارنة" }
      ],
      warning: "خطأ شائع: لا تقل 'mi tawa e tomo' بل قل 'mi tawa tomo' لأن tawa هنا تعني 'إلى' كحرف جر.",
      quickTip: "تذكر: حروف الجر تأتي مباشرة قبل المكان أو الأداة بدون وضع e قبلها!"
    },
    {
      id: "rule_negation_question",
      unitId: 5,
      title: "القاعدة 5: النفي وأدوات الاستفهام (ala و seme)",
      subtitle: "كيف تنفي وتسأل دون تغيير ترتيب كلمات الجملة؟",
      explanation: [
        "في توكي بونا، لا نغير ترتيب الجملة عند السؤال! ضع كلمة 'seme' (ماذا/مَن/أي) في نفس موضع الإجابة.",
        "وللنفي، ضع كلمة 'ala' بعد الكلمة المراد نفيها مباشرة. ولسؤال نعم/لا: كرر الكلمة مع ala (مثل: pona ala pona?)."
      ],
      formula: "[فعل / صفة] + <span class=\"highlight-pink\">ala</span> (نفي)<br>[جملة مع وضع <span class=\"highlight-pink\">seme</span> مكان المجهول]<br>[فعل] + <span class=\"highlight-pink\">ala</span> + [نفس الفعل]؟",
      formulaExplanation: "ala تنفي الكلمة السابقة، seme تسأل عن المجهول، و [فعل ala فعل] لسؤال نعم/لا.",
      examples: [
        { tp: "mi sona ala", ar: "أنا لا أعلم (نفي بعد الفعل)", hint: "sona + ala تفيد النفي" },
        { tp: "nimi sina li seme?", ar: "ما اسمك؟ (حرفياً: اسمك ماذا؟)", hint: "seme في موضع الخبر" },
        { tp: "sina wile e seme?", ar: "ماذا تريد؟", hint: "seme في موضع المفعول به بعد e" },
        { tp: "sina ken ala ken?", ar: "هل تستطيع أم لا؟", hint: "سؤال نعم/لا بتكرار ken" }
      ],
      warning: "لا تقلب الفاعل مع الفعل أبداً عند السؤال كما في الإنجليزية؛ الترتيب يبقى ثابتاً دائماً!",
      quickTip: "ضع 'seme' مكان الكلمة المجهولة وكأنك تملأ الفراغ في جملة عادية!"
    },
    {
      id: "rule_pi",
      unitId: 6,
      title: "القاعدة 6: أداة التجميع الوصفي pi",
      subtitle: "أقواس التجميع الرياضية لربط الأوصاف المركبة",
      explanation: [
        "أداة 'pi' تعمل كأقواس رياضية تجمع صفتين أو وصفيْن معاً ليعدلا الاسم السابق كوحدة واحدة.",
        "بدون 'pi'، كل صفة تعدل الكلمة السابقة لها مباشرة بالترتيب المتسلسل."
      ],
      formula: "[اسم] + <span class=\"highlight-pink\">pi</span> + [صفة 1] + [صفة 2]",
      formulaExplanation: "تجمع pi الصفتين التاليتين معاً لتصبحا وصفاً للموصوف السابق.",
      examples: [
        { tp: "tomo pi jan pona", ar: "بيت الصديق الصالح (بيت خاص بشخص طيب)", hint: "pi تجمع jan pona كمالك للبيت" },
        { tp: "ilo pi sitelen pona", ar: "أداة كتابة توكي بونا (قلم الرموز)", hint: "pi تجمع sitelen pona" },
        { tp: "kulupu pi toki pona", ar: "مجتمع لغة توكي بونا", hint: "pi تجمع toki pona" },
        { tp: "jan pi ma tomo", ar: "شخص المدينة (ابن المدينة)", hint: "ma tomo = مدينة" }
      ],
      warning: "خطأ شائع جداً: لا تستخدم 'pi' قبل كلمة واحدة فقط! لا تقل 'tomo pi mi' بل قل ببساطة 'tomo mi'.",
      quickTip: "تذكر: 'pi' تحتاج بعدها كلمتين على الأقل، وهي بمثابة فتح قوسين ( ) لتجميع المعنى."
    },
    {
      id: "rule_la",
      unitId: 7,
      title: "القاعدة 7: أداة السياق والشرط والزمن la",
      subtitle: "بناء الجمل المركبة: إذا كان كذا... يحدث كذا",
      explanation: [
        "أداة 'la' تربط بين سياق الكلام (ظرف زمان، ظرف مكان، أو جملة شرطية) وبين الحدث الرئيسي الناتج.",
        "التركيب دائماً: [السياق / الزمان / الشرط] la [الجملة الرئيسية]."
      ],
      formula: "[سياق / زمان / شرط] + <span class=\"highlight-pink\">la</span> + [الحدث الرئيسي]",
      formulaExplanation: "تفصل la بين المقدمة الظرفية أو الشرطية والنتيجة.",
      examples: [
        { tp: "tenpo ni la mi moku", ar: "في هذا الوقت (الآن)، أنا آكل", hint: "tenpo ni (الآن) + la" },
        { tp: "tenpo pimeja la mi lape", ar: "في وقت الليل، أنا أنام", hint: "tenpo pimeja (الليل) + la" },
        { tp: "sina wile la mi pali", ar: "إذا أردتَ ذلك، سأعمل", hint: "sina wile (إذا رغبت) + la" }
      ],
      warning: "لا تغير ترتيب العبارة؛ ضع ظرف الزمان أو الشرط أولاً متبوعاً بـ 'la' ثم الجملة الرئيسية.",
      quickTip: "تذكر: 'la' تعني (في سياق...) أو (إذا كان الأمر كذا... فإن)."
    },
    {
      id: "rule_o",
      unitId: 8,
      title: "القاعدة 8: أداة النداء والأمر والتمني o",
      subtitle: "المنادى، صيغ الأمر المباشر، والدعاء",
      explanation: [
        "تُستخدم 'o' في 3 مواضع: بعد المنادى (jan o! = يا فلان)، وفي بداية جملة الأمر المباشر (o moku! = كُلْ!)، وللتمني والدعاء (o pona! = كن بخير!).",
        "في جملة الأمر، تحل 'o' محل الفاعل وأداة li معاً."
      ],
      formula: "[المنادى] + <span class=\"highlight-pink\">o</span>!<br><span class=\"highlight-pink\">o</span> + [فعل]! (أمر مباشر)",
      formulaExplanation: "o بعد الاسم للنداء، و o في البداية للأمر المباشر.",
      examples: [
        { tp: "jan pona o!", ar: "يا صديقي العزيز!", hint: "o بعد الاسم تفيد النداء" },
        { tp: "o moku!", ar: "تناول طعامك! / كُلْ!", hint: "o في بداية الجملة تفيد الأمر" },
        { tp: "o lape pona!", ar: "نوماً هنيئاً!", hint: "أمر وتمنٍّ طيب" },
        { tp: "mama o, toki!", ar: "يا والدي، مرحباً!", hint: "نداء وتحية" }
      ],
      warning: "في جمل الأمر المباشر لا تذكر الفاعل؛ قل 'o moku' وليس 'sina o moku' إلا إذا أردت التأكيد والنداء معاً.",
      quickTip: "تذكر: 'o' هي نداء الحبيب وأمر الصديق وتمني الخير!"
    },
    {
      id: "rule_conjunctions_numbers",
      unitId: 9,
      title: "القاعدة 9: أدوات العطف والتخيير ونظام الأرقام",
      subtitle: "en بين الفاعلين، anu للتخيير، ونظام العد البسيط",
      explanation: [
        "أداة 'en' تُستخدم حصراً للجمع بين فاعلين في بداية الجملة (mi en ona li jan).",
        "وأداة 'anu' تفيد التخيير (ماء أم فاكهة؟). وأرقام توكي بونا تعتمد على البساطة: wan (1)، tu (2)، mute (كثير)، ale (100 أو الكل)، و nanpa للترتيب."
      ],
      formula: "[فاعل 1] + <span class=\"highlight-pink\">en</span> + [فاعل 2] + li...<br>[خيار 1] + <span class=\"highlight-pink\">anu</span> + [خيار 2]<br>nanpa + [رقم] (للترتيب)",
      formulaExplanation: "en تجمع بين الفاعلين، anu للتخيير، و nanpa للرقم الترتيبي.",
      examples: [
        { tp: "mi en ona li jan", ar: "أنا وهو إنسانان", hint: "en تربط بين فاعلين" },
        { tp: "telo anu kili?", ar: "ماء أم فاكهة؟", hint: "anu تفيد الاختيار" },
        { tp: "jan wan li lon", ar: "شخص واحد موجود", hint: "wan تفيد العدد واحد" },
        { tp: "soweli tu", ar: "حيوانان اثنان", hint: "tu تفيد العدد اثنين" },
        { tp: "nanpa wan", ar: "المركز الأول / رقم واحد", hint: "nanpa تحول الرقم إلى ترتيبي" }
      ],
      warning: "لا تستخدم 'en' للربط بين فعلين أو جملتين؛ en مخصصة حصراً للربط بين الفاعلين!",
      quickTip: "توكي بونا تفضل البساطة: ركّز على المعنى (قليل، كثير، كل) بدلاً من الحساب المعقد!"
    },
    {
      id: "rule_ku_suli",
      unitId: 10,
      title: "القاعدة 10: كلمات معجم ku suli والتعابير المتقدمة",
      subtitle: "الكلمات المعتمدة بعد pu وتراكيب الكلام البليغ",
      explanation: [
        "معجم Toki Pona Dictionary (ku) أضاف 17 كلمة شائعة اعتمدتها Sonja Lang رسمياً (ku suli) مثل epiku و jasima و tonsi و misikeke.",
        "هذه الكلمات تثري لغة الحوار وتسمح بالتعبير عن مفاهيم عصرية ودقيقة مع الحفاظ على روح البساطة."
      ],
      formula: "استخدام كلمات ku suli المعتمدة في تراكيب الجمل الأصلية مع li و e و pi",
      formulaExplanation: "تتبع كلمات ku نفس القواعد النحوية تماماً كباقي كلمات pu.",
      examples: [
        { tp: "lipu pu li pona", ar: "كتاب بونا الرسمي رائع", hint: "pu = الكتاب الرسمي لتوكي بونا" },
        { tp: "lipu ku li suli", ar: "معجم بونا الموسع شامل ومفيد", hint: "ku = معجم توكي بونا" },
        { tp: "ni li epiku a!", ar: "هذا ملحمي ورائع حقاً!", hint: "epiku = ملحمي / فخم" },
        { tp: "jasima li lukin", ar: "المرآة تعكس النور والمظهر", hint: "jasima = مرآة / انعكاس" },
        { tp: "o kipisi e pan", ar: "اقطع الخبز!", hint: "kipisi = يقطع / تقسيم" },
        { tp: "kijetesantakalu li suwi", ar: "حيوان الراكون ظريف ومحبوب", hint: "kijetesantakalu = فصيلة الراكونيات" }
      ],
      warning: "كلمات ku مكملة وممتعة؛ لكن قوة توكي بونا الحقيقية تكمن في قدرتك على التعبير بالكلمات البسيطة الأصلية!",
      quickTip: "استمتع بكلمات ku واعتبرها أوسمة إتقان لغوي متقدم في ختام رحلتك!"
    }
  ],

  // 10 Progressive Units Definition with Pedagogical Progression & 137 Words
  units: [
    {
      id: 1,
      title: "الوحدة 1: الأساسيات والجملة البسيطة",
      subtitle: "الضمائر، التحيات، والجملة بدون li",
      description: "انطلاقتك الأولى في توكي بونا: تعلم الضميرين mi و sina، وترتيب الصفة بعد الموصوف، والجمل البسيطة بدون أداة li.",
      color: "#B8FF29",
      icon: "🌱",
      grammarRuleIds: ["rule_noun_adjective"],
      lessons: [
        {
          id: 1,
          unitId: 1,
          title: "الدرس 1: الضمائر الأساسية والكينونة",
          words: ["mi", "sina", "jan", "pona"],
          grammarIntroIds: ["rule_noun_adjective"],
          xpReward: 25,
          sentences: [
            { tp: "mi jan", ar: "أنا إنسان" },
            { tp: "sina pona", ar: "أنت طيب ورائع" },
            { tp: "jan pona", ar: "شخص طيب (صديق)" },
            { tp: "mi pona", ar: "أنا بخير" }
          ]
        },
        {
          id: 2,
          unitId: 1,
          title: "الدرس 2: التحية والأحكام والغذاء",
          words: ["toki", "ike", "ni", "moku"],
          xpReward: 25,
          sentences: [
            { tp: "toki!", ar: "مرحباً!" },
            { tp: "toki pona", ar: "لغة توكي بونا (الكلام الطيب)" },
            { tp: "mi moku", ar: "أنا آكل" },
            { tp: "sina ike", ar: "أنت سيء أو مؤذٍ" }
          ]
        },
        {
          id: 3,
          unitId: 1,
          title: "الدرس 3: الوصف والكيان والمأوى والماء",
          words: ["suli", "lili", "tomo", "telo"],
          xpReward: 25,
          sentences: [
            { tp: "tomo suli", ar: "بيت كبير" },
            { tp: "telo lili", ar: "ماء قليل" },
            { tp: "mi suli", ar: "أنا كبير أو بالغ" },
            { tp: "sina lili", ar: "أنت صغير" }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "الوحدة 2: الضمير الغائب وأداة الربط li",
      subtitle: "استخدام li مع ona والأسماء الصريحة",
      description: "القاعدة الذهبية في توكي بونا: متى نضع أداة الربط li بعد الفاعل لفصله عن الفعل أو الوصف.",
      color: "#00F0FF",
      icon: "⚡",
      grammarRuleIds: ["rule_li"],
      lessons: [
        {
          id: 1,
          unitId: 2,
          title: "الدرس 1: أداة الربط والضمير الغائب والطبيعة",
          words: ["li", "ona", "kasi", "suno"],
          grammarIntroIds: ["rule_li"],
          xpReward: 25,
          sentences: [
            { tp: "ona li jan", ar: "هو إنسان" },
            { tp: "suno li suli", ar: "الشمس عظيمة ومشرقة" },
            { tp: "kasi li pona", ar: "النبات مزهر وجميل" },
            { tp: "ona li pona", ar: "هو شخص طيب" }
          ]
        },
        {
          id: 2,
          unitId: 2,
          title: "الدرس 2: الكائنات والحيوانات",
          words: ["soweli", "waso", "kala", "pipi"],
          xpReward: 25,
          sentences: [
            { tp: "soweli li pona", ar: "الحيوان لطيف" },
            { tp: "waso li suli", ar: "الطائر كبير" },
            { tp: "kala li lili", ar: "السمكة صغيرة" },
            { tp: "pipi li ike", ar: "الحشرة مزعجة" }
          ]
        },
        {
          id: 3,
          unitId: 2,
          title: "الدرس 3: الأفعال والحركة والاستقرار",
          words: ["lape", "pali", "kama", "awen"],
          xpReward: 30,
          sentences: [
            { tp: "ona li lape", ar: "هو نائم" },
            { tp: "jan li pali", ar: "الشخص يعمل" },
            { tp: "soweli li kama", ar: "الحيوان قادم" },
            { tp: "waso li awen", ar: "الطائر باقٍ ومستقر" }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "الوحدة 3: الفعل المتعدي وأداة المفعول به e",
      subtitle: "تحديد المفعول به المباشر في الجملة",
      description: "تعلم كيفية توجيه الفعل نحو المفعول به باستخدام الأداة النحوية e وأفعال التملك والعطاء والحواس.",
      color: "#FFE600",
      icon: "🎯",
      grammarRuleIds: ["rule_e"],
      lessons: [
        {
          id: 1,
          unitId: 3,
          title: "الدرس 1: أداة المفعول به والغذاء والتملك",
          words: ["e", "kili", "pan", "jo"],
          grammarIntroIds: ["rule_e"],
          xpReward: 25,
          sentences: [
            { tp: "mi moku e kili", ar: "أنا آكل الفاكهة" },
            { tp: "ona li jo e pan", ar: "هو يملك خبزاً" },
            { tp: "jan li moku e pan", ar: "الشخص يتناول الخبز" },
            { tp: "mi jo e kili", ar: "لدي فواكه" }
          ]
        },
        {
          id: 2,
          unitId: 3,
          title: "الدرس 2: الرغبة والعطاء والأدوات والأوعية",
          words: ["pana", "wile", "ilo", "poki"],
          xpReward: 25,
          sentences: [
            { tp: "mi wile e telo", ar: "أريد ماءً" },
            { tp: "ona li pana e moku", ar: "هو يقدم الطعام" },
            { tp: "jan li jo e ilo", ar: "الشخص يملك أداة" },
            { tp: "mi wile e poki", ar: "أحتاج إلى وعاء أو كوب" }
          ]
        },
        {
          id: 3,
          unitId: 3,
          title: "الدرس 3: الرؤية والسمع والوثائق والصيد",
          words: ["lukin", "kute", "lipu", "alasa", "moli"],
          xpReward: 30,
          sentences: [
            { tp: "mi lukin e lipu", ar: "أنا أقرأ كتاباً أو وثيقة" },
            { tp: "ona li kute e toki", ar: "هو يستمع إلى الحديث" },
            { tp: "soweli li alasa e kala", ar: "الحيوان يصطاد السمك" },
            { tp: "ilo li moli e pipi", ar: "الأداة تقضي على الحشرة" }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "الوحدة 4: حروف الجر والمكان",
      subtitle: "الوجود والحركة والأدوات بدون أداة e",
      description: "استخدام حروف الجر الخمسة (lon، tawa، tan، kepeken، sama) للتعبير عن المكان والزمان والاتجاه والوسيلة.",
      color: "#FF4FA3",
      icon: "🧭",
      grammarRuleIds: ["rule_prepositions"],
      lessons: [
        {
          id: 1,
          unitId: 4,
          title: "الدرس 1: الوجود والحركة والأصل والأدوات",
          words: ["lon", "tawa", "tan", "kepeken"],
          grammarIntroIds: ["rule_prepositions"],
          xpReward: 25,
          sentences: [
            { tp: "mi lon tomo", ar: "أنا في البيت" },
            { tp: "ona li tawa ma", ar: "هو يذهب إلى الريف أو الأرض" },
            { tp: "mi kama tan ma suli", ar: "أنا قادم من بلد كبير" },
            { tp: "mi kepeken ilo", ar: "أنا أستخدم أداة" }
          ]
        },
        {
          id: 2,
          unitId: 4,
          title: "الدرس 2: التشبيه والأرض والسماء والأعماق",
          words: ["sama", "ma", "sewi", "anpa"],
          xpReward: 25,
          sentences: [
            { tp: "ona li sama mi", ar: "هو يشبهني تماماً" },
            { tp: "mun li lon sewi", ar: "القمر في السماء العليا" },
            { tp: "soweli li lon anpa", ar: "الحيوان في الأسفل" },
            { tp: "ma mi li suli", ar: "بلادنا واسعة" }
          ]
        },
        {
          id: 3,
          unitId: 4,
          title: "الدرس 3: التموضع المكاني والجهات والبعد",
          words: ["insa", "monsi", "sinpin", "poka", "weka"],
          xpReward: 30,
          sentences: [
            { tp: "mi lon insa tomo", ar: "أنا في داخل البيت" },
            { tp: "ona li lon monsi mi", ar: "هو خلفي" },
            { tp: "jan li lon sinpin", ar: "الشخص في المقدمة أو أمامي" },
            { tp: "tomo li weka", ar: "البيت بعيد" }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "الوحدة 5: النفي وأدوات الاستفهام",
      subtitle: "طرح الأسئلة والنفي بـ ala و seme وصيغة X ala X",
      description: "أسرار الاستفهام والنفي في توكي بونا: لا تغيير في ترتيب الجملة، مع التعبير عن المشاعر والتفكير.",
      color: "#B8FF29",
      icon: "❓",
      grammarRuleIds: ["rule_negation_question"],
      lessons: [
        {
          id: 1,
          unitId: 5,
          title: "الدرس 1: أدوات النفي والاستفهام والعلم والقدرة",
          words: ["ala", "seme", "sona", "ken"],
          grammarIntroIds: ["rule_negation_question"],
          xpReward: 25,
          sentences: [
            { tp: "mi sona ala", ar: "أنا لا أعلم" },
            { tp: "nimi sina li seme?", ar: "ما اسمك؟" },
            { tp: "sina ken ala ken?", ar: "هل تستطيع أم لا؟" },
            { tp: "sina wile e seme?", ar: "ماذا تريد؟" }
          ]
        },
        {
          id: 2,
          unitId: 5,
          title: "الدرس 2: المشاعر والحب والتسلية والاختلاف",
          words: ["pilin", "olin", "musi", "ante"],
          xpReward: 25,
          sentences: [
            { tp: "pilin mi li pona", ar: "أنا مرتاح وسعيد" },
            { tp: "mi olin e sina", ar: "أنا أحبك" },
            { tp: "ni li musi mute", ar: "هذا مسلٍ جداً" },
            { tp: "ijo ni li ante", ar: "هذا الشيء مختلف" }
          ]
        },
        {
          id: 3,
          unitId: 5,
          title: "الدرس 3: الصراع والتعطل والخوف والغرابة",
          words: ["pakala", "utala", "monsuta", "nasa", "jaki"],
          xpReward: 30,
          sentences: [
            { tp: "ilo li pakala", ar: "الأداة تعطلت" },
            { tp: "utala li ike", ar: "الحرب والقتال سيء" },
            { tp: "soweli monsuta", ar: "حيوان مرعب ومخيف" },
            { tp: "telo jaki", ar: "ماء ملوث أو متسخ" }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "الوحدة 6: أداة التجميع pi",
      subtitle: "تجميع الأوصاف المتعددة كأقواس رياضية",
      description: "إتقان استخدام أداة pi لتجميع كلمتين وصفيّتين فأكثر لتعديل الاسم السابق، مع مفردات المجتمع والأدوات.",
      color: "#00F0FF",
      icon: "🔗",
      grammarRuleIds: ["rule_pi"],
      lessons: [
        {
          id: 1,
          unitId: 6,
          title: "الدرس 1: أداة التجميع والمجتمع والمنهج والأصوات",
          words: ["pi", "kulupu", "nasin", "kalama"],
          grammarIntroIds: ["rule_pi"],
          xpReward: 25,
          sentences: [
            { tp: "tomo pi jan pona", ar: "بيت الصديق" },
            { tp: "kulupu pi toki pona", ar: "مجتمع لغة توكي بونا" },
            { tp: "nasin pi jan pona", ar: "منهج الشخص الصالح" },
            { tp: "kalama pi toki pona", ar: "أصوات لغة توكي بونا" }
          ]
        },
        {
          id: 2,
          unitId: 6,
          title: "الدرس 2: الأثاث والمنافذ واللباس والعصي",
          words: ["supa", "lupa", "len", "palisa"],
          xpReward: 25,
          sentences: [
            { tp: "lipu li lon supa", ar: "الكتاب على الطاولة" },
            { tp: "o open e lupa", ar: "افتح الباب أو النافذة" },
            { tp: "len mi li pona", ar: "ثوبي نظيف وجميل" },
            { tp: "palisa suli", ar: "عصا طويلة أو فرع كبير" }
          ]
        },
        {
          id: 3,
          unitId: 6,
          title: "الدرس 3: التجارة والمال والفم والرموز",
          words: ["esun", "mani", "uta", "ijo", "sitelen"],
          xpReward: 30,
          sentences: [
            { tp: "ilo pi sitelen pona", ar: "أداة كتابة توكي بونا (قلم الرموز)" },
            { tp: "mi tawa esun", ar: "أنا ذاهب إلى السوق" },
            { tp: "ona li jo e mani", ar: "هو يملك المال" },
            { tp: "uta li toki", ar: "الفم يتكلم" }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "الوحدة 7: السياق والشرط والزمن la",
      subtitle: "الجمل المركبة وظروف الزمان والشرط",
      description: "بناء الجمل المتقدمة باستخدام أداة la لربط الزمان والشرط بالنتيجة، مع مفردات الزمن والطبيعة.",
      color: "#FFE600",
      icon: "⏳",
      grammarRuleIds: ["rule_la"],
      lessons: [
        {
          id: 1,
          unitId: 7,
          title: "الدرس 1: أداة السياق والزمن والدورات والقمر",
          words: ["la", "tenpo", "sike", "mun"],
          grammarIntroIds: ["rule_la"],
          xpReward: 25,
          sentences: [
            { tp: "tenpo ni la mi moku", ar: "في هذا الوقت، أنا آكل" },
            { tp: "tenpo pimeja la mi lape", ar: "في الليل، أنا أنام" },
            { tp: "sike suno li suli", ar: "دورة الشمس سنوية وعظيمة" },
            { tp: "mun li suno", ar: "القمر يضيء ليلاً" }
          ]
        },
        {
          id: 2,
          unitId: 7,
          title: "الدرس 2: البدايات والنهايات والمرتفعات والصخور",
          words: ["open", "pini", "nena", "kiwen"],
          xpReward: 25,
          sentences: [
            { tp: "tenpo pali li open", ar: "بدأ وقت العمل" },
            { tp: "tenpo pali li pini", ar: "انتهى وقت العمل" },
            { tp: "nena ma li suli", ar: "الجبل والتل مرتفع" },
            { tp: "kiwen li wawa", ar: "الصخرة صلبة وقوية" }
          ]
        },
        {
          id: 3,
          unitId: 7,
          title: "الدرس 3: العناصر والمناخ والحرارة والأسماء",
          words: ["seli", "lete", "kon", "ko", "nimi"],
          xpReward: 30,
          sentences: [
            { tp: "sina wile la mi pali", ar: "إذا أردتَ، سأعمل" },
            { tp: "seli li suli", ar: "النار قوية وساخنة" },
            { tp: "kon li lete", ar: "الهواء والرياح باردة" },
            { tp: "nimi sina li pona", ar: "اسمك جميل وطيب" }
          ]
        }
      ]
    },
    {
      id: 8,
      title: "الوحدة 8: النداء والأمر والتمني o",
      subtitle: "المنادى، صيغ الأمر المباشر، والدعاء",
      description: "كيف تنادي شخصاً (jan o!)، وتوجه أمراً مباشراً (o moku!)، أو تتمنى الخير، مع مفردات الجسد والأسرة.",
      color: "#FF4FA3",
      icon: "📣",
      grammarRuleIds: ["rule_o"],
      lessons: [
        {
          id: 1,
          unitId: 8,
          title: "الدرس 1: أداة النداء والتعجب والأصوات والحلاوة",
          words: ["o", "a", "mu", "suwi"],
          grammarIntroIds: ["rule_o"],
          xpReward: 25,
          sentences: [
            { tp: "jan pona o!", ar: "يا صديقي العزيز!" },
            { tp: "o moku!", ar: "تناول طعامك! / كُلْ!" },
            { tp: "o lape pona!", ar: "نوماً هنيئاً!" },
            { tp: "kili suwi li pona a!", ar: "الفاكهة الحلوة لذيذة حقاً!" }
          ]
        },
        {
          id: 2,
          unitId: 8,
          title: "الدرس 2: العائلة والنوع الإنساني",
          words: ["mama", "meli", "mije", "unpa"],
          xpReward: 25,
          sentences: [
            { tp: "mama o, toki!", ar: "يا والدي، مرحباً!" },
            { tp: "jan meli li pona", ar: "المرأة صالحة وطيبة" },
            { tp: "jan mije li pali", ar: "الرجل يعمل بجد" },
            { tp: "mama li olin e mi", ar: "والداي يحبانني" }
          ]
        },
        {
          id: 3,
          unitId: 8,
          title: "الدرس 3: الرأس وأطراف الجسد والعيون والجدة",
          words: ["lawa", "sijelo", "luka", "noka", "oko", "sin"],
          xpReward: 30,
          sentences: [
            { tp: "o lukin kepeken oko", ar: "انظر بالعينين!" },
            { tp: "luka mi li pali", ar: "يدي تصنع وتعمل" },
            { tp: "noka li tawa", ar: "الأقدام تمشي وتسير" },
            { tp: "ilo sin li pona", ar: "الأداة الجديدة ممتازة" }
          ]
        }
      ]
    },
    {
      id: 9,
      title: "الوحدة 9: التعدد والروابط والأرقام",
      subtitle: "أداة العطف en، التخيير anu، ونظام الأرقام والألوان",
      description: "الربط بين الفاعلين باستخدام en، والخيارات باستخدام anu، ونظام الأعداد البسيط والألوان والصفات.",
      color: "#00F0FF",
      icon: "🔢",
      grammarRuleIds: ["rule_conjunctions_numbers"],
      lessons: [
        {
          id: 1,
          unitId: 9,
          title: "الدرس 1: الروابط وحروف العطف والتأكيد",
          words: ["en", "anu", "taso", "kin"],
          grammarIntroIds: ["rule_conjunctions_numbers"],
          xpReward: 25,
          sentences: [
            { tp: "mi en ona li jan", ar: "أنا وهو إنسانان" },
            { tp: "telo anu kili?", ar: "ماء أم فاكهة؟" },
            { tp: "mi wile e telo taso", ar: "أريد ماءً فقط" },
            { tp: "mi kin li sona", ar: "أنا أيضاً أعلم ذلك" }
          ]
        },
        {
          id: 2,
          unitId: 9,
          title: "الدرس 2: نظام الأعداد والترتيب البسيط",
          words: ["wan", "tu", "mute", "ale", "nanpa"],
          xpReward: 25,
          sentences: [
            { tp: "jan wan li lon", ar: "شخص واحد موجود" },
            { tp: "soweli tu li lape", ar: "حيوانان اثنان نائمان" },
            { tp: "kili mute li lon supa", ar: "فواكه كثيرة على الطاولة" },
            { tp: "jan ale li pona", ar: "كل الناس طيبون" }
          ]
        },
        {
          id: 3,
          unitId: 9,
          title: "الدرس 3: القوة والأبيض والأسود والظلال",
          words: ["wawa", "kule", "walo", "pimeja"],
          xpReward: 25,
          sentences: [
            { tp: "nanpa wan li wawa", ar: "صاحب المركز الأول قوي ومقتدر" },
            { tp: "kule li pona", ar: "اللون مبهج وجميل" },
            { tp: "lipu walo", ar: "ورقة بيضاء أو صفحة ناصعة" },
            { tp: "tenpo pimeja", ar: "وقت الظلام والليل" }
          ]
        },
        {
          id: 4,
          unitId: 9,
          title: "الدرس 4: الألوان الزاهية والجلد والأسطح",
          words: ["loje", "jelo", "laso", "selo"],
          xpReward: 30,
          sentences: [
            { tp: "kili loje li suwi", ar: "الثمرة الحمراء حلوة المذاق" },
            { tp: "suno jelo", ar: "شمس صفراء مشرقة" },
            { tp: "telo laso", ar: "ماء أزرق / بحر صافٍ" },
            { tp: "selo soweli", ar: "جلد الحيوان أو فراؤه" }
          ]
        }
      ]
    },
    {
      id: 10,
      title: "الوحدة 10: كلمات ku suli والتعابير المتقدمة",
      subtitle: "معجم ku الرسمي والمفردات المعتمدة الحديثة",
      description: "المستوى الأسطوري الختامي: إتقان كافة الكلمات المضافة رسمياً بعد كتاب pu وتراكيب الكلام البليغ.",
      color: "#B8FF29",
      icon: "👑",
      grammarRuleIds: ["rule_ku_suli"],
      lessons: [
        {
          id: 1,
          unitId: 10,
          title: "الدرس 1: كتب بونا والمعاجم والروعة والمرايا",
          words: ["pu", "ku", "epiku", "jasima"],
          grammarIntroIds: ["rule_ku_suli"],
          xpReward: 30,
          sentences: [
            { tp: "lipu pu li pona", ar: "كتاب بونا الرسمي رائع ومتقن" },
            { tp: "lipu ku li suli", ar: "معجم بونا الموسع ku شامل ومفيد" },
            { tp: "ni li epiku a!", ar: "هذا إنجاز ملحمي ورائع حقاً!" },
            { tp: "jasima li lukin", ar: "المرآة تعكس النور والمظهر" }
          ]
        },
        {
          id: 2,
          unitId: 10,
          title: "الدرس 2: التقطيع واللغات والاستيلاء والمكعبات",
          words: ["kipisi", "kokosila", "lanpan", "leko"],
          xpReward: 30,
          sentences: [
            { tp: "o kipisi e pan", ar: "اقطع الخبز!" },
            { tp: "o kokosila ala!", ar: "لا تتكلم بلغة أخرى داخل مجتمع بونا!" },
            { tp: "ona li lanpan e ijo", ar: "هو استولى على الشيء وأخذه" },
            { tp: "leko kiwen li lon supa", ar: "المكعب الحجري على الطاولة" }
          ]
        },
        {
          id: 3,
          unitId: 10,
          title: "الدرس 3: الطب والاعتدال والتنوع والهمهمة",
          words: ["misikeke", "meso", "tonsi", "n"],
          xpReward: 30,
          sentences: [
            { tp: "o moku e misikeke", ar: "تناول الدواء والعلاج للشفاء" },
            { tp: "seli meso li pona", ar: "الدفء المعتدل مريح" },
            { tp: "jan tonsi li pona", ar: "الشخص المتنوع جندرياً طيب ومحترم" },
            { tp: "n... mi sona", ar: "ممم... لقد فهمت وأدركت" }
          ]
        },
        {
          id: 4,
          unitId: 10,
          title: "الدرس 4: الحيوانات الخاصة والفطر والتوابل والزواحف",
          words: ["namako", "soko", "kijetesantakalu", "akesi", "linja"],
          xpReward: 35,
          sentences: [
            { tp: "namako li pona e moku", ar: "البهارات والتوابل تحسن الطعام" },
            { tp: "soko li lon kasi", ar: "الفطر ينمو قرب الشجرة" },
            { tp: "kijetesantakalu li suwi", ar: "حيوان الراكون ظريف ومحبوب" },
            { tp: "akesi li suli", ar: "التمساح أو الزاحف ضخم" },
            { tp: "linja lawa", ar: "شعر الرأس والخيوط" }
          ]
        }
      ]
    }
  ]
};
