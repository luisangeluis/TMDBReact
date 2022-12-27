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
//Components
import SearchedGroup from '../media/SearchedGroup';

const SearchByQueryView = () => {
  const dispatch = useDispatch();
  const mediaByQuery = useSelector((state) => state.mediaByQuery);
  const { title } = useParams();
  const mediaType = localStorage.getItem('mediaType');
  const myQuery = JSON.parse(localStorage.getItem('mediaByQuery'));
  const { ref, inView, entry } = useInView({ threshold: 0 });

  useEffect(() => {
    if (mediaByQuery.length) {
      const nextPage = mediaByQuery.length / 20 + 1;

      localStorage.setItem('nextPage', nextPage);

      myQuery.page = Number(localStorage.getItem('nextPage'));
      dispatch(addMoreMedia(mediaType, myQuery));
    } else {
      dispatch(getMediaByQuery(mediaType, myQuery));
    }
  }, []);

  if (inView) {
    // console.log('VISTO!');
    const nextPage = mediaByQuery.length / 20 + 1;

    if (nextPage <= localStorage.getItem('totalPageSearchQuery')) {
      localStorage.setItem('nextPage', nextPage);

      myQuery.page = Number(localStorage.getItem('nextPage'));

      dispatch(addMoreMedia(mediaType, myQuery));
    }
  }

  return (
    <>
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
      <div ref={ref}></div>
    </>
  );
};

export default SearchByQueryView;
