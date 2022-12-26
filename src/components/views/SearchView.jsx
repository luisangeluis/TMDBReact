//Dependencies
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
//Slices
import {
  addMedia,
  getSearchedMedia,
} from '../../store/slices/searchedMedia.slice';
//Component
import SearchedGroup from '../media/SearchedGroup';

const SearchView = () => {
  const { search } = useParams();
  const dispatch = useDispatch();
  const { ref, inView, entry } = useInView({ threshold: 0 });
  const mediaByName = useSelector((state) => state.searchedMedia);

  const query = {
    query: search,
    language: 'en-US',
    include_adult: false,
  };

  useEffect(() => {
    localStorage.setItem('currentPageSearch', 1);
    dispatch(getSearchedMedia(query));
  }, []);

  if (inView) {
    if (mediaByName) {
      const nextPage = mediaByName.length / 20 + 1;
      query.page = nextPage;
      console.log(nextPage);
      dispatch(addMedia(query));
    }
  }

  return (
    <section className="search-view">
      <div className="container">
        <SearchedGroup media={mediaByName} />
      </div>
      <div ref={ref}></div>
    </section>
  );
};

export default SearchView;
