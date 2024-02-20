import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (

        <div className='container mx-auto p-4'>

            <div className="md:hidden flex justify-between items-center ">
                <img className='w-[120px]' src="/Assets/logotext.png" alt="logo" />
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    <img className='w-4 h-4' src="Assets/hambmenu.png" alt="logo" />
                </button>
            </div>


            {isOpen && (
                <div className="md:hidden bg-white p-4 mt-4 text-md font-semibold ">
                    <ul className="space-y-2 ">
                        <li className='w-[100%] border-b-[1px] p-2'><a href="/ticket" className="text-[#1D267D]  ">Rezerve a ticket</a></li>
                        <li className='w-[100%] border-b-[1px] p-2'><a href="#aboutus" className="text-[#1D267D]  ">About us</a></li>
                        <li className='w-[100%] border-b-[1px] p-2'><a href="#cards" className="text-[#1D267D] ">Where do you wanna go?</a></li>
                        
                    </ul>
                </div>
            )}

        </div>
    )
}
