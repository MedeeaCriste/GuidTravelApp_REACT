import React from 'react'
import OffersDetails from '../Components/OffersDetails.tsx'

export default function SummerOffers() {
  return (
    <div className='container mx-auto p-4 lg:p-8'>
            <p className='font-bold text-3xl lg:text-4xl text-left text-[#1D267D]'>Best Summer offers! Here's what you can look forward to:</p>
            <OffersDetails srcImg={"/Assets/Caraibe4.jpg"} title="Caribbean Islands" details="As the warmth of summer approaches, I am thrilled to extend to you an exclusive invitation to embark on a tropical adventure amidst the idyllic Caribbean Islands. Picture yourself surrounded by pristine beaches, crystal-clear waters, and swaying palm trees—a paradise waiting to be explored." date="24/6/2024-30/6/2024" price="2 Persons: max price 2000$"/>
            <OffersDetails srcImg={"/Assets/mald3 1.png"} title="Maldives islands" details="As the summer sun beckons, I am thrilled to extend to you an exclusive invitation to experience the epitome of paradise in the Maldives Islands. Imagine yourself surrounded by pristine white sands, crystal-clear turquoise waters, and swaying palm trees—a tropical haven waiting to be explored." date="4/8/2024-14/8/2024" price="2 Persons: max price 2500$"/>
            <OffersDetails srcImg={"/Assets/Moraine2.jpg"} title="Moraine Lake" details="As summer approaches, I am delighted to extend to you an exclusive invitation to experience the unparalleled beauty of Moraine Lake in the heart of the Canadian Rockies. Imagine yourself surrounded by towering snow-capped peaks, shimmering turquoise waters, and lush alpine meadows—a wilderness sanctuary waiting to be explored." date="12/7/2024-19/7/2024" price="2 Persons: max price 1500$"/>
            <OffersDetails srcImg={"/Assets/Matt3.webp"} title="Mount Matterhorn" details="As the summer sun graces the Swiss Alps with its warmth, I am thrilled to extend to you an exclusive invitation to experience the majestic beauty of Mount Matterhorn. Imagine yourself surrounded by towering peaks, verdant meadows, and the crisp alpine air—a haven of tranquility waiting to be explored." date="5/5/2024-10/6/2024" price="2 Persons: max price 1000$"/>
    </div>
  )
}
