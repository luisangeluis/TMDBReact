//Dependencies
import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetSimiliarMovies = (movieId) => {
  const [similarMovies, setSimilarMovies] = useState();
  const baseUrl = 'https://api.themoviedb.org/3/movie';
  const key = 'b0dd442bf37e49eecbb517b186e6f5ee';

  useEffect(() => {
    getSimilarMovies();
  }, [movieId]);

  const getSimilarMovies = () => {
    axios
      .get(`${baseUrl}/${movieId}/similar?api_key=${key}&language=en-US&page=1`)
      .then((res) => {
        console.log(res);
        setSimilarMovies(res.data.results);
      })
      .catch((error) => console.log(error));
  };

  return [similarMovies];
};

export default useGetSimiliarMovies;
