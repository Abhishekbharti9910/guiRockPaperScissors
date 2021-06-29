// author : abhishek bharti
// purpose of code : rock paper scissor

// function for computer selection 
function computer() {
    let choices = ["rock", "paper", "scissors"];
    let select = choices[Math.floor( Math.random() * choices.length )];
    return select;
}

// function for player selcetion
function player() {
    let k = prompt("plz enter from rock paper scissor");
    return k;
}

// first round function
function round(player, computer) {
    let human = player();
    let comp = computer();
    if (comp == "rock") {
        if (human == /rock/i) {
            return 0;
        }
        else if (human == /paper/i) {
            return 1;
        }
        else{
            return -1;
        }
    }
    if (comp == "paper") {
        if (human == /rock/i) {
            return -1;
        }
        else if (human == /paper/i) {
            return 0;
        }
        else{
            return 1;
        }
    }
    if (comp == "scissors") {
        if (human == /rock/i) {
            return 1;
        }
        else if (human == /paper/i) {
            return -1;
        }
        else{
            return 0;
        }
    }
}

 function game() {
    let compWin = 0;
    let playerWin = 0;
    let  tie = 0;
    for (let i = 0; i < 5; i++) {
        let k = round(player, computer);
        if (k==1) {
            playerWin++;
        }
        else if (k==-1) {
            compWin++;
        }
        else{
            tie++;
        }
    }
    if (playerWin === compWin) {
        alert("tie by : " + tie);
        alert("Tie");
    }
    if (playerWin > compWin) {
        alert("player win : " + playerWin + "\ntie : " + tie);
        alert("you won!");
    }
    else{
        alert("comp win : " + compWin + "\ntie : " + tie);
        alert("you loose!");
    }

}
game();