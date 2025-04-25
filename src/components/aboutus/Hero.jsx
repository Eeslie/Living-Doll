import React from 'react';
import '../../App.css';
import './hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-section-brands">
      <div className="hero-overlay">
        <h1 className="hero-title">Welcome to Living Doll PH</h1>
        <p className="hero-subtitle">
          Discover timeless fashion for the modern muse.
        </p>
        <Link to="/productCatalog" className="explore-button">
          Shop Now! <span className="arrow">→</span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
