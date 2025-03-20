import React from "react";


const LoadingBtn = () => {
  return (
    <button className='flex items-center justify-center bg-blue-400 rounded cursor-default w-70 h-40px text-vogueWhite'>Please wait...</button>
  );
};



const UpdatingBtn = () => {
  return (
    <button className='flex items-center justify-center w-auto px-1 bg-blue-400 rounded cursor-default h-40px text-vogueWhite'>Updating...</button>
  );
};


const DeletingBtn = () => {
  return (
    <button className='flex items-center justify-center w-auto px-1 bg-red-300 rounded cursor-default h-40px text-vogueWhite'>Deleting...</button>
  );
};


export  {LoadingBtn, UpdatingBtn, DeletingBtn};
