const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.clip-box');
const links = document.querySelectorAll('header ul li a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
});