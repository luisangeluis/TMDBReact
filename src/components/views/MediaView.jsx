//Depedencies
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import useGetPopularTv from '../../hooks/useGetPopularTv';
//Slices
import { getGenresMedia } from '../../store/slices/genresMedia.slice';
//Components
import Hero from '../main/Hero';
import MediaByGenreSection from '../media/MediaByGenreSection';
import MediaByQuerySection from '../media/MediaByQuerySection';

const MediaView = () => {
  const dispatch = useDispatch();
  const genresIds = useSelector((state) => state.genresMedia);
  const { type } = useParams();
  const [mediaItems] = useGetPopularTv(type);

  if (genresIds) {
    console.log(genresIds);
  }
  useEffect(() => {
    dispatch(getGenresMedia(type));
  }, [type]);

  return (
    <section className="media-view">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Hero movies={mediaItems} />
            {genresIds &&
              genresIds.map((genre) => (
                <MediaByGenreSection
                  mediaType={type}
                  // query={{ with_genres: genre.id }}
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
