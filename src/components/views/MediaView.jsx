//Depedencies
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
//Slices
import { getGenresMedia } from '../../store/slices/genresMedia.slice';
import MediaByGenreSection from '../media/MediaByGenreSection';

const MediaView = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const mediaType = location.pathname.replace(/\//gi, '');

  const genresIds = useSelector((state) => state.genresMedia);
  // console.log(genresIds);

  useEffect(() => {
    dispatch(getGenresMedia(mediaType));
  }, [location]);

  return (
    <section className="media-view">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {genresIds &&
              genresIds.map((genre) => (
                <MediaByGenreSection
                  mediaType={mediaType}
                  genreId={genre.id}
                  genreName={genre.name}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaView;
