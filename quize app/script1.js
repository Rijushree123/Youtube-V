import data from './data.json' assert { type: 'json' };

const eachQuestion = document.getElementById("question");
const qa = document.getElementById("qa");
const answerButtons = document.getElementById("answerbtn");
const nextButton = document.getElementById("next-btn");


let currentIndex = 0;
let score = 0;

function startQuize(){
    currentIndex = 0;
    score = 0;
    nextButton.style.display = "block";
    //nextButton.innerHTML = "Next";
    nextButton.addEventListener("click",showeachQuestions );
}

function showeachQuestions(){
    resetState();
    nextButton.innerHTML = "Next";
    qa.style.display = "block";
    let currentQues = data[currentIndex];
    eachQuestion.innerHTML = (currentIndex+1)+". "+ currentQues.question;
    for(let i=0;i<4;i++){
        const button = document.createElement("button");
        let optionNumber = String.fromCharCode(65+i);
        button.innerHTML = data[currentIndex][optionNumber];
        button.classList.add("btn");
        answerButtons.appendChild(button);
        button.addEventListener("click", selectAnswer);
    }
}

function resetState(){
    while(answerButtons.firstChild){
        nextButton.style.display="none";
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectButton = e.target;
    const correctOption = data[currentIndex].answer;
    const correctAnswer = data[currentIndex][correctOption];
    if(correctAnswer===selectButton.textContent){
        selectButton.classList.add("correct");
        score++;
    }
    else{
        selectButton.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.textContent===correctAnswer){
            button.classList.add("correct");
        }
        button.disabled=true;
    });

    nextButton.style.display = "block";
}

function handleNextButton(){
    currentIndex++;
    (currentIndex<data.length)?showeachQuestions():showScore();
}

function showScore(){
    resetState();
    nextButton.style.display = "block";
    nextButton.innerHTML = "Play Again";
    eachQuestion.innerHTML= `Your Score ${score}`;
}

nextButton.addEventListener("click", ()=>{
    (currentIndex<data.length)?handleNextButton():startQuize();
});

startQuize();
