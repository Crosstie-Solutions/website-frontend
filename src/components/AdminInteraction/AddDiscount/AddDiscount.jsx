import React, { useContext, useEffect, useState } from 'react';
import { CrossContext } from '../../../Context/CrossContext';
import axios from 'axios';
import { toast } from 'react-toastify';




function AddDiscount() {

    const {
        baseUrl,
        setLoading,
        setActiveScreen
      } = useContext(CrossContext);


      //to add discount
  const [type, setType] = useState('');
  const [percentage, setPercentage] = useState(0);


  

  //testimonial errors
  const [discountErrors, setDiscountErrors] = useState({});

  console.log('discountErrors:', discountErrors);


  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setDiscountData({ ...discountData, [name]: value });

  // };



  //to add testimonial
  const createDiscount = async (e) => {
    e.preventDefault();

    const validationErrors = {};

    //To ensure valid inputs
    if (!type.trim()) {
      validationErrors.type = "Discount type is required";
    }

     if (percentage < 1) {
      validationErrors.percentage = "Percentage can not be less than 1";
    }

    if (percentage >= 100) {
      validationErrors.percentage = "Percentage must be between 0 to 99";
    }

    setDiscountErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;


    if (noError) {
      setLoading(true);

      try {
        const response = await axios.post(`${baseUrl}/api/discount`, {
          type,
          percentage
        });

        if (response.status === 201) {
          
          toast.success(response.data.status);
          setActiveScreen("overview")
        }
      } catch (error) {
        if(error){
          console.error("Error creating discount code:", error);
          toast.error(error.response.data.message)
        }
        
      } finally {
        setLoading(false);
      }
    }
  };
      



  return (
    <div className="flex flex-col items-start h-auto gap-2 w-100">
            <h4 className="font-semibold text-crossLightPurple">Add Discount</h4>
            
            <div
              className="flex flex-col h-auto gap-1 w-100 large:text-15px small:text-13px"
            >
              {/* type */}
              <div className="flex items-center justify-start h-auto gap-5 w-100">
                <div className="flex flex-col h-auto w-100">
                  <label htmlFor="name">Discount type</label>
                  <select name="type" id="" className="p-0.5 border rounded-4" 
                  onChange={(e) =>setType(e.target.value)}
                  >
                    <option value="">-select-</option>
                    <option value="VLTFIRST">VLTFIRST</option>
                    <option value="CROSSTIEVLT">CROSSTIEVLT</option>
                  </select>
                  {discountErrors && (
                    <p className="text-13px text-vogueRed">
                      {discountErrors.type}
                    </p>
                  )}
                </div>
              </div>

              {/* percentage */}
              <div className="flex items-center justify-start h-auto gap-5 w-100">
               <div className="flex flex-col h-auto w-100">
                  <label htmlFor="percentage">Percentage</label>
                  <input
                    type="number"
                    placeholder="Enter percentage"
                    name="percentage"
                    className="p-0.5 border rounded-4"
                    onChange={(e) =>setPercentage(e.target.value)}
                  />
                  {discountErrors && (
                    <p className="text-13px text-vogueRed">
                      {discountErrors.percentage}
                    </p>
                  )}
                </div>
              </div>          

              <button
                onClick={createDiscount}
                className="flex items-center justify-center mt-5 large:w-20 rounded-4 h-40px bg-crossLightPurple text-vogueWhite hover:bg-transparent small:w-100 hover:border hover:border-crossLightPurple hover:text-crossLightPurple"
              >
                Add Discount
              </button>
              
            </div>
          </div>
  )
}


export default AddDiscount;