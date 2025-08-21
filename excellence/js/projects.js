export default function initProjects() {
  const projects = [
    { title: "Branding", image: "./assets/portfolio/portfolio1.png" },
    { title: "Product Design", image: "./assets/portfolio/portfolio2.png" },
    { title: "Logo Design", image: "./assets/portfolio/portfolio3.png" },
    { title: "UI/UX Design", image: "./assets/portfolio/portfolio3.png" },
  ];

  const slidesContainer = document.getElementById("portfolioSwiperWrapper");
  if (slidesContainer) {
    slidesContainer.innerHTML = projects
      .map(
        (project, index) => `
        <div class="swiper-slide">
          <div class="project-card"  data-index="${index}">
            <div class="project-details">
              <h3 class="project-title">
                <span class="project_number">0${index + 1}</span> ${
          project.title
        }
              </h3>
              <button class="arrow-btn" data-index="${index}">
                <img src="./assets/arrow45.png" alt="Arrow Icon" />
              </button>
            </div>
            <div class="image-wrapper">
              <img src="${project.image}" alt="${
          project.title
        }" class="project-image" />
            </div>
          </div>
        </div>
      `
      )
      .join("");
  }

  // Swiper config
  const getResponsiveConfig = () => ({
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  window.myProjectsSwiper = new Swiper(".portfolio-swiper", {
    ...getResponsiveConfig(),
    loop: true,
    grabCursor: true,
    effect: "slide",
    speed: 600,
    navigation: {
      nextEl: "#WorkNextBtn",
      prevEl: "#WorkPrevBtn",
    },
  });
}
