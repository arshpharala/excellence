export default function initTeams() {
  const teamMembers = [
    {
      name: "Jane Doe",
      position: "CEO & Founder",
      image: "./assets/team/team1.png",
      funFact: "Loves surfing on weekends 🏄‍♀️",
      bio: "Jane founded the company in 2015 with a vision to innovate and lead.",
    },
    {
      name: "John Smith",
      position: "Marketing Director",
      image: "./assets/team/team2.png",
      funFact: "Passionate chess player ♟️",
      bio: "John leads the marketing team with data-driven strategies.",
    },
    {
      name: "Sara Lee",
      position: "Creative Head",
      image: "./assets/team/team3.png",
      funFact: "Mural artist 🎨",
      bio: "Sara ensures all projects meet the brand’s creative standards.",
    },
    {
      name: "Alex Ray",
      position: "Lead Developer",
      image: "./assets/team/team4.png",
      funFact: "Built his first app at age 12 💻",
      bio: "Alex designs and maintains core product architecture.",
    },
    {
      name: "Lisa Chen",
      position: "UX Designer",
      image: null, // Set to null
      funFact: "Has a bonsai tree collection 🌳",
      bio: "Lisa designs smooth and accessible user experiences.",
    },
    {
      name: "Tom Green",
      position: "Data Scientist",
      image: null, // Set to null
      funFact: "Competes in Rubik's cube speedsolving 🧠",
      bio: "Tom uncovers insights from complex datasets.",
    },
    {
      name: "Maya Patel",
      position: "HR Manager",
      image: null, // Set to null
      funFact: "Traveled to 30+ countries ✈️",
      bio: "Maya ensures a healthy and productive work environment.",
    },
    {
      name: "Carlos Rivera",
      position: "Customer Success Lead",
      image: null, // Set to null
      funFact: "Loves salsa dancing 💃",
      bio: "Carlos builds lasting client relationships.",
    },
    {
      name: "Emma Stone",
      position: "QA Engineer",
      image: null, // Set to null
      funFact: "Volunteers at an animal shelter 🐶",
      bio: "Emma tests everything to perfection.",
    },
    {
      name: "Noah Park",
      position: "Product Manager",
      image: null, // Set to null
      funFact: "Can play 5 instruments 🎵",
      bio: "Noah drives product vision and execution.",
    },
  ];

  const teamGrid = document.getElementById("teamGrid");
  const teamPageGrid = document.getElementById("teamPageGrid");

  if (teamGrid) {
    teamGrid.innerHTML = generateTeamCards(teamMembers.slice(0, 4));
  }

  if (teamPageGrid) {
    teamPageGrid.innerHTML = generateTeamCards(teamMembers);
  }
}

function generateTeamCards(members) {
  return members
    .map((member) => {
      const image = member.image?.trim() || "/assets/team/team6.png";

      return `
      <div class="team__member">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="${image}" loading="lazy"  alt="${member.name}" />
            <div class="detail">
              <h3 class="detail__name">${member.name}</h3>
              <p class="detail__position">${member.position}</p>
            </div>
          </div>
          <div class="flip-card-back">
            <h3>${member.name}</h3>
            <p><strong>Position:</strong> ${member.position}</p>
            <p><strong>Fun Fact:</strong> ${member.funFact}</p>
            <p><strong>About:</strong> ${member.bio}</p>
            <ul class="social-links">
              <li><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><img class="social-icon" src="/assets/socialIcon/linkedin.png"  loading="lazy"  alt="${member.name}'s LinkedIn" /></a></li>
              <li><a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><img class="social-icon" src="/assets/socialIcon/facebook.png"  loading="lazy"  alt="${member.name}'s Facebook" /></a></li>
              <li><a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><img class="social-icon" src="/assets/socialIcon/x.png"  loading="lazy"  alt="${member.name}'s Twitter" /></a></li>
              <li><a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><img class="social-icon" src="/assets/socialIcon/instagram.png"  loading="lazy"  alt="${member.name}'s Instagram" /></a></li>
            </ul>
          </div>
        </div>
      </div>`;
    })
    .join("");
}
