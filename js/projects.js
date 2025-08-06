export default function initProjects() {
  const projects = [
    { title: "BenX", subtitle: "Brand Guidelines", image: "assets/portfolio/Portfolio1.png" },
    { title: "BenX", subtitle: "Brand Guidelines", image: "assets/portfolio/Portfolio2.png" },
    { title: "BenX", subtitle: "Brand Guidelines", image: "assets/portfolio/Portfolio3.png" },
  ];

  const projectsGrid = document.getElementById("portfolioGrid");
  if (projectsGrid) {
    projectsGrid.innerHTML = projects.map((project, index) => `
      <div class="project-card" data-aos="fade-up" data-index="${index}">
        <div class="image-wrapper">
          <img src="${project.image}" alt="${project.title}" class="project-image" />
        </div>
        <div class="project-details">
          <h3 class="project-title">${project.title}</h3>
          <div class="project-footer">
            <hr class="divider" />
            <button class="arrow-btn" data-index="${index}">
             <i class="fa fa-arrow-right" aria-hidden="true"></i>
             </button>
          </div>
          <p class="project-subtitle">${project.subtitle}</p>
        </div>
      </div>
    `).join("");

    projectsGrid.querySelectorAll(".arrow-btn").forEach((button) => {
      button.addEventListener("click", (e) => {
        const idx = e.currentTarget.getAttribute("data-index");
        alert(`More details for ${projects[idx].title}`);
      });
    });
  }
}
