const HAMBURGER = document.querySelector('.hamburger');
const CONTAINER = document.querySelector('.hamburger-links');
const CLS_BTN = document.querySelector('.close_links');
const NAV_LINKS = document.querySelector('.nav-links');

NAV_LINKS.addEventListener('click', e => {
    let target = e.target.classList[0];
    if (target === 'link') {
        CONTAINER.classList.toggle('show-hamburger-menu');
    }
})

CLS_BTN.addEventListener('click', () => {
    CONTAINER.classList.toggle('show-hamburger-menu');
})

HAMBURGER.addEventListener('click', () => {
    CONTAINER.classList.toggle('show-hamburger-menu');
})

window.addEventListener('resize', () => {
    if (CONTAINER.clientWidth > '768' && CONTAINER.classList[1] === 'show-hamburger-menu') {
        CONTAINER.classList.toggle('show-hamburger-menu');
    }
})