import React from 'react'

export default function Banner({cImg, title, text, linkHref}:any) {
  return (
    <div className='relative'>
        <img className='w-full object-cover lg:h-[550px] h-[400px] z-0' src={cImg} alt="banner" />
        <div className='relative z-10 inset-0 max-w-[600px] lg:w-[800px] md:h-500px flex gap-4 lg:mr-10 xl:mr-20 flex-col justify-start md:mr-5 md:mt-[-50px] xl:mt-[-150px] bg-white float-end p-8 border-[2px] shadow-md items-start text-left'>
            <p className='text-xl md:text-2xl lg:text-3xl font-semibold'>{title}</p>
            <p className='lg:text-lg'>{text}</p>
            <a href={linkHref} className='bg-[#1D267D] py-2 lg:text-lg px-4 text-white font-semibold rounded-md'>Find out more</a>
        </div>
    </div>
  )
}
