import React from 'react'
import { UseDispatch } from 'react-redux'
import authService from '../../appwrite/conf'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
  const dispatch = UseDispatch();
  const logoutHandler = () => {
    authService.logout()
    .then(() => {
      dispatch(logout());
    })
    .catch((err) => console.log(err))
  }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}>
        Logout
    </button>
  )
}

export default LogoutBtn
