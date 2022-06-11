import React, { createContext, useContext, useReducer } from "react";
import cartReducer from "./CartReducer";

const Cart = createContext();

const CartContext = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cart: [],
  });

  return (
    <Cart.Provider value={{ cartDispatch, cartState }}>
      {children}
    </Cart.Provider>
  );
};

export const useCartContext = () => {
  return useContext(Cart);
};

export default CartContext;
