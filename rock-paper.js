// getComputerChoice selects the computer's option. The function itself selects a random whole number between 1 and 3
// each one of this numbers is paired with one of the options (R,P,S)

function getComputerChoice() {
    let randomizeChoice = Math.floor(Math.random() * 3) + 1;
    if (randomizeChoice === 1) {
        return "Rock";
    }if (randomizeChoice === 2) {
        return "Paper";
    }if (randomizeChoice === 3) {
        return "Scissors";
    }
}

