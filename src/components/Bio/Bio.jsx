import React, { useContext } from 'react';
import { GrFormClose } from "react-icons/gr";
import { CrossContext } from '../../Context/CrossContext';
import { PHOTOS } from '../../assets/images';


function Bio(member) {

  const {name, image, bio, index} = member;

    const {toggleBio} = useContext(CrossContext);

  return (
    <div className='fixed top-0 left-0 right-0 z-20 flex items-center justify-center w-100vw h-100vh bg-overlay'>
      
      <div className='flex flex-col items-center gap-2 bg-white large:p-3 w-70 h-60 rounded-10 text-15px'>
        <div className='flex items-center justify-between h-auto w-100'>
            <h3 className='font-semibold text-black text-20px'>{name}</h3>
            <GrFormClose className='text-black cursor-pointer text-30px'
              onClick={()=>{
                toggleBio('exit');
              }}
            />
        </div>

        <div className='flex items-start h-auto gap-3 w-100'>
            <img src={image} alt="user" className='w-auto h-250px rounded-10'/>
            <p className='w-70'>{bio}</p>
        </div>
      </div>

    
    </div>
  )
}

export default Bio
