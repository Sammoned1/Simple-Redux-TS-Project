import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { useActions } from '../hooks/useActions'

const TodoList: FC = () => {
  const {page, limit, loading, todos, error} = useSelector((state: RootState) => state.todos)
  const {fetchTodos, changePageNumber} = useActions()
  const pages = [1, 2, 3, 4, 5]

  useEffect(() => {
    fetchTodos(page, limit)
  }, [page])

  if (loading){
    return <h1>Идет загрузка...</h1>
  }

  if (error){
    return <h1>{error}</h1>
  }

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>{todo.id} - {todo.title}</div>
      ))}
      <div style={{display: 'flex', gap: 5}}>
        {pages.map(num => (
            <div style={{
              border: num === page ? '2px solid green' : '1px solid gray',
              padding: 10,
              cursor: 'pointer'
            }}
            onClick={() => {changePageNumber(num)}}>
              {num}
            </div>
        ))}
      </div>
    </div>
  )
}

export default TodoList