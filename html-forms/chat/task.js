const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector( '.chat-widget__messages' );
const chatWidgetInput = document.querySelector('.chat-widget__input');
const scrollX = document.querySelector('.chat-widget__messages-container');
const date = new Date();
const minutes = date.getMinutes();
const hour = date.getHours();
const daneResult = hour +':'+ minutes;
const array = ['Доброго времени суток!', 'Кто ты воин?', 'Как Вас зовут?', 'Как ваши дела?', 'Вам нравится  Сунатора Яблонева (Самисько)?', 'Свяжитесь с человеком', 'Я вас не понимаю!', 'Иди мамку так называй', 'скучно', 'Как с вами можно связаться']

chatWidget.addEventListener('click', function () {
    chatWidget.classList.add('chat-widget_active');
    setTimeout(() => messageBot(), 30000)
});

function messageBot() {
    let i = Math.floor(Math.random() * 10);
                messages.innerHTML += `
                <div class="message">
                    <div class="message__time">${daneResult}</div>
                    <div class="message__text">${array[i]}</div>
                </div>`             
};

    chatWidget.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        if(chatWidgetInput.value){
            messages.innerHTML += `
            <div class="message message_client">
            <div class="message__time">${daneResult}</div>
            <div class="message__text">${chatWidgetInput.value}</div>
        </div>
            `;
            messageBot();
            chatWidgetInput.value = "";
            scrollX.scrollTop = scrollX.scrollHeight;
        }
      }
    });

    
  
  

    

  