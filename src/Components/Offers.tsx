import React from 'react'
import OfferCard from './OfferCard.tsx'

export default function Offers() {
  return (
    <div className='container mx-auto p-4 lg:p-6'>
        <div className='flex justify-start items-start flex-col gap-4'>
        <p className='text-2xl lg:text-4xl text-[#1D267D] font-semibold'>The best vacation deals for 2024-2025</p>
        <p className='text-left lg:text-lg'>With our 15 years of industry experience, over 18,000 real reviews from our tourists, our reliability, excellent hotels in our portfolio, and the amazing deals we prepare for you each year, we confidently recommend ourselves. <br /> Our consultants maintain constant communication with you, providing all the information you need both before and after bookin</p>
        </div>
        <div className='grid justify-between grid-cols-1 gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3'>
        <a href="/" className="bg-[url('/public/Assets/ofertaPaste.jpg')] bg-cover hover:opacity-80 rounded-md"><OfferCard title="Easter 2024 Deals"/></a>
        <a href="/" className="bg-[url('/public/Assets/ofertaRevelion.jpg')] bg-cover hover:opacity-80 rounded-md"><OfferCard title="New Year's Eve 2025 Offers"/></a>
        <a href="/" className="bg-[url('/public/Assets/ofertaCraciun.jpg')] bg-cover hover:opacity-80 rounded-md"><OfferCard title="Christmas 2024 Deals"/></a>
        <a href="/" className="bg-[url('/public/Assets/ofertaVara.jpg')] bg-cover hover:opacity-80 rounded-md"><OfferCard title="Summer 2024 Season Offers"/></a>
        <a href="/" className="bg-[url('/public/Assets/ofertaSky.webp')] bg-cover hover:opacity-80 rounded-md"><OfferCard title="Ski Season 2025 Offers"/></a>
        <a href="/" className="bg-[url('/public/Assets/ofertaRecomandari.jpg')] bg-cover hover:opacity-80 rounded-md"><OfferCard title="Recommendations from Us"/></a>
        </div>
    </div>
  )
}
