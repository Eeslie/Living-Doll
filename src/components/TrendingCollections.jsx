import React, { useRef } from 'react';
import './trendingcollection.css';

const collections = [
  {
    title: "SOFT LEATHER JACKETS",
    description: "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    image: "/images/dress.jpg",
  },
  {
    title: "MODERN FALL TRENCHES",
    description: "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    image: "/images/dress2.jpg",
  },
  {
    title: "CASUAL CHIC COATS",
    description: "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    image: "/images/dress2.jpg",
  },
  {
    title: "STYLISH COMFY WEAR",
    description: "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    image: "/images/dress2.jpg",
  },
  {
    title: "WARM OVERSIZED JACKETS",
    description: "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    image: "/images/dress2.jpg",
  },
  {
    title: "EVERYDAY LAYER PIECES",
    description: "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    image: "/images/dress2.jpg",
  },
];

const TrendingCollections = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    const scrollAmount = 340; // width of one card + gap

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="trending-section">
      <div className="header">
        <h2>New Collections</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas ut
          dolorum consequuntur, adipisci repellat! Eveniet commodi voluptatem
          voluptate, eum minima, in suscipit explicabo voluptatibus harum,
          quibusdam ex repellat eaque!
        </p>
      </div>

      <div className="carousel-container">
        <button className="nav-btn left" onClick={() => scroll('left')}>&larr;</button>

        <div className="carousel-wrapper" ref={carouselRef}>
          <div className="carousel-track">
            {collections.map((item, index) => (
              <div className="collection-card" key={index}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href="#">DISCOVER NOW</a>
              </div>
            ))}
          </div>
        </div>

        <button className="nav-btn right" onClick={() => scroll('right')}>&rarr;</button>
      </div>
    </section>
  );
};

export default TrendingCollections;
