// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1>Welcome to My Portfolio</h1>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
