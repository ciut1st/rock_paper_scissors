// Section for Computer choices
function getComputerChoice() {
    // Making computer be able to choose random choice
    const compChoice = ["rock", "paper", "scissors"]
    const rand = Math.floor(Math.random() * compChoice.length)

    // Computer random choice
    const compRanChoi = compChoice[rand]
    return compRanChoi
}
const computerSelection = getComputerChoice()
console.log(computerSelection)

const rockChoice = document.querySelector(".rock");
rockChoice.addEventListener("click", myFunction);
const paperChoice = document.querySelector("paper")
const scissorsChoice = document.querySelector("scissors")

function myFunction() {
    console.log("hi")
}