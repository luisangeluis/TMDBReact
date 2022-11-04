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
      const myQuery = JSON.parse(localStorage.getItem('mediaByQuery'));
      dispatch(getMediaByQuery('movie', myQuery));
    }
  }, []);

  return (
    <section className="search-view">
      <div className="container">
        <div className="row">
          {/* <div className="col-md-2">
            <InputFilterYear addQuery={addQuery} />
          </div> */}
          {/* filtros */}
          <div className="col-md-10">
            {mediaByQuery && <SearchedGroup media={mediaByQuery} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchByQueryView;
