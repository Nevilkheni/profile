import React from "react";
import "../style/contact.css";
import "../style/theme.css";

function Contact() {
  return (
    <div
      className="contact-section"
      id="contact"
      style={{ backgroundColor: "inherit" }}
    >
      <h2>Contact Me</h2>
      <p className="contact-intro">
        I'd love to hear from you! Whether it's a project, question, or just to
        say hi.
      </p>

      <div className="contact-container">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h4>Email</h4>
          <p>
            <a href="nevilkheni135@gmail.com">nevilkheni135@gmail.com</a>
          </p>
          <p>
            <a href="6351091508">6351091508</a>
          </p>

          <h4>Social</h4>
          <ul className="social-links">
            <li>
              <a
                href="https://www.linkedin.com/in/nevil-kheni-a724222b3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Nevilkheni"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>

          <div className="map-embed">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22660.54190927966!2d72.86179982987329!3d21.24559879863119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f4fb5c0b087%3A0xb7aabd8a90da0679!2sMota%20Varachha%2C%20Surat%2C%20Gujarat!5e1!3m2!1sen!2sin!4v1753776770463!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
