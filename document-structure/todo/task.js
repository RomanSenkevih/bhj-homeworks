const tasks__add = document.querySelector('.tasks__add');
const tasks__input = document.querySelector('.tasks__input');
const tasks__list = document.querySelector('.tasks__list');

tasks__add.addEventListener('click', (event)  => {
  event.preventDefault();

  if(tasks__input.value != ''){
  tasks__list.innerHTML += `
    <div class="task">
       <div class="task__title">
          ${tasks__input.value}
       </div>
       <a href="#" class="task__remove">&times;</a>
    </div>`;
  tasks__input.value = '';
  removesAnElement();
  };
});

function removesAnElement() {
    let task__remove = Array.from(document.querySelectorAll('.task__remove'));
    task__remove.forEach((el) => {
        el.addEventListener('click', () => {
            el.parentElement.classList.add('remuve');
        });
    });
};