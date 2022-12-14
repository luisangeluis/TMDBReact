//Dependencies
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useGetPopularMedia from '../../hooks/useGetPopularMedia';
//Slices
import { isLoading } from '../../store/slices/loader.slice';
//Components
import MainInputSearch from '../media/MainInputSearch';
import Loader from '../shared/Loader';

const Hero = ({ mediaType, querys }) => {
  const dispatch = useDispatch();
  const [media] = useGetPopularMedia(mediaType, querys);
  const isLoad = useSelector((state) => state.loader);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(isLoading(true));
  }, []);

  // if (media) console.log(media);

  useEffect(() => {
    if (media) dispatch(isLoading(false));
  }, [media]);

  const goToDetail = () => {
    if (media[0].original_title)
      navigate(`/media-type/movie/id/${media[0].id}`);
    if (media[0].original_name) navigate(`/media-type/tv/id/${media[0].id}`);
  };
  return (
    <section
      className="hero my-2 my-md-2 rounded"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${
          media && media[0].poster_path
        }) `,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        // backgroundAttachment: 'fixed',
        backgroundColor: '#ffffff10',
      }}
    >
      {isLoad && <Loader />}
      <div className="container p-3 p-md-4 d-flex">
        <div className="row flex-grow-1">
          <div className="col-md-6 d-flex  justify-content-center align-items-end order-2 order-md-1">
            <article className="card card-hero text-white fw-bold border-0">
              <div className="card-header">
                {media && (media[0].title ? media[0].title : media[0].name)}
              </div>
              <div className="card-body">
                <div className="card-text">{media && media[0].overview}</div>
              </div>
              <div className="card-footer border-0 d-flex justify-content-center align-items-start justify-content-sm-start">
                <button
                  className="btn btn-secondary fw-bold"
                  onClick={goToDetail}
                >
                  Go
                </button>
              </div>
            </article>
          </div>
          <div className="col-md-6 d-flex justify-content-end align-items-start order-1 order-md-2">
            <MainInputSearch />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
