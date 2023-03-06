function getComputerChoice() {
    const compChoice = ["rock", "paper", "scissors"]
    const rand = Math.floor(Math.random() * compChoice.length)
    return compChoice[rand]
}



const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let playerSelection = button.value
        let computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection)
    })
})

let playerScore = 0
let computerScore = 0
let round = 0

const result = document.querySelector('.result')

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection == "scissors"
    || playerSelection == "paper" && computerSelection == "rock"
    || playerSelection == "scissors" && computerSelection == "paper") {
        return playerWin()
    } else if (
        playerSelection == "rock" && computerSelection == "paper"
        || playerSelection == "paper" && computerSelection == "scissors"
        || playerSelection == "scissors" && computerSelection == "rock") {
            return computerWin()
        } else {
            return draw()
            }
}

function playerWin() {
    result.innerHTML = "You win"
    document.querySelector("#player-score-number").innerHTML = playerScore++
    document.querySelector("#round-number").innerHTML = round++
}

function computerWin() {
    result.innerHTML = "You lose"
    document.querySelector("#computer-score-number").innerHTML = computerScore++
    document.querySelector("#round-number").innerHTML = round++
}

function draw() {
    result.innerHTML = "It's a draw"
    document.querySelector("#round-number").innerHTML = round++
}