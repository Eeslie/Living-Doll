import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar";
import Footer from '../Footer';
import { DashCircle } from 'react-bootstrap-icons';
import TermsAndPrivacy from './TermsAndPrivacy';

export default function FrontPageTerms() {
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
    return(
        <>
            <Navbar categories={categories} />
            <TermsAndPrivacy />
            <Footer />
        </>
    );
}