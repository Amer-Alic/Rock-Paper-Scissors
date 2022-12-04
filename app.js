const rockButton  = document.querySelector("#rock");
const paperButton  = document.querySelector("#paper");
const scissorsButton  = document.querySelector("#scissors");
const resetButton = document.querySelector("#reset")
const playerSpan = document.querySelector("#playerSpan");
const computerSpan = document.querySelector("#computerSpan");
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const allComputerChoices = ["rock", "paper", "scissors"];
    return allComputerChoices[Math.floor(Math.random() * 3)];
}

function toggleButtons(bool) {
    rockButton.disabled = bool;
    paperButton.disabled = bool;
    scissorsButton.disabled = bool;
}

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    if (playerSelection === "rock" && computerSelection === "rock" ||
        playerSelection === "paper" && computerSelection === "paper" ||
        playerSelection === "scissors" && computerSelection === "scissors") {
        console.log("EQUAL");
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++; 
        playerSpan.innerText = playerScore;
        console.log("WIN");
    }
    else if (playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++; 
        computerSpan.innerText = computerScore;
        console.log("LOSE");
    }
    if (playerScore == 5) {
        alert("player WON!");
        toggleButtons(true);
    }
    if (computerScore == 5) {
        alert("computer WON!");
        toggleButtons(true);
    }
}

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"))
scissorsButton.addEventListener("click", () => playRound("scissors"))
resetButton.addEventListener("click", () => {
    toggleButtons(false);
    computerSpan.innerText = 0;
    playerSpan.innerText = 0;
    playerScore = 0;
    computerScore = 0;
})

// function game() {
//     let playerScore = 0
//     let computerScore = 0
//     for (i = 0; i < 5; i++) {
//         let userChoice = playRound(prompt(`CHOSEE NOW`).toLowerCase())
//         if (userChoice === `EQUAL`) {
//             console.log(`You are equal`)
//         }
//         else if (userChoice === `WIN`) {
//             console.log(`You WIN`)
//             playerScore++
//         }
//         if (userChoice === `LOSE`) {
//             console.log(`You LOSE`)
//             computerScore++
//         }
//     }
//     if (playerScore > computerScore) {
//         console.log(`YOU WINNNNNNNNN`)
//     }
//     else if (playerScore < computerScore) {
//         console.log(`YOU LOST`)
//     }
//     if (playerScore === computerScore) {
//         console.log(`It is equall, lame..`)
//     }
// }
