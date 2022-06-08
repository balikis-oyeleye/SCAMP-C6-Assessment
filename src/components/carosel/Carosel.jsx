import React from "react";
import { productImage } from "../../assets/data";

const Carousel = () => {
  const images = productImage.map((item) => {
    return <img src={item.image} alt="im" key={item.id} />;
  });

  return (
    <div className="carousel">
      <div className="carousel-slider">{images}</div>
    </div>
  );
};

export default Carousel;
