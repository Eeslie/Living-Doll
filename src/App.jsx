import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import FrontPageTerms from './components/terms&privacy/FrontPageTerms';
import ProductCatalog from './components/productcatalog/ProductCatalog';
import Brands from './components/brands/Brands';
import AboutUs from './components/aboutus/AboutUs';
import ProductItem from './components/productcatalog/ProductItem';
import BlogPageLatest from './components/brands/BlogPageLatest';
import ContactPage from './components/contact/ContactPage';
import Privacy from './components/privacy/Privacy';
import BlogPost from './components/brands/BlogPost';
import CheckOutMain from './components/checkout/CheckOutMain';
import ShoppingCartMain from './components/shoppingcart/ShoppingCartMain';



function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/homepage" />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/productcatalog" element={<ProductCatalog />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/productItem/:id" element={<ProductItem />} />
        <Route path="/blogPost/:id" element={<BlogPost />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/termsAndPrivacy" element={<FrontPageTerms/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/" element={<BlogPageLatest />} />
        <Route path="/blog/:id" element={<BlogPageLatest />} />
        <Route path="/checkout" element={<CheckOutMain />} />
        <Route path="/shoppingcart" element={<ShoppingCartMain />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
