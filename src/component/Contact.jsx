import React, { memo } from "react";
import "./Contact.css";
import { Github, Linkedin, Mail } from "lucide-react";
import About from "./About";
import { CONTACT_INFO, SOCIAL_LINKS } from "../constants/contact";

/**
 * Contact section displaying contact details, social links, and the About panel.
 *
 * @returns {JSX.Element} A section element with contact information and social icons.
 */
const Contact = memo(function Contact() {
  return (
    <>
      <section id="Contact" className="contact-section">
        {/* Left: About Section */}
        <div className="contact-left">
          <About />
        </div>

        {/* Right: Contact Section */}
        <div className="contact-right">
          <h2>📞 Contact Me</h2>

          <p>
            Email:{" "}
            <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
          </p>
          <p>Phone: {CONTACT_INFO.phone}</p>
          <p>Location: {CONTACT_INFO.location}</p>

          {/* Social icons */}
          <div className="social-icons">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <Github />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <Linkedin />
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              aria-label="Send email"
            >
              <Mail />
            </a>
          </div>
        </div>
      </section>
      <hr />
      <p className="footer-copy">© 2025 Muhammad Ali | All Rights Reserved</p>
    </>
  );
});

export default Contact;
