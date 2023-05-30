const signinForm = document.querySelector('#signin__form');
const welcome = document.querySelector('#welcome');
const signin = document.querySelector('#signin');
const url = 'https://students.netoservices.ru/nestjs-backend/auth';
const xhr = new XMLHttpRequest();
xhr.responseType = 'json';
let id;

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(signinForm);
    xhr.open('POST', url);
    xhr.send(formData);

    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === xhr.DONE) {
            if(xhr.response.success === true){
                id = xhr.response.user_id;
                localStorage.setItem('id', JSON.stringify(id));
                welcome.classList.add('welcome_active');
                welcome.innerHTML = `Добро пожаловать, пользователь #<span id="user_id">${id}</span>`;
                signin.classList.remove('signin_active');
               } else {
                  alert('Неверный логин/пароль!')
               } ;
        };
      }); 
});

window.addEventListener('load', () => {
  id = localStorage.getItem('id')  
  if(id) {
    welcome.classList.add('welcome_active');
    welcome.innerHTML = `Добро пожаловать, пользователь #<span id="user_id">${id}</span>`;
    signin.classList.remove('signin_active');
  };
});

