import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const genresMediaSlice = createSlice({
  name: 'genresMedia',
  initialState: null,
  reducers: {
    setGenresMedia: (state, action) => {
      return action.payload;
    },
  },
});

export const { setGenresMedia } = genresMediaSlice.actions;
export default genresMediaSlice.reducer;

export const getGenresMedia = (type) => (dispatch) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/genre/${type}/list?&api_key=b0dd442bf37e49eecbb517b186e6f5ee&language=en-US`
    )
    .then((res) => {
      dispatch(setGenresMedia(res.data.genres));
    })
    .catch((error) => {
      console.log(error);
    });
};
