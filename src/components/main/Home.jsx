//Dependencies
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import moment from 'moment';
//Custom hooks
import useGetBestMoviesOfYeAR from '../../hooks/useGetBestMoviesOfYear';
//Slices
import { getUsers } from '../../store/slices/users.slice';
//Components
import Hero from './Hero';
import MediaByQuerySection from '../media/MediaByQuerySection';
//Utils
import {
  getDateLastMonth,
  getCurrentDate,
  getCurrentYear,
} from '../../utils/getFechas';

const Home = () => {
  const popularMedia = {
    sort_by: 'popularity.desc',
  };
  const premieresMedia = {
    'primary_release_date.gte': getDateLastMonth(),
    'primary_release_date.lte': getCurrentDate(),
  };
  const popularKidsMedia = {
    certification_country: 'US',
    'certification.lte': 'G',
    sort_by: 'popularity.desc',
    include_adult: false,
  };
  const bestMediaOfYear = {
    primary_release_year: getCurrentYear(),
    sort_by: 'vote_average.desc',
  };

  const [getBestMoviesOfYear] = useGetBestMoviesOfYeAR(moment().format('YYYY'));

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getUsers());
  }, []);

  return (
    <section className="home flex-grow-1">
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <Hero movies={getBestMoviesOfYear} />
          </div>
        </div>
        {/* <h3 className="d-inline">Popular movies</h3> */}
        <MediaByQuerySection
          mediaType={'movie'}
          query={popularMedia}
          subtitle={'Popular movies'}
        />
        {/* <h3>Premieres movies</h3> */}
        <MediaByQuerySection
          mediaType={'movie'}
          query={premieresMedia}
          subtitle={'Premieres movies'}
        />
        {/* <h3>Popular movies kids</h3> */}
        <MediaByQuerySection
          mediaType={'movie'}
          query={popularKidsMedia}
          subtitle={'Popular movies kids'}
        />
        {/* <h3>Best movies of year</h3> */}
        <MediaByQuerySection
          mediaType={'movie'}
          query={bestMediaOfYear}
          subtitle={'Best movies of year'}
        />
      </div>
    </section>
  );
};

export default Home;
