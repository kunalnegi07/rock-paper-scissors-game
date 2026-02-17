let humanScore = 0;
let computerScore = 0;
const playAgain = document.querySelector("#play-again");
playAgain.addEventListener("click",resetGame);


const allbtns = document.querySelectorAll(".buttons");

const gameOverScreen = document.querySelector("#game-over-screen");

const mainScreen = document.querySelector(".mainscreen");


function getComputerChoice()
{

    const random =  getRandomInt(3)

    if(random === 0)
    {
        return "rock" ;
    }

    else if (random === 1)
    {
        return "paper";
    }

    else
    {
        return "scissors";
    } 
    
}

function getRandomInt(max)
{
    return Math.floor(Math.random()*max);
}



function playRound(humanChoice, computerChoice)
 {

    if(humanChoice === computerChoice)
    {
        showOutcome('This round is tie.');
        showScore(`Player : ${humanScore}      Computer : ${computerScore}`);
    }

    else if (humanChoice === "rock" && computerChoice === "scissors")
    {
        showOutcome('You win! rock beats scissors.');
        humanScore += 1;
        showScore(`Player : ${humanScore}      Computer : ${computerScore}`);
    }  

    else if (humanChoice === "paper" && computerChoice === "rock")
    {
        showOutcome('You win! paper beats rock.');
        humanScore += 1;
        showScore(`Player : ${humanScore}      Computer : ${computerScore}`);
    }

    else if(humanChoice === "scissors" && computerChoice === "paper")
    {
        showOutcome('You win! scissors beats paper.');
        humanScore += 1;
        showScore(`Player : ${humanScore}      Computer : ${computerScore}`);
    }

    else
    {
        showOutcome(`You lose! ${computerChoice} beats ${humanChoice}.` );
        computerScore += 1;
        showScore(`Player : ${humanScore}      Computer : ${computerScore}`);
    }

}


function declareResult()
{
    if(humanScore == 5 ){
        showResult("You won","won")
        for(const button of allbtns ){
            button.disabled = true;
        }
        gameOver();
    }else if(computerScore == 5){
        showResult("You lost","lost")
        for(const btns of allbtns ){
            btns.disabled = true;
        }
        gameOver();
    }
    
    
}

function gameOver(){
    gameOverScreen.style.display = "flex";
    mainScreen.style.display = "none";
}

function resetGame(){
    humanScore = 0;
    computerScore = 0;
    gameOverScreen.style.display = "none";
    mainScreen.style.display = "block";
    for(const btns of allbtns ){
            btns.disabled = false;
        }
    result.textContent = "";
    score.textContent = "";
    outcome.textContent = "";
}
function showResult(message,type){
    result.textContent = message;

    if(type==="won"){
        result.style.color  = "#16a34a";
    }
    else if(type==="lost"){
        result.style.color = "#dc2626";
    }
}


let btn1 = document.querySelector(".rock");
let btn2 = document.querySelector(".paper");
let btn3 = document.querySelector(".scissors");

btn1.addEventListener("click",() => {
    let computerPick= getComputerChoice();
    playRound("rock",computerPick);
    declareResult();
});
btn2.addEventListener("click",() => {
    let computerPick= getComputerChoice();
    playRound("paper",computerPick);
    declareResult();
});
btn3.addEventListener("click",() => {
    let computerPick= getComputerChoice();
    playRound("scissors",computerPick);
    declareResult();
});

const result = document.querySelector("#result");
const score = document.querySelector("#score");
const outcome = document.querySelector("#outcome")

function showScore(message){
    score.textContent = message;
}
function showOutcome(message){
    outcome.textContent = message;
}
