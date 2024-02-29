import React, { useState } from 'react'
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
export default function SelectDate() {
  const [date, changeDate] = useState(new Date());

  function changeValue(val) {
     changeDate(val);
  }

  return (
     <div className='w-[300px] px-4 lg:text-sm lg:w-[400px] mx-auto 2xl:w-[600px] xl:px-12  text-xs'>
        
        <Calendar
           onChange = {changeValue}
           value = {date}
           minDate = {new Date(2022, 8, 21)} // To set minimum date
           maxDate = {new Date(2025, 12, 22)} // To set maximum date
           showWeekNumbers = {true} // TO show week numbers
           showNeighboringMonth = {true} 
           calendarType = "US" // Changing the calender type
           tileDisabled = {({ date }) => date.getDay() === 0} // Disabaling the sunday
        />

        <p>The selected date is - {date.toLocaleDateString()}</p>
     </div>
  );
}
