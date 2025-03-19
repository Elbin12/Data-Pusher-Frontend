import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Login from '../Components/Login/Login'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const userDetails = useSelector(state=>state.user.userDetails)
  const navigate = useNavigate();
  useEffect(()=>{
    if (userDetails){
      navigate('/')
    }
  }, [userDetails])
  return (
    <>
        <Login />
    </>
  )
}

export default LoginPage
