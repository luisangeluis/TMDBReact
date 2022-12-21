//Depedencies
import { useEffect, useRef, useState } from 'react';
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
  const [page, setPage] = useState(1);
  const mediaType = localStorage.getItem('mediaType');
  const myQuery = JSON.parse(localStorage.getItem('mediaByQuery'));

  addEventListener('scroll', handleRequesAgain);

  useEffect(() => {
    //TODO SE DUPLICA LA PETICION
    if (!mediaByQuery.length) {
      dispatch(getMediaByQuery(mediaType, myQuery));
      console.log('no media');
    }
  }, []);
  function handleRequesAgain() {
    const isFinal = isFinalPage();

    if (isFinal) {
      let newPage = mediaByQuery.length / 20;
      newPage++;
      myQuery.page = newPage;
      dispatch(getMediaByQuery(mediaType, myQuery));
    }
  }

  function isFinalPage() {
    let isFinal = false;
    let pageHeight = document.documentElement.scrollHeight;
    let windowHeight = innerHeight;
    let scrollPosition = scrollY;

    if (scrollPosition >= pageHeight - windowHeight) {
      isFinal = true;
    }

    return isFinal;
  }

  return (
    <section className="search-view">
      <div className="container">
        <h3>{title}</h3>
        <div className="row">
          <div className="col-md-12">
            {<SearchedGroup media={mediaByQuery} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchByQueryView;
