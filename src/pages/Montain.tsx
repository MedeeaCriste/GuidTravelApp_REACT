import React from 'react'
import Carusel from '../Components/Carusel.tsx'
export default function Montain() {

  let sEverest = ['/Assets/Everest1.jpg', '/Assets/Everest2.jpg', '/Assets/Everest3.jpg', '/Assets/Everest4.jpg', '/Assets/Everest5.jpg', '/Assets/Everest1.jpg']
  let sK = ['/Assets/k1.jpg', '/Assets/k2.jpg', '/Assets/k3.jpg', '/Assets/k4.jpg', '/Assets/k5.jpg', '/Assets/k6.jpg']
  let sMatterhorn = ['/Assets/Matt1.webp', '/Assets/Matt2.webp', '/Assets/Matt3.webp', '/Assets/Matt4.webp', '/Assets/Matt5.webp', '/Assets/Matt6.webp']
  let sKili = ['/Assets/Kili1.webp', '/Assets/Kili2.webp', '/Assets/Kili3.jpg', '/Assets/Kili4.jpg', '/Assets/Kili5.jpg', '/Assets/Kili6.jpg']
  let sDenali = ['/Assets/Denali1.jpg', '/Assets/Denali2.jpg', '/Assets/Denali3.jpg', '/Assets/Denali4.jpg', '/Assets/Denali5.jpg', '/Assets/Denali6.webp']
  let sAoraki = ['/Assets/Aoraki1.jpg', '/Assets/Aoraki2.jpg', '/Assets/Aoraki3.jpg', '/Assets/Aoraki4.jpg', '/Assets/Aoraki5.jpg', '/Assets/Aoraki6.jpg',]
  return (
    <div>
      <h1 className='text-left container mx-auto p-8 sm:text-2xl  text-xl font-bold text-[#1D267D]'>Let's see the best 6 places near the water!</h1>
      <Carusel
        title="1. Mount Everest"
        sImg={sEverest}
        desc="Mount Everest (Nepali: सगरमाथा, romanized: Sagarmāthā; Standard Tibetan: ཇོ་མོ་གླང་མ, romanized: Chomolungma; Chinese: 珠穆朗玛峰; pinyin: Zhūmùlǎngmǎ Fēng) is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. The China–Nepal border runs across its summit point.[2] Its elevation (snow height) of 8,848.86 m (29,031 ft 8+1⁄2 in) was most recently established in 2020 by the Chinese and Nepali authorities." />

      <Carusel
        title="K2 (Mount Godwin Austen)"
        sImg={sK}
        desc="K2, at 8,611 metres (28,251 ft) above sea level, is the second-highest mountain on Earth, after Mount Everest at 8,849 metres (29,032 ft).[3] It lies in the Karakoram range, partially in the Gilgit-Baltistan region of Pakistan-administered Kashmir and partially in the China-administered Trans-Karakoram Tract in the Taxkorgan Tajik Autonomous County of Xinjiang." />

      <Carusel
        title="3. Mount Matterhorn"
        sImg={sMatterhorn}
        desc="The Matterhorn (German:  ⓘ, Swiss Standard German: [matərˌhɔrn]; Italian: Cervino [tʃerviːno]; French: Cervin [sɛʁvɛ̃]; Romansh: Mont(e) Cervin(u))[note 3] is a mountain of the Alps, straddling the main watershed and border between Italy and Switzerland. It is a large, near-symmetric pyramidal peak in the extended Monte Rosa area of the Pennine Alps, whose summit is 4,478 metres (14,692 ft) above sea level, making it one of the highest summits in the Alps and Europe.[note 4] The four steep faces, rising above the surrounding glaciers, face the four compass points and are split by the Hörnli, Furggen, Leone/Lion, and Zmutt ridges. The mountain overlooks the Swiss town of Zermatt, in the canton of Valais, to the northeast; and the Italian town of Breuil-Cervinia in the Aosta Valley to the south. Just east of the Matterhorn is Theodul Pass, the main passage between the two valleys on its north and south sides, which has been a trade route since the Roman Era." />

      <Carusel
        title="4. Mount Kilimanjaro"
        sImg={sKili}
        desc="Mount Kilimanjaro (/ is a dormant volcano located in Kilimanjaro Region of Tanzania. It has three volcanic cones: Kibo, Mawenzi, and Shira. It is the highest mountain in Africa and the highest single free-standing mountain above sea level in the world: 5,895 m (19,341 ft) above sea level and about 4,900 m (16,100 ft) above its plateau base. It is the highest volcano in Africa and the Eastern Hemisphere.
  Kilimanjaro is the fourth most topographically prominent peak on Earth. It is part of Kilimanjaro National Park and is a major hiking and climbing destination. Because of its shrinking glaciers and ice fields, which are projected to disappear between 2025 and 2035, it has been the subject of many scientific studies."/>
      
      <Carusel
        title="5. Mount Denali"
        sImg={sDenali}
        desc="Denali ( also known as Mount McKinley, its former official name)[7] is the highest mountain peak in North America, with a summit elevation of 20,310 feet (6,190 m) above sea level. It is the tallest mountain in the world from base-to-peak on land, measuring 18,000 ft (5,500 m),[8] and Earth's highest mountain north of 43°N. With a topographic prominence of 20,194 feet (6,155 m)[3] and a topographic isolation of 4,621.1 miles (7,436.9 km),[3] Denali is the third most prominent and third-most isolated peak on Earth, after Mount Everest and Aconcagua. Located in the Alaska Range in the interior of the U.S. state of Alaska, Denali is the centerpiece of Denali National Park and Preserve."/>

      <Carusel
        title="6. Aoraki / Mount Cook"
        sImg={sAoraki}
        desc="Aoraki / Mount Cook[a] is the highest mountain in New Zealand. Its height, as of 2014, is listed as 3,724 metres (12,218 feet).[2] It sits in the Southern Alps, the mountain range that runs the length of the South Island. A popular tourist destination,[3] it is also a favourite challenge for mountain climbers. Aoraki / Mount Cook consists of three summits: from south to north, the Low Peak (3,593 m or 11,788 ft), the Middle Peak (3,717 m or 12,195 ft) and the High Peak. The summits lie slightly south and east of the main divide of the Southern Alps, with the Tasman Glacier to the east and the Hooker Glacier to the southwest.[1] Mount Cook is ranked 10th in the world by topographic isolation." />

    </div>
  )
}
