const reveal = document.querySelector('.reveal');

window.addEventListener('scroll',function isVisible() {
    const {top, bottom} = reveal.getBoundingClientRect();
    if(bottom < 100 || top > (window.innerHeight - 100)){
      reveal.classList.remove('reveal_active')
    }else{
        reveal.classList.add('reveal_active')
    }
});


