//Dependencies
import { useNavigate } from 'react-router-dom';
//Custom hooks
import useGetMediaByGenre from '../../hooks/useGetMediaByGenre';
//Components
import SwiperCarousel from './SwiperCarousel';

const MediaByGenreSection = ({ mediaType, genreId, name }) => {
  const [media] = useGetMediaByGenre(mediaType, genreId);
  let navigate = useNavigate();

  const goToGenre = () => {
    navigate(`/search-genre/${mediaType}/${genreId}`);
  };
  // console.log(media);
  return (
    <section className="media-section">
      <div className="container">
        <div className="d-flex justify-content-between my-2 my-md-3">
          <h3 className="text-white">{name}</h3>
          <button className="btn btn-secondary" onClick={goToGenre}>
            Go to {name}
          </button>
        </div>
        {media && <SwiperCarousel mediaItems={media} />}
      </div>
    </section>
  );
};

export default MediaByGenreSection;
