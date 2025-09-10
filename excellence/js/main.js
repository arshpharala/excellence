import initNavbar from "./navbar.js";
import initProjects from "./projects.js";
import initClients from "./clients.js";
import initServices from "./services.js";
import initCode from "./code.js";
import initHero from "./hero.js";
import initTimeline from "./timeline.js";
import initChooseUs from "./chooseUs.js";
import initTeams from "./team.js";
import initProjectPage from "./workPage.js";

import initScrollTop from "./scrollTopBtn.js";
import { initAbout } from "./about.js";

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1500,
    easing: "ease-in-out",
    once: true,
  });

  // Preview base path (used only on hosting)
  const previewBase = "/preview/8ebf6a79c1a4e9bc12fa7e/excellence/";

  // Detect if running on localhost
  const isLocalhost =
    location.hostname === "localhost" || location.hostname === "127.0.0.1";

  document.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href");

    // Skip invalid or external links
    if (
      !href ||
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("javascript:")
    ) {
      return;
    }

    // On hosting → prepend previewBase
    if (!isLocalhost) {
      let newHref;
      if (href.startsWith("/")) {
        // /about → /preview/.../about
        newHref = previewBase + href.substring(1);
      } else if (href.startsWith("#")) {
        // #code → /preview/.../#code
        newHref = previewBase + href;
      } else {
        // about.html → /preview/.../about.html
        newHref = previewBase + href;
      }

      link.setAttribute("href", newHref);
    }
  });

  initChooseUs();
  initNavbar();
  initHero();
  initAbout();
  initScrollTop();
  initProjects();
  initClients();
  initCode();
  initServices();
  initTimeline();
  initTeams();
  initProjectPage();
});
