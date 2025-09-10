export default function initChooseUs() {
  const chooseUsItems = [
    {
      title: "Experience and Reliability",
      content:
        "With over a decade of successful project execution in both private and government sectors, we have established a strong foundation of trust and dependability. Our proven track record of delivering high-quality results consistently is a testament to our expertise and commitment to our clients.",
    },
    {
      title: "Customized Solutions",
      content:
        "We understand that each client has unique requirements; therefore, we develop tailored strategies that align with your specific needs. Our team takes the time to understand your business objectives and challenges, allowing us to craft innovative solutions that address your unique pain points.",
    },
    {
      title: "Creative Excellence",
      content:
        "Our team of skilled professionals is dedicated to transforming innovative ideas into reality, ensuring that your vision is brought to life with creativity and precision. We combine our technical prowess with a deep understanding of emerging trends and best practices to deliver solutions that stand out in the market.",
    },
    {
      title: "Proven Track Record",
      content:
        "Our portfolio includes numerous success stories that highlight our capability to deliver exceptional results consistently. We have a reputation for exceeding client expectations and driving tangible business impact.",
    },
    {
      title: "End-to-End Service",
      content:
        "We provide comprehensive project management, overseeing every phase from conception through to execution, ensuring a seamless experience for our clients. Our holistic approach allows us to anticipate and address challenges, ensuring the successful completion of your projects.",
    },
  ];

  const chooseUsList = document.getElementById("chooseUsList");
  if (!chooseUsList) return;

  // Render accordion items
  chooseUsList.innerHTML = chooseUsItems
    .map((item, index) => {
      const isActive = index === 0;
      const toggleLabel = isActive ? "Collapse" : "Expand";
      const iconSrc = isActive ? "minus" : "plus";
      const bodyStyle = isActive
        ? "max-height:500px; opacity:1; padding:1rem 1.5rem;"
        : "";

      return `
      <li class="choose-us-item ${
        isActive ? "active" : ""
      }" data-index="${index}">
        <div class="choose-us-header">
          <h5 class="choose-us-title">${item.title}</h5>
           <button class="choose-us-toggle" aria-label="${
             isActive ? "Collapse" : "Expand"
           } choose_us">
                <img 
                  src="${
                    isActive ? "./assets/minus.png" : "./assets/plus.png"
                  }" 
                  alt="${isActive ? "Collapse" : "Expand"}" 
                  class="accordion-icon"
                />
              </button>

         
        </div>
        <div class="choose-us-body">
          <p>${item.content}</p>
        </div>
      </li>
    `;
    })
    .join("");

  // Setup accordion functionality
  chooseUsList.querySelectorAll(".choose-us-item").forEach((item) => {
    const header = item.querySelector(".choose-us-header");
    const body = item.querySelector(".choose-us-body");
    const toggleBtn = header.querySelector(".choose-us-toggle img");

    header.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all items
      chooseUsList.querySelectorAll(".choose-us-item").forEach((el) => {
        el.classList.remove("active");
        const elBody = el.querySelector(".choose-us-body");
        elBody.style.maxHeight = null;
        elBody.style.padding = null;
        elBody.style.opacity = 0;
        el.querySelector(".choose-us-toggle img").src = "./assets/plus.png";
        el.querySelector(".choose-us-toggle img").alt = "Expand";
      });

      // Open clicked item if it wasn’t active
      if (!isActive) {
        item.classList.add("active");
        body.style.maxHeight = body.scrollHeight + "px";
        body.style.padding = "1rem 1.5rem";
        body.style.opacity = 1;
        toggleBtn.src = "./assets/minus.png";
        toggleBtn.alt = "Collapse";
      }
    });
  });
}
