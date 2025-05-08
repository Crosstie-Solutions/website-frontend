import React from 'react';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";



function Breadcrumb(program) {

    const {title, catRoute, category} = program;

  return (
    <div className='absolute z-10 flex items-center h-auto gap-0.5 py-1 text-gray-300 large:top-2 small:w-90vw large:w-83vw large:text-15px small:top-0 small:justify-start large:justify-start flex-wrap'>
      <Link to='/'><IoHomeOutline className='text-20px'/></Link>
      <span>/</span>
      <Link to='/our-courses/'>Our Courses</Link>
      <span>/</span>
      <Link to={`/our-courses/${catRoute}`}>{category}</Link>
      {/* <span>/</span>
      <span>{title}</span> */}
    </div>
  )
}

export default Breadcrumb
