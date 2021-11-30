
const CARD_INFO = [
    {
        title: 'Blanqueamiento Dental',
        p_1: 'En primer lugar, las encías y las superficies de las raíces se cubrirán con una barrera protectora para mayor seguridad.',
        p_2: 'Un dispositivo delgado de plástico actuará como separador de los labios y las mejillas, ya que se aplicará un fuerte gel de peróxido de hidrógeno de uso profesional.',
        p_3: ' Este gel se dejará durante una hora aproximadamente. Cuando se quite, los resultados serán notorios de inmediato.',
        url: '../media/img/services-page/cards/white.jpeg'
    },
    {
        title: 'Aplicación de Resina',
        p_1: 'Las resinas dentales son restauraciones estéticas de los dientes, que se pueden utilizar en dientes dañados o cariados en las cuales el material que se utiliza es precisamente la resina.',
        p_2: 'Las resinas dentales se utilizan como una alternativa estética en lugar de las amalgamas comunes y también pueden utilizarse para corregir fisuras y grietas.',
        p_3: 'La gran mayoría de pacientes actualmente prefiere utilizar resinas sobre amalgamas y son varias las razones: El mercurio utilizado en las amalgamas es tóxico. ',
        url: '../media/img/services-page/cards/resinas dentales.jpg'
    },
    {
        title: 'Ortodoncia',
        p_1: 'Es la total corrección de los dientes y huesos posicionados incorrectamente. Se utilizan diversos tipos de aparatos, fijos y removibles, para mover los dientes, volver a entrenar los músculos y modificar el crecimiento de las mandíbulas.',
        p_2: 'Los dientes en mala posición y los que no muerden correctamente unos contra otro son difíciles de mantener limpios, corren riesgos de pérdida precoz debido a caries y enfermedades periodontales',
        p_3: 'Los tratamientos ortodóncicos tienen la ventaja de proporcionarnos una boca sana, una sonrisa de aspecto agradable y dientes con mayores posibilidades de durar toda la vida',
        url: '../media/img/services-page/cards/Ortodoncia.jpg'
    },
    {
        title: 'Endodoncia',
        p_1: 'Si tiene un diente o una muela seriamente dañada, picada o una infección dental seria (absceso), su dentista podría recomendarle un tratamiento endodóntico. Las endodoncias se utilizan para reparar y salvar su diente o muela en vez de extraerla.',
        p_2: 'Si se deja sin tratar, los tejidos que hay alrededor de la raíz de su diente o muela pueden infectarse.',
        p_3: 'Una infección puede asimismo ponerle en riesgo de perder su diente o muela, ya que las bacterias pueden dañar el hueso que lo conecta con la mandíbula.',
        url: '../media/img/services-page/cards/endodoncia.jpg'
    },
    {
        title: 'Puentes Dentales',
        p_1: 'Las prótesis dentales a base de puentes dentales tienen la función de reemplazar uno o más dientes.',
        p_2: 'Ellos pueden ser hechos de los mismos materiales como las coronas dentales, la diferencia entre ellos es que los puentes están formados por un mínimo de 2 coronas.',
        p_3: 'En este caso el puente se cementa sobre los dientes adyacentes a los dientes que faltan.',
        url: '../media/img/services-page/cards/puente.jpg'
    },
    {
        title: 'Coronas Dentales',
        p_1: 'Las coronas son una cubierta que se ajusta sobre un diente dañado, deteriorado o poco atractivo. Puede incluso reemplazar un diente por completo como parte de la construcción de un puente dental.',
        p_2: 'Si un diente ha perdido una cantidad considerable de estructura por encima de la línea de la encía, la corona sería la restauración apropiada.',
        p_3: 'Las coronas fortalecen los dientes dañados, permitiéndoles volver a funcionar normalmente. Cuando son elaboradas con las porcelanas de alta tecnología de hoy en día (cerámicas dentales), son prácticamente indistinguibles de los dientes naturales.',
        url: '../media/img/services-page/cards/corona.jpg'
    },
    {
        title: 'Anestesía Digital',
        p_1: 'Este método consta de un suministro de anestesia local oral regulada por la máquina digital y provee un flujo lento y constante del líquido anestésico, lo cual hace sin dolor generando una sensación de anestesia más cómoda para el paciente.',
        p_2: ' Con la técnica convencional (clásica jeringa de dentista) el flujo de líquido no es constante y depende mucho del operador, lo cual hace que normalmente duela al entrar en la encía.',
        p_3: 'Gracias a esta técnica, el proceso es indoloro y con menor adormecimiento colateral tras la intervención. ',
        url: '../media/img/services-page/cards/anestesia.jpg'
    },
    {
        title: 'Profilaxis Dental',
        p_1: 'Con este procedimiento eliminamos las capas de sarro, placa bacteriana y manchas en los dientes. Su objetivo es mantener la higiene bucodental, prevenir y encontrar problemas de la dentadura.',
        p_2: 'En su ejecución, interviene el odontólogo aplicando técnicas de limpieza, pulido y desinfección. Se limpian los espacios interdentales utilizando de hilo dental o cepillo interproximal.',
        p_3: 'Si se requiriera la eliminación de manchas, se aplica agua a presión en la que se ha diluido un bicarbonato específico.  Por último, se realiza el pulido de los dientes utilizando una pasta fluorada y blanqueadora que se extiende sobre los dientes para alisar la superficie de los dientes.',
        url: '../media/img/services-page/cards/profilaxis.jpg'
    },
    {
        title: 'Emeregencias',
        p_1: 'En Espinoza Clínica Dental, somos una prestigiada institución médica con más de 30 años de experiencia en el campo dental. Nuestra prioridad es ofrecer el mejor servicio y enfocarnos en tener total disposición.',
        p_2: 'Brindamos el mejor servicio con disponibilidad total las 24 hora del día, apoyandote cuando más nos necesites.',
        p_3: 'Actuamos bajo el concepto de servicio y presteza con lo cual puedes tener seguro que estás en las mejores manos, con experiencia y el mejor trato humano.',
        url: '../media/img/services-page/cards/emergencia.jpg'
    },
]

const H2 =
    document.querySelector('.info-wrapper h2');
const P_FIRST =
    document.querySelector('.first_p');
const P_MID =
    document.querySelector('.justified');
const P_LAST =
    document.querySelector('.last_p');
const IMG_WRAPPER =
    document.querySelector('.services-img-wrapper');
const CARD_CONTAINER
    = document.querySelector('.card-wrapper');
const ANCHOR =
    document.querySelector('#start');
const CLASSES =
    document.querySelector['0', '1', '2', '3', '4', '5', '6', '7', '8'];

CARD_CONTAINER.addEventListener('click', e => {
    ANCHOR.scrollIntoView(true);
    history.replaceState([], "", window.location.href.split('#')[0]);
    let target = e.target.classList[1];

    if (target != undefined) {
        H2.textContent = CARD_INFO[target].title;
        P_FIRST.textContent = CARD_INFO[target].p_1;
        P_MID.textContent = CARD_INFO[target].p_2;
        P_LAST.textContent = CARD_INFO[target].p_3;
        IMG_WRAPPER.style.backgroundImage = `url('${CARD_INFO[target].url}')`;
    }

})