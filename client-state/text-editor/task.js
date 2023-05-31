const editor = document.querySelector('#editor');

window.addEventListener('keyup', () => {
    localStorage.setItem('text', editor.value);
})

window.addEventListener('load', () => {
  if(localStorage.getItem('text')) {
    editor.value = localStorage.getItem('text');
  }
});