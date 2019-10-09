const hamburger = document.querySelector('.hamburger');
const navigacija = document.querySelector('.navigacija');
const linkovi = document.querySelectorAll('.navigacija li');
const a = document.querySelectorAll('.navigacija a');

hamburger.addEventListener('click', () => {
    navigacija.classList.toggle('open');
});

a.forEach(gumb => {
    gumb.addEventListener('click', () => {
        navigacija.classList.toggle('open');
    });
});

