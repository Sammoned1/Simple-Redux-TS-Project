import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../store/action-creators/user';

const UserList: FC = () => {
  const {users, loading, error} = useSelector((state: RootState) => state.users)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  if (loading){
    return <h1>Идет загрузка...</h1>
  }

  if (error){
    return <h1>{error}</h1>
  }

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}

export default UserList