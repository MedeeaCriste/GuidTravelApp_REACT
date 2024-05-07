import React from 'react'

export default function TodayOffer() {
  return (
    <div className='container mx-auto flex-col md:flex-row p-4 lg:p-8 flex justify-between items-center gap-10 my-20'>
        <img className='min-w-[350px] lg:max-6-[500px] rounded-md' src="/Assets/caraibeoffer.jpg" alt="caribbean" />
        <div className='flex justify-start items-start flex-col text-left gap-6 lg:text-lg'>
             <p className='font-semibold text-gray-700'>The best offer today </p>
             <p className='text-2xl lg:text-4xl font-bold text-[#1D267D]'>Caribbean Islands</p>
             <p>Discovering Caribbean Islands is immersing yourself in a dazzling place, rocked by the waves. Come and discover the best beach</p>
            <div className='flex justify-start items-start gap-4'>
             <p className=' text-green-700'>2 persons</p>
             <p>20.07.2024 - 30.08.2024</p>
             <p className=' text-red-700'>1500$</p>
            </div>
            <a className='lg:py-2 lg:px-4 py-1 px-2 border-[2px] border-[#1D267D] rounded-md text-[#1D267D]' href="/ticket">Rezerve a ticket</a>
        </div>
    </div>
  )
}
