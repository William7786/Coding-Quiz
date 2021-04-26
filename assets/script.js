var Start = document.getElementById("Start")
var quiz = document.getElementById("Quiz");
var questionsEl = document.getElementById(question);
var Timer = document.getElementById(timer);
var buttonA1 = document.getElementById("btn1")
var buttonA1 = document.getElementById("btn2")
var buttonA1 = document.getElementById("btn3")
var buttonA1 = document.getElementById("btn4")
var results = document.getElementById("Yourscore")
var end = document.getElementById("End")
var fQI = quizQuestions.length;
var CQI = 0;
var Timeleft = 60;
var TimeI;







//functions
Start.addEventListener("click", StartQ)
function StartQ(){
Start.classList.add("hide")
quiz.classList.remove("hide")
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