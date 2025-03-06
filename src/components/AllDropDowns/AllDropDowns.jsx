import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdChevronRight } from "react-icons/md";
import { CrossContext } from '../../Context/CrossContext';




function AboutDD() {

    const {hideAboutDD, showAboutDD} = useContext(CrossContext)
    
  return (
    <div className='absolute z-20 flex flex-col h-auto gap-1 px-1 py-2 bg-white border rounded shadow-lg w-250px large:top-13 large:left-25vw text-15px small:top-25 small:left-10vw'
    // ref={categoriesRef}
    onMouseEnter={showAboutDD}
    onMouseLeave={hideAboutDD}
    >
      <Link to='/shop/lotion' className='flex items-center justify-between pl-1 text-black hover:text-white hover:bg-crossLightPurple'
      // onClick={toggleCategories}
      >About Us</Link>
      
      <Link to='/shop/face' className='flex items-center justify-between pl-1 text-black hover:text-white hover:bg-crossLightPurple'
      // onClick={toggleCategories}
      >Our Story</Link>
      
      <Link to='/shop/soap' className='flex items-center justify-between pl-1 text-black hover:text-white hover:bg-crossLightPurple'
      // onClick={toggleCategories}
      >Leadership</Link>

      <Link to='/shop/scrub' className='flex items-center justify-between pl-1 text-black hover:text-white hover:bg-crossLightPurple'
      // onClick={toggleCategories}
      >Our Clients</Link>
      
      <Link to='/shop/oil' className='flex items-center justify-between pl-1 text-black hover:text-white hover:bg-crossLightPurple'
      // onClick={toggleCategories}
      >Participants Feedbacks</Link>
      
      <Link to='/shop/serum' className='flex items-center justify-between pl-1 text-black hover:text-white hover:bg-crossLightPurple'
      // onClick={toggleCategories}
      >Satisfaction Guaranteed</Link>

        <Link to='/shop/serum' className='flex items-center justify-between pl-1 text-black hover:text-white hover:bg-crossLightPurple'
      // onClick={toggleCategories}
      >Crosstie Photos</Link>
    </div>
  )
}



function SolutionsDD() {

  const {showSolutionsDD, hideSolutionsDD} = useContext(CrossContext)
  
return (
  <div className='absolute z-20 flex flex-col h-auto gap-1 px-1 py-2 bg-white border rounded shadow-lg w-250px large:top-13 large:left-35vw text-15px small:top-30 small:left-10vw'
  // ref={categoriesRef}
  onMouseEnter={showSolutionsDD}
  onMouseLeave={hideSolutionsDD}
  >
    <Link to='/shop/lotion' className='flex items-center justify-between pl-1 text-black hover:text-white hover:bg-crossLightPurple'
    // onClick={toggleCategories}
    >Corporate Training</Link>
    
    <Link to='/shop/face' className='flex items-center justify-between pl-1 text-black hover:text-white hover:bg-crossLightPurple'
    // onClick={toggleCategories}
    >Management Consulting</Link>
    
    <Link to='/shop/soap' className='flex items-center justify-between pl-1 text-black hover:text-white hover:bg-crossLightPurple'
    // onClick={toggleCategories}
    >Customized Training</Link>

    <Link to='/shop/scrub' className='flex items-center justify-between pl-1 text-black hover:text-white hover:bg-crossLightPurple'
    // onClick={toggleCategories}
    >Upcoming Webinars</Link>
    
    <Link to='/shop/oil' className='flex items-center justify-between pl-1 text-black hover:text-white hover:bg-crossLightPurple'
    // onClick={toggleCategories}
    >Soft Skills  Launchpad  Programme (SSLP)</Link>
    
    <Link to='/shop/serum' className='flex items-center justify-between pl-1 text-black hover:text-white hover:bg-crossLightPurple'
    // onClick={toggleCategories}
    >The Resource Vault</Link>

  </div>
)
}


function CoursesDD() {

  const {showCoursesDD, hideCoursesDD, navCourses} = useContext(CrossContext)
  
return (
  <div className={`absolute z-20 flex flex-col h-auto gap-1 px-1 py-2 bg-white border rounded shadow-lg w-250px large:top-13 large:left-45vw text-15px ${navCourses ? "small:top-13 small:left-10vw" : "small:top-35 small:left-10vw"}`}
  // ref={categoriesRef}
  onMouseEnter={showCoursesDD}
  onMouseLeave={hideCoursesDD}
  >
    <Link to='/shop/lotion' className='flex items-center justify-between pl-1 text-black hover:text-white hover:bg-crossLightPurple'
    // onClick={toggleCategories}
    >Open Executive  Programmes (OEP)</Link>
    
    <Link to='/shop/face' className='flex items-center justify-between pl-1 text-black hover:text-white hover:bg-crossLightPurple'
    // onClick={toggleCategories}
    >Executive  Leadership  Programme (ELP)</Link>
    
    <Link to='/shop/soap' className='flex items-center justify-between pl-1 text-black hover:text-white hover:bg-crossLightPurple'
    // onClick={toggleCategories}
    >Sales Excellence  Series (SES)</Link>

    <Link to='/shop/scrub' className='flex items-center justify-between pl-1 text-black hover:text-white hover:bg-crossLightPurple'
    // onClick={toggleCategories}
    >Complete  Employee Series  (CES)</Link>

  </div>
)
}

// function MobileCategoriesDD({toggleNav}) {

//   const {categoriesRef} = useContext(QxContext)
  
// return (
//   <div className='relative flex flex-col h-auto px-1 py-1 bg-white w-100 text-15px bottom-3'
//   ref={categoriesRef}
//   >
//     <Link to='/shop/lotion' className='flex items-center justify-between pl-1 hover:text-white hover:bg-qxDarkGreen'
//     onClick={toggleNav}
//     >Qx5 Lotion <MdChevronRight className='text-20px'/></Link>
    
//     <Link to='/shop/face-cream' className='flex items-center justify-between pl-1 hover:text-white hover:bg-qxDarkGreen'
//     onClick={toggleNav}
//     >Qx5 Face Cream <MdChevronRight className='text-20px'/></Link>
    
//     <Link to='/shop/soap' className='flex items-center justify-between pl-1 hover:text-white hover:bg-qxDarkGreen'
//     onClick={toggleNav}
//     >Qx5 Soap <MdChevronRight className='text-20px'/></Link>

//     <Link to='/shop/scrub' className='flex items-center justify-between pl-1 hover:text-white hover:bg-qxDarkGreen'
//     onClick={toggleNav}
//     >Qx5 Scrub <MdChevronRight className='text-20px'/></Link>
    
//     <Link to='/shop/oil' className='flex items-center justify-between pl-1 hover:text-white hover:bg-qxDarkGreen'
//     onClick={toggleNav}
//     >Qx5 Oil <MdChevronRight className='text-20px'/></Link>
    
//     <Link to='/shop/serum' className='flex items-center justify-between pl-1 hover:text-white hover:bg-qxDarkGreen'
//     onClick={toggleNav}
//     >Qx5 Serum <MdChevronRight className='text-20px'/></Link>
//   </div>
// )
// }

export  { AboutDD, SolutionsDD, CoursesDD };
