const xhr = new XMLHttpRequest();
const pollTitle = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';

xhr.addEventListener('load', (e) => {
    let title = xhr.response.data.title;
    let answers = xhr.response.data.answers;
    pollTitle.textContent = title;

    for(let i = 0; i < answers.length; i++){
        pollAnswers.insertAdjacentHTML('afterBegin', `<button class="poll__answer">${answers[i]}</button>`);  
    };

    const pollAnswer = Array.from(document.querySelectorAll('.poll__answer'));

    pollAnswer.forEach(el => {
        el.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!');
        })
    })
    // e.preventDefault();
});

xhr.send();