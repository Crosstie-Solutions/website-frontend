import React, { useContext, useEffect, useState } from 'react';
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { CrossContext } from '../../Context/CrossContext';




function CartIcon() {

    const {getTotalCartItems} = useContext(CrossContext);


    
    

  return (
    <Link to='/cart' className={`fixed z-30 ${getTotalCartItems() > 0 ? "flex" : "hidden"} items-center justify-center text-crossLightPurple rounded ${window.location.pathname==='/cart' ? "hidden" : "flex"} cursor-pointer top-70vh large:right-5 h-50px small:right-3 w-50px bg-transparent border`}
    >
      <IoCartOutline className='text-30px'/> <span className='relative flex items-center justify-center text-white rounded-full bottom-1.5 right-1 bg-crossLightPurple h-30px w-30px'>{getTotalCartItems()}</span>
      </Link>
  )
}

export default CartIcon;
