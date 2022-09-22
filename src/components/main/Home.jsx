//Dependencies
import moment from 'moment';
//Components
import SwiperCarousel from '../media/SwiperCarousel';
import Hero from './Hero';
//Custom hooks
import useGetPremiereMovies from '../../hooks/useGetPremiereMovies';
import useGetPopularMovies from '../../hooks/useGetPopularMovies';
import useGetPopularMoviesKids from '../../hooks/useGetPopularMoviesKids';
import useGetBestMoviesOfYeAR from '../../hooks/useGetBestMoviesOfYear';

const Home = () => {
  const [movies] = useGetPopularMovies();
  const [premieresMovies] = useGetPremiereMovies();
  const [popularMoviesKids] = useGetPopularMoviesKids();
  const [getBestMoviesOfYear] = useGetBestMoviesOfYeAR(moment().format('YYYY'));
  // console.log(premieresMovies);
  console.log(moment().format('YYYY'));
  return (
    <section className="home flex-grow-1">
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <Hero movies={movies} />
          </div>
        </div>
        <h3 className="mt-4 mt-md-5">Popular Movies</h3>
        <SwiperCarousel mediaItems={movies} />
        <h3 className="mt-4 mt-md-5">Premieres Movies</h3>
        <SwiperCarousel mediaItems={premieresMovies} />
        <h3 className="mt-4 mt-md-5">Popular Kids Movies</h3>
        <SwiperCarousel mediaItems={popularMoviesKids} />
        <h3 className="mt-4 mt-md-5">Best Movies Year</h3>
        <SwiperCarousel mediaItems={getBestMoviesOfYear} />
      </div>
    </section>
  );
};

export default Home;
