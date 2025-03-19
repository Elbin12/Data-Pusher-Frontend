import React, { forwardRef } from 'react'

const InputField = forwardRef(({label, type, placeholder, ...rest}, ref) => {

  return (
    <div className='flex flex-col gap-1 w-1/2'>
        <label className='text-stone-100 font-light'>{label}</label>
        <input type={type} {...rest} ref={ref} placeholder={placeholder} className='rounded py-2 outline-none text-black px-2 w-full'/>
    </div>
  )
});

export default InputField;  
