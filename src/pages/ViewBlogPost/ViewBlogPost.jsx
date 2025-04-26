import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CrossContext } from '../../Context/CrossContext';
import axios from "axios";
import './ViewBlogPost.css'





function ViewBlogPost() {

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


       
      
      if (!post && loadingPost) {
        return <div className="p-10 text-center">Loading...</div>;
      }

   
    
      return (
        <div className="max-w-4xl p-6 mx-auto mt-10 bg-white rounded-lg shadow-md">
          {/* Blog Image */}
          {post && post.blogImage && (
            <img
              src={post && post.blogImage}
              alt={post && post.title}
              className="object-cover w-full h-64 mb-6 rounded"
            />
          )}
    
          {/* Blog Title */}
          <h1 className="mb-4 text-3xl font-bold text-gray-800">{post && post.title}</h1>
    
          {/* Blog Content */}
          <div className="prose prose-lg max-w-none blog-content"
            dangerouslySetInnerHTML={{ __html: post && post.content }}
          />
          
        </div>
      );
  
};

export default ViewBlogPost;
