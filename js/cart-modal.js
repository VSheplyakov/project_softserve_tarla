const modal = document.querySelector('.cart_block');

const openCart = document.querySelector('.cart-btn');

const closeCart = document.querySelector('.cart-close');

openCart.onclick = function () {
  modal.style.display = 'block';
};

closeCart.onclick = function () {
  modal.style.display = 'none';
};

// window.onclick = function (event) {
//   if (event.target === modal) {
//     modal.style.display = 'none';
//   }
// };