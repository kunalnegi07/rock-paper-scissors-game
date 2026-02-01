let humanScore = 0;
let computerScore = 0;

running();


function playGame()
{



   for(i = 1; i<=5 ; i++)
   {

    const humanPick = getHumanChoice();
    const computerPick = getComputerChoice();

     const gameOver = playRound(humanPick,computerPick);

   } 

  declareResult();



}

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

function getHumanChoice()
{
    let humanChoice = prompt('Enter your choice "rock" , "paper" or "scissors"');

    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice)
 {
  
    if(humanChoice === computerChoice)
    {
        console.log('This round is tie.');
        console.log(`Human score is : ${humanScore} --- Computer score is : ${computerScore}`);
    }

    else if (humanChoice === "rock" && computerChoice === "scissors")
    {
        console.log('You win! rock beats scissors.');
        humanScore += 1;
        console.log(`Human score is : ${humanScore} --- Computer score is : ${computerScore}`);
    }  

    else if (humanChoice === "paper" && computerChoice === "rock")
    {
        console.log('You win! paper beats rock.');
        humanScore += 1;
        console.log(`Human score is : ${humanScore} --- Computer score is : ${computerScore}`);
    }

    else if(humanChoice === "scissors" && computerChoice === "paper")
    {
        console.log('You win! scissors beats paper.');
        humanScore += 1;
        console.log(`Human score is : ${humanScore} --- Computer score is : ${computerScore}`);
    }

    else if(humanChoice !== "rock" || humanChoice !== "scissors" || humanChoice !== "paper")
    {
        console.log('Invalid round');
        console.log(`Human score is : ${humanScore} --- Computer score is : ${computerScore}`);
        
    }

    else
    {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.` );
        computerScore += 1;
        console.log(`Human score is : ${humanScore} --- Computer score is : ${computerScore}`);
    }

}


function running()
{
    let userChoice = prompt('Do you want to play "Rock" , "Paper" and "Scissors" . If yes enter "y" else enter "n". ' );

    userChoice = userChoice.toLowerCase();

    if(userChoice === 'y')
    {

    }

    else if (userChoice === "n")
    {
        return;
    }

    else
    {
        console.log('Enter a valid input "y" or "n" ');
        return running();   
    }

    playGame();
}

function declareResult()
{
    if(humanScore>computerScore)
    {
        console.log('Hurrayyyy! You Won the game.');
    }

    else if(humanScore<computerScore)
    {
        console.log('YOU LOST! Stupid');
    }

    else
    {
        console.log('This game was a Tie.')
    }
}