import React, { useRef, useState, useEffect } from 'react';
import './CardSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Card from "./Card";
import cardData from './CardData';
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const CardSlider = () => {
    const swiperRef = useRef(null);
    const [slidesToShow, setSlidesToShow] = useState(1);
    const cardWidth = 400; // Set the width of each card (adjust as needed)

    // Function to dynamically set slides per view based on screen width
    const updateSlidesPerView = () => {
        const screenWidth = window.innerWidth;
        const containerWidth = screenWidth; // Assuming the container takes 100% of the screen width
        const maxSlides = Math.floor(containerWidth / cardWidth);
        setSlidesToShow(Math.min(Math.max(1, maxSlides), 5)); // Ensure at least 1 slide and at most 5 slides
    };

    // Run on mount and listen for window resize
    useEffect(() => {
        updateSlidesPerView(); 
        window.addEventListener("resize", updateSlidesPerView);
        return () => window.removeEventListener("resize", updateSlidesPerView);
    }, []);

    return (
        <div className="card-slider-container">
            {/* Section Title */}
            <h2 className="section-title">Our Most Loved</h2>

            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    console.log("Swiper initialized:", swiper); // Debugging
                }}
                spaceBetween={0}
                scrollbar={{hide: false,}}
                slidesPerView={slidesToShow} // Dynamic slides per view
                modules={[Pagination, Navigation, Scrollbar]}
                className="card-slider"
                key={slidesToShow} // Force re-render when slidesToShow changes
            >
                {/* Custom Previous Button */}
                <button className="swiper-button prev" onClick={() => swiperRef.current?.slidePrev()}>
                    <MdOutlineKeyboardDoubleArrowLeft />
                </button>

                {/* Map through cardData and pass all required props */}
                {cardData.map(({ img, title, content, price, ingredients }, index) => (
                    <SwiperSlide key={index}>
                        <Card
                            title={title}
                            images={img}
                            item_price={price}
                            currency="$" // Add currency prop if needed
                            ingredients={ingredients} // Pass ingredients here
                            content={content} // Pass content here
                            alt={title}
                        />
                    </SwiperSlide>
                ))}

                {/* Custom Next Button */}
                <button className="swiper-button next" onClick={() => swiperRef.current?.slideNext()}>
                    <MdOutlineKeyboardDoubleArrowRight />
                </button>
            </Swiper>
        </div>
    );
};

export default CardSlider;