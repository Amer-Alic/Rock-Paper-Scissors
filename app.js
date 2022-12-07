const buttons = document.querySelectorAll("[data-selection]");
const lastDiv = document.querySelector("#computerScore");
const playerSpan = document.querySelector("#playerSpan");
const computerSpan = document.querySelector("#computerSpan");
const resetButton = document.querySelector("#reset")
const SELECTION = [
    {
        name: "rock",
        emoji: "&#129704",
        beats: "scissors",
    },
    {
        name: "paper",
        emoji: "&#129531",
        beats: "rock",
    },
    {
        name: "scissors",
        emoji: "&#x2702",
        beats: "paper",
    }
]

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const selectionName = button.dataset.selection;
        const selection = SELECTION.find(f => f.name === selectionName);
        turn(selection);
    })
})

resetButton.addEventListener("click", () => { reset() })

const turn = function (selection) {
    const computerChoice = makeRand();
    const yourWinner = isWinner(selection, computerChoice);
    const computerWinner = isWinner(computerChoice, selection);

    addEndResult(computerChoice, computerWinner);
    addEndResult(selection, yourWinner);
    if (yourWinner) {
        incramentScore(playerSpan);
        endIsWinner(playerSpan, "player");
    };
    if (computerWinner) {
        incramentScore(computerSpan);
        endIsWinner(computerSpan, "computer");
    };
}

const makeRand = function () {
    let randomIndex = Math.floor(Math.random() * 3);
    return SELECTION[randomIndex];
}

const isWinner = function (firstSelection, secondSelection) {
    return firstSelection.name === secondSelection.beats;
}

const addEndResult = function (selection, winner) {
    const div = document.createElement("div");
    div.innerHTML = selection.emoji;
    div.classList.add("newDiv");
    if (winner) div.classList.add("winner");
    lastDiv.after(div);
}

const incramentScore = function (incramenting) {
    incramenting.innerText = parseInt(incramenting.innerText) + 1;
}

const endIsWinner = function (select, name) {
    if (parseInt(select.innerText) === 5) {
        alert(name);
        reset();
    }
}

const reset = function () {
    playerSpan.innerText = "0";
    computerSpan.innerText = "0";
    const newDivs = document.querySelectorAll(".newDiv");
    newDivs.forEach(e => e.innerHTML = "")
}


// OLD VERSION:
// const rockButton  = document.querySelector("#rock");
// const paperButton  = document.querySelector("#paper");
// const scissorsButton  = document.querySelector("#scissors");
// const resetButton = document.querySelector("#reset")
// const playerSpan = document.querySelector("#playerSpan");
// const computerSpan = document.querySelector("#computerSpan");
// let playerScore = 0;
// let computerScore = 0;

// function getComputerChoice() {
//     const allComputerChoices = ["rock", "paper", "scissors"];
//     return allComputerChoices[Math.floor(Math.random() * 3)];
// }

// function toggleButtons(bool) {
//     rockButton.disabled = bool;
//     paperButton.disabled = bool;
//     scissorsButton.disabled = bool;
// }

// function playRound(playerSelection, computerSelection) {
//     playerSelection.toLowerCase();
//     computerSelection = getComputerChoice();
//     if (playerSelection === "rock" && computerSelection === "rock" ||
//         playerSelection === "paper" && computerSelection === "paper" ||
//         playerSelection === "scissors" && computerSelection === "scissors") {
//         console.log("EQUAL");
//     }
//     else if (playerSelection === "rock" && computerSelection === "scissors" ||
//         playerSelection === "paper" && computerSelection === "rock" ||
//         playerSelection === "scissors" && computerSelection === "paper") {
//         playerScore++;
//         playerSpan.innerText = playerScore;
//         console.log("WIN");
//     }
//     else if (playerSelection === "paper" && computerSelection === "scissors" ||
//         playerSelection === "rock" && computerSelection === "paper" ||
//         playerSelection === "scissors" && computerSelection === "rock") {
//         computerScore++;
//         computerSpan.innerText = computerScore;
//         console.log("LOSE");
//     }
//     if (playerScore == 5) {
//         alert("player WON!");
//         toggleButtons(true);
//     }
//     if (computerScore == 5) {
//         alert("computer WON!");
//         toggleButtons(true);
//     }
// }

// rockButton.addEventListener("click", () => {
//     playRound("rock");
//     console.log(rockButton.dataset.selection)
// });
// paperButton.addEventListener("click", () => playRound("paper"))
// scissorsButton.addEventListener("click", () => playRound("scissors"))
// resetButton.addEventListener("click", () => {
//     toggleButtons(false);
//     computerSpan.innerText = 0;
//     playerSpan.innerText = 0;
//     playerScore = 0;
//     computerScore = 0;
// })