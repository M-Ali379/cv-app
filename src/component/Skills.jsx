import React, { memo } from "react";
import "./Skills.css";
import { SKILLS } from "../constants/skills";

/**
 * Skills section displaying the developer's professional skill set.
 *
 * @returns {JSX.Element} A section element listing all skills.
 */
const Skills = memo(function Skills() {
  return (
    <section id="Skills" className="skills">
      <h1>🧠 Professional Skills</h1>
      <div className="skills-grid">
        {SKILLS.map((skill) => (
          <div key={skill} className="skill-item">{skill}</div>
        ))}
      </div>
    </section>
  );
});

export default Skills;
