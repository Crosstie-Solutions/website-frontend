import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { CrossContext } from '../../../Context/CrossContext';



function AddCaseStudy() {

    const { baseUrl, setLoading, setActiveScreen } = useContext(CrossContext);


      const [title, setTitle] = useState('');
      const [author, setAuthor] = useState('');
      const [date, setDate] = useState('');   
      const [challenge, setChallenge] = useState('');   
      const [solution, setSolution] = useState('');   
      const [result, setResult] = useState('');  
       
      
      const [caseStudyImage, setCaseStudyImage] = useState('');

      const [preview, setPreview] = useState(null);

      const handleFileChange = (e) => {
        setCaseStudyImage(e.target.files[0]);

        const selectedFile = e.target.files[0];

        setPreview(URL.createObjectURL(selectedFile));
      };
      
      
   

          //case study request
const [caseStudyErrors, setCaseStudyErrors] = useState({});


//funtion for signup
const addCaseStudy = async (event) => {
  
event.preventDefault();

const validationErrors = {};

//To ensure valid inputs
if (!title.trim()) {
  validationErrors.title = "title is required";
}

if (!author.trim()) {
  validationErrors.author = "author name is required";
}

if (!date.trim()) {
  validationErrors.date = "date is required";
}

if (!challenge.trim()) {
  validationErrors.challenge = "this field is required";
}

if (!result.trim()) {
  validationErrors.result = "this field is required";
}

if (!solution.trim()) {
  validationErrors.solution = "this field is required";
}

 if (!caseStudyImage) {
  validationErrors.eventImages = "Image is required.";
}



setCaseStudyErrors(validationErrors);

const noError = Object.keys(validationErrors).length === 0;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("challenge", challenge);
    formData.append("result", result);
    formData.append("solution", solution);
    formData.append("date", date);
    formData.append("caseStudyImage", caseStudyImage);  

if (noError) {
  try {
    
    setLoading(true);
    const response = await axios.post(
      `${baseUrl}/api/case-study`,
      formData,
      {
        headers: {
           "Content-Type": "multipart/form-data"
        },
      }
    );

    if (response.status === 201) {
      toast.success(`Case study added successfully`);

      setActiveScreen('overview');
    }
  } catch (error) {
    
    console.log("Error adding case study:", error);
  
  } finally {
    setLoading(false);
  }
}
};
    




  return (
    <div className='flex flex-col h-auto gap-2 py-2 small:px-0 large:px-2 large:w-80 text-15px small:w-90vw'>
      <h4 className="font-semibold text-crossLightPurple small:hidden large:flex">Add Case Study</h4>

      <div className='flex flex-col items-end gap-2 p-1 bg-white large:p-2 rounded-10 w-100'>

        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="title">Case study title</label>
            <input type="text" id='titleField' placeholder='Enter event title' name='title' className='pl-1 border rounded h-40px w-100'
             onChange={(e) => setTitle(e.target.value)}
            />
            <p className='text-vogueRed'>{caseStudyErrors && caseStudyErrors.title}</p>
        </div>

        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="author">Author</label>
            <input type="text" placeholder='Enter author name' name='author' className='pl-1 border rounded h-40px w-100'
             onChange={(e) => setAuthor(e.target.value)}
            />
            <p className='text-vogueRed'>{caseStudyErrors && caseStudyErrors.author}</p>
        </div>

        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="challenge">Challenge</label>
            <input type="text" placeholder='Enter challenge' name='challenge' className='pl-1 border rounded h-40px w-100'
             onChange={(e) => setChallenge(e.target.value)}
            />
            <p className='text-vogueRed'>{caseStudyErrors && caseStudyErrors.challenge}</p>
        </div>

        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="solution">Solution</label>
            <textarea type="text" placeholder='Enter solution' name='solution' className='pl-1 border rounded h-150px w-100'
             onChange={(e) => setSolution(e.target.value)}
            />
            <p className='text-vogueRed'>{caseStudyErrors && caseStudyErrors.solution}</p>
        </div>

        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="result">Result</label>
            <textarea type="text" placeholder='Enter result' name='result' className='pl-1 border rounded h-150px w-100'
             onChange={(e) => setResult(e.target.value)}
            />
            <p className='text-vogueRed'>{caseStudyErrors && caseStudyErrors.result}</p>
        </div>

        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="date">Date</label>
            <input type="date" name='date' id='dateField' className='pl-1 border rounded h-40px w-100'
             onChange={(e) => setDate(e.target.value)}
            />
            <p className='text-vogueRed'>{caseStudyErrors && caseStudyErrors.date}</p>
        </div>

        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="eventImages">Case study image</label>
            <input type="file" name='eventImages' id='eventImagesField' className='pl-1 border rounded h-40px w-100'
            accept="image/*"
            onChange={handleFileChange}
            />

            {preview &&
            <div className='flex flex-wrap items-center justify-start h-auto gap-2 mt-1 w-100'>
               <img src={preview} alt='image preview' className='w-auto rounded h-50px'/>
            </div>}

            <p className='text-vogueRed'>{caseStudyErrors && caseStudyErrors.eventImages}</p>
        </div>


        <button className='flex items-center justify-center text-white rounded h-40px w-100 bg-crossLightPurple'
        onClick={addCaseStudy}
        >Add Case Study</button>
      </div>
    </div>
  )
}

export default AddCaseStudy;
