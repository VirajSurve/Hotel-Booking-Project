
import './AnyTime21.css';
import {DateRangePicker} from 'react-date-range';
import { useCallback, useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {format} from 'date-fns';
const AnyTime=()=>{
  const [openDate,setOpenDate]=useState(false);
  const [date,setDate]=useState({
    startDate:new Date(),
    endDate:new Date(),
    key:'selection',
  });
  const handleChange=(ranges)=>{
    setDate(ranges.selection)
  };

 const handleClick=()=>
 {
  setOpenDate((prev)=>!prev)
 };
  return (
   <div className="cont21">
  <span onClick={handleClick} className="calender21">{`${format(date.startDate,'MMM,dd,yyyy')} to ${format(date.endDate,'MMM,dd,yyyy')}`}</span>
    {openDate && <DateRangePicker  className='dateRange21' ranges={[date]} onChange={handleChange} minDate={new Date()}/>}
   </div>
  );
}
export default AnyTime;
