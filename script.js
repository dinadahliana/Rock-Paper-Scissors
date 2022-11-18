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
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        }
    else if 
        (computerSelection === "Rock" && playerSelection === "scissors" ||
        computerSelection === "Paper" && playerSelection === "rock" ||
        computerSelection === "Scissors" && playerSelection === "paper") {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        }
    else {
        console.log("Draw")
    }
}

let playerSelection = "paper";
let computerSelection = "Scissors";
playRound(playerSelection, computerSelection)