import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetAll } from '../Features/Slice';

function ProtectedRoute({children}) {

  const userDetails = useSelector(state=>state.user.userDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    if (userDetails === null || userDetails === undefined){
      dispatch(resetAll())
      navigate('/')
    }
  })
  return children;
}

export default ProtectedRoute
