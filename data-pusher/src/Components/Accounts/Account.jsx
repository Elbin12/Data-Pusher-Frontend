import React, { useEffect, useState } from 'react';
import { DeleteIcon, Edit2, PlusIcon } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAccout } from '../../Features/Action';
import { reset } from '../../Features/Slice';
import AllDestinations from '../Destinations/AllDestinations';
import EditDestination from '../Destinations/EditDestination';

function Account({setSelectedAccount, setPopup, account}) {

    const [selectedDest, setSelectedDest] = useState();

    const success = useSelector(state=>state.user.success)
    const error = useSelector(state=>state.user.error)
    const dispatch = useDispatch();

    useEffect(()=>{
        if (success){
            setPopup('')
            dispatch(reset())
        }else if (error){
            console.log('error', error)
        }
    }, [success, error])

    const handleDelete = ()=> {
        dispatch(deleteAccout({id:account?.id}))
    }
    

  return (
    <>
        
            <div className=' border rounded-lg py-2 px-4 flex justify-between items-center'>
                <div className='cursor-pointer' onClick={()=>{setPopup('send_message'); setSelectedAccount(account)}}>
                    <h1 className='font-semibold text-xl'>{account?.name}</h1>
                    <h1 className='font-light'>{account?.email}</h1>
                    <h1 className='italic text-sm'>Website: <span className='not-italic'>{account?.website?account?.website:'null'}</span></h1>
                </div>
                <div className='cursor-pointer'>
                    <div className='flex gap-1 items-center' onClick={()=>{setPopup('edit'); setSelectedAccount(account)}}>
                        <Edit2 size={16}/>
                        <h1>Edit</h1>
                    </div>
                </div>
                <div className='cursor-pointer flex gap-1' onClick={()=>{setPopup('add_dest'); setSelectedAccount(account)}}>
                    <PlusIcon />
                    <h1>Add Destinations</h1>
                </div>
                <div className='cursor-pointer' onClick={()=>{setPopup('all_dests'); setSelectedAccount(account) }}>
                    <h1>Show All Destinations</h1>
                </div>
                <div className=''>
                    <div className='flex gap-1 items-center bg-red-800 px-4 rounded py-2 cursor-pointer font-semibold hover:bg-red-900' onClick={()=>{handleDelete()}}>
                        <DeleteIcon size={16}/>
                        <h1>Delete</h1>
                    </div>
                </div>
            </div>

    </>
  )
}

export default Account
