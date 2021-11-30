const CARD_WRAPPER =
    document.querySelector('.slide-card-wrapper');
const PRODUCT_CARDS =
    ['0', '1', '2', '3', '4', '5', '6'];
const INFO_WRAPPER =
    document.querySelector('.info-content');
const TITLE =
    document.querySelector('.info-title h1');

const PRODUCTS = [
    {
        title: 'Línea de ceramicas.',
        item_1: {
            h4: 'Agregado de Metal.',
            p_1: "Metal porcelana.",
            p_2: "Metal porcelana Collar Less.",
            h4_1: 'Libre de Metal.',
            p_3: "Porcelana prensada EMAX.",
            p_4: "Coronas totales y full contour Zirconia-Porcelana CadCam.",
            p_5: 'Incrustaciones y carillas EMAX y de porcelana.'
        }
    },
    {
        title: ' Línea de metales.',
        item_1: {
            h4: 'Material de teconología Seiphax© alemana. ',
            p_1: "Corona Total Metal.",
            p_2: "Incrustación Inlay y Onlay.",
            p_3: "Poste vaciado directo Verasoft y Regio cast."
        }

    },
    {
        title: ' Línea de placas.',
        item_1: {
            h4: "placas de naturaleza flexible",
            p_1: "Placa total, cerrada, parcial bilateral y unilateral Flexible Lucitone FRS.",
            p_2: "Guarda anatómico color diente PRXIII."
        }
    },
    {
        title: 'Línea de acrílicos.',
        item_1: {
            h4: "Materiales con duración extendida",
            p_1: "Placa total, parcial y cerrada de acrílico normal.",
            p_2: "Placa total, parcial y cerrada de acrílico resinado de alto impacto.",
            p_3: "Guarda oclusal biológico de acrílico Termocurable.",
            p_4: "Provisional acrílico."
        }

    },
    {
        title: 'Línea de removibles de metal.',
        item_1: {
            h4: 'Comodidad asegurada con nuestros productos.',
            p_1: "Puentes removibles bilateral y unilaterales metal-acrílico (metales libres de Berilio, nickel y fierro)."
        }

    },
    {
        title: 'Línea de resinas.',
        item_1: {
            h4: 'Directo de nuestro laboratorio',
            p_1: "Incrustaciones, carillas y coronas totales.",
            p_2: "Encerados de Diagnostico.",
            p_3: "Placas Holey."
        }

    }
]

CARD_WRAPPER.addEventListener('click', e => {
    let target = e.target.classList[1];
    let target_num = Number(target);
    INFO_WRAPPER.textContent = '';
    if (PRODUCT_CARDS.includes(target)) {
        TITLE.textContent = PRODUCTS[target_num].title;
        const newDiv = document.createElement('div');
        newDiv.classList.add('info-wrapper');

        Object.entries(PRODUCTS[target_num].item_1).forEach(
            ([key, value]) => {
                if (key === 'h4' || key === 'h4_1') {
                    const H4 = document.createElement('h4');
                    H4.textContent = value;
                    newDiv.appendChild(H4);
                    INFO_WRAPPER.appendChild(newDiv);

                } else {
                    const Para = document.createElement('p');
                    const IMG = new Image();
                    IMG.src = "https://img.icons8.com/external-flatart-icons-outline-flatarticons/15/000000/external-check-basic-ui-elements-flatart-icons-outline-flatarticons.png";
                    Para.textContent = value;
                    Para.prepend(IMG);
                    newDiv.appendChild(Para);
                    INFO_WRAPPER.appendChild(newDiv);
                }
            }

        );

    }

})