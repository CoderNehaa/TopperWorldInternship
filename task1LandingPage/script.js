// Brand Slogan animation = Reveal letters one by one 
const text = document.querySelector(".reveal-letters-effect").textContent;
document.querySelector(".reveal-letters-effect").innerHTML = ''
let str = ''
let index = 0;

const animationInterval = setInterval(() => {
    if (index < text.length) {
        str = str + text.charAt(index);
        document.querySelector(".reveal-letters-effect").innerHTML = str;
        index++;
    } else {
        clearInterval(animationInterval); 
    }
}, 100);
