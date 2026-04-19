import React, { memo } from 'react';
import "./Navbar.css";
import Picture from "../assets/profile.png";
import useScrollPosition from '../hooks/useScrollPosition';


function Navbar() {
  const { scrollDirection } = useScrollPosition();
  const show = scrollDirection === 'up';

  return (
    <>
      <nav className={`navbar ${show ? "nav-show" : "nav-hide"}`} role="navigation" aria-label="Main navigation">

        <div className='propic'>
          <img src={Picture} alt='Muhammad Ali profile picture' />
        </div>
        <div className="logo">Muhammad Ali<br />
          <hr />
          WEB Developer
          <br />
          <button className='download-btn' aria-label="Download CV as PDF">
            <a href='./CV.pdf' download target='_blank' rel="noreferrer">
              Download CV
            </a>
          </button>
          <button className="hire" aria-label="Hire Muhammad Ali">
            <a href="#Contact">Hire Me</a>
          </button>
        </div>

        <ul className="navbar-links" role="list">
          <li><a href="#Skills" aria-label="Go to Skills section">Skills</a></li>
          <li><a href="#Portfolio" aria-label="Go to Portfolio section">Projects</a></li>
          <li><a href="#About" aria-label="Go to About section">About</a></li>
          <li><a href="#Contact" aria-label="Go to Contact section">Contact</a></li>
        </ul>
      </nav>
    </>
  );
}

export default memo(Navbar);
