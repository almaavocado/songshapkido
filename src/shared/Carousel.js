/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative w-full">
      <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transform transition-transform duration-700 ease-in-out ${
              index === currentIndex ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            <img src={image} alt={`Image ${index + 1}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none"
      >
        {/* Previous Button */}
        <span className="w-10 h-10 rounded-full bg-gray-800/30 hover:bg-gray-800/50 text-white/80 flex items-center justify-center">
          {"<"}
        </span>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer focus:outline-none"
      >
        {/* Next Button */}
        <span className="w-10 h-10 rounded-full bg-gray-800/30 hover:bg-gray-800/50 text-white/80 flex items-center justify-center">
          {">"}
        </span>
      </button>
    </div>
  );
};

export default Carousel;
