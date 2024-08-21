const questions = [
    {
        question: "which is the largest animal in the world ",
        answers: [
            { text: "shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephent", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "which is the smallest continent in the world? ",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australlia", correct: false },
            { text: "Arctic", correct: true },
            { text: "Africa", correct: false },
        ]
    },
    {
        question: "which cricketer had scored most number of runs in the international cricket",
        answers: [
            { text: "Sachin tendulkar", correct: true },
            { text: "Yuvraj singh", correct: false },
            { text: "Virat kohli", correct: false },
            { text: "Gautam Gambhir", correct: false },
        ]
    }
];
const questionElement = document.getElementById("question");
const answerElement = document.querySelector(".answer");
const nextButton = document.querySelector(".nxt-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState()

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerElement.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer)
    });
}
function resetState(){
    nextButton.style.display ="none";
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const iscorrect=selectedBtn.dataset.correct === "true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerElement.children).forEach(button=>{
        if(button.dataset.correct ==="true")
        {
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
 
function showScore(){
    resetState();
    questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`
    nextButton.textContent = "Play Again";
    nextButton.style.display="block";
    nextButton.style.width="100px";

}


function handleNExtButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
   if(currentQuestionIndex < questions.length){
      handleNExtButton();
   }
   else{
    startQuiz();
   }

});

startQuiz();
