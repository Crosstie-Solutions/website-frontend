import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CrossContext } from '../../Context/CrossContext';



function AboutDD() {

    const {hideAboutDD, showAboutDD, dropdownRef, toggleNav, me} = useContext(CrossContext)
    
    
  return (
    <div className={`fixed z-20 flex flex-col h-auto gap-1 py-2 bg-white border-2 shadow-lg w-250px large:top-13 ${me ? "large:left-23vw" : "large:left-22vw"} text-15px small:top-15 small:left-2 border-t-crossLightPurple`}
    ref={dropdownRef}
    onMouseEnter={showAboutDD}
    onMouseLeave={hideAboutDD}
    >
      <Link to="/about-us/" className='flex items-center justify-between py-1 pl-1 text-black hover:bg-gray-200 hover:text-crossLightPurple'
       onClick={()=>{
        toggleNav();
        hideAboutDD();
       }}
      >About Us</Link>
      
      <Link to='/about-us/our-story' className='flex items-center justify-between py-1 pl-1 text-black hover:bg-gray-200 hover:text-crossLightPurple'
       onClick={()=>{
        toggleNav();
        hideAboutDD()
       }}
      >Our Story</Link>
      
      <Link to='/about-us/leadership' className='flex items-center justify-between py-1 pl-1 text-black hover:bg-gray-200 hover:text-crossLightPurple'
       onClick={()=>{
        toggleNav();
        hideAboutDD()
       }}
      >Leadership</Link>

      <Link to='/about-us/our-clients' className='flex items-center justify-between py-1 pl-1 text-black hover:bg-gray-200 hover:text-crossLightPurple'
       onClick={()=>{
        toggleNav();
        hideAboutDD()
       }}
      >Our Clients</Link>
      
      <Link to='/about-us/feedbacks' className='flex items-center justify-between py-1 pl-1 text-black hover:bg-gray-200 hover:text-crossLightPurple'
       onClick={()=>{
        toggleNav();
        hideAboutDD()
       }}
      >Participants Feedbacks</Link>
      
      <Link to='/about-us/satisfaction' className='flex items-center justify-between py-1 pl-1 text-black hover:bg-gray-200 hover:text-crossLightPurple'
       onClick={()=>{
        toggleNav();
        hideAboutDD()
       }}
      >Satisfaction Guaranteed</Link>

        <Link to='/about-us/crosstie-photos' className='flex items-center justify-between py-1 pl-1 text-black hover:bg-gray-200 hover:text-crossLightPurple'
       onClick={()=>{
        toggleNav();
        hideAboutDD()
       }}
      >Crosstie Photos</Link>
    </div>
  )
}



function SolutionsDD() {

  const {showSolutionsDD, hideSolutionsDD, dropdownRef, toggleNav, me, loginToken} = useContext(CrossContext)
  
return (
  <div className={`fixed z-20 flex flex-col h-auto gap-1 py-2 bg-white border-2 rounded shadow-lg w-250px large:top-13 ${ me ? "large:left-35vw" : "large:left-33vw"} text-15px small:top-19 small:left-2 border-t-crossLightPurple`}
  ref={dropdownRef}
  onMouseEnter={showSolutionsDD}
  onMouseLeave={hideSolutionsDD}
  >
    <Link to='/our-solutions/' className='flex items-center justify-between py-1 pl-1 text-black hover:bg-gray-200 hover:text-crossLightPurple'
    onClick={toggleNav}
    >Corporate Training</Link>
    
    <Link to='/our-solutions/management-consulting' className='flex items-center justify-between py-1 pl-1 text-black hover:bg-gray-200 hover:text-crossLightPurple'
    onClick={toggleNav}
    >Management Consulting</Link>
    
    <Link to='/our-solutions/customized-training' className='flex items-center justify-between py-1 pl-1 text-black hover:bg-gray-200 hover:text-crossLightPurple'
    onClick={toggleNav}
    >Customized Training</Link>

    <Link to='/our-solutions/webinars' className='flex items-center justify-between py-1 pl-1 text-black hover:bg-gray-200 hover:text-crossLightPurple'
    onClick={toggleNav}
    >Upcoming Webinars</Link>
    
    <Link to='/our-solutions/soft-skills-launchpad' className='flex items-center justify-between py-1 pl-1 text-black hover:bg-gray-200 hover:text-crossLightPurple'
    onClick={toggleNav}
    >Soft Skills  Launchpad  Programme (SSLP)</Link>
    
    <Link to='/our-solutions/resource/vault' className='flex items-center justify-between py-1 pl-1 text-black hover:bg-gray-200 hover:text-crossLightPurple'
    onClick={toggleNav}
    >The Resource Vault</Link>

  </div>
)
}


function CoursesDD() {

  const {showCoursesDD, hideCoursesDD, navCourses, dropdownRef, toggleNav, me} = useContext(CrossContext);
  
  
return (
  <div className={`fixed z-20 flex flex-col h-auto gap-1 py-2 bg-white border rounded shadow-lg w-250px large:top-13 ${me ? "large:left-46vw" : "large:left-44vw"} text-15px ${navCourses ? "small:top-13 small:left-10vw" : "small:top-24 small:left-2"} border-2 border-t-crossLightPurple`}
  ref={dropdownRef}
  onMouseEnter={showCoursesDD}
  onMouseLeave={hideCoursesDD}
  >
    <Link to='/our-courses/' className='flex items-center justify-between py-1 pl-1 text-black hover:bg-gray-200 hover:text-crossLightPurple'
    // onClick={toggleCategories}
    >Open Executive  Programmes (OEP)</Link>
    
    
    <Link to='/our-courses/executive-leadership' className='flex items-center justify-between py-1 pl-1 text-black hover:bg-gray-200 hover:text-crossLightPurple'
    // onClick={toggleCategories}
    >Executive  Leadership  Programme (ELP)</Link>
    
    
    <Link to='/our-courses/sales-excellence' className='flex items-center justify-between py-1 pl-1 text-black hover:bg-gray-200 hover:text-crossLightPurple'
    // onClick={toggleCategories}
    >Sales Excellence  Series (SES)</Link>


    <Link to='/our-courses/complete-employee' className='flex items-center justify-between py-1 pl-1 text-black hover:bg-gray-200 hover:text-crossLightPurple'
    // onClick={toggleCategories}
    >Complete  Employee Series  (CES)</Link>


      <Link 
      // to='/' 
      to='/our-courses/team-bonding' 
      className='flex items-center justify-between py-1 pl-1 text-black hover:bg-gray-200 hover:text-crossLightPurple'
    // onClick={toggleCategories}
    >Crosstie Team Bonding (CTB)</Link>

  </div>
)
}


export  { AboutDD, SolutionsDD, CoursesDD };
