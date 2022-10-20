//Dependencies
import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetMediaByQuerySection = (mediaType, query) => {
  const [media, setMedia] = useState();

  useEffect(() => {
    getMediaByQuery();
  }, [mediaType, query]);

  const getMediaByQuery = () => {
    const baseUrl = 'https://api.themoviedb.org/3/discover/';
    const key = 'b0dd442bf37e49eecbb517b186e6f5ee';
    axios
      .get(`${baseUrl}${mediaType}?${query}&api_key=${key}`)
      .then((res) => {
        console.log(res.data.results);
        setMedia(res.data.results);
      })
      .catch((error) => console.log(error));
  };

  return [media];
};

export default useGetMediaByQuerySection;
