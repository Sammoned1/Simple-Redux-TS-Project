import React, { FC } from 'react'
import { useSelector } from 'react-redux'

const UserList: FC = () => {
  const state = useSelector(state => state)
  console.log(state);

  return (
    <div>UserList</div>
  )
}

export default UserList