// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <div className="projects-list">
          <a
            href="https://yourproject1.com"
            target="_blank"
            rel="noopener noreferrer"
            className="project-item"
          >
            <h3>📱 GadgetSphere </h3>
            <p>Smartphones and accessories</p>
          </a>
          <a
            href="https://yourprojectvah2.com"
            target="_blank"
            rel="noopener noreferrer"
            className="project-item"
          >
            <h3>🍕 QuickBite </h3>
            <p>Online food delivery platform</p>
          </a>
          <a
            href="https://yourproject3.com"
            target="_blank"
            rel="noopener noreferrer"
            className="project-item"
          >
            <h3>🏨 BookEase</h3>
            <p>Hotels, events, and appointments</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
