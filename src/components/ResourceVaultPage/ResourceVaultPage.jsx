import React, { useContext } from 'react';
import { CrossContext } from '../../Context/CrossContext';
import { HiOutlineChevronRight } from "react-icons/hi";
import { CgChevronLeft } from "react-icons/cg";
// import BlogSideBar from '../../components/BlogSideBar/BlogSideBar';
import { Report } from '../Report/Report';
import Product from '../Product/Product';



function ResourceVaultPage() {


    const {


        loadingAllProducts,
        currentProducts, 
        handleProductsPageChange,
        currentProductsPage,
        totalProductsPages,
    } = useContext(CrossContext);

    
  return (
    <div className='flex flex-col gap-2 pt-1 pb-5 bg-white large:items-center large:p-2 large:mt-20 large:w-83vw rounded-10 small:w-90vw small:mt-13 small:items-center'>

      <h2 className='font-semibold text-center w-100 large:text-30px text-crossDarkPurple small:text-20px'>Resource Vault</h2>
      
      
     <div className='flex flex-row flex-wrap items-start justify-center h-auto gap-3 w-100'>
        
        
          
          {
              currentProducts && currentProducts.map((book, i)=>
                  <Product 
                    key={i}
                    title={book.title}
                    previews={book.previews}
                    price={book.price}
                    priceDiscount={book.priceDiscount}
                    pages={book.pages}
                    description={book.description}
                    material={book.material}
                    slug={book.slug}
                    bookId={book._id}
                  />
                 
              )
          }

          
          
          {!loadingAllProducts && currentProducts && currentProducts.length < 1 && <p className='mt-10'>No Article found.</p>}
       


  
     </div>



      {/* Pagination */}
           {currentProducts && currentProducts.length > 0 && (
             <div className="flex items-center justify-between h-auto gap-3 mt-4 large:w-50 small:w-80">
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

        {loadingAllProducts && <p>Loading Resources</p>}
    </div>
  )
}

export default ResourceVaultPage
