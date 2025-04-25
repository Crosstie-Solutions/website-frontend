import React, { useContext, useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiCalendar2Line } from "react-icons/ri";
import { TbTimeDuration45 } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { CrossContext } from '../../Context/CrossContext';
import { AiOutlineClockCircle } from "react-icons/ai";




function Webinar(webinar) {

    const {webinarType, setWebinarType, toggleWebinarEnrollment} = useContext(CrossContext);

    const {presenter, topic, description, date, time, totalAttendees, duration, youtubeLink, webinarId} = webinar;

    const [showMore, setShowMore] = useState(false);
    
    const toggleMore = ()=>{
        setShowMore(!showMore)
    };

    

  return (
    <div className='flex flex-col items-start h-auto bg-white border w-300px border-crossLightPurple rounded-10 text-15px'>

        {/* upcoming */}
        {webinarType==='upcoming' &&
      <div className='flex flex-col items-start h-auto gap-1 px-2 py-2 w-100'>
        <div className='text-crossTextGray'>Presenter: {presenter}</div>

        <h4 className='font-semibold'>{topic}</h4>

        

        {showMore &&
        <p>{description}.</p>}

        <div className='flex items-center cursor-pointer text-crossLightPurple'
        onClick={toggleMore}
        >Show {showMore ? "less" : "more"} 
            <MdKeyboardArrowDown className={`text-25px ${showMore ? "rotate-180" : ""}`}/>
        </div>

        {/* <div className='flex justify-between font-semibold text-13px w-100 text-crossTextGray'>
            <div className='flex items-center w-auto gap-1'>
                <RiCalendar2Line className='text-20px'/>
                {date} | {time}
            </div>

            <div className='flex items-center w-auto gap-1'>
                <TbTimeDuration45 className='text-20px'/>
                {duration}
            </div>
        </div> */}

        <div className='flex items-center gap-1 w-100'><RiCalendar2Line className='text-15px'/> {date}</div>

        <div className='flex items-center gap-1 w-100'><AiOutlineClockCircle className='text-15px'/> {time}</div>

        <div className='flex items-center gap-1 w-100'><TbTimeDuration45 className='text-15px'/> {duration}</div>

        <div className='flex items-center gap-1 w-100'><FiUsers className='text-15px'/> {totalAttendees} Registered</div>

        <div className='flex items-center self-center justify-center w-auto px-3 mt-2 border cursor-pointer h-30px rounded-20 border-crossLightPurple text-crossLightPurple'
        onClick={()=>{
          toggleWebinarEnrollment(webinarId)
        }}
        >Register</div>
      </div>}



       {/* past */}
       
       {webinarType==='past' &&
       <div className='flex flex-col items-start h-auto gap-2 px-2 py-2 w-100'>
        <div className='text-center text-crossTextGray w-100'>Delivered by: {presenter}</div>

        <h4 className='font-semibold text-center w-100'>{topic}</h4>

        

        <a href={`${youtubeLink}`} className='flex items-center self-center justify-center w-auto px-3 mt-2 border h-30px rounded-20 border-crossLightPurple text-crossLightPurple'>View Recording</a>
      </div>}


    </div>
  )
}

export default Webinar
