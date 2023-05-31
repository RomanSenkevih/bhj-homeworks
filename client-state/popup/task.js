const subscribeModal = document.querySelector('#subscribe-modal');
const modalClose = document.querySelector('.modal__close');

modalClose.addEventListener('click', () => {
    subscribeModal.classList.remove('modal_active'); 
    document.cookie = 'id=true; Expires=Mon, 01 May 2028 21:41:37 GMT';
});

window.addEventListener('load', () => {
    if(document.cookie){
        subscribeModal.classList.remove('modal_active');
    } else {
        subscribeModal.classList.add('modal_active');
    };
});