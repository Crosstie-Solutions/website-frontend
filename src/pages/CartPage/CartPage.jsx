import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import axios from 'axios';
import { CrossContext } from "../../Context/CrossContext";
import { IoCloseOutline } from "react-icons/io5";
import { PHOTOS } from "../../assets/images";



function CartPage() {
  const {
    cartItems,
    clearCart, toggleLogin, getTotalCartItems,
    addToCart,
    removeFromCart, productTotalPrice,
    getTotalCartAmount,
    allProducts, me, baseUrl, setLoading, loadingAllProducts
  } = useContext(CrossContext);

  //total cart amount
  let subTotal = getTotalCartAmount();
  
  
  //to convert cartiems to an array to place order
  const [cartItemsToSend, setCartItemsToSend] = useState('station');
  console.log("cartItemsToSend:", cartItemsToSend);
  
  useEffect(()=>{
    const cartItemsArray = Object.entries(cartItems).map(([key, value]) => {
      return { productId: key, quantity: value };
    });

    setCartItemsToSend(cartItemsArray);
    
  },[cartItems])

  

  // const total = (subTotal && subTotal + deliveryFee + vat);
  
  // const total = (subTotal && subTotal + deliveryFee);


   //states for billing
     const [checkoutErrors, setCheckoutErrors] = useState({});
     
      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");
      const [email, setEmail] = useState("");
      const [phone, setPhone] = useState("");
  
  //to initiate transaction
  const [authorizationUrl, setAuthorizationUrl] = useState('');
  console.log('authorizationUrl:', authorizationUrl);


  
  const checkout = async () =>{
    const validationErrors = {};
      //scroll to top
      // window.scrollTo({top: 0, behavior: "auto"});

      //To ensure valid inputs
 if (!firstName.trim()) {
   validationErrors.firstName = "first name is required";
 }

 if (!lastName.trim()) {
   validationErrors.lastName = "last name is required";
 }

 if (!email.trim()) {
   validationErrors.email = "email is required";
 }

 if (!phone.trim()) {
   validationErrors.phone = "phone number is required";
 }

  setCheckoutErrors(validationErrors);

 const noError = Object.keys(validationErrors).length === 0;
  
      if(noError){
        try {
          setLoading(true);
          
          const initiate = await axios.post(`${baseUrl}/api/payment/initialize`, {
            "firstName": firstName,
            "lastName": lastName,
            "phone": phone,
            "email": email,
            "amount": subTotal && subTotal,
            // "userId": me && me._id,
            "cartItems": cartItemsToSend
          });

          console.log('initiate response:', initiate.data);
          console.log('initiate status:', initiate.data.data.status);

          setAuthorizationUrl(initiate.data.data.data.authorization_url);


          
          // if(initiate.data.status === true){
          //   setAuthorizationUrl(initiate.data.data.data.authorization_url)
          //   // const reference = initiate.data.data.reference;
            
          //   // localStorage.setItem("reference", JSON.stringify(reference))
          // }
          
        } catch (error) {
          console.log('initiate error:', error)
        }finally{
          setLoading(false);
        }
      }else{
        toggleLogin();
      }
  };


    //for customer to complete transaction with card
    useEffect(()=>{
      if (authorizationUrl && authorizationUrl !=="") {
        // const target = "_blank";
        window.open(authorizationUrl && authorizationUrl);
      }
    }, [authorizationUrl]);



   


    

  return (
    <div className="bg-gray-100 large:gap-3 large:h-auto large:items-center large:flex-col large:flex large:mt-20 large:w-83vw small:mt-15 small:h-auto small:w-90vw small:flex small:flex-col">

      {subTotal !== 0 && !loadingAllProducts &&
      <div className="flex h-auto large:flex-row small:flex-col large:justify-between small:items-center w-100 large:items-start">
        
        <div className="flex flex-col h-auto gap-2 px-1 py-2 bg-white rounded large:w-50 small:w-100">
          <h3 className="font-semibold border-b text-crossYellow border-crossYellow">Billing Details</h3>

          <div className="flex flex-col h-auto gap-2 w-100">
            <div className="flex flex-col h-auto w-100">
              <label htmlFor="">First Name*</label>

              <input type="text" name="firstName" className="p-1 border rounded h-40px w-100" 
              onChange={(e)=>setFirstName(e.target.value)}
              />
              <p className="text-vogueRed">{checkoutErrors.firstName}</p>
            </div>

            <div className="flex flex-col h-auto w-100">
              <label htmlFor="">Last Name*</label>

              <input type="text" name="lastName" className="p-1 border rounded h-40px w-100" 
              onChange={(e)=>setLastName(e.target.value)}
              />
              <p className="text-vogueRed">{checkoutErrors.lastName}</p>
            </div>


            <div className="flex flex-col h-auto w-100">
              <label htmlFor="">Email*</label>

              <input type="email" name="email" className="p-1 border rounded h-40px w-100" 
              onChange={(e)=>setEmail(e.target.value)}
              />
              <p className="text-vogueRed">{checkoutErrors.email}</p>
            </div>

            <div className="flex flex-col h-auto w-100">
              <label htmlFor="">Phone*</label>

              <input type="text" name="phone" className="p-1 border rounded h-40px w-100" 
              onChange={(e)=>setPhone(e.target.value)}
              />
              <p className="text-vogueRed">{checkoutErrors.phone}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-auto gap-3 py-2 bg-white large:w-40 large:px-2 small:px-1 small:w-100">
          <div className="flex items-center justify-between h-auto w-100">
            <h3 className="font-semibold text-crossYellow">Your Order ({getTotalCartItems()})</h3>

            <div className="cursor-pointer text-vogueRed" onClick={clearCart}>Clear Cart</div>
          </div>

          <div className="flex flex-col h-auto gap-2 w-100">
            <div className="flex justify-between h-auto border-b w-100">
              <div className="font-semibold w-60">Product</div>
              <div className="font-semibold 30">Price</div>
              <div className="w-10"></div>
            </div>

             {Object.keys(cartItems).map((productId, i) => {
              const product =
                allProducts && allProducts.find((p) => p._id === productId);

                let productTotal = productTotalPrice(product._id);

              if (!product) return null; // Product might not have been fetched yet
              if (cartItems[product._id] === 0) return null;
              return <div className="flex justify-between h-auto border-b border-gray-300 w-100" key={i}>
              <div className="break-words w-60">{product.title}</div>
              
              <div className="">&#8358;{productTotal && productTotal.toLocaleString()}</div>
              
              <IoCloseOutline className="cursor-pointer text-crossTextGray text-25px"
                onClick={()=>removeFromCart(product._id)}
              />
            </div>
            })}

            <div className="flex justify-between h-auto border-b w-100">
              <div className="font-semibold w-60">Subtotal</div>
              <div className="font-semibold 30">&#8358;{subTotal && subTotal.toLocaleString()}</div>
              <div className="w-10"></div>
            </div>

             <div className="flex justify-between h-auto border-b w-100">
              <div className="font-semibold w-60">Total</div>
              <div className="font-semibold 30">&#8358;{subTotal && subTotal.toLocaleString()}</div>
              <div className="w-10"></div>
            </div>

            <div className="flex flex-col items-center h-auto gap-1 mt-3 w-100">
              <p className="text-13px text-crossTextGray">Secured by <span className="font-semibold text-black">paystack</span></p>

              <div className="flex flex-row items-center justify-center h-auto gap-2 border large:w-80 small:w-100">
                 <img src={PHOTOS.paystack} alt="visa card" className="w-auto bg-white border h-30px"/>
                <img src={PHOTOS.mastercard} alt="visa card" className="bg-white h-50px w-70px"/>
                <img src={PHOTOS.visa} alt="visa card" className="bg-white h-50px w-50px"/>
                <img src={PHOTOS.verve} alt="visa card" className="bg-white h-50px w-50px"/>
              </div>

              <p className="text-13px text-crossTextGray">Make payment using your debit and credit cards</p>
            </div>


            <div className="flex items-center justify-center w-auto px-2 mt-3 text-white rounded cursor-pointer bg-crossLightPurple h-40px hover:text-crossLightPurple hover:border hover:border-crossLightPurple hover:bg-white" onClick={checkout}>Place Order</div>
            
            <Link to='/our-solutions/resource-vault' className="flex items-center justify-center w-auto px-2 border rounded text-crossLightPurple border-crossDarkPurple h-40px">Back To Resource Vault</Link>
          </div>

           
        </div>
      </div>}
      

        {!allProducts && loadingAllProducts &&
      <p className="font-bold text-15px">Loading your cart items...</p>}

      
      {subTotal === 0 && !loadingAllProducts &&
        <p className="font-bold text-center text-15px">Your cart is empty.</p>}

      {subTotal === 0 && !loadingAllProducts &&
      <Link to='/our-solutions/resource-vault' className="flex items-center justify-center w-auto px-2 text-white rounded bg-crossDarkPurple h-40px">Check Resource Vault</Link>}
    </div>
  );
}

export default CartPage;
