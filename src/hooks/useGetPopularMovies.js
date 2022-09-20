//Dependencies
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useGetPopularMovies = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    getPopularMovies();
  }, []);
  const getPopularMovies = () => {
    axios
      .get(
        'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b0dd442bf37e49eecbb517b186e6f5ee'
      )
      .then((res) => setMovies(res.data.results))
      .catch((error) => {
        console.log(error);
      });
  };

  return [movies];
};

export default useGetPopularMovies;
