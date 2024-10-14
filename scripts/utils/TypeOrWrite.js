// чтобы удалить пустые строки нужно ввести в CTRL+F или CTRL R  ^(\s)*$\n 
// 0001 добавляем константу с данными - с массивом // Здесь слова для игры Find a pair
const allWordsForGameTypeOrWrite = {
    devmode0: [
        {
            id:1,
            eng:"1",
            hint: "цифра 1",
            ru:"первый"
            },
            {
            id:2,
            eng:"2",
            hint: "два",
            ru:"второй"
            },
            {
            id:3,
            eng:". is good",
            ru:"третий"
            },
    ],
    
    m001m: [
        {
            id:1,
            eng:"I",
            ru:"я",
            hint:" / ай /"
            },
            {
            id:2,
            eng:"you",
            ru:"вы",
            hint:" / ю /"
            },
            {
            id:3,
            eng:"we",
            ru:"мы",
            hint:" / уи /"
            },
            {
            id:4,
            eng:"they",
            ru:"они",
            hint:" / дэй /"
            },
            {
            id:5,
            eng:"he",
            ru:"он",
            hint:" / хи /"
            },
            {
            id:6,
            eng:"she",
            ru:"она",
            hint:" / щи /"
            },
            {
            id:7,
            eng:"it",
            ru:"оно",
            hint:" / ит /"
            },
            {
            id:8,
            eng:"pets",
            ru:"питомцы",
            hint:" / пэтс /"
            },
            {
            id:9,
            eng:"collect",
            ru:"коллекционировать",
            hint:" / колЭкт /"
            },
            {
            id:10,
            eng:"collection",
            ru:"коллекция",
            hint:" / колЭкшэн /"
            },
            {
            id:11,
            eng:"yet",
            ru:"пока что",
            hint:" / йет /"
            },
            {
            id:12,
            eng:"my",
            ru:"мой",
            hint:" / май /"
            },
    ],
    spellingbombs: [
        {
            id:1,
            eng:"invisible",
            ru:"невидимый",
            hint:" / инвИзибл /"
            },
            {
            id:2,
            eng:"awesome",
            ru:"обалденный, офигенный",
            hint:" / осм /"
            },
            {
            id:3,
            eng:"handsome",
            ru:"красивый ( о мужчинах )",
            hint:" / хЭнсам /"
            },
            {
            id:4,
            eng:"fat",
            ru:"жирный",
            hint:" / фэт /"
            },
            {
            id:5,
            eng:"bad",
            ru:"плохой",
            hint:" / бэд /"
            },
            {
            id:6,
            eng:"boring",
            ru:"скучные",
            hint:" / бОрин /"
            },
            {
            id:7,
            eng:"special",
            ru:"особенный",
            hint:" / спэшл /"
            },
            {
            id:8,
            eng:"disgusting",
            ru:"отвратительные",
            hint:" / дисгАстин /"
            },
            {
            id:9,
            eng:"slim",
            ru:"стройный",
            hint:" / слим /"
            },
            {
            id:10,
            eng:"old",
            ru:"старый",
            hint:" / олд /"
            },
            {
            id:11,
            eng:"ugly",
            ru:"уродливые",
            hint:" / Агли /"
            },
            {
            id:12,
            eng:"big",
            ru:"большой, большая, большое, большие",
            hint:" / биг /"
            },
    ],
    bodyA1: [
        {
            id:101,
            eng:"a head",
            ru:"  ' голова ' [с артиклем, если он нужен]",
            hint:" / э хэд /"
            },
            {
            id:102,
            eng:"an ear",
            ru:"  ' ухо ' [с артиклем, если он нужен]",
            hint:" / эн иэ /"
            },
            {
            id:103,
            eng:"hair",
            ru:"  ' волосы ' [с артиклем, если он нужен]",
            hint:" / хЭа /"
            },
            {
            id:104,
            eng:"an eye",
            ru:"  ' глаз ' [с артиклем, если он нужен]",
            hint:" / эн Ай /"
            },
            {
            id:105,
            eng:"a chin",
            ru:"  ' подбородок ' [с артиклем, если он нужен]",
            hint:" / чин /"
            },
            {
            id:106,
            eng:"a nose",
            ru:"  ' нос ' [с артиклем, если он нужен]",
            hint:" / э ноуз /"
            },
            {
            id:107,
            eng:"a neck",
            ru:"  ' шея ' [с артиклем, если он нужен]",
            hint:" / э нэк /"
            },
            {
            id:108,
            eng:"a mouth",
            ru:"  ' рот ' [с артиклем, если он нужен]",
            hint:" / ау /"
            },
            {
            id:109,
            eng:"lips",
            ru:"  ' губы ' [с артиклем, если он нужен]",
            hint:" / липс /"
            },
            {
            id:110,
            eng:"teeth",
            ru:"  ' зубы ' [с артиклем, если он нужен]",
            hint:" / тиTH /"
            },
            {
            id:111,
            eng:"a tooth",
            ru:"  ' зуб ' [с артиклем, если он нужен]",
            hint:" / туTH /"
            },
            {
            id:112,
            eng:"eyebrows",
            ru:"  ' брови ' [с артиклем, если он нужен]",
            hint:" / ай брАуз /"
            },
            {
            id:113,
            eng:"a beard",
            ru:"  ' борода ' [с артиклем, если он нужен]",
            hint:" / э бИЕд /"
            },
            {
            id:114,
            eng:"a moustache",
            ru:"  ' усы ' [с артиклем, если он нужен]",
            hint:" / э мАсташ /"
            },
            {
            id:115,
            eng:"freckles",
            ru:"  ' веснушки ' [с артиклем, если он нужен]",
            hint:" / фрЭклз /"
            },
            {
            id:116,
            eng:"cheeks",
            ru:"  ' щёки ' [с артиклем, если он нужен]",
            hint:" / чикс /"
            },
            {
            id:117,
            eng:"wrinkles",
            ru:"  ' морщинки, cкладки ' [с артиклем, если он нужен]",
            hint:" / ринклз /"
            },
            {
            id:118,
            eng:"shoulders",
            ru:"  ' плечи ' [с артиклем, если он нужен]",
            hint:" / шОулдэрз /"
            },
            {
            id:119,
            eng:"arms",
            ru:"  ' руки ( целиком ) ' [с артиклем, если он нужен]",
            hint:" / амз /"
            },
            {
            id:120,
            eng:"an arm",
            ru:"  ' рука (целиком) ' [с артиклем, если он нужен]",
            hint:" / эн арм /"
            },
            {
            id:121,
            eng:"a chest",
            ru:"  ' грудная клетка ' [с артиклем, если он нужен]",
            hint:" / чест /"
            },
            {
            id:122,
            eng:"hands",
            ru:"  ' кисти рук ' [с артиклем, если он нужен]",
            hint:" / хэндз /"
            },
            {
            id:123,
            eng:"a belly",
            ru:"  ' пузико ' [с артиклем, если он нужен]",
            hint:" / э бЭли /"
            },
            {
            id:124,
            eng:"a tummy",
            ru:"  ' животик ' [с артиклем, если он нужен]",
            hint:" / тамми /"
            },
            {
            id:125,
            eng:"fingers",
            ru:"  ' пальцы на руках ' [с артиклем, если он нужен]",
            hint:" / фИнГерз /"
            },
            {
            id:126,
            eng:"a toe",
            ru:"  ' палец на ноге ' [с артиклем, если он нужен]",
            hint:" / э тОу /"
            },
            {
            id:127,
            eng:"a bottom",
            ru:"  ' попа ' [с артиклем, если он нужен]",
            hint:" / э бОттом /"
            },
            {
            id:128,
            eng:"body parts",
            ru:"  ' части тела ' [с артиклем, если он нужен]",
            hint:" / боди партс /"
            },
            {
            id:129,
            eng:"a knee",
            ru:"  ' колено ' [с артиклем, если он нужен]",
            hint:" / э ни /"
            },
            {
            id:130,
            eng:"knees",
            ru:"  ' колени ' [с артиклем, если он нужен]",
            hint:" / низ /"
            },
            {
            id:131,
            eng:"legs",
            ru:"  ' ноги (целиком) ' [с артиклем, если он нужен]",
            hint:" / лэгз /"
            },
            {
            id:132,
            eng:"a foot",
            ru:"  ' ступня, стопа ' [с артиклем, если он нужен]",
            hint:" / фут /"
            },
            {
            id:133,
            eng:"toes",
            ru:"  ' пальцы на ногах ' [с артиклем, если он нужен]",
            hint:" / тоУз /"
            },
            {
            id:134,
            eng:"feet",
            ru:"  ' ступни, стопы ' [с артиклем, если он нужен]",
            hint:" / фит /"
            },
            {
            id:135,
            eng:"a leg",
            ru:"  ' нога (целиком) ' [с артиклем, если он нужен]",
            hint:" / э лэг /"
            },
    ],
    first2lessons: [
        {
            id:1,
            eng:"collection",
            ru:"коллекция",
            hint:" / колекшн /"
            },
            {
            id:2,
            eng:"any",
            ru:"любой",
            hint:" / эни /"
            },
            {
            id:3,
            eng:"pens",
            ru:"ручки",
            hint:" / пэнz /"
            },
            {
            id:4,
            eng:"screen",
            ru:"экран",
            hint:" / скрин /"
            },
            {
            id:5,
            eng:"buttons",
            ru:"кнопки",
            hint:" / бАтэнz /"
            },
            {
            id:6,
            eng:"headphones",
            ru:"наушники",
            hint:" / хЭдфоунз /"
            },
            {
            id:7,
            eng:"achievements",
            ru:"достижения",
            hint:" / эчИвмэнтс /"
            },
            {
            id:8,
            eng:"mission",
            ru:"миссия",
            hint:" / мишн /"
            },
            {
            id:9,
            eng:"everybody",
            ru:"каждый, все",
            hint:" / Эврибади /"
            },
            {
            id:10,
            eng:"pets",
            ru:"питомцы, домашние животные",
            hint:" / пэтс /"
            },
            {
            id:11,
            eng:"I am crazy about",
            ru:"я схожу с ума по, я без ума от",
            hint:" / крэйзи эбаут /"
            },
            {
            id:12,
            eng:"hobby",
            ru:"увлечение, хобби",
            hint:" / хобби /"
            },
            {
            id:13,
            eng:"collect",
            ru:"коллекционировать",
            hint:" / коллЭкт /"
            },
            {
            id:14,
            eng:"slowly",
            ru:"медленно",
            hint:" / слОули /"
            },
            {
            id:15,
            eng:"yet",
            ru:"пока ещё, пока что",
            hint:" / йет /"
            },
            {
            id:16,
            eng:"say it again",
            ru:"скажите это снова",
            hint:" / сэй ит эгЕн /"
            },
            {
            id:17,
            eng:"spell",
            ru:"произнесите по буквам",
            hint:" / спЭл /"
            },
            {
            id:18,
            eng:"one more time",
            ru:"еще один раз",
            hint:" / уАн мо тайм /"
            },
            {
            id:19,
            eng:"three",
            ru:"три",
            hint:" / межзубный звук /"
            },
            {
            id:20,
            eng:"eight",
            ru:"восемь",
            hint:" / эйт /"
            },
            {
            id:21,
            eng:"think",
            ru:"думать",
            hint:" / межзубный звук /"
            },
            {
            id:23,
            eng:"food",
            ru:"еда",
            hint:" / фууД /"
            },
            {
            id:24,
            eng:"find",
            ru:"находить, искать",
            hint:" / файнд /"
            },
    ],
    m000: [
        {
            id:1,
            eng:"Vincent",
            ru:"Винсент",
            hint:" V i _ c _ n t "
            },
            {
            id:2,
            eng:"friend",
            ru:"друг",
            hint:" / фрэнд /"
            },
            {
            id:3,
            eng:"agent",
            ru:"ЭЙДЖЕНТ - агент",
            hint:" / Эйджент /"
            }
    ],
    daysMonth: [
        {
            id:1,
            eng:"in January",
            ru:"в январе",
            hint:" / джЭньюэри /"
            },
            {
            id:2,
            eng:"in February",
            ru:"в феврале",
            hint:" / фЭбруэри /"
            },
            {
            id:3,
            eng:"in March",
            ru:"в марте",
            hint:" / мАч /"
            },
            {
            id:4,
            eng:"in April",
            ru:"в апреле",
            hint:" / Эйприл /"
            },
            {
            id:5,
            eng:"in May",
            ru:"в мае",
            hint:" / мЭй /"
            },
            {
            id:6,
            eng:"in June",
            ru:"в июне",
            hint:" / джУн /"
            },
            {
            id:7,
            eng:"in July",
            ru:"в июле",
            hint:" / джулАй /"
            },
            {
            id:8,
            eng:"in August",
            ru:"в августе",
            hint:" / Огэст /"
            },
            {
            id:9,
            eng:"in September",
            ru:"в сентябре",
            hint:" / сэптЭмбэ /"
            },
            {
            id:10,
            eng:"in October",
            ru:"в октябре",
            hint:" / октОубэ /"
            },
            {
            id:11,
            eng:"in November",
            ru:"в ноябре",
            hint:" / новЭмбэ /"
            },
            {
            id:12,
            eng:"in December",
            ru:"в декабре",
            hint:" / дисЭмбэ /"
            },
            {
            id:13,
            eng:"in winter",
            ru:"зимой",
            hint:" / уИнтэ /"
            },
            {
            id:14,
            eng:"in spring",
            ru:"весной",
            hint:" / сприн /"
            },
            {
            id:15,
            eng:"in summer",
            ru:"летом",
            hint:" / сАмэ /"
            },
            {
            id:16,
            eng:"in autumn",
            ru:"осенью ( по-британски )",
            hint:" / Отэм /"
            },
            {
            id:17,
            eng:"in fall",
            ru:"осенью ( по-американски )",
            hint:" / фол /"
            },
            {
            id:18,
            eng:"on Monday",
            ru:"в понедельник",
            hint:" / мАндэй /"
            },
            {
            id:19,
            eng:"on Tuesday",
            ru:"во вторник",
            hint:" / тьЮсдэй /"
            },
            {
            id:20,
            eng:"on Wednesday",
            ru:"в среду",
            hint:" / уЭнсдэй /"
            },
            {
            id:21,
            eng:"on Thursday",
            ru:"в четверг",
            hint:" / thЁсдэй /"
            },
            {
            id:22,
            eng:"on Friday",
            ru:"в пятницу",
            hint:" / фрАйдэй /"
            },
            {
            id:23,
            eng:"on Saturday",
            ru:"в субботу",
            hint:" / сАтудэй /"
            },
            {
            id:24,
            eng:"on Sunday",
            ru:"в воскресенье",
            hint:" / сАндэй /"
            },
    ],
    m002: [
        {
            id:1,
            eng:"I",
            ru:"я",
            hint:" / ай /"
            },
            {
            id:2,
            eng:"you",
            ru:"ты или вы",
            hint:" / ю /"
            },
            {
            id:3,
            eng:"we",
            ru:"мы",
            hint:" / уи /"
            },
            {
            id:4,
            eng:"they",
            ru:"они",
            hint:" / дэй /"
            },
            {
            id:5,
            eng:"he",
            ru:"он",
            hint:" / хи /"
            },
            {
            id:6,
            eng:"she",
            ru:"она",
            hint:" / щи /"
            },
            {
            id:7,
            eng:"it",
            ru:"это",
            hint:" / ит /"
            },
            {
            id:8,
            eng:"my",
            ru:"мой, моя, мои, моё",
            hint:" / май /"
            },
            {
            id:9,
            eng:"his",
            ru:"его",
            hint:" / хиз /"
            },
            {
            id:10,
            eng:"her",
            ru:"её",
            hint:" / хё /"
            },
            {
            id:11,
            eng:"our",
            ru:"наш, наша, наше, наши",
            hint:" / аУа /"
            },
            {
            id:12,
            eng:"your",
            ru:"твой, твоё, твоя, ваш, ваше, ваша, ваши, твои",
            hint:" / ё /"
            },
    ],
    spellAllLetters: [
        {
            id:101,
            eng:"A",
            ru:" букву / эй / ",
            hint:" / первая буква алфавита /"
            },
            {
            id:102,
            eng:"B",
            ru:" букву / би / ",
            hint:""
            },
            {
            id:103,
            eng:"C",
            ru:" букву / си / ",
            hint:" / треться буква алфавита /"
            },
            {
            id:104,
            eng:"D",
            ru:" букву / ди / ",
            hint:""
            },
            {
            id:105,
            eng:"E",
            ru:" букву / и / ",
            hint:" / пятая буква алфавита /"
            },
            {
            id:106,
            eng:"F",
            ru:" букву / эф / ",
            hint:""
            },
            {
            id:107,
            eng:"G",
            ru:" букву / джи / ",
            hint:" / седьмая буква алфавита /"
            },
            {
            id:108,
            eng:"H",
            ru:" букву / эйч / ",
            hint:""
            },
            {
            id:109,
            eng:"I",
            ru:" букву / ай / ",
            hint:" / палка с точкой /"
            },
            {
            id:110,
            eng:"J",
            ru:" букву / джэй / ",
            hint:" / на крюк похожа /"
            },
            {
            id:111,
            eng:"K",
            ru:" букву / кей / ",
            hint:""
            },
            {
            id:112,
            eng:"L",
            ru:" букву / эл / ",
            hint:""
            },
            {
            id:113,
            eng:"M",
            ru:" букву / эм / ",
            hint:""
            },
            {
            id:114,
            eng:"N",
            ru:" букву / эн / ",
            hint:""
            },
            {
            id:115,
            eng:"O",
            ru:" букву / оу / ",
            hint:""
            },
            {
            id:116,
            eng:"P",
            ru:" букву / пи / ",
            hint:""
            },
            {
            id:117,
            eng:"Q",
            ru:" букву / кью / ",
            hint:" / коэффициент Ай Кью /"
            },
            {
            id:118,
            eng:"R",
            ru:" букву / ар / ",
            hint:" / рок эн ролл /"
            },
            {
            id:119,
            eng:"S",
            ru:" букву / эс / ",
            hint:" / как змея /"
            },
            {
            id:120,
            eng:"T",
            ru:" букву / ти / ",
            hint:""
            },
            {
            id:121,
            eng:"U",
            ru:" букву / ю / ",
            hint:" / на подкову похожа /"
            },
            {
            id:122,
            eng:"V",
            ru:" букву / ви / ",
            hint:""
            },
            {
            id:123,
            eng:"W",
            ru:" букву / дабл ю / ",
            hint:""
            },
            {
            id:124,
            eng:"X",
            ru:" букву / экс / ",
            hint:""
            },
            {
            id:125,
            eng:"Y",
            ru:" букву / уай / ",
            hint:" / не игрик и не У /"
            },
            {
            id:126,
            eng:"Z",
            ru:" букву / ЗИ или ZЭД / ",
            hint:""
            },
    ],
    m004: [
        {
            id:1,
            eng:"I am clever",
            ru:"я умный (я умная)",
            hint:" / ай эм клЭвэ /"
            },
            {
            id:2,
            eng:"you are smart",
            ru:"вы сообразительный",
            hint:" / ю а смарт /"
            },
            {
            id:3,
            eng:"we are ready",
            ru:"мы готовы",
            hint:" / уи а рЭди /"
            },
            {
            id:4,
            eng:"they are silly",
            ru:"они глупые",
            hint:" / дэй а сИли /"
            },
            {
            id:5,
            eng:"he is angry",
            ru:"он сердитый",
            hint:" / хи из Энгри /"
            },
            {
            id:6,
            eng:"he is hungry",
            ru:"он голодный",
            hint:" / хи из хАнГри /"
            },
            {
            id:7,
            eng:"she is beautiful",
            ru:"она красивая",
            hint:" / щи из бьютифул /"
            },
            {
            id:8,
            eng:"he is handsome",
            ru:"он красивый",
            hint:" / хи из хЭнсам /"
            },
            {
            id:9,
            eng:"I am not fat",
            ru:"я не жирная (я не жирный)",
            hint:" / ай эм нот фэт /"
            },
            {
            id:10,
            eng:"you are my buddy",
            ru:"ты мой приятель",
            hint:" / ю а май бАдди /"
            },
            {
            id:11,
            eng:"he is our friend",
            ru:"он наш друг",
            hint:" / хи из аУа фрэнд /"
            },
            {
            id:12,
            eng:"it is our cat",
            ru:"это наша кошка",
            hint:" / ит из аУа кэт /"
            },
            {
            id:13,
            eng:"our cat is cool",
            ru:"наша кот классный (прикольный, крутой)",
            hint:" / аУа кЭт из кул /"
            },
    ],
    ach002: [
        {
            id:1,
            eng:"zero",
            ru:"ноль",
            hint:" / зИроу /"
            },
            {
            id:2,
            eng:"one",
            ru:"один",
            hint:" / уан /"
            },
            {
            id:3,
            eng:"two",
            ru:"два",
            hint:" / ту /"
            },
            {
            id:4,
            eng:"three",
            ru:"три",
            hint:" / Thри /"
            },
            {
            id:5,
            eng:"four",
            ru:"четыре",
            hint:" / фо /"
            },
            {
            id:6,
            eng:"five",
            ru:"пять",
            hint:" / файв /"
            },
            {
            id:7,
            eng:"six",
            ru:"шесть",
            hint:" / сыкс /"
            },
            {
            id:8,
            eng:"seven",
            ru:"семь",
            hint:" / сэвн /"
            },
            {
            id:9,
            eng:"eight",
            ru:"восемь",
            hint:" / эйт /"
            },
            {
            id:10,
            eng:"nine",
            ru:"девять",
            hint:" / найн /"
            },
            {
            id:11,
            eng:"ten",
            ru:"десять",
            hint:" / тэн /"
            },
            {
            id:12,
            eng:"eleven",
            ru:"одиннадцать",
            hint:" / илэвн /"
            },
            {
            id:13,
            eng:"twelve",
            ru:"двенадцать",
            hint:" / туэлв /"
            },
            {
            id:14,
            eng:"thirteen",
            ru:"тринадцать",
            hint:" / THётИИИН /"
            },
            {
            id:15,
            eng:"fourteen",
            ru:"четырнадцать",
            hint:" / фотИИИН /"
            },
            {
            id:16,
            eng:"fifteen",
            ru:"пятнадцать",
            hint:" / фифтИИИН /"
            },
            {
            id:17,
            eng:"sixteen",
            ru:"шестнадцать",
            hint:" / сыкстИИИН /"
            },
            {
            id:18,
            eng:"seventeen",
            ru:"семнадцать",
            hint:" / сэвнтИИИН /"
            },
            {
            id:19,
            eng:"eighteen",
            ru:"восемнадцать",
            hint:" / эйтИИИН /"
            },
            {
            id:20,
            eng:"nineteen",
            ru:"девятнадцать",
            hint:" / найнтИИИН /"
            },
            {
            id:21,
            eng:"twenty",
            ru:"двадцать",
            hint:" / туЭнти /"
            },
            {
            id:22,
            eng:"plus",
            ru:"плюс",
            hint:" / плАс /"
            },
            {
            id:23,
            eng:"minus",
            ru:"минус",
            hint:" / мАйнэс /"
            },
    ],
    adjAB: [
        {
            id:1,
            eng:"alive",
            ru:"живой",
            hint:" / элАйв /"
            },
            {
            id:2,
            eng:"amazing",
            ru:"удивительный",
            hint:" / эмЭйзин /"
            },
            {
            id:3,
            eng:"angry",
            ru:"сердитый",
            hint:" / Энгри /"
            },
            {
            id:4,
            eng:"annoying",
            ru:"бесящий",
            hint:" / энОин /"
            },
            {
            id:5,
            eng:"attractive",
            ru:"привлекательный",
            hint:" / этрЭктив /"
            },
            {
            id:6,
            eng:"awesome",
            ru:"офигенный",
            hint:" / Осм /"
            },
            {
            id:7,
            eng:"accurate",
            ru:"точный (верный)",
            hint:" / Экьюрэт /"
            },
            {
            id:8,
            eng:"agile",
            ru:"ловкий",
            hint:" / эджАйл /"
            },
            {
            id:9,
            eng:"bad",
            ru:"плохой",
            hint:" / бЭд /"
            },
            {
            id:10,
            eng:"bald",
            ru:"лысый",
            hint:" / бОлд /"
            },
            {
            id:11,
            eng:"beautiful",
            ru:"красивая",
            hint:" / бьютифул /"
            },
            {
            id:12,
            eng:"big",
            ru:"большой",
            hint:" / биГ /"
            },
            {
            id:13,
            eng:"black",
            ru:"Черный",
            hint:" / блЭк /"
            },
            {
            id:14,
            eng:"bloody",
            ru:"кровавый",
            hint:" / блАди /"
            },
            {
            id:15,
            eng:"blue",
            ru:"синий",
            hint:" / блУ /"
            },
            {
            id:16,
            eng:"bold",
            ru:"смелый",
            hint:" / бОлд /"
            },
            {
            id:17,
            eng:"boring",
            ru:"скучный",
            hint:" / бОрин /"
            },
            {
            id:18,
            eng:"bossy",
            ru:"властный",
            hint:" / бОсси /"
            },
            {
            id:19,
            eng:"bothering",
            ru:"раздражающий",
            hint:" / бАthэрин /"
            },
            {
            id:20,
            eng:"brave",
            ru:"храбрый",
            hint:" / брЭйв /"
            },
            {
            id:21,
            eng:"breathtaking",
            ru:"захватывающий дух",
            hint:" / брэth тэйкин /"
            },
            {
            id:22,
            eng:"bright",
            ru:"яркий",
            hint:" / брАйт /"
            },
            {
            id:23,
            eng:"busy",
            ru:"занятой",
            hint:" / бИзи /"
            },
    ],
    adjCD: [
        {
            id:24,
            eng:"calm",
            ru:"спокойный",
            hint:" / кам /"
            },
            {
            id:25,
            eng:"cheap",
            ru:"дешевый",
            hint:" / чип /"
            },
            {
            id:26,
            eng:"clean",
            ru:"чистый",
            hint:" / клин /"
            },
            {
            id:27,
            eng:"close",
            ru:"близкий",
            hint:" / клоуС /"
            },
            {
            id:28,
            eng:"cloudy",
            ru:"облачный",
            hint:" / клАуди /"
            },
            {
            id:29,
            eng:"clumsy",
            ru:"неуклюжий",
            hint:" / клАмзи /"
            },
            {
            id:30,
            eng:"cold",
            ru:"холодный",
            hint:" / коУлд /"
            },
            {
            id:31,
            eng:"cool",
            ru:"крутой",
            hint:" / кул /"
            },
            {
            id:32,
            eng:"correct",
            ru:"верный",
            hint:" / корЭкт /"
            },
            {
            id:33,
            eng:"cozy",
            ru:"уютный",
            hint:" / кОузи /"
            },
            {
            id:34,
            eng:"crazy",
            ru:"сумасшедший",
            hint:" / крЭйзи /"
            },
            {
            id:35,
            eng:"crispy",
            ru:"хрустящий",
            hint:" / крИспи /"
            },
            {
            id:36,
            eng:"curly",
            ru:"кудрявый",
            hint:" / кёли /"
            },
            {
            id:37,
            eng:"cute",
            ru:"милый",
            hint:" / кьЮт /"
            },
            {
            id:38,
            eng:"dark",
            ru:"темный",
            hint:" / дарк /"
            },
            {
            id:39,
            eng:"deadly",
            ru:"смертельный",
            hint:" / дЭдли /"
            },
            {
            id:40,
            eng:"deep",
            ru:"глубокий",
            hint:" / дип /"
            },
            {
            id:41,
            eng:"dirty",
            ru:"грязный",
            hint:" / дёти /"
            },
            {
            id:42,
            eng:"disgusting",
            ru:"отвратительный",
            hint:" / дисгАстин /"
            },
            {
            id:43,
            eng:"drunk",
            ru:"пьяный",
            hint:" / дрАнк /"
            },
            {
            id:44,
            eng:"dry",
            ru:"сухой",
            hint:" / дрАй /"
            },
            {
            id:45,
            eng:"dull",
            ru:"затупившийся",
            hint:" / дал /"
            },
            {
            id:46,
            eng:"dumb",
            ru:"болван",
            hint:" / дам /"
            },
            {
            id:47,
            eng:"dusty",
            ru:"пыльный",
            hint:" / дАсти /"
            },
    ],
    adjEF: [
        {
            id:48,
            eng:"early",
            ru:"ранний",
            hint:" / ёли /"
            },
            {
            id:49,
            eng:"easy",
            ru:"легкий",
            hint:" / Изи /"
            },
            {
            id:50,
            eng:"evil",
            ru:"злой",
            hint:" / Ивэл /"
            },
            {
            id:51,
            eng:"expensive",
            ru:"дорогой",
            hint:" / экспЭнсив /"
            },
            {
            id:52,
            eng:"fabulous",
            ru:"поразительный",
            hint:" / фЭбьюлэс /"
            },
            {
            id:53,
            eng:"fair",
            ru:"справедливый",
            hint:" / фЭа /"
            },
            {
            id:54,
            eng:"fancy",
            ru:"изысканный",
            hint:" / фЭнси /"
            },
            {
            id:55,
            eng:"fantastic",
            ru:"фантастичный",
            hint:" / фэнстэстик /"
            },
            {
            id:56,
            eng:"far",
            ru:"далекий",
            hint:" / фа /"
            },
            {
            id:57,
            eng:"fashionable",
            ru:"модный",
            hint:" / фЭшэнэбл /"
            },
            {
            id:58,
            eng:"fast",
            ru:"быстрый",
            hint:" / фаст /"
            },
            {
            id:59,
            eng:"fat",
            ru:"жирный",
            hint:" / фэт /"
            },
            {
            id:60,
            eng:"favorite",
            ru:"любимый",
            hint:" / фЭйворит /"
            },
            {
            id:61,
            eng:"few",
            ru:"несколько, мало",
            hint:" / фью /"
            },
            {
            id:62,
            eng:"fierce",
            ru:"свирепый",
            hint:" / фИрс /"
            },
            {
            id:63,
            eng:"filthy",
            ru:"мерзкий",
            hint:" / филTHи /"
            },
            {
            id:64,
            eng:"firm",
            ru:"упругий",
            hint:" / фЁрм /"
            },
            {
            id:65,
            eng:"flat",
            ru:"плоский",
            hint:" / флЭт /"
            },
            {
            id:66,
            eng:"flexible",
            ru:"гибкий",
            hint:" / флЭксибл /"
            },
            {
            id:67,
            eng:"fresh",
            ru:"свежий",
            hint:" / фрЭш /"
            },
            {
            id:68,
            eng:"friendly",
            ru:"дружелюбный",
            hint:" / фрЭндли /"
            },
            {
            id:69,
            eng:"full",
            ru:"полный",
            hint:" / фУл /"
            },
            {
            id:70,
            eng:"funny",
            ru:"смешной",
            hint:" / фАнни /"
            },
    ],
    adjGHI: [
        {
            id:71,
            eng:"gentle",
            ru:"нежный",
            hint:" / джЭнтл /"
            },
            {
            id:72,
            eng:"gloomy",
            ru:"мрачный",
            hint:" / глУми /"
            },
            {
            id:73,
            eng:"good",
            ru:"хороший",
            hint:" / гуД /"
            },
            {
            id:74,
            eng:"great",
            ru:"великий",
            hint:" / грЭйт /"
            },
            {
            id:75,
            eng:"greedy",
            ru:"жадный",
            hint:" / грИди /"
            },
            {
            id:76,
            eng:"green",
            ru:"зелёный",
            hint:" / грин /"
            },
            {
            id:77,
            eng:"hairy",
            ru:"волосатый",
            hint:" / хЭйри /"
            },
            {
            id:78,
            eng:"handsome",
            ru:"красивый (муж)",
            hint:" / хЭнсам /"
            },
            {
            id:79,
            eng:"happy",
            ru:"счастливый",
            hint:" / хЭппи /"
            },
            {
            id:80,
            eng:"hard",
            ru:"трудный",
            hint:" / хАрд /"
            },
            {
            id:81,
            eng:"harsh",
            ru:"суровый",
            hint:" / хАрш /"
            },
            {
            id:82,
            eng:"healthy",
            ru:"здоровый",
            hint:" / хЭлTHи /"
            },
            {
            id:83,
            eng:"heavy",
            ru:"тяжелый",
            hint:" / хЭви /"
            },
            {
            id:84,
            eng:"high",
            ru:"высокий (о зданиях)",
            hint:" / хай /"
            },
            {
            id:85,
            eng:"hollow",
            ru:"пустотелый",
            hint:" / хОлоу /"
            },
            {
            id:86,
            eng:"hot",
            ru:"горячий",
            hint:" / хот или хат /"
            },
            {
            id:87,
            eng:"humble",
            ru:"скромный",
            hint:" / хАмбл /"
            },
            {
            id:88,
            eng:"hungry",
            ru:"голодный",
            hint:" / хАнгри /"
            },
            {
            id:89,
            eng:"icy",
            ru:"ледяной",
            hint:" / Айси /"
            },
            {
            id:90,
            eng:"immortal",
            ru:"бессмертный",
            hint:" / иммОртал /"
            },
            {
            id:91,
            eng:"incredible",
            ru:"невероятный",
            hint:" / инкрЭдбл /"
            },
            {
            id:92,
            eng:"intelligent",
            ru:"образованный",
            hint:" / интэлиджент /"
            },
            {
            id:93,
            eng:"interesting",
            ru:"интересный",
            hint:" / ИНтрэстин /"
            },
            {
            id:94,
            eng:"itchy",
            ru:"зудящий",
            hint:" / Итчи /"
            },
    ],
    adjJKLMN: [
        {
            id:95,
            eng:"juicy",
            ru:"сочный",
            hint:" / джУси /"
            },
            {
            id:96,
            eng:"kind",
            ru:"добрый",
            hint:" / кАйнд /"
            },
            {
            id:97,
            eng:"large",
            ru:"большой",
            hint:" / лАдж /"
            },
            {
            id:98,
            eng:"late",
            ru:"поздний",
            hint:" / лЭйт /"
            },
            {
            id:99,
            eng:"lazy",
            ru:"ленивый",
            hint:" / лЭйзи /"
            },
            {
            id:100,
            eng:"legendary",
            ru:"легендарный",
            hint:" / лэДЖэндэри /"
            },
            {
            id:101,
            eng:"light",
            ru:"светлый",
            hint:" / лАйт /"
            },
            {
            id:102,
            eng:"little",
            ru:"мало",
            hint:" / лИтл /"
            },
            {
            id:103,
            eng:"long",
            ru:"длинный",
            hint:" / лОн /"
            },
            {
            id:104,
            eng:"loud",
            ru:"громкий",
            hint:" / лАуд /"
            },
            {
            id:105,
            eng:"low",
            ru:"низкий",
            hint:" / лОу /"
            },
            {
            id:106,
            eng:"mad",
            ru:"безумный",
            hint:" / мЭд /"
            },
            {
            id:107,
            eng:"muscular",
            ru:"мускулистый",
            hint:" / мАскьюла /"
            },
            {
            id:108,
            eng:"mean",
            ru:"злобный",
            hint:" / мин /"
            },
            {
            id:109,
            eng:"merry",
            ru:"веселый",
            hint:" / мЭри /"
            },
            {
            id:110,
            eng:"messy",
            ru:"неряшливый",
            hint:" / мЭси /"
            },
            {
            id:111,
            eng:"much or many",
            ru:"много",
            hint:" / мач о мэни /"
            },
            {
            id:112,
            eng:"narrow",
            ru:"узкий",
            hint:" / нЭроу /"
            },
            {
            id:113,
            eng:"nasty",
            ru:"противный",
            hint:" / нЭсти /"
            },
            {
            id:114,
            eng:"naughty",
            ru:"непослушный",
            hint:" / нОти /"
            },
            {
            id:115,
            eng:"near",
            ru:"ближайший",
            hint:" / нИа /"
            },
            {
            id:116,
            eng:"neat",
            ru:"аккуратный",
            hint:" / нит /"
            },
            {
            id:117,
            eng:"needy",
            ru:"нуждающийся",
            hint:" / нИди /"
            },
            {
            id:118,
            eng:"nervous",
            ru:"нервный",
            hint:" / нЁвэс /"
            },
            {
            id:119,
            eng:"new",
            ru:"новый",
            hint:" / ньЮ /"
            },
            {
            id:120,
            eng:"nice",
            ru:"приятный",
            hint:" / нАйс /"
            },
            {
            id:121,
            eng:"noisy",
            ru:"шумный",
            hint:" / нОйзи /"
            },
    ],
    adjOPQR: [
        {
            id:122,
            eng:"oily",
            ru:"маслянистый",
            hint:" / Ойли /"
            },
            {
            id:123,
            eng:"old",
            ru:"старый",
            hint:" / оУлд /"
            },
            {
            id:124,
            eng:"overweight",
            ru:"полноватый",
            hint:" / ОувэУэйт /"
            },
            {
            id:125,
            eng:"picky",
            ru:"придирчивый",
            hint:" / пИки /"
            },
            {
            id:126,
            eng:"simple",
            ru:"простой, обычный",
            hint:" / симпл /"
            },
            {
            id:127,
            eng:"polite",
            ru:"вежливый",
            hint:" / полАйт /"
            },
            {
            id:128,
            eng:"poor",
            ru:"бедный",
            hint:" / пУэ /"
            },
            {
            id:129,
            eng:"pretty",
            ru:"симпотный",
            hint:" / прИти /"
            },
            {
            id:130,
            eng:"proud",
            ru:"гордый",
            hint:" / прАуд /"
            },
            {
            id:131,
            eng:"pure",
            ru:"безпримесный",
            hint:" / пьЮэ /"
            },
            {
            id:132,
            eng:"quick",
            ru:"быстрый",
            hint:" / квик /"
            },
            {
            id:133,
            eng:"quiet",
            ru:"тихий",
            hint:" / куАйет /"
            },
            {
            id:134,
            eng:"rare",
            ru:"редкий",
            hint:" / рЭа /"
            },
            {
            id:135,
            eng:"raw",
            ru:"сырой",
            hint:" / ро /"
            },
            {
            id:136,
            eng:"reliable",
            ru:"надёжный",
            hint:" / рилАибл /"
            },
            {
            id:137,
            eng:"rich",
            ru:"богатый",
            hint:" / рич /"
            },
            {
            id:138,
            eng:"ripe",
            ru:"спелый",
            hint:" / рАйп /"
            },
            {
            id:139,
            eng:"risky",
            ru:"рискованный",
            hint:" / рИски /"
            },
            {
            id:140,
            eng:"rough",
            ru:"черствый, грубый",
            hint:" / рАф /"
            },
            {
            id:141,
            eng:"rude",
            ru:"грубый в общении",
            hint:" / рУд /"
            },
            {
            id:142,
            eng:"rusty",
            ru:"ржавый",
            hint:" / рАсти /"
            },
    ],
    adjS: [
        {
            id:143,
            eng:"sad",
            ru:"грустный",
            hint:" / сЭд /"
            },
            {
            id:144,
            eng:"safe",
            ru:"безопасный",
            hint:" / сЭйф /"
            },
            {
            id:145,
            eng:"salty",
            ru:"соленый",
            hint:" / сОлти /"
            },
            {
            id:146,
            eng:"sane",
            ru:"здравомыслящий",
            hint:" / сЭйн /"
            },
            {
            id:147,
            eng:"scared",
            ru:"напуганный",
            hint:" / скЭад /"
            },
            {
            id:148,
            eng:"scary",
            ru:"пугающий",
            hint:" / скЭри /"
            },
            {
            id:149,
            eng:"selfish",
            ru:"эгоистичный",
            hint:" / сЭлфиш /"
            },
            {
            id:150,
            eng:"sexy",
            ru:"сексуальный",
            hint:" / сэкси /"
            },
            {
            id:151,
            eng:"sharp",
            ru:"острый",
            hint:" / шАрп /"
            },
            {
            id:152,
            eng:"shiny",
            ru:"светящийся",
            hint:" / шАйни /"
            },
            {
            id:153,
            eng:"shitty",
            ru:"дерьмовенький",
            hint:" / щИти /"
            },
            {
            id:154,
            eng:"shocking",
            ru:"шокирующий",
            hint:" / шОкин /"
            },
            {
            id:155,
            eng:"short",
            ru:"короткий, низкий",
            hint:" / шорт /"
            },
            {
            id:156,
            eng:"shy",
            ru:"застенчивый",
            hint:" / шАй /"
            },
            {
            id:157,
            eng:"silly",
            ru:"глупый",
            hint:" / сИли /"
            },
            {
            id:158,
            eng:"sincere",
            ru:"искренний",
            hint:" / синсИэ /"
            },
            {
            id:159,
            eng:"skinny",
            ru:"тощий",
            hint:" / скИни /"
            },
            {
            id:160,
            eng:"sleepy",
            ru:"сонный",
            hint:" / слИпи /"
            },
            {
            id:161,
            eng:"slim",
            ru:"стройный",
            hint:" / слИм /"
            },
            {
            id:162,
            eng:"slimy",
            ru:"слизкий",
            hint:" / слАйми /"
            },
            {
            id:163,
            eng:"slow",
            ru:"медленный",
            hint:" / слОу /"
            },
            {
            id:164,
            eng:"small",
            ru:"маленький",
            hint:" / смОл /"
            },
            {
            id:165,
            eng:"smart",
            ru:"сообразительный",
            hint:" / смАрт /"
            },
            {
            id:166,
            eng:"smelly",
            ru:"вонючий",
            hint:" / смЭли /"
            },
            {
            id:167,
            eng:"smoky",
            ru:"дымный",
            hint:" / смОуки /"
            },
            {
            id:168,
            eng:"smooth",
            ru:"гладкий",
            hint:" / смуз /"
            },
            {
            id:169,
            eng:"soft",
            ru:"мягкий",
            hint:" / софт /"
            },
            {
            id:170,
            eng:"soon",
            ru:"скоро",
            hint:" / сун /"
            },
            {
            id:171,
            eng:"sorry",
            ru:"сожалеющий",
            hint:" / сори /"
            },
            {
            id:172,
            eng:"sour",
            ru:"кислый",
            hint:" / сАуэ /"
            },
            {
            id:173,
            eng:"spacious",
            ru:"просторный",
            hint:" / спЭйшэс /"
            },
            {
            id:174,
            eng:"special",
            ru:"особенный",
            hint:" / спЭшл /"
            },
            {
            id:175,
            eng:"spicy",
            ru:"острый",
            hint:" / спАйси /"
            },
            {
            id:176,
            eng:"steep",
            ru:"крутой (наклон)",
            hint:" / стИп /"
            },
            {
            id:177,
            eng:"strange/weird",
            ru:"странный",
            hint:" / weird /"
            },
            {
            id:178,
            eng:"strict",
            ru:"строгий",
            hint:" / стрИкт /"
            },
            {
            id:179,
            eng:"strong",
            ru:"сильный",
            hint:" / стрОн /"
            },
            {
            id:180,
            eng:"stupid",
            ru:"тупой",
            hint:" / стьЮпид /"
            },
            {
            id:181,
            eng:"successful",
            ru:"успешный",
            hint:" / саксЭсфул /"
            },
            {
            id:182,
            eng:"sunny",
            ru:"солнечный",
            hint:" / сАнни /"
            },
            {
            id:183,
            eng:"sweaty",
            ru:"потный",
            hint:" / свЭти /"
            },
            {
            id:184,
            eng:"sweet",
            ru:"сладкий",
            hint:" / свит /"
            },
    ],
    adjTUVWY: [
        {
            id:185,
            eng:"tanned",
            ru:"загорелый",
            hint:" / тЭнд /"
            },
            {
            id:186,
            eng:"tasty",
            ru:"вкусный",
            hint:" / тЭйсти /"
            },
            {
            id:187,
            eng:"thin/thick",
            ru:"тонкий/толстый",
            hint:" / Thын Thык /"
            },
            {
            id:188,
            eng:"thirsty",
            ru:"жаждущий",
            hint:" / Thёсти /"
            },
            {
            id:189,
            eng:"tiny",
            ru:"крошечный",
            hint:" / тАйни /"
            },
            {
            id:190,
            eng:"tricky",
            ru:"хитрый",
            hint:" / трИки /"
            },
            {
            id:191,
            eng:"TRUE",
            ru:"верный",
            hint:" / тру /"
            },
            {
            id:192,
            eng:"ugly",
            ru:"уродливый",
            hint:" / Агли /"
            },
            {
            id:193,
            eng:"vulgar",
            ru:"вульгарный",
            hint:" / вАлгар /"
            },
            {
            id:194,
            eng:"warm",
            ru:"теплый",
            hint:" / вОм /"
            },
            {
            id:195,
            eng:"weak",
            ru:"слабый",
            hint:" / уИк /"
            },
            {
            id:196,
            eng:"wealthy",
            ru:"состоятельный",
            hint:" / уЭлTHи /"
            },
            {
            id:197,
            eng:"wet",
            ru:"мокрый",
            hint:" / уЭт /"
            },
            {
            id:198,
            eng:"wide",
            ru:"широкий",
            hint:" / уАйд /"
            },
            {
            id:199,
            eng:"wild",
            ru:"дикий",
            hint:" / уАйлд /"
            },
            {
            id:200,
            eng:"windy",
            ru:"ветреный",
            hint:" / уИнди /"
            },
            {
            id:201,
            eng:"wise",
            ru:"мудрый",
            hint:" / уАйз /"
            },
            {
            id:202,
            eng:"wonderful",
            ru:"замечательный",
            hint:" / уандэрфул /"
            },
            {
            id:203,
            eng:"worthy",
            ru:"достойный",
            hint:" / уОрTHи /"
            },
            {
            id:204,
            eng:"young",
            ru:"молодой",
            hint:" / ян /"
            },
            {
            id:205,
            eng:"tall",
            ru:"высокий (о людях)",
            hint:" / тОл /"
            },
    ],
    naughtyVerbsBtnt2forms: [
        {
            id:1,
            eng:"break",
            ru:"ломать",
            hint:"/ брЭйк /"
            },
            {
            id:2,
            eng:"beat",
            ru:"побить",
            hint:"/ бит /"
            },
            {
            id:3,
            eng:"become",
            ru:"становиться",
            hint:"/ бекАм /"
            },
            {
            id:4,
            eng:"begin",
            ru:"начинать",
            hint:"/ бегИн /"
            },
            {
            id:5,
            eng:"blow",
            ru:"дуть",
            hint:"/ блОу /"
            },
            {
            id:6,
            eng:"borrow",
            ru:"брать в долг",
            hint:"/ бОроу /"
            },
            {
            id:7,
            eng:"build",
            ru:"строить",
            hint:"/ билд /"
            },
            {
            id:8,
            eng:"burn",
            ru:"сжигать, гореть",
            hint:"/ бЁрн /"
            },
            {
            id:9,
            eng:"buy",
            ru:"покупать",
            hint:"/ бАй /"
            },
            {
            id:10,
            eng:"bring",
            ru:"приносить",
            hint:"/ брин /"
            },
            {
            id:11,
            eng:"be",
            ru:"быть",
            hint:"/ эм из а /"
            },
            {
            id:12,
            eng:"bite",
            ru:"кусать",
            hint:"/ бАйт /"
            },
            {
                id:101,
                eng:"broke",
                ru:"сломал, нарушил",
                hint:"/ брОУк /"
                },
                {
                id:102,
                eng:"beat",
                ru:"побил",
                hint:"/ бит /"
                },
                {
                id:103,
                eng:"became",
                ru:"стал",
                hint:"/ бекЕйм /"
                },
                {
                id:104,
                eng:"began",
                ru:"начал",
                hint:"/ бегЭн /"
                },
                {
                id:105,
                eng:"blew",
                ru:"дул",
                hint:"/ блУ /"
                },
                {
                id:106,
                eng:"borrowed",
                ru:"взял в долг занял, одолжил",
                hint:"/ бОроуд /"
                },
                {
                id:107,
                eng:"built",
                ru:"построил",
                hint:"/ билт /"
                },
                {
                id:108,
                eng:"burnt",
                ru:"сжёг",
                hint:"/ бёрнт /"
                },
                {
                id:109,
                eng:"bought",
                ru:"купил",
                hint:"/ бот /"
                },
                {
                id:110,
                eng:"brought",
                ru:"принёс",
                hint:"/ брот /"
                },
                {
                id:111,
                eng:"was",
                ru:"был",
                hint:"/ воз /"
                },
                {
                id:112,
                eng:"bit",
                ru:"укусил",
                hint:"/ бит /"
                },
                {
                id:113,
                eng:"were",
                ru:"были",
                hint:"/ вё /"
                },
                {
                    id:201,
                    eng:"broken",
                    ru:"сломанный",
                    hint:"/ брОУкэн /"
                    },
                    {
                    id:202,
                    eng:"beaten",
                    ru:"побитый",
                    hint:"/ битн /"
                    },
                    {
                    id:203,
                    eng:"become",
                    ru:"третья форма глагола ` становиться `",
                    hint:"/ бекАм /"
                    },
                    {
                    id:204,
                    eng:"begun",
                    ru:"третья форма глагола ` начинать `",
                    hint:"/ бегАн /"
                    },
                    {
                    id:205,
                    eng:"blown",
                    ru:"третья форма глагола ` дуть `",
                    hint:"/ блОун /"
                    },
                    {
                    id:206,
                    eng:"borrowed",
                    ru:"третья форма глагола ` брать в долг `",
                    hint:"/ бОроуд /"
                    },
                    {
                    id:207,
                    eng:"built",
                    ru:"построено",
                    hint:"/ билт /"
                    },
                    {
                    id:208,
                    eng:"burnt",
                    ru:"сгоревший",
                    hint:"/ бёрнт /"
                    },
                    {
                    id:209,
                    eng:"bought",
                    ru:"купленный, куплено",
                    hint:"/ бот /"
                    },
                    {
                    id:210,
                    eng:"brought",
                    ru:"принесённый, принесено",
                    hint:"/ брот /"
                    },
                    {
                    id:211,
                    eng:"been",
                    ru:"третья форма глагола ` быть `",
                    hint:"/ бин /"
                    },
                    {
                    id:212,
                    eng:"bit",
                    ru:"третья форма глагола ` кусать `",
                    hint:"/ бит /"
                    },
    ],
    naughtyVerbsCD: [
        {
            id:13,
            eng:"come",
            ru:"приходить",
            hint:"/ кАм /"
            },
            {
            id:14,
            eng:"choose",
            ru:"выбирать",
            hint:"/ чУз /"
            },
            {
            id:15,
            eng:"catch",
            ru:"ловить",
            hint:"/ кЭч /"
            },
            {
            id:16,
            eng:"creep",
            ru:"ползать",
            hint:"/ крИп /"
            },
            {
            id:17,
            eng:"cost",
            ru:"стоить",
            hint:"/ кост /"
            },
            {
            id:18,
            eng:"cut",
            ru:"резать",
            hint:"/ кАт /"
            },
            {
            id:19,
            eng:"deal",
            ru:"иметь дела",
            hint:"/ дИл /"
            },
            {
            id:20,
            eng:"dig",
            ru:"копать",
            hint:"/ диГ /"
            },
            {
            id:21,
            eng:"do",
            ru:"делать",
            hint:"/ ду /"
            },
            {
            id:22,
            eng:"drive",
            ru:"водить",
            hint:"/ дрАйв /"
            },
            {
            id:23,
            eng:"draw",
            ru:"рисовать",
            hint:"/ дрО /"
            },
            {
            id:24,
            eng:"drink",
            ru:"пить",
            hint:"/ дринк /"
            },
            {
                id:113,
                eng:"came",
                ru:"вторая форма глагола ` приходить `",
                hint:"/ кейм /"
                },
                {
                id:114,
                eng:"chose",
                ru:"вторая форма глагола ` выбирать `",
                hint:"/ чОуз /"
                },
                {
                id:115,
                eng:"caught",
                ru:"вторая форма глагола ` ловить `",
                hint:"/ кот /"
                },
                {
                id:116,
                eng:"crept",
                ru:"вторая форма глагола ` ползать `",
                hint:"/ крэпт /"
                },
                {
                id:117,
                eng:"cost",
                ru:"вторая форма глагола ` стоить `",
                hint:"/ кост /"
                },
                {
                id:118,
                eng:"cut",
                ru:"вторая форма глагола ` резать `",
                hint:"/ кат /"
                },
                {
                id:119,
                eng:"dealt",
                ru:"вторая форма глагола ` иметь дела `",
                hint:"/ дэлт /"
                },
                {
                id:120,
                eng:"dug",
                ru:"вторая форма глагола ` копать `",
                hint:"/ даг /"
                },
                {
                id:121,
                eng:"did",
                ru:"вторая форма глагола ` делать `",
                hint:"/ дид /"
                },
                {
                id:122,
                eng:"drove",
                ru:"вторая форма глагола ` водить `",
                hint:"/ дроув /"
                },
                {
                id:123,
                eng:"drew",
                ru:"вторая форма глагола ` рисовать `",
                hint:"/ дрУ /"
                },
                {
                id:124,
                eng:"drank",
                ru:"вторая форма глагола ` пить `",
                hint:"/ дрЭнк /"
                },
                {
                    id:213,
                    eng:"come",
                    ru:"третья форма глагола ` приходить `",
                    hint:"/ кАм /"
                    },
                    {
                    id:214,
                    eng:"chosen",
                    ru:"избранный, третья форма глагола выбирать",
                    hint:"/ чОуzэн /"
                    },
                    {
                    id:215,
                    eng:"caught",
                    ru:"пойман",
                    hint:"/ кот /"
                    },
                    {
                    id:216,
                    eng:"crept",
                    ru:"третья форма глагола ` ползать `",
                    hint:"/ крэпт /"
                    },
                    {
                    id:217,
                    eng:"cost",
                    ru:"третья форма глагола ` стоить `",
                    hint:"/ кост /"
                    },
                    {
                    id:218,
                    eng:"cut",
                    ru:"третья форма глагола ` резать `",
                    hint:"/ кат /"
                    },
                    {
                    id:219,
                    eng:"dealt",
                    ru:"третья форма глагола ` иметь дела `",
                    hint:"/ дэлт /"
                    },
                    {
                    id:220,
                    eng:"dug",
                    ru:"третья форма глагола ` копать `",
                    hint:"/ даг /"
                    },
                    {
                    id:221,
                    eng:"done",
                    ru:"сделано, выполнено, третья форма глагола ДЕЛАТЬ",
                    hint:"/ дан /"
                    },
                    {
                    id:222,
                    eng:"driven",
                    ru:"третья форма глагола ` водить `",
                    hint:"/ дривн /"
                    },
                    {
                    id:223,
                    eng:"drawn",
                    ru:"нарисованный, нарисованно",
                    hint:"/ дроун /"
                    },
                    {
                    id:224,
                    eng:"drunk",
                    ru:"пьяный или выпито",
                    hint:"/ дрАнк /"
                    },
    ],
    naughtyVerbsEF: [
        {
            id:25,
            eng:"eat",
            ru:"кушать",
            hint:"/ ит /"
            },
            {
            id:26,
            eng:"fall",
            ru:"падать",
            hint:"/ фол /"
            },
            {
            id:27,
            eng:"feed",
            ru:"кормить",
            hint:"/ фиД /"
            },
            {
            id:28,
            eng:"feel",
            ru:"чувствовать",
            hint:"/ фил /"
            },
            {
            id:29,
            eng:"fight",
            ru:"сражаться",
            hint:"/ фАйт /"
            },
            {
            id:30,
            eng:"find",
            ru:"находить",
            hint:"/ фАйнд /"
            },
            {
            id:31,
            eng:"fly",
            ru:"летать",
            hint:"/ флАй /"
            },
            {
            id:32,
            eng:"forbid",
            ru:"запрещать",
            hint:"/ фобИд /"
            },
            {
            id:33,
            eng:"forget",
            ru:"забывать",
            hint:"/ фогОт /"
            },
            {
            id:34,
            eng:"forgive",
            ru:"прощать",
            hint:"/ фогИв /"
            },
            {
            id:35,
            eng:"freeze",
            ru:"замерзать",
            hint:"/ фриз /"
            },
            {
                id:125,
                eng:"ate",
                ru:"вторая форма глагола ` кушать `",
                hint:"/ эйт /"
                },
                {
                id:126,
                eng:"fell",
                ru:"вторая форма глагола ` падать `",
                hint:"/ фэл /"
                },
                {
                id:127,
                eng:"fed",
                ru:"вторая форма глагола ` кормить `",
                hint:"/ фэд /"
                },
                {
                id:128,
                eng:"felt",
                ru:"вторая форма глагола ` чувствовать `",
                hint:"/ фэлт /"
                },
                {
                id:129,
                eng:"fought",
                ru:"вторая форма глагола ` сражаться `",
                hint:"/ фот /"
                },
                {
                id:130,
                eng:"found",
                ru:"вторая форма глагола ` находить `",
                hint:"/ фАунд /"
                },
                {
                id:131,
                eng:"flew",
                ru:"вторая форма глагола ` летать `",
                hint:"/ флу /"
                },
                {
                id:132,
                eng:"forbade",
                ru:"вторая форма глагола ` запрещать `",
                hint:"/ фобЭйд /"
                },
                {
                id:133,
                eng:"forgot",
                ru:"вторая форма глагола ` забывать `",
                hint:"/ фогОт /"
                },
                {
                id:134,
                eng:"forgave",
                ru:"вторая форма глагола ` прощать `",
                hint:"/ фогЕйв /"
                },
                {
                id:135,
                eng:"froze",
                ru:"вторая форма глагола ` замерзать `",
                hint:"/ фрОуз /"
                },
                {
                    id:225,
                    eng:"eaten",
                    ru:"съеденный, съедено",
                    hint:"/ Итн /"
                    },
                    {
                    id:226,
                    eng:"fallen",
                    ru:"третья форма глагола ` падать `",
                    hint:"/ фОлэн /"
                    },
                    {
                    id:227,
                    eng:"fed",
                    ru:"третья форма глагола ` кормить `",
                    hint:"/ фэд /"
                    },
                    {
                    id:228,
                    eng:"felt",
                    ru:"третья форма глагола ` чувствовать `",
                    hint:"/ фэлт /"
                    },
                    {
                    id:229,
                    eng:"fought",
                    ru:"третья форма глагола ` сражаться `",
                    hint:"/ фот /"
                    },
                    {
                    id:230,
                    eng:"found",
                    ru:"третья форма глагола ` находить `",
                    hint:"/ фАунд /"
                    },
                    {
                    id:231,
                    eng:"flown",
                    ru:"третья форма глагола ` летать `",
                    hint:"/ флОун /"
                    },
                    {
                    id:232,
                    eng:"forbidden",
                    ru:"третья форма глагола ` запрещать `",
                    hint:"/ фобИдэн /"
                    },
                    {
                    id:233,
                    eng:"forgotten",
                    ru:"третья форма глагола ` забывать `",
                    hint:"/ фогОтэн /"
                    },
                    {
                    id:234,
                    eng:"forgiven",
                    ru:"третья форма глагола ` прощать `",
                    hint:"/ фогИвэн /"
                    },
                    {
                    id:235,
                    eng:"frozen",
                    ru:"третья форма глагола ` замерзать `",
                    hint:"/ фрОузэн /"
                    },
    ],
    naughtyVerbsGH: [
        {
            id:36,
            eng:"grow",
            ru:"расти",
            hint:"/ грОу /"
            },
            {
            id:37,
            eng:"get",
            ru:"получать",
            hint:"/ гет /"
            },
            {
            id:38,
            eng:"give",
            ru:"давать",
            hint:"/ гив /"
            },
            {
            id:39,
            eng:"go",
            ru:"ходить",
            hint:"/ гОУ /"
            },
            {
            id:40,
            eng:"have",
            ru:"иметь",
            hint:"/ хэв /"
            },
            {
            id:41,
            eng:"hear",
            ru:"слышать",
            hint:"/ хИэ /"
            },
            {
            id:42,
            eng:"hide",
            ru:"прятать",
            hint:"/ хайд /"
            },
            {
            id:43,
            eng:"hit",
            ru:"ударять",
            hint:"/ хит /"
            },
            {
            id:44,
            eng:"hurt",
            ru:"причинять боль",
            hint:"/ хЁрт /"
            },
            {
            id:45,
            eng:"hold",
            ru:"держать",
            hint:"/ хОулд /"
            },
            {
                id:136,
                eng:"grew",
                ru:"вторая форма глагола ` расти `",
                hint:"/ грУ /"
                },
                {
                id:137,
                eng:"got",
                ru:"вторая форма глагола ` получать `",
                hint:"/ гот /"
                },
                {
                id:138,
                eng:"gave",
                ru:"вторая форма глагола ` давать `",
                hint:"/ гэйв /"
                },
                {
                id:139,
                eng:"went",
                ru:"вторая форма глагола ` ходить `",
                hint:"/ уэнт /"
                },
                {
                id:140,
                eng:"had",
                ru:"вторая форма глагола ` иметь `",
                hint:"/ хэд /"
                },
                {
                id:141,
                eng:"heard",
                ru:"вторая форма глагола ` слышать `",
                hint:"/ хёд /"
                },
                {
                id:142,
                eng:"hid",
                ru:"вторая форма глагола ` прятать `",
                hint:"/ хид /"
                },
                {
                id:143,
                eng:"hit",
                ru:"вторая форма глагола ` ударять `",
                hint:"/ хит /"
                },
                {
                id:144,
                eng:"hurt",
                ru:"вторая форма глагола ` причинять боль `",
                hint:"/ хёрт /"
                },
                {
                id:145,
                eng:"held",
                ru:"вторая форма глагола ` держать `",
                hint:"/ хэлд /"
                },
                {
                    id:236,
                    eng:"grown",
                    ru:"третья форма глагола ` расти `",
                    hint:"/ грОун /"
                    },
                    {
                    id:237,
                    eng:"got",
                    ru:"третья форма глагола ` получать `",
                    hint:"/ гот /"
                    },
                    {
                    id:238,
                    eng:"given",
                    ru:"третья форма глагола ` давать `",
                    hint:"/ гИвэн /"
                    },
                    {
                    id:239,
                    eng:"gone",
                    ru:"третья форма глагола ` ходить `",
                    hint:"/ ган /"
                    },
                    {
                    id:240,
                    eng:"had",
                    ru:"третья форма глагола ` иметь `",
                    hint:"/ хэд /"
                    },
                    {
                    id:241,
                    eng:"heard",
                    ru:"третья форма глагола ` слышать `",
                    hint:"/ хёд /"
                    },
                    {
                    id:242,
                    eng:"hidden",
                    ru:"третья форма глагола ` прятать `",
                    hint:"/ хИддэн /"
                    },
                    {
                    id:243,
                    eng:"hit",
                    ru:"третья форма глагола ` ударять `",
                    hint:"/ хит /"
                    },
                    {
                    id:244,
                    eng:"hurt",
                    ru:"третья форма глагола ` причинять боль `",
                    hint:"/ хёрт /"
                    },
                    {
                    id:245,
                    eng:"held",
                    ru:"третья форма глагола ` держать `",
                    hint:"/ хэлд /"
                    },
    ],
    naughtyVerbsKL: [
        {
            id:46,
            eng:"keep",
            ru:"хранить",
            hint:"/ кип /"
            },
            {
            id:47,
            eng:"know",
            ru:"знать",
            hint:"/ нОу /"
            },
            {
            id:48,
            eng:"lead",
            ru:"вести, приводить",
            hint:"/ лид /"
            },
            {
            id:49,
            eng:"learn",
            ru:"изучать",
            hint:"/ лЁрн /"
            },
            {
            id:50,
            eng:"leave",
            ru:"покидать",
            hint:"/ лив /"
            },
            {
            id:51,
            eng:"lend",
            ru:"давать в долг",
            hint:"/ лЭнд /"
            },
            {
            id:52,
            eng:"let",
            ru:"позволять",
            hint:"/ лЭт /"
            },
            {
            id:53,
            eng:"lose",
            ru:"терять",
            hint:"/ лУз /"
            },
            {
            id:54,
            eng:"tell a lie",
            ru:"говорить ложь",
            hint:"/ тэл э лай /"
            },
            {
            id:55,
            eng:"lie",
            ru:"лежать",
            hint:"/ лай /"
            },
            {
                id:146,
                eng:"kept",
                ru:"вторая форма глагола ` хранить `",
                hint:"/ кэпт /"
                },
                {
                id:147,
                eng:"knew",
                ru:"вторая форма глагола ` знать `",
                hint:"/ ню /"
                },
                {
                id:148,
                eng:"led",
                ru:"вторая форма глагола ` вести, приводить `",
                hint:"/ лэд /"
                },
                {
                id:149,
                eng:"learnt",
                ru:"вторая форма глагола ` изучать `",
                hint:"/ лёрнт /"
                },
                {
                id:150,
                eng:"left",
                ru:"вторая форма глагола ` покидать `",
                hint:"/ лЭфт /"
                },
                {
                id:151,
                eng:"lent",
                ru:"вторая форма глагола ` давать в долг `",
                hint:"/ лэнт /"
                },
                {
                id:152,
                eng:"let",
                ru:"вторая форма глагола ` позволять `",
                hint:"/ лэт /"
                },
                {
                id:153,
                eng:"lost",
                ru:"вторая форма глагола ` терять `",
                hint:"/ лост /"
                },
                {
                id:154,
                eng:"told a lie",
                ru:"вторая форма глагола ` говорить ложь `",
                hint:"/ толд э лай /"
                },
                {
                id:155,
                eng:"lay",
                ru:"вторая форма глагола ` лежать `",
                hint:"/ лэй /"
                },
                {
                    id:246,
                    eng:"kept",
                    ru:"третья форма глагола ` хранить `",
                    hint:"/ кэпт /"
                    },
                    {
                    id:247,
                    eng:"known",
                    ru:"третья форма глагола ` знать `",
                    hint:"/ нОун /"
                    },
                    {
                    id:248,
                    eng:"led",
                    ru:"третья форма глагола ` вести, приводить `",
                    hint:"/ лэд /"
                    },
                    {
                    id:249,
                    eng:"learnt",
                    ru:"третья форма глагола ` изучать `",
                    hint:"/ лёрнт /"
                    },
                    {
                    id:250,
                    eng:"left",
                    ru:"третья форма глагола ` покидать `",
                    hint:"/ лЭфт /"
                    },
                    {
                    id:251,
                    eng:"lent",
                    ru:"третья форма глагола ` давать в долг `",
                    hint:"/ лэнт /"
                    },
                    {
                    id:252,
                    eng:"let",
                    ru:"третья форма глагола ` позволять `",
                    hint:"/ лэт /"
                    },
                    {
                    id:253,
                    eng:"lost",
                    ru:"третья форма глагола ` терять `",
                    hint:"/ лост /"
                    },
                    {
                    id:254,
                    eng:"told a lie",
                    ru:"третья форма глагола ` говорить ложь `",
                    hint:"/ толд э лай /"
                    },
                    {
                    id:255,
                    eng:"lain",
                    ru:"третья форма глагола ` лежать `",
                    hint:"/ лЭйн /"
                    },
    ],
    naughtyVerbsMPR: [
        {
            id:56,
            eng:"make",
            ru:"создавать",
            hint:"/ мЭйк /"
            },
            {
            id:57,
            eng:"mean",
            ru:"иметь ввиду",
            hint:"/ мИн /"
            },
            {
            id:58,
            eng:"meet",
            ru:"встречать(ся)",
            hint:"/ мит /"
            },
            {
            id:59,
            eng:"pay",
            ru:"платить",
            hint:"/ пЭй /"
            },
            {
            id:60,
            eng:"put",
            ru:"класть",
            hint:"/ пУт /"
            },
            {
            id:61,
            eng:"read",
            ru:"читать",
            hint:"/ рИд /"
            },
            {
            id:62,
            eng:"ride",
            ru:"ездить верхом",
            hint:"/ рАйд /"
            },
            {
            id:63,
            eng:"ring",
            ru:"звенеть, звонить",
            hint:"/ рИн /"
            },
            {
            id:64,
            eng:"run",
            ru:"бегать",
            hint:"/ рАн /"
            },
            {
            id:65,
            eng:"rise",
            ru:"подниматься",
            hint:"/ рАйз /"
            },
            {
                id:156,
                eng:"made",
                ru:"вторая форма глагола ` создавать `",
                hint:"/ мэйд /"
                },
                {
                id:157,
                eng:"meant",
                ru:"вторая форма глагола ` иметь ввиду `",
                hint:"/ мэнт /"
                },
                {
                id:158,
                eng:"met",
                ru:"вторая форма глагола ` встречать(ся) `",
                hint:"/ мэт /"
                },
                {
                id:159,
                eng:"paid",
                ru:"вторая форма глагола ` платить `",
                hint:"/ пэйд /"
                },
                {
                id:160,
                eng:"put",
                ru:"вторая форма глагола ` класть `",
                hint:"/ пут /"
                },
                {
                id:161,
                eng:"read",
                ru:"вторая форма глагола ` читать `",
                hint:"/ рЭд /"
                },
                {
                id:162,
                eng:"rode",
                ru:"вторая форма глагола ` ездить верхом `",
                hint:"/ роуд /"
                },
                {
                id:163,
                eng:"rang",
                ru:"вторая форма глагола ` звенеть, звонить `",
                hint:"/ рэн /"
                },
                {
                id:164,
                eng:"ran",
                ru:"вторая форма глагола ` бегать `",
                hint:"/ рэн /"
                },
                {
                id:165,
                eng:"rose",
                ru:"вторая форма глагола ` подниматься `",
                hint:"/ роуз /"
                },
                {
                    id:256,
                    eng:"made",
                    ru:"третья форма глагола ` создавать `",
                    hint:"/ мэйд /"
                    },
                    {
                    id:257,
                    eng:"meant",
                    ru:"третья форма глагола ` иметь ввиду `",
                    hint:"/ мэнт /"
                    },
                    {
                    id:258,
                    eng:"met",
                    ru:"третья форма глагола ` встречать(ся) `",
                    hint:"/ мэт /"
                    },
                    {
                    id:259,
                    eng:"paid",
                    ru:"третья форма глагола ` платить `",
                    hint:"/ пэйд /"
                    },
                    {
                    id:260,
                    eng:"put",
                    ru:"третья форма глагола ` класть `",
                    hint:"/ пут /"
                    },
                    {
                    id:261,
                    eng:"read",
                    ru:"третья форма глагола ` читать `",
                    hint:"/ рЭд /"
                    },
                    {
                    id:262,
                    eng:"ridden",
                    ru:"третья форма глагола ` ездить верхом `",
                    hint:"/ рИддэн /"
                    },
                    {
                    id:263,
                    eng:"rung",
                    ru:"третья форма глагола ` звенеть, звонить `",
                    hint:"/ ран /"
                    },
                    {
                    id:264,
                    eng:"run",
                    ru:"третья форма глагола ` бегать `",
                    hint:"/ ран /"
                    },
                    {
                    id:265,
                    eng:"risen",
                    ru:"третья форма глагола ` подниматься `",
                    hint:"/ рИzэн /"
                    },
    ],
    naughtyVerbsS: [
        {
            id:66,
            eng:"say",
            ru:"сказать, произнести",
            hint:"/ сЭй /"
            },
            {
            id:67,
            eng:"see",
            ru:"увидеть",
            hint:"/ си /"
            },
            {
            id:68,
            eng:"sell",
            ru:"продавать",
            hint:"/ сЭл /"
            },
            {
            id:69,
            eng:"send",
            ru:"отправлять",
            hint:"/ сэнД /"
            },
            {
            id:70,
            eng:"shake",
            ru:"трясти",
            hint:"/ шЭйк /"
            },
            {
            id:71,
            eng:"shoot",
            ru:"стрелять",
            hint:"/ шУт /"
            },
            {
            id:72,
            eng:"shut",
            ru:"захлопнуть",
            hint:"/ щАт /"
            },
            {
            id:73,
            eng:"sing",
            ru:"петь",
            hint:"/ сИн /"
            },
            {
            id:74,
            eng:"sink",
            ru:"затонуть",
            hint:"/ синк /"
            },
            {
            id:75,
            eng:"sit",
            ru:"сидеть",
            hint:"/ сит /"
            },
            {
            id:76,
            eng:"sleep",
            ru:"спать",
            hint:"/ слИп /"
            },
            {
            id:77,
            eng:"slide",
            ru:"скользить",
            hint:"/ слайд /"
            },
            {
            id:78,
            eng:"speak",
            ru:"разговаривать",
            hint:"/ спИк /"
            },
            {
            id:79,
            eng:"spend",
            ru:"тратить",
            hint:"/ спЭнд /"
            },
            {
            id:80,
            eng:"spit",
            ru:"плеваться",
            hint:"/ спИт /"
            },
            {
            id:81,
            eng:"stand",
            ru:"встать, стоять",
            hint:"/ стЭнд /"
            },
            {
            id:82,
            eng:"steal",
            ru:"воровать",
            hint:"/ стИл /"
            },
            {
            id:83,
            eng:"stick",
            ru:"приклеить, застрять ",
            hint:"/ стик /"
            },
            {
            id:84,
            eng:"stink",
            ru:"вонять",
            hint:"/ стинк /"
            },
            {
            id:85,
            eng:"strike",
            ru:"ударять",
            hint:"/ стрАйк /"
            },
            {
            id:86,
            eng:"swear",
            ru:"клясться, материться ",
            hint:"/ суЭа /"
            },
            {
            id:87,
            eng:"sweep",
            ru:"подметать",
            hint:"/ свип /"
            },
            {
            id:88,
            eng:"swim",
            ru:"плавать",
            hint:"/ свим /"
            },
            {
            id:89,
            eng:"swing",
            ru:"качаться",
            hint:"/ свИн /"
            },
            {
                id:166,
                eng:"said",
                ru:"вторая форма глагола ` сказать, произнести `",
                hint:"/ сЭд /"
                },
                {
                id:167,
                eng:"saw",
                ru:"вторая форма глагола ` увидеть `",
                hint:"/ со /"
                },
                {
                id:168,
                eng:"sold",
                ru:"вторая форма глагола ` продавать `",
                hint:"/ солд /"
                },
                {
                id:169,
                eng:"sent",
                ru:"вторая форма глагола ` отправлять `",
                hint:"/ сэнт /"
                },
                {
                id:170,
                eng:"shook",
                ru:"вторая форма глагола ` трясти `",
                hint:"/ шук /"
                },
                {
                id:171,
                eng:"shot",
                ru:"вторая форма глагола ` стрелять `",
                hint:"/ шот /"
                },
                {
                id:172,
                eng:"shut",
                ru:"вторая форма глагола ` захлопнуть `",
                hint:"/ щат /"
                },
                {
                id:173,
                eng:"sang",
                ru:"вторая форма глагола ` петь `",
                hint:"/ сэн /"
                },
                {
                id:174,
                eng:"sank",
                ru:"вторая форма глагола ` затонуть `",
                hint:"/ сэнк /"
                },
                {
                id:175,
                eng:"sat",
                ru:"вторая форма глагола ` сидеть `",
                hint:"/ сэт /"
                },
                {
                id:176,
                eng:"slept",
                ru:"вторая форма глагола ` спать `",
                hint:"/ слэпт /"
                },
                {
                id:177,
                eng:"slid",
                ru:"вторая форма глагола ` скользить `",
                hint:"/ слид /"
                },
                {
                id:178,
                eng:"spoke",
                ru:"вторая форма глагола ` разговаривать `",
                hint:"/ споук /"
                },
                {
                id:179,
                eng:"spent",
                ru:"вторая форма глагола ` тратить `",
                hint:"/ спэнт /"
                },
                {
                id:180,
                eng:"spat",
                ru:"вторая форма глагола ` плеваться `",
                hint:"/ спэт /"
                },
                {
                id:181,
                eng:"stood",
                ru:"вторая форма глагола ` встать, стоять `",
                hint:"/ студ /"
                },
                {
                id:182,
                eng:"stole",
                ru:"вторая форма глагола ` воровать `",
                hint:"/ стоул /"
                },
                {
                id:183,
                eng:"stuck",
                ru:"вторая форма глагола ` приклеить, застрять  `",
                hint:"/ стак /"
                },
                {
                id:184,
                eng:"stank",
                ru:"вторая форма глагола ` вонять `",
                hint:"/ стэнк /"
                },
                {
                id:185,
                eng:"struck",
                ru:"вторая форма глагола ` ударять `",
                hint:"/ страк /"
                },
                {
                id:186,
                eng:"swore",
                ru:"вторая форма глагола ` клясться, материться  `",
                hint:"/ сво /"
                },
                {
                id:187,
                eng:"swept",
                ru:"вторая форма глагола ` подметать `",
                hint:"/ свэпт /"
                },
                {
                id:188,
                eng:"swam",
                ru:"вторая форма глагола ` плавать `",
                hint:"/ свэм /"
                },
                {
                id:189,
                eng:"swung",
                ru:"вторая форма глагола ` качаться `",
                hint:"/ сван /"
                },
                {
                    id:266,
                    eng:"said",
                    ru:"третья форма глагола ` сказать, произнести `",
                    hint:"/ сЭд /"
                    },
                    {
                    id:267,
                    eng:"seen",
                    ru:"третья форма глагола ` увидеть `",
                    hint:"/ син /"
                    },
                    {
                    id:268,
                    eng:"sold",
                    ru:"третья форма глагола ` продавать `",
                    hint:"/ солд /"
                    },
                    {
                    id:269,
                    eng:"sent",
                    ru:"третья форма глагола ` отправлять `",
                    hint:"/ сэнт /"
                    },
                    {
                    id:270,
                    eng:"shaken",
                    ru:"третья форма глагола ` трясти `",
                    hint:"/ шэйкэн /"
                    },
                    {
                    id:271,
                    eng:"shot",
                    ru:"третья форма глагола ` стрелять `",
                    hint:"/ шот /"
                    },
                    {
                    id:272,
                    eng:"shut",
                    ru:"третья форма глагола ` захлопнуть `",
                    hint:"/ щат /"
                    },
                    {
                    id:273,
                    eng:"sung",
                    ru:"третья форма глагола ` петь `",
                    hint:"/ сэн /"
                    },
                    {
                    id:274,
                    eng:"sunk",
                    ru:"третья форма глагола ` затонуть `",
                    hint:"/ сэнк /"
                    },
                    {
                    id:275,
                    eng:"sat",
                    ru:"третья форма глагола ` сидеть `",
                    hint:"/ сэт /"
                    },
                    {
                    id:276,
                    eng:"slept",
                    ru:"третья форма глагола ` спать `",
                    hint:"/ слэпт /"
                    },
                    {
                    id:277,
                    eng:"slid",
                    ru:"третья форма глагола ` скользить `",
                    hint:"/ слид /"
                    },
                    {
                    id:278,
                    eng:"spoken",
                    ru:"третья форма глагола ` разговаривать `",
                    hint:"/ споукэн /"
                    },
                    {
                    id:279,
                    eng:"spent",
                    ru:"третья форма глагола ` тратить `",
                    hint:"/ спэнт /"
                    },
                    {
                    id:280,
                    eng:"spat",
                    ru:"третья форма глагола ` плеваться `",
                    hint:"/ спэт /"
                    },
                    {
                    id:281,
                    eng:"stood",
                    ru:"третья форма глагола ` встать, стоять `",
                    hint:"/ студ /"
                    },
                    {
                    id:282,
                    eng:"stolen",
                    ru:"третья форма глагола ` воровать `",
                    hint:"/ стОулэн /"
                    },
                    {
                    id:283,
                    eng:"stuck",
                    ru:"третья форма глагола ` приклеить, застрять  `",
                    hint:"/ стак /"
                    },
                    {
                    id:284,
                    eng:"stunk",
                    ru:"третья форма глагола ` вонять `",
                    hint:"/ станк /"
                    },
                    {
                    id:285,
                    eng:"struck",
                    ru:"третья форма глагола ` ударять `",
                    hint:"/ страк /"
                    },
                    {
                    id:286,
                    eng:"sworn",
                    ru:"третья форма глагола ` клясться, материться  `",
                    hint:"/ сворн /"
                    },
                    {
                    id:287,
                    eng:"swept",
                    ru:"третья форма глагола ` подметать `",
                    hint:"/ свэпт /"
                    },
                    {
                    id:288,
                    eng:"swum",
                    ru:"третья форма глагола ` плавать `",
                    hint:"/ свам /"
                    },
                    {
                    id:289,
                    eng:"swung",
                    ru:"третья форма глагола ` качаться `",
                    hint:"/ сван /"
                    },
    ],
    naughtyVerbsTUW: [
        {
            id:90,
            eng:"take",
            ru:"брать",
            hint:"/ тЭйк /"
            },
            {
            id:91,
            eng:"teach",
            ru:"обучать",
            hint:"/ тИч /"
            },
            {
            id:92,
            eng:"tear",
            ru:"порвать",
            hint:"/ тЭа /"
            },
            {
            id:93,
            eng:"tell",
            ru:"рассказывать",
            hint:"/ тЭл /"
            },
            {
            id:94,
            eng:"think",
            ru:"думать",
            hint:"/ thЫНК /"
            },
            {
            id:95,
            eng:"throw",
            ru:"бросать",
            hint:"/ thрОу /"
            },
            {
            id:96,
            eng:"understand",
            ru:"понимать",
            hint:"/ андэстЭнд /"
            },
            {
            id:97,
            eng:"wake up",
            ru:"просыпаться",
            hint:"/ уЭйк ап /"
            },
            {
            id:98,
            eng:"wear",
            ru:"носить одежду",
            hint:"/ уЭа /"
            },
            {
            id:99,
            eng:"write",
            ru:"писАть",
            hint:"/ рАйт /"
            },
            {
            id:100,
            eng:"weep",
            ru:"хныкать",
            hint:"/ уИп /"
            },
            {
            id:101,
            eng:"win",
            ru:"выигрывать",
            hint:"/ уИн /"
            },
            {
                id:190,
                eng:"took",
                ru:"вторая форма глагола ` брать `",
                hint:"/ тук /"
                },
                {
                id:191,
                eng:"taught",
                ru:"вторая форма глагола ` обучать `",
                hint:"/ тот /"
                },
                {
                id:192,
                eng:"tore",
                ru:"вторая форма глагола ` порвать `",
                hint:"/ то /"
                },
                {
                id:193,
                eng:"told",
                ru:"вторая форма глагола ` рассказывать `",
                hint:"/ тОлд /"
                },
                {
                id:194,
                eng:"thought",
                ru:"вторая форма глагола ` думать `",
                hint:"/ thОт /"
                },
                {
                id:195,
                eng:"threw",
                ru:"вторая форма глагола ` бросать `",
                hint:"/ thру /"
                },
                {
                id:196,
                eng:"understood",
                ru:"вторая форма глагола ` понимать `",
                hint:"/ андэстУд /"
                },
                {
                id:197,
                eng:"woke up",
                ru:"вторая форма глагола ` просыпаться `",
                hint:"/ уОук ап /"
                },
                {
                id:198,
                eng:"wore",
                ru:"вторая форма глагола ` носить одежду `",
                hint:"/ уо /"
                },
                {
                id:199,
                eng:"wrote",
                ru:"вторая форма глагола ` писАть `",
                hint:"/ рОут /"
                },
                {
                id:200,
                eng:"wept",
                ru:"вторая форма глагола ` хныкать `",
                hint:"/ уЭпт /"
                },
                {
                id:201,
                eng:"won",
                ru:"вторая форма глагола ` выигрывать `",
                hint:"/ уан или уон /"
                },
                {
                    id:290,
                    eng:"taken",
                    ru:"третья форма глагола ` брать `",
                    hint:"/ тЭйкэн /"
                    },
                    {
                    id:291,
                    eng:"taught",
                    ru:"третья форма глагола ` обучать `",
                    hint:"/ тот /"
                    },
                    {
                    id:292,
                    eng:"torn",
                    ru:"третья форма глагола ` порвать `",
                    hint:"/ торн /"
                    },
                    {
                    id:293,
                    eng:"told",
                    ru:"третья форма глагола ` рассказывать `",
                    hint:"/ толд /"
                    },
                    {
                    id:294,
                    eng:"thought",
                    ru:"третья форма глагола ` думать `",
                    hint:"/ thОт /"
                    },
                    {
                    id:295,
                    eng:"thrown",
                    ru:"третья форма глагола ` бросать `",
                    hint:"/ thрОун /"
                    },
                    {
                    id:296,
                    eng:"understood",
                    ru:"третья форма глагола ` понимать `",
                    hint:"/ андэстУд /"
                    },
                    {
                    id:297,
                    eng:"woken up",
                    ru:"третья форма глагола ` просыпаться `",
                    hint:"/ уОукэн ап /"
                    },
                    {
                    id:298,
                    eng:"worn",
                    ru:"третья форма глагола ` носить одежду `",
                    hint:"/ уорн /"
                    },
                    {
                    id:299,
                    eng:"written",
                    ru:"третья форма глагола ` писАть `",
                    hint:"/ рИтэн /"
                    },
                    {
                    id:300,
                    eng:"wept",
                    ru:"третья форма глагола ` хныкать `",
                    hint:"/ уЭпт /"
                    },
                    {
                    id:301,
                    eng:"won",
                    ru:"третья форма глагола ` выигрывать `",
                    hint:"/ уан или уон /"
                    },
    ],
    naughtyVerbsLast: [
        {
            id:102,
            eng:"misunderstand",
            ru:"неправильно понять",
            hint:"/ мисандэстЭнд /"
            },
            {
            id:103,
            eng:"misspell",
            ru:"неправильно написать",
            hint:"/ миспЭл /"
            },
            {
            id:104,
            eng:"mistake",
            ru:"ошибаться",
            hint:"/ мистЭйк /"
            },
            {
            id:105,
            eng:"mishear",
            ru:"неправильно услышать",
            hint:"/ мисхИа /"
            },
            {
            id:106,
            eng:"oversleep",
            ru:"проспать",
            hint:"/ оУвэслип /"
            },
            {
            id:107,
            eng:"overeat",
            ru:"переесть ",
            hint:"/ оУвэИт /"
            },
            {
            id:108,
            eng:"overpay",
            ru:"переплатить",
            hint:"/ оУвэпЭй /"
            },
            {
            id:109,
            eng:"arise",
            ru:"возникнуть",
            hint:"/ эрАйз /"
            },
            {
            id:110,
            eng:"awake",
            ru:"пробудиться",
            hint:"/ эуЭйк /"
            },
            {
            id:111,
            eng:"abide",
            ru:"соблюдать пребывать обитать",
            hint:"/ эбАйд /"
            },
            {
                id:202,
                eng:"misunderstood",
                ru:"вторая форма глагола ` неправильно понять `",
                hint:"/ мисандэстУд /"
                },
                {
                id:203,
                eng:"misspelt",
                ru:"вторая форма глагола ` неправильно написать `",
                hint:"/ миспЛлт /"
                },
                {
                id:204,
                eng:"mistook",
                ru:"вторая форма глагола ` ошибаться `",
                hint:"/ мистук /"
                },
                {
                id:205,
                eng:"misheard",
                ru:"вторая форма глагола ` неправильно услышать `",
                hint:"/ мисхёд /"
                },
                {
                id:206,
                eng:"overslept",
                ru:"вторая форма глагола ` проспать `",
                hint:"/ оУвэслэпт /"
                },
                {
                id:207,
                eng:"overate",
                ru:"вторая форма глагола ` переесть  `",
                hint:"/ оУвэЭйт /"
                },
                {
                id:208,
                eng:"overpaid",
                ru:"вторая форма глагола ` переплатить `",
                hint:"/ оУвэпЭйд /"
                },
                {
                id:209,
                eng:"arose",
                ru:"вторая форма глагола ` возникнуть `",
                hint:"/ эрОуз /"
                },
                {
                id:210,
                eng:"awoke",
                ru:"вторая форма глагола ` пробудиться `",
                hint:"/ эвОук /"
                },
                {
                id:211,
                eng:"abode",
                ru:"вторая форма глагола ` соблюдать пребывать обитать `",
                hint:"/ эбОуд /"
                },
                {
                    id:302,
                    eng:"misunderstood",
                    ru:"третья форма глагола ` неправильно понять `",
                    hint:"/ мисандэстУд /"
                    },
                    {
                    id:303,
                    eng:"misspelt",
                    ru:"третья форма глагола ` неправильно написать `",
                    hint:"/ миспЛлт /"
                    },
                    {
                    id:304,
                    eng:"mistaken",
                    ru:"третья форма глагола ` ошибаться `",
                    hint:"/ мистук /"
                    },
                    {
                    id:305,
                    eng:"misheard",
                    ru:"третья форма глагола ` неправильно услышать `",
                    hint:"/ мисхёд /"
                    },
                    {
                    id:306,
                    eng:"overslept",
                    ru:"третья форма глагола ` проспать `",
                    hint:"/ оУвэслэпт /"
                    },
                    {
                    id:307,
                    eng:"overeaten",
                    ru:"третья форма глагола ` переесть  `",
                    hint:"/ оУвэИтэн /"
                    },
                    {
                    id:308,
                    eng:"overpaid",
                    ru:"третья форма глагола ` переплатить `",
                    hint:"/ оУвэпЭйд /"
                    },
                    {
                    id:309,
                    eng:"arisen",
                    ru:"третья форма глагола ` возникнуть `",
                    hint:"/ эрИзн /"
                    },
                    {
                    id:310,
                    eng:"awoken",
                    ru:"третья форма глагола ` пробудиться `",
                    hint:"/ эвОукэн /"
                    },
                    {
                    id:311,
                    eng:"abidden",
                    ru:"третья форма глагола ` соблюдать пребывать обитать `",
                    hint:"/ эбИдэн /"
                    },
    ],
    naughtyVerbs99: [
        {
            id:1,
            eng:"break",
            ru:"ломать",
            hint:"/ брЭйк /"
            },
            {
            id:2,
            eng:"beat",
            ru:"побить",
            hint:"/ бит /"
            },
            {
            id:3,
            eng:"become",
            ru:"становиться",
            hint:"/ бекАм /"
            },
            {
            id:4,
            eng:"begin",
            ru:"начинать",
            hint:"/ бегИн /"
            },
            {
            id:5,
            eng:"blow",
            ru:"дуть",
            hint:"/ блОу /"
            },
            {
            id:6,
            eng:"borrow",
            ru:"брать в долг",
            hint:"/ бОроу /"
            },
            {
            id:7,
            eng:"build",
            ru:"строить",
            hint:"/ билд /"
            },
            {
            id:8,
            eng:"burn",
            ru:"сжигать, гореть",
            hint:"/ бЁрн /"
            },
            {
            id:9,
            eng:"buy",
            ru:"покупать",
            hint:"/ бАй /"
            },
            {
            id:10,
            eng:"bring",
            ru:"приносить",
            hint:"/ брин /"
            },
            {
            id:11,
            eng:"be",
            ru:"быть",
            hint:"/ эм из а /"
            },
            {
            id:12,
            eng:"bite",
            ru:"кусать",
            hint:"/ бАйт /"
            },
            {
            id:13,
            eng:"come",
            ru:"приходить",
            hint:"/ кАм /"
            },
            {
            id:14,
            eng:"choose",
            ru:"выбирать",
            hint:"/ чУз /"
            },
            {
            id:15,
            eng:"catch",
            ru:"ловить",
            hint:"/ кЭч /"
            },
            {
            id:16,
            eng:"creep",
            ru:"ползать",
            hint:"/ крИп /"
            },
            {
            id:17,
            eng:"cost",
            ru:"стоить",
            hint:"/ кост /"
            },
            {
            id:18,
            eng:"cut",
            ru:"резать",
            hint:"/ кАт /"
            },
            {
            id:19,
            eng:"deal",
            ru:"иметь дела",
            hint:"/ дИл /"
            },
            {
            id:20,
            eng:"dig",
            ru:"копать",
            hint:"/ диГ /"
            },
            {
            id:21,
            eng:"do",
            ru:"делать",
            hint:"/ ду /"
            },
            {
            id:22,
            eng:"drive",
            ru:"водить",
            hint:"/ дрАйв /"
            },
            {
            id:23,
            eng:"draw",
            ru:"рисовать",
            hint:"/ дрО /"
            },
            {
            id:24,
            eng:"drink",
            ru:"пить",
            hint:"/ дринк /"
            },
            {
            id:25,
            eng:"eat",
            ru:"кушать",
            hint:"/ ит /"
            },
            {
            id:26,
            eng:"fall",
            ru:"падать",
            hint:"/ фол /"
            },
            {
            id:27,
            eng:"feed",
            ru:"кормить",
            hint:"/ фиД /"
            },
            {
            id:28,
            eng:"feel",
            ru:"чувствовать",
            hint:"/ фил /"
            },
            {
            id:29,
            eng:"fight",
            ru:"сражаться",
            hint:"/ фАйт /"
            },
            {
            id:30,
            eng:"find",
            ru:"находить",
            hint:"/ фАйнд /"
            },
            {
            id:31,
            eng:"fly",
            ru:"летать",
            hint:"/ флАй /"
            },
            {
            id:32,
            eng:"forbid",
            ru:"запрещать",
            hint:"/ фобИд /"
            },
            {
            id:33,
            eng:"forget",
            ru:"забывать",
            hint:"/ фогОт /"
            },
            {
            id:34,
            eng:"forgive",
            ru:"прощать",
            hint:"/ фогИв /"
            },
            {
            id:35,
            eng:"freeze",
            ru:"замерзать",
            hint:"/ фриз /"
            },
            {
            id:36,
            eng:"grow",
            ru:"расти",
            hint:"/ грОу /"
            },
            {
            id:37,
            eng:"get",
            ru:"получать",
            hint:"/ гет /"
            },
            {
            id:38,
            eng:"give",
            ru:"давать",
            hint:"/ гив /"
            },
            {
            id:39,
            eng:"go",
            ru:"ходить",
            hint:"/ гОУ /"
            },
            {
            id:40,
            eng:"have",
            ru:"иметь",
            hint:"/ хэв /"
            },
            {
            id:41,
            eng:"hear",
            ru:"слышать",
            hint:"/ хИэ /"
            },
            {
            id:42,
            eng:"hide",
            ru:"прятать",
            hint:"/ хайд /"
            },
            {
            id:43,
            eng:"hit",
            ru:"ударять",
            hint:"/ хит /"
            },
            {
            id:44,
            eng:"hurt",
            ru:"причинять боль",
            hint:"/ хЁрт /"
            },
            {
            id:45,
            eng:"hold",
            ru:"держать",
            hint:"/ хОулд /"
            },
            {
            id:46,
            eng:"keep",
            ru:"хранить",
            hint:"/ кип /"
            },
            {
            id:47,
            eng:"know",
            ru:"знать",
            hint:"/ нОу /"
            },
            {
            id:48,
            eng:"lead",
            ru:"вести, приводить",
            hint:"/ лид /"
            },
            {
            id:49,
            eng:"learn",
            ru:"изучать",
            hint:"/ лЁрн /"
            },
            {
            id:50,
            eng:"leave",
            ru:"покидать",
            hint:"/ лив /"
            },
            {
            id:51,
            eng:"lend",
            ru:"давать в долг",
            hint:"/ лЭнд /"
            },
            {
            id:52,
            eng:"let",
            ru:"позволять",
            hint:"/ лЭт /"
            },
            {
            id:53,
            eng:"lose",
            ru:"терять",
            hint:"/ лУз /"
            },
            {
            id:54,
            eng:"tell a lie",
            ru:"говорить ложь",
            hint:"/ тэл э лай /"
            },
            {
            id:55,
            eng:"lie",
            ru:"лежать",
            hint:"/ лай /"
            },
            {
            id:56,
            eng:"make",
            ru:"создавать",
            hint:"/ мЭйк /"
            },
            {
            id:57,
            eng:"mean",
            ru:"иметь ввиду",
            hint:"/ мИн /"
            },
            {
            id:58,
            eng:"meet",
            ru:"встречать(ся)",
            hint:"/ мит /"
            },
            {
            id:59,
            eng:"pay",
            ru:"платить",
            hint:"/ пЭй /"
            },
            {
            id:60,
            eng:"put",
            ru:"класть",
            hint:"/ пУт /"
            },
            {
            id:61,
            eng:"read",
            ru:"читать",
            hint:"/ рИд /"
            },
            {
            id:62,
            eng:"ride",
            ru:"ездить верхом",
            hint:"/ рАйд /"
            },
            {
            id:63,
            eng:"ring",
            ru:"звенеть, звонить",
            hint:"/ рИн /"
            },
            {
            id:64,
            eng:"run",
            ru:"бегать",
            hint:"/ рАн /"
            },
            {
            id:65,
            eng:"rise",
            ru:"подниматься",
            hint:"/ рАйз /"
            },
            {
            id:66,
            eng:"say",
            ru:"сказать, произнести",
            hint:"/ сЭй /"
            },
            {
            id:67,
            eng:"see",
            ru:"увидеть",
            hint:"/ си /"
            },
            {
            id:68,
            eng:"sell",
            ru:"продавать",
            hint:"/ сЭл /"
            },
            {
            id:69,
            eng:"send",
            ru:"отправлять",
            hint:"/ сэнД /"
            },
            {
            id:70,
            eng:"shake",
            ru:"трясти",
            hint:"/ шЭйк /"
            },
            {
            id:71,
            eng:"shoot",
            ru:"стрелять",
            hint:"/ шУт /"
            },
            {
            id:72,
            eng:"shut",
            ru:"захлопнуть",
            hint:"/ щАт /"
            },
            {
            id:73,
            eng:"sing",
            ru:"петь",
            hint:"/ сИн /"
            },
            {
            id:74,
            eng:"sink",
            ru:"затонуть",
            hint:"/ синк /"
            },
            {
            id:75,
            eng:"sit",
            ru:"сидеть",
            hint:"/ сит /"
            },
            {
            id:76,
            eng:"sleep",
            ru:"спать",
            hint:"/ слИп /"
            },
            {
            id:77,
            eng:"slide",
            ru:"скользить",
            hint:"/ слайд /"
            },
            {
            id:78,
            eng:"speak",
            ru:"разговаривать",
            hint:"/ спИк /"
            },
            {
            id:79,
            eng:"spend",
            ru:"тратить",
            hint:"/ спЭнд /"
            },
            {
            id:80,
            eng:"spit",
            ru:"плеваться",
            hint:"/ спИт /"
            },
            {
            id:81,
            eng:"stand",
            ru:"встать, стоять",
            hint:"/ стЭнд /"
            },
            {
            id:82,
            eng:"steal",
            ru:"воровать",
            hint:"/ стИл /"
            },
            {
            id:83,
            eng:"stick",
            ru:"приклеить, застрять ",
            hint:"/ стик /"
            },
            {
            id:84,
            eng:"stink",
            ru:"вонять",
            hint:"/ стинк /"
            },
            {
            id:85,
            eng:"strike",
            ru:"ударять",
            hint:"/ стрАйк /"
            },
            {
            id:86,
            eng:"swear",
            ru:"клясться, материться ",
            hint:"/ суЭа /"
            },
            {
            id:87,
            eng:"sweep",
            ru:"подметать",
            hint:"/ свип /"
            },
            {
            id:88,
            eng:"swim",
            ru:"плавать",
            hint:"/ свим /"
            },
            {
            id:89,
            eng:"swing",
            ru:"качаться",
            hint:"/ свИн /"
            },
            {
            id:90,
            eng:"take",
            ru:"брать",
            hint:"/ тЭйк /"
            },
            {
            id:91,
            eng:"teach",
            ru:"обучать",
            hint:"/ тИч /"
            },
            {
            id:92,
            eng:"tear",
            ru:"порвать",
            hint:"/ тЭа /"
            },
            {
            id:93,
            eng:"tell",
            ru:"рассказывать",
            hint:"/ тЭл /"
            },
            {
            id:94,
            eng:"think",
            ru:"думать",
            hint:"/ thЫНК /"
            },
            {
            id:95,
            eng:"throw",
            ru:"бросать",
            hint:"/ thрОу /"
            },
            {
            id:96,
            eng:"understand",
            ru:"понимать",
            hint:"/ андэстЭнд /"
            },
            {
            id:97,
            eng:"wake up",
            ru:"просыпаться",
            hint:"/ уЭйк ап /"
            },
            {
            id:98,
            eng:"wear",
            ru:"носить одежду",
            hint:"/ уЭа /"
            },
            {
            id:99,
            eng:"write",
            ru:"писАть",
            hint:"/ рАйт /"
            },
            {
            id:100,
            eng:"weep",
            ru:"хныкать",
            hint:"/ уИп /"
            },
            {
            id:101,
            eng:"win",
            ru:"выигрывать",
            hint:"/ уИн /"
            },
            {
            id:102,
            eng:"misunderstand",
            ru:"неправильно понять",
            hint:"/ мисандэстЭнд /"
            },
            {
            id:103,
            eng:"misspell",
            ru:"неправильно написать",
            hint:"/ миспЭл /"
            },
            {
            id:104,
            eng:"mistake",
            ru:"ошибаться",
            hint:"/ мистЭйк /"
            },
            {
            id:105,
            eng:"mishear",
            ru:"неправильно услышать",
            hint:"/ мисхИа /"
            },
            {
            id:106,
            eng:"oversleep",
            ru:"проспать",
            hint:"/ оУвэслип /"
            },
            {
            id:107,
            eng:"overeat",
            ru:"переесть ",
            hint:"/ оУвэИт /"
            },
            {
            id:108,
            eng:"overpay",
            ru:"переплатить",
            hint:"/ оУвэпЭй /"
            },
            {
            id:109,
            eng:"arise",
            ru:"возникнуть",
            hint:"/ эрАйз /"
            },
            {
            id:110,
            eng:"awake",
            ru:"пробудиться",
            hint:"/ эуЭйк /"
            },
            {
            id:111,
            eng:"abide",
            ru:"соблюдать пребывать обитать",
            hint:"/ эбАйд /"
            },
            {
                id:201,
                eng:"broke",
                ru:"сломал, нарушил",
                hint:"/ брОУк /"
                },
                {
                id:202,
                eng:"beat",
                ru:"побил",
                hint:"/ бит /"
                },
                {
                id:203,
                eng:"became",
                ru:"стал",
                hint:"/ бекЕйм /"
                },
                {
                id:204,
                eng:"began",
                ru:"начал",
                hint:"/ бегЭн /"
                },
                {
                id:205,
                eng:"blew",
                ru:"дул",
                hint:"/ блУ /"
                },
                {
                id:206,
                eng:"borrowed",
                ru:"взял в долг занял, одолжил",
                hint:"/ бОроуд /"
                },
                {
                id:207,
                eng:"built",
                ru:"построил",
                hint:"/ билт /"
                },
                {
                id:208,
                eng:"burnt",
                ru:"сжёг",
                hint:"/ бёрнт /"
                },
                {
                id:209,
                eng:"bought",
                ru:"купил",
                hint:"/ бот /"
                },
                {
                id:210,
                eng:"brought",
                ru:"принёс",
                hint:"/ брот /"
                },
                {
                id:211,
                eng:"(was,were)",
                ru:"был, были",
                hint:"/ воз вё /"
                },
                {
                id:212,
                eng:"bit",
                ru:"укусил",
                hint:"/ бит /"
                },
                {
                id:213,
                eng:"came",
                ru:"вторая форма глагола ` приходить `",
                hint:"/ кейм /"
                },
                {
                id:214,
                eng:"chose",
                ru:"вторая форма глагола ` выбирать `",
                hint:"/ чОуз /"
                },
                {
                id:215,
                eng:"caught",
                ru:"вторая форма глагола ` ловить `",
                hint:"/ кот /"
                },
                {
                id:216,
                eng:"crept",
                ru:"вторая форма глагола ` ползать `",
                hint:"/ крэпт /"
                },
                {
                id:217,
                eng:"cost",
                ru:"вторая форма глагола ` стоить `",
                hint:"/ кост /"
                },
                {
                id:218,
                eng:"cut",
                ru:"вторая форма глагола ` резать `",
                hint:"/ кат /"
                },
                {
                id:219,
                eng:"dealt",
                ru:"вторая форма глагола ` иметь дела `",
                hint:"/ дэлт /"
                },
                {
                id:220,
                eng:"dug",
                ru:"вторая форма глагола ` копать `",
                hint:"/ даг /"
                },
                {
                id:221,
                eng:"did",
                ru:"вторая форма глагола ` делать `",
                hint:"/ дид /"
                },
                {
                id:222,
                eng:"drove",
                ru:"вторая форма глагола ` водить `",
                hint:"/ дроув /"
                },
                {
                id:223,
                eng:"drew",
                ru:"вторая форма глагола ` рисовать `",
                hint:"/ дрУ /"
                },
                {
                id:224,
                eng:"drank",
                ru:"вторая форма глагола ` пить `",
                hint:"/ дрЭнк /"
                },
                {
                id:225,
                eng:"ate",
                ru:"вторая форма глагола ` кушать `",
                hint:"/ эйт /"
                },
                {
                id:226,
                eng:"fell",
                ru:"вторая форма глагола ` падать `",
                hint:"/ фэл /"
                },
                {
                id:227,
                eng:"fed",
                ru:"вторая форма глагола ` кормить `",
                hint:"/ фэд /"
                },
                {
                id:228,
                eng:"felt",
                ru:"вторая форма глагола ` чувствовать `",
                hint:"/ фэлт /"
                },
                {
                id:229,
                eng:"fought",
                ru:"вторая форма глагола ` сражаться `",
                hint:"/ фот /"
                },
                {
                id:230,
                eng:"found",
                ru:"вторая форма глагола ` находить `",
                hint:"/ фАунд /"
                },
                {
                id:231,
                eng:"flew",
                ru:"вторая форма глагола ` летать `",
                hint:"/ флу /"
                },
                {
                id:232,
                eng:"forbade",
                ru:"вторая форма глагола ` запрещать `",
                hint:"/ фобЭйд /"
                },
                {
                id:233,
                eng:"forgot",
                ru:"вторая форма глагола ` забывать `",
                hint:"/ фогОт /"
                },
                {
                id:234,
                eng:"forgave",
                ru:"вторая форма глагола ` прощать `",
                hint:"/ фогЕйв /"
                },
                {
                id:235,
                eng:"froze",
                ru:"вторая форма глагола ` замерзать `",
                hint:"/ фрОуз /"
                },
                {
                id:236,
                eng:"grew",
                ru:"вторая форма глагола ` расти `",
                hint:"/ грУ /"
                },
                {
                id:237,
                eng:"got",
                ru:"вторая форма глагола ` получать `",
                hint:"/ гот /"
                },
                {
                id:238,
                eng:"gave",
                ru:"вторая форма глагола ` давать `",
                hint:"/ гэйв /"
                },
                {
                id:239,
                eng:"went",
                ru:"вторая форма глагола ` ходить `",
                hint:"/ уэнт /"
                },
                {
                id:240,
                eng:"had",
                ru:"вторая форма глагола ` иметь `",
                hint:"/ хэд /"
                },
                {
                id:241,
                eng:"heard",
                ru:"вторая форма глагола ` слышать `",
                hint:"/ хёд /"
                },
                {
                id:242,
                eng:"hid",
                ru:"вторая форма глагола ` прятать `",
                hint:"/ хид /"
                },
                {
                id:243,
                eng:"hit",
                ru:"вторая форма глагола ` ударять `",
                hint:"/ хит /"
                },
                {
                id:244,
                eng:"hurt",
                ru:"вторая форма глагола ` причинять боль `",
                hint:"/ хёрт /"
                },
                {
                id:245,
                eng:"held",
                ru:"вторая форма глагола ` держать `",
                hint:"/ хэлд /"
                },
                {
                id:246,
                eng:"kept",
                ru:"вторая форма глагола ` хранить `",
                hint:"/ кэпт /"
                },
                {
                id:247,
                eng:"knew",
                ru:"вторая форма глагола ` знать `",
                hint:"/ ню /"
                },
                {
                id:248,
                eng:"led",
                ru:"вторая форма глагола ` вести, приводить `",
                hint:"/ лэд /"
                },
                {
                id:249,
                eng:"learnt",
                ru:"вторая форма глагола ` изучать `",
                hint:"/ лёрнт /"
                },
                {
                id:250,
                eng:"left",
                ru:"вторая форма глагола ` покидать `",
                hint:"/ лЭфт /"
                },
                {
                id:251,
                eng:"lent",
                ru:"вторая форма глагола ` давать в долг `",
                hint:"/ лэнт /"
                },
                {
                id:252,
                eng:"let",
                ru:"вторая форма глагола ` позволять `",
                hint:"/ лэт /"
                },
                {
                id:253,
                eng:"lost",
                ru:"вторая форма глагола ` терять `",
                hint:"/ лост /"
                },
                {
                id:254,
                eng:"told a lie",
                ru:"вторая форма глагола ` говорить ложь `",
                hint:"/ толд э лай /"
                },
                {
                id:255,
                eng:"lay",
                ru:"вторая форма глагола ` лежать `",
                hint:"/ лэй /"
                },
                {
                id:256,
                eng:"made",
                ru:"вторая форма глагола ` создавать `",
                hint:"/ мэйд /"
                },
                {
                id:257,
                eng:"meant",
                ru:"вторая форма глагола ` иметь ввиду `",
                hint:"/ мэнт /"
                },
                {
                id:258,
                eng:"met",
                ru:"вторая форма глагола ` встречать(ся) `",
                hint:"/ мэт /"
                },
                {
                id:259,
                eng:"paid",
                ru:"вторая форма глагола ` платить `",
                hint:"/ пэйд /"
                },
                {
                id:260,
                eng:"put",
                ru:"вторая форма глагола ` класть `",
                hint:"/ пут /"
                },
                {
                id:261,
                eng:"read",
                ru:"вторая форма глагола ` читать `",
                hint:"/ рЭд /"
                },
                {
                id:262,
                eng:"rode",
                ru:"вторая форма глагола ` ездить верхом `",
                hint:"/ роуд /"
                },
                {
                id:263,
                eng:"rang",
                ru:"вторая форма глагола ` звенеть, звонить `",
                hint:"/ рэн /"
                },
                {
                id:264,
                eng:"ran",
                ru:"вторая форма глагола ` бегать `",
                hint:"/ рэн /"
                },
                {
                id:265,
                eng:"rose",
                ru:"вторая форма глагола ` подниматься `",
                hint:"/ роуз /"
                },
                {
                id:266,
                eng:"said",
                ru:"вторая форма глагола ` сказать, произнести `",
                hint:"/ сЭд /"
                },
                {
                id:267,
                eng:"saw",
                ru:"вторая форма глагола ` увидеть `",
                hint:"/ со /"
                },
                {
                id:268,
                eng:"sold",
                ru:"вторая форма глагола ` продавать `",
                hint:"/ солд /"
                },
                {
                id:269,
                eng:"sent",
                ru:"вторая форма глагола ` отправлять `",
                hint:"/ сэнт /"
                },
                {
                id:270,
                eng:"shook",
                ru:"вторая форма глагола ` трясти `",
                hint:"/ шук /"
                },
                {
                id:271,
                eng:"shot",
                ru:"вторая форма глагола ` стрелять `",
                hint:"/ шот /"
                },
                {
                id:272,
                eng:"shut",
                ru:"вторая форма глагола ` захлопнуть `",
                hint:"/ щат /"
                },
                {
                id:273,
                eng:"sang",
                ru:"вторая форма глагола ` петь `",
                hint:"/ сэн /"
                },
                {
                id:274,
                eng:"sank",
                ru:"вторая форма глагола ` затонуть `",
                hint:"/ сэнк /"
                },
                {
                id:275,
                eng:"sat",
                ru:"вторая форма глагола ` сидеть `",
                hint:"/ сэт /"
                },
                {
                id:276,
                eng:"slept",
                ru:"вторая форма глагола ` спать `",
                hint:"/ слэпт /"
                },
                {
                id:277,
                eng:"slid",
                ru:"вторая форма глагола ` скользить `",
                hint:"/ слид /"
                },
                {
                id:278,
                eng:"spoke",
                ru:"вторая форма глагола ` разговаривать `",
                hint:"/ споук /"
                },
                {
                id:279,
                eng:"spent",
                ru:"вторая форма глагола ` тратить `",
                hint:"/ спэнт /"
                },
                {
                id:280,
                eng:"spat",
                ru:"вторая форма глагола ` плеваться `",
                hint:"/ спэт /"
                },
                {
                id:281,
                eng:"stood",
                ru:"вторая форма глагола ` встать, стоять `",
                hint:"/ студ /"
                },
                {
                id:282,
                eng:"stole",
                ru:"вторая форма глагола ` воровать `",
                hint:"/ стоул /"
                },
                {
                id:283,
                eng:"stuck",
                ru:"вторая форма глагола ` приклеить, застрять  `",
                hint:"/ стак /"
                },
                {
                id:284,
                eng:"stank",
                ru:"вторая форма глагола ` вонять `",
                hint:"/ стэнк /"
                },
                {
                id:285,
                eng:"struck",
                ru:"вторая форма глагола ` ударять `",
                hint:"/ страк /"
                },
                {
                id:286,
                eng:"swore",
                ru:"вторая форма глагола ` клясться, материться  `",
                hint:"/ сво /"
                },
                {
                id:287,
                eng:"swept",
                ru:"вторая форма глагола ` подметать `",
                hint:"/ свэпт /"
                },
                {
                id:288,
                eng:"swam",
                ru:"вторая форма глагола ` плавать `",
                hint:"/ свэм /"
                },
                {
                id:289,
                eng:"swung",
                ru:"вторая форма глагола ` качаться `",
                hint:"/ сван /"
                },
                {
                id:290,
                eng:"took",
                ru:"вторая форма глагола ` брать `",
                hint:"/ тук /"
                },
                {
                id:291,
                eng:"taught",
                ru:"вторая форма глагола ` обучать `",
                hint:"/ тот /"
                },
                {
                id:292,
                eng:"tore",
                ru:"вторая форма глагола ` порвать `",
                hint:"/ то /"
                },
                {
                id:293,
                eng:"told",
                ru:"вторая форма глагола ` рассказывать `",
                hint:"/ тОлд /"
                },
                {
                id:294,
                eng:"thought",
                ru:"вторая форма глагола ` думать `",
                hint:"/ thОт /"
                },
                {
                id:295,
                eng:"threw",
                ru:"вторая форма глагола ` бросать `",
                hint:"/ thру /"
                },
                {
                id:296,
                eng:"understood",
                ru:"вторая форма глагола ` понимать `",
                hint:"/ андэстУд /"
                },
                {
                id:297,
                eng:"woke up",
                ru:"вторая форма глагола ` просыпаться `",
                hint:"/ уОук ап /"
                },
                {
                id:298,
                eng:"wore",
                ru:"вторая форма глагола ` носить одежду `",
                hint:"/ уо /"
                },
                {
                id:299,
                eng:"wrote",
                ru:"вторая форма глагола ` писАть `",
                hint:"/ рОут /"
                },
                {
                id:300,
                eng:"wept",
                ru:"вторая форма глагола ` хныкать `",
                hint:"/ уЭпт /"
                },
                {
                id:301,
                eng:"won",
                ru:"вторая форма глагола ` выигрывать `",
                hint:"/ уан или уон /"
                },
                {
                id:302,
                eng:"misunderstood",
                ru:"вторая форма глагола ` неправильно понять `",
                hint:"/ мисандэстУд /"
                },
                {
                id:303,
                eng:"misspelt",
                ru:"вторая форма глагола ` неправильно написать `",
                hint:"/ миспЛлт /"
                },
                {
                id:304,
                eng:"mistook",
                ru:"вторая форма глагола ` ошибаться `",
                hint:"/ мистук /"
                },
                {
                id:305,
                eng:"misheard",
                ru:"вторая форма глагола ` неправильно услышать `",
                hint:"/ мисхёд /"
                },
                {
                id:306,
                eng:"overslept",
                ru:"вторая форма глагола ` проспать `",
                hint:"/ оУвэслэпт /"
                },
                {
                id:307,
                eng:"overate",
                ru:"вторая форма глагола ` переесть  `",
                hint:"/ оУвэЭйт /"
                },
                {
                id:308,
                eng:"overpaid",
                ru:"вторая форма глагола ` переплатить `",
                hint:"/ оУвэпЭйд /"
                },
                {
                id:309,
                eng:"arose",
                ru:"вторая форма глагола ` возникнуть `",
                hint:"/ эрОуз /"
                },
                {
                id:310,
                eng:"awoke",
                ru:"вторая форма глагола ` пробудиться `",
                hint:"/ эвОук /"
                },
                {
                id:311,
                eng:"abode",
                ru:"вторая форма глагола ` соблюдать пребывать обитать `",
                hint:"/ эбОуд /"
                },
                {
                    id:401,
                    eng:"broken",
                    ru:"сломанный",
                    hint:"/ брОУкэн /"
                    },
                    {
                    id:402,
                    eng:"beaten",
                    ru:"побитый",
                    hint:"/ битн /"
                    },
                    {
                    id:403,
                    eng:"become",
                    ru:"третья форма глагола ` становиться `",
                    hint:"/ бекАм /"
                    },
                    {
                    id:404,
                    eng:"begun",
                    ru:"третья форма глагола ` начинать `",
                    hint:"/ бегАн /"
                    },
                    {
                    id:405,
                    eng:"blown",
                    ru:"третья форма глагола ` дуть `",
                    hint:"/ блОун /"
                    },
                    {
                    id:406,
                    eng:"borrowed",
                    ru:"третья форма глагола ` брать в долг `",
                    hint:"/ бОроуд /"
                    },
                    {
                    id:407,
                    eng:"built",
                    ru:"построено",
                    hint:"/ билт /"
                    },
                    {
                    id:408,
                    eng:"burnt",
                    ru:"сгоревший",
                    hint:"/ бёрнт /"
                    },
                    {
                    id:409,
                    eng:"bought",
                    ru:"купленный, куплено",
                    hint:"/ бот /"
                    },
                    {
                    id:410,
                    eng:"brought",
                    ru:"принесённый, принесено",
                    hint:"/ брот /"
                    },
                    {
                    id:411,
                    eng:"been",
                    ru:"третья форма глагола ` быть `",
                    hint:"/ бин /"
                    },
                    {
                    id:412,
                    eng:"bit",
                    ru:"третья форма глагола ` кусать `",
                    hint:"/ бит /"
                    },
                    {
                    id:413,
                    eng:"come",
                    ru:"третья форма глагола ` приходить `",
                    hint:"/ кАм /"
                    },
                    {
                    id:414,
                    eng:"chosen",
                    ru:"избранный, третья форма глагола выбирать",
                    hint:"/ чОуzэн /"
                    },
                    {
                    id:415,
                    eng:"caught",
                    ru:"пойман",
                    hint:"/ кот /"
                    },
                    {
                    id:416,
                    eng:"crept",
                    ru:"третья форма глагола ` ползать `",
                    hint:"/ крэпт /"
                    },
                    {
                    id:417,
                    eng:"cost",
                    ru:"третья форма глагола ` стоить `",
                    hint:"/ кост /"
                    },
                    {
                    id:418,
                    eng:"cut",
                    ru:"третья форма глагола ` резать `",
                    hint:"/ кат /"
                    },
                    {
                    id:419,
                    eng:"dealt",
                    ru:"третья форма глагола ` иметь дела `",
                    hint:"/ дэлт /"
                    },
                    {
                    id:420,
                    eng:"dug",
                    ru:"третья форма глагола ` копать `",
                    hint:"/ даг /"
                    },
                    {
                    id:421,
                    eng:"done",
                    ru:"сделано, выполнено, третья форма глагола ДЕЛАТЬ",
                    hint:"/ дан /"
                    },
                    {
                    id:422,
                    eng:"driven",
                    ru:"третья форма глагола ` водить `",
                    hint:"/ дривн /"
                    },
                    {
                    id:423,
                    eng:"drawn",
                    ru:"нарисованный, нарисованно",
                    hint:"/ дроун /"
                    },
                    {
                    id:424,
                    eng:"drunk",
                    ru:"пьяный или выпито",
                    hint:"/ дрАнк /"
                    },
                    {
                    id:425,
                    eng:"eaten",
                    ru:"съеденный, съедено",
                    hint:"/ Итн /"
                    },
                    {
                    id:426,
                    eng:"fallen",
                    ru:"третья форма глагола ` падать `",
                    hint:"/ фОлэн /"
                    },
                    {
                    id:427,
                    eng:"fed",
                    ru:"третья форма глагола ` кормить `",
                    hint:"/ фэд /"
                    },
                    {
                    id:428,
                    eng:"felt",
                    ru:"третья форма глагола ` чувствовать `",
                    hint:"/ фэлт /"
                    },
                    {
                    id:429,
                    eng:"fought",
                    ru:"третья форма глагола ` сражаться `",
                    hint:"/ фот /"
                    },
                    {
                    id:430,
                    eng:"found",
                    ru:"третья форма глагола ` находить `",
                    hint:"/ фАунд /"
                    },
                    {
                    id:431,
                    eng:"flown",
                    ru:"третья форма глагола ` летать `",
                    hint:"/ флОун /"
                    },
                    {
                    id:432,
                    eng:"forbidden",
                    ru:"третья форма глагола ` запрещать `",
                    hint:"/ фобИдэн /"
                    },
                    {
                    id:433,
                    eng:"forgotten",
                    ru:"третья форма глагола ` забывать `",
                    hint:"/ фогОтэн /"
                    },
                    {
                    id:434,
                    eng:"forgiven",
                    ru:"третья форма глагола ` прощать `",
                    hint:"/ фогИвэн /"
                    },
                    {
                    id:435,
                    eng:"frozen",
                    ru:"третья форма глагола ` замерзать `",
                    hint:"/ фрОузэн /"
                    },
                    {
                    id:436,
                    eng:"grown",
                    ru:"третья форма глагола ` расти `",
                    hint:"/ грОун /"
                    },
                    {
                    id:437,
                    eng:"got",
                    ru:"третья форма глагола ` получать `",
                    hint:"/ гот /"
                    },
                    {
                    id:438,
                    eng:"given",
                    ru:"третья форма глагола ` давать `",
                    hint:"/ гИвэн /"
                    },
                    {
                    id:439,
                    eng:"gone",
                    ru:"третья форма глагола ` ходить `",
                    hint:"/ ган /"
                    },
                    {
                    id:440,
                    eng:"had",
                    ru:"третья форма глагола ` иметь `",
                    hint:"/ хэд /"
                    },
                    {
                    id:441,
                    eng:"heard",
                    ru:"третья форма глагола ` слышать `",
                    hint:"/ хёд /"
                    },
                    {
                    id:442,
                    eng:"hidden",
                    ru:"третья форма глагола ` прятать `",
                    hint:"/ хИддэн /"
                    },
                    {
                    id:443,
                    eng:"hit",
                    ru:"третья форма глагола ` ударять `",
                    hint:"/ хит /"
                    },
                    {
                    id:444,
                    eng:"hurt",
                    ru:"третья форма глагола ` причинять боль `",
                    hint:"/ хёрт /"
                    },
                    {
                    id:445,
                    eng:"held",
                    ru:"третья форма глагола ` держать `",
                    hint:"/ хэлд /"
                    },
                    {
                    id:446,
                    eng:"kept",
                    ru:"третья форма глагола ` хранить `",
                    hint:"/ кэпт /"
                    },
                    {
                    id:447,
                    eng:"known",
                    ru:"третья форма глагола ` знать `",
                    hint:"/ нОун /"
                    },
                    {
                    id:448,
                    eng:"led",
                    ru:"третья форма глагола ` вести, приводить `",
                    hint:"/ лэд /"
                    },
                    {
                    id:449,
                    eng:"learnt",
                    ru:"третья форма глагола ` изучать `",
                    hint:"/ лёрнт /"
                    },
                    {
                    id:450,
                    eng:"left",
                    ru:"третья форма глагола ` покидать `",
                    hint:"/ лЭфт /"
                    },
                    {
                    id:451,
                    eng:"lent",
                    ru:"третья форма глагола ` давать в долг `",
                    hint:"/ лэнт /"
                    },
                    {
                    id:452,
                    eng:"let",
                    ru:"третья форма глагола ` позволять `",
                    hint:"/ лэт /"
                    },
                    {
                    id:453,
                    eng:"lost",
                    ru:"третья форма глагола ` терять `",
                    hint:"/ лост /"
                    },
                    {
                    id:454,
                    eng:"told a lie",
                    ru:"третья форма глагола ` говорить ложь `",
                    hint:"/ толд э лай /"
                    },
                    {
                    id:455,
                    eng:"lain",
                    ru:"третья форма глагола ` лежать `",
                    hint:"/ лЭйн /"
                    },
                    {
                    id:456,
                    eng:"made",
                    ru:"третья форма глагола ` создавать `",
                    hint:"/ мэйд /"
                    },
                    {
                    id:457,
                    eng:"meant",
                    ru:"третья форма глагола ` иметь ввиду `",
                    hint:"/ мэнт /"
                    },
                    {
                    id:458,
                    eng:"met",
                    ru:"третья форма глагола ` встречать(ся) `",
                    hint:"/ мэт /"
                    },
                    {
                    id:459,
                    eng:"paid",
                    ru:"третья форма глагола ` платить `",
                    hint:"/ пэйд /"
                    },
                    {
                    id:460,
                    eng:"put",
                    ru:"третья форма глагола ` класть `",
                    hint:"/ пут /"
                    },
                    {
                    id:461,
                    eng:"read",
                    ru:"третья форма глагола ` читать `",
                    hint:"/ рЭд /"
                    },
                    {
                    id:462,
                    eng:"ridden",
                    ru:"третья форма глагола ` ездить верхом `",
                    hint:"/ рИддэн /"
                    },
                    {
                    id:463,
                    eng:"rung",
                    ru:"третья форма глагола ` звенеть, звонить `",
                    hint:"/ ран /"
                    },
                    {
                    id:464,
                    eng:"run",
                    ru:"третья форма глагола ` бегать `",
                    hint:"/ ран /"
                    },
                    {
                    id:465,
                    eng:"risen",
                    ru:"третья форма глагола ` подниматься `",
                    hint:"/ рИzэн /"
                    },
                    {
                    id:466,
                    eng:"said",
                    ru:"третья форма глагола ` сказать, произнести `",
                    hint:"/ сЭд /"
                    },
                    {
                    id:467,
                    eng:"seen",
                    ru:"третья форма глагола ` увидеть `",
                    hint:"/ син /"
                    },
                    {
                    id:468,
                    eng:"sold",
                    ru:"третья форма глагола ` продавать `",
                    hint:"/ солд /"
                    },
                    {
                    id:469,
                    eng:"sent",
                    ru:"третья форма глагола ` отправлять `",
                    hint:"/ сэнт /"
                    },
                    {
                    id:470,
                    eng:"shaken",
                    ru:"третья форма глагола ` трясти `",
                    hint:"/ шэйкэн /"
                    },
                    {
                    id:471,
                    eng:"shot",
                    ru:"третья форма глагола ` стрелять `",
                    hint:"/ шот /"
                    },
                    {
                    id:472,
                    eng:"shut",
                    ru:"третья форма глагола ` захлопнуть `",
                    hint:"/ щат /"
                    },
                    {
                    id:473,
                    eng:"sung",
                    ru:"третья форма глагола ` петь `",
                    hint:"/ сэн /"
                    },
                    {
                    id:474,
                    eng:"sunk",
                    ru:"третья форма глагола ` затонуть `",
                    hint:"/ сэнк /"
                    },
                    {
                    id:475,
                    eng:"sat",
                    ru:"третья форма глагола ` сидеть `",
                    hint:"/ сэт /"
                    },
                    {
                    id:476,
                    eng:"slept",
                    ru:"третья форма глагола ` спать `",
                    hint:"/ слэпт /"
                    },
                    {
                    id:477,
                    eng:"slid",
                    ru:"третья форма глагола ` скользить `",
                    hint:"/ слид /"
                    },
                    {
                    id:478,
                    eng:"spoken",
                    ru:"третья форма глагола ` разговаривать `",
                    hint:"/ споукэн /"
                    },
                    {
                    id:479,
                    eng:"spent",
                    ru:"третья форма глагола ` тратить `",
                    hint:"/ спэнт /"
                    },
                    {
                    id:480,
                    eng:"spat",
                    ru:"третья форма глагола ` плеваться `",
                    hint:"/ спэт /"
                    },
                    {
                    id:481,
                    eng:"stood",
                    ru:"третья форма глагола ` встать, стоять `",
                    hint:"/ студ /"
                    },
                    {
                    id:482,
                    eng:"stolen",
                    ru:"третья форма глагола ` воровать `",
                    hint:"/ стОулэн /"
                    },
                    {
                    id:483,
                    eng:"stuck",
                    ru:"третья форма глагола ` приклеить, застрять  `",
                    hint:"/ стак /"
                    },
                    {
                    id:484,
                    eng:"stunk",
                    ru:"третья форма глагола ` вонять `",
                    hint:"/ станк /"
                    },
                    {
                    id:485,
                    eng:"struck",
                    ru:"третья форма глагола ` ударять `",
                    hint:"/ страк /"
                    },
                    {
                    id:486,
                    eng:"sworn",
                    ru:"третья форма глагола ` клясться, материться  `",
                    hint:"/ сворн /"
                    },
                    {
                    id:487,
                    eng:"swept",
                    ru:"третья форма глагола ` подметать `",
                    hint:"/ свэпт /"
                    },
                    {
                    id:488,
                    eng:"swum",
                    ru:"третья форма глагола ` плавать `",
                    hint:"/ свам /"
                    },
                    {
                    id:489,
                    eng:"swung",
                    ru:"третья форма глагола ` качаться `",
                    hint:"/ сван /"
                    },
                    {
                    id:490,
                    eng:"taken",
                    ru:"третья форма глагола ` брать `",
                    hint:"/ тЭйкэн /"
                    },
                    {
                    id:491,
                    eng:"taught",
                    ru:"третья форма глагола ` обучать `",
                    hint:"/ тот /"
                    },
                    {
                    id:492,
                    eng:"torn",
                    ru:"третья форма глагола ` порвать `",
                    hint:"/ торн /"
                    },
                    {
                    id:493,
                    eng:"told",
                    ru:"третья форма глагола ` рассказывать `",
                    hint:"/ толд /"
                    },
                    {
                    id:494,
                    eng:"thought",
                    ru:"третья форма глагола ` думать `",
                    hint:"/ thОт /"
                    },
                    {
                    id:495,
                    eng:"thrown",
                    ru:"третья форма глагола ` бросать `",
                    hint:"/ thрОун /"
                    },
                    {
                    id:496,
                    eng:"understood",
                    ru:"третья форма глагола ` понимать `",
                    hint:"/ андэстУд /"
                    },
                    {
                    id:497,
                    eng:"woken up",
                    ru:"третья форма глагола ` просыпаться `",
                    hint:"/ уОукэн ап /"
                    },
                    {
                    id:498,
                    eng:"worn",
                    ru:"третья форма глагола ` носить одежду `",
                    hint:"/ уорн /"
                    },
                    {
                    id:499,
                    eng:"written",
                    ru:"третья форма глагола ` писАть `",
                    hint:"/ рИтэн /"
                    },
                    {
                    id:500,
                    eng:"wept",
                    ru:"третья форма глагола ` хныкать `",
                    hint:"/ уЭпт /"
                    },
                    {
                    id:501,
                    eng:"won",
                    ru:"третья форма глагола ` выигрывать `",
                    hint:"/ уан или уон /"
                    },
                    {
                    id:502,
                    eng:"misunderstood",
                    ru:"третья форма глагола ` неправильно понять `",
                    hint:"/ мисандэстУд /"
                    },
                    {
                    id:503,
                    eng:"misspelt",
                    ru:"третья форма глагола ` неправильно написать `",
                    hint:"/ миспЛлт /"
                    },
                    {
                    id:504,
                    eng:"mistaken",
                    ru:"третья форма глагола ` ошибаться `",
                    hint:"/ мистук /"
                    },
                    {
                    id:505,
                    eng:"misheard",
                    ru:"третья форма глагола ` неправильно услышать `",
                    hint:"/ мисхёд /"
                    },
                    {
                    id:506,
                    eng:"overslept",
                    ru:"третья форма глагола ` проспать `",
                    hint:"/ оУвэслэпт /"
                    },
                    {
                    id:507,
                    eng:"overeaten",
                    ru:"третья форма глагола ` переесть  `",
                    hint:"/ оУвэИтэн /"
                    },
                    {
                    id:508,
                    eng:"overpaid",
                    ru:"третья форма глагола ` переплатить `",
                    hint:"/ оУвэпЭйд /"
                    },
                    {
                    id:509,
                    eng:"arisen",
                    ru:"третья форма глагола ` возникнуть `",
                    hint:"/ эрИзн /"
                    },
                    {
                    id:510,
                    eng:"awoken",
                    ru:"третья форма глагола ` пробудиться `",
                    hint:"/ эвОукэн /"
                    },
                    {
                    id:511,
                    eng:"abidden",
                    ru:"третья форма глагола ` соблюдать пребывать обитать `",
                    hint:"/ эбИдэн /"
                    },
    ],
    adj02: [
        {
            id:1,
            eng:"ugly",
            ru:"уродливый",
            hint:" / Агли /"
            },
            {
            id:2,
            eng:"big",
            ru:"большой",
            hint:" / биГ /"
            },
            {
            id:3,
            eng:"busy",
            ru:"занятой",
            hint:" / бИзи /"
            },
            {
            id:4,
            eng:"bald",
            ru:"лысый",
            hint:" / бОлд /"
            },
            {
            id:5,
            eng:"boring",
            ru:"скучный",
            hint:" / бОрин /"
            },
            {
            id:6,
            eng:"beautiful",
            ru:"красивая",
            hint:" / бьютифул /"
            },
            {
            id:7,
            eng:"bad",
            ru:"плохой",
            hint:" / бЭд /"
            },
            {
            id:8,
            eng:"green",
            ru:"зелёный",
            hint:" / грин /"
            },
            {
            id:9,
            eng:"great",
            ru:"великий",
            hint:" / грЭйт /"
            },
            {
            id:10,
            eng:"good",
            ru:"хороший",
            hint:" / гуд /"
            },
            {
            id:11,
            eng:"dark",
            ru:"темный",
            hint:" / дарк /"
            },
            {
            id:12,
            eng:"dirty",
            ru:"грязный",
            hint:" / дёти /"
            },
            {
            id:13,
            eng:"disgusting",
            ru:"отвратительный",
            hint:" / дисгАстин /"
            },
            {
            id:14,
            eng:"drunk",
            ru:"пьяный",
            hint:" / дрАнк /"
            },
            {
            id:15,
            eng:"early",
            ru:"ранний, рано",
            hint:" / ёли /"
            },
            {
            id:16,
            eng:"easy",
            ru:"легкий",
            hint:" / Изи /"
            },
            {
            id:17,
            eng:"interesting",
            ru:"интересный",
            hint:" / ИНтрэстин /"
            },
            {
            id:18,
            eng:"kind",
            ru:"добрый",
            hint:" / кАйнд /"
            },
            {
            id:19,
            eng:"calm",
            ru:"спокойный",
            hint:" / кам /"
            },
            {
            id:20,
            eng:"young",
            ru:"молодой",
            hint:" / ян /"
            },
            {
            id:21,
            eng:"clumsy",
            ru:"неуклюжий",
            hint:" / клАмзи /"
            },
            {
            id:22,
            eng:"clean",
            ru:"чистый",
            hint:" / клин /"
            },
            {
            id:23,
            eng:"muscular",
            ru:"мускулистый",
            hint:" / мАскьюла /"
            },
            {
            id:24,
            eng:"old",
            ru:"старый",
            hint:" / оУлд /"
            },
    ],
    m04: [
        {
            id:1,
            eng:"A",
            ru:"Какая английская буква произносится :  / эй /"
            },
            {
            id:2,
            eng:"B",
            ru:"Какая английская буква произносится :  / би /"
            },
            {
            id:3,
            eng:"C",
            ru:"Какая английская буква произносится :  / си /"
            },
            {
            id:4,
            eng:"D",
            ru:"Какая английская буква произносится :  / ди /"
            },
            {
            id:5,
            eng:"E",
            ru:"Какая английская буква произносится :  / и /"
            },
            {
            id:6,
            eng:"F",
            ru:"Какая английская буква произносится :  / эф /"
            },
            {
            id:7,
            eng:"G",
            ru:"Какая английская буква произносится :  / джи /"
            },
            {
            id:8,
            eng:"H",
            ru:"Какая английская буква произносится :  / эйч /"
            },
            {
            id:9,
            eng:"I",
            ru:"Какая английская буква произносится :  / ай /"
            },
            {
            id:10,
            eng:"J",
            ru:"Какая английская буква произносится :  / джэй /"
            },
            {
            id:11,
            eng:"K",
            ru:"Какая английская буква произносится :  / кей /"
            },
            {
            id:12,
            eng:"L",
            ru:"Какая английская буква произносится :  / эл /"
            },
            {
            id:13,
            eng:"M",
            ru:"Какая английская буква произносится :  / эм /"
            },
            {
            id:14,
            eng:"N",
            ru:"Какая английская буква произносится :  / эн /"
            },
            {
            id:15,
            eng:"O",
            ru:"Какая английская буква произносится :  / оу /"
            },
            {
            id:16,
            eng:"P",
            ru:"Какая английская буква произносится :  / пи /"
            },
            {
            id:17,
            eng:"Q",
            ru:"Какая английская буква произносится :  / кью /"
            },
            {
            id:18,
            eng:"R",
            ru:"Какая английская буква произносится :  / ар /"
            },
            {
            id:19,
            eng:"S",
            ru:"Какая английская буква произносится :  / эс /"
            },
            {
            id:20,
            eng:"T",
            ru:"Какая английская буква произносится :  / ти /"
            },
            {
            id:21,
            eng:"U",
            ru:"Какая английская буква произносится :  / ю /"
            },
            {
            id:22,
            eng:"V",
            ru:"Какая английская буква произносится :  / ви /"
            },
            {
            id:23,
            eng:"W",
            ru:"Какая английская буква произносится :  / дабл ю /"
            },
            {
            id:24,
            eng:"X",
            ru:"Какая английская буква произносится :  / экс /"
            },
            {
            id:25,
            eng:"Y",
            ru:"Какая английская буква произносится :  / уай /"
            },
            {
            id:26,
            eng:"Z",
            ru:"Какая английская буква произносится :  / ЗИ и ZЭД /"
            },
    ],
    alphabeta1: [
        {
            id:1,
            eng:"A",
            ru:"Как на английском языке написать :  / эй /"
            },
            {
            id:2,
            eng:"B",
            ru:"Как на английском языке написать :  / би /"
            },
            {
            id:3,
            eng:"C",
            ru:"Как на английском языке написать :  / си /"
            },
            {
            id:4,
            eng:"D",
            ru:"Как на английском языке написать :  / ди /"
            },
            {
            id:5,
            eng:"E",
            ru:"Как на английском языке написать :  / и /"
            },
            {
            id:6,
            eng:"F",
            ru:"Как на английском языке написать :  / эф /"
            },
            {
            id:7,
            eng:"G",
            ru:"Как на английском языке написать :  / джи /"
            },
            {
            id:8,
            eng:"H",
            ru:"Как на английском языке написать :  / эйч /"
            },
            {
            id:9,
            eng:"I",
            ru:"Как на английском языке написать :  / ай /"
            },
            {
            id:10,
            eng:"J",
            ru:"Как на английском языке написать :  / джэй /"
            },
            {
            id:11,
            eng:"K",
            ru:"Как на английском языке написать :  / кей /"
            },
            {
            id:12,
            eng:"L",
            ru:"Как на английском языке написать :  / эл /"
            },
            {
            id:13,
            eng:"M",
            ru:"Как на английском языке написать :  / эм /"
            },
            {
            id:14,
            eng:"N",
            ru:"Как на английском языке написать :  / эн /"
            },
            {
            id:15,
            eng:"O",
            ru:"Как на английском языке написать :  / оу /"
            },
            {
            id:16,
            eng:"P",
            ru:"Как на английском языке написать :  / пи /"
            },
            {
            id:17,
            eng:"Q",
            ru:"Как на английском языке написать :  / кью /"
            },
            {
            id:18,
            eng:"R",
            ru:"Как на английском языке написать :  / ар /"
            },
            {
            id:19,
            eng:"S",
            ru:"Как на английском языке написать :  / эс /"
            },
            {
            id:20,
            eng:"T",
            ru:"Как на английском языке написать :  / ти /"
            },
            {
            id:21,
            eng:"U",
            ru:"Как на английском языке написать :  / ю /"
            },
            {
            id:22,
            eng:"V",
            ru:"Как на английском языке написать :  / ви /"
            },
            {
            id:23,
            eng:"W",
            ru:"Как на английском языке написать :  / дабл ю /"
            },
            {
            id:24,
            eng:"X",
            ru:"Как на английском языке написать :  / экс /"
            },
            {
            id:25,
            eng:"Y",
            ru:"Как на английском языке написать :  / уай /"
            },
            {
            id:26,
            eng:"Z",
            ru:"Как на английском языке написать :  / зи (зэд) /"
            },
    ],
    alphabeta2: [
        
            {
            id:128,
            eng:"NIKE",
            ru:"Эн Ай Кей И",
            },
            
            {
            id:130,
            eng:"RUSSIA",
            ru:"Ар Ю Эс Эс Ай Эй",
            },
           
            {
            id:134,
            eng:"AUDI",
            ru:"Эй Ю Ди Ай",
            },
            {
            id:135,
            eng:"VOLVO",
            ru:"Ви Оу Эл Ви Оу",
            },
           
            {
            id:137,
            eng:"BMW",
            ru:"Би Эм Дабл Ю",
            },
           
            {
            id:139,
            eng:"JOKER",
            ru:"Джей Оу Кей И Ар",
            },
           
            {
            id:141,
            eng:"HOUSE",
            ru:"Эйч Оу Ю Эс И",
            },
            {
            id:142,
            eng:"FOX",
            ru:"Эф Оу Экс",
            },
            
            {
            id:145,
            eng:"FATHER",
            ru:"Эф Эй Ти Эйч И Ар",
            },
            {
            id:146,
            eng:"MOTHER",
            ru:"Эм Оу Ти Эйч И Ар",
            },
            {
            id:147,
            eng:"IPHONE",
            ru:"Ай Пи Эйч Оу Эн И",
            },
            
            {
            id:159,
            eng:"JEEP",
            ru:"Джей И И Пи",
            },
            {
            id:160,
            eng:"CAR",
            ru:"Си Эй Ар",
            },
           
    ],
    alphabetb1: [
        {
            id:127,
            eng:"VINCENT",
            ru:"Ви Ай Эн Си И Эн Ти",
            },
            {
            id:128,
            eng:"NIKE",
            ru:"Эн Ай Кей И",
            },
            {
            id:129,
            eng:"PASSPORT",
            ru:"Пи Эй Эс Эс Пи Оу Ар Ти",
            },
            {
            id:130,
            eng:"RUSSIA",
            ru:"Ар Ю Эс Эс Ай Эй",
            },
            {
            id:131,
            eng:"FRANCE",
            ru:"Эф Ар Эй Эн Си И",
            },
            {
            id:132,
            eng:"ENGLAND",
            ru:"И Эн Джи Эл Эй Эн Ди",
            },
            {
            id:133,
            eng:"MERCEDES",
            ru:"Эм И Ар Си И Ди И Эс",
            },
            {
            id:134,
            eng:"AUDI",
            ru:"Эй Ю Ди Ай",
            },
            {
            id:135,
            eng:"VOLVO",
            ru:"Ви Оу Эл Ви Оу",
            },
            {
            id:136,
            eng:"VOLKSWAGEN",
            ru:"Ви Оу Эл Кей Эс Дабл Ю Эй Джи И Эн",
            },
            {
            id:137,
            eng:"BMW",
            ru:"Би Эм Дабл Ю",
            },
            {
            id:138,
            eng:"KANGAROO",
            ru:"Кей Эй Эн Джи Эй Ар Оу Оу",
            },
            {
            id:139,
            eng:"JOKER",
            ru:"Джей Оу Кей И Ар",
            },
            {
            id:140,
            eng:"MINECRAFT",
            ru:"Эм Ай Эн И Си Ар Эй Эф Ти",
            },
            {
            id:141,
            eng:"HOUSE",
            ru:"Эйч Оу Ю Эс И",
            },
            {
            id:142,
            eng:"FOX",
            ru:"Эф Оу Экс",
            },
            {
            id:143,
            eng:"WINDOWS",
            ru:"Дабл Ю Ай Эн Ди Оу Дабл Ю Эс",
            },
            {
            id:144,
            eng:"ANDROID",
            ru:"Эй Эн Ди Ар Оу Ай Ди",
            },
            {
            id:145,
            eng:"FATHER",
            ru:"Эф Эй Ти Эйч И Ар",
            },
            {
            id:146,
            eng:"MOTHER",
            ru:"Эм Оу Ти Эйч И Ар",
            },
            {
            id:147,
            eng:"TELEPHONE",
            ru:"Ти И Эл И Пи Эйч Оу Эн И",
            },
            {
            id:148,
            eng:"CHRISTMAS",
            ru:"Си Эйч Ар Ай Эс Ти Эм Эй Эс",
            },
            {
            id:149,
            eng:"EURO",
            ru:"И Ю Ар Оу",
            },
            {
            id:150,
            eng:"AMERICA",
            ru:"Эй Эм И Ар Ай Си Эй",
            },
            {
            id:151,
            eng:"COMPUTER",
            ru:"Си Оу Эм Пи Ю Ти И Ар",
            },
            {
            id:152,
            eng:"ALASKA",
            ru:"Эй Эл Эй Эс Кей Эй",
            },
            {
            id:153,
            eng:"BATMAN",
            ru:"Би Эй Ти Эм Эй Эн",
            },
            {
            id:154,
            eng:"ROCKNROLL",
            ru:"Ар Оу Си Кей Эн Ар Оу Эл Эл",
            },
            {
            id:155,
            eng:"HAMBURGER",
            ru:"Эйч Эй Эм Би Ю Ар Джи И Ар",
            },
            {
            id:156,
            eng:"CHEESEBURGER",
            ru:"Си Эйч И И Эс И Би Ю Ар джи И Ар",
            },
            {
            id:157,
            eng:"HOMEWORK",
            ru:"Эйч Оу Эм И Дабл Ю Оу Ар Кей",
            },
            {
            id:158,
            eng:"ENGLISH",
            ru:"И Эн Джи Эл Ай Эс Эйч",
            },
            {
            id:159,
            eng:"JEEP",
            ru:"Джей И И Пи",
            },
            {
            id:160,
            eng:"CAR",
            ru:"Си Эй Ар",
            },
            {
            id:161,
            eng:"HOSPITAL",
            ru:"Эйч Оу Эс Пи Ай Ти Эй Эл",
            },
    ],
    lettersc2: [
        {
            id:62,
            eng:"VINCENT",
            ru:"Напиши английские буквы и отгадай слово: ` Ви Ай Эн Си И Эн Ти `"
            },
            {
            id:63,
            eng:"NIKE",
            ru:"Напиши английские буквы и отгадай слово: ` Эн Ай Кей И `"
            },
            {
            id:64,
            eng:"PASSPORT",
            ru:"Напиши английские буквы и отгадай слово: ` Пи Эй Эс Эс Пи Оу Ар Ти `"
            },
            {
            id:65,
            eng:"RUSSIA",
            ru:"Напиши английские буквы и отгадай слово: ` Ар Ю Эс Эс Ай Эй `"
            },
            {
            id:66,
            eng:"FRANCE ",
            ru:"Напиши английские буквы и отгадай слово: ` Эф Ар Эй Эн Си И `"
            },
            {
            id:67,
            eng:"ENGLAND",
            ru:"Напиши английские буквы и отгадай слово: ` И Эн Джи Эл Эй Эн Ди `"
            },
            {
            id:68,
            eng:"MERCEDES",
            ru:"Напиши английские буквы и отгадай слово: ` Эм И Ар Си И Ди И Эс - Би И Эн Зи `"
            },
            {
            id:69,
            eng:"AUDI",
            ru:"Напиши английские буквы и отгадай слово: ` Эй Ю Ди Ай `"
            },
            {
            id:70,
            eng:"VOLVO",
            ru:"Напиши английские буквы и отгадай слово: ` Ви Оу Эл Ви Оу `"
            },
            {
            id:71,
            eng:"VOLKSWAGEN",
            ru:"Напиши английские буквы и отгадай слово: ` Ви Оу Эл Кей Эс Дабл Ю Эй Джи И Эн `"
            },
            {
            id:72,
            eng:"BMW",
            ru:"Напиши английские буквы и отгадай слово: ` Би Эм Дабл Ю `"
            },
            {
            id:73,
            eng:"KANGAROO",
            ru:"Напиши английские буквы и отгадай слово: ` Кей Эй Эн Джи Эй Ар Оу Оу `"
            },
            {
            id:74,
            eng:"JOKER",
            ru:"Напиши английские буквы и отгадай слово: ` Джей Оу Кей И Ар `"
            },
            {
            id:75,
            eng:"MINECRAFT",
            ru:"Напиши английские буквы и отгадай слово: ` Эм Ай Эн И Си Ар Эй Эф Ти `"
            },
            {
                id:76,
                eng:"A",
                ru:"Как на английском языке написать :  / эй /"
                },
                {
                id:77,
                eng:"B",
                ru:"Как на английском языке написать :  / би /"
                },
                {
                id:78,
                eng:"C",
                ru:"Как на английском языке написать :  / си /"
                },
                {
                id:79,
                eng:"D",
                ru:"Как на английском языке написать :  / ди /"
                },
                {
                id:80,
                eng:"E",
                ru:"Как на английском языке написать :  / и /"
                },
                {
                id:81,
                eng:"F",
                ru:"Как на английском языке написать :  / эф /"
                },
                {
                id:82,
                eng:"G",
                ru:"Как на английском языке написать :  / джи /"
                },
                {
                id:83,
                eng:"H",
                ru:"Как на английском языке написать :  / эйч /"
                },
                {
                id:84,
                eng:"I",
                ru:"Как на английском языке написать :  / ай /"
                },
                {
                id:85,
                eng:"J",
                ru:"Как на английском языке написать :  / джэй /"
                },
                {
                id:86,
                eng:"K",
                ru:"Как на английском языке написать :  / кей /"
                },
                {
                id:87,
                eng:"L",
                ru:"Как на английском языке написать :  / эл /"
                },
                {
                id:88,
                eng:"M",
                ru:"Как на английском языке написать :  / эм /"
                },
                {
                id:89,
                eng:"N",
                ru:"Как на английском языке написать :  / эн /"
                },
                {
                id:90,
                eng:"O",
                ru:"Как на английском языке написать :  / оу /"
                },
                {
                id:91,
                eng:"P",
                ru:"Как на английском языке написать :  / пи /"
                },
                {
                id:92,
                eng:"Q",
                ru:"Как на английском языке написать :  / кью /"
                },
                {
                id:93,
                eng:"R",
                ru:"Как на английском языке написать :  / ар /"
                },
                {
                id:94,
                eng:"S",
                ru:"Как на английском языке написать :  / эс /"
                },
                {
                id:95,
                eng:"T",
                ru:"Как на английском языке написать :  / ти /"
                },
                {
                id:96,
                eng:"U",
                ru:"Как на английском языке написать :  / ю /"
                },
                {
                id:97,
                eng:"V",
                ru:"Как на английском языке написать :  / ви /"
                },
                {
                id:98,
                eng:"W",
                ru:"Как на английском языке написать :  / дабл ю /"
                },
                {
                id:99,
                eng:"X",
                ru:"Как на английском языке написать :  / экс /"
                },
                {
                id:100,
                eng:"Y",
                ru:"Как на английском языке написать :  / уай /"
                },
                {
                id:101,
                eng:"Z",
                ru:"Как на английском языке написать :  / зи (зэд) /"
                },
    ],
    tobe: [
        {
            id:1,
            eng:"am",
            ru:"ARE  или  AM  или  IS  ? I_____stupid."
            },
            {
            id:2,
            eng:"is",
            ru:"ARE  или  AM  или  IS  ? Vincent_____a good teacher."
            },
            {
            id:3,
            eng:"are",
            ru:"ARE  или  AM  или  IS  ? He and I_____friends."
            },
            {
            id:4,
            eng:"are",
            ru:"ARE  или  AM  или  IS  ? Tom and Jerry ___ not friends."
            },
            {
            id:5,
            eng:"are",
            ru:"ARE  или  AM  или  IS  ? We_____not stupid."
            },
            {
            id:6,
            eng:"are",
            ru:"ARE  или  AM  или  IS  ? My brother and my sister ___ cool."
            },
            {
            id:7,
            eng:"are",
            ru:"ARE  или  AM  или  IS  ? Where_____you?"
            },
            {
            id:8,
            eng:"is",
            ru:"ARE  или  AM  или  IS  ? Where_____he from?"
            },
            {
            id:9,
            eng:"am",
            ru:"ARE  или  AM  или  IS  ? I am sorry, I ___ late"
            },
            {
            id:10,
            eng:"is",
            ru:"ARE  или  AM  или  IS  ? Who_____it?"
            },
            {
            id:11,
            eng:"is",
            ru:"ARE  или  AM  или  IS  ? Who_____your teacher?"
            },
            {
            id:12,
            eng:"are",
            ru:"ARE  или  AM  или  IS  ? What_____your names?"
            },
            {
            id:13,
            eng:"is",
            ru:"ARE  или  AM  или  IS  ? What_____her name?"
            },
            {
            id:14,
            eng:"am",
            ru:"ARE  или  AM  или  IS  ? I_____sexy and I know it."
            },
    ],
    doOrdoesAmIsAre: [
        {
            id:1,
            eng:"do",
            ru:"ARE, AM, IS, DO, DOES ? I___not drink vodka",
            hint:" / если есть глагол, то пиши либо DO либо DOES /"
            },
            {
            id:2,
            eng:"does",
            ru:"ARE, AM, IS, DO, DOES ? He___not drink black coffee",
            hint:" / если есть глагол, то пиши либо DO либо DOES /"
            },
            {
            id:3,
            eng:"do",
            ru:"ARE, AM, IS, DO, DOES ? My friends___not study English",
            hint:" / если есть глагол, то пиши либо DO либо DOES /"
            },
            {
            id:4,
            eng:"does",
            ru:"ARE, AM, IS, DO, DOES ? My best friend ___n't smoke, but my friend drinks a lot!",
            hint:" / если есть глагол, то пиши либо DO либо DOES /"
            },
            {
            id:5,
            eng:"does",
            ru:"ARE, AM, IS, DO, DOES ? Vincent___n't kiss me after lessons",
            hint:" / если есть глагол, то пиши либо DO либо DOES /"
            },
            {
            id:6,
            eng:"does",
            ru:"ARE, AM, IS, DO, DOES ? My cat___n't sleep 8 hours. It sleeps 15 hours",
            hint:" / если есть глагол, то пиши либо DO либо DOES /"
            },
            {
            id:7,
            eng:"do",
            ru:"ARE, AM, IS, DO, DOES ? Vincent always asks me: ___ you understand me?",
            hint:" / если есть глагол, то пиши либо DO либо DOES /"
            },
            {
            id:8,
            eng:"does",
            ru:"ARE, AM, IS, DO, DOES ? ___your teacher like you? I think he likes you very much.",
            hint:" / если есть глагол, то пиши либо DO либо DOES /"
            },
            {
            id:9,
            eng:"does",
            ru:"ARE, AM, IS, DO, DOES ? When Vincent is hungry he eats burgers. But he___not eat fries (карт.фри)",
            hint:" / если есть глагол, то пиши либо DO либо DOES /"
            },
            {
            id:10,
            eng:"does",
            ru:"ARE, AM, IS, DO, DOES ? ___anybody in your family play musical instruments?",
            hint:" / если есть глагол, то пиши либо DO либо DOES /"
            },
            {
            id:11,
            eng:"do",
            ru:"ARE, AM, IS, DO, DOES ? When I was a child I liked games. But now I___not play often.",
            hint:" / если есть глагол, то пиши либо DO либо DOES /"
            },
            {
            id:12,
            eng:"does",
            ru:"ARE, AM, IS, DO, DOES ? Why___he help you?",
            hint:" / если есть глагол, то пиши либо DO либо DOES /"
            },
            {
            id:13,
            eng:"am",
            ru:"ARE, AM, IS, DO, DOES ? _____I your friend?",
            hint:" / если есть глагол, то пиши либо DO либо DOES /"
            },
            {
            id:14,
            eng:"do",
            ru:"ARE, AM, IS, DO, DOES ? _________ I study English?",
            hint:" / если есть глагол, то пиши либо DO либо DOES /"
            },
            {
            id:15,
            eng:"does",
            ru:"ARE, AM, IS, DO, DOES ? _________ Vincent teach you?",
            hint:" / если есть глагол, то пиши либо DO либо DOES /"
            },
            {
            id:16,
            eng:"is",
            ru:"ARE, AM, IS, DO, DOES ? _________ Vincent your teacher?",
            hint:" / если есть глагол, то пиши либо DO либо DOES /"
            },
            {
            id:17,
            eng:"are",
            ru:"ARE, AM, IS, DO, DOES ? Where_____you?",
            hint:" / если есть глагол, то пиши либо DO либо DOES /"
            },
            {
            id:18,
            eng:"am",
            ru:"ARE, AM, IS, DO, DOES ? I___a very smart person because I always do homework.",
            hint:" / если есть глагол, то пиши либо DO либо DOES /"
            },
            {
            id:19,
            eng:"do",
            ru:"ARE, AM, IS, DO, DOES ? Where_____you live?",
            hint:" / если есть глагол, то пиши либо DO либо DOES /"
            },
            {
            id:20,
            eng:"does",
            ru:"ARE, AM, IS, DO, DOES ? Where_____ your girlfriend work?",
            hint:" / если есть глагол, то пиши либо DO либо DOES /"
            },
    ],
    verbs003: [
        {
            id:201,
            eng:"kiss somebody",
            ru:"вводи без частицы 'to' : целовать кого-то",
            hint:" / кис сАмбади /"
            },
            {
            id:202,
            eng:"go to work",
            ru:"вводи без частицы 'to' : ходить на работу",
            hint:" / гОУ ту ворк /"
            },
            {
            id:203,
            eng:"do homework",
            ru:"вводи без частицы 'to' : делать или выполнять домашку",
            hint:" / ду хОумворк /"
            },
            {
            id:204,
            eng:"sleep",
            ru:"вводи без частицы 'to' : спать",
            hint:" / слип /"
            },
            {
            id:205,
            eng:"run",
            ru:"вводи без частицы 'to' : бегать",
            hint:" / рАн /"
            },
            {
            id:206,
            eng:"jump",
            ru:"вводи без частицы 'to' : прыгать",
            hint:" / джАмп /"
            },
            {
            id:207,
            eng:"do number one",
            ru:"вводи без частицы 'to' : ходить 'по-маленькому' (писать)",
            hint:" / ду нАмбэ уАн /"
            },
            {
            id:208,
            eng:"do number two",
            ru:"вводи без частицы 'to' : ходить 'по-большому' (какать)",
            hint:" / ду нАмбэ ту /"
            },
            {
            id:209,
            eng:"walk",
            ru:"вводи без частицы 'to' : гулять",
            hint:" / уОлк /"
            },
            {
            id:210,
            eng:"play football",
            ru:"вводи без частицы 'to' : играть в футбол",
            hint:" / плэй фУтбол /"
            },
            {
            id:211,
            eng:"play games",
            ru:"вводи без частицы 'to' : играть в игры",
            hint:" / плэй гЕймz /"
            },
            {
            id:212,
            eng:"play the guitar",
            ru:"вводи без частицы 'to' : играть на гитаре",
            hint:" / плЭй дэ гитА /"
            },
            {
            id:213,
            eng:"sing a song",
            ru:"вводи без частицы 'to' : петь песню",
            hint:" / сИн э сОн /"
            },
            {
            id:214,
            eng:"watch movies",
            ru:"вводи без частицы 'to' : смотреть фильмы",
            hint:" / уОч мУвиz /"
            },
            {
            id:215,
            eng:"drink",
            ru:"вводи без частицы 'to' : пить",
            hint:" / дринк /"
            },
            {
            id:216,
            eng:"close",
            ru:"вводи без частицы 'to' : закрывать",
            hint:" / клОУz /"
            },
            {
            id:217,
            eng:"open",
            ru:"вводи без частицы 'to' : открывать",
            hint:" / Оупэн /"
            },
            {
            id:218,
            eng:"look at a teacher",
            ru:"вводи без частицы 'to' : смотреть на учителя",
            hint:" / лук эт э тИче /"
            },
            {
            id:219,
            eng:"give",
            ru:"вводи без частицы 'to' : давать",
            hint:" / гив /"
            },
            {
            id:220,
            eng:"take",
            ru:"вводи без частицы 'to' : брать",
            hint:" / тЭйк /"
            },
            {
            id:221,
            eng:"do something",
            ru:"вводи без частицы 'to' : делать что-то",
            hint:" / ду самTHын /"
            },
            {
            id:222,
            eng:"make something",
            ru:"вводи без частицы 'to' : создавать что-то",
            hint:" / мЭйк самTHын /"
            },
            {
            id:223,
            eng:"read books",
            ru:"вводи без частицы 'to' : читать книги",
            hint:" / рид букс /"
            },
    ],
    future01a1: [
        {
            id:1,
            eng:"on foot",
            ru:"пешком",
            hint:"/ он фут /"
            },
            {
            id:2,
            eng:"by taxi",
            ru:"на такси",
            hint:"/ бай тЭкси /"
            },
            {
            id:3,
            eng:"by train",
            ru:"на поезде",
            hint:"/ бай трэйн /"
            },
            {
            id:4,
            eng:"by bus",
            ru:"на автобусе",
            hint:"/ бай бас /"
            },
            {
            id:5,
            eng:"soon",
            ru:"скоро",
            hint:"/ сун /"
            },
            {
            id:6,
            eng:"later",
            ru:"позже, потом",
            hint:"/ лЭйтэ /"
            },
            {
            id:7,
            eng:"in two days",
            ru:"через два дня",
            hint:"/ ин ту дэйz /"
            },
            {
            id:8,
            eng:"next week",
            ru:"на следующей неделе",
            hint:"/ нэкст вик /"
            },
            {
            id:9,
            eng:"in a month",
            ru:"через месяц",
            hint:"/ ин э мАнтh /"
            },
            {
            id:10,
            eng:"next life",
            ru:" следующей жизни",
            hint:"/ нэкст лАйф /"
            },
            {
            id:11,
            eng:"in an hour",
            ru:"через час",
            hint:"/ ин эн Ауэ /"
            },
            {
            id:12,
            eng:"the day after tomorrow",
            ru:"послезавтра",
            hint:""
            },
            {
            id:13,
            eng:"after dinner",
            ru:"после ужина",
            hint:""
            },
            {
            id:14,
            eng:"on the first",
            ru:"первого числа",
            hint:"/ он дэ фёст /"
            },
            {
            id:15,
            eng:"on the second",
            ru:"второго числа",
            hint:"/ он дэ сэконд /"
            },
            {
            id:16,
            eng:"on the third",
            ru:"третьего числа",
            hint:"/ он дэ thёрд /"
            },
            {
            id:17,
            eng:"on the fifth",
            ru:"пятого числа",
            hint:"/ он дэ фИфтh /"
            },
            {
            id:18,
            eng:"in February",
            ru:"в феврале",
            hint:"/ ин фЭбрари /"
            },
            {
            id:19,
            eng:"in winter",
            ru:"зимой",
            hint:"/ ин уинтэ /"
            },
            {
            id:20,
            eng:"on the weekends",
            ru:"на выходных",
            hint:""
            },
            {
            id:21,
            eng:"at night",
            ru:"ночью",
            hint:"/ эт найт /"
            },
            {
            id:22,
            eng:"tonight",
            ru:"сегодня вечером",
            hint:"/ тунайт /"
            },
            {
            id:23,
            eng:"never",
            ru:"никогда",
            hint:"/ нЭвэ /"
            },
            {
            id:24,
            eng:"in a week",
            ru:"через неделю",
            hint:""
            },
            {
            id:25,
            eng:"in two hours",
            ru:"через два часа",
            hint:""
            },
            {
            id:26,
            eng:"in an hour",
            ru:"через час",
            hint:""
            },
            {
            id:27,
            eng:"in spring",
            ru:"весной",
            hint:"/ сприН /"
            },
            {
            id:28,
            eng:"today at midnight",
            ru:"сегодня в полночь",
            hint:"/ эт мИднайт /"
            },
            {
            id:29,
            eng:"after this lesson ",
            ru:"после этого занятия",
            hint:""
            },
            {
            id:30,
            eng:"later",
            ru:"позже, позднее",
            hint:"/ лэЙтэ /"
            },
            {
            id:31,
            eng:"tomorrow",
            ru:"завтра",
            hint:""
            },
            {
            id:32,
            eng:"on Monday",
            ru:"в понедельник",
            hint:""
            },
            {
            id:33,
            eng:"on Tuesday",
            ru:"во вторник",
            hint:""
            },
            {
            id:34,
            eng:"on Wednesday",
            ru:"в среду",
            hint:"/ уЭнсдэй /"
            },
            {
            id:35,
            eng:"on Thursday",
            ru:"в четверг",
            hint:""
            },
            {
            id:36,
            eng:"on Friday",
            ru:"в пятницу",
            hint:"/ фрайдэй /"
            },
            {
            id:37,
            eng:"on Saturday",
            ru:"в субботу",
            hint:"/ сАтэдэй /"
            },
            {
            id:38,
            eng:"on Sunday",
            ru:"в воскресенье",
            hint:"/ сАндэй /"
            },
            {
            id:39,
            eng:"next month",
            ru:"в следующем месяце",
            hint:"/ манth /"
            },
            {
            id:40,
            eng:"next life",
            ru:"в следующей жизни",
            hint:"/ лайф /"
            },
            {
                id:41,
                eng:"on the first of April",
                ru:"первого апреля",
                hint:"/ эйприл /"
                },
                {
                id:42,
                eng:"on the second of January",
                ru:"второго января",
                hint:"/ джэнэри /"
                },
                {
                id:43,
                eng:"on the third of June",
                ru:"третьего июня",
                hint:"/ джун /"
                },
                {
                id:44,
                eng:"on the fourth of July",
                ru:"четвертого июля",
                hint:"/ джулай /"
                },
                {
                id:45,
                eng:"on the fifth of August",
                ru:"пятого августа",
                hint:"/ ОгЭст /"
                },
                {
                id:46,
                eng:"on the eighth of March",
                ru:"восьмого марта",
                hint:"/ мач /"
                },
            {
            id:47,
            eng:"in a couple of hours",
            ru:"через пару часов",
            hint:"/ капл ов Аурз /"
            },
            {
            id:48,
            eng:"in thirty minutes",
            ru:"через тридцать минут",
            hint:""
            },
            {
            id:49,
            eng:"in three years",
            ru:"через три года",
            hint:""
            },
            {
            id:50,
            eng:"in a couple of days",
            ru:"через пару дней",
            hint:"/ капл ов дЭйz /"
            },
            {
            id:51,
            eng:"in March",
            ru:"в марте",
            hint:""
            },
            {
            id:52,
            eng:"later tonight",
            ru:"попозже сегодня вечером",
            hint:"/ лЭйтэ тунайт /"
            },
            {
            id:53,
            eng:"in the evening",
            ru:"вечером",
            hint:"/ Ивнин /"
            },
            {
            id:54,
            eng:"in three days",
            ru:"через три дня",
            hint:""
            },
            {
            id:55,
            eng:"in a few weeks",
            ru:"через несколько недель",
            hint:"/ ин э фью уикс /"
            },
            {
            id:56,
            eng:"in a few days",
            ru:"через несколько дней",
            hint:"/ ин э фью дэйz /"
            },
            {
            id:57,
            eng:"in a few years",
            ru:"через несколько лет",
            hint:"/ ин э фью йИэz /"
            },
            {
            id:58,
            eng:"in a few months",
            ru:"через несколько месяцев",
            hint:"/ ин э фью мАнth /"
            },
            {
            id:59,
            eng:"when pigs fly",
            ru:"когда рак на горе свистнет. (идиома)",
            hint:""
            },
            {
            id:60,
            eng:"next Tuesday",
            ru:"в следующий вторник",
            hint:"/ тьЮсдэй /"
            },
            {
            id:61,
            eng:"next Saturday",
            ru:"в следующую субботу",
            hint:"/ сАтэдэй /"
            },
            {
            id:62,
            eng:"next Sunday",
            ru:"в следующее воскресенье",
            hint:"/ сАндэй /"
            },
            {
            id:63,
            eng:"next lesson",
            ru:"на следующем уроке",
            hint:""
            },
            {
            id:64,
            eng:"next meeting",
            ru:"на следующей встрече",
            hint:""
            },
            {
            id:65,
            eng:"first thing in the morning",
            ru:"первым делом с утра",
            hint:""
            },
            {
            id:66,
            eng:"in a day or two",
            ru:"через день или два",
            hint:""
            },
            {
            id:67,
            eng:"next Wednesday",
            ru:"в следующую среду",
            hint:"/ уЭнсдэй /"
            },
            {
            id:68,
            eng:"as soon as possible",
            ru:"как можно скорее",
            hint:"/ эz сун эz посбл /"
            },
            {
            id:69,
            eng:"never again",
            ru:"никогда cнова, никогда больше",
            hint:"/ нЭвэ эгЕн /"
            },
            {
            id:70,
            eng:"today",
            ru:"сегодня",
            hint:"/ тудЭй /"
            },
            {
            id:71,
            eng:"very soon",
            ru:"очень скоро",
            hint:""
            },
            {
            id:72,
            eng:"maybe later",
            ru:"может попозже",
            hint:"/ лэЙтэ /"
            },
            {
            id:73,
            eng:"in a second",
            ru:"через секунду",
            hint:""
            },
            {
            id:74,
            eng:"in a few seconds",
            ru:"через несколько секунд",
            hint:"/ ин э фью сЭкондz /"
            },
            {
            id:75,
            eng:"at midnight",
            ru:"в полночь",
            hint:""
            },
            {
            id:76,
            eng:"tomorrow at eight",
            ru:"завтра в восемь часов",
            hint:""
            },
            {
            id:77,
            eng:"in",
            ru:"через",
            hint:""
            },
            {
            id:78,
            eng:"after",
            ru:"после",
            hint:""
            },
            {
            id:79,
            eng:"about",
            ru:"примерно",
            hint:""
            },
    ],
    naughtyB: [
        {
            id:1,
            eng:"break",
            ru:"ломать",
            hint:"/ брЭйк /"
            },
            {
            id:2,
            eng:"beat",
            ru:"побить",
            hint:"/ бит /"
            },
            {
            id:3,
            eng:"become",
            ru:"становиться",
            hint:"/ бекАм /"
            },
            {
            id:4,
            eng:"begin",
            ru:"начинать",
            hint:"/ бегИн /"
            },
            {
            id:5,
            eng:"blow",
            ru:"дуть",
            hint:"/ блОу /"
            },
            {
            id:6,
            eng:"borrow",
            ru:"брать в долг",
            hint:"/ бОроу /"
            },
            {
            id:7,
            eng:"build",
            ru:"строить",
            hint:"/ билд /"
            },
            {
            id:8,
            eng:"burn",
            ru:"сжигать, гореть",
            hint:"/ бЁрн /"
            },
            {
            id:9,
            eng:"buy",
            ru:"покупать",
            hint:"/ бАй /"
            },
            {
            id:10,
            eng:"bring",
            ru:"приносить",
            hint:"/ брин /"
            },
            {
            id:11,
            eng:"be",
            ru:"быть",
            hint:"/ эм из а /"
            },
            {
            id:12,
            eng:"bite",
            ru:"кусать",
            hint:"/ бАйт /"
            },
        {
            id:101,
            eng:"broke",
            ru:"сломал, нарушил",
            hint:"/ брОУк /"
            },
            {
            id:102,
            eng:"beat",
            ru:"побил",
            hint:"/ бит /"
            },
            {
            id:103,
            eng:"became",
            ru:"стал",
            hint:"/ бекЕйм /"
            },
            {
            id:104,
            eng:"began",
            ru:"начал",
            hint:"/ бегЭн /"
            },
            {
            id:105,
            eng:"blew",
            ru:"вторая форма глагола ` дуть `",
            hint:"/ блУ /"
            },
            {
            id:106,
            eng:"borrowed",
            ru:"вторая форма глагола ` брать в долг `",
            hint:"/ бОроуд /"
            },
            {
            id:107,
            eng:"built",
            ru:"вторая форма глагола ` строить `",
            hint:"/ билт /"
            },
            {
            id:108,
            eng:"burnt",
            ru:"вторая форма глагола ` сжигать, гореть `",
            hint:"/ бёрнт /"
            },
            {
            id:109,
            eng:"bought",
            ru:"вторая форма глагола ` покупать `",
            hint:"/ бот /"
            },
            {
            id:110,
            eng:"brought",
            ru:"вторая форма глагола ` приносить `",
            hint:"/ брот /"
            },
            {
            id:111,
            eng:"we were young",
            ru:"напиши по-английски:` мы были здесь `",
            hint:"/ ви вё хиэ/"
            },
            {
            id:112,
            eng:"bit",
            ru:"вторая форма глагола ` кусать `",
            hint:"/ бит /"
            },
            {
            id:113,
            eng:"I was young",
            ru:"напиши по-английски ` я был молодой `",
            hint:"/ ай воз ян /"
            },
            {
                id:201,
                eng:"broken",
                ru:"сломанный",
                hint:"/ брОУкэн /"
                },
                {
                id:202,
                eng:"beaten",
                ru:"побитый",
                hint:"/ битн /"
                },
                {
                id:203,
                eng:"become",
                ru:"третья форма глагола ` становиться `",
                hint:"/ бекАм /"
                },
                {
                id:204,
                eng:"begun",
                ru:"третья форма глагола ` начинать `",
                hint:"/ бегАн /"
                },
                {
                id:205,
                eng:"blown",
                ru:"третья форма глагола ` дуть `",
                hint:"/ блОун /"
                },
                {
                id:206,
                eng:"borrowed",
                ru:"третья форма глагола ` брать в долг `",
                hint:"/ бОроуд /"
                },
                {
                id:207,
                eng:"built",
                ru:"третья форма глагола ` строить `",
                hint:"/ билт /"
                },
                {
                id:208,
                eng:"burnt",
                ru:"третья форма глагола ` сжигать, гореть `",
                hint:"/ бёрнт /"
                },
                {
                id:209,
                eng:"bought",
                ru:"третья форма глагола ` покупать `",
                hint:"/ бот /"
                },
                {
                id:210,
                eng:"brought",
                ru:"третья форма глагола ` приносить `",
                hint:"/ брот /"
                },
                {
                id:211,
                eng:"been",
                ru:"третья форма глагола ` быть `",
                hint:"/ бин /"
                },
                {
                id:212,
                eng:"bit",
                ru:"третья форма глагола ` кусать `",
                hint:"/ бит /"
                },
],
m12bombs: [
    {
        id:1,
        eng:"dictionary",
        ru:"словарь",
        hint:" / дИкшэнэри /"
        },
        {
        id:2,
        eng:"nose",
        ru:"нос",
        hint:" / ноуз /"
        },
        {
        id:3,
        eng:"head",
        ru:"голова",
        hint:" / хЭд /"
        },
        {
        id:4,
        eng:"hair",
        ru:"волосы",
        hint:" / хЭa /"
        },
        {
        id:5,
        eng:"lazy",
        ru:"ленивые",
        hint:" / лЭйзи /"
        },
        {
        id:6,
        eng:"eye",
        ru:"глаз",
        hint:" / ай /"
        },
        {
        id:7,
        eng:"ear",
        ru:"ухо",
        hint:" / Иа /"
        },
        {
        id:8,
        eng:"knee",
        ru:"коленка",
        hint:" / ни /"
        },
        {
        id:9,
        eng:"mouth",
        ru:"рот",
        hint:" / мауTH /"
        },
        {
        id:10,
        eng:"teeth",
        ru:"зубы",
        hint:" / тиTH /"
        },
        {
        id:11,
        eng:"find",
        ru:"находить ",
        hint:" / файнд /"
        },
        {
        id:12,
        eng:"words",
        ru:"слова",
        hint:" / вордз /"
        },
],
m5bombs: [
    {
        id:1,
        eng:"bombs",
        ru:"бомбы",
        hint:" / бомбз /"
        },
        {
        id:2,
        eng:"hands",
        ru:"кисти рук",
        hint:" / хэндз /"
        },
        {
        id:3,
        eng:"fingers",
        ru:"пальцы",
        hint:" / фингерз /"
        },
        {
        id:4,
        eng:"hair",
        ru:"волосы",
        hint:" / хЭa /"
        },
        {
        id:5,
        eng:"Vincent",
        ru:"Винсент",
        hint:" посмотри в чатике"
        },
],
tagquestions: [
    {
        id:1,
        eng:"will you?",
        ru:"Don't talk to Peter during the lesson, ____"
        },
        {
        id:2,
        eng:"will you?",
        ru:"Shut up now, ____"
        },
        {
        id:3,
        eng:"will you?",
        ru:"Don't talk to me this way, ____"
        },
        {
        id:4,
        eng:"don't I?",
        ru:"I think he's from India, ____"
        },
        {
        id:5,
        eng:"isn't he?",
        ru:"I think he's from India, ____"
        },
        {
        id:6,
        eng:"will you?",
        ru:"Don't go swimming, ____"
        },
        {
        id:7,
        eng:"shall we?",
        ru:"Let's go to swim, ____"
        },
        {
        id:8,
        eng:"shall we?",
        ru:"Let's kiss now, ____"
        },
        {
        id:9,
        eng:"aren't I?",
        ru:"I'm late, ____"
        },
        {
        id:10,
        eng:"aren't I?",
        ru:"I'm your English teacher, ____"
        },
        {
        id:11,
        eng:"aren't there?",
        ru:"There are a lot of people here, ____"
        },
        {
        id:12,
        eng:"aren't there?",
        ru:"There are some apples left, ____"
        },
        {
        id:13,
        eng:"aren't they?",
        ru:"Andy and Marc are reading comics, ____"
        },
        {
        id:14,
        eng:"aren't you?",
        ru:"You are Indian, ____"
        },
        {
        id:15,
        eng:"did she?",
        ru:"Peggy didn't use the pencil, ____"
        },
        {
        id:16,
        eng:"didn't they?",
        ru:"They had a nice weekend, ____"
        },
        {
        id:17,
        eng:"do you?",
        ru:"You don't like yoghurt, ____"
        },
        {
        id:18,
        eng:"doesn't he?",
        ru:"He sings in the bathroom, ____"
        },
        {
        id:19,
        eng:"doesn't he?",
        ru:"He sometimes reads the newspaper, ____"
        },
        {
        id:20,
        eng:"doesn't she?",
        ru:"Peggy plays volleyball, ____"
        },
        {
        id:21,
        eng:"doesn't she?",
        ru:"She has a brother, ____"
        },
        {
        id:22,
        eng:"don't they?",
        ru:"Dogs like meat, ____"
        },
        {
        id:23,
        eng:"don't they?",
        ru:"They often talk to their neighbours, ____"
        },
        {
        id:24,
        eng:"don't they?",
        ru:"Your friends enjoy swimming, ____"
        },
        {
        id:25,
        eng:"hasn't he?",
        ru:"He's been to Texas, ____"
        },
        {
        id:26,
        eng:"hasn't she?",
        ru:"Angela has ordered pizza, ____"
        },
        {
        id:27,
        eng:"hasn't she?",
        ru:"Mary has answered the teacher's question, ____"
        },
        {
        id:28,
        eng:"haven't we?",
        ru:"We've seen this film, ____"
        },
        {
        id:29,
        eng:"is he?",
        ru:"Andrew isn't sleeping, ____"
        },
        {
        id:30,
        eng:"isn't he?",
        ru:"The boy is from Turkey, ____"
        },
        {
        id:31,
        eng:"isn't it?",
        ru:"Lovely day today, ____"
        },
        {
        id:32,
        eng:"isn't it?",
        ru:"York is in England, ____"
        },
        {
        id:33,
        eng:"isn't there?",
        ru:"There's only one cloud in the sky, ____"
        },
        {
        id:34,
        eng:"shall we?",
        ru:"Let's go, ____"
        },
        {
        id:35,
        eng:"was she?",
        ru:"Sue wasn't listening, ____"
        },
        {
        id:36,
        eng:"wasn't he?",
        ru:"The teacher was late for school, ____"
        },
        {
        id:37,
        eng:"will he?",
        ru:"He'll never know, ____"
        },
        {
        id:38,
        eng:"will you?",
        ru:"Don't smoke, ____"
        },
        {
        id:39,
        eng:"will you?",
        ru:"Open the window, ____"
        },
        {
        id:40,
        eng:"won't she?",
        ru:"Sue will be 14 next week, ____"
        },
        {
        id:41,
        eng:"won't they?",
        ru:"Tom and Maria will arrive at Heathrow, ____"
        },
        {
        id:42,
        eng:"aren't I?",
        ru:"I am a little stupid, ____"
        },
        {
        id:43,
        eng:"aren't I?",
        ru:"I am smart, ____"
        },
        {
        id:44,
        eng:"aren't I?",
        ru:"I'm clever, ____"
        },
        {
        id:45,
        eng:"aren't they?",
        ru:"Pat and John are from Bristol, ____"
        },
        {
        id:46,
        eng:"aren't they?",
        ru:"They are going home from school, ____"
        },
        {
        id:47,
        eng:"can he?",
        ru:"Vincent can't speak Mongolian, ____"
        },
        {
        id:48,
        eng:"can't he?",
        ru:"He can write, ____"
        },
        {
        id:49,
        eng:"can't he?",
        ru:"Jack can write good poems, ____"
        },
        {
        id:50,
        eng:"can't she?",
        ru:"She can speak French, ____"
        },
        {
        id:51,
        eng:"could she?",
        ru:"Anne couldn't sing well, ____"
        },
        {
        id:52,
        eng:"couldn't he?",
        ru:"He could have bought a new car, ____"
        },
        {
        id:53,
        eng:"couldn't she?",
        ru:"Barbara could have helped you, ____"
        },
        {
        id:54,
        eng:"did she?",
        ru:"Mary didn't do her homework last Monday, ____"
        },
        {
        id:55,
        eng:"did she?",
        ru:"She didn't come to the shop, ____"
        },
        {
        id:56,
        eng:"did they?",
        ru:"They did not do their homework, ____"
        },
        {
        id:57,
        eng:"did they?",
        ru:"They did not go to Vienna last week, ____"
        },
        {
        id:58,
        eng:"didn't he?",
        ru:"Chris got up at seven, ____"
        },
        {
        id:59,
        eng:"didn't he?",
        ru:"Peter played handball yesterday, ____"
        },
        {
        id:60,
        eng:"didn't they?",
        ru:"They played football on Sundays, ____"
        },
        {
        id:61,
        eng:"do they?",
        ru:"John and Max don't like maths, ____"
        },
        {
        id:62,
        eng:"do they?",
        ru:"Nobody says that you are stupid, ____"
        },
        {
        id:63,
        eng:"doesn't he?",
        ru:"He likes lasagna (лазанья), ____"
        },
        {
        id:64,
        eng:"doesn't she?",
        ru:"She plays football on Sundays, ____"
        },
        {
        id:65,
        eng:"don't they?",
        ru:"They play football on Sundays, ____"
        },
        {
        id:66,
        eng:"don't we?",
        ru:"We often watch TV in the afternoon, ____"
        },
        {
        id:67,
        eng:"doesn't he?",
        ru:"He has a car, ____"
        },
        {
        id:68,
        eng:"hasn't she?",
        ru:"She has bought a new phone, ____"
        },
        {
        id:69,
        eng:"have they?",
        ru:"They haven't finished the task, ____"
        },
        {
        id:70,
        eng:"haven't they?",
        ru:"They have finished their homework, ____"
        },
        {
        id:71,
        eng:"haven't you?",
        ru:"You have cleaned your bike, ____"
        },
        {
        id:72,
        eng:"haven't you?",
        ru:"You've got a car, ____"
        },
        {
        id:73,
        eng:"isn't it?",
        ru:"It's very hot in the Sahara, ____"
        },
        {
        id:74,
        eng:"isn't she?",
        ru:"She is collecting stickers, ____"
        },
        {
        id:75,
        eng:"shall we?",
        ru:"Let's go out for a walk, ____"
        },
        {
        id:76,
        eng:"wasn't he?",
        ru:"Shakespeare was English, ____"
        },
        {
        id:77,
        eng:"weren't they?",
        ru:"Everybody was happy with the results, ____"
        },
        {
        id:78,
        eng:"won't he?",
        ru:"Kevin will come tonight, ____"
        },
        {
        id:79,
        eng:"aren't I?",
        ru:"I am the best student in the class, ___"
        },
        {
        id:80,
        eng:"will you?",
        ru:"Pass me the salt, ____"
        },
        {
        id:81,
        eng:"will you?",
        ru:"Pass me the salt, ____"
        },
        {
        id:82,
        eng:"doesn't he?",
        ru:"Russel always smokes hookah (кальян)"
        },
        {
        id:83,
        eng:"wasn't it?",
        ru:"The slide show was fantastic, ____"
        },
        {
        id:84,
        eng:"wasn't it?",
        ru:"The slide show was fantastic, ____"
        },
        {
        id:85,
        eng:"will it?",
        ru:"The sun won't shine tomorrow, ____"
        },
        {
        id:86,
        eng:"isn't there?",
        ru:"There's a fly in your soup, ____"
        },
        {
        id:87,
        eng:"mustn't we?",
        ru:"We must be at school at 8 o'clock, ____"
        },
        {
        id:88,
        eng:"isn't there?",
        ru:"There's a fly in your soup, ____"
        },
        {
        id:89,
        eng:"didn't they?",
        ru:"They used to live in New Orleans, ____"
        },
        {
        id:90,
        eng:"didn't they?",
        ru:"They used to live in New Orleans, ____"
        },
],
roblox: [
    {
        id:1,
        eng:"blue",
        ru:"синий",
        hint:""
        },
        {
        id:2,
        eng:"green",
        ru:"зелёный",
        hint:""
        },
        {
        id:3,
        eng:"yellow",
        ru:"желтый",
        hint:""
        },
        {
        id:4,
        eng:"red",
        ru:"красный",
        hint:""
        },
        {
        id:5,
        eng:"I fell",
        ru:"я упал(а)",
        hint:""
        },
        {
        id:6,
        eng:"run",
        ru:"беги",
        hint:""
        },
        {
        id:7,
        eng:"I am standing",
        ru:"я стою",
        hint:""
        },
        {
        id:8,
        eng:"I am jumping",
        ru:"я прыгаю",
        hint:""
        },
        {
        id:9,
        eng:"They are running",
        ru:"они бегут",
        hint:""
        },
        {
        id:10,
        eng:"You have to run",
        ru:"ты должен бежать",
        hint:""
        },
        {
        id:11,
        eng:"You have to jump",
        ru:"ты должен прыгнуть",
        hint:""
        },
        {
        id:12,
        eng:"He has to run",
        ru:"он должен бежать",
        hint:""
        },
        {
        id:13,
        eng:"He has to jump",
        ru:"он должен прыгнуть",
        hint:""
        },
        {
        id:14,
        eng:"left",
        ru:"налево",
        hint:""
        },
        {
        id:15,
        eng:"I have to play",
        ru:"я должен играть",
        hint:""
        },
        {
        id:16,
        eng:"We have to play",
        ru:"мы должны играть",
        hint:""
        },
        {
        id:17,
        eng:"She has to play",
        ru:"она должна играть",
        hint:""
        },
        {
        id:18,
        eng:"press black",
        ru:"нажми на черный",
        hint:""
        },
        {
        id:19,
        eng:"press green",
        ru:"нажми на зеленый",
        hint:""
        },
        {
        id:20,
        eng:"press pink",
        ru:"нажми на розовый",
        hint:""
        },
        {
        id:21,
        eng:"fast",
        ru:"быстро",
        hint:""
        },
        {
        id:22,
        eng:"slow",
        ru:"медленно",
        hint:""
        },
        {
        id:23,
        eng:"wait",
        ru:"ждать",
        hint:""
        },
        {
        id:24,
        eng:"I am waiting",
        ru:"я жду",
        hint:""
        },
        {
        id:25,
        eng:"They",
        ru:"они",
        hint:""
        },
        {
        id:26,
        eng:"We",
        ru:"мы",
        hint:""
        },
        {
        id:27,
        eng:"Roblox",
        ru:"Роблокс",
        hint:""
        },
        {
        id:28,
        eng:"right",
        ru:"направо",
        hint:""
        },
],
grabit: [
    {
        id:1,
        eng:"Treasure hunt",
        ru:"охота за сокровищем, кладом",
        hint:" / трЭжэ хант /"
        },
        {
        id:2,
        eng:"Glasses",
        ru:"очки",
        hint:" / глЭсиз /"
        },
        {
        id:3,
        eng:"ID",
        ru:"удостоверение личности",
        hint:" / ай ди /"
        },
        {
        id:4,
        eng:"A candy",
        ru:"конфетка",
        hint:""
        },
        {
        id:5,
        eng:"Some cash",
        ru:"немного наличных денег",
        hint:""
        },
        {
        id:6,
        eng:"A lipstick",
        ru:"помада губная",
        hint:""
        },
        {
        id:7,
        eng:"A receipt",
        ru:"квитанция",
        hint:" / рисИт /"
        },
        {
        id:8,
        eng:"Clean socks",
        ru:"чистые носки",
        hint:""
        },
        {
        id:9,
        eng:"A photo of a friend",
        ru:"фотография друга",
        hint:""
        },
        {
        id:10,
        eng:"A digital photo",
        ru:"цифровое фото",
        hint:" / диджитал /"
        },
        {
        id:11,
        eng:"A comb",
        ru:"расческа",
        hint:" / кОУм /"
        },
        {
        id:12,
        eng:"A chewing gum",
        ru:"жевачка",
        hint:" / чюин гам /"
        },
        {
        id:13,
        eng:"A handkerchief",
        ru:"носовой платочек",
        hint:" / хЭнкэрчиф /"
        },
        {
        id:14,
        eng:"Wet wipes",
        ru:"влажные салфетки",
        hint:" / уэт уайпс /"
        },
        {
        id:15,
        eng:"Tissues",
        ru:"бумажные платочки, салфетки",
        hint:" / тИшьюз /"
        },
        {
        id:16,
        eng:"A lighter or matches",
        ru:"зажигалка или спички",
        hint:" / э лАйтэ /"
        },
        {
        id:17,
        eng:"A contact lens case",
        ru:"контейнер для линз",
        hint:""
        },
        {
        id:18,
        eng:"A planner or a diary",
        ru:"ежедневник",
        hint:" / дАйэри /"
        },
        {
        id:19,
        eng:"A fork and a knife",
        ru:"вилка и нож",
        hint:" / нАйф /"
        },
        {
        id:20,
        eng:"A gun",
        ru:"оружие огнестрельное",
        hint:" / гАн /"
        },
        {
        id:21,
        eng:"A toy",
        ru:"игрушка",
        hint:""
        },
        {
        id:22,
        eng:"A pet",
        ru:"домашнее животное",
        hint:" / э пЭт /"
        },
        {
        id:23,
        eng:"An airplane",
        ru:"самолет",
        hint:""
        },
        {
        id:24,
        eng:"A strange object",
        ru:"странный объект",
        hint:" / обджэкт /"
        },
        {
        id:25,
        eng:"A pocket mirror",
        ru:"карманное зеркальце",
        hint:" / мИрэ /"
        },
        {
        id:26,
        eng:"Some pills",
        ru:"какие-то таблетки",
        hint:" / пилз /"
        },
        {
        id:27,
        eng:"Handcuffs",
        ru:"наручники",
        hint:" / хЭнкафс /"
        },
        {
        id:28,
        eng:"A musical instrument",
        ru:"музыкальный инструмент",
        hint:""
        },
        {
        id:29,
        eng:"Batteries",
        ru:"батарейки",
        hint:" / бЭттэриз /"
        },
        {
        id:30,
        eng:"A sim card",
        ru:"сим карта",
        hint:" / э сим кад /"
        },
],
}
export default allWordsForGameTypeOrWrite
