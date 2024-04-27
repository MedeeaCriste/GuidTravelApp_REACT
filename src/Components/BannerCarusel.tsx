import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from './Banner.tsx';
export default function BannerCarusel() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 3000,}
  return (
    <div className='mb-20'>
            <Slider {...settings}> 
            <Banner cImg={"/Assets/banner1.webp"} text="Maldives, in full Republic of Maldives, also called Maldive Islands, independent island country in the north-central Indian Ocean. It consists of a chain of about 1,200 small coral islands and sandbanks (some 200 of which are inhabited), grouped in clusters, or atolls." title="Maldives islands" linkHref={"/sea"}/>
            <Banner cImg={"/Assets/banner2.jpg"} text="The Amazon rainforest,[a] also called Amazon jungle or Amazonia, is a moist broadleaf tropical rainforest in the Amazon biome that covers most of the Amazon basin of South America. This basin encompasses 7,000,000 km2 (2,700,000 sq mi),[2] of which 5,500,000 km2 (2,100,000 sq mi) are covered by the rainforest. This region includes territory belonging to nine nations and 3,344 formally acknowledged indigenous territories." title=" Amazon Rainforest" linkHref={"/forest"}/>
            <Banner cImg={"/Assets/banner3.webp"} text="Mount Everest (Nepali: सगरमाथा, romanized: Sagarmāthā; Standard Tibetan: ཇོ་མོ་གླང་མ, romanized: Chomolungma; Chinese: 珠穆朗玛峰; pinyin: Zhūmùlǎngmǎ Fēng) is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. The China–Nepal border runs across its summit point.[2] Its elevation (snow height) of 8,848.86 m (29,031 ft 8+1⁄2 in) was most recently established in 2020 by the Chinese and Nepali authorities." title="Mount Everest" linkHref={"/montain"}/>
            </Slider>
    </div>
  )
}
