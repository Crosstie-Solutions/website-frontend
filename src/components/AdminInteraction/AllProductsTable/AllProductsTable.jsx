import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineChevronRight } from "react-icons/hi";
import { CgChevronLeft } from "react-icons/cg";
import { MdOutlineDownload } from "react-icons/md";
import { CrossContext } from "../../../Context/CrossContext";
import ProductFilter from "../../ProductFilter/ProductFilter";
import AdminProductAction from "../AdminProductAction/AdminProductAction";




function AllProductsTable() {

  
  const {

        loadingAllProducts,    
         allProducts, currentProducts,

        
        currentProductsPage,
        totalProductsPages,
        handleProductsPageChange,
        activeProduct, toggleAdminProductAction,
  } = useContext(CrossContext);

  

  return (
    <div className="flex flex-col items-center justify-center h-auto gap-3 py-3 large:px-2 bg-vogueWhite w-100 rounded-10 large:text-15px small:text-10px">

      <div className='flex items-center justify-between h-auto gap-5 w-100'>
        <h4 className="self-start font-bold text-crossLightPurple small:hidden large:block">All Products({allProducts && allProducts.length})</h4>
        <div className='large:w-70 h-40px small:w-100'>
            <ProductFilter />
        </div>
      </div>
      
      <div className="flex flex-col items-center h-auto gap-2 w-100">
        
        <div className="flex flex-row items-center justify-between h-auto font-bold border-b border-blue-300 text-crossBlue w-100">
          
          <div className="w-10">S/N</div>
          <div className="w-20">Product</div>
          <div className="w-10">Price</div>
          <div className="w-10">Discount</div>
          <div className="w-20">Preview</div>
        </div>

        {currentProducts &&
          currentProducts.map((product, i) => {
            return (
              <div
                key={i}
                className={`${i % 2 === 0 ? "bg-gray-100" : "bg-white"} flex items-center w-100 h-auto gap-2 justify-between`}
              >
                <div className="flex justify-start w-10">{i + 1}.</div>
                <div className={`flex flex-col gap-0.5 w-20 break-words items-start`}>
                  {product.title}
                  
                 
                  <div  
                    className='flex items-center justify-center text-white rounded cursor-pointer h-30px w-100px bg-crossLightPurple text-11px'
                    onClick={()=>toggleAdminProductAction(i)}
                    >Action</div>
                </div>

                <div className="flex justify-start w-10 break-words">&#8358;{product.price.toLocaleString()}</div>

                <div className="flex justify-start w-10">{product.priceDiscount}</div>
                

                <div className="flex justify-start w-20"><img src={product.previews[0]} alt="partner logo" className="h-auto rounded w-50px"/></div>

                {activeProduct === i && (
                    <div>
                      <AdminProductAction 
                      productNo={i + 1}
                      productEnd={allProducts.length + 1}
                      productId={product.id}
                      title={product.title}
                      slug={product.slug}
                      />
                    </div>)}
              </div>
            );
          })}
      </div>


      {/* Pagination */}
      {!loadingAllProducts && currentProducts && currentProducts.length > 0 && (
        <div className="flex items-center justify-between w-auto h-auto gap-3 mt-4">
          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentProductsPage === 1}
            onClick={() => handleProductsPageChange(currentProductsPage - 1)}
          >
            <CgChevronLeft className="text-20px" />
          </button>

          <div className="text-sm">
            Page {currentProductsPage} of {totalProductsPages}
          </div>

          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-crossLightPurple disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentProductsPage === totalProductsPages}
            onClick={() => handleProductsPageChange(currentProductsPage + 1)}
          >
            <HiOutlineChevronRight className="text-20px" />
          </button>
        </div>
      )}


      {loadingAllProducts && (
        <p className="mt-5 font-bold text-center w-100">Loading products...</p>
      )}

      {!loadingAllProducts && currentProducts && currentProducts.length < 1 && (
        <p className="mt-5 font-bold text-center w-100">Product not found.</p>
      )}
    </div>
  );
}

export default AllProductsTable;
