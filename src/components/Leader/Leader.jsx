import React, { useContext } from 'react';
import { CiLinkedin } from "react-icons/ci";
import { PHOTOS } from '../../assets/images';
import { CrossContext } from '../../Context/CrossContext';
import Bio from '../Bio/Bio';



function Leader(member) {

  const {name, role, image, type, bio, link, index} = member;
  
  const {toggleBio, userBio} = useContext(CrossContext);

  
  
  return (
    <div className='flex flex-col items-center justify-between h-auto gap-2 border shadow-lg large:w-250px rounded-10 large:text-15px small:w-40vw small:text-11px rounded-tl-10 rounded-tr-10'>
        
      <img src={image} alt="team member image" className={`rounded-tl-10 small:h-auto large:h-auto w-100 rounded-tr-10`}/>

      <div className='flex items-center justify-start gap-1 pl-1 w-100'>
        
        <div className='w-75'>
            <div className='font-bold'>{name}</div>
            <div className='text-[#646464]'>{role}</div>
        </div>

        <a 
        href={link}
        target='_blank'
        >
        <CiLinkedin className='bg-[#2B85EE] text-white text-35px 
        p-0.5 rounded-full'/>
        </a>
        
      </div>

      <div className='flex items-center justify-center h-auto pt-1 border-t border-black cursor-pointer w-100 hover:bg-[#2B85EE] hover:text-white text-black pb-1 rounded-br-10 rounded-bl-10'
      onClick={()=>{
        toggleBio(index);
      }}
      >View Bio +</div>

      {
        userBio && userBio === index &&

        <Bio 
        name={member.name}
        image={member.image}
        bio={member.bio}
      />
      
      }
      
    </div>
  )
}

export default Leader
