import React from 'react'
import './App.css';
import Navbar from './component/navbar';

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
    <Objectives/>
    <hr/>
    <Education/>
    <hr/>
    <Experience/>
    <hr/>
    <Skills/>
    
    <hr/>
    <Protfolio/>
    
    {/*Footer of the page */} 
    <hr/>
    <Contact/>   
    </>
  );
}

export default App;
