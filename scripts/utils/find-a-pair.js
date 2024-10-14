// чтобы удалить пустые строки нужно ввести в CTRL+F или CTRL R   
// 0001 добавляем константу с данными - с массивом // Здесь слова для игры Find a pair
const allCardsGameFindAPair = {
    // ^\s*$\n
    irregularVerbsV1LtterALL: [
        {
            id:1,
            eng:"ломать, нарушать",
            ru:"break / брЭйк /",
            
            },
            {
            id:2,
            eng:"побить, бить",
            ru:"beat / бит /",
            
            },
            {
            id:3,
            eng:"становиться",
            ru:"become / бекАм /",
            
            },
            {
            id:4,
            eng:"начинать",
            ru:"begin / бегИн /",
            
            },
            {
            id:5,
            eng:"дуть",
            ru:"blow / блОу /",
            
            },
            {
            id:6,
            eng:"строить",
            ru:"build / билд /",
            
            },
            {
            id:7,
            eng:"сжигать, гореть",
            ru:"burn / бЁрн /",
            
            },
            {
            id:8,
            eng:"покупать",
            ru:"buy / бАй /",
            
            },
            {
            id:9,
            eng:"приносить",
            ru:"bring / брин /",
            
            },
            {
            id:10,
            eng:"приходить",
            ru:"come / кАм /",
            
            },
            {
            id:11,
            eng:"выбирать",
            ru:"choose / чУз /",
            
            },
            {
            id:12,
            eng:"ловить",
            ru:"catch / кЭч /",
            
            },
            {
            id:13,
            eng:"ползать",
            ru:"creep / крИп /",
            
            },
            {
            id:14,
            eng:"стоить",
            ru:"cost / кост /",
            
            },
            {
            id:15,
            eng:"резать",
            ru:"cut / кАт /",
            
            },
            {
            id:16,
            eng:"иметь дела",
            ru:"deal / дИл /",
            
            },
            {
            id:17,
            eng:"копать",
            ru:"dig / диГ /",
            
            },
            {
            id:18,
            eng:"делать",
            ru:"do / ду /",
            
            },
            {
            id:19,
            eng:"водить",
            ru:"drive / дрАйв /",
            
            },
            {
            id:20,
            eng:"рисовать",
            ru:"draw / дрО /",
            
            },
            {
            id:21,
            eng:"пить",
            ru:"drink / дринк /",
            
            },
            {
            id:22,
            eng:"кушать",
            ru:"eat / ит /",
            
            },
            {
            id:23,
            eng:"падать",
            ru:"fall / фол /",
            
            },
            {
            id:24,
            eng:"кормить",
            ru:"feed / фиД /",
            
            },
            {
            id:25,
            eng:"чувствовать",
            ru:"feel / фил /",
            
            },
            {
            id:26,
            eng:"сражаться",
            ru:"fight / фАйт /",
            
            },
            {
            id:27,
            eng:"находить",
            ru:"find / фАйнд /",
            
            },
            {
            id:28,
            eng:"летать",
            ru:"fly / флАй /",
            
            },
            {
            id:29,
            eng:"запрещать",
            ru:"forbid / фобИд /",
            
            },
            {
            id:30,
            eng:"забывать",
            ru:"forget / фогОт /",
            
            },
            {
            id:31,
            eng:"прощать",
            ru:"forgive / фогИв /",
            
            },
            {
            id:32,
            eng:"замерзать",
            ru:"freeze / фриз /",
            
            },
            {
            id:33,
            eng:"расти",
            ru:"grow / грОу /",
            
            },
            {
            id:34,
            eng:"получать",
            ru:"get / гет /",
            
            },
            {
            id:35,
            eng:"давать",
            ru:"give / гив /",
            
            },
            {
            id:36,
            eng:"ходить",
            ru:"go / гОУ /",
            
            },
            {
            id:37,
            eng:"иметь",
            ru:"have / хэв /",
            
            },
            {
            id:38,
            eng:"слышать",
            ru:"hear / хИэ /",
            
            },
            {
            id:39,
            eng:"прятать",
            ru:"hide / хайд /",
            
            },
            {
            id:40,
            eng:"ударять",
            ru:"hit / хит /",
            
            },
            {
            id:41,
            eng:"причинять боль",
            ru:"hurt / хЁрт /",
            
            },
            {
            id:42,
            eng:"держать",
            ru:"hold / хОулд /",
            
            },
            {
            id:43,
            eng:"хранить",
            ru:"keep / кип /",
            
            },
            {
            id:44,
            eng:"знать",
            ru:"know / нОу /",
            
            },
            {
            id:45,
            eng:"изучать",
            ru:"learn / лЁрн /",
            
            },
            {
            id:46,
            eng:"покидать",
            ru:"leave / лив /",
            
            },
            {
            id:47,
            eng:"позволять",
            ru:"let / лЭт /",
            
            },
            {
            id:48,
            eng:"терять",
            ru:"lose / лУз /",
            
            },
            {
            id:49,
            eng:"лежать",
            ru:"lie / лай /",
            
            },
            {
            id:50,
            eng:"создавать",
            ru:"make / мЭйк /",
            
            },
            {
            id:51,
            eng:"иметь ввиду, означать",
            ru:"mean / мИн /",
            
            },
            {
            id:52,
            eng:"встречать(ся)",
            ru:"meet / мит /",
            
            },
            {
            id:53,
            eng:"платить",
            ru:"pay / пЭй /",
            
            },
            {
            id:54,
            eng:"класть",
            ru:"put / пУт /",
            
            },
            {
            id:55,
            eng:"читать",
            ru:"read / рИд /",
            
            },
            {
            id:56,
            eng:"ездить верхом",
            ru:"ride / рАйд /",
            
            },
            {
            id:57,
            eng:"бегать",
            ru:"run / рАн /",
            
            },
            {
            id:58,
            eng:"сказать, произнести",
            ru:"say / сЭй /",
            
            },
            {
            id:59,
            eng:"увидеть",
            ru:"see / си /",
            
            },
            {
            id:60,
            eng:"продавать",
            ru:"sell / сЭл /",
            
            },
            {
            id:61,
            eng:"отправлять",
            ru:"send / сэнД /",
            
            },
            {
            id:62,
            eng:"трясти",
            ru:"shake / шЭйк /",
            
            },
            {
            id:63,
            eng:"стрелять",
            ru:"shoot / шУт /",
            
            },
            {
            id:64,
            eng:"петь",
            ru:"sing / сИн /",
            
            },
            {
            id:65,
            eng:"сидеть",
            ru:"sit / сит /",
            
            },
            {
            id:66,
            eng:"спать",
            ru:"sleep / слИп /",
            
            },
            {
            id:67,
            eng:"разговаривать",
            ru:"speak / спИк /",
            
            },
            {
            id:68,
            eng:"тратить",
            ru:"spend / спЭнд /",
            
            },
            {
            id:69,
            eng:"встать, стоять",
            ru:"stand / стЭнд /",
            
            },
            {
            id:70,
            eng:"воровать",
            ru:"steal / стИл /",
            
            },
            {
            id:71,
            eng:"подметать",
            ru:"sweep / свип /",
            
            },
            {
            id:72,
            eng:"плавать",
            ru:"swim / свим /",
            
            },
            {
            id:73,
            eng:"брать",
            ru:"take / тЭйк /",
            
            },
            {
            id:74,
            eng:"обучать, учить кого-то",
            ru:"teach / тИч /",
            
            },
            {
            id:75,
            eng:"рассказывать",
            ru:"tell / тЭл /",
            
            },
            {
            id:76,
            eng:"думать",
            ru:"think / thЫНК /",
            
            },
            {
            id:77,
            eng:"бросать",
            ru:"throw / thрОу /",
            
            },
            {
            id:78,
            eng:"понимать",
            ru:"understand / андэстЭнд /",
            
            },
            {
            id:79,
            eng:"просыпаться",
            ru:"wake up / уЭйк ап /",
            
            },
            {
            id:80,
            eng:"носить одежду",
            ru:"wear / уЭа /",
            
            },
            {
            id:81,
            eng:"писАть",
            ru:"write / рАйт /",
            
            },
            {
            id:82,
            eng:"выигрывать",
            ru:"win / уИн /",
            
            },
    ],
    irregularVerbsV1LetterB: [
        {
            id:1,
            eng:"ломать, нарушать",
            ru:"break / брЭйк /",
            
            },
            {
            id:2,
            eng:"побить, бить",
            ru:"beat / бит /",
            
            },
            {
            id:3,
            eng:"становиться",
            ru:"become / бекАм /",
            
            },
            {
            id:4,
            eng:"начинать",
            ru:"begin / бегИн /",
            
            },
            {
            id:5,
            eng:"дуть",
            ru:"blow / блОу /",
            
            },
            {
            id:6,
            eng:"строить",
            ru:"build / билд /",
            
            },
            {
            id:7,
            eng:"сжигать, гореть",
            ru:"burn / бЁрн /",
            
            },
            {
            id:8,
            eng:"покупать",
            ru:"buy / бАй /",
            
            },
            {
            id:9,
            eng:"приносить",
            ru:"bring / брин /",
            
            },
           
    ],
    abcde: [
        {
            id:201,
            eng:"A",
            ru:"/ эй /",
            hint:""
            },
            {
            id:202,
            eng:"C",
            ru:"/ си /",
            hint:""
            },
            {
            id:203,
            eng:"E",
            ru:"/ и /",
            hint:""
            },
            {
            id:204,
            eng:"G",
            ru:"/ джи /",
            hint:""
            },
            {
            id:205,
            eng:"H",
            ru:"/ эйч /",
            hint:""
            },
            {
            id:206,
            eng:"I",
            ru:"/ ай /",
            hint:""
            },
            {
            id:207,
            eng:"J",
            ru:"/ джэй /",
            hint:""
            },
            {
            id:208,
            eng:"K",
            ru:"/ КЕЙ /",
            hint:""
            },
            {
            id:209,
            eng:"O",
            ru:"/ ОУ /",
            hint:""
            },
            {
            id:210,
            eng:"Q",
            ru:"/ КЬЮ /",
            hint:""
            },
            {
            id:211,
            eng:"R",
            ru:"/ ар /",
            hint:""
            },
            {
            id:212,
            eng:"S",
            ru:"/ эс /",
            hint:""
            },
            {
            id:213,
            eng:"U",
            ru:"/ ю /",
            hint:""
            },
            {
            id:214,
            eng:"V",
            ru:"/ ви /",
            hint:""
            },
            {
            id:215,
            eng:"W",
            ru:"/ дабл ю /",
            hint:""
            },
            {
            id:216,
            eng:"X",
            ru:"/ Экс /",
            hint:""
            },
            {
            id:217,
            eng:"Y",
            ru:"/ УАЙ /",
            hint:""
            },
            {
            id:218,
            eng:" @ ",
            ru:"/ эт /",
            hint:""
            },
    ],
    suchSo: [
        {
            id:1,
            eng:"so much",
            ru:"так много + НЕисчислимое существительное",
            },
            {
            id:2,
            eng:"so many",
            ru:"так много + исчислимое существительное",
            },
            {
            id:3,
            eng:"so little",
            ru:"так мало + НЕисчислимое существительное",
            },
            {
            id:4,
            eng:"so few",
            ru:"так мало + исчислимое существительное",
            },
            {
            id:5,
            eng:"such",
            ru:"такой + существительное",
            },
            {
            id:6,
            eng:"so",
            ru:"такой + прилагательное",
            },
            {
            id:7,
            eng:"so long",
            ru:"так долго такой длинный",
            },
            {
            id:8,
            eng:"it's so simple it's so easy",
            ru:"так просто так легко",
            },
            {
            id:9,
            eng:"it's so hard it's so difficult",
            ru:"так сложно так трудно",
            },
            {
            id:10,
            eng:"such a long day",
            ru:"такой длинный день",
            },
            {
            id:11,
            eng:"this teacher is so good",
            ru:"этот учитель такой хороший",
            },
            {
            id:12,
            eng:"this is such a good teacher",
            ru:"это такой хороший учитель",
            },
    ],
    m12bombs: [
        {
            id:1,
            eng:"pens",
            ru:"ручки",
            },
            {
            id:2,
            eng:"notebook / нОутбук /",
            ru:"тетрадь",
            },
            {
            id:3,
            eng:"Vincent",
            ru:"училка",
            },
            {
            id:4,
            eng:"eye / ай /",
            ru:"глаз",
            },
            {
            id:5,
            eng:"head / хэд /",
            ru:"голова",
            },
            {
            id:6,
            eng:"hand / хэнд /",
            ru:"кисть руки",
            },
            {
            id:7,
            eng:"knee / ни /",
            ru:"коленка",
            },
            {
            id:8,
            eng:"hair / хЭа /",
            ru:"волосы",
            },
            {
            id:9,
            eng:"ear / Иа /",
            ru:"ухо",
            },
            {
            id:10,
            eng:"leg / лэг /",
            ru:"нога",
            },
            {
            id:11,
            eng:"foot / фут /",
            ru:"стопа, ступня",
            },
    ],
    digits1: [
        {
            id:1,
            eng:"zero /зИроу/",
            ru:"O"
            },
            {
            id:2,
            eng:"one /уан/",
            ru:"1"
            },
            {
            id:3,
            eng:"two /ту/",
            ru:"2"
            },
            {
            id:4,
            eng:"three / межзубный звук /",
            ru:"3"
            },
            {
            id:5,
            eng:"four /фо/",
            ru:"4"
            },
            {
            id:6,
            eng:"five /фАйв/",
            ru:"5"
            },
            {
            id:7,
            eng:"six /сыкс/",
            ru:"6"
            },
            {
            id:8,
            eng:"seven /сэвн/",
            ru:"7"
            },
            {
            id:9,
            eng:"eight /эйт/",
            ru:"8"
            },
            {
            id:10,
            eng:"nine /найн/",
            ru:"9"
            },
            {
            id:11,
            eng:"ten /тэн/",
            ru:"10"
            },
            {
            id:12,
            eng:"digits /дИджитс/",
            ru:"цифры"
            },
    ],
    m001m: [
        {
            id:1,
            eng:"I / ай /",
            ru:"я",
            },
            {
            id:2,
            eng:"you / ю /",
            ru:"ты или вы",
            },
            {
            id:3,
            eng:"we / уи /",
            ru:"мы",
            },
            {
            id:4,
            eng:"they / дэй /",
            ru:"они",
            },
            {
            id:5,
            eng:"he / хи /",
            ru:"он",
            },
            {
            id:6,
            eng:"she / щи /",
            ru:"она",
            },
            {
            id:7,
            eng:"it / ит /",
            ru:"оно или это",
            },
            {
            id:8,
            eng:"pets / пэтс /",
            ru:"питомцы",
            },
            {
            id:9,
            eng:"collect / колЭкт /",
            ru:"собирать или коллекционировать",
            },
            {
            id:10,
            eng:"collection / колЭкшэн /",
            ru:"коллекция",
            },
            {
            id:11,
            eng:"yet / йет /",
            ru:"пока что",
            },
            {
            id:12,
            eng:"my / май /",
            ru:"мой , моё моя , мои",
            },
    ],
    professions1: [
        {
            id:1,
            eng:"teachers / тичерз /",
            ru:"учителя",
            },
            {
            id:2,
            eng:"students / стьюдэнтся /",
            ru:"учащиеся",
            },
            {
            id:3,
            eng:"readers / рИдэрз /",
            ru:"читатели",
            },
            {
            id:4,
            eng:"writers / райтэрз /",
            ru:"писатели",
            },
            {
            id:5,
            eng:"dancers / дэнсэрз /",
            ru:"танцоры",
            },
            {
            id:6,
            eng:"killers / килэрз /",
            ru:"убийцы",
            },
            {
            id:7,
            eng:"robbers / роббэрз /",
            ru:"грабители",
            },
            {
            id:8,
            eng:"drivers / дрАйвэрз /",
            ru:"водители",
            },
            {
            id:9,
            eng:"singers / сИнгэрз /",
            ru:"певцы",
            },
            {
            id:10,
            eng:"builders / бИлдэрз /",
            ru:"строители",
            },
            {
            id:11,
            eng:"sportsmen / спОртсмен /",
            ru:"спортсмены",
            },
            {
            id:12,
            eng:"runners / раннэрз /",
            ru:"бегуны",
            },
            {
            id:13,
            eng:"jumpers / джАмпэрз /",
            ru:"прыгуны",
            },
            {
            id:14,
            eng:"swimmers / свиммэрз /",
            ru:"пловцы (плаватели)",
            },
            {
            id:15,
            eng:"managers / мЭнэджэрз /",
            ru:"менеджеры",
            },
    ],
    first1lesson: [
        {
            id:1,
            eng:"My collection is not very big yet / йет /",
            ru:"моя коллекция не очень большая пока что",
            },
            {
            id:2,
            eng:"any object / эни Обджэкт /",
            ru:"любой объект",
            },
            {
            id:3,
            eng:"pens / пэнz /",
            ru:"ручки",
            },
            {
            id:4,
            eng:"screen / скрин /",
            ru:"экран",
            },
            {
            id:5,
            eng:"buttons / бАтэнz /",
            ru:"кнопки",
            },
            {
            id:6,
            eng:"headphones / хЭдфоунз /",
            ru:"наушники",
            },
            {
            id:7,
            eng:"achievements / эчИвмэнтс /",
            ru:"достижения",
            },
            {
            id:8,
            eng:"mission / мишн /",
            ru:"миссия",
            },
            {
            id:9,
            eng:"everybody / Эврибади /",
            ru:"каждый, все",
            },
            {
            id:10,
            eng:"pets / пэтс /",
            ru:"питомцы, домашние животные",
            },
            {
            id:11,
            eng:"I am crazy about / крэйзи эбаут /",
            ru:"я схожу с ума по, я без ума от",
            },
            {
            id:12,
            eng:"hobby / хобби /",
            ru:"увлечение, хобби",
            },
            {
            id:13,
            eng:"collect / коллЭкт /",
            ru:"коллекционировать",
            },
            {
            id:14,
            eng:"slowly / слОули /",
            ru:"медленно",
            },
            {
            id:15,
            eng:"I didn't get it / диднт гет ит /",
            ru:"я не уловил, до меня не дошло",
            },
            {
            id:16,
            eng:"say it again / сэй ит эгЕн /",
            ru:"скажите это снова",
            },
            {
            id:17,
            eng:"spell / спЭл /",
            ru:"произнесите по буквам",
            },
            {
            id:18,
            eng:"repeat one more time / уАн мо тайм /",
            ru:"повторите еще один раз",
            },
            {
            id:19,
            eng:"three / межзубный звук /",
            ru:"три",
            },
            {
            id:20,
            eng:"eight / эйт /",
            ru:"восемь",
            },
            {
            id:21,
            eng:"think / межзубный звук /",
            ru:"думать",
            },
            {
            id:22,
            eng:"any animal / эни Энимал /",
            ru:"любое животное",
            },
            {
            id:23,
            eng:"any food / эни фуД /",
            ru:"любая еда",
            },
            {
            id:24,
            eng:"find / файнд /",
            ru:"находить, искать",
            },
    ],
    bodyA1: [
        {
            id:1,
            eng:"a head / э хэд /",
            ru:"голова",
            },
            {
            id:2,
            eng:"an ear / эн иэ /",
            ru:"ухо",
            },
            {
            id:3,
            eng:"hair / хЭа /",
            ru:"волосы",
            },
            {
            id:4,
            eng:"an eye / эн Ай /",
            ru:"глаз",
            },
            {
            id:5,
            eng:"a chin / чин /",
            ru:"подбородок",
            },
            {
            id:6,
            eng:"a nose / э ноуз /",
            ru:"нос",
            },
            {
            id:7,
            eng:"a neck / э нэк /",
            ru:"шея",
            },
            {
            id:8,
            eng:"a mouth / ау /",
            ru:"рот",
            },
            {
            id:9,
            eng:"lips / липс /",
            ru:"губы",
            },
            {
            id:10,
            eng:"teeth / тиTH /",
            ru:"зубы",
            },
            {
            id:11,
            eng:"a tooth / туTH /",
            ru:"зуб",
            },
            {
            id:12,
            eng:"eyebrows / ай брАуз /",
            ru:"брови",
            },
            {
            id:13,
            eng:"a beard / э бИЕд /",
            ru:"борода",
            },
            {
            id:14,
            eng:"a moustache / э мАсташ /",
            ru:"усы",
            },
            {
            id:15,
            eng:"freckles / фрЭклз /",
            ru:"веснушки",
            },
            {
            id:16,
            eng:"cheeks / чикс /",
            ru:"щёки",
            },
            {
            id:17,
            eng:"wrinkles / ринклз /",
            ru:"морщинки, cкладки",
            },
            {
            id:18,
            eng:"shoulders / шОулдэрз /",
            ru:"плечи",
            },
            {
            id:19,
            eng:"arms / амз /",
            ru:"руки ( целиком )",
            },
            {
            id:20,
            eng:"an arm / эн арм /",
            ru:"рука (целиком)",
            },
            {
            id:21,
            eng:"a chest / чест /",
            ru:"грудная клетка",
            },
            {
            id:22,
            eng:"hands / хэндз /",
            ru:"кисти рук",
            },
            {
            id:23,
            eng:"a belly / э бЭли /",
            ru:"пузико",
            },
            {
            id:24,
            eng:"a tummy / тамми /",
            ru:"животик",
            },
            {
            id:25,
            eng:"fingers / фИнГерз /",
            ru:"пальцы на руках",
            },
            {
            id:26,
            eng:"a toe / э тОу /",
            ru:"палец на ноге",
            },
            {
            id:27,
            eng:"a bottom / э бОттом /",
            ru:"попа",
            },
            {
            id:28,
            eng:"body parts / боди партс /",
            ru:"части тела",
            },
            {
            id:29,
            eng:"a knee / э ни /",
            ru:"колено",
            },
            {
            id:30,
            eng:"knees / низ /",
            ru:"колени",
            },
            {
            id:31,
            eng:"legs / лэгз /",
            ru:"ноги (целиком)",
            },
            {
            id:32,
            eng:"a foot / фут /",
            ru:"ступня, стопа",
            },
            {
            id:33,
            eng:"toes / тоУз /",
            ru:"пальцы на ногах",
            },
            {
            id:34,
            eng:"feet / фит /",
            ru:"ступни, стопы",
            },
            {
            id:35,
            eng:"a leg / э лэг /",
            ru:"нога (целиком)",
            },
    ],
    devmode0: [
        {
            id: 1,
            eng: "the first / фест /",
            ru: "первый"
        },
        {
            id: 2,
            eng: "the second ",
            ru: "второй"
        },
        {
            id: 3,
            eng: "the third ",
            ru: "третий"
        },
        {
            id: 4,
            eng: "the fourth ",
            ru: "четвертый"
        },
        {
            id: 5,
            eng: "the fifth / фифth /",
            ru: "пятый"
        },
        {
            id: 6,
            eng: "the sixth ",
            ru: "шестой"
        },
        {
            id: 7,
            eng: "the seventh ",
            ru: "седьмой"
        },
    ],
    jobs01: [
        {
            id:1,
            eng:"A dentist / дЭнтист /",
            ru:"Зубной врач",
            },
            {
            id:2,
            eng:"A singer / сИнгэ /",
            ru:"Певец",
            },
            {
            id:3,
            eng:"A chef / шЭф /",
            ru:"Повар",
            },
            {
            id:4,
            eng:"A baker / бЭйкэр /",
            ru:"Пекарь",
            },
            {
            id:5,
            eng:"An actor / Эктор /",
            ru:"Актер",
            },
            {
            id:6,
            eng:"A tailor / тЭлор /",
            ru:"Портной",
            },
            {
            id:7,
            eng:"A teacher / тИчэ /",
            ru:"Учитель",
            },
            {
            id:8,
            eng:"A magician / мэджИшэн /",
            ru:"Фокусник",
            },
            {
            id:9,
            eng:"An artist / Атист /",
            ru:"Художник",
            },
            {
            id:10,
            eng:"A hairdresser / хЭЭдрэсэ /",
            ru:"Парикмахер",
            },
            {
            id:11,
            eng:"An HR agent / Эйч Ар Эйджэнт /",
            ru:"HR агент",
            },
            {
            id:12,
            eng:"A nurse / нЁс /",
            ru:"Медсестра",
            },
            {
            id:13,
            eng:"A farmer / фАмэ /",
            ru:"Фермер",
            },
            {
            id:14,
            eng:"A florist / лОрист /",
            ru:"Флорист",
            },
            {
            id:15,
            eng:"A plumber / плАмэ /",
            ru:"Сантехник",
            },
            {
            id:16,
            eng:"A doctor / дОктэ /",
            ru:"Доктор",
            },
            {
            id:17,
            eng:"A police officer / полИс /",
            ru:"Полицейский",
            },
            {
            id:18,
            eng:"A detective / дэтЭктив /",
            ru:"Детектив",
            },
            {
            id:19,
            eng:"A dancer / дЭнсэ /",
            ru:"Танцор",
            },
            {
            id:20,
            eng:"An agent / Эйджэнт /",
            ru:"Агент",
            },
            {
            id:21,
            eng:"A big boss",
            ru:"Большой начальник",
            },
            {
            id:22,
            eng:"A lazy ass / лЭйзи Эс /",
            ru:"Ленивая жопка",
            },
            {
            id:23,
            eng:"A baby / бЭйби /",
            ru:"Ребёнок",
            },
            {
            id:24,
            eng:"An electrician / электрИшэн /",
            ru:"Электрик",
            },
            {
            id:25,
            eng:"A writer / рАйтэр /",
            ru:"Писатель",
            },
            {
            id:26,
            eng:"A reader / рИдэр /",
            ru:"Читатель",
            },
            {
            id:27,
            eng:"A journalist / джОнэлист /",
            ru:"Журналист",
            },
            {
            id:28,
            eng:"An IT specialist / АйТи спЭшэлист /",
            ru:"Айтишник",
            },
            {
            id:29,
            eng:"A designer / дизАйнэр /",
            ru:"Дизайнер",
            },
            {
            id:30,
            eng:"A driver / дрАйвэ /",
            ru:"Водитель",
            },
            {
            id:31,
            eng:"An accountant / экАунтэнт /",
            ru:"Бухгалтер",
            },
            {
            id:32,
            eng:"A strip dancer / стрип дэнсэ /",
            ru:"стриптизр",
            },
            {
            id:33,
            eng:"A builder / бИлдэр /",
            ru:"строитель",
            },
            {
            id:34,
            eng:"A body builder / бОди бИлдэ /",
            ru:"бодибилдер",
            },
    ],
    grabit: [
        {
            id:1,
            eng:"Treasure hunt / трЭжэ хант /",
            ru:"охота за сокровищем, кладом",
            hint:" / трЭжэ хант /"
            },
            {
            id:2,
            eng:"Glasses / глЭсиз /",
            ru:"очки",
            hint:" / глЭсиз /"
            },
            {
            id:3,
            eng:"ID / ай ди /",
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
            eng:"A receipt / рисИт /",
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
            eng:"A digital photo / диджитал /",
            ru:"цифровое фото",
            hint:" / диджитал /"
            },
            {
            id:11,
            eng:"A comb / кОУм /",
            ru:"расческа",
            hint:" / кОУм /"
            },
            {
            id:12,
            eng:"A chewing gum / чюин гам /",
            ru:"жевачка",
            hint:" / чюин гам /"
            },
            {
            id:13,
            eng:"A handkerchief / хЭнкэрчиф /",
            ru:"носовой платочек",
            hint:" / хЭнкэрчиф /"
            },
            {
            id:14,
            eng:"Wet wipes / уэт уайпс /",
            ru:"влажные салфетки",
            hint:" / уэт уайпс /"
            },
            {
            id:15,
            eng:"Tissues / тИшьюз /",
            ru:"бумажные платочки, салфетки",
            hint:" / тИшьюз /"
            },
            {
            id:16,
            eng:"A lighter or matches / э лАйтэ /",
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
            eng:"A planner or a diary / дАйэри /",
            ru:"ежедневник",
            hint:" / дАйэри /"
            },
            {
            id:19,
            eng:"A fork and a knife / нАйф /",
            ru:"вилка и нож",
            hint:" / нАйф /"
            },
            {
            id:20,
            eng:"A gun / гАн /",
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
            eng:"A pet / э пЭт /",
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
            eng:"A strange object / обджэкт /",
            ru:"странный объект",
            hint:" / обджэкт /"
            },
            {
            id:25,
            eng:"A pocket mirror / мИрэ /",
            ru:"карманное зеркальце",
            hint:" / мИрэ /"
            },
            {
            id:26,
            eng:"Some pills / пилз /",
            ru:"какие-то таблетки",
            hint:" / пилз /"
            },
            {
            id:27,
            eng:"Handcuffs / хЭнкафс /",
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
            eng:"Batteries / бЭттэриз /",
            ru:"батарейки",
            hint:" / бЭттэриз /"
            },
            {
            id:30,
            eng:"A sim card / э сим кад /",
            ru:"сим карта",
            hint:" / э сим кад /"
            },
    ],
    allCountriesAndCapitals: [
        {
            id:1,
            eng:" / æb'kɑːzɪə / Abkhazia",
            ru:" / su'huːm(ɪ) / Sukhum",
            },
            {
            id:2,
            eng:" / æfˌɡænɪˈstɑːn / Afghanistan",
            ru:" / ˈkɑːbʊl / Kabul",
            },
            {
            id:3,
            eng:" / ælˈbeɪniə / Albania",
            ru:" / tɪˈrɑːnə / Tirana",
            },
            {
            id:4,
            eng:" / ælˈdʒɪəriə / Algeria",
            ru:" / ælˈdʒɪəz / Algiers",
            },
            {
            id:5,
            eng:" / ˌɑːdʒənˈtiːnə / Argentina",
            ru:" / ˈbweɪnosˈeriz / Buenos Aires",
            },
            {
            id:6,
            eng:" / ɑːˈmiːniə / Armenia",
            ru:" / ˌjerɪˈvɑːn / Yerevan",
            },
            {
            id:7,
            eng:" / ɒˈstreɪliə / Australia",
            ru:" / ˈkænbərə / Canberra",
            },
            {
            id:8,
            eng:" / ˈɒstriə / Austria",
            ru:" / vɪˈenə / Vienna",
            },
            {
            id:9,
            eng:" / ˌɑːzərbaɪˈdʒɑːn / Azerbaijan",
            ru:" / ˈbækuː / Baku",
            },
            {
            id:10,
            eng:" / bəˈhɑːməz / Bahamas",
            ru:" / ˈnæsɒ / Nassau",
            },
            {
            id:11,
            eng:" / bɑːˈreɪn / Bahrain",
            ru:" / ˈmænəmə / Manama",
            },
            {
            id:12,
            eng:" / ˌbæŋɡləˈdeʃ / Bangladesh",
            ru:" / ˈdækə / Dacca",
            },
            {
            id:13,
            eng:" / belə'rus / Belarus",
            ru:" / mɪnsk / Minsk",
            },
            {
            id:14,
            eng:" / ˈbeldʒəm / Belgium",
            ru:" / ˈbrʌsəlz / Brussels",
            },
            {
            id:15,
            eng:" / bəˈmjuːdəˈaɪlən / Bermuda Islands",
            ru:" / ˈhæmɪltən / Hamilton",
            },
            {
            id:16,
            eng:" / bəˈlɪvɪə / Bolivia",
            ru:" / lɑːˈpɑːz / La Paz",
            },
            {
            id:17,
            eng:" / brəˈzɪl / Brazil",
            ru:" / brəˈzɪlɪə / Brasilia",
            },
            {
            id:18,
            eng:" / bʌlˈɡeərɪə / Bulgaria",
            ru:" / ˈsəʊfɪə / Sofia",
            },
            {
            id:19,
            eng:" / bʊˈrʊndi / Burundi",
            ru:" / buːdʒəmˈbʊrə / Bujumbura",
            },
            {
            id:20,
            eng:" / kæmˈbəʊdɪə / Cambodia",
            ru:" / 'nɒm'pen / Pnompenh",
            },
            {
            id:21,
            eng:" / ˌkæməˈruːn / Cameroon",
            ru:" / ͵jɑ:u:nʹdeı / Yaounde",
            },
            {
            id:22,
            eng:" / ˈkænədə / Canada",
            ru:" / ˈɒtəwə / Ottawa",
            },
            {
            id:23,
            eng:" / ˈtʃɪli / Chile",
            ru:" / ˌsæntɪˈɑːɡəʊ / Santiago",
            },
            {
            id:24,
            eng:" / ˈtʃaɪnə / China",
            ru:" / ˌbeiˈdʒɪŋ/ / Beijing",
            },
            {
            id:25,
            eng:" / kəˈlɒmbɪə / Colombia",
            ru:" / ˌbɒɡəˈtɑː / Bogota",
            },
            {
            id:26,
            eng:" / ˈkɒŋɡəʊ / Congo",
            ru:" / ˈbræzəˌvɪl / Brazzaville",
            },
            {
            id:27,
            eng:" / ˈkɒstəˈriːkə / Costa Rica",
            ru:" / sanˌhoˈzeɪ / San Jose",
            },
            {
            id:28,
            eng:" / ˈkjuːbə / Cuba",
            ru:" / həˈvænə / Havana",
            },
            {
            id:29,
            eng:" / ˈsaɪprəs / Cyprus",
            ru:" / nɪkəˈsiːə / Nicosia",
            },
            {
            id:30,
            eng:" / tʃekrɪˈpʌblɪk / Czech Republic",
            ru:" / prɑːɡ / Prague",
            },
            {
            id:31,
            eng:" / ˈdenmɑːk / Denmark",
            ru:" / ˌkəʊpənˈheɪɡən / Copenhagen",
            },
            {
            id:32,
            eng:" / dəˈmɪnɪkənrɪˈpʌ / Dominican Republic",
            ru:" / ˈsæntəʊdoˈmɪŋɡəʊ / Santo Domingo",
            },
            {
            id:33,
            eng:" / ˈekwədɔː / Ecuador",
            ru:" / ˈkiːtəʊ / Quito",
            },
            {
            id:34,
            eng:" / ˈiːdʒɪpt / Egypt",
            ru:" / ˈkaɪrəʊ / Cairo",
            },
            {
            id:35,
            eng:" / ˌelˈniːnjəʊˈsæ / El Salvador",
            ru:" / sanˈsælvədɔː / San Salvador",
            },
            {
            id:36,
            eng:" / eˈstəʊniə / Estonia",
            ru:" / 'tælɪn / Tallinn",
            },
            {
            id:37,
            eng:" / ˌiːθɪˈəʊpɪə / Ethiopia",
            ru:" / ˌædɪs'æbəbə / Addis Ababa",
            },
            {
            id:38,
            eng:" / ˈfɪnlənd / Finland",
            ru:" / ˈhelsɪŋki / Helsinki",
            },
            {
            id:39,
            eng:" / frɑːns / France",
            ru:" / ˈpærɪs / Paris",
            },
            {
            id:40,
            eng:" / ˈdʒɔːdʒə / Georgia",
            ru:" / ˌtəbɪˈliːsi / Tbilisi",
            },
            {
            id:41,
            eng:" / ˈdʒɜːməni / Germany",
            ru:" / bɜːˈlɪn / Berlin",
            },
            {
            id:42,
            eng:" / ˈɡɑːnə / Ghana",
            ru:" / əˈkrɑː / Accra",
            },
            {
            id:43,
            eng:" / dʒɪˈbrɔːltə / Gibraltar",
            ru:" / dʒɪˈbrɔːltətaʊn / Gibraltar Town",
            },
            {
            id:44,
            eng:" / ˈɡreɪtˈbrɪtən / Great Britain",
            ru:" / ˈlʌndən / London",
            },
            {
            id:45,
            eng:" / ɡrɪs / Greece",
            ru:" / ˈæθɪnz / Athens",
            },
            {
            id:46,
            eng:" / ˌɡwɑːtəˈmɑːlə / Guatemala",
            ru:" / ˌɡwɑːtəˈmɑːləˈsɪti / Guatemala City",
            },
            {
            id:47,
            eng:" / ˈɡɪni / Guinea",
            ru:" / ˈkɒnəkri / Conakry",
            },
            {
            id:48,
            eng:" / ˈheɪti / Haiti",
            ru:" / ˌpɔːtəʊˈprɪns / Port-au-Prince",
            },
            {
            id:49,
            eng:" / həˈwaɪiː / Hawaii",
            ru:" / ˌhɑːnəˈluːluː / Honolulu",
            },
            {
            id:50,
            eng:" / hɒnˈdjʊərəs / Honduras",
            ru:" / teɡuːsiˈɡælpə / Tegucigalpa",
            },
            {
            id:51,
            eng:" / hʊŋkʰʊŋ / Hong Kong",
            ru:" / ˌhɒŋ'kɒŋ / Hong Kong",
            },
            {
            id:52,
            eng:" / ˈhʌŋɡr̩i / Hungary",
            ru:" / ˈbjuːdəpest / Budapest",
            },
            {
            id:53,
            eng:" / ˈaɪslənd / Iceland",
            ru:" / ˈreɪkjəvɪk / Reykjavik",
            },
            {
            id:54,
            eng:" / ˈɪndɪə / India",
            ru:" / njuːˈdeli / New Delhi",
            },
            {
            id:55,
            eng:" / ˌɪndəˈniːzɪə / Indonesia",
            ru:" / dʒəˈkɑːtə / Jakarta",
            },
            {
            id:56,
            eng:" / ɪˈrɑːn / Iran",
            ru:" / ˌteˈrɑːn / Tehran",
            },
            {
            id:57,
            eng:" / ɪˈrɑːk / Iraq",
            ru:" / ˌbæɡˈdæd / Baghdad",
            },
            {
            id:58,
            eng:" / ˈaɪələnd / Ireland",
            ru:" / ˈdʌblɪn / Dublin",
            },
            {
            id:59,
            eng:" / ˈɪzreɪl / Israel",
            ru:" / dʒəˈruːsələm / Jerusalem",
            },
            {
            id:60,
            eng:" / ˈɪtəli / Italy",
            ru:" / rəʊm / Rome",
            },
            {
            id:61,
            eng:" / ˈaɪvərikəʊst / Ivory Coast",
            ru:" / ˌæbiː'ʤɑːn / Abidjan",
            },
            {
            id:62,
            eng:" / dʒəˈmeɪkə / Jamaica",
            ru:" / ˈkɪŋstən / Kingston",
            },
            {
            id:63,
            eng:" / dʒəˈpæn / Japan",
            ru:" / ˈtəʊkjəʊ / Tokyo",
            },
            {
            id:64,
            eng:" / ˌkɑːzakˈstɑːn / Kazakhstan",
            ru:" / æstæ'nɑː / Astana",
            },
            {
            id:65,
            eng:" / ˈkenjə / Kenya",
            ru:" / naɪˈrəʊbi / Nairobi",
            },
            {
            id:66,
            eng:" / kʊˈweɪt / Kuwait",
            ru:" / kʊˈweɪtˈsɪti / Kuwait City",
            },
            {
            id:67,
            eng:" / ˈkɪrɡəˌstæn / Kyrgyzstan",
            ru:" / bɪʃ'kek / Bishkek",
            },
            {
            id:68,
            eng:" / ˈlætviə / Latvia",
            ru:" / ˈriːɡə / Riga",
            },
            {
            id:69,
            eng:" / ˈlebənən / Lebanon",
            ru:" / ˌbeɪˈruːt / Beirut",
            },
            {
            id:70,
            eng:" / laɪˈbɪərɪə / Liberia",
            ru:" / ˌmɑːnˈroviə / Monrovia",
            },
            {
            id:71,
            eng:" / ˈlɪbɪə / Libya",
            ru:" / ˈtrɪpəli / Tripoli",
            },
            {
            id:72,
            eng:" / ˌlɪθəˈweɪniə / Lithuania",
            ru:" / ˈvɪlniəs / Vilnius",
            },
            {
            id:73,
            eng:" / ˈlʌksəmbɜːɡ / Luxemburg",
            ru:" / ˈlʌksəmbɜːɡ / Luxemburg",
            },
            {
            id:74,
            eng:" / ˌmædəˈɡæskə / Madagascar",
            ru:" / antəˌnanəˈriːvəʊ / Antananarivo",
            },
            {
            id:75,
            eng:" / məˈlɑːwi / Malawi",
            ru:" / lɪˈlɒŋweɪ / Lilongwe",
            },
            {
            id:76,
            eng:" / məˈleɪzɪə / Malaysia",
            ru:" / ˈkwɑːləˌləmˈpʊr / Kuala Lumpur",
            },
            {
            id:77,
            eng:" / ˈmɔːltə / Malta",
            ru:" / və'letə / Valletta",
            },
            {
            id:78,
            eng:" / ˈmeksɪkəʊ / Mexico",
            ru:" / ˈmeksɪkəʊˈsɪti / Mexico City",
            },
            {
            id:79,
            eng:" / ˌmolˈdovə / Moldova",
            ru:" / ˌkɪʃɪ'nəu / Chisinau (Kishinev)",
            },
            {
            id:80,
            eng:" / ˈmɒnəkəʊ / Monaco",
            ru:" / 'mɔnəkəuvɪl / Monaco-Ville",
            },
            {
            id:81,
            eng:" / mɒŋˈɡəʊlɪə / Mongolia",
            ru:" / ʊ'lɑːn'bɑːtɔː / Ulan Bator",
            },
            {
            id:82,
            eng:" / məˈrɒkəʊ / Morocco",
            ru:" / rabat / Rabat",
            },
            {
            id:83,
            eng:" / nɪ'pɔːl / Nepal",
            ru:" / ˌkatmanˈduː / Kathmandu",
            },
            {
            id:84,
            eng:" / ˈneðələndz / Netherlands",
            ru:" / ˈæmstədæm / Amsterdam",
            },
            {
            id:85,
            eng:" / ˌnjuː'ziːlənd / New Zeland",
            ru:" / ˈwelɪŋtən / Wellington",
            },
            {
            id:86,
            eng:" / ˌnɪkəˈræɡjʊə / Nicaragua",
            ru:" / məˈnɑːɡwə / Managua",
            },
            {
            id:87,
            eng:" / naɪˈdʒɪərɪə / Nigeria",
            ru:" / ˈleɪɡɒs / Lagos",
            },
            {
            id:88,
            eng:" / nɔːθkəˈrɪə / North Korea",
            ru:" / ˌpjɒŋˈjæŋ / Pyongyang",
            },
            {
            id:89,
            eng:" / ˈnɔːweɪ / Norway",
            ru:" / ˈɒzləʊ / Oslo",
            },
            {
            id:90,
            eng:" / əʊˈmɑːn / Oman",
            ru:" / ˈmʌskæt / Muscat",
            },
            {
            id:91,
            eng:" / ˌpɑːkɪˈstɑːn / Pakistan",
            ru:" / ˌɪsˈlæməbæd / Islamabad",
            },
            {
            id:92,
            eng:" / ˈpænəmɑː / Panama",
            ru:" / ˈpænəmɑːˈsɪti / Panama City",
            },
            {
            id:93,
            eng:" / pæpjʊənjuːˈɡɪn / Papua New Guinea",
            ru:" / ˌpɔːtˈmɔːzbi / Port Moresby",
            },
            {
            id:94,
            eng:" / ˈpærəɡwaɪ / Paraguay",
            ru:" / əˈsənʃən / Asuncion",
            },
            {
            id:95,
            eng:" / pəˈruː / Peru",
            ru:" / ˈliːmə / Lima",
            },
            {
            id:96,
            eng:" / ˈfɪlɪpiːnz / Philippines",
            ru:" / məˈnɪlə / Manila",
            },
            {
            id:97,
            eng:" / ˈpəʊlənd / Poland",
            ru:" / ˈwɔːsɔː / Warsaw",
            },
            {
            id:98,
            eng:" / ˈpɔːtʃʊɡəl / Portugal",
            ru:" / ˈlɪzbən / Lisbon",
            },
            {
            id:99,
            eng:" / pwerˌtəʊˈriːkəʊ / Puerto Rico",
            ru:" / santɕyɛn / San Juan",
            },
            {
            id:100,
            eng:" / rəˈmeɪnɪə / Romania",
            ru:" / ˈbjuːkəˌrest / Bucharest",
            },
            {
            id:101,
            eng:" / ˈrʌʃə / Russia",
            ru:" / ˈmɒskəʊ / Moscow",
            },
            {
            id:102,
            eng:" / rʊˈændə / Rwanda",
            ru:" / kiˈɡɑːli / Kigali",
            },
            {
            id:103,
            eng:" / saudiəˈreɪbiə / Saudi Arabia",
            ru:" / riˈæd / Riyadh",
            },
            {
            id:104,
            eng:" / ˌsenɪˈɡɔːl / Senegal",
            ru:" / ˈdækə / Dakar",
            },
            {
            id:105,
            eng:" / sɪˈeərəleone / Sierra Leone",
            ru:" / ˈfriːˌtɑːwn / Freetown",
            },
            {
            id:106,
            eng:" / ˌsɪŋəˈpɔː / Singapore",
            ru:" / ˌsɪŋəˈpɔːˈsɪti / Singapore City",
            },
            {
            id:107,
            eng:" / sˌloˈvɑːkiə / Slovakia",
            ru:" / ˌbrætɪˈslɑːvə / Bratislava",
            },
            {
            id:108,
            eng:" / sˌloˈviːniə / Slovenia",
            ru:" / ˌljuːblɪˈɑːnə / Ljubljana",
            },
            {
            id:109,
            eng:" / saʊθˈæfrɪkə / South Africa",
            ru:" / prɪˈtɔːrɪə / Pretoria",
            },
            {
            id:110,
            eng:" / saʊθkəˈrɪə / South Korea",
            ru:" / səʊl / Seoul",
            },
            {
            id:111,
            eng:" / saʊθˌɑːˈseʃjə / South Ossetia",
            ru:" / tskɪnˈvɑːl(i) / Tskhinval(i)",
            },
            {
            id:112,
            eng:" / speɪn / Spain",
            ru:" / məˈdrɪd / Madrid",
            },
            {
            id:113,
            eng:" / ˈʃriːˈlæŋkə / Sri Lanka",
            ru:" / kəˈlɒmbəʊ / Colombo",
            },
            {
            id:114,
            eng:" / suːˈdɑːn / Sudan",
            ru:" / ˌkɑːˈtuːm / Khartoum",
            },
            {
            id:115,
            eng:" / ˈswiːdən / Sweden",
            ru:" / ˈstɒkhəʊm / Stockholm",
            },
            {
            id:116,
            eng:" / ˈswɪtsələnd / Switzerland",
            ru:" / ˈbɜːn / Berne",
            },
            {
            id:117,
            eng:" / ˈsɪrɪə / Syria",
            ru:" / dəˈmæskəs / Damascus",
            },
            {
            id:118,
            eng:" / taɪˈwɑːn / Taiwan",
            ru:" / ˌtaɪˈpeɪ / Taipei",
            },
            {
            id:119,
            eng:" / ˌtɑːˈdʒiːkəˌstæn / Tajikistan",
            ru:" / duː'ʃænbə / Dushanbe",
            },
            {
            id:120,
            eng:" / ˈtaɪlænd / Thailand",
            ru:" / ˌbæŋˈkɒk / Bangkok",
            },
            {
            id:121,
            eng:" / ˈtəʊɡəʊ / Togo",
            ru:" / 'ləumeɪ / Lome",
            },
            {
            id:122,
            eng:" / tjuːˈnɪzɪə / Tunisia",
            ru:" / ˈtjuːnɪs / Tunis",
            },
            {
            id:123,
            eng:" / ˈtɜːki / Turkey",
            ru:" / 'æŋkərə / Ankara",
            },
            {
            id:124,
            eng:" / tərkˈmenəˌstæn / Turkmenistan",
            ru:" / ˌɑːʃgɑː'bɑːt / Ashgabat",
            },
            {
            id:125,
            eng:" / juːˈɡændə / Uganda",
            ru:" / kəmˈpɑːlə / Kampala",
            },
            {
            id:126,
            eng:" / juːˈkreɪn / Ukraine",
            ru:" / ˈkɪjɪf / Kyiv (Kiev)",
            },
            {
            id:127,
            eng:" / juːˈnaɪtɪdˈærəb / United Arab Emirates",
            ru:" / ˈæbuːˈdɑːbi / Abu Dhabi",
            },
            {
            id:128,
            eng:" / juːˈˌesˈeɪ / USA",
            ru:" / ˈwɒʃɪŋtən / Washington",
            },
            {
            id:129,
            eng:" / ˈjʊərəɡwaɪ / Uruguay",
            ru:" / ˌmɒntɪvɪˈdeɪəʊ / Montevideo",
            },
            {
            id:130,
            eng:" / uːzˈbekəˌstæn / Uzbekistan",
            ru:" / ˌtæʃˈkent / Tashkent",
            },
            {
            id:131,
            eng:" / ˌvenɪˈzweɪlə / Venezuela",
            ru:" / kəˈrækəs / Caracas",
            },
            {
            id:132,
            eng:" / ˈjemən / Yemen",
            ru:" / sə'nɑː / Sana'a",
            },
            {
            id:133,
            eng:" / zɑːˈɪə / Zaire",
            ru:" / kɪnˈʃɑːsə / Kinshasa",
            },
            {
            id:134,
            eng:" / ˈzæmbɪə / Zambia",
            ru:" / luːˈsɑːkə / Lusaka",
            },
            {
            id:135,
            eng:" / zɪmˈbɑːbwi / Zimbabwe",
            ru:" / həˈrɑːi / Harare",
            },
    ],
    daysMonth: [
        {
            id:1,
            eng:"in January / джЭньюэри /",
            ru:"в январе",
            hint:" / джЭньюэри /"
            },
            {
            id:2,
            eng:"in February / фЭбруэри /",
            ru:"в феврале",
            hint:" / фЭбруэри /"
            },
            {
            id:3,
            eng:"in March / мАч /",
            ru:"в марте",
            hint:" / мАч /"
            },
            {
            id:4,
            eng:"in April / Эйприл /",
            ru:"в апреле",
            hint:" / Эйприл /"
            },
            {
            id:5,
            eng:"in May / мЭй /",
            ru:"в мае",
            hint:" / мЭй /"
            },
            {
            id:6,
            eng:"in June / джУн /",
            ru:"в июне",
            hint:" / джУн /"
            },
            {
            id:7,
            eng:"in July / джулАй /",
            ru:"в июле",
            hint:" / джулАй /"
            },
            {
            id:8,
            eng:"in August / Огэст /",
            ru:"в августе",
            hint:" / Огэст /"
            },
            {
            id:9,
            eng:"in September / сэптЭмбэ /",
            ru:"в сентябре",
            hint:" / сэптЭмбэ /"
            },
            {
            id:10,
            eng:"in October / октОубэ /",
            ru:"в октябре",
            hint:" / октОубэ /"
            },
            {
            id:11,
            eng:"in November / новЭмбэ /",
            ru:"в ноябре",
            hint:" / новЭмбэ /"
            },
            {
            id:12,
            eng:"in December / дисЭмбэ /",
            ru:"в декабре",
            hint:" / дисЭмбэ /"
            },
            {
            id:13,
            eng:"in winter / уИнтэ /",
            ru:"зимой",
            hint:" / уИнтэ /"
            },
            {
            id:14,
            eng:"in spring / сприн /",
            ru:"весной",
            hint:" / сприн /"
            },
            {
            id:15,
            eng:"in summer / сАмэ /",
            ru:"летом",
            hint:" / сАмэ /"
            },
            {
            id:16,
            eng:"in autumn / Отэм /",
            ru:"осенью ( по-британски )",
            hint:" / Отэм /"
            },
            {
            id:17,
            eng:"in fall / фол /",
            ru:"осенью ( по-американски )",
            hint:" / фол /"
            },
            {
            id:18,
            eng:"on Monday / мАндэй /",
            ru:"в понедельник",
            hint:" / мАндэй /"
            },
            {
            id:19,
            eng:"on Tuesday / тьЮсдэй /",
            ru:"во вторник",
            hint:" / тьЮсдэй /"
            },
            {
            id:20,
            eng:"on Wednesday / уЭнсдэй /",
            ru:"в среду",
            hint:" / уЭнсдэй /"
            },
            {
            id:21,
            eng:"on Thursday / thЁсдэй /",
            ru:"в четверг",
            hint:" / thЁсдэй /"
            },
            {
            id:22,
            eng:"on Friday / фрАйдэй /",
            ru:"в пятницу",
            hint:" / фрАйдэй /"
            },
            {
            id:23,
            eng:"on Saturday / сАтудэй /",
            ru:"в субботу",
            hint:" / сАтудэй /"
            },
            {
            id:24,
            eng:"on Sunday / сАндэй /",
            ru:"в воскресенье",
            hint:" / сАндэй /"
            },
            {
            id:25,
            eng:"on the first of… / он дэ фёст ов /",
            ru:"первого числа какого-то месяца",
            hint:" / он дэ фёст ов /"
            },
            {
            id:26,
            eng:"on the second of… / он дэ сэконд ов /",
            ru:"второго числа какого-то месяца",
            hint:" / он дэ сэконд ов /"
            },
            {
            id:27,
            eng:"on the third of… / он дэ thёрд ов /",
            ru:"третьего числа какого-то месяца",
            hint:" / он дэ thёрд ов /"
            },
            {
            id:28,
            eng:"on the fourth of… / он дэ фоth ов /",
            ru:"четвёртого числа какого-то месяца",
            hint:" / он дэ фоth ов /"
            },
            {
            id:29,
            eng:"on the fifth of… / он дэ фИфth ов /",
            ru:"пятого числа какого-то месяца",
            hint:" / он дэ фИфth ов /"
            },
            {
            id:30,
            eng:"on the ninth of… / он дэ нАйнth ов /",
            ru:"девятого числа какого-то месяца",
            hint:" / он дэ нАйнth ов /"
            },
    ],
    counta1: [
        {
            id: 101,
            eng: "1 + 1  / плАс /",
            ru: "is two",
            hint: " / плАс /"
        },
        {
            id: 102,
            eng: "1 + 0  / плАс /",
            ru: "is one",
            hint: " / плАс /"
        },
        {
            id: 103,
            eng: "9 - 9  / мАйнэс /",
            ru: "is zero",
            hint: " / мАйнэс /"
        },
        {
            id: 104,
            eng: "8 - 5  / мАйнэс /",
            ru: "is three",
            hint: " / мАйнэс /"
        },
        {
            id: 105,
            eng: "2 + 2  / плАс /",
            ru: "is four",
            hint: " / плАс /"
        },
        {
            id: 106,
            eng: "2 + 3  / плАс /",
            ru: "is five",
            hint: " / плАс /"
        },
        {
            id: 107,
            eng: "9 - 3  / мАйнэс /",
            ru: "is six",
            hint: " / мАйнэс /"
        },
        {
            id: 108,
            eng: "12 - 5  / мАйнэс /",
            ru: "is seven",
            hint: " / мАйнэс /"
        },
        {
            id: 109,
            eng: "20 - 12  / мАйнэс /",
            ru: "is eight",
            hint: " / мАйнэс /"
        },
        {
            id: 110,
            eng: "8 + 1  / плАс /",
            ru: "is nine",
            hint: " / плАс /"
        },
        {
            id: 111,
            eng: "11 - 1  / мАйнэс /",
            ru: "is ten",
            hint: " / мАйнэс /"
        },
        {
            id: 112,
            eng: "20 - 9  / мАйнэс /",
            ru: "is eleven",
            hint: " / мАйнэс /"
        },
        {
            id: 113,
            eng: "9 + 3  / плАс /",
            ru: "is twelve",
            hint: " / плАс /"
        },
        {
            id: 114,
            eng: "9 + 4  / плАс /",
            ru: "is thirteen",
            hint: " / плАс /"
        },
        {
            id: 115,
            eng: "20 - 6  / мАйнэс /",
            ru: "is fourteen",
            hint: " / мАйнэс /"
        },
        {
            id: 116,
            eng: "20 - 5  / мАйнэс /",
            ru: "is fifteen",
            hint: " / мАйнэс /"
        },
        {
            id: 117,
            eng: "12 + 4  / плАс /",
            ru: "is sixteen",
            hint: " / плАс /"
        },
        {
            id: 118,
            eng: "5 + 12  / плАс /",
            ru: "is seventeen",
            hint: " / плАс /"
        },
        {
            id: 119,
            eng: "10 + 8  / плАс /",
            ru: "is eighteen",
            hint: " / плАс /"
        },
        {
            id: 120,
            eng: "10 + 9  / плАс /",
            ru: "is nineteen",
            hint: " / плАс /"
        },
        {
            id: 121,
            eng: "8 + 12  / плАс /",
            ru: "is twenty",
            hint: " / плАс /"
        },
        {
            id: 122,
            eng: "20 + 12  / плАс /",
            ru: "thirty two",
            hint: " / плАс /"
        },
        {
            id: 123,
            eng: "count  / кАунт /",
            ru: "считать или пересчитать",
            hint: " / кАунт /"
        },
        {
            id: 124,
            eng: "is  / из /",
            ru: "равно, равняется, есть, быть",
            hint: " / из /"
        },
    ],
    mZero: [
        {
            id: 1,
            eng: "I / ай /",
            ru: "я"
        },
        {
            id: 2,
            eng: "you / ю /",
            ru: "ты или вы"
        },
        {
            id: 3,
            eng: "we / уи /",
            ru: "мы"
        },
        {
            id: 4,
            eng: "they / дэй /",
            ru: "они"
        },
        {
            id: 5,
            eng: "he / хи /",
            ru: "он"
        },
        {
            id: 6,
            eng: "she / щи /",
            ru: "она"
        },
        {
            id: 7,
            eng: "it / ит /",
            ru: "это"
        },
        {
            id: 8,
            eng: "my / май /",
            ru: "мой, моя, мои, моё"
        },
        {
            id: 9,
            eng: "his / хиз /",
            ru: "его"
        },
        {
            id: 10,
            eng: "her / хё /",
            ru: "её"
        },
        {
            id: 11,
            eng: "our / аУа /",
            ru: "наш, наша, наше, наши"
        },
        {
            id: 12,
            eng: "your / ё /",
            ru: "твой, твоё, твоя, ваш, ваше, ваша, ваши, твои"
        },
    ],
    homework002: [
        {
            id:1,
            eng:"A ",
            ru:"/ эй /"
            },
            {
            id:2,
            eng:"B ",
            ru:"/ би /"
            },
            {
            id:3,
            eng:"C ",
            ru:"/ си /"
            },
            {
            id:4,
            eng:"D ",
            ru:"/ ди /"
            },
            {
            id:5,
            eng:"E ",
            ru:"/ и /"
            },
            {
            id:6,
            eng:"F ",
            ru:"/ эф /"
            },
            {
            id:7,
            eng:"G ",
            ru:"/ джи /"
            },
            {
            id:8,
            eng:"H ",
            ru:"/ эйч /"
            },
            {
            id:9,
            eng:"I ",
            ru:"/ ай /"
            },
            {
            id:10,
            eng:"J ",
            ru:"/ джэй /"
            },
            {
            id:11,
            eng:"K ",
            ru:"/ кей /"
            },
            {
            id:12,
            eng:"L ",
            ru:"/ эл /"
            },
            {
            id:13,
            eng:"M ",
            ru:"/ эм /"
            },
            {
            id:14,
            eng:"N ",
            ru:"/ эн /"
            },
            {
            id:15,
            eng:"O ",
            ru:"/ оу /"
            },
            {
            id:16,
            eng:"P ",
            ru:"/ пи /"
            },
            {
            id:17,
            eng:"Q ",
            ru:"/ кью /"
            },
            {
            id:18,
            eng:"R ",
            ru:"/ а /"
            },
            {
            id:19,
            eng:"S ",
            ru:"/ эс /"
            },
            {
            id:20,
            eng:"T ",
            ru:"/ ти /"
            },
            {
            id:21,
            eng:"U ",
            ru:"/ ю /"
            },
            {
            id:22,
            eng:"V ",
            ru:"/ ви /"
            },
            {
            id:23,
            eng:"W ",
            ru:"/ дабл ю /"
            },
            {
            id:24,
            eng:"X ",
            ru:"/ экс /"
            },
            {
            id:25,
            eng:"Y ",
            ru:"/ уай /"
            },
            {
            id:26,
            eng:"Z ",
            ru:"/ ЗИ и ZЭД /"
            },
    ],
    alphabeta1: [
        {
            id:1,
            eng:"A ",
            ru:"/ эй /"
            },
            {
            id:2,
            eng:"B ",
            ru:"/ би /"
            },
            {
            id:3,
            eng:"C ",
            ru:"/ си /"
            },
            {
            id:4,
            eng:"D ",
            ru:"/ ди /"
            },
            {
            id:5,
            eng:"E ",
            ru:"/ и /"
            },
            {
            id:6,
            eng:"F ",
            ru:"/ эф /"
            },
            {
            id:7,
            eng:"G ",
            ru:"/ джи /"
            },
            {
            id:8,
            eng:"H ",
            ru:"/ эйч /"
            },
            {
            id:9,
            eng:"I ",
            ru:"/ ай /"
            },
            {
            id:10,
            eng:"J ",
            ru:"/ джэй /"
            },
            {
            id:11,
            eng:"K ",
            ru:"/ кей /"
            },
            {
            id:12,
            eng:"L ",
            ru:"/ эл /"
            },
            {
            id:13,
            eng:"M ",
            ru:"/ эм /"
            },
            {
            id:14,
            eng:"N ",
            ru:"/ эн /"
            },
            {
            id:15,
            eng:"O ",
            ru:"/ оу /"
            },
            {
            id:16,
            eng:"P ",
            ru:"/ пи /"
            },
            {
            id:17,
            eng:"Q ",
            ru:"/ кью /"
            },
            {
            id:18,
            eng:"R ",
            ru:"/ а /"
            },
            {
            id:19,
            eng:"S ",
            ru:"/ эс /"
            },
            {
            id:20,
            eng:"T ",
            ru:"/ ти /"
            },
            {
            id:21,
            eng:"U ",
            ru:"/ ю /"
            },
            {
            id:22,
            eng:"V ",
            ru:"/ ви /"
            },
            {
            id:23,
            eng:"W ",
            ru:"/ дабл ю /"
            },
            {
            id:24,
            eng:"X ",
            ru:"/ экс /"
            },
            {
            id:25,
            eng:"Y ",
            ru:"/ уай /"
            },
            {
            id:26,
            eng:"Z ",
            ru:"/ ЗИ и ZЭД /"
            },
    ],
    alphabetc1: [
        {
            id:27,
            eng:"H and M",
            ru:"произносится / эйч ЭН эм / без звука Д",
            },
            {
            id:28,
            eng:"M & Ms произносится",
            ru:"произносится / эм ЭН эмz / без звука Д",
            },
            {
            id:29,
            eng:"G and J",
            ru:"/джи эн джэй/",
            },
            {
            id:30,
            eng:"Ai",
            ru:"произносится / эй ай /",
            },
            {
            id:31,
            eng:"iPhone",
            ru:"/ай фоун/",
            },
            {
            id:32,
            eng:"D & D",
            ru:"/ди ЭН ди/",
            },
            {
            id:33,
            eng:"E",
            ru:"произносится / ииии /",
            },
            {
            id:34,
            eng:"FCUK",
            ru:"/эф си ю кей/",
            },
            {
            id:35,
            eng:"J and G",
            ru:"/джэй эн джи/",
            },
            {
            id:36,
            eng:"H",
            ru:"/ эйч /",
            },
            {
            id:37,
            eng:"i",
            ru:"/ ай /",
            },
            {
            id:38,
            eng:"Nike",
            ru:"произносится / нАйки /",
            },
            {
            id:39,
            eng:"K",
            ru:"/ кей /",
            },
            {
            id:40,
            eng:"IDK",
            ru:"/ай ди кей/ I don't know",
            },
            {
            id:41,
            eng:"AFK",
            ru:"/эй эф кей/ away of keyboard",
            },
            {
            id:42,
            eng:"ASAP",
            ru:"/эй эс эй пи/ обозначает 'как можно скорее'",
            },
            {
            id:43,
            eng:"O",
            ru:"/ оу /",
            },
            {
            id:44,
            eng:"P",
            ru:"/ пи /",
            },
            {
            id:45,
            eng:"Q",
            ru:"/ кью /",
            },
            {
            id:46,
            eng:"R",
            ru:"никаких рычаний / а / произносится только / А /",
            },
            {
            id:47,
            eng:"S",
            ru:"/ эс /",
            },
            {
            id:48,
            eng:"Viber",
            ru:"произносится / вАйбер /",
            },
            {
            id:49,
            eng:"Message",
            ru:"произносится / мЭсидж /",
            },
            {
            id:50,
            eng:"TNT",
            ru:"/ти ЭН ти/ взрывчатка",
            },
            {
            id:51,
            eng:"Special",
            ru:"/спЭшл/ особенный",
            },
            {
            id:52,
            eng:"Cucumber",
            ru:"/кьЮкамбэ/ ударение на Ю",
            },
            {
            id:53,
            eng:"Action",
            ru:"/ экшн / это действие",
            },
            {
            id:54,
            eng:"Z",
            ru:"/ ЗИ или  ZЭД /",
            },
            {
            id:55,
            eng:"Y",
            ru:"/ уай / не игрик",
            },
            {
            id:56,
            eng:"U",
            ru:"/ ю /",
            },
            {
            id:57,
            eng:"C u",
            ru:"/ си ю / обозначает увидимся",
            },
            {
            id:58,
            eng:"Pacific ocean",
            ru:"/пэСыфиК оуШн/ тихий океан",
            },
            {
            id:59,
            eng:"car",
            ru:"/си эй а/",
            },
            {
            id:60,
            eng:"Rock and Roll",
            ru:"/ рок ЭН рол / без звука Д",
            },
            {
            id:61,
            eng:"KEY ключ",
            ru:"произносится только / кИ / без е",
            },
    ],
    lettersc2: [
        {
            id: 27,
            eng: "H & M произносится ",
            ru: "/эйч ЭН эм/ без Д"
        },
        {
            id: 28,
            eng: "M & Ms произносится ",
            ru: "/эм ЭН эмz/ без Д"
        },
        {
            id: 29,
            eng: "G and J ",
            ru: "/джи эн джэй/"
        },
        {
            id: 30,
            eng: "Ai ",
            ru: "/эй ай/"
        },
        {
            id: 31,
            eng: "iPhone ",
            ru: "/ай фоун/"
        },
        {
            id: 32,
            eng: "D & D ",
            ru: "/ди ЭН ди/"
        },
        {
            id: 33,
            eng: "E ",
            ru: "/ и /"
        },
        {
            id: 34,
            eng: "FCUK ",
            ru: "/эф си ю кей/"
        },
        {
            id: 35,
            eng: "J and G ",
            ru: "/джэй эн джи/"
        },
        {
            id: 36,
            eng: "H ",
            ru: "/ эйч /"
        },
        {
            id: 37,
            eng: "i ",
            ru: "/ ай /"
        },
        {
            id: 38,
            eng: "Nike ",
            ru: "/нАйки/"
        },
        {
            id: 39,
            eng: "K ",
            ru: "/ кей /"
        },
        {
            id: 40,
            eng: "IDK ",
            ru: "/ай ди кей/"
        },
        {
            id: 41,
            eng: "AFK ",
            ru: "/эй эф кей/"
        },
        {
            id: 42,
            eng: "ASAP ",
            ru: "/эй эс эй пи/"
        },
        {
            id: 43,
            eng: "O ",
            ru: "/ оу /"
        },
        {
            id: 44,
            eng: "P ",
            ru: "/ пи /"
        },
        {
            id: 45,
            eng: "Q ",
            ru: "/ кью /"
        },
        {
            id: 46,
            eng: "R ",
            ru: "/ а /"
        },
        {
            id: 47,
            eng: "S ",
            ru: "/ эс /"
        },
        {
            id: 48,
            eng: "Viber ",
            ru: "/вАйбер/"
        },
        {
            id: 49,
            eng: "Message ",
            ru: "/мЭсидж/"
        },
        {
            id: 50,
            eng: "TNT ",
            ru: "/ти ЭН ти/"
        },
        {
            id: 51,
            eng: "Special ",
            ru: "/спЭшл/"
        },
        {
            id: 52,
            eng: "Cucumber ",
            ru: "/кьЮкамбэ/ ударение на Ю"
        },
        {
            id: 53,
            eng: "Action ",
            ru: "/экшн/"
        },
        {
            id: 54,
            eng: "Z ",
            ru: "/ зи (зэд) /"
        },
        {
            id: 55,
            eng: "Y ",
            ru: "/ уай /"
        },
        {
            id: 56,
            eng: "U ",
            ru: "/ ю /"
        },
        {
            id: 57,
            eng: "C u ",
            ru: "/си ю/"
        },
        {
            id: 58,
            eng: "Pacific ocean ",
            ru: "/пэСыфиК оуШн/"
        },
        {
            id: 59,
            eng: "car",
            ru: "/си эй а/"
        },
        {
            id: 60,
            eng: "Rock and Roll ",
            ru: "/рок ЭН рол/ без звука Д"
        },
        {
            id: 61,
            eng: "KEY ключ ",
            ru: "/кИ/ и только так произносится"
        },
    ],
    ach001: [
        {
            id:1,
            eng:"zero / зИроу /",
            ru:"ноль",
            },
            {
            id:2,
            eng:"one / уан /",
            ru:"один",
            },
            {
            id:3,
            eng:"two / ту /",
            ru:"два",
            },
            {
            id:4,
            eng:"three / Thри /",
            ru:"три",
            },
            {
            id:5,
            eng:"four / фо /",
            ru:"четыре",
            },
            {
            id:6,
            eng:"five / файв /",
            ru:"пять",
            },
            {
            id:7,
            eng:"six / сыкс /",
            ru:"шесть",
            },
            {
            id:8,
            eng:"seven / сэвн /",
            ru:"семь",
            },
            {
            id:9,
            eng:"eight / эйт /",
            ru:"восемь",
            },
            {
            id:10,
            eng:"nine / найн /",
            ru:"девять",
            },
            {
            id:11,
            eng:"ten / тэн /",
            ru:"десять",
            },
            {
            id:12,
            eng:"eleven / илэвн /",
            ru:"одиннадцать",
            },
            {
            id:13,
            eng:"twelve / туэлв /",
            ru:"двенадцать",
            },
            {
            id:14,
            eng:"thirteen / THётИИИН /",
            ru:"тринадцать",
            },
            {
            id:15,
            eng:"fourteen / фотИИИН /",
            ru:"четырнадцать",
            },
            {
            id:16,
            eng:"fifteen / фифтИИИН /",
            ru:"пятнадцать",
            },
            {
            id:17,
            eng:"sixteen / сыкстИИИН /",
            ru:"шестнадцать",
            },
            {
            id:18,
            eng:"seventeen / сэвнтИИИН /",
            ru:"семнадцать",
            },
            {
            id:19,
            eng:"eighteen / эйтИИИН /",
            ru:"восемнадцать",
            },
            {
            id:20,
            eng:"nineteen / найнтИИИН /",
            ru:"девятнадцать",
            },
            {
            id:21,
            eng:"twenty / туЭнти /",
            ru:"двадцать",
            },
            {
            id:22,
            eng:"plus / плАс /",
            ru:"плюс",
            },
            {
            id:23,
            eng:"minus / мАйнэс /",
            ru:"минус",
            },
    ],
    ach003: [
            {
            id:24,
            eng:"nine plus two / плас /",
            ru:"is eleven",
            },
            {
            id:25,
            eng:"eight plus two / плас /",
            ru:"is ten",
            },
            {
            id:26,
            eng:"four plus four / плас /",
            ru:"is eight",
            },
            {
            id:27,
            eng:"five plus four / плас /",
            ru:"is nine",
            },
            {
            id:28,
            eng:"seven plus five / плас /",
            ru:"is twelve",
            },
            {
            id:29,
            eng:"ten plus ten / плас /",
            ru:"is twenty",
            },
            {
            id:30,
            eng:"two plus one / плас /",
            ru:"is three",
            },
            {
            id:31,
            eng:"twenty minus one / мАйнэс /",
            ru:"is nineteen",
            },
            {
            id:32,
            eng:"twenty minus two / мАйнэс /",
            ru:"is eighteen",
            },
            {
            id:33,
            eng:"twenty minus five / мАйнэс /",
            ru:"/ фифтИИИН /",
            },
            {
            id:34,
            eng:"twelve plus two / плас /",
            ru:"/ фотИИИН /",
            },
            {
            id:35,
            eng:"eleven minus five / мАйнэс /",
            ru:"is six",
            },
            {
            id:36,
            eng:"twenty + twenty / плас /",
            ru:"/ фОти /",
            },
            {
            id:37,
            eng:"twelve + twelve / плас /",
            ru:"twenty four",
            },
            {
            id:38,
            eng:"eight plus eight / плас /",
            ru:"/ сыкстИИИН /",
            },
            {
            id:39,
            eng:"nine plus nine / плас /",
            ru:"/ эйтИИИН /",
            },
            {
            id:40,
            eng:"восемьдесят",
            ru:"/ Эйти /",
            },
            {
            id:41,
            eng:"пятьдесят",
            ru:"/ фИфти /",
            },
            {
            id:42,
            eng:"+ прибавить",
            ru:"плАс",
            },
            {
            id:43,
            eng:"- отнять -",
            ru:"мАйнэс",
            },
            {
            id:44,
            eng:"= равно =",
            ru:"is",
            },
            {
            id:45,
            eng:"count / кАунт /",
            ru:"посчитать",
            },
            {
            id:46,
            eng:"numbers / нАмбэz /",
            ru:"числа",
            },
    ],
    m013old: [
        {
            id: 1,
            eng: "I ",
            ru: "am + прилагательное"
        },
        {
            id: 2,
            eng: "he, she, it ",
            ru: "is + прилагательное"
        },
        {
            id: 3,
            eng: "you, we, they ",
            ru: "are + прилагательное"
        },
        {
            id: 4,
            eng: "в английских  предложениях всегда есть: ",
            ru: "глагол ( либо are,am,is ) либо обычный"
        },
        {
            id: 5,
            eng: "когда в русском переводе нет глагола, добавляем: ",
            ru: "невидимку are , am , is"
        },
        {
            id: 6,
            eng: "are , am , is глаол невидимка ",
            ru: "так как его не видно в русском переводе"
        },
        {
            id: 7,
            eng: "учиться ",
            ru: "to study / ту стАди /"
        },
        {
            id: 8,
            eng: "прилагательные по-английски: ",
            ru: "adjectives / Эджэктивз / ударение на Э"
        },
        {
            id: 9,
            eng: "в русском языке у глаголов окончание -ТЬ ",
            ru: "в английском у глаголов частица to-"
        },
        {
            id: 10,
            eng: "to sleep ",
            ru: "спаТЬ"
        },
        {
            id: 11,
            eng: "to love ",
            ru: "любиТЬ"
        },
        {
            id: 12,
            eng: "I want to hug you ",
            ru: "я хочу обнять вас"
        },
        {
            id: 13,
            eng: "to drink ",
            ru: "пиТЬ"
        },
        {
            id: 14,
            eng: "to dance ",
            ru: "танцеваТЬ"
        },
        {
            id: 15,
            eng: "they love to sing ",
            ru: "они любят петь"
        },
        {
            id: 16,
            eng: "to do ",
            ru: "делаТЬ"
        },
        {
            id: 17,
            eng: "I do homework ",
            ru: "я делаю домаху я выполняю домашку"
        },
        {
            id: 18,
            eng: "TO read ",
            ru: "читаТЬ"
        },
    ],
    numbersIntro12: [
        {
            id: 1,
            ru: "1",
            eng: "one /уан/"
        },
        {
            id: 2,
            ru: "номер два",
            eng: "number two / нАмбэ ту/"
        },
        {
            id: 3,
            ru: "не Фри и не Сри",
            eng: "three межзубный звук/TH/"
        },
        {
            id: 4,
            ru: "4",
            eng: "four /фо/"
        },
        {
            id: 5,
            ru: "5 не файФ",
            eng: "five /файВ/"
        },
        {
            id: 6,
            ru: "не сИкс и не sex",
            eng: "six /сЫкс/"
        },
        {
            id: 7,
            ru: "7",
            eng: "seven /cЭвн/"
        },
        {
            id: 8,
            ru: "8",
            eng: "eight /Эйт/"
        },
        {
            id: 9,
            ru: "9",
            eng: "nine / нАйн/"
        },
        {
            id: 10,
            ru: "10",
            eng: "ten / тЭн/"
        },
        {
            id: 11,
            ru: "11",
            eng: "eleven / илЭвн/"
        },
        {
            id: 12,
            ru: "12",
            eng: "twelve / твЭлВ/"
        },
        {
            id: 13,
            ru: "не сЁртин и не Фёртин. Язык между зубов!",
            eng: "thirteen межзубный звук/TH/"
        },
        {
            id: 14,
            ru: "тянем ударение 14 teeeeeen ",
            eng: "foureen / фотИИИИн/"
        },
        {
            id: 15,
            ru: "долгий звук И 15 окончание teen",
            eng: "fifteen / фифтИИИн/"
        },
        {
            id: 16,
            ru: "16 ударение на И",
            eng: "sixteen / сыкстИн/"
        },
        {
            id: 17,
            ru: "20 уверенно!",
            eng: "twenty / твЭнти/"
        },
        {
            id: 17,
            ru: "/пЭа/ ПАРА = 2",
            eng: "a pair"
        },
        {
            id: 18,
            ru: "номера, числа",
            eng: "numbers /нАмбэz/"
        },
        {
            id: 19,
            ru: "цифры",
            eng: "digits /дИджитс/"
        },
        {
            id: 20,
            ru: "второй",
            eng: "the second 2nd"
        },
        {
            id: 21,
            ru: "самый первый",
            eng: "the first / 1st фёст/"
        },
        {
            id: 22,
            ru: "/ фром зироу ту найн/",
            eng: "0 - 9 от ноля до девяти"
        },
    ],
    numbersa1: [
        {
            id: 1,
            eng: "hundred /хАндрэд/",
            ru: "100"
        },
        {
            id: 2,
            eng: "thousand /Thаузэнд/",
            ru: "1000"
        },
        {
            id: 3,
            eng: "million /мИлион/",
            ru: "1'000'000"
        },
        {
            id: 4,
            eng: "zero /зИроу/",
            ru: "O"
        },
        {
            id: 5,
            eng: "one /уан/",
            ru: "1"
        },
        {
            id: 6,
            eng: "two /ту/",
            ru: "2"
        },
        {
            id: 7,
            eng: "three /Thри/",
            ru: "3"
        },
        {
            id: 8,
            eng: "four /фо/",
            ru: "4"
        },
        {
            id: 9,
            eng: "five /файв/",
            ru: "5"
        },
        {
            id: 10,
            eng: "six /сыкс/",
            ru: "6"
        },
        {
            id: 11,
            eng: "seven /сэвн/",
            ru: "7"
        },
        {
            id: 12,
            eng: "eight /эйт/",
            ru: "8"
        },
        {
            id: 13,
            eng: "nine /найн/",
            ru: "9"
        },
        {
            id: 14,
            eng: "ten /тэн/",
            ru: "10"
        },
        {
            id: 15,
            eng: "eleven /илэвн/",
            ru: "11"
        },
        {
            id: 16,
            eng: "twelve /туэлв/",
            ru: "12"
        },
        {
            id: 17,
            eng: "thirteen /THётИИИН/",
            ru: "13"
        },
        {
            id: 18,
            eng: "fourteen /фотИИИН/",
            ru: "14"
        },
        {
            id: 19,
            eng: "fifteen /фифтИИИН/",
            ru: "15"
        },
        {
            id: 20,
            eng: "sixteen /сыкстИИИН/",
            ru: "16"
        },
        {
            id: 21,
            eng: "seventeen /сэвнтИИИН/",
            ru: "17"
        },
        {
            id: 22,
            eng: "eighteen /эйтИИИН/",
            ru: "18"
        },
        {
            id: 23,
            eng: "nineteen /найнтИИИН/",
            ru: "19"
        },
        {
            id: 24,
            eng: "twenty /туЭнти/",
            ru: "20"
        },
    ],
    numbersa2: [
        {
            id: 1,
            eng: "a hundred-one /хАндрэд/",
            ru: "101"
        },
        {
            id: 2,
            eng: "a thousand one /Thаузэнд/",
            ru: "1001"
        },
        {
            id: 3,
            eng: "eight hundred /эйт хандрэд/",
            ru: "800"
        },
        {
            id: 4,
            eng: "eight thousand /эйт Thаузэнд/",
            ru: "8000"
        },
        {
            id: 5,
            eng: "zero /оу/",
            ru: "O"
        },
        {
            id: 6,
            eng: "three /Thри/",
            ru: "3"
        },
        {
            id: 7,
            eng: "six /сыкс/",
            ru: "6"
        },
        {
            id: 8,
            eng: "seven /сэвн/",
            ru: "7"
        },
        {
            id: 9,
            eng: "eight /эйт/",
            ru: "8"
        },
        {
            id: 10,
            eng: "sixty-nine ",
            ru: "69"
        },
        {
            id: 11,
            eng: "eleven /илэвн/",
            ru: "11"
        },
        {
            id: 12,
            eng: "twelve /туэлв/",
            ru: "12"
        },
        {
            id: 13,
            eng: "thirteen /THётИИИН/",
            ru: "13"
        },
        {
            id: 14,
            eng: "fourteen /фотИИИН/",
            ru: "14"
        },
        {
            id: 15,
            eng: "fifteen /фифтИИИН/",
            ru: "15"
        },
        {
            id: 16,
            eng: "sixteen /сыкстИИИН/",
            ru: "16"
        },
        {
            id: 17,
            eng: "seventeen /сэвнтИИИН/",
            ru: "17"
        },
        {
            id: 18,
            eng: "eighteen /эйтИИИН/",
            ru: "18"
        },
        {
            id: 19,
            eng: "nineteen /найнтИИИН/",
            ru: "19"
        },
        {
            id: 20,
            eng: "twenty /туЭнти/",
            ru: "20"
        },
        {
            id: 21,
            eng: "twenty-one ",
            ru: "21"
        },
        {
            id: 22,
            eng: "twenty-two ",
            ru: "22"
        },
        {
            id: 23,
            eng: "twenty-eight ",
            ru: "28"
        },
        {
            id: 24,
            eng: "twenty-nine ",
            ru: "29"
        },
        {
            id: 25,
            eng: "thirty-four ",
            ru: "34"
        },
        {
            id: 26,
            eng: "thirty /thЁти/",
            ru: "30"
        },
        {
            id: 27,
            eng: "forty-three ",
            ru: "43"
        },
        {
            id: 28,
            eng: "forty /фОти/",
            ru: "40"
        },
        {
            id: 29,
            eng: "twenty-four ",
            ru: "24"
        },
        {
            id: 30,
            eng: "fifty /фИфти/",
            ru: "50"
        },
        {
            id: 31,
            eng: "thirty-eight ",
            ru: "38"
        },
        {
            id: 32,
            eng: "thirty-nine ",
            ru: "39"
        },
        {
            id: 33,
            eng: "fifty-eight ",
            ru: "58"
        },
        {
            id: 34,
            eng: "fifty-nine ",
            ru: "59"
        },
        {
            id: 35,
            eng: "eighty /Эйти/",
            ru: "80"
        },
        {
            id: 36,
            eng: "ninety ",
            ru: "90"
        },
    ],
    firstSecond: [
        {
            id:1,
            eng:"the first / фЁст /",
            ru:"первый",
            },
            {
            id:2,
            eng:"the second / сэконд /",
            ru:"второй",
            },
            {
            id:3,
            eng:"the third / thЁрд /",
            ru:"третий",
            },
            {
            id:4,
            eng:"the fourth / фОth /",
            ru:"четвертый",
            },
            {
            id:5,
            eng:"the fifth / фИфth /",
            ru:"пятый",
            },
            {
            id:6,
            eng:"the sixth / сЫксth /",
            ru:"шестой",
            },
            {
            id:7,
            eng:"the eighth / ЭЙТth /",
            ru:"восьмой",
            },
            {
            id:8,
            eng:"the ninth / нАйнth /",
            ru:"девятый",
            },
            {
            id:9,
            eng:"the tenth / тЭнth /",
            ru:"десятый",
            },
            {
            id:10,
            eng:"the twelfth / туЭлвth /",
            ru:"двенадцатый",
            },
            {
            id:11,
            eng:"the twentieth / илЭвэнth /",
            ru:"двадцатый",
            },
            {
            id:12,
            eng:"the thirteenth / thЁртИИИнth /",
            ru:"тринадцатый",
            },
            {
            id:13,
            eng:"the fifteenth / фифтИИИИнth /",
            ru:"пятнадцатый",
            },
            {
            id:14,
            eng:"the fourteenth / фотИИИнth /",
            ru:"четырнадцатый",
            },
            {
            id:15,
            eng:"the thirtieth / thЁтиеth /",
            ru:"тридцатый",
            },
            {
            id:16,
            eng:"the zeroth / зИроth /",
            ru:"нулевой",
            },
            {
            id:17,
            eng:"the fortieth / фОтиеth /",
            ru:"сороковой",
            },
            {
            id:18,
            eng:"the hundredth / хАндрэдth /",
            ru:"сотый",
            },
            {
            id:19,
            eng:"the thousandth / thAуzэндth /",
            ru:"тысячный",
            },
            {
            id:20,
            eng:"the twenty-first / туэнти фЁст /",
            ru:"двадцать первый",
            },
            {
            id:21,
            eng:"the fifty-fifth / фИфти фифth /",
            ru:"пятьдесят пятый",
            },
            {
            id:22,
            eng:"the last / дэ ласт /",
            ru:"последний",
            },
            {
            id:23,
            eng:"the ninety-ninth / нАйнди нАйнth /",
            ru:"девяносто девятый",
            },
            {
            id:24,
            eng:"the eighty-eighth / Эйти Эйтth /",
            ru:"восемьдесят восьмой",
            },
    ],
    numbersb2: [
        {
            id: 1,
            eng: "2 plus 14 is ",
            ru: "sixteen"
        },
        {
            id: 2,
            eng: "8 plus 12 is ",
            ru: "twenty"
        },
        {
            id: 3,
            eng: "10 plus two is ",
            ru: "twelve"
        },
        {
            id: 4,
            eng: "9 plus nine is ",
            ru: "eighteen"
        },
        {
            id: 5,
            eng: "10 plus 7 is ",
            ru: "seventeen"
        },
        {
            id: 6,
            eng: "23 minus 8 is ",
            ru: "fifteen"
        },
        {
            id: 7,
            eng: "ten plus 9 is ",
            ru: "nineteen"
        },
        {
            id: 8,
            eng: "5 plus eight is ",
            ru: "thirteen"
        },
        {
            id: 9,
            eng: "eight + three is ",
            ru: "eleven"
        },
        {
            id: 10,
            eng: "four + four is ",
            ru: "eight "
        },
        {
            id: 11,
            eng: "five + four is ",
            ru: "nine "
        },
        {
            id: 12,
            eng: "nine - two is ",
            ru: "seven "
        },
        {
            id: 13,
            eng: "9 minus 6 is ",
            ru: "three"
        },
        {
            id: 14,
            eng: "20 - ten is ",
            ru: "thirty"
        },
        {
            id: 15,
            eng: "30 + 3 is ",
            ru: "thirty three"
        },
        {
            id: 16,
            eng: "20 + 8 is ",
            ru: "twenty eight"
        },
        {
            id: 17,
            eng: "89 minus 30 is ",
            ru: "fifty nine"
        },
        {
            id: 18,
            eng: "99 minus 30 is ",
            ru: "sixty nine"
        },
        {
            id: 19,
            eng: "90 + 8 is ",
            ru: "ninety eight"
        },
        {
            id: 20,
            eng: "twelve + 88 is ",
            ru: "a hundred"
        },
        {
            id: 21,
            eng: "plus + произносится: ",
            ru: "плас"
        },
        {
            id: 22,
            eng: "minus - произносится: ",
            ru: "майнэс"
        },
        {
            id: 23,
            eng: "равно = по-английски: ",
            ru: "is"
        },
        {
            id: 24,
            eng: "20 + twelve is ",
            ru: "thirty two"
        },
        {
            id: 25,
            eng: "15 + 50 is ",
            ru: "sixty five"
        },
    ],
    numbersspeak: [
        {
            id: 1,
            eng: "hundred /хАндрэд/",
            ru: "100"
        },
        {
            id: 2,
            eng: "thousand /Thаузэнд/",
            ru: "1000"
        },
        {
            id: 3,
            eng: "billion /бИллион/",
            ru: "миллиард"
        },
        {
            id: 4,
            eng: "million ",
            ru: "1'000'000"
        },
        {
            id: 5,
            eng: "zero /зИроу/",
            ru: ""
        },
        {
            id: 6,
            eng: "one /уан/",
            ru: "1"
        },
        {
            id: 7,
            eng: "two /ту/",
            ru: "2"
        },
        {
            id: 8,
            eng: "three /Thри/",
            ru: "3"
        },
        {
            id: 9,
            eng: "four /фо/",
            ru: "4"
        },
        {
            id: 10,
            eng: "five /файв/",
            ru: "5"
        },
        {
            id: 11,
            eng: "six /сыкс/",
            ru: "6"
        },
        {
            id: 12,
            eng: "seven /сэвн/",
            ru: "7"
        },
        {
            id: 13,
            eng: "eight /эйт/",
            ru: "8"
        },
        {
            id: 14,
            eng: "nine /найн/",
            ru: "9"
        },
        {
            id: 15,
            eng: "ten /тэн/",
            ru: "10"
        },
        {
            id: 16,
            eng: "eleven /илэвн/",
            ru: "11"
        },
        {
            id: 17,
            eng: "twelve /туэлв/",
            ru: "12"
        },
        {
            id: 18,
            eng: "thirteen /THётИИИН/",
            ru: "13"
        },
        {
            id: 19,
            eng: "fourteen /фотИИИН/",
            ru: "14"
        },
        {
            id: 20,
            eng: "fifteen /фифтИИИН/",
            ru: "15"
        },
        {
            id: 21,
            eng: "sixteen /сыкстИИИН/",
            ru: "16"
        },
        {
            id: 22,
            eng: "seventeen /сэвнтИИИН/",
            ru: "17"
        },
        {
            id: 23,
            eng: "eighteen /эйтИИИН/",
            ru: "18"
        },
        {
            id: 24,
            eng: "nineteen /найнтИИИН/",
            ru: "19"
        },
        {
            id: 25,
            eng: "twenty /туЭнти/",
            ru: "20"
        },
        {
            id: 26,
            eng: "twenty-one ",
            ru: "21"
        },
        {
            id: 27,
            eng: "twenty-two ",
            ru: "22"
        },
        {
            id: 28,
            eng: "twenty-three ",
            ru: "23"
        },
        {
            id: 29,
            eng: "twenty-four ",
            ru: "24"
        },
        {
            id: 30,
            eng: "twenty-five ",
            ru: "25"
        },
        {
            id: 31,
            eng: "twenty-six ",
            ru: "26"
        },
        {
            id: 32,
            eng: "twenty-seven ",
            ru: "27"
        },
        {
            id: 33,
            eng: "twenty-eight ",
            ru: "28"
        },
        {
            id: 34,
            eng: "twenty-nine ",
            ru: "29"
        },
        {
            id: 35,
            eng: "thirty /thЁти/",
            ru: "30"
        },
        {
            id: 36,
            eng: "thirty-one ",
            ru: "31"
        },
        {
            id: 37,
            eng: "thirty-two ",
            ru: "32"
        },
        {
            id: 38,
            eng: "thirty-three ",
            ru: "33"
        },
        {
            id: 39,
            eng: "thirty-four ",
            ru: "34"
        },
        {
            id: 40,
            eng: "thirty-five ",
            ru: "35"
        },
        {
            id: 41,
            eng: "thirty-six ",
            ru: "36"
        },
        {
            id: 42,
            eng: "thirty-seven ",
            ru: "37"
        },
        {
            id: 43,
            eng: "thirty-eight ",
            ru: "38"
        },
        {
            id: 44,
            eng: "thirty-nine ",
            ru: "39"
        },
        {
            id: 45,
            eng: "forty /фОти/",
            ru: "40"
        },
        {
            id: 46,
            eng: "forty-one ",
            ru: "41"
        },
        {
            id: 47,
            eng: "forty-two ",
            ru: "42"
        },
        {
            id: 48,
            eng: "forty-three ",
            ru: "43"
        },
        {
            id: 49,
            eng: "forty-four ",
            ru: "44"
        },
        {
            id: 50,
            eng: "forty-five ",
            ru: "45"
        },
        {
            id: 51,
            eng: "forty-six ",
            ru: "46"
        },
        {
            id: 52,
            eng: "forty-seven ",
            ru: "47"
        },
        {
            id: 53,
            eng: "forty-eight ",
            ru: "48"
        },
        {
            id: 54,
            eng: "forty-nine ",
            ru: "49"
        },
        {
            id: 55,
            eng: "fifty /фИфти/",
            ru: "50"
        },
        {
            id: 56,
            eng: "fifty-one ",
            ru: "51"
        },
        {
            id: 57,
            eng: "fifty-two ",
            ru: "52"
        },
        {
            id: 58,
            eng: "fifty-three ",
            ru: "53"
        },
        {
            id: 59,
            eng: "fifty-four ",
            ru: "54"
        },
        {
            id: 60,
            eng: "fifty-five ",
            ru: "55"
        },
        {
            id: 61,
            eng: "fifty-six ",
            ru: "56"
        },
        {
            id: 62,
            eng: "fifty-seven ",
            ru: "57"
        },
        {
            id: 63,
            eng: "fifty-eight ",
            ru: "58"
        },
        {
            id: 64,
            eng: "fifty-nine ",
            ru: "59"
        },
        {
            id: 65,
            eng: "sixty /сЫксти/",
            ru: "60"
        },
        {
            id: 66,
            eng: "sixty-one ",
            ru: "61"
        },
        {
            id: 67,
            eng: "sixty-two ",
            ru: "62"
        },
        {
            id: 68,
            eng: "sixty-three ",
            ru: "63"
        },
        {
            id: 69,
            eng: "sixty-four ",
            ru: "64"
        },
        {
            id: 70,
            eng: "sixty-five ",
            ru: "65"
        },
        {
            id: 71,
            eng: "sixty-six ",
            ru: "66"
        },
        {
            id: 72,
            eng: "sixty-seven ",
            ru: "67"
        },
        {
            id: 73,
            eng: "sixty-eight ",
            ru: "68"
        },
        {
            id: 74,
            eng: "sixty-nine ",
            ru: "69"
        },
        {
            id: 75,
            eng: "seventy /сЭвнти/",
            ru: "70"
        },
        {
            id: 76,
            eng: "seventy-one ",
            ru: "71"
        },
        {
            id: 77,
            eng: "seventy-two ",
            ru: "72"
        },
        {
            id: 78,
            eng: "seventy-three ",
            ru: "73"
        },
        {
            id: 79,
            eng: "seventy-four ",
            ru: "74"
        },
        {
            id: 80,
            eng: "seventy-five ",
            ru: "75"
        },
        {
            id: 81,
            eng: "seventy-six ",
            ru: "76"
        },
        {
            id: 82,
            eng: "seventy-seven ",
            ru: "77"
        },
        {
            id: 83,
            eng: "seventy-eight ",
            ru: "78"
        },
        {
            id: 84,
            eng: "seventy-nine ",
            ru: "79"
        },
        {
            id: 85,
            eng: "eighty /Эйти/",
            ru: "80"
        },
        {
            id: 86,
            eng: "eighty-one ",
            ru: "81"
        },
        {
            id: 87,
            eng: "eighty-two ",
            ru: "82"
        },
        {
            id: 88,
            eng: "eighty-three ",
            ru: "83"
        },
        {
            id: 89,
            eng: "eighty-four ",
            ru: "84"
        },
        {
            id: 90,
            eng: "eighty-five ",
            ru: "85"
        },
        {
            id: 91,
            eng: "eighty-six ",
            ru: "86"
        },
        {
            id: 92,
            eng: "eighty-seven ",
            ru: "87"
        },
        {
            id: 93,
            eng: "eighty-eight ",
            ru: "88"
        },
        {
            id: 94,
            eng: "eighty-nine ",
            ru: "89"
        },
        {
            id: 95,
            eng: "ninety /нАйнти/",
            ru: "90"
        },
        {
            id: 96,
            eng: "ninety-one ",
            ru: "91"
        },
        {
            id: 97,
            eng: "ninety-two ",
            ru: "92"
        },
        {
            id: 98,
            eng: "ninety-three ",
            ru: "93"
        },
        {
            id: 99,
            eng: "ninety-four ",
            ru: "94"
        },
        {
            id: 100,
            eng: "ninety-five ",
            ru: "95"
        },
        {
            id: 101,
            eng: "ninety-six ",
            ru: "96"
        },
        {
            id: 102,
            eng: "ninety-seven ",
            ru: "97"
        },
        {
            id: 103,
            eng: "ninety-eight ",
            ru: "98"
        },
        {
            id: 104,
            eng: "ninety-nine ",
            ru: "99"
        },
        {
            id: 105,
            eng: "the first ",
            ru: "первый"
        },
        {
            id: 106,
            eng: "the second ",
            ru: "второй"
        },
        {
            id: 107,
            eng: "the third ",
            ru: "третий"
        },
        {
            id: 108,
            eng: "the fourth ",
            ru: "четвертый"
        },
        {
            id: 109,
            eng: "the fifth ",
            ru: "пятый"
        },
        {
            id: 110,
            eng: "the sixth ",
            ru: "шестой"
        },
        {
            id: 111,
            eng: "the eighth ",
            ru: "восьмой"
        },
        {
            id: 112,
            eng: "the ninth ",
            ru: "девятый"
        },
        {
            id: 113,
            eng: "the tenth ",
            ru: "десятый"
        },
        {
            id: 114,
            eng: "the twelfth ",
            ru: "двенадцатый"
        },
        {
            id: 115,
            eng: "the twentieth ",
            ru: "двадцатый"
        },
        {
            id: 116,
            eng: "the fortieth ",
            ru: "сороковой"
        },
        {
            id: 117,
            eng: "the fourteenth ",
            ru: "четырнадцатый"
        },
        {
            id: 118,
            eng: "the zeroth ",
            ru: "нулевой"
        },
        {
            id: 119,
            eng: "the thirtieth ",
            ru: "тринадцатый"
        },
        {
            id: 120,
            eng: "the hundredth ",
            ru: "сотый"
        },
        {
            id: 121,
            eng: "the thousandth ",
            ru: "тысячный"
        },
        {
            id: 122,
            eng: "the twenty-first ",
            ru: "двадцать первый"
        },
        {
            id: 123,
            eng: "the fifty-fifth ",
            ru: "пятьдесят пятый"
        },
        {
            id: 124,
            eng: "the last ",
            ru: "последний"
        },
        {
            id: 125,
            eng: "the ninety-ninth ",
            ru: "девяносто девятый"
        },
        {
            id: 126,
            eng: "the eightieth ",
            ru: "восьмидесятый"
        },
        {
            id: 127,
            eng: "the eighty-eighth ",
            ru: "восемьдесят восьмой"
        },
        {
            id: 128,
            eng: "a hundred-one /хАндрэд/",
            ru: "101"
        },
        {
            id: 129,
            eng: "a thousand one /Thаузэнд/",
            ru: "1001"
        },
        {
            id: 130,
            eng: "eight hundred /эйт хандрэд/",
            ru: "800"
        },
        {
            id: 131,
            eng: "eight thousand /эйт Thаузэнд/",
            ru: "8000"
        },
    ],
    questionWords1: [
        {
            id: 1,
            eng: "When? / уэн /",
            ru: "Когда?"
        },
        {
            id: 2,
            eng: "Where? / уэ э /",
            ru: "Где?"
        },
        {
            id: 3,
            eng: "What? / уот /",
            ru: "Что?"
        },
        {
            id: 4,
            eng: "Why? / уай /",
            ru: "Для чего? Зачем? Почему?"
        },
        {
            id: 5,
            eng: "How? / хау /",
            ru: "Как?"
        },
        {
            id: 6,
            eng: "Who? / ху /",
            ru: "Кто?"
        },
        {
            id: 7,
            eng: "Whose? / хуз /",
            ru: "Чей?"
        },
        {
            id: 8,
            eng: "What time?         / уот тайм /",
            ru: "Во сколько?"
        },
        {
            id: 9,
            eng: "What color? / уот кАла /",
            ru: "Какого цвета?"
        },
        {
            id: 10,
            eng: "What size? / уот сайз /",
            ru: "Какого размера?"
        },
        {
            id: 11,
            eng: "How old? / хау оулд /",
            ru: "Какого возраста?"
        },
        {
            id: 12,
            eng: "How far? / хау фа /",
            ru: "Насколько далеко?"
        },
        {
            id: 13,
            eng: "Why the hell? / уай дэ хэл /",
            ru: "Какого чёрта?!?"
        },
        {
            id: 14,
            eng: "When do we start? ",
            ru: "Когда мы начнем?"
        },
        {
            id: 15,
            eng: "Where do you work? ",
            ru: "Где ты работаешь?"
        },
        {
            id: 16,
            eng: "How often do you do it? ",
            ru: "Как часто ты делаешь это?"
        },
        {
            id: 17,
            eng: "What time do we start? ",
            ru: "Во сколько мы стартуем?"
        },
        {
            id: 18,
            eng: "What time is it? ",
            ru: "Который час? Сколько время?"
        },
    ],
    questionWords2: [
        {
            id: 19,
            eng: "What shape? / уот шэйп /",
            ru: "Какой формы?"
        },
        {
            id: 20,
            eng: "With whom? / уиTH хум /",
            ru: "С кем?"
        },
        {
            id: 21,
            eng: "Come again? / кам эгэйн /",
            ru: "Чего, простите?"
        },
        {
            id: 22,
            eng: "How come? / хау кам /",
            ru: "Как так вышло? Как это произошло?"
        },
        {
            id: 23,
            eng: "What about … ? / уОт эбАут /",
            ru: "Что на счет … ?"
        },
        {
            id: 24,
            eng: "What car? / уОт ка /",
            ru: "Какая машина? Что за машина?"
        },
        {
            id: 25,
            eng: "How fast? / хАу фаст /",
            ru: "Как быстро?"
        },
        {
            id: 26,
            eng: "With or without? ",
            ru: "С или без?"
        },
        {
            id: 27,
            eng: "Here? / хИэ /",
            ru: "Здесь?"
        },
        {
            id: 28,
            eng: "There? / дЭэ /",
            ru: "Там?"
        },
        {
            id: 29,
            eng: "How about … ? / хАу эбАут /",
            ru: "Как насчет … ?"
        },
        {
            id: 30,
            eng: "What? / уОт /",
            ru: "Что или какой?"
        },
        {
            id: 31,
            eng: "Why the hell? / уай дэ хэл /",
            ru: "Какого чёрта?!?"
        },
        {
            id: 32,
            eng: "Here or there? / хИэ о дЭэ /",
            ru: "Здесь или там?"
        },
        {
            id: 33,
            eng: "How much time? / хау мАч тайм /",
            ru: "Сколько времени?"
        },
        {
            id: 34,
            eng: "How much? / хау мач /",
            ru: "Сколько + нельзя посчитать"
        },
        {
            id: 35,
            eng: "How many? / хау мЭни /",
            ru: "Сколько + можно посчитать"
        },
        {
            id: 36,
            eng: "Really? / рИли /",
            ru: "Правда чтоли? Реально?"
        },
    ],
    adj01: [
        {
            id:1,
            eng:"ugly / Агли /",
            ru:"уродливый",
            },
            {
            id:2,
            eng:"big / биГ /",
            ru:"большой",
            },
            {
            id:3,
            eng:"busy / бИзи /",
            ru:"занятой",
            },
            {
            id:4,
            eng:"bald / бОлд /",
            ru:"лысый",
            },
            {
            id:5,
            eng:"boring / бОрин /",
            ru:"скучный",
            },
            {
            id:6,
            eng:"beautiful / бьютифул /",
            ru:"красивая",
            },
            {
            id:7,
            eng:"bad / бЭд /",
            ru:"плохой",
            },
            {
            id:8,
            eng:"green / грин /",
            ru:"зелёный",
            },
            {
            id:9,
            eng:"great / грЭйт /",
            ru:"великий",
            },
            {
            id:10,
            eng:"good / гуд /",
            ru:"хороший",
            },
            {
            id:11,
            eng:"dark / дарк /",
            ru:"темный",
            },
            {
            id:12,
            eng:"dirty / дёти /",
            ru:"грязный",
            },
            {
            id:13,
            eng:"disgusting / дисгАстин /",
            ru:"отвратительный",
            },
            {
            id:14,
            eng:"drunk / дрАнк /",
            ru:"пьяный",
            },
            {
            id:15,
            eng:"early / ёли /",
            ru:"ранний, рано",
            },
            {
            id:16,
            eng:"easy / Изи /",
            ru:"легкий",
            },
            {
            id:17,
            eng:"interesting / ИНтрэстин /",
            ru:"интересный",
            },
            {
            id:18,
            eng:"kind / кАйнд /",
            ru:"добрый",
            },
            {
            id:19,
            eng:"calm / кам /",
            ru:"спокойный",
            },
            {
            id:20,
            eng:"young / ян /",
            ru:"молодой",
            },
            {
            id:21,
            eng:"clumsy / клАмзи /",
            ru:"неуклюжий",
            },
            {
            id:22,
            eng:"clean / клин /",
            ru:"чистый",
            },
            {
            id:23,
            eng:"muscular / мАскьюла /",
            ru:"мускулистый",
            },
            {
            id:24,
            eng:"old / оУлд /",
            ru:"старый",
            },
    ],
    adjectives02: [
        {
            id: 1,
            eng: "alive /элАйв/",
            ru: "живой"
        },
        {
            id: 2,
            eng: "amazing /эмЭйзин/",
            ru: "удивительный"
        },
        {
            id: 3,
            eng: "angry /Энгри/",
            ru: "сердитый"
        },
        {
            id: 4,
            eng: "annoying /энОин/",
            ru: "бесящий"
        },
        {
            id: 5,
            eng: "attractive /этрЭктив/",
            ru: "привлекательный"
        },
        {
            id: 6,
            eng: "awesome /Осм/",
            ru: "офигенный"
        },
        {
            id: 7,
            eng: "bad /бЭд/",
            ru: "плохой"
        },
        {
            id: 8,
            eng: "bald /бОлд/",
            ru: "лысый"
        },
        {
            id: 9,
            eng: "beautiful /бьютифул/",
            ru: "красивая"
        },
        {
            id: 10,
            eng: "big /биГ/",
            ru: "большой"
        },
        {
            id: 11,
            eng: "black /блЭк/",
            ru: "Черный"
        },
        {
            id: 12,
            eng: "bloody /блАди/",
            ru: "кровавый"
        },
        {
            id: 13,
            eng: "blue /блУ/",
            ru: "синий"
        },
        {
            id: 14,
            eng: "bold /бОлд/",
            ru: "смелый"
        },
        {
            id: 15,
            eng: "boring /бОрин/",
            ru: "скучный"
        },
        {
            id: 16,
            eng: "bossy /бОсси/",
            ru: "властный"
        },
        {
            id: 17,
            eng: "bothering /бАthэрин/",
            ru: "раздражающий"
        },
        {
            id: 18,
            eng: "brave /брЭйв/",
            ru: "храбрый"
        },
        {
            id: 19,
            eng: "breathtaking /брэth тэйкин/",
            ru: "захватывающий дух"
        },
        {
            id: 20,
            eng: "bright /брАйт/",
            ru: "яркий"
        },
        {
            id: 21,
            eng: "busy /бИзи/",
            ru: "занятой"
        },
        {
            id: 22,
            eng: "calm /кам/",
            ru: "спокойный"
        },
        {
            id: 23,
            eng: "cheap /чип/",
            ru: "дешевый"
        },
        {
            id: 24,
            eng: "clean /клин/",
            ru: "чистый"
        },
    ],
    verbs001: [
        {
            id:1,
            eng:"to kiss somebody / кис сАмбади /",
            ru:"целовать кого-то",
            },
            {
            id:2,
            eng:"to go to work / гОУ ту ворк /",
            ru:"ходить на работу",
            },
            {
            id:3,
            eng:"to do homework / ду хОумворк /",
            ru:"делать или выполнять домашку",
            },
            {
            id:4,
            eng:"to sleep / слип /",
            ru:"спать",
            },
            {
            id:5,
            eng:"to run / рАн /",
            ru:"бегать",
            },
            {
            id:6,
            eng:"to jump / джАмп /",
            ru:"прыгать",
            },
            {
            id:7,
            eng:"to do number one / ду нАмбэ уАн /",
            ru:"ходить 'по-маленькому' (писать)",
            },
            {
            id:8,
            eng:"to do number two / ду нАмбэ ту /",
            ru:"ходить 'по-большому' (какать)",
            },
            {
            id:9,
            eng:"to walk / уОлк /",
            ru:"гулять",
            },
            {
            id:10,
            eng:"to play football / плэй фУтбол /",
            ru:"играть в футбол",
            },
            {
            id:11,
            eng:"to play games / плэй гЕймz /",
            ru:"играть в игры",
            },
            {
            id:12,
            eng:"to play the guitar / плЭй дэ гитА /",
            ru:"играть на гитаре",
            },
            {
            id:13,
            eng:"to sing a song / сИн э сОн /",
            ru:"петь песню",
            },
            {
            id:14,
            eng:"to watch movies / уОч мУвиz /",
            ru:"смотреть фильмы",
            },
            {
            id:15,
            eng:"to drink / дринк /",
            ru:"пить",
            },
            {
            id:16,
            eng:"to close / клОУz /",
            ru:"закрывать",
            },
            {
            id:17,
            eng:"to open / Оупэн /",
            ru:"открывать",
            },
            {
            id:18,
            eng:"to look at a teacher / лук эт э тИче /",
            ru:"смотреть на учителя",
            },
            {
            id:19,
            eng:"to give / гив /",
            ru:"давать",
            },
            {
            id:20,
            eng:"to take / тЭйк /",
            ru:"брать",
            },
            {
            id:21,
            eng:"to do something / ду самTHын /",
            ru:"делать что-то",
            },
            {
            id:22,
            eng:"to make something / мЭйк самTHын /",
            ru:"создавать что-то",
            },
            {
            id:23,
            eng:"to read books / рид букс /",
            ru:"читать книги",
            },
    ],
    verbs002old: [
        {
            id: 1,
            eng: "go to GYM / джим /",
            ru: "ходить в спортзал"
        },
        {
            id: 2,
            eng: "go to university / юнивЁсити /",
            ru: "идти в университет"
        },
        {
            id: 3,
            eng: "go to a café / кЭфи /",
            ru: "ходить в кафе"
        },
        {
            id: 4,
            eng: "do number one / ду нАмбэ уАн /",
            ru: "ходить 'по-маленькому' (писать)"
        },
        {
            id: 5,
            eng: "do number two / ду нАмбэ ту /",
            ru: "ходить 'по-большому' (какать)"
        },
        {
            id: 6,
            eng: "have breakfast / хэв брЭкфаст /",
            ru: "завтракать"
        },
        {
            id: 7,
            eng: "make breakfast / мэйк брЭкфаст /",
            ru: "делать завтрак"
        },
        {
            id: 8,
            eng: "have dinner / хэв дИнэ /",
            ru: "ужинать"
        },
        {
            id: 9,
            eng: "make dinner / мэйк дИнэ /",
            ru: "делать ужин"
        },
        {
            id: 10,
            eng: "cook some food / кук сам фуД /",
            ru: "приготовить немного еды"
        },
        {
            id: 11,
            eng: "eat something / ит самTHын /",
            ru: "есть что-нибудь кушать что-либо"
        },
        {
            id: 12,
            eng: "do exercises / ду Эксэсайzэz /",
            ru: "делать, выполнять упражнения"
        },
        {
            id: 13,
            eng: "do yoga / ду ёга /",
            ru: "аниматься йогой"
        },
        {
            id: 14,
            eng: "do some sports / ду сам спортс /",
            ru: "заниматься каким-то спортом"
        },
        {
            id: 15,
            eng: "take и have a shower / шАуэ /",
            ru: "принимать душ мыться в душе"
        },
        {
            id: 16,
            eng: "have a wash / хэв э вош /",
            ru: "умываться"
        },
        {
            id: 17,
            eng: "wash the dishes / вош дэ дишеz /",
            ru: "мыть посуду"
        },
        {
            id: 18,
            eng: "wash hands / вош хэндз /",
            ru: "помыть руки"
        },
        {
            id: 19,
            eng: "have lunch / хэв ланч /",
            ru: "обедать"
        },
        {
            id: 20,
            eng: "make lunch / мэйк ланч /",
            ru: "делать обед"
        },
        {
            id: 21,
            eng: "relax / рилЭкс /",
            ru: "расслабиться"
        },
        {
            id: 22,
            eng: "have some rest / хэв сам рест /",
            ru: "немножечко отдохнуть"
        },
        {
            id: 23,
            eng: "surf the internet / сёрф /",
            ru: "залипать в интернете"
        },
    ],
    presentSimpleMarkers: [
        {
            id: 1,
            eng: "every day / эври дэй /",
            ru: "каждый день"
        },
        {
            id: 2,
            eng: "usually / южали /",
            ru: "обычно"
        },
        {
            id: 3,
            eng: "never / нЭвэ /",
            ru: "никогда"
        },
        {
            id: 4,
            eng: "sometimes / самтаймЗ /",
            ru: "иногда"
        },
        {
            id: 5,
            eng: "from time to time / фром тайм ту тайм /",
            ru: "от времени к времени"
        },
        {
            id: 6,
            eng: "not often / нат офэн /",
            ru: "не часто"
        },
        {
            id: 7,
            eng: "often / офэн / и / офтен /",
            ru: "часто"
        },
        {
            id: 8,
            eng: "not very often / нат вэри офтэн /",
            ru: "не очень часто"
        },
        {
            id: 9,
            eng: "once a day / уАнс э дэй /",
            ru: "раз в день"
        },
        {
            id: 10,
            eng: "once a week / уАнс э уик /",
            ru: "раз в неделю"
        },
        {
            id: 11,
            eng: "once a year / уАнс э Йиэ /",
            ru: "раз в год"
        },
        {
            id: 12,
            eng: "twice a day / твайс э дэй /",
            ru: "дважды в день"
        },
        {
            id: 13,
            eng: "twice a week / твайс э уик /",
            ru: "дважды в неделю"
        },
        {
            id: 14,
            eng: "every week / Эври уик /",
            ru: "каждую неделю"
        },
        {
            id: 15,
            eng: "once a month / уАнс э мАнth /",
            ru: "раз в месяц"
        },
        {
            id: 16,
            eng: "two times a month / ту таймz э мАнth /",
            ru: "два раза в месяц"
        },
        {
            id: 17,
            eng: "two times in life / ту таймz ин лАЙф /",
            ru: "два раза за жизнь"
        },
        {
            id: 18,
            eng: "three times a year / thри таймz э Йиэ /",
            ru: "три раза в год"
        },
        {
            id: 19,
            eng: "five days a week / файВ дэйz э уик /",
            ru: "пять днеййй в неделю"
        },
        {
            id: 20,
            eng: "every month / эври мАнth /",
            ru: "каждый месяц"
        },
        {
            id: 21,
            eng: "on Thursdays / он thОсдэйz /",
            ru: "по четвергам"
        },
        {
            id: 22,
            eng: "every Wednesday / эври уЭнсдэй /",
            ru: "каждую среду"
        },
        {
            id: 23,
            eng: "seldom, rarely / сэлдом рЭАли /",
            ru: "редко, изредка"
        },
    ],
    m014old: [
        {
            id: 1,
            eng: "everybody / Эврибади /",
            ru: "каждый или все"
        },
        {
            id: 2,
            eng: "everything / ЭвриTHын /",
            ru: "всё"
        },
        {
            id: 3,
            eng: "nothing / наTHын /",
            ru: "ничего или ничто"
        },
        {
            id: 4,
            eng: "something / самTHын /",
            ru: "что-то определённое"
        },
        {
            id: 5,
            eng: "somewhere / самУЭэ /",
            ru: "где-то"
        },
        {
            id: 6,
            eng: "somehow / сАмхАу /",
            ru: "как-то, как-нибудь"
        },
        {
            id: 7,
            eng: "somebody / самбАди /",
            ru: "кто-то"
        },
        {
            id: 8,
            eng: "anyone / Эниуан /",
            ru: "кто-угодно"
        },
        {
            id: 9,
            eng: "anything / ЭниTHын /",
            ru: "что-угодно"
        },
        {
            id: 10,
            eng: "all + сущ. / ол /",
            ru: "все + …"
        },
        {
            id: 11,
            eng: "all people / ол пипл /",
            ru: "все люди"
        },
        {
            id: 12,
            eng: "I know somebody / ай ноу сАмбади /",
            ru: "я кого-то знаю"
        },
        {
            id: 13,
            eng: "I know nobody / ай ноу нОубади /",
            ru: "я не знаю никого"
        },
        {
            id: 14,
            eng: "I have nothing или I don't have anything ",
            ru: "у меня ничего нет"
        },
        {
            id: 15,
            eng: "I see nothing или I don't see anything ",
            ru: "я ничего не вижу"
        },
        {
            id: 16,
            eng: "everybody is there / эврибади из дЭа /",
            ru: "все там"
        },
        {
            id: 17,
            eng: "nobody is here / нОубади из хиэ /",
            ru: "здесь никого нет"
        },
    ],
    sara001: [
        {
            id: 1,
            eng: "wake up early / уэйк ап ёли /",
            ru: "просыпаться рано"
        },
        {
            id: 2,
            eng: "get up / гет ап /",
            ru: "вставать"
        },
        {
            id: 3,
            eng: "have a shower / шАуэ /",
            ru: "иметь душ (мыться в душе)"
        },
        {
            id: 4,
            eng: "take a shower / шАуэ /",
            ru: "взять душ (принять душ)"
        },
        {
            id: 5,
            eng: "brush teeth / браш /",
            ru: "начищать зубы  "
        },
        {
            id: 6,
            eng: "clean teeth / клИн /",
            ru: "чистить зубы"
        },
        {
            id: 7,
            eng: "get dressed / дрЭСТ /",
            ru: "одеваться"
        },
        {
            id: 8,
            eng: "go to the kitchen ",
            ru: "идти на кухню"
        },
        {
            id: 9,
            eng: "go to the bathroom / бАthрум /",
            ru: "идти в ванную"
        },
        {
            id: 10,
            eng: "go to the bedroom / бЭдрум /",
            ru: "идти в спальню"
        },
        {
            id: 11,
            eng: "go to the living room / лИвин /",
            ru: "идти в гостиную"
        },
        {
            id: 12,
            eng: "have a cup of coffee or tea / тИ /",
            ru: "пить чашечку кофе или чая"
        },
        {
            id: 13,
            eng: "take a cup of tea / тИ /",
            ru: "взять чашку чая"
        },
        {
            id: 14,
            eng: "get a glass of wine / уАйн /",
            ru: "достать бокал вина"
        },
        {
            id: 15,
            eng: "drink a bottle of milk ",
            ru: "выпить бутылку молока"
        },
        {
            id: 16,
            eng: "leave the house / лив дэ хаус /",
            ru: "покидать дом"
        },
        {
            id: 17,
            eng: "walk / вОлк /",
            ru: "гулять"
        },
        {
            id: 18,
            eng: "walk to the station ",
            ru: "гулять до станции"
        },
        {
            id: 19,
            eng: "wait for something ",
            ru: "ждать чего-то"
        },
        {
            id: 20,
            eng: "wait for the train / трЭйн /",
            ru: "ждать поезда"
        },
        {
            id: 21,
            eng: "look at the phone ",
            ru: "смотреть на телефон"
        },
        {
            id: 22,
            eng: "walk somewhere / сАмуЭэ /",
            ru: "гулять где-то"
        },
        {
            id: 23,
            eng: "work for a big company ",
            ru: "работать на большую компанию"
        },
    ],
    sara002: [
        {
            id: 24,
            eng: "walk to a bus stop / бАс стАп /",
            ru: "прогуляться до остановки автобуса"
        },
        {
            id: 25,
            eng: "talk to somebody / тОк ту сАмбади /",
            ru: "говорить с кем-то"
        },
        {
            id: 26,
            eng: "talk / тОк /",
            ru: "говорить"
        },
        {
            id: 27,
            eng: "talk on the phone ",
            ru: "говорить по телефону"
        },
        {
            id: 28,
            eng: "speak with somebody ",
            ru: "разговаривать с кем-то"
        },
        {
            id: 29,
            eng: "write / рАйт /",
            ru: "писАть"
        },
        {
            id: 30,
            eng: "write an e-mail ",
            ru: "писать письма"
        },
        {
            id: 31,
            eng: "have meetings ",
            ru: "иметь встречи"
        },
        {
            id: 32,
            eng: "have lunch in a café / кЭфи /",
            ru: "обедать в кафе"
        },
        {
            id: 33,
            eng: "have lunch at work ",
            ru: "обедать на работе"
        },
        {
            id: 34,
            eng: "work all day / Ол дЭй /",
            ru: "работать весь день"
        },
        {
            id: 35,
            eng: "finish work day ",
            ru: "заканчивать рабочий день"
        },
        {
            id: 36,
            eng: "go home ",
            ru: "идти домой"
        },
        {
            id: 37,
            eng: "cook dinner ",
            ru: "готовить ужин"
        },
        {
            id: 38,
            eng: "watch TeleVision  (TV) / уОтч тЕлевИжн /",
            ru: "смотреть телевизор"
        },
        {
            id: 39,
            eng: "have dinner / хэв дИнэ /",
            ru: "ужинать"
        },
        {
            id: 40,
            eng: "go to bed ",
            ru: "идти в постель"
        },
        {
            id: 41,
            eng: "have dreams / дрИмз /",
            ru: "иметь мечты"
        },
        {
            id: 42,
            eng: "dream / дрИм /",
            ru: "мечтать"
        },
        {
            id: 43,
            eng: "get e-mails ",
            ru: "получать письма"
        },
        {
            id: 44,
            eng: "check e-mails ",
            ru: "проверять почту"
        },
        {
            id: 45,
            eng: "wait for somebody / уЭйт фО сАмбади /",
            ru: "ждать кого-то"
        },
        {
            id: 46,
            eng: "sing a song / сИн Э сОн /",
            ru: "петь песню"
        },
    ],
    naughty1: [
        {
            id: 1,
            eng: "break, broke, broken",
            ru: "ломать"
        },
        {
            id: 2,
            eng: "beat, beat, beaten",
            ru: "побить"
        },
        {
            id: 3,
            eng: "become, became, become",
            ru: "становиться"
        },
        {
            id: 4,
            eng: "begin, began, begun",
            ru: "начинать"
        },
        {
            id: 5,
            eng: "blow, blew, blown",
            ru: "дуть"
        },
        {
            id: 6,
            eng: "borrow, borrowed, borrowed",
            ru: "брать в долг"
        },
        {
            id: 7,
            eng: "build, built, built",
            ru: "строить"
        },
        {
            id: 8,
            eng: "burn, burnt, burnt",
            ru: "сжигать, гореть"
        },
        {
            id: 9,
            eng: "buy, bought, bought",
            ru: "покупать"
        },
        {
            id: 10,
            eng: "bring, brought, brought",
            ru: "приносить"
        },
        {
            id: 11,
            eng: "be, (was,were), been",
            ru: "быть"
        },
        {
            id: 12,
            eng: "bite, bit, bit",
            ru: "кусать"
        },
        {
            id: 13,
            eng: "come, came, come",
            ru: "приходить"
        },
        {
            id: 14,
            eng: "choose, chose, chosen",
            ru: "выбирать"
        },
        {
            id: 15,
            eng: "catch, caught, caught",
            ru: "ловить"
        },
        {
            id: 16,
            eng: "creep, crept, crept",
            ru: "ползать"
        },
        {
            id: 17,
            eng: "cost, cost, cost",
            ru: "стоить"
        },
        {
            id: 18,
            eng: "cut, cut, cut",
            ru: "резать"
        },
        {
            id: 19,
            eng: "deal, dealt, dealt",
            ru: "иметь дела"
        },
        {
            id: 20,
            eng: "dig, dug, dug",
            ru: "копать"
        },
        {
            id: 21,
            eng: "do, did, done",
            ru: "делать"
        },
        {
            id: 22,
            eng: "drive, drove, driven",
            ru: "водить"
        },
        {
            id: 23,
            eng: "draw, drew, drawn",
            ru: "рисовать"
        },
        {
            id: 24,
            eng: "drink, drank, drunk",
            ru: "пить"
        },
    ],
    naughty2: [
        {
            id: 25,
            eng: "eat, ate, eaten",
            ru: "кушать"
        },
        {
            id: 26,
            eng: "fall, fell, fallen",
            ru: "падать"
        },
        {
            id: 27,
            eng: "feed, fed, fed",
            ru: "кормить"
        },
        {
            id: 28,
            eng: "feel, felt, felt",
            ru: "чувствовать"
        },
        {
            id: 29,
            eng: "fight, fought, fought",
            ru: "сражаться"
        },
        {
            id: 30,
            eng: "find, found, found",
            ru: "находить"
        },
        {
            id: 31,
            eng: "fly, flew, flown",
            ru: "летать"
        },
        {
            id: 32,
            eng: "forbid, forbade, forbidden",
            ru: "запрещать"
        },
        {
            id: 33,
            eng: "forget, forgot, forgotten",
            ru: "забывать"
        },
        {
            id: 34,
            eng: "forgive, forgave, forgiven",
            ru: "прощать"
        },
        {
            id: 35,
            eng: "freeze, froze, frozen",
            ru: "замерзать"
        },
        {
            id: 36,
            eng: "grow, grew, grown",
            ru: "расти"
        },
        {
            id: 37,
            eng: "get, got, got",
            ru: "получать"
        },
        {
            id: 38,
            eng: "give, gave, given",
            ru: "давать"
        },
        {
            id: 39,
            eng: "go, went, gone",
            ru: "ходить"
        },
        {
            id: 40,
            eng: "have, had, had",
            ru: "иметь"
        },
        {
            id: 41,
            eng: "hear, heard, heard",
            ru: "слышать"
        },
        {
            id: 42,
            eng: "hide, hid, hidden",
            ru: "прятать"
        },
        {
            id: 43,
            eng: "hit, hit, hit",
            ru: "ударять"
        },
        {
            id: 44,
            eng: "hurt, hurt, hurt",
            ru: "причинять боль"
        },
        {
            id: 45,
            eng: "hold, held, held",
            ru: "держать"
        },
        {
            id: 46,
            eng: "keep, kept, kept",
            ru: "хранить"
        },
        {
            id: 47,
            eng: "know, knew, known",
            ru: "знать"
        },
    ],
    naughty3: [
        {
            id: 48,
            eng: "lead, led, led",
            ru: "вести, приводить"
        },
        {
            id: 49,
            eng: "learn, learnt, learnt",
            ru: "изучать"
        },
        {
            id: 50,
            eng: "leave, left, left",
            ru: "покидать"
        },
        {
            id: 51,
            eng: "lend, lent, lent",
            ru: "давать в долг"
        },
        {
            id: 52,
            eng: "let, let, let",
            ru: "позволять"
        },
        {
            id: 53,
            eng: "lose, lost, lost",
            ru: "терять"
        },
        {
            id: 54,
            eng: "tell a lie, told a lie, told a lie",
            ru: "говорить ложь"
        },
        {
            id: 55,
            eng: "lie, lay, lain",
            ru: "лежать"
        },
        {
            id: 56,
            eng: "make, made, made",
            ru: "создавать"
        },
        {
            id: 57,
            eng: "mean, meant, meant",
            ru: "иметь ввиду"
        },
        {
            id: 58,
            eng: "meet, met, met",
            ru: "встречать(ся)"
        },
        {
            id: 59,
            eng: "pay, paid, paid",
            ru: "платить"
        },
        {
            id: 60,
            eng: "put, put, put",
            ru: "класть"
        },
        {
            id: 61,
            eng: "read, read, read",
            ru: "читать"
        },
        {
            id: 62,
            eng: "ride, rode, ridden",
            ru: "ездить верхом"
        },
        {
            id: 63,
            eng: "ring, rang, rung",
            ru: "звенеть, звонить"
        },
        {
            id: 64,
            eng: "run, ran, run",
            ru: "бегать"
        },
        {
            id: 65,
            eng: "rise, rose, risen",
            ru: "подниматься"
        },
    ],
    naughty4: [
        {
            id: 66,
            eng: "say, said, said",
            ru: "сказать, произнести"
        },
        {
            id: 67,
            eng: "see, saw, seen",
            ru: "увидеть"
        },
        {
            id: 68,
            eng: "sell, sold, sold",
            ru: "продавать"
        },
        {
            id: 69,
            eng: "send, sent, sent",
            ru: "отправлять"
        },
        {
            id: 70,
            eng: "shake, shook, shaken",
            ru: "трясти"
        },
        {
            id: 71,
            eng: "shoot, shot, shot",
            ru: "стрелять"
        },
        {
            id: 72,
            eng: "shut, shut, shut",
            ru: "захлопнуть"
        },
        {
            id: 73,
            eng: "sing, sang, sung",
            ru: "петь"
        },
        {
            id: 74,
            eng: "sink, sank, sunk",
            ru: "затонуть"
        },
        {
            id: 75,
            eng: "sit, sat, sat",
            ru: "сидеть"
        },
        {
            id: 76,
            eng: "sleep, slept, slept",
            ru: "спать"
        },
        {
            id: 77,
            eng: "slide, slid, slid",
            ru: "скользить"
        },
        {
            id: 78,
            eng: "speak, spoke, spoken",
            ru: "разговаривать"
        },
        {
            id: 79,
            eng: "spend, spent, spent",
            ru: "тратить"
        },
        {
            id: 80,
            eng: "spit, spat, spat",
            ru: "плеваться"
        },
        {
            id: 81,
            eng: "stand, stood, stood",
            ru: "встать, стоять"
        },
        {
            id: 82,
            eng: "steal, stole, stolen",
            ru: "воровать"
        },
        {
            id: 83,
            eng: "stick, stuck, stuck",
            ru: "приклеить, застрять "
        },
        {
            id: 84,
            eng: "stink, stank, stunk",
            ru: "вонять"
        },
        {
            id: 85,
            eng: "strike, struck, struck",
            ru: "ударять"
        },
        {
            id: 86,
            eng: "swear, swore, sworn",
            ru: "клясться, материться "
        },
        {
            id: 87,
            eng: "sweep, swept, swept",
            ru: "подметать"
        },
        {
            id: 88,
            eng: "swim, swam, swum",
            ru: "плавать"
        },
        {
            id: 89,
            eng: "swing, swung, swung",
            ru: "качаться"
        },
    ],
    naughty5: [
        {
            id: 90,
            eng: "take, took, taken",
            ru: "брать"
        },
        {
            id: 91,
            eng: "teach, taught, taught",
            ru: "обучать"
        },
        {
            id: 92,
            eng: "tear, tore, torn",
            ru: "порвать"
        },
        {
            id: 93,
            eng: "tell, told, told",
            ru: "рассказывать"
        },
        {
            id: 94,
            eng: "think, thought, thought",
            ru: "думать"
        },
        {
            id: 95,
            eng: "throw, threw, thrown",
            ru: "бросать"
        },
        {
            id: 96,
            eng: "understand, understood, understood",
            ru: "понимать"
        },
        {
            id: 97,
            eng: "wake up, woke up, woken up",
            ru: "просыпаться"
        },
        {
            id: 98,
            eng: "wear, wore, worn",
            ru: "носить одежду"
        },
        {
            id: 99,
            eng: "write, wrote, written",
            ru: "писАть"
        },
        {
            id: 100,
            eng: "weep, wept, wept",
            ru: "хныкать"
        },
        {
            id: 101,
            eng: "win, won, won",
            ru: "выигрывать"
        },
        {
            id: 102,
            eng: "misunderstand, misunderstood, misunderstood",
            ru: "неправильно понять"
        },
        {
            id: 103,
            eng: "misspell, misspelt, misspelt",
            ru: "неправильно написать"
        },
        {
            id: 104,
            eng: "mistake, mistook, mistaken",
            ru: "ошибаться"
        },
        {
            id: 105,
            eng: "mishear, misheard, misheard",
            ru: "неправильно услышать"
        },
        {
            id: 106,
            eng: "oversleep, overslept, overslept",
            ru: "проспать"
        },
        {
            id: 107,
            eng: "overeat, overate, overeaten",
            ru: "переесть "
        },
        {
            id: 108,
            eng: "overpay, overpaid, overpaid",
            ru: "переплатить"
        },
        {
            id: 109,
            eng: "arise, arose, arisen",
            ru: "возникнуть"
        },
        {
            id: 110,
            eng: "awake, awoke, awoken",
            ru: "пробудиться"
        },
        {
            id: 111,
            eng: "abide, abode, abidden",
            ru: "соблюдать пребывать обитать"
        },
    ],
    naughtyB: [
        {
            id: 1,
            eng: "break / брЭйк / broke broken",
            ru: "ломать"
        },
        {
            id: 2,
            eng: "beat / бит / beat beaten",
            ru: "побить"
        },
        {
            id: 3,
            eng: "become / бекАм / became become",
            ru: "становиться"
        },
        {
            id: 4,
            eng: "begin / бегИн / began begun",
            ru: "начинать"
        },
        {
            id: 5,
            eng: "blow / блОу / blew blown",
            ru: "дуть"
        },
        {
            id: 6,
            eng: "borrow / бОроу / borrowed borrowed",
            ru: "брать в долг"
        },
        {
            id: 7,
            eng: "build / билд / built built",
            ru: "строить"
        },
        {
            id: 8,
            eng: "burn / бЁрн / burnt burnt",
            ru: "сжигать, гореть"
        },
        {
            id: 9,
            eng: "buy / бАй / bought bought",
            ru: "покупать"
        },
        {
            id: 10,
            eng: "bring / брин / brought brought",
            ru: "приносить"
        },
        {
            id: 11,
            eng: "be / эм из а / (was,were) been",
            ru: "быть"
        },
        {
            id: 12,
            eng: "bite / бАйт /  bit  bit ",
            ru: "кусать"
        },
    ],
    naughtyVerbsCD: [
        {
            id:13,
            eng:"come, came, come",
            ru:"приходить",
            },
            {
            id:14,
            eng:"choose, chose, chosen",
            ru:"выбирать",
            },
            {
            id:15,
            eng:"catch, caught, caught",
            ru:"ловить",
            },
            {
            id:16,
            eng:"creep, crept, crept",
            ru:"ползать",
            },
            {
            id:17,
            eng:"cost, cost, cost",
            ru:"стоить",
            },
            {
            id:18,
            eng:"cut, cut, cut",
            ru:"резать",
            },
            {
            id:19,
            eng:"deal, dealt, dealt",
            ru:"иметь дела",
            },
            {
            id:20,
            eng:"dig, dug, dug",
            ru:"копать",
            },
            {
            id:21,
            eng:"do, did, done",
            ru:"делать",
            },
            {
            id:22,
            eng:"drive, drove, driven",
            ru:"водить",
            },
            {
            id:23,
            eng:"draw, drew, drawn",
            ru:"рисовать",
            },
            {
            id:24,
            eng:"drink, drank, drunk",
            ru:"пить",
            },
    ],
    naughtyVerbsEF: [
        {
            id:25,
            eng:"eat, ate, eaten",
            ru:"кушать",
            },
            {
            id:26,
            eng:"fall, fell, fallen",
            ru:"падать",
            },
            {
            id:27,
            eng:"feed, fed, fed",
            ru:"кормить",
            },
            {
            id:28,
            eng:"feel, felt, felt",
            ru:"чувствовать",
            },
            {
            id:29,
            eng:"fight, fought, fought",
            ru:"сражаться",
            },
            {
            id:30,
            eng:"find, found, found",
            ru:"находить",
            },
            {
            id:31,
            eng:"fly, flew, flown",
            ru:"летать",
            },
            {
            id:32,
            eng:"forbid, forbade, forbidden",
            ru:"запрещать",
            },
            {
            id:33,
            eng:"forget, forgot, forgotten",
            ru:"забывать",
            },
            {
            id:34,
            eng:"forgive, forgave, forgiven",
            ru:"прощать",
            },
            {
            id:35,
            eng:"freeze, froze, frozen",
            ru:"замерзать",
            },
    ],
    naughtyVerbsGH: [
        {
            id:36,
            eng:"grow, grew, grown",
            ru:"расти",
            },
            {
            id:37,
            eng:"get, got, got",
            ru:"получать",
            },
            {
            id:38,
            eng:"give, gave, given",
            ru:"давать",
            },
            {
            id:39,
            eng:"go, went, gone",
            ru:"ходить",
            },
            {
            id:40,
            eng:"have, had, had",
            ru:"иметь",
            },
            {
            id:41,
            eng:"hear, heard, heard",
            ru:"слышать",
            },
            {
            id:42,
            eng:"hide, hid, hidden",
            ru:"прятать",
            },
            {
            id:43,
            eng:"hit, hit, hit",
            ru:"ударять",
            },
            {
            id:44,
            eng:"hurt, hurt, hurt",
            ru:"причинять боль",
            },
            {
            id:45,
            eng:"hold, held, held",
            ru:"держать",
            },
    ],
    naughtyVerbsKL: [
        {
            id:46,
            eng:"keep, kept, kept",
            ru:"хранить",
            },
            {
            id:47,
            eng:"know, knew, known",
            ru:"знать",
            },
            {
            id:48,
            eng:"lead, led, led",
            ru:"вести, приводить",
            },
            {
            id:49,
            eng:"learn, learnt, learnt",
            ru:"изучать",
            },
            {
            id:50,
            eng:"leave, left, left",
            ru:"покидать",
            },
            {
            id:51,
            eng:"lend, lent, lent",
            ru:"давать в долг",
            },
            {
            id:52,
            eng:"let, let, let",
            ru:"позволять",
            },
            {
            id:53,
            eng:"lose, lost, lost",
            ru:"терять",
            },
            {
            id:54,
            eng:"tell a lie, told a lie, told a lie",
            ru:"говорить ложь",
            },
            {
            id:55,
            eng:"lie, lay, lain",
            ru:"лежать",
            },
    ],
    naughtyVerbsMPR: [
        {
            id:56,
            eng:"make, made, made",
            ru:"создавать",
            },
            {
            id:57,
            eng:"mean, meant, meant",
            ru:"иметь ввиду",
            },
            {
            id:58,
            eng:"meet, met, met",
            ru:"встречать(ся)",
            },
            {
            id:59,
            eng:"pay, paid, paid",
            ru:"платить",
            },
            {
            id:60,
            eng:"put, put, put",
            ru:"класть",
            },
            {
            id:61,
            eng:"read, read, read",
            ru:"читать",
            },
            {
            id:62,
            eng:"ride, rode, ridden",
            ru:"ездить верхом",
            },
            {
            id:63,
            eng:"ring, rang, rung",
            ru:"звенеть, звонить",
            },
            {
            id:64,
            eng:"run, ran, run",
            ru:"бегать",
            },
            {
            id:65,
            eng:"rise, rose, risen",
            ru:"подниматься",
            },
    ],
    naughtyVerbsS: [
        {
            id:56,
            eng:"make, made, made",
            ru:"создавать",
            },
            {
            id:57,
            eng:"mean, meant, meant",
            ru:"иметь ввиду",
            },
            {
            id:58,
            eng:"meet, met, met",
            ru:"встречать(ся)",
            },
            {
            id:59,
            eng:"pay, paid, paid",
            ru:"платить",
            },
            {
            id:60,
            eng:"put, put, put",
            ru:"класть",
            },
            {
            id:61,
            eng:"read, read, read",
            ru:"читать",
            },
            {
            id:62,
            eng:"ride, rode, ridden",
            ru:"ездить верхом",
            },
            {
            id:63,
            eng:"ring, rang, rung",
            ru:"звенеть, звонить",
            },
            {
            id:64,
            eng:"run, ran, run",
            ru:"бегать",
            },
            {
            id:65,
            eng:"rise, rose, risen",
            ru:"подниматься",
            },
    ],
    naughtyVerbsTUW: [
        {
            id:90,
            eng:"take, took, taken",
            ru:"брать",
            },
            {
            id:91,
            eng:"teach, taught, taught",
            ru:"обучать",
            },
            {
            id:92,
            eng:"tear, tore, torn",
            ru:"порвать",
            },
            {
            id:93,
            eng:"tell, told, told",
            ru:"рассказывать",
            },
            {
            id:94,
            eng:"think, thought, thought",
            ru:"думать",
            },
            {
            id:95,
            eng:"throw, threw, thrown",
            ru:"бросать",
            },
            {
            id:96,
            eng:"understand, understood, understood",
            ru:"понимать",
            },
            {
            id:97,
            eng:"wake up, woke up, woken up",
            ru:"просыпаться",
            },
            {
            id:98,
            eng:"wear, wore, worn",
            ru:"носить одежду",
            },
            {
            id:99,
            eng:"write, wrote, written",
            ru:"писАть",
            },
            {
            id:100,
            eng:"weep, wept, wept",
            ru:"хныкать",
            },
            {
            id:101,
            eng:"win, won, won",
            ru:"выигрывать",
            },
    ],
    naughtyVerbsLast: [
        {
            id:102,
            eng:"misunderstand, misunderstood, misunderstood",
            ru:"неправильно понять",
            },
            {
            id:103,
            eng:"misspell, misspelt, misspelt",
            ru:"неправильно написать",
            },
            {
            id:104,
            eng:"mistake, mistook, mistaken",
            ru:"ошибаться",
            },
            {
            id:105,
            eng:"mishear, misheard, misheard",
            ru:"неправильно услышать",
            },
            {
            id:106,
            eng:"oversleep, overslept, overslept",
            ru:"проспать",
            },
            {
            id:107,
            eng:"overeat, overate, overeaten",
            ru:"переесть ",
            },
            {
            id:108,
            eng:"overpay, overpaid, overpaid",
            ru:"переплатить",
            },
            {
            id:109,
            eng:"arise, arose, arisen",
            ru:"возникнуть",
            },
            {
            id:110,
            eng:"awake, awoke, awoken",
            ru:"пробудиться",
            },
            {
            id:111,
            eng:"abide, abode, abidden",
            ru:"соблюдать пребывать обитать",
            },
    ],
    naughtyVerbsBquestions3forms: [
        {
            id:1,
            eng:"break, broke, broken",
            ru:"ломать",
            },
            {
            id:2,
            eng:"beat, beat, beaten",
            ru:"побить",
            },
            {
            id:3,
            eng:"become, became, become",
            ru:"становиться",
            },
            {
            id:4,
            eng:"begin, began, begun",
            ru:"начинать",
            },
            {
            id:5,
            eng:"blow, blew, blown",
            ru:"дуть",
            },
            {
            id:6,
            eng:"borrow, borrowed, borrowed",
            ru:"брать в долг",
            },
            {
            id:7,
            eng:"build, built, built",
            ru:"строить",
            },
            {
            id:8,
            eng:"burn, burnt, burnt",
            ru:"сжигать, гореть",
            },
            {
            id:9,
            eng:"buy, bought, bought",
            ru:"покупать",
            },
            {
            id:10,
            eng:"bring, brought, brought",
            ru:"приносить",
            },
            {
            id:11,
            eng:"be, (was,were), been",
            ru:"быть",
            },
            {
            id:12,
            eng:"bite, bit, bit",
            ru:"кусать",
            },
    ],
    naughtyVerbsBfindPairs2forms: [
        {
            id:1,
            eng:"break / брЭйк /",
            ru:"ломать",
            },
            {
            id:2,
            eng:"beat / бит /",
            ru:"побить",
            },
            {
            id:3,
            eng:"become / бекАм /",
            ru:"становиться",
            },
            {
            id:4,
            eng:"begin / бегИн /",
            ru:"начинать",
            },
            {
            id:5,
            eng:"blow / блОу /",
            ru:"дуть",
            },
            {
            id:6,
            eng:"borrow / бОроу /",
            ru:"брать в долг",
            },
            {
            id:7,
            eng:"build / билд /",
            ru:"строить",
            },
            {
            id:8,
            eng:"burn / бЁрн /",
            ru:"сжигать, гореть",
            },
            {
            id:9,
            eng:"buy / бАй /",
            ru:"покупать",
            },
            {
            id:10,
            eng:"bring / брин /",
            ru:"приносить",
            },
            {
            id:11,
            eng:"be / эм из а /",
            ru:"быть",
            },
            {
            id:12,
            eng:"bite / бАйт /",
            ru:"кусать",
            },
            {
                id:101,
                eng:"broke / брОУк /",
                ru:"сломал, нарушил",
                },
                {
                id:102,
                eng:"beat / бит /",
                ru:"побил",
                },
                {
                id:103,
                eng:"became / бекЕйм /",
                ru:"стал",
                },
                {
                id:104,
                eng:"began / бегЭн /",
                ru:"начал",
                },
                {
                id:105,
                eng:"blew / блУ /",
                ru:"дул",
                },
                {
                id:106,
                eng:"borrowed / бОроуд /",
                ru:"взял в долг занял, одолжил",
                },
                {
                id:107,
                eng:"built / билт /",
                ru:"построил",
                },
                {
                id:108,
                eng:"burnt / бёрнт /",
                ru:"сжёг",
                },
                {
                id:109,
                eng:"bought / бот /",
                ru:"купил",
                },
                {
                id:110,
                eng:"brought / брот /",
                ru:"принёс",
                },
                {
                id:111,
                eng:"(was,were) / воз вё /",
                ru:"был, были",
                },
                {
                id:112,
                eng:"bit / бит /",
                ru:"укусил",
                },
    ],
    adjAB: [
        {
            id:1,
            eng:"alive / элАйв /",
            ru:"живой",
            },
            {
            id:2,
            eng:"amazing / эмЭйзин /",
            ru:"удивительный",
            },
            {
            id:3,
            eng:"angry / Энгри /",
            ru:"сердитый",
            },
            {
            id:4,
            eng:"annoying / энОин /",
            ru:"бесящий",
            },
            {
            id:5,
            eng:"attractive / этрЭктив /",
            ru:"привлекательный",
            },
            {
            id:6,
            eng:"awesome / Осм /",
            ru:"офигенный",
            },
            {
            id:7,
            eng:"accurate / Экьюрэт /",
            ru:"точный (верный)",
            },
            {
            id:8,
            eng:"agile / эджАйл /",
            ru:"ловкий",
            },
            {
            id:9,
            eng:"bad / бЭд /",
            ru:"плохой",
            },
            {
            id:10,
            eng:"bald / бОлд /",
            ru:"лысый",
            },
            {
            id:11,
            eng:"beautiful / бьютифул /",
            ru:"красивая",
            },
            {
            id:12,
            eng:"big / биГ /",
            ru:"большой",
            },
            {
            id:13,
            eng:"black / блЭк /",
            ru:"Черный",
            },
            {
            id:14,
            eng:"bloody / блАди /",
            ru:"кровавый",
            },
            {
            id:15,
            eng:"blue / блУ /",
            ru:"синий",
            },
            {
            id:16,
            eng:"bold / бОлд /",
            ru:"смелый",
            },
            {
            id:17,
            eng:"boring / бОрин /",
            ru:"скучный",
            },
            {
            id:18,
            eng:"bossy / бОсси /",
            ru:"властный",
            },
            {
            id:19,
            eng:"bothering / бАthэрин /",
            ru:"раздражающий",
            },
            {
            id:20,
            eng:"brave / брЭйв /",
            ru:"храбрый",
            },
            {
            id:21,
            eng:"breathtaking / брэth тэйкин /",
            ru:"захватывающий дух",
            },
            {
            id:22,
            eng:"bright / брАйт /",
            ru:"яркий",
            },
            {
            id:23,
            eng:"busy / бИзи /",
            ru:"занятой",
            },
    ],
    adjCD: [
        {
            id:24,
            eng:"calm / кам /",
            ru:"спокойный",
            },
            {
            id:25,
            eng:"cheap / чип /",
            ru:"дешевый",
            },
            {
            id:26,
            eng:"clean / клин /",
            ru:"чистый",
            },
            {
            id:27,
            eng:"close / клоуС /",
            ru:"близкий",
            },
            {
            id:28,
            eng:"cloudy / клАуди /",
            ru:"облачный",
            },
            {
            id:29,
            eng:"clumsy / клАмзи /",
            ru:"неуклюжий",
            },
            {
            id:30,
            eng:"cold / коУлд /",
            ru:"холодный",
            },
            {
            id:31,
            eng:"cool / кул /",
            ru:"крутой",
            },
            {
            id:32,
            eng:"correct / корЭкт /",
            ru:"верный",
            },
            {
            id:33,
            eng:"cozy / кОузи /",
            ru:"уютный",
            },
            {
            id:34,
            eng:"crazy / крЭйзи /",
            ru:"сумасшедший",
            },
            {
            id:35,
            eng:"crispy / крИспи /",
            ru:"хрустящий",
            },
            {
            id:36,
            eng:"curly / кёли /",
            ru:"кудрявый",
            },
            {
            id:37,
            eng:"cute / кьЮт /",
            ru:"милый",
            },
            {
            id:38,
            eng:"dark / дарк /",
            ru:"темный",
            },
            {
            id:39,
            eng:"deadly / дЭдли /",
            ru:"смертельный",
            },
            {
            id:40,
            eng:"deep / дип /",
            ru:"глубокий",
            },
            {
            id:41,
            eng:"dirty / дёти /",
            ru:"грязный",
            },
            {
            id:42,
            eng:"disgusting / дисгАстин /",
            ru:"отвратительный",
            },
            {
            id:43,
            eng:"drunk / дрАнк /",
            ru:"пьяный",
            },
            {
            id:44,
            eng:"dry / дрАй /",
            ru:"сухой",
            },
            {
            id:45,
            eng:"dull / дал /",
            ru:"затупившийся",
            },
            {
            id:46,
            eng:"dumb / дам /",
            ru:"болван",
            },
            {
            id:47,
            eng:"dusty / дАсти /",
            ru:"пыльный",
            },
    ],
    adjEF: [
        {
            id:48,
            eng:"early / ёли /",
            ru:"ранний",
            },
            {
            id:49,
            eng:"easy / Изи /",
            ru:"легкий",
            },
            {
            id:50,
            eng:"evil / Ивэл /",
            ru:"злой",
            },
            {
            id:51,
            eng:"expensive / экспЭнсив /",
            ru:"дорогой",
            },
            {
            id:52,
            eng:"fabulous / фЭбьюлэс /",
            ru:"поразительный",
            },
            {
            id:53,
            eng:"fair / фЭа /",
            ru:"справедливый",
            },
            {
            id:54,
            eng:"fancy / фЭнси /",
            ru:"изысканный",
            },
            {
            id:55,
            eng:"fantastic / фэнстэстик /",
            ru:"фантастичный",
            },
            {
            id:56,
            eng:"far / фа /",
            ru:"далекий",
            },
            {
            id:57,
            eng:"fashionable / фЭшэнэбл /",
            ru:"модный",
            },
            {
            id:58,
            eng:"fast / фаст /",
            ru:"быстрый",
            },
            {
            id:59,
            eng:"fat / фэт /",
            ru:"жирный",
            },
            {
            id:60,
            eng:"favorite / фЭйворит /",
            ru:"любимый",
            },
            {
            id:61,
            eng:"few / фью /",
            ru:"несколько, мало",
            },
            {
            id:62,
            eng:"fierce / фИрс /",
            ru:"свирепый",
            },
            {
            id:63,
            eng:"filthy / филTHи /",
            ru:"мерзкий",
            },
            {
            id:64,
            eng:"firm / фЁрм /",
            ru:"упругий",
            },
            {
            id:65,
            eng:"flat / флЭт /",
            ru:"плоский",
            },
            {
            id:66,
            eng:"flexible / флЭксибл /",
            ru:"гибкий",
            },
            {
            id:67,
            eng:"fresh / фрЭш /",
            ru:"свежий",
            },
            {
            id:68,
            eng:"friendly / фрЭндли /",
            ru:"дружелюбный",
            },
            {
            id:69,
            eng:"full / фУл /",
            ru:"полный",
            },
            {
            id:70,
            eng:"funny / фАнни /",
            ru:"смешной",
            },
    ],
    adjGHI: [
        {
            id:71,
            eng:"gentle / джЭнтл /",
            ru:"нежный",
            },
            {
            id:72,
            eng:"gloomy / глУми /",
            ru:"мрачный",
            },
            {
            id:73,
            eng:"good / гуД /",
            ru:"хороший",
            },
            {
            id:74,
            eng:"great / грЭйт /",
            ru:"великий",
            },
            {
            id:75,
            eng:"greedy / грИди /",
            ru:"жадный",
            },
            {
            id:76,
            eng:"green / грин /",
            ru:"зелёный",
            },
            {
            id:77,
            eng:"hairy / хЭйри /",
            ru:"волосатый",
            },
            {
            id:78,
            eng:"handsome / хЭнсам /",
            ru:"красивый (муж)",
            },
            {
            id:79,
            eng:"happy / хЭппи /",
            ru:"счастливый",
            },
            {
            id:80,
            eng:"hard / хАрд /",
            ru:"трудный",
            },
            {
            id:81,
            eng:"harsh / хАрш /",
            ru:"суровый",
            },
            {
            id:82,
            eng:"healthy / хЭлTHи /",
            ru:"здоровый",
            },
            {
            id:83,
            eng:"heavy / хЭви /",
            ru:"тяжелый",
            },
            {
            id:84,
            eng:"high / хай /",
            ru:"высокий (о зданиях)",
            },
            {
            id:85,
            eng:"hollow / хОлоу /",
            ru:"пустотелый",
            },
            {
            id:86,
            eng:"hot / хот или хат /",
            ru:"горячий",
            },
            {
            id:87,
            eng:"humble / хАмбл /",
            ru:"скромный",
            },
            {
            id:88,
            eng:"hungry / хАнгри /",
            ru:"голодный",
            },
            {
            id:89,
            eng:"icy / Айси /",
            ru:"ледяной",
            },
            {
            id:90,
            eng:"immortal / иммОртал /",
            ru:"бессмертный",
            },
            {
            id:91,
            eng:"incredible / инкрЭдбл /",
            ru:"невероятный",
            },
            {
            id:92,
            eng:"intelligent / интэлиджент /",
            ru:"образованный",
            },
            {
            id:93,
            eng:"interesting / ИНтрэстин /",
            ru:"интересный",
            },
            {
            id:94,
            eng:"itchy / Итчи /",
            ru:"зудящий",
            },
    ],
    adjJKLMN: [
        {
            id:95,
            eng:"juicy / джУси /",
            ru:"сочный",
            },
            {
            id:96,
            eng:"kind / кАйнд /",
            ru:"добрый",
            },
            {
            id:97,
            eng:"large / лАдж /",
            ru:"большой",
            },
            {
            id:98,
            eng:"late / лЭйт /",
            ru:"поздний",
            },
            {
            id:99,
            eng:"lazy / лЭйзи /",
            ru:"ленивый",
            },
            {
            id:100,
            eng:"legendary / лэДЖэндэри /",
            ru:"легендарный",
            },
            {
            id:101,
            eng:"light / лАйт /",
            ru:"светлый",
            },
            {
            id:102,
            eng:"little / лИтл /",
            ru:"мало",
            },
            {
            id:103,
            eng:"long / лОн /",
            ru:"длинный",
            },
            {
            id:104,
            eng:"loud / лАуд /",
            ru:"громкий",
            },
            {
            id:105,
            eng:"low / лОу /",
            ru:"низкий",
            },
            {
            id:106,
            eng:"mad / мЭд /",
            ru:"безумный",
            },
            {
            id:107,
            eng:"muscular / мАскьюла /",
            ru:"мускулистый",
            },
            {
            id:108,
            eng:"mean / мин /",
            ru:"злобный",
            },
            {
            id:109,
            eng:"merry / мЭри /",
            ru:"веселый",
            },
            {
            id:110,
            eng:"messy / мЭси /",
            ru:"неряшливый",
            },
            {
            id:111,
            eng:"much or many / мач о мэни /",
            ru:"много",
            },
            {
            id:112,
            eng:"narrow / нЭроу /",
            ru:"узкий",
            },
            {
            id:113,
            eng:"nasty / нЭсти /",
            ru:"противный",
            },
            {
            id:114,
            eng:"naughty / нОти /",
            ru:"непослушный",
            },
            {
            id:115,
            eng:"near / нИа /",
            ru:"ближайший",
            },
            {
            id:116,
            eng:"neat / нит /",
            ru:"аккуратный",
            },
            {
            id:117,
            eng:"needy / нИди /",
            ru:"нуждающийся",
            },
            {
            id:118,
            eng:"nervous / нЁвэс /",
            ru:"нервный",
            },
            {
            id:119,
            eng:"new / ньЮ /",
            ru:"новый",
            },
            {
            id:120,
            eng:"nice / нАйс /",
            ru:"приятный",
            },
            {
            id:121,
            eng:"noisy / нОйзи /",
            ru:"шумный",
            },
    ],
    adjOPQR: [
        {
            id:122,
            eng:"oily / Ойли /",
            ru:"маслянистый",
            },
            {
            id:123,
            eng:"old / оУлд /",
            ru:"старый",
            },
            {
            id:124,
            eng:"overweight / ОувэУэйт /",
            ru:"полноватый",
            },
            {
            id:125,
            eng:"picky / пИки /",
            ru:"придирчивый",
            },
            {
            id:126,
            eng:"simple / симпл /",
            ru:"простой, обычный",
            },
            {
            id:127,
            eng:"polite / полАйт /",
            ru:"вежливый",
            },
            {
            id:128,
            eng:"poor / пУэ /",
            ru:"бедный",
            },
            {
            id:129,
            eng:"pretty / прИти /",
            ru:"симпотный",
            },
            {
            id:130,
            eng:"proud / прАуд /",
            ru:"гордый",
            },
            {
            id:131,
            eng:"pure / пьЮэ /",
            ru:"безпримесный",
            },
            {
            id:132,
            eng:"quick / квик /",
            ru:"быстрый",
            },
            {
            id:133,
            eng:"quiet / куАйет /",
            ru:"тихий",
            },
            {
            id:134,
            eng:"rare / рЭа /",
            ru:"редкий",
            },
            {
            id:135,
            eng:"raw / ро /",
            ru:"сырой",
            },
            {
            id:136,
            eng:"reliable / рилАибл /",
            ru:"надёжный",
            },
            {
            id:137,
            eng:"rich / рич /",
            ru:"богатый",
            },
            {
            id:138,
            eng:"ripe / рАйп /",
            ru:"спелый",
            },
            {
            id:139,
            eng:"risky / рИски /",
            ru:"рискованный",
            },
            {
            id:140,
            eng:"rough / рАф /",
            ru:"черствый, грубый",
            },
            {
            id:141,
            eng:"rude / рУд /",
            ru:"грубый в общении",
            },
            {
            id:142,
            eng:"rusty / рАсти /",
            ru:"ржавый",
            },
    ],
    adjS: [
        {
            id:143,
            eng:"sad / сЭд /",
            ru:"грустный",
            },
            {
            id:144,
            eng:"safe / сЭйф /",
            ru:"безопасный",
            },
            {
            id:145,
            eng:"salty / сОлти /",
            ru:"соленый",
            },
            {
            id:146,
            eng:"sane / сЭйн /",
            ru:"здравомыслящий",
            },
            {
            id:147,
            eng:"scared / скЭад /",
            ru:"напуганный",
            },
            {
            id:148,
            eng:"scary / скЭри /",
            ru:"пугающий",
            },
            {
            id:149,
            eng:"selfish / сЭлфиш /",
            ru:"эгоистичный",
            },
            {
            id:150,
            eng:"sexy / сэкси /",
            ru:"сексуальный",
            },
            {
            id:151,
            eng:"sharp / шАрп /",
            ru:"острый",
            },
            {
            id:152,
            eng:"shiny / шАйни /",
            ru:"светящийся",
            },
            {
            id:153,
            eng:"shitty / щИти /",
            ru:"дерьмовенький",
            },
            {
            id:154,
            eng:"shocking / шОкин /",
            ru:"шокирующий",
            },
            {
            id:155,
            eng:"short / шорт /",
            ru:"короткий, низкий",
            },
            {
            id:156,
            eng:"shy / шАй /",
            ru:"застенчивый",
            },
            {
            id:157,
            eng:"silly / сИли /",
            ru:"глупый",
            },
            {
            id:158,
            eng:"sincere / синсИэ /",
            ru:"искренний",
            },
            {
            id:159,
            eng:"skinny / скИни /",
            ru:"тощий",
            },
            {
            id:160,
            eng:"sleepy / слИпи /",
            ru:"сонный",
            },
            {
            id:161,
            eng:"slim / слИм /",
            ru:"стройный",
            },
            {
            id:162,
            eng:"slimy / слАйми /",
            ru:"слизкий",
            },
            {
            id:163,
            eng:"slow / слОу /",
            ru:"медленный",
            },
            {
            id:164,
            eng:"small / смОл /",
            ru:"маленький",
            },
            {
            id:165,
            eng:"smart / смАрт /",
            ru:"сообразительный",
            },
            {
            id:166,
            eng:"smelly / смЭли /",
            ru:"вонючий",
            },
            {
            id:167,
            eng:"smoky / смОуки /",
            ru:"дымный",
            },
            {
            id:168,
            eng:"smooth / смуз /",
            ru:"гладкий",
            },
            {
            id:169,
            eng:"soft / софт /",
            ru:"мягкий",
            },
            {
            id:170,
            eng:"soon / сун /",
            ru:"скоро",
            },
            {
            id:171,
            eng:"sorry / сори /",
            ru:"сожалеющий",
            },
            {
            id:172,
            eng:"sour / сАуэ /",
            ru:"кислый",
            },
            {
            id:173,
            eng:"spacious / спЭйшэс /",
            ru:"просторный",
            },
            {
            id:174,
            eng:"special / спЭшл /",
            ru:"особенный",
            },
            {
            id:175,
            eng:"spicy / спАйси /",
            ru:"острый",
            },
            {
            id:176,
            eng:"steep / стИп /",
            ru:"крутой (наклон)",
            },
            {
            id:177,
            eng:"strange/weird / weird /",
            ru:"странный",
            },
            {
            id:178,
            eng:"strict / стрИкт /",
            ru:"строгий",
            },
            {
            id:179,
            eng:"strong / стрОн /",
            ru:"сильный",
            },
            {
            id:180,
            eng:"stupid / стьЮпид /",
            ru:"тупой",
            },
            {
            id:181,
            eng:"successful / саксЭсфул /",
            ru:"успешный",
            },
            {
            id:182,
            eng:"sunny / сАнни /",
            ru:"солнечный",
            },
            {
            id:183,
            eng:"sweaty / свЭти /",
            ru:"потный",
            },
            {
            id:184,
            eng:"sweet / свит /",
            ru:"сладкий",
            },
    ],
    adjTUVWY: [
        {
            id:1,
            eng:"alive / элАйв /",
            ru:"живой",
            },
            {
            id:2,
            eng:"amazing / эмЭйзин /",
            ru:"удивительный",
            },
            {
            id:3,
            eng:"angry / Энгри /",
            ru:"сердитый",
            },
            {
            id:4,
            eng:"annoying / энОин /",
            ru:"бесящий",
            },
            {
            id:5,
            eng:"attractive / этрЭктив /",
            ru:"привлекательный",
            },
            {
            id:6,
            eng:"awesome / Осм /",
            ru:"офигенный",
            },
            {
            id:7,
            eng:"accurate / Экьюрэт /",
            ru:"точный (верный)",
            },
            {
            id:8,
            eng:"agile / эджАйл /",
            ru:"ловкий",
            },
            {
            id:9,
            eng:"bad / бЭд /",
            ru:"плохой",
            },
            {
            id:10,
            eng:"bald / бОлд /",
            ru:"лысый",
            },
            {
            id:11,
            eng:"beautiful / бьютифул /",
            ru:"красивая",
            },
            {
            id:12,
            eng:"big / биГ /",
            ru:"большой",
            },
            {
            id:13,
            eng:"black / блЭк /",
            ru:"Черный",
            },
            {
            id:14,
            eng:"bloody / блАди /",
            ru:"кровавый",
            },
            {
            id:15,
            eng:"blue / блУ /",
            ru:"синий",
            },
            {
            id:16,
            eng:"bold / бОлд /",
            ru:"смелый",
            },
            {
            id:17,
            eng:"boring / бОрин /",
            ru:"скучный",
            },
            {
            id:18,
            eng:"bossy / бОсси /",
            ru:"властный",
            },
            {
            id:19,
            eng:"bothering / бАthэрин /",
            ru:"раздражающий",
            },
            {
            id:20,
            eng:"brave / брЭйв /",
            ru:"храбрый",
            },
            {
            id:21,
            eng:"breathtaking / брэth тэйкин /",
            ru:"захватывающий дух",
            },
            {
            id:22,
            eng:"bright / брАйт /",
            ru:"яркий",
            },
            {
            id:23,
            eng:"busy / бИзи /",
            ru:"занятой",
            },
    ],
    adjectives03: [
        {
            id: 25,
            eng: "close /клоуС/",
            ru: "близкий"
        },
        {
            id: 26,
            eng: "cloudy /клАуди/",
            ru: "облачный"
        },
        {
            id: 27,
            eng: "clumsy /клАмзи/",
            ru: "неуклюжий"
        },
        {
            id: 28,
            eng: "cold /коУлд/",
            ru: "холодный"
        },
        {
            id: 29,
            eng: "cool /кул/",
            ru: "крутой"
        },
        {
            id: 30,
            eng: "correct /корЭкт/",
            ru: "верный"
        },
        {
            id: 31,
            eng: "cozy /кОузи/",
            ru: "уютный"
        },
        {
            id: 32,
            eng: "crazy /крЭйзи/",
            ru: "сумасшедший"
        },
        {
            id: 33,
            eng: "crispy /крИспи/",
            ru: "хрустящий"
        },
        {
            id: 34,
            eng: "curly /кёли/",
            ru: "кудрявый"
        },
        {
            id: 35,
            eng: "cute /кьЮт/",
            ru: "милый"
        },
        {
            id: 36,
            eng: "dark /дарк/",
            ru: "темный"
        },
        {
            id: 37,
            eng: "deadly /дЭдли/",
            ru: "смертельный"
        },
        {
            id: 38,
            eng: "deep /дип/",
            ru: "глубокий"
        },
        {
            id: 39,
            eng: "dirty /дёти/",
            ru: "грязный"
        },
        {
            id: 40,
            eng: "disgusting /дисгАстин/",
            ru: "отвратительный"
        },
        {
            id: 41,
            eng: "drunk /дрАнк/",
            ru: "пьяный"
        },
        {
            id: 42,
            eng: "dry /дрАй/",
            ru: "сухой"
        },
        {
            id: 43,
            eng: "dull /дал/",
            ru: "затупившийся"
        },
        {
            id: 44,
            eng: "dumb /дам/",
            ru: "болван"
        },
        {
            id: 45,
            eng: "dusty /дАсти/",
            ru: "пыльный"
        },
        {
            id: 46,
            eng: "early /ёли/",
            ru: "ранний"
        },
        {
            id: 47,
            eng: "easy /Изи/",
            ru: "легкий"
        },
        {
            id: 48,
            eng: "evil /Ивэл/",
            ru: "злой"
        },
        {
            id: 49,
            eng: "expensive /экспЭнсив/",
            ru: "дорогой"
        },
        {
            id: 50,
            eng: "fabulous /фЭбьюлэс/",
            ru: "поразительный"
        },
        {
            id: 51,
            eng: "fair /фЭа/",
            ru: "справедливый"
        },
        {
            id: 52,
            eng: "fancy /фЭнси/",
            ru: "изысканный"
        },
    ],
    adjectives04: [
        {
            id: 53,
            eng: "fantastic /фэнстэстик/",
            ru: "фантастичный"
        },
        {
            id: 54,
            eng: "far /фа/",
            ru: "далекий"
        },
        {
            id: 55,
            eng: "fashionable /фЭшэнэбл/",
            ru: "модный"
        },
        {
            id: 56,
            eng: "fast /фаст/",
            ru: "быстрый"
        },
        {
            id: 57,
            eng: "fat /фэт/",
            ru: "жирный"
        },
        {
            id: 58,
            eng: "favorite /фЭйворит/",
            ru: "любимый"
        },
        {
            id: 59,
            eng: "few /фью/",
            ru: "несколько"
        },
        {
            id: 60,
            eng: "fierce /фИрс/",
            ru: "свирепый"
        },
        {
            id: 61,
            eng: "filthy /филTHи/",
            ru: "мерзкий"
        },
        {
            id: 62,
            eng: "firm /фЁрм/",
            ru: "упругий"
        },
        {
            id: 63,
            eng: "flat /флЭт/",
            ru: "плоский"
        },
        {
            id: 64,
            eng: "fresh /фрЭш/",
            ru: "свежий"
        },
        {
            id: 65,
            eng: "friendly /фрЭндли/",
            ru: "дружелюбный"
        },
        {
            id: 66,
            eng: "full /фУл/",
            ru: "полный"
        },
        {
            id: 67,
            eng: "funny /фАнни/",
            ru: "смешной"
        },
        {
            id: 68,
            eng: "gentle /джЭнтл/",
            ru: "нежный"
        },
        {
            id: 69,
            eng: "gloomy /глУми/",
            ru: "мрачный"
        },
        {
            id: 70,
            eng: "good /гуД/",
            ru: "хороший"
        },
        {
            id: 71,
            eng: "great /грЭйт/",
            ru: "великий"
        },
        {
            id: 72,
            eng: "greedy /грИди/",
            ru: "жадный"
        },
        {
            id: 73,
            eng: "greedy /грИди/",
            ru: "жадный"
        },
        {
            id: 74,
            eng: "green /грин/",
            ru: "зелёный"
        },
        {
            id: 75,
            eng: "hairy /хЭйри/",
            ru: "волосатый"
        },
        {
            id: 76,
            eng: "handsome /хЭнсам/",
            ru: "красивый (муж)"
        },
    ],
    adjectives05: [
        {
            id: 77,
            eng: "happy /хЭппи/",
            ru: "счастливый"
        },
        {
            id: 78,
            eng: "hard /хАрд/",
            ru: "трудный"
        },
        {
            id: 79,
            eng: "harsh /хАрш/",
            ru: "суровый"
        },
        {
            id: 80,
            eng: "healthy /хЭлTHи/",
            ru: "здоровый"
        },
        {
            id: 81,
            eng: "heavy /хЭви/",
            ru: "тяжелый"
        },
        {
            id: 82,
            eng: "high/tall /хай/",
            ru: "высокий"
        },
        {
            id: 83,
            eng: "hollow /хОлоу/",
            ru: "пустотелый"
        },
        {
            id: 84,
            eng: "hot /хот или хат/",
            ru: "горячий"
        },
        {
            id: 85,
            eng: "humble /хАмбл/",
            ru: "скромный"
        },
        {
            id: 86,
            eng: "hungry /хАнгри/",
            ru: "голодный"
        },
        {
            id: 87,
            eng: "icy /Айси/",
            ru: "ледяной"
        },
        {
            id: 88,
            eng: "immortal /иммОртал/",
            ru: "бессмертный"
        },
        {
            id: 89,
            eng: "incredible /инкрЭдбл/",
            ru: "невероятный"
        },
        {
            id: 90,
            eng: "intelligent /интэлиджент/",
            ru: "образованный"
        },
        {
            id: 91,
            eng: "interesting /ИНтрэстин/",
            ru: "интересный"
        },
        {
            id: 92,
            eng: "itchy /Итчи/",
            ru: "зудящий"
        },
        {
            id: 93,
            eng: "juicy /джУси/",
            ru: "сочный"
        },
        {
            id: 94,
            eng: "kind /кАйнд/",
            ru: "добрый"
        },
        {
            id: 95,
            eng: "large /лАдж/",
            ru: "большой"
        },
        {
            id: 96,
            eng: "late /лЭйт/",
            ru: "поздний"
        },
        {
            id: 97,
            eng: "lazy /лЭйзи/",
            ru: "ленивый"
        },
        {
            id: 98,
            eng: "legendary /лэДЖэндэри/",
            ru: "легендарный"
        },
        {
            id: 99,
            eng: "light /лАйт/",
            ru: "светлый"
        },
        {
            id: 100,
            eng: "little /лИтл/",
            ru: "мало"
        },
        {
            id: 101,
            eng: "long /лОн/",
            ru: "длинный"
        },
        {
            id: 102,
            eng: "loud /лАуд/",
            ru: "громкий"
        },
        {
            id: 103,
            eng: "low /лОу/",
            ru: "низкий"
        },
    ],
    adjectives06: [
        {
            id: 104,
            eng: "mad /мЭд/",
            ru: "безумный"
        },
        {
            id: 105,
            eng: "muscular /мАскьюла/",
            ru: "мускулистый"
        },
        {
            id: 106,
            eng: "mean /мин/",
            ru: "злобный"
        },
        {
            id: 107,
            eng: "merry /мЭри/",
            ru: "веселый"
        },
        {
            id: 108,
            eng: "messy /мЭси/",
            ru: "неряшливый"
        },
        {
            id: 109,
            eng: "much or many /мач о мэни/",
            ru: "много"
        },
        {
            id: 110,
            eng: "narrow /нЭроу/",
            ru: "узкий"
        },
        {
            id: 111,
            eng: "nasty /нЭсти/",
            ru: "противный"
        },
        {
            id: 112,
            eng: "naughty /нОти/",
            ru: "непослушный"
        },
        {
            id: 113,
            eng: "near /нИа/",
            ru: "ближайший"
        },
        {
            id: 114,
            eng: "neat /нит/",
            ru: "аккуратный"
        },
        {
            id: 115,
            eng: "needy /нИди/",
            ru: "нуждающийся"
        },
        {
            id: 116,
            eng: "nervous /нЁвэс/",
            ru: "нервный"
        },
        {
            id: 117,
            eng: "new /ньЮ/",
            ru: "новый"
        },
        {
            id: 118,
            eng: "nice /нАйс/",
            ru: "приятный"
        },
        {
            id: 119,
            eng: "noisy /нОйзи/",
            ru: "шумный"
        },
        {
            id: 120,
            eng: "oily /Ойли/",
            ru: "маслянистый"
        },
        {
            id: 121,
            eng: "old /оУлд/",
            ru: "старый"
        },
        {
            id: 122,
            eng: "overweight /ОувэУэйт/",
            ru: "полноватый"
        },
        {
            id: 123,
            eng: "picky /пИки/",
            ru: "придирчивый"
        },
        {
            id: 124,
            eng: "plain/simple /simple/",
            ru: "простой"
        },
        {
            id: 125,
            eng: "polite /полАйт/",
            ru: "вежливый"
        },
        {
            id: 126,
            eng: "poor /пУэ/",
            ru: "бедный"
        },
        {
            id: 127,
            eng: "pretty /прИти/",
            ru: "симпотный"
        },
        {
            id: 128,
            eng: "proud /прАуд/",
            ru: "гордый"
        },
        {
            id: 129,
            eng: "pure /пьЮэ/",
            ru: "безпримесный"
        },
        {
            id: 130,
            eng: "quick /квик/",
            ru: "быстрый"
        },
    ],
    adjectives07: [
        {
            id: 131,
            eng: "quiet /куАйет/ /куАйет/",
            ru: "тихий"
        },
        {
            id: 132,
            eng: "rare /рЭа/",
            ru: "редкий"
        },
        {
            id: 133,
            eng: "raw /ро/",
            ru: "сырой"
        },
        {
            id: 134,
            eng: "reliable /рилАибл/",
            ru: "надёжный"
        },
        {
            id: 135,
            eng: "rich /рич/",
            ru: "богатый"
        },
        {
            id: 136,
            eng: "ripe /рАйп/",
            ru: "спелый"
        },
        {
            id: 137,
            eng: "risky /рИски/",
            ru: "рискованный"
        },
        {
            id: 138,
            eng: "rough /рАф/",
            ru: "черствый, грубый"
        },
        {
            id: 139,
            eng: "rude /рУд/",
            ru: "грубый в общении"
        },
        {
            id: 140,
            eng: "rusty /рАсти/",
            ru: "ржавый"
        },
        {
            id: 141,
            eng: "sad /сЭд/",
            ru: "грустный"
        },
        {
            id: 142,
            eng: "safe /сЭйф/",
            ru: "безопасный"
        },
        {
            id: 143,
            eng: "salty /сОлти/",
            ru: "соленый"
        },
        {
            id: 144,
            eng: "sane /сЭйн/",
            ru: "здравомыслящий"
        },
        {
            id: 145,
            eng: "scared /скЭад/",
            ru: "напуганный"
        },
        {
            id: 146,
            eng: "scary /скЭри/",
            ru: "пугающий"
        },
        {
            id: 147,
            eng: "selfish /сЭлфиш/",
            ru: "эгоистичный"
        },
        {
            id: 148,
            eng: "sexy /сэкси/",
            ru: "сексуальный"
        },
        {
            id: 149,
            eng: "sharp /шАрп/",
            ru: "острый"
        },
        {
            id: 150,
            eng: "shiny /шАйни/",
            ru: "светящийся"
        },
        {
            id: 151,
            eng: "shitty /щИти/",
            ru: "дерьмовенький"
        },
        {
            id: 152,
            eng: "shocking /шОкин/",
            ru: "шокирующий"
        },
        {
            id: 153,
            eng: "short /шорт/",
            ru: "короткий, низкий"
        },
        {
            id: 154,
            eng: "shy /шАй/",
            ru: "застенчивый"
        },
    ],
    adjectives08: [
        {
            id: 155,
            eng: "silly /сИли/",
            ru: "глупый"
        },
        {
            id: 156,
            eng: "sincere /синсИэ/",
            ru: "искренний"
        },
        {
            id: 157,
            eng: "skinny /скИни/",
            ru: "тощий"
        },
        {
            id: 158,
            eng: "sleepy /слИпи/",
            ru: "сонный"
        },
        {
            id: 159,
            eng: "slim /слИм/",
            ru: "стройный"
        },
        {
            id: 160,
            eng: "slimy /слАйми/ /слАйми/",
            ru: "слизкий"
        },
        {
            id: 161,
            eng: "slow /слОу/",
            ru: "медленный"
        },
        {
            id: 162,
            eng: "small /смОл/",
            ru: "маленький"
        },
        {
            id: 163,
            eng: "smart /смАрт/",
            ru: "сообразительный"
        },
        {
            id: 164,
            eng: "smelly /смЭли/",
            ru: "вонючий"
        },
        {
            id: 165,
            eng: "smoky /смОуки/",
            ru: "дымный"
        },
        {
            id: 166,
            eng: "smooth /смуз/",
            ru: "гладкий"
        },
        {
            id: 167,
            eng: "soft /софт/",
            ru: "мягкий"
        },
        {
            id: 168,
            eng: "soon /сун/",
            ru: "скоро"
        },
        {
            id: 169,
            eng: "sorry /сори/",
            ru: "сожалеющий"
        },
        {
            id: 170,
            eng: "sour /сАуэ/",
            ru: "кислый"
        },
        {
            id: 171,
            eng: "spacious /спЭйшэс/",
            ru: "просторный"
        },
        {
            id: 172,
            eng: "special /спЭшл/",
            ru: "особенный"
        },
        {
            id: 173,
            eng: "spicy /спАйси/",
            ru: "острый"
        },
        {
            id: 174,
            eng: "steep /стИп/",
            ru: "крутой (наклон)"
        },
        {
            id: 175,
            eng: "strange/weird /weird/",
            ru: "странный"
        },
        {
            id: 176,
            eng: "strict /стрИкт/",
            ru: "строгий"
        },
        {
            id: 177,
            eng: "strong /стрОн/",
            ru: "сильный"
        },
        {
            id: 178,
            eng: "stupid /стьЮпид/",
            ru: "тупой"
        },
    ],
    adjectives09: [
        {
            id: 179,
            eng: "successful /саксЭсфул/",
            ru: "успешный"
        },
        {
            id: 180,
            eng: "sunny /сАнни/",
            ru: "солнечный"
        },
        {
            id: 181,
            eng: "sweaty /свЭти/",
            ru: "потный"
        },
        {
            id: 182,
            eng: "sweet /свит/",
            ru: "сладкий"
        },
        {
            id: 183,
            eng: "tanned /тЭнд/",
            ru: "загорелый"
        },
        {
            id: 184,
            eng: "tasty /тЭйсти/",
            ru: "вкусный"
        },
        {
            id: 185,
            eng: "thin/thick /Thын Thык/",
            ru: "тонкий/толстый"
        },
        {
            id: 186,
            eng: "thirsty /Thёсти/",
            ru: "жаждущий"
        },
        {
            id: 187,
            eng: "tiny /тАйни/",
            ru: "крошечный"
        },
        {
            id: 188,
            eng: "tricky /трИки/",
            ru: "хитрый"
        },
        {
            id: 189,
            eng: "true /тру/ /тру/",
            ru: "верный"
        },
        {
            id: 190,
            eng: "ugly /Агли/",
            ru: "уродливый"
        },
        {
            id: 191,
            eng: "vulgar /вАлгар/",
            ru: "вульгарный"
        },
        {
            id: 192,
            eng: "warm /вОм/",
            ru: "теплый"
        },
        {
            id: 193,
            eng: "weak /уИк/",
            ru: "слабый"
        },
        {
            id: 194,
            eng: "wealthy /уЭлTHи/",
            ru: "состоятельный"
        },
        {
            id: 195,
            eng: "wet /уЭт/",
            ru: "мокрый"
        },
        {
            id: 196,
            eng: "wide /уАйд/",
            ru: "широкий"
        },
        {
            id: 197,
            eng: "wild /уАйлд/",
            ru: "дикий"
        },
        {
            id: 198,
            eng: "windy /уИнди/",
            ru: "ветреный"
        },
        {
            id: 199,
            eng: "wise /уАйз/",
            ru: "мудрый"
        },
        {
            id: 200,
            eng: "wonderful /уандэрфул/",
            ru: "замечательный"
        },
        {
            id: 201,
            eng: "worthy /уОрTHи/",
            ru: "достойный"
        },
        {
            id: 202,
            eng: "young /ян/",
            ru: "молодой"
        },
    ],
    adjectivesb1: [
        {
            id: 1,
            eng: "alive /элАйв/",
            ru: "живой"
        },
        {
            id: 2,
            eng: "amazing /эмЭйзин/",
            ru: "удивительный"
        },
        {
            id: 3,
            eng: "angry /Энгри/",
            ru: "сердитый"
        },
        {
            id: 4,
            eng: "annoying /энОин/",
            ru: "бесящий"
        },
        {
            id: 5,
            eng: "attractive /этрЭктив/",
            ru: "привлекательный"
        },
        {
            id: 6,
            eng: "awesome /Осм/",
            ru: "офигенный"
        },
        {
            id: 7,
            eng: "bad /бЭд/",
            ru: "плохой"
        },
        {
            id: 8,
            eng: "bald /бОлд/",
            ru: "лысый"
        },
        {
            id: 9,
            eng: "beautiful /бьютифул/",
            ru: "красивая"
        },
        {
            id: 10,
            eng: "big /биГ/",
            ru: "большой"
        },
        {
            id: 11,
            eng: "black /блЭк/",
            ru: "Черный"
        },
        {
            id: 12,
            eng: "bloody /блАди/",
            ru: "кровавый"
        },
        {
            id: 13,
            eng: "blue /блУ/",
            ru: "синий"
        },
        {
            id: 14,
            eng: "bold /бОлд/",
            ru: "смелый"
        },
        {
            id: 15,
            eng: "boring /бОрин/",
            ru: "скучный"
        },
        {
            id: 16,
            eng: "bossy /бОсси/",
            ru: "властный"
        },
        {
            id: 17,
            eng: "bothering /бАthэрин/",
            ru: "раздражающий"
        },
        {
            id: 18,
            eng: "brave /брЭйв/",
            ru: "храбрый"
        },
        {
            id: 19,
            eng: "breathtaking /брэth тэйкин/",
            ru: "захватывающий дух"
        },
        {
            id: 20,
            eng: "bright /брАйт/",
            ru: "яркий"
        },
        {
            id: 21,
            eng: "busy /бИзи/",
            ru: "занятой"
        },
        {
            id: 22,
            eng: "calm /кам/",
            ru: "спокойный"
        },
        {
            id: 23,
            eng: "cheap /чип/",
            ru: "дешевый"
        },
        {
            id: 24,
            eng: "clean /клин/",
            ru: "чистый"
        },
        {
            id: 25,
            eng: "close /клоуС/",
            ru: "близкий"
        },
        {
            id: 26,
            eng: "cloudy /клАуди/",
            ru: "облачный"
        },
        {
            id: 27,
            eng: "clumsy /клАмзи/",
            ru: "неуклюжий"
        },
        {
            id: 28,
            eng: "cold /коУлд/",
            ru: "холодный"
        },
        {
            id: 29,
            eng: "cool /кул/",
            ru: "крутой"
        },
        {
            id: 30,
            eng: "correct /корЭкт/",
            ru: "верный"
        },
        {
            id: 31,
            eng: "cozy /кОузи/",
            ru: "уютный"
        },
        {
            id: 32,
            eng: "crazy /крЭйзи/",
            ru: "сумасшедший"
        },
        {
            id: 33,
            eng: "crispy /крИспи/",
            ru: "хрустящий"
        },
        {
            id: 34,
            eng: "curly /кёли/",
            ru: "кудрявый"
        },
        {
            id: 35,
            eng: "cute /кьЮт/",
            ru: "милый"
        },
        {
            id: 36,
            eng: "dark /дарк/",
            ru: "темный"
        },
        {
            id: 37,
            eng: "deadly /дЭдли/",
            ru: "смертельный"
        },
        {
            id: 38,
            eng: "deep /дип/",
            ru: "глубокий"
        },
        {
            id: 39,
            eng: "dirty /дёти/",
            ru: "грязный"
        },
        {
            id: 40,
            eng: "disgusting /дисгАстин/",
            ru: "отвратительный"
        },
        {
            id: 41,
            eng: "drunk /дрАнк/",
            ru: "пьяный"
        },
        {
            id: 42,
            eng: "dry /дрАй/",
            ru: "сухой"
        },
        {
            id: 43,
            eng: "dull /дал/",
            ru: "затупившийся"
        },
        {
            id: 44,
            eng: "dumb /дам/",
            ru: "болван"
        },
        {
            id: 45,
            eng: "dusty /дАсти/",
            ru: "пыльный"
        },
        {
            id: 46,
            eng: "early /ёли/",
            ru: "ранний"
        },
        {
            id: 47,
            eng: "easy /Изи/",
            ru: "легкий"
        },
        {
            id: 48,
            eng: "evil /Ивэл/",
            ru: "злой"
        },
        {
            id: 49,
            eng: "expensive /экспЭнсив/",
            ru: "дорогой"
        },
        {
            id: 50,
            eng: "fabulous /фЭбьюлэс/",
            ru: "поразительный"
        },
        {
            id: 51,
            eng: "fair /фЭа/",
            ru: "справедливый"
        },
        {
            id: 52,
            eng: "fancy /фЭнси/",
            ru: "изысканный"
        },
        {
            id: 53,
            eng: "fantastic /фэнстэстик/",
            ru: "фантастичный"
        },
        {
            id: 54,
            eng: "far /фа/",
            ru: "далекий"
        },
        {
            id: 55,
            eng: "fashionable /фЭшэнэбл/",
            ru: "модный"
        },
        {
            id: 56,
            eng: "fast /фаст/",
            ru: "быстрый"
        },
        {
            id: 57,
            eng: "fat /фэт/",
            ru: "жирный"
        },
        {
            id: 58,
            eng: "favorite /фЭйворит/",
            ru: "любимый"
        },
        {
            id: 59,
            eng: "few /фью/",
            ru: "несколько"
        },
        {
            id: 60,
            eng: "fierce /фИрс/",
            ru: "свирепый"
        },
        {
            id: 61,
            eng: "filthy /филTHи/",
            ru: "мерзкий"
        },
        {
            id: 62,
            eng: "firm /фЁрм/",
            ru: "упругий"
        },
        {
            id: 63,
            eng: "flat /флЭт/",
            ru: "плоский"
        },
        {
            id: 64,
            eng: "fresh /фрЭш/",
            ru: "свежий"
        },
        {
            id: 65,
            eng: "friendly /фрЭндли/",
            ru: "дружелюбный"
        },
        {
            id: 66,
            eng: "full /фУл/",
            ru: "полный"
        },
        {
            id: 67,
            eng: "funny /фАнни/",
            ru: "смешной"
        },
        {
            id: 68,
            eng: "gentle /джЭнтл/",
            ru: "нежный"
        },
        {
            id: 69,
            eng: "gloomy /глУми/",
            ru: "мрачный"
        },
        {
            id: 70,
            eng: "good /гуД/",
            ru: "хороший"
        },
        {
            id: 71,
            eng: "great /грЭйт/",
            ru: "великий"
        },
        {
            id: 72,
            eng: "greedy /грИди/",
            ru: "жадный"
        },
        {
            id: 73,
            eng: "greedy /грИди/",
            ru: "жадный"
        },
        {
            id: 74,
            eng: "green /грин/",
            ru: "зелёный"
        },
        {
            id: 75,
            eng: "hairy /хЭйри/",
            ru: "волосатый"
        },
        {
            id: 76,
            eng: "handsome /хЭнсам/",
            ru: "красивый (муж)"
        },
        {
            id: 77,
            eng: "happy /хЭппи/",
            ru: "счастливый"
        },
        {
            id: 78,
            eng: "hard /хАрд/",
            ru: "трудный"
        },
        {
            id: 79,
            eng: "harsh /хАрш/",
            ru: "суровый"
        },
        {
            id: 80,
            eng: "healthy /хЭлTHи/",
            ru: "здоровый"
        },
        {
            id: 81,
            eng: "heavy /хЭви/",
            ru: "тяжелый"
        },
        {
            id: 82,
            eng: "high/tall /хай/",
            ru: "высокий"
        },
        {
            id: 83,
            eng: "hollow /хОлоу/",
            ru: "пустотелый"
        },
        {
            id: 84,
            eng: "hot /хот или хат/",
            ru: "горячий"
        },
        {
            id: 85,
            eng: "humble /хАмбл/",
            ru: "скромный"
        },
        {
            id: 86,
            eng: "hungry /хАнгри/",
            ru: "голодный"
        },
        {
            id: 87,
            eng: "icy /Айси/",
            ru: "ледяной"
        },
        {
            id: 88,
            eng: "immortal /иммОртал/",
            ru: "бессмертный"
        },
        {
            id: 89,
            eng: "incredible /инкрЭдбл/",
            ru: "невероятный"
        },
        {
            id: 90,
            eng: "intelligent /интэлиджент/",
            ru: "образованный"
        },
        {
            id: 91,
            eng: "interesting /ИНтрэстин/",
            ru: "интересный"
        },
        {
            id: 92,
            eng: "itchy /Итчи/",
            ru: "зудящий"
        },
        {
            id: 93,
            eng: "juicy /джУси/",
            ru: "сочный"
        },
        {
            id: 94,
            eng: "kind /кАйнд/",
            ru: "добрый"
        },
        {
            id: 95,
            eng: "large /лАдж/",
            ru: "большой"
        },
        {
            id: 96,
            eng: "late /лЭйт/",
            ru: "поздний"
        },
        {
            id: 97,
            eng: "lazy /лЭйзи/",
            ru: "ленивый"
        },
        {
            id: 98,
            eng: "legendary /лэДЖэндэри/",
            ru: "легендарный"
        },
        {
            id: 99,
            eng: "light /лАйт/",
            ru: "светлый"
        },
        {
            id: 100,
            eng: "little /лИтл/",
            ru: "мало"
        },
        {
            id: 101,
            eng: "long /лОн/",
            ru: "длинный"
        },
        {
            id: 102,
            eng: "loud /лАуд/",
            ru: "громкий"
        },
        {
            id: 103,
            eng: "low /лОу/",
            ru: "низкий"
        },
        {
            id: 104,
            eng: "mad /мЭд/",
            ru: "безумный"
        },
        {
            id: 105,
            eng: "muscular /мАскьюла/",
            ru: "мускулистый"
        },
        {
            id: 106,
            eng: "mean /мин/",
            ru: "злобный"
        },
        {
            id: 107,
            eng: "merry /мЭри/",
            ru: "веселый"
        },
        {
            id: 108,
            eng: "messy /мЭси/",
            ru: "неряшливый"
        },
        {
            id: 109,
            eng: "much or many /мач о мэни/",
            ru: "много"
        },
        {
            id: 110,
            eng: "narrow /нЭроу/",
            ru: "узкий"
        },
        {
            id: 111,
            eng: "nasty /нЭсти/",
            ru: "противный"
        },
        {
            id: 112,
            eng: "naughty /нОти/",
            ru: "непослушный"
        },
        {
            id: 113,
            eng: "near /нИа/",
            ru: "ближайший"
        },
        {
            id: 114,
            eng: "neat /нит/",
            ru: "аккуратный"
        },
        {
            id: 115,
            eng: "needy /нИди/",
            ru: "нуждающийся"
        },
        {
            id: 116,
            eng: "nervous /нЁвэс/",
            ru: "нервный"
        },
        {
            id: 117,
            eng: "new /ньЮ/",
            ru: "новый"
        },
        {
            id: 118,
            eng: "nice /нАйс/",
            ru: "приятный"
        },
        {
            id: 119,
            eng: "noisy /нОйзи/",
            ru: "шумный"
        },
        {
            id: 120,
            eng: "oily /Ойли/",
            ru: "маслянистый"
        },
        {
            id: 121,
            eng: "old /оУлд/",
            ru: "старый"
        },
        {
            id: 122,
            eng: "overweight /ОувэУэйт/",
            ru: "полноватый"
        },
        {
            id: 123,
            eng: "picky /пИки/",
            ru: "придирчивый"
        },
        {
            id: 124,
            eng: "plain/simple /simple/",
            ru: "простой"
        },
        {
            id: 125,
            eng: "polite /полАйт/",
            ru: "вежливый"
        },
        {
            id: 126,
            eng: "poor /пУэ/",
            ru: "бедный"
        },
        {
            id: 127,
            eng: "pretty /прИти/",
            ru: "симпотный"
        },
        {
            id: 128,
            eng: "proud /прАуд/",
            ru: "гордый"
        },
        {
            id: 129,
            eng: "pure /пьЮэ/",
            ru: "безпримесный"
        },
        {
            id: 130,
            eng: "quick /квик/",
            ru: "быстрый"
        },
        {
            id: 131,
            eng: "quiet /куАйет/ /куАйет/",
            ru: "тихий"
        },
        {
            id: 132,
            eng: "rare /рЭа/",
            ru: "редкий"
        },
        {
            id: 133,
            eng: "raw /ро/",
            ru: "сырой"
        },
        {
            id: 134,
            eng: "reliable /рилАибл/",
            ru: "надёжный"
        },
        {
            id: 135,
            eng: "rich /рич/",
            ru: "богатый"
        },
        {
            id: 136,
            eng: "ripe /рАйп/",
            ru: "спелый"
        },
        {
            id: 137,
            eng: "risky /рИски/",
            ru: "рискованный"
        },
        {
            id: 138,
            eng: "rough /рАф/",
            ru: "черствый, грубый"
        },
        {
            id: 139,
            eng: "rude /рУд/",
            ru: "грубый в общении"
        },
        {
            id: 140,
            eng: "rusty /рАсти/",
            ru: "ржавый"
        },
        {
            id: 141,
            eng: "sad /сЭд/",
            ru: "грустный"
        },
        {
            id: 142,
            eng: "safe /сЭйф/",
            ru: "безопасный"
        },
        {
            id: 143,
            eng: "salty /сОлти/",
            ru: "соленый"
        },
        {
            id: 144,
            eng: "sane /сЭйн/",
            ru: "здравомыслящий"
        },
        {
            id: 145,
            eng: "scared /скЭад/",
            ru: "напуганный"
        },
        {
            id: 146,
            eng: "scary /скЭри/",
            ru: "пугающий"
        },
        {
            id: 147,
            eng: "selfish /сЭлфиш/",
            ru: "эгоистичный"
        },
        {
            id: 148,
            eng: "sexy /сэкси/",
            ru: "сексуальный"
        },
        {
            id: 149,
            eng: "sharp /шАрп/",
            ru: "острый"
        },
        {
            id: 150,
            eng: "shiny /шАйни/",
            ru: "светящийся"
        },
        {
            id: 151,
            eng: "shitty /щИти/",
            ru: "дерьмовенький"
        },
        {
            id: 152,
            eng: "shocking /шОкин/",
            ru: "шокирующий"
        },
        {
            id: 153,
            eng: "short /шорт/",
            ru: "короткий, низкий"
        },
        {
            id: 154,
            eng: "shy /шАй/",
            ru: "застенчивый"
        },
        {
            id: 155,
            eng: "silly /сИли/",
            ru: "глупый"
        },
        {
            id: 156,
            eng: "sincere /синсИэ/",
            ru: "искренний"
        },
        {
            id: 157,
            eng: "skinny /скИни/",
            ru: "тощий"
        },
        {
            id: 158,
            eng: "sleepy /слИпи/",
            ru: "сонный"
        },
        {
            id: 159,
            eng: "slim /слИм/",
            ru: "стройный"
        },
        {
            id: 160,
            eng: "slimy /слАйми/ /слАйми/",
            ru: "слизкий"
        },
        {
            id: 161,
            eng: "slow /слОу/",
            ru: "медленный"
        },
        {
            id: 162,
            eng: "small /смОл/",
            ru: "маленький"
        },
        {
            id: 163,
            eng: "smart /смАрт/",
            ru: "сообразительный"
        },
        {
            id: 164,
            eng: "smelly /смЭли/",
            ru: "вонючий"
        },
        {
            id: 165,
            eng: "smoky /смОуки/",
            ru: "дымный"
        },
        {
            id: 166,
            eng: "smooth /смуз/",
            ru: "гладкий"
        },
        {
            id: 167,
            eng: "soft /софт/",
            ru: "мягкий"
        },
        {
            id: 168,
            eng: "soon /сун/",
            ru: "скоро"
        },
        {
            id: 169,
            eng: "sorry /сори/",
            ru: "сожалеющий"
        },
        {
            id: 170,
            eng: "sour /сАуэ/",
            ru: "кислый"
        },
        {
            id: 171,
            eng: "spacious /спЭйшэс/",
            ru: "просторный"
        },
        {
            id: 172,
            eng: "special /спЭшл/",
            ru: "особенный"
        },
        {
            id: 173,
            eng: "spicy /спАйси/",
            ru: "острый"
        },
        {
            id: 174,
            eng: "steep /стИп/",
            ru: "крутой (наклон)"
        },
        {
            id: 175,
            eng: "strange/weird /weird/",
            ru: "странный"
        },
        {
            id: 176,
            eng: "strict /стрИкт/",
            ru: "строгий"
        },
        {
            id: 177,
            eng: "strong /стрОн/",
            ru: "сильный"
        },
        {
            id: 178,
            eng: "stupid /стьЮпид/",
            ru: "тупой"
        },
        {
            id: 179,
            eng: "successful /саксЭсфул/",
            ru: "успешный"
        },
        {
            id: 180,
            eng: "sunny /сАнни/",
            ru: "солнечный"
        },
        {
            id: 181,
            eng: "sweaty /свЭти/",
            ru: "потный"
        },
        {
            id: 182,
            eng: "sweet /свит/",
            ru: "сладкий"
        },
        {
            id: 183,
            eng: "tanned /тЭнд/",
            ru: "загорелый"
        },
        {
            id: 184,
            eng: "tasty /тЭйсти/",
            ru: "вкусный"
        },
        {
            id: 185,
            eng: "thin/thick /Thын Thык/",
            ru: "тонкий/толстый"
        },
        {
            id: 186,
            eng: "thirsty /Thёсти/",
            ru: "жаждущий"
        },
        {
            id: 187,
            eng: "tiny /тАйни/",
            ru: "крошечный"
        },
        {
            id: 188,
            eng: "tricky /трИки/",
            ru: "хитрый"
        },
        {
            id: 189,
            eng: "true /тру/ /тру/",
            ru: "верный"
        },
        {
            id: 190,
            eng: "ugly /Агли/",
            ru: "уродливый"
        },
        {
            id: 191,
            eng: "vulgar /вАлгар/",
            ru: "вульгарный"
        },
        {
            id: 192,
            eng: "warm /вОм/",
            ru: "теплый"
        },
        {
            id: 193,
            eng: "weak /уИк/",
            ru: "слабый"
        },
        {
            id: 194,
            eng: "wealthy /уЭлTHи/",
            ru: "состоятельный"
        },
        {
            id: 195,
            eng: "wet /уЭт/",
            ru: "мокрый"
        },
        {
            id: 196,
            eng: "wide /уАйд/",
            ru: "широкий"
        },
        {
            id: 197,
            eng: "wild /уАйлд/",
            ru: "дикий"
        },
        {
            id: 198,
            eng: "windy /уИнди/",
            ru: "ветреный"
        },
        {
            id: 199,
            eng: "wise /уАйз/",
            ru: "мудрый"
        },
        {
            id: 200,
            eng: "wonderful /уандэрфул/",
            ru: "замечательный"
        },
        {
            id: 201,
            eng: "worthy /уОрTHи/",
            ru: "достойный"
        },
        {
            id: 202,
            eng: "young /ян/",
            ru: "молодой"
        },
    ],
    compareadjectivesb1: [
        {
            id: 1,
            eng: "сравнительная степень для `alive`  ",
            ru: "more  alive, the  most самый живой"
        },
        {
            id: 2,
            eng: "сравнительная степень для `amazing`  ",
            ru: "more  amazing  ,  the  most самый удивительный"
        },
        {
            id: 3,
            eng: "сравнительная степень для `angry`  ",
            ru: "angrier  angry  ,  the  angriest самый сердитый"
        },
        {
            id: 4,
            eng: "сравнительная степень для `annoying` ",
            ru: "more annoying  ,  the  most самый бесящий"
        },
        {
            id: 5,
            eng: "сравнительная степень для `attractive` ",
            ru: "more attractive  ,  the  most самый привлекательный"
        },
        {
            id: 6,
            eng: "сравнительная степень для `awesome` ",
            ru: "more awesome  ,  the  most самый офигенный"
        },
        {
            id: 7,
            eng: "сравнительная степень для `bad` ",
            ru: "worse bad  ,  the  worst самый плохой"
        },
        {
            id: 8,
            eng: "сравнительная степень для `bald` ",
            ru: "balder bald  ,  the  baldest самый лысый"
        },
        {
            id: 9,
            eng: "сравнительная степень для `beautiful` ",
            ru: "more beautiful  ,  the  most самый красивая"
        },
        {
            id: 10,
            eng: "сравнительная степень для `big` ",
            ru: "bigger big  ,  the  biggest самый большой"
        },
        {
            id: 11,
            eng: "сравнительная степень для `black` ",
            ru: "blacker black  ,  the  blackest самый Черный"
        },
        {
            id: 12,
            eng: "сравнительная степень для `bloody` ",
            ru: "bloodier bloody  ,  the  bloodiest самый кровавый"
        },
        {
            id: 13,
            eng: "сравнительная степень для `blue` ",
            ru: "bluer blue  ,  the  bluest самый синий"
        },
        {
            id: 14,
            eng: "сравнительная степень для `bold` ",
            ru: "bolder bold  ,  the  boldest самый смелый"
        },
        {
            id: 15,
            eng: "сравнительная степень для `boring` ",
            ru: "more boring  ,  the  most самый скучный"
        },
        {
            id: 16,
            eng: "сравнительная степень для `bossy` ",
            ru: "bossier bossy  ,  the  bossiest самый властный"
        },
        {
            id: 17,
            eng: "сравнительная степень для `bothering` ",
            ru: "more bothering  ,  the  most самый раздражающий"
        },
        {
            id: 18,
            eng: "сравнительная степень для `brave` ",
            ru: "braver brave  ,  the  bravest самый храбрый"
        },
        {
            id: 19,
            eng: "сравнительная степень для `breathtaking` ",
            ru: "more breathtaking  ,  the  most самый захватывающий дух"
        },
        {
            id: 20,
            eng: "сравнительная степень для `bright` ",
            ru: "brighter bright  ,  the  brightest самый яркий"
        },
        {
            id: 21,
            eng: "сравнительная степень для `busy` ",
            ru: "busier busy  ,  the  busiest самый занятой"
        },
        {
            id: 22,
            eng: "сравнительная степень для `calm` ",
            ru: "calmer calm  ,  the  calmest самый спокойный"
        },
        {
            id: 23,
            eng: "сравнительная степень для `cheap` ",
            ru: "cheaper cheap  ,  the  cheapest самый дешевый"
        },
        {
            id: 24,
            eng: "сравнительная степень для `clean` ",
            ru: "cleaner clean  ,  the  cleanest самый чистый"
        },
        {
            id: 25,
            eng: "сравнительная степень для `close` ",
            ru: "closer close  ,  the  closest самый близкий"
        },
        {
            id: 26,
            eng: "сравнительная степень для `cloudy` ",
            ru: "cloudier cloudy  ,  the  cloudiest самый облачный"
        },
        {
            id: 27,
            eng: "сравнительная степень для `clumsy` ",
            ru: "clumsier clumsy  ,  the  clumsiest самый неуклюжий"
        },
        {
            id: 28,
            eng: "сравнительная степень для `cold` ",
            ru: "colder cold  ,  the  coldest самый холодный"
        },
        {
            id: 29,
            eng: "сравнительная степень для `cool` ",
            ru: "cooler cool  ,  the  coolest самый крутой"
        },
        {
            id: 30,
            eng: "сравнительная степень для `correct` ",
            ru: "more correct  ,  the  most самый верный"
        },
        {
            id: 31,
            eng: "сравнительная степень для `cozy` ",
            ru: "handier cozy  ,  the  handiest самый уютный"
        },
        {
            id: 32,
            eng: "сравнительная степень для `crazy` ",
            ru: "crazier crazy  ,  the  craziest самый сумасшедший"
        },
        {
            id: 33,
            eng: "сравнительная степень для `crispy` ",
            ru: "crispier crispy  ,  the  crispiest самый хрустящий"
        },
        {
            id: 34,
            eng: "сравнительная степень для `curly` ",
            ru: "curlier curly  ,  the  curliest самый кудрявый"
        },
        {
            id: 35,
            eng: "сравнительная степень для `cute` ",
            ru: "cuter cute  ,  the  cutest самый милый"
        },
        {
            id: 36,
            eng: "сравнительная степень для `dark` ",
            ru: "darker dark  ,  the  darkest самый темный"
        },
        {
            id: 37,
            eng: "сравнительная степень для `deadly` ",
            ru: "deadlier deadly  ,  the  deadliest самый смертельный"
        },
        {
            id: 38,
            eng: "сравнительная степень для `deep` ",
            ru: "deeper deep  ,  the  deepest самый глубокий"
        },
        {
            id: 39,
            eng: "сравнительная степень для `dirty` ",
            ru: "dirtier dirty  ,  the  dirtiest самый грязный"
        },
        {
            id: 40,
            eng: "сравнительная степень для `disgusting` ",
            ru: "more disgusting  ,  the  most самый отвратительный"
        },
        {
            id: 41,
            eng: "сравнительная степень для `drunk` ",
            ru: "drunker drunk  ,  the  drunkest самый пьяный"
        },
        {
            id: 42,
            eng: "сравнительная степень для `dry` ",
            ru: "drier dry  ,  the  driest самый сухой"
        },
        {
            id: 43,
            eng: "сравнительная степень для `dull` ",
            ru: "duller dull  ,  the  dullest самый затупившийся"
        },
        {
            id: 44,
            eng: "сравнительная степень для `dumb` ",
            ru: "dumber dumb  ,  the  dumbest самый болван"
        },
        {
            id: 45,
            eng: "сравнительная степень для `dusty` ",
            ru: "dustier dusty  ,  the  dustiest самый пыльный"
        },
        {
            id: 46,
            eng: "сравнительная степень для `early` ",
            ru: "earlier early  ,  the  earliest самый ранний"
        },
        {
            id: 47,
            eng: "сравнительная степень для `easy` ",
            ru: "easier easy  ,  the  easiest самый легкий"
        },
        {
            id: 48,
            eng: "сравнительная степень для `evil` ",
            ru: "more evil evil  ,  the  most самый злой"
        },
        {
            id: 49,
            eng: "сравнительная степень для `expensive` ",
            ru: "more expensive  ,  the  most самый дорогой"
        },
        {
            id: 50,
            eng: "сравнительная степень для `fabulous` ",
            ru: "more fabulous  ,  the  most самый поразительный"
        },
        {
            id: 51,
            eng: "сравнительная степень для `fair` ",
            ru: "fairer fair  ,  the  fairest самый справедливый"
        },
        {
            id: 52,
            eng: "сравнительная степень для `fancy` ",
            ru: "fancier fancy  ,  the  fanciest самый изысканный"
        },
        {
            id: 53,
            eng: "сравнительная степень для `fantastic` ",
            ru: "more fantastic  ,  the  most самый фантастичный"
        },
        {
            id: 54,
            eng: "сравнительная степень для `far` ",
            ru: "farther far  ,  the  farthest самый далекий"
        },
        {
            id: 55,
            eng: "сравнительная степень для `fashionable` ",
            ru: "more fashionable  ,  the  most самый модный"
        },
        {
            id: 56,
            eng: "сравнительная степень для `fast` ",
            ru: "faster fast  ,  the  fastest самый быстрый"
        },
        {
            id: 57,
            eng: "сравнительная степень для `fat` ",
            ru: "fatter fat  ,  the  fattest самый жирный"
        },
        {
            id: 58,
            eng: "сравнительная степень для `favorite` ",
            ru: "more favorite  ,  the  most самый любимый"
        },
        {
            id: 59,
            eng: "сравнительная степень для `few` ",
            ru: "fewer few  ,  the  fewest самый мало"
        },
        {
            id: 60,
            eng: "сравнительная степень для `fierce` ",
            ru: "fiercer fierce  ,  the  fiercest самый свирепый"
        },
        {
            id: 61,
            eng: "сравнительная степень для `filthy` ",
            ru: "filthier filthy  ,  the  filthiest самый мерзкий"
        },
        {
            id: 62,
            eng: "сравнительная степень для `firm` ",
            ru: "firmer firm  ,  the  firmest самый упругий"
        },
        {
            id: 63,
            eng: "сравнительная степень для `flat` ",
            ru: "flatter flat  ,  the  flattest самый плоский"
        },
        {
            id: 64,
            eng: "сравнительная степень для `fresh` ",
            ru: "fresher fresh  ,  the  freshest самый свежий"
        },
        {
            id: 65,
            eng: "сравнительная степень для `friendly` ",
            ru: "friendlier friendly  ,  the  friendliest самый дружелюбный"
        },
        {
            id: 66,
            eng: "сравнительная степень для `full` ",
            ru: "fuller full  ,  the  fullest самый полный"
        },
        {
            id: 67,
            eng: "сравнительная степень для `funny` ",
            ru: "funnier funny  ,  the  funniest самый смешной"
        },
        {
            id: 68,
            eng: "сравнительная степень для `gentle` ",
            ru: "gentler gentle  ,  the  gentlest самый нежный"
        },
        {
            id: 69,
            eng: "сравнительная степень для `gloomy` ",
            ru: "gloomier gloomy  ,  the  gloomiest самый мрачный"
        },
        {
            id: 70,
            eng: "сравнительная степень для `good` ",
            ru: "better good  ,  the  best самый хороший"
        },
        {
            id: 71,
            eng: "сравнительная степень для `great` ",
            ru: "greater great  ,  the  greatest самый великий"
        },
        {
            id: 72,
            eng: "сравнительная степень для `greedy` ",
            ru: "greedier greedy  ,  the  greediest самый жадный"
        },
        {
            id: 73,
            eng: "сравнительная степень для `greedy` ",
            ru: "greedier greedy  ,  the greediest самый жадный"
        },
        {
            id: 74,
            eng: "сравнительная степень для `green` ",
            ru: "greener green  ,  the  greenest самый зелёный"
        },
        {
            id: 75,
            eng: "сравнительная степень для `hairy` ",
            ru: "hairier hairy  ,  the  hairiest самый волосатый"
        },
        {
            id: 76,
            eng: "сравнительная степень для `handsome` ",
            ru: "more handsome  ,  the  most самый красивый (муж)"
        },
        {
            id: 77,
            eng: "сравнительная степень для `happy` ",
            ru: "happier happy  ,  the  happiest самый счастливый"
        },
        {
            id: 78,
            eng: "сравнительная степень для `hard` ",
            ru: "harder hard  ,  the  hardest самый трудный"
        },
        {
            id: 79,
            eng: "сравнительная степень для `harsh` ",
            ru: "harsher harsh  ,  the  harshest самый суровый"
        },
        {
            id: 80,
            eng: "сравнительная степень для `healthy` ",
            ru: "healthier healthy  ,  the  healthiest самый здоровый"
        },
        {
            id: 81,
            eng: "сравнительная степень для `heavy` ",
            ru: "heavier heavy  ,  the  heaviest самый тяжелый"
        },
        {
            id: 82,
            eng: "сравнительная степень для `high/tall` ",
            ru: "higher high/tall  ,  the  highest самый высокий"
        },
        {
            id: 83,
            eng: "сравнительная степень для `hollow` ",
            ru: "more hollow  ,  the  most самый пустотелый"
        },
        {
            id: 84,
            eng: "сравнительная степень для `hot` ",
            ru: "hotter hot  ,  the  hottest самый горячий"
        },
        {
            id: 85,
            eng: "сравнительная степень для `humble` ",
            ru: "humbler humble  ,  the  humblest самый скромный"
        },
        {
            id: 86,
            eng: "сравнительная степень для `hungry` ",
            ru: "hungrier hungry  ,  the  hungriest самый голодный"
        },
        {
            id: 87,
            eng: "сравнительная степень для `icy` ",
            ru: "icier icy  ,  the  iciest самый ледяной"
        },
        {
            id: 88,
            eng: "сравнительная степень для `immortal` ",
            ru: "more immortal  ,  the  most самый бессмертный"
        },
        {
            id: 89,
            eng: "сравнительная степень для `incredible` ",
            ru: "more incredible  ,  the  most самый невероятный"
        },
        {
            id: 90,
            eng: "сравнительная степень для `intelligent` ",
            ru: "more intelligent  ,  the  most самый образованный"
        },
        {
            id: 91,
            eng: "сравнительная степень для `interesting` ",
            ru: "more interesting  ,  the  most самый интересный"
        },
        {
            id: 92,
            eng: "сравнительная степень для `itchy` ",
            ru: "itchier itchy  ,  the  itchiest самый зудящий"
        },
        {
            id: 93,
            eng: "сравнительная степень для `juicy` ",
            ru: "juicier juicy  ,  the  juiciest самый сочный"
        },
        {
            id: 94,
            eng: "сравнительная степень для `kind` ",
            ru: "kinder kind  ,  the  kindest самый добрый"
        },
        {
            id: 95,
            eng: "сравнительная степень для `large` ",
            ru: "larger large  ,  the  largest самый большой"
        },
        {
            id: 96,
            eng: "сравнительная степень для `late` ",
            ru: "later late  ,  the  latest самый поздний"
        },
        {
            id: 97,
            eng: "сравнительная степень для `lazy` ",
            ru: "lazier lazy  ,  the  laziest самый ленивый"
        },
        {
            id: 98,
            eng: "сравнительная степень для `legendary` ",
            ru: "more legendary  ,  the  most самый легендарный"
        },
        {
            id: 99,
            eng: "сравнительная степень для `light` ",
            ru: "lighter light  ,  the  lightest самый светлый"
        },
        {
            id: 100,
            eng: "сравнительная степень для `little` ",
            ru: "less little  ,  the  the least самый мало, меньше"
        },
    ],
    compareadjectivesb2: [
        {
            id: 1,
            eng: "сравнительная степень для `alive`  ",
            ru: "more  alive, the  most самый живой"
        },
        {
            id: 2,
            eng: "сравнительная степень для `amazing`  ",
            ru: "more  amazing  ,  the  most самый удивительный"
        },
        {
            id: 3,
            eng: "сравнительная степень для `angry`  ",
            ru: "angrier  angry  ,  the  angriest самый сердитый"
        },
        {
            id: 4,
            eng: "сравнительная степень для `annoying` ",
            ru: "more annoying  ,  the  most самый бесящий"
        },
        {
            id: 5,
            eng: "сравнительная степень для `attractive` ",
            ru: "more attractive  ,  the  most самый привлекательный"
        },
        {
            id: 6,
            eng: "сравнительная степень для `awesome` ",
            ru: "more awesome  ,  the  most самый офигенный"
        },
        {
            id: 7,
            eng: "сравнительная степень для `bad` ",
            ru: "worse bad  ,  the  worst самый плохой"
        },
        {
            id: 8,
            eng: "сравнительная степень для `bald` ",
            ru: "balder bald  ,  the  baldest самый лысый"
        },
        {
            id: 9,
            eng: "сравнительная степень для `beautiful` ",
            ru: "more beautiful  ,  the  most самый красивая"
        },
        {
            id: 10,
            eng: "сравнительная степень для `big` ",
            ru: "bigger big  ,  the  biggest самый большой"
        },
        {
            id: 11,
            eng: "сравнительная степень для `black` ",
            ru: "blacker black  ,  the  blackest самый Черный"
        },
        {
            id: 12,
            eng: "сравнительная степень для `bloody` ",
            ru: "bloodier bloody  ,  the  bloodiest самый кровавый"
        },
        {
            id: 13,
            eng: "сравнительная степень для `blue` ",
            ru: "bluer blue  ,  the  bluest самый синий"
        },
        {
            id: 14,
            eng: "сравнительная степень для `bold` ",
            ru: "bolder bold  ,  the  boldest самый смелый"
        },
        {
            id: 15,
            eng: "сравнительная степень для `boring` ",
            ru: "more boring  ,  the  most самый скучный"
        },
        {
            id: 16,
            eng: "сравнительная степень для `bossy` ",
            ru: "bossier bossy  ,  the  bossiest самый властный"
        },
        {
            id: 17,
            eng: "сравнительная степень для `bothering` ",
            ru: "more bothering  ,  the  most самый раздражающий"
        },
        {
            id: 18,
            eng: "сравнительная степень для `brave` ",
            ru: "braver brave  ,  the  bravest самый храбрый"
        },
        {
            id: 19,
            eng: "сравнительная степень для `breathtaking` ",
            ru: "more breathtaking  ,  the  most самый захватывающий дух"
        },
        {
            id: 20,
            eng: "сравнительная степень для `bright` ",
            ru: "brighter bright  ,  the  brightest самый яркий"
        },
        {
            id: 21,
            eng: "сравнительная степень для `busy` ",
            ru: "busier busy  ,  the  busiest самый занятой"
        },
        {
            id: 22,
            eng: "сравнительная степень для `calm` ",
            ru: "calmer calm  ,  the  calmest самый спокойный"
        },
        {
            id: 23,
            eng: "сравнительная степень для `cheap` ",
            ru: "cheaper cheap  ,  the  cheapest самый дешевый"
        },
        {
            id: 24,
            eng: "сравнительная степень для `clean` ",
            ru: "cleaner clean  ,  the  cleanest самый чистый"
        },
        {
            id: 25,
            eng: "сравнительная степень для `close` ",
            ru: "closer close  ,  the  closest самый близкий"
        },
        {
            id: 26,
            eng: "сравнительная степень для `cloudy` ",
            ru: "cloudier cloudy  ,  the  cloudiest самый облачный"
        },
        {
            id: 27,
            eng: "сравнительная степень для `clumsy` ",
            ru: "clumsier clumsy  ,  the  clumsiest самый неуклюжий"
        },
        {
            id: 28,
            eng: "сравнительная степень для `cold` ",
            ru: "colder cold  ,  the  coldest самый холодный"
        },
        {
            id: 29,
            eng: "сравнительная степень для `cool` ",
            ru: "cooler cool  ,  the  coolest самый крутой"
        },
        {
            id: 30,
            eng: "сравнительная степень для `correct` ",
            ru: "more correct  ,  the  most самый верный"
        },
        {
            id: 31,
            eng: "сравнительная степень для `cozy` ",
            ru: "handier cozy  ,  the  handiest самый уютный"
        },
        {
            id: 32,
            eng: "сравнительная степень для `crazy` ",
            ru: "crazier crazy  ,  the  craziest самый сумасшедший"
        },
        {
            id: 33,
            eng: "сравнительная степень для `crispy` ",
            ru: "crispier crispy  ,  the  crispiest самый хрустящий"
        },
        {
            id: 34,
            eng: "сравнительная степень для `curly` ",
            ru: "curlier curly  ,  the  curliest самый кудрявый"
        },
        {
            id: 35,
            eng: "сравнительная степень для `cute` ",
            ru: "cuter cute  ,  the  cutest самый милый"
        },
        {
            id: 36,
            eng: "сравнительная степень для `dark` ",
            ru: "darker dark  ,  the  darkest самый темный"
        },
        {
            id: 37,
            eng: "сравнительная степень для `deadly` ",
            ru: "deadlier deadly  ,  the  deadliest самый смертельный"
        },
        {
            id: 38,
            eng: "сравнительная степень для `deep` ",
            ru: "deeper deep  ,  the  deepest самый глубокий"
        },
        {
            id: 39,
            eng: "сравнительная степень для `dirty` ",
            ru: "dirtier dirty  ,  the  dirtiest самый грязный"
        },
        {
            id: 40,
            eng: "сравнительная степень для `disgusting` ",
            ru: "more disgusting  ,  the  most самый отвратительный"
        },
        {
            id: 41,
            eng: "сравнительная степень для `drunk` ",
            ru: "drunker drunk  ,  the  drunkest самый пьяный"
        },
        {
            id: 42,
            eng: "сравнительная степень для `dry` ",
            ru: "drier dry  ,  the  driest самый сухой"
        },
        {
            id: 43,
            eng: "сравнительная степень для `dull` ",
            ru: "duller dull  ,  the  dullest самый затупившийся"
        },
        {
            id: 44,
            eng: "сравнительная степень для `dumb` ",
            ru: "dumber dumb  ,  the  dumbest самый болван"
        },
        {
            id: 45,
            eng: "сравнительная степень для `dusty` ",
            ru: "dustier dusty  ,  the  dustiest самый пыльный"
        },
        {
            id: 46,
            eng: "сравнительная степень для `early` ",
            ru: "earlier early  ,  the  earliest самый ранний"
        },
        {
            id: 47,
            eng: "сравнительная степень для `easy` ",
            ru: "easier easy  ,  the  easiest самый легкий"
        },
        {
            id: 48,
            eng: "сравнительная степень для `evil` ",
            ru: "more evil evil  ,  the  most самый злой"
        },
        {
            id: 49,
            eng: "сравнительная степень для `expensive` ",
            ru: "more expensive  ,  the  most самый дорогой"
        },
        {
            id: 50,
            eng: "сравнительная степень для `fabulous` ",
            ru: "more fabulous  ,  the  most самый поразительный"
        },
        {
            id: 51,
            eng: "сравнительная степень для `fair` ",
            ru: "fairer fair  ,  the  fairest самый справедливый"
        },
        {
            id: 52,
            eng: "сравнительная степень для `fancy` ",
            ru: "fancier fancy  ,  the  fanciest самый изысканный"
        },
        {
            id: 53,
            eng: "сравнительная степень для `fantastic` ",
            ru: "more fantastic  ,  the  most самый фантастичный"
        },
        {
            id: 54,
            eng: "сравнительная степень для `far` ",
            ru: "farther far  ,  the  farthest самый далекий"
        },
        {
            id: 55,
            eng: "сравнительная степень для `fashionable` ",
            ru: "more fashionable  ,  the  most самый модный"
        },
        {
            id: 56,
            eng: "сравнительная степень для `fast` ",
            ru: "faster fast  ,  the  fastest самый быстрый"
        },
        {
            id: 57,
            eng: "сравнительная степень для `fat` ",
            ru: "fatter fat  ,  the  fattest самый жирный"
        },
        {
            id: 58,
            eng: "сравнительная степень для `favorite` ",
            ru: "more favorite  ,  the  most самый любимый"
        },
        {
            id: 59,
            eng: "сравнительная степень для `few` ",
            ru: "fewer few  ,  the  fewest самый мало"
        },
        {
            id: 60,
            eng: "сравнительная степень для `fierce` ",
            ru: "fiercer fierce  ,  the  fiercest самый свирепый"
        },
        {
            id: 61,
            eng: "сравнительная степень для `filthy` ",
            ru: "filthier filthy  ,  the  filthiest самый мерзкий"
        },
        {
            id: 62,
            eng: "сравнительная степень для `firm` ",
            ru: "firmer firm  ,  the  firmest самый упругий"
        },
        {
            id: 63,
            eng: "сравнительная степень для `flat` ",
            ru: "flatter flat  ,  the  flattest самый плоский"
        },
        {
            id: 64,
            eng: "сравнительная степень для `fresh` ",
            ru: "fresher fresh  ,  the  freshest самый свежий"
        },
        {
            id: 65,
            eng: "сравнительная степень для `friendly` ",
            ru: "friendlier friendly  ,  the  friendliest самый дружелюбный"
        },
        {
            id: 66,
            eng: "сравнительная степень для `full` ",
            ru: "fuller full  ,  the  fullest самый полный"
        },
        {
            id: 67,
            eng: "сравнительная степень для `funny` ",
            ru: "funnier funny  ,  the  funniest самый смешной"
        },
        {
            id: 68,
            eng: "сравнительная степень для `gentle` ",
            ru: "gentler gentle  ,  the  gentlest самый нежный"
        },
        {
            id: 69,
            eng: "сравнительная степень для `gloomy` ",
            ru: "gloomier gloomy  ,  the  gloomiest самый мрачный"
        },
        {
            id: 70,
            eng: "сравнительная степень для `good` ",
            ru: "better good  ,  the  best самый хороший"
        },
        {
            id: 71,
            eng: "сравнительная степень для `great` ",
            ru: "greater great  ,  the  greatest самый великий"
        },
        {
            id: 72,
            eng: "сравнительная степень для `greedy` ",
            ru: "greedier greedy  ,  the  greediest самый жадный"
        },
        {
            id: 73,
            eng: "сравнительная степень для `greedy` ",
            ru: "greedier greedy  ,  the greediest самый жадный"
        },
        {
            id: 74,
            eng: "сравнительная степень для `green` ",
            ru: "greener green  ,  the  greenest самый зелёный"
        },
        {
            id: 75,
            eng: "сравнительная степень для `hairy` ",
            ru: "hairier hairy  ,  the  hairiest самый волосатый"
        },
        {
            id: 76,
            eng: "сравнительная степень для `handsome` ",
            ru: "more handsome  ,  the  most самый красивый (муж)"
        },
        {
            id: 77,
            eng: "сравнительная степень для `happy` ",
            ru: "happier happy  ,  the  happiest самый счастливый"
        },
        {
            id: 78,
            eng: "сравнительная степень для `hard` ",
            ru: "harder hard  ,  the  hardest самый трудный"
        },
        {
            id: 79,
            eng: "сравнительная степень для `harsh` ",
            ru: "harsher harsh  ,  the  harshest самый суровый"
        },
        {
            id: 80,
            eng: "сравнительная степень для `healthy` ",
            ru: "healthier healthy  ,  the  healthiest самый здоровый"
        },
        {
            id: 81,
            eng: "сравнительная степень для `heavy` ",
            ru: "heavier heavy  ,  the  heaviest самый тяжелый"
        },
        {
            id: 82,
            eng: "сравнительная степень для `high/tall` ",
            ru: "higher high/tall  ,  the  highest самый высокий"
        },
        {
            id: 83,
            eng: "сравнительная степень для `hollow` ",
            ru: "more hollow  ,  the  most самый пустотелый"
        },
        {
            id: 84,
            eng: "сравнительная степень для `hot` ",
            ru: "hotter hot  ,  the  hottest самый горячий"
        },
        {
            id: 85,
            eng: "сравнительная степень для `humble` ",
            ru: "humbler humble  ,  the  humblest самый скромный"
        },
        {
            id: 86,
            eng: "сравнительная степень для `hungry` ",
            ru: "hungrier hungry  ,  the  hungriest самый голодный"
        },
        {
            id: 87,
            eng: "сравнительная степень для `icy` ",
            ru: "icier icy  ,  the  iciest самый ледяной"
        },
        {
            id: 88,
            eng: "сравнительная степень для `immortal` ",
            ru: "more immortal  ,  the  most самый бессмертный"
        },
        {
            id: 89,
            eng: "сравнительная степень для `incredible` ",
            ru: "more incredible  ,  the  most самый невероятный"
        },
        {
            id: 90,
            eng: "сравнительная степень для `intelligent` ",
            ru: "more intelligent  ,  the  most самый образованный"
        },
        {
            id: 91,
            eng: "сравнительная степень для `interesting` ",
            ru: "more interesting  ,  the  most самый интересный"
        },
        {
            id: 92,
            eng: "сравнительная степень для `itchy` ",
            ru: "itchier itchy  ,  the  itchiest самый зудящий"
        },
        {
            id: 93,
            eng: "сравнительная степень для `juicy` ",
            ru: "juicier juicy  ,  the  juiciest самый сочный"
        },
        {
            id: 94,
            eng: "сравнительная степень для `kind` ",
            ru: "kinder kind  ,  the  kindest самый добрый"
        },
        {
            id: 95,
            eng: "сравнительная степень для `large` ",
            ru: "larger large  ,  the  largest самый большой"
        },
        {
            id: 96,
            eng: "сравнительная степень для `late` ",
            ru: "later late  ,  the  latest самый поздний"
        },
        {
            id: 97,
            eng: "сравнительная степень для `lazy` ",
            ru: "lazier lazy  ,  the  laziest самый ленивый"
        },
        {
            id: 98,
            eng: "сравнительная степень для `legendary` ",
            ru: "more legendary  ,  the  most самый легендарный"
        },
        {
            id: 99,
            eng: "сравнительная степень для `light` ",
            ru: "lighter light  ,  the  lightest самый светлый"
        },
        {
            id: 100,
            eng: "сравнительная степень для `little` ",
            ru: "less little  ,  the  the least самый мало, меньше"
        },
        {
            id: 101,
            eng: "сравнительная степень для `long` ",
            ru: "longer long  ,  the  longest самый длинный"
        },
        {
            id: 102,
            eng: "сравнительная степень для `loud` ",
            ru: "louder loud  ,  the  loudest самый громкий"
        },
        {
            id: 103,
            eng: "сравнительная степень для `low` ",
            ru: "lower low  ,  the  lowest самый низкий"
        },
        {
            id: 104,
            eng: "сравнительная степень для `mad` ",
            ru: "madder mad  ,  the  maddest самый безумный"
        },
        {
            id: 105,
            eng: "сравнительная степень для `muscular` ",
            ru: "more muscular  ,  the  most самый мускулистый"
        },
        {
            id: 106,
            eng: "сравнительная степень для `mean` ",
            ru: "meaner mean  ,  the  meanest самый злобный"
        },
        {
            id: 107,
            eng: "сравнительная степень для `merry` ",
            ru: "merrier merry  ,  the  merriest самый веселый"
        },
        {
            id: 108,
            eng: "сравнительная степень для `messy` ",
            ru: "messier messy  ,  the  messiest самый неряшливый"
        },
        {
            id: 109,
            eng: "сравнительная степень для `thick` ",
            ru: "thicker thick  ,  the thickest самый толстый"
        },
        {
            id: 110,
            eng: "сравнительная степень для `narrow` ",
            ru: "narrower narrow  ,  the  narrowest самый узкий"
        },
        {
            id: 111,
            eng: "сравнительная степень для `nasty` ",
            ru: "nastier nasty  ,  the  nastiest самый противный"
        },
        {
            id: 112,
            eng: "сравнительная степень для `naughty` ",
            ru: "naughtier naughty  ,  the  naughtiest самый непослушный"
        },
        {
            id: 113,
            eng: "сравнительная степень для `near` ",
            ru: "nearer near  ,  the  nearest самый ближайший"
        },
        {
            id: 114,
            eng: "сравнительная степень для `neat` ",
            ru: "neater neat  ,  the  neatest самый аккуратный"
        },
        {
            id: 115,
            eng: "сравнительная степень для `needy` ",
            ru: "needier needy  ,  the  neediest самый нуждающийся"
        },
        {
            id: 116,
            eng: "сравнительная степень для `nervous` ",
            ru: "more nervous nervous  ,  the  most самый нервный"
        },
        {
            id: 117,
            eng: "сравнительная степень для `new` ",
            ru: "newer new  ,  the  newest самый новый"
        },
        {
            id: 118,
            eng: "сравнительная степень для `nice` ",
            ru: "nicer nice  ,  the  nicest самый приятный"
        },
        {
            id: 119,
            eng: "сравнительная степень для `noisy` ",
            ru: "noisier noisy  ,  the  noisiest самый шумный"
        },
        {
            id: 120,
            eng: "сравнительная степень для `oily` ",
            ru: "oilier oily  ,  the  oiliest самый маслянистый"
        },
        {
            id: 121,
            eng: "сравнительная степень для `old` ",
            ru: "older/elder old  ,  the  oldest/eldest самый старый"
        },
        {
            id: 122,
            eng: "сравнительная степень для `overweight` ",
            ru: "more overweight  ,  the  most самый полноватый"
        },
        {
            id: 123,
            eng: "сравнительная степень для `picky` ",
            ru: "pickier picky  ,  the  pickiest самый придирчивый"
        },
        {
            id: 124,
            eng: "сравнительная степень для `simple` ",
            ru: "simpler simple  ,  the  plainest самый простой"
        },
        {
            id: 125,
            eng: "сравнительная степень для `polite` ",
            ru: "politer polite  ,  the  politest самый вежливый"
        },
        {
            id: 126,
            eng: "сравнительная степень для `poor` ",
            ru: "poorer poor  ,  the  poorest самый бедный"
        },
        {
            id: 127,
            eng: "сравнительная степень для `pretty` ",
            ru: "prettier pretty  ,  the  prettiest самый симпотный"
        },
        {
            id: 128,
            eng: "сравнительная степень для `proud` ",
            ru: "prouder proud  ,  the  proudest самый гордый"
        },
        {
            id: 129,
            eng: "сравнительная степень для `pure` ",
            ru: "purer pure  ,  the  purest самый безпримесный"
        },
        {
            id: 130,
            eng: "сравнительная степень для `quick` ",
            ru: "quicker quick  ,  the  quickest самый быстрый"
        },
        {
            id: 131,
            eng: "сравнительная степень для `quiet` ",
            ru: "quieter quiet  ,  the  quietest самый тихий"
        },
        {
            id: 132,
            eng: "сравнительная степень для `rare` ",
            ru: "rarer rare  ,  the  rarest самый редкий"
        },
        {
            id: 133,
            eng: "сравнительная степень для `raw` ",
            ru: "rawer raw  ,  the  rawest самый сырой"
        },
        {
            id: 134,
            eng: "сравнительная степень для `reliable` ",
            ru: "more reliable  ,  the  most самый надёжный"
        },
        {
            id: 135,
            eng: "сравнительная степень для `rich` ",
            ru: "richer rich  ,  the  richest самый богатый"
        },
        {
            id: 136,
            eng: "сравнительная степень для `ripe` ",
            ru: "riper ripe  ,  the  ripest самый спелый"
        },
        {
            id: 137,
            eng: "сравнительная степень для `risky` ",
            ru: "riskier risky  ,  the  riskiest самый рискованный"
        },
        {
            id: 138,
            eng: "сравнительная степень для `rough` ",
            ru: "rougher rough  ,  the  roughest самый черствый, грубый"
        },
        {
            id: 139,
            eng: "сравнительная степень для `rude` ",
            ru: "ruder rude  ,  the  rudest самый грубый в общении"
        },
        {
            id: 140,
            eng: "сравнительная степень для `rusty` ",
            ru: "rustier rusty  ,  the  rustiest самый ржавый"
        },
        {
            id: 141,
            eng: "сравнительная степень для `sad` ",
            ru: "sadder sad  ,  the  saddest самый грустный"
        },
        {
            id: 142,
            eng: "сравнительная степень для `safe` ",
            ru: "safer safe  ,  the  safest самый безопасный"
        },
        {
            id: 143,
            eng: "сравнительная степень для `salty` ",
            ru: "saltier salty  ,  the  saltiest самый соленый"
        },
        {
            id: 144,
            eng: "сравнительная степень для `sane` ",
            ru: "saner sane  ,  the  sanest самый здравомыслящий"
        },
        {
            id: 145,
            eng: "сравнительная степень для `scared` ",
            ru: "more scared  ,  the  the most самый напуганный"
        },
        {
            id: 146,
            eng: "сравнительная степень для `scary` ",
            ru: "scarier scary  ,  the  scariest самый пугающий"
        },
        {
            id: 147,
            eng: "сравнительная степень для `selfish` ",
            ru: "more selfish  ,  the most самый эгоистичный"
        },
        {
            id: 148,
            eng: "сравнительная степень для `sexy` ",
            ru: "sexier sexy  ,  the  sexiest самый сексуальный"
        },
        {
            id: 149,
            eng: "сравнительная степень для `sharp` ",
            ru: "sharper sharp  ,  the  sharpest самый острый"
        },
        {
            id: 150,
            eng: "сравнительная степень для `shiny` ",
            ru: "shinier shiny  ,  the  shiniest самый светящийся"
        },
        {
            id: 151,
            eng: "сравнительная степень для `shitty` ",
            ru: "shittier shitty  ,  the  shittiest самый дерьмовенький"
        },
        {
            id: 152,
            eng: "сравнительная степень для `shocking` ",
            ru: "more shocking  ,  the  most самый шокирующий"
        },
        {
            id: 153,
            eng: "сравнительная степень для `short` ",
            ru: "shorter short  ,  the  shortest самый короткий, низкий"
        },
        {
            id: 154,
            eng: "сравнительная степень для `shy` ",
            ru: "shyer shy  ,  the  shyest самый застенчивый"
        },
        {
            id: 155,
            eng: "сравнительная степень для `silly` ",
            ru: "sillier silly  ,  the  silliest самый глупый"
        },
        {
            id: 156,
            eng: "сравнительная степень для `sincere` ",
            ru: "sincerer sincere  ,  the  sincerest самый искренний"
        },
        {
            id: 157,
            eng: "сравнительная степень для `skinny` ",
            ru: "skinnier skinny  ,  the  skinniest самый тощий"
        },
        {
            id: 158,
            eng: "сравнительная степень для `sleepy` ",
            ru: "sleepier sleepy  ,  the  sleepiest самый сонный"
        },
        {
            id: 159,
            eng: "сравнительная степень для `slim` ",
            ru: "slimmer slim  ,  the  slimmest самый стройный"
        },
        {
            id: 160,
            eng: "сравнительная степень для `slimy` ",
            ru: "slimier slimy  ,  the  slimiest самый слизкий"
        },
        {
            id: 161,
            eng: "сравнительная степень для `slow` ",
            ru: "slower slow  ,  the  slowest самый медленный"
        },
        {
            id: 162,
            eng: "сравнительная степень для `small` ",
            ru: "smaller small  ,  the  smallest самый маленький"
        },
        {
            id: 163,
            eng: "сравнительная степень для `smart` ",
            ru: "smarter smart  ,  the  smartest самый сообразительный"
        },
        {
            id: 164,
            eng: "сравнительная степень для `smelly` ",
            ru: "smellier smelly  ,  the  smelliest самый вонючий"
        },
        {
            id: 165,
            eng: "сравнительная степень для `smoky` ",
            ru: "smokier smoky  ,  the  smokiest самый дымный"
        },
        {
            id: 166,
            eng: "сравнительная степень для `smooth` ",
            ru: "smoother smooth  ,  the  smoothest самый гладкий"
        },
        {
            id: 167,
            eng: "сравнительная степень для `soft` ",
            ru: "softer soft  ,  the  softest самый мягкий"
        },
        {
            id: 168,
            eng: "сравнительная степень для `soon` ",
            ru: "sooner soon  ,  the  soonest самый скоро"
        },
        {
            id: 169,
            eng: "сравнительная степень для `sorry` ",
            ru: "sorrier sorry  ,  the  sorriest самый сожалеющий"
        },
        {
            id: 170,
            eng: "сравнительная степень для `sour` ",
            ru: "sourer sour  ,  the  sourest самый кислый"
        },
        {
            id: 171,
            eng: "сравнительная степень для `spacious` ",
            ru: "more spacious  ,  the  most самый просторный"
        },
        {
            id: 172,
            eng: "сравнительная степень для `special` ",
            ru: "more special  ,  the  most самый особенный"
        },
        {
            id: 173,
            eng: "сравнительная степень для `spicy` ",
            ru: "spicier spicy  ,  the  spiciest самый острый"
        },
        {
            id: 174,
            eng: "сравнительная степень для `steep` ",
            ru: "steeper steep  ,  the  steepest самый крутой (наклон)"
        },
        {
            id: 175,
            eng: "сравнительная степень для `strange` ",
            ru: "stranger strange  ,  the  strangest самый странный"
        },
        {
            id: 176,
            eng: "сравнительная степень для `strict` ",
            ru: "stricter strict  ,  the  strictest самый строгий"
        },
        {
            id: 177,
            eng: "сравнительная степень для `strong` ",
            ru: "stronger strong  ,  the  strongest самый сильный"
        },
        {
            id: 178,
            eng: "сравнительная степень для `stupid` ",
            ru: "more stupid  ,  the  most самый тупой"
        },
        {
            id: 179,
            eng: "сравнительная степень для `successful` ",
            ru: "more successful  ,  the  most самый успешный"
        },
        {
            id: 180,
            eng: "сравнительная степень для `sunny` ",
            ru: "sunnier sunny  ,  the  sunniest самый солнечный"
        },
        {
            id: 181,
            eng: "сравнительная степень для `sweaty` ",
            ru: "sweatier sweaty  ,  the  sweatiest самый потный"
        },
        {
            id: 182,
            eng: "сравнительная степень для `sweet` ",
            ru: "sweeter sweet  ,  the  sweetest самый сладкий"
        },
        {
            id: 183,
            eng: "сравнительная степень для `tanned` ",
            ru: "more tanned  ,  the  most самый загорелый"
        },
        {
            id: 184,
            eng: "сравнительная степень для `tasty` ",
            ru: "tastier tasty  ,  the  tastiest самый вкусный"
        },
        {
            id: 185,
            eng: "сравнительная степень для `thin` ",
            ru: "thicker thin  ,  the  thickest самый тонкий"
        },
        {
            id: 186,
            eng: "сравнительная степень для `thirsty` ",
            ru: "thirstier thirsty  ,  the  thirstiest самый жаждущий"
        },
        {
            id: 187,
            eng: "сравнительная степень для `tiny` ",
            ru: "tinier tiny  ,  the  tiniest самый крошечный"
        },
        {
            id: 188,
            eng: "сравнительная степень для `tricky` ",
            ru: "trickier tricky  ,  the  trickiest самый хитрый"
        },
        {
            id: 189,
            eng: "сравнительная степень для `TRUE` ",
            ru: "truer TRUE  ,  the  truest самый верный"
        },
        {
            id: 190,
            eng: "сравнительная степень для `ugly` ",
            ru: "uglier ugly  ,  the  ugliest самый уродливый"
        },
        {
            id: 191,
            eng: "сравнительная степень для `vulgar` ",
            ru: "more vulgar  ,  the  most самый вульгарный"
        },
        {
            id: 192,
            eng: "сравнительная степень для `warm` ",
            ru: "warmer warm  ,  the  warmest самый теплый"
        },
        {
            id: 193,
            eng: "сравнительная степень для `weak` ",
            ru: "weaker weak  ,  the  weakest самый слабый"
        },
        {
            id: 194,
            eng: "сравнительная степень для `wealthy` ",
            ru: "wealthier wealthy  ,  the  wealthiest самый состоятельный"
        },
        {
            id: 195,
            eng: "сравнительная степень для `wet` ",
            ru: "wetter wet  ,  the  wettest самый мокрый"
        },
        {
            id: 196,
            eng: "сравнительная степень для `wide` ",
            ru: "wider wide  ,  the  widest самый широкий"
        },
        {
            id: 197,
            eng: "сравнительная степень для `wild` ",
            ru: "wilder wild  ,  the  wildest самый дикий"
        },
        {
            id: 198,
            eng: "сравнительная степень для `windy` ",
            ru: "windier windy  ,  the  windiest самый ветреный"
        },
        {
            id: 199,
            eng: "сравнительная степень для `wise` ",
            ru: "wiser wise  ,  the  wisest самый мудрый"
        },
        {
            id: 200,
            eng: "сравнительная степень для `wonderful` ",
            ru: "more wonderful  ,  the  the most самый замечательный"
        },
        {
            id: 201,
            eng: "сравнительная степень для `worthy` ",
            ru: "worthier worthy  ,  the  worthiest самый достойный"
        },
        {
            id: 202,
            eng: "сравнительная степень для `young` ",
            ru: "younger young  ,  the  youngest самый молодой"
        },
    ],
    compareadjectiveser: [
        {
            id: 1,
            eng: "более  angry,  это  angrier  ",
            ru: "the  angriest  это самый сердитый"
        },
        {
            id: 2,
            eng: "более  bald,  это  balder  ",
            ru: "the  baldest  это самый лысый"
        },
        {
            id: 3,
            eng: "более  big,  это  bigger  ",
            ru: "the  biggest  это самый большой"
        },
        {
            id: 4,
            eng: "более black, это blacker ",
            ru: "the  blackest  это самый Черный"
        },
        {
            id: 5,
            eng: "более bloody, это bloodier ",
            ru: "the  bloodiest  это самый кровавый"
        },
        {
            id: 6,
            eng: "более blue, это bluer ",
            ru: "the  bluest  это самый синий"
        },
        {
            id: 7,
            eng: "более bossy, это bossier ",
            ru: "the  bossiest  это самый властный"
        },
        {
            id: 8,
            eng: "более brave, это braver ",
            ru: "the  bravest  это самый храбрый"
        },
        {
            id: 9,
            eng: "более bright, это brighter ",
            ru: "the  brightest  это самый яркий"
        },
        {
            id: 10,
            eng: "более busy, это busier ",
            ru: "the  busiest  это самый занятой"
        },
        {
            id: 11,
            eng: "более calm, это calmer ",
            ru: "the  calmest  это самый спокойный"
        },
        {
            id: 12,
            eng: "более cheap, это cheaper ",
            ru: "the  cheapest  это самый дешевый"
        },
        {
            id: 13,
            eng: "более clean, это cleaner ",
            ru: "the  cleanest  это самый чистый"
        },
        {
            id: 14,
            eng: "более close, это closer ",
            ru: "the  closest  это самый близкий"
        },
        {
            id: 15,
            eng: "более cloudy, это cloudier ",
            ru: "the  cloudiest  это самый облачный"
        },
        {
            id: 16,
            eng: "более clumsy, это clumsier ",
            ru: "the  clumsiest  это самый неуклюжий"
        },
        {
            id: 17,
            eng: "более cold, это colder ",
            ru: "the  coldest  это самый холодный"
        },
        {
            id: 18,
            eng: "более cool, это cooler ",
            ru: "the  coolest  это самый крутой"
        },
        {
            id: 19,
            eng: "более cozy, это handier ",
            ru: "the  handiest  это самый уютный"
        },
        {
            id: 20,
            eng: "более crazy, это crazier ",
            ru: "the  craziest  это самый сумасшедший"
        },
        {
            id: 21,
            eng: "более cute, это cuter ",
            ru: "the  cutest  это самый милый"
        },
        {
            id: 22,
            eng: "более dark, это darker ",
            ru: "the  darkest  это самый темный"
        },
        {
            id: 23,
            eng: "более deep, это deeper ",
            ru: "the  deepest  это самый глубокий"
        },
        {
            id: 24,
            eng: "более dirty, это dirtier ",
            ru: "the  dirtiest  это самый грязный"
        },
        {
            id: 25,
            eng: "более dry, это drier ",
            ru: "the  driest  это самый сухой"
        },
        {
            id: 26,
            eng: "более early, это earlier ",
            ru: "the  earliest  это самый ранний"
        },
        {
            id: 27,
            eng: "более easy, это easier ",
            ru: "the  easiest  это самый легкий"
        },
        {
            id: 28,
            eng: "более fast, это faster ",
            ru: "the  fastest  это самый быстрый"
        },
        {
            id: 29,
            eng: "более fat, это fatter ",
            ru: "the  fattest  это самый жирный"
        },
        {
            id: 30,
            eng: "более few, это fewer ",
            ru: "the  fewest  это самый мало"
        },
        {
            id: 31,
            eng: "более friendly, это friendlier ",
            ru: "the  friendliest  это самый дружелюбный"
        },
        {
            id: 32,
            eng: "более funny, это funnier ",
            ru: "the  funniest  это самый смешной"
        },
        {
            id: 33,
            eng: "более great, это greater ",
            ru: "the  greatest  это самый великий"
        },
        {
            id: 34,
            eng: "более greedy, это greedier ",
            ru: "the  greediest  это самый жадный"
        },
        {
            id: 35,
            eng: "более green, это greener ",
            ru: "the  greenest  это самый зелёный"
        },
        {
            id: 36,
            eng: "более hairy, это hairier ",
            ru: "the  hairiest  это самый волосатый"
        },
        {
            id: 37,
            eng: "более happy, это happier ",
            ru: "the  happiest  это самый счастливый"
        },
        {
            id: 38,
            eng: "более hard, это harder ",
            ru: "the  hardest  это самый трудный"
        },
        {
            id: 39,
            eng: "более healthy, это healthier ",
            ru: "the  healthiest  это самый здоровый"
        },
        {
            id: 40,
            eng: "более heavy, это heavier ",
            ru: "the  heaviest  это самый тяжелый"
        },
        {
            id: 41,
            eng: "более hot, это hotter ",
            ru: "the  hottest  это самый горячий"
        },
        {
            id: 42,
            eng: "более large, это larger ",
            ru: "the  largest  это самый большой"
        },
        {
            id: 43,
            eng: "более late, это later ",
            ru: "the  latest  это самый поздний"
        },
        {
            id: 44,
            eng: "более lazy, это lazier ",
            ru: "the  laziest  это самый ленивый"
        },
        {
            id: 45,
            eng: "более low, это lower ",
            ru: "the  lowest  это самый низкий"
        },
        {
            id: 46,
            eng: "более mad, это madder ",
            ru: "the  maddest  это самый безумный"
        },
        {
            id: 47,
            eng: "более nice, это nicer ",
            ru: "the  nicest  это самый приятный"
        },
        {
            id: 48,
            eng: "более sad, это sadder ",
            ru: "the  saddest  это самый грустный"
        },
        {
            id: 49,
            eng: "более safe, это safer ",
            ru: "the  safest  это самый безопасный"
        },
        {
            id: 50,
            eng: "более shitty, это shittier ",
            ru: "the  shittiest  это самый дерьмовенький"
        },
        {
            id: 51,
            eng: "более short, это shorter ",
            ru: "the  shortest  это самый короткий, низкий"
        },
        {
            id: 52,
            eng: "более shy, это shyer ",
            ru: "the  shyest  это самый застенчивый"
        },
        {
            id: 53,
            eng: "более silly, это sillier ",
            ru: "the  silliest  это самый глупый"
        },
        {
            id: 54,
            eng: "более simple, это simpler ",
            ru: "the  plainest  это самый простой"
        },
        {
            id: 55,
            eng: "более slow, это slower ",
            ru: "the  slowest  это самый медленный"
        },
        {
            id: 56,
            eng: "более small, это smaller ",
            ru: "the  smallest  это самый маленький"
        },
        {
            id: 57,
            eng: "более smart, это smarter ",
            ru: "the  smartest  это самый сообразительный"
        },
        {
            id: 58,
            eng: "более strong, это stronger ",
            ru: "the  strongest  это самый сильный"
        },
        {
            id: 59,
            eng: "более sunny, это sunnier ",
            ru: "the  sunniest  это самый солнечный"
        },
        {
            id: 60,
            eng: "более thick, это thicker ",
            ru: "the thickest  это самый толстый"
        },
        {
            id: 61,
            eng: "более thin, это thinner ",
            ru: "the  thinnest  это самый тонкий"
        },
        {
            id: 62,
            eng: "более ugly, это uglier ",
            ru: "the  ugliest  это самый уродливый"
        },
        {
            id: 63,
            eng: "более warm, это warmer ",
            ru: "the  warmest  это самый теплый"
        },
        {
            id: 64,
            eng: "более young, это younger ",
            ru: "the  youngest  это самый молодой"
        },
    ],
    compareadjectivesmore: [
        {
            id: 1,
            eng: "более  alive , more alive  ",
            ru: "the  most  alive самый живой"
        },
        {
            id: 2,
            eng: "более  amazing , more amazing  ",
            ru: "the  most  amazing самый удивительный"
        },
        {
            id: 3,
            eng: "более  annoying , more annoying  ",
            ru: "the  most  annoying самый бесящий"
        },
        {
            id: 4,
            eng: "более attractive , more attractive ",
            ru: "the  most  attractive самый привлекательный"
        },
        {
            id: 5,
            eng: "более awesome , more awesome ",
            ru: "the  most  awesome самый офигенный"
        },
        {
            id: 6,
            eng: "более beautiful , more beautiful ",
            ru: "the  most  beautiful самый красивая"
        },
        {
            id: 7,
            eng: "более boring , more boring ",
            ru: "the  most  boring самый скучный"
        },
        {
            id: 8,
            eng: "более bothering , more bothering ",
            ru: "the  most  bothering самый раздражающий"
        },
        {
            id: 9,
            eng: "более breathtaking , more breathtaking ",
            ru: "the  most  breathtaking самый захватывающий дух"
        },
        {
            id: 10,
            eng: "более correct , more correct ",
            ru: "the  most  correct самый верный"
        },
        {
            id: 11,
            eng: "более disgusting , more disgusting ",
            ru: "the  most  disgusting самый отвратительный"
        },
        {
            id: 12,
            eng: "более expensive , more expensive ",
            ru: "the  most  expensive самый дорогой"
        },
        {
            id: 13,
            eng: "более fabulous , more fabulous ",
            ru: "the  most  fabulous самый поразительный"
        },
        {
            id: 14,
            eng: "более fantastic , more fantastic ",
            ru: "the  most  fantastic самый фантастичный"
        },
        {
            id: 15,
            eng: "более fashionable , more fashionable ",
            ru: "the  most  fashionable самый модный"
        },
        {
            id: 16,
            eng: "более favorite , more favorite ",
            ru: "the  most  favorite самый любимый"
        },
        {
            id: 17,
            eng: "более handsome , more handsome ",
            ru: "the  most  handsome самый красивый (муж)"
        },
        {
            id: 18,
            eng: "более hollow , more hollow ",
            ru: "the  most  hollow самый пустотелый"
        },
        {
            id: 19,
            eng: "более immortal , more immortal ",
            ru: "the  most  immortal самый бессмертный"
        },
        {
            id: 20,
            eng: "более incredible , more incredible ",
            ru: "the  most  incredible самый невероятный"
        },
        {
            id: 21,
            eng: "более intelligent , more intelligent ",
            ru: "the  most  intelligent самый образованный"
        },
        {
            id: 22,
            eng: "более interesting , more interesting ",
            ru: "the  most  interesting самый интересный"
        },
        {
            id: 23,
            eng: "более legendary , more legendary ",
            ru: "the  most  legendary самый легендарный"
        },
        {
            id: 24,
            eng: "более muscular , more muscular ",
            ru: "the  most  muscular самый мускулистый"
        },
        {
            id: 25,
            eng: "более overweight , more overweight ",
            ru: "the  most  overweight самый полноватый"
        },
        {
            id: 26,
            eng: "более reliable , more reliable ",
            ru: "the  most  reliable самый надёжный"
        },
        {
            id: 27,
            eng: "более scared , more scared ",
            ru: "the  the most  scared самый напуганный"
        },
        {
            id: 28,
            eng: "более selfish , more selfish ",
            ru: "the most  selfish самый эгоистичный"
        },
        {
            id: 29,
            eng: "более shocking , more shocking ",
            ru: "the  most  shocking самый шокирующий"
        },
        {
            id: 30,
            eng: "более spacious , more spacious ",
            ru: "the  most  spacious самый просторный"
        },
        {
            id: 31,
            eng: "более special , more special ",
            ru: "the  most  special самый особенный"
        },
        {
            id: 32,
            eng: "более stupid , more stupid ",
            ru: "the  most  stupid самый тупой"
        },
        {
            id: 33,
            eng: "более successful , more successful ",
            ru: "the  most  successful самый успешный"
        },
        {
            id: 34,
            eng: "более tanned , more tanned ",
            ru: "the  most  tanned самый загорелый"
        },
        {
            id: 35,
            eng: "более vulgar , more vulgar ",
            ru: "the  most  vulgar самый вульгарный"
        },
        {
            id: 36,
            eng: "более wonderful , more wonderful ",
            ru: "the  the most  wonderful самый замечательный"
        },
        {
            id: 37,
            eng: "более evil , more evil evil ",
            ru: "the  most  evil самый злой"
        },
        {
            id: 38,
            eng: "более nervous , more nervous nervous ",
            ru: "the  most  nervous самый нервный"
        },
    ],
    stickyVerbs: [
        {
            id: 1,
            eng: "love / лав /",
            ru: "любить"
        },
        {
            id: 2,
            eng: "like / лайк /",
            ru: "нравиться"
        },
        {
            id: 3,
            eng: "enjoy / энджой /",
            ru: "наслаждаться, получать удовольствие от"
        },
        {
            id: 4,
            eng: "give up / гив ап /",
            ru: "сдаваться, прекращать делать что-то"
        },
        {
            id: 5,
            eng: "keep / кип / и go on / гОу он / ",
            ru: "продолжать"
        },
        {
            id: 6,
            eng: "stop / стап /",
            ru: "остановиться, перестать"
        },
        {
            id: 7,
            eng: "hate / хэйт /",
            ru: "ненавидеть"
        },
        {
            id: 8,
            eng: "avoid / эвОйд /",
            ru: "избегать"
        },
        {
            id: 9,
            eng: "miss / мис /",
            ru: "скучать"
        },
        {
            id: 10,
            eng: "finish / фИниш /",
            ru: "заанчивать"
        },
        {
            id: 11,
            eng: "I like / ай лайк /",
            ru: "мне нравится"
        },
        {
            id: 12,
            eng: "she likes / щи лайкс /",
            ru: "ему нравится"
        },
        {
            id: 13,
            eng: "Vincent likes me ",
            ru: "я нравлюсь Винсу"
        },
        {
            id: 14,
            eng: "I like Vincent ",
            ru: "мне нравится Винс"
        },
        {
            id: 15,
            eng: "I like music / ай лайк мьюзик /",
            ru: "мне нравится музыка"
        },
        {
            id: 16,
            eng: "we like / уи лайк /",
            ru: "нам нравится"
        },
        {
            id: 17,
            eng: "they like / дэй лайк /",
            ru: "им нравится"
        },
        {
            id: 18,
            eng: "he likes / хи лайкс /",
            ru: "ему нравится"
        },
        {
            id: 19,
            eng: "I like you ",
            ru: "ты мне нравишься"
        },
        {
            id: 20,
            eng: "he likes me ",
            ru: "я ему нравлюсь"
        },
        {
            id: 21,
            eng: "he likes you ",
            ru: "ты ему нравишься"
        },
        {
            id: 22,
            eng: "everybody likes me ",
            ru: "я всем нравлюсь"
        },
        {
            id: 23,
            eng: "nobody likes you ",
            ru: "ты никому не нравишься"
        },
    ],
    roblox: [
        {
            id: 1,
            eng: "blue",
            ru: "синий",
            hint: ""
        },
        {
            id: 2,
            eng: "green",
            ru: "зелёный",
            hint: ""
        },
        {
            id: 3,
            eng: "yellow",
            ru: "желтый",
            hint: ""
        },
        {
            id: 4,
            eng: "red",
            ru: "красный",
            hint: ""
        },
        {
            id: 5,
            eng: "I fell",
            ru: "я упал(а)",
            hint: ""
        },
        {
            id: 6,
            eng: "run",
            ru: "беги",
            hint: ""
        },
        {
            id: 7,
            eng: "I am standing",
            ru: "я стою",
            hint: ""
        },
        {
            id: 8,
            eng: "I am jumping",
            ru: "я прыгаю",
            hint: ""
        },
        {
            id: 9,
            eng: "They are running",
            ru: "они бегут",
            hint: ""
        },
        {
            id: 10,
            eng: "You have to run",
            ru: "ты должен бежать",
            hint: ""
        },
        {
            id: 11,
            eng: "You have to jump",
            ru: "ты должен прыгнуть",
            hint: ""
        },
        {
            id: 12,
            eng: "He has to run",
            ru: "он должен бежать",
            hint: ""
        },
        {
            id: 13,
            eng: "He has to jump",
            ru: "он должен прыгнуть",
            hint: ""
        },
        {
            id: 14,
            eng: "left",
            ru: "налево",
            hint: ""
        },
        {
            id: 15,
            eng: "I have to play",
            ru: "я должен играть",
            hint: ""
        },
        {
            id: 16,
            eng: "We have to play",
            ru: "мы должны играть",
            hint: ""
        },
        {
            id: 17,
            eng: "She has to play",
            ru: "она должна играть",
            hint: ""
        },
        {
            id: 18,
            eng: "press black",
            ru: "нажми на черный",
            hint: ""
        },
        {
            id: 19,
            eng: "press green",
            ru: "нажми на зеленый",
            hint: ""
        },
        {
            id: 20,
            eng: "press pink",
            ru: "нажми на розовый",
            hint: ""
        },
        {
            id: 21,
            eng: "fast",
            ru: "быстро",
            hint: ""
        },
        {
            id: 22,
            eng: "slow",
            ru: "медленно",
            hint: ""
        },
        {
            id: 23,
            eng: "wait",
            ru: "ждать",
            hint: ""
        },
        {
            id: 24,
            eng: "I am waiting",
            ru: "я жду",
            hint: ""
        },
        {
            id: 25,
            eng: "They",
            ru: "они",
            hint: ""
        },
        {
            id: 26,
            eng: "We",
            ru: "мы",
            hint: ""
        },
        {
            id: 27,
            eng: "Roblox",
            ru: "Роблокс",
            hint: ""
        },
        {
            id: 28,
            eng: "right",
            ru: "направо",
            hint: ""
        },
    ],
    technologic3b1: [
        {
            id: 1,
            eng: "Buy / бАй /",
            ru: "Купи"
        },
        {
            id: 2,
            eng: "Use / Юз /",
            ru: "Используй"
        },
        {
            id: 3,
            eng: "Break / брЭйк /",
            ru: "Сломай"
        },
        {
            id: 4,
            eng: "Fix / фИкс /",
            ru: "Отремонтируй"
        },
        {
            id: 5,
            eng: "Trash / трЭш /",
            ru: "Выкини на мусорку"
        },
        {
            id: 6,
            eng: "Change / чендж /",
            ru: "Поменяй"
        },
        {
            id: 7,
            eng: "Mail / мэил /",
            ru: "Пошли по почте"
        },
        {
            id: 8,
            eng: "Upgrade / АпгрЭйд /",
            ru: "Усовершенствуй, обнови"
        },
        {
            id: 9,
            eng: "Charge / чАрдж /",
            ru: "Подзаряди"
        },
        {
            id: 10,
            eng: "Point / пОинт /",
            ru: "Укажи на"
        },
        {
            id: 11,
            eng: "Zoom / зУм /",
            ru: "Увеличь"
        },
        {
            id: 12,
            eng: "Press / прЭс /",
            ru: "Нажми"
        },
        {
            id: 13,
            eng: "Rename / ринЭйм /",
            ru: "Переименуй"
        },
        {
            id: 14,
            eng: "Work / уОрк /",
            ru: "Проработай"
        },
        {
            id: 15,
            eng: "Erase / ирЭйз /",
            ru: "Сотри"
        },
        {
            id: 16,
            eng: "Write / рАйт /",
            ru: "Напиши"
        },
        {
            id: 17,
            eng: "Cut / кАт /",
            ru: "Вырежи"
        },
        {
            id: 18,
            eng: "Paste / пЭйст /",
            ru: "Вставь"
        },
        {
            id: 19,
            eng: "Save / сЭйв /",
            ru: "Сохрани"
        },
        {
            id: 20,
            eng: "Load / лОуд /",
            ru: "Загрузи"
        },
        {
            id: 21,
            eng: "Check / чЕк /",
            ru: "Проверь"
        },
        {
            id: 22,
            eng: "Rewrite / рирАйт /",
            ru: "Перепиши"
        },
        {
            id: 23,
            eng: "Plug / плАг /",
            ru: "Включи в сеть"
        },
        {
            id: 24,
            eng: "Play / плЭй /",
            ru: "Играй"
        },
        {
            id: 25,
            eng: "Burn / бёрн /",
            ru: "Сожги"
        },
        {
            id: 26,
            eng: "Drag / дрЭг /",
            ru: "Перетащи, перетяни"
        },
        {
            id: 27,
            eng: "Zip / зИп /",
            ru: "Застегни молнию"
        },
        {
            id: 28,
            eng: "Lock / лок /",
            ru: "Закрой на замок"
        },
        {
            id: 29,
            eng: "Fill / фил /",
            ru: "Заполни"
        },
        {
            id: 30,
            eng: "Call / кОл /",
            ru: "Позови"
        },
        {
            id: 31,
            eng: "Find / фАйнд /",
            ru: "Найди"
        },
        {
            id: 32,
            eng: "View / вью /",
            ru: "Осмотри"
        },
        {
            id: 33,
            eng: "Code / кОуд /",
            ru: "Закодируй"
        },
        {
            id: 34,
            eng: "Jam / джЭм /",
            ru: "замятие, пробка, варенье"
        },
        {
            id: 35,
            eng: "Unlock / анлОк /",
            ru: "Разблокируй"
        },
        {
            id: 36,
            eng: "Scroll / скрОл /",
            ru: "Полистай, прокрути"
        },
        {
            id: 37,
            eng: "Pause / ПОЗ /",
            ru: "Приостанови"
        },
        {
            id: 38,
            eng: "Cross / крОс /",
            ru: "Перечеркни"
        },
        {
            id: 39,
            eng: "Crack / скрЭк /",
            ru: "взломай"
        },
        {
            id: 40,
            eng: "Switch / свИч /",
            ru: "Переключи"
        },
        {
            id: 41,
            eng: "Name / нЭйм /",
            ru: "Назови, дай имя"
        },
        {
            id: 42,
            eng: "Tune / тьЮн /",
            ru: "Настрой ( про муз.инструменты)"
        },
        {
            id: 43,
            eng: "Touch / тАч /",
            ru: "Потрогай"
        },
        {
            id: 44,
            eng: "Turn / тЁрн /",
            ru: "Поверни"
        },
        {
            id: 45,
            eng: "Rip / рип /",
            ru: "Разорви"
        },
        {
            id: 46,
            eng: "Leave / лив /",
            ru: "Покинь, оставь"
        },
        {
            id: 47,
            eng: "Stop / стАп /",
            ru: "Прекрати, останови"
        },
        {
            id: 48,
            eng: "Format / формАт /",
            ru: "Отформатируй"
        },
        {
            id: 49,
            eng: "Print / принт /",
            ru: "Распечатай"
        },
        {
            id: 50,
            eng: "Bring / брИн /",
            ru: "Принеси"
        },
        {
            id: 51,
            eng: "Pay / пЭй /",
            ru: "Заплати быстро"
        },
        {
            id: 52,
            eng: "Click / клИк /",
            ru: "Кликни, нажми"
        },
        {
            id: 53,
            eng: "Drop / дрОп /",
            ru: "Урони"
        },
        {
            id: 54,
            eng: "Rate / рЭйт /",
            ru: "Дайму оценку, оцени"
        },
        {
            id: 55,
            eng: "Update / апдЭйт /",
            ru: "Обнови "
        },
        {
            id: 56,
            eng: "Feel / фИл /",
            ru: "Почувствуй"
        },
        {
            id: 57,
            eng: "Look at / лУк Эт /",
            ru: "Посмотри на"
        },
        {
            id: 58,
            eng: "Unzip / анзИп /",
            ru: "Расстегни молнию"
        },
        {
            id: 59,
            eng: "Sing a song / син э сон /",
            ru: "Петь песню"
        },
    ],
    technologic2a2: [
        {
            id: 25,
            eng: "Burn / бёрн /",
            ru: "Сожги"
        },
        {
            id: 26,
            eng: "Drag / дрЭг /",
            ru: "Перетащи, перетяни"
        },
        {
            id: 27,
            eng: "Zip / зИп /",
            ru: "Застегни молнию"
        },
        {
            id: 28,
            eng: "Lock / лок /",
            ru: "Закрой на замок"
        },
        {
            id: 29,
            eng: "Fill / фил /",
            ru: "Заполни"
        },
        {
            id: 30,
            eng: "Call / кОл /",
            ru: "Позови"
        },
        {
            id: 31,
            eng: "Find / фАйнд /",
            ru: "Найди"
        },
        {
            id: 32,
            eng: "View / вью /",
            ru: "Осмотри"
        },
        {
            id: 33,
            eng: "Code / кОуд /",
            ru: "Закодируй"
        },
        {
            id: 34,
            eng: "Jam / джЭм /",
            ru: "замятие, пробка, варенье"
        },
        {
            id: 35,
            eng: "Unlock / анлОк /",
            ru: "Разблокируй"
        },
        {
            id: 36,
            eng: "Scroll / скрОл /",
            ru: "Полистай, прокрути"
        },
        {
            id: 37,
            eng: "Pause / ПОЗ /",
            ru: "Приостанови"
        },
        {
            id: 38,
            eng: "Cross / крОс /",
            ru: "Перечеркни"
        },
        {
            id: 39,
            eng: "Crack / скрЭк /",
            ru: "взломай"
        },
        {
            id: 40,
            eng: "Switch / свИч /",
            ru: "Переключи"
        },
        {
            id: 41,
            eng: "Name / нЭйм /",
            ru: "Назови, дай имя"
        },
        {
            id: 42,
            eng: "Tune / тьЮн /",
            ru: "Настрой ( про муз.инструменты)"
        },
        {
            id: 43,
            eng: "Touch / тАч /",
            ru: "Потрогай"
        },
        {
            id: 44,
            eng: "Turn / тЁрн /",
            ru: "Поверни"
        },
        {
            id: 45,
            eng: "Rip / рип /",
            ru: "Разорви"
        },
        {
            id: 46,
            eng: "Leave / лив /",
            ru: "Покинь, оставь"
        },
        {
            id: 47,
            eng: "Stop / стАп /",
            ru: "Прекрати, останови"
        },
        {
            id: 48,
            eng: "Format / формАт /",
            ru: "Отформатируй"
        },
    ],
    technologic1a1: [
        {
            id: 1,
            eng: "Buy / бАй /",
            ru: "Купи"
        },
        {
            id: 2,
            eng: "Use / Юз /",
            ru: "Используй"
        },
        {
            id: 3,
            eng: "Break / брЭйк /",
            ru: "Сломай"
        },
        {
            id: 4,
            eng: "Fix / фИкс /",
            ru: "Отремонтируй"
        },
        {
            id: 5,
            eng: "Trash / трЭш /",
            ru: "Выкини на мусорку"
        },
        {
            id: 6,
            eng: "Change / чендж /",
            ru: "Поменяй"
        },
        {
            id: 7,
            eng: "Mail / мэил /",
            ru: "Пошли по почте"
        },
        {
            id: 8,
            eng: "Upgrade / АпгрЭйд /",
            ru: "Усовершенствуй, обнови"
        },
        {
            id: 9,
            eng: "Charge / чАрдж /",
            ru: "Подзаряди"
        },
        {
            id: 10,
            eng: "Point / пОинт /",
            ru: "Укажи на"
        },
        {
            id: 11,
            eng: "Zoom / зУм /",
            ru: "Увеличь"
        },
        {
            id: 12,
            eng: "Press / прЭс /",
            ru: "Нажми"
        },
        {
            id: 13,
            eng: "Rename / ринЭйм /",
            ru: "Переименуй"
        },
        {
            id: 14,
            eng: "Work / уОрк /",
            ru: "Проработай"
        },
        {
            id: 15,
            eng: "Erase / ирЭйз /",
            ru: "Сотри"
        },
        {
            id: 16,
            eng: "Write / рАйт /",
            ru: "Напиши"
        },
        {
            id: 17,
            eng: "Cut / кАт /",
            ru: "Вырежи"
        },
        {
            id: 18,
            eng: "Paste / пЭйст /",
            ru: "Вставь"
        },
        {
            id: 19,
            eng: "Save / сЭйв /",
            ru: "Сохрани"
        },
        {
            id: 20,
            eng: "Load / лОуд /",
            ru: "Загрузи"
        },
        {
            id: 21,
            eng: "Check / чЕк /",
            ru: "Проверь"
        },
        {
            id: 22,
            eng: "Rewrite / рирАйт /",
            ru: "Перепиши"
        },
        {
            id: 23,
            eng: "Plug / плАг /",
            ru: "Включи в сеть"
        },
        {
            id: 24,
            eng: "Play / плЭй /",
            ru: "Играй"
        },
    ],
    santalapfart1b1: [
        {
            id: 1,
            eng: "mom made beans / мам мэйд бинз /",
            ru: "мама приготовила бобы"
        },
        {
            id: 2,
            eng: "them = 'em / эм = дэм /",
            ru: "их (сокращённо)"
        },
        {
            id: 3,
            eng: "get your coat on ",
            ru: "накинь, надень своё пальто"
        },
        {
            id: 4,
            eng: "mall / мол /",
            ru: "большой магазин"
        },
        {
            id: 5,
            eng: "could / куд /",
            ru: "мог"
        },
        {
            id: 6,
            eng: "how not to forget / хау нат ту фогет /",
            ru: "как не забыть"
        },
        {
            id: 7,
            eng: "cut the cheese ( на слэнге ) ",
            ru: "пёрнуть, пукнуть ( идиома )"
        },
        {
            id: 8,
            eng: "while / уйал /",
            ru: "в то время как, пока"
        },
        {
            id: 9,
            eng: "wait for someone ",
            ru: "ждать кого-то"
        },
        {
            id: 10,
            eng: "I'd или I would / аЙд или Ай вУд /",
            ru: "я бы "
        },
        {
            id: 11,
            eng: "the gas bubble  / дэ гэс бабл /",
            ru: "газовый пузырь "
        },
        {
            id: 12,
            eng: "grew bigger  / грУ бигэ /",
            ru: "нарастал, увеличивался"
        },
        {
            id: 13,
            eng: "with every word ",
            ru: "с каждым словом"
        },
        {
            id: 14,
            eng: "tried my best  / трайд май бэст /",
            ru: "выложился по максимуму"
        },
        {
            id: 15,
            eng: "hide  / хайд /",
            ru: "прятать, скрывать"
        },
        {
            id: 16,
            eng: "thought  / thОт /",
            ru: "думал"
        },
        {
            id: 17,
            eng: "I was doing swell / воз дуин свэл /",
            ru: "у меня хорошо получалось"
        },
        {
            id: 18,
            eng: "knees и laps / нис , лэпс /",
            ru: "коленки и колени"
        },
        {
            id: 19,
            eng: "stink (на слэнге) / стинк /",
            ru: "вонять (отстой, стрёмный)"
        },
        {
            id: 20,
            eng: "what's the smell? / уОтс дэ смЭл /",
            ru: "что за запах? чем пахнет?"
        },
        {
            id: 21,
            eng: "nothing under / наthЫн Андэ /",
            ru: "ничего под"
        },
        {
            id: 22,
            eng: "Christmas tree / крисмас три /",
            ru: "ёлка"
        },
        {
            id: 23,
            eng: "a baseball bat / бэйсбол бэт /",
            ru: "бейсбольная бита"
        },
    ],
    santalapfart2b2: [
        {
            id: 24,
            eng: "ask for something ",
            ru: "просить чего-то"
        },
        {
            id: 25,
            eng: "ice skates / айс скейтс /",
            ru: "коньки"
        },
        {
            id: 26,
            eng: "none of these / нАн ов дыZ /",
            ru: "ничего из этого"
        },
        {
            id: 27,
            eng: "a lot of things ",
            ru: "много вещей"
        },
        {
            id: 28,
            eng: "let slip out / лэт слип аут /",
            ru: "позволить вырваться"
        },
        {
            id: 29,
            eng: "On Christmas Eve  / он крисмас ив /",
            ru: "сочельник -  ночь перед  рождеством"
        },
        {
            id: 30,
            eng: "snuck out of home / снАк аут ов хоум /",
            ru: "выкрался из дома"
        },
        {
            id: 31,
            eng: "without a sound ",
            ru: "без звука"
        },
        {
            id: 32,
            eng: "living room  / ливин рум /",
            ru: "зал, гостиная"
        },
        {
            id: 33,
            eng: "take a look around ",
            ru: "осмотреться"
        },
        {
            id: 34,
            eng: "full of presents  / фул ов прэзэнтс /",
            ru: "наполнен подарками"
        },
        {
            id: 35,
            eng: "a pile  / э пАйл /",
            ru: "куча"
        },
        {
            id: 36,
            eng: "turn around / тёрн эрАунд /",
            ru: "развернуться"
        },
        {
            id: 37,
            eng: "such great force  / сач грэйт форс /",
            ru: "такая великая сила"
        },
        {
            id: 38,
            eng: "almost came down / олмост кем даун /",
            ru: "почти свалилась"
        },
        {
            id: 39,
            eng: "cherish a moment / чЕриш э моУмэнт /",
            ru: "дорожить моментом"
        },
        {
            id: 40,
            eng: "she realized / щи риалАйзд /",
            ru: "она осознала"
        },
        {
            id: 41,
            eng: "even Saint Nick / ивн сЭйнт ник /",
            ru: "даже святой Николай"
        },
        {
            id: 42,
            eng: "now and then / нау эн дэн /",
            ru: "порой, бывает (синоним иногда)"
        },
        {
            id: 43,
            eng: "fart / фарт /",
            ru: "пукнуть"
        },
        {
            id: 44,
            eng: "all I could think of / ол ай куд /",
            ru: "всё о чем я мог думать"
        },
        {
            id: 45,
            eng: "I'd explode / айд эксплОуд /",
            ru: "я бы взорвался"
        },
        {
            id: 46,
            eng: "tried his best  / трайд хиз бэст /",
            ru: "выложился на максимум, сделал всё в своих силах"
        },
    ],
    feelGoodSong: [
        {
            id: 1,
            eng: "sun in the sky / сан ин дэ скай /",
            ru: "солнце в небе"
        },
        {
            id: 2,
            eng: "dawn / дон /",
            ru: "рассвет "
        },
        {
            id: 3,
            eng: "It is life / ит из лАйф /",
            ru: "это жизнь"
        },
        {
            id: 4,
            eng: "we live here / уи лИв хИэ /",
            ru: "мы живём здесь"
        },
        {
            id: 5,
            eng: "fish in the sea / фиш ин дэ си /",
            ru: "рыба в море"
        },
        {
            id: 6,
            eng: "river / ривэ /",
            ru: "река"
        },
        {
            id: 7,
            eng: "blossom  ",
            ru: "цветение, цвести"
        },
        {
            id: 8,
            eng: "mine. / майн /",
            ru: "мой (когда в конце предложения)"
        },
        {
            id: 9,
            eng: "dragonfly / дрЭгонфлай /",
            ru: "стрекоза"
        },
        {
            id: 10,
            eng: "I mean / ай мин /",
            ru: "я имею ввиду "
        },
        {
            id: 11,
            eng: "butterflies / бАтэфлайz /",
            ru: "бабочки"
        },
        {
            id: 12,
            eng: "in peace / ин пис /",
            ru: "в мире, спокойствии"
        },
        {
            id: 13,
            eng: "bold world  / болд уорлд /",
            ru: "храбрый мир"
        },
        {
            id: 14,
            eng: "have fun ",
            ru: "веселиться"
        },
        {
            id: 15,
            eng: "shine bright / шайн брайт /",
            ru: "сиять ярко"
        },
        {
            id: 16,
            eng: "scent of the pine / сЭнт ов дэ пАйн /",
            ru: "аромат сосны"
        },
        {
            id: 17,
            eng: "freedom / фрИдом /",
            ru: "свобода"
        },
        {
            id: 18,
            eng: "I'm feeling good ",
            ru: "я чувствую себя хорошо"
        },
    ],
    paperPlane1: [
        {
            id: 1,
            eng: "right now / райт нау /",
            ru: "прямо сейчас"
        },
        {
            id: 2,
            eng: "at the moment / эт дыс моуэнт /",
            ru: "в данный момент"
        },
        {
            id: 3,
            eng: "an airplane / эн Ээрплэйн /",
            ru: "самолёт"
        },
        {
            id: 4,
            eng: "paper / пЭйпэ /",
            ru: "бумага"
        },
        {
            id: 5,
            eng: "an engine / эн Энджин /",
            ru: "двигатель"
        },
        {
            id: 6,
            eng: "fold ",
            ru: "сгибать"
        },
        {
            id: 7,
            eng: "to Spain / спЭин /",
            ru: "в Испанию"
        },
        {
            id: 8,
            eng: "from zero to twelve ",
            ru: "от нуля до двенадцати"
        },
        {
            id: 9,
            eng: "from the end to the beginning ",
            ru: "с конца и до начала"
        },
        {
            id: 10,
            eng: "to you from me ",
            ru: "тебе от меня"
        },
        {
            id: 11,
            eng: "run to my house ",
            ru: "беги к моему дому"
        },
        {
            id: 12,
            eng: "to the left ",
            ru: "налево"
        },
        {
            id: 13,
            eng: "to the right ",
            ru: "направо"
        },
        {
            id: 14,
            eng: "I'm in the office! ",
            ru: "в офисе я!"
        },
        {
            id: 15,
            eng: "I'm going to the office ",
            ru: "иду в офис"
        },
        {
            id: 16,
            eng: "I go to office on Mondays ",
            ru: "хожу в офис по понедельникам"
        },
        {
            id: 17,
            eng: "wings / вингz /",
            ru: "крылья"
        },
        {
            id: 18,
            eng: "a tail / э тЭйл /",
            ru: "хвост"
        },
    ],
    paperPlane2: [
        {
            id: 1,
            eng: "on foot / он фут /",
            ru: "пешком"
        },
        {
            id: 2,
            eng: "by plane / бай плэйн /",
            ru: "на самолёте"
        },
        {
            id: 3,
            eng: "by train / бай трэйн /",
            ru: "на поезде"
        },
        {
            id: 4,
            eng: "by tram / бай трэм /",
            ru: "на трамвае"
        },
        {
            id: 5,
            eng: "soon / сун /",
            ru: "скоро"
        },
        {
            id: 6,
            eng: "later / лЭйтэ /",
            ru: "позже, потом"
        },
        {
            id: 7,
            eng: "in 2 days / ин ту дэйz /",
            ru: "через два дня"
        },
        {
            id: 8,
            eng: "next week / нэкст вик /",
            ru: "на следующей неделе"
        },
        {
            id: 9,
            eng: "in a month / ин э мАнтh /",
            ru: "через месяц"
        },
        {
            id: 10,
            eng: "next life / нэкст лАйф /",
            ru: " следующей жизни"
        },
        {
            id: 11,
            eng: "in an hour / ин эн Ауэ /",
            ru: "через час"
        },
        {
            id: 12,
            eng: "the day after tomorrow ",
            ru: "послезавтра"
        },
        {
            id: 13,
            eng: "after dinner ",
            ru: "после ужина"
        },
        {
            id: 14,
            eng: "on the first / он дэ фёст /",
            ru: "первого числа"
        },
        {
            id: 15,
            eng: "on the second / он дэ сэконд /",
            ru: "второго числа"
        },
        {
            id: 16,
            eng: "on the third / он дэ thёрд /",
            ru: "третьего числа"
        },
        {
            id: 17,
            eng: "on the fifth / он дэ фИфтh /",
            ru: "пятого числа"
        },
        {
            id: 18,
            eng: "in February / ин фЭбрари /",
            ru: "в феврале"
        },
        {
            id: 19,
            eng: "in winter / ин уинтэ /",
            ru: "зимой"
        },
        {
            id: 20,
            eng: "on the twenty-first of February ",
            ru: "двадцать первого февраля"
        },
        {
            id: 21,
            eng: "on the weekends ",
            ru: "на выходных"
        },
        {
            id: 22,
            eng: "at night / эт найт /",
            ru: "ночью"
        },
        {
            id: 23,
            eng: "tonight / тунайт /",
            ru: "сегодня вечером"
        },
    ],
    kickAss: [
        {
            id: 1,
            eng: "kick ass / кИк Эс /",
            ru: "надрать зад, задать жару"
        },
        {
            id: 2,
            eng: "young / ян /",
            ru: "молодые"
        },
        {
            id: 3,
            eng: "strong / строн /",
            ru: "сильные"
        },
        {
            id: 4,
            eng: "look for / лук фо /",
            ru: "искать"
        },
        {
            id: 5,
            eng: "belong / белОн /",
            ru: "принадлежать"
        },
        {
            id: 6,
            eng: "free / фри /",
            ru: "свободные"
        },
        {
            id: 7,
            eng: "burn bridges / бёрн бриджеz /",
            ru: "сжигать мосты"
        },
        {
            id: 8,
            eng: "blood / блАд /",
            ru: "кровь"
        },
        {
            id: 9,
            eng: "knees / ниz /",
            ru: "колени"
        },
        {
            id: 10,
            eng: "we could / уи кУд /",
            ru: "мы могли"
        },
        {
            id: 11,
            eng: "rule the world / рул дэ уорлд /",
            ru: "управлять миром"
        },
        {
            id: 12,
            eng: "on a silver platter / он э сИлвэ плЭтэ /",
            ru: "на серебрянном блюде"
        },
        {
            id: 13,
            eng: "right and wrong / райт эн рон /",
            ru: "правильно и неправильно"
        },
        {
            id: 14,
            eng: "fake / фЭйк /",
            ru: "подделывать"
        },
        {
            id: 15,
            eng: "stream / стрим /",
            ru: "поток"
        },
        {
            id: 16,
            eng: "a crash / э крЭш /",
            ru: "крушение, авария"
        },
        {
            id: 17,
            eng: "light / лайт /",
            ru: "свет"
        },
        {
            id: 18,
            eng: "make it better / мэй ит бэтэ /",
            ru: "сделать это лучше"
        },
        {
            id: 19,
            eng: "turn upside down / тёрн Апсайд даун /",
            ru: "перевернуть вверх дном"
        },
        {
            id: 20,
            eng: "just / джаст /",
            ru: "всего лишь, только лишь"
        },
        {
            id: 21,
            eng: "no other way to be / ноу Адэ уэй ту би /",
            ru: "подругому не может быть"
        },
        {
            id: 22,
            eng: "nowhere to run / нОувЭэ ту ран /",
            ru: "некуда бежать"
        },
        {
            id: 23,
            eng: "at your feet / эт ё фит /",
            ru: "у ваших стоп"
        },
    ],
    clothes01: [
        {
            id: 1,
            eng: "a hat / хэт /",
            ru: "головной убор, шапка, шляпа"
        },
        {
            id: 2,
            eng: "a wool hat / вул /",
            ru: "шерстянная вязанная шапка"
        },
        {
            id: 3,
            eng: "a hood / худ /",
            ru: "капюшон"
        },
        {
            id: 4,
            eng: "a helmet / хЭлмэт /",
            ru: "шлем"
        },
        {
            id: 5,
            eng: "a crown / крАун /",
            ru: "корона"
        },
        {
            id: 6,
            eng: "a cap / кЭп /",
            ru: "кепка"
        },
        {
            id: 7,
            eng: "sunglasses / сан гласэz /",
            ru: "солнцезащитные очки"
        },
        {
            id: 8,
            eng: "lenses / лЭнzЭz /",
            ru: "линзы"
        },
        {
            id: 9,
            eng: "a scarf / скаф /",
            ru: "шарф"
        },
        {
            id: 10,
            eng: "a tie / тАй /",
            ru: "галстук"
        },
        {
            id: 11,
            eng: "a bow / бАу /",
            ru: "бант, галстук-бабочка"
        },
        {
            id: 12,
            eng: "glasses / гласэz  /",
            ru: "очки"
        },
        {
            id: 13,
            eng: "accessories / эксЭсориз /",
            ru: "аксессуары"
        },
        {
            id: 14,
            eng: "a ring / э ринг /",
            ru: "кольцо"
        },
        {
            id: 15,
            eng: "an earring / иЭринг /",
            ru: "серьга"
        },
        {
            id: 16,
            eng: "a bracelet / рЭйслет /",
            ru: "браслет"
        },
        {
            id: 17,
            eng: "a backpack / бЭкпэк /",
            ru: "рюкзак"
        },
        {
            id: 18,
            eng: "watches / уОчез /",
            ru: "наручные часы"
        },
    ],
    clothes02: [
        {
            id: 19,
            eng: "a bag / бЭг /",
            ru: "сумка"
        },
        {
            id: 20,
            eng: "a purse / пёс /",
            ru: "сумочка дамская"
        },
        {
            id: 21,
            eng: "a plastic bag / плЭстик бЭг /",
            ru: "пластиковый пакет"
        },
        {
            id: 22,
            eng: "a necklace / нЭклэс /",
            ru: "любое украшение на шее"
        },
        {
            id: 23,
            eng: "mittens on a rope / рОУП /",
            ru: "варежки на верёвочке"
        },
        {
            id: 24,
            eng: "a top ",
            ru: "верх"
        },
        {
            id: 25,
            eng: "a shirt  / щёрт /",
            ru: "рубашка"
        },
        {
            id: 26,
            eng: "a t-shirt  / ти щёрт /",
            ru: "футболка"
        },
        {
            id: 27,
            eng: "a suit / сют /",
            ru: "костюм"
        },
        {
            id: 28,
            eng: "a vest ",
            ru: "жилетка"
        },
        {
            id: 29,
            eng: "a jacket ",
            ru: "пиджак, куртка"
        },
        {
            id: 30,
            eng: "a coat / кОут /",
            ru: "пальто"
        },
        {
            id: 31,
            eng: "a fur coat / фё коут /",
            ru: "шуба"
        },
        {
            id: 32,
            eng: "a sweater / суЭтэ  /",
            ru: "кофта, свитер"
        },
        {
            id: 33,
            eng: "long sleeves ",
            ru: "длинные рукава"
        },
        {
            id: 34,
            eng: "a blouse / блАуз /",
            ru: "блузка"
        },
        {
            id: 35,
            eng: "a skirt / скёрт /",
            ru: "юбка"
        },
        {
            id: 36,
            eng: "a bra / бра  /",
            ru: "бюстгалтер"
        },
        {
            id: 37,
            eng: "straps / стрЭпс /",
            ru: "лямки, ремешки"
        },
        {
            id: 38,
            eng: "buttons / батэнз /",
            ru: "пуговицы"
        },
        {
            id: 39,
            eng: "a zipper ",
            ru: "собачка на молнии"
        },
        {
            id: 40,
            eng: "a belt / бэлт /",
            ru: "ремень"
        },
        {
            id: 41,
            eng: "underwear / АндэуЭэ /",
            ru: "нижн. белье"
        },
        {
            id: 42,
            eng: "warm underwear  / уОм АндэуЭэ /",
            ru: "термобельё"
        },
    ],
    clothes03: [
        {
            id: 43,
            eng: "pants / пЭнтс /",
            ru: "штаны"
        },
        {
            id: 44,
            eng: "panties / пЭнтиz /",
            ru: "трусы"
        },
        {
            id: 45,
            eng: "jeans  ",
            ru: "джинсы"
        },
        {
            id: 46,
            eng: "trousers / трАуzэz /",
            ru: "брюки"
        },
        {
            id: 47,
            eng: "shorts / шортс /",
            ru: "шортики"
        },
        {
            id: 48,
            eng: "shoes / шуз /",
            ru: "любая обувь & конкретно туфли"
        },
        {
            id: 49,
            eng: "high heels / хай хилз /",
            ru: "высокие каблуки (дословно пятки)"
        },
        {
            id: 50,
            eng: "boots / бутс /",
            ru: "ботинки, сапоги"
        },
        {
            id: 51,
            eng: "trainers or sneakers ",
            ru: "кеды, кроссовки"
        },
        {
            id: 52,
            eng: "slippers / слиперз /",
            ru: "тапочки и носочки"
        },
        {
            id: 53,
            eng: "flip-flops ",
            ru: "шлёпки, шлёпанцы, тапки"
        },
        {
            id: 54,
            eng: "socks ",
            ru: "носки"
        },
        {
            id: 55,
            eng: "tuck your clothes in / так /",
            ru: "заправь одежду"
        },
        {
            id: 56,
            eng: "clothes / клОуз /",
            ru: "одежда"
        },
        {
            id: 57,
            eng: "put on ",
            ru: "надевать"
        },
        {
            id: 58,
            eng: "take off ",
            ru: "снимать"
        },
        {
            id: 59,
            eng: "do and undo ",
            ru: "застегнуть и расстегнуть"
        },
        {
            id: 60,
            eng: "carry / кЭри /",
            ru: "нести в руках"
        },
        {
            id: 61,
            eng: "wear / уЭэ /",
            ru: "носить, одевать"
        },
        {
            id: 62,
            eng: "undone / андАн /",
            ru: "расстегнутый"
        },
        {
            id: 63,
            eng: "your zip is undone ",
            ru: "у вас молния расстегнута"
        },
        {
            id: 64,
            eng: "stockings / стокингз /",
            ru: "чулки"
        },
        {
            id: 65,
            eng: "pyjamas / пижАмас /",
            ru: "пижама"
        },
    ],
    gerund: [
        {
            id: 1,
            eng: "be fond of",
            ru: "получать удовольствие от"
        },
        {
            id: 2,
            eng: "be tired of",
            ru: "устать от"
        },
        {
            id: 3,
            eng: "be capable of",
            ru: "быть способным на"
        },
        {
            id: 4,
            eng: "accuse of",
            ru: "винить в чём-лиобо"
        },
        {
            id: 5,
            eng: "remind of",
            ru: "напоминать о чем-то"
        },
        {
            id: 6,
            eng: "dream of",
            ru: "мечтать о"
        },
        {
            id: 7,
            eng: "be aware of",
            ru: "быть в курсе чего-то"
        },
        {
            id: 8,
            eng: "be ashamed of",
            ru: "стыдиться чего-то"
        },
        {
            id: 9,
            eng: "be sick of",
            ru: "достало, тошнит от"
        },
        {
            id: 10,
            eng: "be afraid of",
            ru: "бояться чего-то"
        },
        {
            id: 11,
            eng: "be guilty of",
            ru: "быть виновным в"
        },
        {
            id: 12,
            eng: "be proud of",
            ru: "гордиться чем-то"
        },
        {
            id: 13,
            eng: "way of",
            ru: "способ делания чего-то"
        },
        {
            id: 14,
            eng: "risk of",
            ru: "риск чего-то"
        },
        {
            id: 15,
            eng: "habit of",
            ru: "привычка делать что-то"
        },
        {
            id: 16,
            eng: "purpose of",
            ru: "смысл чего-то"
        },
        {
            id: 17,
            eng: "hope of",
            ru: "надежда на"
        },
        {
            id: 18,
            eng: "idea of",
            ru: "идея чего-то"
        },
        {
            id: 19,
            eng: "in spite of",
            ru: "не смотря на"
        },
        {
            id: 20,
            eng: "deprive of",
            ru: "лишить чего-то"
        },
        {
            id: 21,
            eng: "think of/about",
            ru: "думать о"
        },
        {
            id: 22,
            eng: "be sure of/about",
            ru: "быть уверенным в"
        },
        {
            id: 23,
            eng: "dream about/of",
            ru: "мечтать о"
        },
        {
            id: 24,
            eng: "care about",
            ru: "заботиться о"
        },
        {
            id: 25,
            eng: "be excited about",
            ru: "быть в восторге от"
        },
        {
            id: 26,
            eng: "worry about",
            ru: "олноваться о"
        },
        {
            id: 27,
            eng: "be crazy about",
            ru: "сходить с ума от"
        },
        {
            id: 28,
            eng: "complain about",
            ru: "жаловаться на"
        },
        {
            id: 29,
            eng: "be happy about",
            ru: "быть счастливым от того-что"
        },
    ],
    mirraLada: [
        {
            id: 14,
            eng: "I am Mirra",
            ru: "я Мирра"
        },
        {
            id: 15,
            eng: "my name is Ladoha",
            ru: "меня зовут Ладоха"
        },
        {
            id: 16,
            eng: "my friend like K-pop very much",
            ru: "моим друзьям очень нравится К-поп"
        },
        {
            id: 17,
            eng: "we live in Vilnius",
            ru: "мы живём в Вильнюсе"
        },
        {
            id: 18,
            eng: "you are my teacher",
            ru: "вы мой учитель"
        },
        {
            id: 19,
            eng: "it is very interesting",
            ru: "это очень интересно"
        },
        {
            id: 20,
            eng: "it is not boring",
            ru: "это не скучно"
        },
        {
            id: 21,
            eng: "what is it ?",
            ru: "что это?"
        },
        {
            id: 22,
            eng: "what is your name?",
            ru: "как тебя зовут?"
        },
        {
            id: 23,
            eng: "how old are you ?",
            ru: "сколько тебе лет?"
        },
        {
            id: 24,
            eng: "what is your phone number ?",
            ru: "какой твой номер телефона?"
        },
        {
            id: 25,
            eng: "my mom works every day",
            ru: "моя мама работает каждый день"
        },
        {
            id: 26,
            eng: "I don't work because I study in school",
            ru: "я не работаю, потому что я учусь"
        },
        {
            id: 27,
            eng: "Vincent is the best teacher",
            ru: "Винсент - лучший учитель"
        },
        {
            id: 28,
            eng: "do you have an airplane ?",
            ru: "у тебя есть самолёт?"
        },
        {
            id: 29,
            eng: "do you have a copybook ?",
            ru: "у тебя есть тетрадь?"
        },
        {
            id: 30,
            eng: "does Mirra have a cat?",
            ru: "у Мирры есть кошка?"
        },
        {
            id: 31,
            eng: "does Lada have a cactus?",
            ru: "у Лады есть кактус?"
        },
    ],
    spanish23: [
        {
            id: 1,
            eng: "la cadena musical",
            ru: "музыкальный центр"
        },
        {
            id: 2,
            eng: "las flores",
            ru: "цветы"
        },
        {
            id: 3,
            eng: "el espejo",
            ru: "зеркало"
        },
        {
            id: 4,
            eng: "la consola",
            ru: " тумба"
        },
        {
            id: 5,
            eng: "el cuadro",
            ru: "картина "
        },
        {
            id: 6,
            eng: "la ventana",
            ru: "окно"
        },
        {
            id: 7,
            eng: "la lámpara",
            ru: "лампа"
        },
        {
            id: 8,
            eng: "el televisor",
            ru: "телевизор"
        },
        {
            id: 9,
            eng: "la alfombra",
            ru: "ковер"
        },
        {
            id: 10,
            eng: "el café",
            ru: "кофе"
        },
        {
            id: 11,
            eng: "el sofá",
            ru: "диван"
        },
        {
            id: 12,
            eng: "la papelera",
            ru: "корзина для бумаг"
        },
        {
            id: 13,
            eng: "el suelo",
            ru: "пол"
        },
        {
            id: 14,
            eng: "la cortina",
            ru: "гардина, занавеска"
        },
        {
            id: 15,
            eng: "la leña",
            ru: "дрова"
        },
        {
            id: 16,
            eng: "la puerta",
            ru: "дверь"
        },
        {
            id: 17,
            eng: "el sillón",
            ru: "кресло"
        },
        {
            id: 18,
            eng: "la chimenea",
            ru: "дымоход, камин "
        },
        {
            id: 19,
            eng: "la estantería",
            ru: "книжный шкаф"
        },
        {
            id: 20,
            eng: "voy a leer",
            ru: "собираюсь читать"
        },
        {
            id: 21,
            eng: "¿Qué vas a hacer mañana?",
            ru: "что будешь делать?"
        },
        {
            id: 22,
            eng: "el finde",
            ru: "конец недели"
        },
        {
            id: 23,
            eng: "en verano",
            ru: "летом"
        },
    ],
    spanish02: [
        {
            id: 1,
            eng: "Quien eres?",
            ru: "кто ты? Как тебя зовут?"
        },
        {
            id: 2,
            eng: "Que tal?",
            ru: "Как дела?"
        },
        {
            id: 3,
            eng: "Eres loco?",
            ru: "Ты сумасшедший?"
        },
        {
            id: 4,
            eng: "Quienes sois?",
            ru: "Кто вы (много) ?"
        },
        {
            id: 5,
            eng: "Quienes son?",
            ru: "Кто они?"
        },
        {
            id: 6,
            eng: "Quien es?",
            ru: "Кто он?"
        },
        {
            id: 7,
            eng: "Que es esto?",
            ru: "Что это?"
        },
        {
            id: 8,
            eng: "Que tal el trabajo?",
            ru: "Как твоя работа?"
        },
        {
            id: 9,
            eng: "Que tal los estudios?",
            ru: "Как учеба?"
        },
        {
            id: 10,
            eng: "Donde estas?",
            ru: "Где ты?"
        },
        {
            id: 11,
            eng: "Donde esta Martina?",
            ru: "Где Мартина?"
        },
        {
            id: 12,
            eng: "Donde estais?",
            ru: "Где вы (много) ?"
        },
        {
            id: 13,
            eng: "Estas en casa?",
            ru: "Ты дома?"
        },
        {
            id: 14,
            eng: "Gabriela esta en Madrid?",
            ru: "Габриэла вМадриде?"
        },
        {
            id: 15,
            eng: "Que es el ayuntamiento?",
            ru: "Что такое мэрия?"
        },
        {
            id: 16,
            eng: "Que es el aparacmiento?",
            ru: "Что такое парковка?"
        },
        {
            id: 17,
            eng: "Donde esta tu amigo?",
            ru: "Где твой друг?"
        },
        {
            id: 18,
            eng: "Quien es ella?",
            ru: "Кто она?"
        },
        {
            id: 19,
            eng: "Quien es Gabriela?",
            ru: "Кто такая Габриела?"
        },
        {
            id: 20,
            eng: "Donde esta Madrid?",
            ru: "Шде находится Мадрид?"
        },
        {
            id: 21,
            eng: "Donde esta tu amiga?",
            ru: "Где твоя подруга?"
        },
        {
            id: 22,
            eng: "Donde esta Vilnius?",
            ru: "Где находится Вильнюс?"
        },
        {
            id: 23,
            eng: "Que tal la vida?",
            ru: "Как жизнь?"
        },
        {
            id: 24,
            eng: "Donde esta el supermercado Slata?",
            ru: "Где супермаркет слата?"
        },
        {
            id: 25,
            eng: "Estas cansado(a)?",
            ru: "Ты устал(а)?"
        },
        {
            id: 26,
            eng: "Estas triste?",
            ru: "Тебе грустно?"
        },
        {
            id: 27,
            eng: "Estas seguro(a)?",
            ru: "Ты уверен?"
        },
        {
            id: 28,
            eng: "Estas enfermo(a)?",
            ru: "Ты болеешь?"
        },
        {
            id: 29,
            eng: "Estas casado?",
            ru: "Ты женат?"
        },
        {
            id: 30,
            eng: "Donde estan todos?",
            ru: "Где все?"
        },
        {
            id: 31,
            eng: "Estas aqui?",
            ru: "Ты здесь?"
        },
        {
            id: 32,
            eng: "Estas tumbado(a)?",
            ru: "Лежишь и валяешься?"
        },
        {
            id: 33,
            eng: "Gata bonita esta cansada y tumbada?",
            ru: "Кошка красотка уставшая лежит, валяется?"
        },
        {
            id: 34,
            eng: "Tu estas contento(a)?",
            ru: "Ты доволен?"
        },
        {
            id: 35,
            eng: "Donde esta tu coche?",
            ru: "Где твоя машина?"
        },
        {
            id: 36,
            eng: "Estas en la iglesia?",
            ru: "Вы в церкви?"
        },
        {
            id: 37,
            eng: "Donde estan Miguel y Lola?",
            ru: "Где Мигель и Лола?"
        },
        {
            id: 38,
            eng: "Donde estan los boligrafos y los cuadernos?",
            ru: "Где ручки и тетради?"
        },
        {
            id: 39,
            eng: "Tu movil esta en tu bolsa?",
            ru: "Твой мобильный в сумке?"
        },
        {
            id: 40,
            eng: "De donde eres?",
            ru: "Откуда ты?"
        },
        {
            id: 41,
            eng: "De donde es?",
            ru: "Откуда это?"
        },
        {
            id: 42,
            eng: "Que es?",
            ru: "Что это?"
        },
        {
            id: 43,
            eng: "Como es?",
            ru: "Какое это?"
        },
        {
            id: 44,
            eng: "Donde esta?",
            ru: "Где она?"
        },
        {
            id: 45,
            eng: "De que es?",
            ru: "уточнить перевод"
        },
        {
            id: 46,
            eng: "Como esta?",
            ru: "Какой он?"
        },
        {
            id: 47,
            eng: "De donde es Usted?",
            ru: "Откуда вы? (уважительно) Soy de Rusia"
        },
        {
            id: 48,
            eng: "Donde esta Usted?",
            ru: "Где вы? (уважительно) Estoy en el restaurante"
        },
        {
            id: 49,
            eng: "Tienen Ustedes un perro?",
            ru: "У вас (у многих) есть собака? (Si tenemos)"
        },
        {
            id: 50,
            eng: "Tienes un perro?",
            ru: "У тебя есть собака?"
        },
        {
            id: 51,
            eng: "Tienes un gato?",
            ru: "У тебя есть кошка?"
        },
        {
            id: 52,
            eng: "Tienes una mochilla?",
            ru: "У тебя есть рюкзак?"
        },
        {
            id: 53,
            eng: "Ella tiene una grapadora y un cuaderno?",
            ru: "У нее есть степлер и тетрадь?"
        },
        {
            id: 54,
            eng: "Tenemos la gata gorda?",
            ru: "У нас жирная кошка?"
        },
        {
            id: 55,
            eng: "Tienes Usted la casa en Espana?",
            ru: "У вас есть дом в испании?"
        },
        {
            id: 56,
            eng: "Cuanto dinero tienes?",
            ru: "Сколько у тебя денег?"
        },
        {
            id: 57,
            eng: "Cuanto es?",
            ru: "Сколько это стоит?"
        },
        {
            id: 58,
            eng: "Cuanto dinero tiene Paquito?",
            ru: "Сколько денег у Пакито?"
        },
        {
            id: 59,
            eng: "Cuanta gente esta aqui?",
            ru: "Сколько людей находится здесь?"
        },
        {
            id: 60,
            eng: "Cuantos anos tienes?",
            ru: "Сколько тебе лет?"
        },
        {
            id: 61,
            eng: "Cuantas amigos tiene Jacinta?",
            ru: "Сколько друзей у Хасинты?"
        },
        {
            id: 62,
            eng: "Cuantos somos?",
            ru: "Сколько нас?"
        },
        {
            id: 63,
            eng: "Cuanta gente esta alli en la escuela?",
            ru: "Сколько людей находится в там в школе?"
        },
        {
            id: 64,
            eng: "Son de aqui?",
            ru: "Они отсюда?"
        },
        {
            id: 65,
            eng: "Estan aqui?",
            ru: "Они здесь?"
        },
        {
            id: 66,
            eng: "Tienes novio(a)?",
            ru: "Бойфренд есть/"
        },
        {
            id: 67,
            eng: "Tiene mascota tu profesora?",
            ru: "У твоей училки есть питомец?"
        },
        {
            id: 68,
            eng: "Como se dice 'страшно'?",
            ru: "Как сказать tener mierdo?"
        },
        {
            id: 69,
            eng: "Como se escribe '6'?",
            ru: "Как пишется шесть?"
        },
        {
            id: 70,
            eng: "Mas despacio por favor!",
            ru: "Помедленнее пожалуйста"
        },
        {
            id: 71,
            eng: "Que significa 'vaia'?",
            ru: "Что значит vaia?"
        },
        {
            id: 72,
            eng: "Como se  pronuncia 'шесть'?",
            ru: "Seis"
        },
        {
            id: 73,
            eng: "Cuantas gatas tienes?",
            ru: "Сколько у тебя кошек?"
        },
        {
            id: 74,
            eng: "Tienes sueno?",
            ru: "Ты сонный?"
        },
        {
            id: 75,
            eng: "Tienes el sueno?",
            ru: "У тебя есть мечта?"
        },
        {
            id: 76,
            eng: "Tienes hambre?",
            ru: "Ты голодный?"
        },
        {
            id: 77,
            eng: "Tienes miedo?",
            ru: "Боишься? Страшно тебе?"
        },
        {
            id: 78,
            eng: "Tienes frio?",
            ru: "Тебе холодно?"
        },
        {
            id: 79,
            eng: "Donde esta mi gata?",
            ru: "Где моя кош?"
        },
        {
            id: 80,
            eng: "Donde esta tu gata?",
            ru: "Где твоя кошка?"
        },
        {
            id: 81,
            eng: "Donde esta su agenda?",
            ru: "Где его ежедневник?"
        },
        {
            id: 82,
            eng: "Donde esta nuestra gata?",
            ru: "Где наша кошка?"
        },
        {
            id: 83,
            eng: "Donde esta vuestra profesora?",
            ru: "Где ваша (вас много) училка?"
        },
        {
            id: 84,
            eng: "De donde es nuestra gata bonita?",
            ru: "Откуда наша кошка красотка родом?"
        },
        {
            id: 85,
            eng: "Como estais?",
            ru: "Как вы (много)?"
        },
        {
            id: 86,
            eng: "Adonde vas, amigo(a)?",
            ru: "Куда идешь, друг?"
        },
        {
            id: 87,
            eng: "Adonde?",
            ru: "Куда?"
        },
        {
            id: 88,
            eng: "Por que?",
            ru: "Почему?"
        },
        {
            id: 89,
            eng: "Verdad?",
            ru: "уточнить перевод"
        },
        {
            id: 90,
            eng: "Adonde va mi gata?",
            ru: "Куда моя кошка идет?"
        },
        {
            id: 91,
            eng: "Va Martina al instituto hoy?",
            ru: "Мартина идет в Институт сегодня?"
        },
        {
            id: 92,
            eng: "Vamos al café?",
            ru: "Пойдем в кафе?"
        },
        {
            id: 93,
            eng: "Van al paque?",
            ru: "Они идут в парк?"
        },
        {
            id: 94,
            eng: "Aonde van?",
            ru: "Куда они идут?"
        },
        {
            id: 95,
            eng: "Como eres?",
            ru: "Какой ты?"
        },
        {
            id: 96,
            eng: "Tienes familia?",
            ru: "Есть ли у тебя семья?"
        },
        {
            id: 97,
            eng: "Es todo?",
            ru: "Это всё?"
        },
        {
            id: 98,
            eng: "Donde?",
            ru: "Где?"
        },
        {
            id: 99,
            eng: "Como?",
            ru: "Как? Какой?"
        },
        {
            id: 100,
            eng: "Quien?",
            ru: "Кто?"
        },
        {
            id: 101,
            eng: "Que?",
            ru: "Что? Какой?"
        },
        {
            id: 102,
            eng: "1",
            ru: "uno"
        },
        {
            id: 103,
            eng: "2",
            ru: "dos"
        },
        {
            id: 104,
            eng: "3",
            ru: "tres"
        },
        {
            id: 105,
            eng: "4",
            ru: "cuatro"
        },
        {
            id: 106,
            eng: "5",
            ru: "cinco"
        },
        {
            id: 107,
            eng: "6",
            ru: "seis"
        },
        {
            id: 108,
            eng: "7",
            ru: "iete"
        },
        {
            id: 109,
            eng: "8",
            ru: "ocho"
        },
        {
            id: 110,
            eng: "9",
            ru: "nueve"
        },
        {
            id: 111,
            eng: "10",
            ru: "diez"
        },
        {
            id: 112,
            eng: "11",
            ru: "once"
        },
        {
            id: 113,
            eng: "12",
            ru: "doce"
        },
        {
            id: 114,
            eng: "13",
            ru: "trece"
        },
        {
            id: 115,
            eng: "14",
            ru: "catorce"
        },
        {
            id: 116,
            eng: "15",
            ru: "quince"
        },
        {
            id: 117,
            eng: "16",
            ru: "dieciseis"
        },
        {
            id: 118,
            eng: "17",
            ru: "diecisiete"
        },
        {
            id: 119,
            eng: "18",
            ru: "dieciocho"
        },
        {
            id: 120,
            eng: "19",
            ru: "diecinueve"
        },
        {
            id: 121,
            eng: "20",
            ru: "veinte"
        },
        {
            id: 122,
            eng: "21",
            ru: "veintiuno"
        },
        {
            id: 123,
            eng: "22",
            ru: "veintidos"
        },
        {
            id: 124,
            eng: "23",
            ru: "veintitres"
        },
        {
            id: 125,
            eng: "24",
            ru: "veinticuatro"
        },
        {
            id: 126,
            eng: "25",
            ru: "veinticinco"
        },
        {
            id: 127,
            eng: "26",
            ru: "veintiseis"
        },
        {
            id: 128,
            eng: "27",
            ru: "veintisiete"
        },
        {
            id: 129,
            eng: "28",
            ru: "veintiocho"
        },
        {
            id: 130,
            eng: "29",
            ru: "veintinueve"
        },
        {
            id: 131,
            eng: "30",
            ru: "treinta"
        },
        {
            id: 132,
            eng: "Quien esta en casa?",
            ru: "Кто находится дома?"
        },
        {
            id: 133,
            eng: "Cuantas amigas tienes?",
            ru: "Сколько у тебя подруг?"
        },
        {
            id: 134,
            eng: "Como estan hoy?",
            ru: "Как у них дела сегодня?"
        },
        {
            id: 135,
            eng: "De que hablan las chicas?",
            ru: "О чем девчонки болтают?"
        },
        {
            id: 136,
            eng: "Con quien hablas?",
            ru: "С кем разговариваешь?"
        },
        {
            id: 137,
            eng: "Hablas conmigo?",
            ru: "Ты со мной базаришь?"
        },
        {
            id: 138,
            eng: "El habla contigo o no?",
            ru: "Он с тобой разговаривает или нет?"
        },
        {
            id: 139,
            eng: "Donde trabajas?",
            ru: "Где ты работаешь?"
        },
        {
            id: 140,
            eng: "Trabajas en la escuela?",
            ru: "В школе работаешь?"
        },
        {
            id: 141,
            eng: "A quien?",
            ru: "Кому?"
        },
        {
            id: 142,
            eng: "A quien visita Miguel?",
            ru: "Кого навещает Мигель?"
        },
        {
            id: 143,
            eng: "A quinen visitas hoy?",
            ru: "Кого навестишь сегодня?"
        },
        {
            id: 144,
            eng: "Por que Miguel visita su amiga?",
            ru: "Почему Мигель навещает свою подругу?"
        },
        {
            id: 145,
            eng: "You hablo espanol, y tu?",
            ru: "Я говорю по-испански, а вы?"
        },
        {
            id: 146,
            eng: "Martina es estudiante tambien?",
            ru: "Мартина тоже студентка?"
        },
        {
            id: 147,
            eng: "Pepe tampoco fuma, si?",
            ru: "Он тоже не курит да же?"
        },
        {
            id: 148,
            eng: "Como es la chica(o) de tus suenos?",
            ru: "Какой должна быть девушка твоей мечты?"
        },
        {
            id: 149,
            eng: "Cuanto cuest el cuaderno verde?",
            ru: "Сколько стоит зеленая тетрадь?"
        },
        {
            id: 150,
            eng: "Cuanto cuestan las naranjas?",
            ru: "По чем апельсины?"
        },
        {
            id: 151,
            eng: "31",
            ru: "treinta y uno"
        },
        {
            id: 152,
            eng: "42",
            ru: "cuarents y dos"
        },
        {
            id: 153,
            eng: "53",
            ru: "cincuenta y tres"
        },
        {
            id: 154,
            eng: "64",
            ru: "sesenta y cuatro"
        },
        {
            id: 155,
            eng: "75",
            ru: "setenta y cinco"
        },
        {
            id: 156,
            eng: "86",
            ru: "ochenta y seis"
        },
        {
            id: 157,
            eng: "98",
            ru: "noventa y ocho"
        },
        {
            id: 158,
            eng: "67",
            ru: "sesenta y siete"
        },
        {
            id: 159,
            eng: "79",
            ru: "setenta y nueve"
        },
        {
            id: 160,
            eng: "100",
            ru: "ciento (cien)"
        },
        {
            id: 161,
            eng: "Trabajo mucho o poco?",
            ru: "Много работаешь или мало?"
        },
        {
            id: 162,
            eng: "Tus amigos descansan mucho o poco?",
            ru: "Твои друзья много отдыхают?"
        },
        {
            id: 163,
            eng: "Tu tienes pocos amigos?",
            ru: "У тебя мало друзей?"
        },
        {
            id: 164,
            eng: "Por que hablas muy bien el espanol?",
            ru: "Почему ты очень хорошо говоришь на испанском?"
        },
        {
            id: 165,
            eng: "practico el espanol mucho?",
            ru: "много практикуешь испанский ?"
        },
        {
            id: 166,
            eng: "Por que estas muy cansado?",
            ru: "Почему ты такой уставший?"
        },
        {
            id: 167,
            eng: "Donde descansas?",
            ru: "Где отдыхаешь?"
        },
        {
            id: 168,
            eng: "Quien a escuchas?",
            ru: "Кого ты слушаешь?"
        },
    ],
    spanish: [
        {
            id: 1,
            eng: "Я",
            ru: "Yo soy"
        },
        {
            id: 2,
            eng: "Ты",
            ru: "Tu eres"
        },
        {
            id: 3,
            eng: "Она",
            ru: "Ella es"
        },
        {
            id: 4,
            eng: "Он",
            ru: "El es"
        },
        {
            id: 5,
            eng: "Мы",
            ru: "Nosotros somos"
        },
        {
            id: 6,
            eng: "Вы",
            ru: "Vosotros sois"
        },
        {
            id: 7,
            eng: "Они",
            ru: "Ellos son"
        },
        {
            id: 8,
            eng: "Очень хорошо",
            ru: "muy bien"
        },
        {
            id: 9,
            eng: "Привет",
            ru: "Hola"
        },
        {
            id: 10,
            eng: "Добрый день",
            ru: "Buenos dias"
        },
        {
            id: 11,
            eng: "Добрый вечер",
            ru: "buenos tardes"
        },
        {
            id: 12,
            eng: "Как дела?",
            ru: "Que tal?"
        },
        {
            id: 13,
            eng: "Пока!",
            ru: "Adios!"
        },
        {
            id: 14,
            eng: "Скоро увидимся",
            ru: "Hasta luego"
        },
        {
            id: 15,
            eng: "Очень приятно",
            ru: "Mucho gusto"
        },
        {
            id: 16,
            eng: "Извините, не понял",
            ru: "Perdona"
        },
        {
            id: 17,
            eng: "Взаимно",
            ru: "Encantado(a)"
        },
        {
            id: 18,
            eng: "Кто вы?",
            ru: "Quien eres?"
        },
        {
            id: 19,
            eng: "Зеленый",
            ru: "Verde"
        },
        {
            id: 20,
            eng: "Синий",
            ru: "Azul"
        },
        {
            id: 21,
            eng: "Желтый",
            ru: "Amarilo"
        },
        {
            id: 22,
            eng: "Оранжевый",
            ru: "NaranjA"
        },
        {
            id: 23,
            eng: "Красный",
            ru: "Rojo"
        },
        {
            id: 24,
            eng: "Розовый",
            ru: "RosA"
        },
        {
            id: 25,
            eng: "Фиолетовый",
            ru: "VioletA"
        },
        {
            id: 26,
            eng: "Коричневый",
            ru: "Marron"
        },
        {
            id: 27,
            eng: "Черный",
            ru: "Negro"
        },
        {
            id: 28,
            eng: "Рюкзак",
            ru: "Mochila"
        },
        {
            id: 29,
            eng: "Народ",
            ru: "La gente"
        },
        {
            id: 30,
            eng: "Боже мой",
            ru: "Dios mio"
        },
        {
            id: 31,
            eng: "многоцветный",
            ru: "de mucho colores"
        },
        {
            id: 32,
            eng: "стыд, позор",
            ru: "verguenza"
        },
        {
            id: 33,
            eng: "мне кажется, что",
            ru: "Me parece que"
        },
        {
            id: 34,
            eng: "Где ты сейчас?",
            ru: "Donde estas?"
        },
        {
            id: 35,
            eng: "Откуда ты родом?",
            ru: "De donde eres?"
        },
        {
            id: 36,
            eng: "Я сейчас в России",
            ru: "Estoy en Rusia"
        },
        {
            id: 37,
            eng: "Я живу в США",
            ru: "Soy de Estados Unidos"
        },
        {
            id: 38,
            eng: "Германия",
            ru: "Alemania"
        },
        {
            id: 39,
            eng: "Парк",
            ru: "El parque"
        },
        {
            id: 40,
            eng: "здания, строения",
            ru: "Los edificios"
        },
        {
            id: 41,
            eng: "университет",
            ru: "La universidad"
        },
        {
            id: 42,
            eng: "администрация",
            ru: "El ayuntamiento"
        },
        {
            id: 43,
            eng: "театр",
            ru: "El teatro"
        },
        {
            id: 44,
            eng: "супермаркет",
            ru: "El supermercado"
        },
        {
            id: 45,
            eng: "аптека",
            ru: "La farmacia"
        },
        {
            id: 46,
            eng: "школа",
            ru: "La escuela"
        },
        {
            id: 47,
            eng: "церковь",
            ru: "La iglesia"
        },
        {
            id: 48,
            eng: "завод, фабрика",
            ru: "La fabrica"
        },
        {
            id: 49,
            eng: "аэропорт",
            ru: "El aeropuerto"
        },
        {
            id: 50,
            eng: "собор",
            ru: "La catedral"
        },
        {
            id: 51,
            eng: "магазин",
            ru: "La tienda"
        },
        {
            id: 52,
            eng: "ресторан",
            ru: "El restaurante"
        },
        {
            id: 53,
            eng: "станция метро",
            ru: "La estacion"
        },
        {
            id: 54,
            eng: "стадион",
            ru: "El estadio"
        },
        {
            id: 55,
            eng: "парковка",
            ru: "El aparcamiento"
        },
        {
            id: 56,
            eng: "музей",
            ru: "El museo"
        },
        {
            id: 57,
            eng: "почта",
            ru: "Correos"
        },
        {
            id: 58,
            eng: "отель",
            ru: "El hotel"
        },
        {
            id: 59,
            eng: "бар",
            ru: "El bar"
        },
        {
            id: 60,
            eng: "кино",
            ru: "El cine"
        },
        {
            id: 61,
            eng: "Больница",
            ru: "El hospital"
        },
        {
            id: 62,
            eng: "Что это?",
            ru: "Que es esto?"
        },
        {
            id: 63,
            eng: "кресло",
            ru: "la butaca"
        },
    ],
    spanish24saberpoder: [
        {
            id: 1,
            eng: "exclamaciones ",
            ru: "восклицания"
        },
        {
            id: 2,
            eng: "¿Puedo salir? ",
            ru: "могу выйти?"
        },
        {
            id: 3,
            eng: "¿Puedo entrar? ",
            ru: "могу выйти?"
        },
        {
            id: 4,
            eng: "entrar en ",
            ru: "входить в"
        },
        {
            id: 5,
            eng: "saber ",
            ru: "знать что-то, уметь что-то"
        },
        {
            id: 6,
            eng: "poder ",
            ru: "мочь физическая возможность"
        },
        {
            id: 7,
            eng: "querer ",
            ru: "любить кого-то, хотеть чего-то"
        },
        {
            id: 8,
            eng: "no lo sé ",
            ru: "я этого не знаю"
        },
        {
            id: 9,
            eng: "nadar ",
            ru: "плавать"
        },
        {
            id: 10,
            eng: "(no) se puede ",
            ru: "нельзя или можно"
        },
        {
            id: 11,
            eng: "tocar la guitarra ",
            ru: "играть на гитаре"
        },
        {
            id: 12,
            eng: "esquiar ",
            ru: "кататься на лыжах"
        },
        {
            id: 13,
            eng: "jugar al fútbol ",
            ru: "играть в футбол"
        },
        {
            id: 14,
            eng: "cocinar ",
            ru: "готовить"
        },
        {
            id: 15,
            eng: "tocar el piano ",
            ru: "играть на пианино"
        },
        {
            id: 16,
            eng: "patinar ",
            ru: "кататься на коньках"
        },
        {
            id: 17,
            eng: "jugar al tenis ",
            ru: "играть в тенис"
        },
        {
            id: 18,
            eng: "el ascensor ",
            ru: "лифт"
        },
        {
            id: 19,
            eng: "coger ",
            ru: "брать"
        },
        {
            id: 20,
            eng: "pongo ",
            ru: "кладу, ставлю"
        },
        {
            id: 21,
            eng: "la cosa ",
            ru: "вещь"
        },
        {
            id: 22,
            eng: "junto a ",
            ru: "рядом с"
        },
        {
            id: 23,
            eng: "fragil ",
            ru: "хрупкий"
        },
        {
            id: 24,
            eng: "el camion ",
            ru: "грузовик"
        },
        {
            id: 25,
            eng: "el ordenador ",
            ru: "компьютер"
        },
        {
            id: 26,
            eng: "a ver ",
            ru: "так, посмотрим"
        },
        {
            id: 27,
            eng: "el rincon ",
            ru: "угол"
        },
        {
            id: 28,
            eng: "¿Qué queréis? ",
            ru: "Чего вы хотите?"
        },
        {
            id: 29,
            eng: "Se puede fumar aquí ",
            ru: "Здесь можно курить."
        },
    ],
    time100: [
        {
            id: 1,
            eng: "	at 14:30	",
            ru: "	at half past two PM	"
        },
        {
            id: 2,
            eng: "	at 13:15	",
            ru: "	at a quarter past one PM	"
        },
        {
            id: 3,
            eng: "	at 13:00	",
            ru: "	at one PM	"
        },
        {
            id: 4,
            eng: "	at 00:00	",
            ru: "	at twelve AM at midnight	"
        },
        {
            id: 5,
            eng: "	at 12:00	",
            ru: "	at twelve PM at noon	"
        },
        {
            id: 6,
            eng: "	at 13:58	",
            ru: "	at two to two PM	"
        },
        {
            id: 7,
            eng: "	at 21:00	",
            ru: "	at nine PM	"
        },
        {
            id: 8,
            eng: "	at 23:30	",
            ru: "	at half past eleven PM	"
        },
        {
            id: 9,
            eng: "	at 23:45	",
            ru: "	at a quarter to midnight	"
        },
        {
            id: 10,
            eng: "	at 23:15	",
            ru: "	at a quarter past eleven PM	"
        },
        {
            id: 11,
            eng: "	at 13:13	",
            ru: "	at thirteen past one PM	"
        },
        {
            id: 12,
            eng: "	at 13:30	",
            ru: "	at half past one PM	"
        },
        {
            id: 13,
            eng: "	at 01:30	",
            ru: "	at half past one AM	"
        },
        {
            id: 14,
            eng: "	at 02:30	",
            ru: "	at half past two AM	"
        },
        {
            id: 15,
            eng: "	at 01:15	",
            ru: "	at a quarter past one AM	"
        },
        {
            id: 16,
            eng: "	at 01:00	",
            ru: "	at one AM	"
        },
        {
            id: 17,
            eng: "	at 19:00	",
            ru: "	at seven PM	"
        },
    ],
    time101: [
        {
            id: 1,
            ru: "	Во сколько вы обычно открываете глаза и просыпаетесь утром?	",
            eng: "	What time do you usually open your eyes in the morning and wake up?	"
        },
        {
            id: 2,
            ru: "	Вам нравится полежать в кровати какое-то время или сразу же встать?	",
            eng: "	Do you like to lie in bed for some time or do you get up at once? /эт уАнс/ 	"
        },
        {
            id: 3,
            ru: "	Делаете зарядку?	",
            eng: "	Do you do morning exercises? /Эксэсайzэz/	"
        },
        {
            id: 4,
            ru: "	Как долго вы чистите зубы?	",
            eng: "	How long do you brush your teeth?	"
        },
        {
            id: 5,
            ru: "	Во сколько вы готовите завтрак?	",
            eng: "	What time do you make breakfast?	"
        },
        {
            id: 6,
            ru: "	С кем вы обычно завтракаете? I usually have breakfast with my 40ty cats!	",
            eng: "	Who do you usually have breakfast with?	"
        },
        {
            id: 7,
            ru: "	Во сколько вы выходите из дома?	",
            eng: "	What time do you leave your house?	"
        },
        {
            id: 8,
            ru: "	Во сколько начинаете работать?	",
            eng: "	What time do you start your work?	"
        },
        {
            id: 9,
            ru: "	Во сколько обедаете?	",
            eng: "	What time do you have lunch?	"
        },
        {
            id: 10,
            ru: "	Перед ужином перекусы делаете?	",
            eng: "	Do you have snacks before dinner?	"
        },
        {
            id: 11,
            ru: "	Во сколько работа у вас заканчивается?	",
            eng: "	What time does your work finish?	"
        },
        {
            id: 12,
            ru: "	Во сколько ваша семья готовит ужин?	",
            eng: "	What time does your family make dinner?	"
        },
        {
            id: 13,
            ru: "	С кем обычно ужинаете?	",
            eng: "	Who do you usually have dinner with?	"
        },
        {
            id: 14,
            ru: "	Что обычно готовите на обед?	",
            eng: "	What do you usually cook for dinner?	"
        },
        {
            id: 15,
            ru: "	Чем обычно занимаетесь после ужина?	",
            eng: "	What do you usually do after dinner?	"
        },
        {
            id: 16,
            ru: "	Во сколько в кровать идете готовиться ко сну?	",
            eng: "	What time do you go to bed?	"
        },
        {
            id: 17,
            ru: "	Во сколько вы засыпаете?	",
            eng: "	What time do you fall asleep?	"
        },
        {
            id: 18,
            ru: "	Вы сразу засыпаете или лежите какое-то время в кровати? I fall asleep at once. But my cat runs around my bed for 10 minutes	",
            eng: "	Do you fall asleep at once or do you lie in bed for some time? If yes, how long?	"
        },
        {
            id: 19,
            ru: "	Вы ранняя пташка или совушка? Продуктивны утром или ближе к вечеру?	",
            eng: "	Are you an early bird? It is a person who feels productive in the morning. Or are you a night owl/Аул/?	"
        },
        {
            id: 20,
            ru: "	I sleep at midnight!	",
            eng: "	В полночь я сплю!	"
        },
        {
            id: 21,
            ru: "	It is an awesome morning!	",
            eng: "	Это обалденное утро!	"
        },
        {
            id: 22,
            ru: "	Good afternoon.	",
            eng: "	Добрый день.	"
        },
        {
            id: 23,
            ru: "	Have a nice evening	",
            eng: "	Хорошего вам вечера	"
        },
        {
            id: 24,
            ru: "	midnight 00:00 AM	",
            eng: "	ноль часов, ноль минут	"
        },
        {
            id: 25,
            ru: "	twelve pm	",
            eng: "	двенадцать часов дня	"
        },
        {
            id: 26,
            ru: "	12 am	",
            eng: "	двенадцать часов ночи	"
        },
        {
            id: 27,
            ru: "	at midnight	",
            eng: "	в полночь	"
        },
        {
            id: 28,
            ru: "	in the afternoon	",
            eng: "	днем	"
        },
        {
            id: 29,
            ru: "	in the morning	",
            eng: "	утром	"
        },
        {
            id: 30,
            ru: "	in the evening	",
            eng: "	вечером	"
        },
        {
            id: 31,
            ru: "	at night	",
            eng: "	ночью	"
        },
        {
            id: 32,
            ru: "	at noon	",
            eng: "	в полдень	"
        },
        {
            id: 33,
            ru: "	half past one	",
            eng: "	пол второго	"
        },
        {
            id: 34,
            ru: "	half past eight	",
            eng: "	пол девятого	"
        },
        {
            id: 35,
            ru: "	half past nine	",
            eng: "	пол деcятого	"
        },
        {
            id: 36,
            ru: "	half past eleven	",
            eng: "	eleven thirty	"
        },
        {
            id: 37,
            ru: "	twenty to nine	",
            eng: "	без 20 девять	"
        },
        {
            id: 38,
            ru: "	a quarter to four	",
            eng: "	без пятнадцати четыре	"
        },
        {
            id: 39,
            ru: "	two minutes to two	",
            eng: "	без двух минут два	"
        },
        {
            id: 40,
            ru: "	a quarter past four	",
            eng: "	пятнадцать минут пятого	"
        },
        {
            id: 41,
            ru: "	it is three fifteen	",
            eng: "	пятнадцать пятнадцать	"
        },
        {
            id: 42,
            ru: "	it is 8 PM	",
            eng: "	Двадцать ноль ноль	"
        },
        {
            id: 43,
            ru: "	ten o one (Или one past ten)	",
            eng: "	Десять ноль одна	"
        },
        {
            id: 44,
            ru: "	thirteen past eight	",
            eng: "	Восемь часов, тринадцать минут	"
        },
        {
            id: 45,
            ru: "	Come at 2 o'clock	",
            eng: "	Приходите в 2 часа	"
        },
        {
            id: 46,
            ru: "	call backafter lunch	",
            eng: "	После обеда перезвоните	"
        },
        {
            id: 47,
            ru: "	do it before lunch, please	",
            eng: "	До обеда пожалуйста сделайте это	"
        },
        {
            id: 48,
            ru: "	in 10 minutes	",
            eng: "	Через 10 минут	"
        },
        {
            id: 49,
            ru: "	at Ten Ten (Или at ten past ten)	",
            eng: "	в 10 часов и 10 минут	"
        },
        {
            id: 50,
            ru: "	at ten o'clock	",
            eng: "	в 10 часов	"
        },
        {
            id: 51,
            ru: "	in two hours	",
            eng: "	через 2 часа	"
        },
        {
            id: 52,
            ru: "	60 minutes…. it is an hour	",
            eng: "	60 минут это один час	"
        },
    ],
    time102: [
        {
            id: 1,
            eng: "	at six in the morning	",
            ru: "	в 06:00 утра (at 6 o'clock AM)	"
        },
        {
            id: 2,
            eng: "	at seven-thirty in the morning	",
            ru: "	в 07:30 утра (at half past seven am)	"
        },
        {
            id: 3,
            eng: "	at eight-thirty in the morning	",
            ru: "	в 08:30 утра (at half past eight am)	"
        },
        {
            id: 4,
            eng: "	at nine in the morning	",
            ru: "	в 09:00 утра (at nine o'clock AM)	"
        },
        {
            id: 5,
            eng: "	at eleven o'clock in the morning	",
            ru: "	в 11 дня (at eleven AM)	"
        },
        {
            id: 6,
            eng: "	in the afternoon at 12pm	",
            ru: "	В полдень в 12 часов	"
        },
        {
            id: 7,
            eng: "	at midnight at 12am	",
            ru: "	в полночь в 00:00	"
        },
        {
            id: 8,
            eng: "	at 1 pm	",
            ru: "	в час дня (13:00)	"
        },
        {
            id: 9,
            eng: "	at half past 3 pm	",
            ru: "	в пол четвертого дня (15:30)	"
        },
        {
            id: 10,
            eng: "	at half past 8 in the evening	",
            ru: "	в пол девятого вечера (20:30)	"
        },
        {
            id: 11,
            eng: "	at five fifty pm	",
            ru: "	в пять пятьдесят вечера (17:50)	"
        },
        {
            id: 12,
            eng: "	at 11:11 in the evening	",
            ru: "	at eleven eleven (at 11 past 11 PM) 23:11	"
        },
        {
            id: 13,
            eng: "	at 9 in the evening	",
            ru: "	в 9 вечера (21:00) at nine o'clock PM	"
        },
        {
            id: 14,
            eng: "	at 6 in the evening	",
            ru: "	в 6 вечера (18:00) at six o'clock PM	"
        },
        {
            id: 15,
            eng: "	at seven-thirty in the evening	",
            ru: "	в 7:30 вечера (19:30) at half past seven AM	"
        },
        {
            id: 16,
            eng: "	at five twenty-five in the evening	",
            ru: "	в 5:25 вечера (17:25) at twenty-five past five PM	"
        },
        {
            id: 17,
            eng: "	at a quarter to two pm	",
            ru: "	13:45 (без пятнадцати два)	"
        },
        {
            id: 18,
            eng: "	after I speak with Vincent	",
            ru: "	после того как я поговорю с Винсентом	"
        },
        {
            id: 19,
            eng: "	after I do my English homework	",
            ru: "	после того как я сделаю свою домашнюю работу по английскому	"
        },
        {
            id: 20,
            eng: "	after I watch the news	",
            ru: "	после того как я посмотрю новости	"
        },
        {
            id: 21,
            eng: "	I really don't know when	",
            ru: "	Я действительно не знаю когда	"
        },
        {
            id: 22,
            eng: "	when I am hungry	",
            ru: "	когда я голоден	"
        },
        {
            id: 23,
            eng: "	when I feel sad	",
            ru: "	когда мне грустно	"
        },
        {
            id: 24,
            eng: "	at a quarter past 10 in the morning	",
            ru: "	в 10:15 утра (at ten fifteen AM)	"
        },
    ],
    time103: [
        {
            id: 1,
            ru: "	В полночь я сплю!	",
            eng: "	I sleep at midnight!	"
        },
        {
            id: 2,
            ru: "	Это обалденное утро!	",
            eng: "	It is an awesome morning!	"
        },
        {
            id: 3,
            ru: "	Добрый день.	",
            eng: "	Good afternoon.	"
        },
        {
            id: 4,
            ru: "	Хорошего вам вечера	",
            eng: "	Have a nice evening	"
        },
        {
            id: 5,
            ru: "	ноль часов, ноль минут	",
            eng: "	00:00AM "
        },
        {
            id: 6,
            ru: "	двенадцать часов дня	",
            eng: "	twelve pm	"
        },
        {
            id: 7,
            ru: "	двенадцать часов ночи	",
            eng: "	12 am	"
        },
        {
            id: 8,
            ru: "	в полночь	",
            eng: "	at midnight	"
        },
        {
            id: 9,
            ru: "	днем	",
            eng: "	in the afternoon	"
        },
        {
            id: 10,
            ru: "	утром	",
            eng: "	in the morning	"
        },
        {
            id: 11,
            ru: "	вечером	",
            eng: "	in the evening	"
        },
        {
            id: 12,
            ru: "	ночью	",
            eng: "	at night	"
        },
        {
            id: 13,
            ru: "	в полдень	",
            eng: "	at noon	"
        },
        {
            id: 14,
            ru: "	пол второго	",
            eng: "	half past one	"
        },
        {
            id: 15,
            ru: "	пол девятого	",
            eng: "	half past eight	"
        },
        {
            id: 16,
            ru: "	пол деcятого	",
            eng: "	half past nine	"
        },
        {
            id: 17,
            ru: "	eleven thirty	",
            eng: "	half past eleven	"
        },
        {
            id: 18,
            ru: "	без 20 девять	",
            eng: "	twenty to nine	"
        },
        {
            id: 19,
            ru: "	без пятнадцати четыре	",
            eng: "	a quarter to four	"
        },
        {
            id: 20,
            ru: "	без двух минут час	",
            eng: "	two minutes to two	"
        },
        {
            id: 21,
            ru: "	пятнадцать минут пятого	",
            eng: "	a quarter past four	"
        },
        {
            id: 22,
            ru: "	пятнадцать пятнадцать	",
            eng: "	it is three fifteen	"
        },
        {
            id: 23,
            ru: "	Двадцать ноль ноль	",
            eng: "	it is 8 PM	"
        },
        {
            id: 24,
            ru: "	Десять ноль одна	",
            eng: "	ten o one (Или one past ten)	"
        },
        {
            id: 25,
            ru: "	Восемь часов, тринадцать минут	",
            eng: "	thirteen past eight	"
        },
        {
            id: 26,
            ru: "	Приходите в 2 часа	",
            eng: "	Come at 2 o'clock	"
        },
        {
            id: 27,
            ru: "	Перезвоните после обеда",
            eng: "	call back after lunch	"
        },
        {
            id: 28,
            ru: "	До обеда пожалуйста сделайте это	",
            eng: "	do it before lunch, please	"
        },
        {
            id: 29,
            ru: "	Через 10 минут	",
            eng: "	in 10 minutes	"
        },
        {
            id: 30,
            ru: "	в 10 часов и 10 минут	",
            eng: "	at Ten Ten (Или at ten past ten)	"
        },
        {
            id: 31,
            ru: "	в 10 часов	",
            eng: "	at ten o'clock	"
        },
        {
            id: 32,
            ru: "	через 2 часа	",
            eng: "	in two hours	"
        },
        {
            id: 33,
            ru: "	60 минут это один час	",
            eng: "	60 minutes…. it is an hour	"
        },
    ],
    adjectivesbodya1: [
        {
            id: 58,
            eng: "firm /фЁрм/",
            ru: "Упругая, упругий"
        },
        {
            id: 59,
            eng: "Fit /фит/",
            ru: "спортивный, атлетичный, подтянутый"
        },
        {
            id: 60,
            eng: "Slim /слИм/",
            ru: "Стройный"
        },
        {
            id: 61,
            eng: "wide /уАйд/",
            ru: "Широкий"
        },
        {
            id: 62,
            eng: "fat /фЭт/",
            ru: "Жирный"
        },
        {
            id: 63,
            eng: "short /шорт/",
            ru: "Короткий"
        },
        {
            id: 64,
            eng: "hairy /хЭйри/",
            ru: "Волосатый"
        },
        {
            id: 65,
            eng: "muscular / мАскьюла /",
            ru: "Мускулистый"
        },
        {
            id: 66,
            eng: "large /ладж/",
            ru: "Крупный"
        },
        {
            id: 67,
            eng: "long /лон/",
            ru: "Длинный"
        },
        {
            id: 68,
            eng: "pierced /пирСТ/",
            ru: "Проколотоый"
        },
        {
            id: 69,
            eng: "crooked / крУкИд /",
            ru: "Кривые"
        },
        {
            id: 70,
            eng: "round /рАунд/",
            ru: "Круглый"
        },
        {
            id: 71,
            eng: "square /скуЭэ/",
            ru: "Квадратный"
        },
        {
            id: 72,
            eng: "skinny /скИни/",
            ru: "Тощий"
        },
        {
            id: 73,
            eng: "thick /THык/",
            ru: "Полный"
        },
        {
            id: 74,
            eng: "thin /THын/",
            ru: "Худой, Тонкий"
        },
        {
            id: 75,
            eng: "Big /биг/",
            ru: "Большой"
        },
        {
            id: 76,
            eng: "Small /смОл/",
            ru: "Маленький"
        },
        {
            id: 77,
            eng: "Upper /Аппэ/",
            ru: "Верхний"
        },
        {
            id: 78,
            eng: "Lower /лОуэ/",
            ru: "Нижний"
        },
        {
            id: 79,
            eng: "Overweight / ОувэУэйт /",
            ru: "Избыток веса"
        },
    ],
    upperBody: [
        {
            id: 1,
            eng: "A head /э хэд/",
            ru: "Голова"
        },
        {
            id: 2,
            eng: "An ear /эн иэ/",
            ru: "Ухо"
        },
        {
            id: 3,
            eng: "Ears /Иаз/",
            ru: "Уши"
        },
        {
            id: 4,
            eng: "An eye /эн Ай/",
            ru: "Глаз"
        },
        {
            id: 5,
            eng: "Eyes /айз/",
            ru: "Глаза"
        },
        {
            id: 6,
            eng: "A nose /э ноуз/",
            ru: "Нос"
        },
        {
            id: 7,
            eng: "A neck /э нэк/",
            ru: "Шея"
        },
        {
            id: 8,
            eng: "A mouth /ау/",
            ru: "Рот"
        },
        {
            id: 9,
            eng: "Lips /липс/",
            ru: "Губы"
        },
        {
            id: 10,
            eng: "Teeth /ти/",
            ru: "Зубы"
        },
        {
            id: 11,
            eng: "A tooth /ту/",
            ru: "Зуб"
        },
        {
            id: 12,
            eng: "eye-brows /ай брАуз/",
            ru: "Брови"
        },
        {
            id: 13,
            eng: "long hair",
            ru: "Длинные Волосы"
        },
        {
            id: 14,
            eng: "short hair",
            ru: "Короткие Волосы"
        },
        {
            id: 15,
            eng: "straight hair /стрЭйт хЭа/",
            ru: "Прямые Волосы"
        },
        {
            id: 16,
            eng: "wavy hair /уэйви хэа/",
            ru: "Волнистые Волосы"
        },
        {
            id: 17,
            eng: "curly hair /кЁли хэа/",
            ru: "Кудрявые Волосы"
        },
        {
            id: 18,
            eng: "Bald /бОлд/",
            ru: "Лысый"
        },
        {
            id: 19,
            eng: "A beard /э бИЕд/",
            ru: "Борода"
        },
        {
            id: 20,
            eng: "A moustache /э мАсташ/",
            ru: "Усы"
        },
        {
            id: 21,
            eng: "A forehead /фОхэд/",
            ru: "Лоб"
        },
        {
            id: 22,
            eng: "A tongue /тан/",
            ru: "Язык"
        },
        {
            id: 23,
            eng: "cheeks /чикс/",
            ru: "Щёки"
        },
        {
            id: 24,
            eng: "A chin /чин/",
            ru: "Подбородок"
        },
        {
            id: 25,
            eng: "A fringe /фриндж/",
            ru: "Чёлка"
        },
        {
            id: 26,
            eng: "freckles /фрЭклз/",
            ru: "Веснушки"
        },
        {
            id: 27,
            eng: "wrinkles /ринклз/",
            ru: "Морщинки, Складки"
        },
        {
            id: 28,
            eng: "A tattoo /татУ/",
            ru: "Татуировка"
        },
    ],
    lowerBody: [
        {
            id: 29,
            eng: "Shoulders /шОулдэрз/",
            ru: "Плечи"
        },
        {
            id: 30,
            eng: "Arms /амз/",
            ru: "Руки"
        },
        {
            id: 31,
            eng: "An arm /эн арм/",
            ru: "Рука"
        },
        {
            id: 32,
            eng: "a breast /э брэст/",
            ru: "Грудь"
        },
        {
            id: 33,
            eng: "a chest /чест/",
            ru: "Грудная Клетка"
        },
        {
            id: 34,
            eng: "A body /боди/",
            ru: "Тело"
        },
        {
            id: 35,
            eng: "hands /хэндз/",
            ru: "Кисти Рук"
        },
        {
            id: 36,
            eng: "belly button",
            ru: "/Бэли Батн/ Пупок (Дословно: Кнопка На Пузе)"
        },
        {
            id: 37,
            eng: "belly",
            ru: "Пузико"
        },
        {
            id: 38,
            eng: "tummy /тамми/",
            ru: "Животик"
        },
        {
            id: 39,
            eng: "bottom /ботм/",
            ru: "Попа"
        },
        {
            id: 40,
            eng: "beer belly /бИр бЭли/",
            ru: "Пивное Пузо"
        },
        {
            id: 41,
            eng: "fingers /фИнГерз/",
            ru: "Пальцы На Руках"
        },
        {
            id: 42,
            eng: "wrist /рист/",
            ru: "Запястье"
        },
        {
            id: 43,
            eng: "lower back",
            ru: "Поясница"
        },
        {
            id: 44,
            eng: "body /боди/",
            ru: "Туловище, Тело"
        },
        {
            id: 45,
            eng: "Body parts /боди партс/",
            ru: "Части Тела"
        },
        {
            id: 46,
            eng: "knee /ни/",
            ru: "Колено"
        },
        {
            id: 47,
            eng: "knees /низ/",
            ru: "Колени"
        },
        {
            id: 48,
            eng: "Legs /лэгз/",
            ru: "Ноги"
        },
        {
            id: 49,
            eng: "a foot /фут/",
            ru: "Ступня"
        },
        {
            id: 50,
            eng: "toes /тоУз/ ",
            ru: "Пальцы На Ногах"
        },
        {
            id: 51,
            eng: "Hair /хЭа/",
            ru: "Волосы"
        },
        {
            id: 52,
            eng: "Back / бЭк/",
            ru: "Спина"
        },
        {
            id: 53,
            eng: "a scar /э скА/",
            ru: "Шрам"
        },
        {
            id: 54,
            eng: "a birthmark /бЁthмак/",
            ru: "Родимое Пятно"
        },
        {
            id: 55,
            eng: "a mole /э мОул/",
            ru: "Родинка"
        },
        {
            id: 56,
            eng: "A heel /хил/",
            ru: "Пятка"
        },
        {
            id: 57,
            eng: "Abs /Эбс/",
            ru: "Пресс (кубики на животе)"
        },
    ],
    allBodyParts: [
        {
            id: 1,
            eng: "A head /э хэд/",
            ru: "Голова"
        },
        {
            id: 2,
            eng: "An ear /эн иэ/",
            ru: "Ухо"
        },
        {
            id: 3,
            eng: "Ears /Иаз/",
            ru: "Уши"
        },
        {
            id: 4,
            eng: "An eye /эн Ай/",
            ru: "Глаз"
        },
        {
            id: 5,
            eng: "Eyes /айз/",
            ru: "Глаза"
        },
        {
            id: 6,
            eng: "A nose /э ноуз/",
            ru: "Нос"
        },
        {
            id: 7,
            eng: "A neck /э нэк/",
            ru: "Шея"
        },
        {
            id: 8,
            eng: "A mouth /ау/",
            ru: "Рот"
        },
        {
            id: 9,
            eng: "Lips /липс/",
            ru: "Губы"
        },
        {
            id: 10,
            eng: "Teeth /ти/",
            ru: "Зубы"
        },
        {
            id: 11,
            eng: "A tooth /ту/",
            ru: "Зуб"
        },
        {
            id: 12,
            eng: "eye-brows /ай брАуз/",
            ru: "Брови"
        },
        {
            id: 13,
            eng: "long hair",
            ru: "Длинные Волосы"
        },
        {
            id: 14,
            eng: "short hair",
            ru: "Короткие Волосы"
        },
        {
            id: 15,
            eng: "straight hair /стрЭйт хЭа/",
            ru: "Прямые Волосы"
        },
        {
            id: 16,
            eng: "wavy hair /уэйви хэа/",
            ru: "Волнистые Волосы"
        },
        {
            id: 17,
            eng: "curly hair /кЁли хэа/",
            ru: "Кудрявые Волосы"
        },
        {
            id: 18,
            eng: "Bald /бОлд/",
            ru: "Лысый"
        },
        {
            id: 19,
            eng: "A beard /э бИЕд/",
            ru: "Борода"
        },
        {
            id: 20,
            eng: "A moustache /э мАсташ/",
            ru: "Усы"
        },
        {
            id: 21,
            eng: "A forehead /фОхэд/",
            ru: "Лоб"
        },
        {
            id: 22,
            eng: "A tongue /тан/",
            ru: "Язык"
        },
        {
            id: 23,
            eng: "cheeks /чикс/",
            ru: "Щёки"
        },
        {
            id: 24,
            eng: "A chin /чин/",
            ru: "Подбородок"
        },
        {
            id: 25,
            eng: "A fringe /фриндж/",
            ru: "Чёлка"
        },
        {
            id: 26,
            eng: "freckles /фрЭклз/",
            ru: "Веснушки"
        },
        {
            id: 27,
            eng: "wrinkles /ринклз/",
            ru: "Морщинки, Складки"
        },
        {
            id: 28,
            eng: "A tattoo /татУ/",
            ru: "Татуировка"
        },
        {
            id: 29,
            eng: "Shoulders /шОулдэрз/",
            ru: "Плечи"
        },
        {
            id: 30,
            eng: "Arms /амз/",
            ru: "Руки"
        },
        {
            id: 31,
            eng: "An arm /эн арм/",
            ru: "Рука"
        },
        {
            id: 32,
            eng: "a breast /э брэст/",
            ru: "Грудь"
        },
        {
            id: 33,
            eng: "a chest /чест/",
            ru: "Грудная Клетка"
        },
        {
            id: 34,
            eng: "A body /боди/",
            ru: "Тело"
        },
        {
            id: 35,
            eng: "hands /хэндз/",
            ru: "Кисти Рук"
        },
        {
            id: 36,
            eng: "belly button",
            ru: "/Бэли Батн/ Пупок (Дословно: Кнопка На Пузе)"
        },
        {
            id: 37,
            eng: "belly",
            ru: "Пузико"
        },
        {
            id: 38,
            eng: "tummy /тамми/",
            ru: "Животик"
        },
        {
            id: 39,
            eng: "bottom /ботм/",
            ru: "Попа"
        },
        {
            id: 40,
            eng: "beer belly /бИр бЭли/",
            ru: "Пивное Пузо"
        },
        {
            id: 41,
            eng: "fingers /фИнГерз/",
            ru: "Пальцы На Руках"
        },
        {
            id: 42,
            eng: "wrist /рист/",
            ru: "Запястье"
        },
        {
            id: 43,
            eng: "lower back",
            ru: "Поясница"
        },
        {
            id: 44,
            eng: "body /боди/",
            ru: "Туловище, Тело"
        },
        {
            id: 45,
            eng: "Body parts /боди партс/",
            ru: "Части Тела"
        },
        {
            id: 46,
            eng: "knee /ни/",
            ru: "Колено"
        },
        {
            id: 47,
            eng: "knees /низ/",
            ru: "Колени"
        },
        {
            id: 48,
            eng: "Legs /лэгз/",
            ru: "Ноги"
        },
        {
            id: 49,
            eng: "a foot /фут/",
            ru: "Ступня"
        },
        {
            id: 50,
            eng: "toes /тоУз/ ",
            ru: "Пальцы На Ногах"
        },
        {
            id: 51,
            eng: "Hair /хЭа/",
            ru: "Волосы"
        },
        {
            id: 52,
            eng: "Back / бЭк/",
            ru: "Спина"
        },
        {
            id: 53,
            eng: "a scar /э скА/",
            ru: "Шрам"
        },
        {
            id: 54,
            eng: "a birthmark /бЁthмак/",
            ru: "Родимое Пятно"
        },
        {
            id: 55,
            eng: "a mole /э мОул/",
            ru: "Родинка"
        },
        {
            id: 56,
            eng: "A heel /хил/",
            ru: "Пятка"
        },
        {
            id: 57,
            eng: "Abs /Эбс/",
            ru: "Пресс (кубики на животе)"
        },
        {
            id: 58,
            eng: "firm/фёрм/",
            ru: "Упругая, упругий"
        },
        {
            id: 59,
            eng: "Fit",
            ru: "Спортивный, атлетичный, подтянутый"
        },
        {
            id: 60,
            eng: "Slim",
            ru: "Стройный"
        },
        {
            id: 61,
            eng: "wide /уайд/",
            ru: "Широкий"
        },
        {
            id: 62,
            eng: "fat /фэт/",
            ru: "Жирный"
        },
        {
            id: 63,
            eng: "short /шорт/",
            ru: "Короткий"
        },
        {
            id: 64,
            eng: "hairy /хЭйри/",
            ru: "Волосатый"
        },
        {
            id: 65,
            eng: "muscular /мАскьюла/",
            ru: "Мускулистый"
        },
        {
            id: 66,
            eng: "large /ладж/",
            ru: "Крупный"
        },
        {
            id: 67,
            eng: "long /лон/",
            ru: "Длинный"
        },
        {
            id: 68,
            eng: "pierced /пирст/",
            ru: "Проколотоый"
        },
        {
            id: 69,
            eng: "crooked /крукИд/",
            ru: "Кривые"
        },
        {
            id: 70,
            eng: "round /рАунд/",
            ru: "Круглый"
        },
        {
            id: 71,
            eng: "square /скуЭэ/",
            ru: "Квадратный"
        },
        {
            id: 72,
            eng: "skinny /скИни/",
            ru: "Тощий"
        },
        {
            id: 73,
            eng: "thick",
            ru: "Толстый"
        },
        {
            id: 74,
            eng: "thin",
            ru: "Худой, Тонкий"
        },
        {
            id: 75,
            eng: "Big/биг/",
            ru: "Большой"
        },
        {
            id: 76,
            eng: "Small/смОл/",
            ru: "Маленький"
        },
    ],
    affirmations1: [
        {
            id: 1,
            eng: "Affirmation /эффирмэйшн/",
            ru: "Аффирмация"
        },
        {
            id: 2,
            eng: "Statement /стЭйтмэнт/",
            ru: "Утверждение"
        },
        {
            id: 3,
            eng: "Believe /белив/",
            ru: "Верить"
        },
        {
            id: 4,
            eng: "I am proud of you /прауд/",
            ru: "Я горд за тебя. Я горжусь тобой."
        },
        {
            id: 5,
            eng: "I feel safe /сЭйф/",
            ru: "Я чувствую себя безопасно"
        },
        {
            id: 6,
            eng: "Make up ideas /Айдиас/",
            ru: "Придумывать идеи"
        },
        {
            id: 7,
            eng: "I do my best",
            ru: "Я стараюсь по максимуму"
        },
        {
            id: 8,
            eng: "Achievements /эчИвмэнтс/",
            ru: "Достижения"
        },
        {
            id: 9,
            eng: "I am loved /лавд/",
            ru: "Меня любят"
        },
        {
            id: 10,
            eng: "I am not afraid of it /нат эфрЭйд/",
            ru: "Мне это не страшно"
        },
        {
            id: 11,
            eng: "My feelings matter /мЭттэ/",
            ru: "Мои чувства имеют значение"
        },
        {
            id: 12,
            eng: "I take care of myself",
            ru: "Я проявляю заботу о себе"
        },
        {
            id: 13,
            eng: "They believe in themselves",
            ru: "Они верят в себя"
        },
        {
            id: 14,
            eng: "She does her best",
            ru: "Она старается по максимуму"
        },
        {
            id: 15,
            eng: "Are you proud of yourself?",
            ru: "Ты горд за себя? Гордишься собой?"
        },
        {
            id: 16,
            eng: "Awesome! /осм/",
            ru: "Офигенно!"
        },
        {
            id: 17,
            eng: "I feel happy",
            ru: "Я чувствую себя счастливым"
        },
        {
            id: 18,
            eng: "Overcome /Оувэкам/",
            ru: "Преодолевать"
        },
        {
            id: 19,
            eng: "Challenge /челендж/",
            ru: "Испытание, вызов"
        },
        {
            id: 20,
            eng: "I trust myself /траст майсэлф/",
            ru: "Я доверяю себе"
        },
        {
            id: 21,
            eng: "I follow my heart /фОллоу май харт/",
            ru: "Я следую сердцу /харт/"
        },
        {
            id: 22,
            eng: "I am the boss of my time",
            ru: "Я хозяин своего времени"
        },
        {
            id: 23,
            eng: "A goal /гОул/",
            ru: "Цель"
        },
        {
            id: 24,
            eng: "Allow /элАу/",
            ru: "Давать разрешение, позволять"
        },
        {
            id: 25,
            eng: "Guide /гайд/",
            ru: "Гид, путеводитель"
        },
        {
            id: 26,
            eng: "Inner /Иннэ/",
            ru: "Внутренний"
        },
        {
            id: 27,
            eng: "I do what I say",
            ru: "Я делаю то, что я говорю"
        },
    ],
    affirmations2: [
        {
            id: 1,
            eng: "Affirmations",
            ru: "Аффирмации"
        },
        {
            id: 2,
            eng: "Statements",
            ru: "Утверждения"
        },
        {
            id: 3,
            eng: "Who do you believe?",
            ru: "Кому ты веришь?"
        },
        {
            id: 4,
            eng: "Are you proud of this?",
            ru: "Ты гордишься этим?"
        },
        {
            id: 5,
            eng: "I don't feel safe",
            ru: "Я не чувствую себя безопасно"
        },
        {
            id: 6,
            eng: "Make up ideas",
            ru: "Придумывать идеи"
        },
        {
            id: 7,
            eng: "We do our best",
            ru: "Мы стараемя по максимуму"
        },
        {
            id: 8,
            eng: "Achievements",
            ru: "Достижения"
        },
        {
            id: 9,
            eng: "I am loved",
            ru: "Меня любят"
        },
        {
            id: 10,
            eng: "I am not afraid of anything",
            ru: "Мне ничего не страшно"
        },
        {
            id: 11,
            eng: "My feelings matter",
            ru: "Мои чувства имеют значение"
        },
        {
            id: 12,
            eng: "I take care of myself",
            ru: "Я проявляю заботу о себе"
        },
        {
            id: 13,
            eng: "They believe in themselves",
            ru: "Они верят в себя"
        },
        {
            id: 14,
            eng: "She does her best",
            ru: "Она старается по максимуму"
        },
        {
            id: 15,
            eng: "They do their best",
            ru: "Они стараются по максимуму"
        },
        {
            id: 16,
            eng: "Awesome",
            ru: "Офигенно"
        },
        {
            id: 17,
            eng: "I feel happy",
            ru: "Я чувствую себя счастливым"
        },
        {
            id: 18,
            eng: "Overcome challenges",
            ru: "Преодолевать испытания"
        },
        {
            id: 19,
            eng: "It's a hard challenge ",
            ru: "Это трудный вызов"
        },
        {
            id: 20,
            eng: "I trust only Vincent",
            ru: "Я доверяю только училке!"
        },
        {
            id: 21,
            eng: "I follow my heart",
            ru: "Я следую сердцу /харт/"
        },
        {
            id: 22,
            eng: "I am the boss of my time",
            ru: "Я хозяин своего времени"
        },
        {
            id: 23,
            eng: "A goal",
            ru: "Цель"
        },
        {
            id: 24,
            eng: "Allow",
            ru: "Давать разрешение, позволять"
        },
        {
            id: 25,
            eng: "Inner guide",
            ru: "Внутреннее чутьё"
        },
    ],
    seasons: [
        {
            id: 1,
            ru: "	лето	",
            eng: "	summer /сАмэ/	"
        },
        {
            id: 2,
            ru: "	зима	",
            eng: "	winter	/уИнтэ/"
        },
        {
            id: 3,
            ru: "	осень	",
            eng: "	fall /фол/ or autumn /Отэм/	"
        },
        {
            id: 4,
            ru: "	весна	",
            eng: "	spring /сприн/	"
        },
        {
            id: 5,
            ru: "	январь	",
            eng: "	january "
        },
        {
            id: 6,
            ru: "	февраль	",
            eng: "	february	"
        },
        {
            id: 7,
            ru: "	март	",
            eng: "	march	"
        },
        {
            id: 8,
            ru: "	апрель	",
            eng: "	april /Эйприл/"
        },
        {
            id: 9,
            ru: "	май	",
            eng: "	may /мэй/"
        },
        {
            id: 10,
            ru: "	июнь	",
            eng: "	june	/джун/"
        },
        {
            id: 11,
            ru: "	июль	",
            eng: "	july	/джулАй/"
        },
        {
            id: 12,
            ru: "	август	",
            eng: "	august	/Огэст/"
        },
        {
            id: 13,
            ru: "	сентябрь	",
            eng: "	september	"
        },
        {
            id: 14,
            ru: "	октябрь	",
            eng: "	october	"
        },
        {
            id: 15,
            ru: "	ноябрь	",
            eng: "	november	"
        },
        {
            id: 16,
            ru: "	декабрь	",
            eng: "	december	"
        },
    ],
    animals: [
        {
            id: 101,
            ru: "	Лев	",
            eng: "	Lion /лАйэн/"
        },
        {
            id: 102,
            ru: "	Слон	",
            eng: "	Elephant	"
        },
        {
            id: 103,
            ru: "	Тигр	",
            eng: "	Tiger /тАйгэ/	"
        },
        {
            id: 104,
            ru: "	жираф	",
            eng: "	Giraffe	"
        },
        {
            id: 105,
            ru: "	Обезьяна	",
            eng: "	Monkey	"
        },
        {
            id: 106,
            ru: "	Панда	",
            eng: "	Panda	/пЭнда/"
        },
        {
            id: 107,
            ru: "	Полярный медведь	",
            eng: "	a bear with beer /бЭа/ /бИэ/"
        },
        {
            id: 108,
            ru: "	пингвин	",
            eng: "	Penguin	"
        },
        {
            id: 109,
            ru: "	Кенгуру	",
            eng: "	Kangaroo	"
        },
        {
            id: 110,
            ru: "	Крокодил	",
            eng: "	Crocodile	/крокодАйл"
        },
        {
            id: 111,
            ru: "	Волк	",
            eng: "	Wolf /вулф/"
        },
        {
            id: 112,
            ru: "	Овечка	",
            eng: "	Sheep	"
        },
        {
            id: 113,
            ru: "	Зебра	",
            eng: "	Zebra	/зИбрэ/"
        },
        {
            id: 114,
            ru: "	Лиса	",
            eng: "	Fox	"
        },
        {
            id: 115,
            ru: "	Курица	",
            eng: "	hen	/хэн/"
        },
        {
            id: 116,
            ru: "	Петух	",
            eng: "	Rooster	/рУстэ/"
        }
    ],
}
export default allCardsGameFindAPair
// объединение массивов и объектов
// const arrayFirst = [
//     {
//         id: '1',
//         ru: '',
//         eng: ''
//     },
//     {
//         id: '1',
//         ru: '',
//         eng: ''
//     },
//     {
//         id: '1',
//         ru: '',
//         eng: ''
//     },
//     {
//         id: '1',
//         ru: '',
//         eng: ''
//     },
//     {
//         id: '1',
//         ru: '',
//         eng: ''
//     }
// ]
// const arraySecond = [
//     {
//         id: '2',
//         ru: '',
//         eng: ''
//     },
//     {
//         id: '2',
//         ru: '',
//         eng: ''
//     },
//     {
//         id: '2',
//         ru: '',
//         eng: ''
//     },
//     {
//         id: '2',
//         ru: '',
//         eng: ''
//     },
//     {
//         id: '2',
//         ru: '',
//         eng: ''
//     }
// ]
// const arrayFirstAndSecond = [
//     ...arrayFirst, ...arraySecond,
//     {
//         id: '3',
//         ru: '',
//         eng: ''
//     },
//     {
//         id: '3',
//         ru: '',
//         eng: ''
//     },
// ]