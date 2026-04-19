import React, { memo } from "react";
import "./Experience.css";
import { EXPERIENCE } from "../constants/experience";

/**
 * Experience section listing the developer's work history.
 *
 * @returns {JSX.Element} A section element with experience entries.
 */
const Experience = memo(function Experience() {
  return (
    <section id="Experience" className="experience">
      <h1>💼 Experience</h1>
      {EXPERIENCE.map((entry) => (
        <div key={`${entry.title}-${entry.company}`}>
          <p>
            {entry.title} — {entry.company} ({entry.period})
          </p>
          <p>{entry.description}</p>
        </div>
      ))}
    </section>
  );
});

export default Experience;
