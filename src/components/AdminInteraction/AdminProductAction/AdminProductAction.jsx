import React, { useContext, useEffect, useState } from 'react';
import { VscClose } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { CrossContext } from '../../../Context/CrossContext';
import { DeletingBtn } from '../../LoadingBtn/LoadingBtn';




function AdminProductAction(product) {

    const { productEnd, progNo, productId, title, slug } = product;

    
    const { 
       
      toggleAdminProductAction, deleteProduct, deletingProduct
    } = useContext(CrossContext);


    //to delete program
    const [deleteProductMode, setDeleteProductMode] = useState(false)

    const toggledeleteProductMode = ()=>{
      setDeleteProductMode(!deleteProductMode);
    }


    
  return (
    <div className='fixed top-0 left-0 z-20 flex flex-col items-center justify-center h-100vh w-100vw bg-overlay'>

        <VscClose className='absolute text-white cursor-pointer large:top-8 large:right-30 text-30px small:right-5 small:top-12'
        onClick={() => toggleAdminProductAction('sdsffdf')}
        />

      {!deleteProductMode &&
      <div className='flex flex-col items-center justify-center h-auto px-2 py-3 bg-white large:gap-2 large:w-30vw rounded-10 small:w-90vw small:gap-1'>
       
        <Link 
        // to='/' 
        to={`/our-solutions/resource-vault/${slug}`}
        className='flex items-center justify-center font-bold rounded w-70 h-40px text-[#00a14b]'
        onClick={() => toggleAdminProductAction(productEnd)}
        >View Product</Link>
        
        
        <Link 
        to={`/our-solutions/resource-vault/edit/${slug}`}
        className='flex items-center justify-center font-bold text-[#662d91] rounded w-70 h-40px'
        onClick={()=> toggleAdminProductAction(productEnd)}
        >Edit Product</Link>

       
        <button className='flex items-center justify-center font-bold rounded w-70 h-40px text-vogueRed'
        onClick={toggledeleteProductMode}
        >Delete Product</button>
        
      </div>}

      {deleteProductMode &&
      <div className='flex flex-col items-center justify-center h-auto px-2 py-3 bg-white large:gap-3 large:w-30vw rounded-10 small:w-90vw small:gap-1'>

        {!deletingProduct &&
          <h4 className='text-center'>Are you sure you want to delete <span className='font-bold'>{title}?</span></h4>}

        {!deletingProduct &&
        <div className='text-vogueRed'>This action can not be reversed</div>}

        
        {!deletingProduct &&
        <div className='flex items-center justify-around h-auto w-100'>
          
          <button className='w-auto px-1 border rounded h-30px border-crossLightPurple text-crossLightPurple'
          onClick={toggledeleteProductMode}
          >Cancel</button>
        
          <button className='w-auto px-1 text-white rounded h-30px bg-vogueRed'
          onClick={()=>deleteProduct(productId)}
          >Delete</button>
        </div>}
        
        
        {deletingProduct &&
        <div className='flex items-center justify-center h-auto w-50'>
          <DeletingBtn />
        </div>}
      </div>}
    </div>
  )
};

export default AdminProductAction;
