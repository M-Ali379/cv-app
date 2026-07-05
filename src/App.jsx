import Navbar from './component/Navbar';
import About from './component/About';
import Protfolio from './component/Protfolio';
import Skills from './component/Skills';
import Contact from './component/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <Navbar />
      <main>
        <About />
        <Protfolio />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
