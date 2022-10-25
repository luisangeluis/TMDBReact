import { configureStore } from '@reduxjs/toolkit';
import searchedMedia from './slices/searchedMedia.slice';
import genresMedia from './slices/genresMedia.slice';
import mediaByGenre from './slices/mediaByGenre.slice';
import users from './slices/users.slice';
import queryMedia from './slices/queryMedia.slice';

export default configureStore({
  reducer: {
    searchedMedia,
    genresMedia,
    mediaByGenre,
    users,
    queryMedia,
  },
});
