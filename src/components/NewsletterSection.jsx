import React from 'react';
import './newslettersection.css';
import '../App.css';

const NewsletterSection = () => (
  <div className="app-container">
    <section className="newsletter-section">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Stay updated with our latest collections and exclusive offers.</p>
      <form className="newsletter-form">
        <input type="email" placeholder="Your email address" className="email-input" />
        <button type="submit" className="btn subscribe-btn">Subscribe</button>
      </form>
    </section>
  </div>
);

export default NewsletterSection;
