import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { HiOutlineEye } from "react-icons/hi";
import { HiOutlineEyeOff } from "react-icons/hi";
import { CrossContext } from '../../../Context/CrossContext';


function AddNewAdmin() {

    const { baseUrl, setLoading } = useContext(CrossContext);

    const [showPassword, setShowPassword] = useState(false);
      const toggleEye = () => {
        setShowPassword(!showPassword);
      };

     //service providers form validation
    const [confirmPassword, setConfirmPassword] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: 'admin',
    password: '',
    phone: '',
 });


 const handleChange = (e) =>{
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
 };


          //signUp request
const [signupErrors, setSignupErrors] = useState({});


//funtion for signup
const handleSignup = async (event) => {
event.preventDefault();

const validationErrors = {};

//To ensure valid inputs
if (!formData.firstName.trim()) {
  validationErrors.firstName = "first name is required";
}

if (!formData.lastName.trim()) {
  validationErrors.lastName = "last name is required";
}

if (!formData.email.trim()) {
  validationErrors.email = "email is required";
}


if (!formData.phone.trim()) {
  validationErrors.phone = "phone number is required";
}
if (!formData.password.trim()) {
  validationErrors.password = "password is required";
} else if (formData.password.length < 8) {
  validationErrors.password = "password must be atleast 8 characters";
} 

setSignupErrors(validationErrors);

const noError = Object.keys(validationErrors).length === 0;

if (noError) {
  try {
    
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
      toast.success(`${formData.role} added successfully. Check email for verification link.`);
      
    }
  } catch (error) {
    
    console.log("signupError:", error);
    
    if(error.response.data.message.includes('Duplicate') || error.response.data.message.includes('duplicate')){
      validationErrors.email = "Email already exist."
    }
  } finally {
    setLoading(false);
  }
}
};
    




  return (
    <div className='flex flex-col h-auto gap-2 py-2 small:px-0 large:px-2 large:w-80 text-15px small:w-90vw'>
      <h4 className="font-semibold text-crossLightPurple">Add Admin</h4>

      <form className='flex flex-col items-end gap-2 p-1 bg-white border large:p-2 rounded-10 w-100'
      onSubmit={handleSignup}
      >

        <div className='flex items-center justify-between h-auto w-100'>
            <div className='flex flex-col h-auto w-45'>
                <label htmlFor="">First Name</label>
                <input type="text" name='firstName' placeholder='enter first name' className='pl-1 border rounded h-40px w-100'
                onChange={handleChange}
                />
                <p className='text-vogueRed'>{signupErrors && signupErrors.firstName}</p>
            </div>

            <div className='flex flex-col h-auto w-45'>
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder='enter last name' name='lastName' className='pl-1 border rounded h-40px w-100'
                onChange={handleChange}
                />
                <p className='text-vogueRed'>{signupErrors && signupErrors.lastName}</p>
            </div>
        </div>


        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='example@gmail.com' name='email' className='pl-1 border rounded h-40px w-100'
            onChange={handleChange}
            />
            <p className='text-vogueRed'>{signupErrors && signupErrors.email}</p>
        </div>

        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="">Phone</label>
            <input type="number" placeholder='enter phone number' name='phone' className='pl-1 border rounded h-40px w-100'
            onChange={handleChange}
            />
            <p className='text-vogueRed'>{signupErrors && signupErrors.phone}</p>
        </div>

        <div className='relative flex flex-col h-auto w-100'>
            <label htmlFor="">Password</label>
            <input type={`${showPassword ? 'text' : 'password'}`} placeholder='create password' name='password' className='pl-1 border rounded h-40px w-100'
            onChange={handleChange}
            />
            <p className='text-vogueRed'>{signupErrors && signupErrors.password}</p>
            
            {showPassword ?<HiOutlineEyeOff className='absolute cursor-pointer top-3 text-20px right-2 text-cribGray'
            onClick={toggleEye}
            /> : <HiOutlineEye className='absolute cursor-pointer top-3 text-20px right-2 text-cribGray'
            onClick={toggleEye}
            />}
            
        </div>

        <button className='flex items-center justify-center text-white rounded h-40px w-100 bg-crossLightPurple' type='submit'>Add {formData.role}</button>
      </form>
    </div>
  )
}

export default AddNewAdmin
