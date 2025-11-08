import React from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <footer id="Contact" className="footer">
      <div className="footer-content">
        <h2>📞 Contact Me</h2>
        <p>Email: <a href="mailto:muhammadsiddiqui1214@gmail.com">muhammadsiddiqui1214@gmail.com</a></p>
        <p>Phone: +92 310 6213737</p>
        <p>Location: Lahore, Pakistan</p>

        {/* Social Links */}
        <div className="social-icons">
          <a href="https://github.com/M-Ali379" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/aliwebdev1/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:muhammadsiddiqui1214@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <hr />
        <p className="footer-copy">© 2025 Muhammad Ali | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Contact;
