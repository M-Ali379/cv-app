import Picture from "../assets/profile.png";
import { useState, useEffect } from 'react';


function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);


  return (
    <header className={`sticky top-0 z-50 transition-transform duration-500 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-10">
          <a href="#About" className="flex items-center gap-4">
            <img className="h-14 w-14 rounded-full border border-slate-200 object-cover shadow-sm" src={Picture} alt="Muhammad Ali profile" />
            <div>
              <p className="font-serif text-lg font-semibold tracking-tight text-slate-900">Muhammad Ali</p>
              <p className="text-sm text-slate-500">Web Developer</p>
            </div>
          </a>

          <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-600">
            <a className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-900" href="#About">About</a>
            <a className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-900" href="#Portfolio">Projects</a>
            <a className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-900" href="#Skills">Skills</a>
            <a className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-900" href="#Contact">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;