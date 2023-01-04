//Dependencies
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
//Slices
import {
  addMedia,
  getSearchedMedia,
} from '../../store/slices/searchedMedia.slice';
import { isLoading } from '../../store/slices/loader.slice';
//Component
import SearchedGroup from '../media/SearchedGroup';
import Loader from '../shared/Loader';

const SearchView = () => {
  const { search } = useParams();
  const { ref, inView, entry } = useInView({ threshold: 0 });
  const query = {
    query: search,
    language: 'en-US',
    include_adult: false,
  };
  const dispatch = useDispatch();
  const mediaByName = useSelector((state) => state.searchedMedia);
  const isLoad = useSelector((state) => state.loader);

  useEffect(() => {
    // dispatch(isLoading(true));
    localStorage.setItem('currentPageSearch', 1);
    dispatch(getSearchedMedia(query));
  }, []);

  useEffect(() => {
    if (mediaByName) dispatch(isLoading(false));
    else dispatch(isLoading(true));
  }, [mediaByName]);

  if (inView && mediaByName) {
    const nextPage = mediaByName.length / 20 + 1;
    if (nextPage <= Number(localStorage.getItem('totalPagesSearch'))) {
      query.page = nextPage;
      // console.log(nextPage);
      dispatch(addMedia(query));
    }
  }

  return (
    <section className="search-view">
      {isLoad && <Loader />}
      <div className="container">
        <h2 className="subtitle-1">
          <label htmlFor="">Results for: </label> {search}
        </h2>
        <SearchedGroup media={mediaByName} />
      </div>
      <div ref={ref}></div>
    </section>
  );
};

export default SearchView;
