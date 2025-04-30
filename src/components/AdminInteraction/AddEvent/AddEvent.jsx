import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { CrossContext } from '../../../Context/CrossContext';
import { PHOTOS } from '../../../assets/images';


function AddEvent() {

    const { baseUrl, setLoading } = useContext(CrossContext);


      const [title, setTitle] = useState('');
      const [client, setClient] = useState('');
      const [date, setDate] = useState('');      
      const [priorityIndex, setPriorityIndex] = useState(null);      
      
      const [eventImages, setEventImages] = useState([]);

      const [previews, setPreviews] = useState([]);

      const handleFileChange = (e) => {
        setEventImages(e.target.files);

        const selectedFiles = Array.from(e.target.files).slice(0, 10);

        const previewUrls = selectedFiles.map((file) => URL.createObjectURL(file));
        setPreviews(previewUrls);
      };
      
      

      // to clear fields
    const titleField = document.getElementById("titleField");      
    const clientField = document.getElementById("clientField");      
    const dateField = document.getElementById("dateField");      
    const eventImagesField = document.getElementById("eventImagesField");      

          //partner request
const [eventErrors, setEventErrors] = useState({});


//funtion for signup
const addEvent = async (event) => {
  
event.preventDefault();

const validationErrors = {};

//To ensure valid inputs
if (!title.trim()) {
  validationErrors.title = "event title is required";
}

if (!client.trim()) {
  validationErrors.client = "client name is required";
}

if (!date.trim()) {
  validationErrors.date = "date is required";
}

 else if (eventImages.length < 10) {
  validationErrors.eventImages = "An event should have at least 10 pictures. Abeg hustle for more pictures.";
}



setEventErrors(validationErrors);

const noError = Object.keys(validationErrors).length === 0;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("client", client);
    formData.append("date", date);
    formData.append("priorityIndex", priorityIndex);

    for (let i = 0; i < eventImages.length; i++) {
      formData.append("eventImages", eventImages[i]);
    }
  

if (noError) {
  try {
    
    setLoading(true);
    const response = await axios.post(
      `${baseUrl}/api/event`,
      formData,
      {
        headers: {
           "Content-Type": "multipart/form-data"
        },
      }
    );

    if (response.status === 201) {
      toast.success(`Event added successfully`);

      titleField.value =''
      clientField.value =''
      dateField.value =''
      eventImagesField.value = ''
    }
  } catch (error) {
    
    if(error){
      console.log("Error adding event:", error);
      toast.error(error.response.data.message);
    }
  
  } finally {
    setLoading(false);
  }
}
};
    




  return (
    <div className='flex flex-col h-auto gap-2 py-2 small:px-0 large:px-2 large:w-80 text-15px small:w-90vw'>
      <h4 className="font-semibold text-crossLightPurple small:hidden large:flex">Add Event</h4>

      <div className='flex flex-col items-end gap-2 p-1 bg-white large:p-2 rounded-10 w-100'>

        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="title">Event Title</label>
            <input type="text" id='titleField' placeholder='Enter event title' name='title' className='pl-1 border rounded h-40px w-100'
             onChange={(e) => setTitle(e.target.value)}
            />
            <p className='text-vogueRed'>{eventErrors && eventErrors.title}</p>
        </div>

        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="client">Client</label>
            <input type="text" placeholder='Enter client name' id='clientField' name='client' className='pl-1 border rounded h-40px w-100'
             onChange={(e) => setClient(e.target.value)}
            />
            <p className='text-vogueRed'>{eventErrors && eventErrors.client}</p>
        </div>

        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="date">Date (Month and Year only)</label>
            <input type="text" name='date' id='dateField' className='pl-1 border rounded h-40px w-100'
            placeholder='Enter date in the proper format'
             onChange={(e) => setDate(e.target.value)}
            />
            <p className='text-vogueRed'>{eventErrors && eventErrors.date}</p>
        </div>

        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="priorityIndex">Priority Index</label>
            <input type="number" name='priorityIndex' id='' className='pl-1 border rounded h-40px w-100'
            placeholder='Enter priority index'
             onChange={(e) => setPriorityIndex(e.target.value)}
            />
            <p className='text-vogueRed'>{eventErrors && eventErrors.priorityIndex}</p>
        </div>

        <div className='flex flex-col h-auto w-100'>
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
        </div>


        <button className='flex items-center justify-center text-white rounded h-40px w-100 bg-crossLightPurple'
        onClick={addEvent}
        >Add Event</button>
      </div>
    </div>
  )
}

export default AddEvent;
