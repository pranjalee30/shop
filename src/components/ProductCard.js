// src/components/ProductCard.js

import React from "react";
import { toast } from "react-hot-toast";
import "./ProductCard.css";

const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Product added to cart!");
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-description">{product.description}</p>
      <div className="product-footer">
        <span className="product-price">${product.price.toFixed(2)}</span>
        <button onClick={handleAddToCart} className="add-to-cart-button">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
