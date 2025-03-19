import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { accountsList } from '../../Features/Action';
import Account from './Account';
import AddAccount from './AddAccount';
import EditAccount from './EditAccount';
import AddDestination from '../Destinations/AddDestination';
import SendMessage from '../SendMessage';
import AllDestinations from '../Destinations/AllDestinations';
import EditDestination from '../Destinations/EditDestination';

function Accounts() {

    const [popup, setPopup] = useState('');
    const [selectedDest, setSelectedDest] = useState('');

    const pending = useSelector(state=>state.user.pending);
    const accounts = useSelector(state=>state.user.accounts);

    const [selectedAccount, setSelectedAccount] = useState();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(accountsList())
    }, [])

    console.log(accounts, 'accountss   kx');
    

  return (
    <div className='h-screen bg-black text-white px-32 relative'>
      {popup == 'add'?
        <AddAccount setPopup={setPopup}/>
          :
        popup=='edit'?
        <EditAccount account={selectedAccount} setPopup={setPopup}/>
          :
        popup == 'add_dest'?
        <AddDestination account={selectedAccount} setPopup={setPopup}/>
          :
        popup == 'send_message'?
          <SendMessage account={selectedAccount} setPopup={setPopup}/>
          :
          popup==='all_dests'?
            <AllDestinations setSelectedDest={setSelectedDest} setDestPopup={setPopup} account={selectedAccount}/>
            :
          popup==='edit_dest'?
            <EditDestination destination={selectedDest} setDestPopup={setPopup}/>
            :
        <div className='space-y-9'>
          <div className='flex justify-between pt-14 w-3/4'>
            <h1 className='text-3xl'>Accounts</h1>
            <button className='bg-violet-950 px-4 py-2 rounded-lg' onClick={()=>{setPopup('add')}}>Add Account</button>
          </div>
          {pending?
            <div className="w-3/4 flex justify-center min-h-screen">
              <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
            </div>

            :

            <div className=' w-3/4 space-y-4 '>
              {accounts?.map((account, index)=>(
                  <Account setSelectedAccount={setSelectedAccount} setPopup={setPopup} key={index} account={account}/>
              ))}
            </div>
          }
        </div> 
      }
    </div>
  )
}

export default Accounts
