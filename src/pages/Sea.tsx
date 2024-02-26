import React from 'react'
import Carusel from '../Components/Carusel.tsx'
export default function Sea() {

  let sMaldive = ['/Assets/mald1 1.png', '/Assets/mald2 1.png', '/Assets/mald3 1.png', '/Assets/maldive-4.jpg','/Assets/maldive-5.webp','/Assets/maldive-6.webp']
  let sBlade = ['/Assets/Blake1.png','/Assets/Blake2.png', '/Assets/Blake3.png', '/Assets/Blade4.webp', '/Assets/blade5.webp', '/Assets/Blade6.jpg']
  let sMoraine = ['/Assets/Moraine1.webp', '/Assets/Moraine2.jpg', '/Assets/Moraine3.jpg', '/Assets/Moraine4.jpg' , '/Assets/Moraine5.jpg', '/Assets/Moraine6.jpg']
  let sColorada = ['/Assets/Colorada1.webp', '/Assets/Colorada2.jpg', '/Assets/Colorada3.jpg', '/Assets/Colorada5.jpg', '/Assets/Colorada4.webp']
  let sLouise = ['/Assets/Louise1.jpg', '/Assets/Louise2.jpg', '/Assets/Louise3.webp', '/Assets/Louise5.jpg', '/Assets/Louise4.jpg','/Assets/Louise6.jpg']
  let sCaraibe=['/Assets/Caraibe1.jpg', '/Assets/Caraibe2.jpg', '/Assets/Caraibe3.jpg', '/Assets/Caraibe4.jpg', '/Assets/Caraibe5.jpg', '/Assets/Caraibe6.jpg',]
  return (
    <div>
      <h1 className='text-left container mx-auto p-8 sm:text-2xl  text-xl font-bold text-[#1D267D]'>Let's see the best 6 places near the water!</h1>
      <Carusel
    title="1. Maldives islands"
    sImg={sMaldive}
    desc="Maldives, in full Republic of Maldives, also called Maldive Islands, independent island country in the north-central Indian Ocean. It consists of a chain of about 1,200 small coral islands and sandbanks (some 200 of which are inhabited), grouped in clusters, or atolls.
    <br/>
    The islands extend more than 510 miles (820 km) from north to south and 80 miles (130 km) from east to west. The northernmost atoll is about 370 miles (600 km) south-southwest of the Indian mainland, and the central area, including the capital island of Male (Male’), is about 400 miles (645 km) southwest of Sri Lanka."/>

<Carusel
    title="2. Bled lake"
    sImg={sBlade}
    desc="Bled is located on the southern foot of the Karawanks mountain range near the border with Austria, about 50 km (31 mi) northwest of the national capital of Ljubljana. South of Lake Bled are the densely forested Pokljuka and Jelovica plateaus and the easternmost parts of the Julian Alps, where the Sava Bohinjka river and the parallel Bohinj Railway lead to the Bohinj basin, Lake Bohinj, and the Triglav massif.
    A number of rises (Grad 599 m, Straža 646 m, Kozarca 558 m, Osojnica 756 m, and Ravnica 729 m) separate the localities of Bled around the lake, the former villages of Grad, Mlino, Rečica, Zagorice, and Želeče.
    The lake is 2.12 kilometres (1.32 mi) long and 0.5 to 1 kilometre (0.31 to 0.62 mi) wide. In summer, the surface water reaches 25 °C (77 °F) and retains a temperature up to 18 °C (64 °F) until autumn. As such, it is suitable for swimming. During colder winters, the entire lake freezes and can be used for ice skating; the island can then be reached on foot."/>

<Carusel
    title="3. Moraine Lake"
    sImg={sMoraine}
    desc="Moraine Lake is a glacially fed lake in Banff National Park, 14 kilometres (8.7 mi) outside the hamlet of Lake Louise, Alberta, Canada. It is situated in the Valley of the Ten Peaks, at an elevation of approximately 1,884 metres (6,181 ft). The lake has a surface area of 50 hectares (120 acres).

    The lake, being glacially fed, does not reach its crest until middle to late June. When it is full, it reflects a distinctive shade of azure blue. The unique colour is due to the refraction of light off the rock flour deposited in the lake on a continual basis by surrounding glaciers."/>

<Carusel
    title="4. Laguna Colorada"
    sImg={sColorada}
    desc="The lake contains borax islands, whose white color contrasts with the reddish color of its waters, which is caused by red sediments and pigmentation of some algae. Laguna Colorada is part of the Los Lípez (formerly Laguna Colorada) Ramsar wetland. It was listed as a Ramsar Wetland of International Importance in 1990. On, July 13, 2009, the site was expanded from 513.18 to 14,277.17 km2 (5,512.45 sq mi) to include the surrounding high Andean endorheic, hypersaline and brackish lakes and associated wetlands (known as bofedales)."/>
<Carusel
    title="5. Lake Louise"
    sImg={sLouise}
    desc="Lake Louise (named Ho-run-num-nay (Lake of the Little Fishes) by the Stoney Nakota First Nations people)[1][2] is a glacial lake within Banff National Park in Alberta, Canada. Situated 11 km (6.8 mi) east of the border with British Columbia, Lake Louise is located 5 km (3.1 mi) west of the hamlet of Lake Louise and the Trans-Canada Highway (Highway 1).

    Lake Louise is named after the Princess Louise Caroline Alberta (1848 1939),[3] the fourth daughter of Queen Victoria and the wife of the Marquess of Lorne, who was the Governor General of Canada from 1878 to 1883.."/>

<Carusel
    title="6. Caribbean Islands"
    sImg={sCaraibe}
    desc="The Caribbean Islands is a massive archipelago located in the Caribbean Sea, that can be subdivided into a few different regions: the Lucayan Archipelago, the Greater Antilles, the Lesser Antilles and the ABC Islands. There are 13 sovereign states and 17 dependent territories in the Caribbean, and the predominant languages are English, Spanish, French, Dutch and Antillean creole. The Caribbean sprawls across more than 1.06 million square miles and is primarily located between North America and South America."/>

    </div>
  )
}
