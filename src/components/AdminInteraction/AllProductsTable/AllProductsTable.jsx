import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PHOTOS } from '../../assets/images';
import { QxContext } from '../../Context/QxContext';
import { HiOutlineChevronRight } from "react-icons/hi";
import { CgChevronLeft } from "react-icons/cg";
import AdminProductsFilter from '../AdminProductsFilter/AdminProductsFilter';
import AdminProductAction from '../AdminProductAction/AdminProductAction';



function AllProductsTable() {

    const { currentProducts, handleProductsPageChange, currentProductsPage, totalProductsPages,  toggleAdminProductAction, activeProduct, allProducts} = useContext(QxContext);
    
    
  return (
    <div className='flex flex-col items-center h-auto gap-2 w-100'>
      <div className='flex items-center h-auto gap-5 w-100'>
        <h4 className="self-start font-bold small:hidden large:block">All Products({allProducts && allProducts.length})</h4>
        <div className='large:w-70 h-40px small:w-100'>
            <AdminProductsFilter />
        </div>
      </div>

      <div className='flex flex-col h-auto gap-1 w-100 large:text-15px small:text-13px'>
      
        <div className='flex justify-between h-auto border-b large:font-bold small:font-semibold border-qxDarkGreen w-100'>
            <div>S/N</div>
            <div>Title</div>
            <div>Price</div>
            <div>Qty.</div>
            <div>Stock</div>
            <div>Image</div>
        </div>

        {
            currentProducts && currentProducts.map((product, i)=>
                <div className={`flex items-center justify-between h-auto w-100 ${i % 2 === 0 ? "bg-gray-100" : "bg-white"} pl-1 py-1`}>
                    <div>{i + 1}.</div>
                    <div className='flex flex-col gap-1 break-words large:w-15 small:w-20'>{product.title}
                        
                        {/* <Link 
                        // to='/' 
                        to={`/shop/product/${product.id}`}
                        className='text-blue-500'>Action</Link> */}
                        <div  
                        className='flex items-center justify-center h-auto text-black rounded cursor-pointer w-60px bg-qxLemon'
                        onClick={()=>toggleAdminProductAction(i)}
                        >Edit</div>
                    </div>
                    
                    <div className='relative large:right-5 small:right-2'>&#8358;{product.price}</div>
                    <div className='relative large:right-4 small:right-1'>{product.quantity}ml</div>
                    <div className={`relative large:right-3 small:right-1 ${product.stock < 1 ? "text-red-500" : ""}`}>{product.stock}</div>
                    
                    <img src={product.productImages[0]} alt="product image" className='w-50px h-60px rounded-4'/>
                    
                    {activeProduct === i && (
                    <div>
                      <AdminProductAction 
                      prodNo={i + 1}
                      prodEnd={allProducts.length + 1}
                      productId={product.id}
                      title={product.title}
                      />
                    </div>)}
                </div>
            )
        }
        
        
      </div>

      {/* Pagination */}
      {currentProducts && currentProducts.length > 0 && (
        <div className="flex items-center justify-between h-auto gap-3 mt-4 large:w-50 small:w-80">
          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-qxDarkGreen disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentProductsPage === 1}
            onClick={() => handleProductsPageChange(currentProductsPage - 1)}
          >
            <CgChevronLeft className="text-20px" />
          </button>

          <div className="text-sm">
            Page {currentProductsPage} of {totalProductsPages}
          </div>

          <button
            className="flex items-center justify-center text-white rounded-full large:w-40px large:h-40px small:w-30px small:h-30px bg-qxDarkGreen disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={currentProductsPage === totalProductsPages}
            onClick={() => handleProductsPageChange(currentProductsPage + 1)}
          >
            <HiOutlineChevronRight className="text-20px" />
          </button>
        </div>
      )}

    {currentProducts && currentProducts.length < 1 && (
        <p className="mt-5 text-center w-100 text-15px">Product not found.</p>
      )}
    </div>
  )
}

export default AllProductsTable
