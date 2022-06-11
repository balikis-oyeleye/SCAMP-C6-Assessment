import React, { useEffect, useState } from "react";
import "./cart.css";
import { useCartContext } from "../../context/CartContext";
import { BsTrash } from "react-icons/bs";

const Cart = () => {
  const {
    cartState: { cart },
    cartDispatch,
  } = useCartContext();

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
      cart.reduce((prev, current) => {
        const tot = current.qty * current[0].price;
        prev += tot;
        return prev;
      }, 0)
    );
  }, [cart]);

  const products = cart.map((item, _index) => {
    return (
      <div
        className="cart-body__products text-gray-500 flex items-center px-4 py-4 justify-between"
        key={item[0].id}
      >
        <div className="prod-image w-1/5">
          <img
            src={item[0].image}
            alt="item"
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="prod-details text-sm">
          <p>{item[0].name}</p>
          <p className="prod-details__price">
            ${item[0].price}.00 x {item.qty}
            <span className="text-black ml-2 font-extrabold">
              ${totalPrice}.00
            </span>
          </p>
        </div>
        <div className="prod-remove">
          <BsTrash
            onClick={() => cartDispatch({ type: "REMOVE_FROM_CART" })}
            className="cursor-pointer text-xl"
          />
        </div>
      </div>
    );
  });

  return (
    <>
      {cart.length === 0 ? (
        <div className="cart shadow-xl rounded-md">
          <div className="cart-heading py-2 px-4 border-b h-1/4">
            <h2 className="font-semibold">Cart</h2>
          </div>
          <div className="cart-body flex justify-center items-center h-3/4">
            <p>Your cart is empty</p>
          </div>
        </div>
      ) : (
        <div className="cart rounded-xl shadow-xl">
          <div className="cart-heading py-2 px-4 border-b h-1/4">
            <h2 className="font-semibold">Cart</h2>
          </div>
          <div className="cart-body flex flex-col justify-center">
            {products}
            <div className="cart-body__btn px-4">
              <button className="w-full text-center bg-orange py-3 text-white rounded-lg hover:bg-light_orange">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
