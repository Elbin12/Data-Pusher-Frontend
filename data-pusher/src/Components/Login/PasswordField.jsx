import React, { useState, forwardRef } from 'react'
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';


const PasswordField = forwardRef(({label, ...rest}, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    
  return (
    <div className='flex flex-col gap-1'>
        <label className='text-stone-100 font-light'>{label}</label>
        <button type='button' className='w-1/2 text-black px-2 rounded py-2 bg-white flex justify-between'>
            <input type={showPassword?'text':'password'} {...rest} ref={ref} className='outline-none bg-transparent w-3/4'/>
            {showPassword?
                <Eye size={20} onClick={()=>{setShowPassword(!showPassword)}}/>
                :
                <EyeOff size={20} onClick={()=>{setShowPassword(!showPassword)}}/>
            }
        </button>
    </div>
  )
});

export default PasswordField
