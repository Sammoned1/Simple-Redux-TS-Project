import axios from "axios"
import { AppDispatch } from ".."
import { fetchTodosAction, fetchTodosErrorAction, fetchTodosSuccessAction, setTodosPage } from "../reducers/actions/toodActions"


export const fetchTodos = (page = 1, limit = 1) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchTodosAction())
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {_page: page, _limit: limit}
      })
      setTimeout(() => {
        dispatch(fetchTodosSuccessAction(response.data))
      }, 500)
    } catch (err) {
      dispatch(fetchTodosErrorAction('Ошибка при загрузке списка дел'))
    }
  }
}

export const changePageNumber = (page: number) => setTodosPage(page)