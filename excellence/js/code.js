export default function initCode() {
  const cards = [
    {
      iconImage: "./assets/object/creative.png",
      image: null,
      title: "Creative",
    },
    {
      iconImage: "./assets/object/outstanding.png",
      image: "./assets/code.png",
      title: "Outstanding",
    },
    {
      iconImage: "./assets/object/dynamic.png",
      image: null,
      title: "Dynamic",
    },
    {
      iconImage: "./assets/object/effective.png",
      image: null,
      title: "Effective",
    },
  ];

  const container = document.getElementById("codeGrid");

  // Generate HTML
  container.innerHTML = cards
    .map(
      (card, index) => `
      <div class="card ${index === 0 ? "active" : ""}" data-index="${index}" >
        <img src="${card.iconImage}" alt="${card.title} Icon" class="icon" />
        
           <img src="./assets/code.png" alt="${
             card.title
           } Image" class="extra-image" />
        
        <h3 class="card-title">${card.title}</h3>
      </div>
    `
    )
    .join("");

  // Add click event to toggle active card
  const allCards = container.querySelectorAll(".card");
  allCards.forEach((card) => {
    card.addEventListener("click", () => {
      allCards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");
    });
  });
}
