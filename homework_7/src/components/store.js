import { configureStore } from '@reduxjs/toolkit';
import toDosReducer from './ToDosSlice';

export const store = configureStore({
  reducer: {
    toDos: toDosReducer
  }
});
