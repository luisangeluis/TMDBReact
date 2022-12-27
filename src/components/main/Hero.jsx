//Dependencies
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useGetPopularMedia from '../../hooks/useGetPopularMedia';
//Components
import MainInputSearch from '../media/MainInputSearch';

const Hero = ({ mediaType, querys }) => {
  let type = mediaType || 'movie';
  let query = querys || { language: 'en-US', page: 1 };
  const [media] = useGetPopularMedia(type, query);

  return (
    <section
      className="hero my-2 my-md-2 rounded"
      style={{
        background: `url(https://image.tmdb.org/t/p/w500${
          media && media[0].poster_path
        }) center/cover`,
      }}
    >
      <div className="container d-flex justify-content-end align-items-start p-3 p-md-4">
        <div className="row">
          <div className="col-12 ">
            <MainInputSearch />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
