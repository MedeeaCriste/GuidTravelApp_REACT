import React from 'react'
import OffersDetails from '../Components/OffersDetails.tsx'
export default function ChristmasOffers() {
  return (
    <div className='container mx-auto p-4 lg:p-8'>
      <p className='font-bold text-3xl lg:text-4xl text-left text-[#1D267D]'>Best Christmas offers! Here's what you can look forward to:</p>
      <OffersDetails srcImg={"/Assets/Denali3.jpg"} title="Mount Denali" details="As the festive season draws near, I am delighted to extend to you an exclusive invitation to experience the magic of Christmas amidst the awe-inspiring beauty of Mount Denali. Nestled in the heart of Alaska's wilderness, Mount Denali promises a holiday retreat like no other, where snow-capped peaks, pristine forests, and the spirit of the season converge to create unforgettable memories." date="23/12/2024-28/12/2024" price="2 Persons: max price 2000$"/>
      <OffersDetails srcImg={"/Assets/Aoraki2.jpg"} title="Aoraki / Mount Cook" details="As the holiday season approaches, I am thrilled to extend to you a unique invitation to experience the wonder of Christmas amidst the breathtaking beauty of Aoraki / Mount Cook. Set against the backdrop of New Zealand's Southern Alps, Aoraki / Mount Cook offers a picturesque retreat where snow-capped peaks, pristine lakes, and alpine meadows converge to create an enchanting holiday wonderland." date="23/12/2024-28/12/2024" price="2 Persons: max price 1000$"/> 
    </div>
  )
}
