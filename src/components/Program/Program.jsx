import React, { useContext } from 'react';
import { RxDownload } from "react-icons/rx";
import { GoClock } from "react-icons/go";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { TbTimeDuration45 } from "react-icons/tb";
import { IoIosLaptop } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import { CrossContext } from '../../Context/CrossContext';


function Program(program) {

    const {formatDate} = useContext(CrossContext);

    const {title, duration, startDate, endDate, startTime, endTime, mode, id} = program;
    
    
  return (
    <div className='flex flex-col items-center gap-1 px-1 py-2 border border-crossLightPurple w-250px rounded-10 text-13px hover:shadow-lg'>
      
      <Link to={`/our-courses/${id}`} className='font-semibold text-center hover:underline large:text-17px small:text-15px'>{title}</Link>

        <div className='flex items-center justify-center w-auto gap-1 px-1 border text-crossLightPurple border-crossLightPurple h-30px rounded-10'>
            <RxDownload /> Course content</div>

        <div className='flex flex-col h-auto gap-1 w-100'>
            <div className='flex items-center gap-1 w-100 text-crossLightPurple small:justify-center large:justify-start'><TbTimeDuration45 className='text-20px'/> <span className='text-crossTextGray'>Duration:</span> {duration}</div>

            <div className='items-center gap-1 large:flex w-100 small:hidden'><MdOutlineCalendarMonth className='text-20px text-crossLightPurple'/> <span>{formatDate(startDate)} - {formatDate(endDate)}</span></div>
            

            <div className='items-center gap-1 large:flex small:hidden w-100'><GoClock className='text-20px text-crossLightPurple'/> {startTime} - {endTime}</div>

            <div className='items-center gap-1 large:flex small:hidden w-100'><IoIosLaptop className='text-20px text-crossLightPurple'/> {mode}</div>
        </div>

        <div className='flex-col items-center h-auto gap-1 large:flex small:hidden w-100'>
            <div className='flex items-center justify-center w-auto gap-1 px-1 cursor-pointer text-crossLightPurple h-30px rounded-10'>Show More Dates <MdKeyboardArrowDown className='text-20px'/></div>


            <Link className='flex items-center justify-center gap-1 text-white w-200px h-30px rounded-10 bg-crossLightPurple'>Enroll Now</Link>
            <Link className='flex items-center justify-center gap-1 text-black border w-200px border-crossLightPurple h-30px rounded-10'>More details</Link>
        </div>
    </div>
  )
}

export default Program
