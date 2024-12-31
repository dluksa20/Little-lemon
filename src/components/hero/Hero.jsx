import React from 'react';
import './Hero.css';
import slide1 from '../../assets/images/slides/slide1.jpg';
import slide2 from '../../assets/images/slides/slide2.jpg';
import slide3 from '../../assets/images/slides/slide3.jpg';
import slide4 from '../../assets/images/slides/slide4.jpg';
import logo from '../../assets/images/logos/Logo.svg'; // Import your logo SVG
import { FaArrowRight } from 'react-icons/fa';
import ImageSlider from './ImageSlider';

const slides = [slide1, slide2, slide3, slide4];

const Hero = () => {
  return (
    <main>
      <ImageSlider className='hero-slider' slides={slides}>
        <div className='hero-content'>
          <div className='hero-top'>
            <div className='logo-container'>
              {/* Replace text with logo SVG */}
              <img src={logo} alt="Little Lemon Logo" className="logo-svg" />
            </div>
            <div className='top-btn-group'>
              <button className='top-btn'>Order Online</button>
              <button className='top-btn'>Book a Table</button>
            </div>
          </div>
          <div className='hero-middle'>
            <h1 className='hero-title'>A Taste of Mediterranean Excellence</h1>
            <p className='hero-description'>
              Experience the vibrant flavors of freshly prepared dishes, inspired by the rich culinary traditions of the Mediterranean.
            </p>
            <button className='explore-btn'>Explore the Menu</button>
          </div>
        </div>
      </ImageSlider>
    </main>
  );
};

export default Hero;
