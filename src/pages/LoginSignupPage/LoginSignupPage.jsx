import React, { useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";



function LoginSignupPage() {
  const [activeForm, setActiveForm] = useState("login");

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

              <input type="text" className="p-1 border rounded h-40px w-100" />
            </div>

            <div className="flex flex-col h-auto w-100">
              <label htmlFor="">Last Name*</label>

              <input type="text" className="p-1 border rounded h-40px w-100" />
            </div>

            <div className="flex flex-col h-auto w-100">
              <label htmlFor="">Email*</label>

              <input type="email" className="p-1 border rounded h-40px w-100" />
            </div>

            <div className="flex flex-col h-auto w-100">
              <label htmlFor="">Phone*</label>

              <input type="text" className="p-1 border rounded h-40px w-100" />
            </div>

            <div className="flex flex-col h-auto w-100">
              <label htmlFor="">Password*</label>

              <input type="text" className="p-1 border rounded h-40px w-100" />
            </div>

            <button
              className="flex items-center justify-center text-white rounded w-100 h-40px bg-crossLightPurple text-17px"
              // onClick={()=>setDetails("personal")}
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

          <div className="flex flex-col items-center gap-2 large:px-0 small:px-1 large:w-60 small:w-100">
            

            <div className="flex flex-col h-auto w-100">
              <label htmlFor="">Email*</label>

              <input type="email" className="p-1 border rounded h-40px w-100" />

              <p className="text-crossTextGray text-10px">
                If you are already registered for the class by your employer,
                use your official Email ID to login.
              </p>
            </div>

            <div className="flex flex-col h-auto w-100">
              <label htmlFor="">Password*</label>

              <input type="text" className="p-1 border rounded h-40px w-100" />
            </div>

            <button
              className="flex items-center justify-center text-white rounded w-100 h-40px bg-crossLightPurple text-17px"
              // onClick={()=>setDetails("personal")}
            >
              Login
            </button>
          </div>
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
