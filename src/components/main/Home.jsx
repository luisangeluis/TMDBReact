//Components
import SwiperCarousel from '../media/SwiperCarousel';
import Hero from './Hero';
//Custom hooks
import useGetPremiereMovies from '../../hooks/useGetPremiereMovies';
import useGetPopularMovies from '../../hooks/useGetPopularMovies';

const Home = () => {
  const [movies] = useGetPopularMovies();
  const [premieresMovies] = useGetPremiereMovies();
  console.log(premieresMovies);
  return (
    <section className="home flex-grow-1">
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <Hero movies={movies} />
          </div>
        </div>
        <SwiperCarousel mediaItems={movies} />
        <SwiperCarousel mediaItems={premieresMovies} />
      </div>
    </section>
  );
};

export default Home;
