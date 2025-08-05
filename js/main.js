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

  initNavbar();
  initProjects();
  initFeatures();
  initTeam();
  initClients();
  initServices();
  initMilestone();
});
