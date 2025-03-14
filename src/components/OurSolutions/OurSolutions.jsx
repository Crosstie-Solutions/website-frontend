import React, { useState } from 'react';
import { FaBookOpen } from "react-icons/fa";
import { MdOutlineChevronRight } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { FaUserTie } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { GiTeacher } from "react-icons/gi";


function OurSolutions() {

    const [solution, setSolution] = useState("Training Programmes");

    
  return (
    <div className='flex flex-col h-auto gap-5 large:w-80vw small:w-90vw'>
      <div className='flex flex-col h-auto gap-0.5 w-100 p-1'>
        <div className='flex items-center w-auto h-auto gap-1'>
            <hr className='h-2px w-40px bg-crossLightPurple'/>
            <h5 className='text-crossLightPurple text-15px'>OUR EXPERTISE</h5>
        </div>
        <h3 className='font-bold text-20px'>Our Solutions</h3>
        <p className='text-15px text-crossTextGray'>We provide Industry Expertise in the Design and Delivery of Our Solutions</p>
      </div>

    
    <div className='flex flex-col h-auto gap-5 w-100'>
        
        <div className='flex flex-row justify-around h-auto border large:py-1 large:gap-2 large:w-70 rounded-3xl border-crossIconBg small:w-100 small:gap-1 py-0.5'>
            
            <button className={`w-auto ${solution==="Training Programmes" ? "bg-crossLightPurple text-white" : "bg-[#E7E7E7] text-crossTextGray"}  h-40px px-1 rounded-20 small:text-11px large:text-15px`}
            onClick={()=>setSolution("Training Programmes")}
            >Training Programmes</button>
            
            <button className={`w-auto ${solution==="Consulting Services" ? "bg-crossLightPurple text-white" : "bg-[#E7E7E7] text-crossTextGray"}  h-40px px-1 rounded-20 small:text-11px large:text-15px`}
            onClick={()=>setSolution("Consulting Services")}
            >Consulting Services</button>
            
            <button className={`w-auto ${solution==="High-demand Courses" ? "bg-crossLightPurple text-white" : "bg-[#E7E7E7] text-crossTextGray"}  h-40px px-1 rounded-20 small:text-10px large:text-15px`}
            onClick={()=>setSolution("High-demand Courses")}
            >High-demand Courses</button>
        </div>

        
        
        {/* Training Programmes */}
        
        {solution==="Training Programmes" &&
        <div className='flex items-center justify-between h-auto large:flex-row w-100 small:flex-col small:gap-3 large:gap-0'>
            
            <div className='flex flex-col gap-1 p-1 border border-crossIconBg large:w-30 h-250px text-15px rounded-20 small:w-100'>
                
                <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px'><FaBookOpen className='text-crossLightPurple text-50px'/></div>
                
                <h3 className='font-bold text-crossLightPurple'>Open Executive Programmes (OEP)</h3>
                
                <p className='text-13px text-crossTextGray'>The business landscape is evolving, and staying ahead requires more than just experience—it demands strategic thinking, innovation, and executive-level expertise.</p>
                
                <Link to='/' className='flex items-center self-end justify-center h-auto gap-1 mt-1 w-150px text-crossLightPurple'>Learn More <MdOutlineChevronRight className='text-20px'/></Link>
                
            </div>

            <div className='flex flex-col gap-1 p-1 border border-crossIconBg large:w-30 h-250px text-15px rounded-20 small:w-100'>
                <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px'><FaUserTie className='text-crossLightPurple text-50px'/></div>
                
                <h3 className='font-bold text-crossLightPurple'>Executive Leadership 
                Programmes (ELP)</h3>
                
                <p className='text-13px text-crossTextGray'>The business landscape is evolving, and staying ahead requires more than just experience—it demands strategic thinking, innovation, and executive-level expertise.</p>
                
                <Link to='/' className='flex items-center self-end justify-center h-auto gap-1 mt-1 w-150px text-crossLightPurple'>Learn More <MdOutlineChevronRight className='text-20px'/></Link>
            </div>

            <div className='flex flex-col gap-1 p-1 border border-crossIconBg large:w-30 h-250px text-15px rounded-20 small:w-100'>
                <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px'><FaUser className='text-crossLightPurple text-50px'/></div>
                
                <h3 className='font-bold text-crossLightPurple'>Complete Employee Series (CES)</h3>
                
                <p className='text-13px text-crossTextGray'>The business landscape is evolving, and staying ahead requires more than just experience—it demands strategic thinking, innovation, and executive-level expertise.</p>
                
                <Link to='/' className='flex items-center self-end justify-center h-auto gap-1 mt-1 w-150px text-crossLightPurple'>Learn More <MdOutlineChevronRight className='text-20px'/></Link>
            </div>
            
        </div>}

         {/* Consulting Services */}
         {solution==="Consulting Services" &&
        <div className='flex items-center justify-between h-auto large:flex-row w-100 small:flex-col small:gap-3 large:gap-0'>
            
            <div className='flex flex-col gap-1 p-1 border border-crossIconBg large:w-30 h-250px text-15px rounded-20 small:w-100'>
                <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px'><HiOutlineUsers className='text-crossLightPurple text-50px'/></div>
                
                <h3 className='font-bold text-crossLightPurple'>Culture Assessment and Transformation</h3>
                
                <p className='text-13px text-crossTextGray'>The business landscape is evolving, and staying ahead requires more than just experience—it demands strategic thinking, innovation, and executive-level expertise.</p>
                
                <Link to='/' className='flex items-center self-end justify-center h-auto gap-1 mt-1 w-150px text-crossLightPurple'>Learn More <MdOutlineChevronRight className='text-20px'/></Link>
            </div>


            <div className='flex flex-col gap-1 p-1 border border-crossIconBg large:w-30 h-250px text-15px rounded-20 small:w-100'>
                <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px'><GiTeamIdea className='text-crossLightPurple text-50px'/></div>
                
                <h3 className='font-bold text-crossLightPurple'>Strategy Development and Execution</h3>
                
                <p className='text-13px text-crossTextGray'>The business landscape is evolving, and staying ahead requires more than just experience—it demands strategic thinking, innovation, and executive-level expertise.</p>
                
                <Link to='/' className='flex items-center self-end justify-center h-auto gap-1 mt-1 w-150px text-crossLightPurple'>Learn More <MdOutlineChevronRight className='text-20px'/></Link>
            </div>


            <div className='flex flex-col gap-1 p-1 border border-crossIconBg large:w-30 h-250px text-15px rounded-20 small:w-100'>
                <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px'><LiaBusinessTimeSolid className='text-crossLightPurple text-50px'/></div>
                
                <h3 className='font-bold text-crossLightPurple'>Business Process Documentation and Improvement</h3>
                
                <p className='text-13px text-crossTextGray'>The business landscape is evolving, and staying ahead requires more than just experience—it demands strategic thinking, innovation, and executive-level expertise.</p>
                
                <Link to='/' className='flex items-center self-end justify-center h-auto gap-1 mt-1 w-150px text-crossLightPurple'>Learn More <MdOutlineChevronRight className='text-20px'/></Link>
            </div>
            
        </div>}
         

         {/* High-demand Courses */}
         {solution==="High-demand Courses" &&
        <div className='flex flex-row flex-wrap items-center justify-around h-auto border small:gap-1 large:gap-2 w-100'>
            
            <Link to='/' className='flex flex-col h-auto gap-1 py-1 border border-crossIconBg w-200px large:text-15px rounded-20 small:text-13px boreder'>
            
                <div className='flex flex-col justify-center gap-1 px-1 border-l h-100px border-crossLightPurple w-100'>
                    
                    <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-40px w-40px'><GiTeacher className='text-crossLightPurple text-50px'/></div>
                    
                    <h3 className='font-bold text-crossLightPurple'>The Personal Leadership</h3>
                </div>
            </Link>
            
            <Link to='/' className='flex flex-col h-auto gap-1 py-1 border w-200px border-crossIconBg text-15px rounded-20'>
                <div className='flex flex-col justify-center gap-1 px-1 border-l h-100px border-crossLightPurple w-100'>
                    
                    <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-40px w-40px'><GiTeacher className='text-crossLightPurple text-50px'/></div>
                    
                    <h3 className='font-bold text-crossLightPurple'>Excellence in Customer Service</h3>
                </div>
            </Link>

            <Link to='/' className='flex flex-col h-auto gap-1 py-1 border w-200px border-crossIconBg text-15px rounded-20'>
                <div className='flex flex-col justify-center gap-1 px-1 border-l h-100px border-crossLightPurple w-100'>
                    
                    <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-40px w-40px'><GiTeacher className='text-crossLightPurple text-50px'/></div>
                    
                    <h3 className='font-bold text-crossLightPurple'>The Productive Employee</h3>
                </div>
            </Link>

            <Link to='/' className='flex flex-col h-auto gap-1 py-1 border w-200px border-crossIconBg text-15px rounded-20'>
                <div className='flex flex-col justify-center gap-1 px-1 border-l h-100px border-crossLightPurple w-100'>
                    
                    <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-40px w-40px'><GiTeacher className='text-crossLightPurple text-50px'/></div>
                    
                    <h3 className='font-bold text-crossLightPurple'>The Strategic Leader</h3>
                </div>
            </Link>

            <Link to='/' className='flex flex-col h-auto gap-1 py-1 border w-200px border-crossIconBg text-15px rounded-20'>
                <div className='flex flex-col justify-center gap-1 px-1 border-l h-100px border-crossLightPurple w-100'>
                    
                    <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-40px w-40px'><GiTeacher className='text-crossLightPurple text-50px'/></div>
                    
                    <h3 className='font-bold text-crossLightPurple'>The Sales Professional</h3>
                </div>
            </Link>

            <Link to='/' className='flex flex-col h-auto gap-1 py-1 border w-200px border-crossIconBg text-15px rounded-20'>
                <div className='flex flex-col justify-center gap-1 px-1 border-l h-100px border-crossLightPurple w-100'>
                    
                    <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-40px w-40px'><GiTeacher className='text-crossLightPurple text-50px'/></div>
                    
                    <h3 className='font-bold text-crossLightPurple'>Business Writing and Presentation</h3>
                </div>
            </Link>

            <Link to='/' className='flex flex-col h-auto gap-1 py-1 border w-200px border-crossIconBg text-15px rounded-20'>
                <div className='flex flex-col justify-center gap-1 px-1 border-l h-100px border-crossLightPurple w-100'>
                    
                    <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-40px w-40px'><GiTeacher className='text-crossLightPurple text-50px'/></div>
                    
                    <h3 className='font-bold text-crossLightPurple'>The Complete Leadership</h3>
                </div>
            </Link>

            <Link to='/' className='flex flex-col h-auto gap-1 py-1 border w-200px border-crossIconBg text-15px rounded-20'>
                <div className='flex flex-col justify-center gap-1 px-1 border-l h-100px border-crossLightPurple w-100'>
                    
                    <div className='flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-40px w-40px'><GiTeacher className='text-crossLightPurple text-50px'/></div>
                    
                    <h3 className='font-bold text-crossLightPurple'>The Public Sector Leader</h3>
                </div>
            </Link>

        </div>}
    </div>
    </div>
  )
}

export default OurSolutions;
