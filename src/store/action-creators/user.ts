import axios from "axios"
import { fetchUsersAction, fetchUsersErrorAction, fetchUsersSuccessAction } from "../reducers/actions/userActions"
import { AppDispatch } from ".."


export const fetchUsers = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchUsersAction())
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      setTimeout(() => {
        dispatch(fetchUsersSuccessAction(response.data))
      }, 500)
    } catch (err) {
      dispatch(fetchUsersErrorAction('Ошибка при загрузке пользователей'))
    }
  }
}