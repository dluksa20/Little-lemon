import React from 'react';
import './Hero.css';
import ImageSlider from './ImageSlider.jsx';
import { SliderData } from './SliderData';
import { RiMenu3Fill, RiCloseFill, RiTwitterXFill, RiFacebookBoxFill, RiInstagramLine  } from "react-icons/ri";


const Hero = () => {
  return (
    <div className="hero">
      <div className='hero-wrapper'>
        <div className="hero-content">
          <div className="hero-title">
            <h1>Little Lemon</h1>
          </div>
          <div className="hero-cta">
            <p className="hero-description">
              Discover the finest cuisines, fresh ingredients, and a cozy ambiance. At Little Lemon, every dish is made with love and perfection.
            </p>
            <button>Reserve a Table</button>
            <button>Order Online</button>
          </div>
          <div className='hero-socials'>
              <RiFacebookBoxFill />
              <RiInstagramLine />
              <RiTwitterXFill />
          </div>
        </div>
        <div className="hero-slider">
          <ImageSlider className="hero-slider" autoPlay={true} slides={SliderData} />
        </div>
      </div>
      </div>
  );
};

export default Hero;
