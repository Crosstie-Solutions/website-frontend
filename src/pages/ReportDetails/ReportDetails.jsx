import React, { useContext, useEffect, useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { PHOTOS } from '../../assets/images';
import { Link, useParams } from 'react-router-dom';
import { MdKeyboardBackspace } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { CrossContext } from '../../Context/CrossContext';
import axios from "axios";
import { BsStack } from "react-icons/bs";
import './ReportDetails.css'





function ReportDetails() {

    const {
        baseUrl, me, formatDate,
      } = useContext(CrossContext);
    
      const postId = useParams().postId;
     
    
      const [post, setPost] = useState(null);
      const [loadingPost, setLoadingPost] = useState(false);
    
      
      console.log("post:", post);
    
    
      useEffect(()=>{
        const viewPost = async ()=> {
    
          try {
            setLoadingPost(true)
            const response = await axios.get(`${baseUrl}/api/report/${postId}`);
            setPost(response.data.data.data);
      
          } catch (error) {
            console.error('Error fetching report post:', error);
          }finally{
            setLoadingPost(false);
          }
      
        }
    
        viewPost();
      }, [postId]);


     


      

    
  return (
    <div className='flex flex-col items-center h-auto gap-5 pb-5 bg-white border large:mt-17 w-100vw text-15px small:mt-12'>
      
      {/* heading and image */}
      <div className='flex items-center justify-center text-white bg-crossLightPurple w-100 large:h-400px large:flex-row small:flex-col-reverse small:gap-2 large:gap-0 small:pb-2 large:pb-0'>
        
        
      {!loadingPost &&
        <div className='flex flex-col justify-center h-auto gap-2 large:items-start large:w-50 large:pl-10 large:pr-5 small:w-90vw small:items-center'>
            
            <div className='flex items-center justify-between border-b h-40px w-100'>
                <Link className='flex items-center gap-1'
                to='/media-report'
                >
                <MdKeyboardBackspace className='text-20px text-crossYellow'/> Media Reports</Link>

                {me && me.role !=="user" &&
                <Link className='flex items-center gap-1'
                to={`/media-report/edit/${postId && postId}`}
                ><CiEdit className='text-20px text-crossYellow'/> Edit</Link>}

                {me && me.role !=="user" &&
                <Link className='flex items-center gap-1'
                to="/admin-dashboard"
                ><BsStack className='text-20px text-crossYellow'/> Dashboard</Link>}
            </div>


            <h1 className='pb-1 font-bold leading-tight border-b large:text-45px font-custom-font w-100 small:text-25px large:text-left small:text-center'>{post && post.title}</h1>

            <div className='flex gap-2 border-b w-100 large:justify-start small:justify-center'>
                <Link className='flex items-center gap-0.5'
                to='/'
                ><FaRegUserCircle className='text-crossYellow'/> Crosstie Solutions</Link>
                
                <div className='flex items-center gap-0.5'><FaCalendar className='text-crossYellow'/> {post && post.date}</div>
            </div>
        </div>}

        {!loadingPost &&
        <img src={post && post.reportImage} alt="blog post image" className='large:w-50 large:h-100 small:w-100vw small:h-250px'/>}
       
        
        {loadingPost && <p className='font-semibold large:text-25px small:text-17px'>Loading article...</p>}
      </div>


      <div className='large:w-83vw small:w-90vw'>
        <p>{post && post.overview}</p>
      </div>
      

       {/* Blog Content */}
       <div className="prose prose-lg max-w-none blog-content large:w-83vw small:w-90vw"
            dangerouslySetInnerHTML={{ __html: post && post.content }}
          />
      </div>
  )

  
}

export default ReportDetails
