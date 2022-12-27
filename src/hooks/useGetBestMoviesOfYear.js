import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
//Slices
import { isLoading } from '../store/slices/loader.slice';

const useGetBestMoviesOfYeAR = (year) => {
  const [movies, setMovies] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?primary_release_year=${year}&sort_by=vote_average.desc&api_key=b0dd442bf37e49eecbb517b186e6f5ee`
      )
      .then((res) => setMovies(res.data.results))
      .catch((error) => console.log(error))
      .finally(() => dispatch(isLoading(false)));
  };

  return [movies];
};

export default useGetBestMoviesOfYeAR;
