import { configureStore } from '@reduxjs/toolkit';
import searchedMedia from './slices/searchedMedia.slice';

export default configureStore({
  reducer: {
    searchedMedia,
  },
});
