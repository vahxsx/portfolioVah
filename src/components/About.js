// src/components/About.js
import React from 'react';
import vah from '../assets/vah.jpg';

const About = () => {
  const skills = [
    'React',
    'JavaScript',
    'CSS',
    'Penetration Testing',
    'Cybersecurity',
  ];

  return (
    <section id="about" className="about-section" aria-label="About Me">
      <div className="about-container">
        <div className="about-image">
          <img
            src={vah}
            alt="Vah, web developer and cybersecurity enthusiast"
            onError={(e) => (e.target.src = 'https://via.placeholder.com/200')}
          />
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
          <h3>Skills</h3>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
