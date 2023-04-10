document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel-content");
  const slides = document.querySelectorAll(".planet-slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentSlide = 0;

  function updateSlides() {
    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.style.position = "relative";
        slide.style.opacity = 1;
      } else {
        slide.style.position = "absolute";
        slide.style.opacity = 0;
      }
    });
  }

  function goToNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides();
  }

  function goToPrevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides();
  }

  prevBtn.addEventListener("click", goToPrevSlide);
  nextBtn.addEventListener("click", goToNextSlide);

  updateSlides();
});
