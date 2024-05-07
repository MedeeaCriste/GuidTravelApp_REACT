import React, { useState, useEffect } from 'react';
const ScrollNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) { 
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div className="w-full z-50 bg-[#1D267D] fixed top-0 hidden lg:block ">
             <ul className="text-white shadow-md flex justify-start gap-16 text-xl items-center lg:p-8 p-4 container mx-auto">
                        <a href="/"><img className='w-[120px] bg-white py-2 rounded-md shadow-lg px-4' src="/Assets/logotext.png" alt="logo" /></a>
                        <li><a href="/ticket">Rezerve a ticket</a></li>
                        <li><a href="#aboutus">About us</a></li>
                        <li><a href="/#cards" className="text-white">Where do you wanna go?</a></li>
                    </ul>
        </div>
      )}
    </div>
  );
};

export default ScrollNavbar;