export class QuizQ {
    // методы (те же функции только внутри класса)
    constructor(data) {
        this.quizAllQuestions = data.quizAllQuestions
        this.silcedQuestions = null
        this.task = document.querySelector(".gameTrickyQuizTask")
        this.rules = document.querySelector(".gameTrickyQuizRules")
        this.AnswersButtonsContainer = document.querySelector(".gameTrickyQuizAnswersButtons")
        this.buttonTryAgainOneMoreTime = document.querySelector(".areAmIsQuizOneButtonOne")
        this.logoRedCap = document.querySelector(".redCap")
        this.QuizgameTheNameOfTheChosenSet = document.querySelector(".popupMissionsAndSets__chosen-set")
        this.currentIndex = 0
        this.scoreCounter = 0
        this.mistakesCounter = 0
        this.startGame()
        this.anotherVariantMultipleChoiceQuiz()
        this.logoRedCap.classList.add("none")
        this.rules.textContent = `Это хитренький кВИз от ВИнсента. It is a tricky quiz from #vismyfriend. Читайте вслух и нажимайте на правильный ответ.`
        this.rules.classList.remove("yellow")
        this.buttonTryAgainOneMoreTime.classList.add("none")


    }

    // /поэтому тут не нужно писать function
    shuffle(array) {
        return array.sort(function () {
            return Math.random() - 0.5;
        });
    }

    silceArray(array) {
        this.silcedQuestions = array.slice(0, 10) //количество вопросов в тесте
        // 0 - c какого элемента и до какого 10 )
    }

    startGame() {
        this.silceArray(this.shuffle(this.quizAllQuestions))
        this.showTheTask(this.quizAllQuestions[this.currentIndex])
        this.AnswersButtonsContainer.classList.remove("none")
        this.task.classList.remove("none")


        this.QuizTimerMechanics
        this.timerResult = 0
        this.QuizTimerFormat
        clearInterval(this.QuizTimerMechanics)
        this.quizStartTimer()

    }
    quizStartTimer() {
    this.QuizTimerMechanics = setInterval(() => {
        
        this.QuizTimerFormat = `${Math.trunc(this.timerResult / 60) > 9
            ? Math.trunc(this.timerResult / 60)
            : '0' + Math.trunc(this.timerResult / 60)}:${Math.trunc(this.timerResult % 60) > 9
                ? Math.trunc(this.timerResult % 60)
                : '0' + Math.trunc(this.timerResult % 60)}`

                
                this.timerResult++
                console.log(this.QuizTimerFormat)
    }, 1000) //1000 это одна секунда (в милискунда)
    }

    showTheTask(data) {
        this.task.textContent = data.quizQuestion
        const shuffeledAnswers = this.shuffle(data.answers)
        this.AnswersButtonsContainer.innerHTML = ""
        shuffeledAnswers.map((answer, index) => {
            // можно было не передавать индекс
            const button = this.createButton(answer)
            this.AnswersButtonsContainer.append(button)
        })
    }

    createButton(data) {
        const button = document.createElement("button")
        button.classList.add("gameTrickyQuizButton")
        button.textContent = data.answer
        this.setEventListener(button, data.correct)
        return button
    }

    timeOut(button, time, deletedClass) {
        return new Promise((resolve) => {
            this.AnswersButtonsContainer.classList.add("blockedForSomeTime")
            setTimeout(() => {
                button.classList.remove(deletedClass)
                this.AnswersButtonsContainer.classList.remove("blockedForSomeTime")
                resolve()
            }, time)
        })
    }

    // if (currentIndex === this.slicedQestion.length && !correct) return
    setEventListener(button, correct) {
        button.addEventListener("click", async () => {
            if (!correct) {
                this.mistakesCounter += 1
                console.log("неверных ответов", this.mistakesCounter)
                console.log("верных ответов", this.scoreCounter)
                button.classList.add("wrong")
                await this.timeOut(button, 1000, "wrong")
                this.silcedQuestions.push(this.silcedQuestions[this.currentIndex])
            } else {
                this.scoreCounter += 1
                button.classList.add("correct")
                await this.timeOut(button, 700, "correct")
                // console.log("название миссии=", this.QuizgameTheNameOfTheChosenSet.textContent)
            }

            this.currentIndex += 1

            if (this.currentIndex >= this.silcedQuestions.length) { //когда че там//
                this.scoreCounter += 1
                //    вот здесь (или в самой функции game over) нужна еще одна проверка - а то иначе он всегда верным засчитывает последний ответ, даже если там ошибка
                this.gameOver()
                button.classList.add("correct")
                // await this.timeOut(button, 25000, "correct")
                await this.timeOut(button, 700, "correct")
                return
            }

            this.showTheTask(this.silcedQuestions[this.currentIndex])
        })
    }

    gameOver() {
        
        this.rules.textContent = ` 🏆 Один из вариантов пройден! 🏆 результат: ${this.QuizTimerFormat}  Сделай скриншот и отправь в наш чат. Vincent, я тренировал ${this.QuizgameTheNameOfTheChosenSet.textContent} и случайно не туда ткнул : ${this.mistakesCounter} раз(а)`
        this.buttonTryAgainOneMoreTime.classList.remove("none")
        this.rules.classList.add("yellow")
        this.AnswersButtonsContainer.classList.add("none")
        this.task.classList.add("none")
        this.logoRedCap.classList.remove("none")
        clearInterval(this.QuizTimerMechanics)
    }

    stopTimer() {
        clearInterval(this.QuizTimerMechanics)
    }

    anotherVariantMultipleChoiceQuiz() {
        this.buttonTryAgainOneMoreTime.addEventListener("click", () => {
            this.rules.textContent = `Всего 10 вопросов. Only 10 questions. Читай всё английское вслух.`
            this.buttonTryAgainOneMoreTime.classList.add("none")
            this.rules.classList.remove("yellow")
            this.rules.classList.add("green")
            this.currentIndex = 0
            this.scoreCounter = 0
            this.mistakesCounter = 0
            this.startGame()
            this.logoRedCap.classList.add("none")
        })
    }
}