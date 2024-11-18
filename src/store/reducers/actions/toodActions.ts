import { createAction } from "@reduxjs/toolkit"
import { TodoActionTypes } from "../../../types/todoTypes"

export const fetchTodosAction = createAction<undefined>(TodoActionTypes.FETCH_TODOS)
export const fetchTodosSuccessAction = createAction<any[]>(TodoActionTypes.FETCH_TODOS_SUCCESS)
export const fetchTodosErrorAction = createAction<string>(TodoActionTypes.FETCH_TODOS_ERROR)
export const setTodosPage = createAction<number>(TodoActionTypes.SET_TODO_PAGE)