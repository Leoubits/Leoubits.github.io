const CONTAINER = document.querySelector('.contact-inner-wrapper');

CONTAINER.addEventListener('click', e => {
    let selectable = e.target.classList[0];
    if (selectable === 'location' || selectable === 'phone' || selectable === 'email') {
        document.execCommand('copy');
        let popup = e.target.nextElementSibling;
        setTimeout(() => {
            popup.classList.toggle('display-pop');
        }, 500);

        setTimeout(() => {
            popup.classList.toggle('display-pop');
        }, 1500);
    }
})