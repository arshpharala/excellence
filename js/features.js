export default function initFeatures() {
 const features = [
  {
    title: "Experience and Reliability",
    description:
      "With over a decade of successful project execution in both private and government sectors, we have established a strong foundation of trust and dependability. Our proven track record of delivering high-quality results consistently is a testament to our expertise and commitment to our clients.",
  },
  {
    title: "Customized Solutions",
    description:
      "We understand that each client has unique requirements; therefore, we develop tailored strategies that align with your specific needs. Our team takes the time to understand your business objectives and challenges, allowing us to craft innovative solutions that address your unique pain points.",
  },
  {
    title: "Proven Track Record",
    description:
      "Our portfolio includes numerous success stories that highlight our capability to deliver exceptional results consistently. We have a reputation for exceeding client expectations and driving tangible business impact.",
  },
  {
    title: "Creative Excellence",
    description:
      "Our team of skilled professionals is dedicated to transforming innovative ideas into reality, ensuring that your vision is brought to life with creativity and precision. We combine our technical prowess with a deep understanding of emerging trends and best practices to deliver solutions that stand out in the market.",
  },
  {
    title: "End-to-End Service",
    description:
      "We provide comprehensive project management, overseeing every phase from conception through to execution, ensuring a seamless experience for our clients. Our holistic approach allows us to anticipate and address challenges, ensuring the successful completion of your projects.",
  },
];

  const featureGrid = document.getElementById("featureGrid");

  if (featureGrid) {
    const fullContent = [
      {
        isHeading: true,
        html: `
          <div class="heading" data-aos="fade-right">
            <h2 >
              What makes us <br />
              the right choice <br />
              for you?
            </h2>
          </div>
        `,
      },
      ...features.map((feature, index) => ({
        isHeading: false,
        html: `
          <div class="feature-card" data-index="${index}" data-aos="fade-up">
            <h3 class="feature-title">${feature.title}</h3>
            <p class="feature-desc">${feature.description}</p>
          </div>
        `,
      })),
    ];

    featureGrid.innerHTML = fullContent.map((item) => item.html).join("");
  }
}
