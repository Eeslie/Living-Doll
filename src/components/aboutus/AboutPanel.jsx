import React from 'react';
import './AboutPanel.css';
import { Link, useNavigate } from 'react-router-dom';

const AboutPanel = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (path) => {
    scrollToTop();
    navigate(path);
  };

  return (
    <section className="about-section-panel">
      <div className="app-container">

        {/* Hero Section */}
        <div className="about-hero">
          <h1>Welcome to <span>Living Doll PH</span></h1>
          <p>Where confidence meets couture. Your journey to personal style starts here.</p>
        </div>

        {/* About Block */}
        <div className="about-block">
          <div className="about-image-group">
            <div className="about-img-wrapper">
              <img src="/images/dress.jpg" alt="Empowered woman in chic outfit" className="about-img styled" />
            </div>
          </div>
          <div className="about-text-panel">
            <h2><span>About</span> Living Doll PH</h2>
            <p>
              At Living Doll PH, fashion is more than just fabric — it’s your story woven into every thread.
              We are a proudly local brand driven to empower individuality, celebrate self-expression, and inspire elegance in the everyday.
            </p>
            <p>
              Our collections are curated with timeless silhouettes, bold statements, and pieces that make you feel <em>alive</em>.
            </p>
            <Link to="/productcatalog" className="about-btn" onClick={scrollToTop}> Shop Now! </Link>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="about-block reverse">
          <div className="about-text-panel">
            <h2><span>Why</span> Choose Us?</h2>
            <p>
              Living Doll PH isn’t just about looking good — it's about feeling seen.
              Whether you’re dressing up for brunch or powering through your 9-5, we’re here for your everyday runway.
            </p>
            <ul className="about-features">
              <li>✨ Limited Edition Drops</li>
              <li>🚚 Fast, Local Delivery</li>
              <li>💖 Designed for Filipinas, by Filipinas</li>
            </ul>
            <button className="about-btn" onClick={() => handleNavigate('/ourpromise')}>Our Promise →</button>
          </div>
          <div className="about-image-group">
            <div className="about-img-wrapper">
              <img src="/images/dress.jpg" alt="Style and individuality" className="about-img styled" />
            </div>
          </div>
        </div>

        {/* Our Commitment */}
        <div className="about-block">
          <div className="about-image-group">
            <div className="about-img-wrapper">
              <img src="/images/dress.jpg" alt="Fashion flatlay" className="about-img styled" />
            </div>
          </div>
          <div className="about-text-panel">
            <h2><span>Our</span> Commitment</h2>
            <p>
              We believe fashion should be intentional. That’s why we focus on sustainability, responsible sourcing, and
              inclusive sizing. Our team is committed to delivering quality without compromise — for the planet and for our people.
            </p>
            <p>
              Join our growing community of fashion lovers redefining style with purpose.
            </p>
            <button className="about-btn" onClick={() => handleNavigate('/ourvalues')}>Explore Our Values →</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutPanel;
