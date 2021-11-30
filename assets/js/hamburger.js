const BURGUER = document.querySelector('.menu');
const SUBMENU = document.querySelector('.side-menu');
const SUBMENULINK = document.querySelectorAll('.sub-menu_link');


BURGUER.addEventListener('click', () => {
    SUBMENU.classList.toggle('move-menu');
    if (SUBMENU.classList[1] === 'move-menu') {
        BURGUER.style.filter = 'invert(1)';
    } else {
        BURGUER.style.filter = 'invert(0)';
    }

});
SUBMENULINK.forEach(element => {

    element.addEventListener('click', () => {

        SUBMENU.classList.toggle('move-menu');
    })
})
