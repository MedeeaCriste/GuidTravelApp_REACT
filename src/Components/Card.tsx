import React from 'react'
import { Link } from 'react-router-dom'
export default function Card({titlu,descriere,srcImg,link}) {
  return (
    <div className="flex flex-col items-center justify-center bg-[#1D267D] rounded-md  h-[250px] sm:h-[300px] xl:h-[400px] gap-2 2xl:gap-6"> 
    
    <img className=' w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] p-2 lg:w-[90px] lg:h-[90px] xl:w-[120px] xl:h-[120px] ' src={srcImg} alt='' />
    <div className='flex flex-col items-start 2xl:gap-2'>
    <h1 className=" text-white font-semibold sm:text-xl text-left pl-4 lg:text-lg xl:text-2xl ">{titlu}</h1>
    <p className=" text-white text-sm text-left pl-4 pr-2 sm:text-lg lg:text-base lg:pb-1 ">{descriere}</p>
   
    </div>
    <Link to={link} className='w-[100px] p-2 bg-white rounded-md text-[#1D267D] font-semibold xl:text-xl xl:w-[150px]'>Gon now!</Link>

</div>
  )
}
