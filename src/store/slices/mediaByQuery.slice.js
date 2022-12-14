//Dependencies
import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

export const mediaByQuerySlice = createSlice({
  name: 'queryMedia',
  initialState: null,
  reducers: {
    setMediaByQuery: (state, action) => {
      return action.payload;
    },
  },
});

export const { setMediaByQuery } = mediaByQuerySlice.actions;
export default mediaByQuerySlice.reducer;

export const getMediaByQuery = (mediaType, query) => (dispatch) => {
  const key = 'b0dd442bf37e49eecbb517b186e6f5ee';

  return axios
    .get(`https://api.themoviedb.org/3/discover/${mediaType}?api_key=${key}`, {
      params: query,
    })
    .then((res) => {
      console.log(res);
      dispatch(setMediaByQuery(res.data.results));
    })
    .catch((error) => console.log(error.message));
};

// export const getMediaByName = (search) => (dispatch) => {
//   const key = 'b0dd442bf37e49eecbb517b186e6f5ee';

//   return axios
//     .get(
//       `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&include_adult=false&query=${search}`
//     )
//     .then((res) => {
//       console.log(res.data.results);
//       dispatch(setMediaByQuery(res.data.results));
//     })
//     .catch((error) => console.log(error));
// };
