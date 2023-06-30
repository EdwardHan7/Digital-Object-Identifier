import { configureStore } from '@reduxjs/toolkit';
import doiReducer from './slices/doiSlice';

export default configureStore({
  reducer: {
    doi: doiReducer,
  },
});
