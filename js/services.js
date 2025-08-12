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
      "Our digital marketing services include SEO, content marketing, social media management, and PPC advertising, designed to increase brand visibility, drive traffic, and generate leads in a competitive marketplace.",
  },
  {
    title: "Events and Conferences Organizing",
    paragraph:
      "We provide comprehensive event planning and exhibition services, including venue selection, logistics, on-site management, and custom exhibition stand design to create impactful in-person experiences.",
  },
  {
    title: "Analytics and Performance Optimization",
    paragraph:
      "Our analytics service transforms raw data into actionable insights through advanced tools and predictive analytics, helping optimize business operations and improve decision-making.",
  },
  {
    title: "Email & Hosting Services",
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
          <div>
            <h5 class="vas-service-title">${service.title}</h5>
            ${
              isActive
                ? `
              <p class="vas-service-paragraph">${service.paragraph}</p>
              <div class="vas-link-wrap">
                <a href="#" class="read-more-btn">Learn More</a>
                <span class="icon-wrapper">
                <img src="./assets/arrow45.png" alt="Arrow Icon" />
                </span>
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
