import React, { memo, useMemo } from "react";
import "./Portfolio.css";

function Portfolio() {
  const githubProfile = "https://github.com/M-Ali379";

  const projects = useMemo(() => [
    { name: "🍔 Food Ordering System", tech: "React, PHP, MySQL", link: githubProfile },
    { name: "🎨 Developer Portfolio", tech: "React & Tailwind", link: githubProfile },
    { name: "💻 Database Management App", tech: "SQL & Node.js", link: githubProfile },
  ], [githubProfile]);

  return (
    <section id="Portfolio" className="portfolio" aria-labelledby="portfolio-heading">
      <h2 id="portfolio-heading">📂 Projects</h2>

      {/* THIS IS THE GRID CONTAINER */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          // THIS IS AN INDIVIDUAL PROJECT ITEM/CARD
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-item"
            aria-label={`View project: ${project.name}`}
          >
            <h3>{project.name}</h3>
            <p className="project-tech">{project.tech}</p>
            <span className="view-link" aria-hidden="true">View Project →</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default memo(Portfolio);
