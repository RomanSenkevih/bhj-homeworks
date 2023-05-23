const hasTooltips = document.querySelectorAll('.has-tooltip');

hasTooltips.forEach((elem) => {
    let text = elem.title;
    let tmpl = `<div class="tooltip">${text}</div>`;
    elem.insertAdjacentHTML('afterEnd', tmpl);
});

const tooltips = document.querySelectorAll('.tooltip');

for (let i = 0; i < hasTooltips.length; i++) {
    hasTooltips[i].addEventListener('click', (e) => {
        e.preventDefault();

        if (tooltips[i].classList.contains('tooltip_active')) {
            tooltips[i].classList.remove('tooltip_active');
        } else {
            if (document.querySelector('.tooltip_active')) {
                document.querySelector('.tooltip_active').classList.remove('tooltip_active');
            }
            tooltips[i].classList.add('tooltip_active');
        };

        let active = document.querySelector('.tooltip_active');
       
        window.addEventListener('scroll', () => {
            let {left, top} = hasTooltips[i].getBoundingClientRect();
            active.style.left = `${left}px`;
            active.style.top = `${top + 25}px`;  
        });
          
        try {
          let {left, top} = hasTooltips[i].getBoundingClientRect();  
          active.style.left = `${left}px`;
          active.style.top = `${top + 25}px`;
        } catch (err) {
            console.log('Все хорошо)))');
        };
    });
};
