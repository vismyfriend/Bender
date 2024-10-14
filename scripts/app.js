import allCardsGameFindAPair from "./utils/find-a-pair.js"
import allQuestionsOneDeck from "./utils/questions.js"
// import allQuestionsSecondDeck from "./utils/questions.js"
import allWordsForGameTypeOrWrite from "./utils/TypeOrWrite.js"
import allWordsForScrambledGame from "./utils/ScrambledGameData.js"
import linksToHW from "./utils/linksToHW.js"
import aNGPatternData from "./utils/aNGdata.js"
import { aNGmechanic } from "./games/aNGmechanic.js"
import slotMachineData from "./utils/slotMachineData.js"
import allSetsArray from "./utils/allSetsArray.js"
import playList from "./utils/music.js"
import quizQuestionsList from "./utils/QuizQData.js"
// там с опечаткой написано что экспортировать в файле снизу, но все равно работает) default export решает!
import { QuizQ } from "./games/QuizQ.js"
import gameTwoDecksListData from "./utils/gameTwoDecksData.js"
import { gameTwoDecks } from "./games/gameTwoDecks.js"
import benderWordOrderSentences from "./utils/benderWordOrder.js"

const aNGPattern = document.querySelector(".popupMissionsAndSets__aNGPattern")
const linksToHWbutton = document.querySelector(".popupMissionsAndSets__linksToHWbutton")
const body = document.querySelector(".body")
const logoSpecial = document.querySelector(".logo-special")
const fryFuturamaMainScreenIntro = document.querySelector(".fryFuturamaMainScreenIntro")

const headerPageReoad = document.querySelector(".headerPageReoad")
headerPageReoad?.addEventListener("click", pageReloadRefresh)

const gameLieToMe = document.querySelector(".gameLieToMe")

const clickTest = document.querySelector(".clickTest")

const backToChoosingTheMissions = document.querySelector(".backToChoosingTheMissions")
backToChoosingTheMissions.addEventListener("click", backToTheVeryFirstScreen)





function startGameLieToMe() {
    popupMissionsAndSets.classList.add("none")
    gameLieToMe.classList.remove("none")
    clickTest.classList.add("none")
}


clickTest.addEventListener("click", startGameLieToMe)


// уточнить у Эндрю про строку ниже - что это 
const isTouch = () => 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0

const dataFromEachPopupMissionsAndSets = document.querySelectorAll(".popupMissionsAndSets__set")
const popupMissionsAndSetsSets = document.querySelector(".popupMissionsAndSets__sets")
const chosenSet = document.querySelector(".popupMissionsAndSets__chosen-set")
const popupMissionsAndSets = document.querySelector(".popupMissionsAndSets")
const popupMissionsAndSetsTitle = document.querySelector(".popupMissionsAndSets__title")
const popupMissionsAndSetsDescription = document.querySelector(".popupMissionsAndSets__description")
const popupMissionsAndSetsGameFindAPair = document.querySelector(".popupMissionsAndSets__gameFindAPair")

const copyThisForNewGames = document.querySelector(".popupMissionsAndSets__copyThisForNewGames")

const oneDeckButtonText = document.querySelector(".oneDeckButtonText")
const oneDeckButtonPrevious = document.querySelector(".oneDeckButtonPrevious")
const oneDeckButtonCheck = document.querySelector(".oneDeckButtonCheck")
const oneDeckButtonNext = document.querySelector(".oneDeckButtonNext")
const oneDeckButtonSwitch = document.querySelector(".oneDeckButtonSwitch")
const cardForSpeakingGame = document.querySelector(".oneDeckOfCards_cardForSpeakingGame")
const topOfTheCard1Value = cardForSpeakingGame.querySelector(".oneDeckOfCards__topOfTheCard1Value")
const bottomOfTheCard1Value = cardForSpeakingGame.querySelector(".oneDeckOfCards__bottomOfTheCard1Value")

const gameTypeOrWrite = document.querySelector(".gameTypeOrWrite")
const gameTrickyQuiz = document.querySelector(".gameTrickyQuiz")
const aNGcontainer = document.querySelector(".aNGcontainer")

const mainContainer5gameTwoCardDecks = document.querySelector(".mainContainer5gameTwoCardDecks")

// ниже получаем нужный массив и перемешиваем в нём элементы
// уточнить, что означает set в скобках - это аргумент или параметр и разница в чем? 
let currentSet = null

let quizGameClass = null
let aNGclass = null




function getArray(set) {
    currentSet = set
    chosenArray = null
    chooseQuestions = null
    chooseTypeOrWrite = null

    //перемешиваем элементы в массиве
    chosenArray = allCardsGameFindAPair[set]?.sort(function () {
        return Math.random() - 0.5;
    });
    chooseQuestions = allQuestionsOneDeck[set]?.sort(function () {
        return Math.random() - 0.5;
    });
    chooseTypeOrWrite = allWordsForGameTypeOrWrite[set]?.sort(function () {
        return Math.random() - 0.5;
    });
    chooseScrambledGame = allWordsForScrambledGame[set]?.sort(function () {
        return Math.random() - 0.5;
    });
    benderWordOrderSentences[set]?.sort(function () {
        return Math.random() - 0.5;
    });
    // renderWordsGameBenderWordOrderGame()

}

function doWeHaveThisGame(set) {
    // если он не находит набор, то скрываем кнопку с игрой
    if (!allCardsGameFindAPair[set]) popupMissionsAndSetsGameFindAPair.classList.remove("show")
    // if (!allWordsForGameTypeOrWrite[set]) InputTypeOrWriteGame.classList.add("show")
    if (!allQuestionsOneDeck[set]) letsSpeak.classList.remove("show")
    if (!quizQuestionsList[set]) multipleChoiceQuiz.classList.remove("show")
    if (!benderWordOrderSentences[set]) BenderWordOrderGameButton.classList.remove("show")
    if (!allWordsForGameTypeOrWrite[set]) startGameTNTbutton.classList.remove("show")
    if (!allWordsForScrambledGame[set]) scrambledstartGameTNTbutton.classList.remove("show")
    if (!linksToHW[set]) linksToHWbutton.classList.remove("show")
        // добавляем ссылку чтобы новый класс не создавать обратились к детям 
    if (linksToHW[set]) linksToHWbutton.children[1].href = linksToHW[set]
    if (!slotMachineData[set]) slotMachine.classList.remove("show")
    if (!aNGPatternData[set]) aNGPattern.classList.remove("show")



}

//проходим по всем наборам, которые создали в index.html

dataFromEachPopupMissionsAndSets.forEach((set) => {
    set.addEventListener("click", (evt) => {
        chooseSet(evt.target.textContent, evt.target.dataset.set)
        resetPageButton.classList.remove("opacityZero")
        backToChoosingTheMissions.classList.remove("opacityZero")
        popupMissionsAndSetsTitle.classList.remove("none")
        getArray(evt.target.dataset.set)
        //уточнить тут все - что такое evt.target
        // console.log("SET - это весь элемент из HTML =", set)
        // console.log("currentSet - это часть элемента HTML (Data-Set) =", currentSet, currentSet.innerHTML)
        // console.log("вот",allQuestionsSecondDeck)
        chooseSong(evt.target.dataset.set)
    })
})

// уточнить, что означает textTheNameOfTheChosenSet в скобках - это аргумент или параметр и разница в чем? Для чего это нужно?


function chooseSet(textTheNameOfTheChosenSet, set) {

    aNGPattern.classList.add("show")
    // console.log(set)
    chosenSet.textContent = textTheNameOfTheChosenSet
    // console.log("название миссии=", textTheNameOfTheChosenSet)
    popupMissionsAndSetsTitle.textContent = "show your best result:"
    popupMissionsAndSetsTitle.classList.add("greyText")
    popupMissionsAndSetsDescription.textContent = "Чтобы пройти миссию выполни tasks задания 👇 "
    popupMissionsAndSetsDescription.textContent = "Покажи свой лучший результат  / шоу ё бэст резАлт /"
    fryFuturamaMainScreenIntro.classList.add("noshow")
    userSearchesForMission.classList.add("none")
    // userSearchesForMission.value = ""
    logoSpecial.classList.add("hidden")
    gameFindPairsTryAgainButton.classList.add("hidden")
    oneDeckButtons.classList.remove("visible")
    popupMissionsAndSetsSets.classList.add("hide")
    // InputTypeOrWriteGame.classList.add("show")
    popupMissionsAndSetsGameFindAPair.classList.add("show")
    startGameTNTbutton.classList.add("show")
    linksToHWbutton.classList.add("show")
    slotMachine.classList.add("show")
    scrambledstartGameTNTbutton.classList.add("show")
    multipleChoiceQuiz.classList.add("show")
    copyThisForNewGames?.classList.add("show")
    // знак вопроса пропустит ошибку
    BenderWordOrderGameButton.classList.add("show")
    letsSpeak.classList.add("show")
    chosenSet.classList.add("show")
    usedCheatsText.classList.remove("visible")
    starsEmoji.classList.remove("visible")
    userSearchesForMissionSet()
    // проверка есть ли такая игра вконце всегда
    doWeHaveThisGame(set)


}

