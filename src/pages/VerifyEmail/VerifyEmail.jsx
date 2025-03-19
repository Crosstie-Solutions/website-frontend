import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { CrossContext } from '../../Context/CrossContext';




const VerifyEmail = () => {
  const navigate = useNavigate();

  const {baseUrl} = useContext(CrossContext);

  const [verifiedUser, setVerifiedUser] = useState();
  console.log('verifiedUser:', verifiedUser);


  // Extract reference from URL
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
  
 console.log('email verif. token:', token);

//to get current location
const location = useLocation();

useEffect(() => {
    // Define the async function inside useEffect
    const verifyEmail = async () => {
      try {
        // Get the token from the URL query string
        // const token = new URLSearchParams(location.search).get('token');

        if (token) {
          // Send request to the backend to verify the token
          const response = await axios.get(`${baseUrl}/api/users/verify-email?token=${token}`);
          
          // const { token: authToken } = response.data;
          const loginToken = response.data.token;
          setVerifiedUser(response.data.data.user);

          // Store the JWT token (you can use localStorage or cookies)
          localStorage.setItem('loginToken', JSON.stringify(loginToken));
          // localStorage.setItem('user', JSON.stringify(response.data.data.user));
          toast.success('Email verified.');

          // Redirect to the dashboard or home page (user is now logged in)
          if(response.data.data.user.role==='user'){
            navigate('/user-profile');
          }else{
            navigate('/admin-dashboard');
          }
        }
      } catch (error) {
        console.error('Email verification failed:', error);
        // Handle error (e.g., display a message or redirect)
      }
    };

    // Call the async function
    verifyEmail();
  }, [location.search, navigate]);





  return (
    <div className='flex flex-col items-center justify-center w-100vw h-100vh bg-vogueWhite'>
      <h2>Verifying your email...</h2>
    </div>
  );
};

export default VerifyEmail;
