import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Carusel({sImg,title,desc}) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 3000, 
        
        responsive: [
            {
              breakpoint: 1024, // Pentru dispozitive cu lățime mai mică sau egală cu 1024px (tablete)
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 768, // Pentru dispozitive cu lățime mai mică sau egală cu 768px (telefoane)
              settings: {
                slidesToShow: 1,
              }
            }
          ]
        };
      return (
        <div className='lg:flex lg:flex-col lg:justify-start lg:items-start lg:container lg:mx-auto mt-4 '>
            <h1 className='lg:p-8 font-semibold text-[#1D267D] text-xl lg:text-2xl'>{title}</h1>
        <div className='p-8 slider-container lg:max-w-[100%] xl:max-w-[70%]'>
   
        <Slider {...settings} >
            { sImg.map((element, i)=>{
                return <SliderElement key={element + i} imgS={element} imgAlt={`image ${i}`} />
            }) }
        </Slider>
      
        </div>
            <p className='xl:text-xl text-left p-8 text-[#1D267D]'>{desc}</p>
        </div>
      );
    }

function SliderElement({imgS, imgAlt}){

    return (
        <div className='px-4 xl:px-8'>
            <img className='w-[100%] h-[400px] lg:max-w-[800px] lg:max-h-[350px] object-cover' src={imgS} alt={imgAlt} />
        </div>
    )
}