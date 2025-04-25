import React from 'react';
import './frontpage.css';
import { Link } from "react-router-dom";

const FrontPage = () => {
  return (
    <section
      className="frontpage-section"
      style={{
        backgroundImage: "url('/images/bglvd.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="frontpage-content">
        <h1>Living Doll PH</h1>
        <p>Discover timeless elegance and contemporary fashion that speaks to your soul.</p>
        <Link to="/productcatalog" className="cta-button"> Shop Now! </Link>
      </div>
    </section>
  );
};

export default FrontPage;
