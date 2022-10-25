//Depedencies
import { useNavigate } from 'react-router-dom';
//Hooks
import useGetMediaByQuerySection from '../../hooks/useGetMediaByQuerySection';
//Components
import React from 'react';
import SwiperCarousel from './SwiperCarousel';

const MediaByQuerySection = ({ mediaType, query }) => {
  const [media] = useGetMediaByQuerySection(mediaType, query);
  let navigate = useNavigate();

  const goToGenre = () => {
    navigate(`/search-query`);
  };

  return (
    <>
      <section className="media-section">
        <div className="container">
          <button className="btn btn-secondary" onClick={goToGenre}>
            Ir
          </button>
          {media && <SwiperCarousel mediaItems={media} />}
        </div>
      </section>
    </>
  );
};

export default MediaByQuerySection;
