const MENU = document.querySelector('.menu');

MENU.addEventListener('click', () => {
    MENU.style.opacity = '0';
    setTimeout(() => {
        MENU.style.opacity = '1';
        console.log(MENU.src);
        if (MENU.src === 'http://127.0.0.1:5500/assets/images/nav/menu/1.png') {
            MENU.src = ('./assets/images/nav/menu/x.png');
        } else {
            MENU.src = ('./assets/images/nav/menu/1.png');
        }

    }, 500);

});