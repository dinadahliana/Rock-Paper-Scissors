// Create function to get random computer choice
function getComputerChoice(){
    const choice = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choice.length);
    const computerChoice = choice[randomIndex];

    console.log(computerChoice)
}

getComputerChoice()