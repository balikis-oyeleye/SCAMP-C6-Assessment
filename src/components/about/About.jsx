import React from "react";
import { BsCart3 } from "react-icons/bs";

const About = () => {
  return (
    <div className="container mx-auto mt-4">
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
      <div className="flex flex-row justify-between items-center bg-gray-200 rounded-lg px-4 py-1 my-4">
        <button className="font-bold text-2xl text-orange">-</button>
        <h5>{0}</h5>
        <button className="font-bold text-2xl text-orange">+</button>
      </div>
      <button className="bg-orange w-full mb-4 rounded-lg py-2 text-white flex justify-center items-center gap-2">
        <BsCart3 className="text-xl" />
        Add to cart
      </button>
    </div>
  );
};

export default About;
