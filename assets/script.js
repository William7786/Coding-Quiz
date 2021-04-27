var QuizC = document.getElementById("container")
var Start = document.getElementById("startbtn")
var h1 = document.getElementById("h1")
var quiz = document.getElementById("Quiz");
var Yourscore = document.getElementById("SavedHighScores")
var questionsEl = document.getElementById("question");
var Timer = document.getElementById("timer");
var choiceA = document.getElementById("a")
var choiceB = document.getElementById("b")
var choiceC = document.getElementById("c")
var choiceD = document.getElementById("d")
var result = document.getElementById("Yourscore")
var end = document.getElementById("End")



//functions
Start.addEventListener("click", StartQ)
function StartQ(){
QuizQ();
Start.classList.add("hide")
quiz.classList.remove("hide")
h1.classList.add("hide")
Yourscore.classList.add("hide")
console.log("This function is running")
timerInterval = setInterval(function() {
    TimeLeft--;
    Timer.textContent = "Time: " + TimeLeft;
    if(TimeLeft === 0) {
      clearInterval(timerInterval);
      results();
    }
  }, 1000);
}

function QuizQ() {
var currentQuestion = questions[currentQuestionIndex];
questionsEl.innerHTML =  "<p>" + currentQuestion.question + "</p>"
choiceA.innerHTML = currentQuestion.texta;
choiceB.innerHTML = currentQuestion.textb;
choiceC.innerHTML = currentQuestion.textc;
choiceD.innerHTML = currentQuestion.textd;

}
//Questions
    var questions = [{
        question: "How hard is javascript?",
        texta: "easy", 
        textb: "increadibly easy", 
        textc: "confusing", 
        textd: "kindof",
        correct:"c"},
        
        {question: "What color is the Javascript logo?",
        texta: "purple",
        textb: "yellow",
        textc: "orange",
        textd: "Bright Blue",
        correct:"b"},

        {question: "What is css used for?",
        texta: "Styling",
        textb: "Text Content",
        textc: "Scripts",
        textd: "What is css?",
        correct:"a"},

        {question: "How old is Html?",
        texta:"40 Years",
        textb:"55 Years",
        textc:"10 Years",
        textd: "28 Years",
        correct: "d"},

        {question: "Which is your favorite?",
        texta:"css",
        textb:"html",
        textc:"Javascript",
        textd: "bootstrap",
        correct: "a",
        correct: "b",
        correct: "c",
        correct: "d",
        }

    ];


function check(answer){
    correct = questions[currentQuestionIndex].correct;
    if (answer === correct && currentQuestionIndex !==fQI) {
    confirm("Correct!");
    currentQuestionIndex++;
    QuizQ();
    }
    if ( answer !== correct){
    confirm("Incorrect! -5 seconds")
    currentQuestionIndex++;
    TimeLeft -= 5;
    QuizQ();
    }
    

        
};
function results() {
if (TimeLeft===0) {
quiz.classList.add("hide")
end.classList.remove("hide")   
Yourscore.classList.remove("hide")
}
if (TimeLeft<0) {
    quiz.classList.add("hide")
    end.classList.remove("hide")   
    Yourscore.classList.remove("hide")
    }
if(fQI){
quiz.classList.add("hide")
end.classList.remove("hide")
Yourscore.classList.remove("hide")
}


}

var fQI = questions.length;
var currentQuestionIndex = 0;
var TimeLeft = 30;
var timer;
 var correct;



    