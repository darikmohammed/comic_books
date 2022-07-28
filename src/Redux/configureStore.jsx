import { configureStore } from '@reduxjs/toolkit';
import Disney from './Disney/Disney';

const store = configureStore({
  reducer: {
    Disney,
  },
});

export default store;
