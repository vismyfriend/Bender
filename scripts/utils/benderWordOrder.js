// чтобы удалить пустые строки нужно ввести в CTRL+F или CTRL R  ^(\s)*$\n 
const benderWordOrderSentences = {
    devmode1: [
        {
            id:1,
            eng:"we are very good friends",
            ru:"мы хорошие друзья"
            },
            {
            id:2,
            eng:"Vincent is the best teacher",
            ru:"Винсент мой учитель"
            }
    ],
    devmode0: [
        {
            id:1,
            eng:"we are very good friends",
            ru:"мы хорошие друзья"
            },
            {
            id:2,
            eng:"Vincent is the best teacher",
            ru:"Винсент мой учитель"
            }
    ],
    daysMonthSeasons: [
        {
            id:101,
            eng:"J a n u a r y",
            ru:"январь",
            hint:" / джЭньюэри /"
            },
            {
            id:102,
            eng:"F e b r u a r y",
            ru:"февраль",
            hint:" / фЭбруэри /"
            },
            {
            id:103,
            eng:"M a r c h",
            ru:"март",
            hint:" / мАч /"
            },
            {
            id:104,
            eng:"A p r i l",
            ru:"апрель",
            hint:" / Эйприл /"
            },
            {
            id:105,
            eng:"M a y",
            ru:"март",
            hint:" / мЭй /"
            },
            {
            id:106,
            eng:"J u n e",
            ru:"июнь",
            hint:" / джУн /"
            },
            {
            id:107,
            eng:"J u l y",
            ru:"июль",
            hint:" / джулАй /"
            },
            {
            id:108,
            eng:"A u g u s t",
            ru:"август",
            hint:" / Огэст /"
            },
            {
            id:109,
            eng:"S e p t e m b e r",
            ru:"сентябрь",
            hint:" / сэптЭмбэ /"
            },
            {
            id:110,
            eng:"O c t o b e r",
            ru:"октябрь",
            hint:" / октОубэ /"
            },
            {
            id:111,
            eng:"N o v e m b e r",
            ru:"ноябрь",
            hint:" / новЭмбэ /"
            },
            {
            id:112,
            eng:"D e c e m b e r",
            ru:"декабрь",
            hint:" / дисЭмбэ /"
            },
            {
            id:113,
            eng:"w i n t e r",
            ru:"зима",
            hint:" / уИнтэ /"
            },
            {
            id:114,
            eng:"s p r i n g",
            ru:"весна",
            hint:" / сприн /"
            },
            {
            id:115,
            eng:"s u m m e r",
            ru:"лето",
            hint:" / сАмэ /"
            },
            {
            id:116,
            eng:"a u t u m n",
            ru:"осень по-британски",
            hint:" / Отэм /"
            },
            {
            id:117,
            eng:"f a l l",
            ru:"осень по-американски",
            hint:" / фол /"
            },
            {
            id:118,
            eng:"M o n d a y",
            ru:"понедельник",
            hint:" / мАндэй /"
            },
            {
            id:119,
            eng:"T u e s d a y",
            ru:"вторник",
            hint:" / тьЮсдэй /"
            },
            {
            id:120,
            eng:"W e d n e s d a y",
            ru:"среда",
            hint:" / уЭнсдэй /"
            },
            {
            id:121,
            eng:"T h u r s d a y",
            ru:"четверг",
            hint:" / thЁсдэй /"
            },
            {
            id:122,
            eng:"F r i d a y",
            ru:"пятница",
            hint:" / фрАйдэй /"
            },
            {
            id:123,
            eng:"S a t u r d a y",
            ru:"суббота",
            hint:" / сАтудэй /"
            },
            {
            id:124,
            eng:"S u n d a y",
            ru:"воскресенье",
            hint:" / сАндэй /"
            },
            {
            id:125,
            eng:"T o d a y",
            ru:"сегодня",
            hint:" / тудЭй /"
            },
            {
            id:126,
            eng:"T o m o r r o w",
            ru:"завтра",
            hint:" / тумОроу /"
            },
            {
            id:127,
            eng:"Y e s t e r d a y",
            ru:"вчера",
            hint:" / естэдЭй /"
            },
    ],
    benderVerbsB: [
        {
            id:201,
            eng:"break broke broken - ломать.",
            ru:"ломать"
            },
            {
            id:202,
            eng:"beat beat beaten - побить.",
            ru:"побить"
            },
            {
            id:203,
            eng:"become became become - становиться.",
            ru:"становиться"
            },
            {
            id:204,
            eng:"begin began begun - начинать.",
            ru:"начинать"
            },
            {
            id:205,
            eng:"blow blew blown - дуть.",
            ru:"дуть"
            },
            {
            id:206,
            eng:"borrow borrowed borrowed - брать в долг.",
            ru:"брать в долг"
            },
            {
            id:207,
            eng:"build built built - строить.",
            ru:"строить"
            },
            {
            id:208,
            eng:"burn burnt burnt - сжигать гореть.",
            ru:"сжигать, гореть"
            },
            {
            id:209,
            eng:"buy bought bought - покупать.",
            ru:"покупать"
            },
            {
            id:210,
            eng:"bring brought brought - приносить.",
            ru:"приносить"
            },
            {
            id:211,
            eng:"be (was,were) been - быть.",
            ru:"быть"
            },
            {
            id:212,
            eng:"bite bit bit - кусать.",
            ru:"кусать"
            },
    ],
    benderVerbsCDE: [
            {
            id:213,
            eng:"come came come - приходить.",
            ru:"приходить"
            },
            {
            id:214,
            eng:"choose chose chosen - выбирать.",
            ru:"выбирать"
            },
            {
            id:215,
            eng:"catch caught caught - ловить.",
            ru:"ловить"
            },
            {
            id:216,
            eng:"creep crept crept - ползать.",
            ru:"ползать"
            },
            {
            id:217,
            eng:"cost cost cost - стоить.",
            ru:"стоить"
            },
            {
            id:218,
            eng:"cut cut cut - резать.",
            ru:"резать"
            },
            {
            id:219,
            eng:"deal dealt dealt - иметь дела.",
            ru:"иметь дела"
            },
            {
            id:220,
            eng:"dig dug dug - копать.",
            ru:"копать"
            },
            {
            id:221,
            eng:"do did done - делать.",
            ru:"делать"
            },
            {
            id:222,
            eng:"drive drove driven - водить.",
            ru:"водить"
            },
            {
            id:223,
            eng:"draw drew drawn - рисовать.",
            ru:"рисовать"
            },
            {
            id:224,
            eng:"drink drank drunk - пить.",
            ru:"пить"
            },
            {
            id:225,
            eng:"eat ate eaten - кушать.",
            ru:"кушать"
            },
    ],
    benderVerbsF: [
            {
            id:226,
            eng:"fall fell fallen - падать.",
            ru:"падать"
            },
            {
            id:227,
            eng:"feed fed fed - кормить.",
            ru:"кормить"
            },
            {
            id:228,
            eng:"feel felt felt - чувствовать.",
            ru:"чувствовать"
            },
            {
            id:229,
            eng:"fight fought fought - сражаться.",
            ru:"сражаться"
            },
            {
            id:230,
            eng:"find found found - находить.",
            ru:"находить"
            },
            {
            id:231,
            eng:"fly flew flown - летать.",
            ru:"летать"
            },
            {
            id:232,
            eng:"forbid forbade forbidden - запрещать.",
            ru:"запрещать"
            },
            {
            id:233,
            eng:"forget forgot forgotten - забывать.",
            ru:"забывать"
            },
            {
            id:234,
            eng:"forgive forgave forgiven - прощать.",
            ru:"прощать"
            },
            {
            id:235,
            eng:"freeze froze frozen - замерзать.",
            ru:"замерзать"
            },
    ],
    benderVerbsGH: [
            {
            id:236,
            eng:"grow grew grown - расти.",
            ru:"расти"
            },
            {
            id:237,
            eng:"get got got - получать.",
            ru:"получать"
            },
            {
            id:238,
            eng:"give gave given - давать.",
            ru:"давать"
            },
            {
            id:239,
            eng:"go went gone - ходить.",
            ru:"ходить"
            },
            {
            id:240,
            eng:"have had had - иметь.",
            ru:"иметь"
            },
            {
            id:241,
            eng:"hear heard heard - слышать.",
            ru:"слышать"
            },
            {
            id:242,
            eng:"hide hid hidden - прятать.",
            ru:"прятать"
            },
            {
            id:243,
            eng:"hit hit hit - ударять.",
            ru:"ударять"
            },
            {
            id:244,
            eng:"hurt hurt hurt - причинять боль.",
            ru:"причинять боль"
            },
            {
            id:245,
            eng:"hold held held - держать.",
            ru:"держать"
            },
    ],
    benderVerbsKLM: [
            {
            id:246,
            eng:"keep kept kept - хранить.",
            ru:"хранить"
            },
            {
            id:247,
            eng:"know knew known - знать.",
            ru:"знать"
            },
            {
            id:248,
            eng:"learn learnt learnt - изучать.",
            ru:"изучать"
            },
            {
            id:249,
            eng:"leave left left - покидать.",
            ru:"покидать"
            },
            {
            id:250,
            eng:"lend lent lent - давать в долг.",
            ru:"давать в долг"
            },
            {
            id:251,
            eng:"let let let - позволять.",
            ru:"позволять"
            },
            {
            id:252,
            eng:"lose lost lost - терять.",
            ru:"терять"
            },
            {
            id:253,
            eng:"tell a lie told a lie told a lie - говорить ложь.",
            ru:"говорить ложь"
            },
            {
            id:254,
            eng:"lie lay lain - лежать.",
            ru:"лежать"
            },
            {
            id:255,
            eng:"make made made - создавать.",
            ru:"создавать"
            },
            {
            id:256,
            eng:"mean meant meant - иметь ввиду.",
            ru:"иметь ввиду"
            },
            {
            id:257,
            eng:"meet met met - встречать(ся).",
            ru:"встречать(ся)"
            },
    ],
    benderVerbsPR: [
            {
            id:258,
            eng:"pay paid paid - платить.",
            ru:"платить"
            },
            {
            id:259,
            eng:"put put put - класть.",
            ru:"класть"
            },
            {
            id:260,
            eng:"read read read - читать.",
            ru:"читать"
            },
            {
            id:261,
            eng:"ride rode ridden - ездить верхом.",
            ru:"ездить верхом"
            },
            {
            id:262,
            eng:"ring rang rung - звенеть звонить.",
            ru:"звенеть звонить"
            },
            {
            id:263,
            eng:"run ran run - бегать.",
            ru:"бегать"
            },
            {
            id:264,
            eng:"rise rose risen - подниматься.",
            ru:"подниматься"
            },
    ],
    benderVerbsS: [
            {
            id:265,
            eng:"say said said - сказать произнести.",
            ru:"сказать произнести"
            },
            {
            id:266,
            eng:"see saw seen - увидеть.",
            ru:"увидеть"
            },
            {
            id:267,
            eng:"sell sold sold - продавать.",
            ru:"продавать"
            },
            {
            id:268,
            eng:"send sent sent - отправлять.",
            ru:"отправлять"
            },
            {
            id:269,
            eng:"shake shook shaken - трясти.",
            ru:"трясти"
            },
            {
            id:270,
            eng:"shoot shot shot - стрелять.",
            ru:"стрелять"
            },
            {
            id:271,
            eng:"shut shut shut - захлопнуть.",
            ru:"захлопнуть"
            },
            {
            id:272,
            eng:"sing sang sung - петь.",
            ru:"петь"
            },
            {
            id:273,
            eng:"sink sank sunk - затонуть.",
            ru:"затонуть"
            },
            {
            id:274,
            eng:"sit sat sat - сидеть.",
            ru:"сидеть"
            },
            {
            id:275,
            eng:"sleep slept slept - спать.",
            ru:"спать"
            },
            {
            id:276,
            eng:"slide slid slid - скользить.",
            ru:"скользить"
            },
            {
            id:277,
            eng:"speak spoke spoken - разговаривать.",
            ru:"разговаривать"
            },
            {
            id:278,
            eng:"spend spent spent - тратить.",
            ru:"тратить"
            },
            {
            id:279,
            eng:"spit spat spat - плеваться.",
            ru:"плеваться"
            },
            {
            id:280,
            eng:"stand stood stood - встать стоять.",
            ru:"встать стоять"
            },
            {
            id:281,
            eng:"steal stole stolen - воровать.",
            ru:"воровать"
            },
            {
            id:282,
            eng:"stick stuck stuck - приклеить застрять .",
            ru:"приклеить застрять "
            },
            {
            id:283,
            eng:"stink stank stunk - вонять.",
            ru:"вонять"
            },
            {
            id:284,
            eng:"strike struck struck - ударять.",
            ru:"ударять"
            },
            {
            id:285,
            eng:"swear swore sworn - клясться материться .",
            ru:"клясться материться "
            },
            {
            id:286,
            eng:"sweep swept swept - подметать.",
            ru:"подметать"
            },
            {
            id:287,
            eng:"swim swam swum - плавать.",
            ru:"плавать"
            },
            {
            id:288,
            eng:"swing swung swung - качаться.",
            ru:"качаться"
            },
    ],
    benderVerbsTUW: [
            {
            id:289,
            eng:"take took taken - брать.",
            ru:"брать"
            },
            {
            id:290,
            eng:"teach taught taught - обучать.",
            ru:"обучать"
            },
            {
            id:291,
            eng:"tear tore torn - порвать.",
            ru:"порвать"
            },
            {
            id:292,
            eng:"tell told told - рассказывать.",
            ru:"рассказывать"
            },
            {
            id:293,
            eng:"think thought thought - думать.",
            ru:"думать"
            },
            {
            id:294,
            eng:"throw threw thrown - бросать.",
            ru:"бросать"
            },
            {
            id:295,
            eng:"understand understood understood - понимать.",
            ru:"понимать"
            },
            {
            id:296,
            eng:"wake up woke up woken up - просыпаться.",
            ru:"просыпаться"
            },
            {
            id:297,
            eng:"wear wore worn - носить одежду.",
            ru:"носить одежду"
            },
            {
            id:298,
            eng:"write wrote written - писАть.",
            ru:"писАть"
            },
            {
            id:299,
            eng:"win won won - выигрывать.",
            ru:"выигрывать"
            },
    ],
    benderVerbsAll: [
        {
            id:201,
            eng:"break broke broken - ломать.",
            ru:"ломать"
            },
            {
            id:202,
            eng:"beat beat beaten - побить.",
            ru:"побить"
            },
            {
            id:203,
            eng:"become became become - становиться.",
            ru:"становиться"
            },
            {
            id:204,
            eng:"begin began begun - начинать.",
            ru:"начинать"
            },
            {
            id:205,
            eng:"blow blew blown - дуть.",
            ru:"дуть"
            },
            {
            id:206,
            eng:"borrow borrowed borrowed - брать в долг.",
            ru:"брать в долг"
            },
            {
            id:207,
            eng:"build built built - строить.",
            ru:"строить"
            },
            {
            id:208,
            eng:"burn burnt burnt - сжигать гореть.",
            ru:"сжигать, гореть"
            },
            {
            id:209,
            eng:"buy bought bought - покупать.",
            ru:"покупать"
            },
            {
            id:210,
            eng:"bring brought brought - приносить.",
            ru:"приносить"
            },
            {
            id:211,
            eng:"be (was,were) been - быть.",
            ru:"быть"
            },
            {
            id:212,
            eng:"bite bit bit - кусать.",
            ru:"кусать"
            },
            {
            id:213,
            eng:"come came come - приходить.",
            ru:"приходить"
            },
            {
            id:214,
            eng:"choose chose chosen - выбирать.",
            ru:"выбирать"
            },
            {
            id:215,
            eng:"catch caught caught - ловить.",
            ru:"ловить"
            },
            {
            id:216,
            eng:"creep crept crept - ползать.",
            ru:"ползать"
            },
            {
            id:217,
            eng:"cost cost cost - стоить.",
            ru:"стоить"
            },
            {
            id:218,
            eng:"cut cut cut - резать.",
            ru:"резать"
            },
            {
            id:219,
            eng:"deal dealt dealt - иметь дела.",
            ru:"иметь дела"
            },
            {
            id:220,
            eng:"dig dug dug - копать.",
            ru:"копать"
            },
            {
            id:221,
            eng:"do did done - делать.",
            ru:"делать"
            },
            {
            id:222,
            eng:"drive drove driven - водить.",
            ru:"водить"
            },
            {
            id:223,
            eng:"draw drew drawn - рисовать.",
            ru:"рисовать"
            },
            {
            id:224,
            eng:"drink drank drunk - пить.",
            ru:"пить"
            },
            {
            id:225,
            eng:"eat ate eaten - кушать.",
            ru:"кушать"
            },
            {
            id:226,
            eng:"fall fell fallen - падать.",
            ru:"падать"
            },
            {
            id:227,
            eng:"feed fed fed - кормить.",
            ru:"кормить"
            },
            {
            id:228,
            eng:"feel felt felt - чувствовать.",
            ru:"чувствовать"
            },
            {
            id:229,
            eng:"fight fought fought - сражаться.",
            ru:"сражаться"
            },
            {
            id:230,
            eng:"find found found - находить.",
            ru:"находить"
            },
            {
            id:231,
            eng:"fly flew flown - летать.",
            ru:"летать"
            },
            {
            id:232,
            eng:"forbid forbade forbidden - запрещать.",
            ru:"запрещать"
            },
            {
            id:233,
            eng:"forget forgot forgotten - забывать.",
            ru:"забывать"
            },
            {
            id:234,
            eng:"forgive forgave forgiven - прощать.",
            ru:"прощать"
            },
            {
            id:235,
            eng:"freeze froze frozen - замерзать.",
            ru:"замерзать"
            },
            {
            id:236,
            eng:"grow grew grown - расти.",
            ru:"расти"
            },
            {
            id:237,
            eng:"get got got - получать.",
            ru:"получать"
            },
            {
            id:238,
            eng:"give gave given - давать.",
            ru:"давать"
            },
            {
            id:239,
            eng:"go went gone - ходить.",
            ru:"ходить"
            },
            {
            id:240,
            eng:"have had had - иметь.",
            ru:"иметь"
            },
            {
            id:241,
            eng:"hear heard heard - слышать.",
            ru:"слышать"
            },
            {
            id:242,
            eng:"hide hid hidden - прятать.",
            ru:"прятать"
            },
            {
            id:243,
            eng:"hit hit hit - ударять.",
            ru:"ударять"
            },
            {
            id:244,
            eng:"hurt hurt hurt - причинять боль.",
            ru:"причинять боль"
            },
            {
            id:245,
            eng:"hold held held - держать.",
            ru:"держать"
            },
            {
            id:246,
            eng:"keep kept kept - хранить.",
            ru:"хранить"
            },
            {
            id:247,
            eng:"know knew known - знать.",
            ru:"знать"
            },
            {
            id:248,
            eng:"learn learnt learnt - изучать.",
            ru:"изучать"
            },
            {
            id:249,
            eng:"leave left left - покидать.",
            ru:"покидать"
            },
            {
            id:250,
            eng:"lend lent lent - давать в долг.",
            ru:"давать в долг"
            },
            {
            id:251,
            eng:"let let let - позволять.",
            ru:"позволять"
            },
            {
            id:252,
            eng:"lose lost lost - терять.",
            ru:"терять"
            },
            {
            id:253,
            eng:"tell a lie told a lie told a lie - говорить ложь.",
            ru:"говорить ложь"
            },
            {
            id:254,
            eng:"lie lay lain - лежать.",
            ru:"лежать"
            },
            {
            id:255,
            eng:"make made made - создавать.",
            ru:"создавать"
            },
            {
            id:256,
            eng:"mean meant meant - иметь ввиду.",
            ru:"иметь ввиду"
            },
            {
            id:257,
            eng:"meet met met - встречать(ся).",
            ru:"встречать(ся)"
            },
            {
            id:258,
            eng:"pay paid paid - платить.",
            ru:"платить"
            },
            {
            id:259,
            eng:"put put put - класть.",
            ru:"класть"
            },
            {
            id:260,
            eng:"read read read - читать.",
            ru:"читать"
            },
            {
            id:261,
            eng:"ride rode ridden - ездить верхом.",
            ru:"ездить верхом"
            },
            {
            id:262,
            eng:"ring rang rung - звенеть звонить.",
            ru:"звенеть звонить"
            },
            {
            id:263,
            eng:"run ran run - бегать.",
            ru:"бегать"
            },
            {
            id:264,
            eng:"rise rose risen - подниматься.",
            ru:"подниматься"
            },
            {
            id:265,
            eng:"say said said - сказать произнести.",
            ru:"сказать произнести"
            },
            {
            id:266,
            eng:"see saw seen - увидеть.",
            ru:"увидеть"
            },
            {
            id:267,
            eng:"sell sold sold - продавать.",
            ru:"продавать"
            },
            {
            id:268,
            eng:"send sent sent - отправлять.",
            ru:"отправлять"
            },
            {
            id:269,
            eng:"shake shook shaken - трясти.",
            ru:"трясти"
            },
            {
            id:270,
            eng:"shoot shot shot - стрелять.",
            ru:"стрелять"
            },
            {
            id:271,
            eng:"shut shut shut - захлопнуть.",
            ru:"захлопнуть"
            },
            {
            id:272,
            eng:"sing sang sung - петь.",
            ru:"петь"
            },
            {
            id:273,
            eng:"sink sank sunk - затонуть.",
            ru:"затонуть"
            },
            {
            id:274,
            eng:"sit sat sat - сидеть.",
            ru:"сидеть"
            },
            {
            id:275,
            eng:"sleep slept slept - спать.",
            ru:"спать"
            },
            {
            id:276,
            eng:"slide slid slid - скользить.",
            ru:"скользить"
            },
            {
            id:277,
            eng:"speak spoke spoken - разговаривать.",
            ru:"разговаривать"
            },
            {
            id:278,
            eng:"spend spent spent - тратить.",
            ru:"тратить"
            },
            {
            id:279,
            eng:"spit spat spat - плеваться.",
            ru:"плеваться"
            },
            {
            id:280,
            eng:"stand stood stood - встать стоять.",
            ru:"встать стоять"
            },
            {
            id:281,
            eng:"steal stole stolen - воровать.",
            ru:"воровать"
            },
            {
            id:282,
            eng:"stick stuck stuck - приклеить застрять .",
            ru:"приклеить застрять "
            },
            {
            id:283,
            eng:"stink stank stunk - вонять.",
            ru:"вонять"
            },
            {
            id:284,
            eng:"strike struck struck - ударять.",
            ru:"ударять"
            },
            {
            id:285,
            eng:"swear swore sworn - клясться материться .",
            ru:"клясться материться "
            },
            {
            id:286,
            eng:"sweep swept swept - подметать.",
            ru:"подметать"
            },
            {
            id:287,
            eng:"swim swam swum - плавать.",
            ru:"плавать"
            },
            {
            id:288,
            eng:"swing swung swung - качаться.",
            ru:"качаться"
            },
            {
            id:289,
            eng:"take took taken - брать.",
            ru:"брать"
            },
            {
            id:290,
            eng:"teach taught taught - обучать.",
            ru:"обучать"
            },
            {
            id:291,
            eng:"tear tore torn - порвать.",
            ru:"порвать"
            },
            {
            id:292,
            eng:"tell told told - рассказывать.",
            ru:"рассказывать"
            },
            {
            id:293,
            eng:"think thought thought - думать.",
            ru:"думать"
            },
            {
            id:294,
            eng:"throw threw thrown - бросать.",
            ru:"бросать"
            },
            {
            id:295,
            eng:"understand understood understood - понимать.",
            ru:"понимать"
            },
            {
            id:296,
            eng:"wake up woke up woken up - просыпаться.",
            ru:"просыпаться"
            },
            {
            id:297,
            eng:"wear wore worn - носить одежду.",
            ru:"носить одежду"
            },
            {
            id:298,
            eng:"write wrote written - писАть.",
            ru:"писАть"
            },
            {
            id:299,
            eng:"win won won - выигрывать.",
            ru:"выигрывать"
            },
    ],
    monsterManeskin: [
        {
            id:101,
            eng:"s l a v e",
            ru:"раб",
            },
            {
            id:102,
            eng:"m a s t e r",
            ru:"хозяин, господин",
            },
            {
            id:103,
            eng:"h e a r t",
            ru:"сердце",
            },
            {
            id:104,
            eng:"g a n g s t e r",
            ru:"гангстер",
            },
            {
            id:105,
            eng:"m o n s t e r",
            ru:"чудовище",
            },
            {
            id:106,
            eng:"b e a u t y",
            ru:"красавица",
            },
            {
            id:107,
            eng:"c l o w n",
            ru:"клоун",
            },
            {
            id:108,
            eng:"l o s e r",
            ru:"неудачник, проигравший",
            },
            {
            id:109,
            eng:"w i n n e r",
            ru:"победитель",
            },
            {
            id:110,
            eng:"l a w y e r",
            ru:"адвокат",
            },
    ],
    professions1: [
        {
            id:101,
            eng:"t e a c h e r s",
            ru:"учителя",
            hint:" / тичерз /"
            },
            {
            id:102,
            eng:"s t u d e n t s",
            ru:"учащиеся",
            hint:" / стьюдэнтся /"
            },
            {
            id:103,
            eng:"r e a d e r s",
            ru:"читатели",
            hint:" / рИдэрз /"
            },
            {
            id:104,
            eng:"w r i t e r s",
            ru:"писатели",
            hint:" / райтэрз /"
            },
            {
            id:105,
            eng:"d a n c e r s",
            ru:"танцоры",
            hint:" / дэнсэрз /"
            },
            {
            id:106,
            eng:"k i l l e r s",
            ru:"убийцы",
            hint:" / килэрз /"
            },
            {
            id:107,
            eng:"r o b b e r s",
            ru:"грабители",
            hint:" / роббэрз /"
            },
            {
            id:108,
            eng:"d r i v e r s",
            ru:"водители",
            hint:" / дрАйвэрз /"
            },
            {
            id:109,
            eng:"s i n g e r s",
            ru:"певцы",
            hint:" / сИнгэрз /"
            },
            {
            id:110,
            eng:"b u i l d e r s",
            ru:"строители",
            hint:" / бИлдэрз /"
            },
            {
            id:111,
            eng:"s p o r t s m e n",
            ru:"спортсмены",
            hint:" / спОртсмен /"
            },
            {
            id:112,
            eng:"r u n n e r s",
            ru:"бегуны",
            hint:" / раннэрз /"
            },
            {
            id:113,
            eng:"j u m p e r s",
            ru:"прыгуны",
            hint:" / джАмпэрз /"
            },
    ],
    digits1: [
        {
            id:1,
            eng:"T h r e e",
            ru:"цифра 'Три'"
            },
            {
            id:2,
            eng:"E i g h t",
            ru:"цифра 'Восемь'"
            },
            {
                id:3,
                eng:"F o u r",
                ru:"цифра 'Четыре'"
                },
                {
                    id:4,
                    eng:"N i n e",
                    ru:"цифра 'Девять'"
                    },
                    {
                        id:5,
                        eng:"F i v e",
                        ru:"цифра 'Пять'"
                        },
                        {
                            id:6,
                            eng:"S e v e n",
                            ru:"цифра 'Семь'"
                            },
    ],
    m03: [
        {
            id:101,
            eng:"It is a very good game .",
            ru:" Это очень хорошая игра.",
           },
            {
            id:102,
            eng:"Vincent is a very cool teacher .",
            ru:"винсент очень классный учитель.",
           },
            {
            id:103,
            eng:"how do you feel today ?",
            ru:"Как вы себя чувствуете сегодня?",
           },
            {
            id:104,
            eng:"a robot wants to speak English .",
            ru:"Робот хочет разговаривать на английском.",
           },
            {
            id:105,
            eng:"I am a robot and my name is Bender.",
            ru:"Я робот и моё имя Бендер.",
           },
    ],
    helpArobot: [
        {
            id:101,
            eng:"my friends are good .",
            ru:"мои друзья хорошие.",
            },
            {
            id:102,
            eng:"are your friends good ?",
            ru:"твои друзья хорошие?",
            },
            {
            id:103,
            eng:"we are not stupid students !",
            ru:"мы не глупые студенты!",
            },
            {
            id:104,
            eng:"what is his name ?",
            ru:"Какое его имя?",
            },
            {
            id:105,
            eng:"it is a good robot .",
            ru:"это хороший робот.",
            },
            {
            id:106,
            eng:"am I a stupid robot ?",
            ru:"я глупый робот?",
            },
    ],
    m009old: [
        {
            id:1,
            eng:"we are good friends .",
            ru:"мы хорошие друзья",
            },
            {
            id:2,
            eng:"Vincent is a cool teacher.",
            ru:"Винсент классный учитель",
            },
            {
            id:3,
            eng:"Vincent is not a teacher he is my friend .",
            ru:"Винсент не учитель, он мой друг",
            },
            {
            id:4,
            eng:"where are you from ?",
            ru:"откуда вы родом?",
            },
            {
            id:5,
            eng:"how are you today ?",
            ru:"как вы сегодня себя чувствуете?",
            },
            {
            id:6,
            eng:"I am not a stupid student .",
            ru:"я не тупой студент",
            },
            {
            id:7,
            eng:"I am not lazy /лЭйзи/ .",
            ru:"я не ленивый.",
            },
            {
            id:8,
            eng:"you are very slow !",
            ru:"вы очень медленная",
            },
            {
            id:9,
            eng:"I am not fat .",
            ru:"я не жирная",
            },
            {
            id:10,
            eng:"you are my buddy .",
            ru:"вы мой приятель",
            },
            {
            id:11,
            eng:"it is their dog .",
            ru:"это их собака",
            },
            {
            id:12,
            eng:"their cat is ugly .",
            ru:"их кошка уродлива",
            },
            {
            id:13,
            eng:"our cat is always hungry .",
            ru:"наша кошка всегда голодная",
            },
            {
            id:14,
            eng:"bananas are yellow .",
            ru:"бананы желтые",
            },
            {
            id:15,
            eng:"It is a very good game .",
            ru:"Это очень хорошая игра.",
            },
            {
            id:16,
            eng:"how do you feel today ?",
            ru:"Как вы себя чувствуете сегодня?",
            },
            {
            id:17,
            eng:"a robot wants to speak English .",
            ru:"Робот хочет разговаривать на английском.",
            },
            {
            id:18,
            eng:"I am a robot and my name is Bender.",
            ru:"Я робот и моё имя Бендер.",
            },
    ],
    hw3: [
        {
            id:1,
            eng:"I am clever .",
            ru:"я умный (я умная)",
            hint:" / ай эм клЭвэ /"
            },
            {
            id:2,
            eng:"you are smart .",
            ru:"вы сообразительный",
            hint:" / ю а смарт /"
            },
            {
            id:3,
            eng:"we are ready .",
            ru:"мы готовы",
            hint:" / уи а рЭди /"
            },
            {
            id:4,
            eng:"they are silly .",
            ru:"они глупые",
            hint:" / дэй а сИли /"
            },
            {
            id:5,
            eng:"he is angry .",
            ru:"он сердитый",
            hint:" / хи из Энгри /"
            },
            {
            id:6,
            eng:"he is hungry .",
            ru:"он голодный",
            hint:" / хи из хАнГри /"
            },
            {
            id:7,
            eng:"she is beautiful .",
            ru:"она красивая",
            hint:" / щи из бьютифул /"
            },
            {
            id:8,
            eng:"he is handsome .",
            ru:"он красивый",
            hint:" / хи из хЭнсам /"
            },
            {
            id:9,
            eng:"I am not fat .",
            ru:"я не жирная (я не жирный)",
            hint:" / ай эм нот фэт /"
            },
            {
            id:10,
            eng:"you are my buddy .",
            ru:"ты мой приятель",
            hint:" / ю а май бАдди /"
            },
            {
            id:11,
            eng:"he is a good friend .",
            ru:"он хороший друг",
            hint:" / хи из э гуд фрэнд /"
            },
            {
            id:12,
            eng:"it is our cat .",
            ru:"это наша кошка",
            hint:" / ит из аУа кэт /"
            },
            {
            id:13,
            eng:"our cat is cool .",
            ru:"наша кот классный (прикольный, крутой)",
            hint:" / аУа кЭт из кул /"
            },
            {
            id:14,
            eng:"Bender is a sexy and smart robot .",
            ru:"Бэндер привлекательный и сообразительный робот",
            hint:""
            },
    ],
    test001: [
        {
            id:1,
            eng:"where does Bender work ?",
            ru:"Где работает Бендер?",
            },
            {
            id:2,
            eng:"what time do you do homework ?",
            ru:"Во сколько ты делаешь домашнюю работу?",
            },
            {
            id:3,
            eng:"where does your best friend live ?",
            ru:"Где живет твой лучший друг?",
            },
            {
            id:4,
            eng:"how often do you study English ?",
            ru:"Как часто вы учите английский?",
            },
            {
            id:5,
            eng:"my teacher is the best !",
            ru:"Мой учитель самый лучший!",
            },
            {
            id:6,
            eng:"it is not an easy test .",
            ru:"Это не лёгкий тест.",
            },
            {
            id:7,
            eng:"do you like dogs or cats more ?",
            ru:"Вам больше нравятся собаки или кошки?",
            },
            {
            id:8,
            eng:"a robot does not understand .",
            ru:"Робот не понимает.",
            },
            {
            id:9,
            eng:"what is your phone number ?",
            ru:"Какой ваш номер телефона?",
            },
            {
            id:10,
            eng:"what car does she have ?",
            ru:"Какая у неемашина?",
            },
            {
            id:11,
            eng:"he does not do homework every day.",
            ru:"Он не выполняет домашку каждый день.",
            },
            {
            id:12,
            eng:"does Vincent help you with English ?",
            ru:"Винсент помогает вам с английским?",
            },
            {
            id:13,
            eng:"you are a very smart student .",
            ru:"Вы учень сообразительный студент",
            },
            {
            id:14,
            eng:"am I your best friend ?",
            ru:"Я твой лучший друг?",
            },
            {
            id:15,
            eng:"My teacher has a young cat and an old monkey.",
            ru:"У моего учителя есть молодой кот и старая обезьяна",
            },
    ],
    m013: [
        {
            id:1,
            eng:"I don't kiss somebody every day .",
            ru:"Я не целую кого-то каждый день."
            },
            {
            id:2,
            eng:"I like to go to work on Mondays",
            ru:"Мне нравится ходить на работу по понедельникам."
            },
            {
            id:3,
            eng:"I usually do my homework after lessons",
            ru:"Обычно я делаю свою домашнюю работу после уроков."
            },
            {
            id:4,
            eng:"My friend doesn't do her homework",
            ru:"Моя подруга не делает свою домашнюю работу."
            },
            {
            id:5,
            eng:"I can't run very fast .",
            ru:"Я не могу бегать очень быстро."
            },
            {
            id:6,
            eng:"I don't jump very often .",
            ru:"Я не часто прыгаю."
            },
            {
            id:7,
            eng:"I do number one three times a day",
            ru:"Я 'хожу по-маленькому' три раза в день."
            },
            {
            id:8,
            eng:"I do number two once a day .",
            ru:"Я 'хожу по-большому' один раз в день."
            },
            {
            id:9,
            eng:"Do you like to walk ?",
            ru:"Тебе нравится гулять?"
            },
            {
            id:10,
            eng:"Does Vincent like to play football ?",
            ru:"Винсенту нравится играть в футбол?"
            },
            {
            id:11,
            eng:"I never play games .",
            ru:"Я никогда не играю в игры."
            },
            {
            id:12,
            eng:"My teacher plays the guitar .",
            ru:"Мой учитель играет на гитаре."
            },
            {
            id:13,
            eng:"I like to sing songs .",
            ru:"Мне нравится петь песни."
            },
            {
            id:14,
            eng:"Sometimes I watch movies .",
            ru:"Иногда я смотрю фильмы."
            },
            {
            id:15,
            eng:"how often do you drink alcohol ?",
            ru:"Как часто ты пьешь алкоголь?"
            },
            {
            id:16,
            eng:"what time does the shop close ?",
            ru:"Во сколько закрывается магазин?"
            },
            {
            id:17,
            eng:"When does the shop open ?",
            ru:"Когда открывается магазин?"
            },
            {
            id:18,
            eng:"I look at my teacher twice a week",
            ru:"Я встречаюсь со своим учителем два раза в неделю."
            },
            {
            id:19,
            eng:"what do you want to give me ?",
            ru:"Что ты хочешь мне подарить?"
            },
            {
            id:20,
            eng:"Please, take some food to the GYM",
            ru:"Пожалуйста, возьми немного еду в спортзал."
            },
            {
            id:21,
            eng:"do something with it !",
            ru:"Сделай что-нибудь с этим!"
            },
            {
            id:22,
            eng:"what can people make from milk?",
            ru:"Что люди могут сделать из молока?"
            },
            {
            id:23,
            eng:"what books do you like to read ?",
            ru:"Какие книги тебе нравится читать?"
            },
            {
            id:24,
            eng:"how often do you go to GYM ?",
            ru:"Как часто ты ходишь в спортзал?"
            },
            {
            id:25,
            eng:"My children don't go to university",
            ru:"Мои дети не ходят в университет."
            },
            {
            id:26,
            eng:"does Vincent want to eat in a café with me?",
            ru:"Винсент хочет поесть в кафе со мной?"
            },
            {
            id:27,
            eng:"I really love to do number one",
            ru:"Мне очень нравится ' ходить по-маленькому' ."
            },
            {
            id:28,
            eng:"what time does his cat do number two?",
            ru:"Во сколько его кошка ' ходит по-большому' ?"
            },
            {
            id:29,
            eng:"I have breakfast at 8 a.m.",
            ru:"Я завтракаю в 8 утра."
            },
            {
            id:30,
            eng:"My wife makes breakfast for me",
            ru:"Моя жена готовит завтрак для меня."
            },
            {
            id:31,
            eng:"we have dinner together.",
            ru:"Мы ужинаем вместе."
            },
            {
            id:32,
            eng:"Usually my husband makes dinner .",
            ru:"Обычно мой муж готовит ужин."
            },
            {
            id:33,
            eng:"I want to cook some food .",
            ru:"Я хочу приготовить что-нибудь поесть."
            },
            {
            id:34,
            eng:"Does your child want to eat something ?",
            ru:"Твоему ребенку хочется что-нибудь поесть?"
            },
            {
            id:35,
            eng:"What time do you do exercises ?",
            ru:"Во сколько ты занимаешься упражнениями?"
            },
            {
            id:36,
            eng:"Do you do yoga ?",
            ru:"Ты занимаешься йогой?"
            },
            {
            id:37,
            eng:"Do you do some sports ?",
            ru:"Ты занимаешься каким-то спортом?"
            },
            {
            id:38,
            eng:"how often does a man take a shower ?",
            ru:"Как часто мужчина принимает душ?"
            },
            {
            id:39,
            eng:"I have a wash every morning .",
            ru:"Я умываюсь каждое утро."
            },
            {
            id:40,
            eng:"I don't wash the dishes .",
            ru:"Я не мою посуду."
            },
            {
            id:41,
            eng:"do you wash hands before lunch ?",
            ru:"Ты моешь руки перед обедом?"
            },
            {
            id:42,
            eng:"let's have lunch together ? ",
            ru:"Давайте пообедаем вместе?"
            },
            {
            id:43,
            eng:"can you cook romantic dinner ?",
            ru:"Ты можешь приготовить романтический ужин?"
            },
            {
            id:44,
            eng:"I really need to relax .",
            ru:"Мне действительно нужно отдохнуть."
            },
            {
            id:45,
            eng:"She has some rest .",
            ru:"У нее небольшой отдых."
            },
            {
            id:46,
            eng:"how often does she surf the internet ?",
            ru:"Как часто она сидит в интернете?"
            },
    ],
    mirraLada: [
        {
            id:1,
            eng:"we are good friends",
            ru:"мы хорошие друзья"
            },
            {
            id:2,
            eng:"Vincent is my teacher",
            ru:"Винсент мой учитель"
            },
            {
            id:3,
            eng:"Vincent is not a teacher he is my friend",
            ru:"Винсент не учитель, он мой друг"
            },
            {
            id:4,
            eng:"where are you from ?",
            ru:"откуда вы родом?"
            },
            {
            id:5,
            eng:"how are you today ?",
            ru:"как вы сегодня себя чувствуете?"
            },
            {
            id:6,
            eng:"I am not a stupid student",
            ru:"я не тупой студент"
            },
            {
            id:7,
            eng:"are you stupid ?",
            ru:"ты тупица?"
            },
            {
            id:8,
            eng:"you are very slow !",
            ru:"вы очень медленная"
            },
            {
            id:9,
            eng:"I am not fat",
            ru:"я не жирная"
            },
            {
            id:10,
            eng:"you are my buddy",
            ru:"вы мой приятель"
            },
            {
            id:11,
            eng:"it is their dog",
            ru:"это их собака"
            },
            {
            id:12,
            eng:"their cat is ugly",
            ru:"их кошка уродлива"
            },
            {
            id:13,
            eng:"our cat is always hungry",
            ru:"наша кошка всегда голодная"
            },
            {
                id:14,
                eng:"I am Mirra",
                ru:"я Мирра"
                },
                {
                id:15,
                eng:"my name is Ladoha",
                ru:"меня зовут Ладоха"
                },
                {
                id:16,
                eng:"my friends like K-pop very much",
                ru:"моим друзьям очень нравится К-поп"
                },
                {
                id:17,
                eng:"we live in Vilnius",
                ru:"мы живём в Вильнюсе"
                },
                {
                id:18,
                eng:"you are my teacher",
                ru:"вы мой учитель"
                },
                {
                id:19,
                eng:"it is very interesting",
                ru:"это очень интересно"
                },
                {
                id:20,
                eng:"it is not boring",
                ru:"это не скучно"
                },
                {
                id:21,
                eng:"what is it ?",
                ru:"что это?"
                },
                {
                id:22,
                eng:"what is your name?",
                ru:"как тебя зовут?"
                },
                {
                id:23,
                eng:"how old are you ?",
                ru:"сколько тебе лет?"
                },
                {
                id:24,
                eng:"what is your phone number ?",
                ru:"какой твой номер телефона?"
                },
                {
                id:25,
                eng:"my mom works every day",
                ru:"моя мама работает каждый день"
                },
                {
                id:26,
                eng:"I don't work because I study in school",
                ru:"я не работаю, потому что я учусь"
                },
                {
                id:27,
                eng:"Vincent is the best teacher",
                ru:"Винсент - лучший учитель"
                },
                {
                id:28,
                eng:"do you have an airplane ?",
                ru:"у тебя есть самолёт?"
                },
                {
                id:29,
                eng:"do you have a copybook ?",
                ru:"у тебя есть тетрадь?"
                },
                {
                id:30,
                eng:"does Mirra have a cat?",
                ru:"у Мирры есть кошка?"
                },
                {
                id:31,
                eng:"does Lada have a cactus?",
                ru:"у Лады есть кактус?"
                },
    ],
    threeFormsNVb: [
        {
            id:1,
            eng:"cut cut cut cut cut cut",
            hint: "Кат кат кат",
            ru:"резать"
            },
            {
            id:2,
            eng:"hear heard heard heard heard heard hear",
            hint: "хИэ хёрд хёрд",
            ru:"слышать"
            },
            {
            id:3,
            eng:". is good",
            ru:"третий"
            },
    ],
}
export default benderWordOrderSentences