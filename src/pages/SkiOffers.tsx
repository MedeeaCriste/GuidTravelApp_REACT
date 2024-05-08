import React from 'react'
import OffersDetails from '../Components/OffersDetails.tsx'

export default function SkiOffers() {
  return (
    <div className='container mx-auto p-4 lg:p-8'>
          <p className='font-bold text-3xl lg:text-4xl text-left text-[#1D267D]'>Best Ski offers! Here's what you can look forward to:</p>
          <OffersDetails srcImg={"/Assets/Everest2.jpg"} title="Mount Everest" details="As the snow blankets the peaks of the Himalayas, I am thrilled to extend to you an exclusive invitation to embark on the ultimate ski adventure at Mount Everest. Picture yourself surrounded by the awe-inspiring beauty of the world's highest mountain, as you carve through pristine powder and conquer the heights in one of the most exhilarating skiing experiences on earth." date="05/12/2024" price="2 Persons: max price 1500$"/>
          <OffersDetails srcImg={"/Assets/k1.jpg"} title="K2 (Mount Godwin Austen)" details="As the snow blankets the towering peaks of the Karakoram Range, I am thrilled to extend to you an exclusive invitation to embark on the ultimate ski adventure at K2, also known as Mount Godwin Austen. Imagine yourself surrounded by the breathtaking beauty of the world's second-highest mountain, carving through pristine powder and conquering the heights in one of the most exhilarating skiing experiences on the planet." date="18/2/2025-27/2/2025" price="2 Persons: max price 1000$"/>

    </div>
  )
}
