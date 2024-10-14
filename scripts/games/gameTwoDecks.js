export class gameTwoDecks {
    // методы (те же функции только внутри класса)
    constructor(data) {
        this.gameTwoCardDecks = data.gameTwoCardDecks

        this.silcedQuestions = null



        this.gameTwoCardDecksButtons = document.querySelector(".gameTwoCardDecksButtons")
        this.gameTwoCardDecks = document.querySelector(".gameTwoCardDecks")
        this.gameTwoCardDecksText = document.querySelector(".gameTwoCardDecksText")
        this.gameTwoCardDecksPrevious = document.querySelector(".gameTwoCardDecksPrevious")
        this.gameTwoCardDecksCheck = document.querySelector(".gameTwoCardDecksCheck")
        this.gameTwoCardDecksNext = document.querySelector(".gameTwoCardDecksNext")
        this.gameTwoCardDecksSwitch = document.querySelector(".gameTwoCardDecksSwitch")
        this.cardForSpeakingGame = document.querySelector(".oneDeckOfCardsX_cardForSpeakingGame")
        this.topOfTheCard1Value = this.cardForSpeakingGame.querySelector(".oneDeckOfCardsX__topOfTheCard1Value")
        this.bottomOfTheCard1Value = this.cardForSpeakingGame.querySelector(".oneDeckOfCardsX__bottomOfTheCard1Value")



        this.chooseQuestions = null
        this.questionNumber = 0
        this.value = null
    }


    shuffleDecks() {
        this.chooseQuestions = this.chooseQuestions.sort(function () {
            return Math.random() - 0.5;
        });
        this.questionNumber = 0
        this.cardForSpeakingGame.classList.remove("AnOpenCard")
        this.cardForSpeakingGame.style.border = 'none';
        switchPlayerInCardGameQuestions1()
    }
   
    getquestions() {
        
        if (this.questionNumber <  this.chooseQuestions.length) {
            this.cardForSpeakingGame.classList.remove("AnOpenCard")
            setTimeout(function () { cardForSpeakingGame.classList.add("AnOpenCard") }, 0);
            this.value =  this.chooseQuestions[this.questionNumber]
            this.bottomOfTheCard1Value.classList.remove("Unblur")
            this.topOfTheCard1Value.textContent = languageRu ?  this.value.ru :  this.value.eng
            this.bottomOfTheCard1Value.textContent = languageRu ?  this.value.eng :  this.value.ru
            this.cardForSpeakingGame.style.border = "solid 4px rgb(123, 207, 255)";
            this.questionNumber = this.questionNumber + 1
            // oneDeckButtonText.classList.remove("visible")
            this.oneDeckButtonText.textContent = "Быстро спросили, чётко ответили. Автоматизм практикуем, не тормозим, помогаем друг другу"

         

        } else {
            this.cardForSpeakingGame.classList.remove("AnOpenCard")
            this.cardForSpeakingGame.style.border = 'none';
            shuffleDecks()
        }
    }



    previousQuestion() {
                this.questionNumber = this.questionNumber - 2
        getquestions()
    }


}