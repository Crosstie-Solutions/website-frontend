import React, { useContext, useState } from "react";
import { CrossContext } from "../../Context/CrossContext";
import { toast } from 'react-toastify';
import axios from "axios";
import { VscClose } from "react-icons/vsc";
import { RiFolderDownloadLine } from "react-icons/ri";



function DeleteHighDemand(props) {

  
    const {programId, partnerName, title, priorityIndex} = props;


   const {baseUrl, setLoading, loginToken, toggleHighDemand} = useContext(CrossContext);




   
    const [deletingHighDemand, setDeletingHighDemand] = useState(false);
    
    
    const deletePartner = async () => {    
     
       try {
         
         setDeletingHighDemand(true);
         const response = await axios.delete(
           `${baseUrl}/api/program/high-demand/delete/${programId}`);
    
         if (response.status === 200) {
          
           toast.success('High demand course deleted successfully.');
           toggleHighDemand("exit");
           
         }
       } catch (error) {
         
         console.log("Error deleting partner:", error);
         
       } finally {
        setDeletingHighDemand(false);
       }
   
    };

    
    
  return (
    <div className={`absolute left-0 z-20 flex flex-col items-center justify-center py-10 top-0 min-h-100vh w-100vw bg-overlay`}>
        
        <VscClose className='absolute text-white cursor-pointer large:top-5 large:right-10 text-30px small:right-5 small:top-3'
        onClick={()=>{
          toggleHighDemand("exit")
        }}
        />
        
      <div className="flex flex-col items-center justify-center w-100 h-100">
        {/* form */}
        
        
        <div className="flex flex-col items-center justify-center gap-2 py-3 text-black bg-white rounded-5 large:px-5 large:h-100 large:w-40 small:rounded-5 small:w-90 text-15px small:px-1">

            <p className="text-center">Are you sure you want to delete <span className="font-semibold text-crossLightPurple">{title}?</span></p>
          
          <div className="flex items-center justify-center h-auto gap-3 w-100">
          {!deletingHighDemand &&
            <button
              className="flex items-center justify-center w-auto px-2 border rounded h-40px text-crossLightPurple border-crossLightPurple"
              onClick={()=>{
                toggleHighDemand("exit")
              }}
            >
              Cancel
            </button>}
          
            {!deletingHighDemand &&
            <button
              className="flex items-center justify-center w-auto px-2 text-white border-none rounded h-40px bg-vogueRed"
              onClick={deletePartner}
            >
              Delete
            </button>}

            {deletingHighDemand &&
            <button
              className="flex items-center justify-center w-auto px-2 text-white bg-red-300 border-none rounded h-40px"
            >
              Deleting...
            </button>}
          </div>

          
        </div>
       
      </div>
      
    </div>
  );
}

export default DeleteHighDemand;
