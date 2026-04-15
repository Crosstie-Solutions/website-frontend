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
  const [isRelatable, setIsRelatable] = useState("");
  const [isClear, setIsClear] = useState("");
  const [isEngaging, setIsEngaging] = useState("");
  const [suggestion, setSuggestion] = useState("");
  // const [topic, setTopic] = useState("");
  const [rating, setRating] = useState("");
  
  
  
      //signUp request
const [signupErrors, setSignupErrors] = useState({});
 
 //form data for sign up
 const formData = {
     webinarId: webinarId,
     fullName: fullName,
     email: email,
     phone: phone,
     isRelatable: isRelatable,
     isClear: isClear,
     isEngaging: isEngaging,
     rating: rating,
    //  topic: topic,
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

 if (fullName.trim().split(' ').length < 2) {
   validationErrors.fullName = "Enter atleast first and last name";
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

  if (!isClear) {
   validationErrors.isClear = "please answer this question";
 }

  if (!isRelatable) {
   validationErrors.isRelatable = "please answer this question";
 }

  if (!isEngaging) {
    validationErrors.isEngaging = "please answer this question";
  }


//  if (!interest) {
//    validationErrors.interest = "please let us know if you are interested";
//  }
 
 

 setSignupErrors(validationErrors);

 const noError = Object.keys(validationErrors).length === 0;

 if (noError) {
  window.scrollTo({ top: 0, behavior: "auto" });
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
              <div className="flex flex-col h-auto w-100">
                <label htmlFor="">Phone</label>

                <input type="text" name="phone" className="p-1 border rounded h-40px w-100" 
                onChange={(e)=>setPhone(e.target.value)}
                />
                <p className="text-vogueRed">{signupErrors.phone}</p>
              </div>

              {/* <div className="flex flex-col h-auto w-45">
                <label htmlFor="">Rate the webinar</label>

                <select name="rating" id="" className="p-1 border rounded h-40px w-100" onChange={(e)=>setRating(e.target.value)}>
                  <option value="">-select-</option>
                  <option value="1">1 - Excellent</option>
                  <option value="2">2 - Good</option>
                  <option value="3">3 - Average</option>
                  <option value="4">4 - Needs Improvement</option>
                  <option value="5">5 - Below Satisfactory</option>
                </select>
                <p className="text-vogueRed">{signupErrors.rating}</p>
              </div> */}
            </div>


            <div className="flex flex-row items-center justify-between h-auto w-100">
              
              <div className="flex flex-col h-auto gap-1 w-45">
                <label htmlFor="">How well can you relate the webinar content to your role or personal life?</label>

                <div className="flex flex-col h-auto gap-1 w-100">
                  <div className="flex items-center gap-1 cursor-pointer">
                      <input type="radio" id="5" name="isRelatable" value="5" onChange={(e)=>setIsRelatable(e.target.value)} />
                      <label for="5" className="cursor-pointer">5 (Excellent)</label>
                  </div>

                  <div className="flex items-center gap-1 cursor-pointer">
                      <input type="radio" id="4" name="isRelatable" value="4" onChange={(e)=>setIsRelatable(e.target.value)} />
                      <label for="4" className="cursor-pointer">4 (Good)</label>
                  </div>

                  <div className="flex items-center gap-1 cursor-pointer">
                      <input type="radio" id="3" name="isRelatable" value="3" onChange={(e)=>setIsRelatable(e.target.value)} />
                      <label for="3" className="cursor-pointer">3 (Average)</label>
                  </div>

                  <div className="flex items-center gap-1 cursor-pointer">
                      <input type="radio" id="2" name="isRelatable" value="2" onChange={(e)=>setIsRelatable(e.target.value)} />
                      <label for="2" className="cursor-pointer">2 (Needs Improvement)</label>
                  </div>

                  <div className="flex items-center gap-1 cursor-pointer">
                      <input type="radio" id="1" name="isRelatable" value="1" onChange={(e)=>setIsRelatable(e.target.value)} />
                      <label for="1" className="cursor-pointer">1 (Below Satisfactory)</label>
                  </div>
                </div>
                <p className="text-vogueRed">{signupErrors.isRelatable}</p>
              </div>

              <div className="flex flex-col h-auto gap-1 w-45">
                <label htmlFor="">How would you rate the quality and clarity of the presentation and slides?</label>

                <div className="flex flex-col h-auto gap-1 w-100">
                  <div className="flex items-center gap-1 cursor-pointer">
                      <input type="radio" id="5" name="isClear" value="5" onChange={(e)=>setIsClear(e.target.value)} />
                      <label for="5" className="cursor-pointer">5 (Excellent)</label>
                  </div>

                  <div className="flex items-center gap-1 cursor-pointer">
                      <input type="radio" id="4" name="isClear" value="4" onChange={(e)=>setIsClear(e.target.value)} />
                      <label for="4" className="cursor-pointer">4 (Good)</label>
                  </div>

                  <div className="flex items-center gap-1 cursor-pointer">
                      <input type="radio" id="3" name="isClear" value="3" onChange={(e)=>setIsClear(e.target.value)} />
                      <label for="3" className="cursor-pointer">3 (Average)</label>
                  </div>

                  <div className="flex items-center gap-1 cursor-pointer">
                      <input type="radio" id="2" name="isClear" value="2" onChange={(e)=>setIsClear(e.target.value)} />
                      <label for="2" className="cursor-pointer">2 (Needs Improvement)</label>
                  </div>

                  <div className="flex items-center gap-1 cursor-pointer">
                      <input type="radio" id="1" name="isClear" value="1" onChange={(e)=>setIsClear(e.target.value)} />
                      <label for="1" className="cursor-pointer">1 (Below Satisfactory)</label>
                  </div>
                </div>
                <p className="text-vogueRed">{signupErrors.isClear}</p>
              </div>              
            </div>

             <div className="flex flex-row items-center justify-between h-auto w-100">
              
              <div className="flex flex-col h-auto gap-1 w-45">
                <label htmlFor="">How clear, engaging, and easy to follow was the facilitator’s delivery?</label>

                <div className="flex flex-col h-auto gap-1 w-100">
                  <div className="flex items-center gap-1 cursor-pointer">
                      <input type="radio" id="5" name="isEngaging" value="5" onChange={(e)=>setIsEngaging(e.target.value)} />
                      <label for="5" className="cursor-pointer">5 (Excellent)</label>
                  </div>

                  <div className="flex items-center gap-1 cursor-pointer">
                      <input type="radio" id="4" name="isEngaging" value="4" onChange={(e)=>setIsEngaging(e.target.value)} />
                      <label for="4" className="cursor-pointer">4 (Good)</label>
                  </div>

                  <div className="flex items-center gap-1 cursor-pointer">
                      <input type="radio" id="3" name="isEngaging" value="3" onChange={(e)=>setIsEngaging(e.target.value)} />
                      <label for="3" className="cursor-pointer">3 (Average)</label>
                  </div>

                  <div className="flex items-center gap-1 cursor-pointer">
                      <input type="radio" id="2" name="isEngaging" value="2" onChange={(e)=>setIsEngaging(e.target.value)} />
                      <label for="2" className="cursor-pointer">2 (Needs Improvement)</label>
                  </div>

                  <div className="flex items-center gap-1 cursor-pointer">
                      <input type="radio" id="1" name="isEngaging" value="1" onChange={(e)=>setIsEngaging(e.target.value)} />
                      <label for="1" className="cursor-pointer">1 (Below Satisfactory)</label>
                  </div>
                </div>
                <p className="text-vogueRed">{signupErrors.isEngaging}</p>
              </div>

              <div className="flex flex-col h-auto gap-1 w-45">
                <label htmlFor="">How would you rate your overall experience of the webinar?</label>

                <div className="flex flex-col h-auto gap-1 w-100">
                  <div className="flex items-center gap-1 cursor-pointer">
                      <input type="radio" id="5" name="rating" value="5" onChange={(e)=>setRating(e.target.value)} />
                      <label for="5" className="cursor-pointer">5 (Excellent)</label>
                  </div>

                  <div className="flex items-center gap-1 cursor-pointer">
                      <input type="radio" id="4" name="rating" value="4" onChange={(e)=>setRating(e.target.value)} />
                      <label for="4" className="cursor-pointer">4 (Good)</label>
                  </div>

                  <div className="flex items-center gap-1 cursor-pointer">
                      <input type="radio" id="3" name="rating" value="3" onChange={(e)=>setRating(e.target.value)} />
                      <label for="3" className="cursor-pointer">3 (Average)</label>
                  </div>

                  <div className="flex items-center gap-1 cursor-pointer">
                      <input type="radio" id="2" name="rating" value="2" onChange={(e)=>setRating(e.target.value)} />
                      <label for="2" className="cursor-pointer">2 (Needs Improvement)</label>
                  </div>

                  <div className="flex items-center gap-1 cursor-pointer">
                      <input type="radio" id="1" name="rating" value="1" onChange={(e)=>setRating(e.target.value)} />
                      <label for="1" className="cursor-pointer">1 (Below Satisfactory)</label>
                  </div>
                </div>
                <p className="text-vogueRed">{signupErrors.rating}</p>
              </div>              
            </div>

            <div className="flex flex-col h-auto w-100">
                <label htmlFor="suggestion">What can we improve to make future sessions better?</label>

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
