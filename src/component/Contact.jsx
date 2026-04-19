import React from "react";
import "./Contact.css";
import { Github, Linkedin, Mail } from 'lucide-react';
import About from "./About";

/**
 * Contact component – displays contact information, social media links,
 * and embeds the About section. Includes a semantic footer.
 */
function Contact() {
  return (<>
    <section id="Contact" className="contact-section">

      {/* Left: About Section */}
      <div className="contact-left">
        <About />
      </div>

      {/* Right: Contact Section */}
      <div className="contact-right">
        <h2>📞 Contact Me</h2>

        <p>Email: <a href="mailto:muhammadsiddiqui1214@gmail.com">
          muhammadsiddiqui1214@gmail.com
        </a></p>

        <p>Phone: +92 310 6213737</p>
        <p>Location: Lahore, Pakistan</p>

        {/* Social icons */}
        <div className="social-icons">
          <a href="https://github.com/M-Ali379" target="_blank" rel="noreferrer">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/aliwebdev1/" target="_blank" rel="noreferrer">
            <Linkedin />
          </a>
          <a href="mailto:muhammadsiddiqui1214@gmail.com">
            <Mail />
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


export default Contact;
