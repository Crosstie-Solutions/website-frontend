import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { CrossContext } from '../../Context/CrossContext';



function ProtectedUser() {

  const {me} = useContext(CrossContext)

  const human = localStorage.getItem("loginToken") !== null;

  // const authenticatedAdmin = me && me.role.toLowerCase().includes("admin");


  
return(
  human && me && me.role.toLowerCase().includes("user") ? <Outlet /> : <Navigate to="/login" /> 
)
};


export { ProtectedUser };
