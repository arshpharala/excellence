export default function initHero() {
   const heroSection = document.querySelector("#hero-boxes");
  if (!heroSection) return;

  const heroBoxes = document.querySelectorAll(".hero-box");
  if (!heroBoxes.length) return;

  // remove initial animation
  heroBoxes.forEach((box) => {
    box.style.opacity = "0";
    box.style.animation = "none";
  }); 

  // intersection observer
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          heroBoxes.forEach((box, index) => {
            box.style.animation = `reconstruct 1.5s ease-out forwards`;
            box.style.animationDelay = `${index * 0.1}s`;
          });

         observer.unobserve(heroSection); // only animate once
        }
      });
    },
    { threshold: 0.3 } // triggers when 30% visible
  );

  observer.observe(heroSection);
}
