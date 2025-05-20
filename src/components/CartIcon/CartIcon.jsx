import React, { useEffect, useState } from 'react';
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';




function CartIcon() {

    const backToTop = ()=>{
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const [showButton, setShowButton] = useState(false);

    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    

  return (
    <Link to='/cart' className={`fixed z-30 flex items-center justify-center text-crossLightPurple rounded cursor-pointer top-70vh large:right-5 h-auto small:right-3 w-auto bg-transparent`}
    
    ><IoCartOutline className='text-30px'/> <span className='relative flex items-center justify-center text-white rounded-full bottom-1.5 right-1 bg-crossLightPurple h-20px w-20px'>{6}</span></Link>
  )
}

export default CartIcon;
