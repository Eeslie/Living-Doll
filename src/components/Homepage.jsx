import React from 'react';
import {useEffect, useState} from 'react';
import Navbar from './Navbar';
import FrontPage from './FrontPage';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import TrendingCollections from './TrendingCollections';
import Footer from './Footer';

const Homepage = () => {
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
      <FrontPage />
      <HeroSection />
      <AboutSection />
      <TrendingCollections />
      <Footer />
    </>
  );
};

export default Homepage;
