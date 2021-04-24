const Start = document.getElementById("startbtn")
const QuestionContainer = document.getElementById("QuestionC1")
Start.addEventListener("click", StartQ)
function StartQ(){
Start.classList.add("hide")
QuestionContainer.classList.remove("hide")
shuffledQ = questions.sort(() => Math.random() - .5)
currentQIndex = 0
console.log("This function is running")
}
function ClickedAnswer(){
console.log("This function is running")
}
const questions = [{
    question: "Hello",
    answers: [
        {text: "a", correct: true},
        {text: "b", Incorrect: false},
        {text: "c", Incorrenct: false},
        {text: "d", Incorrect: false},
    ]
},
{   question: "Hello",
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
function showQ(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
    })
    }
Next.addEventListener("click", NextQ)
function NextQ(){
resetState()
showQ(shuffledQuestions[currentQuestionIndex])

}