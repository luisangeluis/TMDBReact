//Dependencies
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchedGroup from '../media/SearchedGroup';

const SearchView = () => {
  const { search } = useParams();
  const [media, setMedia] = useState();

  useEffect(() => {
    getSearch();
  }, [search]);
  const getSearch = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=b0dd442bf37e49eecbb517b186e6f5ee&language=en-US&page=1&include_adult=false&query=${search}`
      )
      .then((res) => setMedia(res.data.results))
      .catch((error) => console.log(error.message));
  };

  return (
    <section className="search-view">
      <div className="container">
        <SearchedGroup media={media} />
      </div>
    </section>
  );
};

export default SearchView;
