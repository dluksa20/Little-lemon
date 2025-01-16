import React from 'react'
import slide1 from '../../assets/images/slides/slide1.jpg'
import slide2 from '../../assets/images/slides/slide2.jpg'
import slide3 from '../../assets/images/slides/slide3.jpg'
import slide4 from '../../assets/images/slides/slide4.jpg'
import { MdPadding } from 'react-icons/md'
import './Hero.css'

const slides = [
  {
    image: slide1,
    title: 'Slide 1',
    description: 'Slide 1 Description'
  },
  {
    image: slide2,
    title: 'Slide 2',
    description: 'Slide 2 Description'
  },
  {
    image: slide3,
    title: 'Slide 3',
    description: 'Slide 3 Description'
  },
  {
    image: slide4,
    title: 'Slide 4',
    description: 'Slide 4 Description'
  }
]

const Hero = () => {
  return (
    <div className='hero-wrapper'>
    </div>
  )
}

export default Hero