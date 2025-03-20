import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { CrossContext } from '../../Context/CrossContext';
import { useParams } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { UpdatingBtn } from '../../components/LoadingBtn/LoadingBtn';



function EditProgramPage() {

    const {
        me,
        baseUrl,
        loginToken,
        setLoading,
        activeScreen,
        allCourses,
      } = useContext(CrossContext);

    
      const programId = useParams().programId;
     
      const [program, setProgram] = useState(null);
      const [loadingProgram, setLoadingProgram] = useState(false);
    
      console.log("program:", program);
    
    
      useEffect(()=>{
        const viewProgram = async ()=> {
    
          try {
            setLoadingProgram(true)
            const response = await axios.get(`${baseUrl}/api/program/${programId}`);
            setProgram(response.data.data.data);
      
          } catch (error) {
            console.error('Error fetching program:', error);
          }finally{
            setLoadingProgram(false);
          }
      
        }
    
        viewProgram();
      }, [programId]);
      


      // to add and remove more training dates
    //   const [date, setDate] = useState([""]);

    //   console.log("dates:", date);

    //   const addDate = () => {
    //     setDate([...date, ""]);
    //   };

    //   const removeDate = (index) => {
    //     setDate(date.filter((_, i) => i !== index));
    // };


    // Update a date's value by index
  // const updateDate = (index, value) => {
  //   const updatedDates = [...date];
  //   updatedDates[index] = value;
  //   setDate(updatedDates);
    
  // };


  
  //to add and remove training objectives
  // const [objectives, setObjectives] = useState([""]);

  // console.log("objectives:", objectives);

//   const addObjective = () => {
//     setObjectives([...objectives, ""]);
//   };

//   const removeObjective = (index) => {
//     setObjectives(objectives.filter((_, i) => i !== index));
// };


// // Update a subheading's value by index
//     const updateObjective = (index, value) => {
//         const updatedObjectives = [...objectives];
//         updatedObjectives[index] = value;
//         setObjectives(updatedObjectives);
//     };
      

      
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
      

        // const handleFileChange = (e) => {
        //   setProductData({ ...productData, courseContent: e.target.files[0] });
      
        //   console.log("productData:", productData);
        // };
      
      
        
        //to add product
        // const handleSubmit = async (e) => {
        //   e.preventDefault();
      
        //   const validationErrors = {};
      
        //   //To ensure valid inputs
        //   if (!productData.title.trim()) {
        //     validationErrors.title = "product title is required";
        //   }
      
        //   if (!category.trim()) {
        //     validationErrors.category = "specify product category";
        //   }
      
        //   if (productData.cost < 1) {
        //     validationErrors.cost = "add product cost";
        //   }
      
      
        //   if (!productData.targetAudience) {
        //     validationErrors.targetAudience = "specify product target audience";
        //   }
      
        //   if (!productData.duration) {
        //     validationErrors.duration = "add product duration";
        //   }

        //   if (!productData.mode) {
        //     validationErrors.mode = "add product mode";
        //   }

        //   if (!productData.time) {
        //     validationErrors.time = "add product time";
        //   }

        //   if (date.length < 1) {
        //     validationErrors.date = "add product date";
        //   }

        //   if (objectives.length < 1) {
        //     validationErrors.objectives = "add product objectives";
        //   }
      
      
        //   if (!productData.description.trim()) {
        //     validationErrors.description = "add a brief description to the product";
        //   }
      
        //   if (!productData.courseContent) {
        //     validationErrors.courseContent = "upload course content.";
        //   }
      
      
        //   setProductErrors(validationErrors);
      
        //   const noError = Object.keys(validationErrors).length === 0;

      
        //   const formData = new FormData();
        //   formData.append("title", productData.title);
        //   formData.append("cost", Number(productData.cost));
        //   formData.append("targetAudience", productData.targetAudience);
        //   formData.append("mode", productData.mode);
        //   formData.append("time", productData.time);
        //   formData.append("description", productData.description);
        //   formData.append("duration", productData.duration);
        //   formData.append("category", category);
        //   formData.append("course", course);
        //   formData.append("courseContent", productData.courseContent);
        //   // formData.append("date", JSON.stringify(date));
        //   date.forEach(item => formData.append("date[]", item));
        //   objectives.forEach(item => formData.append("objectives[]", item));
        //   // formData.append("objectives", JSON.stringify(objectives));
      
        //   // Append each pdf file to the formData
        //   // for (let i = 0; i < productData.courseContent.length; i++) {
        //   //   formData.append("courseContent", productData.courseContent[i]);
        //   // }
      
        //   // Log each key-value pair in FormData
        //   for (let pair of formData.entries()) {
        //     console.log(`${pair[0]}: ${pair[1]}`);
        //   }

          
      
        //   if (noError) {
        //     setLoading(true);
      
        //     try {
        //       const response = await axios.post(`${baseUrl}/api/program`, formData, {
        //         headers: {
        //           "Content-Type": "multipart/form-data",
        //           // Authorization: `Bearer ${loginToken}`,
        //         },
        //         // withCredentials: true, // Important for sending cookies
        //       });
      
        //       console.log("add program message:", response.data.message);
        //       if (response.data.message === "program created successful.") {
                
        //         toast.success('Program added successfully!');
        //         // setActiveScreen('overview')
        //       }
        //     } catch (error) {
        //       console.error("Error creating program:", error);
        //     } finally {
        //       setLoading(false);
        //     }
        //   }
        // };








        
      //funtions to edit program

      const [editErrors, setEditErrors] = useState({});
      
         //change program title
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
      validationErrors.title = "program title is required.";
    }

    setEditErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

    if (noError) {
      try {
        setUpdatingTitle(true);
        setEditTitle(false);
        const response = await axios.patch(
          `${baseUrl}/api/program/${programId && programId}`,
          {
            title: title,
          },
        );

        console.log("program update response:", response.data);
        if ((response.data.status = "success")) {
          toast.success(
            "Program updated successfully. Refresh to see changes."
          );
        }
      } catch (error) {
        console.error("Error updating program:", error);
      } finally {
        setUpdatingTitle(false);
      }
    }
  };





  //change program cost
  const [editCost, setEditCost] = useState(false);
  const [updatingCost, setUpdatingCost] = useState(false);

  const [cost, setCost] = useState("");

  const toggleCost = () => {
    setEditCost(!editCost);
  };

  const changeCost = async () => {
    const validationErrors = {};

    //To ensure valid inputs

    if (!cost) {
      validationErrors.cost = "program cost is required.";
    }

    setEditErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

    if (noError) {
      try {
        setUpdatingCost(true);
        setEditCost(false);
        const response = await axios.patch(
          `${baseUrl}/api/program/${programId && programId}`,
          {
            cost: cost,
          },
        );

        console.log("program update response:", response.data);
        if ((response.data.status = "success")) {
          toast.success(
            "Program updated successfully. Refresh to see changes."
          );
        }
      } catch (error) {
        console.error("Error updating program:", error);
      } finally {
        setUpdatingCost(false);
      }
    }
  };


  // Description
  //change program description
  const [editDescription, setEditDescription] = useState(false);
  const [updatingDescription, setUpdatingDescription] = useState(false);

  const [description, setDescription] = useState("");

  const toggleDescription = () => {
    setEditDescription(!editDescription);
  };

  const changeDescription = async () => {
    const validationErrors = {};

    //To ensure valid inputs

    if (!description.trim()) {
      validationErrors.description = "program description is required.";
    }

    setEditErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

    if (noError) {
      try {
        setUpdatingDescription(true);
        setEditDescription(false);
        const response = await axios.patch(
          `${baseUrl}/api/program/${programId && programId}`,
          {
            description: description,
          },
        );

        console.log("program update response:", response.data);
        if ((response.data.status = "success")) {
          toast.success(
            "Program updated successfully. Refresh to see changes."
          );
        }
      } catch (error) {
        console.error("Error updating program:", error);
      } finally {
        setUpdatingDescription(false);
      }
    }
  };


  
    // TargetAudience
  //change program targetAudience
  const [editTargetAudience, setEditTargetAudience] = useState(false);
  const [updatingTargetAudience, setUpdatingTargetAudience] = useState(false);

  const [targetAudience, setTargetAudience] = useState("");

  const toggleTargetAudience = () => {
    setEditTargetAudience(!editTargetAudience);
  };

  const changeTargetAudience = async () => {
    const validationErrors = {};

    //To ensure valid inputs

    if (!targetAudience.trim()) {
      validationErrors.targetAudience = "program target audience is required.";
    }

    setEditErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

    if (noError) {
      try {
        setUpdatingTargetAudience(true);
        setEditTargetAudience(false);
        const response = await axios.patch(
          `${baseUrl}/api/program/${programId && programId}`,
          {
            targetAudience: targetAudience,
          },
        );

        console.log("program update response:", response.data);
        if ((response.data.status = "success")) {
          toast.success(
            "Program updated successfully. Refresh to see changes."
          );
        }
      } catch (error) {
        console.error("Error updating program:", error);
      } finally {
        setUpdatingTargetAudience(false);
      }
    }
  };




    // Duration
  //change program Duration
  const [editDuration, setEditDuration] = useState(false);
  const [updatingDuration, setUpdatingDuration] = useState(false);

  const [duration, setDuration] = useState("");

  const toggleDuration = () => {
    setEditDuration(!editDuration);
  };

  const changeDuration = async () => {
    const validationErrors = {};

    //To ensure valid inputs

    if (!duration.trim()) {
      validationErrors.duration = "program duration is required.";
    }

    setEditErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

    if (noError) {
      try {
        setUpdatingDuration(true);
        setEditDuration(false);
        const response = await axios.patch(
          `${baseUrl}/api/program/${programId && programId}`,
          {
            duration: duration,
          },
        );

        console.log("program update response:", response.data);
        if ((response.data.status = "success")) {
          toast.success(
            "Program updated successfully. Refresh to see changes."
          );
        }
      } catch (error) {
        console.error("Error updating program:", error);
      } finally {
        setUpdatingDuration(false);
      }
    }
  };


    // Mode
  //change program mode
  const [editMode, setEditMode] = useState(false);
  const [updatingMode, setUpdatingMode] = useState(false);

  const [mode, setMode] = useState("");

  const toggleMode = () => {
    setEditMode(!editMode);
  };

  const changeMode = async () => {
    const validationErrors = {};

    //To ensure valid inputs

    if (!mode.trim()) {
      validationErrors.mode = "program mode is required.";
    }

    setEditErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

    if (noError) {
      try {
        setUpdatingMode(true);
        setEditMode(false);
        const response = await axios.patch(
          `${baseUrl}/api/program/${programId && programId}`,
          {
            mode: mode,
          },
        );

        console.log("program update response:", response.data);
        if ((response.data.status = "success")) {
          toast.success(
            "Program updated successfully. Refresh to see changes."
          );
        }
      } catch (error) {
        console.error("Error updating program:", error);
      } finally {
        setUpdatingMode(false);
      }
    }
  };


  
      // Time
  //change program time
  const [editTime, setEditTime] = useState(false);
  const [updatingTime, setUpdatingTime] = useState(false);

  const [time, setTime] = useState("");

  const toggleTime = () => {
    setEditTime(!editTime);
  };

  const changeTime = async () => {
    const validationErrors = {};

    //To ensure valid inputs

    if (!time.trim()) {
      validationErrors.time = "program time is required.";
    }

    setEditErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

    if (noError) {
      try {
        setUpdatingTime(true);
        setEditTime(false);
        const response = await axios.patch(
          `${baseUrl}/api/program/${programId && programId}`,
          {
            time: time,
          },
        );

        console.log("program update response:", response.data);
        if ((response.data.status = "success")) {
          toast.success(
            "Program updated successfully. Refresh to see changes."
          );
        }
      } catch (error) {
        console.error("Error updating program:", error);
      } finally {
        setUpdatingTime(false);
      }
    }
  };


      // date
  //change program date
  const [editDate, setEditDate] = useState(false);
  const [updatingDate, setUpdatingDate] = useState(false);

  const [date, setDate] = useState([""]);
  console.log("dates:", date);

  const addDate = () => {
    setDate([...date, ""]);
  };

  const removeDate = (index) => {
    setDate(date.filter((_, i) => i !== index));
};

  const updateDate = (index, value) => {
    const updatedDates = [...date];
    updatedDates[index] = value;
    setDate(updatedDates);
    
  };

  
  const toggleDate = () => {
    setEditDate(!editDate);
  };

  const changeDate = async () => {
    const validationErrors = {};

    //To ensure valid inputs

    if (date.length < 1) {
      validationErrors.date = "program date is required.";
    }

    setEditErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

    if (noError) {
      try {
        setUpdatingDate(true);
        setEditDate(false);
        const response = await axios.patch(
          `${baseUrl}/api/program/${programId && programId}`,
          {
            date: date,
          },
        );

        console.log("program update response:", response.data);
        if ((response.data.status = "success")) {
          toast.success(
            "Program updated successfully. Refresh to see changes."
          );
        }
      } catch (error) {
        console.error("Error updating program:", error);
      } finally {
        setUpdatingDate(false);
      }
    }
  };





        // objectives
  //change program Objectives
  const [editObjectives, setEditObjectives] = useState(false);
  const [updatingObjectives, setUpdatingObjectives] = useState(false);

  const [objectives, setObjectives] = useState([""]);

  
  const toggleObjectives = () => {
    setEditObjectives(!editObjectives);
  };


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
  

  const changeObjectives = async () => {
    const validationErrors = {};

    //To ensure valid inputs

    if (objectives.length < 1) {
      validationErrors.objectives = "Add program objectives.";
    }

    setEditErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

    if (noError) {
      try {
        setUpdatingObjectives(true);
        setEditObjectives(false);
        const response = await axios.patch(
          `${baseUrl}/api/program/${programId && programId}`,
          {
            objectives: objectives,
          },
        );

        console.log("program update response:", response.data);
        if ((response.data.status = "success")) {
          toast.success(
            "Program updated successfully. Refresh to see changes."
          );
        }
      } catch (error) {
        console.error("Error updating program:", error);
      } finally {
        setUpdatingObjectives(false);
      }
    }
  };
      




          // courseContent
  //change program CourseContent
  const [editCourseContent, setEditCourseContent] = useState(false);
  const [updatingCourseContent, setUpdatingCourseContent] = useState(false);

  const [courseContent, setCourseContent] = useState([""]);

  const toggleCourseContent = () => {
    setEditCourseContent(!editCourseContent);
  };
  

  const handleFileChange = (e) => {
    setCourseContent(e.target.files[0]);
  };
  

  
  const changeCourseContent = async () => {
    const validationErrors = {};

    //To ensure valid inputs

    if (!courseContent) {
      validationErrors.CourseContent = "upload course content.";
    }

    setEditErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

      const formData = new FormData();
          formData.append("courseContent", courseContent);

          
                    

    if (noError) {
      try {
        setUpdatingCourseContent(true);
        setEditCourseContent(false);
        const response = await axios.patch(
          `${baseUrl}/api/program/${programId && programId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            }
          }
        );

        console.log("program update response:", response.data);
        if ((response.data.status = "success")) {
          toast.success(
            "Program updated successfully. Refresh to see changes."
          );
        }
      } catch (error) {
        console.error("Error updating program:", error);
      } finally {
        setUpdatingCourseContent(false);
      }
    }
  };





  
  return (
    <div className="flex flex-col items-start h-auto gap-2 mt-17 w-90vw">
            <h4 className="font-semibold pl-9 text-crossLightPurple">Edit Program</h4>

            <div
              className="flex flex-col items-center h-auto gap-2 w-100 large:text-15px small:text-13px"
            >
              
              
              <div className="flex items-center justify-center h-auto lareg:gap-5 large:flex-row small:flex-col w-100 small:gap-2">
                {/* title */}
                <div className="flex flex-col h-auto w-100">
                  <label htmlFor="title">Title</label>
                  
                  <div className='flex flex-col h-auto gap-1 w-100'>
                    
                  {editTitle &&
                    <input
                      type="text"
                      placeholder="Enter program title"
                      name="title"
                      defaultValue={program && program.title}
                      className="p-0.5 border rounded-4"
                      onChange={(e)=>setTitle(e.target.value)}
                    />}

                    
                    {!editTitle &&
                    <div className="p-0.5 border rounded-4 flex items-center h-auto justify-between bg-white">
                      <div className='w-90'>{program && program.title}</div>
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


                  {/* cost */}
                <div className="flex flex-col h-auto w-100">
                  <label htmlFor="cost">Cost</label>
                  
                  <div className='flex flex-col h-auto gap-1 w-100'>
                    
                  {editCost &&
                    <input
                      type="number"
                      placeholder="Enter program cost"
                      name="cost"
                      className="p-0.5 border rounded-4"
                      onChange={(e)=>setCost(e.target.value)}
                      defaultValue={program && program.cost}
                    />}


                    {!editCost &&
                      <div className="p-0.5 border rounded-4 flex items-center h-auto justify-between bg-white">
                        <div className='w-90'>{program && program.cost.toLocaleString()}</div>
                        <CiEdit className='cursor-pointer text-25px text-crossLightPurple'
                        onClick={toggleCost}
                        />
                      </div>}
                    
                      {editCost && <p className="text-13px text-vogueRed">{editErrors.cost}</p>}
                    
                      {editCost &&
                      <div className='flex flex-row items-start h-auto gap-2 w-100'>
                        <button className='flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px'
                        onClick={toggleCost}
                        >Cancel</button>
                        <button className='flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px'
                        onClick={changeCost}
                        >Save</button>
                      </div>}

                      {updatingCost && <UpdatingBtn />}
                  </div>
                  
                </div>
              </div>


              <div className="flex items-center justify-center h-auto lareg:gap-5 large:flex-row small:flex-col w-100 small:gap-2">
                 
                 {/* Description */}
                <div className="flex flex-col h-auto w-100">
                  <label htmlFor="description">About</label>
                  <div className='flex flex-col h-auto gap-1 w-100'>
                   
                  {editDescription &&
                    <textarea
                      type="text"
                      placeholder="Enter program description"
                      name="description"
                      className="p-0.5 border rounded-4"
                      onChange={(e)=>setDescription(e.target.value)}
                      defaultValue={program && program.description}
                    />}


                    {!editDescription &&
                      <div className="p-0.5 border rounded-4 flex items-center h-auto justify-between bg-white">
                        <div className='w-90'>{program && program.description}</div>
                        <CiEdit className='cursor-pointer text-25px text-crossLightPurple'
                        onClick={toggleDescription}
                        />
                      </div>}
                    
                      {editDescription && <p className="text-13px text-vogueRed">{editErrors.description}</p>}
                    
                      {editDescription &&
                      <div className='flex flex-row items-start h-auto gap-2 w-100'>
                        <button className='flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px'
                        onClick={toggleDescription}
                        >Cancel</button>
                        <button className='flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px'
                        onClick={changeDescription}
                        >Save</button>
                      </div>}

                      {updatingDescription && <UpdatingBtn />}
                  </div>
                </div>


                  {/* course content */}
                <div className="flex flex-col h-auto w-100">
                  <label htmlFor="courseContent">Course content</label>
                
                  
                  
                  <div className='flex flex-col h-auto gap-1 w-100'>
                  
                  {editCourseContent &&
                    <input
                    type="file"
                    name="courseContent"
                    multiple
                    accept=".pdf"
                    onChange={handleFileChange}
                  />}


                    {!editCourseContent &&
                      <div className="p-0.5 border rounded-4 flex items-center h-auto justify-between bg-white">
                        <div className='w-90'>PDF Material</div>
                        <CiEdit className='cursor-pointer text-25px text-crossLightPurple'
                        onClick={toggleCourseContent}
                        />
                      </div>}
                    
                      {editCourseContent && <p className="text-13px text-vogueRed">{editErrors.courseContent}</p>}
                    
                      {editCourseContent &&
                      <div className='flex flex-row items-start h-auto gap-2 w-100'>
                        <button className='flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px'
                        onClick={toggleCourseContent}
                        >Cancel</button>
                        <button className='flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px'
                        onClick={changeCourseContent}
                        >Save</button>
                      </div>}

                      {updatingCourseContent && <UpdatingBtn />}
                  </div>
                </div>
              </div>



              <div className="flex items-center justify-center h-auto lareg:gap-5 large:flex-row small:flex-col w-100 small:gap-2">
                
                {/* target audience */}
                
                <div className="flex flex-col h-auto w-100">
                  <label htmlFor="targetAudience">
                  Target audience
                  </label>
                  
                  <div className='flex flex-col h-auto gap-1 w-100'>
                   
                   {editTargetAudience &&
                     <textarea
                       type="text"
                       placeholder="Who can enroll for this course?"
                       name="targetAudience"
                       className="p-0.5 border rounded-4"
                       onChange={(e)=>setTargetAudience(e.target.value)}
                       defaultValue={program && program.targetAudience}
                     />}
 
 
                     {!editTargetAudience &&
                       <div className="p-0.5 border rounded-4 flex items-center h-auto justify-between bg-white">
                         <div className='w-90'>{program && program.targetAudience}</div>
                         <CiEdit className='cursor-pointer text-25px text-crossLightPurple'
                         onClick={toggleTargetAudience}
                         />
                       </div>}
                     
                       {editTargetAudience && <p className="text-13px text-vogueRed">{editErrors.targetAudience}</p>}
                     
                       {editTargetAudience &&
                       <div className='flex flex-row items-start h-auto gap-2 w-100'>
                         <button className='flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px'
                         onClick={toggleTargetAudience}
                         >Cancel</button>
                         <button className='flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px'
                         onClick={changeTargetAudience}
                         >Save</button>
                       </div>}
 
                       {updatingTargetAudience && <UpdatingBtn />}
                   </div>
                </div>

                {/* duration */}
                <div className="flex flex-col h-auto w-100">
                  <label htmlFor="duration">
                  Duration (days)
                  </label>
                  
                  <div className='flex flex-col h-auto gap-1 w-100'>
                   
                   {editDuration &&
                     <input
                       type="text"
                       placeholder="Who can enroll for this course?"
                       name="duration"
                       className="p-0.5 border rounded-4"
                       onChange={(e)=>setDuration(e.target.value)}
                       defaultValue={program && program.duration}
                     />}
 
 
                     {!editDuration &&
                       <div className="p-0.5 border rounded-4 flex items-center h-auto justify-between bg-white">
                         <div className='w-90'>{program && program.duration}</div>
                         <CiEdit className='cursor-pointer text-25px text-crossLightPurple'
                         onClick={toggleDuration}
                         />
                       </div>}
                     
                       {editDuration && <p className="text-13px text-vogueRed">{editErrors.duration}</p>}
                     
                       {editDuration &&
                       <div className='flex flex-row items-start h-auto gap-2 w-100'>
                         <button className='flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px'
                         onClick={toggleDuration}
                         >Cancel</button>
                         <button className='flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px'
                         onClick={changeDuration}
                         >Save</button>
                       </div>}
 
                       {updatingDuration && <UpdatingBtn />}
                   </div>
                </div>
              </div>


              <div className="flex items-center justify-center h-auto lareg:gap-5 large:flex-row small:flex-col w-100 small:gap-2">
                
                {/* mode */}
                <div className="flex flex-col h-auto w-100">
                  <label htmlFor="mode">Mode</label>
                  
                  
                  <div className='flex flex-col h-auto gap-1 w-100'>
                   
                   {editMode &&
                      <select name="mode" id="" className="p-0.5 border rounded-4     cursor-pointer"
                        onChange={(e)=>setMode(e.target.value)}
                          >
                        <option value="">-select-</option>
                        <option value="Online">Online</option>
                        <option value="Physical">Physical</option>
                      </select>}
 
 
                     {!editMode &&
                       <div className="p-0.5 border rounded-4 flex items-center h-auto justify-between bg-white">
                         <div className='w-90'>{program && program.mode}</div>
                         <CiEdit className='cursor-pointer text-25px text-crossLightPurple'
                         onClick={toggleMode}
                         />
                       </div>}
                     
                       {editMode && <p className="text-13px text-vogueRed">{editErrors.mode}</p>}
                     
                       {editMode &&
                       <div className='flex flex-row items-start h-auto gap-2 w-100'>
                         <button className='flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px'
                         onClick={toggleMode}
                         >Cancel</button>
                         <button className='flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px'
                         onClick={changeMode}
                         >Save</button>
                       </div>}
 
                       {updatingMode && <UpdatingBtn />}
                   </div>
                  
                </div>

                  {/* time */}
                <div className="flex flex-col h-auto w-100">
                  <label htmlFor="title">Time</label>
                  <div className='flex flex-col h-auto gap-1 w-100'>
                   
                  {editTime &&
                    <input
                      type="time"
                      placeholder="Enter program time"
                      name="time"
                      className="p-0.5 border rounded-4"
                      onChange={(e)=>setTime(e.target.value)}
                      defaultValue={program && program.time}
                    />}


                    {!editTime &&
                      <div className="p-0.5 border rounded-4 flex items-center h-auto justify-between bg-white">
                        <div className='w-90'>{program && program.time}</div>
                        <CiEdit className='cursor-pointer text-25px text-crossLightPurple'
                        onClick={toggleTime}
                        />
                      </div>}
                    
                      {editTime && <p className="text-13px text-vogueRed">{editErrors.time}</p>}
                    
                      {editTime &&
                      <div className='flex flex-row items-start h-auto gap-2 w-100'>
                        <button className='flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px'
                        onClick={toggleTime}
                        >Cancel</button>
                        <button className='flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px'
                        onClick={changeTime}
                        >Save</button>
                      </div>}

                      {updatingTime && <UpdatingBtn />}
                  </div>
                  
                </div>
              </div>



                {/* date */}
                
              <div className="flex flex-col h-auto gap-1 large:w-85 small:w-85vw">
                  <label htmlFor="title">Date</label>            
           
                  <div className='flex flex-col h-auto gap-1 w-100'>
                   
                   {
                   editDate && date && date.map((day, index)=>
                      <div className='flex items-center gap-1' key={index}>
                          <input
                          type="date"
                          placeholder={`Enter training date ${index + 1}`}
                          name="description"
                          className="p-0.5 border rounded-4 w-90"
                          value={day}
                          onChange={(e) => updateDate(index, e.target.value)}
                        />
                        
                        {
                          index !==0 &&
                        
                        <button className='flex items-center justify-center text-crossLightPurple'
                          onClick={()=>{
                            removeDate(index)
                          }}
                          >Remove</button>}
                      </div>
                    )
                     
                     
                     }
 
 
                     {!editDate &&
                       <div className="p-0.5 border rounded-4 flex items-start h-auto justify-between bg-white">
                         <div className='flex flex-col w-90'>
                          {program && program.date.map((day, i)=>
                            <div key={i}>-- {day}</div>
                          )}
                          </div>
                         <CiEdit className='cursor-pointer text-25px text-crossLightPurple'
                         onClick={toggleDate}
                         />
                       </div>}
                     
                       {editDate && <p className="text-13px text-vogueRed">{editErrors.date}</p>}

                          
                       {editDate &&
                       <button className='self-start text-crossLightPurple'
                    onClick={addDate}
                    >+ Add more dates</button>}
                     
                       {editDate &&
                       <div className='flex flex-row items-start h-auto gap-2 w-100'>
                         <button className='flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px'
                         onClick={toggleDate}
                         >Cancel</button>
                         <button className='flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px'
                         onClick={changeDate}
                         >Save</button>
                       </div>}
 
                       {updatingDate && <UpdatingBtn />}
                   </div>
              </div>

                {/* objectives */}
              <div className="flex flex-col h-auto gap-1 large:w-85 small:w-85vw">
                  <label htmlFor="objectives">Course Objectives</label>
                  {/* {
                    objectives && objectives.map((objective, index)=>
                      <div className='flex items-center gap-1' key={index}>
                          <input
                          type="text"
                          placeholder={`Enter course objective`}
                          name="description"
                          className="p-0.5 border rounded-4 w-90"
                          value={objective}
                          onChange={(e) => updateObjective(index, e.target.value)}
                        />
                        
                        {
                          index !==0 &&
                        
                        <button className='flex items-center justify-center text-crossLightPurple'
                          onClick={()=>{
                            removeObjective(index)
                          }}
                          >Remove</button>}
                      </div>
                    )
                  } */}





                   <div className='flex flex-col h-auto gap-1 w-100'>
                   
                   {
                      editObjectives && objectives && objectives.map((objective, index)=>
                        <div className='flex items-center gap-1' key={index}>
                          <input
                          type="text"
                          placeholder={`Enter course objective`}
                          name="description"
                          className="p-0.5 border rounded-4 w-90"
                          value={objective}
                          onChange={(e) => updateObjective(index, e.target.value)}
                        />
                 
                          {
                            index !==0 &&
                          
                          <button className='flex items-center justify-center text-crossLightPurple'
                            onClick={()=>{
                              removeObjective(index)
                            }}
                            >Remove</button>}
                              </div>)}
 
 
                     {!editObjectives &&
                       <div className="p-0.5 border rounded-4 flex items-start h-auto justify-between bg-white">
                         <div className='flex flex-col py-1 w-90'>
                          {program && program.objectives.map((objective, i)=>
                            <div key={i}>{i + 1}. {objective[0].toUpperCase()}{objective.slice(1)}</div>
                          )}
                          </div>
                         <CiEdit className='cursor-pointer text-25px text-crossLightPurple'
                         onClick={toggleObjectives}
                         />
                       </div>}
                     
                       {editDate && <p className="text-13px text-vogueRed">{editErrors.date}</p>}

                          
                       {editObjectives &&
                       <button className='self-start text-crossLightPurple'
                    onClick={addObjective}
                    >+ Add more objectives</button>}
                     
                       {editObjectives &&
                       <div className='flex flex-row items-start h-auto gap-2 w-100'>
                         <button className='flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px'
                         onClick={toggleObjectives}
                         >Cancel</button>
                         <button className='flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px'
                         onClick={changeObjectives}
                         >Save</button>
                       </div>}
 
                       {updatingObjectives && <UpdatingBtn />}
                   </div>

              </div>
              

              
            </div>
          </div>
  )
}


export default EditProgramPage;