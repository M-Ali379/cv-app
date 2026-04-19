import "./Skills.css";
import { SKILLS } from "../config/constants";

function Skills() {
  return (
    <section id="Skills" className="skills">
      <h1>🧠 Professional Skills</h1>
      <div className="skills-grid">
        {SKILLS.map((skill, index) => (
          <div key={index} className="skill-item">{skill}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
