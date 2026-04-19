import './App.css';
import Navbar from './component/Navbar';
import Objectives from './component/Objectives';
import Skills from './component/Skills';
import Education from './component/Education';
import Protfolio from './component/Protfolio';
import Experience from './component/Experience';
import Contact from './component/Contact';
import ErrorBoundary from './components/ErrorBoundary';



function App() {

  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}

export default App;
