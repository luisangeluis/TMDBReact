//Depedencies
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
//Slices
import {
  addMoreMedia,
  getMediaByQuery,
} from '../../store/slices/mediaByQuery.slice';
import { isLoading } from '../../store/slices/loader.slice';
//Components
import SearchedGroup from '../media/SearchedGroup';
import Loader from '../shared/Loader';

const SearchByQueryView = () => {
  const dispatch = useDispatch();
  const mediaByQuery = useSelector((state) => state.mediaByQuery);
  const isLoad = useSelector((state) => state.loader);
  const { title } = useParams();
  const mediaType = localStorage.getItem('mediaType');
  const myQuery = JSON.parse(localStorage.getItem('mediaByQuery'));
  const { ref, inView, entry } = useInView({ threshold: 0 });

  useEffect(() => {
    dispatch(getMediaByQuery(mediaType, myQuery));
  }, []);

  useEffect(() => {
    if (mediaByQuery.length) dispatch(isLoading(false));
    else dispatch(isLoading(true));
  }, [mediaByQuery]);

  if (inView) {
    // console.log('VISTO!');
    const nextPage = mediaByQuery.length / 20 + 1;

    if (nextPage <= localStorage.getItem('totalPageSearchQuery')) {
      myQuery.page = nextPage;

      dispatch(addMoreMedia(mediaType, myQuery));
    }
  }

  return (
    <>
      <section className="search-view margin-top_main">
        {isLoad && <Loader />}
        <div className="container">
          <h3 className="subtitle-1">{title}</h3>
          <div className="row">
            <div className="col-md-12">
              {mediaByQuery && <SearchedGroup media={mediaByQuery} />}
            </div>
          </div>
        </div>
      </section>
      <div ref={ref}></div>
    </>
  );
};

export default SearchByQueryView;
