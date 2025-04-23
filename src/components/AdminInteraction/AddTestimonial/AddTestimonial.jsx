import React, { useContext, useEffect, useState } from 'react';
import { CrossContext } from '../../../Context/CrossContext';
import axios from 'axios';
import { toast } from 'react-toastify';




function AddTestimonial() {

    const {
        baseUrl,
        setLoading,
        setActiveScreen, allPrograms
      } = useContext(CrossContext);


      //to add Testimonial
  const [testimonialData, setTestimonialData] = useState({
    name: "",
    jobRole: '',
    priorityIndex: "",
    date: "",
    program: '',
    testimony: '',
  });

  

  //testimonial errors
  const [testimonialErrors, setTestimonialErrors] = useState({});
  console.log('testimonialData:', testimonialData);


  const handleChange = (e) => {
    const { name, value } = e.target;

    setTestimonialData({ ...testimonialData, [name]: value });

    console.log("testimonialData:", testimonialData);
  };



  
  //to add testimonial
  const createTestimonial = async (e) => {
    e.preventDefault();

    const validationErrors = {};

    //To ensure valid inputs
    if (!testimonialData.name.trim()) {
      validationErrors.name = "name is required";
    }

    if (!testimonialData.jobRole.trim()) {
      validationErrors.jobRole = "position is required";
    }

    if (!testimonialData.priorityIndex.trim()) {
      validationErrors.priorityIndex = "Priority index is required";
    }

    if (!testimonialData.date.trim()) {
      validationErrors.date = "date is required";
    }

    if (!testimonialData.program.trim()) {
      validationErrors.program = "select program";
    }

    if (!testimonialData.testimony.trim()) {
      validationErrors.testimony = "feedback is required";
    }




    setTestimonialErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;


    if (noError) {
      setLoading(true);

      try {
        const response = await axios.post(`${baseUrl}/api/testimonial`, testimonialData);

        if (response.status === 201) {
          
          toast.success('Testimonial added successfully!');
          setActiveScreen("overview")
        }
      } catch (error) {
        if(error){
          console.error("Error creating Testimonial:", error);
          toast.error(error.response.data.message)
        }
        
      } finally {
        setLoading(false);
      }
    }
  };
      



  return (
    <div className="flex flex-col items-start h-auto gap-2 w-100">
            <h4 className="font-semibold text-crossLightPurple">Add Testimonial</h4>
            
            <div
              className="flex flex-col h-auto gap-1 w-100 large:text-15px small:text-13px"
            >
              {/* name */}
              <div className="flex items-center justify-start h-auto gap-5 w-100">
                <div className="flex flex-col h-auto w-100">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    className="p-0.5 border rounded-4"
                    onChange={handleChange}
                  />
                  {testimonialErrors && (
                    <p className="text-13px text-vogueRed">
                      {testimonialErrors.name}
                    </p>
                  )}
                </div>
              </div>

              {/* job role */}
              <div className="flex items-center justify-start h-auto gap-5 w-100">
               <div className="flex flex-col h-auto w-100">
                  <label htmlFor="jobRole">Position</label>
                  <input
                    type="text"
                    placeholder="Enter position"
                    name="jobRole"
                    className="p-0.5 border rounded-4"
                    onChange={handleChange}
                  />
                  {testimonialErrors && (
                    <p className="text-13px text-vogueRed">
                      {testimonialErrors.jobRole}
                    </p>
                  )}
                </div>
              </div>


                {/* date and index */}
              <div className="flex items-center justify-start h-auto gap-5 w-100">
                <div className="flex flex-col w-40 h-auto">
                  <label htmlFor="date">
                  Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="p-0.5 border rounded-4"
                    onChange={handleChange}
                  />
                  {testimonialErrors && <p className="text-13px text-vogueRed">
                    {testimonialErrors.date}</p>}
                </div>


                <div className="flex flex-col w-40 h-auto">
                  <label htmlFor="priorityIndex">Priority Index</label>
                  <input
                    type="number"
                    name="priorityIndex"
                    className="p-0.5 border rounded-4"
                    onChange={handleChange}
                    placeholder='Enter index'
                  />
                  {testimonialErrors && (
                    <p className="text-13px text-vogueRed">
                      {testimonialErrors.priorityIndex}
                    </p>
                  )}
                </div>
              </div>

                  
                   {/* program */}
              <div className="flex items-center justify-start h-auto gap-5 w-100">
                <div className="flex flex-col h-auto w-100">
                  <label htmlFor="category">Program</label>

                  {/* <select name="program" id="" className="p-0.5 border rounded-4 cursor-pointer"
                    onChange={handleChange}
                    >
                      <option value="">-select-</option>
                      {
                        allPrograms && allPrograms.map((item, i)=>
                          <option value={item.id}
                          key={i}
                          >{item.title}</option>
                        )
                      }
                      
                  </select> */}

                  <input
                    type="text"
                    name="program"
                    className="p-0.5 border rounded-4"
                    onChange={handleChange}
                    placeholder='Enter program name'
                  />
                  
                  {testimonialErrors && (
                    <p className="text-13px text-vogueRed">
                      {testimonialErrors.webinarLink}
                    </p>
                  )}
                </div>              
              </div>   



               {/* job role */}
              <div className="flex items-center justify-start h-auto gap-5 w-100">
               <div className="flex flex-col h-auto w-100">
                  <label htmlFor="testimony">Feedback</label>
                  <input
                    type="text"
                    placeholder="Enter feedback"
                    name="testimony"
                    className="p-0.5 border rounded-4"
                    onChange={handleChange}
                  />
                  {testimonialErrors && (
                    <p className="text-13px text-vogueRed">
                      {testimonialErrors.testimony}
                    </p>
                  )}
                </div>
              </div>           

              <button
                onClick={createTestimonial}
                className="flex items-center justify-center mt-5 large:w-20 rounded-4 h-40px bg-crossLightPurple text-vogueWhite hover:bg-transparent small:w-100 hover:border hover:border-crossLightPurple hover:text-crossLightPurple"
              >
                Add Testimonial
              </button>
            </div>
          </div>
  )
}


export default AddTestimonial;