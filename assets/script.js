const Start = document.getElementById("startbtn")
const QuestionContainer = document.getElementById("Quiz")
const questionEl = document.getElementById("question")
const answerbtn= document.getElementById("answersbtn")
var Timer = document.getElementById(timer)
var TimerI;
var Timeleft= 60;
let shuffledQ, currentQIndex






//functions
Start.addEventListener("click", StartQ)
function StartQ(){
Start.classList.add("hide")
QuestionContainer.classList.remove("hide")
shuffledQ = questions.sort(() => Math.random() - .5)
currentQIndex = 0

SetN()
console.log("This function is running")
TimerI = setInterval(function() {
Timeleft
Timer.textCo = + Timeleft;
    if(timeLeft === 0){
    clearInterval(TimerI)
    showScore();
    }
}, 1000);
}




function SetN() {
showQ(shuffledQ[currentQIndex])

}



function showQ() {
    if (currentQIndex === final)
    var current = quizQuestions[currentQIndex];
    questionsEl.innerHtml= currentQ
}






function ClickedAnswer(answers) {
const Clickedbtn = e.target
const correct = selectedButton.dataset.correct
setclass(document.body, correct)
Array.from(answerbtn.children)
}



//Questions
    const questions = [{
        question: "Hello1",
        answers: [
            {text: "hi", correct: true},
            {text: "hey", Incorrect: false},
            {text: "Bye", Incorrenct: false},
            {text: "no", Incorrect: false},
        ],
        question: "Hello2",
        answers: [
            {text: "a", correct: true},
            {text: "b", Incorrect: false},
            {text: "c", Incorrenct: false},
            {text: "d", Incorrect: false},
        ]
    },
   
    
    ]