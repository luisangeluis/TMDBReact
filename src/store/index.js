import { configureStore } from '@reduxjs/toolkit';
import searchedMedia from './slices/searchedMedia.slice';
import genresMedia from './slices/genresMedia.slice';
import mediaByQuery from './slices/mediaByQuery.slice';
import loader from './slices/loader.slice';

export default configureStore({
  reducer: {
    searchedMedia,
    genresMedia,
    mediaByQuery,
    loader,
  },
});
