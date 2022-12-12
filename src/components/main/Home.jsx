//Dependencies
import moment from 'moment';
//Custom hooks
import useGetBestMoviesOfYeAR from '../../hooks/useGetBestMoviesOfYear';
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

  return (
    <section className="home flex-grow-1">
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <Hero movies={getBestMoviesOfYear} />
          </div>
        </div>
        <MediaByQuerySection
          mediaType={'movie'}
          query={popularMedia}
          subtitle={'Popular movies'}
        />
        <MediaByQuerySection
          mediaType={'movie'}
          query={premieresMedia}
          subtitle={'Premieres movies'}
        />
        <MediaByQuerySection
          mediaType={'movie'}
          query={popularKidsMedia}
          subtitle={'Popular movies kids'}
        />
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