function backToTheVeryFirstScreen() {
    clearInterval(interval)
    //вот сюда нужно вставить завершение таймера квиза clearInterval(this.QuizTimerMechanics)

    // уточнить таймер сброс таймера то есть ломает игру если мы еще не заходили в игру квиз

    console.log(quizGameClass)
    // егорчик помоги
    quizGameClass?.stopTimer()
    // поставил знак вопроса, чтобу пропускало ошибку


    scoreGameBenderWordOrderGame = 0
    scoreTypeOrWriteGame = 0
    scoreTNTGame = 0
    scrambledscoreTNTGame = 0
    lifeGameBenderWordOrderGame = 5
    n = -1



    aNGPattern.classList.remove("show")
    popupMissionsAndSetsDescription.textContent = "👈 choose your mission to practise 👉 / чУз ё мишн ту прЭктис /"
    userSearchesForMission.classList.remove("none")
    popupMissionsAndSetsSets.classList.remove("hide")
    popupMissionsAndSetsTitle.classList.add("none")
    chosenSet.classList.remove("show")
    linksToHWbutton.classList.remove("show")
    slotMachine.classList.remove("show")
    popupMissionsAndSetsGameFindAPair.classList.remove("show")
    letsSpeak.classList.remove("show")
    multipleChoiceQuiz.classList.remove("show")
    BenderWordOrderGameButton.classList.remove("show")
    startGameTNTbutton.classList.remove("show")
    scrambledstartGameTNTbutton.classList.remove("show")

    gameFindAPair.classList.remove("open")
    popupMissionsAndSets.classList.remove("close")
    popupMissionsAndSets.classList.remove("none")
    gameTNT.classList.add("none")
    scrambledgameTNT.classList.add("none")
    clickTest.classList.add("none")
    TNTgameCounter.classList.add("none")
    scrambledTNTgameCounter.classList.add("none")
    usedCheatsText.classList.remove("visible")
    clearInterval(TNTtimerMechanics)
    clearInterval(scrambledTNTtimerMechanics)


    TNTbeforeExplosion = 59
    scrambledTNTbeforeExplosion = 1
    scoreTNTGame = 0
    scrambledscoreTNTGame = 0
    playerInputType.value = ""
    scoreTypeOrWriteGame = 0
    typeOrWriteNumber = 0
    min = 0
    max = 6
    tens = "00"
    seconds = "00"
    interval = null
    count = 0
    foundPairs = 0
    howManyTimesSkipped = 0
    pairsRemainToMatch = 0
    value = null
    questionNumber = 0
    typeOrWriteNumber = 0
    gameFindAPairContainer.innerHTML = ""
    TNTuserInput.value = ""
    scrambledTNTuserInput.value = ""

    TNTgameTaskHint.classList.remove("green")
    scrambledTNTgameTaskHint.classList.remove("green")


    TNTgameButtonStartAgain.classList.add("none")
    scrambledTNTgameButtonStartAgain.classList.add("none")
    TNTgameTaskHint.textContent = "Чтобы обезвредить бомбы напиши на английском:"
    scrambledTNTgameTaskHint.textContent = "Кто-то перемешал буквы! Восстанови порядок :"
    // BenderWordOrderGameContainerOne.classList.add("none")
    // currentSet = null
    // dataFromEachPopupMissionsAndSets.forEach((set) => {
    //     set.addEventListener("click", (evt) => {
    //         chooseSet(evt.target.textContent, evt.target.dataset.set)
    //         getArray(evt.target.dataset.set)
    //         //уточнить тут все - что такое evt.target
    //         console.log("SET - это весь элемент из HTML =", set)
    //         console.log("currentSet - это часть элемента HTML (Data-Set) =", currentSet)
    //         // console.log("вот",allQuestionsSecondDeck)
    //         chooseSong(evt.target.dataset.set)
    //     })
    // })
    gameFindPairsTryAgainButton.classList.add("hidden")
    starsEmoji.classList.remove("visible")

    // resetPageButton.classList.add("opacityZero")
    backToChoosingTheMissions.classList.add("opacityZero")


    oneDeckButtons.classList.remove("visible")
    fryFuturamaMainScreenIntro.classList.remove("noshow")


    usedCheatsText.classList.remove("visible")
    oneDeckButtonText.classList.remove("visible")
    popupMissionsAndSets.classList.remove("close")
    cardForSpeakingGame.classList.add("hiddenDeck")

    // chooseQuestions = chooseQuestions.sort(function () {
    //     return Math.random() - 0.5;
    // });

    questionNumber = 0
    cardForSpeakingGame.classList.remove("AnOpenCard")
    cardForSpeakingGame.style.border = 'none';



    mainContainerIntroAnd2games.classList.remove("none")
    gameBender.classList.add("none")

    gameTrickyQuiz.classList.add("none")
    body.classList.remove("BenderWordOrderGameBackgroundPicture")

    userSearchesForMission.classList.remove("none")



    containerMistakeGameBenderWordOrderGame.classList.remove("show")
    logoSpecial.classList.remove("hidden")
    // userSearchesForMission.value = ""
    // console.log("конец функции")
}



// ниже поиск набора по буквам поиск набора по буквам поиск набора по буквам поиск набора по буквам поиск набора по буквам

const userSearchesForMission = document.querySelector(".userInput.userSearchesForMission")

userSearchesForMission.addEventListener("input", () => userSearchesForMissionSet())

function userSearchesForMissionSet() {
    // чтобы корректо работало нужно popupMissionsAndSets__set чтобы был на каждом наборе
    // собрали все наборы слов в один массив
    let allSetsInHTML = Array.from(document.querySelectorAll(".popupMissionsAndSets__set"))
    // сделали все их невидимыми
    allSetsInHTML.forEach(el => el.classList.add("none"))
    // отфильтровали по тому, что ввел агент (студент)
    let foundMissions = allSetsInHTML.filter(el => el.innerHTML.toLowerCase().includes(userSearchesForMission.value.toLowerCase()))
    // включили видимость отфильтрованным наборам
    foundMissions.forEach(el => el.classList.remove("none"))
}



const mainContainerIntroAnd2games = document.querySelector(".mainContainerIntroAnd2games")
const multipleChoiceQuiz = document.querySelector(".popupMissionsAndSets__multipleChoiceQuiz")

function aNGstart() {
    mainContainerIntroAnd2games.classList.add("none")
    gameBender.classList.add("none")
    aNGcontainer.classList.remove("none")
    aNGclass = new aNGmechanic({ aNGdata: aNGPatternData[currentSet] })
    
}
aNGPattern.addEventListener("click", aNGstart)





// ниже игра quiz test multiple choice ниже игра quiz test multiple choice ниже игра quiz test multiple choice ниже игра quiz test multiple choice



function startGameMultipleChoiceQuiz() {
    body.classList.add("BenderWordOrderGameBackgroundPicture")
    // location.href = "https://bababum95.github.io/vinchento/slot-machine.html"
    mainContainerIntroAnd2games.classList.add("none")
    gameBender.classList.add("none")
    gameTrickyQuiz.classList.remove("none")
    quizGameClass = new QuizQ({ quizAllQuestions: quizQuestionsList[currentSet] })
}
multipleChoiceQuiz.addEventListener("click", startGameMultipleChoiceQuiz)
// выше игра quiz test multiple choice




// ниже все для игры find pairs find a pair ниже все для игры find pairs find a pair ниже все для игры find pairs find a pair
// уточнить про такой адрес ниже что это и как это
const card = document.querySelector(".template").content.querySelector(".card")
const gameFindAPair = document.querySelector(".gameFindAPair")
const gameFindAPairButtonSkipThese = document.querySelector(".gameFindAPairButtonSkipThese")
const gameFindAPairContainer = document.querySelector(".gameFindAPair__container")
const gameFindAPairButtonNotUsed = document.querySelector(".gameFindAPairButtonNotUsed")
const gameFindAPairButtonBackToMissions = document.querySelector(".gameFindAPairButtonBackToMissions")
const gameFindAPairInfo = document.querySelector(".gameFindAPair-info")
const usedCheatsText = document.querySelector(".usedCheatsText")
const timer = document.querySelector(".timer")
const timeSeconds = document.getElementById("seconds")
const timeMiliseconds = document.getElementById("tens")
const gameFindPairsTryAgainButton = document.querySelector(".gameFindPairsButtonTry-again")
let selectCard = null
let chosenArray = null
let chooseQuestions = null
let chooseTypeOrWrite = null
let chooseScrambledGame = null
let min = 0
let max = 6
let tens = "00"
let seconds = "00"
let interval = null
let count = 0
let foundPairs = 0
let howManyTimesSkipped = 0
let pairsRemainToMatch = 0
let value = null
let questionNumber = 0
let typeOrWriteNumber = 0
let scrambledtypeOrWriteNumber = 0

popupMissionsAndSetsGameFindAPair.addEventListener("click", startGameFindPairs)

function startGameFindPairs() {
    // resetPageButton.classList.add("opacityZero")
    // backToChoosingTheMissions.classList.add("opacityZero")
    // console.log("arrayLength - количество пар слов", chosenArray.length)
    howManyStarsScore()
    // console.log("время на 5 звезд <", timeToGet5StarResult)
    // console.log(currentSet)
    // replaceHeaderButton1()
    renderCards("ru")
    renderCards("eng")
    fryFuturamaMainScreenIntro.classList.add("noshow")
    usedCheatsText.classList.remove("visible")
    gameFindAPairButtonBackToMissions.disabled = false;
    gameFindAPairButtonNotUsed.disabled = true;
    howManyTimesSkipped = 0
    pairsRemainToMatch = chosenArray.length
    foundPairs = 0
    gameFindAPairInfo.textContent = `/ файнд э пЭа /  -  найди пару`
    usedCheatsText.textContent = `читов использовано: ${howManyTimesSkipped}. Твои звёзды за задание:`
    popupMissionsAndSets.classList.add("close")
    logoSpecial.classList.add("hidden")
    gameFindAPair.classList.add("open")
    interval = setInterval(startTimer, 10);
    // audioTest.play()
    // console.log(audioTest)
    missionMusicBackground.volume = 0;
    missionMusicBackgroundIconButton.classList.add("off")
    missionMusicBackgroundIconButton.classList.add("hidden")
    audioIcon.classList.add("visible")
}

function renderCards(lang) {
    let array = readyArray()
    let shuffle = array.sort(function () {
        return Math.random() - 0.5;
    });
    for (let i = 0; i < shuffle.length; i++) {
        console.log(shuffle[i][lang])
        const someCard = card.cloneNode(true)
        someCard.textContent = shuffle[i][lang]
        someCard.classList.add(lang)
        someCard.addEventListener("click", match)
        someCard.dataset.id = shuffle[i].id
        gameFindAPairContainer.append(someCard)
    }
}

function readyArray() {
    return chosenArray.slice(min, max)
}

function match(evt) {
    if (!!selectCard) {
        if (selectCard.dataset.id === evt.target.dataset.id && selectCard !== evt.target) {
            selectCard.classList.add("delete")
            evt.target.classList.add("delete")
            count++
            count === max - min ? nextCards() : null
            foundPairs++;
            pairsRemainToMatch--
            gameFindAPairInfo.textContent = `найдено пар: ${foundPairs} / ${chosenArray.length}`
        }
        selectCard.classList.remove("select")
        selectCard = null
    } else {
        evt.target.classList.add("select")
        selectCard = evt.target
    }
}

