import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice'
import { Outlet } from 'react-router-dom'
import {Header, Footer} from './Components'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getUserAccount()
    .then((userData) => {
      if(userData) {
        dispatch(login({userData}));
      }else {
        dispatch(logout());
      }
    })
    .finally(() => setLoading(false))
  }, [])
 
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-slate-500 '>
      <div className='w-full block '>
       <Header/>
       <main>
        {/* <Outlet /> */}
       </main>
       <Footer />
      </div>
    </div>
  ) : null
}

export default App
