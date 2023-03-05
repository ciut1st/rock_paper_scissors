// Section for Computer choices
function getComputerChoice() {
    // Making computer be able to choose random choice
    const compChoice = ["rock", "paper", "scissors"]
    const rand = Math.floor(Math.random() * compChoice.length)

    // Computer random choice
    return compChoice[rand]
}

// Getting data from the HTML
const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")
const scissorsButton = document.querySelector(".scissors")



// Start the game
const computerSelection = getComputerChoice()
// const playerSelection = 

// console.log(playRound(playerSelection, computerSelection))
