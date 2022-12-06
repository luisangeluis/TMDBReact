//Depedencies
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
//Slices
import { getGenresMedia } from '../../store/slices/genresMedia.slice';
//Components
import Hero from '../main/Hero';
import MediaByGenreSection from '../media/MediaByGenreSection';

const MediaView = () => {
  const dispatch = useDispatch();
  const genresIds = useSelector((state) => state.genresMedia);
  const { type } = useParams();

  useEffect(() => {
    dispatch(getGenresMedia(type));
  }, [type]);

  return (
    <section className="media-view">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Hero mediaType={type} />
            {genresIds &&
              genresIds.map((genre) => (
                <MediaByGenreSection
                  mediaType={type}
                  genreId={genre.id}
                  name={genre.name}
                  key={genre.id}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaView;
