import React from 'react'
import Carusel from '../Components/Carusel.tsx'
export default function Forest() {


  let sAmazon = ['/Assets/Amazon1.jpg', '/Assets/Amazon2.jpg', '/Assets/Amazon3.jpg', '/Assets/Amazon4.jpg', '/Assets/Amazon5.jpg', '/Assets/Amazon6.jpg']
  let sBlack = ['/Assets/Black1.jpg', '/Assets/Black2.jpg', '/Assets/Black3.jpg', '/Assets/Black4.jpg', '/Assets/Black5.jpg', '/Assets/Black6.jpeg']
  let sTongass = ['/Assets/Ton1.jpg', '/Assets/Ton2.jpg', '/Assets/Ton3.jpg', '/Assets/Ton4.jpg', '/Assets/Ton5.jpg', '/Assets/Ton6.webp']
  let sDaintree = ['/Assets/Dai1.jpg', '/Assets/Dai2.jpg', '/Assets/Dai3.jpg', '/Assets/Dai4.jpg', '/Assets/Dai5.jpeg', '/Assets/Dai6.jpg']
  let sYakushima = ['/Assets/Yaku1.jpg', '/Assets/Yaku2.jpg', '/Assets/Yaku3.jpg', '/Assets/Yaku4.jpg', '/Assets/Yaku5.jpg', '/Assets/Yaku6.jpg']
  let sMuir = ['/Assets/Muir1.jpg', '/Assets/Muir2.jpg', '/Assets/Muir3.jpg', '/Assets/Muir4.jpg', '/Assets/Muir5.jpg', '/Assets/Muir6.jpg',]
  return (
    <div>
      <h1 className='text-left container mx-auto p-8 sm:text-2xl  text-xl font-bold text-[#1D267D]'>Let's see the best 6 places near the water!</h1>
      <Carusel
        title="1. Amazon Rainforest"
        sImg={sAmazon}
        desc="The Amazon rainforest,[a] also called Amazon jungle or Amazonia, is a moist broadleaf tropical rainforest in the Amazon biome that covers most of the Amazon basin of South America. This basin encompasses 7,000,000 km2 (2,700,000 sq mi),[2] of which 5,500,000 km2 (2,100,000 sq mi) are covered by the rainforest. This region includes territory belonging to nine nations and 3,344 formally acknowledged indigenous territories.

        The majority of the forest, 60%, is in Brazil, followed by Peru with 13%, Colombia with 10%, and with minor amounts in Bolivia, Ecuador, French Guiana, Guyana, Suriname, and Venezuela. Four nations have Amazonas as the name of one of their first-level administrative regions, and France uses the name Guiana Amazonian Park for French Guiana's protected rainforest area. The Amazon represents over half of Earth's remaining rainforests,[3] and comprises the largest and most biodiverse tract of tropical rainforest in the world, with an estimated 390 billion individual trees in about 16,000 species." />

      <Carusel
        title="2. Black Forest"
        sImg={sBlack}
        desc="The Black Forest (German: Schwarzwald [ˈʃvaʁt͡svalt] ⓘ) is a large forested mountain range in the state of Baden-Württemberg in southwest Germany, bounded by the Rhine Valley to the west and south and close to the borders with France and Switzerland.[1] It is the source of the Danube and Neckar rivers.

        Its highest peak is the Feldberg with an elevation of 1,493 metres (4,898 ft) above sea level. Roughly oblong in shape, with a length of 160 kilometres (100 miles) and breadth of up to 50 km (30 mi),[2] it has an area of about 6,009 km2 (2,320 sq mi).[1]" />

      <Carusel
        title="3. Tongass National Forest"
        sImg={sTongass}
        desc="The Tongass is the nation’s largest national forest and covers most of Southeast Alaska, surrounding the famous Inside Passage and offers unique chances to view eagles, bears, spawning salmon, and the breath-taking vistas of “wild” Alaska. Hike or take a sled-dog ride on a glacier, stroll along boardwalk trails, learn about fisheries management, fish in streams or the ocean, or relax at a remote cabin. If spying some truly wild wildlife is on your bucket list, visit the Mendenhall Glacier Visitor Center and Steep Creek Bear Viewing area in Juneau, Anan Wildlife Observatory in Wrangell, Fish Creek Bear Viewing Area in Hyder, or Pack Creek Brown Bear Viewing Area on Admiralty Island, or immerse yourself in native culture at the stunning Southeast Alaska Discovery Center, located just steps from the cruise ship docks in downtown Ketchikan.." />

      <Carusel
        title="4. Daintree Rainforest"
        sImg={sDaintree}
        desc="The Daintree Rainforest, also known as the Daintree, is a region on the northeastern coast of Queensland, Australia, about 105 km (65 mi), by road, north of the city of Cairns. Whilst the terms Daintree Rainforest and the Daintree are not officially defined, it is generally accepted and understood that they refer to the area from the Daintree River north to Cooktown, and from the coastline west to the Great Dividing Range. The popular tourist destination of Mossman Gorge, some 30 km (19 mi) south of the Daintree River, is often (and again, unofficially) included in the definition.

        At around 1,200 square kilometres (460 sq mi),[1] the Daintree is a part of the largest contiguous area of tropical rainforest in Australia, known as the Wet Tropics of Queensland. The region, along with a select number of other rainforest areas on the Australian east coast, collectively form some of the oldest extant rainforest communities in the world. At around 180 million years old, these ancient, self-sustaining forests are nearly 10 million years older than the Amazon of South America (the world’s largest rainforest and top region for biodiversity), and have witnessed dinosaurs, ice ages, and early humans all come and go."/>
      
      <Carusel
        title="5. Yakushima Forest "
        sImg={sYakushima}
        desc="Yakushima (屋久島) is one of the Ōsumi Islands in Kagoshima Prefecture, Japan. The island, 504.88 km2 (194.94 sq mi) in area, has a population of 13,178. Access to the island is by hydrofoil ferry (7 or 8 times a day from Kagoshima, depending on the season), slow car ferry (once or twice a day from Kagoshima), or by air to Yakushima Airport (3 to 5 times daily from Kagoshima, once daily from Fukuoka and once daily from Osaka). Administratively, the whole island is the town of Yakushima. The town also serves neighbouring Kuchinoerabujima. 42% of the island is within the borders of the Yakushima National Park.[2]

        Yakushima's electricity is more than 50% hydroelectric, and surplus power has been used to produce hydrogen gas in an experiment by Kagoshima University. The island has been a test site for Honda's hydrogen fuel cell vehicle research. (There are no hydrogen cars stationed on the island but electric cars are run by the municipality.)"/>

      <Carusel
        title="6. Muir Woods National Monument "
        sImg={sMuir}
        desc="Muir Woods National Monument is a United States National Monument managed by the National Park Service and named after naturalist John Muir. It is located on Mount Tamalpais near the Pacific coast in southwestern Marin County, California. The Monument is part of the Golden Gate National Recreation Area, and is 12 miles (19 km) north of San Francisco. It protects 554 acres (224 ha),[4] of which 240 acres (97 ha) are old growth coast redwood (Sequoia sempervirens) forests,[5] one of a few such stands remaining in the San Francisco Bay Area." />

    </div>
  )
}
