const backgrounde = document.querySelector('.hero-image');
counter = 1;
setInterval(() => {
    backgrounde.style.backgroundImage = `url('../Transportes BIMO-new/styling/media/img/header/background/${counter}.jpeg')`;
    if (counter === 4) {
        counter = 1;
    } else {
        counter++;
    }

}, 2300);


