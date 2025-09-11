// about.js
export function initAbout() {
  const aboutBtns = document.querySelectorAll(".about_btn");
  if (!aboutBtns.length) return;

  // --- Preview base path (used only on hosting) ---
  const previewBase = "/preview/8ebf6a79c1a4e9bc12fa7e/excellence/";

  aboutBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const href = btn.getAttribute("href");

      if (!href) return;

      if (href && href.startsWith("#")) {
        e.preventDefault();

        // Detect if running on localhost
        const isLocalhost =
          location.hostname === "localhost" ||
          location.hostname === "127.0.0.1";

        const targetUrl = isLocalhost
          ? `${window.location.origin}/${href}`
          : `${previewBase}${href}`;

        window.location.href = targetUrl;
      }
    });
  });
}
