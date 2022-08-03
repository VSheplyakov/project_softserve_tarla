(function () {
  const slides = [
    '<div class="carouselImg"><img class ="carouselImg" src="images/first_carousel/croiddant_carousel.png" alt="carousel"></div>',
    '<div class="carouselImg"><img class ="carouselImg" src="images/first_carousel/croiddant_carousel1.png" alt = "Almond"></div>',
    '<div class="carouselImg"><img class ="carouselImg" src="images/first_carousel/croiddant_carousel2.png" alt = "Apricot"></div>',
    '<div class="carouselImg"><img class ="carouselImg" src="images/first_carousel/croiddant_carousel3.png" alt = "Choco"></div>'
  ];

  let currentSlide = 0;

    function renderCarousel() {
       const slidepContainer = document.querySelector('.fcarousel .carouselImg');
       slidepContainer.innerHTML = slides[currentSlide];
    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        renderCarousel();
    }

    function prevSlide() {
        currentSlide = currentSlide - 1 <= 0 ? slides.length - 1 : currentSlide - 1;
        renderCarousel();
    }

    const btnForward = document.querySelector('.fcarousel .forwardp');
    btnForward.addEventListener('click', nextSlide);

    const btnBack = document.querySelector('.fcarousel .backp');
    btnBack.addEventListener('click', prevSlide);

    window.addEventListener('resize', renderCarousel);

    renderCarousel();

})();