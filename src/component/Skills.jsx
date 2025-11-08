import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    "HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS",
    "Bootstrap", "Node.js", "Express.js", "PHP", "MySQL",
   
  ];

  return (
    <section id="Skills" className="skills">
      <h1>🧠 Professional Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">{skill}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
