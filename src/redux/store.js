import { configureStore } from "@reduxjs/toolkit";
import taskReduceer from './slices/taskSlice';
import userReducer from './slices/userSlice';

export default configureStore({
  reducer: {
    tasks:taskReduceer,
    users: userReducer 
  }
});