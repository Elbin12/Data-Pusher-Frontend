import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import InputField from './../Login/InputField';
import { CircleX } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { createAccout } from '../../Features/Action';
import { reset } from '../../Features/Slice';

function AddAccount({role, account, setPopup }) {

    const success = useSelector(state=>state.user.success)
    const error = useSelector(state=>state.user.error)
    const pending = useSelector(state=>state.user.pending)
    const dispatch = useDispatch();

    useEffect(()=>{
        if (success){
            setPopup('');
            dispatch(reset())
        }else if(error){
            console.log(error, 'error')
        }
    }, [success, error])

  const {
    register: AccountCreate,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    if (role === 'add'){
      dispatch(createAccout(data));
    }else if(role === 'edit'){
      dispatch()
    }
  };

  return (
    <div className="w-3/4 flex justify-center items-center pt-20 absolute">
      <div className="w-3/5 bg-[#2b323d4a]">
        <div className="w-full flex justify-end p-3">
          <CircleX className="text-white cursor-pointer" onClick={() => setPopup('')} />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center space-y-6 pb-9">
          <h1 className="text-xl">Create an account</h1>

          <div className="w-full flex flex-col items-center gap-2">
            <div className="w-full flex flex-col items-center">
              <InputField label="Email" type="email"
                {...AccountCreate('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Enter a valid email',
                  },
                })}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className="w-full flex flex-col items-center">
              <InputField label="Name" type="text"
                {...AccountCreate('name', { required: 'Name is required' })}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <InputField label="Website" type="text"/>
          </div>

          <div className='bg-violet-950 w-1/2 py-2 rounded-lg text-white flex justify-center gap-2 items-center'>
            <button type="submit" className='w-full' >Create</button>
            {pending&&
                <div className='w-5 h-5 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin'></div>
            }
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddAccount;
