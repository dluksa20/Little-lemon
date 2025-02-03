import React from 'react'
import './Home.css'
import Hero from '../components/hero/Hero'
import CardSlider from '../components/cardSlider/CardSlider'

const Home = () => {
  return (
    <div className='home-wrapper'>
        <Hero />
        <CardSlider />
    </div>
  )
}

export default Home