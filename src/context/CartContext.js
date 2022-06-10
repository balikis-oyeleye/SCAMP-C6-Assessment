import React, { createContext, useContext } from "react";

const Cart = createContext();

const CartContext = ({ children }) => {
  return <Cart.Provider>{children}</Cart.Provider>;
};

export const useCartContext = () => {
  return useContext(Cart);
};

export default CartContext;
