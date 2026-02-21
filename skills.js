console.log("JS Connected");

const skillsData = {
  frontend: {
    title: "Frontend Development",
    description:
      "Frontend development focuses on building the visual and interactive parts of websites that users directly see and interact with.",
    technologies: [
      {
        name: "HTML",
        desc: "Used to structure web pages using semantic elements and proper document hierarchy."
      },
      {
        name: "CSS",
        desc: "Responsible for styling, layout design, responsiveness, and animations."
      },
      {
        name: "JavaScript",
        desc: "Adds interactivity, DOM manipulation, dynamic content updates, and user event handling."
      },
      {
        name: "Responsive Design",
        desc: "Ensures websites work properly on mobile, tablet, and desktop devices."
      }
    ]
  },

  backend: {
    title: "Backend Development",
    description:
      "Backend development handles server-side logic, database management, authentication, and application performance.",
    technologies: [
      {
        name: "Node.js",
        desc: "JavaScript runtime used to build scalable server-side applications."
      },
      {
        name: "Express.js",
        desc: "Lightweight framework for building APIs and web servers."
      },
      {
        name: "MongoDB / SQL",
        desc: "Database systems used to store and manage application data."
      },
      {
        name: "REST APIs",
        desc: "Used for communication between frontend and backend systems."
      }
    ]
  }
};

function showSkills(type) {
  const container = document.getElementById("skills-details");
  const data = skillsData[type];

  if (!data) return;

  let techHTML = "";

  data.technologies.forEach((tech, index) => {
    techHTML += `
      <div class="detail-card" style="animation-delay:${index * 0.1}s">
        <h3>${tech.name}</h3>
        <p>${tech.desc}</p>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="main-detail">
      <h2>${data.title}</h2>
      <p class="main-desc">${data.description}</p>
    </div>
    ${techHTML}
  `;

  container.scrollIntoView({ behavior: "smooth" });
}
