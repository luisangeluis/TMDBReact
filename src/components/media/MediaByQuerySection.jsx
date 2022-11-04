//Depedencies
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//Hooks
import useGetMediaByQuerySection from '../../hooks/useGetMediaByQuerySection';
//Slices
import { getMediaByQuery } from '../../store/slices/mediaByQuery.slice';
//Components
import React from 'react';
import SwiperCarousel from './SwiperCarousel';

const MediaByQuerySection = ({ mediaType, query }) => {
  const dispatch = useDispatch();
  const [media] = useGetMediaByQuerySection(mediaType, query);
  let navigate = useNavigate();

  const goToGenre = () => {
    dispatch(getMediaByQuery(mediaType, query));
    localStorage.setItem('mediaByQuery', JSON.stringify(query));
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
