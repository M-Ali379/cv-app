import React, { memo } from "react";
import "./About.css";

/**
 * About section providing a brief personal introduction.
 *
 * @returns {JSX.Element} A section element with the developer's bio.
 */
const About = memo(function About() {
  return (
    <>
      <section id="About" className="about">
        <h1>📛About Me</h1>
        <p>
          Hello! I&apos;m <strong>Muhammad Ali</strong>. I am a passionate web developer
          with a focus on front-end technologies like React, HTML, CSS, and JavaScript.
        </p>
      </section>
    </>
  );
});

export default About;
