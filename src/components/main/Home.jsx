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
  const [getBestMoviesOfYear] = useGetBestMoviesOfYeAR(moment().format('YYYY'));
  const arrayOfSections = [
    {
      mediaType: 'movie',
      name: 'Popular movies',
      query: {
        sort_by: 'popularity.desc',
      },
    },
    {
      mediaType: 'movie',
      name: 'Premieres movies',
      query: {
        'primary_release_date.gte': getDateLastMonth(),
        'primary_release_date.lte': getCurrentDate(),
      },
    },
    {
      mediaType: 'movie',
      name: 'Popular movies kids',
      query: {
        certification_country: 'US',
        'certification.lte': 'G',
        sort_by: 'popularity.desc',
        include_adult: false,
      },
    },
    {
      mediaType: 'movie',
      name: 'Best movies of year',
      query: {
        primary_release_year: getCurrentYear(),
        sort_by: 'vote_average.desc',
      },
    },
  ];

  return (
    <section className="home flex-grow-1">
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <Hero movies={getBestMoviesOfYear} />
          </div>
        </div>
        {arrayOfSections.map((section, i) => {
          return (
            <MediaByQuerySection
              mediaType={section.mediaType}
              query={section.query}
              subtitle={section.name}
              key={i}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Home;
