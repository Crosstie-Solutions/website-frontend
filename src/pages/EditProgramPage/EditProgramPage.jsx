import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { CrossContext } from '../../Context/CrossContext';
import { Link, useParams } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { UpdatingBtn } from '../../components/LoadingBtn/LoadingBtn';
import { LuMoveLeft } from "react-icons/lu";



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
            setProgram(response.data.data);
      
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





  // change program PhysicalCost
  const [editPhysicalCost, setEditPhysicalCost] = useState(false);
  const [updatingPhysicalCost, setUpdatingPhysicalCost] = useState(false);


  const [physicalCost, setPhysicalCost] = useState("");

  
  const togglePhysicalCost = () => {
    setEditPhysicalCost(!editPhysicalCost);
  };

  const changePhysicalCost = async () => {
    const validationErrors = {};

    //To ensure valid inputs

    if (!physicalCost) {
      validationErrors.physicalCost = "program physical cost is required.";
    }

    setEditErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

    if (noError) {
      try {
        
        setUpdatingPhysicalCost(true);
        
        setEditPhysicalCost(false);
        
        const response = await axios.patch(
          `${baseUrl}/api/program/${programId && programId}`,
          {
            physicalCost: physicalCost,
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
        setUpdatingPhysicalCost(false);
      }
    }
  };




   // change program OnlineCost
   const [editOnlineCost, setEditOnlineCost] = useState(false);
   const [updatingOnlineCost, setUpdatingOnlineCost] = useState(false);
 
 
   const [onlineCost, setOnlineCost] = useState("");
 
   
   const toggleOnlineCost = () => {
     setEditOnlineCost(!editOnlineCost);
   };
 
   const changeOnlineCost = async () => {
     const validationErrors = {};
 
     //To ensure valid inputs
 
     if (!onlineCost) {
       validationErrors.onlineCost = "program online cost is required.";
     }
 
     setEditErrors(validationErrors);
 
     const noError = Object.keys(validationErrors).length === 0;
 
     if (noError) {
       try {
         
         setUpdatingOnlineCost(true);
         
         setEditOnlineCost(false);
         
         const response = await axios.patch(
           `${baseUrl}/api/program/${programId && programId}`,
           {
             onlineCost: onlineCost,
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
         setUpdatingOnlineCost(false);
       }
     }
   };



      // change program YouAndICost
      const [editYouAndICost, setEditYouAndICost] = useState(false);
      const [updatingYouAndICost, setUpdatingYouAndICost] = useState(false);
    
    
      const [youAndICost, setYouAndICost] = useState("");
    
      
      const toggleYouAndICost = () => {
        setEditYouAndICost(!editYouAndICost);
      };
    
      const changeYouAndICost = async () => {
        const validationErrors = {};
    
        //To ensure valid inputs
    
        if (!youAndICost) {
          validationErrors.youAndICost = "You and I cost is required.";
        }
    
        setEditErrors(validationErrors);
    
        const noError = Object.keys(validationErrors).length === 0;
    
        if (noError) {
          try {
            
            setUpdatingYouAndICost(true);
            
            setEditYouAndICost(false);
            
            const response = await axios.patch(
              `${baseUrl}/api/program/${programId && programId}`,
              {
                youAndICost: youAndICost,
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
            setUpdatingYouAndICost(false);
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




  
  //change ProgramBanner
  const [editProgramBanner, setEditProgramBanner] = useState(false);
  const [updatingProgramBanner, setUpdatingProgramBanner] = useState(false);

  const [programBanner, setProgramBanner] = useState("");

  
  const toggleProgramBanner = () => {
    setEditProgramBanner(!editProgramBanner);
  };
  

  const handleBannerChange = (e) => {
    setProgramBanner(e.target.files[0]);
  };
  

  
  const changeProgramBanner = async () => {
    const validationErrors = {};

    //To ensure valid inputs

    if (!programBanner) {
      validationErrors.programBanner = "upload course content.";
    }

    
    setEditErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

      const formData = new FormData();
          formData.append("programBanner", programBanner);

          
                    

    if (noError) {
      try {
        setUpdatingProgramBanner(true);
        setEditProgramBanner(false);
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
        setUpdatingProgramBanner(false);
      }
    }
  };




  //to add and remove training Modules
    const [modules, setModules] = useState([""]);
  
    console.log("modules:", modules);
  
    const addModules = () => {
      setModules([...modules, ""]);
    };
  
    const removeModules = (index) => {
      setModules(modules.filter((_, i) => i !== index));
  };
  
  
  // Update a Modules's value by index
      const updateModules = (index, value) => {
          const updatedModules = [...modules];
          updatedModules[index] = value;
          setModules(updatedModules);
      };
        
  
  
     //to add and remove training optional Modules
     const [optionalModules, setOptionalModules] = useState([""]);
  
     console.log("optionalModules:", optionalModules);
   
     const addOptionalModules = () => {
       setOptionalModules([...optionalModules, ""]);
     };
   
     const removeOptionalModules = (index) => {
       setOptionalModules(optionalModules.filter((_, i) => i !== index));
   };
   
   
   // Update a OptionalModule's value by index
       const updateOptionalModules = (index, value) => {
           const updatedOptionalModules = [...optionalModules];
           updatedOptionalModules[index] = value;
           setOptionalModules(updatedOptionalModules);
       };
  
  
  
     //to add and remove Notes
     const [notes, setNotes] = useState([""]);
  
     console.log("notes:", notes);
   
     const addNotes = () => {
       setNotes([...notes, ""]);
     };
   
     const removeNotes = (index) => {
       setNotes(notes.filter((_, i) => i !== index));
   };
   
   
   // Update a Note's value by index
       const updateNotes = (index, value) => {
           const updatedNotes = [...notes];
           updatedNotes[index] = value;
           setNotes(updatedNotes);
       };





    
  //change program Modules
  const [editModules, setEditModules] = useState(false);
  const [updatingModules, setUpdatingModules] = useState(false);

  const toggleModules = () => {
    setEditModules(!editModules);
  };


  const changeModules = async () => {
    const validationErrors = {};


    setEditErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

   
      try {
        setUpdatingModules(true);
        setEditModules(false);
        const response = await axios.patch(
          `${baseUrl}/api/program/${programId && programId}`,
          {
            modules: modules,
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
        setUpdatingModules(false);
      }
    
  };



    //change program OptionalModules
    const [editOptionalModules, setEditOptionalModules] = useState(false);
    const [updatingOptionalModules, setUpdatingOptionalModules] = useState(false);
  
    const toggleOptionalModules = () => {
      setEditOptionalModules(!editOptionalModules);
    };
  
  
  
    const changeOptionalModules = async () => {  
     
        try {
          setUpdatingOptionalModules(true);
          setEditOptionalModules(false);
          const response = await axios.patch(
            `${baseUrl}/api/program/${programId && programId}`,
            {
              optionalModules: optionalModules,
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
          setUpdatingOptionalModules(false);
        }
      
    };



    //change program Notes
  const [editNotes, setEditNotes] = useState(false);
  const [updatingNotes, setUpdatingNotes] = useState(false);

  const toggleNotes = () => {
    setEditNotes(!editNotes);
  };


  const changeNotes = async () => {

   
      try {
        setUpdatingNotes(true);
        setEditNotes(false);
        const response = await axios.patch(
          `${baseUrl}/api/program/${programId && programId}`,
          {
            notes: notes,
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
        setUpdatingNotes(false);
      }
    
  };



  
  return (
    <div className="flex flex-col items-start h-auto gap-2 small:mt-17 w-90vw large:mt-20">
    
            <div className='flex'>
               <Link to='/admin-dashboard' className="flex items-center text-crossLightPurple"> <LuMoveLeft className="flex text-25px"/></Link>
              <h4 className="font-semibold pl-9 text-crossLightPurple">Edit Program</h4>
            </div>


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


                  {/* Physical Cost */}
                <div className="flex flex-col h-auto w-100">
                  <label htmlFor="cost">Physical Cost</label>
                  
                  <div className='flex flex-col h-auto gap-1 w-100'>
                    
                  {editPhysicalCost &&
                    <input
                      type="number"
                      placeholder="Enter program cost"
                      name="physicalCost"
                      className="p-0.5 border rounded-4"
                      onChange={(e)=>setPhysicalCost(e.target.value)}
                      defaultValue={program && program.physicalCost}
                    />}


                    {!editPhysicalCost &&
                      <div className="p-0.5 border rounded-4 flex items-center h-auto justify-between bg-white">
                        <div className='w-90'>&#8358;{program && program.physicalCost.toLocaleString()}</div>
                        <CiEdit className='cursor-pointer text-25px text-crossLightPurple'
                        onClick={togglePhysicalCost}
                        />
                      </div>}
                    
                      {editPhysicalCost && <p className="text-13px text-vogueRed">{editErrors.physicalCost}</p>}
                    
                    
                      {editPhysicalCost &&
                      <div className='flex flex-row items-start h-auto gap-2 w-100'>
                        <button className='flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px'
                        onClick={togglePhysicalCost}
                        >Cancel</button>
                        <button className='flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px'
                        onClick={changePhysicalCost}
                        >Save</button>
                      </div>}

                      {updatingPhysicalCost && <UpdatingBtn />}
                  </div>
                  
                </div>
              </div>


              <div className="flex items-center justify-center h-auto lareg:gap-5 large:flex-row small:flex-col w-100 small:gap-2">
                {/* online cost */}
                <div className="flex flex-col h-auto w-100">
                  <label htmlFor="onlineCost">Online Cost</label>
                  
                  <div className='flex flex-col h-auto gap-1 w-100'>
                    
                  {editOnlineCost &&
                    <input
                      type="number"
                      placeholder="Enter program cost"
                      name="onlineCost"
                      className="p-0.5 border rounded-4"
                      onChange={(e)=>setOnlineCost(e.target.value)}
                      defaultValue={program && program.onlineCost}
                    />}


                    {!editOnlineCost &&
                      <div className="p-0.5 border rounded-4 flex items-center h-auto justify-between bg-white">
                        <div className='w-90'>&#8358;{program && program.onlineCost.toLocaleString()}</div>
                        <CiEdit className='cursor-pointer text-25px text-crossLightPurple'
                        onClick={toggleOnlineCost}
                        />
                      </div>}
                    
                      {editOnlineCost && <p className="text-13px text-vogueRed">{editErrors.onlineCost}</p>}
                    
                    
                      {editOnlineCost &&
                      <div className='flex flex-row items-start h-auto gap-2 w-100'>
                        <button className='flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px'
                        onClick={toggleOnlineCost}
                        >Cancel</button>
                        <button className='flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px'
                        onClick={changeOnlineCost}
                        >Save</button>
                      </div>}

                      {updatingOnlineCost && <UpdatingBtn />}
                  </div>
                  
                </div>


                  {/* You and I Cost */}
                <div className="flex flex-col h-auto w-100">
                  <label htmlFor="YouAndICost">You And I Cost</label>
                  
                  <div className='flex flex-col h-auto gap-1 w-100'>
                    
                  {editYouAndICost &&
                    <input
                      type="number"
                      placeholder="Enter program cost"
                      name="youAndICost"
                      className="p-0.5 border rounded-4"
                      onChange={(e)=>setYouAndICost(e.target.value)}
                      defaultValue={program && program.youAndICost}
                    />}


                    {!editYouAndICost &&
                      <div className="p-0.5 border rounded-4 flex items-center h-auto justify-between bg-white">
                        <div className='w-90'>&#8358;{program && program.youAndICost.toLocaleString()}</div>
                        <CiEdit className='cursor-pointer text-25px text-crossLightPurple'
                        onClick={toggleYouAndICost}
                        />
                      </div>}
                    
                      {editYouAndICost && <p className="text-13px text-vogueRed">{editErrors.youAndICost}</p>}
                    
                    
                      {editYouAndICost &&
                      <div className='flex flex-row items-start h-auto gap-2 w-100'>
                        <button className='flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px'
                        onClick={toggleYouAndICost}
                        >Cancel</button>
                        <button className='flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px'
                        onClick={changeYouAndICost}
                        >Save</button>
                      </div>}

                      {updatingYouAndICost && <UpdatingBtn />}
                  </div>
                  
                </div>
              </div>

              {/* Description */}
                <div className="flex flex-col h-auto w-100">
                  <label htmlFor="description">About</label>
                  <div className='flex flex-col h-auto gap-1 w-100'>
                   
                  {editDescription &&
                    <textarea
                      type="text"
                      placeholder="Enter program description"
                      name="description"
                      className="p-1 border rounded-4 h-200px"
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


              <div className="flex items-center justify-between h-auto lareg:gap-5 large:flex-row small:flex-col w-100 small:gap-2">
                 
                  {/* ProgramBanner */}
                <div className="flex flex-col h-auto large:w-45 small:w-100">
                  <label htmlFor="programBanner">Course banner</label>
                
                  
                  
                  <div className='flex flex-col h-auto gap-1 w-100'>
                  
                  {editProgramBanner &&
                    <input
                    type="file"
                    name="programBanner"
                    multiple
                    // accept=".pdf"
                    accept="image/*"
                    onChange={handleBannerChange}
                  />}



                    {!editProgramBanner &&
                      <div className="p-0.5 border rounded-4 flex items-center h-auto justify-between bg-white">
                        <img src={program && program.programBanner} alt="course banner" className='h-auto rounded w-50px'/>
                        <CiEdit className='cursor-pointer text-25px text-crossLightPurple'
                        onClick={toggleProgramBanner}
                        />
                      </div>}
                    
                      {editProgramBanner && <p className="text-13px text-vogueRed">{editErrors.programBanner}</p>}
                    
                      {editProgramBanner &&
                      <div className='flex flex-row items-start h-auto gap-2 w-100'>
                        <button className='flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px'
                        onClick={toggleProgramBanner}
                        >Cancel</button>
                        <button className='flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px'
                        onClick={changeProgramBanner}
                        >Save</button>
                      </div>}

                      {updatingProgramBanner && <UpdatingBtn />}
                  </div>
                </div>


                  {/* course content */}
                <div className="flex flex-col h-auto large:w-45 small:w-100">
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
                        <option value="Physical/Online">Physical/Online</option>
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
                      type="text"
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
                
              <div className="flex flex-col self-start h-auto gap-1 large:w-85 small:w-85vw">
                  <label htmlFor="title">Date</label>            
           
                  <div className='flex flex-col h-auto gap-1 w-100'>
                   
                   {
                   editDate && date && date.map((day, index)=>
                      <div className='flex items-center gap-1' key={index}>
                          <input
                          type="text"
                          placeholder={`Enter start and end date. E.g 06 March - 17 April`}
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
              <div className="flex flex-col self-start h-auto gap-1 large:w-85 small:w-85vw">
                  <label htmlFor="objectives">Course Objectives</label>


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
                         <div className='flex flex-col gap-1 py-1 w-90'>
                          {program && program.objectives.map((objective, i)=>
                            <div key={i}>{i + 1}. {objective.length>0 && objective[0].toUpperCase()}{objective.slice(1)}</div>
                          )}
                          </div>
                         <CiEdit className='cursor-pointer text-25px text-crossLightPurple'
                         onClick={toggleObjectives}
                         />
                       </div>}
                     

                          
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


               {/* Modules */}
               <div className="flex flex-col self-start h-auto gap-1 large:w-85 small:w-85vw">
                  <label htmlFor="modules">Modules</label>


                   <div className='flex flex-col h-auto gap-1 w-100'>
                   
                   {
                      editModules && modules && modules.map((module, index)=>
                        <div className='flex items-center gap-1' key={index}>
                          <input
                          type="text"
                          placeholder={`Enter course module`}
                          name="optionalModules"
                          className="p-0.5 border rounded-4 w-90"
                          value={module}
                          onChange={(e) => updateModules(index, e.target.value)}
                        />
                 
                          {
                            index !==0 &&
                          
                          <button className='flex items-center justify-center text-crossLightPurple'
                            onClick={()=>{
                              removeModules(index)
                            }}
                            >Remove</button>}
                              </div>)}
 
 
                     {!editModules &&
                       <div className="p-0.5 border rounded-4 flex items-start h-auto justify-between bg-white">
                         <div className='flex flex-col gap-1 py-1 w-90'>
                          {program && program.modules.map((module, i)=>
                            <div key={i}>{i + 1}. {module.length>0 && module[0].toUpperCase()}{module.slice(1)}</div>
                          )}
                          </div>
                         <CiEdit className='cursor-pointer text-25px text-crossLightPurple'
                         onClick={toggleModules}
                         />
                       </div>}

                          
                       {editModules &&
                       <button className='self-start text-crossLightPurple'
                    onClick={addModules}
                    >+ Add module</button>}
                     
                       {editModules &&
                       <div className='flex flex-row items-start h-auto gap-2 w-100'>
                         <button className='flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px'
                         onClick={toggleModules}
                         >Cancel</button>
                         <button className='flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px'
                         onClick={changeModules}
                         >Save</button>
                       </div>}
 
                       {updatingModules && <UpdatingBtn />}
                   </div>

              </div>



              {/*optional Modules */}
              {optionalModules && optionalModules[0] !=="" &&
              <div className="flex flex-col self-start h-auto gap-1 large:w-85 small:w-85vw">
                  <label htmlFor="optionalModules">Optional Modules</label>


                   <div className='flex flex-col h-auto gap-1 w-100'>
                   
                   {
                      editOptionalModules && optionalModules && optionalModules.map((module, index)=>
                        <div className='flex items-center gap-1' key={index}>
                          <input
                          type="text"
                          placeholder={`Enter optional module`}
                          name="optionalModules"
                          className="p-0.5 border rounded-4 w-90"
                          value={module}
                          onChange={(e) => updateOptionalModules(index, e.target.value)}
                        />
                 
                          {
                            index !==0 &&
                          
                          <button className='flex items-center justify-center text-crossLightPurple'
                            onClick={()=>{
                              removeOptionalModules(index)
                            }}
                            >Remove</button>}
                              </div>)}
 
 
                     {!editOptionalModules &&
                       <div className="p-0.5 border rounded-4 flex items-start h-auto justify-between bg-white">
                         <div className='flex flex-col gap-1 py-1 w-90'>
                          {program && program.optionalModules.map((module, i)=>
                            <div key={i}>{i + 1}. {module.length>0 && module[0].toUpperCase()}{module.slice(1)}</div>
                          )}
                          </div>
                         <CiEdit className='cursor-pointer text-25px text-crossLightPurple'
                         onClick={toggleOptionalModules}
                         />
                       </div>}
                     

                          
                       {editOptionalModules &&
                       <button className='self-start text-crossLightPurple'
                    onClick={addOptionalModules}
                    >+ Add optional module</button>}
                     
                       {editOptionalModules &&
                       <div className='flex flex-row items-start h-auto gap-2 w-100'>
                         <button className='flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px'
                         onClick={toggleOptionalModules}
                         >Cancel</button>
                         <button className='flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px'
                         onClick={changeOptionalModules}
                         >Save</button>
                       </div>}
 
                       {updatingOptionalModules && <UpdatingBtn />}
                   </div>

              </div>}



               {/*Notes */}
               {notes && notes[0] !=="" &&
               <div className="flex flex-col self-start h-auto gap-1 large:w-85 small:w-85vw">
                  <label htmlFor="notes">Notes</label>


                   <div className='flex flex-col h-auto gap-1 w-100'>
                   
                   {
                      editNotes && notes && notes.map((note, index)=>
                        <div className='flex items-center gap-1' key={index}>
                          <input
                          type="text"
                          placeholder={`Enter note`}
                          name="notes"
                          className="p-0.5 border rounded-4 w-90"
                          value={note}
                          onChange={(e) => updateNotes(index, e.target.value)}
                        />
                 
                          {
                            index !==0 &&
                          
                          <button className='flex items-center justify-center text-crossLightPurple'
                            onClick={()=>{
                              removeNotes(index)
                            }}
                            >Remove</button>}
                              </div>)}
 
 
                     {!editNotes &&
                       <div className="p-0.5 border rounded-4 flex items-start h-auto justify-between bg-white">
                         <div className='flex flex-col gap-1 py-1 w-90'>
                          {program && program.notes.map((note, i)=>
                            <div key={i}>{i + 1}. {note.length>0 && note[0].toUpperCase()}{note.slice(1)}</div>
                          )}
                          </div>
                         <CiEdit className='cursor-pointer text-25px text-crossLightPurple'
                         onClick={toggleNotes}
                         />
                       </div>}
                     

                          
                       {editNotes &&
                       <button className='self-start text-crossLightPurple'
                    onClick={addNotes}
                    >+ Add note</button>}
                     
                       {editNotes &&
                       <div className='flex flex-row items-start h-auto gap-2 w-100'>
                         <button className='flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px'
                         onClick={toggleNotes}
                         >Cancel</button>
                         <button className='flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px'
                         onClick={changeNotes}
                         >Save</button>
                       </div>}
 
                       {updatingNotes && <UpdatingBtn />}
                   </div>

              </div>}
              

              
            </div>
          </div>
  )
}


export default EditProgramPage;