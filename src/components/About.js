import React from 'react';
import vah from '../assets/vah.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={vah} alt="Your Name" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hi! I'm Vah, a passionate web developer with a love for creating
            beautiful, responsive websites. I'm always eager to learn new
            technologies and work on exciting projects. I believe in clean,
            well-structured code and strive to deliver high-quality work.
          </p>
          <p>
            I'm also passionate about cybersecurity and enjoy exploring
            penetration testing and other security fields.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
