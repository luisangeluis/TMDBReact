import axios from 'axios';
import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { isLoading } from '../store/slices/loader.slice';

const useGetPopularMedia = (mediaType, query) => {
  const [popularMedia, setPopularMedia] = useState();
  // const dispatch = useDispatch();

  useEffect(() => {
    getPopularMedia();
  }, [mediaType, query]);

  const getPopularMedia = () => {
    const key = 'b0dd442bf37e49eecbb517b186e6f5ee';
    const baseUrl = `https://api.themoviedb.org/3`;

    axios
      .get(`${baseUrl}/${mediaType}/popular?api_key=${key}`, {
        params: { query },
      })
      .then((res) => setPopularMedia(res.data.results))
      .catch((error) => console.log(error));
  };

  return [popularMedia];
};

export default useGetPopularMedia;
