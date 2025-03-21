import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { FaRegUser } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { MdMailOutline } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
import { RiCoupon5Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { GoHistory } from "react-icons/go";
import { LuSettings } from "react-icons/lu";
import { BsTrash3 } from "react-icons/bs";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdDriveFolderUpload } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";

import { VscGift } from "react-icons/vsc";
import { VscFeedback } from "react-icons/vsc";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
// import AllProductsTable from "../../Components/AllProductsTable/AllProductsTable";
import { FaUsers } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5"; 
// import AdminUsersTable from "../../Components/AdminUsersTable/AdminUsersTable";
// import AddNewUser from "../../Components/AddNewUser/AddNewUser";
import { MdManageHistory } from "react-icons/md";
// import AdminOrdersTable from "../../Components/AdminOrdersTable/AdminOrdersTable";
import { FaRegNewspaper } from "react-icons/fa6";
// import AdminNewsletter from "../../Components/AdminNewsletter/AdminNewsletter";
import { BiMessageDetail } from "react-icons/bi";
// import AdminEnquiry from "../../Components/AdminEnquiry/AdminEnquiry";
import { CrossContext } from "../../Context/CrossContext";
import AddProgram from "../../components/AdminInteraction/AddProgram/AddProgram";
import { FaBookBookmark } from "react-icons/fa6";
import AllProgramsTable from "../../components/AdminInteraction/AllProgramsTable/AllProgramsTable";
import AllCourseRegsTable from "../../components/AdminInteraction/AllCourseRegsTable/AllCourseRegsTable";





