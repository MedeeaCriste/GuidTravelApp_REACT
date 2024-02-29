import React, { useState }  from 'react'
import SelectDate from '../Components/SelectDate.tsx'

export default function Form() { const [formData, setFormData] = useState({
    nume: '',
    prenume: '',
    email: '',
    number:'',
    destinatie: 'Paris',
    data1:'',
    data2:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };



  return (
    <div className="container mx-auto ">
    
      <form action="https://getform.io/f/6dBxgWa7" method="POST" className='flex flex-col justify-center items-center gap-4 lg:gap-10 2xl:gap-14 mt-4 lg:text-xl 2xl:text-2xl text-lg text-[#1D267D] '>
        <div className="input-group w-[250px] lg:w-[350px] lg:text-left border-b-[1px] 2xl:w-[500px] border-[#D4ADFC]">
          <label htmlFor="nume"></label>
          <input type="text" id="nume" name="nume" placeholder='First Name' value={formData.nume} onChange={handleChange} required />
        </div>
        <div className="input-group w-[250px] lg:w-[350px] lg:text-left border-b-[1px] 2xl:w-[500px] border-[#D4ADFC]">
          <label htmlFor="prenume"></label>
          <input type="text" id="prenume" name="prenume" placeholder='Name' value={formData.prenume} onChange={handleChange} required />
        </div>
        <div className="input-group w-[250px] lg:w-[350px] lg:text-left border-b-[1px] 2xl:w-[500px] border-[#D4ADFC]">
          <label htmlFor="email"></label>
          <input type="email" placeholder='Email' id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="input-group w-[250px] lg:w-[350px] lg:text-left border-b-[1px] 2xl:w-[500px] border-[#D4ADFC]">
          <label htmlFor="Phone"></label>
          <input type="tel" placeholder='Phone Number' id="number" name="number" value={formData.number} onChange={handleChange} required />
        </div>
        <div className="input-group flex flex-col justify-start gap-2 items-start lg:gap-6 mt-4 ">
          <label htmlFor="destinatie" className='text-2xl'>Where do you want to go ?</label>
          <select className='w-[240px] lg:w-[350px] border-[1px] rounded-md  2xl:w-[500px] border-[#D4ADFC] p-1 ' id="destinatie" name="destinatie" value={formData.destinatie} onChange={handleChange}>
            <option value=" Amazon Rainforest"> Amazon Rainforest</option>
            <option value="Black Forest">Black Forest</option>
            <option value="Daintree Rainforest">Daintree Rainforest</option>
            <option value="Tongass National Forest">Tongass National Forest</option>
            <option value="Daintree Rainforest">Daintree Rainforest</option>
            <option value="Yakushima Forest">Yakushima Forest</option>
            <option value="Muir Woods National Monument">Muir Woods National Monument</option>
            <option value=" Maldives islands"> Maldives islandst</option>
            <option value=" Bled lake"> Bled lake</option>
            <option value=" Laguna Colorada">Laguna Colorada </option>
            <option value=" Lake Louise"> Lake Louise</option>
            <option value=" Caribbean Islands"> Maldives islandst</option>
            <option value=" Lake Louise"> Lake Louise</option>
            <option value=" Mount Everest"> Mount Everest</option>
            <option value=" K2 (Mount Godwin Austen)">K2 (Mount Godwin Austen)</option>
            <option value="  Mount Matterhorn">  Mount Matterhorn</option>
            <option value="  Mount Kilimanjaro">  Mount Kilimanjaro</option>
            <option value=" Mount Denali">Mount Denali</option>
            <option value=" Aoraki / Mount Cook">Aoraki / Mount Cook</option>




          </select>
        </div>
        <div className='text-left flex  flex-col mt-4'>
        <h1 className='px-8 2xl:px-12 xl:text-2xl mb-2'>Start date: </h1>
        <div>
        <label htmlFor="data1"> <SelectDate/></label>
         

        </div>

        </div>
        <div className='text-left flex  flex-col mt-4'>
        <h1 className='px-8 2xl:px-12 xl:text-2xl mb-2'>Return date: </h1>
        <div>
        <label htmlFor="data2"> <SelectDate/></label>

        </div>
       
        </div>
        
        <button type="submit" className="btn text-white font-semibold lg:w-[250px] bg-[#1D267D] w-[150px] rounded-md p-1">Rezerve</button>
      </form>
    </div>
  );
}
  