import React, { useContext, useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { Link, useLocation, useNavigate  } from "react-router-dom";
import { BiError } from "react-icons/bi";
import { MdArrowRightAlt } from "react-icons/md";
import axios from "axios";
import { LuMoveLeft } from "react-icons/lu";
import { CrossContext } from "../../Context/CrossContext";
import { toast } from 'react-toastify';



function TransactionVerif() {
  const { me, setLoading, clearCart, 
    setActiveScreen, baseUrl, setCurrent } = useContext(CrossContext);

    //for navigation
    const navigate = useNavigate();
  
   // Extract reference from URL
   const urlParams = new URLSearchParams(window.location.search);
   const reference = urlParams.get('reference');
   
  console.log('reference param:', reference);

  
  //to set loading
  const location = useLocation();
  useEffect(()=>{
    
    if(location.pathname.includes("verify") && !me){
        setLoading(true)
    }
    else{
        setLoading(false);
        // clearCart();
    }
  });

  //to get gateway response
  const [checking, setChecking] = useState(false);
  
  // const [order, setOrder] = useState(null);
  // console.warn("order:", order);

  
  useEffect(() => {
    const verifyTransaction = async () => {
      try {
        setChecking(true);
        const response = await axios.get(
          `${baseUrl}/api/payment/verify-payment?reference=${reference && reference}`
        );

        // setOrder(response.data.data);
        console.warn("gateway feedback:", response);
        if(response.status === 200){
          toast.success(response.data.message);
          navigate('/our-solutions/resource-vault');
          clearCart();
        }else{
          toast.error(response.data.message);
          navigate('/cart')
        }
        
      } catch (error) {
        console.warn("Error verifying transaction:", error);
      }finally{
        setChecking(false)
      }
    };

    verifyTransaction();
  }, [reference]);

  
  //to view orders
  // const viewOrders = ()=>{
  //   setActiveScreen("orders")
  //   setCurrent(true)
  // }

  //clear or keep cart
  // useEffect(()=>{
  //   if(order && order.paid===true){
  //     clearCart();
  //   }
  // }, [order]);

 

  return (
    <div className="large:mt-20 large:pt-0 large:justify-center large:items-start large:flex large:w-100vw large:h-100vh small:mt-12 small:h-90vh small:w-100vw small:flex small:justify-center small:items-start small:pt-5">

      {/* Paid */}
        {/* {me && order && order.paid===true && !checking &&
      <div className="flex flex-col items-center w-auto h-auto gap-3 large:text-25px small:text-18px">
        <h1 className="flex items-center gap-2 font-bold">
          Payment successful! <TiTick className="text-green-500 large:text-35px small:text-30px" />
        </h1>
        <p className="flex items-center gap-2 font-light text-15px">
          Thank you for choosing Qx5.
        </p>

        <Link
          to={`/user/${me && me._id}`}
          // onClick={terminateTransac}
          className="flex items-center gap-2 font-bold large:p-1 text-white bg-qxDarkGreen text-15px rounded-5 small:py-0.5 small:px-1"
          onClick={viewOrders}
        >
          See order details <MdArrowRightAlt className="text-30px"/>
        </Link>
      </div>} */}

          {/* Not paid */}
      {/* {me && order && order.paid===false && !checking &&
      <div className="flex flex-col items-center w-auto h-auto gap-3 large:text-25px small:text-18px">
        <h1 className="flex items-center gap-2 font-bold text-vogueRed">
          Your payment was not successful
        </h1>

        <Link
          to='/cart'
          className="flex items-center gap-2 font-bold large:p-1 text-white bg-qxDarkGreen text-15px rounded-5 small:py-0.5 small:px-1"
        > 
          <LuMoveLeft className="text-30px"/> Back to cart
        </Link>
      </div>} */}

      {checking && <h1 className="font-extrabold large:mt-15 small:mt-25">Processing Order...</h1>}

      

   
      {/* <div className="flex flex-col items-center w-auto h-auto gap-3 text-25px">
        <h1 className="flex items-center gap-2 font-bold">
          Payment failed. <BiError className="text-red-500 text-35px" />
        </h1>
        <p className="flex items-center gap-2 font-light text-15px">
          Something went wrong while processing your payment.
        </p>

        <Link
          to='/cart'
          // onClick={terminateTransac}
          className="p-1 font-bold text-vogueBlack bg-vogueYello text-15px rounded-5"
        >
          Try again
        </Link>
      </div>  */}
    </div>
  );
}

export default TransactionVerif;
