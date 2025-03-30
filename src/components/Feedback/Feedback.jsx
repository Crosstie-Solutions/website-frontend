import React, { useContext, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CrossContext } from "../../Context/CrossContext";


function Feedback(testimonial) {


  const {name, jobRole, testimony, priorityIndex, date, program, id, toggleReadMore, isExpanded} = testimonial;

  
  // const [more, setMore] = useState(null);

  // const toggleMore = (index)=>{
  //   setMore((prev) => (prev === index ? null : index));;
  // }

  
  
  return (
    <div className={`relative flex flex-col items-center gap-1 px-2 py-5 bg-white border shadow-lg border-crossIconBg large:w-30 rounded-10 small:w-100 ${testimony.length > 100 ? "h-auto" : "h-290px"}`}>
      
      {/* crossIconBg */}
      <div className="flex flex-col items-center h-auto gap-1 w-100">
        <h3 className="font-bold text-crossLightPurple">{name}</h3>
        <div className="flex flex-row items-center w-auto h-auto gap-1 px-1 rounded bg-crossIconBg">
          <div className="rounded-full w-10px h-10px bg-crossLightPurple"></div>
          <div>{jobRole}</div>
        </div>
      </div>

      {/* 70 */}
      <p className="flex-grow text-center text-crossTextGray">
        {/* {testimony.slice(0, 70)} {more && testimony.slice(71)} */}
        {isExpanded ? testimony : `${testimony.slice(0, 70)}...`}
      </p>

      {testimony.length > 100 &&
      <div
        className="flex items-center justify-center w-auto h-auto gap-1 px-1 mt-1 rounded cursor-pointer text-crossLightPurple bg-crossIconBg"
        onClick={()=>{
          toggleReadMore(id)
        }}
      >
        Show {isExpanded ? "Less" : "More"} <MdKeyboardArrowDown className={`text-20px ${isExpanded ? "rotate-180" : ""}`} />
      </div>}

      <div className="flex flex-col items-center h-auto">
        <p className="text-center text-crossTextGray">
          {program[0].title}
        </p>

        <div className="text-[#B56DEE]">{date}</div>
      </div>

      <div className="absolute flex items-center justify-center bg-white rounded-full -top-1.5 h-30px w-30px left-2 hover:text-crossLightPurple text-gray-400 cursor-pointer">
        <FaQuoteLeft className="text-25px"/>
      </div>
    </div>
  );
}


export default Feedback
