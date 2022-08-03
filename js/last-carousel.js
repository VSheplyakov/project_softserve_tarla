(function () {
  const DOM = [
    `<div class="last__carousel-images"><img src="./images/last_carousel/baked1.png" alt="baked1" class="last__carousel-img"></div>`,
    `<img src="./images/last_carousel/baked2.png" alt="baked2" class="last__carousel-img">`,
    `<img src="./images/last_carousel/baked3.png" alt="baked3" class="last__carousel-img">`,
    `<img src="./images/last_carousel/baked4.png" alt="baked4" class="last__carousel-img">`,
    `<img src="./images/last_carousel/baked5.png" alt="baked5" class="last__carousel-img">`,
  ];

  let currentSlide = 0;

  function renderCarousel() {
    const slideContainer = document.querySelector('.last__carousel-images');
    slideContainer.innerHTML = DOM[currentSlide];
    if (window.innerWidth >= 600) {
      const secondSlide = currentSlide + 1 >= DOM.length ? 0 : currentSlide + 1;
      slideContainer.innerHTML += DOM[secondSlide];
      if (window.innerWidth >= 900) {
        const thirdSlide = secondSlide + 1 >= DOM.length ? 0 : secondSlide + 1;
        slideContainer.innerHTML += DOM[thirdSlide];
        if (window.innerWidth >= 1200) {
          const fourthSlide = thirdSlide + 1 >= DOM.length ? 0 : thirdSlide + 1;
          slideContainer.innerHTML += DOM[fourthSlide];
        }
      }
    }
  }

  function nextSlide() {
    currentSlide = currentSlide + 1 >= DOM.length ? 0 : currentSlide + 1;
    renderCarousel();
  }

  setInterval(nextSlide, 1500);
  renderCarousel(0);

  window.addEventListener('resize', renderCarousel);
})();
