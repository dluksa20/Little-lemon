import React from 'react';
import './CardSlider.css';
import food1 from '../../assets/foods/bruschetta.png';
import food2 from '../../assets/foods/greeksalad.png';
import food3 from '../../assets/foods/lemondesert.png';
import blank from '../../assets/foods/blank.png';

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
                1920: { slidesPerView: 4 }, // Large screens (3 slides)
            }}
            className="mySwiper"
        >
            <SwiperSlide>
                <Card
                    title="What is Lorem Ipsum?"
                    images={food1}
                    old_price="9,999"
                    newPrice="9999"
                    dollar="$"
                    alt="bruschetta"
                    exp_date="10-08-2022"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    title="What is Lorem Ipsum?"
                    images={food2}
                    old_price="599"
                    newPrice="500"
                    dollar="$"
                    alt="greeksalad"
                    exp_date="10-08-2022"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    title="What is Lorem Ipsum?"
                    images={food3}
                    old_price="7999"
                    newPrice="7000"
                    dollar="$"
                    alt="lemondesert"
                    exp_date="10-08-2022"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    title="What is Lorem Ipsum?"
                    images={blank}
                    old_price="999"
                    newPrice="500"
                    dollar="$"
                    alt="blank"
                    exp_date="10-08-2022"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    title="What is Lorem Ipsum?"
                    images={blank}
                    old_price="999"
                    newPrice="500"
                    dollar="$"
                    alt="blank"
                    exp_date="10-08-2022"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    title="What is Lorem Ipsum?"
                    images={blank}
                    old_price="999"
                    newPrice="500"
                    dollar="$"
                    alt="blank"
                    exp_date="10-08-2022"
                />
            </SwiperSlide>
        </Swiper>
    );
};

export default CardSlider;
