export default function initTimeline() {
  const timeline = document.querySelector(".timeline");

  if (timeline) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            timeline.classList.add("active"); // Trigger CSS animations
            observer.unobserve(timeline); // Run only once
          }
        });
      },
      {
        threshold: [0.3], // 30% visible
      }
    );

    observer.observe(timeline);
  }
}
