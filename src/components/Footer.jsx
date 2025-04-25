import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <section className="footer-container">

        {/* Brand Info */}
        <div className="footer-section">
          <h3 className="footer-head">LIVINGDOLL PH</h3>
          <p className="footer-text">Cavite, Philippines</p>
        </div>

        {/* Our Company */}
        <div className="footer-section">
          <h6 className="footer-head">OUR COMPANY</h6>
          <p><Link to="/about" className="footer-text" onClick={scrollToTop}>About Us</Link></p>
          <p><Link to="/brands" className="footer-text" onClick={scrollToTop}>Blog Post</Link></p>
        </div>

        {/* Customer Care */}
        <div className="footer-section">
          <h6 className="footer-head">REACH US HERE</h6>
          <p><Link to="/contact" className="footer-text" onClick={scrollToTop}>Contact Us</Link></p>
          <p><Link to="/termsAndPrivacy" className="footer-text" onClick={scrollToTop}>Terms of Service</Link></p>
          <p><HashLink to="/about#faq-section" className="footer-text" scroll={el => el.scrollIntoView({ behavior: 'smooth' })}>FAQs</HashLink></p>
          <p><Link to="/privacy" className="footer-text" onClick={scrollToTop}>Privacy Policy</Link></p>
        </div>

        {/* Legal Area */}
        <div className="footer-section">
          <h6 className="footer-head">CATCH US HERE</h6>
          <p><Link to="/productcatalog" className="productcatalog" onClick={scrollToTop}>Collections</Link></p>
          <p><Link to="/shoppingcart" className="footer-text" onClick={scrollToTop}>Shopping Cart</Link></p>
          <p><Link to="/checkout" className="footer-text" onClick={scrollToTop}>Check Out</Link></p>
        </div>

        {/* Follow Us */}
        <div className="footer-section">
          <h6 className="footer-head">FOLLOW US</h6>
          <div className="icon-width">
            <Link to="https://facebook.com" className="text-reset" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f fa-2x"></i>
            </Link>
            <Link to="https://instagram.com" className="text-reset" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-2x"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <span className="footer-copy">COPYRIGHT © LIVINGDOLL PH {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;