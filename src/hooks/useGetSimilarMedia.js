//Dependencies
import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetSimiliarMedia = (movieId, mediaType) => {
  const [similarMedia, setSimilarMedia] = useState();
  const baseUrl = 'https://api.themoviedb.org/3';
  const key = 'b0dd442bf37e49eecbb517b186e6f5ee';

  useEffect(() => {
    getSimilarMovies();
  }, [movieId]);

  const getSimilarMovies = () => {
    axios
      .get(
        `${baseUrl}/${mediaType}/${movieId}/similar?api_key=${key}&language=en-US&page=1`
      )
      .then((res) => {
        console.log(res);
        setSimilarMedia(res.data.results);
      })
      .catch((error) => console.log(error));
  };

  return [similarMedia];
};

export default useGetSimiliarMedia;
