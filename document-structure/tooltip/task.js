const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

hasTooltip.forEach((el) => {
  el.addEventListener('click', (event) => {
    let attribute = el.getAttribute('title')
    el.insertAdjacentHTML('beforeEnd', `<div class="tooltip">${attribute}</div>`);
    let tooltip = el.querySelector('.tooltip');
    removeX();
    tooltip.classList.toggle('tooltip_active');
    

    let {left, top} = el.getBoundingClientRect();
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top + 25}px`;

    window.addEventListener('scroll', () => {
        let {left, top} = el.getBoundingClientRect();
        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top + 25}px`;  
    })

    event.preventDefault();
    
  })
});

function removeX() {
    let xx = Array.from(document.querySelectorAll('.tooltip')); 
    xx.forEach((el) => {
        
        el.classList.remove('tooltip_active');
    }) 
}