function nextCards() {
    gameFindAPairContainer.innerHTML = ""
    if (max === chosenArray.length) {
        finishGame()
    } else {
        min = min + 6
        max = max + 6 > chosenArray.length ? chosenArray.length : max + 6
        pairsRemainToMatch = pairsRemainToMatch - 6 + count;
        count = 0
        renderCards("ru")
        renderCards("eng")
    }
}

function finishGame() {
    clearInterval(interval)
    starResult()
    // resetPageButton.classList.add("opacityZero")
    // backToChoosingTheMissions.classList.add("opacityZero")
    userSearchesForMission.classList.remove("none")
    starsEmoji.classList.add("visible")
    usedCheatsText.textContent = `Сделай скриншот и отправь фотку в наш чат. Поделись с Vincent :  ${howManyTimesSkipped}MG : ${chosenSet.textContent} `
    usedCheatsText.classList.add("visible")
    gameFindPairsTryAgainButton.classList.remove("hidden")
    popupMissionsAndSets.classList.remove("close")
    gameFindAPair.classList.remove("open")
    popupMissionsAndSetsTitle.textContent = `Результат ${timer.textContent} seconds`
    // popupMissionsAndSetsTitle.textContent = `Mission ${chosenSet.textContent} результат ${timer.textContent} seconds`
    popupMissionsAndSetsDescription.innerHTML = "Максимальный результат = пять звёзд 🏆 попробуй ещё раз! Try again."
    timeMiliseconds.textContent = "00"
    timeSeconds.textContent = "00"
    popupMissionsAndSetsSets.classList.remove("hide")
    InputTypeOrWriteGame.classList.remove("show")
    scrambledstartGameTNTbutton.classList.remove("show")
    popupMissionsAndSetsGameFindAPair.classList.remove("show")
    slotMachine.classList.remove("show")
    multipleChoiceQuiz.classList.remove("show")
    copyThisForNewGames?.classList.remove("show")
    BenderWordOrderGameButton.classList.remove("show")
    aNGPattern.classList.remove("show")
    linksToHWbutton.classList.remove("show")
    slotMachine.classList.remove("show")
    startGameTNTbutton.classList.remove("show")
    letsSpeak.classList.remove("show")
    chosenSet.classList.remove("show")
    gameFindPairsTryAgainButton.textContent = `💪 Нажми сюда 👍 и улучши результат`
    // gameFindPairsTryAgainButton.textContent = `Попробовать быстрее! 💪 Try faster! 👍 🚀`
    const AudioWinner = new Audio("https://zvukitop.com/wp-content/uploads/2021/03/zvuk-tadam-na-trube.mp3");
    AudioWinner.volume = 0.06;
    AudioWinner.play()
    min = 0
    max = 6
    tens = "00";
    seconds = "00";
    gameFindAPairContainer.innerHTML = ""
    count = 0
}

//ниже функция для высвечивания результата и количество звезд
const starsEmoji = document.querySelector(".starsEmoji")
let howManyStarsEmoji = 5
let timeToGet5StarResult = 40
let timeToGet4StarResult = 50
let timeToGet3StarResult = 60
let timeToGet2StarResult = 75

function howManyStarsScore() {
    // console.log("arrayLength",chosenArray.length)
    if (chosenArray.length < 13) {
        timeToGet5StarResult = 9
        timeToGet4StarResult = 12
        timeToGet3StarResult = 18
        timeToGet2StarResult = 22
        console.log('чтобы получить пять звезд' + timeToGet5StarResult)
    } else if (chosenArray.length > 12 && chosenArray.length < 19) {
        timeToGet5StarResult = 15
        timeToGet4StarResult = 20
        timeToGet3StarResult = 30
        timeToGet2StarResult = 40
    } else if (chosenArray.length > 18 && chosenArray.length < 25) {
        timeToGet5StarResult = 27
        timeToGet4StarResult = 31
        timeToGet3StarResult = 35
        timeToGet2StarResult = 43
    } else if (chosenArray.length > 24 && chosenArray.length < 31) {
        timeToGet5StarResult = 35
        timeToGet4StarResult = 44
        timeToGet3StarResult = 52
        timeToGet2StarResult = 70
    } else if (chosenArray.length > 30 && chosenArray.length < 37) {
        timeToGet5StarResult = 42
        timeToGet4StarResult = 51
        timeToGet3StarResult = 70
        timeToGet2StarResult = 90
    } else if (chosenArray.length > 36 && chosenArray.length < 44) {
        timeToGet5StarResult = 55
        timeToGet4StarResult = 65
        timeToGet3StarResult = 85
        timeToGet2StarResult = 100
    } else if (chosenArray.length > 43 && chosenArray.length) {
        timeToGet5StarResult = 85
        timeToGet4StarResult = 100
        timeToGet3StarResult = 120
        timeToGet2StarResult = 150
    }
}

function starResult() {
    howManyStarsScore()
    if (seconds < timeToGet5StarResult) {
        howManyStarsEmoji = 5
        starsEmoji.style.width = `${howManyStarsEmoji * 31}px`
    } else if (seconds > timeToGet5StarResult && seconds < timeToGet4StarResult) {
        howManyStarsEmoji = 4
        starsEmoji.style.width = `${howManyStarsEmoji * 31}px`
    } else if (seconds > timeToGet4StarResult && seconds < timeToGet3StarResult) {
        howManyStarsEmoji = 3
        starsEmoji.style.width = `${howManyStarsEmoji * 31}px`
    } else if (seconds > timeToGet3StarResult && seconds < timeToGet2StarResult) {
        howManyStarsEmoji = 2
        starsEmoji.style.width = `${howManyStarsEmoji * 31}px`
    } else if (seconds > timeToGet2StarResult) {
        howManyStarsEmoji = 1
        starsEmoji.style.width = `${howManyStarsEmoji * 31}px`
    }
}
//выше  функция для высвечивания результата и количество звезд

function startTimer() {
    tens++;
    if (tens <= 9) {
        timeMiliseconds.textContent = "0" + tens;
    }
    if (tens > 9) {
        timeMiliseconds.textContent = tens;
    }
    if (tens > 99) {
        seconds++;
        timeSeconds.textContent = "0" + seconds;
        tens = 0;
        timeMiliseconds.textContent = "0" + 0;
    }
    if (seconds > 9) {
        timeSeconds.textContent = seconds;

    }
    console.log(timeSeconds.textContent)
}


function nextCardsGameFindAPairCheatUsed() {
    gameFindAPairContainer.innerHTML = ""
    howManyTimesSkipped++;
    if (max === chosenArray.length) {
        finishGame()
    } else {
        min = min + 6
        max = max + 6 > chosenArray.length ? chosenArray.length : max + 6
        pairsRemainToMatch = pairsRemainToMatch - 6 + count;
        count = 0
        gameFindAPairInfo.textContent = `осталось найти пар: ${pairsRemainToMatch}`
        renderCards("ru")
        renderCards("eng")
    }
}

gameFindAPairButtonSkipThese.addEventListener("click", nextCardsGameFindAPairCheatUsed)
gameFindPairsTryAgainButton.addEventListener("click", startGameFindPairs)
gameFindAPairButtonBackToMissions.addEventListener("click", () => {
    backToTheVeryFirstScreen()
})
gameFindAPairButtonNotUsed.addEventListener("click", () => {
    console.log("зачем ты сюда нажал?")
})

// выше все для игры find pairs find a pair





// ниже все для игры questions let's speak ask me ниже все для игры questions let's speak ask me ниже все для игры questions let's speak ask me
const letsSpeak = document.querySelector(".popupMissionsAndSets__letsSpeak")

let languageRu = false

letsSpeak.addEventListener("click", startGameQuestions)
clickTest.classList.add("none")
function startGameQuestions() {
    body.classList.add("BenderWordOrderGameBackgroundPicture")

    // replaceHeaderButton1()


    // backToChoosingTheMissions.classList.add("opacityZero")
    // resetPageButton.classList.add("opacityZero")
    oneDeckButtons.classList.add("visible")
    fryFuturamaMainScreenIntro.classList.add("noshow")
    userSearchesForMission.classList.add("none")
    // usedCheatsText.textContent = `Заметили опечатку, неточность или нужен перевод?  Сделайте скриншот и отправьте мне в телеграм: @vismyfriend ${howManyTimesSkipped}`
    // usedCheatsText.classList.add("visible")
    // спросить уточнить как делать перенос строки в Java? <br> работает только в HTML ( /n тоже не работает) ${<br/>}
    usedCheatsText.textContent = `Если заметите опечатку, сделайте скриншот и отправьте тичеру в телеграм: @vismyfriend`
    // usedCheatsText.textContent = `нажимай на карту из колоды и читай вслух:`
    usedCheatsText.classList.add("visible")
    oneDeckButtonText.classList.add("visible")
    popupMissionsAndSets.classList.add("close")
    cardForSpeakingGame.classList.remove("hiddenDeck")
    // interval = setInterval(startTimer, 10);
}

oneDeckButtonPrevious.addEventListener("click", shuffleDecks, startGameQuestions)

function shuffleDecks() {
    chooseQuestions = chooseQuestions.sort(function () {
        return Math.random() - 0.5;
    });
    questionNumber = 0
    cardForSpeakingGame.classList.remove("AnOpenCard")
    cardForSpeakingGame.style.border = 'none';
    switchPlayerInCardGameQuestions1()
}

function previousQuestion() {
    // console.log("прошлый вопрос", value.ru)
    questionNumber = questionNumber - 2
    getquestions()
}

