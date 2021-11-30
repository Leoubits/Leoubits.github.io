(function () {
    emailjs.init("user_MtJerNx4vWyUVUbYg9ls1");
})();

const NAME = document.querySelector('.name_s');
const MAIL = document.querySelector('.mail');
const MSN = document.querySelector('.msn');


const FORM = document.querySelector('.form');
const BTN = document.querySelector('.btnSend');

const MODAL = document.querySelector('.modal-mail-sent');

FORM.addEventListener('submit', e => {
    e.preventDefault();
    MODAL.classList.toggle('show-modal-mail-sent');
    setTimeout(() => {
        MODAL.classList.toggle('show-modal-mail-sent');
    }, 2000);
    let templateParams = {
        name: NAME.value,
        from_name: MAIL.value,
        message: MSN.value

    };

    emailjs.send('service_7pkwywr', 'template_dtr4qym', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });

})

