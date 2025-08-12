export default function initMilestone() {
  const milestones = [
    {
      year: "2012",
      title: "Founding Year",
      subtitle: "Creative Design & Website Development",
      icon: "assets/object/paintbrush.png",
      description:
        "The agency was founded with a focus on creative design and website development, helping businesses establish their online presence with stunning visuals and user-friendly websites.",
    },
    {
      year: "2014",
      title: "Expanding Services",
      subtitle: "Events Management & Exhibition Stand Execution",
      icon: "assets/object/circus-tent.png",
      description:
        "We expanded our offerings to include events management and exhibition stand execution, providing end-to-end solutions for brands to showcase their products and services at trade shows and events.",
    },
    {
      year: "2016",
      title: "Digital Marketing",
      subtitle: "SEO & SMO",
      icon: "assets/object/chart.png",
      description:
        "Recognizing the growing importance of digital presence, we added SEO (Search Engine Optimization) and SMO (Social Media Optimization) to our services.",
      details: [
        {
          title: "On-Page SEO",
          description:
            "We optimized website content, meta tags, headers, and internal linking structures to improve search engine rankings and user experience.",
        },
        {
          title: "Off-Page SEO",
          description:
            "We implemented strategies like backlink building, guest blogging, and social signals to boost domain authority and drive organic traffic.",
        },
        {
          title: "SMO (Social Media Optimization)",
          description:
            "We helped clients enhance their social media presence by optimizing profiles, creating engaging content, and increasing follower engagement.",
        },
      ],
    },
    {
      year: "2018",
      title: "Customized Gifts & Trophies",
      icon: "assets/object/trophy.png",
      description:
        "To enhance brand visibility and client relationships, we introduced customized gifts and trophies, offering unique, branded merchandise for corporate events and client appreciation.",
    },
    {
      year: "2020",
      title: "Digital Advertising",
      subtitle: "Social Media, Google Ads & YouTube",
      icon: "assets/object/money-bag.png",
      description:
        "In 2020, we expanded our digital advertising services to include social media buying, Google Ads, and YouTube channel management, offering clients a complete suite of tools to maximize their reach and ROI.",
      details: [
        {
          title: "Social Media Buying",
          description:
            "We ran highly targeted ad campaigns on platforms like Facebook, Instagram, and LinkedIn, ensuring brands reached their ideal audiences with precision and drove meaningful engagement.",
        },
        {
          title: "Google Ads",
          description:
            "We leveraged search, display, and video campaigns on Google Ads to drive traffic, generate leads, and boost conversions, helping clients dominate search engine results.",
        },
        {
          title: "YouTube Channel Management",
          description:
            "We helped brands create and optimize YouTube channels, producing engaging video content and running targeted ad campaigns to increase views, subscribers, and brand awareness.",
        },
      ],
    },
    {
      year: "2022",
      title: "Full-Service Marketing Agency",
      icon: "assets/object/globe.png",
      description:
        "By 2022, we evolved into a full-service marketing agency, offering a comprehensive suite of services, from creative design and digital marketing to events management and social media buying.",
    },
    {
      year: "2024",
      title: "AI-Driven Marketing Solutions",
      icon: "assets/object/robot.png",
      description:
        "Embracing the future, we integrated AI-driven marketing solutions into our offerings, using advanced analytics and automation to deliver smarter, more effective campaigns for our clients.",
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
      .map((m, i) => {
        // Render details list if present
        const detailsHTML = m.details
          ? `<ul class="milestone-details">
            ${m.details
              .map(
                (d) => `<li><strong>${d.title}:</strong> ${d.description}</li>`
              )
              .join("")}
           </ul>`
          : "";

        return `
        <div 
          class="milestone-item ${i === activeIndex ? "active" : ""}" 
          data-index="${i}" 
          tabindex="0" 
          role="button" 
          aria-pressed="${i === activeIndex}"
        >
          <div class="milestone-left">
            <div class="milestone-header">
              <img src="${m.icon}" alt="${
          m.title
        } icon" class="milestone-icon" onerror="this.style.display='none'" />
              <p class="milestone-year">${m.year}</p>
            </div>
            <div class="milestone-titles">
              <p class="milestone-title">${m.title}</p>
              <h4 class="milestone-subtitle">${m.subtitle || ""}</h4>
            </div>
          </div>
          <div class="milestone-right">
            <p class="milestone-description">${m.description.replace(
              /\n/g,
              "<br>"
            )}</p>
            ${detailsHTML}
          </div>
        </div>
      `;
      })
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
