//Dependencies
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

  useEffect(() => {
    //TODO Hacer que el loading aparezca cuando cambio entre movies y tv show
    dispatch(isLoading(true));
  }, []);

  useEffect(() => {
    if (media) dispatch(isLoading(false));
  }, [media]);

  if (media) console.log(media[0]);

  return (
    <section
      className="hero my-2 my-md-2 rounded"
      style={{
        background: `url(https://image.tmdb.org/t/p/w500${
          media && media[0].poster_path
        }) center/cover`,
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
                <button className="btn btn-secondary fw-bold border border-1">
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
