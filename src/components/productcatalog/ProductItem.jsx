import { useParams } from "react-router-dom";
import Navbar from '../Navbar';
import Footer from '../Footer';
import './ProductItem.css';
import { Link } from 'react-router-dom';
import { useEffect } from "react";

export default function ProductItem() {
  const productData = [
    { id: 1, name: 'Elegant Dress', category: 'Dresses', price: '₱ 9,999.00', description: 'Ranz Pogi Ranz Pogi Ranz Pogi Ranz Pogi Ranz Pogi Ranz Pogi', stock: '0.0%', image: '/images/dress.jpg' },
    { id: 2, name: 'Chic Summer', category: 'Dresses', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress2.jpg' },
    { id: 3, name: 'Floral Vibes', category: 'Dresses', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress3.jpg' },
    { id: 4, name: 'Midnight Charm', category: 'Dresses', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress4.jpg' },
    { id: 5, name: 'Sunkissed', category: 'Dresses', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress5.jpg' },
    { id: 6, name: 'Rosy Petals', category: 'Dresses', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress11.jpg' },
    { id: 7, name: 'Classic Navy', category: 'Dresses', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress12.jpg' },
    { id: 8, name: 'Sunset Flow', category: 'Dresses', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress13.jpg' },
    { id: 9, name: 'Soft Bloom', category: 'Dresses', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress14.jpg' },
    { id: 10, name: 'Golden Hour', category: 'Dresses', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress2.jpg' },
        { id: 11, name: 'Elegant Dress', category: 'Pants', price: '₱ 9,999.00', description: 'Ranz Pogi Ranz Pogi Ranz Pogi Ranz Pogi Ranz Pogi Ranz Pogi', stock: '0.0%', image: '/images/dress.jpg' },
    { id: 12, name: 'Chic Summer', category: 'Pants', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress2.jpg' },
    { id: 13, name: 'Floral Vibes', category: 'Pants', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress3.jpg' },
    { id: 14, name: 'Midnight Charm', category: 'Pants', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress4.jpg' },
    { id: 15, name: 'Sunkissed', category: 'Pants', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress5.jpg' },
    { id: 16, name: 'Rosy Petals', category: 'Pants', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress11.jpg' },
    { id: 17, name: 'Classic Navy', category: 'Pants', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress12.jpg' },
    { id: 18, name: 'Sunset Flow', category: 'Pants', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress13.jpg' },
    { id: 19, name: 'Soft Bloom', category: 'Pants', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress14.jpg' },
    { id: 20, name: 'Golden Hour', category: 'Pants', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress2.jpg' },
    { id: 21, name: 'Elegant Dress', category: 'Pants', price: '₱ 9,999.00', description: 'Ranz Pogi Ranz Pogi Ranz Pogi Ranz Pogi Ranz Pogi Ranz Pogi', stock: '0.0%', image: '/images/dress.jpg' },
    { id: 22, name: 'Chic Summer', category: 'Pants', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress2.jpg' },
    { id: 23, name: 'Floral Vibes', category: 'Pants', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress3.jpg' },
    { id: 24, name: 'Midnight Charm', category: 'Pants', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress4.jpg' },
    { id: 25, name: 'Sunkissed', category: 'Pants', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress5.jpg' },
    { id: 26, name: 'Rosy Petals', category: 'Pants', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress11.jpg' },
    { id: 27, name: 'Classic Navy', category: 'Pants', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress12.jpg' },
    { id: 28, name: 'Sunset Flow', category: 'Pants', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress13.jpg' },
    { id: 29, name: 'Soft Bloom', category: 'Pants', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress14.jpg' },
    { id: 30, name: 'Golden Hour', category: 'Pants', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress2.jpg' },
    { id: 31, name: 'Elegant Dress', category: 'Pants', price: '₱ 9,999.00', description: 'Ranz Pogi Ranz Pogi Ranz Pogi Ranz Pogi Ranz Pogi Ranz Pogi', stock: '0.0%', image: '/images/dress.jpg' },
    { id: 32, name: 'Chic Summer', category: 'Pants', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress2.jpg' },
    { id: 33, name: 'Floral Vibes', category: 'Pants', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress3.jpg' },
    { id: 34, name: 'Midnight Charm', category: 'Pants', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress4.jpg' },
    { id: 35, name: 'Sunkissed', category: 'Pants', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress5.jpg' },
    { id: 36, name: 'Rosy Petals', category: 'Pants', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress11.jpg' },
    { id: 37, name: 'Classic Navy', category: 'Pants', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress12.jpg' },
    { id: 38, name: 'Sunset Flow', category: 'Pants', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress13.jpg' },
    { id: 39, name: 'Soft Bloom', category: 'Pants', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress14.jpg' },
    { id: 40, name: 'Golden Hour', category: 'Pants', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress2.jpg' }
  ];

  const { id } = useParams();
  const item = productData.find((i) => i.id === parseInt(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!item) return <div>Product not found</div>;

  return (
    <>
      <Navbar />
      <Link to="/productcatalog" className="back-button"> Return </Link>
      <div className="product-container">
        <div className="product-gallery">
          <div className="thumbnails">
            <img src={item.image} alt={item.name} className="thumb-img" />
            <img src={item.image} alt={item.name} className="thumb-img" />
            <img src={item.image} alt={item.name} className="thumb-img" />
          </div>
          <div className="main-image">
            <button className="arrow">&#9664;</button>
            <img src={item.image} alt={item.name} />
            <button className="arrow">&#9654;</button>
          </div>
        </div>

        <div className="product-info-item">
          <p className="collection-name">COLLECTION’S NAME</p>
          <h1 className="product-name">{item.name}</h1>
          <p className="product-category">{item.category}</p>
          <h2 className="product-price">{item.price}</h2>

          <div className="size-selection">
            <label htmlFor="size" className="size-label">Select Size:</label>
            <select id="size" className="size-dropdown">
              <option value="">Choose size</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>

          {/* Interactive Buttons */}
          <div className="buttons">
            <button className="buy-now interactive-btn" onClick={scrollToTop}>BUY NOW!</button>
            <button className="add-to-cart interactive-btn">ADD TO CART</button>
          </div>

          <p className="description">Products Description</p>
          <p className="product-description">{item.description}</p>

          <div className="ratings">
            <div className="ratings-inline">
              <span className="label">Customers' Ratings & Reviews</span>
              <div className="stars">
                {'★★★★★'.split('').map((s, i) => (
                  <span key={i} style={{ color: 'gold' }}>{s}</span>
                ))}
              </div>
              <span className="score">{item.stock}</span>
              <a href="#" className="view-reviews">View Reviews</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}