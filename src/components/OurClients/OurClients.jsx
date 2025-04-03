import React, { useEffect, useState } from 'react';
import { FaBookOpen } from "react-icons/fa";
import { MdOutlineChevronRight } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { FaUserTie } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { GiTeacher } from "react-icons/gi";
import { GoArrowRight } from "react-icons/go";
import { PHOTOS } from "../../assets/images";
import { partnerData } from '../../assets/data';




// Group logos into sets of 8 per slide
const groupedLogos = [];

for (let i = 0; i < partnerData.length; i += 8) {
  groupedLogos.push(partnerData.slice(i, i + 8));
}



function OurClients() {

  const actualPartners = !window.location.pathname.includes("clients") ? partnerData.slice(0, 8) : partnerData;


  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % groupedLogos.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + groupedLogos.length) % groupedLogos.length);
  };

  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % groupedLogos.length);
  };

    
  return (
    <div className='flex flex-col h-auto gap-3 large:w-83vw small:w-90vw'>
      
      {location.pathname !=="/our-clients" &&
      <div className='flex flex-col h-auto gap-0.5 w-100'>
        <div className='flex items-center w-auto h-auto gap-1'>
            <hr className='h-2px w-40px bg-crossLightPurple'/>
            <h5 className='text-crossLightPurple text-17px'>TRUSTED BY INDUSTRY LEADERS</h5>
        </div>
        <h3 className='font-bold text-25px'>Our Clientele</h3>
        <p className='text-15px text-crossTextGray'>Proud Partners with Exceptional Organizations</p>
      </div>}


        <div className={`flex items-center justify-center h-auto gap-2 bg-white small:p-1 ${window.location.pathname.includes("clients") ? "large:p-0" : "large:p-2"} small:flex-col large:flex-row w-100 rounded-10`}>
            
        {!location.pathname.includes("clients") &&
            <div className='flex items-center justify-center h-auto large:mb-7 large:w-15 small:w-100'>
                <h2 className='font-bold text-center large:text-30px small:text-20px'>Trusted by</h2>
            </div>}

            <div className={`relative flex flex-col items-center h-auto gap-5 ${window.location.pathname.includes("clients") ? "large:w-83vw py-3 rounded border border-crossFooterText" : "large:w-65"}  small:w-100`}>
              
                <div className={`flex flex-row flex-wrap h-auto transition-transform   large:gap-3 ${window.location.pathname.includes("clients") ? "large:w-100 large:justify-center" : "large:w-95 large:justify-end"} small:gap-1 small:justify-around small:w-100`}
                // style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    
                    {
                      actualPartners && actualPartners.map((partner, i)=>
                        <img src={partner} alt="partner" className='py-1 bg-white border shadow-xl large:px-3 rounded-5 large:w-130px h-80px small:w-100px small:px-1'
                        key={i}
                        />
                      )
                    }
                      
                </div>

                

                {!location.pathname.includes("clients") &&
                <Link 
                to='/about-us/our-clients'
                className='flex flex-row items-center justify-center w-auto gap-1 p-2 text-white h-30px rounded-10 bg-crossLightPurple text-15px'>Show All <GoArrowRight className='text-25px'/></Link>}
            </div>
        </div>
    </div>
  )
}

export default OurClients;
