import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { CrossContext } from '../../../Context/CrossContext';


function AddPartner() {

    const { baseUrl, setLoading } = useContext(CrossContext);


      const [partnerName, setPartnerName] = useState('');
      const [partnerLogo, setPartnerLogo] = useState('');


          //partner request
const [partnerErrors, setPartnerErrors] = useState({});


//funtion for signup
const addPartner = async (event) => {
  
event.preventDefault();

const validationErrors = {};

//To ensure valid inputs
if (!partnerName.trim()) {
  validationErrors.partnerName = "partner name is required";
}

if (!partnerLogo) {
  validationErrors.partnerLogo = "partner logo is required";
}

setPartnerErrors(validationErrors);

const noError = Object.keys(validationErrors).length === 0;

    const formData = new FormData();
    formData.append("partnerName", partnerName);
    formData.append("partnerLogo", partnerLogo);
  

if (noError) {
  try {
    
    setLoading(true);
    const response = await axios.post(
      `${baseUrl}/api/partners`,
      formData,
      {
        headers: {
           "Content-Type": "multipart/form-data"
        },
      }
    );

    if (response.status === 201) {
      toast.success(`Partner added successfully`);
    }
  } catch (error) {
    
    console.log("Error adding partner:", error);
  
  } finally {
    setLoading(false);
  }
}
};
    




  return (
    <div className='flex flex-col h-auto gap-2 py-2 small:px-0 large:px-2 large:w-80 text-15px small:w-90vw'>
      <h4 className="font-semibold text-crossLightPurple small:hidden large:flex">Add Partner</h4>

      <div className='flex flex-col items-end gap-2 p-1 bg-white large:p-2 rounded-10 w-100'>

        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="partnerName">Partner Name</label>
            <input type="text" placeholder='Enter partner name' name='partnerName' className='pl-1 border rounded h-40px w-100'
             onChange={(e) => setPartnerName(e.target.value)}
            />
            <p className='text-vogueRed'>{partnerErrors && partnerErrors.partnerName}</p>
        </div>

        <div className='flex flex-col h-auto w-100'>
            <label htmlFor="partnerLogo">Partner Logo</label>
            <input type="file" name='partnerLogo' className='pl-1 border rounded h-40px w-100'
            accept="image/*"
            onChange={(e) => setPartnerLogo(e.target.files[0])}
            />
            <p className='text-vogueRed'>{partnerErrors && partnerErrors.partnerLogo}</p>
        </div>


        <button className='flex items-center justify-center text-white rounded h-40px w-100 bg-crossLightPurple'
        onClick={addPartner}
        >Add Partner</button>
      </div>
    </div>
  )
}

export default AddPartner;
