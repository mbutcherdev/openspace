const carouselContent = document.querySelector(".carousel-content");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const planetSlides = document.querySelectorAll(".planet-slide");

let currentIndex = 0;

function goToSlide(slideIndex) {
  planetSlides[currentIndex].style.opacity = "0";
  planetSlides[currentIndex].style.position = "absolute";
  planetSlides[slideIndex].style.opacity = "1";
  planetSlides[slideIndex].style.position = "relative";
  currentIndex = slideIndex;
}

prevButton.addEventListener("click", () => {
  let newIndex = currentIndex - 1;
  if (newIndex < 0) newIndex = planetSlides.length - 1;
  goToSlide(newIndex);
});

nextButton.addEventListener("click", () => {
  let newIndex = currentIndex + 1;
  if (newIndex >= planetSlides.length) newIndex = 0;
  goToSlide(newIndex);
});

// Set the first slide as active
planetSlides[0].style.opacity = "1";
planetSlides[0].style.position = "relative";
