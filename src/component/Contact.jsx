import React, { memo } from "react";
import "./Contact.css";
import { Github, Linkedin, Mail } from 'lucide-react';
import About from "./About";

function Contact() {
  return (
    <>
      <section id="Contact" className="contact-section" aria-labelledby="contact-heading">

        {/* Left: About Section */}
        <div className="contact-left">
          <About />
        </div>

        {/* Right: Contact Section */}
        <div className="contact-right">
          <h2 id="contact-heading">📞 Contact Me</h2>

          <p>Email: <a href="mailto:muhammadsiddiqui1214@gmail.com" aria-label="Send email to Muhammad Ali">
            muhammadsiddiqui1214@gmail.com
          </a></p>

          <p>Phone: +92 310 6213737</p>
          <p>Location: Lahore, Pakistan</p>

          {/* Social icons */}
          <div className="social-icons" role="list">
            <a href="https://github.com/M-Ali379" target="_blank" rel="noreferrer" aria-label="Visit Muhammad Ali's GitHub profile" role="listitem">
              <Github aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/aliwebdev1/" target="_blank" rel="noreferrer" aria-label="Visit Muhammad Ali's LinkedIn profile" role="listitem">
              <Linkedin aria-hidden="true" />
            </a>
            <a href="mailto:muhammadsiddiqui1214@gmail.com" aria-label="Send email to Muhammad Ali" role="listitem">
              <Mail aria-hidden="true" />
            </a>
          </div>
        </div>

      </section>
      <hr />
      <footer>
        <p className="footer-copy">© 2025 Muhammad Ali | All Rights Reserved</p>
      </footer>
    </>
  );
}

export default memo(Contact);
