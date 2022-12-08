const useGetSeasonDetail = (tvId, seasonId) => {
  const [detailSeason, setDetailSeason] = useState();

  const getSeasonDetail = () => {
    const baseUrl = 'https://api.themoviedb.org/3';
    const key = 'b0dd442bf37e49eecbb517b186e6f5ee';
    const query = { language: 'en-US' };
    axios
      .get(`${baseUrl}/tv/${tvId}/season/${seasonId}?api_key=${key}`, {
        params: query,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => error.message);
  };

  return [detailSeason];
};

export default useGetSeasonDetail;
