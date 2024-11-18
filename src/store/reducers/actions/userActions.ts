import { createAction } from "@reduxjs/toolkit"
import { UserActionTypes } from "../../../types/userTypes"

export const fetchUsers = createAction<undefined>(UserActionTypes.FETCH_USERS)
export const fetchUsersSuccess = createAction<any[]>(UserActionTypes.FETCH_USERS_SUCCESS)
export const fetchUsersError = createAction<string>(UserActionTypes.FETCH_USERS_ERROR)