const interestCheck = Array.from(document.querySelectorAll('.interest__check'));

interestCheck.forEach((el) =>{
  el.addEventListener('change', () => {
    let parent = el.closest('.interest');
    let array = Array.from(parent.querySelectorAll('.interest__check'));
    let x = el
    if(el.checked){
        array.forEach((el) => {
            el.checked = true
            el.addEventListener('change', () => {
                if(!el.checked){
                  x.indeterminate = true;
                el.closest('.interest').parentElement.parentElement.querySelector('.interest__check').indeterminate = true;
                }else{
                    x.indeterminate = false;
                    el.closest('.interest').parentElement.parentElement.querySelector('.interest__check').indeterminate = false; 
                }
            })
        }); 
    }else{
        array.forEach((el) => {el.checked = false}); 
    };

  });
});