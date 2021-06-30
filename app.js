
let h3s = document.querySelectorAll("h3");
let h2 = document.querySelector("h2");
h3s = Array.from(h3s);
let aniend = document.querySelector("h1");
let afterStry = document.querySelector(".afterStory")
let timer = 6000;

function story() {
    if (h3s.length===0) {
        return;
    }
    let key = h3s.shift();
    key.classList.remove("disappear");
    setTimeout(() => {
        key.classList.add("disappear");
    }, timer);
    
}
setInterval(story, 6000);
setTimeout(()=>{
    h2.classList.remove("disappear");
},6000);//waiting to end of story mode to play
h2.addEventListener("click",()=>{
    afterStry.classList.remove("disappear");
})

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
rock.addEventListener("click",()=>{
    let audio = document.querySelector("audio");
    if (!audio) {//coz program false here and terminate to stop this wo used it
       return;
    }
    audio.currentTime = 0; //coz audio will complete then exist to make it work over and over
    audio.play();
})
paper.addEventListener("click",()=>{
    let audio = document.querySelector("audio");
    if (!audio) {//coz program false here and terminate to stop this wo used it
       return;
    }
    audio.currentTime = 0; //coz audio will complete then exist to make it work over and over
    audio.play();
})
scissors.addEventListener("click",()=>{
    let audio = document.querySelector("audio");
    if (!audio) {//coz program false here and terminate to stop this wo used it
       return;
    }
    audio.currentTime = 0; //coz audio will complete then exist to make it work over and over
    audio.play();
})

//here main game is placed

// author : abhishek bharti
// purpose of code : rock paper scissor

// function for computer selection 
const selections = document.querySelectorAll('[data-key]');
console.log(selections);
let count = 0;
let playerScore = 1;//score counter for player
let compScore = 1;//score counter for computer
let noTie = 1;//score counter tie
let you = document.querySelector(".playSco");
let gf = document.querySelector(".gfSco");
let tie = document.querySelector(".noTie");
selections.forEach(item =>{
    item.addEventListener("click", e => {
        const selected =  item.dataset.key;
        let k = round(selected)
        console.log(k);
        if (k===1) {
            you.innerHTML=playerScore; 
            playerScore++;
        }
        else if (k===-1) {
            gf.innerHTML=compScore; 
            compScore++;
        }
        else if (k===0) {
            tie.innerHTML=noTie; 
            noTie++;
        }

    })
    // if (count==5) {

    // }
})
function round(you) {
    if (count>4) {
        return;
    }
    else{
        count++;
        return game(you)
    }
}


function game(human) {
    let choice = ["rock","paper", "scissors"];
    let comp = choice[Math.floor(Math.random()*3)];
    if (human == "rock") {
        if (comp == "rock") {
            return 0;
        }
        else if (comp == "paper") {
            return -1;
        }
        else{
            return 1;
        }
    }
    else if (human == "paper") {
        if (comp == "rock") {
            return -1;
        }
        else if (comp == "paper") {
            return 0;
        }
        else{
            return 1;
        }
    }
    else if (human == "scissors") {
        if (comp == "rock") {
            return -1;
        }
        else if (comp == "paper") {
            return 1;
        }
        else{
            return 0;
        }
    }
}

// popUp 
// When the user clicks on <div>, open the popup
// function popW() {
//   var popup = document.querySelector(".popup");
//   popup.classList.add("show");
// }