//Dependencies
import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetDetailMedia = (mediaType, mediaId) => {
  const [detail, setDetail] = useState();

  useEffect(() => {
    getDetailMedia();
  }, [mediaType, mediaId]);

  const getDetailMedia = () => {
    const baseUrl = 'https://api.themoviedb.org/3';
    const apiKey = 'b0dd442bf37e49eecbb517b186e6f5ee&language';
    const query = {
      language: 'en-US',
    };

    axios
      .get(`${baseUrl}/${mediaType}/${mediaId}?api_key=${apiKey}`, {
        params: query,
      })
      .then((res) => {
        console.log(res);
        setDetail(res.data);
      })
      .catch((error) => console.log(error));
  };

  return [detail];
};

export default useGetDetailMedia;
