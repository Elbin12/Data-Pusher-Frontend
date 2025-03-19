import { LogOut } from 'lucide-react';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const userDetails = useSelector(state=>state.user.userDetails)
  const navigate = useNavigate();

  const logout = ()=>{
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("userDetails");
    window.location.reload();
  }

  return (
    <div className='h-20 px-9 flex items-center justify-between bg-black text-white'>
      <h1 className='text-xl font-semibold'>Data-Puhser </h1>
      {userDetails?
        <>
          <div className='flex gap-3'>
            <Link className='hover:underline'>Home</Link>
            <Link to={'/accounts'} className='hover:underline'>Accounts</Link>
          </div>
          <div className='flex gap-1'>
            <div className='rounded-full bg-white w-6 h-6 text-center'>
              <h1 className='overflow-hidden text-black font-bold'>{userDetails?.username[0]}</h1>
            </div>
            <h1>{userDetails?.username}</h1>
            <LogOut className='ml-9 hover:text-violet-950 cursor-pointer' onClick={()=>{logout()}}/>
          </div>
        </>
        :
        <div className='flex gap-3 items-center'>
          <Link to={'/login'} className='text-lg cursor-pointer'>Sign In</Link>
          <button className='bg-violet-950 text-white py-2 px-4 rounded-lg shadow-md cursor-pointer font-semibold text-lg' onClick={()=>{navigate('/signup')}}>Get Started</button>
        </div>
      }
    </div>
  )
}

export default Navbar
