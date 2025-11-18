import React from 'react';
import "./Navbar.css";
import Picture from "../assets/profile.png";
import { useState, useEffect } from 'react';


function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false); // scrolling down -> hide
    } else {
      setShow(true);  // scrolling up -> show
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);


  return (
    <>
      <nav className={`navbar ${show ? "nav-show" : "nav-hide"}`}>

        <div className='propic'>
          <img src={Picture} alt='profile Picture' />
        </div>
        <div className="logo">Muhammad Ali<br />
          <hr />
          WEB Developer
          <br />
          <button className='download-btn'>
            <a href='./CV.pdf' Download target='_blank'>
              Download CV
            </a>  </button>
          <button className="hire">
            <a href="#Contact">Hire Me</a>
          </button>
        </div>





        <ul className="navbar-links">

          <li><a href="#Skills">Skill's</a></li>
          <li><a href="#Protfolio">Project's</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;