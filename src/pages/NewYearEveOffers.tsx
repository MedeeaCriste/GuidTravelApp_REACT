import React from 'react'
import OffersDetails from '../Components/OffersDetails.tsx'
export default function NewYearEveOffers() {
  return (
    <div className='container mx-auto p-4 lg:p-8'>
      <p className='font-bold text-3xl lg:text-4xl text-left text-[#1D267D]'>Best New Year's Eve offers! Here's what you can look forward to:</p>
      <OffersDetails srcImg={"/Assets/blade5.webp"} title="Bled lake" details="As we approach the dawn of a new year, I am thrilled to extend to you an exclusive opportunity to ring in the New Year amidst the enchanting beauty of Lake Bled. Picture yourself surrounded by the pristine alpine landscapes, the crisp winter air tinged with anticipation, as you embark on a journey of celebration and serenity in one of Europe's most picturesque destinations." date="28/12/2024-3/1/2025" price="2 Persons: max price 2000$"/>
      <OffersDetails srcImg={"/Assets/mald3 1.png"} title="Maldives islands" details="As we eagerly anticipate the arrival of a new year, I am delighted to extend to you a rare opportunity to welcome the New Year amidst the unparalleled beauty of the Maldives Islands. Picture yourself surrounded by endless turquoise waters, pristine white sands, and the gentle swaying of palm trees—a scene straight out of a tropical dream." date="27/12/2024-3/1/2025" price="2 Persons: max price 2500$"/>
      <OffersDetails srcImg={"/Assets/Kili3.jpg"} title="Mount Kilimanjaro" details="As we stand on the brink of a new year, I am thrilled to extend to you an extraordinary opportunity to welcome the dawn of 20XX at the majestic Mount Kilimanjaro. Imagine standing atop the highest peak in Africa, surrounded by the breathtaking beauty of the Tanzanian landscape, as you embark on a journey of adventure and self-discovery in one of the world's most iconic destinations." date="29/12/2024-4/1/2025" price="2 Persons: max price 1500$"/>
    </div>
  )
}
