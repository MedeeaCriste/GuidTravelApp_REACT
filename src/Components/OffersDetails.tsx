import React from 'react'

export default function OffersDetails({srcImg, hrefLink, title, details,date, price,}:any) {
  return (
    <div className='flex flex-col lg:flex-row lg:p-8 p-4 justify-between items-center border-[1px] shadow-md my-10 gap-4 xl:gap-0'>
        <img className='w-52 h-52 object-cover rounded-md' src={srcImg} alt="offer" />
        <div className='flex flex-col lg:justify-start justify-center gap-4 items-start text-left 2xl:max-w-[850px] xl:max-w-[650px] lg:max-w-[500px]'>
            <p className=' font-semibold text-2xl lg:text-3xl text-[#1D267D]'>{title}</p>
            <p className='lg:text-lg'>{details}</p>
            <p className='lg:text-lg text-red-700'>{date}</p>
            <p className='lg:text-lg text-green-700'>{price}</p>
        </div>
        <a className='lg:text-lg text-white bg-[#1D267D] py-2 px-4 rounded-md' href="/ticket">Reserve a ticket</a>
    </div>
  )
}
