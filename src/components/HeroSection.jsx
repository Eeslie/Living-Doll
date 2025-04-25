import React from 'react';
import './herosection.css';
import { Link, useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreClick = () => {
    scrollToTop();
    navigate('/productCatalog');
  };

  return (
    <div className="app-container">
      <div className="hero-wrapper">
        <section className="hero-section">
          <div className="hero-text">
            <h2>Elevate Style,<br />Embrace Story</h2>
            <p>
              We provide the largest clothing collection for any season. You can choose trendy or classy design according to your preferences. Our services are super fast and we update within 24 hours.
            </p>
            <button onClick={handleExploreClick} className="explore-button">
              Explore <span className="arrow">→</span>
            </button>
          </div>
          <div className="hero-image-container">
            <div className="arch-bg"></div>
            <img src="/images/dress.jpg" alt="Fashion Model" className="hero-img" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
