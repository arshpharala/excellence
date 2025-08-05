export default function initNavbar() {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");
  const navbar = document.querySelector(".navbar");

  if (document.getElementById("currentYear")) {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
  }

  menuToggle?.addEventListener("click", () => {
    mobileMenu?.classList.add("active");
  });

  closeMenu?.addEventListener("click", () => {
    mobileMenu?.classList.remove("active");
  });

  // Close mobile menu when a nav link is clicked
const menuLinks = mobileMenu?.querySelectorAll("a");
menuLinks?.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});


  window.addEventListener("scroll", () => {
    if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 50);
  });
}
