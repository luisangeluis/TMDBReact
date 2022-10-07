//Dependencies
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//Custom hooks
import useGetMediaByGenre from '../../hooks/useGetMediaByGenre';
//Components
import SwiperCarousel from './SwiperCarousel';
//Slices
import { getMediaByGenre } from '../../store/slices/mediaByGenre.slice';

const MediaByGenreSection = ({ mediaType, genreId, genreName }) => {
  const [media] = useGetMediaByGenre(mediaType, genreId);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const goToGenre = () => {
    dispatch(getMediaByGenre(mediaType, genreId));
    navigate('/search-genre');
  };
  // console.log(media);
  return (
    <section className="movies-by-genre">
      <div className="container">
        <div className="d-flex justify-content-between my-2 my-md-3">
          <h3>{genreName}</h3>
          <button className="btn btn-secondary" onClick={goToGenre}>
            Ir a hola {genreName}
          </button>
        </div>
        {media && <SwiperCarousel mediaItems={media} />}
      </div>
    </section>
  );
};

export default MediaByGenreSection;
