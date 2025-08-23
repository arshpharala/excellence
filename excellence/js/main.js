import initNavbar from "./navbar.js";
import initProjects from "./projects.js";
import initClients from "./clients.js";
import initServices from "./services.js";
import initCode from "./code.js";
import initHero from "./hero.js";

import initScrollTop from "./scrollTopBtn.js";

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1700,
    easing: "ease-in-out",
      // once: true 
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.4) {
          entry.target.classList.add("aos-animate");
        }
      });
    },
    { threshold: [0.4] }
  );

  ["#process", "#footer"].forEach((section) => {
    document.querySelectorAll(`${section} [data-aos]`).forEach((el) => {
      el.classList.remove("aos-animate"); // reset AOS so observer controls it
      observer.observe(el);
    });
  });
  initHero();
  initScrollTop();
  initNavbar();
  initProjects();
  initClients();
  initCode();
  initServices();
});
