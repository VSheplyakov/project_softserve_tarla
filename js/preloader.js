// setTimeout(() => {
//   const preload = document.getElementById('preloader');
//   preload.style.display = 'none';
// }, 3000);

const preload = document.getElementById('preloader');
window.addEventListener('load', function(){
  preload.style.display = 'none';
})