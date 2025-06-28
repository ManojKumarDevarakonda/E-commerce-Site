import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>ShopEase</h1>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          <span className="cart-icon">🛒</span>
          <span className="cart-count">0</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
