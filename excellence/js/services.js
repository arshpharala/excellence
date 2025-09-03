export default function initServices() {
  const services = [
    {
      title: "Website Design and Development",
      slug: "website-design-and-development",
      paragraph:
        "We specialize in designing and developing responsive, user-friendly websites that provide an excellent user experience. Our websites are built with the latest technologies to ensure speed, security, and scalability.",
    },
    {
      title: "Digital Marketing and Social Media Management",
      slug: "digital-marketing",
      paragraph:
        "Our digital marketing services include SEO, content marketing, social media management, and PPC advertising, designed to increase brand visibility, drive traffic, and generate leads in a competitive marketplace.",
    },
    {
      title: "Events and Conferences Organizing",
      slug: "events-organising",
      paragraph:
        "We provide comprehensive event planning and exhibition services, including venue selection, logistics, on-site management, and custom exhibition stand design to create impactful in-person experiences.",
    },
    {
      title: "Analytics and Performance Optimization",
      slug: "analytics",
      paragraph:
        "Our analytics service transforms raw data into actionable insights through advanced tools and predictive analytics, helping optimize business operations and improve decision-making.",
    },
    {
      title: "Email & Hosting Services",
      slug: "email-hosting",
      paragraph:
        "We offer reliable website and email hosting solutions with high uptime, fast speeds, and strong security, along with scalable options to grow with your business.",
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
            <div class="vas-service-header">
              <h5 class="vas-service-title">${service.title}</h5>
              <button class="toggle-btn" aria-label="${
                isActive ? "Collapse" : "Expand"
              } Service">
                <img 
                  src="${
                    isActive ? "./assets/minus.png" : "./assets/plus.png"
                  }" 
                  alt="${isActive ? "Collapse" : "Expand"}" 
                  class="accordion-icon"
                />
              </button>
            </div>
            <div class="vas-service-content">
              <p class="vas-service-paragraph">${service.paragraph}</p>
              <div class="vas-link-wrap">
                <a href="/services/${service.slug}.html" class="read-more-btn">Learn More</a>
                <span class="icon-wrapper">
                  <img src="./assets/arrow45.png" alt="Arrow Icon" />
                </span>
              </div>
            </div>
          </li>
        `;
      })
      .join("");

    setupAccordion();
  }

  function setupAccordion() {
    document.querySelectorAll(".vas-service-item").forEach((item, index) => {
      const btn = item.querySelector(".vas-service-header");
      const content = item.querySelector(".vas-service-content");

      // Initial state
      if (item.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = 0;
      }

      // Button click handler
      btn.addEventListener("click", () =>
        toggleAccordion(index, item, content, btn)
      );
    });
  }

  function toggleAccordion(index, item, content, btn) {
    const isActive = item.classList.contains("active");

    // Collapse all first
    document.querySelectorAll(".vas-service-item").forEach((el) => {
      const c = el.querySelector(".vas-service-content");
      const b = el.querySelector(".toggle-btn");
      el.classList.remove("active");
      c.style.maxHeight = null;
      c.setAttribute("aria-hidden", "true");
      b.setAttribute("aria-expanded", "false");
      b.querySelector("img").src = "./assets/plus.png";
      b.querySelector("img").alt = "Expand";
    });

    // Expand clicked one if it wasn’t active
    if (!isActive) {
      item.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
      content.setAttribute("aria-hidden", "false");
      btn.setAttribute("aria-expanded", "true");
      btn.querySelector("img").src = "./assets/minus.png";
      btn.querySelector("img").alt = "Collapse";
      activeIndex = index;
    } else {
      activeIndex = null;
    }
  }

  renderAccordion();
}
