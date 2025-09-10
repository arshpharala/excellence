export default function initClients() {
  const clients = [
    {
      title: "BenX Agency",
      subtitle: "Brand Guidelines",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quam reprehenderit impedit sint rerum? Soluta quisquam corporis ipsum labore sequi omnis dicta vel totam ad ea beatae autem, blanditiis corrupti!",
    },
    {
      title: "Digital Nexus",
      subtitle: "UI/UX Design",
      paragraph:
        "Reprehenderit impedit sint rerum? Soluta quisquam corporis ipsum labore sequi omnis dicta vel totam ad ea beatae autem, blanditiis corrupti!",
    },
    {
      title: "SparkEdge",
      subtitle: "Web Development",
      paragraph:
        "Totam ad ea beatae autem, blanditiis corrupti! Lorem ipsum dolor sit amet consectetur.",
    },
    {
      title: "Nova Solutions",
      subtitle: "Strategy Consulting",
      paragraph:
        "Dolorem ipsum labore sequi omnis dicta vel totam ad ea beatae autem, blanditiis corrupti!",
    },
  ];

  const slidesContainer = document.getElementById("testimonialSwiperWrapper");
  if (slidesContainer) {
    slidesContainer.innerHTML = clients
      .map(
        (client) => `
        <div class="swiper-slide hover">
          <div class="testimonial-card">
                <img src="./assets/colon.png" alt="colon Icon" class="colon-icon" />
          
          <p class="testimonial-desc" >"${client.paragraph}"</p>
            <hr class="testimonial-divider" />
                         <div class="testimonial-author" >
       
                        <div class="author-avatar">
                <img src="./assets/client.png" alt="colon Icon" class="client-icon" />
                        </div>
                        <div class="author-info">
                            <h4>${client.title}</h4>
                            <p>${client.subtitle}</p>
                        </div>
                    </div>
        
          </div>
        </div>
      `
      )
      .join("");
  }

  // Responsive slides configuration
  const getResponsiveConfig = () => {
    return {
      slidesPerView: 1,
      spaceBetween: 30,
      breakpoints: {
        1024: {
          slidesPerView: 2,
          spaceBetween: 35,
        },
      },
    };
  };

  window.myClientsSwiper = new Swiper(".testimonial-swiper", {
    ...getResponsiveConfig(),
    loop: true,
    centeredSlides: false,
    autoHeight: false,
    grabCursor: false,
    effect: "slide",
    speed: 600,
    navigation: {
      nextEl: "#NextBtn",
      prevEl: "#PrevBtn",
    },
  });

  // --- Custom Cursor ---
  const cursor1 = document.createElement("div");
  cursor1.classList.add("custom-cursor1");
  document.body.appendChild(cursor1);

  Object.assign(cursor1.style, {
    position: "fixed",
    width: "100px",
    height: "100px",
    background: "url('./assets/slide.png') no-repeat center center",
    backgroundSize: "cover",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    zIndex: "9999",
    transition: "top 0.15s ease, left 0.15s ease, transform 0.3s ease",
    display: "none",
  });

  // Track mouse
  document.addEventListener("mousemove", (e) => {
    cursor1.style.top = `${e.clientY}px`;
    cursor1.style.left = `${e.clientX}px`;
  });

  if (slidesContainer) {
    slidesContainer.style.cursor = 'url("./assets/hand-cursor.png"), auto';

    // Scale cursor1 on drag using Swiper events
    window.myClientsSwiper.on("touchStart", () => {
      cursor1.style.transform = "translate(-50%, -50%) scale(0)";
      slidesContainer.style.cursor = 'url("./assets/hold-cursor.png"), auto';
    });
    window.myClientsSwiper.on("touchEnd", () => {
      cursor1.style.transform = "translate(-50%, -50%) scale(1)";
      slidesContainer.style.cursor = 'url("./assets/hand-cursor.png"), auto';
    });
  }

  const arrowBtns = document.querySelectorAll(".swiper-nav");
  arrowBtns.forEach((btn) => {
    btn.addEventListener(
      "mouseenter",
      () => (
        (cursor1.style.display = "none"),
        (slidesContainer.style.cursor = 'url("./assets/cursor.png"), auto')
      )
    );
    btn.addEventListener(
      "mouseleave",
      () => (
        (cursor1.style.display = "block"),
        (slidesContainer.style.cursor = 'url("./assets/hand-cursor.png"), auto')
      )
    );
  });

  // Optional: Show cursor1 only on project cards
  const clientCards = document.querySelectorAll(".testimonial-container");
  clientCards.forEach((card) => {
    card.addEventListener(
      "mouseenter",
      () => (cursor1.style.display = "block")
    );
    card.addEventListener("mouseleave", () => (cursor1.style.display = "none"));
  });
}
