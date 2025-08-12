export default function initTeam() {
  const teamMembers = [
    { name: "John Paul", title: "Creative Designer", linkedin: "#" },
    { name: "Jane Smith", title: "Project Manager", linkedin: "#" },
    { name: "Alex Doe", title: "UX Specialist", linkedin: "#" },
    { name: "Emma Wilson", title: "Developer", linkedin: "#" },
    { name: "Michael Scott", title: "Marketing Lead", linkedin: "#" },
    { name: "Sarah Connor", title: "Data Analyst", linkedin: "#" },
  ];

  const swiperWrapper = document.getElementById("teamSwiperWrapper");
  if (swiperWrapper) {
    swiperWrapper.innerHTML = teamMembers
      .map(
        (member) => `
      <div class="swiper-slide">
       <div class="team-card">
        <div class="image-container">
          <img src="assets/image.png" data-aos="flip-right" alt="${member.name} class="team "  />
          <a href="${member.linkedin}" target="_blank" class="linkedin-icon">
          <span class="icon-border"> 
          <img src="./assets/socialIcon/linkedin.png" alt="LinkedIn Icon" class="social-icon" />
          </i></span>
          
          </a>
        </div>
        <div class="slide-info" data-aos="fade-right">
          <p>${member.name}</p>
          <p>${member.title}</p>
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
        676: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    };
  };

  // Store swiper instance globally for potential external access
  window.myTeamSwiper = new Swiper(".team-swiper", {
    ...getResponsiveConfig(),
    loop: true,
    centeredSlides: false,
    grabCursor: true,
    autoHeight: false,
    effect: "slide",
    speed: 600,
    navigation: {
      nextEl: "#teamNextBtn",
      prevEl: "#teamPrevBtn",
    },
  });
}
