const Start = document.getElementById("startbtn")
const QuestionContainer = document.getElementById("QuestionC1")
Start.addEventListener("click", StartQ)
function StartQ(){
Start.classList.add("hide")
QuestionContainer.classList.remove("hide")
console.log("This function is running")
}
function ClickedAnswer(){
console.log("This function is running")
}

