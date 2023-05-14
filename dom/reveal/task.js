const reveal = document.querySelector('.reveal');

function isVisible() {
    const {top, bottom} = reveal.getBoundingClientRect();
    if(bottom < 0 || top > window.innerHeight){
      reveal.classList.remove('reveal_active')
    }else{
        reveal.classList.add('reveal_active')
    }
};
 setInterval(isVisible, 1000);

