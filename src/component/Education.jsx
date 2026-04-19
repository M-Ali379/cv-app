import React, { memo } from "react";
import "./Education.css";
import { EDUCATION } from "../constants/education";

/**
 * Education section listing the developer's academic qualifications.
 *
 * @returns {JSX.Element} A section element with education entries.
 */
const Education = memo(function Education() {
  return (
    <section id="Education" className="education">
      <h1>🎓 Education</h1>
      {EDUCATION.map((entry) => (
        <p key={`${entry.degree}-${entry.institution}`}>
          {entry.degree} — {entry.institution} ({entry.period})
        </p>
      ))}
    </section>
  );
});

export default Education;
