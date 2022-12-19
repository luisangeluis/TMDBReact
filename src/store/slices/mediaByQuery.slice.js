//Dependencies
import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

// const initialState = { value: [] };

export const mediaByQuerySlice = createSlice({
  name: 'queryMedia',
  initialState: [],
  reducers: {
    setMediaByQuery: (state, action) => {
      // const newValue = action.payload;
      // return [...state, ...newValue];
      return action.payload;
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
