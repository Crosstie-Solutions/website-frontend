import React, { useContext, useState } from "react";
import { PHOTOS } from "../../assets/images";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { toast } from 'react-toastify';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CrossContext } from "../../Context/CrossContext";



function ContactForm() {

  const {baseUrl, setLoading} = useContext(CrossContext);

    //state for contact form
   
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [adminEmail, setAdminEmail] = useState("");
    const [service, setService] = useState("");
  
    console.log("fullName:", fullName);
    console.log("email:", email);
    console.log("message:", message);
    console.log("adminEmail:", adminEmail);
    console.log("service:", service);
  
    
    //to clear fields after submit
    const myField = document.querySelectorAll(".myField");
    console.log("myField:", myField);

    const messageField = document.getElementById("messageField");
    const nameField = document.getElementById("nameField");
    const emailField = document.getElementById("emailField");
    
  
    //funtion for enrollment
  
    const [contactErrors, setContactErrors] = useState({});

    //to set email
    const handleEmailSwitch = (e)=>{
      const service = e.target.value;

      setService(service)

      if(service==="Training"){
        setAdminEmail("adminfortraining@gmail.com")
      }else if(service==="Consulting"){
        setAdminEmail("promiseokpoto5050@gmail.com")
      }else if(service==="General Enquiries"){
        setAdminEmail("adminforgeneralenquiries@gmail.com")
      }
    }
    
    
    const makeEnquiry = async () => {
     
     
     const validationErrors = {};
    
     //To ensure valid inputs
     if (!fullName.trim()) {
       validationErrors.fullName = "full name is required";
     }
    if (!email.trim()) {
      validationErrors.email = "email is required";
    }
    if (!service.trim()) {
      validationErrors.service = "select service";
    }
    if (!message.trim()) {
      validationErrors.message = "message is required";
    }
    
     setContactErrors(validationErrors);
    
     const noError = Object.keys(validationErrors).length === 0;
    
     if (noError) {
       try {
         // setLastErrors("");
         setLoading(true);
         const response = await axios.post(
           `${baseUrl}/api/contact`,
           {
            fullName: fullName,
            email: email,
            service: service,
            adminEmail: adminEmail,
            message: message
           }
         );
    
         if (response.status === 201) {
          
           toast.success('Enquiry form submitted successfully. Our team will reach out via email.');
           messageField.value="";
           nameField.value="";
           emailField.value="";
         }
       } catch (error) {
         
         console.log("Error enrolling:", error);
         
       } finally {
         setLoading(false);
       }
     }
    };

    
  
  return (
    <div className="flex items-center justify-between h-auto text-white small:px-2 large:pl-8 bg-crossLightPurple large:w-100vw large:flex-row small:flex-col small:py-3 large:py-0 large:px-0 small:gap-3 large:gap-0">
      
      <div className="flex flex-col large:gap-3 large:w-35 small:w-100 small:gap-1">
        <h1 className="large:text-20px small:text-15px">
          OUR TEAM IS READY
          <br />{" "}
          <span className="font-bold text-crossYellow large:text-50px small:text-25px">TO HELP</span>
        </h1>

        <hr className="w-40 bg-white h-1px" />

        <div className="flex flex-col items-start h-auto gap-2 w-100">
          <address>
            Mulliner Towers, 7th Floor, 39 Alfred Rewane Road, Ikoyi Lagos.
          </address>

          <a
            href={`tel:07056517470`}
            className="flex items-center justify-center large:gap-1 small:gap-1"
          >
            <FaPhone className="rotate-90 text-15px text-crossYellow" /> 07056517470
          </a>

          <a
            href={`tel:08035190430`}
            className="flex items-center justify-center large:gap-1 small:gap-1"
          >
            <FaPhone className="rotate-90 text-15px text-crossYellow" /> 08035190430
          </a>

          <a
            href="mailto:info@crosstie.com"
            className="flex items-center justify-center large:gap-1 small:gap-1"
          >
            <MdOutlineMail className="text-20px text-crossYellow" /> info@crosstiesolutions.com
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-1 py-3 text-black bg-white large:px-5 large:h-100 large:w-50 small:rounded-5 small:w-100 text-15px small:px-1 large:rounded-none">
        
        <div className="flex flex-col items-start h-auto w-100">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" name="fullName" id="nameField" className="pl-1 border rounded border-crossLightPurple w-100 h-40px myField"
          onChange={(e)=>setFullName(e.target.value)}
          />
          <p className="text-vogueRed">{contactErrors && contactErrors.fullName}</p>
        </div>

        <div className="flex flex-col items-start h-auto w-100">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="emailField" className="pl-1 border rounded border-crossLightPurple w-100 h-40px myField"
          onChange={(e)=>setEmail(e.target.value)}
          />
          <p className="text-vogueRed">{contactErrors && contactErrors.email}</p>
        </div>

        <div className="flex flex-col items-start h-auto w-100">
          <label htmlFor="fullName">Service</label>
          
          <select name="service" id="" className="pl-1 border rounded cursor-pointer border-crossLightPurple w-100 h-40px"
          onChange={handleEmailSwitch}
          >
            <option value="">-select-</option>
            <option value="Training">Training</option>
            <option value="Consulting">Consulting</option>
            <option value="General Enquiries">General Enquiries</option>
          </select>
          <p className="text-vogueRed">{contactErrors && contactErrors.service}</p>
        </div>

        <div className="flex flex-col items-start h-auto w-100">
          <label htmlFor="message">Message</label>
          
          <textarea name="message" id="messageField" className="border rounded small:p-1 large:p-2 border-crossLightPurple w-100 h-150px myField"
          onChange={(e)=>setMessage(e.target.value)}
          ></textarea>

          <p className="text-vogueRed">{contactErrors && contactErrors.message}</p>
        </div>

        <button className="flex items-center justify-center border-none rounded h-40px w-100 bg-crossYellow text-crossLightPurple hover:bg-crossLightPurple hover:text-crossYellow"
        onClick={makeEnquiry}
        >SUBMIT</button>
      </div>
    </div>
  );
}

export default ContactForm;
