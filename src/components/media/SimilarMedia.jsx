import React from 'react';
import useGetSimiliarMedia from '../../hooks/useGetSimilarMedia';
import CardMedia from './CardMedia';

const SimilarMedia = ({ mediaType, mediaId }) => {
  const [similarMedia] = useGetSimiliarMedia(mediaType, mediaId);
  return (
    <article className="row similar-media my-3 my-md-4">
      <h3 className="subtitle-1">Similar media</h3>
      {similarMedia &&
        similarMedia.map((item) => {
          return (
            <div className="col-md-6 col-lg-3" key={item.id}>
              <CardMedia item={item} key={item.backdrop_path} />
            </div>
          );
        })}
    </article>
  );
};

export default SimilarMedia;
