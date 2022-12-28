//Dependencies
import { useSelector } from 'react-redux';
import useGetPopularMedia from '../../hooks/useGetPopularMedia';
import { isLoading } from '../../store/slices/loader.slice';
//Components
import MainInputSearch from '../media/MainInputSearch';
import Loader from '../shared/Loader';

const Hero = ({ mediaType, querys }) => {
  const [media] = useGetPopularMedia(mediaType, querys);
  const isLoading = useSelector((state) => state.loader);

  return (
    <section
      className="hero my-2 my-md-2 rounded"
      style={{
        background: `url(https://image.tmdb.org/t/p/w500${
          media && media[0].poster_path
        }) center/cover`,
      }}
    >
      {isLoading && <Loader />}
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
