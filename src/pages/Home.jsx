import React from 'react'
import './Home.css'
import ImageSlider from '../components/hero/ImageSlider'
import Hero from '../components/hero/Hero'

const Home = () => {
  return (
    <div className='home-wrapper'>
      <div className='hero-slider'>
        <Hero />
      </div>
      {/* <div className='home2'>
        <h1>Home</h1>
      </div> */}
    </div>
  )
}

export default Home