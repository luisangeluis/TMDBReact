import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const searchedMediaSlice = createSlice({
  name: 'searchedMedia',
  initialState: null,
  reducers: {
    setSearchedMedia: (state, action) => {
      return action.payload;
    },
    addSearchedMedia: (state, action) => {
      const newValue = action.payload;
      return [...state, ...newValue];
    },
  },
});

export const { setSearchedMedia, addSearchedMedia } =
  searchedMediaSlice.actions;

export default searchedMediaSlice.reducer;

export const getSearchedMedia = (query) => (dispatch) => {
  const urlBase = 'https://api.themoviedb.org/3/search/multi';
  const key = 'b0dd442bf37e49eecbb517b186e6f5ee';

  return axios
    .get(`${urlBase}?api_key=${key}`, { params: query })
    .then((res) => {
      console.log(res.data);
      localStorage.setItem('totalPagesSearch', res.data.total_pages);
      dispatch(setSearchedMedia(res.data.results));
    })
    .catch((error) => console.log(error));
};

export const addMedia = (query) => (dispatch) => {
  const urlBase = 'https://api.themoviedb.org/3/search/multi';
  const key = 'b0dd442bf37e49eecbb517b186e6f5ee';

  return axios
    .get(`${urlBase}?api_key=${key}`, { params: query })
    .then((res) => {
      console.log(res);
      // if(re)
      dispatch(addSearchedMedia(res.data.results));
    })
    .catch((error) => console.log(error));
};
