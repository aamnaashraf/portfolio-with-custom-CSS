import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="container pt-8" >
      <div className="navbar-container">
        <div className="navbar-title">Portfolio</div>
        <ul className="navbar-links">
          <li><a href="#hero" className="navbar-link">Home</a></li>
          <li><a href="#about" className="navbar-link">About</a></li>
          <li><a href="#projects" className="navbar-link">Projects</a></li>
          <li><a href="#skills" className="navbar-link">Skills</a></li>
          <li><a href="#contact" className="navbar-link">Contact</a></li>
        </ul>
        <AiOutlineMenu className="menu-icon" size={30} />
      </div>
    </div>
  );
};

export default Navbar;
