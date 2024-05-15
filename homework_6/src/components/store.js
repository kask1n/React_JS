import { configureStore } from '@reduxjs/toolkit';
import productListReducer from './ProductListSlice';

export const store = configureStore({
  reducer: {
    productList: productListReducer
  }
});
