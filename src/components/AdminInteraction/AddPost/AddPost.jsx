import React, { useContext, useEffect, useState } from 'react';
import { CrossContext } from '../../../Context/CrossContext';
import axios from 'axios';
import { toast } from 'react-toastify';




function AddPost() {

    const {
        me,
        baseUrl,
        loginToken,
        setLoading,
        activeScreen,
        allCourses, setActiveScreen
      } = useContext(CrossContext);



      const [title, setTitle] = useState("");
      const [mainContent, setMainContent] = useState("");
      const [subContents, setSubContents] = useState([
        { subTitle: "", subContent: "" }
      ]);
      const [blogImage, setBlogImage] = useState(null);

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



      
  //scroll to top
      useEffect(() => {
          window.scrollTo({ top: 0, behavior: "auto" });
        }, [activeScreen]);
        

        
      
        //product errors
        const [postErrors, setPostErrors] = useState({});
        console.log('productData:', productData);
      

  //to add blog post
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};
      
    //To ensure valid inputs
    if (!title.trim()) {
      validationErrors.title = "post title is required";
    }
    if (!mainContent.trim()) {
      validationErrors.mainContent = "post content is required";
    }
    if (!blogImage) {
      validationErrors.blogImage = "post image is required";
    }

    setPostErrors(validationErrors);
      
    const noError = Object.keys(validationErrors).length === 0;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("mainContent", mainContent);
    formData.append("blogImage", blogImage);
    if(subContents){
      formData.append("subContents", JSON.stringify(subContents));
    }

    if(noError){
      setLoading(true)
      
      try {
        const response = await axios.post(`${baseUrl}/api/blog`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
  
        console.log("Blog upload response:", response.data);
        if(response.status===201){
          toast.success('Blog post created successfully!');
        }
      } catch (error) {
        if(error){
          toast.error("Error creating blog post:", error.response.data.message)
        }
      }finally{
        setLoading(false)
      }
  
    }
    
  };
      



  return (
    <div className="flex flex-col items-start h-auto gap-2 w-100">
            <h4 className="font-semibold text-crossLightPurple">Create A Post</h4>

            <div
              className="flex flex-col h-auto gap-2 w-100 large:text-15px small:text-13px"
            >
              {/* title */}
              <div className="flex items-center justify-start h-auto gap-5 w-100">
                <div className="flex flex-col h-auto w-100">
                  <label htmlFor="title" className='font-semibold'>Post Title</label>
                  <input
                    type="text"
                    placeholder="Enter post title"
                    name="title"
                    className="p-1 border rounded-4"
                    onChange={(e)=>setTitle(e.target.value)}
                  />
                  {postErrors && (
                    <p className="text-13px text-vogueRed">
                      {postErrors.title}
                    </p>
                  )}
                </div>
              </div>

              {/* blog image */}
              <div className="flex items-center justify-start h-auto gap-5 w-100">                
                <div className="flex flex-col h-auto w-100">
                  <label htmlFor="blogImage" className='font-semibold'>Post Image</label>
                  <input
                    type="file"
                    name="blogImage"
                    accept="image/*"
                    className='p-0.5 rounded-4 cursor-pointer'
                    onChange={(e) => setBlogImage(e.target.files[0])}
                  />
                  
                  {postErrors && (
                    <p className="text-13px text-vogueRed">
                      {postErrors.blogImage}
                    </p>
                  )}

                </div>
              </div>


              {/* Main Content */}
              <div className="flex items-center justify-start h-auto gap-5 w-100">
                <div className="flex flex-col h-auto w-100">
                  <label htmlFor="mainContent" className='font-semibold'>Main Content</label>
                  
                  <textarea
                    type="text"
                    name="mainContent"
                    placeholder='Enter main content'
                    className="p-1 border rounded-4 h-150px"
                    onChange={(e)=>setMainContent(e.target.value)}
                  />
                  
                  {postErrors && (
                    <p className="text-13px text-vogueRed">
                      {postErrors.mainContent}
                    </p>
                  )}
                </div>
              </div>

               {/* sub-contents */}
               <div className="flex flex-col h-auto gap-1 w-100">
                  <label htmlFor="objectives" className='font-semibold'>More Contents (Optional)</label>
                  {
                    subContents && subContents.map((sub, index)=>
                      <div className='flex items-center gap-1' key={index}>
                        
                          <div className='flex flex-col h-auto gap-1 w-85'>
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
                    )
                  }
                  
                  {postErrors && (
                    <p className="text-13px text-vogueRed">
                      {postErrors.objectives}
                    </p>
                  )}

                 

                  <button className='self-start text-crossLightPurple'
                  onClick={addSubContent}
                  >+ Add Content</button>
              </div>              

              <button
                onClick={handleSubmit}
                className="flex items-center justify-center mt-5 large:w-20 rounded-4 h-40px bg-crossLightPurple text-vogueWhite hover:bg-transparent small:w-50 hover:border hover:border-crossLightPurple hover:text-crossLightPurple"
              >
                Create Post
              </button>
            </div>
          </div>
  )
}


export default AddPost;