//Dependencies
import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetSeasonDetail = (tvId, seasonId) => {
  const [detailSeason, setDetailSeason] = useState();

  useEffect(() => {
    getSeasonDetail();
  }, [tvId, seasonId]);

  const getSeasonDetail = () => {
    const baseUrl = 'https://api.themoviedb.org/3';
    const key = 'b0dd442bf37e49eecbb517b186e6f5ee';
    const query = { language: 'en-US' };

    axios
      .get(`${baseUrl}/tv/${tvId}/season/${seasonId}?api_key=${key}`, {
        params: query,
      })
      // .get(
      //   `https://api.themoviedb.org/3/tv/${tvId}/season/${seasonId}?api_key=${key}&language=en-US`
      // )
      .then((res) => {
        console.log(res);
        setDetailSeason(res.data);
      })
      .catch((error) => error);
  };

  return [detailSeason];
};

export default useGetSeasonDetail;
