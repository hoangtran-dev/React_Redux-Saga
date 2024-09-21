// src/Redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../App/app.slide'; // Đảm bảo import đúng reducer

const store = configureStore({
  reducer: {
    app: appReducer, // Sử dụng reducer đúng cách
  },
});

export default store;
