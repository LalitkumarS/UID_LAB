// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Shopping Store</h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/">Cart</Link>
        <Link to="/cart">Bill</Link>
      </nav>
    </header>
  );
};

export default Header;
