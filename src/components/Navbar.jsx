import React, { useState } from 'react';
import './navbar.css';
import { Bookmark, Bag, List, X } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top px-4" style={{ background: "#F5EFE5" }}>
      <div className="container-fluid d-flex align-items-center justify-content-between position-relative w-100">
        {isMenuOpen && (
          <div className="mobile-menu d-lg-none d-flex flex-column align-items-start px-4 pb-2 gap-2">
            <Link className="nav-link text-dark" to="/" onClick={() => { setIsMenuOpen(false); scrollToTop();}} >Home</Link>
            <Link className="nav-link text-dark" to="/productcatalog" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}> Collections </Link>
            <Link className="nav-link text-dark"  to="/brands" onClick={() => { setIsMenuOpen(false); scrollToTop();}}> Brands </Link>
            <Link className="nav-link text-dark"  to="/about" onClick={() => { setIsMenuOpen(false); scrollToTop(); }}> About Us </Link>
          </div>
        )}

          {/* Left: Logo */}
          <div className="flex-grow-1">
            <Link className="navbar-brand fw-bold fs-4" to="/" style={{ fontFamily: 'Playfair Display, Serif' }} onClick={scrollToTop}> Living Doll </Link>
          </div>

          {/* Center: Menu (hidden on mobile) */}
          <div className="d-none d-lg-flex gap-4 justify-content-center nav-center position-absolute top-50 start-50 translate-middle-x">
            <Link className="nav-link text-dark" to="/" onClick={scrollToTop}>
              Home
            </Link>
            <Link className="nav-link text-dark" to="/productcatalog" onClick={scrollToTop}>
              Collections
            </Link>
            <Link className="nav-link text-dark" to="/brands" onClick={scrollToTop}>
              Brands
            </Link>
            <Link className="nav-link text-dark" to="/about" onClick={scrollToTop}>
              About Us
            </Link>
          </div>

          {/* Right: Icons + Hamburger */}
          <div className="d-flex gap-3 align-items-center flex-grow-1 justify-content-end">
            <button className="menu-toggle d-lg-none border-0 bg-transparent" onClick={toggleMenu}>
              {isMenuOpen ? <X size={28} /> : <List size={28} />}
            </button>
            <Link to="/wishlist" className="text-dark icon-hover" onClick={scrollToTop}>
              <Bookmark size={20} />
            </Link>
            <Link to="/shoppingcart" className="text-dark icon-hover" onClick={scrollToTop}>
              <Bag size={20} />
            </Link>
          </div>
        </div>
      </nav>
    );
  };

export default Navbar;
