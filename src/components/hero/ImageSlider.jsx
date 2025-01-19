import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./ImageSlider.css";

const ImageSlider = ({ slides, autoPlay = true, interval = 5 }) => {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const length = slides.length;

  useEffect(() => {
    let slideInterval;

    if (autoPlay) {
      slideInterval = setInterval(() => {
        nextSlide();
      }, interval);
    }

    return () => {
      if (slideInterval) {
        clearInterval(slideInterval);
      }
    };
  }, [current, autoPlay, interval]);

  const nextSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrent((current + 1) % length);
    setTimeout(() => setTransitioning(false), 800); // Matches CSS transition duration
  };

  const prevSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrent((current - 1 + length) % length);
    setTimeout(() => setTransitioning(false), 800);
  };

  const getClass = (index) => {
    if (index === current) return "slide current";
    if (index === (current + 1) % length) return "slide next";
    if (index === (current - 1 + length) % length) return "slide previous";
    return "slide outgoing";
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider-wrapper">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

      {slides.map((slide, index) => (
        <div
          key={index}
          className={getClass(index)}
          role="img"
          aria-hidden={index !== current}
        >
          <img
            src={slide.image}
            alt={slide.alt || `Slide ${index + 1}`}
            className="slider-image"
          />
        </div>
      ))}
    </section>
  );
};

ImageSlider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
  autoPlay: PropTypes.bool,
  interval: PropTypes.number,
};

export default ImageSlider;