function AdminDashboard() {

  //users dropdown
  const [usersDD, setUsersDD] = useState(false);

  const toggleUsersDD = ()=>{
    setUsersDD(!usersDD);
  }
  

  const {
    me,
    baseUrl,
    loginToken,
    setLoading,
    activeScreen,
    setActiveScreen, toggleSideBar, current, allPrograms
  } = useContext(CrossContext);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [activeScreen]);

  const [orders, setOrders] = useState("pending");

  

  //to add product
  const [productData, setProductData] = useState({
    title: "",
    price: 0,
    priceDiscount: 0,
    quantity: 0,
    stock: 0,
    description: "",
    category: "",
    productImages: [],
  });

  //product errors
  const [productErrors, setProductErrors] = useState({});
  console.log('productData:', productData);

  const maxImageSize = 1 * 1024 * 1024; //to limit images to 1MB in bytes
  const [imageSizeErrors, setImageSizeErrors] = useState("");

  //to preview product images
  const [productImagesPreview, setProductImagesPreview] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProductData({ ...productData, [name]: value });

    console.log("productData:", productData);
  };

  const handleFileChange = (e) => {
    setProductData({ ...productData, productImages: e.target.files });

    //for preview
    const files = e.target.files;
    const images = [];

    for (const file of files) {
      images.push(URL.createObjectURL(file));
    }
    setProductImagesPreview(images);

    //to check images size (1mb max)
    const allFiles = Array.from(e.target.files);
    for (let file of allFiles) {
      if (file.size > maxImageSize) {
        setImageSizeErrors(
          `File ${file.name} is too large. Max. image size is 1MB.`
        );
        return;
      }
    }

    setImageSizeErrors(""); // Clear error if all files are okay
    console.log("productData:", productData);
  };


  
  //to add product
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};

    //To ensure valid inputs
    if (!productData.title.trim()) {
      validationErrors.title = "product title is required";
    }

    if (!productData.category.trim()) {
      validationErrors.category = "specify product category";
    }

    if (productData.price < 1) {
      validationErrors.price = "add product price";
    }


    if (!productData.quantity) {
      validationErrors.quantity = "specify product quantity";
    }

    if (!productData.stock) {
      validationErrors.stock = "how many of this product do you have in stock";
    }


    if (!productData.description.trim()) {
      validationErrors.description = "add a brief description to the product";
    }

    if (productData.productImages.length < 1) {
      validationErrors.productImages = "a product must have an image.";
    }

    if (productData.productImages.length > 1) {
      validationErrors.productImages = "a product needs one image.";
    }

    setProductErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

    const formData = new FormData();
    formData.append("title", productData.title);
    formData.append("price", Number(productData.price));
    formData.append("priceDiscount", Number(productData.priceDiscount));
    formData.append("quantity", Number(productData.quantity));
    formData.append("stock", Number(productData.stock));
    formData.append("description", productData.description);
    formData.append("category", productData.category);

    // Append each image file to the formData
    for (let i = 0; i < productData.productImages.length; i++) {
      formData.append("productImages", productData.productImages[i]);
    }

    // Log each key-value pair in FormData
    for (let pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    if (noError && imageSizeErrors === "") {
      setLoading(true);

      try {
        const response = await axios.post(`${baseUrl}/api/products`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${loginToken}`,
          },
          withCredentials: true, // Important for sending cookies
        });

        console.log("add product message:", response.data.message);
        if (response.data.message === "Product created successfully!") {
          // setAddProductAlert(true);
          toast.success('Product added successfully!');
          setActiveScreen('overview')
        }
      } catch (error) {
        console.error("Error creating product:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  
  //to get orders
  // const [myOrders, setMyOrders] = useState();
  // console.log("myOrders:", myOrders);

  //ongoing orders
  // const pendingOrders =
  //   myOrders && myOrders.filter((order) => order.deliveryStatus === "pending");

  //canceled orders
  // const deliveredOrders =
  //   myOrders &&
  //   myOrders.filter((order) => order.deliveryStatus === "delivered");

  // useEffect(() => {
  //   const getMyOrders = async () => {
  //     const response = await axios.get(
  //       `${baseUrl}/api/orders?userId=${me && me._id}`
  //     );

  //     setMyOrders(response.data.data.data);
  //   };

  //   getMyOrders();
  // }, [me]);


  
  //for user to logout
  
  
  
  const navigate = useNavigate();
  const logoutUser = () => {
    localStorage.removeItem("loginToken");
    localStorage.removeItem("signupToken");
    navigate("/");
    window.location.reload(false);
  };



  
  return (
    <div className="large:flex-row large:bg-transparent large:h-auto large:justify-between large:items-start large:flex large:mt-15 large:w-90vw small:flex small:flex-col small:h-auto small:w-90vw small:items-center small:mt-15 small:gap-1">
      
      {/*desktop side menu */}
      <div className="flex-col items-start h-auto gap-2 border large:flex w-25 bg-vogueWhite rounded-10 small:hidden">
        
        {/* overview */}
        
        <div
          className={`flex items-center justify-start gap-1 pl-3 cursor-pointer h-40px w-100 text-15px ${
            activeScreen === "overview" ? "bg-gray-300" : ""
          } hover:bg-gray-300`}
          onClick={() => setActiveScreen("overview")}
        >
          <FaRegUser className="text-20px" />
          Crosstie Admin
        </div>

          
          


        {/* manage programs */}
        <div
          className={`flex items-center flex-col justify-start gap-1 cursor-pointer h-auto w-100 text-15px`}
        >
          
          <div className={`${ activeScreen === "addProgram" || activeScreen === "allPrograms"|| activeScreen === "courseRegistrations" ? "bg-gray-300" : "" } h-40px w-100 flex justify-between items-center pl-3 pr-2`}
          onClick={toggleUsersDD}
          >
            <div className="flex gap-1">
              <FaBookBookmark className="text-20px" />
              Manage Programs
            </div>

            <IoChevronDown className={`text-20px ${usersDD ? "rotate-180" : ""}`}/>
          </div>

          {usersDD &&
          <div className="flex flex-col items-center gap-1 w-100">
            <div className="h-auto cursor-pointer w-50 hover:bg-gray-300"
             onClick={() => setActiveScreen("allPrograms")}
            >All Programs</div>
            
            <div className="h-auto cursor-pointer w-50 hover:bg-gray-300"
             onClick={() => setActiveScreen("addProgram")}
            >Add Program</div>

            <div className="h-auto cursor-pointer w-50 hover:bg-gray-300"
             onClick={() => setActiveScreen("courseRegistrations")}
            >Registrations</div>
          </div>}
        </div>
       

        <Link
          className={`flex items-center justify-start gap-1 pl-3 cursor-pointer h-40px w-100 text-15px ${
            activeScreen === "accountManagement" ? "bg-gray-300" : ""
          } hover:bg-gray-300`}
          // to={`/user/edit/${me && me.id}`}
        >
          <LuSettings className="text-20px" />
          Settings
        </Link>


        <div
          className="flex items-center justify-start gap-1 pl-3 border cursor-pointer h-40px w-100 text-15px bg-vogueRed text-vogueWhite hover:bg-transparent hover:text-vogueRed hover:border-vogueRed hover:border"
          onClick={logoutUser}
        >
          <RiLogoutCircleLine className="text-20px" />
          Logout
        </div>

       
      </div>


      {/*desktop active screen*/}
      <div className="flex-col items-center h-auto px-2 py-5 border large:flex w-70 bg-vogueWhite rounded-10 small:hidden">
        
        {/* overview */}
        {activeScreen === "overview" ? (
          <div className="flex flex-col items-start h-auto gap-2 w-100">
            <h4 className="font-semibold">Account Overview</h4>
            <div className="flex items-start justify-between h-auto gap-2 w-100 rounded-5">
              <div className="flex flex-col border h-280px w-47">
                <span className="flex items-center justify-between px-1 font-semibold border w-100 h-50px text-crossLightPurple">
                Admin Info
                </span>
                <div className="flex flex-col h-auto gap-2 p-1 text-15px">
                  <p><span className="font-semibold">Role:</span> {me && me.role==='admin'? "Admin" : "Super Admin"}</p>
                  <p><span className="font-semibold">Privileges:</span> {me && me.role==='admin'? "Can manage user engagements and interactions" : "Can manage both user interactions and admins."}</p>
                </div>
              </div>

              <div className="flex flex-col h-auto gap-1 border w-47 rounded-5">
                <span className="flex items-center justify-between px-1 font-semibold border w-100 h-50px text-crossLightPurple">
                Basic Info{" "}
                  
                  <Link to={`/user/edit/${me && me.id}`}><MdModeEditOutline className="font-bold text-black cursor-pointer" /></Link>
                  
                </span>
                
                <div className="flex flex-col h-auto gap-3 p-2 text-15px w-100">
                  
                  <div className="flex flex-col h-auto gap-1 w-100">
                    <p><span className="font-bold">Name:</span> {me && me.firstName + " " + me.lastName}</p>
                    
                    <p><span className="font-bold">Phone:</span> {me && me.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}



        {/* savedItems */}
        {/* {activeScreen === "savedItems" ? <SavedItem /> : ""} */}

        {/* All products */}
        {/* {activeScreen === "allProducts" ? <AllProductsTable /> : ""} */}



        {/* add product */}
        {activeScreen === "addProgram" ? <AddProgram /> : ""}

        {activeScreen === "allPrograms" && <AllProgramsTable />}
        
        {activeScreen === "courseRegistrations" && <AllCourseRegsTable />}
        
        {/* {activeScreen === "manageOrders" && <AdminOrdersTable />} */}
        
        {/* {activeScreen === "newsletter" && <AdminNewsletter />} */}
        
        {/* {activeScreen === "enquiries" && <AdminEnquiry />} */}
        
      </div>
      
      {!current ?
        <h4 className="text-gray-500 text-15px large:hidden small:flex">Crosstie Admin</h4> : ""
      }

      {/*mobile side menu */}
      {!current ? (
        <div className="flex-col items-start h-auto gap-2 border small:flex w-100 bg-vogueWhite rounded-10 large:hidden">
          
          <div
            className={`flex items-center justify-between gap-1 px-1 cursor-pointer h-40px w-100 text-13px`}
            onClick={() => setActiveScreen("overview")}
          >
            <div className="flex items-center gap-1 w-100 h-100" onClick={toggleSideBar}>
              <FaRegUser className="text-20px" />
              Profile
            </div>

            <MdKeyboardArrowRight className="text-20px" />
          </div>


           
            
            <div
                className={`flex items-center flex-col justify-start gap-1 cursor-pointer h-auto w-100 text-15px`}
              >
          
              <div className={`h-40px w-100 flex justify-between items-center pl-1 pr-2`}
            onClick={toggleUsersDD}
            >
              <div className="flex gap-1">
                <FaBookBookmark className="text-20px" />
                Manage Programs
              </div>

              <IoChevronDown className={`text-20px ${usersDD ? "rotate-180" : ""}`}/>
              </div>

              {usersDD &&
              <div className="flex flex-col items-center gap-1 w-100">
                {/* onClick={toggleSideBar} */}
                <div className="flex justify-center h-auto bg-gray-200 border cursor-pointer w-90"
                onClick={
                  () => {
                    setActiveScreen("all Programs");
                    toggleSideBar();
                    toggleUsersDD();
                  }
                  
                }
                >All Programs</div>
                
                <div className="flex justify-center h-auto bg-gray-200 border cursor-pointer w-90"
                onClick={() => {
                  setActiveScreen("add Program");
                  toggleSideBar();
                  toggleUsersDD();
                }}
                >Add Programs</div>

                <div className="flex justify-center h-auto bg-gray-200 border cursor-pointer w-90"
                onClick={() => {
                  setActiveScreen("all Registrations");
                  toggleSideBar();
                  toggleUsersDD();
                }}
                >Registrations</div>
              </div>}
            </div>

            

           
          {/* <div
            className={`flex items-center justify-between gap-1 px-1 cursor-pointer h-40px w-100 text-13px`}
            onClick={() => setActiveScreen("newsletter")}
          >
            <div className="flex items-center gap-1 w-100 h-100" onClick={toggleSideBar}>
              <FaRegNewspaper className="text-20px" />
              Newsletter
            </div>

            <MdKeyboardArrowRight className="text-20px" />
          </div> */}


          <Link
            className={`flex items-center justify-between gap-1 px-1 cursor-pointer h-40px w-100 text-13px`}
            // to={`/edit/${me && me.id}`}
            
          >
            <div className="flex items-center gap-1 w-100 h-100" onClick={toggleSideBar}>
              <LuSettings className="text-20px" />
              Settings
            </div>

            <MdKeyboardArrowRight className="text-20px" />
          </Link>

          <div
            className="flex items-center justify-start gap-1 pl-1 border cursor-pointer h-40px w-100 text-15px bg-vogueRed text-vogueWhite"
            onClick={logoutUser}
          >
            <RiLogoutCircleLine className="text-20px" />
            Logout
          </div>

          {/* <div className="flex items-center justify-start gap-1 pl-1 border cursor-pointer text-vogueRed h-40px w-100 text-15px">
            <BsTrash3 className="text-20px" />
            Delete Account
          </div> */}
        </div>
      ) : (
        ""
      )}


      {/* breadcrumb */}
      {current ?
      <div className="items-center justify-start h-auto gap-2 font-semibold small:flex w-100 text-15px large:hidden">
        <IoIosArrowRoundBack 
        className="cursor-pointer text-30px"
        onClick={toggleSideBar}
        /> {activeScreen[0].toUpperCase() + activeScreen.slice(1)}
        
       ({allPrograms && activeScreen==="all Programs" && allPrograms.length})
      </div> : ""}

      
      {/* mobile active screen */}
      {current ? (
        <div className="flex-col items-center h-auto px-1 py-2 border small:flex w-100 bg-vogueWhite rounded-10 large:hidden text-15px">
          
          
          {/* overview */}
          {activeScreen === "overview" ? (
            <div className="flex flex-col items-start h-auto gap-2 w-100">
              
              
              <div className="flex flex-col items-start justify-between h-auto gap-2 w-100 rounded-5">
                
                <div className="flex flex-col h-auto border w-100">
                  <span className="flex items-center justify-between px-1 font-semibold border w-100 h-50px text-crossLightPurple">
                    Admin Info
                  </span>
                  <div className="flex flex-col h-auto gap-2 p-1 text-15px">
                    <p><span className="font-semibold">Role:</span> {me && me.role==='admin' ? "Admin" : "Super Admin"}</p>
                    <p><span className="font-semibold">Privilege:</span> {me && me.role==="admin" ? "Can manage user engagements and interactions" : "Can manage user engagements and admins"}</p>
                  </div>
                </div>

                <div className="flex flex-col h-auto gap-2 border w-100 rounded-5">
                  <span className="flex items-center justify-between px-1 font-semibold border w-100 h-50px text-crossLightPurple">
                    Basic Info{" "}
                    <Link to={`/user/edit/${me && me.id}`}><MdModeEditOutline className="font-bold text-black cursor-pointer" /></Link>
                  </span>
                  <div className="flex flex-col h-auto gap-2 p-1 text-15px w-100">
                    

                    <div className="flex flex-col h-auto gap-1 w-100">
                      <p><span className="font-bold">Name:</span> {me && me.firstName + " " + me.lastName}</p>
                      <p><span className="font-bold">Phone:</span> {me && me.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}



          {/* add program */}
          {activeScreen === "add Program" ? 

            <AddProgram />
            
            : ""}

        {activeScreen === "all Programs" &&<AllProgramsTable />}
        
        
        {activeScreen === "all Registrations" &&<AllCourseRegsTable />}
        
        {activeScreen === "all Users" &&<AdminUsersTable />}
        
        {/* add User all Users */}
        {activeScreen === "add User" && <AddNewUser />}
        
        
        {activeScreen === "manage Orders" && <AdminOrdersTable />}

        
        {activeScreen === "newsletter" && <AdminNewsletter />}
        
        
        {activeScreen === "enquiries" && <AdminEnquiry />}

        
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default AdminDashboard;
