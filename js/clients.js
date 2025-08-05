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
          <p class="testimonial-text" data-aos="fade-up">"${client.paragraph}"</p>
          <div class="testimonial-footer" data-aos="fade-right" >
            <h3 class="testimonial-title">${client.title}</h3>
            <hr class="testimonial-divider" />
            <p class="testimonial-subtitle">${client.subtitle}</p>
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
      spaceBetween: 20,
      breakpoints: {
        1024: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
      
      },
    };
  };

  window.myClientsSwiper = new Swiper(".testimonial-swiper", {
    ...getResponsiveConfig(),
    loop: true,
    centeredSlides: false,
    grabCursor: true,
    autoHeight: false,
    effect: "slide",
    speed: 600,
    navigation: {
      nextEl: "#NextBtn",
      prevEl: "#PrevBtn",
    },
  });
}
