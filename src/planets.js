document.addEventListener("DOMContentLoaded", function () {
  let planetsData = [];

  fetch("src/data/planet-data.json")
    .then((response) => response.json())
    .then((planets) => {
      planetsData = planets;
      const carouselContent = document.querySelector(".carousel-content");

      planets.forEach((planet) => {
        const planetSlide = document.createElement("div");
        planetSlide.classList.add("planet-slide");
        const planetImg = document.createElement("div");
        planetImg.classList.add("planet-img");
        const img = document.createElement("img");
        img.src = planet.image;
        img.alt = `Image of ${planet.name}`;
        planetImg.appendChild(img);

        const planetInfo = document.createElement("div");
        planetInfo.classList.add("planet-info");

        const name = document.createElement("h2");
        name.textContent = `Name: ${planet.name}`;
        const orbitLocation = document.createElement("p");
        orbitLocation.textContent = `Orbit location: ${planet.orbitLocation}`;
        const orbitDuration = document.createElement("p");
        orbitDuration.textContent = `Duration of orbit: ${planet.orbitDuration}`;
        const moons = document.createElement("p");
        moons.textContent = `Moons: ${planet.moons}`;

        planetInfo.appendChild(name);
        planetInfo.appendChild(orbitLocation);
        planetInfo.appendChild(orbitDuration);
        planetInfo.appendChild(moons);

        planetSlide.appendChild(planetImg);
        planetSlide.appendChild(planetInfo);
        carouselContent.appendChild(planetSlide);
      });

      initCarousel();
      updateDescription(planetsData[0].description);
    })
    .catch((error) => {
      console.error("Error fetching planet data:", error);
    });

  function initCarousel() {
    const slides = document.querySelectorAll(".planet-slide");
    const prevBtn = document.querySelector(".carousel-btn.prev-btn");
    const nextBtn = document.querySelector(".carousel-btn.next-btn");
    let currentSlide = 0;

    slides[currentSlide].classList.add("active");

    prevBtn.addEventListener("click", function () {
      goToSlide(currentSlide - 1);
    });

    nextBtn.addEventListener("click", function () {
      goToSlide(currentSlide + 1);
    });

    function goToSlide(n) {
      slides[currentSlide].classList.remove("active");
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].classList.add("active");
      updateDescription(planetsData[currentSlide].description);
    }
  }
});

function updateDescription(description) {
  for (const key in description) {
    const formattedKey = key.replace(/[: -]/g, "_").toLowerCase();
    const element = document.querySelector(`.${formattedKey}`);
    if (element) {
      element.textContent = `${description[key]}`;
    }
  }
}
