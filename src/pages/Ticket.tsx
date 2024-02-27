import React from 'react'
import Form from '../Components/Form.tsx'
import Ads from '../Components/Ads.tsx'
export default function Ticket() {
  return (
    <div className='lg:flex lg:justify-center lg:items-center p-8'>
    <div className='flex flex-col justify-center rounded-md items-center mt-4 container mx-auto border-[1px] p-4 shadow-md w-[300px] lg:w-[450px] 2xl:w-[600px] '>
      <h1 className='text-2xl text-[#1D267D] font-semibold lg:text-3xl xl:text-4xl lg:mb-8'>Rezerve a ticket</h1>
      <Form/>
    </div>

    <div className='container mx-auto p-4 lg:w-[450px] xl:w-[700px] 2xl:w-[800px] mt-4'>
    <h1 className='text-2xl 2xl:text-4xl font-semibold text-[#1D267D] mt-2 mb-4 xl:text-3xl'>Why should you choose us?</h1>
    <Ads
    titlu="Convenience and Safety"
    desc=" At our company, we are dedicated to providing travelers with full comfort and safety. We ensure that every aspect of your journey, from booking tickets to arriving at your destination, is handled with care and professionalism."
    />
    <Ads
    titlu="Flexibility and Diverse Options"
    desc="We offer a wide range of options for airplane tickets to meet the needs and preferences of every traveler. Whether you're looking for tickets for a business trip or a relaxing vacation, we have tailored solutions for everyone."/>
    <Ads
    titlu="Excellent Customer Service"
    desc="Our customer service team is always available to provide support and assistance in any way possible. Whether you have questions about your bookings or need help during your journey, we are here to assist you.    "/>
    <Ads
    titlu="Experience and Expertise"
    desc="With years of experience in the travel industry, we have the knowledge and expertise to provide you with the best advice and recommendations for your travels. No matter your destination, we are here to help you make the best choices."/>
    <Ads
    titlu="Reputation and Trust"
    desc="We have a solid reputation in the industry and are known for our high-quality services. You can trust that by booking airplane tickets with our company, you will benefit from an excellent travel experience."/>
    </div>


    </div>
  )
}
