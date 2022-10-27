import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const searchedMediaSlice = createSlice({
  name: 'searchedMedia',
  initialState: null,
  reducers: {
    setSearchedMedia: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSearchedMedia } = searchedMediaSlice.actions;
export default searchedMediaSlice.reducer;
export const getSearchedMedia = (search) => (dispatch) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/multi?api_key=b0dd442bf37e49eecbb517b186e6f5ee&language=en-US&page=1&include_adult=false&query=${search}`
    )
    .then((res) => {
      console.log(res.data.results);
      dispatch(setSearchedMedia(res.data.results));
    })
    .catch((error) => console.log(error));
};
