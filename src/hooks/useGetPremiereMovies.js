import axios from 'axios';
import { useEffect, useState } from 'react';
import * as moment from 'moment';

const useGetPremiereMovies = () => {
  const [movies, setMovies] = useState();

  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month.toString().length < 2) month = `0${month}`;
    if (day.toString().length < 2) month = `0${day}`;

    return `${year}-${month}-${day}`;
  };

  const getLastDate = () => {
    const date = new Date();
  };

  // console.log(getCurrentDate());
  console.log(moment().format('YYYY/MM/DD'));
  // console.log(moment.format('YYYY MM DD'));
  useEffect(() => {
    const currentDate = moment().format('YYYY/MM/DD');
    const lastDate = moment().subtract(1, 'months').format('YYYY/MM/DD');
    console.log(typeof lastDate);
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastDate}&primary_release_date.lte=${currentDate}&api_key=b0dd442bf37e49eecbb517b186e6f5ee`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return [movies];
};

export default useGetPremiereMovies;
