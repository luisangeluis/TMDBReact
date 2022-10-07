import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const mediaByGenreSlice = createSlice({
  name: 'mediaByGenre',
  initialState: null,
  reducers: {
    setMediaByGenre: (state, action) => {
      return action.payload;
    },
  },
});

export const { setMediaByGenre } = mediaByGenreSlice.actions;
export default mediaByGenreSlice.reducer;

export const getMediaByGenre = (mediaType, genreId) => (dispatch) => {
  const key = 'b0dd442bf37e49eecbb517b186e6f5ee';
  return axios
    .get(
      `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${key}&language=en-US&include_null_first_air_dates=false&with_genres=${genreId}`
    )
    .then((res) => {
      console.log(res.data);
      dispatch(setMediaByGenre(res.data.results));
    })
    .catch((error) => {
      console.log(error);
    });
};
