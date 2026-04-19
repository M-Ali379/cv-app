import React from "react";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./component/Navbar";
import Objectives from "./component/Objectives";
import Skills from "./component/Skills";
import Education from "./component/Education";
import Portfolio from "./component/Protfolio";
import Experience from "./component/Experience";
import Contact from "./component/Contact";

/**
 * Root application component that assembles all CV sections.
 *
 * @returns {JSX.Element} The full CV layout wrapped in an ErrorBoundary.
 */
function App() {
  return (
    <ErrorBoundary>
      <Navbar />
      <hr />
      <Objectives />
      <hr />
      <Education />
      <hr />
      <Experience />
      <hr />
      <Skills />
      <hr />
      <Portfolio />
      {/* Footer of the page */}
      <hr />
      <Contact />
    </ErrorBoundary>
  );
}

export default App;
