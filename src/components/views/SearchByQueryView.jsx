//Depedencies
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//Slices
import { getMediaByQuery } from '../../store/slices/mediaByQuery.slice';
//Components
import SearchedGroup from '../media/SearchedGroup';

const SearchByQueryView = () => {
  const dispatch = useDispatch();
  const mediaByQuery = useSelector((state) => state.mediaByQuery);

  console.log(mediaByQuery);

  useEffect(() => {
    if (!mediaByQuery) {
      const mediaType = localStorage.getItem('mediaType');
      const myQuery = JSON.parse(localStorage.getItem('mediaByQuery'));
      // dispatch(getMediaByQuery('movie', myQuery));
      dispatch(getMediaByQuery(mediaType, myQuery));
    }
  }, []);

  return (
    <section className="search-view">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {mediaByQuery && <SearchedGroup media={mediaByQuery} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchByQueryView;
