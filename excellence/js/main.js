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

  // Base URL for hosted site
  const baseURL = "/preview/8ebf6a79c1a4e9bc12fa7e/excellence/";

  // Function to fix relative URLs
  const fixUrl = (url) => {
    if (!url.startsWith("http") && !url.startsWith("data:")) {
      return `${baseURL}${url}`;
    }
    return url;
  };

  // Function to fix background images for an element
  const fixBackground = (el) => {
    const bg = getComputedStyle(el).backgroundImage;
    if (bg && bg !== "none") {
      const urls = bg.match(/url\(["']?(.*?)["']?\)/g);
      if (urls) {
        const fixedUrls = urls.map((u) => {
          const path = u.replace(/url\(["']?(.*?)["']?\)/, "$1");
          return `url('${fixUrl(path)}')`;
        });
        el.style.backgroundImage = fixedUrls.join(", ");
      }
    }
  };

  // Function to fix cursors for an element
  const fixCursor = (el) => {
    const cursor = getComputedStyle(el).cursor;
    if (cursor && cursor.startsWith("url(")) {
      const url = cursor.match(/url\(["']?(.*?)["']?\)/)[1];
      el.style.cursor = `url('${fixUrl(url)}'), auto`;
    }
  };

  // Select all elements including <a> tags
  document.querySelectorAll("*").forEach((el) => {
    fixBackground(el);
    fixCursor(el);
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
