import initNavbar from "./navbar.js";
import initProjects from "./projects.js";
import initFeatures from "./features.js";
import initTeam from "./team.js";
import initClients from "./clients.js";
import initServices from "./services.js";
import initMilestone from "./milestone.js";

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000,
  });

  //   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  //   anchor.addEventListener('click', function(e) {
  //     e.preventDefault();
  //     const target = document.querySelector(this.getAttribute('href'));
  //     const offset = 80; // 👈 change this to scroll a little more up (e.g. 80, 120)

  //     if (target) {
  //       const y = target.getBoundingClientRect().top + window.scrollY - offset;
  //       window.scrollTo({ top: y, behavior: 'smooth' });
  //     }
  //   });
  // });

  function smoothScrollWithOffset(offset = 100) {
    document.addEventListener("click", function (e) {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const hash = anchor.getAttribute("href"); // example: "#contact"
      if (!hash || hash === "#") return;

      const targetEl = document.querySelector(hash);

      if (targetEl) {
        // ✔ Same page scroll
        e.preventDefault();
        const y =
          targetEl.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      } else {
        // ❌ ID not found → redirect to index.html
        e.preventDefault();
        window.location.href = `index.html${hash}`;
      }
    });

    // ⭐ Auto-scroll after redirect
    if (window.location.hash) {
      const anchor = window.location.hash;
      const targetEl = document.querySelector(anchor);

      if (targetEl) {
        setTimeout(() => {
          const y =
            targetEl.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 300);
      }
    }
  }

  // Initialize when the page loads
  smoothScrollWithOffset(80); // 👈 adjust offset if needed

  initNavbar();
  initProjects();
  initFeatures();
  initTeam();
  initClients();
  initServices();
  initMilestone();
});
