import React, { useContext, useState } from 'react';
import { RxDownload } from "react-icons/rx";
import { GoClock } from "react-icons/go";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { TbTimeDuration45 } from "react-icons/tb";
import { IoIosLaptop } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { data, Link } from 'react-router-dom';
import { CrossContext } from '../../Context/CrossContext';




function Program(program) {

    const {formatDate, toggleEnrollment, toggleDownloadScreen,  toggleDownloadProgramScreen, toggleOpenEnrollment} = useContext(CrossContext);

    const {title, duration, date, time, mode, id, courseContent, category, slug} = program;

    const [moreDates, setMoreDates] = useState(null);

    const toggleMoreDates = (index)=>{
      setMoreDates((prev) => (prev === index ? null : index));
    }
    
    
  return (
    <div className='flex flex-col items-center h-auto gap-1 px-1 py-2 bg-white border border-crossLightPurple small:w-250px large:w-270px rounded-10 text-13px hover:shadow-lg'>
      
      <Link to={`/our-courses/${slug}`} className='font-semibold text-center hover:underline large:text-17px small:text-15px'>{title}</Link>

        <div className='flex items-center justify-center w-auto gap-1 px-1 border cursor-pointer text-crossLightPurple border-crossLightPurple h-30px rounded-10'
        onClick={()=>{
          toggleDownloadProgramScreen(id)
        }}
        >
            <RxDownload /> Course Content</div>

        <div className='flex flex-col h-auto gap-1 w-100'>
            
            <div className='flex items-center gap-1 w-100 text-crossLightPurple small:justify-center large:justify-start'><TbTimeDuration45 className='text-20px'/> <span className='text-crossTextGray'>Duration:</span> {duration}</div>

            {date && date[0] !=='' &&
            <div className='flex items-center gap-1 w-100'><MdOutlineCalendarMonth className='text-20px text-crossLightPurple'/> <span>{date[0]}</span></div>}

            {
              moreDates && date && date.slice(1).map((day, i)=>
                <div className='flex items-center gap-1 w-100'
                key={i}
                ><MdOutlineCalendarMonth className='text-20px text-crossLightPurple'/> <span>{day}</span></div>
              )
            }
            
            {!time=='' &&
            <div className='flex items-center gap-1 w-100'><GoClock className='text-20px text-crossLightPurple'/> {time}</div>}

            <div className='flex items-center gap-1 w-100'><IoIosLaptop className='text-20px text-crossLightPurple'/> {mode}</div>
        </div>

        <div className='flex-col items-center h-auto gap-1 large:flex w-100'>
              
          
          {date && date.length > 1 &&
            <div className='flex items-center justify-center w-auto gap-1 px-1 cursor-pointer text-crossLightPurple h-30px rounded-10'
            onClick={()=>{
              toggleMoreDates(id)
            }}
            >Show {moreDates ? "less" : "more"} dates <MdKeyboardArrowDown className={`text-20px ${moreDates ? "rotate-180" : ""}`}/></div>}


            <div className='flex items-center justify-center gap-1 text-white cursor-pointer w-200px h-30px rounded-10 bg-crossLightPurple small:mt-1 large:mt-0'
            onClick={()=>{

              category && category.toLowerCase().includes("open executive") ? toggleOpenEnrollment(id) :
              toggleEnrollment(id)
            }}
            >Enroll Now</div>
            
            <Link to={`/our-courses/${slug}`} className='flex items-center justify-center gap-1 text-black border w-200px border-crossLightPurple h-30px rounded-10 small:mt-1 large:mt-0'>More details</Link>
        </div>


       
    </div>
  )
}

export default Program
