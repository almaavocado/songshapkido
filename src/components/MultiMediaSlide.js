/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

function MultiImageSlide({ images }) {
  return (
    <div className="flex">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className="w-1/2"
        />
      ))}
    </div>
  );
}

export default MultiImageSlide;
