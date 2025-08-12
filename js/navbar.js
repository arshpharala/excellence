export default function initNavbar() {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");
  const navbar = document.querySelector(".navbar");

  if (document.getElementById("currentYear")) {
    document.getElementById("currentYear").textContent =
      new Date().getFullYear();
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

  // accordions items
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const btn = item.querySelector(".dropbtn");

    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const isOpen = item.classList.contains("open");

      // Close all accordions (optional: for single open only)
      accordionItems.forEach((i) => {
        i.classList.remove("open");
        i.querySelector(".dropbtn").setAttribute("aria-expanded", "false");
        i.querySelector(".dropdown-menu-content").hidden = true;
      });

      if (!isOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
        item.querySelector(".dropdown-menu-content").hidden = false;
      }
    });
  });
}
