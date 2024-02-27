import React from 'react'

export default function Ads({desc,titlu}) {
  return (
    <div className='flex flex-col justify-start gap-2 mt-2 items-start text-left text-[#1D267D] xl:mt-8'>
        <div className='flex justify-start items-center gap-1 text-lg font-semibold xl:text-2xl'>
            <img src="/Assets/check.png" alt="check" className='w-4' />
            <h1>{titlu}</h1></div>
        
        <p className='xl:text-lg'>{desc}</p>
    </div>
  )
}
