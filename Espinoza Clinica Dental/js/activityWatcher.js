const BTN_MODAL =
    document.querySelector('.welcome');
const BTN_MODAL_CT =
    document.querySelector('.contacto-info');
const MODAL =
    document.querySelector('.contacto-modal');
const CLS_MODAL =
    document.querySelector('.close_btn');

BTN_MODAL.addEventListener('click', e => {
    let objeto_target = e.target;
    if (objeto_target.classList[0] === 'cita') {
        MODAL.classList.toggle('show');
        document.body.style.overflow = 'hidden';
    }

});
CLS_MODAL.addEventListener('click', () => {
    MODAL.classList.toggle('show');
    document.body.style.overflow = 'initial';
})

BTN_MODAL_CT.addEventListener('click', e => {

    let objeto_target = e.target;
    if (objeto_target.classList[0] === 'cita') {
        MODAL.classList.toggle('show');
        document.body.style.overflow = 'hidden';
    }

})

function activityWatcher() {

    let noActivity = 0;
    let pivot = 3;



    let interval = setInterval(() => {
        noActivity++;
        addEvents();
        if (noActivity > pivot) {
            document.body.style.overflow = 'hidden';
        }
    }, 1000);



    function activity() {
        noActivity = 0;
        document.body.style.overflow = 'visible';
    }

    var activityEvents = [
        'mousedown', 'mousemove', 'keydown',
        'scroll', 'touchstart'
    ];
    function addEvents() {
        activityEvents.forEach(function (eventName) {
            document.addEventListener(eventName, activity);
        });
    }


}

// activityWatcher();


