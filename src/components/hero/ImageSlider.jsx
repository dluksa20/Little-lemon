import {React, useState} from 'react'
import './ImageSlider.css'

const ImageSlider = ({slides, children,style, className}) => {

    const [current, setCurrent] = useState(3)

  return (
    <div className={className} style={{...style}}>
        <div className='slider-image' style={{backgroundImage: `url(${slides[current].url})`}}>
            <div className='slider-overlay'>
                <div className='slider-content-container'>
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ImageSlider