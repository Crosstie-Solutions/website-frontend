import React, { useContext } from 'react'
import BlogPostFilter from '../BlogPostFilter/BlogPostFilter'
import { PopularPost } from '../BlogPost/BlogPost'
import { CrossContext } from '../../Context/CrossContext';

function BlogSideBar() {

    const {allBlogPosts, loadingAllBlogPosts,
    
            currentBlogPosts, handleBlogPostsPageChange,
            currentBlogPostsPage,
            totalBlogPostsPages,
            blogPostsSearchTerm,
            toggleAdminBlogPostAction,
            activeBlogPost,  
          
        } = useContext(CrossContext);

    const popularPosts = currentBlogPosts && currentBlogPosts.slice(0, 3);

    const postsToDisplay = blogPostsSearchTerm ==="" ? popularPosts : currentBlogPosts
    
  return (
    <div className='flex flex-col items-center h-auto gap-3 pb-5 w-100'>
      <div className='flex items-center justify-center w-100'>
        <BlogPostFilter />
      </div>

      <hr className='bg-gray-300 w-100 h-2px'/>

      <div className='flex flex-col items-center h-auto gap-2 w-100'>

        <h3 className='font-semibold text-20px text-crossLightPurple'>Popular Articles</h3>
        {
           postsToDisplay && postsToDisplay.map((post, i)=>
                <PopularPost 
                key={i}
                title={post.title}
                blogImage={post.blogImage}
                postId={post._id}
                />
            )
        }
        
        {!loadingAllBlogPosts && postsToDisplay && postsToDisplay.length ===0 && <p className=''>No Article found.</p>}
      </div>
    </div>
  )
}

export default BlogSideBar
