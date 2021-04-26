var QuizC = document.getElementById("container")
var Start = document.getElementById("startbtn")
var quiz = document.getElementById("Quiz");
var questionsEl = document.getElementById("question");
var Timer = document.getElementById("timer");
var choiceA = document.getElementById("a")
var choiceB = document.getElementById("b")
var choiceC = document.getElementById("c")
var choiceD = document.getElementById("d")
var results = document.getElementById("Yourscore")
var end = document.getElementById("End")



//functions
Start.addEventListener("click", StartQ)
function StartQ(){
QuizQ();
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

function QuizQ() {
var currentQuestion = questions[currentQuestionIndex];
questionsEl.innerHTML =  "<p>" + currentQuestion.question + "</p>"
choiceA.innerHTML = currentQuestion.texta;
choiceB.innerHTML = currentQuestion.textb;
choiceC.innerHTML = currentQuestion.textc;
choiceD.innerHTML = currentQuestion.tectd;
}


function check(answer){
    correct = questions[currentQuestionIndex].correct;
    if (answer === correct ) {
    score++
    currentQuestionIndex++
    QuizQ()
    }else( answer !== correct)
    TimeLeft--;
    
   
        
};

//Questions
    var questions = [{
        question: "Hello1",
        texta: "hi", 
        textb: "hey", 
        textc: "Bye",
        textd: "no", 
        correctAnswer:"btn3"},
        
        {question: "Hello2",
        texta:"no",
        textb:"yes",
        textc:"maybe",
        textd: "maybenot",
        correctAnswer: "btn2"},

        {question: "Hello3",
        texta:"no",
        textb:"yes",
        textc:"maybe",
        textd: "maybenot",
        correctAnswer: "btn2"},

        {question: "Hello4",
        texta:"no",
        textb:"yes",
        textc:"maybe",
        textd: "maybenot",
        correctAnswer: "btn2"},
    ];

var fQI = questions.length;
var currentQuestionIndex = 1;
var TimeLeft = 60;
var timer;
 var correct;



    