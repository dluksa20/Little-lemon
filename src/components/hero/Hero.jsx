import React from 'react';
import './Hero.css';
import slide1 from '../../assets/images/slider-images/slide1.jpg';
import logo from '../../assets/images/logos/logo.svg';





const Hero = () => {

  return (
    <main>
        
        <div className='hero-wrapper' style={heroStyle}>
            <div className='hero-content'>
                <img src={logo} alt='logo' className='hero-logo' />
                <h1 className='hero-title'>Welcome to<br />The Coffee House</h1>
                <p className='hero-subtitle'>Enjoy the best coffee in town</p>
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
    height: '95vh',
    position: 'relative', 
    borderRadius: '1.5rem',
    margin: '1.5rem',
  };

export default Hero;
