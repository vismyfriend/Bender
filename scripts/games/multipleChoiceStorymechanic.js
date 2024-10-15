export class multipleChoiceStorymechanic {
    constructor(data) {
        this.multipleChoiceStoryData = data.multipleChoiceStoryData
        this.rules = document.querySelector(".multipleChoiceStoryrules")
        this.rules.textContent = `если вы видите эту надпись, то огого`
        this.rules.classList.remove("yellow")
        console.log(data.multipleChoiceStoryData)
        
        
        // новая механика
        // новая механика
        
        // document.getElementById("startMultipleChoiceGameButton").addEventListener("click", function() => {
        document.getElementById("startMultipleChoiceGameButton").addEventListener("click", () => {
            this.exerciseArea = document.getElementById("multiple-choice-area");
            this.exerciseImage = document.getElementById("multiple-choice-image");
            this.resultImage = document.getElementById("multiple-choice-result-image");
            console.log("работает вроде")
            console.log(data.multipleChoiceStoryData)
            this.exercise = this.multipleChoiceStoryData[0]; 
            this.startButton = document.getElementById("startMultipleChoiceGameButton");
            startButton.style.display = 'none';
        
            if (exerciseImage) {
                exerciseImage.style.display = 'none';
            }
        
            exerciseArea.innerHTML = "";
        
            // Split the text into parts where the blanks are located
            this.parts = exercise.text.split("___");
        
            // Create the exercise with inline multiple-choice options
            parts.forEach((part, i) => {
                exerciseArea.innerHTML += part; // Add text part
        
                if (i < exercise.options.length) { // Add options if they exist
                    this.span = document.createElement("span");
                    span.classList.add("multiple-choice");
        
                    exercise.options[i].forEach(option => {
                        this.label = document.createElement("label");
                        label.style.marginRight = "10px"; // Add some space between options
                        this.radio = document.createElement("input");
                        radio.type = "radio";
                        radio.name = `question${i}`; // Ensure only one option can be selected per question
                        radio.value = option;
                        label.appendChild(radio);
                        label.appendChild(document.createTextNode(option));
                        span.appendChild(label);
                    });
        
                    exerciseArea.appendChild(span); // Append options inline within the sentence
                }
            });
        
            // Add a submit button for checking answers
            this.submitCheckMyAnswersButton = document.createElement("button");
            submitCheckMyAnswersButton.textContent = "Check my Answers";
            submitCheckMyAnswersButton.classList.add("submitCheckMyAnswers-button");
        
            // submitCheckMyAnswersButton.addEventListener("click", function () {
            submitCheckMyAnswersButton.addEventListener("click", () => {
                this.questions = exerciseArea.querySelectorAll(".multiple-choice");
                let correctCount = 0;
                let incorrectCount = 0;
        
                // Remove previous result display
                this.existingResult = exerciseArea.querySelector(".result");
                if (existingResult) {
                    existingResult.remove();
                }
        
                // Check answers
                questions.forEach((questionDiv, i) => {
                    this.selectedOption = questionDiv.querySelector("input[type='radio']:checked");
                    this.correctAnswer = exercise.correctAnswers[i];
        
                    if (selectedOption && selectedOption.value === correctAnswer) {
                        selectedOption.classList.add("correct");
                        correctCount++;
                    } else if (selectedOption) {
                        selectedOption.classList.add("incorrect");
                        incorrectCount++;
                    }
                });
        
                // Display the result
                this.resultDiv = document.createElement("div");
                resultDiv.classList.add("result");
                resultDiv.innerHTML = `Correct answers: ${correctCount}<br>Incorrect answers: ${incorrectCount}`;
        
                exerciseArea.appendChild(resultDiv);
        
                // Show the result image
                if (resultImage) {
                    resultImage.style.display = 'block'; // Make the result image visible
                }
            });
        
            exerciseArea.appendChild(submitCheckMyAnswersButton);
        });
        
        // новая механика
        // новая механика
        
    
    }
}