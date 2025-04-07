import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { CrossContext } from '../../Context/CrossContext';
import { Link, useParams } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { UpdatingBtn } from '../../components/LoadingBtn/LoadingBtn';
import { LuMoveLeft } from "react-icons/lu";


function EditBlogPostPage() {

    const {
        me,
        baseUrl,
        loginToken,
        setLoading,
        activeScreen,
        allCourses,
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
      
    
            
      
      

      
  //scroll to top
      useEffect(() => {
          window.scrollTo({ top: 0, behavior: "auto" });
        }, [activeScreen]);


        
      //funtions to edit program

      const [editErrors, setEditErrors] = useState({});
      
         //change post title
        const [editTitle, setEditTitle] = useState(false);
        const [updatingTitle, setUpdatingTitle] = useState(false);

        const [title, setTitle] = useState("");

        const toggleTitle = () => {
          setEditTitle(!editTitle);
        };

        const changeTitle = async () => {
          const validationErrors = {};

          //To ensure valid inputs

          if (!title.trim()) {
            validationErrors.title = "post title is required.";
          }

          setEditErrors(validationErrors);

          const noError = Object.keys(validationErrors).length === 0;

          if (noError) {
            try {
              setUpdatingTitle(true);
              setEditTitle(false);
              const response = await axios.patch(
                `${baseUrl}/api/blog/${postId && postId}`,
                {
                  title: title,
                },
              );

              console.log("Blog update response:", response.data);
              if ((response.data.status = "success")) {
                toast.success(
                  "Blog post updated successfully. Refresh to see changes."
                );
              }
            } catch (error) {
              console.error("Error updating Blog:", error);
            } finally {
              setUpdatingTitle(false);
            }
          }
        };



    //change Blog Image
    const [editBlogImage, setEditBlogImage] = useState(false);
    const [updatingBlogImage, setUpdatingBlogImage] = useState(false);
  
    const [blogImage, setBlogImage] = useState("");
  
    const toggleBlogImage = () => {
      setEditBlogImage(!editBlogImage);
    };
  
    const changeBlogImage = async () => {
      const validationErrors = {};
  
      //To ensure valid inputs
  
      if (!blogImage) {
        validationErrors.blogImage = "Image is required.";
      }
  
      setEditErrors(validationErrors);
  
      const noError = Object.keys(validationErrors).length === 0;
  
      if (noError) {
        try {
          setUpdatingBlogImage(true);
          setEditBlogImage(false);
          const response = await axios.patch(
            `${baseUrl}/api/blog/${postId && postId}`,
            {
              blogImage: blogImage,
            },
            {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            }
          );
  
          console.log("Blog update response:", response.data);
          if ((response.data.status = "success")) {
            toast.success(
              "Blog post updated successfully. Refresh to see changes."
            );
          }
        } catch (error) {
          console.error("Error updating Blog:", error);
        } finally {
          setUpdatingBlogImage(false);
        }
      }
    };
  


      //change main content
      
      const [editMainContent, setEditMainContent] = useState(false);
      const [updatingMainContent, setUpdatingMainContent] = useState(false);

      const [mainContent, setMainContent] = useState("");

      const toggleMainContent = () => {
        setEditMainContent(!editMainContent);
      };

      const changeMainContent = async () => {
        const validationErrors = {};

        //To ensure valid inputs

        if (!mainContent.trim()) {
          validationErrors.mainContent = "Content is required.";
        }

        setEditErrors(validationErrors);

        const noError = Object.keys(validationErrors).length === 0;

        if (noError) {
          try {
            setUpdatingMainContent(true);
            setEditMainContent(false);
            const response = await axios.patch(
              `${baseUrl}/api/blog/${postId && postId}`,
              {
                mainContent: mainContent,
              },
            );

            console.log("Blog update response:", response.data);
            if ((response.data.status = "success")) {
              toast.success(
                "Blog post updated successfully. Refresh to see changes."
              );
            }
          } catch (error) {
            console.error("Error updating Blog post:", error);
          } finally {
            setUpdatingMainContent(false);
          }
        }
      };



      
  
    //change sub-content
    const [editSubContents, setEditSubContents] = useState(false);
    const [updatingSubContents, setUpdatingSubContents] = useState(false);
  
    
    const [subContents, setSubContents] = useState([
      { subTitle: "", subContent: "" }
    ]);

    const handleSubContentChange = (index, field, value) => {
      const updated = [...subContents];
      updated[index][field] = value;
      setSubContents(updated);
    };

    const addSubContent = () => {
      setSubContents([...subContents, { subTitle: "", subContent: "" }]);
    };

    const removeSubContent = (index) => {
      const updated = [...subContents];
      updated.splice(index, 1);
      setSubContents(updated);
    };

    
    const toggleSubContents = () => {
      setEditSubContents(!editSubContents);
    };
  
    
    const changeSubContents = async () => { 
  
     
        try {
          setUpdatingSubContents(true);
          setEditSubContents(false);
          const response = await axios.patch(
            `${baseUrl}/api/blog/${postId && postId}`,
            {
              subContents: subContents,
            },
          );
  
          console.log("blog post update response:", response.data);
          if ((response.data.status = "success")) {
            toast.success(
              "Blog post updated successfully."
            );
          }
        } catch (error) {
          console.error("Error updating post:", error);
        } finally {
          setUpdatingSubContents(false);
        }
      
    };




    

  
  return (
    <div className="flex flex-col h-auto gap-2 mt-20 small:items-center large:w-83vw small:w-90vw large:items-start">
            <div className='flex'>
               <Link to='/admin-dashboard' className="flex items-center text-crossLightPurple"> <LuMoveLeft className="flex text-25px"/></Link>
              <h4 className="font-semibold pl-9 text-crossLightPurple">Edit Blog Post</h4>
            </div>

            <div
              className="flex flex-col h-auto gap-2 large:items-start w-100 large:text-15px small:text-13px small:items-center"
            >
              
              
              <div className="flex items-center justify-start h-auto lareg:gap-5 large:flex-row small:flex-col w-100 small:gap-2">
                
                {/* title */}
                <div className="flex flex-col h-auto w-100">
                  <label htmlFor="title">Title</label>
                  
                  <div className='flex flex-col h-auto gap-1 w-100'>
                    
                  {editTitle &&
                    <input
                      type="text"
                      placeholder="Enter post title"
                      name="title"
                      defaultValue={post && post.title}
                      className="p-0.5 border rounded-4"
                      onChange={(e)=>setTitle(e.target.value)}
                    />}

                    
                    {!editTitle &&
                    <div className="p-0.5 border rounded-4 flex items-center h-auto justify-between bg-white">
                      <div className='w-90'>{post && post.title}</div>
                      <CiEdit className='cursor-pointer text-25px text-crossLightPurple'
                      onClick={toggleTitle}
                      />
                    </div>}
                    
                    {editTitle && <p className="text-13px text-vogueRed">{editErrors.title}</p>}
                    
                      {editTitle &&
                      <div className='flex flex-row items-start h-auto gap-2 w-100'>
                        <button className='flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px'
                        onClick={toggleTitle}
                        >Cancel</button>
                        <button className='flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px'
                        onClick={changeTitle}
                        >Save</button>
                      </div>}

                      {updatingTitle && <UpdatingBtn />}
  
                  </div>
                  
                </div>                
              </div>


              <div className="flex items-center justify-center h-auto lareg:gap-5 large:flex-row small:flex-col w-100 small:gap-2">

                  {/* blog image */}
                <div className="flex flex-col h-auto w-100">
                  <label htmlFor="blogImage">Post Image</label>
                
                  
                  
                  <div className='flex flex-col h-auto gap-1 w-100'>
                  
                  {editBlogImage &&
                    <input
                    type="file"
                    name="blogImage"
                    accept="image/*"
                    onChange={(e) => setBlogImage(e.target.files[0])}
                  />}


                    {!editBlogImage &&
                      <div className="p-0.5 border rounded-4 flex items-center h-auto justify-between bg-white">
                        <div className='w-90'>Image File</div>
                        <CiEdit className='cursor-pointer text-25px text-crossLightPurple'
                        onClick={toggleBlogImage}
                        />
                      </div>}
                    
                      {editBlogImage && <p className="text-13px text-vogueRed">{editErrors.blogImage}</p>}
                    
                      {editBlogImage &&
                      <div className='flex flex-row items-start h-auto gap-2 w-100'>
                        <button className='flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px'
                        onClick={toggleBlogImage}
                        >Cancel</button>
                        <button className='flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px'
                        onClick={changeBlogImage}
                        >Save</button>
                      </div>}

                      {updatingBlogImage && <UpdatingBtn />}
                  </div>
                </div>
              </div>



              <div className="flex items-center justify-center h-auto lareg:gap-5 large:flex-row small:flex-col w-100 small:gap-2">
                
                {/* Main Content */}
                
                <div className="flex flex-col h-auto w-100">
                  <label htmlFor="targetAudience">
                    Main Content
                  </label>
                  
                  <div className='flex flex-col h-auto gap-1 w-100'>
                   
                   {editMainContent &&
                     <textarea
                       type="text"
                       placeholder="Who can enroll for this course?"
                       name="targetAudience"
                       className="p-0.5 border rounded-4 h-150px"
                       onChange={(e)=>setMainContent(e.target.value)}
                       defaultValue={post && post.mainContent}
                     />}
 
 
                     {!editMainContent &&
                       <div className="p-0.5 border rounded-4 flex items-center h-auto justify-between bg-white">
                          <div className='flex flex-col w-90'>
                            {
                                mainParagraphs && mainParagraphs.map((text, i)=>
                                    <p key={i} className=''>{text}</p>
                                )
                            }
                          </div>
                         
                         <CiEdit className='cursor-pointer text-25px text-crossLightPurple'
                         onClick={toggleMainContent}
                         />
                       </div>}
                     
                       {editMainContent && <p className="text-13px text-vogueRed">{editErrors.mainContent}</p>}
                     
                       {editMainContent &&
                       <div className='flex flex-row items-start h-auto gap-2 w-100'>
                         <button className='flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px'
                         onClick={toggleMainContent}
                         >Cancel</button>
                         <button className='flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px'
                         onClick={changeMainContent}
                         >Save</button>
                       </div>}
 
                       {updatingMainContent && <UpdatingBtn />}
                   </div>
                </div>

              </div>



              {/*Sub Contents */}
              <div className="flex flex-col self-start h-auto gap-1 large:w-85 small:w-85vw">
                  <label htmlFor="subContents">More Contents</label>


                   <div className='flex flex-col h-auto gap-1 w-100'>
                   
                   {
                      editSubContents && subContents && subContents.map((sub, index)=>
                       

                        <div className='flex items-center gap-1' key={index}>
                        
                          <div className='flex flex-col h-auto gap-1 w-100'>
                            <input type="text" className="p-1 border rounded-4 w-100" placeholder='Enter sub-title'
                            name='subTitle'
                            value={sub.subTitle}
                            onChange={(e) => handleSubContentChange(index, "subTitle", e.target.value)}
                            />
                            
                            
                            <textarea
                            type="text"
                            placeholder='Enter sub-content'
                            name="subContent"
                            className="p-1 border rounded-4 w-100 h-150px"
                            value={sub.subContent}
                            onChange={(e) => handleSubContentChange(index, "subContent", e.target.value)}
                            />
                          </div>
                        
                        {
                          index !==0 &&
                        
                        <button className='self-start text-crossLightPurple'
                          onClick={()=>{
                            removeSubContent(index)
                          }}
                          >- Remove</button>}
                      </div>
                            
                      )}
 
 
                     {!editSubContents &&
                       <div className="flex items-start justify-between h-auto p-2 bg-white border rounded-4">
                         <div className='flex flex-col gap-1 py-1 w-90'>
                          
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
                         <CiEdit className='cursor-pointer text-25px text-crossLightPurple'
                         onClick={toggleSubContents}
                         />
                       </div>}
                     

                          
                       {editSubContents &&
                       <button className='self-start text-crossLightPurple'
                    onClick={addSubContent}
                    >+ Add Content</button>}
                     
                       {editSubContents &&
                       <div className='flex flex-row items-start h-auto gap-2 w-100'>
                         <button className='flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px'
                         onClick={toggleSubContents}
                         >Cancel</button>
                         <button className='flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px'
                         onClick={changeSubContents}
                         >Save</button>
                       </div>}
 
                       {updatingSubContents && <UpdatingBtn />}
                   </div>

              </div>

              
            </div>
          </div>
  )
}


export default EditBlogPostPage;