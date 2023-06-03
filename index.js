import { test } from "./utils/sentences.js"
const word = document.querySelector(".template").content.querySelector(".word")
const wordsContainer = document.querySelector(".words")
const inputSentence = document.querySelector(".input-sentence")
const hint = document.querySelector(".hint")
const deleteword = document.querySelector(".delete")
const russianHint = document.querySelector(".hint-input")
const cheat = document.querySelector(".cheat")
const containerMistake = document.querySelector(".container-mistake")
const correctAnswer = document.querySelector(".sentence-correct")
const userAnswer = document.querySelector(".user-answer")
const russianHintMistake = document.querySelector(".russian-hint")
const fair = document.querySelector(".fair")
const unfair = document.querySelector(".unfair")
const screenshot = document.querySelector(".screenshot")
const lives = document.querySelector(".lives")
const points = document.querySelector(".correct-counter")
let score = 0
let life = 5
// уменьшая жизни принудительно изменить width
let n = -1
function renderWords() {
    n = n + 1
    // console.log(life)
    const sentence = test[n].eng
    // функция будет принимать предложение и перемешивать слова в нем
    let shuffleSentence = sentence.split(' ').sort(function () {
        return Math.random() - 0.5;
    });
    shuffleSentence.forEach(element => {
        const cloneWord = word.cloneNode(true)
        cloneWord.textContent = element
        cloneWord.addEventListener("click", () => {
            if (cloneWord.classList.contains("pressed")) {
                cloneWord.classList.remove("pressed")
                inputSentence.textContent = inputSentence.textContent.replace(" " + element, "")
                console.log(inputSentence.textContent.length)
            } else {

                cloneWord.classList.add("pressed")
                    inputSentence.textContent += " " + element
                if (inputSentence.textContent.length === sentence.length + 1) {
                    if (inputSentence.textContent === " " + sentence) {
                        // console.log("ok")
                        score += 1
                        // score = score + 1
                        points.textContent = `верно: ${score}`
                        nextSentence()

                    } else {
                        russianHintMistake.textContent = test[n].ru
                        correctAnswer.textContent = sentence
                        userAnswer.textContent = inputSentence.textContent
                        containerMistake.classList.add("show")
                        life = life - 1
                        lives.style.width = `${life * 31}px`
                        unfair.disabled = false
                        screenshot.classList.add("hide")
                        // Снова математика от Эндрю
                        // Тут Великий Эндрю спрашивает у Величайшего гугла как задавать стили через java
                    }
                }
            }

        })
        // финальная команда функции
        wordsContainer.prepend(cloneWord)

    });


}
function gameOver() {
    inputSentence.textContent = `Вы набрали ${score}`

}
function nextSentence() {
    wordsContainer.innerHTML = ""
    inputSentence.textContent = ""
    if (n === test.length - 1) {
        gameOver()

    } else {
        renderWords()
    }
}
unfair.addEventListener("click", () => {
    screenshot.classList.remove("hide")
    life = life + 1
    lives.style.width = `${life * 31}px`
    unfair.disabled = true


})
fair.addEventListener("click", () => {
    containerMistake.classList.remove("show")
    if (life === 0) {
        gameOver()
    } else {
        nextSentence()
    }
})
hint.addEventListener("click", () => {
    russianHint.textContent = test[n].ru
})
cheat.addEventListener("click", () => {
    russianHint.textContent = test[n].eng
    setTimeout(() => {
        russianHint.textContent = ""
    }, 4000)
    // милисекунды 
})


renderWords() 