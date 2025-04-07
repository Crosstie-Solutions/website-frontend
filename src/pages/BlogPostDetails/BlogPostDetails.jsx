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





function BlogPostDetails() {

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
            const response = await axios.get(`${baseUrl}/api/blog/${postId}`);
            setPost(response.data.data.data);
      
          } catch (error) {
            console.error('Error fetching blog post:', error);
          }finally{
            setLoadingPost(false);
          }
      
        }
    
        viewPost();
      }, [postId]);


       // to split paragraph
       function splitParagraphByFullStops(text, limit = 3) {
        const sentences = text.split('.').map(s => s.trim()).filter(Boolean);
        const paragraphs = [];
      
        for (let i = 0; i < sentences.length; i += limit) {
          const chunk = sentences.slice(i, i + limit).join('. ') + '.';
          paragraphs.push(chunk);
        }
      
        return paragraphs;
      }
      


      const mainParagraphs = post && splitParagraphByFullStops(post.mainContent);

    
  return (
    <div className='flex flex-col items-center h-auto gap-5 border mt-17 w-100vw text-15px'>
      
      {/* heading and image */}
      <div className='flex items-center justify-center text-white bg-crossLightPurple w-100 h-400px'>
        
      {!loadingPost &&
        <div className='flex flex-col items-start justify-center h-auto gap-2 w-50 large:pl-10 large:pr-5'>
            
            <div className='flex items-center justify-between border-b h-40px w-100'>
                <Link className='flex items-center gap-1'
                to='/blog'
                >
                <MdKeyboardBackspace className='text-20px text-crossYellow'/> Back To Insights</Link>

                {me && me.role !=="user" &&
                <Link className='flex items-center gap-1'
                to={`/blog/edit/${postId && postId}`}
                ><CiEdit className='text-20px text-crossYellow'/> Edit Post</Link>}

                {me && me.role !=="user" &&
                <Link className='flex items-center gap-1'
                to="/admin-dashboard"
                ><BsStack className='text-20px text-crossYellow'/> Dashboard</Link>}
            </div>


            <h1 className='pb-1 font-bold leading-tight border-b text-45px font-custom-font w-100'>{post && post.title}</h1>

            <div className='flex gap-2 border-b w-100'>
                <Link className='flex items-center gap-0.5'
                to='/'
                ><FaRegUserCircle className='text-crossYellow'/> Crosstie Solutions</Link>
                
                <div className='flex items-center gap-0.5'><FaCalendar className='text-crossYellow'/> {formatDate(post && post.createdAt)}</div>
            </div>
        </div>}

        {!loadingPost &&
        <img src={post && post.blogImage} alt="blog post image" className='w-50 h-100'/>}
        
        {loadingPost && <p className='font-semibold text-25px'>Loading article...</p>}
      </div>

      <div className='flex flex-col items-start gap-3 w-83vw'>
        {/* main content */}
       <div className='flex flex-col h-auto gap-2 w-100'>
            {
                mainParagraphs && mainParagraphs.map((text, i)=>
                    <p key={i} className=''>{text}</p>
                )
            }
       </div>
        
        
        {/* sub contents */}
        <div className='flex flex-col items-start gap-3 w-100'>
            {
                post && post.subContents.length > 0 && post.subContents.map((content, i)=>{

                    const subParagraphs = post && splitParagraphByFullStops(content.subContent);
                    
                    return(
                        <div
                            key={i}
                            className='flex flex-col h-auto gap-1 w-100'
                            >
                                <h3 className='font-semibold text-20px'>{content.subTitle}</h3>
                    
                               <div className='flex flex-col h-auto gap-1 w-100'>
                                    {
                                        subParagraphs && subParagraphs.map((text, i)=>
                                            <p key={i} className=''>{text}</p>
                                        )
                                     }
                               </div>
                        </div>
                    )
                }
                )
            }
            
        </div>
        
      </div>
    </div>
  )
}

export default BlogPostDetails
