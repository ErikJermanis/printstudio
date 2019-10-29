const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav');
const links = document.querySelector('header ul li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});