const carouselSlide = (n) => {
    const carousel = document.querySelector('.carousel');
    carousel.scrollLeft += carousel.offsetWidth * n;
  };
  