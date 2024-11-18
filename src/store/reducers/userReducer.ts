import { createReducer } from "@reduxjs/toolkit"
import { UserState } from "../../types/userTypes"
import { fetchUsers, fetchUsersError, fetchUsersSuccess } from "./actions/userActions"

const initialState: UserState = {
  users: [],
  loading: false,
  error: null
}

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchUsers, (state) => {
      state.loading = true
    })
    .addCase(fetchUsersSuccess, (state, action) => {
      state.users = action.payload
    })
    .addCase(fetchUsersError, (state, action) => {
      state.error = action.payload
    })
})