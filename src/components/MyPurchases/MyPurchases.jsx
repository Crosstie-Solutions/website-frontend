import React, { useContext, useEffect, useState } from 'react';
import { CrossContext } from '../../Context/CrossContext';
import Purchase from '../Purchase/Purchase';
import axios from 'axios';
import { Link } from 'react-router-dom';



function MyPurchases() {

    const {me, baseUrl} = useContext(CrossContext);


    const [purchases, setPurchases] = useState(null);
  
    const [loadingPurchases, setLoadingPurchases] = useState(false);
    
    console.log("purchases:", purchases);
  
  
    useEffect(()=>{
      const viewPurchases = async ()=> {
  
        try {
          setLoadingPurchases(true)
          const response = await axios.get(`${baseUrl}/api/order/my-order/${me && me.id}`);
          setPurchases(response.data.data);
    
        } catch (error) {
          console.error('Error fetching my orders:', error);
        }finally{
          setLoadingPurchases(false);
        }
    
      }
  
      viewPurchases();
    }, [me]);



    
  return (
    <div className='flex flex-col items-center h-auto gap-2 w-100'>
        <h3 className='font-bold large:self-start text-20px'>My Resources</h3>
        
        <div className='flex flex-row flex-wrap h-auto gap-3 w-100 large:justify-start small:justify-center'> 
            {
                purchases && purchases.map((order, i)=>
                    <Purchase 
                        key={i}
                        bookId={order.productId.id}
                        previews={order.productId.previews}
                        material={order.productId.material}
                        title={order.productId.title}
                        slug={order.productId.slug}
                    />
                )
            }
        
        </div>

        {loadingPurchases && <p className='font-semibold text-center w-100'>Loading your resources...</p>}
            
        {!loadingPurchases && purchases && purchases.length < 1 && <p className='font-semibold text-center w-100'>No Resource</p>}

         {!loadingPurchases && purchases && purchases.length < 1 &&
        <Link to='/our-solutions/resource-vault' className="flex items-center justify-center w-auto px-2 text-white rounded bg-crossLightPurple h-40px">Check Resource Vault</Link>}
    </div>
  )
}

export default MyPurchases;
