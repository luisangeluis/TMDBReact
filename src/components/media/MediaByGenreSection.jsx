//Custom hooks
import useGetMediaByGenre from '../../hooks/useGetMediaByGenre';
//Components
import SwiperCarousel from './SwiperCarousel';

const MediaByGenreSection = ({ mediaType, genreId, genreName }) => {
  const [media] = useGetMediaByGenre(mediaType, genreId);

  console.log(media);
  return (
    <section className="movies-by-genre">
      <div className="container">
        <h3>{genreName}</h3>
        {media && <SwiperCarousel mediaItems={media} />}
      </div>
    </section>
  );
};

export default MediaByGenreSection;
