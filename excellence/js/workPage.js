export default function initProjectPage() {
    const defaultImage = "./assets/portfolio/portfolio1.png";

    const projects = [
        { title: "Branding", image: "./assets/portfolio/portfolio1.png" },
        {
            title: "Product Design",
            image: "../assets/portfolio/portfolio2.png",
        },
        { title: "Logo Design", image: "./assets/portfolio/portfolio3.png" },
        { title: "Branding", image: "./assets/portfolio/portfolio5.jpg" },
        { title: "Logo Design", image: "./assets/portfolio/portfolio6.jpg" },
        { title: "Branding", image: "./assets/portfolio/portfolio7.jpg" },
        {
            title: "Product Design",
            image: "./assets/portfolio/portfolio2.png",
        },
        { title: "Logo Design", image: "./assets/portfolio/portfolio3.png" },
        { title: "UI/UX Design", image: "./assets/portfolio/portfolio6.jpg" },
        { title: "Branding", image: "./assets/portfolio/portfolio7.jpg" },
        { title: "Logo Design", image: "./assets/portfolio/portfolio6.jpg" },
    ];

    const filterContainer = document.getElementById("filter-buttons");
    const projectContainer = document.getElementById("project-page-container");

    let packeryInstance;

    function getQueryFilter() {
        const params = new URLSearchParams(window.location.search);
        return params.get("filter") || "All";
    }

    function getUniqueCategories() {
        const categories = projects.map((p) => p.title);
        return ["All", ...new Set(categories)];
    }

    function createFilterButtonHTML(category, currentFilter) {
        const isActive = category === currentFilter ? "active" : "";
        return `<button class="filter-btn ${isActive}" data-filter="${category}">${category}</button>`;
    }

    function createProjectCardHTML(project) {
        const imgSrc = project.image || defaultImage;
        return `
      <div class="grid-item">
        <img src="${imgSrc}" alt="${project.title}">
      </div>
    `;
    }

    function renderFilterButtons(currentFilter) {
        filterContainer.innerHTML = getUniqueCategories()
            .map((cat) => createFilterButtonHTML(cat, currentFilter))
            .join("");

        document.querySelectorAll(".filter-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                const filter = btn.dataset.filter;
                renderProjects(filter);
                highlightActiveFilter(filter);
                history.replaceState(
                    null,
                    "",
                    `?filter=${encodeURIComponent(filter)}`
                );
            });
        });
    }

    function highlightActiveFilter(category) {
        document.querySelectorAll(".filter-btn").forEach((btn) => {
            btn.classList.toggle("active", btn.dataset.filter === category);
        });
    }

    function renderProjects(filter = "All") {
        const filtered =
            filter === "All"
                ? projects
                : projects.filter((p) => p.title === filter);

        projectContainer.innerHTML = filtered
            .map(createProjectCardHTML)
            .join("");

        // Wait for images to load before layout
        imagesLoaded(projectContainer, function () {
            projectContainer.querySelectorAll(".grid-item").forEach((item) => {
                item.classList.add("loaded");
            });

            if (!packeryInstance) {
                packeryInstance = new Packery(projectContainer, {
                    itemSelector: ".grid-item",
                    gutter: 16,
                    percentPosition: true,
                });
            } else {
                packeryInstance.reloadItems();
                packeryInstance.layout();
            }
        });
        // Recalculate layout on window resize
        window.addEventListener("resize", () => {
            if (packeryInstance) {
                packeryInstance.layout();
            }
        });
    }

    if (!filterContainer || !projectContainer) {
        return;
    }

    const initialFilter = getQueryFilter();
    renderFilterButtons(initialFilter);
    renderProjects(initialFilter);
}
