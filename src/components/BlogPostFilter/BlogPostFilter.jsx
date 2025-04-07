import React, { useContext, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { CrossContext } from '../../Context/CrossContext';




function BlogPostFilter() {

    const {
      blogPostsSearchTerm, setBlogPostsSearchTerm, setCurrentBlogPostsPage
    } = useContext(CrossContext);
    
    
  return (
    <div className="flex flex-row items-center large:p-0 large:gap-0 large:justify-between rounded-10 h-100 w-100 text-15px small:justify-between">
      
        <div className='flex items-center pr-1 bg-white border rounded large:justify-center large:w-100 h-40px border-crossTextGray small:w-100 small:justify-between'>
          
          
          <input
            type="search"
            placeholder="Search Article"
            value={blogPostsSearchTerm}
            onChange={(e) => {
              setBlogPostsSearchTerm(e.target.value);
              setCurrentBlogPostsPage(1); // Reset to first page on search
            }}
            className="px-1 py-2 bg-transparent rounded large:w-100 focus:outline-none h-100 small:w-100"
          />

          <IoIosSearch className='text-20px text-cribGray text-crossTextGray'/>
        </div>
        
      </div>
  )
}

export default BlogPostFilter;
