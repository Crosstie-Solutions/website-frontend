import React, { useContext } from 'react';
import { GrFormClose } from "react-icons/gr";
import { CrossContext } from '../../Context/CrossContext';
import { PHOTOS } from '../../assets/images';


function Bio() {

    const {toggleBio} = useContext(CrossContext);

  return (
    <div className='fixed top-0 left-0 right-0 z-20 flex items-center justify-center w-100vw h-100vh bg-overlay'>
      
      <div className='flex flex-col items-center gap-2 bg-white large:p-3 w-70 h-60 rounded-10 text-15px'>
        <div className='flex items-center justify-between h-auto w-100'>
            <h3 className='font-semibold text-black text-20px'>Sakshi Gaba Dhawan</h3>
            <GrFormClose className='text-black cursor-pointer text-30px'
            onClick={toggleBio}
            />
        </div>

        <div className='flex items-start h-auto gap-3 w-100'>
            <img src={PHOTOS.adebayo} alt="user" className='w-25 h-250px rounded-10'/>
            <p className='w-70'>Sakshi Gaba Dhawan, our Head of HR, leverages 18+ years of experience, 11+ of which have been dedicated to Koenig. Starting in HR, Sakshi now adeptly manages Accounts Payable and Receivables, along with leading initiatives in lead generation and freelancer management. Beyond the corporate realm, she finds balance in exercising and travelling with her family.</p>
        </div>
      </div>
    </div>
  )
}

export default Bio
