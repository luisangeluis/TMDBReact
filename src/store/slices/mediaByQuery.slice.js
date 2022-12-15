//Dependencies
import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

export const mediaByQuerySlice = createSlice({
  name: 'queryMedia',
  initialState: null,
  reducers: {
    // setMediaByQuery: (state, action) => {
    //   return action.payload;
    // },
    setMediaByQuery: (state, action) => {
      console.log(action);
      const elements = action.payload;
      return [...state, elements];
    },
    addMediaByQuery: (state, action) => {
      console.log(state.value);
      return state;
    },
  },
});

export const { setMediaByQuery, addMediaByQuery } = mediaByQuerySlice.actions;
export default mediaByQuerySlice.reducer;

export const getMediaByQuery = (mediaType, query) => (dispatch) => {
  const key = 'b0dd442bf37e49eecbb517b186e6f5ee';

  return axios
    .get(`https://api.themoviedb.org/3/discover/${mediaType}?api_key=${key}`, {
      params: query,
    })
    .then((res) => {
      dispatch(setMediaByQuery(res.data.results));
    })
    .catch((error) => console.log(error.message));
};
