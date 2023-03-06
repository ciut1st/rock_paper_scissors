// Section for Computer choices
function getComputerChoice() {
    // Making computer be able to choose random choice
    const compChoice = ["rock", "paper", "scissors"]
    const rand = Math.floor(Math.random() * compChoice.length)

    // Computer random choice
    return compChoice[rand]
}



// Getting data from the HTML
const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let playerSelection = button.value
        let computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
    })
})


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
