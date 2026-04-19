import React, { memo, useMemo } from "react";
import "./Skills.css";

function Skills() {
  const skills = useMemo(() => [
    "HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS",
    "Bootstrap", "Node.js", "Express.js", "PHP", "MySQL",
  ], []);

  return (
    <section id="Skills" className="skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading">🧠 Professional Skills</h2>
      <div className="skills-grid" role="list">
        {skills.map((skill) => (
          <div key={skill} className="skill-item" role="listitem">{skill}</div>
        ))}
      </div>
    </section>
  );
}

export default memo(Skills);
