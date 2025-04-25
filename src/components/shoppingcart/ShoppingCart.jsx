import React from 'react';
import './ShoppingCart.css';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  return (
    <>
    <div className="shoppingcart-container">
      <div className="shoppingcart-header">
        <Link to="/homepage" className="back-button"> ← </Link>
        <h1>MY SHOPPING CART</h1>
      </div>

      <div className="shoppingcart-main">
        <div className="shoppingcart-left">
          <div className="card cart-items-card">
            {[1, 2, 3].map((_, idx) => (
              <div className="cart-product" key={idx}>
                <div className="cart-image-box"></div>
                <div className="cart-product-info">
                  <p><strong>Product Name</strong></p>
                  <p>₱ 9,999.00</p>
                  <p>SIZE: M</p>
                  <div className="quantity-edit-remove">
                    <label>
                      Quantity: 
                      <select className="quantity-dropdown">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </label>
                    <div className="edit-remove-links">
                      <Link to="/edit" className="edit-link">EDIT</Link> |
                      <Link to="/remove" className="remove-link">REMOVE</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* You May Also Like Panel */}
        </div>

        <div className="shoppingcart-right">
          <div className="card summary-card">
            <h2>ORDER SUMMARY</h2>
            <div className="summary-details">
              <p>Subtotal: <span>₱ 9,999.00</span></p>
              <p>Shipping: <span>₱ 0.00</span></p>
              <h3>Total: <span>₱ 9,999.00</span></h3>
            </div>
            <Link to="/checkout" className="checkout-link">PROCEED TO CHECKOUT</Link>
          </div>

          <div className="card payment-card-cart">
            <h3>PAYMENT OPTIONS:</h3>
            <div className="payment-options-cart">
              <div className="payment-box-cart"></div>
              <div className="payment-box-cart"></div>
              <div className="payment-box-cart"></div>
              <div className="payment-box-cart"></div>
            </div>
            <div className="customer-care">
              <h4>CUSTOMER CARE:</h4>
              <Link to="/contact" className="reachus-link">REACH US</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="shopping-cart-products-shoppingcart">
            <h3 className="shopping-cart-heading">You may also like</h3>
            <div className="shopping-cart-recommendations-wrapper">
              <div className="shopping-cart-recommendations">
                {[1, 2, 3, 4].map((_, idx) => (
                  <div className="shopping-cart-recommendation-card" key={idx}>
                    <div className="shopping-cart-recommendation-image"></div>
                    <p>Recommended Product</p>
                    <Link to="/product" className="shopping-cart-view-link">View</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <br></br>
    </>
  );
};

export default ShoppingCart;
