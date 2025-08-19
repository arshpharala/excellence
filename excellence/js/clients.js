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
