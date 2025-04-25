import React from 'react';
import './CheckOut.css';
import { Link } from 'react-router-dom';

const CheckOut = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="checkout-container">
      <div className="checkout-header">
      <Link to="/homepage" className="back-button"> ← </Link>
        <h1>CHECK OUT</h1>
      </div>

      <div className="checkout-main">
        <div className="checkout-left">
          <div className="card info-card">
            <h2>My Information</h2>
            <div className="form-row">
              <input type="text" placeholder="First Name *" />
              <input type="text" placeholder="Last Name *" />
            </div>
            <div className="form-row">
              <input type="email" placeholder="E-mail *" />
              <input type="text" placeholder="Contact Number *" />
            </div>

            <h3>My Shipping Address</h3>
            <div className="form-row">
              <input type="text" placeholder="Country *" />
              <input type="text" placeholder="City/Municipality *" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="State/Province *" />
              <input type="text" placeholder="Street *" />
              <input type="text" placeholder="House No." />
            </div>

            <div className="consent-and-button">
              <div className="checkboxes">
                <label>
                  <input type="checkbox" /> I agree to receive personalized commercial communications via email.
                </label>
                <label>
                  <input type="checkbox" /> I have read, understood and agree to the <Link to="/privacy" onClick={scrollToTop}>Privacy Policy</Link>.      
                </label>
              </div>
              <button className="checkout-button" onClick={scrollToTop}>
                Proceed to Checkout
              </button>
            </div>
          </div>

          <div className="card payment-card">
            <h2>Payment</h2>
            <div className="payment-options">
              <div className="payment-box"></div>
              <div className="payment-box"></div>
              <div className="payment-box"></div>
            </div>
          </div>
        </div>

        <div className="checkout-right">
          <div className="card shopping-bag-card">
            <h2>MY SHOPPING BAG</h2>
            <p>ORDER REFERENCE NO. :</p>

            {[1, 2, 3].map((_, idx) => (
              <div className="product-item" key={idx}>
                <div className="product-image-checkout"></div>
                <div className="product-info">
                  <p><strong>PRODUCT NAME</strong></p>
                  <p>₱ 9,999.00</p>
                  <p>SIZE:</p>
                  <p>QUANTITY: 1</p>
                </div>
              </div>
            ))}

            <div className="totals">
              <p>Subtotal: <span>₱ 9,999.00</span></p>
              <p>Shipping: <span>₱ 0.00</span></p>
              <h3>TOTAL: <span>₱ 9,999.00</span></h3>
            </div>
          </div>

          <div className="card extra-info-card">
            <p>PAYMENT OPTIONS:</p>
            <div className="payment-options">
              <div className="payment-box"></div>
              <div className="payment-box"></div>
              <div className="payment-box"></div>
            </div>
            <br></br>
            <p>CUSTOMER CARE:</p>
            <Link to="/privacy" onClick={scrollToTop} className="reach-us-button">REACH US</Link>
            <p>RETURN & EXCHANGE</p>
          </div>
        </div>
      </div>

      <footer className="privacy-footer">
        <p><strong>Privacy Notice – Living Doll PH</strong></p>
        <p>Your personal data is collected and processed by Living Doll PH to enhance your shopping experience...</p>
      </footer>
    </div>
  );
};

export default CheckOut;
