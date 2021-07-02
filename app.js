
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
},36000);//waiting to end of story mode to play
h2.addEventListener("click",()=>{
    afterStry.classList.toggle("disappear");
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
// console.log(selections);
var count = 0;
var playerScore = 1;//score counter for player
var compScore = 1;//score counter for computer
var noTie = 1;//score counter tie
var you = document.querySelector(".playSco");
var gf = document.querySelector(".gfSco");
var tie = document.querySelector(".noTie");
selections.forEach(item =>{
    item.addEventListener("click", e => {
        const selected =  item.dataset.key;
        let k = round(selected, playerScore, compScore);
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
function round(you,yS,gfS) {
    if (count>4) {
        popup(yS,gfS);
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
function popup(y,gf) {
    if(y>gf){
        document.getElementById("popup-1").classList.add("active");
    }
    else if (y===gf) {
        document.getElementById("popup-3").classList.add("active");   
    }
    else{
    document.getElementById("popup-2").classList.add("active");   
    }
}

// console.log(count);