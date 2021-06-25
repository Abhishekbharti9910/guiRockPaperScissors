let h3s = document.querySelectorAll("h3");
let h2 = document.querySelector("h2");
h3s = Array.from(h3s);
let aniend = document.querySelector("h1");
let afterStry = document.querySelector(".afterStory")
let timer = 6000;

function story() {
    let key = h3s.shift();
    key.classList.remove("disappear");
    setTimeout(() => {
        key.classList.add("disappear");
    }, timer);
}
setInterval(story, 6000);
setTimeout(()=>{
    // afterStry.classList.remove("disappear");
    h2.classList.remove("disappear");
},4000);
