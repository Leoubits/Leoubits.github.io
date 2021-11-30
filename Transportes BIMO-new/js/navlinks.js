const HAMBURGER = document.querySelector('.hamburger');
const CONTAINER = document.querySelector('.nav-links-mob');
const BODY = document.querySelector('body');
const CLOSE_BTN = document.querySelector('.x_close');


HAMBURGER.addEventListener('click', () => {
    open();
    BODY.style.overflowY = 'hidden';

});

CONTAINER.addEventListener('click', element => {

    if (element.target.tagName === 'A' || 'LI' || 'SVG') {

        open();
        close_rotate();
        setTimeout(() => {
            resetStyle();
            BODY.style.overflowY = 'initial';
        }, 500);
    }
});
CLOSE_BTN.addEventListener('mouseover', () => {
    close_rotate();
    setTimeout(() => {
        resetStyle();
    }, 500);
});

function resetStyle() {
    CLOSE_BTN.style.transform = '';
}

function close_rotate() {
    CLOSE_BTN.style.transform = 'rotate(90deg)';
}
function open() {
    CONTAINER.classList.toggle('ham-open');
}

function disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () { window.scrollTo(x, y); };
}

function enableScrolling() {
    window.onscroll = function () { };
}