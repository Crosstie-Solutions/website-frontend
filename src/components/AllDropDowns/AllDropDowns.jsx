import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CrossContext } from '../../Context/CrossContext';



function AboutDD() {

    const {hideAboutDD, showAboutDD, dropdownRef, toggleNav} = useContext(CrossContext)
    
    
  return (
    <div className='fixed z-20 flex flex-col h-auto gap-1 px-1 py-2 bg-white shadow-lg w-250px large:top-13 large:left-25vw text-15px small:top-15 small:left-2'
    ref={dropdownRef}
    onMouseEnter={showAboutDD}
    onMouseLeave={hideAboutDD}
    >
      <Link to="/about-us" className='flex items-center justify-between pl-1 text-black hover:bg-crossFooterText'
       onClick={()=>{
        toggleNav();
        hideAboutDD()
       }}
      >About Us</Link>
      
      <Link to='/about-us/our-story' className='flex items-center justify-between pl-1 text-black hover:bg-crossFooterText'
       onClick={()=>{
        toggleNav();
        hideAboutDD()
       }}
      >Our Story</Link>
      
      <Link to='/about-us/leadership' className='flex items-center justify-between pl-1 text-black hover:bg-crossFooterText'
       onClick={()=>{
        toggleNav();
        hideAboutDD()
       }}
      >Leadership</Link>

      <Link to='/about-us/our-clients' className='flex items-center justify-between pl-1 text-black hover:bg-crossFooterText'
       onClick={()=>{
        toggleNav();
        hideAboutDD()
       }}
      >Our Clients</Link>
      
      <Link to='/about-us/feedbacks' className='flex items-center justify-between pl-1 text-black hover:bg-crossFooterText'
       onClick={()=>{
        toggleNav();
        hideAboutDD()
       }}
      >Participants Feedbacks</Link>
      
      <Link to='/about-us/satisfaction' className='flex items-center justify-between pl-1 text-black hover:bg-crossFooterText'
       onClick={()=>{
        toggleNav();
        hideAboutDD()
       }}
      >Satisfaction Guaranteed</Link>

        <Link to='/about-us/crosstie-photos' className='flex items-center justify-between pl-1 text-black hover:bg-crossFooterText'
       onClick={()=>{
        toggleNav();
        hideAboutDD()
       }}
      >Crosstie Photos</Link>
    </div>
  )
}



function SolutionsDD() {

  const {showSolutionsDD, hideSolutionsDD, dropdownRef, toggleNav} = useContext(CrossContext)
  
return (
  <div className='fixed z-20 flex flex-col h-auto gap-1 px-1 py-2 bg-white rounded shadow-lg w-250px large:top-13 large:left-35vw text-15px small:top-19 small:left-2'
  ref={dropdownRef}
  onMouseEnter={showSolutionsDD}
  onMouseLeave={hideSolutionsDD}
  >
    <Link to='/shop/lotion' className='flex items-center justify-between pl-1 text-black hover:bg-crossFooterText'
    // onClick={toggleNav}
    >Corporate Training</Link>
    
    <Link to='/shop/face' className='flex items-center justify-between pl-1 text-black hover:bg-crossFooterText'
    // onClick={toggleNav}
    >Management Consulting</Link>
    
    <Link to='/shop/soap' className='flex items-center justify-between pl-1 text-black hover:bg-crossFooterText'
    // onClick={toggleNav}
    >Customized Training</Link>

    <Link to='/shop/scrub' className='flex items-center justify-between pl-1 text-black hover:bg-crossFooterText'
    // onClick={toggleNav}
    >Upcoming Webinars</Link>
    
    <Link to='/shop/oil' className='flex items-center justify-between pl-1 text-black hover:bg-crossFooterText'
    // onClick={toggleNav}
    >Soft Skills  Launchpad  Programme (SSLP)</Link>
    
    <Link to='/shop/serum' className='flex items-center justify-between pl-1 text-black hover:bg-crossFooterText'
    // onClick={toggleNav}
    >The Resource Vault</Link>

  </div>
)
}


function CoursesDD() {

  const {showCoursesDD, hideCoursesDD, navCourses, dropdownRef} = useContext(CrossContext)
  
return (
  <div className={`fixed z-20 flex flex-col h-auto gap-1 px-1 py-2 bg-white border rounded shadow-lg w-250px large:top-13 large:left-45vw text-15px ${navCourses ? "small:top-13 small:left-10vw" : "small:top-24 small:left-2"}`}
  ref={dropdownRef}
  onMouseEnter={showCoursesDD}
  onMouseLeave={hideCoursesDD}
  >
    <Link to='/our-courses' className='flex items-center justify-between pl-1 text-black hover:bg-crossFooterText'
    // onClick={toggleCategories}
    >Open Executive  Programmes (OEP)</Link>
    
    
    <Link to='/our-courses/executive-leadership' className='flex items-center justify-between pl-1 text-black hover:bg-crossFooterText'
    // onClick={toggleCategories}
    >Executive  Leadership  Programme (ELP)</Link>
    
    
    <Link to='/our-courses/sales-excellence' className='flex items-center justify-between pl-1 text-black hover:bg-crossFooterText'
    // onClick={toggleCategories}
    >Sales Excellence  Series (SES)</Link>


    <Link to='/our-courses/complete-employee' className='flex items-center justify-between pl-1 text-black hover:bg-crossFooterText'
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
//     <Link to='/shop/lotion' className='flex items-center justify-between pl-1 hover:bg-qxDarkGreen'
//     onClick={toggleNav}
//     >Qx5 Lotion <MdChevronRight className='text-20px'/></Link>
    
//     <Link to='/shop/face-cream' className='flex items-center justify-between pl-1 hover:bg-qxDarkGreen'
//     onClick={toggleNav}
//     >Qx5 Face Cream <MdChevronRight className='text-20px'/></Link>
    
//     <Link to='/shop/soap' className='flex items-center justify-between pl-1 hover:bg-qxDarkGreen'
//     onClick={toggleNav}
//     >Qx5 Soap <MdChevronRight className='text-20px'/></Link>

//     <Link to='/shop/scrub' className='flex items-center justify-between pl-1 hover:bg-qxDarkGreen'
//     onClick={toggleNav}
//     >Qx5 Scrub <MdChevronRight className='text-20px'/></Link>
    
//     <Link to='/shop/oil' className='flex items-center justify-between pl-1 hover:bg-qxDarkGreen'
//     onClick={toggleNav}
//     >Qx5 Oil <MdChevronRight className='text-20px'/></Link>
    
//     <Link to='/shop/serum' className='flex items-center justify-between pl-1 hover:bg-qxDarkGreen'
//     onClick={toggleNav}
//     >Qx5 Serum <MdChevronRight className='text-20px'/></Link>
//   </div>
// )
// }

export  { AboutDD, SolutionsDD, CoursesDD };
