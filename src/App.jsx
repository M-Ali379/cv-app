import React from 'react'
import './App.css';
import Navbar from './component/Navbar';

import Objectives from './component/Objectives';
import Skills from './component/Skills';
import Education from './component/Education';
import Portfolio from './component/Portfolio';
import Experience from './component/Experience';
import Contact from './component/Contact';



function App() {

  return (
    <>
    <Navbar/>
    <hr/>
    <Objectives/>
    <hr/>
    <Education/>
    <hr/>
    <Experience/>
    <hr/>
    <Skills/>
    
    <hr/>
    <Portfolio/>
    
    {/*Footer of the page */} 
    <hr/>
    <Contact/>   
    </>
  );
}

export default App;
