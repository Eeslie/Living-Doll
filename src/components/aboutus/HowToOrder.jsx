import React from 'react';
import './HowToOrder.css';

const HowToOrder = () => {
  return (
    <section className="order-section">
      <div className="order-container">
        <h3 className="order-subtitle">How to Order</h3>
        <h2 className="order-title">It’s Easy to Shop at Living Doll PH</h2>

        <div className="order-steps">
          <div className="order-card">
            <h4>1. Select Your Item</h4>
            <p>Browse our collections and click on your favorite items to view details.</p>
          </div>

          <div className="order-card">
            <h4>2. Add to Cart or Checkout</h4>
            <p>Add to cart if you're still shopping, or proceed directly to checkout when you're ready.</p>
          </div>

          <div className="order-card">
            <h4>3. Fill In Your Details</h4>
            <p>Enter your shipping information and choose your preferred payment method to place your order.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
