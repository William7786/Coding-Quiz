//Variables
const Start = document.getElementById("startbtn")
const QuestionsEl = document.getElementById("question")

//Functions
Start.addEventListener("click", StartQ)
function StartQ(){
Start.classList.add("hide")
QuestionContainer.classList.remove("hide")
QuestionContainer.classList.remove("hide")}

function Quiz(questions){
    this.questions = questions;
    this.questionIndex = 0;
}


function Question(text, choice, isCorrectAnswer)

//Questions
const questions = [
new question("Whats Up?", ["hi", "hello", "hey"], "hello")
];
