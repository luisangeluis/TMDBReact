import { createSlice } from '@reduxjs/toolkit';

const loaderSlice = createSlice({
  name: 'loader',
  initialState: null,
  reducers: {
    isLoading: (state, action) => {
      return action.payload;
    },
  },
});

export const { isLoading } = loaderSlice.actions;
export default loaderSlice.reducer;
