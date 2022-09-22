//Dependencies
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
//Components
import CardMedia from './CardMedia';

const SwiperCarousel = ({ mediaItems }) => {
  // console.log(mediaItems);
  return (
    <section className="row my-2 my-md-3">
      <div className="col-12">
        <Swiper spaceBetween={15} slidesPerView={3} className="">
          {mediaItems &&
            mediaItems.map((item) => (
              <SwiperSlide key={item.id}>
                <CardMedia item={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SwiperCarousel;
