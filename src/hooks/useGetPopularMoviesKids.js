//Dependencies
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useGetPopularMoviesKids = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=b0dd442bf37e49eecbb517b186e6f5ee`
      )
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return [movies];
};

export default useGetPopularMoviesKids;
