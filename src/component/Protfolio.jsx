import React from "react";
import "./Portfolio.css"; // Ensure this import is present and correct

function Portfolio() {
  const githubProfile = "https://github.com/M-Ali379";


  const projects = [
    { name: "🍔 Food Ordering System", tech: "React, PHP, MySQL", link: githubProfile },
    { name: "🎨 Developer Portfolio", tech: "React & Tailwind", link: githubProfile },
    { name: "💻 Database Management App", tech: "SQL & Node.js", link: githubProfile},
    // Add more projects here
  ];

  return (
    <section id="Portfolio" className="portfolio">
      <h1>📂 Projects</h1>
      
      {/* THIS IS THE GRID CONTAINER */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          // THIS IS AN INDIVIDUAL PROJECT ITEM/CARD
          <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-item">
            <h3>{project.name}</h3>
            <p className="project-tech">{project.tech}</p>
            <span className="view-link">View Project →</span>
          </a>
        ))}
      </div>

    </section>
  );
}

export default Portfolio;