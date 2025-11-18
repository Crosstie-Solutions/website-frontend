import React, { useContext, useEffect, useState } from 'react';
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { CrossContext } from '../../Context/CrossContext';




function CartIcon() {

    const {getTotalCartItems} = useContext(CrossContext);
    
    

  return (
    <Link to='/cart' className={`items-center justify-center text-white rounded flex cursor-pointer h-auto w-auto bg-transparent`}
    >
      <div className='flex items-center justify-center w-100 h-100'>
        
        <IoCartOutline className='text-25px'/> <span className='relative flex items-center justify-center text-black rounded-full bottom-1.5 right-1 bg-crossYellow h-20px w-20px text-13px'>{getTotalCartItems()}</span>
      </div>
      
      </Link>
  )
}

export default CartIcon;
