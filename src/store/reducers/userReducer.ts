import { createReducer } from "@reduxjs/toolkit"
import { UserState } from "../../types/userTypes"
import { fetchUsersAction, fetchUsersSuccessAction, fetchUsersErrorAction } from "./actions/userActions"

const initialState: UserState = {
  users: [],
  loading: false,
  error: null
}

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchUsersAction, (state) => {
      state.loading = true
    })
    .addCase(fetchUsersSuccessAction, (state, action) => {
      state.users = action.payload
      state.loading = false
    })
    .addCase(fetchUsersErrorAction, (state, action) => {
      state.error = action.payload
      state.loading = false
    })
    .addDefaultCase((state) => state)
})