function getquestions() {
    // usedCheatsText.textContent = `1 ) Ты читаешь, собеседник отвечает / выполняет. 2 ) Нужен перевод? - нажми на размытый текст. 
    // 3 ) Кто отвечал, тот задаёт следующий вопрос . Если вопрос повторился  -  повторяй ! Тренируйтесь много раз говорить одно и тоже. It is life. Кто скажет: "это уже было", тот лузер! `
    // usedCheatsText.textContent = ` Правило 1: Кто скажет: "Это уже было", тот лузер! Правило 2: Читай вслух, что написано, напарник отвечает или переводит. Чтобы проверить ответ или перевод нажми на размытый текст. Кто скажет: "Это уже было", тот лузер! `
    // usedCheatsText.textContent = ` Задание написано на карточке. Чтобы проверить ответ или перевод нажми на размытый текст. Кто скажет: "Это уже было", тот лузер! `
    // usedCheatsText.textContent = ` Задание : Ты читаешь текст на карточке вслух. Твой напарник отвечает тебе. Для проверки и перевода нажми ниже (на размытый текст) Следующую карточку читает твой напарник`
    usedCheatsText.textContent = ` Читай вслух. Уверенно и быстро. на ОДНОМ дыхании НЕ-ПО-СЛО-ГАМ  `

    // backToChoosingTheMissions.classList.remove("opacityZero")
    // resetPageButton.classList.remove("opacityZero")
    if (questionNumber < chooseQuestions.length) {
        cardForSpeakingGame.classList.remove("AnOpenCard")
        setTimeout(function () { cardForSpeakingGame.classList.add("AnOpenCard") }, 0);
        value = chooseQuestions[questionNumber]
        bottomOfTheCard1Value.classList.remove("Unblur")
        if (value.eng[0] === "/") {

            // / Создаем элемент img
            let imgTag = document.createElement("img");
            // Устанавливаем атрибут src
            imgTag.src = value.eng;
            // Очищаем содержимое topOfTheCard1Value, если нужно
            topOfTheCard1Value.innerHTML = "";
            // Добавляем imgTag в topOfTheCard1Value
            topOfTheCard1Value.appendChild(imgTag);

            // topOfTheCard1Value.textContent = `<img src="${value.eng}">`
            // let imgTag = document.createElement("img")
            // topOfTheCard1Value.appendChild(imgTag)


        } else {

            topOfTheCard1Value.textContent = languageRu ? value.ru : value.eng
        }
        bottomOfTheCard1Value.textContent = languageRu ? value.eng : value.ru
        cardForSpeakingGame.style.border = "solid 4px rgb(123, 207, 255)";
        questionNumber = questionNumber + 1
        oneDeckButtonText.textContent = "Быстро спросили, чётко ответили. Автоматизм практикуем, не тормозим, помогаем друг другу, замечаем и исправляем ошибки напарников"
        console.log(value.eng[0] === "/")
        // console.log(value.ru[0])
        // показывает первый символ элемента массива из строки
    } else {
        cardForSpeakingGame.classList.remove("AnOpenCard")
        cardForSpeakingGame.style.border = 'none';
        shuffleDecks()
    }
}

bottomOfTheCard1Value.addEventListener("click", (event) => {
    bottomOfTheCard1Value.classList.toggle("Unblur")
    event.stopPropagation()
})

oneDeckButtonCheck.addEventListener("click", () => {
    previousQuestion()
})

function switchLanguage() {
    getquestions()
    // cardForSpeakingGame.classList.add("column-reverse") уточнить что такое
    // и уточнить как ниже читается код =! (Не равен самому себе)
    languageRu = !languageRu
    topOfTheCard1Value.textContent = languageRu ? value.ru : value.eng
    bottomOfTheCard1Value.textContent = languageRu ? value.eng : value.ru
    // cardForSpeakingGame.style.border = "solid 4px rgb(128, 255, 1)";
}

// уточнить как toggle сделать или вроде того, чтобы при каждом нажатии менялся тескс на кнопке
function switchPlayerInCardGameQuestions1() {
    oneDeckButtonSwitch.textContent = ("чего блин?")
}
function switchPlayerInCardGameQuestions2() {
    oneDeckButtonSwitch.textContent = ("Переключить язык RU-ENG")
}
// oneDeckButtonSwitch.addEventListener("click", () => switchLanguage())

oneDeckButtonSwitch.addEventListener("click", () => {
    switchLanguage()
    switchPlayerInCardGameQuestions2()
})

cardForSpeakingGame.addEventListener("click", () => {
    const AudioNextQuestionCard = new Audio("https://zvukitop.com/wp-content/uploads/2021/06/klik-myshki-9.mp3");
    AudioNextQuestionCard.volume = 0.07
    AudioNextQuestionCard.play()
    cardForSpeakingGame.classList.contains("open") ? null : getquestions()
})

oneDeckButtonNext.addEventListener("click", () => {
    const AudioNextQuestionCard = new Audio("https://zvukitop.com/wp-content/uploads/2021/06/klik-myshki-9.mp3");
    AudioNextQuestionCard.volume = 0.07
    AudioNextQuestionCard.play()
    cardForSpeakingGame.classList.contains("open") ? null : getquestions()
})
// выше все для игры questions let's speak ask me






// ниже игра слот машина slot machine 
const slotMachine = document.querySelector(".popupMissionsAndSets__slot-machine")

slotMachine.addEventListener("click", startGameSlotMachine)

function startGameSlotMachine() {
    location.href = "https://bababum95.github.io/vinchento/slot-machine.html"
}
// выше ссылка на игру slot machine 






// ниже все для игры BenderWordOrderGame

const benderWordOrderGameTask = document.querySelector(".BenderWordOrderGameTask-eng")
const BenderWordOrderGameContainerOne = document.querySelector(".BenderWordOrderGameContainer-one")

const gameBender = document.querySelector(".gameBender")
const BenderWordOrderGameButton = document.querySelector(".popupMissionsAndSets__BenderWordOrderGame")
const BenderWordOrderGameButtonBackToMissions = document.querySelector(".BenderWordOrderGameButtonBackToMissions")
const wordGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameTemplate").content.querySelector(".BenderWordOrderGameWord")
const wordsContainerGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameWords")
const inputSentenceGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameInput-sentence")
const hintGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameHint")
const russianHintGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameHint-input")
const cheatGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameCheat")
const containerMistakeGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameContainer-mistake")
const correctAnswerGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameSentence-correct")
const userAnswerGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameUser-answer")
const russianHintMistakeGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameRussian-hint")
const fairGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameFair")
const unfairGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameUnfair")
const screenshotGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameScreenshot")
const livesGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameLives")
const pointsGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameCorrect-counter")
const typeOrWriteGameСounter = document.querySelector(".typeOrWriteGame-counter")
let scoreGameBenderWordOrderGame = 0
let scoreTypeOrWriteGame = 0
let scoreTNTGame = 0
let scrambledscoreTNTGame = 0
let lifeGameBenderWordOrderGame = 5
// уменьшая жизни принудительно изменить width
let n = -1

// раньше на отдельной ссылке была игра, закоментил, чтобы не забыть как ссылки вставлять
// function startGameRobotBender() {
//     location.href = "https://vismyfriend.github.io/Bender/"
// }

function startGameBenderWordOrderGame() {
    lifeGameBenderWordOrderGame = 5
    livesGameBenderWordOrderGame.style.width = `${lifeGameBenderWordOrderGame * 31}px`
    wordsContainerGameBenderWordOrderGame.innerHTML = ""
    inputSentenceGameBenderWordOrderGame.textContent = ""
    pointsGameBenderWordOrderGame.classList.add("none")

    mainContainerIntroAnd2games.classList.add("none")
    gameBender.classList.remove("none")
    userSearchesForMission.classList.add("none")
    gameTrickyQuiz.classList.add("none")
    body.classList.add("BenderWordOrderGameBackgroundPicture")
    renderWordsGameBenderWordOrderGame()
    russianHintGameBenderWordOrderGame.textContent = benderWordOrderSentences[currentSet][n].ru
}

// BenderWordOrderGameButtonBackToMissions.addEventListener("click", pageReloadRefresh)
BenderWordOrderGameButton.addEventListener("click", startGameBenderWordOrderGame)


// передаем set чтобы bender понимал в каком он наборе
function renderWordsGameBenderWordOrderGame() {
    // russianHintGameBenderWordOrderGame.textContent = "Без русского перевода попробуй восстановить правильный порядок слов"
    russianHintGameBenderWordOrderGame.textContent = "Нажимай на слова или буквы в правильном порядке"
    n = n + 1
    // russianHintGameBenderWordOrderGame.textContent = benderWordOrderSentences[currentSet][n].ru
    // console.log(life)
    // const sentenceGameBenderWordOrderGame = testGameBenderWordOrderGame[n].eng
    const sentenceGameBenderWordOrderGame = benderWordOrderSentences[currentSet][n].eng
    // функция будет принимать предложение и перемешивать слова в нем
    console.log(sentenceGameBenderWordOrderGame)
    let shuffleSentenceGameBenderWordOrderGame = sentenceGameBenderWordOrderGame.split(' ').sort(function () {
        return Math.random() - 0.5;
    });

    shuffleSentenceGameBenderWordOrderGame.forEach(element => {
        const cloneWordGameBenderWordOrderGame = wordGameBenderWordOrderGame.cloneNode(true)
        cloneWordGameBenderWordOrderGame.textContent = element
        cloneWordGameBenderWordOrderGame.addEventListener("click", () => {
            if (cloneWordGameBenderWordOrderGame.classList.contains("pressed")) {
                cloneWordGameBenderWordOrderGame.classList.remove("pressed")
                inputSentenceGameBenderWordOrderGame.textContent = inputSentenceGameBenderWordOrderGame.textContent.replace(" " + element, "")
            } else {
                cloneWordGameBenderWordOrderGame.classList.add("pressed")
                inputSentenceGameBenderWordOrderGame.textContent += " " + element
                if (inputSentenceGameBenderWordOrderGame.textContent.length === sentenceGameBenderWordOrderGame.length + 1) {
                    if (inputSentenceGameBenderWordOrderGame.textContent === " " + sentenceGameBenderWordOrderGame) {
                        // console.log("ok")
                        scoreGameBenderWordOrderGame += 1
                        // score = score + 1
                        pointsGameBenderWordOrderGame.classList.remove("none")

                        pointsGameBenderWordOrderGame.textContent = `верно:  ${scoreGameBenderWordOrderGame} / ${benderWordOrderSentences[currentSet].length}`
                        nextSentenceGameBenderWordOrderGame()
                    } else {
                        russianHintMistakeGameBenderWordOrderGame.textContent = benderWordOrderSentences[currentSet][n].ru
                        correctAnswerGameBenderWordOrderGame.textContent = `Робот написал так : ${sentenceGameBenderWordOrderGame}`
                        userAnswerGameBenderWordOrderGame.textContent = `А вы написали так : ${inputSentenceGameBenderWordOrderGame.textContent}`
                        userAnswerGameBenderWordOrderGame.classList.add("wrong")
                        containerMistakeGameBenderWordOrderGame.classList.add("show")
                        lifeGameBenderWordOrderGame = lifeGameBenderWordOrderGame - 1
                        livesGameBenderWordOrderGame.style.width = `${lifeGameBenderWordOrderGame * 31}px`
                        unfairGameBenderWordOrderGame.disabled = false
                        screenshotGameBenderWordOrderGame.classList.add("hide")
                        // Снова математика от Эндрю
                        // Тут Великий Эндрю спрашивает у Величайшего гугла как задавать стили через java
                    }
                }
            }
        })
        // финальная команда функции
        wordsContainerGameBenderWordOrderGame.prepend(cloneWordGameBenderWordOrderGame)
    });
}

