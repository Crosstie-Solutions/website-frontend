import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { PHOTOS } from '../../assets/images';



function Leader() {
  return (
    <div className='flex flex-col items-center h-auto gap-2 pb-1 border shadow-lg large:w-230px rounded-10 large:text-15px small:w-70vw small:text-11px'>
        
      <img src={PHOTOS.adebayo} alt="adebayo" className='rounded-tl-20 large:h-270px w-100 rounded-tr-20 small:h-280px'/>

      <div className='flex items-center gap-1 pl-1 w-100'>
        <div>
            <div className='font-bold'>Adebayo Adegun</div>
            <div className='text-[#646464]'>Lead Partner & CEO</div>
        </div>

        <CiLinkedin className='bg-[#2B85EE] text-white text-35px p-0.5 rounded-full'/>
      </div>
    </div>
  )
}

export default Leader
