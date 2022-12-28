//Utils
import {
  getDateLastMonth,
  getCurrentDate,
  getCurrentYear,
} from '../../utils/getFechas';
//Components
import Hero from './Hero';
import MediaByQuerySection from '../media/MediaByQuerySection';

const Home = () => {
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
            <Hero mediaType={'movie'} querys={{ language: 'en-US', page: 1 }} />
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
