//Depedencies
import { useNavigate } from 'react-router-dom';
//Hooks
import useGetMediaByQuerySection from '../../hooks/useGetMediaByQuerySection';
//Slices
//Components
import SwiperCarousel from './SwiperCarousel';

const MediaByQuerySection = ({ mediaType, query, subtitle }) => {
  const [media] = useGetMediaByQuerySection(mediaType, query);
  let navigate = useNavigate();

  const goToGenre = () => {
    localStorage.setItem('mediaType', mediaType);
    localStorage.setItem('mediaByQuery', JSON.stringify(query));
    navigate(`/search-query/title/${subtitle}`);
  };

  return (
    <>
      <section className="media-section">
        <div className="container">
          <div className="d-flex justify-content-between my-2 my-md-3">
            <h3 className="text-white">{subtitle}</h3>
            <button className="btn btn-secondary" onClick={goToGenre}>
              {`Go to ${subtitle}`}
            </button>
          </div>
          {media && <SwiperCarousel mediaItems={media} />}
        </div>
      </section>
    </>
  );
};

export default MediaByQuerySection;
