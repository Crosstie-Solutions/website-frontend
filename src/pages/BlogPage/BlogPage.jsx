import React, { useContext } from 'react';
import { SecondBlogPost } from '../../components/BlogPost/BlogPost';
import { CrossContext } from '../../Context/CrossContext';
import { HiOutlineChevronRight } from "react-icons/hi";
import { CgChevronLeft } from "react-icons/cg";
import BlogSideBar from '../../components/BlogSideBar/BlogSideBar';



function BlogPage() {

    const {allBlogPosts, loadingAllBlogPosts,

        currentBlogPosts, handleBlogPostsPageChange,
        currentBlogPostsPage,
        totalBlogPostsPages,
        blogPostsSearchTerm,
        toggleAdminBlogPostAction,
        activeBlogPost,  
      
    } = useContext(CrossContext);

    
  return (
    <div className='flex flex-col gap-2 pt-1 pb-5 bg-white large:items-start large:p-2 large:mt-20 large:w-83vw rounded-10 small:w-90vw small:mt-13 small:items-center'>

      <h2 className='font-semibold text-center w-100 large:text-30px text-crossDarkPurple small:text-20px'>Blog</h2>
      
     <div className='flex flex-row items-start justify-between h-auto w-100'>
        
        <div className='flex flex-col items-center justify-center h-auto gap-3 large:w-70 small:w-100'>
          {
              currentBlogPosts && currentBlogPosts.map((post, i)=>
                  <SecondBlogPost 
                    key={i}
                    title={post.title}
                    blogImage={post.blogImage}
                    preview={post.preview}
                    content={post.content}
                    createdAt={post.createdAt}
                    postId={post._id}
                  />
              )
          }

          {loadingAllBlogPosts && <p>Loading articles</p>}
          
          {!loadingAllBlogPosts && currentBlogPosts && currentBlogPosts.length < 1 && <p className='mt-10'>No Article found.</p>}
        </div>


        <div className='h-auto w-25 large:flex small:hidden'>
          <BlogSideBar />
        </div>
     </div>

      {/* Pagination */}
           {currentBlogPosts && currentBlogPosts.length > 0 && (
             <div className="flex items-center justify-between h-auto gap-3 mt-4 large:w-50 small:w-80">
               <button
                 className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
                 disabled={currentBlogPostsPage === 1}
                 onClick={() => handleBlogPostsPageChange(currentBlogPostsPage - 1)}
               >
                 <CgChevronLeft className="text-20px" />
               </button>
     
               <div className="text-sm">
                 Page {currentBlogPostsPage} of {totalBlogPostsPages}
               </div>
     
               <button
                 className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
                 disabled={currentBlogPostsPage === totalBlogPostsPages}
                 onClick={() => handleBlogPostsPageChange(currentBlogPostsPage + 1)}
               >
                 <HiOutlineChevronRight className="text-20px" />
               </button>
             </div>
           )}

        {loadingAllBlogPosts && <p>Loading articles</p>}
    </div>
  )
}

export default BlogPage
