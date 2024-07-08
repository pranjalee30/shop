// src/components/CartItem.js

import React from "react";
import "./CartItem.css";

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-info">
        <h2 className="cart-item-title">{item.title}</h2>
        <p className="cart-item-price">Price: ${item.price.toFixed(2)}</p>
        <button
          onClick={() => removeFromCart(item.id)}
          className="cart-item-remove-button"
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CartItem;
