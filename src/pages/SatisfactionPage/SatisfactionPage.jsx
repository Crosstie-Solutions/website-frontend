import React from "react";
import ButtonSwiper from "../../components/ButtonSwiper/ButtonSwiper";
import MobileButtonSwiper from "../../components/MobileButtonSwiper/MobileButtonSwiper";
import { Link } from "react-router-dom";
import { PHOTOS } from "../../assets/images";
import { HiArrowLongRight } from "react-icons/hi2";
import { FiUsers } from "react-icons/fi";
import { TbMedal2 } from "react-icons/tb";
import { IoMdPersonAdd } from "react-icons/io";

function SatisfactionPage() {
  return (
    <div className="relative flex flex-col items-center justify-start gap-5 pb-5 bg-white text-15px large:w-100vw large:h-auto small:w-100vw small:h-auto large:mt-10 small:mt-12">
      <div className="flex flex-col items-start justify-center text-white large:gap-1 large:w-100vw large:h-500px small:px-0 large:p-0 small:gap-2 small:h-200px small:w-100vw">
        <img src={PHOTOS.about5} alt="photos" className="w-100 h-100" />

        <div className="absolute flex flex-col justify-center gap-2 large:pl-10 large:h-500px large:w-100vw aboutOne small:h-200px small:pl-3">
          <h1 class="large:text-35px large:w-60 large:leading-8 small:leading-5 font-extrabold small:w-80 small:text-20px">
            TRANSFORMING BUSINESS THROUGH PEOPLE DEVELOPMENT
          </h1>

          <p className="font-extralight large:w-50 small:w-90 small:text-13px large:text-15px">
            Discover new skills and interests with our extensive course
            collection
          </p>
        </div>

        {/* <Link className="flex items-center justify-center w-auto gap-1 px-1 mt-2 rounded-10 h-30px bg-buttonOverlay text-15px">
          Download our corporate presentation <BsArrowRight />
        </Link> */}
      </div>

      <div className="flex flex-col items-center h-auto w-100">
        <ButtonSwiper />
        <MobileButtonSwiper />
      </div>

      <div className="flex h-auto large:flex-row large:pr-2 large:gap-5 large:justify-start large:items-center large:w-70 bg-faintPink rounded-10 small:flex-col small:items-center small:w-90vw small:p-1 small:gap-2">
        
        <img
          src={PHOTOS.how}
          alt="photo"
          className="w-250px h-300px rounded-10"
        />

        <hr className="bg-gray-500 large:h-250px large:w-2px small:w-80 small:h-2px" />

        <div className="flex flex-col gap-2 large:h-100 large:w-60 small:h-auto small:w-100">
          
          <div className="flex gap-2 p-1 bg-white rounded large:items-center large:w-100 text-11px large:flex-row small:flex-col">
            
            <div className="flex items-center justify-center rounded-full h-50px w-50px bg-faintPink">
              <FiUsers className="px-1 border rounded-full text-50px text-crossLightPurple" />
            </div>
            <p className="text-crossTextGray">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
              eaque ad maiores tenetur doloribus. Voluptatem, quas similique
              vero eum deleniti,
            </p>
          </div>

          <div className="flex gap-2 p-1 bg-white rounded large:items-center large:w-100 text-11px large:flex-row small:flex-col">
            
            <div className="flex items-center justify-center rounded-full h-50px w-50px bg-faintPink">
              <TbMedal2 className="px-1 border rounded-full text-50px text-crossLightPurple" />
            </div>
            <p className="text-crossTextGray">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
              eaque ad maiores tenetur doloribus. Voluptatem, quas similique
              vero eum deleniti,
            </p>
          </div>

          <div className="flex gap-2 p-1 bg-white rounded large:items-center large:w-100 text-11px large:flex-row small:flex-col">
            <div className="flex items-center justify-center rounded-full h-50px w-50px bg-faintPink">
              <IoMdPersonAdd className="px-1 border rounded-full text-50px text-crossLightPurple" />
            </div>
            <p className="text-crossTextGray">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
              eaque ad maiores tenetur doloribus. Voluptatem, quas similique
              vero eum deleniti,
            </p>
          </div>
        </div>
      </div>




            {/* how it works */}

      <div className="flex flex-col items-center h-auto gap-2 large:mt-5 large:w-70 small:w-90vw">
        <h3 className="font-bold large:text-25px small:text-17px">How does it work?</h3>

        <div className="flex justify-between p-2 border large:flex-row border-crossFooterText rounded-10 w-100 small:flex-col small:gap-3 large:gap-0">
        
            
          <div className="flex flex-col items-center h-auto gap-2 large:w-30 small:w-100">
            
            <div className="flex flex-col items-center h-auto gap-1 text-crossLightPurple w-100">
              <IoMdPersonAdd />
              <div>Resolution</div>
            </div>

            <p className="text-center text-crossTextGray">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
              eaque ad maiores tenetur doloribus. Voluptatem, quas similique
              vero eum deleniti,
            </p>
          </div>

          <div className="flex flex-col items-center h-auto gap-2 large:w-30 small:w-100">
            
            <div className="flex flex-col items-center h-auto gap-1 text-crossLightPurple w-100">
              <IoMdPersonAdd />
              <div>Resolution</div>
            </div>

            <p className="text-center text-crossTextGray">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
              eaque ad maiores tenetur doloribus. Voluptatem, quas similique
              vero eum deleniti,
            </p>
          </div>

          <div className="flex flex-col items-center h-auto gap-2 large:w-30 small:w-100">
            
            <div className="flex flex-col items-center h-auto gap-1 text-crossLightPurple w-100">
              <IoMdPersonAdd />
              <div>Resolution</div>
            </div>

            <p className="text-center text-crossTextGray">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
              eaque ad maiores tenetur doloribus. Voluptatem, quas similique
              vero eum deleniti,
            </p>
          </div>
        </div>
      </div>



            {/* message from CEO */}
      <div className="flex flex-col items-center h-auto gap-2 large:mt-5 large:w-70 small:w-90vw">
        <h3 className="font-bold large:text-25px small:text-17px">A message from our CEO</h3>

        <div className="flex large:justify-between large:p-2 large:items-center large:flex-row border-crossFooterText rounded-10 w-100 small:flex-col small:gap-2 large:gap-0 small:p-1 small:items-center">
            
            <img src={PHOTOS.adebayo} alt="CEO" className="large:relative h-300px w-250px rounded-tl-3xl rounded-br-3xl large:left-5"/>
            
            <div className="border large:w-70 bg-[#FFF3F3] flex flex-col gap-2 large:pr-2 large:py-2 large:pl-10 small:p-2 small:rounded">
                <h5 className="font-bold">Dear Kustomer</h5>
                <p className="text-crossTextGray">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque ad maiores tenetur doloribus. Voluptatem, quas similique vero eum deleniti,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque ad maiores tenetur doloribus. Voluptatem, quas similique vero eum eaque ad maiores tenetur doloribus. Voluptatem, quas similique vero eum deleniti,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque ad maiores tenetur doloribus. Voluptatem, quas similique vero eum deleniti,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque ad maiores tenetur doloribus. Voluptatem, quas similique vero eum deleniti,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque ad maiores tenetur doloribus. Voluptatem, quas similique vero eum </p>
            </div>
        </div>
      </div>





      <div className="flex flex-col items-center h-auto gap-1 mt-3 w-100">
        <h4 className="font-bold large:text-20px small:text-17px">
          Ready To Get Started?
        </h4>
        <Link
          to="/our-courses"
          className="flex items-center w-auto gap-1 p-1 text-white rounded h-40px bg-crossLightPurple"
        >
          Explore Our Courses <HiArrowLongRight className="text-20px" />
        </Link>
      </div>
    </div>
  );
}

export default SatisfactionPage;
