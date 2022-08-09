const itemName = document.querySelector('.shop_name');
const itemQuantity = document.querySelector('.kit-q');
const itemPrice = document.querySelector('.kit-p');
const cartBtn = document.querySelector('.shop_btn');
let cartItem = document.querySelector('.cart-items');
let result = `<div>Cart is Empty</div>`;

cartItem.innerHTML = result;
cartBtn.addEventListener(
  'click',
  () => (result = `${itemName} + ${itemQuantity} + ${itemPrice}`)
);
