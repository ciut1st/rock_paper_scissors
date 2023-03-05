// Section for Computer choices
function getComputerChoice() {
    // Making computer be able to choose random choice
    const compChoice = ["rock", "paper", "scissors"]
    const rand = Math.floor(Math.random() * compChoice.length)

    // Computer random choice
    return compChoice[rand]
}

let computerSelection = getComputerChoice()

// Getting data from the HTML
const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")
const scissorsButton = document.querySelector(".scissors")


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection == "scissors"
    || playerSelection == "paper" && computerSelection == "rock"
    || playerSelection == "scissors" && computerSelection == "paper") {
        return "Win"
    } else if (
        playerSelection == "rock" && computerSelection == "paper"
        || playerSelection == "paper" && computerSelection == "scissors"
        || playerSelection == "scissors" && computerSelection == "rock") {
            return "Lose"
        } else {
            return "Draw"
            }
}
console.log(computerSelection)
const playerSelection = "rock"
console.log(playRound(playerSelection, computerSelection))