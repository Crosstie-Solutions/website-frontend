import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CrossContext } from '../../Context/CrossContext';
import axios from 'axios';
import WebinarCertificate from '../WebinarCertificate/WebinarCertificate';
import { PHOTOS } from '../../assets/images';



function MyWebinars() {

  const {myWebinars, baseUrl, me, loginToken, webinarCertTemplate, formatWebinarDate} = useContext(CrossContext);

  
  const firstWebinarId = myWebinars && myWebinars.length > 0 ? myWebinars[0].id : "";
  
  console.log("first webinar Id:", firstWebinarId);


  const [webinarId, setWebinarId] = useState(firstWebinarId);
  
  console.log("webinarId:", webinarId);
  
  
  //to get one webinar details
  const[activeWebinar, setActiveWebinar] = useState(null);

  console.log("activeWebinar:", activeWebinar);


// Function to fetch logged in user details
useEffect(()=>{
  const fetchWebinar = async () => {
  
    try {
      const response = await axios.get(`${baseUrl}/api/webinar/${webinarId && webinarId}`);
  
      // console.log('fetchedUser:', response.data.data.data);
      setActiveWebinar(response.data.data.data)
    } catch (error) {
      if(error){
        // console.error('Error fetching my webinar:', error.response.data.message);
      }
  
    }
  };

  fetchWebinar();
  
}, [myWebinars, webinarId]);

  


//get feedback
const[feedback, setFeedback] = useState(null);
 console.log("webinar feedback:", feedback);

useEffect(()=>{
  const fetchFeedback = async () => {
  
    try {
      const response = await axios.get(`${baseUrl}/api/webinar/feedback/my-feedback?webinarId=${webinarId && webinarId}&email=${me && me.email}`);

      
      setFeedback(response.data.data.feedback)
    } catch (error) {
      if(error){
        console.error('Error fetching my webinar feedback:', error);
      }
  
    }
  };

  fetchFeedback();
  
}, [myWebinars, webinarId]);






  return (
    <div className={`${myWebinars && myWebinars.length > 0 ? "flex" : "hidden"}  flex-col items-start h-auto gap-3 w-100 large:text-15px small:text-13px`}>

      <h3 className='font-bold text-20px'>My Webinars</h3>

      <select name="" id="" className='px-1 font-semibold border cursor-pointer h-40px large:w-50 border-crossLightPurple rounded-20 small:w-100'
      onChange={(e)=>setWebinarId(e.target.value)}
      >
        {
          myWebinars && myWebinars.map((webinar, i)=>
            <option value={webinar.id} key={i}>{webinar.topic}</option>
          )
        }
      </select>



        {/* table */}
      <div className='flex flex-col items-center h-auto gap-2 large:w-60 small:w-100'>
        
        <div className='flex p-1 border h-40px w-100 border-crossLightPurple rounded-10'>
            <div className='flex items-center justify-start border-r w-30 border-crossLightPurple'>Webinar Topic</div>
            <div className='flex items-center justify-start px-1 w-70'>{activeWebinar && activeWebinar.topic}</div>
        </div>

        <div className='flex p-1 border h-40px w-100 border-crossLightPurple rounded-10'>
            <div className='flex items-center justify-start border-r w-30 border-crossLightPurple'>Webinar Date & Time</div>
            <div className='flex items-center justify-start px-1 w-70'>{activeWebinar && formatWebinarDate(activeWebinar.actualDate)} | {activeWebinar && activeWebinar.time}</div>
        </div>

        <div className='flex p-1 border h-40px w-100 border-crossLightPurple rounded-10'>
            <div className='flex items-center justify-start border-r w-30 border-crossLightPurple'>Provide feedback</div>
            <div className='flex items-center justify-start px-1 w-70'><Link>Link</Link> </div>
        </div>

        <div className='flex border large:h-40px w-100 border-crossLightPurple rounded-10 small:h-auto'>
            <div className='flex items-center justify-start px-1 border-r w-30 border-crossLightPurple'>Certificate</div>
            <div className='flex items-center justify-start px-1 w-70 small:h-auto large:h-100'>Webinar Participation Certificate can be downloaded after submitting feedback.</div>
        </div>

        <div className='flex p-1 border h-40px w-100 border-crossLightPurple rounded-10'>
            <div className='flex items-center justify-start border-r w-30 border-crossLightPurple'>Upcoming Webinars</div>
            <div className='flex items-center justify-start px-1 w-70'><Link to='/our-solutions/webinars'>Crosstie webinars</Link></div>
        </div>

      </div>

        {feedback &&
      <div className='flex flex-col items-start h-auto gap-2 large:w-50 small:w-100'>
        
        <img src={PHOTOS.webinarTemplate} alt="certificate template" className='h-auto w-150px'/>
        
        <WebinarCertificate 
          certificateUrl={webinarCertTemplate}
          name={me && me.firstName[0].toUpperCase() + me.firstName.slice(1) + " " + me.lastName[0].toUpperCase() + me.lastName.slice(1)}
          courseTitle={activeWebinar && activeWebinar.topic}
          date={activeWebinar && formatWebinarDate(activeWebinar.actualDate)}
          />
      </div>}
    </div>
  )
}

export default MyWebinars;
