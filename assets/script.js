var QuizC = document.getElementById("container")
var Start = document.getElementById("startbtn")
var quiz = document.getElementById("Quiz");
var questionsEl = document.getElementById("question");
var Timer = document.getElementById("timer");
var buttonA1 = document.getElementById("btn1")
var buttonA1 = document.getElementById("btn2")
var buttonA1 = document.getElementById("btn3")
var buttonA1 = document.getElementById("btn4")
var results = document.getElementById("Yourscore")
var end = document.getElementById("End")

// var fQI = quizQuestions.length;
var CQI = 0;
var TimeLeft = 60;
var timer;







//functions
Start.addEventListener("click", StartQ)
function StartQ(){
Start.classList.add("hide")
quiz.classList.remove("hide")
console.log("This function is running")

timerInterval = setInterval(function() {
    
    TimeLeft--;
    Timer.textContent = "Time: " + TimeLeft;

    if(TimeLeft === 0) {
      clearInterval(timerInterval);
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