import React, { useState, useEffect } from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import Products from './Products'
import Footer from '../Footer';

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const mockCategories = [
      { id: 1, name: "Dresses", slug: "dresses", image: "/images/dress.jpg" },
      { id: 2, name: "Tops", slug: "tops", image: "/images/dress.jpg" },
      { id: 3, name: "Bottoms", slug: "bottoms", image: "/images/dress.jpg" },
      { id: 4, name: "Outerwear", slug: "outerwear", image: "/images/dress.jpg" },
      { id: 5, name: "Accessories", slug: "accessories", image: "/images/dress.jpg" }
    ];

    setCategories(mockCategories);
  }, []);

  return (
    <>
      <Navbar categories={categories} />
      <Products />
      <Footer />
    </>
  );
}

export default App;
