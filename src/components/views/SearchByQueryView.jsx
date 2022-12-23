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

  // localStorage.setItem('currentPage', 1);

  useEffect(() => {
    let nextPage = 0;
    if (mediaByQuery.length) {
      nextPage = mediaByQuery.length / 20 + 1;
    } else {
      nextPage = 1;
    }
    localStorage.setItem('nextPage', nextPage);
    myQuery.page = nextPage;
    dispatch(getMediaByQuery(mediaType, myQuery));
  }, []);

  // useEffect(() => {
  //   if (mediaByQuery.length) {
  //     const currentPage = mediaByQuery.length / 20;
  //     const nextPage = mediaByQuery.length / 20 + 1;
  //     localStorage.setItem('currentPage', currentPage);
  //     localStorage.setItem('nextPage', nextPage);
  //   }
  // }, [mediaByQuery]);

  if (inView) {
    console.log('VISTO!');
    const nextPage = localStorage.getItem('nextPage');
    myQuery.page = nextPage;
    dispatch(addMoreMedia(mediaType, myQuery));
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
