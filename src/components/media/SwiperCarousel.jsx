//Dependencies
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
//Components
import CardMedia from './CardMedia';

const SwiperCarousel = ({ mediaItems }) => {
  // console.log(mediaItems);
  return (
    <Swiper spaceBetween={15} slidesPerView={3} className="mb-3 mb-md-4">
      {mediaItems &&
        mediaItems.map((item) => (
          <SwiperSlide key={item.id}>
            <CardMedia item={item} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SwiperCarousel;
