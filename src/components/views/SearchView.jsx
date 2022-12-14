//Dependencies
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
//Slices
import { getSearchedMedia } from '../../store/slices/searchedMedia.slice';
//Component
import SearchedGroup from '../media/SearchedGroup';

const SearchView = () => {
  const { search } = useParams();
  const dispatch = useDispatch();
  const mediaByName = useSelector((state) => state.searchedMedia);
  useEffect(() => {
    dispatch(getSearchedMedia(search));
  }, []);

  return (
    <section className="search-view">
      <div className="container">
        <SearchedGroup media={mediaByName} />
      </div>
    </section>
  );
};

export default SearchView;
