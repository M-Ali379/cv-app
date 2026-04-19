import "./Contact.css";
import { Github, Linkedin, Mail } from 'lucide-react';
import About from "./About";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../config/constants";

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

        <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`}>
          {PERSONAL_INFO.email}
        </a></p>

        <p>Phone: {PERSONAL_INFO.phone}</p>
        <p>Location: {PERSONAL_INFO.location}</p>

        {/* Social icons */}
        <div className="social-icons">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer">
            <Github />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer">
            <Linkedin />
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`}>
            <Mail />
          </a>
        </div>
      </div>

    </section>
    <hr />
    <p className="footer-copy">© 2025 {PERSONAL_INFO.name} | All Rights Reserved</p>
  </>
  );
}


export default Contact;
