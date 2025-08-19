import initNavbar from "./navbar.js";
import initProjects from "./projects.js";
import initClients from "./clients.js";
import initServices from "./services.js";
import initCode from "./code.js";
import initScrollTop from "./scrollTopBtn.js";

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1800,
  });
  initScrollTop();
  initNavbar();
  initProjects();
  initClients();
  initCode();
  initServices();
});
