import axios from 'axios';
import { useEffect, useState } from 'react';
// import * as moment from 'moment';
import moment from 'moment';

const useGetPremiereMovies = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    const currentDate = moment().format('YYYY-MM-DD');
    const lastDate = moment().subtract(1, 'months').format('YYYY-MM-DD');

    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastDate}&primary_release_date.lte=${currentDate}&api_key=b0dd442bf37e49eecbb517b186e6f5ee`
      )
      .then((res) => {
        console.log(res);
        setMovies(res.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return [movies];
};

export default useGetPremiereMovies;
