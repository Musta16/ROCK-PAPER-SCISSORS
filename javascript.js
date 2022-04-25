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

// Prende l'input dell'utente e lo standardizza
function playerPlay() {
    
    let input = prompt("To play insert \'Rock\', \'Paper\' or \'Scissors\'!");
    let answer = input.toLowerCase();
    return answer;
}

// Gioca un round singolo di gioco
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
    else return `You win! ${playerSelection} beats ${computerSelection}.`
}

// Funzione principale di gioco
function game() {

    for (let round = 1; round <= 5; round++) {
        
        const computerSelection = computerPlay();
        const playerSelection  = playerPlay();

        let result = playRound(playerSelection, computerSelection);

        if (result.includes("win") == true) {
            playerScore++;
        }
        else if (result.includes("lose") == true) {
            computerScore++;
        }
        else ties++;
    }

    return `Player ${playerScore} wins!
Computer ${computerScore} wins!
${ties} tie games!`
}

// Tabella punteggi
let computerScore = 0;
let playerScore = 0;
let ties = 0;

// Avvio il gioco
console.log(game());