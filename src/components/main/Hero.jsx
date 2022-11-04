//Dependencies
import { useLocation } from 'react-router-dom';
//Components
import MainInputSearch from '../media/MainInputSearch';

const Hero = ({ movies }) => {
  return (
    <section
      className="hero"
      style={{
        background: `url(https://image.tmdb.org/t/p/w500${
          movies && movies[0].poster_path
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
