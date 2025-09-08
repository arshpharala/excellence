// about.js
export function initAbout() {
    const aboutBtns = document.querySelectorAll(".about_btn"); 
    if (!aboutBtns.length) return;

    aboutBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const href = btn.getAttribute("href");

            if (!href) return;

            if (href.startsWith("#")) {
                e.preventDefault();
                window.location.href = `${window.location.origin}/${href}`;
            }
        });
    });
}
