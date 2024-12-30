import React, { useState, useMemo, Children } from 'react';
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
                {slides.map(slide => (
                    <img
                        key={slide}
                        src={slide}
                        alt={`slide-${slide}`}
                        className="slider-img"
                        loading='lazy'
                        style={{ translate: `${-100 * current}%` }}
                    />
                ))}
            </div>
            <div className='slider-overlay'>
                <div className='slider-content-container'>
                    {children}
                </div>
            </div>

            <button
                className="slider-btn"
                onClick={prevSlide}
                style={{ left: 0, borderRadius: '1.5rem 0 0 1.5rem' }}
            >
                <MdChevronLeft />
            </button>
            <button
                className="slider-btn"
                onClick={nextSlide}
                style={{ right: 0, borderRadius: '0 1.5rem 1.5rem 0' }}
            >
                <MdChevronRight />
            </button>

            <div className='slider-dots'>
                {slides.map((_, index) => (
                    <div 
                    className={index === current ? 'active' : ''}
                    onClick={() => setCurrent(index)}></div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
