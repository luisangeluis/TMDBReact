import { configureStore } from '@reduxjs/toolkit';
import searchedMedia from './slices/searchedMedia.slice';
import genresMedia from './slices/genresMedia.slice';

export default configureStore({
  reducer: {
    searchedMedia,
    genresMedia,
  },
});
