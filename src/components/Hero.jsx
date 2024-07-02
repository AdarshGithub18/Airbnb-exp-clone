import React from 'react';
import heroImg from '../assets/images/photo-grid.png';

const Hero = () => {
  return (
    <>
      <div className="hero-container section">
        <div className="hero-img">
          <img src={heroImg} alt="hero-img" />
        </div>
        <div className="hero-labels">
          <h1 className="hero-heading">Online Experiences</h1>
          <p className="hero-para">
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
