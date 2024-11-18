import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store';
import { useActions } from '../hooks/useActions';

const UserList: FC = () => {
  const {users, loading, error} = useSelector((state: RootState) => state.users)
  const {fetchUsers} = useActions()
  useEffect(() => {
    fetchUsers()
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