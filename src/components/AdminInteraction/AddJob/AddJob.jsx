import React, { useContext, useEffect, useState } from 'react';
import { CrossContext } from '../../../Context/CrossContext';
import axios from 'axios';
import { toast } from 'react-toastify';




function AddJob() {

    const {
        me,
        baseUrl,
        loginToken,
        setLoading,
        activeScreen,
        allCourses, setActiveScreen, executiveCourse
      } = useContext(CrossContext);


      //to add and remove more responsibilities
      const [responsibilities, setResponsibilities] = useState([""]);

      console.log("responsibilities:", responsibilities);

      const addResponsibility = () => {
        setResponsibilities([...responsibilities, ""]);
      };

      const removeResponsibility = (index) => {
        setResponsibilities(responsibilities.filter((_, i) => i !== index));
    };


    // Update a date's value by index
  const updateResponsibility = (index, value) => {
    const updatedResponsibilities = [...responsibilities];
    updatedResponsibilities[index] = value;
    setResponsibilities(updatedResponsibilities);
    
  };


  
  //to add and remove requirements
  const [requirements, setRequirements] = useState([""]);

  console.log("requirements:", requirements);

  const addRequirement = () => {
    setRequirements([...requirements, ""]);
  };

  const removeRequirement = (index) => {
    setRequirements(requirements.filter((_, i) => i !== index));
};


// Update a requirements's value by index
    const updateRequirement = (index, value) => {
        const updatedRequirements = [...requirements];
        updatedRequirements[index] = value;
        setRequirements(updatedRequirements);
    };




  
      //to add and remove benefits
  const [benefits, setBenefits] = useState([""]);

  console.log("benefits:", benefits);

  const addBenefits = () => {
    setBenefits([...benefits, ""]);
  };

  const removeBenefits = (index) => {
    setBenefits(benefits.filter((_, i) => i !== index));
};


// Update a benefits's value by index
    const updateBenefits = (index, value) => {
        const updatedBenefits = [...benefits];
        updatedBenefits[index] = value;
        setBenefits(updatedBenefits);
    };
      



   //to add and remove recruitment Process
   const [recruitmentProcess, setRecruitmentProcess] = useState([""]);

   console.log("recruitmentProcess:", recruitmentProcess);
 
   const addRecruitmentProcess = () => {
     setRecruitmentProcess([...recruitmentProcess, ""]);
   };
 
   const removeRecruitmentProcess = (index) => {
     setRecruitmentProcess(recruitmentProcess.filter((_, i) => i !== index));
 };
 
 
 // Update a RecruitmentProcess's value by index
     const updateRecruitmentProcess = (index, value) => {
         const updatedRecruitmentProcess = [...recruitmentProcess];
         updatedRecruitmentProcess[index] = value;
         setRecruitmentProcess(updatedRecruitmentProcess);
     };
       

      
      //scroll to top
      useEffect(() => {
          window.scrollTo({ top: 0, behavior: "auto" });
        }, [activeScreen]);

        

      //to add job

      const [role, setRole] = useState('')
      const [mode, setMode] = useState('')
      const [budget, setBudget] = useState('')
      const [type, setType] = useState('')
      const [description, setDescription] = useState('')
      const [location, setLocation] = useState('')        

        
      
        //job errors
        const [jobErrors, setJobErrors] = useState({});
       
              
      
        
        //to add job
      const addJob = async (e) => {
          e.preventDefault();
      
          const validationErrors = {};
      
          //To ensure valid inputs
          if (!role.trim()) {
            validationErrors.role = "job role is required";
          }
      
          if (!mode.trim()) {
            validationErrors.mode = "specify job mode";
          }
      
          if (!type) {
            validationErrors.type = "specify employment type";
          }

          if (!description) {
            validationErrors.description = "add job description";
          }

          if (responsibilities.length < 1) {
            validationErrors.responsibilities = "add job responsibilities";
          }


          if (requirements.length < 1) {
            validationErrors.requirements = "add job requirements";
          }
      
      
         
      
      
          setJobErrors(validationErrors);
      
          const noError = Object.keys(validationErrors).length === 0;
          

          
      
          if (noError) {
            setLoading(true);
            window.scrollTo({ top: 0, behavior: "auto" });
      
            try {
              const response = await axios.post(`${baseUrl}/api/job`, {
                role: role,
                mode: mode,
                budget: budget,
                type: type,
                description: description,
                location: location,
                responsibilities: responsibilities,
                requirements: requirements,
                benefits: benefits,
                recruitmentProcess: recruitmentProcess,
              }, {
                headers: {
                  "Content-Type": "application/json",      
                },
                
              });
      
              console.log("add job message:", response.data.message);
              if (response.status === 201) {
                
                toast.success('Job created successfully!');
                setActiveScreen('overview')
              }
            } catch (error) {
              console.error("Error creating job:", error);
            } finally {
              setLoading(false);
            }
          }
        };
      



  return (
    <div className="flex flex-col items-start h-auto gap-2 w-100">
            <h4 className="font-semibold text-crossLightPurple">Add Job</h4>

            <div
              className="flex flex-col h-auto gap-2 w-100 large:text-15px small:text-13px"
            >
              <div className="flex items-center justify-start h-auto gap-5 w-100">
                <div className="flex flex-col w-40 h-auto">
                  <label htmlFor="role">Role</label>
                  <input
                    type="text"
                    placeholder="Enter job role"
                    name="role"
                    className="p-0.5 border rounded-4"
                    onChange={(e)=>setRole(e.target.value)}
                  />
                  {jobErrors && (
                    <p className="text-13px text-vogueRed">
                      {jobErrors.role}
                    </p>
                  )}
                </div>

                

                <div className="flex flex-col w-40 h-auto">
                  <label htmlFor="mode">Mode</label>
                  <select name="mode" id=""
                  className="p-0.5 border rounded-4 cursor-pointer"
                  onChange={(e)=>setMode(e.target.value)}
                  >
                    
                     <option value="">-select-</option>
                     <option value="On-Site">On-Site</option>
                     <option value="Remote">Remote</option>
                     <option value="Hybrid">Hybrid</option>
                     
                  </select>
                  
                  {jobErrors && (
                    <p className="text-13px text-vogueRed">
                      {jobErrors.mode}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-start h-auto gap-5 w-100">
                <div className="flex flex-col w-40 h-auto">
                  <label htmlFor="budget">Budget (&#8358;)</label>
                  <input
                    type="text"
                    placeholder="What is the budget for this role?"
                    name="budget"
                    className="p-0.5 border rounded-4"
                    onChange={(e)=>setBudget(e.target.value)}
                  />
                  {jobErrors && (
                    <p className="text-13px text-vogueRed">
                      {jobErrors.budget}
                    </p>
                  )}
                </div>

                

                <div className="flex flex-col w-40 h-auto">
                  <label htmlFor="type">Employment Type</label>
                  <select name="type" id=""
                  className="p-0.5 border rounded-4 cursor-pointer"
                  onChange={(e)=>setType(e.target.value)}
                  >
                    
                     <option value="">-select-</option>
                     <option value="Full-time">Full-time</option>
                     <option value="Part-time">Part-time</option>
                     
                  </select>
                  
                  {jobErrors && (
                    <p className="text-13px text-vogueRed">
                      {jobErrors.type}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-start h-auto gap-5 w-100">
                <div className="flex flex-col h-auto w-100">
                  <label htmlFor="location">Job Location</label>
                  <input
                    type="text"
                    placeholder="Enter program location"
                    name="location"
                    className="p-0.5 border rounded-4"
                    onChange={(e)=>setLocation(e.target.value)}
                  />
                  {jobErrors && (
                    <p className="text-13px text-vogueRed">
                      {jobErrors.location}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-start h-auto gap-5 w-100">
               
               <div className="flex flex-col h-auto w-100">
                 <label htmlFor="description">Job Description</label>
                 <textarea
                   type="text"
                   name="description"
                   placeholder='Enter job description...'
                   className="p-0.5 border rounded-4 h-100px"
                   onChange={(e)=>setDescription(e.target.value)}
                 />
                 {jobErrors && (
                   <p className="text-13px text-vogueRed">
                     {jobErrors.description}
                   </p>
                 )}
               </div>
             </div>

             


              <div className="flex flex-col h-auto gap-1 w-100">
                  <label htmlFor="responsibilities">Responsibilities</label>
                  {
                    responsibilities && responsibilities.map((day, index)=>
                      <div className='flex items-center gap-1' key={index}>
                          <input
                          type="text"
                          placeholder={`Enter job responsibility ${index + 1}`}
                          name="responsibilities"
                          className="p-0.5 border rounded-4 w-85"
                          value={day}
                          onChange={(e) => updateResponsibility(index, e.target.value)}  
                        />
                        
                        {
                          index !==0 &&
                        
                        <button className='self-start text-crossLightPurple'
                          onClick={()=>{
                            removeResponsibility(index)
                          }}
                          >- Remove</button>}
                      </div>
                    )
                  }
                  
                  {jobErrors && (
                    <p className="text-13px text-vogueRed">
                      {jobErrors.responsibilities}
                    </p>
                  )}

                 

                  <button className='self-start text-crossLightPurple'
                    onClick={addResponsibility}
                    >+ Add responsibility</button>
              </div>



              <div className="flex flex-col h-auto gap-1 w-100">
                  <label htmlFor="requirements">Job Requirements</label>
                  {
                    requirements && requirements.map((objective, index)=>
                      <div className='flex items-center gap-1' key={index}>
                          <input
                          type="text"
                          placeholder={`Enter job requirement`}
                          name="requirements"
                          className="p-0.5 border rounded-4 w-85"
                          value={objective}
                          onChange={(e) => updateRequirement(index, e.target.value)}
                          
                        />
                        
                        {
                          index !==0 &&
                        
                        <button className='self-start text-crossLightPurple'
                          onClick={()=>{
                            removeRequirement(index)
                          }}
                          >- Remove</button>}
                      </div>
                    )
                  }
                  
                  {jobErrors && (
                    <p className="text-13px text-vogueRed">
                      {jobErrors.requirements}
                    </p>
                  )}

                 

                  <button className='self-start text-crossLightPurple'
                    onClick={addRequirement}
                    >+ Add requirement</button>
              </div>



              <div className="flex flex-col h-auto gap-1 w-100">
                  <label htmlFor="benefits">Job Benefits</label>
                  {
                    benefits && benefits.map((module, index)=>
                      <div className='flex items-center gap-1' key={index}>
                          <input
                          type="text"
                          placeholder={`Enter job benefit`}
                          name="benefits"
                          className="p-0.5 border rounded-4 w-85"
                          value={module}
                          onChange={(e) => updateBenefits(index, e.target.value)}
                          
                        />
                        
                        {
                          index !==0 &&
                        
                        <button className='self-start text-crossLightPurple'
                          onClick={()=>{
                            removeBenefits(index)
                          }}
                          >- Remove</button>}
                      </div>
                    )
                  }
                  
                  {jobErrors && (
                    <p className="text-13px text-vogueRed">
                      {jobErrors.benefits}
                    </p>
                  )}

                 

                  <button className='self-start text-crossLightPurple'
                    onClick={addBenefits}
                    >+ Add benefit</button>
              </div>




              <div className="flex flex-col h-auto gap-1 w-100">
                  <label htmlFor="recruitmentProcess">Recruitment Process (Let applicants know the stages of your recruitment)</label>
                  {
                    recruitmentProcess && recruitmentProcess.map((note, index)=>
                      <div className='flex items-center gap-1' key={index}>
                          <input
                          type="text"
                          placeholder={`Enter stage ${index + 1}`}
                          name="recruitmentProcess"
                          className="p-0.5 border rounded-4 w-85"
                          value={note}
                          onChange={(e) => updateRecruitmentProcess(index, e.target.value)}
                          
                        />
                        
                        {
                          index !==0 &&
                        
                        <button className='self-start text-crossLightPurple'
                          onClick={()=>{
                            removeRecruitmentProcess(index)
                          }}
                          >- Remove</button>}
                      </div>
                    )
                  }
                  
                  {jobErrors && (
                    <p className="text-13px text-vogueRed">
                      {jobErrors.modules}
                    </p>
                  )}

                 

                  <button className='self-start text-crossLightPurple'
                    onClick={addRecruitmentProcess}
                    >+ Add stage</button>
              </div>
              

              <button
                onClick={addJob}
                className="flex items-center justify-center mt-5 large:w-20 rounded-4 h-40px bg-crossLightPurple text-vogueWhite hover:bg-transparent small:w-50 hover:border hover:border-crossLightPurple hover:text-crossLightPurple"
              >
                Post Job
              </button>
            </div>
          </div>
  )
}


export default AddJob;