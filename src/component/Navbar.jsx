import React, { useState, useEffect, useCallback } from "react";
import "./Navbar.css";
import Picture from "../assets/profile.png";

/**
 * Navbar component that hides on scroll-down and reappears on scroll-up.
 * Contains the profile picture, name, download CV button, hire me button,
 * and navigation links.
 *
 * @returns {JSX.Element} A sticky navigation bar.
 */
function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setShow(false); // scrolling down -> hide
    } else {
      setShow(true);  // scrolling up -> show
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [controlNavbar]);

  return (
    <>
      <nav className={`navbar ${show ? "nav-show" : "nav-hide"}`}>
        <div className="propic">
          <img src={Picture} alt="Muhammad Ali profile picture" />
        </div>
        <div className="logo">
          Muhammad Ali<br />
          <hr />
          WEB Developer
          <br />
          <button className="download-btn">
            <a href="./CV.pdf" download target="_blank" rel="noreferrer">
              Download CV
            </a>
          </button>
          <button className="hire">
            <a href="#Contact">Hire Me</a>
          </button>
        </div>

        <ul className="navbar-links">
          <li><a href="#Skills">Skill&apos;s</a></li>
          <li><a href="#Portfolio">Project&apos;s</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
