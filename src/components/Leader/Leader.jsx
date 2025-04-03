import React, { useContext } from 'react';
import { CiLinkedin } from "react-icons/ci";
import { PHOTOS } from '../../assets/images';
import { CrossContext } from '../../Context/CrossContext';



function Leader() {
  
  const {toggleBio} = useContext(CrossContext);
  
  return (
    <div className='flex flex-col items-center h-auto gap-2 border shadow-lg large:w-230px rounded-10 large:text-15px small:w-70vw small:text-11px rounded-tl-10 rounded-tr-10'>
        
      <img src={PHOTOS.adebayo} alt="adebayo" className='rounded-tl-10 large:h-270px w-100 rounded-tr-10 small:h-280px'/>

      <div className='flex items-center gap-1 pl-1 w-100'>
        <div>
            <div className='font-bold'>Adebayo Adegun</div>
            <div className='text-[#646464]'>Lead Partner & CEO</div>
        </div>

        <a href="https://www.google.com">
        <CiLinkedin className='bg-[#2B85EE] text-white text-35px 
        p-0.5 rounded-full'/>
        </a>
      </div>

      <div className='flex items-center justify-center h-auto pt-1 border-t border-black cursor-pointer w-100 hover:bg-[#2B85EE] hover:text-white text-black pb-1 rounded-br-10 rounded-bl-10'
      onClick={toggleBio}
      >View Bio +</div>
    </div>
  )
}

export default Leader
