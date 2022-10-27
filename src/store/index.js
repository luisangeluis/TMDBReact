import { configureStore } from '@reduxjs/toolkit';
import searchedMedia from './slices/searchedMedia.slice';
import genresMedia from './slices/genresMedia.slice';
import mediaByGenre from './slices/mediaByGenre.slice';
import users from './slices/users.slice';
import mediaByQuery from './slices/mediaByQuery.slice';

export default configureStore({
  reducer: {
    searchedMedia,
    genresMedia,
    mediaByGenre,
    users,
    mediaByQuery,
  },
});
