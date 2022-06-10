import React from "react";
import "./cart.css";

const Cart = () => {
  return (
    <div className="cart shadow-xl rounded-md">
      <div className="cart-heading py-2 px-4 border-b h-1/4">
        <h2 className="font-semibold">Cart</h2>
      </div>
      <div className="cart-body flex justify-center items-center h-3/4">
        <p>Your cart is empty</p>
      </div>
    </div>
  );
};

export default Cart;