function gameOverGameBenderWordOrderGame() {
    inputSentenceGameBenderWordOrderGame.textContent = `Крутец-молодец! Ты помог Бендеру with his English! Поделись фоткой этого достижения с Винсентом`
    russianHintGameBenderWordOrderGame.textContent = `верно:  ${scoreGameBenderWordOrderGame} / ${benderWordOrderSentences[currentSet].length}`
    // не работает пока почему-то
    // benderWordOrderGameTask.textContent = "My achievement :"
    // console.log(benderWordOrderGameTask.textContent)
}
function nextSentenceGameBenderWordOrderGame() {
    wordsContainerGameBenderWordOrderGame.innerHTML = ""
    inputSentenceGameBenderWordOrderGame.textContent = ""
    if (n === benderWordOrderSentences[currentSet].length - 1) {
        gameOverGameBenderWordOrderGame()
    } else {
        renderWordsGameBenderWordOrderGame()
    }
}

unfairGameBenderWordOrderGame.addEventListener("click", () => {
    unfairGameBenderWordOrderGame.disabled = true
    fairGameBenderWordOrderGame.disabled = true
    screenshotGameBenderWordOrderGame.classList.remove("hide")
    lifeGameBenderWordOrderGame = lifeGameBenderWordOrderGame + 1
    livesGameBenderWordOrderGame.style.width = `${lifeGameBenderWordOrderGame * 31}px`
    unfairGameBenderWordOrderGame.disabled = true
})

fairGameBenderWordOrderGame.addEventListener("click", () => {
    containerMistakeGameBenderWordOrderGame.classList.remove("show")
    if (lifeGameBenderWordOrderGame === 0) {
        gameOverGameBenderWordOrderGame()
    } else {
        nextSentenceGameBenderWordOrderGame()
    }
})

screenshotGameBenderWordOrderGame.addEventListener("click", () => {
    containerMistakeGameBenderWordOrderGame.classList.remove("show")
    fairGameBenderWordOrderGame.disabled = false
    if (lifeGameBenderWordOrderGame === 0) {
        gameOverGameBenderWordOrderGame()
    } else {
        nextSentenceGameBenderWordOrderGame()
    }
})

hintGameBenderWordOrderGame.addEventListener("click", () => {
    russianHintGameBenderWordOrderGame.textContent = benderWordOrderSentences[currentSet][n].ru
    setTimeout(() => {
        russianHintGameBenderWordOrderGame.textContent = "нажимай слова в правильном порядке, ошибаться можно! Для отмены нажми на слово снова"
    }, 4000)
})

cheatGameBenderWordOrderGame.addEventListener("click", () => {
    // russianHintGameBenderWordOrderGame.textContent = benderWordOrderSentences[currentSet][n].eng
    russianHintGameBenderWordOrderGame.textContent = benderWordOrderSentences[currentSet][n].eng

    setTimeout(() => {
        russianHintGameBenderWordOrderGame.textContent = "нажимай слова в правильном порядке, ошибаться можно! Для отмены нажми на слово снова"
    }, 4000)
    // милисекунды 
})

// выше все для игры BenderWordOrderGame





// ниже spelling game TypeOrWrite правописание скоро возможно заменю ее на бомбу игру про взрывчатку (или уже заменил)
const InputTypeOrWriteGame = document.querySelector(".popupMissionsAndSets__InputTypeOrWriteGame")
const typeOrWriteGameButtonIDK = document.querySelector(".typeOrWriteGameButtonIDK")
const typeOrWriteGameButtonSkip = document.querySelector(".typeOrWriteGameButtonSkip")
const inputTitleEng = document.querySelector(".inputTitleEng")
const playerInputType = document.querySelector(".playerInputType")
const typeOrWriteGameButtonCompare = document.querySelector(".typeOrWriteGameButtonCompare")

function startGameInputTypeOrWriteGame() {

    mainContainerIntroAnd2games.classList.add("none")
    gameBender.classList.add("none")
    gameTypeOrWrite.classList.remove("none")
    gameTrickyQuiz.classList.add("none")
    userSearchesForMission.classList.add("none")
    body.classList.remove("BenderWordOrderGameBackgroundPicture")
    value = chooseTypeOrWrite[typeOrWriteNumber]
    inputTitleEng.textContent = value.ru
    typeOrWriteGameButtonCompare.addEventListener("click", compareInput)
}

InputTypeOrWriteGame.addEventListener("click", startGameInputTypeOrWriteGame)

function nextWordToTranslate(inputPlaceholder) {
    typeOrWriteNumber = typeOrWriteNumber + 1
    value = chooseTypeOrWrite[typeOrWriteNumber]

    if (value) {
        inputPlaceholder.innerHTML = value.ru
    } else {
        inputTitleEng.textContent = `Вы справились! Попробуйте другой набор слов`
        typeOrWriteGameСounter.textContent = `(${scoreTypeOrWriteGame} из ${chooseTypeOrWrite.length}) Correct ${scoreTypeOrWriteGame} out of ${chooseTypeOrWrite.length}`
    }
    // inputPlaceholder.classList.add("none")
    // playerInputType.textContent = `вы перевели:  ${scoreTypeOrWriteGame} из ${chooseTypeOrWrite.length}`
}

function compareInput() {
    if (playerInputType.value.toLowerCase() === value.eng.toLowerCase()) {
        nextWordToTranslate(inputTitleEng)
        playerInputType.value = ""
        scoreTypeOrWriteGame += 1
        keySoundInputOk.play()
        typeOrWriteGameСounter.textContent = `верно:  ${scoreTypeOrWriteGame} out of ${chooseTypeOrWrite.length}`
        typeOrWriteGameСounter.classList.add("green")
    } else {
        typeOrWriteGameСounter.textContent = `Хмм...🤷🏽‍♂️ может опечатка или лишний пробел? Попробуй еще раз. Или сделай скриншот и отправь мне. Thank you. Потом нажми skip`
        typeOrWriteGameСounter.classList.remove("green")
    }
}

function typeOrWriteGameSkip() {
    nextWordToTranslate(inputTitleEng)
    playerInputType.value = ""
}

typeOrWriteGameButtonSkip.addEventListener("click", typeOrWriteGameSkip)

typeOrWriteGameButtonIDK.addEventListener("click", () => {
    typeOrWriteGameСounter.textContent = `The answer is   << ${value.eng} >> `
    setTimeout(() => {
        typeOrWriteGameСounter.textContent = `верно:  ${scoreTypeOrWriteGame} out of ${chooseTypeOrWrite.length}`
    }, 2000)
})

// клавиатура
const oneDeckButtons = document.querySelector(".oneDeckButtons")
const keyQ = document.querySelector(".keyQ")
const keyW = document.querySelector(".keyW")
const keyE = document.querySelector(".keyE")
const keyR = document.querySelector(".keyR")
const keyT = document.querySelector(".keyT")
const keyY = document.querySelector(".keyY")
const keyU = document.querySelector(".keyU")
const keyI = document.querySelector(".keyI")
const keyO = document.querySelector(".keyO")
const keyP = document.querySelector(".keyP")
const keyA = document.querySelector(".keyA")
const keyS = document.querySelector(".keyS")
const keyD = document.querySelector(".keyD")
const keyF = document.querySelector(".keyF")
const keyG = document.querySelector(".keyG")
const keyH = document.querySelector(".keyH")
const keyJ = document.querySelector(".keyJ")
const keyK = document.querySelector(".keyK")
const keyL = document.querySelector(".keyL")
const keyOpostrophy = document.querySelector(".keyOpostrophy")
const keyZ = document.querySelector(".keyZ")
const keyX = document.querySelector(".keyX")
const keyC = document.querySelector(".keyC")
const keyV = document.querySelector(".keyV")
const keyB = document.querySelector(".keyB")
const keyN = document.querySelector(".keyN")
const keyM = document.querySelector(".keyM")
const keyQuestion = document.querySelector(".keyQuestion")
const keyDeleteLastSymbol = document.querySelector(".keyDeleteLastSymbol")
const keyDel = document.querySelector(".keyDel")
const keySpaceBar = document.querySelector(".keySpaceBar")

keyQ.addEventListener("click", () => {
    TNTuserInput.value = TNTuserInput.value + "Q"
})
keyW.addEventListener("click", () => {
    TNTuserInput.value = TNTuserInput.value + "W"
})
keyE.addEventListener("click", () => {
    TNTuserInput.value = TNTuserInput.value + "E"
})
keyR.addEventListener("click", () => {
    TNTuserInput.value = TNTuserInput.value + "R"
})
keyT.addEventListener("click", () => {
    TNTuserInput.value = TNTuserInput.value + "T"
})
keyY.addEventListener("click", () => {
    TNTuserInput.value = TNTuserInput.value + "Y"
})
keyU.addEventListener("click", () => {
    TNTuserInput.value = TNTuserInput.value + "U"
})
keyI.addEventListener("click", () => {
    TNTuserInput.value = TNTuserInput.value + "I"
})
keyO.addEventListener("click", () => {
    TNTuserInput.value = TNTuserInput.value + "O"
})
keyP.addEventListener("click", () => {
    TNTuserInput.value = TNTuserInput.value + "P"
})
keyA.addEventListener("click", () => {
    TNTuserInput.value = TNTuserInput.value + "A"
})
keyS.addEventListener("click", () => {
    TNTuserInput.value = TNTuserInput.value + "S"
})
keyD.addEventListener("click", () => {
    TNTuserInput.value = TNTuserInput.value + "D"
})
keyF.addEventListener("click", () => {
    TNTuserInput.value = TNTuserInput.value + "F"
})
keyG.addEventListener("click", () => {
    TNTuserInput.value = TNTuserInput.value + "G"
})
keyH.addEventListener("click", () => {
    TNTuserInput.value = TNTuserInput.value + "H"
})
keyJ.addEventListener("click", () => {
    TNTuserInput.value = TNTuserInput.value + "J"
})
keyK.addEventListener("click", () => {
    TNTuserInput.value = TNTuserInput.value + "K"
})
keyL.addEventListener("click", () => {
    TNTuserInput.value = TNTuserInput.value + "L"
})
keyZ.addEventListener("click", () => {
    TNTuserInput.value = TNTuserInput.value + "Z"
})
keyOpostrophy.addEventListener("click", () => {
    TNTuserInput.value = TNTuserInput.value + "'"
})
keyX.addEventListener("click", () => {
    TNTuserInput.value = TNTuserInput.value + "X"
})
keyC.addEventListener("click", () => {
    TNTuserInput.value = TNTuserInput.value + "C"
})
keyV.addEventListener("click", () => {
    TNTuserInput.value = TNTuserInput.value + "V"
})
keyB.addEventListener("click", () => {
    TNTuserInput.value = TNTuserInput.value + "B"
})
keyN.addEventListener("click", () => {
    TNTuserInput.value = TNTuserInput.value + "N"
})
keyM.addEventListener("click", () => {
    TNTuserInput.value = TNTuserInput.value + "M"
})
keyQuestion.addEventListener("click", () => {
    TNTuserInput.value = TNTuserInput.value + "?"
    // keySoundInput?.stop()
    keySoundInput.play()
})
keyDel.addEventListener("click", () => {
    TNTuserInput.value = ""
    // keySoundInput?.stop()
    keySoundInput.play()
})
keySpaceBar.addEventListener("click", () => {
    TNTuserInput.value = TNTuserInput.value + " "
    // keySoundInput.stop()
    keySoundInput.play()
})

