const xhr = new XMLHttpRequest();
const loader = document.querySelector('.loader');
const items = document.querySelector('#items');

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE){
        loader.classList.remove('loader_active');
        console.log(xhr.response.response.Valute)
        const arrey = xhr.response.response.Valute;
        const getOwnPropertyNames = Object.getOwnPropertyNames(arrey);

        getOwnPropertyNames.forEach(key => {
            items.insertAdjacentHTML('afterBegin', `
               <div class="item"> 
                  <div class="item__code">
                    ${key}
                  </div>
                  <div class="item__value">
                    ${arrey[key].Value}
                  </div>
                  <div class="item__currency">
                    руб.
                  </div>
                </div> `);
        });   
    };
});

xhr.send();