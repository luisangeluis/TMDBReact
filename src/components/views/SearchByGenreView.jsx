//Depedencies
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
//Components
import SearchedGroup from '../media/SearchedGroup';
//Slices
import { getMediaByGenre } from '../../store/slices/mediaByGenre.slice';
import { useEffect } from 'react';

const SearchByGenreView = () => {
  const dispatch = useDispatch();
  const { mediaType, genreId } = useParams();
  const mediaByGenre = useSelector((state) => state.mediaByGenre);

  useEffect(() => {
    dispatch(getMediaByGenre(mediaType, genreId));
  }, [mediaType, genreId]);
  console.log(mediaByGenre);
  return (
    <section className="search-view">
      <div className="container">
        {mediaByGenre && <SearchedGroup media={mediaByGenre} />}
      </div>
    </section>
  );
};

export default SearchByGenreView;
