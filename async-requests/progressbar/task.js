const progress = document.getElementById( 'progress' );
const xhr = new XMLHttpRequest();
const form = document.getElementById('form');
xhr.responseType = 'json';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === xhr.DONE){console.log(xhr.response.message)}
        
        xhr.upload.onprogress = (event) => {
                progress.value = event.loaded / event.total;
        };
        
    });

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
});