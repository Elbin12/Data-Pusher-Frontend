import { CircleX, Delete, Edit2, Link } from 'lucide-react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteDestination } from '../../Features/Action';

function AllDestinations({setSelectedDest, setDestPopup, account}) {

  const dispatch = useDispatch();

  const handleDestDelete = (id)=>{
    dispatch(deleteDestination({id:id, account:account?.id}))
  }
  
  return (
    <div className=' w-3/5 absolute border space-y-6 rounded-lg px-4 py-3'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-semibold'>All Destinations</h1>
        <CircleX className="text-white cursor-pointer" onClick={() => setDestPopup('')} />
      </div>
      <div className='flex flex-col gap-4 px-3'>
        {account?.destinations?.length !== 0?
          account?.destinations?.map((destination, index)=>(
            <div className='space-y-2' key={index}>
              <div className='flex gap-6 items-center'>
                <div className='flex items-center gap-2'>
                  <Link size={18}/>
                  <h1 className='font-semibold'>{destination?.url}</h1>
                </div>
                <p className='font-semibold'>{destination.http_method}</p>
              </div>
              <div className='flex gap-4'>
                <button onClick={()=>{setSelectedDest(destination); setDestPopup('edit_dest')}} className='flex gap-1 items-center border px-3 rounded hover:border-violet-800 hover:text-violet-800'> <Edit2 size={14}/> Edit</button>
                <Delete className='cursor-pointer hover:text-red-700' onClick={()=>{handleDestDelete(destination?.id);}}/>
              </div>
            </div>
          ))
          :
          <h1>No destinations</h1>
        }
      </div>
    </div>
  )
}

export default AllDestinations
