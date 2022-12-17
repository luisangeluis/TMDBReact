//Depedencies
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
//Slices
import { getMediaByQuery } from '../../store/slices/mediaByQuery.slice';
//Components
import SearchedGroup from '../media/SearchedGroup';

const SearchByQueryView = () => {
  const dispatch = useDispatch();
  const mediaByQuery = useSelector((state) => state.mediaByQuery);
  const { title } = useParams();

  useEffect(() => {
    if (!mediaByQuery) {
      const mediaType = localStorage.getItem('mediaType');
      const myQuery = JSON.parse(localStorage.getItem('mediaByQuery'));
      dispatch(getMediaByQuery(mediaType, myQuery));
    }
  }, []);

  // console.log(mediaByQuery);

  return (
    <section className="search-view">
      <div className="container">
        <h3>{title}</h3>
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
