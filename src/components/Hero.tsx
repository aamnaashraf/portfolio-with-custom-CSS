import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div
      id="header"
      className="header-container"
      style={{ backgroundSize: '35%', backgroundPosition: 'left 100px top 100px' }}
    >
      <Navbar />
      <div className="header-content">
        <div className="hidden-lg"></div>
        <div className="text-container">
          <div>
            <p data-aos="zoom-in-up">My</p>
            <p data-aos="zoom-in-up">Name is</p>
            <p data-aos="zoom-in-up">Aamna Ashraf Rajput!</p>
            <p className="description" data-aos="zoom-in-up">
              A passionate developer learning AI, Web 3.0, and Metaverse at GIAIC, building innovative solutions for
              the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
