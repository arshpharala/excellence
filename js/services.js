export default function initServices() {
  const services = [
    {
      title: "Website Design and Development",
      paragraph:
        "We specialize in designing and developing responsive, user-friendly websites that provide an excellent user experience. Our websites are built with the latest technologies to ensure speed, security, and scalability.",
    },
    {
      title: "Digital Marketing and Social Media Management",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc volutpat euismod orci, ac faucibus metus.",
    },
    {
      title: "Events and Conferences Organizing",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc volutpat euismod orci, ac faucibus metus.",
    },
    {
      title: "Analytics and Performance Optimization",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc volutpat euismod orci, ac faucibus metus.",
    },
    {
      title: "Email & Hosting Services",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc volutpat euismod orci, ac faucibus metus.",
    },
  ];

  const serviceList = document.getElementById("serviceList");
  let activeIndex = 1;

  function renderAccordion() {
    if (!serviceList) return;
    serviceList.innerHTML = services
      .map((service, index) => {
        const isActive = index === activeIndex;
        return `
        <li class="vas-service-item ${
          isActive ? "active" : ""
        }" data-index="${index}">
          <div>
            <h5 class="vas-service-title">${service.title}</h5>
            ${
              isActive
                ? `
              <p class="vas-service-paragraph">${service.paragraph}</p>
              <div class="vas-link-wrap">
                <a href="#" class="read-more-btn">Read More</a>
                <span class="icon-wrapper"><i class="fas fa-arrow-up"></i></span>
              </div>
            `
                : ""
            }
          </div>
        </li>
      `;
      })
      .join("");

    document.querySelectorAll(".vas-service-item").forEach((item) => {
      item.addEventListener("click", () => {
        const index = parseInt(item.getAttribute("data-index"));
        activeIndex = activeIndex === index ? null : index;
        renderAccordion();
      });
    });
  }

  renderAccordion();
}
