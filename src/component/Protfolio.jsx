import "./Portfolio.css";
import { PROJECTS, SOCIAL_LINKS } from "../config/constants";

function Portfolio() {
  return (
    <section id="Portfolio" className="portfolio">
      <h1>📂 Projects</h1>

      {/* THIS IS THE GRID CONTAINER */}
      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          // THIS IS AN INDIVIDUAL PROJECT ITEM/CARD
          <a key={index} href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="project-item">
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