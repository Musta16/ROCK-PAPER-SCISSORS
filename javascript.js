console.log("Hello World!");

// Genera un numero random da 1 a 3 e ritorna un valore
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "Rock";
    }
    else if (randomNumber === 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

console.log(computerPlay());