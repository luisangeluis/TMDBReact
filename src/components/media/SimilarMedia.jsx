import React from 'react';
import useGetSimiliarMedia from '../../hooks/useGetSimilarMedia';
import CardMedia from './CardMedia';

const SimilarMedia = ({ mediaType, mediaId }) => {
  const [similarMedia] = useGetSimiliarMedia(mediaType, mediaId);
  console.log({ similarMedia });
  return (
    <section className="row similar-media">
      <h3>Similar media</h3>
      {similarMedia &&
        similarMedia.map((item) => {
          return (
            <div className="col-md-6 col-lg-3" key={item.id}>
              <CardMedia item={item} key={item.backdrop_path} />
            </div>
          );
        })}
    </section>
  );
};

export default SimilarMedia;
