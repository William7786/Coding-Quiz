const Start = document.getElementById("startbtn")
const Next= document.getElementById("nextbtn")
const QuestionContainer = document.getElementById("QuestionC")
const questionEl = document.getElementById("question")
const answerbtn= document.getElementById("answersbtn")
const choices ="";
const initials = "";
let shuffledQ, currentQIndex






//functions
Start.addEventListener("click", StartQ)
function StartQ(){
Start.classList.add("hide")
QuestionContainer.classList.remove("hide")
Next.classList.remove("hide")
shuffledQ = questions.sort(() => Math.random() - .5)
currentQIndex = 0

SetN()
console.log("This function is running")
}




function SetN() {
showQ(shuffledQ[currentQIndex])

}



function showQ(question) {
    questionEl.innerHTML = question.question
    question.answers.forEach(
        answers => { 
        const button = document.createElement("button")
        button.classList.add="btns"
        button.innerHTML = answers.text
        if(answers.correct){
        button.dataset.correct = answers.correct}
        button.addEventListener("click", ClickedAnswer)
        answerbtn.appendChild(button)
        
    })
}


Next.addEventListener("click", NextQ)
function NextQ(){
currentQIndex+1;
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



function ClickedAnswer(e) {
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
        // question: "Hello2",
        // answers: [
        //     {choice1: "a", correct: true},
        //     {choice2: "b", Incorrect: false},
        //     {choice3: "c", Incorrenct: false},
        //     {choice4: "d", Incorrect: false},
        // ]
    },
   
    
    ]