keyDeleteLastSymbol.addEventListener("click", () => {
    TNTuserInput.value = TNTuserInput.value.substring(0, TNTuserInput.value.length - 1);
    const keyDelSoundInput = new Audio("https://zvukitop.com/wp-content/uploads/2021/01/najatie-na-klaviaturu-iphone.mp3");
    keyDelSoundInput.volume = 0.08
    keyDelSoundInput.play()
})
// выше spelling game правописание



//новая игра про бомбу TNT ниже

let TNTtimerMechanics
let TNTbeforeExplosion = 30
let TNTtimerFormat

const gameTNT = document.querySelector(".TNTgameContainer")
const startGameTNTbutton = document.querySelector(".popupMissionsAndSets__startGameTNT")
const TNTgameTaskValue = document.querySelector(".TNTgameTaskValue")

startGameTNTbutton.addEventListener("click", startGameTNT)




const TNTtimer = document.querySelector(".TNTtimer")
const TNTbuttonCompare = document.querySelector(".TNTgameButtonCompare")
const TNTgameButtonStartAgain = document.querySelector(".TNTgameButtonStartAgain")
const TNTuserInput = document.querySelector(".TNTgamePlayerInputType")
const TNTgameTaskHint = document.querySelector(".TNTgameTaskHint")
const TNTgameInfo = document.querySelector(".TNTgameInfo")
const TNTgameCounter = document.querySelector(".TNTgame-counter")
const TNTgameButtonIDK = document.querySelector(".TNTgameButtonIDK")
const TNTgameButtonAnswer = document.querySelector(".TNTgameButtonAnswer")

TNTbuttonCompare.addEventListener("click", compareTNTinput)


function startGameTNT() {

    TNTtimer.textContent = `00:${TNTbeforeExplosion}`
    popupMissionsAndSets.classList.add("none")
    gameTNT.classList.remove("none")
    clickTest.classList.add("none")
    value = chooseTypeOrWrite[typeOrWriteNumber]
    TNTgameTaskValue.textContent = value.ru
    TNTgameCounter.classList.add("none")
    usedCheatsText.classList.remove("visible")
    clearInterval(TNTtimerMechanics)
    TNTstartTimer()
    TNTgameButtonIDK.classList.remove("none")
    TNTgameButtonAnswer.classList.add("none")
    TNTbuttonCompare.classList.remove("none")
    TNTbuttonCompare.classList.remove("none")
    TNTgameButtonStartAgain.classList.add("none")

    addEventListener("keyup", handleKeyup)
}

function TNTstartTimer() {
    TNTtimerMechanics = setInterval(() => {
        if (TNTbeforeExplosion <= 0) TNTgameover()

        // GREAT TIMER function by EGORCHIK!
        // % - остаток от деления 
        TNTtimerFormat = `${Math.trunc(TNTbeforeExplosion / 60) > 9
            ? Math.trunc(TNTbeforeExplosion / 60)
            : '0' + Math.trunc(TNTbeforeExplosion / 60)}:${Math.trunc(TNTbeforeExplosion % 60) > 9
                ? Math.trunc(TNTbeforeExplosion % 60)
                : '0' + Math.trunc(TNTbeforeExplosion % 60)}`

        TNTtimer.textContent = TNTtimerFormat
        TNTbeforeExplosion--
    }, 1000) //1000 это одна секунда (в милискунда)
}
function TNTgameover() {
    TNTgameInfo.textContent = "B💥💥m!"
    clearInterval(TNTtimerMechanics)
    TNTgameTaskHint.textContent = `обезврежено :  ${scoreTNTGame} out of ${chooseTypeOrWrite.length} bombs`
    TNTgameTaskValue.textContent = `сделай скриншот и поделись с Винсентом`
    // TNTuserInput.value = `or 👇 deactivate more`
    TNTuserInput.value = `🧨 или обезвредь больше 🧨`
    TNTbuttonCompare.classList.add("none")
    TNTgameButtonStartAgain.classList.remove("none")
    TNTgameCounter.classList.add("none")
    TNTuserInput.classList.remove("underlinedText")
    // TNTgameTaskHint.innerHTML = `попробуй обезвредить все`

}

function compareTNTinput() {
    // console.log("ответ", value.eng)
    // console.log(TNTuserInput)

    if (TNTuserInput.value.toLowerCase() === value.eng.toLowerCase()) {

        //  scoreTNTGame += 1
        scoreTNTGame++
        TNTbeforeExplosion += 12
        TNTgameCounter.classList.remove("none")
        TNTuserInput.value = ""
        // typeOrWriteGameСounter.textContent = `верно:  ${scoreTNTGame} out of ${chooseTypeOrWrite.length}`
        // typeOrWriteGameСounter.classList.add("green")
        TNTgameTaskHint.innerHTML = `YES! + 12 seconds! Обезвреживай следующую, как переводится:`
        TNTgameTaskHint.classList.remove("red")
        TNTgameTaskHint.classList.add("green")
        tntGameNextWordToTranslate(TNTgameTaskValue)
        keySoundInputOk.play()
        TNTuserInput.classList.remove("underlinedText")
    }
    else {
        TNTgameTaskHint.classList.remove("green")
        TNTgameTaskHint.classList.remove("yellow")
        TNTgameTaskHint.classList.add("red")
        TNTuserInput.classList.add("underlinedText")

        TNTgameTaskHint.textContent = "не подходит... проверь ещё раз или отправь скриншот Винсенту"




    }

}


function tntGameNextWordToTranslate(TNTgameTaskValue) {
    typeOrWriteNumber = typeOrWriteNumber + 1
    value = chooseTypeOrWrite[typeOrWriteNumber]
    TNTgameButtonIDK.classList.remove("none")
    TNTgameButtonAnswer.classList.add("none")
    if (value) {
        TNTgameTaskValue.innerHTML = value.ru
    } else {
        clearInterval(TNTtimerMechanics)
        TNTgameTaskHint.classList.add("yellow")
        TNTgameInfo.textContent = "Времени осталось в запасе :"
        TNTgameTaskHint.textContent = "Super! Сделай скриншот и отправь to Vincent"
        TNTgameTaskValue.textContent = `I am the best agent`
        TNTuserInput.value = `deactivated all ${scoreTNTGame} bombs!`
        TNTbuttonCompare.classList.add("none")
        TNTgameButtonStartAgain.classList.remove("none")
    }
    // TNTgameTaskValue.classList.add("none")
    // TNTgameTaskHint.textContent = `вы перевели:  ${scoreTNTGame} из ${chooseTypeOrWrite.length}`
    TNTgameCounter.textContent = `обезврежено бомб:  ${scoreTNTGame}`
}


// TNTgameButtonStartAgain.addEventListener("click", pageReloadRefresh)
TNTgameButtonStartAgain.addEventListener("click", restartTNTgame)

TNTgameButtonIDK.addEventListener("click", showHintTNT)

function showHintTNT() {
    if (value.hint === undefined) {

        TNTgameTaskHint.textContent = "🤷‍♀️ здесь нечего подсказать 🤷‍♂️ пытайся как-то перевести"
        TNTgameTaskHint.classList.remove("red")
        TNTgameTaskHint.classList.remove("yellow")
        TNTgameTaskHint.classList.add("green")


    } else {
        // TNTgameTaskHint.textContent = "Okay , вот такая подсказка есть : " + value.hint
        TNTgameTaskHint.textContent = "Блин! Как бы тут подсказать-то : " + value.hint
        TNTgameTaskHint.classList.remove("red")
        TNTgameTaskHint.classList.remove("yellow")
        TNTgameTaskHint.classList.add("green")


    }
    TNTgameButtonAnswer.classList.remove("none")
    TNTgameButtonIDK.classList.add("none")
}

TNTgameButtonAnswer.addEventListener("click", showAnswerTNT)

function showAnswerTNT() {

    TNTgameButtonIDK.classList.remove("none")
    TNTgameButtonAnswer.classList.add("none")
    TNTgameTaskHint.classList.remove("green")
    TNTgameTaskHint.classList.remove("yellow")

    TNTgameTaskHint.textContent = "Скорее вписывай вот этот ответ: " + value.eng
    // TNTgameTaskHint.textContent = "- 5 секунд. PANIC !!! "
    // TNTgameTaskValue.textContent = value.ru + " Быстрее!!! Вводи ответ : " + value.eng
    // TNTgameTaskValue.textContent = " Быстрее!!! Вводи ответ : " + value.eng + " (" + value.ru + ")"
    TNTgameTaskValue.textContent = value.ru
    TNTbeforeExplosion -= 4

}


