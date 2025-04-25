import React, { useEffect, useRef } from 'react';
import './productshowcase.css';
<br></br> 

const products = [
  { id: 1, image: '/images/dress11.jpg', alt: 'Dress 1' },
  { id: 2, image: '/images/dress12.jpg', alt: 'Dress 2' },
  { id: 3, image: '/images/dress11.jpg', alt: 'Dress 3' },
  { id: 4, image: '/images/dress11.jpg', alt: 'Dress 4' },
  { id: 5, image: '/images/dress11.jpg', alt: 'Dress 5' },
  { id: 6, image: '/images/dress11.jpg', alt: 'Dress 6' },
  { id: 7, image: '/images/dress11.jpg', alt: 'Dress 7' },
  { id: 8, image: '/images/dress11.jpg', alt: 'Dress 8' },
];

const ProductShowcase = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, { threshold: 0.3 });

    cardsRef.current.forEach(card => observer.observe(card));
  }, []);

  return (
    <section className="product-showcase">
      <div className="product-container">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="product-card"
            ref={el => cardsRef.current[index] = el}
          >
            <img src={product.image} alt={product.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
