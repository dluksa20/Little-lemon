import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(1);

  const length = slides.length;

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + length) % length);
  };

  return (
    <div className="slider-wrapper">
      {slides.map((slide, index) => (
        <div
          key={index}
        >
          {index === current && <img className='img' src={slide.image} alt={`Slide ${index + 1}`} />}
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
