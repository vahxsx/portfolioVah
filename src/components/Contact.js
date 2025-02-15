// src/components/Contact.js
import React from 'react';
import { FaTelegram, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import icons

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>
          If you'd like to get in touch, feel free to reach out through any of
          the following:
        </p>
        <div className="contact-links">
          <a
            href="https://t.me/Vah_xs" // Update with your actual Telegram username
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram size={30} /> Telegram
          </a>
          <a
            href="mailto:vahxsx@gmail.com" // Update with your actual Email
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={30} /> Email
          </a>
          <a
            href="https://github.com/vahxsx" // Update with your actual GitHub URL
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
