import React from "react";

const About = () => {
  return (
    <div className="container mx-auto">
      <p> SNEAKER COMPANY</p>
      <h2>Fall Limited Edition Sneakers</h2>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they"ll withstand everything the
        weather can offer.
      </p>
      <div className="flex flex-row justify-between items-center">
        <h2>
          $125.00 <span>50%</span>
        </h2>
        <p>$250.00</p>
      </div>
      <div>
        <button>-</button>
        <h5>{0}</h5>
        <button>+</button>
      </div>
      <button> Add to cart</button>
    </div>
  );
};

export default About;
