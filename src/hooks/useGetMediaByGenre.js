import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useGetMediaByGenre = (mediaType, genreId) => {
  const [mediaItems, setMediaItems] = useState();

  useEffect(() => {
    getMedia();
  }, [mediaType, genreId]);

  const getMedia = () => {
    const key = 'b0dd442bf37e49eecbb517b186e6f5ee';
    axios
      .get(
        `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&include_null_first_air_dates=false&with_genres=${genreId}`
      )
      .then((res) => {
        // console.log(res.data);
        setMediaItems(res.data.results);
      })
      .catch((error) => console.log(error));
  };

  return [mediaItems];
};

export default useGetMediaByGenre;
