import { createReducer } from "@reduxjs/toolkit";
import { TodoState } from "../../types/todoTypes";
import { fetchTodosAction, fetchTodosErrorAction, fetchTodosSuccessAction, setTodosPage } from "./actions/toodActions";

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
  page: 1,
  limit: 10,
}

export const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchTodosAction, (state) => {
      state.loading = true
    })
    .addCase(fetchTodosSuccessAction, (state, action) => {
      state.todos = action.payload
      state.loading = false
    })
    .addCase(fetchTodosErrorAction, (state, action) => {
      state.error = action.payload
      state.loading = false
    })
    .addCase(setTodosPage, (state, action) => {
      state.page = action.payload
    })
    .addDefaultCase((state) => state)
})