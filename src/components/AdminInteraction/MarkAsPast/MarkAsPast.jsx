import React, { useContext, useState } from 'react';
import { CrossContext } from '../../../Context/CrossContext';
import { toast } from 'react-toastify';
import axios from 'axios';



function MarkAsPast(props) {

    const {toggleMarkMode, webinarId} = props;

    const {baseUrl, setLoading, toggleAdminWebinarAction} = useContext(CrossContext);

   
    const[youtubeLink, setYoutubeLink] = useState('');
    
    
    const[markError, setMarkError] = useState('');

    console.log("youtubeLink:", youtubeLink)



// Function to mark as past
const markAsPast = async () => {

    //To ensure valid inputs
 if (!youtubeLink.trim()) {
    setMarkError("Provide youtube link.")
  }
  
  if(markError===''){
    try {
        setLoading(true);
        const response = await axios.post(`${baseUrl}/api/webinar/mark-as-past`, 
            {
                webinarId: webinarId,
                youtubeLink: youtubeLink
            });
    
        
        if(response.data.message==='webinar marked as past event.'){
            toast.success(response.data.message);
            toggleAdminWebinarAction();
        }
      } catch (error) {
        if(error){
            console.log('Error fetching user data:', error);
        }
      }finally{
        setLoading(false);
      }
  }

  
};

    
  return (
    <div className='flex flex-col items-center justify-center h-auto px-2 py-3 bg-white large:gap-4 large:w-30vw rounded-10 small:w-90vw small:gap-1'>
        
      <div className='flex flex-col items-center h-auto gap-2 w-100'>
        <div className='text-center'>Enter the link to webinar youtube video to mark webinar as past event</div>
        <input type="text" name="youtubeLink" id="" placeholder='paste youtube link here' className='pl-1 border rounded h-40px w-100'
        onChange={(e)=>setYoutubeLink(e.target.value)}
        />

        {markError && <p className='text-vogueRed'>{markError}</p>}
      </div>

      <div className='flex items-center justify-around h-auto w-100'>
          
          <button className='w-auto px-1 border rounded h-30px border-crossBlue text-crossBlue'
          onClick={toggleMarkMode}
          >Cancel</button>
        
          <button className='w-auto px-1 text-white rounded h-30px bg-crossBlue'
          onClick={markAsPast}
          >Mark As Past</button>
        </div>
    </div>
  )
}

export default MarkAsPast
