import React from 'react'
import './App.css';
import Navbar from './component/navbar';

import About from "./component/About";
import Objectives from './component/Objectives';
import Skills from './component/Skills';
import Education from './component/Education';
import Protfolio from './component/Protfolio';
import Experience from './component/Experience';
import Contact from './component/Contact';


function App() {

  return (
    <>
    <Navbar/>
    <hr/>
    <About/>
    <hr/>
    <Objectives/>
    <hr/>
    <Skills/>
    <hr/>
    <Education/>
    <hr/>
    <Protfolio/>
    <hr/>
    <Experience/>
    <hr/>
    {/* Footer of the web page*/} 
    <Contact/>           
    </>
  );
}

export default App;
