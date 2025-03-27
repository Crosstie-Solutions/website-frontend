import React, { useContext, useEffect, useState } from 'react';
import { CrossContext } from '../../../Context/CrossContext';
import axios from 'axios';
import { toast } from 'react-toastify';




function AddProgram() {

    const {
        me,
        baseUrl,
        loginToken,
        setLoading,
        activeScreen,
        allCourses,
      } = useContext(CrossContext);


      //to add and remove more training dates
      const [date, setDate] = useState([""]);

      console.log("dates:", date);

      const addDate = () => {
        setDate([...date, ""]);
      };

      const removeDate = (index) => {
        setDate(date.filter((_, i) => i !== index));
    };


    // Update a date's value by index
  const updateDate = (index, value) => {
    const updatedDates = [...date];
    updatedDates[index] = value;
    setDate(updatedDates);
    
  };


  
  //to add and remove training objectives
  const [objectives, setObjectives] = useState([""]);

  console.log("objectives:", objectives);

  const addObjective = () => {
    setObjectives([...objectives, ""]);
  };

  const removeObjective = (index) => {
    setObjectives(objectives.filter((_, i) => i !== index));
};


// Update a subheading's value by index
    const updateObjective = (index, value) => {
        const updatedObjectives = [...objectives];
        updatedObjectives[index] = value;
        setObjectives(updatedObjectives);
    };
      

      
  //scroll to top
      useEffect(() => {
          window.scrollTo({ top: 0, behavior: "auto" });
        }, [activeScreen]);


      //to add product
        const [productData, setProductData] = useState({
          title: "",
          cost: 0,
          description: "",
          courseContent: null,
          targetAudience: "",
          mode: "",
          time: "",
          // category: "",
          // course: "",
          duration: "",
          // date: [],
          // objectives: [],
        });

        
        //to capture category and course at the same time
        const [category, setCategory] = useState("");
        const [course, setCourse] = useState("");

        const handleCategoryChange = (e) => {
          const { name, value } = e.target;


          const extractedValues = value.split('-')

          setCategory(extractedValues[0]);
          setCourse(extractedValues[1]);
      
          console.log("category:", category);
          console.log("course:", course);
        };
        

        
      
        //product errors
        const [productErrors, setProductErrors] = useState({});
        console.log('productData:', productData);
      
        
      
        const handleChange = (e) => {
          const { name, value } = e.target;
      
          setProductData({ ...productData, [name]: value });
      
          console.log("productData:", productData);
        };
      

        const handleFileChange = (e) => {
          setProductData({ ...productData, courseContent: e.target.files[0] });
      
          console.log("productData:", productData);
        };
      
      
        
        //to add product
  const handleSubmit = async (e) => {
          e.preventDefault();
      
          const validationErrors = {};
      
          //To ensure valid inputs
          if (!productData.title.trim()) {
            validationErrors.title = "product title is required";
          }
      
          if (!category.trim()) {
            validationErrors.category = "specify product category";
          }
      
          if (productData.cost < 1) {
            validationErrors.cost = "add product cost";
          }
      
      
          if (!productData.targetAudience) {
            validationErrors.targetAudience = "specify product target audience";
          }
      
          if (!productData.duration) {
            validationErrors.duration = "add product duration";
          }

          if (!productData.mode) {
            validationErrors.mode = "add product mode";
          }

          if (!productData.time) {
            validationErrors.time = "add product time";
          }

          if (date.length < 1) {
            validationErrors.date = "add product date";
          }

          if (objectives.length < 1) {
            validationErrors.objectives = "add product objectives";
          }
      
      
          if (!productData.description.trim()) {
            validationErrors.description = "add a brief description to the product";
          }
      
          if (!productData.courseContent) {
            validationErrors.courseContent = "upload course content.";
          }
      
      
          setProductErrors(validationErrors);
      
          const noError = Object.keys(validationErrors).length === 0;
      
          const formData = new FormData();
          formData.append("title", productData.title);
          formData.append("cost", Number(productData.cost));
          formData.append("targetAudience", productData.targetAudience);
          formData.append("mode", productData.mode);
          formData.append("time", productData.time);
          formData.append("description", productData.description);
          formData.append("duration", productData.duration);
          formData.append("category", category);
          formData.append("course", course);
          formData.append("courseContent", productData.courseContent);
          // formData.append("date", JSON.stringify(date));
          date.forEach(item => formData.append("date[]", item));
          objectives.forEach(item => formData.append("objectives[]", item));
          // formData.append("objectives", JSON.stringify(objectives));
      
          // Append each pdf file to the formData
          // for (let i = 0; i < productData.courseContent.length; i++) {
          //   formData.append("courseContent", productData.courseContent[i]);
          // }
      
          // Log each key-value pair in FormData
          for (let pair of formData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
          }

          
      
          if (noError) {
            setLoading(true);
      
            try {
              const response = await axios.post(`${baseUrl}/api/program`, formData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                  // Authorization: `Bearer ${loginToken}`,
                },
                // withCredentials: true, // Important for sending cookies
              });
      
              console.log("add program message:", response.data.message);
              if (response.data.message === "program created successful.") {
                
                toast.success('Program added successfully!');
                // setActiveScreen('overview')
              }
            } catch (error) {
              console.error("Error creating program:", error);
            } finally {
              setLoading(false);
            }
          }
        };
      



  return (
    <div className="flex flex-col items-start h-auto gap-2 w-100">
            <h4 className="font-semibold text-crossLightPurple">Add Program</h4>

            <div
              className="flex flex-col h-auto gap-1 w-100 large:text-15px small:text-13px"
            >
              <div className="flex items-center justify-start h-auto gap-5 w-100">
                <div className="flex flex-col w-40 h-auto">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    placeholder="Enter program title"
                    name="title"
                    className="p-0.5 border rounded-4"
                    onChange={handleChange}
                  />
                  {productErrors && (
                    <p className="text-13px text-vogueRed">
                      {productErrors.title}
                    </p>
                  )}
                </div>

                <div className="flex flex-col w-40 h-auto">
                  <label htmlFor="cost">Cost</label>
                  <input
                    type="number"
                    placeholder="Enter program cost"
                    name="cost"
                    className="p-0.5 border rounded-4"
                    onChange={handleChange}
                  />
                  {productErrors && (
                    <p className="text-13px text-vogueRed">
                      {productErrors.price}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-start h-auto gap-5 w-100">
                <div className="flex flex-col w-40 h-auto">
                  <label htmlFor="description">About</label>
                  <textarea
                    type="text"
                    name="description"
                    className="p-0.5 border rounded-4"
                    onChange={handleChange}
                  />
                  {productErrors && (
                    <p className="text-13px text-vogueRed">
                      {productErrors.description}
                    </p>
                  )}
                </div>

                <div className="flex flex-col w-40 h-auto">
                  <label htmlFor="courseContent">Course content</label>
                  <input
                    type="file"
                    name="courseContent"
                    multiple
                    // accept="image/*"
                    accept=".pdf"
                    onChange={handleFileChange}
                  />
                  
                  {productErrors && (
                    <p className="text-13px text-vogueRed">
                      {productErrors.courseContent}
                    </p>
                  )}

                </div>
              </div>



              <div className="flex items-center justify-start h-auto gap-5 w-100">
                <div className="flex flex-col w-40 h-auto">
                  <label htmlFor="targetAudience">
                  Target audience
                  </label>
                  <input
                    placeholder='who is this course for?'
                    type="text"
                    name="targetAudience"
                    className="p-0.5 border rounded-4"
                    onChange={handleChange}
                  />
                  {productErrors && <p className="text-13px text-vogueRed">
                    {productErrors.targetAudience}</p>}
                </div>


                <div className="flex flex-col w-40 h-auto">
                  <label htmlFor="duration">
                  Duration (days)
                  </label>
                  <input
                    type="text"
                    placeholder="enter program duration"
                    name="duration"
                    className="p-0.5 border rounded-4"
                    onChange={handleChange}
                  />
                  {productErrors && <p className="text-13px text-vogueRed">
                    {productErrors.duration}</p>}
                </div>
              </div>


              <div className="flex items-center justify-start h-auto gap-5 w-100">
                <div className="flex flex-col w-40 h-auto">
                  <label htmlFor="mode">Mode</label>
                  
                  <select name="mode" id="" className="p-0.5 border rounded-4 cursor-pointer"
                  onChange={handleChange}
                  >
                    <option value="">-select-</option>
                    <option value="Online">Online</option>
                    <option value="Physical">Physical</option>
                  </select>
                  {productErrors && (
                    <p className="text-13px text-vogueRed">
                      {productErrors.mode}
                    </p>
                  )}
                </div>


                <div className="flex flex-col w-40 h-auto">
                  <label htmlFor="title">Time</label>
                  <input
                    type="time"
                    name="time"
                    className="p-0.5 border rounded-4"
                    onChange={handleChange}
                  />
                  {productErrors && (
                    <p className="text-13px text-vogueRed">
                      {productErrors.time}
                    </p>
                  )}
                </div>
              </div>


              <div className="flex items-center justify-start h-auto gap-5 w-100">
                <div className="flex flex-col h-auto w-100">
                  <label htmlFor="category">category</label>
                  <select name="category" id=""
                  className="p-0.5 border rounded-4 cursor-pointer"
                  onChange={handleCategoryChange}
                  >
                     <option value="">-select category-</option>
                    {
                      allCourses && allCourses.map((course, i)=>
                        <option value={`${course.courseTitle}-${course.id}`} key={i}>{course.courseTitle}</option>
                      )
                    }
                
                  </select>
                  
                  {productErrors && (
                    <p className="text-13px text-vogueRed">
                      {productErrors.category}
                    </p>
                  )}
                </div>

                {/* to be hidden */}
                
                <div className="hidden">
                  <label htmlFor="course">course</label>
                  <select name="course" id=""
                  className="p-0.5 border rounded-4 cursor-pointer"
                  onChange={handleChange}
                  >
                     <option value="">-select course-</option>
                    {
                      allCourses && allCourses.map((course, i)=>
                        <option value={`${course.id}`} key={i}>{course.courseTitle}</option>
                      )
                    }
                
                  </select>
                  
                </div>                
              </div>


              <div className="flex flex-col h-auto gap-1 w-100">
                  <label htmlFor="title">Date</label>
                  {
                    date && date.map((day, index)=>
                      <div className='flex items-center gap-1' key={index}>
                          <input
                          type="date"
                          placeholder={`Enter training date ${index + 1}`}
                          name="description"
                          className="p-0.5 border rounded-4 w-85"
                          value={day}
                          onChange={(e) => updateDate(index, e.target.value)}
                          
                        />
                        
                        {
                          index !==0 &&
                        
                        <button className='self-start text-crossLightPurple'
                          onClick={()=>{
                            removeDate(index)
                          }}
                          >- Remove</button>}
                      </div>
                    )
                  }
                  
                  {productErrors && (
                    <p className="text-13px text-vogueRed">
                      {productErrors.description}
                    </p>
                  )}

                 

                  <button className='self-start text-crossLightPurple'
                    onClick={addDate}
                    >+ Add more dates</button>
              </div>

              <div className="flex flex-col h-auto gap-1 w-100">
                  <label htmlFor="objectives">Course Objectives</label>
                  {
                    objectives && objectives.map((objective, index)=>
                      <div className='flex items-center gap-1' key={index}>
                          <input
                          type="text"
                          placeholder={`Enter course objective`}
                          name="description"
                          className="p-0.5 border rounded-4 w-85"
                          value={objective}
                          onChange={(e) => updateObjective(index, e.target.value)}
                          
                        />
                        
                        {
                          index !==0 &&
                        
                        <button className='self-start text-crossLightPurple'
                          onClick={()=>{
                            removeObjective(index)
                          }}
                          >- Remove</button>}
                      </div>
                    )
                  }
                  
                  {productErrors && (
                    <p className="text-13px text-vogueRed">
                      {productErrors.objectives}
                    </p>
                  )}

                 

                  <button className='self-start text-crossLightPurple'
                    onClick={addObjective}
                    >+ Add objective</button>
              </div>
              

              <button
                onClick={handleSubmit}
                className="flex items-center justify-center mt-5 large:w-20 rounded-4 h-40px bg-crossLightPurple text-vogueWhite hover:bg-transparent small:w-50 hover:border hover:border-crossLightPurple hover:text-crossLightPurple"
              >
                Add Program
              </button>
            </div>
          </div>
  )
}


export default AddProgram;