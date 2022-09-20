import React from 'react';
import Swiper from 'swiper';
import useGetPopularMovies from '../../hooks/useGetPopularMovies';
import SwiperCarousel from '../media/SwiperCarousel';
import Hero from './Hero';

const Home = () => {
  const [movies] = useGetPopularMovies();

  return (
    <section className="home flex-grow-1">
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <Hero movies={movies} />
          </div>
        </div>
        <SwiperCarousel mediaItems={movies} />
      </div>
    </section>
  );
};

export default Home;
