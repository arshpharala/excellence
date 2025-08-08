export default function initMilestone() {
  const milestones = [
    {
      year: "2012",
      title: "Founding Year",
      subtitle: "Creative Design & Website Development",
      description:
        "The agency was founded with a focus on creative design and website development, helping businesses establish their online presence with stunning visuals and user-friendly websites.",
      icon: "assets/object/object.png",
    },
    {
      year: "2014",
      title: "Expanding Services",
      subtitle: "Events Management & Exhibition Stand Execution",
      description:
        "We expanded our offerings to include events management and exhibition stand execution, providing end-to-end solutions for brands to showcase their products and services at trade shows and events.",
      icon: "assets/object/object2.png",
    },
    {
      year: "2016",
      title: "Digital Marketing",
      subtitle: "SEO & SMO",
      description:
        "Recognizing the growing importance of digital presence, we added SEO (Search Engine Optimization) and SMO (Social Media Optimization) to our services.",
      icon: "assets/object/object3.png",
    },
    {
      year: "2019",
      title: "Tech Expansion",
      subtitle: "Mobile App Development & Cloud Solutions",
      description:
        "To keep up with modern trends, we introduced mobile application development and cloud-based solutions, empowering businesses with scalable, cross-platform digital tools.",
      icon: "assets/object/object3.png",
    },
  ];

  let activeIndex = 0;
  let showAll = false;

  const generateStepIndicator = () => {
    const steps = milestones
      .map(
        (_, index) => `
          <div 
            class="step-dot ${index === activeIndex ? "active" : ""}" 
            data-step="${index}" 
            role="button" tabindex="0" 
            aria-label="Step ${index + 1}"
          ></div>
        `
      )
      .join("");

    const arrowClass = activeIndex >= 2 ? "step-arrow active" : "step-arrow";

    return `
      ${steps}
    <img src="../assets/chevron.png" class="${arrowClass}" />
      <div class="step-line"></div>
    `;
  };

  const generateMilestones = () => {
    return milestones
      .map(
        (milestone, index) => `
        <div 
          class="milestone-item ${index === activeIndex ? "active" : ""}" 
          data-index="${index}" 
          tabindex="0" 
          role="button" 
          aria-pressed="${index === activeIndex}"
        >
          <div class="milestone-left">
            <div class="milestone-header">
              <img 
                src="${milestone.icon}" 
                alt="${milestone.title} icon" 
                class="milestone-icon"
                onerror="this.style.display='none'"
              >
              <p class="milestone-year">${milestone.year}</p>
            </div>
            <div class="milestone-titles">
              <p class="milestone-title">${milestone.title}</p>
              <h4 class="milestone-subtitle">${milestone.subtitle}</h4>
            </div>
          </div>

          <div class="milestone-right">
            <p class="milestone-description">${milestone.description}</p>
          </div>
        </div>
      `
      )
      .join("");
  };

  const updateStepIndicator = () => {
    const stepIndicator = document.getElementById("stepIndicator");
    if (stepIndicator) {
      stepIndicator.innerHTML = generateStepIndicator();
    }
  };

  const updateMilestoneStates = () => {
    const items = document.querySelectorAll(".milestone-item");
    items.forEach((item, index) => {
      item.classList.toggle("active", index === activeIndex);
      item.setAttribute(
        "aria-pressed",
        index === activeIndex ? "true" : "false"
      );
    });
  };

  const setActiveIndex = (index) => {
    if (index === activeIndex || index < 0 || index >= milestones.length)
      return;

    activeIndex = index;
    updateStepIndicator();
    updateMilestoneStates();

    const container = document.getElementById("milestonesContainer");
    const toggleIcon = document.getElementById("toggleIcon");
    const toggleButton = document.getElementById("toggleButton");

    if (activeIndex >= 2 || activeIndex === 1) {
      showAll = true;

      if (container) {
        container.classList.add("expanded");
        container.classList.remove("collapsed");
      }

      // Only auto-activate toggle icon and button if activeIndex >= 2
      if (activeIndex >= 2) {
        if (toggleIcon) {
          toggleIcon.classList.add("active", "rotated");
        }
        if (toggleButton) {
          toggleButton.classList.add("active");
        }
      }
    } else {
      showAll = false;

      if (container) {
        container.classList.remove("expanded");
        container.classList.add("collapsed");
      }

      if (toggleIcon) {
        toggleIcon.classList.remove("active", "rotated");
      }

      if (toggleButton) {
        toggleButton.classList.remove("active");
      }
    }

    const activeItem = document.querySelector(
      `.milestone-item[data-index="${index}"]`
    );
    if (activeItem) {
      activeItem.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const toggleShowAll = () => {
    showAll = !showAll;
    const container = document.getElementById("milestonesContainer");
    const icon = document.getElementById("toggleIcon");
    const button = document.getElementById("toggleButton");

    if (container && icon && button) {
      container.classList.toggle("expanded", showAll);
      container.classList.toggle("collapsed", !showAll);
      icon.classList.toggle("rotated", showAll);
      button.classList.toggle("active", showAll);
    }
  };

  const handleMilestoneClick = (e) => {
    const milestoneItem = e.target.closest(".milestone-item");
    if (milestoneItem) {
      const index = parseInt(milestoneItem.dataset.index);
      setActiveIndex(index);
    }
  };

  const handleStepClick = (e) => {
    if (e.target.classList.contains("step-dot")) {
      const step = parseInt(e.target.dataset.step);
      setActiveIndex(step);
    }
  };

  const handleKeyDown = (e) => {
    if (e.target.classList.contains("milestone-item")) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const index = parseInt(e.target.dataset.index);
        setActiveIndex(index);
      }
    }

    if (e.key === "ArrowUp" && activeIndex > 0) {
      e.preventDefault();
      setActiveIndex(activeIndex - 1);
    } else if (e.key === "ArrowDown" && activeIndex < milestones.length - 1) {
      e.preventDefault();
      setActiveIndex(activeIndex + 1);
    }
  };

  // DOM Elements
  const stepIndicator = document.getElementById("stepIndicator");
  const milestonesList = document.getElementById("milestonesList");
  const toggleButton = document.getElementById("toggleButton");

  if (!stepIndicator || !milestonesList || !toggleButton) {
    console.error("Timeline: Required DOM elements not found");
    return null;
  }

  // Initial render
  stepIndicator.innerHTML = generateStepIndicator();
  milestonesList.innerHTML = generateMilestones();

  // Event bindings
  document.addEventListener("click", handleMilestoneClick);
  document.addEventListener("click", handleStepClick);
  document.addEventListener("keydown", handleKeyDown);
  toggleButton.addEventListener("click", toggleShowAll);

  // Auto advance (optional)
  let autoAdvanceInterval = null;

  const startAutoAdvance = () => {
    autoAdvanceInterval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % milestones.length;
      setActiveIndex(nextIndex);
    }, 5000);
  };

  const stopAutoAdvance = () => {
    if (autoAdvanceInterval) {
      clearInterval(autoAdvanceInterval);
      autoAdvanceInterval = null;
    }
  };

  const destroy = () => {
    stopAutoAdvance();
    document.removeEventListener("click", handleMilestoneClick);
    document.removeEventListener("click", handleStepClick);
    document.removeEventListener("keydown", handleKeyDown);
    toggleButton.removeEventListener("click", toggleShowAll);
  };

  const timelineAPI = {
    setActive: setActiveIndex,
    toggle: toggleShowAll,
    destroy,
    getCurrentIndex: () => activeIndex,
    getMilestones: () => milestones,
    addMilestone: (milestone) => {
      milestones.push(milestone);
      milestonesList.innerHTML = generateMilestones();
      updateStepIndicator();
    },
    updateMilestone: (index, newData) => {
      if (milestones[index]) {
        milestones[index] = { ...milestones[index], ...newData };
        milestonesList.innerHTML = generateMilestones();
        updateStepIndicator();
      }
    },
    startAutoAdvance,
    stopAutoAdvance,
  };

  window.timelineAPI = timelineAPI;

  return timelineAPI;
}
