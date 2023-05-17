const productQuantityControl = Array.from(document.querySelectorAll('.product__quantity-control'));
const productAdd = Array.from(document.querySelectorAll('.product__add'));
const cartProducts = document.querySelector('.cart__products');
const cartProduct = document.querySelector('.cart__product');
const cart__product = Array.from(document.querySelectorAll('.cart__product'));
const arrayId = [];

productQuantityControl.forEach((el) => {
   el.addEventListener('click', () => {
     let productNum = el.closest('.product').querySelector('.product__quantity-value');
     let timer = Number(productNum.textContent);
     if(el.classList.contains('product__quantity-control_dec')) {
       if(timer > 1){ productNum.textContent = timer + - 1;};
     }else{productNum.textContent = timer +  1};
   });
});

productAdd.forEach((el => {
   el.addEventListener('click', () => {
     let id = el.closest('.product').getAttribute('data-id');
     let product = el.closest('.product');
     let copyProductNum = Number(product.querySelector('.product__quantity-value').textContent);
     let copyProductAmg = product.querySelector('.product__image').getAttribute('src');
     
     if(arrayId.indexOf(+id) < 0){
         cartProducts.innerHTML += `<div class="cart__product" data-id="${id}">
         <img class="cart__product-image" src="${copyProductAmg}">
         <div class="cart__product-count">${copyProductNum}</div>
         </div>`;
     }
     arrayId.push(+id)

   });
}));