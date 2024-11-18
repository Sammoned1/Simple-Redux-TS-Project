import { createAction } from "@reduxjs/toolkit"
import { UserActionTypes } from "../../../types/userTypes"

export const fetchUsersAction = createAction<undefined>(UserActionTypes.FETCH_USERS)
export const fetchUsersSuccessAction = createAction<any[]>(UserActionTypes.FETCH_USERS_SUCCESS)
export const fetchUsersErrorAction = createAction<string>(UserActionTypes.FETCH_USERS_ERROR)