// src/App.js

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import "./App.css"; // Import the CSS file

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="app-container">
      <Navbar cartCount={cartItems.length} />
      <main className="page-content">
        <Routes>
          <Route path="/shop" element={<Home addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            }
          />
        </Routes>
      </main>
      <footer className="footer">
        <p>© 2024 My E-commerce App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
