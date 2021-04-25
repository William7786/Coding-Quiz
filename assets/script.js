const Start = document.getElementById("startbtn")
const Next= document.getElementById("nextbtn")
const QuestionContainer = document.getElementById("QuestionC1")
const questionEl = document.getElementById("question")
const answerbtn= document.getElementById("answers")
let shuffledQ, currentQIndex






//functions
Start.addEventListener("click", StartQ)
function StartQ(){
Start.classList.add("hide")
QuestionContainer.classList.remove("hide")
QuestionContainer.classList.remove("hide")
shuffledQ = questions.sort(() => Math.random())
currentQIndex = 0
SetN()
console.log("This function is running")
}




function SetN() {
showQ(shuffledQ[currentQIndex])

}



function showQ(question) {
    questionEl.innerText = question.question
    question.answers.forEach(
        answer => { 
        const button = document.createElement("btn")
        button.classList.add="btn"
        button.innerText = answer.text
        if(answer.correct){button.dataset.correct = answer.correct}
        button.addEventListener("click", ClickedAnswer)
        
    })
}


Next.addEventListener("click", NextQ)
function NextQ(){
currentQIndex++
if (currentQIndex < questions.length) {
correct(e.target.innerText == NextQ.answers)
answers.innerHTML=""
if (currentQIndex < questions.length) {
NextQ=questions[currentQIndex]
displayQuestion(NextQ)
}
else{
    currentQIndex=0 
    displayQuestion(NextQ)}   
}
}



function ClickedAnswer() {
}



//Questions
    const questions = [{
        question: "Hello",
        answers: [
            {text: "a", correct: true},
            {text: "b", Incorrect: false},
            {text: "c", Incorrenct: false},
            {text: "d", Incorrect: false},
        ]
    },
   
    
    ]