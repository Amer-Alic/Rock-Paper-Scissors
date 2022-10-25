function getComputerChoice() {
    const allComputerChoices = ['rock', 'paper', 'scissors'];
    return allComputerChoices[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase()
    computerSelection = getComputerChoice()
    if (playerSelection === `rock` && computerSelection === `rock` ||
        playerSelection === `paper` && computerSelection === `paper` ||
        playerSelection === `scissors` && computerSelection === `scissors`) {
        return `EQUAL`
    }
    else if (playerSelection === `rock` && computerSelection === `scissors` ||
        playerSelection === `paper` && computerSelection === `rock` ||
        playerSelection === `scissors` && computerSelection === `paper`) {
        return `WIN`
    }
    else if (playerSelection === `paper` && computerSelection === `scissors` ||
        playerSelection === `rock` && computerSelection === `paper` ||
        playerSelection === `scissors` && computerSelection === `rock`) {
        return 'LOSE'
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0
    for (i = 0; i < 5; i++) {
        let userChoice = playRound(prompt(`CHOSEE NOW`).toLowerCase())
        if (userChoice === `EQUAL`) {
            console.log(`You are equal`)
        }
        else if (userChoice === `WIN`) {
            console.log(`You WIN`)
            playerScore++
        }
        if (userChoice === `LOSE`) {
            console.log(`You LOSE`)
            computerScore++
        }
    }
    if (playerScore > computerScore) {
        console.log(`YOU WINNNNNNNNN`)
    }
    else if (playerScore < computerScore) {
        console.log(`YOU LOST BICH`)
    }
    if (playerScore === computerScore) {
        console.log(`It is equall, lame..`)
    }
}