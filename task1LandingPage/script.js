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

// Clicking on hamberger icon
const navbarMenu = document.querySelector('.navbar-menu');
const hambergerIcon = document.querySelector('.hamberger-icon');
const closeNavbar = document.querySelector('.closeNavbar');
const logo = document.querySelector('.logo');

hambergerIcon.addEventListener('click', () => {
    navbarMenu.style.display = 'flex';
    closeNavbar.style.display = 'block';
    hambergerIcon.style.display = 'none';
    logo.style.display = 'none';
})

closeNavbar.addEventListener('click', () => {
    navbarMenu.style.display = 'none';
    closeNavbar.style.display = 'none';
    hambergerIcon.style.display = 'block';
    logo.style.display = 'block';
})

const sections = document.getElementsByTagName('section');
