import React from 'react'
import Card from './Card.tsx'
import Offers from './Offers.tsx'
import BannerCarusel from './BannerCarusel.tsx'
import Restaurants from './Restaurants.tsx'
import Visit from './Visit.tsx'
import TodayOffer from './TodayOffer.tsx'
export default function Content() {
  return (
    <div>
    <div className='container mx-auto p-4 flex flex-col md:p-8 '>
      <div className='lg:flex lg:justify-between lg:items-center mb-20'>
        <div id='aboutus' className='flex flex-col justify-start items-start gap-4 xl:gap-8 '>
          <h1 className='text-xl lg:text-3xl xl:text-4xl text-[#1D267D] font-semibold 2xl:text-5xl sm:text-3xl'>Find out a few things about us!</h1>
          <p className='text-start sm:text-xl text-md lg:text-xl xl:text-2xl 2xl:text-3xl md:w-[700px]'>We are here to help you find the most beautiful places in the whole world! <br/>
          It doesn't matter where they are, whether they are at the sea, in the mountains or on the most beautiful hills and plains, we bring them to you then you can rezerve a ticket!</p>
        </div>
        <img className='mt-[15px] max-w-[300px] md:max-w-[500px]' src="/Assets/image1.png" alt="" />
      </div>
      <div id='cards' className=' mt-4 p-4 md:p-8 flex justify-between items-center flex-col gap-4 lg:gap-8 lg:flex-row '>
      <Card
            srcImg={"/Assets/forest.png"}
            titlu="Let's go to the forest!"
            descriere="Click here to see the top 6 locations located on the most beautiful hills and plains in the world!"
            link={"/forest"}
          />
        
        <Card
            srcImg={"/Assets/sea.png"}
            titlu="Let's go to the sea!"
            descriere="Click here to see the top 6 locations located on the most beautiful beaches, rivers and lakes !"
            link={"/sea"}
          />

         <Card
            srcImg={"/Assets/montain.png"}
            titlu="Let's go to the mountains!"
            descriere="Click here to see the top 6 locations located on the most beautiful mountains in the world!"
            link={"/montain"}
          />
      </div>
        <Offers/>
        </div>
        <BannerCarusel/>
        <Restaurants/>
        <Visit/>
        <TodayOffer/>
    </div>
  )
}
