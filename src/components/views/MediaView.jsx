//Depedencies
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
//Slices
import { getGenresMedia } from '../../store/slices/genresMedia.slice';
//Components
import Hero from '../main/Hero';
import MediaByQuerySection from '../media/MediaByQuerySection';
import Loader from '../shared/Loader';

const MediaView = () => {
  const { type } = useParams();
  const dispatch = useDispatch();
  const genresIds = useSelector((state) => state.genresMedia);
  const isLoading = useSelector((state) => state.loader);

  useEffect(() => {
    dispatch(getGenresMedia(type));
  }, [type]);

  const makeQuerySection = (genre) => {
    const myQuery = { with_genres: genre.id };

    return (
      <MediaByQuerySection
        mediaType={type}
        query={myQuery}
        subtitle={genre.name}
        key={genre.name}
      />
    );
  };

  return (
    <section className="media-view">
      {isLoading && <Loader />}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Hero mediaType={type} querys={{ language: 'en-US', page: 1 }} />
            {genresIds && genresIds.map((genre) => makeQuerySection(genre))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaView;
