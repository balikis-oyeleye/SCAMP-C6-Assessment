import { productImage } from "../../assets/data";
import { thumbnail } from "../../assets/data";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useState } from "react";
import "./carousel.css";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [mainImage, setMainImage] = useState(0);

  const thumbnailImages = thumbnail.map((item, _item) => {
    return (
      <div className="" key={item.id}>
        <img
          src={item.image}
          alt="thumbnail"
          onClick={() => setMainImage(_item)}
          className="w-full h-auto rounded-lg"
        />
      </div>
    );
  });

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
    <>
      <div className="gallery flex flex-col gap-6">
        <div className="">
          <img
            src={productImage[mainImage].image}
            alt="main"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex flex-row gap-6">{thumbnailImages}</div>
      </div>
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
            alt="product"
            className="w-full h-auto"
          />
        </div>
      </div>
    </>
  );
};

export default Carousel;
