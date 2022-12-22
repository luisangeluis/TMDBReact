//Depedencies
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
//Slices
import { getMediaByQuery } from '../../store/slices/mediaByQuery.slice';
//Components
import SearchedGroup from '../media/SearchedGroup';

//Footer

const SearchByQueryView = () => {
  let footer = document.querySelector('.search-view');
  console.log(footer);
  const dispatch = useDispatch();
  const mediaByQuery = useSelector((state) => state.mediaByQuery);
  const { title } = useParams();
  const mediaType = localStorage.getItem('mediaType');
  const myQuery = JSON.parse(localStorage.getItem('mediaByQuery'));
  let currentPage = 0;
  //Observer
  //TODO OBSERVAR EL FOOTER
  //PARA VER CUANDO HACER LA PETICION Y NO SE DISPARE TANTAS VECES COMO CON SCROLL
  const observerOptions = { threshold: 0 };
  let observer = new IntersectionObserver(callback, observerOptions);
  observer.observe(footer);

  function callback() {
    console.log('el callback');
  }

  // addEventListener('scroll', handleRequesAgain);

  useEffect(() => {
    if (!mediaByQuery.length) {
      console.log('sin media query');

      dispatch(getMediaByQuery(mediaType, myQuery));
    }
    localStorage.setItem('currentPage', 1);
  }, []);

  useEffect(() => {
    if (mediaByQuery.length) {
      currentPage = mediaByQuery.length / 20;
      localStorage.getItem('currentPage', currentPage);
    }
  }, [mediaByQuery]);

  // function handleRequesAgain() {
  //   const isFinal = isFinalPage();

  //   if (isFinal) {
  //     let newPage = Number(localStorage.getItem('currentPage')) + 1;

  //     console.log('es el final');
  //     console.log({ newPage });
  //     // myQuery.page = newPage;
  //     // dispatch(getMediaByQuery(mediaType, myQuery));
  //   }
  // }

  // function isFinalPage() {
  //   let isFinal = false;
  //   let pageHeight = document.documentElement.scrollHeight;
  //   let windowHeight = innerHeight;
  //   let scrollPosition = scrollY;

  //   if (scrollPosition >= pageHeight - windowHeight) {
  //     isFinal = true;
  //   }

  //   return isFinal;
  // }

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
