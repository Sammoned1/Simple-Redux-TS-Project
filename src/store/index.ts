import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";

export const appStore = configureStore({reducer: {
  user: userReducer,
}})