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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection == "scissors"
    || playerSelection == "paper" && computerSelection == "rock"
    || playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++
        round++
        playerWin()
    } else if (
        playerSelection == "rock" && computerSelection == "paper"
        || playerSelection == "paper" && computerSelection == "scissors"
        || playerSelection == "scissors" && computerSelection == "rock") {
            computerScore++
            round++
            computerWin()
        } else {
            round++
            draw()
            }
}

const result = document.querySelector('.result')

function playerWin() {
    result.innerHTML = "You win"
    document.querySelector("#player-score-number").innerHTML = playerScore
    document.querySelector("#round-number").innerHTML = round
    checkWinner()
}

function computerWin() {
    result.innerHTML = "You lose"
    document.querySelector("#computer-score-number").innerHTML = computerScore
    document.querySelector("#round-number").innerHTML = round
    checkWinner()
}

function draw() {
    result.innerHTML = "It's a draw"
    document.querySelector("#round-number").innerHTML = round
    checkWinner()
}

function checkWinner() {
    if (round == 5) {
        if (playerScore == computerScore) {
            alert("No one win")
            location.reload()
        } else if (playerScore > computerScore) {
            alert("You beat the game")
            location.reload()
        } else {
            alert("Computer beat the game")
            location.reload()
        }
    }
}