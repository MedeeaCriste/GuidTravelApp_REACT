import React from 'react'

export default function OfferCard({title}:any) {
  return (
    <div className='min-h-[250px] max-h-[350px] text-left'>
        <p className='p-4 lg:p-8 text-xl lg:text-2xl font-semibold text-white shadow-sm'>{title}</p>
    </div>
  )
}
 