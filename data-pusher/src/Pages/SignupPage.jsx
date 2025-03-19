import React, { useEffect } from 'react'
import Signup from '../Components/SignUp/Signup'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const userDetails = useSelector(state=>state.user.userDetails)
  const navigate = useNavigate();
  useEffect(()=>{
    if (userDetails){
      navigate('/')
    }
  }, [userDetails])
  return (
    <>
        <Signup />
    </>
  )
}

export default SignupPage
