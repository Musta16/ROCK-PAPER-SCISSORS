console.log("Hello World!");

// Genera un numero random da 1 a 3 e ritorna un valore
function computerPlay() {

    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "rock";
    }
    else if (randomNumber === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playerPlay() {
    
    let input = prompt("To play insert \'Rock\', \'Paper\' or \'Scissors\'!");
    let answer = input.toLowerCase();
    return answer;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return `It's a tie!`
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return `You lose! ${computerSelection} beats ${playerSelection}.`
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return `You lose! ${computerSelection} beats ${playerSelection}.`
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return `You lose! ${computerSelection} beats ${playerSelection}.`
    }
    else return `You Win! ${playerSelection} beats ${computerSelection}.`
}

const computerSelection = computerPlay();
const playerSelection  = playerPlay();
//const playerSelection = "rock"
console.log(playRound(playerSelection, computerSelection));

