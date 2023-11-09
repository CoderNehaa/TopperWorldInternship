// Brand Slogan animation

const text = document.getElementById('brand-slogan').textContent;
document.getElementById('brand-slogan').innerHTML = ''
let temp = ''
let index = 0;

const animationInterval = setInterval(() => {
    if (index < text.length) {
        temp = temp + text.charAt(index);
        document.getElementById('brand-slogan').innerHTML = temp;
        index++;
    } else {
        clearInterval(animationInterval); 
    }
}, 100);


// About section heading animation

const aboutHeading = document.querySelector(".aboutHeading");
const arr = aboutHeading.textContent.split("");
aboutHeading.textContent = '';

for(let i = 0; i < arr.length; i++){
    aboutHeading.innerHTML += "<span>" + arr[i] + "</span>"
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = aboutHeading.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;

    if(char === arr.length){
        clearInterval(timer);
        return
    }
}

// Reviews section heading animation

const reviewsHeading = document.querySelector(".reviewsHeading");
const reviewsHeadingArray = reviewsHeading.textContent.split("");

reviewsHeading.textContent = '';
for(let i = 0; i<reviewsHeadingArray.length; i++){
    reviewsHeading.innerHTML += "<span>"+reviewsHeadingArray[i]+"</span>"
}

let reviewHeadingChar = 0;
let reviewInterval = setInterval(reviewHeadingEffect, 50);

function reviewHeadingEffect(){
    const span = reviewsHeading.querySelectorAll('span')[reviewHeadingChar];
    span.classList.add('coloring');
    reviewHeadingChar++;

    if(reviewHeadingChar === reviewsHeadingArray.length){
        clearInterval(reviewInterval);
        reviewInterval = null;
        return
    }
}

