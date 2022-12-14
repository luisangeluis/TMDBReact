import { configureStore } from '@reduxjs/toolkit';
import searchedMedia from './slices/searchedMedia.slice';
import genresMedia from './slices/genresMedia.slice';
import mediaByQuery from './slices/mediaByQuery.slice';

export default configureStore({
  reducer: {
    searchedMedia,
    genresMedia,
    mediaByQuery,
  },
});
