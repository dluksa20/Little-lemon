import React, { useState } from 'react';
import './ImageSlider.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const ImageSlider = ({ slides, children,style, className}) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((index) => (index === slides.length - 1 ? 0 : index + 1));
    };

    const prevSlide = () => {
        setCurrent((index) => (index === 0 ? slides.length - 1 : index - 1));
    };


    return (
        <div className={className} style={{...style}}>
            <div className="slider-wrapper">
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide}
                        alt={`slide-${index}`}
                        className="slider-img"
                        loading='lazy'
                        style={{ translate: `${-100 * current}%` }}
                    />
                ))}
            </div>
            <div className='slider-overlay'>
                {children}
            </div>

            <button
                className="slider-btn slider-btn-left"
                onClick={prevSlide}
            >
                <MdChevronLeft />
            </button>
            <button
                className="slider-btn slider-btn-right"
                onClick={nextSlide}
            >
                <MdChevronRight />
            </button>

            <div className='slider-dots'>
                {slides.map((_, index) => (
                    <div
                    key={index} 
                    className={index === current ? 'active' : ''}
                    onClick={() => setCurrent(index)}></div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
