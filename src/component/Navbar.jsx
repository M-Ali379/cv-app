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
          <a href='./CV.pdf' download target='_blank' rel="noreferrer" className='download-btn'>
            Download CV
          </a>
          <a href="#Contact" className="hire">Hire Me</a>
        </div>

        <ul className="navbar-links">
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Portfolio">Projects</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
    </>
  );
}

export default memo(Navbar);
