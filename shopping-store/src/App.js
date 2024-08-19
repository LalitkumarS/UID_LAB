// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Home from'./components/Home';
import About from './components/About';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Rice',
      price: 29.99,
      image: '/rice.jpg',
    },
    {
      id: 2,
      name: 'Wheat',
      price: 49.99,
      image: '/wheat.jpg',
    },
    {
      id: 3,
      name: 'Vegetables',
      price: 19.99,
      image: '/veg.jpg',
    },
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<ProductList products={products} onAddToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
