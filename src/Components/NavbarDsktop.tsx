import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function NavbarDesktop() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='container mx-auto p-8 relative'>
      <div className=' flex justify-between items-center gap-5'>
        <img className='w-[150px] xl:w-[200px] ' src="/Assets/logotext.png" alt="logo" />
        <div className='flex gap-4 justify-center items-center'>
          <button className='border-2 border-[#1D267D] rounded-md p-[6px] text-[#1D267D] xl:text-xl font-semibold '><a href="/ticket">Rezerve a ticket</a></button>
          <button className='bg-[#1D267D] xl:text-xl p-[4px] w-28 font-semibold rounded-md text-white'><a href="#aboutus">About us</a></button>
          <div className='flex justify-center items-center'>
            <a className='text-[#1D267D] xl:text-xl font-semibold' href="">Where do you wanna go?</a>
            {isOpen ? (
              <svg onClick={toggleMenu} className='w-[15px] text-[#1D267D]' fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg onClick={toggleMenu} className='w-[15px] text-[#1D267D]' fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="bg-[#1D267D] absolute right-8 mt-[-16px]  p-4 rounded-md w-[28%] lg:w-[21%] xl:w-[17%] text-md font-semibold float-end ">
          <ul className="space-y-2 ">
            <li className=' p-2'><a href="/montain" className="text-white ">To the mountains</a></li>
            <li className=' p-2'><a href="/sea" className="text-white ">To the sea</a></li>
            <li className=' p-2'><a href="/forest" className="text-white ">To the forest</a></li>
          </ul>
        </div>
      )}
      <div className='border-b-[1px] w-[90%] mt-4 text-center mx-auto'></div>
    </div>
  );
}
