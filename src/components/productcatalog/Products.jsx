import React, { useState } from 'react';
import './products.css';
import { Link } from 'react-router-dom';

const ProductCatalog = () => {
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
    { id: 21, name: 'Elegant Dress', category: 'Shirts', price: '₱ 9,999.00', description: 'Ranz Pogi Ranz Pogi Ranz Pogi Ranz Pogi Ranz Pogi Ranz Pogi', stock: '0.0%', image: '/images/dress.jpg' },
    { id: 22, name: 'Chic Summer', category: 'Shirts', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress2.jpg' },
    { id: 23, name: 'Floral Vibes', category: 'Shirts', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress3.jpg' },
    { id: 24, name: 'Midnight Charm', category: 'Shirts', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress4.jpg' },
    { id: 25, name: 'Sunkissed', category: 'Shirts', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress5.jpg' },
    { id: 26, name: 'Rosy Petals', category: 'Shirts', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress11.jpg' },
    { id: 27, name: 'Classic Navy', category: 'Shirts', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress12.jpg' },
    { id: 28, name: 'Sunset Flow', category: 'Shirts', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress13.jpg' },
    { id: 29, name: 'Soft Bloom', category: 'Shirts', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress14.jpg' },
    { id: 30, name: 'Golden Hour', category: 'Shirts', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress2.jpg' },
    { id: 31, name: 'Elegant Dress', category: 'Wear', price: '₱ 9,999.00', description: 'Ranz Pogi Ranz Pogi Ranz Pogi Ranz Pogi Ranz Pogi Ranz Pogi', stock: '0.0%', image: '/images/dress.jpg' },
    { id: 32, name: 'Chic Summer', category: 'Wear', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress2.jpg' },
    { id: 33, name: 'Floral Vibes', category: 'Wear', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress3.jpg' },
    { id: 34, name: 'Midnight Charm', category: 'Wear', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress4.jpg' },
    { id: 35, name: 'Sunkissed', category: 'Wear', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress5.jpg' },
    { id: 36, name: 'Rosy Petals', category: 'Wear', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress11.jpg' },
    { id: 37, name: 'Classic Navy', category: 'Wear', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress12.jpg' },
    { id: 38, name: 'Sunset Flow', category: 'Wear', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress13.jpg' },
    { id: 39, name: 'Soft Bloom', category: 'Wear', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress14.jpg' },
    { id: 40, name: 'Golden Hour', category: 'Wear', price: '₱ 9,999.00', stock: '5.0%', image: '/images/dress2.jpg' }
];

const [category, setCategory] = useState("Dresses");
const [sidebarStatus, setSidebarStatus] = useState(false);

let itemData =  productData.filter((c) => c.category === category);


const handleClick = (cat) => {
    console.log(itemData);
    itemData = productData.filter((c) => c.category === cat);
    setCategory(cat);
}

  return (
      <div className="product-catalog-wrapper">
      <button onClick={ () => setSidebarStatus(!sidebarStatus) } className='d-none sidebar_mobile_button styled-button' type="button" data-bs-toggle="dropdown" aria-expanded="false">COLLECTION</button>
      <aside className="sidebar">
        <h4>COLLECTIONS</h4>
        <button onClick={() => handleClick("Dresses")} className={`collection-item ${category === "Dresses" ? "active" : ""}`}>
          <div className="thumbnail"></div>
          <span>COLLECTION 1</span>
        </button>

        <button onClick={() => handleClick("Pants")} className={`collection-item ${category === "Pants" ? "active" : ""}`}>
          <div className="thumbnail"></div>
          <span>COLLECTION 2</span>
        </button>

        <button onClick={() => handleClick("Shirts")} className={`collection-item ${category === "Shirts" ? "active" : ""}`}>
          <div className="thumbnail"></div>
          <span>COLLECTION 3</span>
        </button>

        <button onClick={() => handleClick("Wear")} className={`collection-item ${category === "Wear" ? "active" : ""}`}>
          <div className="thumbnail"></div>
          <span>COLLECTION 4</span>
        </button>

        {/* SIDEBAR MOBILE */}
      </aside>
      <div className="dropdown-menu w-100">
        <button onClick={() => handleClick("Dresses")} className={`collection-item dropdown-item ${category === "Dresses" ? "active" : ""}`}>
          <div className="thumbnail"></div>
          <span>COLLECTION 1</span>
        </button>

        <button onClick={() => handleClick("Pants")} className={`collection-item dropdown-item ${category === "Pants" ? "active" : ""}`}>
          <div className="thumbnail"></div>
          <span>COLLECTION 2</span>
        </button>

        <button onClick={() => handleClick("Shirts")} className={`collection-item dropdown-item ${category === "Shirts" ? "active" : ""}`}>
          <div className="thumbnail"></div>
          <span>COLLECTION 3</span>
        </button>

        <button onClick={() => handleClick("Wear")} className={`collection-item dropdown-item ${category === "Wear" ? "active" : ""}`}>
          <div className="thumbnail"></div>
          <span>COLLECTION 4</span>
        </button>
        </div>

      <main className="catalog">
        <h4>PRODUCT CATALOG</h4>
        <div className="products-grid">
          {itemData.map((product, i) => (
            <div>
              <div className="product-card" key={i}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <p className="name">{product.name}</p>
                  <p className="category">{product.category}</p>
                  <p className="price">{product.price}</p>
                  <p className="stock">💛 {product.stock}</p>
                  <Link className="buy" to={`/productItem/${product.id}`}>BUY NOW!</Link>
                  <button className="add" data-bs-toggle="modal" data-bs-target={`#addToCart${ product.id }`}>ADD TO CART</button>
                </div>
              </div>
              {/* Bootstrap Modal */}
              <div
                className="modal fade"
                id={`addToCart${product.id}`}
                tabIndex="-1"
                aria-labelledby={`modalLabel${product.id}`}
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content playfair-font">
                    <div className="modal-header">
                      <h5 className="modal-title" id={`modalLabel${product.id}`}>
                        {product.name}
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <p>{product.description || "No description available."}</p>
                      <p><strong>Price:</strong> {product.price}</p>
                      <p><strong>Stock:</strong> {product.stock}</p>
                    </div>
                    <div className="modal-footer d-flex flex-column flex-sm-row justify-content-end">
                      <button
                        type="button"
                        className="btn btn-secondary-product w-auto"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <Link to="/shoppingcart" className="btn btn-primary-product w-auto">
                        Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductCatalog;