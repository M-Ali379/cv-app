import React, { memo } from "react";
import "./Objectives.css";
import { CAREER_OBJECTIVE } from "../constants/objectives";

/**
 * Objectives section displaying the developer's career objective.
 *
 * @returns {JSX.Element} A section element with the career objective statement.
 */
const Objectives = memo(function Objectives() {
  return (
    <section id="Objectives" className="objectives">
      <h1>🎯 Career Objective</h1>
      <p>{CAREER_OBJECTIVE}</p>
    </section>
  );
});

export default Objectives;
