import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
// import taskReduceer from './slices/taskSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    // task: taskReduceer
  },
});