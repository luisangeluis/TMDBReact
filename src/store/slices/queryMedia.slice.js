import { createSlice } from '@reduxjs/toolkit';

export const queryMediaSlice = createSlice({
  name: 'queryMedia',
  initialState: null,
  reducers: {
    setQueryMedia: (state, action) => {
      return action.payload;
    },
  },
});

export const { setQueryMedia } = queryMediaSlice.actions;
export default queryMediaSlice.reducer;

export const getQueryMedia = (mediaType, query) => (dispatch) => {
  const key = 'b0dd442bf37e49eecbb517b186e6f5ee';

  return axios
    .get(`https://api.themoviedb.org/3/discover/${mediaType}?api_key=${key}`, {
      query,
    })
    .then((res) => console.log(res))
    .catch((error) => console.log(error.message));
};
