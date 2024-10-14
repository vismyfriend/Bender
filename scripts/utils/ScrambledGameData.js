// чтобы удалить пустые строки нужно ввести в CTRL+F или CTRL R  ^(\s)*$\n 
// 0001 добавляем константу с данными - с массивом // Здесь слова для игры Find a pair
const allWordsForScrambledGame = {
    devmode1: [
        {
            id:1,
            eng:"numberone",
            hint: "цифра 1",
            ru:"первый"
            },
            {
            id:2,
            eng:"number_two",
            hint: "два",
            ru:"второй"
            },
            {
            id:3,
            eng:"number 3",
            ru:"третий"
            },
    ],
    irregularVerbsV1LetterB: [
        {
            id:1,
            eng:"break",
            ru:"ломать, нарушать",
            hint:"/ брЭйк /"
            },
            {
            id:2,
            eng:"beat",
            ru:"побить, бить",
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
            eng:"build",
            ru:"строить",
            hint:"/ билд /"
            },
            {
            id:7,
            eng:"burn",
            ru:"сжигать, гореть",
            hint:"/ бЁрн /"
            },
            {
            id:8,
            eng:"buy",
            ru:"покупать",
            hint:"/ бАй /"
            },
            {
            id:9,
            eng:"bring",
            ru:"приносить",
            hint:"/ брин /"
            },
    ],
    digits1: [
        {
            id:1,
            eng:"zero",
            ru:"напиши 'ноль'"
            },
            {
            id:2,
            eng:"eight",
            ru:" напиши 'восемь'"
            },
            {
                id:3,
                eng:"nine",
                ru:"напиши 'девять'"
                },
                {
                    id:4,
                    eng:"ten",
                    ru:"напиши 'десять'"
                    },
                    {
                        id:5,
                        eng:"five",
                        ru:"напиши 'пять'"
                        },
                        {
                            id:6,
                            eng:"three",
                            ru:"напиши 'три'"
                            },
    ],
       devmode0: [
        {
            id:1,
            eng:"Teachers",
            ru:"учителя",
            hint:" / тичерз /"
            },
            {
            id:2,
            eng:"Students",
            ru:"учащиеся",
            hint:" / стьюдэнтся /"
            },
            {
            id:7,
            eng:"Robbers",
            ru:"грабители",
            hint:" / роббэрз /"
            },
           
            {
            id:11,
            eng:"Sportsmen",
            ru:"спортсмены",
            hint:" / спОртсмен /"
            },
            {
            id:12,
            eng:"Runners",
            ru:"бегуны",
            hint:" / раннэрз /"
            },
            {
            id:13,
            eng:"Jumpers",
            ru:"прыгуны",
            hint:" / джАмпэрз /"
            },
    
            {
            id:15,
            eng:"Managers",
            ru:"менеджеры",
            hint:" / мЭнэджэрз /"
            },
    ],
    professions1: [
        {
            id:1,
            eng:"teachers",
            ru:"учителя",
            hint:" / тичерз /"
            },
            {
            id:2,
            eng:"students",
            ru:"учащиеся",
            hint:" / стьюдэнтся /"
            },
            {
            id:3,
            eng:"readers",
            ru:"читатели",
            hint:" / ридэрз /"
            },
            {
            id:4,
            eng:"writers",
            ru:"писатели",
            hint:" / райтэрз /"
            },
            {
            id:5,
            eng:"dancers",
            ru:"танцоры",
            hint:" / дэнсэрз /"
            },
            {
            id:6,
            eng:"killers",
            ru:"убийцы",
            hint:" / килэрз /"
            },
            {
            id:7,
            eng:"robbers",
            ru:"грабители",
            hint:" / роббэрз /"
            },
            {
            id:8,
            eng:"drivers",
            ru:"водители",
            hint:" / дрАйвэрз /"
            },
            {
            id:9,
            eng:"singers",
            ru:"певцы",
            hint:" / сИнгэрз /"
            },
            {
            id:10,
            eng:"builders",
            ru:"строители",
            hint:" / бИлдэрз /"
            },
            {
            id:11,
            eng:"sportsmen",
            ru:"спортсмены",
            hint:" / спОртсмен /"
            },
            {
            id:12,
            eng:"runners",
            ru:"бегуны",
            hint:" / раннэрз /"
            },
            {
            id:13,
            eng:"jumpers",
            ru:"прыгуны",
            hint:" / джАмпэрз /"
            },
            {
            id:14,
            eng:"swimmers",
            ru:"пловцы (плаватели)",
            hint:" / свиммэрз /"
            },
            {
            id:15,
            eng:"managers",
            ru:"менеджеры",
            hint:" / мЭнэджэрз /"
            },
    ],
    scrambledWords1: [
        {
            id:1,
            eng:"robbers",
            hint: "роббэрз",
            ru:"грабители"
            },
            {
            id:2,
            eng:"tuesday",
            hint: "тьюсдэй",
            ru:"вторник"
            },
            {
            id:3,
            eng:"magician",
            hint: "мэджИшен",
            ru:"фокусник, маг"
            },
    ],
    allPresentSimpleMarkers: [
        {
            id:1,
            eng:"Always",
            ru:"всегда",
            
            },
            {
            id:2,
            eng:"Almost always",
            ru:"почти всегда",
            
            },
            {
            id:3,
            eng:"Usually",
            ru:"обычно",
            
            },
            {
            id:4,
            eng:"Sometimes",
            ru:"иногда ",
            
            },
            {
            id:5,
            eng:"Often",
            ru:"часто",
            
            },
            {
            id:6,
            eng:"Not often",
            ru:"не часто",
            
            },
            
            {
            id:9,
            eng:"Never",
            ru:"никогда",
            
            },
            {
            id:10,
            eng:"Almost never",
            ru:"почти никогда",
            
            },
            {
            id:11,
            eng:"Almost every hour",
            ru:"почти каждый час",
            
            },
            {
            id:12,
            eng:"Almost every day",
            ru:"почти каждый день",
            
            },
            {
            id:13,
            eng:"Every day",
            ru:"каждый день",
            
            },
            {
            id:14,
            eng:"Every night ",
            ru:"каждую ночь",
            
            },
            {
            id:15,
            eng:"Every week",
            ru:"каждую неделю",
            
            },
            {
            id:16,
            eng:"Every month",
            ru:"каждый месяц",
            
            },
            {
            id:17,
            eng:"Every year",
            ru:"каждый год",
            
            },
            
            {
            id:19,
            eng:"Every evening",
            ru:"каждый вечер",
            
            },
            {
            id:20,
            eng:"Every weekend",
            ru:"каждые выходные",
            
            },
            
            
            {
            id:25,
            eng:"Three times a day",
            ru:"три раза в день",
            
            },
            {
            id:26,
            eng:"Four times a month",
            ru:"четыре раза в месяц",
            
            },
            {
            id:27,
            eng:"Five times a week",
            ru:"пять раз в неделю",
            
            },
            {
            id:28,
            eng:"Six days a week",
            ru:"шесть дней в неделю",
            
            },
            {
            id:29,
            eng:"Seven days a week",
            ru:"семь дней в неделю",
            
            },
            {
            id:30,
            eng:"Eight hours a day",
            ru:"восемь часов в день",
            
            },
            {
            id:31,
            eng:"Nine month a year",
            ru:"девять месяцев в год",
            
            },
            
            {
            id:33,
            eng:"All day",
            ru:"весь день",
            
            },
            {
            id:34,
            eng:"All night ",
            ru:"всю ночь",
            
            },
            {
            id:35,
            eng:"All morning",
            ru:"всё утро",
            
            },
            {
            id:36,
            eng:"All evening",
            ru:"весь вечер",
            
            },
            {
            id:37,
            eng:"All week",
            ru:"всю неделю",
            
            },
            {
            id:38,
            eng:"All weekend",
            ru:"все выходные",
            
            },
            {
            id:39,
            eng:"All month",
            ru:"весь месяц",
            
            },
            {
            id:40,
            eng:"All year",
            ru:"весь год",
            
            },
            {
            id:41,
            eng:"in the morning",
            ru:"утром",
            
            },
            {
            id:42,
            eng:"in the afternoon",
            ru:"днём",
            
            },
            {
            id:43,
            eng:"in the evening",
            ru:"вечером",
            
            },
            {
            id:44,
            eng:"at night",
            ru:"ночью",
            
            },
            
            
            
           
            {
            id:54,
            eng:"very often",
            ru:"ень часто",
            
            },
            {
            id:55,
            eng:"not very often",
            ru:"не очень часто",
            
            },
            
            {
            id:68,
            eng:"on the weekend",
            ru:"по выходным",
            
            },
            {
            id:69,
            eng:"on work days",
            ru:"по будням",
            
            },
    ],
}
export default allWordsForScrambledGame
