import React from 'react'

export default function Visit() {
  return (
    <div className="bg-[url('/public/Assets/visit.png')] w-full md:min-h-[300px] h-fit max-h-[500px] bg-cover mt-20">
        <div className='container mx-auto p-4 lg:p-8 text-white xl:min-h-[600px] flex justify-center items-center gap-4 lg:gap-8 flex-col'>
            <p className='text-xl lg:text-3xl font-semibold'>Feel like visiting?</p>
            <p className='text:lg lg:text-xl'>Here's how you can book your trip.</p>
            <a className='py-2 px-4 text-xl lg:text-3xl border-[2px] font-semibold border-white rounded-md' href="/ticket">Rezerve a ticket</a>
        </div>
    </div>
  )
}
