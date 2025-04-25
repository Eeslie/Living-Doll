import React from 'react';
import './abooutsection.css';

const AboutSection = () => (
  <div className="app-container">
  <section className="about-section">
    <div className="about-image">
      <img src="/images/dress.jpg" alt="Living Doll PH style" />
    </div>
    <div className="about-text">
      <h2>Who Are We</h2>
            <p>
            Living Doll PH is more than just a fashion brand — it's a lifestyle. Our mission is to empower individuals through fashion that’s expressive, elegant, and accessible. 
            <br /><br />
            From curated collections to timeless staples, we ensure that every piece reflects confidence and authenticity. Whether you’re dressing for the everyday or an extraordinary moment, we’re here to make sure you look and feel like the best version of yourself.
            </p>
      <div className="cta-buttons">
        <a href="/about" className="btn primary-btn">Learn More</a>
      </div>
    </div>
  </section>
  </div>
);

export default AboutSection;
