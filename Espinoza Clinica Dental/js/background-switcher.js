const CONTAINER_WELCOME = document.querySelector('.front-welcome');
let bk_count = 1;

setInterval(() => {
    CONTAINER_WELCOME.style.backgroundImage = `url(./media/img/front-welcome/${bk_count}.jpeg)`;
    if (bk_count === 4) {
        bk_count = 1;
    } else {
        bk_count++;
    }

}, 2800);