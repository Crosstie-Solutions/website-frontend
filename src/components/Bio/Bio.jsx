import React, { useContext } from 'react';
import { GrFormClose } from "react-icons/gr";
import { CrossContext } from '../../Context/CrossContext';
import { PHOTOS } from '../../assets/images';


function Bio(member) {

  const {name, image, bio, index} = member;

    const {toggleBio} = useContext(CrossContext);

  return (
    <div className='left-0 right-0 z-20 flex items-center justify-center large:top-0 large:fixed w-100vw large:h-100vh bg-overlay small:min-h-100vh small:py-5 large:py-0 small:absolute small:-top-8'>
      
      <div className='flex flex-col items-center gap-2 bg-white large:p-3 large:w-70 large:h-60 rounded-10 text-15px small:w-90vw small:h-auto small:p-2'>
        
        <div className='flex items-center justify-between h-auto w-100'>
            <h3 className='font-semibold text-black large:text-20px small:text-17px'>{name}</h3>
            
            <GrFormClose className='text-black cursor-pointer text-30px'
              onClick={()=>{
                toggleBio('exit');
              }}
            />
        </div>


        <div className='flex h-auto gap-3 large:items-start w-100 large:flex-row small:flex-col small:items-center'>
            <img src={image} alt="user" className='large:w-auto large:h-250px rounded-10 small:w-70 small:h-auto'/>
            <p className='large:w-70 small:w-100'>{bio}</p>
        </div>
        
        
      </div>

    
    </div>
  )
}

export default Bio
