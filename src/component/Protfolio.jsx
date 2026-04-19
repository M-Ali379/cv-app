import React, { memo } from "react";
import PropTypes from "prop-types";
import "./Portfolio.css";
import { PROJECTS } from "../constants/projects";

/**
 * @typedef {Object} Project
 * @property {string} name - Display name of the project
 * @property {string} tech - Technologies used
 * @property {string} link - URL to the project or profile
 */

/**
 * A single project card rendered inside the portfolio grid.
 *
 * @param {Object} props
 * @param {Project} props.project - Project data to display
 * @returns {JSX.Element}
 */
const ProjectCard = memo(function ProjectCard({ project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-item"
    >
      <h3>{project.name}</h3>
      <p className="project-tech">{project.tech}</p>
      <span className="view-link">View Project →</span>
    </a>
  );
});

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tech: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

/**
 * Portfolio section showcasing the developer's projects.
 *
 * @returns {JSX.Element} A section element with a grid of project cards.
 */
const Portfolio = memo(function Portfolio() {
  return (
    <section id="Portfolio" className="portfolio">
      <h1>📂 Projects</h1>

      {/* Project cards grid */}
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
});

export default Portfolio;