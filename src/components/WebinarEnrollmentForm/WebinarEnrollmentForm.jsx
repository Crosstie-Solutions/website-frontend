import React, { useContext, useEffect, useState } from "react";
import { VscClose } from "react-icons/vsc";
import { CrossContext } from "../../Context/CrossContext";
import { toast } from 'react-toastify';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";



function WebinarEnrollmentForm() {

  const {webinar, baseUrl, setWebinarEnrollment, loadingWebinar, setLoading} = useContext(CrossContext);

   //state for enrollment
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

  
    const handleChange = (e) => {
      const { name, value } = e.target;
  
      setEnrollmentData({ ...enrollmentData, [name]: value });
  
      console.log("enrollmentData:", enrollmentData);
    };
  
    
    
  
    //funtion for enrollment
  
    const [enrollmentErrors, setEnrollmentErrors] = useState({});
    
    const handleWebinarEnrollment = async (event) => {

      window.scrollTo({ top: 0, behavior: "auto" });
  
     event.preventDefault();
    
     const validationErrors = {};
    
     //To ensure valid inputs
     if (!firstName.trim()) {
       validationErrors.firstName = "first name is required";
     }
     if (!lastName.trim()) {
      validationErrors.lastName = "last name is required";
    }
    if (!phone) {
      validationErrors.phone = "phone is required";
    }
    if (!email.trim()) {
      validationErrors.email = "email is required";
    }

    
    
     setEnrollmentErrors(validationErrors);
    
     const noError = Object.keys(validationErrors).length === 0;
    
     if (noError) {
       try {
         // setLastErrors("");
         setLoading(true);
         const response = await axios.post(
           `${baseUrl}/api/webinar/register`,
           {
            webinarId: webinar && webinar.id,
            firstName,
            lastName,
            email, 
            phone,
          }
         );
    
         if (response.status === 201) {
           // setNewUser(response.data.data.user);
           toast.success('Webinar registration successful.');
           setWebinarEnrollment(null);
         }
       } catch (error) {
         
         console.log("Error registering for webinar:", error);
         
       } finally {
         setLoading(false);
       }
     }
    };

  
  
  return (
    <div className='fixed top-0 left-0 z-20 flex flex-col items-center justify-center py-10 overflow-y-scroll border h-100 w-100vw bg-overlay text-15px'>
      
      <div className='flex flex-col items-center justify-center h-auto pb-5 mt-20 bg-white large:gap-1 large:w-70vw rounded-20 small:w-90vw small:gap-1'>
        
        <div className="relative flex items-center justify-center text-white border bg-crossLightPurple h-80px w-100 rounded-tr-20 rounded-tl-20 border-crossLightPurple">
          <h4 className="text-25px">Webinar Registration</h4>
          <VscClose className="absolute cursor-pointer right-5 text-30px"
          
            onClick={()=>{
              setWebinarEnrollment(null)
            }}
          />
        </div>

        {/* webinar details */}
        <div className="flex flex-col items-center justify-center h-auto mt-3 border w-90 border-crossLightPurple rounded-10">
          
          {webinar ?
          <div className="flex items-center justify-start border-b h-40px w-100 border-crossLightPurple">
            <div className="flex items-center justify-center w-20 border-r border-crossLightPurple h-100 text-crossLightPurple">Topic</div>
            <div className="flex items-center justify-center font-bold w-80 h-100">{webinar && webinar.topic}</div>
          </div> : <Skeleton />}

            {webinar ?
          <div className="flex items-center justify-start border-b h-40px w-100 border-crossLightPurple">
            <div className="flex items-center justify-center w-20 border-r border-crossLightPurple h-100 text-crossLightPurple">Date & Time</div>
            <div className="flex items-center justify-center font-bold w-80 h-100"> {webinar && webinar.date} | {webinar && webinar.time}</div>
          </div> : <Skeleton />}

          {webinar ?
          <div className="flex items-center justify-start border-b h-40px w-100 border-crossLightPurple">
            <div className="flex items-center justify-center w-20 border-r border-crossLightPurple h-100 text-crossLightPurple">Duration</div>
            <div className="flex items-center justify-center font-bold w-80 h-100">{webinar && webinar.duration}</div>
          </div> : <Skeleton />}

          {webinar ?
          <div className="flex items-center justify-start h-40px w-100">
            <div className="flex items-center justify-center w-20 border-r border-crossLightPurple h-100 text-crossLightPurple">Trainer Name</div>
            <div className="flex items-center justify-center font-bold w-80 h-100">{webinar ? webinar.presenter : <Skeleton />}</div>
          </div> : <Skeleton />}

            {loadingWebinar && <div className="font-semibold">Loading webinar details...</div>}
        </div>


        {/* registration form */}
        <div className="flex flex-col items-center justify-between h-auto gap-2 pt-2 pb-3 mt-0 w-90 rounded-10">
          
          <div className="flex items-center justify-between h-auto gap-5 w-100">
            <div className="flex flex-col h-auto w-45">
              <label htmlFor="firstName">First Name</label>

              <div className="flex flex-col h-auto gap-1 w-100">
                <input
                  type="text"
                  placeholder="Enter webinar firstName"
                  name="firstName"
                  className="p-0.5 border rounded-4"
                  onChange={(e)=>setFirstName(e.target.value)}
                />

               
                <p className="text-13px text-vogueRed">{enrollmentErrors.firstName}</p>
              
              </div>
            </div>

            <div className="flex flex-col h-auto w-45">
              <label htmlFor="lastName">Last Name</label>

              <div className="flex flex-col h-auto gap-1 w-100">
                <input
                  type="text"
                  placeholder="Enter webinar presenter"
                  name="lastName"
                  className="p-0.5 border rounded-4"
                  onChange={(e)=>setLastName(e.target.value)}
                />

                <p className="text-13px text-vogueRed">{enrollmentErrors.lastName}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between h-auto gap-5 w-100">
            <div className="flex flex-col h-auto w-45">
              <label htmlFor="phone">Phone Number</label>

              <div className="flex flex-col h-auto gap-1 w-100">
                <input
                  type="number"
                  placeholder="Enter phone number"
                  name="phone"
                  className="p-0.5 border rounded-4"
                  onChange={(e)=>setPhone(e.target.value)}
                />

                <p className="text-13px text-vogueRed">{enrollmentErrors.phone}</p>
              </div>
            </div>

            <div className="flex flex-col h-auto w-45">
              <label htmlFor="lastName">Email</label>

              <div className="flex flex-col h-auto gap-1 w-100">
                <input
                  type="email"
                  placeholder="myemail@gamil.com"
                  name="email"
                  className="p-0.5 border rounded-4"
                  onChange={(e)=>setEmail(e.target.value)}
                />

                <p className="text-13px text-vogueRed">{enrollmentErrors.email}</p>
              </div>
            </div>
          </div>

          <button className="flex items-center justify-center w-auto px-2 text-white h-40px bg-crossLightPurple rounded-5"
          onClick={handleWebinarEnrollment}
          >Register</button>
        </div>
        
      </div>
      
    </div>
  );
}

export default WebinarEnrollmentForm;
