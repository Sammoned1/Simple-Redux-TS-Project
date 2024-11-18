import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { todoReducer } from "./reducers/todoReducer";

export const appStore = configureStore({reducer: {
  users: userReducer,
  todos: todoReducer,
}})

export type RootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch