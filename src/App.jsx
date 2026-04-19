import React, { Suspense, lazy } from 'react';
import './App.css';
import './styles/variables.css';
import Navbar from './component/Navbar';
import LoadingSpinner from './component/LoadingSpinner';

const Objectives = lazy(() => import('./component/Objectives'));
const Skills = lazy(() => import('./component/Skills'));
const Education = lazy(() => import('./component/Education'));
const Portfolio = lazy(() => import('./component/Protfolio'));
const Experience = lazy(() => import('./component/Experience'));
const Contact = lazy(() => import('./component/Contact'));

function App() {
  return (
    <>
      <Navbar />
      <hr />
      <Suspense fallback={<LoadingSpinner />}>
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
      </Suspense>
    </>
  );
}

export default App;
