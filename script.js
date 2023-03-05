// Section for Computer choices
function getComputerChoice() {
    // Making computer be able to choose random choice
    const compChoice = ["rock", "paper", "scissors"]
    const rand = Math.floor(Math.random() * compChoice.length)

    // Computer random choice
    const compRandChoi = compChoice[rand]
    console.log(compRandChoi)
}
console.log(getComputerChoice())