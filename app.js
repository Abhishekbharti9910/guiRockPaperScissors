
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
    afterStry.classList.remove("disappear");
    h2.classList.remove("disappear");
},6000);//waiting to end of story mode to play


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
selections.forEach(item =>{
    item.addEventListener("click", e => {
        const selected =  item.dataset.key;
        makeSelection(selected);
    })
})
function makeSelection(a) {
    console.log(a);
}






const gamePlay = ()=>{

   


function game(gf, you) {
    let human = you();
    let comp = gf();
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

}