import React from 'react'

export default function Restaurants() {
  return (
    <div className='container mx-auto p-4 lg:p-8 mt-10'>
        <p className='mb-10 text-left text-2xl lg:text-3xl font-semibold text-[#1D267D]'>The best restaurants for your trip</p>
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-between gap-8 text-white text-xl lg:text-2xl font-semibold text-left'>
            <a href="https://www.tripadvisor.com/Hotel_Review-g4171801-d316973-Reviews-Meeru_Maldives_Resort_Island-Meerufenfushi.html" className="bg-[url('/public/Assets/reastaurantMaldive.webp')] max-w-[550px] min-h-[300px] bg-cover p-4 hover:opacity-80 rounded-md">Best restaurants in Maldive</a>
            <a href="https://www.tripadvisor.com/Restaurants-g1603627-Nueva_Loja_Sucumbios_Province.html" className="bg-[url('/public/Assets/restaurantAmazon.jpg')] max-w-[480px] min-h-[300px] bg-cover lg:mt-40 p-4 hover:opacity-80 rounded-md">Best restaurants in Amazon Rain Forest</a>
            <a href="https://www.tripadvisor.com/HotelsNear-g424956-d320286-Mount_Everest-Sagarmatha_National_Park_Sagarmatha_Zone_Eastern_Region.html" className="bg-[url('/public/Assets/restaurantEverest.jpg')] max-w-[550px] min-h-[300px] bg-cover p-4 hover:opacity-80 rounded-md">Best restaunts in Mount Everest</a>
            <a href="https://www.tripadvisor.com/Restaurants-g3532482-Kilimanjaro_Region.html" className="bg-[url('/public/Assets/restaurantKili.jpg')] max-w-[480px] min-h-[300px] bg-cover p-4 hover:opacity-80 rounded-md">Best restaurants in Kilimanjaro</a>
            <a href="https://www.tripadvisor.com/Restaurants-g317033-Uyuni_Potosi_Department.html" className="bg-[url('/public/Assets/restaurantLaguna.jpg')] max-w-[550px] min-h-[300px] bg-cover p-4 hover:opacity-80 rounded-md">Best restaurants in Laguna Colorada</a>
        </div>
    </div>
  )
}
