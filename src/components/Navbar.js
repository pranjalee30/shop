// src/components/Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="brand-title">
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="logo"
            className="brand-logo"
          />
        </Link>
        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-link">
              🏠
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">
              🛒({cartCount})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
