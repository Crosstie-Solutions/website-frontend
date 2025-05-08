import React, { useContext, useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { CrossContext } from "../../Context/CrossContext";
import { LuEyeClosed } from "react-icons/lu";
import { LuEye } from "react-icons/lu";




function LoginSignupPage() {

  const [reveal, setReveal] = useState(false);

  const toggle = () =>{
    setReveal(!reveal);
  }

  //to navigate to different page
  const navigate = useNavigate();

  const {baseUrl, setLoading} = useContext(CrossContext);
  
  const [activeForm, setActiveForm] = useState("login");

  // states for signup
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
 // const [role, setRole] = useState("");

  
      //signUp request
const [signupErrors, setSignupErrors] = useState({});
 
 //form data for sign up
 const formData = {
     firstName: firstName,
     lastName: lastName,
     email: email,
     phone: phone,
     password: password,
 };


 //funtion for signup
const handleSignup = async (event) => {
 event.preventDefault();

 const validationErrors = {};

 //To ensure valid inputs
 if (!firstName.trim()) {
   validationErrors.firstName = "first name is required";
 }

 if (!lastName.trim()) {
   validationErrors.lastName = "last name is required";
 }

 if (!email.trim()) {
   validationErrors.email = "email is required";
 }

 if (!phone.trim()) {
   validationErrors.phone = "phone number is required";
 }
 if (!password.trim()) {
   validationErrors.password = "password is required";
 } else if (password.length < 6) {
   validationErrors.password = "password must be atleast 6 characters";
 }

 setSignupErrors(validationErrors);

 const noError = Object.keys(validationErrors).length === 0;

 if (noError) {
   try {
     // setLastErrors("");
     setLoading(true);
     const response = await axios.post(
       `${baseUrl}/api/users/signup`,
       formData,
       {
         headers: {
           "Content-Type": "application/json",
         },
       }
     );

     if (response.status === 201) {
       // setNewUser(response.data.data.user);
       toast.success('Registration successfully. Check your email for verification link.');
       setActiveForm('login')
     }
   } catch (error) {
     // setLastErrors(error.response.data.message);
     // console.log("signupError:", error.response.data.message);
     console.log("signupError:", error);
     
     if(error.response.data.message.includes('Duplicate') || error.response.data.message.includes('duplicate')){
       validationErrors.email = "Email already exist."
     }
   } finally {
     setLoading(false);
   }
 }
};

  
  

  // states for login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  //Login request
const [loginErrors, setLoginErrors] = useState({});

//last error
const [lastError, setLastErrors] = useState('');
    
//form data for sign up
const loginFormData = {
    email: loginEmail,
    password: loginPassword,
  };

  //funtion for form submit
  const handleLogin = async (event) => {
    event.preventDefault();

    const validationErrors = {};

    //To ensure valid inputs

    if (!loginEmail.trim()) {
      validationErrors.loginEmail = "email is required";
    }

    if (!loginPassword.trim()) {
      validationErrors.loginPassword = "password is required";
    } 

    setLoginErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

    if (noError) {
      try {
        // setLastErrors("");
        setLoading(true);
        const response = await axios.post(
          `${baseUrl}/api/users/login`,
          loginFormData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          // setLoggedInUser(response.data);
         
          toast.success(`You are logged in as ${response.data.data.user.firstName} ${response.data.data.user.lastName}`);
          
          localStorage.setItem('loginToken', JSON.stringify(response.data.token));
          localStorage.setItem('role', JSON.stringify(response.data.data.user.role));
          
        }
        if(response.data.data.user.role.toLowerCase().includes('admin')){
          // navigate("/")
          navigate("/admin-dashboard")
        }
        else{
          // navigate("/")
          navigate("/user-profile")
        }
      } catch (error) {
       if(error){
        setLastErrors(error.response.data.message);
       }
        // console.log("signupError:", error.response.data.message);
        console.log("loginError:", error.response.data.message);
        
        validationErrors.email = error.response.data.message;
      } finally {
        setLoading(false);
      }
    }
  };
  
  

  return (
    <div className="flex flex-col items-center large:w-80vw mt-17 text-15px small:w-90vw">
      
      <div className="flex items-center justify-start h-auto w-100">
        <button
          className={`flex items-center justify-center ${
            activeForm === "login"
              ? "bg-white text-crossLightPurple underline"
              : ""
          } rounded-tl-10 rounded-tr-10 large:h-100px large:w-200px small:h-50px small:w-100px`}
          onClick={() => setActiveForm("login")}
        >
          Login
        </button>
        <button
          className={`flex items-center justify-center ${
            activeForm === "signup"
              ? "bg-white text-crossLightPurple underline"
              : ""
          } rounded-tl-10 rounded-tr-10 h-100px w-200px large:h-100px large:w-200px small:h-50px small:w-100px`}
          onClick={() => setActiveForm("signup")}
        >
          Sign up
        </button>
      </div>



      {/* sign up */}
      {activeForm === "signup" && (
        <div className="flex flex-col items-center gap-3 py-3 bg-white rounded-10 w-100">
          <div className="flex flex-col items-center w-auto h-auto">
            <h4 className="font-semibold large:text-20px">Create New Account</h4>
            <p className="text-crossTextGray">
              (If you are not a Crosstie student)
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 large:px-0 small:px-1 large:w-60 small:w-100">
            <div className="flex flex-col h-auto w-100">
              <label htmlFor="">First Name*</label>

              <input type="text" className="p-1 border rounded h-40px w-100" 
              onChange={(e)=>setFirstName(e.target.value)}
              />
              <p className="text-vogueRed">{signupErrors.firstName}</p>
            </div>

            <div className="flex flex-col h-auto w-100">
              <label htmlFor="">Last Name*</label>

              <input type="text" className="p-1 border rounded h-40px w-100" 
              onChange={(e)=>setLastName(e.target.value)}
              />
              <p className="text-vogueRed">{signupErrors.lastName}</p>
            </div>


            <div className="flex flex-col h-auto w-100">
              <label htmlFor="">Email*</label>

              <input type="email" name="email" className="p-1 border rounded h-40px w-100" 
              onChange={(e)=>setEmail(e.target.value)}
              />
              <p className="text-vogueRed">{signupErrors.email}</p>
            </div>

            <div className="flex flex-col h-auto w-100">
              <label htmlFor="">Phone*</label>

              <input type="text" name="phone" className="p-1 border rounded h-40px w-100" 
              onChange={(e)=>setPhone(e.target.value)}
              />
              <p className="text-vogueRed">{signupErrors.phone}</p>
            </div>

            <div className="relative flex flex-col h-auto w-100">
              <label htmlFor="">Password*</label>

              <input type={reveal ? "text" : "password"} className="p-1 border rounded h-40px w-100" 
              onChange={(e)=>setPassword(e.target.value)}
              />
              <p className="text-vogueRed">{signupErrors.password}</p>

              {reveal ?
                <LuEyeClosed className="absolute text-gray-500 cursor-pointer top-3.5 right-1 text-20px"
                  onClick={toggle}
                /> :
                <LuEye className="absolute text-gray-500 cursor-pointer top-3.5 right-1 text-20px"
                  onClick={toggle}
                />}
            </div>

            <button
              className="flex items-center justify-center text-white rounded w-100 h-40px bg-crossLightPurple text-17px"
              onClick={handleSignup}
            >
              Sign up
            </button>
          </div>
        </div>
      )}



      {/* login */}
      
      {activeForm === "login" && (
        <div className="flex flex-col items-center gap-3 py-3 bg-white rounded-10 w-100">
          
          <div className="flex flex-col items-center w-auto h-auto">
            <h4 className="font-semibold large:text-20px">Login to Your Account</h4>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col items-center gap-2 large:px-0 small:px-1 large:w-60 small:w-100">
            

            <div className="flex flex-col h-auto w-100">
              <label htmlFor="">Email*</label>

              <input type="email" name="email" className="p-1 border rounded h-40px w-100" 
              onChange={(e)=>setLoginEmail(e.target.value)}
              />

              <p className="text-crossTextGray text-10px">
                If you are already registered for the class by your employer,
                use your official Email ID to login.
              </p>
              <p className="text-vogueRed">{loginErrors.loginEmail}</p>
            </div>

            <div className="relative flex flex-col h-auto w-100">
              <label htmlFor="">Password*</label>

              <input type={reveal ? "text" : "password"} className="p-1 border rounded h-40px w-100" 
              onChange={(e)=>setLoginPassword(e.target.value)}
              />
              <p className="text-vogueRed">{loginErrors.loginPassword}</p>
              <p className="text-vogueRed">{lastError}</p>

              {reveal ?
                <LuEyeClosed className="absolute text-gray-500 cursor-pointer top-3.5 right-1 text-20px"
                  onClick={toggle}
                /> :
                <LuEye className="absolute text-gray-500 cursor-pointer top-3.5 right-1 text-20px"
                  onClick={toggle}
                />}
            </div>

            <Link to='/forgot-password' className="self-end text-crossBlue text-13px">Forgot password?</Link>

            <button
              className="flex items-center justify-center text-white rounded w-100 h-40px bg-crossLightPurple text-17px"
            type="submit"
            >
              Login
            </button>
           
          </form>
        </div>
      )}



      <div className="flex flex-col items-center h-auto gap-1 mt-8 w-100">
        <h4 className="font-bold large:text-20px small:text-17px">
          Ready To Get Started?
        </h4>
        <Link
          to="/our-courses/"
          className="flex items-center w-auto gap-1 p-1 text-white rounded h-40px bg-crossLightPurple"
        >
          Explore Our Courses <HiArrowLongRight className="text-20px" />
        </Link>
      </div>
    </div>
  );
}

export default LoginSignupPage;
