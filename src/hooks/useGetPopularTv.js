//Dependencies
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useGetPopularTv = (mediaType) => {
  const [mediaItems, setMediaItems] = useState();

  useEffect(() => {
    getPopularTv();
  }, [mediaType]);

  const getPopularTv = () => {
    const key = 'b0dd442bf37e49eecbb517b186e6f5ee';
    const url = `https://api.themoviedb.org/3/${mediaType}/popular?api_key=${key}&language=en-US&page=1`;

    axios
      .get(url)
      .then((res) => {
        console.log(res.data.results);
        setMediaItems(res.data.results);
      })
      .catch((error) => console.log(error));
  };

  return [mediaItems];
};

export default useGetPopularTv;
