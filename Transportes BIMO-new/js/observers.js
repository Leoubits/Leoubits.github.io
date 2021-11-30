const SECTION = document.querySelectorAll('section');
const TITLE_1 = document.querySelector('.title-container');
const TITLE_2 = document.querySelector('.title-container-2');
const ESTADO_IMG = document.querySelectorAll('.estado');
const CARD_NOSOTROS = document.querySelectorAll('.jscard');
const MAP_CONTACTO_HMO = document.querySelector('.map-hmo');
const MAP_CONTACTO_MEXI = document.querySelector('.map-mexi');

const OPTIONS = {
    threshold: 0.5,
    RootMargin: '200px'

};

const OBSERVER = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.target.classList[0] === 'header' && entry.isIntersecting) {

            TITLE_1.classList.add('translate');
            TITLE_2.classList.add('translate');
            OBSERVER.unobserve(entry.target);
        }
        else if (entry.target.classList[0] === 'rutas' && entry.isIntersecting) {
            ESTADO_IMG.forEach(image => {
                image.style.transform = 'translateY(10%)';
                image.style.opacity = '1';
                OBSERVER.unobserve(entry.target);
            });

        }
        else if (entry.target.classList[0] === 'nosotros' && entry.isIntersecting) {
            CARD_NOSOTROS.forEach(card => {
                card.style.animation = 'tranY 1s linear';
                card.style.opacity = '1';
                OBSERVER.unobserve(entry.target);
            });

        }
        else if (entry.target.classList[0] === 'contacto' && entry.isIntersecting) {

            MAP_CONTACTO_HMO.style.transform = 'translateX(0%)';
            MAP_CONTACTO_HMO.style.opacity = '1';
            MAP_CONTACTO_MEXI.style.transform = 'translateX(0%)';
            MAP_CONTACTO_MEXI.style.opacity = '1';
            OBSERVER.unobserve(entry.target);


        }

    })
}, OPTIONS);


SECTION.forEach(element => {
    OBSERVER.observe(element);
});



