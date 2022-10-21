//Hooks
import useGetMediaByQuerySection from '../../hooks/useGetMediaByQuerySection';
//Components
import React from 'react';
import SwiperCarousel from './SwiperCarousel';

const MediaByQuerySection = ({ mediaType, query }) => {
  //TODO make a custom hook by complete the function of this compoonent, to add type and querys
  const [media] = useGetMediaByQuerySection(mediaType, query);
  return (
    <section className="media-section">
      <div className="container">
        {media && <SwiperCarousel mediaItems={media} />}
      </div>
    </section>
  );
};

export default MediaByQuerySection;
