import React from "react";
import CartItem from "../components/CartItem";
import "./Cart.css";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-item-list">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
