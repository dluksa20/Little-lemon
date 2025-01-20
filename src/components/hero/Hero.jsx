import React from 'react';
import './Hero.css';
import ImageSlider from './ImageSlider.jsx';
import { SliderData } from './SliderData';
import { RiMenu3Fill, RiCloseFill, RiTwitterXFill, RiFacebookBoxFill, RiInstagramLine  } from "react-icons/ri";
import Logo from '../../assets/images/logos/logo4.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className='hero-wrapper'>
      <div className="hero-slider">
          <ImageSlider className="hero-slider" autoPlay={true} slides={SliderData} />
        </div>
        <div className="hero-content">

          <div className="hero-title">
            <div className='hero-cta'>
              <div className='logo-img'>
                <img src={Logo} alt="" />
              </div>
              <div className="hero-description">
                <p>
                  Discover the finest cuisines, fresh ingredients, and a cozy ambiance. At Little Lemon, every dish is made with love and perfection.
                </p>
                <div className="hero-btn">
                  <button>Reserve a Table</button>
                  <button>Order Online</button>
                </div>
              </div>
            </div>
            
          </div>

          <div className='hero-socials'>
              <RiFacebookBoxFill />
              <RiInstagramLine />
              <RiTwitterXFill />
          </div>
        </div>
      </div>
      </div>
  );
};

export default Hero;
