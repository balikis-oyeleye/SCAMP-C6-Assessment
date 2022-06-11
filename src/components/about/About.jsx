import React from "react";
import { BsCart3 } from "react-icons/bs";
import { useCartContext } from "../../context/CartContext";
import { items } from "../../assets/data";

const About = () => {
  const {
    cartState: { cart },
    cartDispatch,
  } = useCartContext();

  const quantity = cart.map((item, _index) => {
    return <h5 key={_index}>{item.qty}</h5>;
  });

  return (
    <div className="container mx-auto md:w-1/2 mt-10 md:mt-0">
      <p className="text-orange text-xs font-semibold "> SNEAKER COMPANY</p>
      <h2 className="font-bold text-3xl my-2">
        Fall Limited Edition <br /> Sneakers
      </h2>
      <p className="text-gray-500 text-sm">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they"ll withstand everything the
        weather can offer.
      </p>
      <div className="flex flex-row justify-between items-center">
        <h2 className="font-bold text-2xl mt-3 flex items-center">
          $125.00
          <span className="text-sm ml-2 px-2 py-1 bg-pale_orange text-orange rounded-md">
            50%
          </span>
        </h2>
        <p className="line-through text-gray-400">$250.00</p>
      </div>
      <div className="about-cta flex flex-col md:flex-row gap-4 my-4">
        <div className="flex flex-row justify-between items-center bg-gray-200 rounded-lg px-4 py-2 w-full md:w-1/4">
          {/* Decrease product button */}
          <button
            className="font-bold text-2xl text-orange"
            onClick={() => cartDispatch({ type: "DECREASE", payload: cart })}
          >
            -
          </button>

          {/* Product quantity count */}
          {cart.length < 1 ? <h5>0</h5> : quantity}

          {/* Increase product button */}
          <button
            className="font-bold text-2xl text-orange"
            onClick={() => cartDispatch({ type: "INCREASE", payload: cart })}
          >
            +
          </button>
        </div>

        {/* Add to cart and remove from cart button */}
        {cart.length === 0 ? (
          <button
            className="bg-orange w-full md:w-3/4  rounded-lg py-2 text-white flex justify-center items-center gap-2 hover:bg-light_orange"
            onClick={() =>
              cartDispatch({ type: "ADD_TO_CART", payload: items })
            }
          >
            <BsCart3 className="text-xl" />
            Add to cart
          </button>
        ) : (
          <button
            className="bg-orange w-full md:w-3/4  rounded-lg py-2 text-white flex justify-center items-center gap-2 hover:bg-light_orange"
            onClick={() => cartDispatch({ type: "REMOVE_FROM_CART" })}
          >
            <BsCart3 className="text-xl" />
            Remove from cart
          </button>
        )}
      </div>
    </div>
  );
};

export default About;
