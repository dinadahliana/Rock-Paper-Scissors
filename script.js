// initialize score 
let playerScore = 0;
let computerScore = 0;

// function to get random computer choice
function getComputerChoice(){
    const choice = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choice.length);
    const computerChoice = choice[randomIndex];

    return computerChoice;
}

// function to play one round of the game
function playRound(playerSelection, computerSelection) {
    if 
        (computerSelection === "Rock" && playerSelection === "paper" ||
        computerSelection === "Paper" && playerSelection === "scissors" ||
        computerSelection === "Scissors" && playerSelection === "rock") {
            console.log(`You win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`);
            playerScore += 1;
        }
    else if 
        (computerSelection === "Rock" && playerSelection === "scissors" ||
        computerSelection === "Paper" && playerSelection === "rock" ||
        computerSelection === "Scissors" && playerSelection === "paper") {
            console.log(`You lose! ${computerSelection} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}`);
            computerScore +=1;
        }
    else {
        console.log("Draw")
    }
}

// function to play 5 round game
function game() {
    for (let i=1; i<=5; i++){
        const playerSelection = prompt("Choose your weapon");
        const computerSelection = getComputerChoice();
        playRound(playerSelection.toLowerCase(), computerSelection);
        console.log(playerScore);
        console.log(computerScore);
    }

    console.log(`Finish result
                Player score: ${playerScore}
                Computer score: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log(`Congratulations! You win the game!`)
    } else {
        console.log(`Nice try!`)
    }
}

game()