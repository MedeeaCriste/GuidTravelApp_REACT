import React from 'react'

export default function Content() {
  return (
    <div className='container mx-auto p-4 flex flex-col md:p-8 '>
      <div className='md:flex md:justify-between md:items-center'>
        <div className='flex flex-col justify-start items-start gap-4 xl:gap-8 '>
          <h1 className='text-xl lg:text-3xl xl:text-4xl text-[#1D267D] font-semibold 2xl:text-5xl'>Find out a few things about us!</h1>
          <p className='text-start text-md lg:text-xl xl:text-2xl 2xl:text-3xl  text-[#1D267D] md:w-[700px]'>We are here to help you find the most beautiful places in the whole world! <br/>
          It doesn't matter where they are, whether they are at the sea, in the mountains or on the most beautiful hills and plains, we bring them to you then you can rezerve a ticket!</p>
        </div>
        <img className='mt-[15px] md:w-[200px] lg:w-[420px] xl:w-[480px] 2xl:w-[530px]' src="/Assets/image1.png" alt="" />
      </div>
    </div>
  )
}
