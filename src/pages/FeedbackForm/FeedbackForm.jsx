import React, { useContext, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { CrossContext } from "../../Context/CrossContext";




function FeedbackForm() {

  const {baseUrl, setLoading} = useContext(CrossContext);

  const webinarId = useParams().webinarId

  const navigate = useNavigate();
  

  // states for signup
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [topic, setTopic] = useState("");
  const [rating, setRating] = useState("");
  
  
  
      //signUp request
const [signupErrors, setSignupErrors] = useState({});
 
 //form data for sign up
 const formData = {
     webinarId: webinarId,
     fullName: fullName,
     email: email,
     phone: phone,
     interest: interest,
     rating: rating,
     topic: topic,
     suggestion: suggestion,
 };


 //funtion for signup
const sendFeedback = async (event) => {

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
 event.preventDefault();

 const validationErrors = {};

 //To ensure valid inputs
 if (!fullName.trim()) {
   validationErrors.fullName = "full name is required";
 }

 if (fullName.trim().split(' ').length !== 2) {
   validationErrors.fullName = "Please enter first and last name";
 }


 if (!email.trim()) {
   validationErrors.email = "email is required";
 }

 else if (!emailRegex.test(email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

 if (!phone.trim()) {
   validationErrors.phone = "phone number is required";
 }

 if (!rating) {
   validationErrors.rating = "please rate the webinar";
 }

 if (!interest) {
   validationErrors.interest = "please let us know if you are interested";
 }
 
 

 setSignupErrors(validationErrors);

 const noError = Object.keys(validationErrors).length === 0;

 if (noError) {
   try {
     // setLastErrors("");
     setLoading(true);
     const response = await axios.post(
       `${baseUrl}/api/webinar/feedback`,
       formData,
       {
         headers: {
           "Content-Type": "application/json",
         },
       }
     );

     if (response.status === 201) {
       toast.success('Feedback sent successfully.');
       navigate('/')
     }
   } catch (error) {
     console.log("Error sending webinar feedback:", error);
     toast.error(error.response.data.message);

   } finally {
     setLoading(false);
   }
 }
};
  
  

  return (
    <div className="flex flex-col items-center large:w-80vw mt-17 text-15px small:w-90vw">

      {/* sign up */}
     
        <div className="flex flex-col items-center gap-3 py-3 bg-white rounded-10 w-100">
          <div className="flex flex-col items-center w-auto h-auto gap-1">
            <h4 className="font-semibold large:text-20px">Webinar Feedback</h4>
            <p className="text-crossLightPurple">We Are Eager To Hear From You</p>
          </div>

          <div className="flex flex-col items-center gap-2 large:px-0 small:px-1 large:w-60 small:w-100">
            
           <div className="flex flex-row items-center justify-between h-auto w-100">
             <div className="flex flex-col h-auto w-45">
              <label htmlFor="">Full Name</label>

              <input type="text" className="p-1 border rounded h-40px w-100" 
              onChange={(e)=>setFullName(e.target.value)}
              />
              <p className="text-vogueRed">{signupErrors.fullName}</p>
            </div>


            <div className="flex flex-col h-auto w-45">
              <label htmlFor="">Email</label>

              <input type="email" name="email" className="p-1 border rounded h-40px w-100" 
              onChange={(e)=>setEmail(e.target.value)}
              />
              <p className="text-vogueRed">{signupErrors.email}</p>
            </div>
           </div>

            <div className="flex flex-row items-center justify-between h-auto w-100">
              <div className="flex flex-col h-auto w-45">
                <label htmlFor="">Phone</label>

                <input type="text" name="phone" className="p-1 border rounded h-40px w-100" 
                onChange={(e)=>setPhone(e.target.value)}
                />
                <p className="text-vogueRed">{signupErrors.phone}</p>
              </div>

              <div className="flex flex-col h-auto w-45">
                <label htmlFor="">Rate the webinar</label>

                <select name="rating" id="" className="p-1 border rounded h-40px w-100" onChange={(e)=>setRating(e.target.value)}>
                  <option value="">select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <p className="text-vogueRed">{signupErrors.rating}</p>
              </div>
            </div>


             <div className="flex flex-row items-center justify-between h-auto w-100">
              
              <div className="flex flex-col h-auto w-45">
                <label htmlFor="">Are you interested in the training by Crosstie Solutions?</label>

                <div className="flex h-auto gap-2 w-100">
                  <div>
                      <input type="radio" id="Yes" name="interested" value="Yes" onChange={(e)=>setInterest(e.target.value)} />
                      <label for="Yes">Yes</label>
                  </div>

                  <div>
                     <input type="radio" id="No" name="interested" value="No" onChange={(e)=>setInterest(e.target.value)} />
                      <label for="No">No</label>
                  </div>
                </div>
                <div>
                  
                </div>
                <p className="text-vogueRed">{signupErrors.interest}</p>
              </div>
              
              <div className="flex flex-col h-auto w-45">
                <label htmlFor="topic">What topic would you like to see covered in future webinars?</label>

                <input type="text" name="topic" className="p-1 border rounded h-40px w-100" 
                onChange={(e)=>setTopic(e.target.value)}
                />
                {/* <p className="text-vogueRed">{signupErrors.topic}</p> */}
              </div>

              
            </div>

            <div className="flex flex-col h-auto w-100">
                <label htmlFor="suggestion">Suggestion for improving our webinars</label>

                <textarea type="text" name="topic" className="p-1 border rounded h-100px w-100" 
                onChange={(e)=>setSuggestion(e.target.value)}
                />
                {/* <p className="text-vogueRed">{signupErrors.suggestion}</p> */}
            </div>
              
            
            
            <button
              className={`flex items-center justify-center text-white rounded w-100 h-40px bg-crossLightPurple text-17px`}
              onClick={sendFeedback}
            >
              Send Feedback
            </button>
          </div>
        </div>
      
      
    </div>
  );
}

export default FeedbackForm;
