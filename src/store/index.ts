import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";

export const appStore = configureStore({reducer: {
  users: userReducer,
}})

export type RootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch