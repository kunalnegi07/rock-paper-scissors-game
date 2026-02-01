let humanScore = 0;
let computerScore = 0;

running();


function playGame()
{
   for(i = 1; i<=5 ; i++)
   {
     playRound(getHumanChoice(), getComputerChoice());
   } 
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

function playRound(humanChoice, computerChoice) {
  
        if(humanChoice === computerChoice)
        {
            console.log('The game is tie.');
        }

        else if (humanChoice === "rock" && computerChoice === "scissors")
        {
            console.log('You Win! rock beats scissors.');
        }  

        else if (humanChoice === "paper" && computerChoice === "rock")
        {
            console.log('You Win! paper beats rock.')
        }

        else if(humanChoice === "scissors" && computerChoice === "paper")
        {
            console.log('You Win! scissors beats paper.')
        }

        else
        {
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}.` )
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
        running();   
    }

    playGame();
}