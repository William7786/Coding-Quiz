const Start = document.getElementById("startbtn")
const Next= document.getElementById("nextbtn")
const QuestionContainer = document.getElementById("QuestionC1")
const questionEl = document.getElementById("question")
const answerbtn= document.getElementById("answers")
let currentQuestionIndex
Start.addEventListener("click", StartQ)




///Functions
function StartQ(){
Start.classList.add("hide")
QuestionContainer.classList.remove("hide")
shuffledQ = questions.sort(() => Math.random() - .5)
currentQIndex = 0
console.log("This function is running")
SetN()
}

function SetN() {
    showQ(shuffledQ[currentQIndex])
    
    }

function resetState(){
    Next.classList.add("hide")
    while(answerbtn.firstchild){
    answerbtn.removeChild
    (answerbtn.firstChild)
    }
    }




Next.addEventListener("click", NextQ)
function NextQ(){
resetState()
currentQuestionIndex++
if (currentQuestionIndex < questions.length) {
correct(e.target.innerText == NextQ.answer)
answers.innerHTML=""
if (currentQuestionIndex < questions.length) {
NextQ=questions[currentQuestionIndex]
displayQuestion(NextQ)
}
else{
    currentQIndex=0 
    displayQuestion(NextQ)}

}
}
function Quiz(questions){
this.score = 0;
this.questions = questions;
this.questionIndex = 0;
}


function Question(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
       
        }
    
    Question.prototype.correctAnswer = function(choice){
         return choice === this.answer;
     }

   
   


     /// Questions ///
const questions = [{
    question: "Hello",
    answers: [
        {text: "a", correct: true},
        {text: "b", Incorrect: false},
        {text: "c", Incorrenct: false},
        {text: "d", Incorrect: false},
    ]
},
{   question: "Hello2",
    answers: [
        {text: "a", correct: true},
        {text: "b", Incorrect: false},
        {text: "c", Incorrenct: false},
        {text: "d", Incorrect: false},
]
},
{   question: "Hello1",
    answers: [
        {text: "a", correct: true},
        {text: "b", Incorrect: false},
        {text: "c", Incorrenct: false},
        {text: "d", Incorrect: false},
]

},{ question: "Hello2",
    answers: [
        {text: "a", correct: true},
        {text: "b", Incorrect: false},
        {text: "c", Incorrenct: false},
        {text: "d", Incorrect: false},
]
},{ question: "Hello3",
    answers: [
        {text: "a", correct: true},
        {text: "b", Incorrect: false},
        {text: "c", Incorrenct: false},
        {text: "d", Incorrect: false},
]
},

]