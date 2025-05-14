import React, { useContext } from "react";
import { GoArrowRight } from "react-icons/go";
import { PHOTOS } from "../../assets/images";
import { Link } from "react-router-dom";
import { CrossContext } from "../../Context/CrossContext";



function BlogPost(post) {

  const {formatDate} = useContext(CrossContext)

  const {title, blogImage, content, postId, createdAt, preview} = post
  

  return (
    
    <div className="flex flex-col items-start h-auto gap-1 px-1 py-1 bg-white border large:w-30 border-crossIconBg rounded-10 small:w-100">
      <img
        src={blogImage}
        alt="blog image"
        className="w-100 h-170px rounded-5"
      />

      <div className="flex flex-row justify-between h-auto w-100 text-crossTextGray">
        <div>Article</div>
        <div>{formatDate(createdAt)}</div>
      </div>

      <h3 className="font-semibold">
        {title}
      </h3>

      <p className="text-crossTextGray">
        {preview}...
      </p>

      <Link className="flex flex-row items-center justify-center w-auto text-crossLightPurple"
      to={`blog/${postId}`}
      >
        Read Insight
      </Link>
    </div>
  );
}



function SecondBlogPost(post) {

  const {title, blogImage, content, postId, createdAt, preview} = post;

  const {formatDate} = useContext(CrossContext);
  
  return (
    <div className="flex items-start h-auto py-1 border large:flex-row large:gap-2 large:px-1 large:w-100 border-crossIconBg rounded-10 small:w-90 small:gap-1 small:flex-col small:p-1">
      
      <img
        src={blogImage}
        alt="blog image"
        className="small:h-150px large:w-40 large:h-200px rounded-5 small:w-100"
      />

      <div className="flex flex-col items-start h-auto gap-2 large:w-60 small:w-100">
        <div className="flex-row justify-between h-auto large:flex w-100 text-crossTextGray small:hidden">
          <div>Article</div>
          <div>{formatDate(createdAt)}</div>
        </div>

        <h3 className="font-semibold w-100 small:text-13px large:text-20px">
          {title}
        </h3>

        <p className="text-crossTextGray small:hidden large:flex">
          {preview}...
        </p>

        <Link className="flex flex-row items-center justify-center w-auto gap-1 text-crossLightPurple large:text-15px small:text-13px"
        to={`/blog/${postId}`}
        >
          Read More <GoArrowRight className="text-18px"/>
        </Link>
      </div>
    </div>
  );
}


function PopularPost(post) {
  
  const {blogImage, title, postId} = post;
  
  return (
    <Link className="flex items-center h-auto gap-2 px-1 py-1 border small:flex-col large:w-100 border-crossIconBg rounded-10 small:w-100 large:flex-col"
    to={`/blog/${postId}`}
    >
      
      <img
        src={blogImage}
        alt="blog image"
        className="large:w-80 h-150px rounded-5"
      />

      <h3 className="font-semibold text-center">
        {title}
      </h3>
    </Link>
  );
}

export {BlogPost, SecondBlogPost, PopularPost};
