const hamburger = document.querySelector('.toggler');
const navLinks = document.querySelector('.clip-box');
const links = document.querySelectorAll('header ul li a');
const line = document.querySelector('.line');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    line.classList.toggle('opena');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
});