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

  // Responsive slides configuration
  const getResponsiveConfig = () => ({
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 25 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
    },
  });

  window.myProjectsSwiper = new Swiper(".portfolio-swiper", {
    ...getResponsiveConfig(),
    loop: true,
    effect: "slide",
    grabCursor: false,
    speed: 600,
    navigation: {
      nextEl: "#WorkNextBtn",
      prevEl: "#WorkPrevBtn",
    },
  });

  // --- Custom Cursor ---
  const cursor = document.createElement("div");
  cursor.classList.add("custom-cursor");
  document.body.appendChild(cursor);

  Object.assign(cursor.style, {
    position: "fixed",
    width: "100px",
    height: "100px",
    background: "url('/assets/slide.png') no-repeat center center",
    backgroundSize: "cover",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    zIndex: "9999",
    transition: "top 0.15s ease, left 0.15s ease, transform 0.3s ease",
    display: "none",
  });

  // Track mouse
  document.addEventListener("mousemove", (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
  });

  if (slidesContainer) {
    slidesContainer.style.cursor = 'url("/assets/hand-cursor.png"), auto';

    // Scale cursor on drag/swipe
    window.myProjectsSwiper.on("touchStart", () => {
      cursor.style.setProperty("transform", "translate(-50%, -50%) scale(0)");
      slidesContainer.style.cursor = 'url("/assets/hold-cursor.png"), auto';
    });
    window.myProjectsSwiper.on("touchEnd", () => {
      cursor.style.setProperty("transform", "translate(-50%, -50%) scale(1)");
      slidesContainer.style.cursor = 'url("/assets/hand-cursor.png"), auto';
    });

    // Hover inside project details
    const projectDetails = slidesContainer.querySelectorAll(".project-details");
    projectDetails.forEach((detail) => {
      detail.addEventListener("mouseenter", () => {
        cursor.style.display = "none";
        slidesContainer.style.cursor = 'url("/assets/cursor.png"), auto';
      });
      detail.addEventListener("mouseleave", () => {
        cursor.style.display = "block";
        slidesContainer.style.cursor = 'url("/assets/hand-cursor.png"), auto';
      });
    });
  }

  const arrowBtns = document.querySelectorAll(".swiper-nav1");
  arrowBtns.forEach((btn) => {
    btn.addEventListener(
      "mouseenter",
      () => (
        (cursor.style.display = "none"),
        (slidesContainer.style.cursor = 'url("/assets/cursor.png"), auto')
      )
    );
    btn.addEventListener(
      "mouseleave",
      () => (
        (cursor.style.display = "block"),
        (slidesContainer.style.cursor = 'url("/assets/hand-cursor.png"), auto')
      )
    );
  });

  // Optional: Show cursor only on project cards
  const projectCards = document.querySelectorAll(".portfolio-container");
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => (cursor.style.display = "block"));
    card.addEventListener("mouseleave", () => (cursor.style.display = "none"));
  });
}
