import React, { useContext, useState } from "react";
import { CrossContext } from "../../Context/CrossContext";
import { toast } from 'react-toastify';
import axios from "axios";
import { VscClose } from "react-icons/vsc";
import { RiFolderDownloadLine } from "react-icons/ri";



function RemoveAdmin(props) {

  
    const {adminId, firstName, lastName, role} = props;


   const {toggleDownloadScreen, baseUrl, setLoading, toggleRemoveAdmin, loginToken, deleteUser, deletingUser} = useContext(CrossContext);




   
    const [removingAdmin, setRemovingAdmin] = useState(false);
    
    
    const removeAdmin = async () => {    
     
       try {
         
         setRemovingAdmin(true);
         const response = await axios.patch(
           `${baseUrl}/api/users/remove-admin/${adminId}`,
           {
            role: "user"
           },
           {
            headers: {
              Authorization: `Bearer ${loginToken ? loginToken : ""}`
            }
          }
         );
    
         if (response.status === 200) {
          
           toast.success('Admin removed successfully.');
           toggleRemoveAdmin("exit");
           
         }
       } catch (error) {
         
         console.log("Error enrolling:", error);
         
       } finally {
        setRemovingAdmin(false);
       }
   
    };

    
    
  return (
    <div className={`absolute left-0 z-20 flex flex-col items-center justify-center py-10 top-0 min-h-100vh w-100vw bg-overlay`}>
        
        <VscClose className='absolute text-white cursor-pointer large:top-5 large:right-10 text-30px small:right-5 small:top-3'
        onClick={()=>{
          toggleRemoveAdmin("exit")
        }}
        />
        
      <div className="flex flex-col items-center justify-center w-100 h-100">
        {/* form */}
        
        {/* remove admin */}
        {role && role.toLowerCase()==='admin' &&
        <div className="flex flex-col items-center justify-center gap-2 py-3 text-black bg-white rounded-5 large:px-5 large:h-100 large:w-40 small:rounded-5 small:w-90 text-15px small:px-1">

            <p className="text-center">Are you sure you want to remove <span className="font-semibold text-crossLightPurple">{firstName} {lastName}?</span> They will lose all admin privileges.</p>
          
          <div className="flex items-center justify-center h-auto gap-3 w-100">
          {!removingAdmin &&
            <button
              className="flex items-center justify-center w-auto px-2 border rounded h-40px text-crossLightPurple border-crossLightPurple"
              onClick={()=>{
                toggleRemoveAdmin("exit")
              }}
            >
              Cancel
            </button>}
          
            {!removingAdmin &&
            <button
              className="flex items-center justify-center w-auto px-2 text-white border-none rounded h-40px bg-vogueRed"
              onClick={removeAdmin}
            >
              Remove
            </button>}

            {removingAdmin &&
            <button
              className="flex items-center justify-center w-auto px-2 text-white bg-red-300 border-none rounded h-40px"
            >
              Removing...
            </button>}
          </div>

          
        </div>}


         {/* delete user */}
         {role && role.toLowerCase()==='user' &&
         <div className="flex flex-col items-center justify-center gap-2 py-3 text-black bg-white rounded-5 large:px-5 large:h-100 large:w-40 small:rounded-5 small:w-90 text-15px small:px-1">

            <p className="text-center">Are you sure you want to delete <span className="font-semibold text-crossLightPurple">{firstName} {lastName}?</span> They will be permanently deleted from Crosstie database.</p>
          
          <div className="flex items-center justify-center h-auto gap-3 w-100">
          {!deletingUser &&
            <button
              className="flex items-center justify-center w-auto px-2 border rounded h-40px text-crossLightPurple border-crossLightPurple"
              onClick={()=>{
                toggleRemoveAdmin("exit")
              }}
            >
              Cancel
            </button>}
          
            {!deletingUser && 
            <button
              className="flex items-center justify-center w-auto px-2 text-white border-none rounded h-40px bg-vogueRed"
              onClick={()=>{
                deleteUser(adminId)
              }}
            >
              Delete
            </button>}




            {removingAdmin &&
            <button
              className="flex items-center justify-center w-auto px-2 text-white bg-red-300 border-none rounded h-40px"
            >
              Removing...
            </button>}


            {deletingUser &&
            <button
              className="flex items-center justify-center w-auto px-2 text-white bg-red-300 border-none rounded h-40px"
            >
              Deleting...
            </button>}
          </div>

          
          </div>}
       
      </div>
      
    </div>
  );
}

export default RemoveAdmin;
