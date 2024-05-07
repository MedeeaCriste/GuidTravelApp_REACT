import React from 'react'

export default function Restaurants() {
  return (
    <div className='container mx-auto p-4 lg:p-8 mt-5'>
        <p className='mb-16 text-left text-2xl lg:text-3xl font-semibold text-[#1D267D]'>The best restaurants for your trip</p>
        <div className='flex flex-col lg:flex-row justify-center items-center lg:justify-between gap-4 text-white text-xl lg:text-2xl font-semibold text-left'>
            <div className='flex flex-col gap-10'>
            <a href="https://www.tripadvisor.com/Hotel_Review-g4171801-d316973-Reviews-Meeru_Maldives_Resort_Island-Meerufenfushi.html" className="min-h-[350px] min-w-[350px] xl:w-[600px] bg-[url('/public/Assets/reastaurantMaldive.webp')] bg-cover p-4 hover:opacity-80 rounded-md">Best restaurants in Maldive</a>
            <a href="https://www.tripadvisor.com/Restaurants-g1603627-Nueva_Loja_Sucumbios_Province.html" className="min-h-[350px]  min-w-[350px] xl:w-[600px] bg-[url('/public/Assets/restaurantAmazon.jpg')] bg-cover p-4 hover:opacity-80 rounded-md">Best restaurants in Amazon Rain Forest</a>
            <a href="https://www.tripadvisor.com/HotelsNear-g424956-d320286-Mount_Everest-Sagarmatha_National_Park_Sagarmatha_Zone_Eastern_Region.html" className="min-h-[350px]  min-w-[350px] xl:w-[600px] bg-[url('/public/Assets/restaurantEverest.jpg')] bg-cover p-4 hover:opacity-80 rounded-md">Best restaunts in Mount Everest</a>
            </div>

            <div className='flex flex-col gap-10'>
            <a href="https://www.tripadvisor.com/Restaurants-g3532482-Kilimanjaro_Region.html" className="min-h-[350px]  min-w-[350px] xl:w-[600px] bg-[url('/public/Assets/restaurantKili.jpg')] bg-cover p-4 hover:opacity-80 rounded-md">Best restaurants in Kilimanjaro</a>
            <a href="https://www.tripadvisor.com/Restaurants-g317033-Uyuni_Potosi_Department.html" className="min-h-[350px]  min-w-[350px] xl:w-[600px] bg-[url('/public/Assets/restaurantLaguna.jpg')] bg-cover p-4 hover:opacity-80 rounded-md">Best restaurants in Laguna Colorada</a>
            </div>
           </div>
    </div>
  )
}
