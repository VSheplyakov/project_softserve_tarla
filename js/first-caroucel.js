(function () {
  const slides = [
    `<img class ="carouselImg" src="./images/first_carousel/carouselImg0.png" alt="carouselImg0">`,
    `<img class ="carouselImg" src="./images/first_carousel/carouselImg1.png" alt="carouselImg1">`,
    `<img class ="carouselImg" src="./images/first_carousel/carouselImg2.png" alt="carouselImg2">`,
    `<img class ="carouselImg" src="./images/first_carousel/carouselImg4.png" alt="carouselImg4">`,
    `<img class ="carouselImg" src="./images/first_carousel/carouselImg5.png" alt="carouselImg5">`,
    `<img class ="carouselImg" src="./images/first_carousel/carouselImg6.png" alt="carouselImg6">`,
    `<img class ="carouselImg" src="./images/first_carousel/carouselImg7.png" alt="carouselImg7">`,
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

  const btnForward = document.querySelector('.forwardp');
  btnForward.addEventListener('click', nextSlide);

  const btnBack = document.querySelector('.backp');
  btnBack.addEventListener('click', prevSlide);

  window.addEventListener('resize', renderCarousel);

  renderCarousel();
})();
