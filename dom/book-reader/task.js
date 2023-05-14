const fontSize = Array.from(document.querySelectorAll('.font-size'));
const color = Array.from(document.querySelectorAll('.color'));
const colorBackground = Array.from(document.querySelectorAll('.color_background'));
const book = document.querySelector('.book');

function removeClass(classConst, classNam) {classConst.forEach(el => el.classList.remove(classNam))};

function result(classArray, classArrayName,  bEl, cEl,  bBook, cBook){classArray.forEach((el) => {
  el.onclick = () => {
    removeClass(classArray, classArrayName);
    el.classList.add(classArrayName);
    if(el.classList.contains(bEl)){
        book.classList.remove(cBook);
        book.classList.add(bBook);
    } else if(el.classList.contains(cEl)){
        book.classList.remove(bBook);
        book.classList.add(cBook); 
    }else{book.classList.remove(bBook, cBook);};     
    return false;
    };
  });
}
result(fontSize, 'font-size_active', 'font-size_small', 'font-size_big', 'book_fs-small', 'book_fs-big');
result(color, 'color_active', 'text_color_whitesmoke', 'text_color_gray', 'book_color-whitesmoke', 'book_color-gray');
result(colorBackground, '.color_background', 'bg_color_black', 'bg_color_gray', 'book_bg-gray', 'book_bg-black');


