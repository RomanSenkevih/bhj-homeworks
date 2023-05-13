const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));

const removeClass = () => rotatorCase.forEach(el => el.classList.remove('rotator__case_active'));
let i = null;
let SInterval = 1000;
let x = setInterval(rotatorActive,  SInterval);

function rotatorActive() {
    i = rotatorCase.findIndex(element => element.classList.contains('rotator__case_active'));
    if(i < rotatorCase.length - 1){
        removeClass(); 
        i += 1;
        rotatorCase[i].classList.toggle('rotator__case_active');
        rotatorCase[i].style.color = rotatorCase[i].getAttribute('data-color');
        SInterval = +rotatorCase[i].getAttribute('data-speed');
        clearInterval(x);
        x = setInterval(rotatorActive,  SInterval);
    }else{
        removeClass(); 
        i = 0;
    }
};


