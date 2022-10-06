import { createSlice } from '@reduxjs/toolkit';

export const getMediaByGenreOrType = createSlice({
  name: 'getMediaByGenreOrType',
  initialState: null,
  reducers: {
    setMediaByGenre: (state, action) => {
      return action.payload;
    },
  },
});

export const { setMediaByGenre } = getMediaByGenreOrType.actions;
export default getMediaByGenreOrType.reducer;

export const getMediaByGenre = (mediaType, genreId) => (dispatch) => {
  const key = 'b0dd442bf37e49eecbb517b186e6f5ee';
  return axios
    .get(
      `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${key}&language=en-US&sort_by=popularity.desc&page=1&include_null_first_air_dates=false&with_genres=${genreId}`
    )
    .then((res) => {
      dispatch(setMediaByGenre(res.data.genres));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getPopularMedia = (mediaType, params) => (dispatch) => {
  params.sort_by = 'popularity.desc';
  const key = 'b0dd442bf37e49eecbb517b186e6f5ee';
  params.api_key = key;

  return axios
    .get(`https://api.themoviedb.org/3/discover/${mediaType}`, params)
    .then((res) => {
      dispatch(setMediaByGenre(res.data.genres));
    })
    .catch((error) => {
      console.log(error);
    });
};