function restartTNTgame() {
    scoreTNTGame = 0
    typeOrWriteNumber = 0
    TNTbeforeExplosion = 53
    TNTgameInfo.textContent = "🧨 До взрыва осталось: 🧨"
    TNTuserInput.value = ""
    TNTgameTaskHint.textContent = "напиши по-английски:"
    TNTgameTaskValue.textContent = `сделай скриншот и поделись с Винсентом`

    TNTbuttonCompare.classList.remove("none")
    TNTgameButtonStartAgain.classList.add("none")
    TNTgameCounter.classList.remove("none")
    TNTgameTaskHint.classList.remove("red")
    TNTgameTaskHint.classList.add("green")


    chooseTypeOrWrite = chooseTypeOrWrite.sort(function () {
        return Math.random() - 0.5;
    });
    removeEventListener("keyup", handleKeyup)
    startGameTNT()

}



//новая игра про бомбу TNT выше



// scrambledGame ниже
// БЛИН! НАверное нужно это было делать отдельным файлом же!! А можно это перенести как мы делали с Квизом?

let scrambledTNTtimerMechanics
let scrambledTNTbeforeExplosion = 1
let scrambledTNTtimerFormat

const scrambledgameTNT = document.querySelector(".scrambledTNTgameContainer")
const scrambledstartGameTNTbutton = document.querySelector(".popupMissionsAndSets__scrambledstartGameTNT")
const scrambledTNTgameTaskValue = document.querySelector(".scrambledTNTgameTaskValue")
const scrambledTNTgameScrambledPhraseValue = document.querySelector(".scrambledTNTgameScrambledPhraseValue")

scrambledstartGameTNTbutton.addEventListener("click", scrambledstartGameTNT)




const scrambledTNTtimer = document.querySelector(".scrambledTNTtimer")
const scrambledTNTbuttonCompare = document.querySelector(".scrambledTNTgameButtonCompare")
const scrambledTNTgameButtonStartAgain = document.querySelector(".scrambledTNTgameButtonStartAgain")
const scrambledTNTuserInput = document.querySelector(".scrambledTNTgamePlayerInputType")
const scrambledTNTgameTaskHint = document.querySelector(".scrambledTNTgameTaskHint")
const scrambledTNTgameInfo = document.querySelector(".scrambledTNTgameInfo")
const scrambledTNTgameCounter = document.querySelector(".scrambledTNTgame-counter")
const scrambledTNTgameButtonIDK = document.querySelector(".scrambledTNTgameButtonIDK")
const scrambledTNTgameButtonAnswer = document.querySelector(".scrambledTNTgameButtonAnswer")

scrambledTNTbuttonCompare.addEventListener("click", scrambledcompareTNTinput)



// эта функция будет перемешивать буквы и создавать квадратики для каждой буквы
function scrambleWordFromArray() {
    value = chooseScrambledGame[scrambledtypeOrWriteNumber]


}

// сравниваем буквы
function compareLetters() {

}


function shuffle(array) {
    return array.sort(function () {
        return Math.random() - 0.5;
    });
}

function scrambleWords(scrambledWords) {

    // console.log('words',scrambledWords)
    // console.log('splitValue.Eng',value.eng.split(" "))
    // console.log('splitValue.Eng SHUFFLE',value.eng.split(" ").map(word => shuffle(word)))
    //тут хочется снова по переменным разбить, чтобы было понятно какое действие что делает.
    // я пытался добавить проверку, что если при перемешивании слова все таки случайно сложились в верный порядок, то чтобы он еще раз перемешал
    // например если    on foot = on foto, то он бы еще раз перемешал
    // devmode()
    return scrambledWords.split(" ").map(word => shuffle(word.split("")).join("")).join(" ")
    // так как поставили пробел он разделит не по буквам а по словам
    // разделяет строку на массив split

}

// function devmode() {
//     console.log("test")
//     let splittedWord = value.eng.split(" ")
//     let shuffledWord = shuffle(splittedWord.split("")) 
//     console.log(shuffledWord)
// }

function handleKeyup(event) {
    if (event.code === "Enter") {
        console.log(event.code);
        scrambledcompareTNTinput();
        compareTNTinput();
    }
    console.log(event.code);
    // выводит любую нажатую клавишу
}

function scrambledstartGameTNT() {
    scrambledTNTtimer.textContent = `00:${scrambledTNTbeforeExplosion}`
    popupMissionsAndSets.classList.add("none")
    gameTNT.classList.add("none")
    scrambledgameTNT.classList.remove("none")
    clickTest.classList.add("none")
    value = chooseScrambledGame[scrambledtypeOrWriteNumber]
    scrambledTNTgameTaskValue.textContent = value.ru
    scrambledTNTgameScrambledPhraseValue.textContent = scrambleWords(value.eng)

    // возвращаеем из функции переменшанные значения, которые мы в нее передали
    scrambledTNTgameCounter.classList.add("none")
    usedCheatsText.classList.remove("visible")
    clearInterval(scrambledTNTtimerMechanics)
    scrambledTNTstartTimer()
    scrambledTNTgameButtonIDK.classList.remove("none")
    scrambledTNTgameButtonAnswer.classList.add("none")
    scrambledTNTbuttonCompare.classList.remove("none")
    scrambledTNTbuttonCompare.classList.remove("none")
    scrambledTNTgameButtonStartAgain.classList.add("none")
    scrambledTNTtimer.classList.add("none")


    scrambleWordFromArray()

    addEventListener("keyup", handleKeyup)

}

function scrambledTNTstartTimer() {
    scrambledTNTtimerMechanics = setInterval(() => {
        if (scrambledTNTbeforeExplosion <= 0) scrambledTNTgameover()

        // GREAT TIMER function by EGORCHIK!
        // % - остаток от деления 
        scrambledTNTtimerFormat = `${Math.trunc(scrambledTNTbeforeExplosion / 60) > 9
            ? Math.trunc(scrambledTNTbeforeExplosion / 60)
            : '0' + Math.trunc(scrambledTNTbeforeExplosion / 60)}:${Math.trunc(scrambledTNTbeforeExplosion % 60) > 9
                ? Math.trunc(scrambledTNTbeforeExplosion % 60)
                : '0' + Math.trunc(scrambledTNTbeforeExplosion % 60)}`

        scrambledTNTtimer.textContent = scrambledTNTtimerFormat
        scrambledTNTbeforeExplosion++
    }, 1000) //1000 это одна секунда (в милискунда)
}
function scrambledTNTgameover() {
    scrambledTNTgameInfo.textContent = "B💥💥m!"
    clearInterval(scrambledTNTtimerMechanics)
    scrambledTNTgameTaskHint.textContent = `обезврежено :  ${scrambledscoreTNTGame} out of ${chooseScrambledGame.length} bombs`
    scrambledTNTgameTaskValue.textContent = `сделай скриншот и поделись с Винсентом`
    // TNTuserInput.value = `or 👇 deactivate more`
    scrambledTNTuserInput.value = `🧨 или обезвредь больше 🧨`
    scrambledTNTbuttonCompare.classList.add("none")
    scrambledTNTgameButtonStartAgain.classList.remove("none")
    scrambledTNTgameCounter.classList.add("none")
    scrambledTNTuserInput.classList.remove("underlinedText")
    // TNTgameTaskHint.innerHTML = `попробуй обезвредить все`

}

function scrambledcompareTNTinput() {
    // console.log("ответ", value.eng)
    // console.log(TNTuserInput)

    if (scrambledTNTuserInput.value.toLowerCase() === value.eng.toLowerCase()) {

        //  scoreTNTGame += 1
        scrambledscoreTNTGame++
        scrambledTNTbeforeExplosion += 12
        scrambledTNTgameCounter.classList.remove("none")
        scrambledTNTuserInput.value = ""
        // typeOrWriteGameСounter.textContent = `верно:  ${scoreTNTGame} out of ${chooseTypeOrWrite.length}`
        // typeOrWriteGameСounter.classList.add("green")
        scrambledTNTgameTaskHint.innerHTML = `YES! верно! Next word :`
        scrambledTNTgameTaskHint.classList.remove("red")
        scrambledTNTgameTaskHint.classList.add("green")
        scrambledtntGameNextWordToTranslate(scrambledTNTgameTaskValue)
        scrambledTNTgameScrambledPhraseValue.textContent = scrambleWords(value.eng)
        keySoundInputOk.play()
        scrambledTNTuserInput.classList.remove("underlinedText")
    }
    else {
        scrambledTNTgameTaskHint.classList.remove("green")
        scrambledTNTgameTaskHint.classList.remove("yellow")
        scrambledTNTgameTaskHint.classList.add("red")
        scrambledTNTuserInput.classList.add("underlinedText")

        scrambledTNTgameTaskHint.textContent = "не подходит... проверь ещё раз или отправь скриншот Винсенту"




    }

}


function scrambledtntGameNextWordToTranslate(scrambledTNTgameTaskValue) {
    scrambledtypeOrWriteNumber = scrambledtypeOrWriteNumber + 1
    value = chooseScrambledGame[scrambledtypeOrWriteNumber]
    scrambledTNTgameButtonIDK.classList.remove("none")
    scrambledTNTgameButtonAnswer.classList.add("none")
    if (value) {
        scrambledTNTgameTaskValue.innerHTML = value.ru
    } else {
        clearInterval(scrambledTNTtimerMechanics)
        scrambledTNTgameTaskHint.classList.add("yellow")
        scrambledTNTgameInfo.textContent = "Времени осталось в запасе :"
        scrambledTNTgameTaskHint.textContent = "Super! Сделай скриншот и отправь to Vincent"
        scrambledTNTgameTaskValue.textContent = `I am the best agent`
        scrambledTNTuserInput.value = `гордись мной, училка!`
        scrambledTNTbuttonCompare.classList.add("none")
        scrambledTNTgameButtonStartAgain.classList.remove("none")
    }
    // TNTgameTaskValue.classList.add("none")
    // TNTgameTaskHint.textContent = `вы перевели:  ${scoreTNTGame} из ${chooseTypeOrWrite.length}`
    scrambledTNTgameCounter.textContent = `распутано слов:  ${scrambledscoreTNTGame} `

}


// TNTgameButtonStartAgain.addEventListener("click", pageReloadRefresh)
scrambledTNTgameButtonStartAgain.addEventListener("click", scrambledrestartTNTgame)

scrambledTNTgameButtonIDK.addEventListener("click", scrambledshowHintTNT)

