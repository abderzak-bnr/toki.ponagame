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

  // 10 Progressive Units Definition with metadata & lessons
  units: [
    {
      id: 1,
      title: "الوحدة 1: الأساسيات والضمائر",
      subtitle: "الضمائر، التحية، وحكم البساطة والخير",
      description: "مدخلك إلى عالم لغة توكي بونا: تعلم الضمائر الأساسية والتحيات ومفاهيم الجودة البسيطة.",
      color: "#B8FF29",
      icon: "🌱",
      lessons: [
        {
          id: 1,
          unitId: 1,
          title: "الدرس 1: الضمائر والشخص",
          words: ["mi", "sina", "ona", "jan"],
          xpReward: 20,
          sentences: [
            { tp: "mi jan", ar: "أنا إنسان" },
            { tp: "sina jan", ar: "أنت إنسان" },
            { tp: "ona li jan", ar: "هو إنسان" },
            { tp: "jan li pona", ar: "الشخص طيب" }
          ]
        },
        {
          id: 2,
          unitId: 1,
          title: "الدرس 2: التحية والأحكام",
          words: ["toki", "pona", "ike", "ni"],
          xpReward: 25,
          sentences: [
            { tp: "toki!", ar: "مرحباً!" },
            { tp: "ni li pona", ar: "هذا جيد" },
            { tp: "ni li ike", ar: "هذا سيء" },
            { tp: "toki pona", ar: "لغة توكي بونا (الكلام الطيب)" }
          ]
        },
        {
          id: 3,
          unitId: 1,
          title: "الدرس 3: الكينونة والأسماء",
          words: ["ijo", "nimi", "ken", "ante"],
          xpReward: 25,
          sentences: [
            { tp: "ijo ni li pona", ar: "هذا الشيء مفيد" },
            { tp: "nimi mi li jan", ar: "اسمي إنسان" },
            { tp: "mi ken toki", ar: "أنا أستطيع التحدث" },
            { tp: "ona li ante", ar: "هو مختلف" }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "الوحدة 2: القواعد والأفعال الأولى",
      subtitle: "قواعد الربط (li و e) وأفعال الحياة اليومية",
      description: "تعلم أسرار تركيب الجملة في توكي بونا مع أهم أدوات القواعد وأفعال الأكل والحركة والرغبة.",
      color: "#00F0FF",
      icon: "⚡",
      lessons: [
        {
          id: 1,
          unitId: 2,
          title: "الدرس 1: أدوات الربط والأكل والحركة",
          words: ["li", "e", "moku", "tawa"],
          xpReward: 25,
          sentences: [
            { tp: "mi moku", ar: "أنا آكل" },
            { tp: "sina tawa tomo", ar: "أنت ذاهب إلى البيت" },
            { tp: "ona li moku", ar: "هو يأكل" },
            { tp: "jan li tawa", ar: "الشخص يتحرك" }
          ]
        },
        {
          id: 2,
          unitId: 2,
          title: "الدرس 2: الرغبة والوجود والوسيلة",
          words: ["kama", "wile", "lon", "kepeken"],
          xpReward: 25,
          sentences: [
            { tp: "mi wile moku", ar: "أريد أن آكل" },
            { tp: "ona li lon ni", ar: "هو موجود هنا" },
            { tp: "jan li kama", ar: "الشخص قادم" },
            { tp: "mi kepeken ilo", ar: "أنا أستخدم أداة" }
          ]
        },
        {
          id: 3,
          unitId: 2,
          title: "الدرس 3: العمل والعطاء والدوام",
          words: ["pali", "pana", "jo", "awen"],
          xpReward: 30,
          sentences: [
            { tp: "mi pali e tomo", ar: "أنا أبني بيتاً" },
            { tp: "o pana e moku", ar: "أعطني طعاماً!" },
            { tp: "mi jo e ilo", ar: "لدي أداة" },
            { tp: "o awen lon ni", ar: "ابقَ هنا!" }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "الوحدة 3: الطبيعة والكون",
      subtitle: "الشمس، القمر، الماء، والنبات والعناصر",
      description: "انطلق لاكتشاف مفردات الفلك والطبيعة وعناصر الأرض والرياح والنار والجليد.",
      color: "#FFE600",
      icon: "☀️",
      lessons: [
        {
          id: 1,
          unitId: 3,
          title: "الدرس 1: أجرام السماء والماء",
          words: ["suno", "mun", "telo", "kasi"],
          xpReward: 25,
          sentences: [
            { tp: "suno li suli", ar: "الشمس عظيمة وساطعة" },
            { tp: "mun li lon sewi", ar: "القمر في السماء" },
            { tp: "mi wile e telo", ar: "أريد ماءً" },
            { tp: "kasi li pona", ar: "النبات جميل ومزهر" }
          ]
        },
        {
          id: 2,
          unitId: 3,
          title: "الدرس 2: الأرض والجو والرياح",
          words: ["ma", "sewi", "kon", "ko"],
          xpReward: 25,
          sentences: [
            { tp: "ma mi li suli", ar: "بلادي كبيرة وواسعة" },
            { tp: "sewi li laso", ar: "السماء زرقاء صافية" },
            { tp: "kon li lete", ar: "الهواء بارد" },
            { tp: "ko li lon ma", ar: "الطين على الأرض" }
          ]
        },
        {
          id: 3,
          unitId: 3,
          title: "الدرس 3: العناصر والمناخ",
          words: ["kiwen", "seli", "lete", "anpa"],
          xpReward: 30,
          sentences: [
            { tp: "kiwen li suli", ar: "الصخرة ضخمة" },
            { tp: "seli li suli", ar: "النار قوية وساخنة" },
            { tp: "telo li lete", ar: "الماء بارد" },
            { tp: "ona li lon anpa", ar: "هو في الأسفل" }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "الوحدة 4: الحيوانات والكائنات",
      subtitle: "حيوانات البر والبحر والجو وفصيلة الراكون",
      description: "تعرف على الحيوانات والطيور والأسماك والغذاء النباتي وكلمة الراكون الشهيرة.",
      color: "#FF4FA3",
      icon: "🐾",
      lessons: [
        {
          id: 1,
          unitId: 4,
          title: "الدرس 1: الثدييات والطيور والأسماك",
          words: ["soweli", "waso", "kala", "pipi"],
          xpReward: 25,
          sentences: [
            { tp: "soweli li moku e kasi", ar: "الحيوان يأكل النبات" },
            { tp: "waso li tawa sewi", ar: "الطائر يطير في السماء" },
            { tp: "kala li lon telo", ar: "السمكة في الماء" },
            { tp: "pipi li lili", ar: "الحشرة صغيرة" }
          ]
        },
        {
          id: 2,
          unitId: 4,
          title: "الدرس 2: الزواحف والمخلوق الشهير",
          words: ["akesi", "mu", "kijetesantakalu"],
          xpReward: 30,
          sentences: [
            { tp: "soweli li mu", ar: "الحيوان يُصدر صوته" },
            { tp: "kijetesantakalu li suwi", ar: "حيوان الراكون لطيف وظريف" },
            { tp: "akesi li suli", ar: "التمساح أو الزاحف ضخم" }
          ]
        },
        {
          id: 3,
          unitId: 4,
          title: "الدرس 3: ثمار الغذاء والحياة",
          words: ["kili", "pan", "moli", "alasa"],
          xpReward: 30,
          sentences: [
            { tp: "mi moku e kili", ar: "أنا آكل الفاكهة" },
            { tp: "pan li pona", ar: "الخبز لذيذ" },
            { tp: "jan li alasa e kala", ar: "الشخص يصطاد السمك" },
            { tp: "kasi li moli", ar: "النبات ذبل وفارق الحياة" }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "الوحدة 5: الإنسان والجسد والحواس",
      subtitle: "العائلة، أعضاء الجسم، والحواس الخمس",
      description: "استكشف مفردات الأسرة وأجزاء البدن وحواس السمع والنظر والكلام.",
      color: "#B8FF29",
      icon: "👤",
      lessons: [
        {
          id: 1,
          unitId: 5,
          title: "الدرس 1: العائلة والنوع",
          words: ["mama", "meli", "mije", "unpa"],
          xpReward: 25,
          sentences: [
            { tp: "mama li pona", ar: "الوالدان طيبان" },
            { tp: "jan meli li toki", ar: "المرأة تتحدث" },
            { tp: "jan mije li pali", ar: "الرجل يعمل" },
            { tp: "mama li olin e mi", ar: "والداي يحبانني" }
          ]
        },
        {
          id: 2,
          unitId: 5,
          title: "الدرس 2: أطراف الجسد",
          words: ["sijelo", "luka", "noka", "lawa"],
          xpReward: 25,
          sentences: [
            { tp: "sijelo mi li pona", ar: "صحتي وجسدي بخير" },
            { tp: "luka li pali", ar: "اليد تصنع وتعمل" },
            { tp: "noka li tawa", ar: "الأقدام تمشي" },
            { tp: "jan lawa li sona", ar: "القائد يتمتع بالحكمة" }
          ]
        },
        {
          id: 3,
          unitId: 5,
          title: "الدرس 3: الفم والوجه والحواس",
          words: ["uta", "oko", "lukin", "kute", "kalama"],
          xpReward: 30,
          sentences: [
            { tp: "oko li lukin", ar: "العين تبصر وترى" },
            { tp: "uta li moku", ar: "الفم يأكل ويتذوق" },
            { tp: "kute e kalama", ar: "استمع إلى الصوت والموسيقى" },
            { tp: "mi lukin e lipu", ar: "أنا أقرأ كتاباً" }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "الوحدة 6: الأدوات والأماكن",
      subtitle: "المنزل، الأوعية، الأجهزة، والمجتمع",
      description: "كل ما يحيط بك من مبانٍ وأدوات عمل وأوانٍ وثياب وأسواق.",
      color: "#00F0FF",
      icon: "🏡",
      lessons: [
        {
          id: 1,
          unitId: 6,
          title: "الدرس 1: الأجهزة والمأوى والأوعية",
          words: ["ilo", "tomo", "lipu", "poki"],
          xpReward: 25,
          sentences: [
            { tp: "ilo li pali", ar: "الآلة تعمل" },
            { tp: "tomo mi li suli", ar: "بيتي كبير" },
            { tp: "lipu li lon supa", ar: "الكتاب على الطاولة" },
            { tp: "poki li jo e telo", ar: "الكوب يحتوي ماءً" }
          ]
        },
        {
          id: 2,
          unitId: 6,
          title: "الدرس 2: الأثاث واللباس والمنافذ",
          words: ["supa", "lupa", "len", "palisa"],
          xpReward: 25,
          sentences: [
            { tp: "mi lape lon supa", ar: "أنا أنام على السرير" },
            { tp: "o open e lupa", ar: "افتح الباب أو النافذة!" },
            { tp: "len mi li laso", ar: "ثوبي لونه أزرق" },
            { tp: "palisa li suli", ar: "العصا طويلة" }
          ]
        },
        {
          id: 3,
          unitId: 6,
          title: "الدرس 3: التجارة والطرق والمجتمع",
          words: ["esun", "mani", "nasin", "kulupu", "sitelen"],
          xpReward: 30,
          sentences: [
            { tp: "mi tawa esun", ar: "أنا ذاهب إلى السوق" },
            { tp: "ona li jo e mani", ar: "هو يملك المال" },
            { tp: "nasin ni li pona", ar: "هذا الطريق والمنهج طيب" },
            { tp: "kulupu li toki", ar: "المجتمع والفريق يتحاورون" },
            { tp: "mi sitelen e pona", ar: "أنا أرسم رمز الخير" }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "الوحدة 7: الصفات والألوان والأرقام",
      subtitle: "الأحجام، الأعداد، وعالم الألوان البهيج",
      description: "تعلم وصف الأشياء بأحجامها، نظام العد في توكي بونا، والألوان الطبيعية.",
      color: "#FFE600",
      icon: "🎨",
      lessons: [
        {
          id: 1,
          unitId: 7,
          title: "الدرس 1: الحجم والوفرة",
          words: ["suli", "lili", "sin", "mute"],
          xpReward: 25,
          sentences: [
            { tp: "tomo suli", ar: "بيت كبير" },
            { tp: "jan lili li musi", ar: "الطفل يلعب ويمرح" },
            { tp: "ilo sin", ar: "جهاز جديد" },
            { tp: "kili mute", ar: "فواكه كثيرة" }
          ]
        },
        {
          id: 2,
          unitId: 7,
          title: "الدرس 2: الأعداد والقوة",
          words: ["wan", "tu", "nanpa", "wawa"],
          xpReward: 25,
          sentences: [
            { tp: "jan wan", ar: "شخص واحد" },
            { tp: "soweli tu", ar: "حيوانان اثنان" },
            { tp: "nanpa wan", ar: "المركز الأول" },
            { tp: "soweli wawa", ar: "حيوان قوي ومقتدر" }
          ]
        },
        {
          id: 3,
          unitId: 7,
          title: "الدرس 3: الأبيض والأسود والحلاوة",
          words: ["kule", "walo", "pimeja", "suwi"],
          xpReward: 25,
          sentences: [
            { tp: "kule li pona", ar: "اللون جميل" },
            { tp: "lipu walo", ar: "صفحة بيضاء" },
            { tp: "tenpo pimeja", ar: "وقت الظلام والليل" },
            { tp: "kili suwi", ar: "فاكهة حلوة" }
          ]
        },
        {
          id: 4,
          unitId: 7,
          title: "الدرس 4: الألوان الأساسية",
          words: ["loje", "jelo", "laso"],
          xpReward: 30,
          sentences: [
            { tp: "kili loje", ar: "ثمرة حمراء" },
            { tp: "suno jelo", ar: "شمس صفراء مشرقة" },
            { tp: "telo laso", ar: "ماء أزرق / بحر صافٍ" }
          ]
        }
      ]
    },
    {
      id: 8,
      title: "الوحدة 8: المشاعر والحواس والعقل",
      subtitle: "الحب، العلم، النوم، والمخاوف والأحاسيس",
      description: "عبر عن مشاعرك الداخلية، الحب العميق، المعرفة، النوم والراحة، والمخاوف.",
      color: "#FF4FA3",
      icon: "💖",
      lessons: [
        {
          id: 1,
          unitId: 8,
          title: "الدرس 1: القلب والمعرفة والمحبة",
          words: ["pilin", "olin", "sona", "musi"],
          xpReward: 25,
          sentences: [
            { tp: "pilin mi li pona", ar: "أشعر بالراحة والسعادة" },
            { tp: "mi olin e sina", ar: "أنا أحبك" },
            { tp: "ona li sona mute", ar: "هو يعلم الكثير ولديه حكمة" },
            { tp: "ni li musi a!", ar: "هذا مسلٍ ومبهج حقاً!" }
          ]
        },
        {
          id: 2,
          unitId: 8,
          title: "الدرس 2: الراحة والاضطراب والصراع",
          words: ["lape", "pakala", "utala", "monsuta"],
          xpReward: 25,
          sentences: [
            { tp: "o lape pona", ar: "نوماً هنيئاً" },
            { tp: "ilo li pakala", ar: "الأداة تعطلت" },
            { tp: "utala li ike", ar: "الحرب والقتال أمر سيء" },
            { tp: "soweli monsuta", ar: "حيوان مرعب ومخيف" }
          ]
        },
        {
          id: 3,
          unitId: 8,
          title: "الدرس 3: الغرابة والأسطح الخارجية",
          words: ["nasa", "jaki", "selo", "linja"],
          xpReward: 30,
          sentences: [
            { tp: "jan nasa", ar: "شخص غريب الأطوار" },
            { tp: "telo jaki", ar: "ماء ملوث" },
            { tp: "selo soweli", ar: "جلد الحيوان أو فراؤه" },
            { tp: "linja lawa", ar: "شعر الرأس" }
          ]
        }
      ]
    },
    {
      id: 9,
      title: "الوحدة 9: الزمن والاتجاهات والروابط",
      subtitle: "سياق الكلام (la)، أدوات الاستفهام، والجهات",
      description: "أتقن بناء الجمل المركبة بالشرط والسياق، والاتجاهات والمواقع المكانية والزمنية.",
      color: "#00F0FF",
      icon: "🧭",
      lessons: [
        {
          id: 1,
          unitId: 9,
          title: "الدرس 1: روابط الجمل وأدوات السياق",
          words: ["tenpo", "la", "pi", "en", "anu", "taso"],
          xpReward: 25,
          sentences: [
            { tp: "tenpo ni la mi moku", ar: "في هذا الوقت، أنا آكل" },
            { tp: "tomo pi jan pona", ar: "بيت الصديق الصالح" },
            { tp: "mi en ona li jan", ar: "أنا وهو إنسانان" },
            { tp: "telo anu kili?", ar: "ماء أم فاكهة؟" }
          ]
        },
        {
          id: 2,
          unitId: 9,
          title: "الدرس 2: الاستفهام والنفي والكمال والنداء",
          words: ["tan", "ala", "ale", "seme", "o", "a"],
          xpReward: 25,
          sentences: [
            { tp: "sina tan seme?", ar: "من أين أنت؟" },
            { tp: "mi sona ala", ar: "أنا لا أعرف" },
            { tp: "jan ale li pona", ar: "كل الناس طيبون" },
            { tp: "o toki e ni!", ar: "قل هذا الأمر!" }
          ]
        },
        {
          id: 3,
          unitId: 9,
          title: "الدرس 3: البدايات والنهايات والأشكال",
          words: ["open", "pini", "sike", "nena"],
          xpReward: 25,
          sentences: [
            { tp: "o open e lipu", ar: "افتح الكتاب وابدأ!" },
            { tp: "tenpo pali li pini", ar: "وقت العمل قد انتهى" },
            { tp: "sike suno li suli", ar: "دورة الشمس عظيمة" },
            { tp: "nena ma li sewi", ar: "الجبل والتل مرتفع" }
          ]
        },
        {
          id: 4,
          unitId: 9,
          title: "الدرس 4: التموضع المكاني والجهات",
          words: ["insa", "monsi", "sinpin", "poka", "sama", "weka"],
          xpReward: 30,
          sentences: [
            { tp: "mi lon insa tomo", ar: "أنا في داخل البيت" },
            { tp: "ona li lon sinpin mi", ar: "هو موجود أمامي" },
            { tp: "o awen lon poka mi", ar: "ابقَ بجانبي" },
            { tp: "ona li sama mi", ar: "هو يشبهني تماماً" },
            { tp: "ma tomo li weka", ar: "المدينة بعيدة" }
          ]
        }
      ]
    },
    {
      id: 10,
      title: "الوحدة 10: كلمات ku المتقدمة والتعابير",
      subtitle: "الكلمات الخمس عشرة الرسمية المضافة (ku suli)",
      description: "المستوى الختامي الأسطوري: تعلم كلمات معجم ku suli الرسمي المعتمدة من Sonja Lang.",
      color: "#B8FF29",
      icon: "🏆",
      lessons: [
        {
          id: 1,
          unitId: 10,
          title: "الدرس 1: كتب بونا والروعة والمرايا",
          words: ["pu", "ku", "epiku", "jasima"],
          xpReward: 30,
          sentences: [
            { tp: "lipu pu li pona", ar: "كتاب بونا الرسمي رائع" },
            { tp: "lipu ku li suli", ar: "معجم بونا الموسع ضخم ومفيد" },
            { tp: "ni li epiku a!", ar: "هذا ملحمي وفخم حقاً!" },
            { tp: "jasima li lukin", ar: "المرآة تعكس النور" }
          ]
        },
        {
          id: 2,
          unitId: 10,
          title: "الدرس 2: التوكيد والقطع واللغة والاستيلاء",
          words: ["kin", "kipisi", "kokosila", "lanpan"],
          xpReward: 30,
          sentences: [
            { tp: "mi kin li wile", ar: "أنا أيضاً أريد ذلك" },
            { tp: "o kipisi e pan", ar: "اقطع الخبز!" },
            { tp: "o kokosila ala!", ar: "لا تتكلم بلغة أخرى هنا!" },
            { tp: "ona li lanpan e ijo", ar: "هو استولى على الشيء" }
          ]
        },
        {
          id: 3,
          unitId: 10,
          title: "الدرس 3: المكعبات والاعتدال والطب",
          words: ["leko", "meso", "misikeke", "n"],
          xpReward: 30,
          sentences: [
            { tp: "leko kiwen li lon supa", ar: "المكعب الحجري على الطاولة" },
            { tp: "seli meso li pona", ar: "الدفء المعتدل مريح" },
            { tp: "o moku e misikeke", ar: "تناول الدواء والعلاج" },
            { tp: "n... toki ni li pona", ar: "ممم... هذا الكلام معقول" }
          ]
        },
        {
          id: 4,
          unitId: 10,
          title: "الدرس 4: التوابل والفطر والتنوع",
          words: ["namako", "soko", "tonsi"],
          xpReward: 35,
          sentences: [
            { tp: "namako li pona e moku", ar: "البهارات تُحسن طعم الأكل" },
            { tp: "soko li lon kasi", ar: "الفطر ينمو قرب الشجرة" },
            { tp: "jan tonsi li pona", ar: "الشخص المتنوع جندرياً طيب ومحترم" }
          ]
        }
      ]
    }
  ]
};
