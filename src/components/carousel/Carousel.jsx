import { productImage } from "../../assets/data";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useState } from "react";
import "./carousel.css";

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const onPrevious = () => {
    if (current === 0) {
      setCurrent(3);
    }
    setCurrent((prev) => {
      return (prev -= 1);
    });
  };
  const onNext = () => {
    if (current === 3) {
      setCurrent(0);
    }
    setCurrent((prev) => {
      return (prev += 1);
    });
  };

  return (
    <div className="carousel">
      <BiChevronLeft
        className="carousel-prev cursor-pointer"
        onClick={onPrevious}
      />
      <BiChevronRight
        className="carousel-next cursor-pointer"
        onClick={onNext}
      />
      <div className="carousel-slider">
        <img
          src={productImage[current].image}
          alt=""
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Carousel;
