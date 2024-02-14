import React from 'react'
import { useState } from 'react';

export default function NavbarDsktop() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  return (
    <div className='container mx-auto p-8 '>
    <div className=' flex justify-between items-center gap-5'>
        <img className='w-[150px] xl:w-[200px] ' src="/Assets/logotext.png" alt="logo" />
        <div className='flex gap-4 justify-center items-center'>
            <button className='border-2 border-[#1D267D] rounded-md p-[4px] text-[#1D267D] xl:text-xl font-semibold '><a href=""></a>Rezerve a ticket</button>
            <button className='bg-[#1D267D] xl:text-xl p-[4px] w-28 font-semibold rounded-md text-white'><a href=""></a>About us</button>
            <div className='flex justify-center items-center'>
            <a className='text-[#1D267D] xl:text-xl font-semibold' href="">Where do you wanna go?</a>
            <img onClick={toggleMenu} className='w-[15px]' src="/Assets/arrowmen.png" alt="menu" />
          
            
            </div>
        </div>
        
    </div>
    {isOpen && (
                <div className="bg-[#1D267D] mt-[-16px]  p-4 rounded-md w-[28%] lg:w-[21%] xl:w-[17%] text-md font-semibold float-end ">
                    <ul className="space-y-2 ">
                        <li className=' p-2'><a href="#" className="text-white  ">To the montains</a></li>
                        <li className=' p-2'><a href="#" className="text-white ">To the sea</a></li>
                        <li className=' p-2'><a href="#" className="text-white ">To the forest</a></li>

                    </ul>
                </div>
            )}
    <div className='border-b-[1px] w-[90%] mt-4 text-center mx-auto'></div>
    
    </div>
  )
}
