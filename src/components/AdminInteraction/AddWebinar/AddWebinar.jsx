import React, { useContext, useEffect, useState } from 'react';
import { CrossContext } from '../../../Context/CrossContext';
import axios from 'axios';
import { toast } from 'react-toastify';




function AddWebinar() {

    const {
        baseUrl,
        setLoading,
        setActiveScreen
      } = useContext(CrossContext);


      //to add webinar
  const [webinarData, setWebinarData] = useState({
    presenter: "",
    topic: '',
    description: "",
    date: "",
    time: '',
    duration: '',
    webinarLink: '',
  });

  

  //webinar errors
  const [webinarErrors, setWebinarErrors] = useState({});
  console.log('webinarData:', webinarData);


  const handleChange = (e) => {
    const { name, value } = e.target;

    setWebinarData({ ...webinarData, [name]: value });

    console.log("webinarData:", webinarData);
  };



  
  //to add webinar
  const createWebinar = async (e) => {
    e.preventDefault();

    const validationErrors = {};

    //To ensure valid inputs
    if (!webinarData.topic.trim()) {
      validationErrors.topic = "webinar topic is required";
    }

    if (!webinarData.presenter.trim()) {
      validationErrors.presenter = "a webinar must have a presenter";
    }

    if (!webinarData.description.trim()) {
      validationErrors.description = "webinar description is required";
    }

    if (!webinarData.date.trim()) {
      validationErrors.date = "webinar date is required";
    }

    if (!webinarData.time.trim()) {
      validationErrors.time = "webinar time is required";
    }

    if (!webinarData.duration.trim()) {
      validationErrors.duration = "webinar duration is required";
    }

    if (!webinarData.webinarLink.trim()) {
      validationErrors.webinarLink = "provide webinar link";
    }

    else if (!webinarData.webinarLink.includes('https')) {
      validationErrors.webinarLink = "Invalid link. Webinar link should start with https";
    }




    setWebinarErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;


    if (noError) {
      setLoading(true);

      try {
        const response = await axios.post(`${baseUrl}/api/webinar`, webinarData);

        // console.log("add product message:", response.data.message);
        if (response.data.status === "success") {
          // setAddProductAlert(true);
          toast.success('Webinar added successfully!');
          setActiveScreen("overview")
        }
      } catch (error) {
        console.error("Error creating webinar:", error);
      } finally {
        setLoading(false);
      }
    }
  };
      



  return (
    <div className="flex flex-col items-start h-auto gap-2 w-100">
            <h4 className="font-semibold text-crossLightPurple">Add Webinar</h4>
            
            <div
              className="flex flex-col h-auto gap-1 w-100 large:text-15px small:text-13px"
            >
              
              <div className="flex items-center justify-start h-auto gap-5 w-100">
                <div className="flex flex-col h-auto w-100">
                  <label htmlFor="title">Topic</label>
                  <input
                    type="text"
                    placeholder="Enter webinar topic"
                    name="topic"
                    className="p-0.5 border rounded-4"
                    onChange={handleChange}
                  />
                  {webinarErrors && (
                    <p className="text-13px text-vogueRed">
                      {webinarErrors.topic}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-start h-auto gap-5 w-100">
                <div className="flex flex-col h-auto w-100">
                  <label htmlFor="description">Description</label>
                  <textarea
                    type="text"
                    name="description"
                    className="p-0.5 border rounded-4"
                    onChange={handleChange}
                    placeholder='Briefly describe this upcoming webinar'
                  />
                  {webinarErrors && (
                    <p className="text-13px text-vogueRed">
                      {webinarErrors.description}
                    </p>
                  )}
                </div>

              </div>



              <div className="flex items-center justify-start h-auto gap-5 w-100">
                <div className="flex flex-col w-40 h-auto">
                  <label htmlFor="date">
                  Date
                  </label>
                  <input
                    type="datetime-local"
                    name="date"
                    className="p-0.5 border rounded-4"
                    onChange={handleChange}
                  />
                  {webinarErrors && <p className="text-13px text-vogueRed">
                    {webinarErrors.date}</p>}
                </div>


                <div className="flex flex-col w-40 h-auto">
                  <label htmlFor="time">
                  Time
                  </label>
                  <input
                    type="time"
                    placeholder="enter webinar time"
                    name="time"
                    className="p-0.5 border rounded-4"
                    onChange={handleChange}
                  />
                  {webinarErrors && <p className="text-13px text-vogueRed">
                    {webinarErrors.time}</p>}
                </div>
              </div>


              <div className="flex items-center justify-start h-auto gap-5 w-100">
                <div className="flex flex-col w-40 h-auto">
                  <label htmlFor="presenter">Presenter</label>
                  <input
                    type="text"
                    name="presenter"
                    className="p-0.5 border rounded-4"
                    onChange={handleChange}
                  />
                  {webinarErrors && (
                    <p className="text-13px text-vogueRed">
                      {webinarErrors.presenter}
                    </p>
                  )}
                </div>


                <div className="flex flex-col w-40 h-auto">
                  <label htmlFor="duration">Duration</label>
                  <input
                    type="text"
                    name="duration"
                    className="p-0.5 border rounded-4"
                    onChange={handleChange}
                  />
                  {webinarErrors && (
                    <p className="text-13px text-vogueRed">
                      {webinarErrors.duration}
                    </p>
                  )}
                </div>
              </div>


              <div className="flex items-center justify-start h-auto gap-5 w-100">
                <div className="flex flex-col h-auto w-100">
                  <label htmlFor="category">Webinar Link</label>
                  <input
                    type="text"
                    name="webinarLink"
                    className="p-0.5 border rounded-4"
                    placeholder='e.g: https://mywebinarlink.com'
                    onChange={handleChange}
                  />
                  
                  {webinarErrors && (
                    <p className="text-13px text-vogueRed">
                      {webinarErrors.webinarLink}
                    </p>
                  )}
                </div>              
              </div>              

              <button
                onClick={createWebinar}
                className="flex items-center justify-center mt-5 large:w-20 rounded-4 h-40px bg-crossLightPurple text-vogueWhite hover:bg-transparent small:w-100 hover:border hover:border-crossLightPurple hover:text-crossLightPurple"
              >
                Add Webinar
              </button>
            </div>
          </div>
  )
}


export default AddWebinar;