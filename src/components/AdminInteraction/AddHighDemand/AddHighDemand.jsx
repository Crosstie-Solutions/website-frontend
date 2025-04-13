import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { CrossContext } from '../../../Context/CrossContext';


function AddHighDemand() {

    const { baseUrl, setLoading, allPrograms } = useContext(CrossContext);


      const [program, setProgram] = useState('');
      const [priorityIndex, setPriorityIndex] = useState(null);

      console.log("program to set:", program)


          //high demand request
const [highDemandErrors, setHighDemandErrors] = useState({});


//funtion for signup
const addHighDemand = async (event) => {
  
event.preventDefault();

const validationErrors = {};

//To ensure valid inputs
if (!program.trim()) {
  validationErrors.program = "select program";
}

if (!priorityIndex) {
  validationErrors.priorityIndex = "What is the priority index of this program?";
}

setHighDemandErrors(validationErrors);

const noError = Object.keys(validationErrors).length === 0;
  

if (noError) {
  try {
    
    setLoading(true);
    const response = await axios.post(
      `${baseUrl}/api/program/high-demand`,
      {
        program: program,
        priorityIndex: priorityIndex,
      },
      {
        headers: {
           "Content-Type": "application/json"
        },
      }
    );

    if (response.status === 201) {
      toast.success(`High demand program added successfully`);
    }
  } catch (error) {
    
    console.log("Error adding high demand program:", error);
    if(error){
      toast.error(error.response.data.message);
    }
  
  } finally {
    setLoading(false);
  }
}
};
    




  return (
    <div className='flex flex-col h-auto gap-2 py-2 small:px-0 large:px-2 large:w-80 text-15px small:w-90vw'>
      <h4 className="font-semibold text-crossLightPurple small:hidden large:flex">Add High Demand Program</h4>

      <div className='flex flex-col items-end gap-2 p-1 bg-white large:p-2 rounded-10 w-100'>

        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="program">Program Title</label>
           
            <select name="program" id="" className='pl-1 border rounded h-40px w-100'
            onChange={(e) => setProgram(e.target.value)}
            >
              <option value="">-select-</option>
              {
                allPrograms && allPrograms.map((program, i)=>
                  <option value={program.id} key={i}>{program.title}</option>
                )
              }
            </select>
            <p className='text-vogueRed'>{highDemandErrors && highDemandErrors.program}</p>
        </div>

        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="priorityIndex">Priority Index</label>
            <input type="number" placeholder='Enter priority index' name='priorityIndex' className='pl-1 border rounded h-40px w-100'
             onChange={(e) => setPriorityIndex(e.target.value)}
            />
            <p className='text-vogueRed'>{highDemandErrors && highDemandErrors.priorityIndex}</p>
        </div>


        <button className='flex items-center justify-center text-white rounded h-40px w-100 bg-crossLightPurple'
        onClick={addHighDemand}
        >Add Program</button>
      </div>
    </div>
  )
}

export default AddHighDemand;
