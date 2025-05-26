import React, { useContext, useState } from 'react';
import { FaBookOpen } from "react-icons/fa";
import { MdOutlineChevronRight } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { FaUserTie } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { GiTeacher } from "react-icons/gi";
import { CrossContext } from '../../Context/CrossContext';




function OurSolutions() {

    const [solution, setSolution] = useState("Training Programmes");

    const {allHighDemands} = useContext(CrossContext);

    
  return (
    <div className='flex flex-col h-auto gap-5 large:w-83vw small:w-90vw'>
      <div className='flex flex-col h-auto gap-0.5 w-100 '>
        <div className='flex items-center w-auto h-auto gap-1'>
            <hr className='h-2px w-40px bg-crossLightPurple'/>
            <h5 className='text-crossLightPurple text-17px'>OUR EXPERTISE</h5>
        </div>
        <h3 className='font-bold text-25px'>Our Solutions</h3>
        <p className='text-15px text-crossTextGray'>We provide Industry Expertise in the Design and Delivery of Our Solutions</p>
      </div>

    
        <div className='flex flex-col items-center h-auto gap-5 w-100'>
            
            <div className='flex flex-row justify-between h-auto border large:py-1 large:gap-2 large:w-83vw rounded-3xl border-crossIconBg small:w-100 small:gap-1 py-0.5 px-1'>
                
                <button className={`w-auto ${solution==="Training Programmes" ? "bg-crossLightPurple text-white" : "hover:bg-[#E7E7E7] hover:text-crossTextGray"}  h-50px small:px-1 rounded-20 small:text-11px large:text-15px large:px-5`}
                onClick={()=>setSolution("Training Programmes")}
                >Training Programmes</button>
                
                
               
                <button className={`w-auto ${solution==="Consulting Services" ? "bg-crossLightPurple text-white" : "hover:bg-[#E7E7E7] hover:text-crossTextGray"}  h-50px px-1 rounded-20 small:text-11px large:text-15px large:px-5 small:px-1`}
                onClick={()=>setSolution("Consulting Services")}
                >Consulting Services</button>
                
                <button className={`w-auto ${solution==="High-demand Courses" ? "bg-crossLightPurple text-white" : "hover:bg-[#E7E7E7] hover:text-crossTextGray"}  h-50px px-1 rounded-20 small:text-10px large:text-15px large:px-5 small:px-1`}
                onClick={()=>setSolution("High-demand Courses")}
                >High-demand Courses</button>
            </div>
  

  
            <div className='flex flex-wrap items-center justify-between h-auto large:w-100 small:w-90vw'>
                {/* Training Programmes */}
            
                {solution==="Training Programmes" &&
                <div className='flex justify-between h-auto small:items-center large:items-start large:flex-row w-100 small:flex-col small:gap-3 large:gap-0'>
                    
                    <Link
                    to="/our-courses/"
                    className='flex flex-col justify-between h-auto gap-2 p-1 border border-crossIconBg large:w-25 text-15px rounded-20 small:w-100'>
                        
                        <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px'><FaBookOpen className='text-crossLightPurple text-50px'/></div>
                        
                        <h3 className='font-bold text-crossLightPurple'>Open Executive Programmes (OEP)</h3>
                        
                        <p className='text-15px text-crossTextGray'>A program built for growth, connection, and transformation. In just 2–4 days, get new insights, practical knowledge, and a recognised certificate to accelerate your personal and professional growth with confidence.</p>
                        
                    </Link>



                    <Link
                    to="/our-courses/executive-leadership"
                    className='flex flex-col justify-between h-auto gap-2 p-1 border border-crossIconBg large:w-25 text-15px rounded-20 small:w-100'>
                        
                        <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px'><FaUserTie className='text-crossLightPurple text-50px'/></div>
                        
                        <h3 className='font-bold text-crossLightPurple'>Executive Leadership 
                        Programmes (ELP)</h3>
                        
                        <p className='text-15px text-crossTextGray'>Designed for leaders at all levels, these premium two-to three-day programs explore strategy, influence, and decision-making. They blend expert-led sessions with real case studies and optional coaching to reinforce lasting, effective leadership.</p>
                        
                    </Link>

                    <Link
                        to="/our-courses/complete-employee"
                    className='flex flex-col justify-between h-auto gap-2 p-1 border border-crossIconBg large:w-25 text-15px rounded-20 small:w-100'>
                        
                        <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px'><FaUser className='text-crossLightPurple text-50px'/></div>
                        
                        <h3 className='font-bold text-crossLightPurple'>Complete Employee Series (CES)</h3>
                        
                        <p className='text-15px text-crossTextGray'>The Complete Employee Series (CES) equips employees at all levels with the knowledge, skills, and attributes needed to grow, perform better, and contribute meaningfully across your entire organisation.</p>
                        
                       
                    </Link>
                    
                </div>}

                {/* Consulting Services */}
                {solution==="Consulting Services" &&
                <div className='flex justify-between h-auto small:items-center large:flex-row w-100 small:flex-col small:gap-3 large:gap-0 large:items-start'>
                    
                    <div className='flex flex-col justify-between h-auto gap-2 p-1 border border-crossIconBg large:w-25 text-15px rounded-20 small:w-100'>
                        <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px'><HiOutlineUsers className='text-crossLightPurple text-50px'/></div>
                        
                        <h3 className='font-bold text-crossLightPurple'>Culture Assessment and Transformation</h3>
                        
                        <p className='text-15px text-crossTextGray'>Your strategy depends on culture. Using our Six-Dimension Framework, we assess, identify gaps, and guide transformation, building a culture aligned with your goals, industry, and growth stage, with hands-on support throughout.</p>
                        
                    </div>


                    <div className='flex flex-col justify-between h-auto gap-2 p-1 border border-crossIconBg large:w-25 text-15px rounded-20 small:w-100'>
                        <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px'><GiTeamIdea className='text-crossLightPurple text-50px'/></div>
                        
                        <h3 className='font-bold text-crossLightPurple'>Strategy Development and Execution</h3>
                        
                        <p className='text-15px text-crossTextGray'>As businesses grow, instinct must give way to strategy. We diagnose key pillars, co-create actionable plans, and support execution, helping you shift from founder-driven decisions to intentional, scalable strategy.</p>
                        
                    </div>


                    <div className='flex flex-col justify-between h-auto gap-2 p-1 border border-crossIconBg large:w-25 text-15px rounded-20 small:w-100'>
                        <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px'><LiaBusinessTimeSolid className='text-crossLightPurple text-50px'/></div>
                        
                        <h3 className='font-bold text-crossLightPurple'>Business Process Documentation and Improvement</h3>
                        
                        <p className='text-15px text-crossTextGray'>High-performing organisations know operational excellence is intentional, built on well-designed, documented, and improved processes. We capture core workflows, create process maps, and support systems that can run smoothly and scale with structure.
                        </p>
                        
                    </div>
                    
                </div>}
            

                {/* High-demand Courses */}
                {solution==="High-demand Courses" &&
                <div className='flex flex-row flex-wrap items-center h-auto lareg:justify-center small:justify-center small:gap-1 large:gap-2 w-100'>
                    
                    {
                        allHighDemands && allHighDemands.map((program, i)=>
                            <Link to={`/our-courses/${program.program && program.program.length >0 && program.program[0].slug}`} className='flex items-center justify-center gap-1 py-1 font-semibold text-black h-80px lareg:w-auto large:text-15px rounded-5 small:text-13px bg-crossIconBg hover:text-crossLightPurple small:w-auto'
                            key={i}
                            >
                                <div className='flex items-center justify-center px-1 border-l-4 w-250px h-100 border-crossLightPurple hover:h-90'>{program.program && program.program.length >0 && program.program[0].title}</div>
                            </Link>
                        )
                    }

                    {allHighDemands && allHighDemands.length < 1 &&
                    <p className='font-semibold'>No Result Found</p>}
                </div>}
            </div>


            {solution==="Training Programmes" &&
            <Link to='/our-courses/' className='flex flex-row items-center justify-center w-auto gap-1 p-2 text-white h-30px rounded-10 bg-crossLightPurple text-15px'>See More <MdOutlineChevronRight className='text-20px'/></Link>}


            {solution==="Consulting Services" &&
            <Link to='/our-solutions/management-consulting' className='flex flex-row items-center justify-center w-auto gap-1 p-2 text-white h-30px rounded-10 bg-crossLightPurple text-15px'>See More <MdOutlineChevronRight className='text-20px'/></Link>}


             {/* <Link 
            to='/about-us/our-clients'
            className='flex flex-row items-center justify-center w-auto gap-1 p-2 text-white h-30px rounded-10 bg-crossLightPurple text-15px'>Show All <GoArrowRight className='text-25px'/></Link> */}
        </div>
        
    </div>
  )
}

export default OurSolutions;
