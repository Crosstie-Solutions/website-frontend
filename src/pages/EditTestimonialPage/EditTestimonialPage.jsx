import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { CrossContext } from "../../Context/CrossContext";
import { Link, useParams } from "react-router-dom";
import { LuMoveLeft } from "react-icons/lu";
import { CiEdit } from "react-icons/ci";
import { UpdatingBtn } from "../../components/LoadingBtn/LoadingBtn";
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";



function EditTestimonialPage() {
  const { baseUrl, allPrograms } = useContext(CrossContext);

  const webinarId = useParams().webinarId;
  
  const testimonyId = useParams().testimonyId;

  const webinar = "nothing"


  
  // to view Testimonial
  const [testimonial, setTestimonial] = useState(null);
  const [loadingTestimonial, setLoadingTestimonial] = useState(false);
      
  console.log("testimonial:", testimonial);  
      
    useEffect(()=>{
      const viewTestimonial = async ()=> {
  
        try {
          setLoadingTestimonial(true)
          const response = await axios.get(`${baseUrl}/api/testimonial/${testimonyId}`);
          setTestimonial(response.data.data.data);
    
        } catch (error) {
          console.error('Error fetching testimonial:', error);
        }finally{
          setLoadingTestimonial(false);
        }
    
      }
  
      viewTestimonial();
    }, [testimonyId]);
    
    
    
  //funtions to edit Testimonial

  const [editErrors, setEditErrors] = useState({});

  //change Testimonial name
  const [editName, setEditName] = useState(false);
  const [updatingName, setUpdatingName] = useState(false);

  const [name, setName] = useState("");

  const toggleName = () => {
    setEditName(!editName);
  };

  const changeName = async () => {
    const validationErrors = {};

    //To ensure valid inputs

    if (!name.trim()) {
      validationErrors.name = "testimonial must have a name.";
    }

    setEditErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

    if (noError) {
      try {
        setUpdatingName(true);
        setEditName(false);
        const response = await axios.patch(
          `${baseUrl}/api/testimonial/${testimonyId && testimonyId}`,
          {
            name: name,
          }
        );

        console.log("testimonial update response:", response.data);
        if ((response.data.status = "success")) {
          toast.success("testimonial updated successfully.");
        }
      } catch (error) {
        console.error("Error updating testimonial:", error);
      } finally {
        setUpdatingName(false);
      }
    }
  };




  
    //change testimonial jobRle
    const [editJobRole, setEditJobRole] = useState(false);
    const [updatingJobRole, setUpdatingJobRole] = useState(false);
  
    const [jobRole, setJobRole] = useState("");
  
    const toggleJobRole = () => {
      setEditJobRole(!editJobRole);
    };
  
    const changeJobRole = async () => {
      const validationErrors = {};
  
      //To ensure valid inputs
  
      if (!jobRole.trim()) {
        validationErrors.jobRole = "jobRole is required.";
      }
  
      setEditErrors(validationErrors);
  
      const noError = Object.keys(validationErrors).length === 0;
  
      if (noError) {
        try {
          setUpdatingJobRole(true);
          setEditJobRole(false);
          const response = await axios.patch(
            `${baseUrl}/api/testimonial/${testimonyId && testimonyId}`,
            {
              jobRole: jobRole,
            }
          );
  
          console.log("Testimonial update response:", response.data);
          if ((response.data.status = "success")) {
            toast.success("Testimonial updated successfully.");
          }
        } catch (error) {
          console.error("Error updating Testimonial:", error);
        } finally {
          setUpdatingJobRole(false);
        }
      }
    };


    
    //change testimonial Index
    const [editPriorityIndex, setEditPriorityIndex] = useState(false);
    const [updatingPriorityIndex, setUpdatingPriorityIndex] = useState(false);
  
    const [priorityIndex, setPriorityIndex] = useState("");
  
    const togglePriorityIndex = () => {
      setEditPriorityIndex(!editPriorityIndex);
    };
  
    const changePriorityIndex = async () => {
      const validationErrors = {};
  
      //To ensure valid inputs
  
      if (!priorityIndex.trim()) {
        validationErrors.priorityIndex = "priorityIndex is required.";
      }
  
      setEditErrors(validationErrors);
  
      const noError = Object.keys(validationErrors).length === 0;
  
      if (noError) {
        try {
          setUpdatingPriorityIndex(true);
          setEditPriorityIndex(false);
          const response = await axios.patch(
            `${baseUrl}/api/testimonial/${testimonyId && testimonyId}`,
            {
              priorityIndex: priorityIndex,
            }
          );
  
          console.log("Testimonial update response:", response.data);
          if ((response.data.status = "success")) {
            toast.success("Testimonial updated successfully.");
          }
        } catch (error) {
         if(error && error.response.data.message.includes("duplicate")){
          console.error("Error updating Testimonial:", error);
          toast.error(`You already have a testimonial displayed at index ${priorityIndex}, edit existing testimonial to proceed.`)
         }
        } finally {
          setUpdatingPriorityIndex(false);
        }
      }
    };


    
    //change testimonial date
    const [editDate, setEditDate] = useState(false);
    const [updatingDate, setUpdatingDate] = useState(false);
  
    const [date, setDate] = useState("");
  
    
    const toggleDate = () => {
      setEditDate(!editDate);
    };
       
    const changeDate = async () => {
      const validationErrors = {};
  
      //To ensure valid inputs
  
      if (!date.trim()) {
        validationErrors.date = "testimonial date is required.";
      }
  
      setEditErrors(validationErrors);
  
      const noError = Object.keys(validationErrors).length === 0;
  
      if (noError) {
        try {
          setUpdatingDate(true);
          setEditDate(false);
          const response = await axios.patch(
            `${baseUrl}/api/testimonial/${testimonyId && testimonyId}`,
            {
              date: date,
            }
          );
  
          console.log("Testimonial update response:", response.data);
          if ((response.data.status = "success")) {
            toast.success("Testimonial updated successfully.");
          }
        } catch (error) {
          console.error("Error updating Testimonial:", error);
        } finally {
          setUpdatingDate(false);
        }
      }
    };



    //change testimonial program
    const [editProgram, setEditProgram] = useState(false);
    const [updatingProgram, setUpdatingProgram] = useState(false);
  
    const [program, setProgram] = useState("");
  
    const toggleProgram = () => {
      setEditProgram(!editProgram);
    };
  
    const changeProgram = async () => {
      const validationErrors = {};
  
      //To ensure valid inputs
  
      if (!program.trim()) {
        validationErrors.program = "program is required.";
      }
  
      setEditErrors(validationErrors);
  
      const noError = Object.keys(validationErrors).length === 0;
  
      if (noError) {
        try {
          setUpdatingProgram(true);
          setEditProgram(false);
          const response = await axios.patch(
            `${baseUrl}/api/testimonial/${testimonyId && testimonyId}`,
            {
              program: program,
            }
          );
  
          console.log("Testimonial update response:", response.data);
          if ((response.data.status = "success")) {
            toast.success("Testimonial updated successfully.");
          }
        } catch (error) {
          console.error("Error updating Testimonial:", error);
        } finally {
          setUpdatingProgram(false);
        }
      }
    };



        //change testimony
        const [editTestimony, setEditTestimony] = useState(false);
        const [updatingTestimony, setUpdatingTestimony] = useState(false);
      
        const [testimony, setTestimony] = useState("");
      
        const toggleTestimony = () => {
          setEditTestimony(!editTestimony);
        };
      
        const changeTestimony = async () => {
          const validationErrors = {};
      
          //To ensure valid inputs
      
          if (!testimony.trim()) {
            validationErrors.testimony = "Testimony is required.";
          }
      
          setEditErrors(validationErrors);
      
          const noError = Object.keys(validationErrors).length === 0;
      
          if (noError) {
            try {
              setUpdatingTestimony(true);
              setEditTestimony(false);
              const response = await axios.patch(
                `${baseUrl}/api/testimonial/${testimonyId && testimonyId}`,
                {
                  testimony: testimony,
                }
              );
      
              console.log("Testimonial update response:", response.data);
              if ((response.data.status = "success")) {
                toast.success("Testimonial updated successfully.");
              }
            } catch (error) {
              console.error("Error updating Testimonial:", error);
            } finally {
              setUpdatingTestimony(false);
            }
          }
        };



  
  return (
    <div className="flex flex-col items-start h-auto gap-2 mt-17 large:w-50vw small:w-90vw">
      <div className="flex gap-3">
        <Link
          to="/admin-dashboard"
          className="flex items-center text-crossLightPurple"
        >
          {" "}
          <LuMoveLeft className="flex text-25px" />
        </Link>
        <h4 className="pl-0 font-semibold text-crossLightPurple large:text-20px small:text-15px">
          Edit Testimonial
        </h4>
      </div>

      {testimonial &&
      <div className="flex flex-col h-auto large:gap-2 small:gap-1 w-100 large:text-15px small:text-13px">

        {/* Name */}
        
        <div className="flex items-center justify-start h-auto gap-5 w-100">
          <div className="flex flex-col h-auto w-100">
            <label htmlFor="title">Name</label>

            <div className="flex flex-col h-auto gap-1 w-100">
              {editName && (
                <input
                type="text"
                placeholder="Enter name"
                name="name"
                className="p-0.5 border rounded-4"
                onChange={(e) => setName(e.target.value)}
                defaultValue={testimonial && testimonial.name}
              />
              )}

              {!editName && testimonial  &&
                <div className="p-0.5 border rounded-4 flex items-center h-auto justify-between bg-white">
                  <div className="w-90">{testimonial && testimonial.name}</div>
                  <CiEdit
                    className="cursor-pointer text-25px text-crossLightPurple"
                    onClick={toggleName}
                  />
                </div>}
                

              {editName && (
                <p className="text-13px text-vogueRed">{editErrors.name}</p>
              )}

              {editName && (
                <div className="flex flex-row items-start h-auto gap-2 w-100">
                  <button
                    className="flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px"
                    onClick={toggleName}
                  >
                    Cancel
                  </button>
                  <button
                    className="flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px"
                    onClick={changeName}
                  >
                    Save
                  </button>
                </div>
              )}

              {updatingName && <UpdatingBtn />}
            </div>
          </div>
        </div>



        {/* position */}

        <div className="flex items-center justify-start h-auto gap-5 w-100">
          <div className="flex flex-col h-auto w-100">
            <label htmlFor="jobRole">Position</label>

            <div className="flex flex-col h-auto gap-1 w-100">
              {editJobRole && (
                <input
                type="text"
                placeholder="Enter jobRole"
                name="jobRole"
                className="p-0.5 border rounded-4"
                onChange={(e) => setJobRole(e.target.value)}
                defaultValue={testimonial && testimonial.jobRole}
              />
              )}

              {!editJobRole && testimonial &&
                <div className="p-0.5 border rounded-4 flex items-center h-auto justify-between bg-white">
                  <div className="w-90">{testimonial && testimonial.jobRole}</div>
                  <CiEdit
                    className="cursor-pointer text-25px text-crossLightPurple"
                    onClick={toggleJobRole}
                  />
                </div>}

              {editJobRole && (
                <p className="text-13px text-vogueRed">{editErrors.jobRole}</p>
              )}

              {editJobRole && (
                <div className="flex flex-row items-start h-auto gap-2 w-100">
                  <button
                    className="flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px"
                    onClick={toggleJobRole}
                  >
                    Cancel
                  </button>
                  <button
                    className="flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px"
                    onClick={changeJobRole}
                  >
                    Save
                  </button>
                </div>
              )}

              {updatingJobRole && <UpdatingBtn />}
            </div>
          </div>
        </div>
        

        
            {/* priorityIndex and date */}
        <div className="flex items-center justify-between h-auto gap-5 w-100">
          <div className="flex flex-col w-40 h-auto">
            <label htmlFor="date">Date</label>

            <div className="flex flex-col h-auto gap-1 w-100">
              {editDate && (
                <input
                type="date"
                placeholder="Enter testimonial date"
                name="date"
                className="p-0.5 border rounded-4"
                onChange={(e) => setDate(e.target.value)}
                defaultValue={testimonial && testimonial.date}
              />
              )}

              {!editDate && testimonial &&
                <div className="p-0.5 border rounded-4 flex items-center h-auto justify-between bg-white">
                  <div className="w-90">{testimonial && testimonial.date}</div>
                  <CiEdit
                    className="cursor-pointer text-25px text-crossLightPurple"
                    onClick={toggleDate}
                  />
                </div>}

              {editDate && (
                <p className="text-13px text-vogueRed">{editErrors.date}</p>
              )}

              {editDate && (
                <div className="flex flex-row items-start h-auto gap-2 w-100">
                  <button
                    className="flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px"
                    onClick={toggleDate}
                  >
                    Cancel
                  </button>
                  <button
                    className="flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px"
                    onClick={changeDate}
                  >
                    Save
                  </button>
                </div>
              )}

              {updatingDate && <UpdatingBtn />}
            </div>
          </div>

          <div className="flex flex-col w-40 h-auto">
            <label htmlFor="priorityIndex">Index</label>
            
            <div className="flex flex-col h-auto gap-1 w-100">
              {editPriorityIndex && (
                <input
                type="text"
                placeholder="Enter priority index"
                name="priorityIndex"
                className="p-0.5 border rounded-4"
                onChange={(e) => setPriorityIndex(e.target.value)}
                defaultValue={testimonial && testimonial.priorityIndex}
              />
              )}

              {!editPriorityIndex && testimonial &&
                <div className="p-0.5 border rounded-4 flex items-center h-auto justify-between bg-white">
                  <div className="w-90">{testimonial && testimonial.priorityIndex}</div>
                  <CiEdit
                    className="cursor-pointer text-25px text-crossLightPurple"
                    onClick={togglePriorityIndex}
                  />
                </div>
              }

              {editPriorityIndex && (
                <p className="text-13px text-vogueRed">{editErrors.priorityIndex}</p>
              )}

              {editPriorityIndex && (
                <div className="flex flex-row items-start h-auto gap-2 w-100">
                  <button
                    className="flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px"
                    onClick={togglePriorityIndex}
                  >
                    Cancel
                  </button>
                  <button
                    className="flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px"
                    onClick={changePriorityIndex}
                  >
                    Save
                  </button>
                </div>
              )}

              {updatingPriorityIndex && <UpdatingBtn />}
            </div>
          </div>
        </div>


            {/* Program */}
        <div className="flex items-center justify-start h-auto gap-5 w-100">
          <div className="flex flex-col h-auto w-100">
            <label htmlFor="program">Program</label>
            

            <div className="flex flex-col h-auto gap-1 w-100">
              {editProgram && (

              // <select name="program" id="" className="p-0.5 border rounded-4 cursor-pointer"
              // onChange={(e) => setProgram(e.target.value)}
              // >
              //   <option value="">-select-</option>
              //   {
              //     allPrograms && allPrograms.map((item, i)=>
              //       <option value={item.id}
              //       key={i}
              //       >{item.title}</option>
              //     )
              //   }
                
              // </select>

                <input
                type="text"
                placeholder="Enter program"
                name="program"
                className="p-0.5 border rounded-4"
                onChange={(e) => setProgram(e.target.value)}
                defaultValue={testimonial && testimonial.program}
                />
              )}

              {!editProgram && testimonial &&
                <div className="p-0.5 border rounded-4 flex items-center h-auto justify-between bg-white">
                  <div className="w-90">{testimonial && testimonial.program}</div>
                  <CiEdit
                    className="cursor-pointer text-25px text-crossLightPurple"
                    onClick={toggleProgram}
                  />
                </div> }

              {editProgram && (
                <p className="text-13px text-vogueRed">{editErrors.program}</p>
              )}
              

              {editProgram && (
                <div className="flex flex-row items-start h-auto gap-2 w-100">
                  <button
                    className="flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px"
                    onClick={toggleProgram}
                  >
                    Cancel
                  </button>
                  <button
                    className="flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px"
                    onClick={changeProgram}
                  >
                    Save
                  </button>
                </div>
              )}

              {updatingProgram && <UpdatingBtn />}
            </div>
          </div>
        </div>

        {/* testimony */}
          
        
        <div className="flex items-center justify-start h-auto gap-5 w-100">
          <div className="flex flex-col h-auto w-100">
            <label htmlFor="category">Feedback</label>
            
            
            <div className="flex flex-col h-auto gap-1 w-100">
              {editTestimony && (
                <textarea
                type="text"
                placeholder="Enter testimony"
                name="testimony"
                className="p-0.5 border rounded-4 min-h-30vh"
                onChange={(e) => setTestimony(e.target.value)}
                defaultValue={testimonial && testimonial.testimony}
              />
              )}

              {!editTestimony && testimonial &&
                <div className="flex items-center justify-between h-auto p-2 bg-white border rounded-4">
                  <div className="w-90">{testimonial && testimonial.testimony}</div>
                  <CiEdit
                    className="cursor-pointer text-25px text-crossLightPurple"
                    onClick={toggleTestimony}
                  />
                </div> }

              {editTestimony && (
                <p className="text-13px text-vogueRed">{editErrors.testimony}</p>
              )}
              

              {editTestimony && (
                <div className="flex flex-row items-start h-auto gap-2 w-100">
                  <button
                    className="flex items-center justify-center w-auto px-1 border rounded text-crossLightPurple border-crossLightPurple h-30px"
                    onClick={toggleTestimony}
                  >
                    Cancel
                  </button>
                  <button
                    className="flex items-center justify-center w-auto px-2 text-white border rounded bg-crossLightPurple border-crossLightPurple h-30px"
                    onClick={changeTestimony}
                  >
                    Save
                  </button>
                </div>
              )}

              {updatingTestimony && <UpdatingBtn />}
            </div>
          </div>
        </div>
        
      </div>}
      
      {loadingTestimonial && <p className="font-semibold">Loading testimonial details</p>}
    </div>
  );
}

export default EditTestimonialPage;