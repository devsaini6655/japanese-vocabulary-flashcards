const lessons = [
  {
    id: 1,
    title: "Introductions",
    description: "Core words for first meetings and classroom basics.",
    words: [
      { kana: "わたし", romaji: "watashi", meaning: "I / me", type: "pronoun" },
      { kana: "あなた", romaji: "anata", meaning: "you", type: "pronoun" },
      { kana: "がくせい", romaji: "gakusei", meaning: "student", type: "noun" },
      { kana: "せんせい", romaji: "sensei", meaning: "teacher", type: "noun" },
      { kana: "かいしゃいん", romaji: "kaishain", meaning: "company employee", type: "noun" },
      { kana: "はい", romaji: "hai", meaning: "yes", type: "phrase" },
      { kana: "いいえ", romaji: "iie", meaning: "no", type: "phrase" },
      { kana: "はじめまして", romaji: "hajimemashite", meaning: "nice to meet you", type: "phrase" }
    ]
  },
  {
    id: 2,
    title: "Objects",
    description: "Words for things around you and simple ownership.",
    words: [
      { kana: "これ", romaji: "kore", meaning: "this", type: "demonstrative" },
      { kana: "それ", romaji: "sore", meaning: "that", type: "demonstrative" },
      { kana: "あれ", romaji: "are", meaning: "that over there", type: "demonstrative" },
      { kana: "ほん", romaji: "hon", meaning: "book", type: "noun" },
      { kana: "じしょ", romaji: "jisho", meaning: "dictionary", type: "noun" },
      { kana: "かばん", romaji: "kaban", meaning: "bag", type: "noun" },
      { kana: "えんぴつ", romaji: "enpitsu", meaning: "pencil", type: "noun" },
      { kana: "かぎ", romaji: "kagi", meaning: "key", type: "noun" }
    ]
  },
  {
    id: 3,
    title: "Places",
    description: "Buildings, rooms, and asking where something is.",
    words: [
      { kana: "ここ", romaji: "koko", meaning: "here", type: "place" },
      { kana: "そこ", romaji: "soko", meaning: "there", type: "place" },
      { kana: "あそこ", romaji: "asoko", meaning: "over there", type: "place" },
      { kana: "きょうしつ", romaji: "kyoushitsu", meaning: "classroom", type: "noun" },
      { kana: "うけつけ", romaji: "uketsuke", meaning: "reception desk", type: "noun" },
      { kana: "トイレ", romaji: "toire", meaning: "toilet / restroom", type: "noun" },
      { kana: "えき", romaji: "eki", meaning: "station", type: "noun" },
      { kana: "くに", romaji: "kuni", meaning: "country", type: "noun" }
    ]
  },
  {
    id: 4,
    title: "Time",
    description: "Numbers, clock time, days, and daily schedules.",
    words: [
      { kana: "いま", romaji: "ima", meaning: "now", type: "time" },
      { kana: "じ", romaji: "ji", meaning: "o'clock", type: "counter" },
      { kana: "ふん", romaji: "fun", meaning: "minute", type: "counter" },
      { kana: "あさ", romaji: "asa", meaning: "morning", type: "time" },
      { kana: "ひる", romaji: "hiru", meaning: "noon / daytime", type: "time" },
      { kana: "ばん", romaji: "ban", meaning: "evening", type: "time" },
      { kana: "やすみ", romaji: "yasumi", meaning: "rest / holiday", type: "noun" },
      { kana: "まいにち", romaji: "mainichi", meaning: "every day", type: "adverb" }
    ]
  },
  {
    id: 5,
    title: "Travel",
    description: "Movement verbs, transport, and destinations.",
    words: [
      { kana: "いきます", romaji: "ikimasu", meaning: "go", type: "verb" },
      { kana: "きます", romaji: "kimasu", meaning: "come", type: "verb" },
      { kana: "かえります", romaji: "kaerimasu", meaning: "return", type: "verb" },
      { kana: "でんしゃ", romaji: "densha", meaning: "train", type: "noun" },
      { kana: "バス", romaji: "basu", meaning: "bus", type: "noun" },
      { kana: "ひこうき", romaji: "hikouki", meaning: "airplane", type: "noun" },
      { kana: "ともだち", romaji: "tomodachi", meaning: "friend", type: "noun" },
      { kana: "ひとりで", romaji: "hitori de", meaning: "alone", type: "phrase" }
    ]
  },
  {
    id: 6,
    title: "Food And Actions",
    description: "Eating, drinking, reading, watching, and invitations.",
    words: [
      { kana: "たべます", romaji: "tabemasu", meaning: "eat", type: "verb" },
      { kana: "のみます", romaji: "nomimasu", meaning: "drink", type: "verb" },
      { kana: "みます", romaji: "mimasu", meaning: "see / watch", type: "verb" },
      { kana: "よみます", romaji: "yomimasu", meaning: "read", type: "verb" },
      { kana: "かきます", romaji: "kakimasu", meaning: "write", type: "verb" },
      { kana: "ごはん", romaji: "gohan", meaning: "meal / rice", type: "noun" },
      { kana: "みず", romaji: "mizu", meaning: "water", type: "noun" },
      { kana: "いっしょに", romaji: "issho ni", meaning: "together", type: "phrase" }
    ]
  },
  {
    id: 7,
    title: "Giving And Tools",
    description: "People, tools, and giving or receiving things.",
    words: [
      { kana: "あげます", romaji: "agemasu", meaning: "give", type: "verb" },
      { kana: "もらいます", romaji: "moraimasu", meaning: "receive", type: "verb" },
      { kana: "かします", romaji: "kashimasu", meaning: "lend", type: "verb" },
      { kana: "かります", romaji: "karimasu", meaning: "borrow", type: "verb" },
      { kana: "おしえます", romaji: "oshiemasu", meaning: "teach / tell", type: "verb" },
      { kana: "ならいます", romaji: "naraimasu", meaning: "learn", type: "verb" },
      { kana: "て", romaji: "te", meaning: "hand", type: "noun" },
      { kana: "はし", romaji: "hashi", meaning: "chopsticks", type: "noun" }
    ]
  },
  {
    id: 8,
    title: "Adjectives",
    description: "Basic descriptions for people, places, and things.",
    words: [
      { kana: "おおきい", romaji: "ookii", meaning: "big", type: "i-adjective" },
      { kana: "ちいさい", romaji: "chiisai", meaning: "small", type: "i-adjective" },
      { kana: "あたらしい", romaji: "atarashii", meaning: "new", type: "i-adjective" },
      { kana: "ふるい", romaji: "furui", meaning: "old", type: "i-adjective" },
      { kana: "いい", romaji: "ii", meaning: "good", type: "i-adjective" },
      { kana: "わるい", romaji: "warui", meaning: "bad", type: "i-adjective" },
      { kana: "しずか", romaji: "shizuka", meaning: "quiet", type: "na-adjective" },
      { kana: "にぎやか", romaji: "nigiyaka", meaning: "lively", type: "na-adjective" }
    ]
  },
  {
    id: 9,
    title: "Likes And Skill",
    description: "Preferences, ability, and everyday entertainment.",
    words: [
      { kana: "すき", romaji: "suki", meaning: "like / favorite", type: "na-adjective" },
      { kana: "きらい", romaji: "kirai", meaning: "dislike", type: "na-adjective" },
      { kana: "じょうず", romaji: "jouzu", meaning: "skillful", type: "na-adjective" },
      { kana: "へた", romaji: "heta", meaning: "unskillful", type: "na-adjective" },
      { kana: "りょうり", romaji: "ryouri", meaning: "cooking / cuisine", type: "noun" },
      { kana: "スポーツ", romaji: "supootsu", meaning: "sports", type: "noun" },
      { kana: "おんがく", romaji: "ongaku", meaning: "music", type: "noun" },
      { kana: "えいが", romaji: "eiga", meaning: "movie", type: "noun" }
    ]
  },
  {
    id: 10,
    title: "Existence",
    description: "Words for where people, animals, and objects are.",
    words: [
      { kana: "あります", romaji: "arimasu", meaning: "exist / have for things", type: "verb" },
      { kana: "います", romaji: "imasu", meaning: "exist / have for living beings", type: "verb" },
      { kana: "うえ", romaji: "ue", meaning: "above / on", type: "position" },
      { kana: "した", romaji: "shita", meaning: "below / under", type: "position" },
      { kana: "まえ", romaji: "mae", meaning: "front / before", type: "position" },
      { kana: "うしろ", romaji: "ushiro", meaning: "behind", type: "position" },
      { kana: "なか", romaji: "naka", meaning: "inside", type: "position" },
      { kana: "となり", romaji: "tonari", meaning: "next to", type: "position" }
    ]
  },
  {
    id: 11,
    title: "Counters",
    description: "Counting people, objects, and durations.",
    words: [
      { kana: "ひとつ", romaji: "hitotsu", meaning: "one thing", type: "counter" },
      { kana: "ふたつ", romaji: "futatsu", meaning: "two things", type: "counter" },
      { kana: "みっつ", romaji: "mittsu", meaning: "three things", type: "counter" },
      { kana: "ひとり", romaji: "hitori", meaning: "one person", type: "counter" },
      { kana: "ふたり", romaji: "futari", meaning: "two people", type: "counter" },
      { kana: "だい", romaji: "dai", meaning: "counter for machines", type: "counter" },
      { kana: "まい", romaji: "mai", meaning: "counter for flat things", type: "counter" },
      { kana: "かい", romaji: "kai", meaning: "times", type: "counter" }
    ]
  },
  {
    id: 12,
    title: "Comparison",
    description: "Past tense and comparing things or experiences.",
    words: [
      { kana: "かんたん", romaji: "kantan", meaning: "easy / simple", type: "na-adjective" },
      { kana: "むずかしい", romaji: "muzukashii", meaning: "difficult", type: "i-adjective" },
      { kana: "ちかい", romaji: "chikai", meaning: "near", type: "i-adjective" },
      { kana: "とおい", romaji: "tooi", meaning: "far", type: "i-adjective" },
      { kana: "はやい", romaji: "hayai", meaning: "fast / early", type: "i-adjective" },
      { kana: "おそい", romaji: "osoi", meaning: "slow / late", type: "i-adjective" },
      { kana: "おおい", romaji: "ooi", meaning: "many / much", type: "i-adjective" },
      { kana: "すくない", romaji: "sukunai", meaning: "few / little", type: "i-adjective" }
    ]
  },
  {
    id: 13,
    title: "Wants",
    description: "Desires, shopping, and going somewhere to do something.",
    words: [
      { kana: "ほしい", romaji: "hoshii", meaning: "want", type: "i-adjective" },
      { kana: "あそびます", romaji: "asobimasu", meaning: "play / hang out", type: "verb" },
      { kana: "およぎます", romaji: "oyogimasu", meaning: "swim", type: "verb" },
      { kana: "むかえます", romaji: "mukaemasu", meaning: "meet / welcome", type: "verb" },
      { kana: "つかれます", romaji: "tsukaremasu", meaning: "get tired", type: "verb" },
      { kana: "けっこんします", romaji: "kekkon shimasu", meaning: "get married", type: "verb" },
      { kana: "かいもの", romaji: "kaimono", meaning: "shopping", type: "noun" },
      { kana: "しょくじ", romaji: "shokuji", meaning: "meal", type: "noun" }
    ]
  },
  {
    id: 14,
    title: "Te Form",
    description: "Requests, ongoing actions, and common te-form verbs.",
    words: [
      { kana: "あけます", romaji: "akemasu", meaning: "open", type: "verb" },
      { kana: "しめます", romaji: "shimemasu", meaning: "close", type: "verb" },
      { kana: "まちます", romaji: "machimasu", meaning: "wait", type: "verb" },
      { kana: "とります", romaji: "torimasu", meaning: "take / pass", type: "verb" },
      { kana: "てつだいます", romaji: "tetsudaimasu", meaning: "help", type: "verb" },
      { kana: "よびます", romaji: "yobimasu", meaning: "call", type: "verb" },
      { kana: "つけます", romaji: "tsukemasu", meaning: "turn on", type: "verb" },
      { kana: "けします", romaji: "keshimasu", meaning: "turn off / erase", type: "verb" }
    ]
  },
  {
    id: 15,
    title: "Permission",
    description: "Asking permission, rules, and workplace vocabulary.",
    words: [
      { kana: "すわります", romaji: "suwarimasu", meaning: "sit", type: "verb" },
      { kana: "たちます", romaji: "tachimasu", meaning: "stand", type: "verb" },
      { kana: "はいります", romaji: "hairimasu", meaning: "enter", type: "verb" },
      { kana: "でます", romaji: "demasu", meaning: "leave / go out", type: "verb" },
      { kana: "つかいます", romaji: "tsukaimasu", meaning: "use", type: "verb" },
      { kana: "おきます", romaji: "okimasu", meaning: "put / place", type: "verb" },
      { kana: "しっています", romaji: "shitte imasu", meaning: "know", type: "verb" },
      { kana: "けんきゅうします", romaji: "kenkyuu shimasu", meaning: "research", type: "verb" }
    ]
  },
  {
    id: 16,
    title: "Sequences",
    description: "Chaining actions and describing after doing something.",
    words: [
      { kana: "のります", romaji: "norimasu", meaning: "ride / board", type: "verb" },
      { kana: "おります", romaji: "orimasu", meaning: "get off", type: "verb" },
      { kana: "のりかえます", romaji: "norikaemasu", meaning: "transfer", type: "verb" },
      { kana: "あびます", romaji: "abimasu", meaning: "bathe / shower", type: "verb" },
      { kana: "いれます", romaji: "iremasu", meaning: "put in", type: "verb" },
      { kana: "だします", romaji: "dashimasu", meaning: "take out / submit", type: "verb" },
      { kana: "わかい", romaji: "wakai", meaning: "young", type: "i-adjective" },
      { kana: "ながい", romaji: "nagai", meaning: "long", type: "i-adjective" }
    ]
  },
  {
    id: 17,
    title: "Negative Requests",
    description: "Rules, prohibitions, and health-related phrases.",
    words: [
      { kana: "おぼえます", romaji: "oboemasu", meaning: "memorize", type: "verb" },
      { kana: "わすれます", romaji: "wasuremasu", meaning: "forget", type: "verb" },
      { kana: "なくします", romaji: "nakushimasu", meaning: "lose", type: "verb" },
      { kana: "はらいます", romaji: "haraimasu", meaning: "pay", type: "verb" },
      { kana: "かえします", romaji: "kaeshimasu", meaning: "return something", type: "verb" },
      { kana: "でかけます", romaji: "dekakemasu", meaning: "go out", type: "verb" },
      { kana: "くすり", romaji: "kusuri", meaning: "medicine", type: "noun" },
      { kana: "びょうき", romaji: "byouki", meaning: "illness", type: "noun" }
    ]
  },
  {
    id: 18,
    title: "Can Do",
    description: "Dictionary form, ability, and hobbies.",
    words: [
      { kana: "できます", romaji: "dekimasu", meaning: "can do", type: "verb" },
      { kana: "あらいます", romaji: "araimasu", meaning: "wash", type: "verb" },
      { kana: "ひきます", romaji: "hikimasu", meaning: "play a stringed instrument", type: "verb" },
      { kana: "うたいます", romaji: "utaimasu", meaning: "sing", type: "verb" },
      { kana: "あつめます", romaji: "atsumemasu", meaning: "collect", type: "verb" },
      { kana: "すてます", romaji: "sutemasu", meaning: "throw away", type: "verb" },
      { kana: "しゅみ", romaji: "shumi", meaning: "hobby", type: "noun" },
      { kana: "ゆめ", romaji: "yume", meaning: "dream", type: "noun" }
    ]
  },
  {
    id: 19,
    title: "Experience",
    description: "Past experiences and becoming something.",
    words: [
      { kana: "のぼります", romaji: "noborimasu", meaning: "climb", type: "verb" },
      { kana: "とまります", romaji: "tomarimasu", meaning: "stay overnight", type: "verb" },
      { kana: "そうじします", romaji: "souji shimasu", meaning: "clean", type: "verb" },
      { kana: "せんたくします", romaji: "sentaku shimasu", meaning: "do laundry", type: "verb" },
      { kana: "ねむい", romaji: "nemui", meaning: "sleepy", type: "i-adjective" },
      { kana: "つよい", romaji: "tsuyoi", meaning: "strong", type: "i-adjective" },
      { kana: "よわい", romaji: "yowai", meaning: "weak", type: "i-adjective" },
      { kana: "ちょうし", romaji: "choushi", meaning: "condition", type: "noun" }
    ]
  },
  {
    id: 20,
    title: "Plain Form",
    description: "Casual speech and everyday personal topics.",
    words: [
      { kana: "いる", romaji: "iru", meaning: "need / exist", type: "verb" },
      { kana: "しらべる", romaji: "shiraberu", meaning: "look up / investigate", type: "verb" },
      { kana: "なおす", romaji: "naosu", meaning: "repair / correct", type: "verb" },
      { kana: "ぼく", romaji: "boku", meaning: "I / me", type: "pronoun" },
      { kana: "きみ", romaji: "kimi", meaning: "you", type: "pronoun" },
      { kana: "うん", romaji: "un", meaning: "yeah", type: "phrase" },
      { kana: "ううん", romaji: "uun", meaning: "nope", type: "phrase" },
      { kana: "ことば", romaji: "kotoba", meaning: "word / language", type: "noun" }
    ]
  },
  {
    id: 21,
    title: "Opinions",
    description: "Thinking, saying, opinions, and reports.",
    words: [
      { kana: "おもいます", romaji: "omoimasu", meaning: "think", type: "verb" },
      { kana: "いいます", romaji: "iimasu", meaning: "say", type: "verb" },
      { kana: "かちます", romaji: "kachimasu", meaning: "win", type: "verb" },
      { kana: "まけます", romaji: "makemasu", meaning: "lose", type: "verb" },
      { kana: "あります", romaji: "arimasu", meaning: "be held / take place", type: "verb" },
      { kana: "やくにたちます", romaji: "yaku ni tachimasu", meaning: "be useful", type: "phrase" },
      { kana: "むだ", romaji: "muda", meaning: "wasteful", type: "na-adjective" },
      { kana: "ふべん", romaji: "fuben", meaning: "inconvenient", type: "na-adjective" }
    ]
  },
  {
    id: 22,
    title: "Noun Modifiers",
    description: "Describing people and things using modifying clauses.",
    words: [
      { kana: "きます", romaji: "kimasu", meaning: "wear from shoulders", type: "verb" },
      { kana: "はきます", romaji: "hakimasu", meaning: "wear below waist", type: "verb" },
      { kana: "かぶります", romaji: "kaburimasu", meaning: "wear on head", type: "verb" },
      { kana: "かけます", romaji: "kakemasu", meaning: "wear glasses", type: "verb" },
      { kana: "うまれます", romaji: "umaremasu", meaning: "be born", type: "verb" },
      { kana: "コート", romaji: "kooto", meaning: "coat", type: "noun" },
      { kana: "セーター", romaji: "seetaa", meaning: "sweater", type: "noun" },
      { kana: "ぼうし", romaji: "boushi", meaning: "hat / cap", type: "noun" }
    ]
  },
  {
    id: 23,
    title: "When",
    description: "Conditional timing and using machines or services.",
    words: [
      { kana: "ききます", romaji: "kikimasu", meaning: "ask", type: "verb" },
      { kana: "まわします", romaji: "mawashimasu", meaning: "turn", type: "verb" },
      { kana: "ひきます", romaji: "hikimasu", meaning: "pull", type: "verb" },
      { kana: "かえます", romaji: "kaemasu", meaning: "change", type: "verb" },
      { kana: "さわります", romaji: "sawarimasu", meaning: "touch", type: "verb" },
      { kana: "でます", romaji: "demasu", meaning: "come out", type: "verb" },
      { kana: "うごきます", romaji: "ugokimasu", meaning: "move / work", type: "verb" },
      { kana: "こしょうします", romaji: "koshou shimasu", meaning: "break down", type: "verb" }
    ]
  },
  {
    id: 24,
    title: "Giving Help",
    description: "Receiving help and doing favors for others.",
    words: [
      { kana: "くれます", romaji: "kuremasu", meaning: "give to me / us", type: "verb" },
      { kana: "つれていきます", romaji: "tsurete ikimasu", meaning: "take someone", type: "phrase" },
      { kana: "つれてきます", romaji: "tsurete kimasu", meaning: "bring someone", type: "phrase" },
      { kana: "おくります", romaji: "okurimasu", meaning: "escort / send", type: "verb" },
      { kana: "しょうかいします", romaji: "shoukai shimasu", meaning: "introduce", type: "verb" },
      { kana: "あんないします", romaji: "annai shimasu", meaning: "guide / show around", type: "verb" },
      { kana: "せつめいします", romaji: "setsumei shimasu", meaning: "explain", type: "verb" },
      { kana: "おじいさん", romaji: "ojiisan", meaning: "grandfather / old man", type: "noun" }
    ]
  },
  {
    id: 25,
    title: "If And Even If",
    description: "Conditional expressions and planning around possibilities.",
    words: [
      { kana: "かんがえます", romaji: "kangaemasu", meaning: "think about", type: "verb" },
      { kana: "つきます", romaji: "tsukimasu", meaning: "arrive", type: "verb" },
      { kana: "とります", romaji: "torimasu", meaning: "grow older", type: "verb" },
      { kana: "いなか", romaji: "inaka", meaning: "countryside / hometown", type: "noun" },
      { kana: "たいしかん", romaji: "taishikan", meaning: "embassy", type: "noun" },
      { kana: "グループ", romaji: "guruupu", meaning: "group", type: "noun" },
      { kana: "チャンス", romaji: "chansu", meaning: "chance", type: "noun" },
      { kana: "おく", romaji: "oku", meaning: "hundred million", type: "number" }
    ]
  }
];
