import React from 'react';
import './Hero.css';
import slide1 from '../../assets/images/slides/slide1.jpg';
import slide2 from '../../assets/images/slides/slide2.jpg';
import slide3 from '../../assets/images/slides/slide3.jpg';
import slide4 from '../../assets/images/slides/slide4.jpg';
import logo from '../../assets/images/logos/Logo.svg';
import { FaArrowRight } from 'react-icons/fa';
import ImageSlider from './ImageSlider';

const slides = [ slide1, slide2, slide3, slide4];

const Hero = () => {
  return (
    <main>
      <div className="hero-logo-wrapper">
        <div className="hero-logo-container">
          <img src={logo} alt="logo" className="hero-logo" />
        </div>
        <div className="hero-buttons">
          <button aria-label="Order Online">Order Online</button>
          <button aria-label="Reserve a Table">Reserve a Table</button>
        </div>
      </div>
      <ImageSlider className='hero-slider'  slides={slides}>
        <div className='slider-content'>
          <h1 className='hero-title'>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className='hero-subtitle'>Authentic Mediterranean Flavors with a Modern Twist</p>
          {/* Explore the Menu Button */}
          <button className='explore-menu-button'>
            Explore the Menu <FaArrowRight />
          </button>
          <button className='hero-button-sm'>
            Book Now
          </button>
          <button className='hero-button-sm'>
            Order Online
          </button>
        </div>

      </ImageSlider>
    </main>
  );
};

export default Hero;
