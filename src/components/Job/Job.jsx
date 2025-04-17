import React, { useContext } from 'react'
import { PHOTOS } from '../../assets/images';
import { Link } from 'react-router-dom';
import { CrossContext } from '../../Context/CrossContext';


function Job(job) {

    const {role, mode, location, type, description, responsibilites, requirements, benefits, budget, recruitmentProcess, createdAt, jobId} = job;

    
    const {timeAgo} = useContext(CrossContext);


    
  return (
    <Link 
    to={`/careers/job/${jobId}`}
    className='flex justify-start h-auto gap-5 py-3 bg-white border rounded large:px-2 large:items-center large:flex-row w-100 hover:bg-purple-50 small:flex-col small:items-start small:px-1'>
        
      <img src={PHOTOS.logo} alt="logo" className='w-auto h-20px'/>

      <div className='flex flex-col items-start h-auto gap-1 w-100'>
        
        <h3 className='font-semibold large:text-20px text-crossDarkPurple small:text-17px'>{role} {budget && <span className='font-normal text-black'>- &#8358;{ budget && budget.toLocaleString()}</span>}</h3>
        
        
        <div className='flex items-center h-auto large:gap-1 large:text-15px text-crossTextGray w-100 small:text-12px small:justify-between large:justify-start'>at <span className='text-crossLightPurple'>Crosstie Solutions</span> <span className='flex items-center border rounded-full w-3px h-3px bg-crossTextGray'></span> <span className='text-black small:text-11px large:text-15px'>{mode}</span> 
        
        
        {location &&
        <span className='flex items-center border rounded-full w-3px h-3px bg-crossTextGray'></span> }
        
        {location} <span className='flex items-center border rounded-full w-3px h-3px bg-crossTextGray'></span> {type}</div>
        
        
        <div className='large:text-15px text-crossTextGray small:text-13px'>Posted {timeAgo(createdAt)}</div>
      </div>
    </Link>
  )
}

export default Job;
