const accordion = document.querySelectorAll('.about__accordion-items');


for(item of accordion) {
  item.addEventListener('click', function() {
    this.classList.toggle('active')
  });
   
};