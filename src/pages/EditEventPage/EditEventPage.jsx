import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { CrossContext } from '../../Context/CrossContext';
import { Link, useParams } from 'react-router-dom';
import { MdKeyboardBackspace } from "react-icons/md";


function EditEventPage() {

    const { baseUrl, setLoading, me } = useContext(CrossContext);

     const { eventId } = useParams(); // blog ID from URL

     const [event, setEvent] = useState(null);


    useEffect(() => {
        // Fetch existing blog post
        const fetchEvent = async () => {
          try {
            
            const response = await axios.get(`${baseUrl}/api/event/${eventId}`);
            setEvent(response.data.data.data);
            
          } catch (err) {
            console.log('Error fetching event:', err);
          }
        };
    
        
          fetchEvent();
        
      }, [eventId, baseUrl]);

  
          

          //partner request
const [eventErrors, setEventErrors] = useState({});


//funtion for signup
// const addEvent = async (event) => {
  
// event.preventDefault();

// const validationErrors = {};

// //To ensure valid inputs
// if (!title.trim()) {
//   validationErrors.title = "event title is required";
// }

// if (!client.trim()) {
//   validationErrors.client = "client name is required";
// }

// if (!date.trim()) {
//   validationErrors.date = "date is required";
// }

//  else if (eventImages.length < 10) {
//   validationErrors.eventImages = "An event should have at least 10 pictures. Abeg hustle for more pictures.";
// }



// setEventErrors(validationErrors);

// const noError = Object.keys(validationErrors).length === 0;

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("client", client);
//     formData.append("date", date);
//     formData.append("priorityIndex", priorityIndex);

//     for (let i = 0; i < eventImages.length; i++) {
//       formData.append("eventImages", eventImages[i]);
//     }
  

// if (noError) {
//   try {
    
//     setLoading(true);
//     const response = await axios.post(
//       `https://server.crosstiesolutions.com/api/event`,
//       formData,
//       {
//         headers: {
//            "Content-Type": "multipart/form-data"
//         },
//       }
//     );

//     if (response.status === 201) {
//       toast.success(`Event added successfully`);

//       titleField.value =''
//       clientField.value =''
//       dateField.value =''
//       eventImagesField.value = ''
//     }
//   } catch (error) {
    
//     if(error){
//       console.log("Error adding event:", error);
//       toast.error(error.response.data.message);
//     }
  
//   } finally {
//     setLoading(false);
//   }
// }
// };



const [formFields, setFormFields] = useState({
  title: '',
  client: '',
  date: '',
  priorityIndex: null,
});


const handleChange = (e) => {
  const { name, value } = e.target;
  setFormFields((prev) => ({
    ...prev,
    [name]: value,
  }));
};



const updateEvent = async (eventId, formFields) => {
  // Build payload by removing empty, null, or undefined fields
  const payload = {};
  for (let key in formFields) {
    const value = formFields[key];
    if (value !== '' && value !== null && value !== undefined) {
      payload[key] = value;
    }
  }

  try {
    setLoading(true);
    // https://server.crosstiesolutions.com
    // http://127.0.0.1:8000

    const response = await axios.patch(`https://server.crosstiesolutions.com/api/event/${eventId}`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Program updated:', response.data);
    
    if(response.status === 200){
      toast.success('Event updated successfully')
    }
    return response.data;
  } catch (error) {
    // console.error('Update failed:', error.response?.data || error.message);
    // throw error;
    if(error){
      toast.error(error.response.data.message);
    }
  }finally{
    setLoading(false)
  }
};


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await updateEvent(eventId, formFields);
    // show success or refresh
  } catch (err) {
    // handle error
  }
};

    




  return (
    <div className='flex flex-col h-auto gap-2 py-2 small:px-0 large:px-2 large:w-80 text-15px small:w-90vw large:mt-17 small:mt-12'>

      <h4 className="font-semibold text-crossLightPurple">Update Event</h4>

     

      <div className='flex flex-col items-end gap-2 p-1 bg-white large:p-2 rounded-10 w-100'>

         {me && me.role !=="user" &&
           <Link className='flex items-center justify-center gap-1 border rounded text-crossLightPurple w-200px border-crossLightPurple h-40px self-start' to="/admin-dashboard"><MdKeyboardBackspace className='text-20px'/>Back to dashboard</Link>}

        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="title">Event Title</label>
            <input defaultValue={event && event.title} type="text" id='titleField' placeholder='Enter event title' name='title' className='pl-1 border rounded h-40px w-100'
             onChange={handleChange}
            />
            <p className='text-vogueRed'>{eventErrors && eventErrors.title}</p>
        </div>

        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="client">Client</label>
            <input defaultValue={event && event.client} type="text" placeholder='Enter client name' id='clientField' name='client' className='pl-1 border rounded h-40px w-100'
             onChange={handleChange}
            />
            <p className='text-vogueRed'>{eventErrors && eventErrors.client}</p>
        </div>

        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="date">Date (Month and Year only)</label>
            <input defaultValue={event && event.date} type="text" name='date' id='dateField' className='pl-1 border rounded h-40px w-100'
            placeholder='Enter date in the proper format'
             onChange={handleChange}
            />
            <p className='text-vogueRed'>{eventErrors && eventErrors.date}</p>
        </div>

        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="priorityIndex">Priority Index</label>
            <input defaultValue={event && event.priorityIndex} type="number" name='priorityIndex' id='' className='pl-1 border rounded h-40px w-100'
            placeholder='Enter priority index'
             onChange={handleChange}
            />
            <p className='text-vogueRed'>{eventErrors && eventErrors.priorityIndex}</p>
        </div>

        {/* <div className='flex flex-col h-auto w-100'>
            <label htmlFor="eventImages">Pictures From Event(10)</label>
            <input type="file" name='eventImages' id='eventImagesField' className='pl-1 border rounded h-40px w-100'
            accept="image/*"
            multiple
            onChange={handleFileChange}
            />

            <div className='flex flex-wrap items-center justify-center h-auto gap-2 mt-1 w-100'>
              {
                previews && previews.map((src, i)=>
                  <img key={i} src={src} alt={`image preview ${i + 1}`} className='w-auto rounded h-50px'/>
                )
              }
              
            </div>

            <p className='text-vogueRed'>{eventErrors && eventErrors.eventImages}</p>
            <p className='text-vogueRed'>{imageSizeErrors && imageSizeErrors}</p>
        </div> */}


        <button className='flex items-center justify-center text-white rounded h-40px w-100 bg-crossLightPurple'
        onClick={handleSubmit}
        >Update Event</button>
      </div>
    </div>
  )
}

export default EditEventPage;
