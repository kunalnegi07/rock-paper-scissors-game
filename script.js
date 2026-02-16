let humanScore = 0;
let computerScore = 0;
let computerPick= getComputerChoice();
let roundInProgress = false;


function getComputerChoice()
{

    if(getRandomInt(3) === 0)
    {
        return "rock" ;
    }

    else if (getRandomInt(3) === 1)
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
        showScore(`Human score is : ${humanScore} --- Computer score is : ${computerScore}`);
    }

    else if (humanChoice === "rock" && computerChoice === "scissors")
    {
        showOutcome('You win! rock beats scissors.');
        humanScore += 1;
        showScore(`Human score is : ${humanScore} --- Computer score is : ${computerScore}`);
    }  

    else if (humanChoice === "paper" && computerChoice === "rock")
    {
        showOutcome('You win! paper beats rock.');
        humanScore += 1;
        showScore(`Human score is : ${humanScore} --- Computer score is : ${computerScore}`);
    }

    else if(humanChoice === "scissors" && computerChoice === "paper")
    {
        showOutcome('You win! scissors beats paper.');
        humanScore += 1;
        showScore(`Human score is : ${humanScore} --- Computer score is : ${computerScore}`);
    }

    else
    {
        showOutcome(`You lose! ${computerChoice} beats ${humanChoice}.` );
        computerScore += 1;
        showScore(`Human score is : ${humanScore} --- Computer score is : ${computerScore}`);
    }

}


function declareResult()
{
    if(humanScore == 5 ){
        showResult("You won the game!")
    }else if(computerScore == 5){
        showResult("You lost the game!")
    }
    
}

let btn1 = document.querySelector(".rock");
let btn2 = document.querySelector(".paper");
let btn3 = document.querySelector(".scissors");

btn1.addEventListener("click",() => {
    playRound("rock",computerPick);
    declareResult();
});
btn2.addEventListener("click",() => {
    playRound("paper",computerPick);
    declareResult;
});
btn3.addEventListener("click",() => {
    playRound("scissors",computerPick);
    declareResult();
});

const result = document.querySelector("#result");
const score = document.querySelector("#score");
const outcome = document.querySelector("#outcome")

function showResult(message){
    result.textContent = message;
}
function showScore(message){
    score.textContent = message;
}
function showOutcome(message){
    outcome.textContent = message;
}

