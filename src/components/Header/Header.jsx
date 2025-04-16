import React, { useContext, useState } from "react";
import { PHOTOS } from "../../assets/images";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CrossContext } from "../../Context/CrossContext";
import { IoCloseOutline } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";





function Header() {

  const navigate = useNavigate();

    const {hideAboutDD, showAboutDD, showSolutionsDD, hideSolutionsDD, showCoursesDD, hideCoursesDD, toggleAboutDD, toggleSolutionsDD, toggleCoursesDD, dropdownRef, toggleNav, navBar, setNavCourses, aboutDD, solutionsDD, coursesDD, toggleMobileSearch, me, activeSearch, setActiveSearch, programsSearchTerm, setProgramsSearchTerm, setCurrentProgramsPage} = useContext(CrossContext);

   

    
    
  return (
    <nav className={`flex flex-row items-center justify-center ${me ? "gap-3" : "gap-2"} w-100 large:h-100px bg-vogueWhite small:h-80px`}>
     
     {/* logo container */}
     <div className="relative flex flex-row items-center justify-center w-auto h-auto gap-2 large:right-2">
     
        <HiMenuAlt2 className="cursor-pointer text-30px text-crossLightPurple small:flex large:hidden"
        onClick={toggleNav}
        />
        <a href="/" className="flex items-center justify-center large:w-150px large:h-50 small:h-20px small:w-70px">
            <img src={PHOTOS.logo} alt="logo" className="w-100 h-100" />
          </a>
     </div>


      {/* desktop Nav */}
      {!activeSearch &&
      <ul className="flex-row items-center justify-center w-auto gap-1 large:flex h-100 small:hidden">
        <li className="flex items-center list-none cursor-pointer h-100 hover:text-crossLightPurple"
        onMouseEnter={showAboutDD}
        onMouseLeave={hideAboutDD}
        >
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-0.5 text-crossLightPurple"
                : "flex items-center gap-0.5"
            }
            to="/about-us/"
          >
            About Crosstie <MdKeyboardArrowDown className={`${aboutDD ? "rotate-180" : ""} text-25px`} />
          </NavLink>
        </li>

        <li className="flex items-center list-none cursor-pointer h-100 hover:text-crossLightPurple"
        
        onMouseEnter={showSolutionsDD}
        onMouseLeave={hideSolutionsDD}
        >
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-0.5 text-crossLightPurple"
                : "flex items-center gap-0.5"
            }
            to="/our-solutions/"
          >
            Our Solutions <MdKeyboardArrowDown className={`${solutionsDD ? "rotate-180" : ""} text-25px`} />
          </NavLink>
        </li>

        <li className="flex items-center list-none cursor-pointer h-100 hover:text-crossLightPurple"
        onMouseEnter={showCoursesDD}
        onMouseLeave={hideCoursesDD}
        >
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-0.5 text-crossLightPurple"
                : "flex items-center gap-0.5"
            }
            to="/our-courses/"
          >
            Our Courses <MdKeyboardArrowDown className={`${coursesDD ? "rotate-180" : ""} text-25px`} />
          </NavLink>
        </li>

        
        <li className="flex items-center list-none cursor-pointer h-100 hover:text-crossLightPurple">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-0.5 text-crossLightPurple"
                : "flex items-center gap-0.5"
            }
            to="/contact-us/"
            // to="/jhbjhjhj"
          >
            Contact Us
          </NavLink>
        </li>
        
      </ul>}

      
      {/* Mobile nav */}
      {navBar &&
      <ul className="fixed top-0 left-0 z-20 flex-col items-start justify-center gap-5 pl-2 bg-white small:flex w-70vw h-100vh large:hidden"
      // ref={navBarRef}
      >

        <div className="absolute left-0 flex items-center justify-between h-auto px-2 top-2 w-100">
          
          <Link to="/"
          onClick={toggleNav}
          ><img src={PHOTOS.logo} alt="logo" className="h-30px w-100px"/></Link>

          <IoCloseOutline className="cursor-pointer text-25px text-crossLightPurple"
          onClick={toggleNav}
          />
        </div>
        
        
        <div className="flex flex-col h-auto gap-1 w-100">
          <li className="flex items-center h-auto list-none cursor-pointer hover:text-crossLightPurple"
        onClick={toggleAboutDD}
        ref={dropdownRef}
        >
          <div
            className="flex items-center gap-0.5"
            to="/about-us/"
          >
            About Crosstie <MdKeyboardArrowDown className={`${aboutDD ? "rotate-180" : ""} text-25px`} />
          </div>
          </li>

          <li className="flex items-center h-auto list-none cursor-pointer hover:text-crossLightPurple"
          
          onClick={toggleSolutionsDD}
          ref={dropdownRef}
          >
            <div
              className="flex items-center gap-0.5"
              to="/our-solutions"
            >
              Our Solutions <MdKeyboardArrowDown className={`${solutionsDD ? "rotate-180" : ""} text-25px`} />
            </div>
          </li>

          <li className="flex items-center h-auto list-none cursor-pointer hover:text-crossLightPurple"
          onClick={toggleCoursesDD}
          ref={dropdownRef}
          >
            <div
              className="flex items-center gap-0.5"
              to="/our-courses/"
            >
              Our Courses <MdKeyboardArrowDown className={`${coursesDD ? "rotate-180" : ""} text-25px`} />
            </div>
          </li>


          <li className="flex items-center h-auto list-none cursor-pointer hover:text-crossLightPurple"
          onClick={toggleNav}
          >
            <Link
              className="flex items-center gap-0.5"
              // to="/"
              to="/contact-us/"
            >
              Contact Us
            </Link>
          </li>
        </div>


        <div className="flex flex-col items-start gap-1 mt-2 text-13px">
          <div className="text-left">Can't find what you're searching for?</div>

          <div className="text-left text-crossTextGray">We're here to help.</div>

          <div className='flex flex-col items-start h-auto gap-1 text-crossLightPurple w-100 text-13px'>
                
                <a href={`tel:08138957283`} className="flex items-center justify-center gap-1 small:gap-1 text-15px"
                onClick={toggleNav}
                ><FaPhone /> +234 708 560 4023</a>
                
                
                <a
                href="https://wa.me/2348138957283"
                className='flex items-center justify-center gap-1 small:gap-1 text-15px'
                onClick={toggleNav}
                ><FaWhatsapp className='text-whatsAppGreen'/> +234 708 560 4023</a>
                
                
                <a 
                href="mailto:info@crosstie.com"
                className='flex items-center justify-center gap-1 text-15px'
                onClick={toggleNav}
                ><MdOutlineMail /> info@crosstie.com</a>
              </div>
        </div>

        
        {me &&
        <Link to={`/${me && me.role==="user" ? "user-profile" : "admin-dashboard"}`} className="flex items-center justify-center px-2 mt-1 bg-white border w-80 h-40px border-crossLightPurple rounded-10 text-crossLightPurple"
        onClick={toggleNav}
        >{me && me.role==="user" ? "My Profile" : "Admin dashboard"}</Link>}

        {!me &&
        <Link to='/login' className="flex items-center justify-center px-2 mt-5 text-white border w-80 h-40px bg-crossLightPurple rounded-10"
        onClick={toggleNav}
        >Log In</Link>}

          {me &&
          <button className="flex items-center justify-center px-2 text-white border w-80 h-40px bg-vogueRed rounded-10"
                  onClick={()=>{
                    toggleNav();
                    localStorage.clear();
                    window.location.reload();
                    navigate("/");
                  }}
                  >Log Out</button>}
      </ul>}

      

      
        {/* desktop search and all login */}
        
      <div className="flex-row items-center w-auto gap-3 large:flex h-100 small:hidden">
        
        <div className="flex flex-row items-center justify-between gap-1 pl-1 text-gray-400 border cursor-pointer pr-0.5 w-auto text-13px h-40px rounded-20 border-crossLightPurple">
          
          <input type="search" name="" id="" placeholder="What would you love to learn today?"
          className="text-black h-90 w-200px text-11px focus:w-500px focus:border-none focus:outline-none focus:text-20px focus:pl-1"
          onFocus={()=>{
            setActiveSearch(true);
          }}
          
          
          value={programsSearchTerm}
          onChange={(e) => {
            setProgramsSearchTerm(e.target.value);
            setCurrentProgramsPage(1); // Reset to first page on search
          }}

          // onBlur={()=>{
          //   setActiveSearch(false);
          // }}
          
          />
          <CiSearch className="rounded-full text-30px bg-crossLightPurple text-vogueWhite p-0.5"/>
        </div>

          {
            me ? 

            <Link to={`/${me && me.role==="user" ? "user-profile" : "admin-dashboard"}`} className="flex items-center justify-center text-white bg-black border rounded-full w-40px h-40px text-13px">
              {/* <img src={me & me.displayPhoto} alt="user photo" className="border rounded-full w-30px h-30px border-crossLightPurple"/> */}
              {me && me.firstName.charAt(0).toUpperCase()}  {me && me.lastName.charAt(0).toUpperCase()}
              </Link>
            
            
            : <NavLink to='/login' className="flex items-center justify-center w-auto px-2 border h-40px border-crossLightPurple text-crossLightPurple rounded-20 hover:bg-crossLightPurple hover:text-vogueWhite">Log In</NavLink>
          }
        

        
      </div>



          {/* mobile all courses and search */}
          
      <div className="justify-around h-auto small:flex w-50 large:hidden">
        <div className="flex items-center justify-center px-1 text-white cursor-pointer bg-crossLightPurple rounded-10"
        onClick={()=>{
          toggleCoursesDD();
          setNavCourses(true);
        }}
        >Our Courses <MdKeyboardArrowDown className="text-25px" /></div>

        <CiSearch className="cursor-pointer text-30px text-crossLightPurple"
        onClick={toggleMobileSearch}
        />
      </div>
    </nav>
  );
}

export default Header;