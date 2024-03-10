const questions = [
    {
        question:"Who is the founder of Facebook?",
        answers:[
            {text:"Elon Musk", correct:false},
            {text:"Mark Zuckerberg", correct:true},
            {text:"Ritesh Agarwal", correct:false},
            {text:"Steve Jobs", correct:false}
        ]
    },
    {
        question:"How many Bits makes one Byte?",
        answers:[
            {text:"18", correct:false},
            {text:"90", correct:false},
            {text:"8", correct:true},
            {text:"12", correct:false}
        ]
    }
    
];

const question = document.getElementById("question");
const answerButton = document.getElementById("answerbtn");
const nextButton = document.getElementById("next-btn");


let currentIndex = 0;
let score = 0;

function startQuize(){
    currentIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}

function showQuestions(){
    resetState();
    let currentQues = questions[currentIndex];
    let questionNumber = currentIndex+1;
    question.innerHTML = questionNumber+". "+ currentQues.question;
    currentQues.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        console.log(answer.text);
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });

}

function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectButton = e.target;
    const isCorrect = selectButton.dataset.correct === "true";
    if(isCorrect){
        selectButton.classList.add("correct");
        score++;
    }
    else{
        selectButton.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentIndex++;
    if(currentIndex<questions.length){
        showQuestions();
    }else{
        showScore();
    }
}

function showScore(){
    resetState();
    question.innerHTML= `Your Score ${score}`;
    nextButton.innerHTML = "Play Again";
}

nextButton.addEventListener("click", ()=>{
    if(currentIndex<questions.length){
        handleNextButton();
    }else{
        startQuize();
    }
});

startQuize();
