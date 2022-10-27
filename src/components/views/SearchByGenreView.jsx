//Depedencies
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
//Components
import SearchedGroup from '../media/SearchedGroup';
import InputFilterYear from '../media/filters/InputFilterYear';

//Slices
import { getMediaByGenre } from '../../store/slices/mediaByGenre.slice';
import { useEffect, useState } from 'react';

const SearchByGenreView = () => {
  const dispatch = useDispatch();
  const { mediaType, genreId } = useParams();
  const mediaByGenre = useSelector((state) => state.mediaByGenre);
  let objeto = {};
  useEffect(() => {
    dispatch(getMediaByGenre(mediaType, genreId));
  }, [mediaType, genreId]);

  const addQuery = (r) => {
    objeto = { ...objeto, ...r };
    dispatch(getMediaByGenre(mediaType, genreId, objeto));
    console.log(objeto);
  };

  return (
    <section className="search-view">
      <div className="container">
        <div className="row">
          {/* <div className="col-md-2">
            <InputFilterYear addQuery={addQuery} />
          </div> */}
          <div className="col-md-12">
            {mediaByGenre && <SearchedGroup media={mediaByGenre} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchByGenreView;
