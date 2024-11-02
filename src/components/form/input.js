
import React from 'react'

function Input({htmlFor,lableText,inputType,name,placeHolder,value,onChange}) {
  return (
    <div>
       <div className='mt-[20px]'>
              <label htmlFor={htmlFor} className='block w-[200px]'>{lableText}</label>
              <input type={inputType} name={name} placeholder={placeHolder} value={value} onChange={onChange}

              className='border-2 border-black w-[80%] px-3 py-1.5 rounded-lg' />
            </div>
    </div>
  )
}

export default Input
