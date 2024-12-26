import React from 'react';
import './Hero.css';
import slide1 from '../../assets/images/slider-images/slide4.jpg';
import logo from '../../assets/images/logos/Logo.svg';
import { FaArrowRight } from 'react-icons/fa';





const Hero = () => {

  return (
    <main>
      <div className='hero-logo-wrapper'>
        <div className='hero-logo-container'>
          <img src={logo} alt='logo' className='hero-logo' />
        </div>
        <div className='hero-button'>
          <button>Order Online</button>
          <button>Reserve a Table</button>
        </div>
      </div>
        <div className='hero-text-wrapper' style={heroStyle}>
          <div className='hero-overlay'></div>
            <div className='hero-text-content'>
                <h1 className='hero-title'>Little Lemon</h1>
                <h2>Chicago</h2>
                <br />
                <p className='hero-subtitle'>Authentic Mediterranean Flavors with a Modern Twist</p>
                {/* Explore the Menu Button */}
                <button className='explore-menu-button'>
                  Explore the Menu <FaArrowRight />
                </button>
            </div>
        </div>
    </main>
  );
}


// Styles
const heroStyle = {
    backgroundImage: `url(${slide1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '85vh',
    width: '100%',
    position: 'relative', 
    borderRadius: '1.5rem',
  };

export default Hero;
