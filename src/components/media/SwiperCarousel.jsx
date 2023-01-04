//Dependencies
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Controller, Pagination } from 'swiper';
import 'swiper/css';
//Components
import CardMedia from './CardMedia';

const SwiperCarousel = ({ mediaItems, isEnd }) => {
  return (
    <section className="row my-2 my-md-3">
      <div className="col-12">
        <Swiper
          spaceBetween={0}
          slidesPerView={'auto'}
          modules={[Navigation]}
          navigation={true}
          //TODO Animar el boton al llegar al final del carousel
          onReachEnd={() => {
            isEnd(true);
            setTimeout(() => {
              isEnd(false);
            }, 3500);
          }}
        >
          {mediaItems &&
            mediaItems.map((element) => (
              <SwiperSlide key={element.id}>
                <CardMedia item={element} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SwiperCarousel;
