import axios from "axios"
import { fetchUsersAction, fetchUsersErrorAction, fetchUsersSuccessAction } from "../reducers/actions/userActions"
import { AppDispatch } from ".."


export const fetchUsers = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchUsersAction())
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      console.log(response);
      
      dispatch(fetchUsersSuccessAction(response.data))
    } catch (err) {
      dispatch(fetchUsersErrorAction('Ошибка при загрузке пользователей'))
    }
  }
}