const tasksAdd = document.querySelector('.tasks__add');
const tasksInput = document.querySelector('.tasks__input');
const tasksList = document.querySelector('.tasks__list');

tasksAdd.addEventListener('click', (event)  => {
  event.preventDefault();
  if(tasksInput.value.trim() != ''){
  tasksList.insertAdjacentHTML('afterbegin', `
          <div class="task">
              <div class="task__title">
                  ${tasksInput.value}
              </div>
              <a href="#" class="task__remove">&times;</a>
          </div>`
          );
  tasksInput.value = '';
  };
});

tasksList.addEventListener("click", e => {
    console.log(e.target)
    if (e.target.classList.contains("task__remove")) {
      e.target.parentElement.remove();
    }
});