import React from 'react'
import { MdPadding } from 'react-icons/md'
import './Hero.css'
import ImageSlider from './ImageSlider.jsx'
import { SliderData } from './SliderData'

const Hero = () => {
  return (
    <div className='hero-wrapper'>
      <ImageSlider className='hero-slider' autoPlay={true} slides={SliderData}>
      </ImageSlider>
    </div>
  )
}

export default Hero