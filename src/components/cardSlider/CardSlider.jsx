import React from 'react';
import './CardSlider.css';

// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Card component
import Card from "./Card";

const CardSlider = () => {
    return (
        <Swiper
            spaceBetween={0} // Space between slides
            pagination={{ clickable: true }}
            navigation={true} // Enable arrows
            modules={[Pagination, Navigation]}
            breakpoints={{
                400: { slidesPerView: 1,  navigation: false }, // Small screens (1 slide)
                768: { slidesPerView: 2 }, // Medium screens (2 slides)
                1440: { slidesPerView: 3 }, // Large screens (3 slides)
            }}
            className="mySwiper"
        >
            <SwiperSlide>
                <Card
                    title="What is Lorem Ipsum?"
                    images="../images/batman.png"
                    old_price="9,999"
                    newPrice="9999"
                    dollar="$"
                    alt="batman"
                    exp_date="10-08-2022"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    title="What is Lorem Ipsum?"
                    images="../images/blackpanter.png"
                    old_price="599"
                    newPrice="500"
                    dollar="$"
                    alt="blackpanter"
                    exp_date="10-08-2022"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    title="What is Lorem Ipsum?"
                    images="../images/arthur.png"
                    old_price="7999"
                    newPrice="7000"
                    dollar="$"
                    alt="arthur"
                    exp_date="10-08-2022"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    title="What is Lorem Ipsum?"
                    images="../images/kashima.png"
                    old_price="999"
                    newPrice="500"
                    dollar="$"
                    alt="kashima"
                    exp_date="10-08-2022"
                />
            </SwiperSlide>
        </Swiper>
    );
};

export default CardSlider;