function scrambledshowHintTNT() {
    if (value.hint === undefined) {

        scrambledTNTgameTaskHint.textContent = "🤷‍♀️ здесь нечего подсказать 🤷‍♂️ пытайся как-то перевести"
        scrambledTNTgameTaskHint.classList.remove("red")
        scrambledTNTgameTaskHint.classList.remove("yellow")
        scrambledTNTgameTaskHint.classList.add("green")


    } else {
        // TNTgameTaskHint.textContent = "Okay , вот такая подсказка есть : " + value.hint
        // scrambledTNTgameTaskHint.textContent = "Блин! Как бы тут подсказать-то : " + value.hint
        scrambledTNTgameTaskValue.textContent = "/ " + value.hint + " /"
        scrambledTNTgameTaskHint.classList.remove("red")
        scrambledTNTgameTaskHint.classList.remove("yellow")
        scrambledTNTgameTaskHint.classList.add("green")


    }
    scrambledTNTgameButtonAnswer.classList.remove("none")
    scrambledTNTgameButtonIDK.classList.add("none")
}

scrambledTNTgameButtonAnswer.addEventListener("click", scrambledshowAnswerTNT)

function scrambledshowAnswerTNT() {

    scrambledTNTgameButtonIDK.classList.remove("none")
    scrambledTNTgameButtonAnswer.classList.add("none")
    scrambledTNTgameTaskHint.classList.remove("green")
    scrambledTNTgameTaskHint.classList.remove("yellow")

    scrambledTNTgameTaskHint.textContent = "вот ответ : " + value.eng
    // TNTgameTaskHint.textContent = "- 5 секунд. PANIC !!! "
    // TNTgameTaskValue.textContent = value.ru + " Быстрее!!! Вводи ответ : " + value.eng
    // TNTgameTaskValue.textContent = " Быстрее!!! Вводи ответ : " + value.eng + " (" + value.ru + ")"
    scrambledTNTgameTaskValue.textContent = value.ru
    scrambledTNTbeforeExplosion -= 4

}


function scrambledrestartTNTgame() {
    scrambledscoreTNTGame = 0
    scrambledtypeOrWriteNumber = 0
    // scrambledTNTbeforeExplosion = 0
    scrambledTNTgameInfo.textContent = "времени прошло : 🧨"
    scrambledTNTuserInput.value = ""
    scrambledTNTgameTaskHint.textContent = "расшифруй это"
    scrambledTNTgameTaskValue.textContent = `сделай скриншот и поделись с Винсентом`

    scrambledTNTbuttonCompare.classList.remove("none")
    scrambledTNTgameButtonStartAgain.classList.add("none")
    scrambledTNTgameCounter.classList.remove("none")
    scrambledTNTgameTaskHint.classList.remove("red")
    scrambledTNTgameTaskHint.classList.add("green")


    chooseScrambledGame = chooseScrambledGame.sort(function () {
        return Math.random() - 0.5;
    });
    removeEventListener("keyup", handleKeyup)

    scrambledstartGameTNT()

}



// scrambledGame выше


// функция перезагрузка страницы
function pageReloadRefresh() {
    location.reload()
}

// скроллинг и прокрутка (уточнить, проверить нужно ли это вообще теперь)
const scrollLeft = document.querySelector(".scroll-left")
const scrollRight = document.querySelector(".scroll-right")

function scroll(direction) {
    popupMissionsAndSetsSets.scrollBy(direction, 0)
}

if (isTouch()) {
    scrollLeft.addEventListener("touchstart", () => {
        interval = setInterval(() => {
            scroll(-2)
        }, 0);
    })
    scrollLeft.addEventListener("touchend", () => {
        clearInterval(interval)
    })
    scrollRight.addEventListener("touchstart", () => {
        interval = setInterval(() => {
            scroll(2)
        }, 0);
    })
    scrollRight.addEventListener("touchend", () => {
        clearInterval(interval)
    })
} else {
    scrollLeft.addEventListener("mouseup", () => {
        clearInterval(interval)
    })
    scrollLeft.addEventListener("mousedown", () => {
        interval = setInterval(() => {
            scroll(-2)
        }, 0);
    })
    scrollLeft.addEventListener("mouseout", () => {
        clearInterval(interval)
    })
    scrollRight.addEventListener("mousedown", () => {
        interval = setInterval(() => {
            scroll(2)
        }, 0);
    })
    scrollRight.addEventListener("mouseup", () => {
        clearInterval(interval)
    })
    scrollRight.addEventListener("mouseout", () => {
        clearInterval(interval)
    })
}
// выше скроллинг и прокрутка (уточнить, проверить нужно ли это вообще теперь)





// новая игра ниже все для игры two decks ниже все для игры two decks ниже все для игры two decks ниже все для игры two decks ниже все для игры two decks 

// clickTest.addEventListener("click",startGameTwoDecks())
function startGameTwoDecks() {
    mainContainerIntroAnd2games.classList.add("none")
    gameBender.classList.add("none")
    gameTrickyQuiz.classList.add("none")
    mainContainer5gameTwoCardDecks.classList.remove("none")
    new gameTwoDecks({ gameTwoCardDecks: gameTwoDecksListData[currentSet] })
}

// новая игра выше все для игры two decks



const resetPageButton = document.querySelector(".resetPage")

resetPageButton.addEventListener("click", pageReloadRefresh)



// пока не работают идеи ниже уточнить пока не работают идеи ниже уточнить пока не работают идеи ниже уточнить ока не работают идеи ниже уточнить

const backTomainContainerIntroAnd2gamesbutton = document.querySelector(".backTomainContainerIntroAnd2gamesbutton")


function backToChoosingTheTask() {
    mainContainerIntroAnd2games.classList.remove("none")
    gameBender.classList.add("none")
    userSearchesForMission.classList.add("none")
    // popupMissionsAndSetsSets.classList.add("hide")
    gameTrickyQuiz.classList.add("none")
    // console.log("hi")
}






//ниже все, что связано с аудио, не все работает, уточнить

// const MusicFromGoogleDriveDefault = new Audio("https://drive.google.com/file/d/1YlPN33KcfXRkw2BgHnNZVeb2z7NkiZKP/view?usp=sharing"); 
// уточнить пока не понятно как сделать так чтобы можно было константе присваивать трек разный в java
const keySoundInput = new Audio("https://zvukitop.com/wp-content/uploads/2021/01/najatie-na-klaviaturu-iphone.mp3");
keySoundInput.volume = 0.08
const keySoundInputOk = new Audio("https://zvukitop.com/wp-content/uploads/2021/01/zvuk-oplaty-apple-pay.mp3");
// const audioIconOnOffTrack = document.querySelector(".audioIconOnOffTrack")
const audioIcon = document.querySelector(".audioIcon")
const audioIconOnOff = document.querySelector(".audioIconOnOff")
const missionMusicBackgroundIconButton = document.querySelector(".missionMusicBackgroundIconButton")
const helloMusicStartButton = document.querySelector(".helloMusicStartButton")
const audio = document.querySelector(".audio")
const missionMusicBackground = document.querySelector(".missionMusicBackground")
// const audioTest = new Audio("https://zvukitop.com/wp-content/uploads/2021/01/hello-zvuk-111.mp3");
const audioTest = new Audio("./audio/SantaB1.mp3");
// const audioTest = document.querySelector(".audio")
// const audiomissionMusicBackground = new Audio("https://audio.jukehost.co.uk/wDqy560srBF4ZvgkwI8wAqNcgK9I0cW0");

function helloMusicStartButtonInvisible() {
    // const audiomissionMusicBackground = new Audio("https://zvukitop.com/wp-content/uploads/2021/01/hello-zvuk-111.mp3");
    audiomissionMusicBackground.volume = 0.4;
    audiomissionMusicBackground.play()
    audiomissionMusicBackground.loop = false;
    helloMusicStartButton.classList.add("invisible")
    audioIconOnOff.classList.add("visible")
    // wtf пока не понятно как сделать так чтобы можно было константе присваивать трек разный в java
    // audioIconOnOffTrack = new Audio("https://zvukitop.com/wp-content/uploads/2021/01/hello-zvuk-111.mp3");
    // missionMusicBackgroundIconButton.classList.add("off")
}


const audioIconOnOffTrack = new Audio("https://audio.jukehost.co.uk/JHNeJtC076ydQwBp3vBmLGiMTMpExydO");

// helloMusicStartButton.addEventListener("click", helloMusicStartButtonInvisible)

audioIconOnOffTrack.loop = false;

audioIconOnOff.addEventListener("click", () => {
    audioIconOnOff.classList.toggle("off")
    audiomissionMusicBackground.pause()
    if (audioIconOnOffTrack.volume == 0) {
        audioIconOnOffTrack.volume = 0.4
        audioIconOnOffTrack.play()
    } else {
        audioIconOnOffTrack.volume = 0
        audioIconOnOffTrack.pause()
    }
})

function chooseSong(set) {
    // const song = playList[set]
    // if (!!song) {
    //     audio.src = song;
    //     console.log(audio.paused,song);
    //     audio.play()
    //  console.log("проверка")
    const MissionSong = playList[set]
    audio.src = MissionSong
    // }
}

audioIcon.addEventListener("click", audioOnOff)
function audioOnOff() {
    audioIcon.classList.toggle("off")
    // audio.classList.add("off") музыка выключается не через стили
    audio.play()
    audio.loop = true;
    if (audio.volume == 0) {
        audio.volume = 0.7
    } else {
        audio.volume = 0
    }
}

// function GoogleDriveMusicCheck() {
//     MusicFromGoogleDriveDefault.play()
// }

missionMusicBackgroundIconButton.addEventListener("click", missionBackgroundMusicOnOff)
function missionBackgroundMusicOnOff() {
    missionMusicBackgroundIconButton.classList.toggle("off")
    // audio.classList.add("off") музыка выключается не через стили
    missionMusicBackground.play()
    missionMusicBackground.loop = true;
    if (missionMusicBackground.volume == 0) {
        missionMusicBackground.volume = 0.7
    } else {
        missionMusicBackground.volume = 0
    }
}
// выше все, что связано с музыкой и аудио



// заметки мои:

// быстрая проверка от Мохиндерсюрэж
// alert(1) 
// alert("чёт не то =) ") 


// Мохиндэр explained!

// function calcPlus(x, y) {
//     console.log(x + y)
//     return x + y
// }
// console.log(calcPlus(15, 20))

// пометки слева красный кружок
